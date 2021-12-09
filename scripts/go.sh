#!/usr/bin/env bash

echo "GENERATING GO"

rm -rf ./go/*

protoc ./proto/bragi/*.proto ./proto/bragi/*/*.proto -I ./proto --go_out=./go --go-grpc_out=./go

if [ "$?" != "0" ];
then
  echo "protobuf files generation failed. \n"
  exit 1
fi

if [ "$?" != "0" ];
then
  echo "protobuf files generation failed. \n"
  exit 1
fi

echo "GO DONE"
