package main

import (
	"context"
	"crypto/tls"
	"crypto/x509"
	"fmt"
	"io"
	"os"
	"strings"
	"time"

	"github.com/oddin-gg/bragischema/go/oddin.gg/bragi"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
	"google.golang.org/grpc/metadata"
)

func main() {
	url := strings.Trim(os.Getenv("URL"), " ")
	if url == "" {
		panic("missing 'URL' env variable")
	}

	accessToken := strings.Trim(os.Getenv("TOKEN"), " ")
	if accessToken == "" {
		panic("missing 'TOKEN' env variable")
	}

	var tlsCfg tls.Config
	var err error
	tlsCfg.RootCAs, err = x509.SystemCertPool()
	if err != nil {
		tlsCfg.RootCAs = x509.NewCertPool()
	}

	connCtx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	conn, err := grpc.DialContext(
		connCtx,
		url,
		grpc.WithBlock(),
		grpc.WithTransportCredentials(credentials.NewTLS(&tlsCfg)),
	)
	if err != nil {
		panic(err)
	}

	ctx := metadata.NewOutgoingContext(context.Background(), metadata.MD{
		"token": {accessToken},
	})

	closeCh := make(chan bool, 1)
	client := bragi.NewBragiClient(conn)
	stream, err := client.LiveDataFeed(ctx, &bragi.LiveDataFeedRequest{})
	if err != nil {
		panic(err)
	}

	fmt.Println("Stream CONNECTED")

	go func() {
		for {
			// receive data from stream
			req, err := stream.Recv()
			switch {
			case err == io.EOF:
				fmt.Println("Stream CLOSED")
				closeCh <- true
				return

			case err != nil:
				panic(err)

			case req.GetKeepalive() != nil:
				fmt.Println("Keepalive received")
				continue

			case req.GetMatch() != nil:
				fmt.Println("Match data received")
				continue
			}
		}
	}()

	closeExampleTicker := time.NewTimer(time.Second * 60)

	select {

	case <-closeExampleTicker.C:
		fmt.Println("Closing example")
		closeCh <- true

	case <-closeCh:
		if err := conn.Close(); err != nil {
			panic(err)
		}
		fmt.Println("Stream CLOSED")
		return
	}

	fmt.Println("Example Finished")
}
