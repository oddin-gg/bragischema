// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.19.3
// source: bragi/bragi_service.proto

package bragi

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	data_stream "oddin.gg/bragi/data_stream"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// BragiClient is the client API for Bragi service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type BragiClient interface {
	// Sports gRPC remote call returning SportsResponse
	Sports(ctx context.Context, in *SportsRequest, opts ...grpc.CallOption) (*SportsResponse, error)
	// Tournaments gRPC remote call returning TournamentResponse
	Tournaments(ctx context.Context, in *TournamentsRequest, opts ...grpc.CallOption) (*TournamentResponse, error)
	// TournamentInfo gRPC remote call returning TournamentInfoResponse
	TournamentInfo(ctx context.Context, in *TournamentInfoRequest, opts ...grpc.CallOption) (*TournamentInfoResponse, error)
	// TeamHistoricalStatistics gRPC remote call returning HistoricalStatisticsResponse
	TeamHistoricalStatistics(ctx context.Context, in *TeamHistoricalStatisticsRequest, opts ...grpc.CallOption) (*HistoricalStatisticsResponse, error)
	// LastFiveEncounters gRPC remote call returning LastFiveEncountersResponse
	LastFiveEncounters(ctx context.Context, in *LastFiveEncountersRequest, opts ...grpc.CallOption) (*LastFiveEncountersResponse, error)
	// PostMapStatistics gRPC remote call returning PostMapStatisticsResponse
	PostMapStatistics(ctx context.Context, in *PostMapStatisticsRequest, opts ...grpc.CallOption) (*PostMapStatisticsResponse, error)
	// TournamentStatistics gRPC remote call returning TournamentStatisticsResponse
	TournamentStatistics(ctx context.Context, in *TournamentStatisticsRequest, opts ...grpc.CallOption) (*TournamentStatisticsResponse, error)
	// TeamTournamentStatistics gRPC remote call returning TeamTournamentStatisticsResponse
	TeamTournamentStatistics(ctx context.Context, in *TeamTournamentStatisticsRequest, opts ...grpc.CallOption) (*TeamTournamentStatisticsResponse, error)
	// PlayerStatisticsAccordingRole gRPC remote call returning PlayerStatisticsAccordingRoleResponse
	PlayerStatisticsAccordingRole(ctx context.Context, in *PlayerStatisticsAccordingRoleRequest, opts ...grpc.CallOption) (*PlayerStatisticsAccordingRoleResponse, error)
	// LiveDataFeed gRPC stream returning LiveDataFeedMessage one direction stream
	LiveDataFeed(ctx context.Context, in *data_stream.LiveDataFeedRequest, opts ...grpc.CallOption) (Bragi_LiveDataFeedClient, error)
}

type bragiClient struct {
	cc grpc.ClientConnInterface
}

func NewBragiClient(cc grpc.ClientConnInterface) BragiClient {
	return &bragiClient{cc}
}

func (c *bragiClient) Sports(ctx context.Context, in *SportsRequest, opts ...grpc.CallOption) (*SportsResponse, error) {
	out := new(SportsResponse)
	err := c.cc.Invoke(ctx, "/bragi.Bragi/Sports", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bragiClient) Tournaments(ctx context.Context, in *TournamentsRequest, opts ...grpc.CallOption) (*TournamentResponse, error) {
	out := new(TournamentResponse)
	err := c.cc.Invoke(ctx, "/bragi.Bragi/Tournaments", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bragiClient) TournamentInfo(ctx context.Context, in *TournamentInfoRequest, opts ...grpc.CallOption) (*TournamentInfoResponse, error) {
	out := new(TournamentInfoResponse)
	err := c.cc.Invoke(ctx, "/bragi.Bragi/TournamentInfo", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bragiClient) TeamHistoricalStatistics(ctx context.Context, in *TeamHistoricalStatisticsRequest, opts ...grpc.CallOption) (*HistoricalStatisticsResponse, error) {
	out := new(HistoricalStatisticsResponse)
	err := c.cc.Invoke(ctx, "/bragi.Bragi/TeamHistoricalStatistics", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bragiClient) LastFiveEncounters(ctx context.Context, in *LastFiveEncountersRequest, opts ...grpc.CallOption) (*LastFiveEncountersResponse, error) {
	out := new(LastFiveEncountersResponse)
	err := c.cc.Invoke(ctx, "/bragi.Bragi/LastFiveEncounters", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bragiClient) PostMapStatistics(ctx context.Context, in *PostMapStatisticsRequest, opts ...grpc.CallOption) (*PostMapStatisticsResponse, error) {
	out := new(PostMapStatisticsResponse)
	err := c.cc.Invoke(ctx, "/bragi.Bragi/PostMapStatistics", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bragiClient) TournamentStatistics(ctx context.Context, in *TournamentStatisticsRequest, opts ...grpc.CallOption) (*TournamentStatisticsResponse, error) {
	out := new(TournamentStatisticsResponse)
	err := c.cc.Invoke(ctx, "/bragi.Bragi/TournamentStatistics", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bragiClient) TeamTournamentStatistics(ctx context.Context, in *TeamTournamentStatisticsRequest, opts ...grpc.CallOption) (*TeamTournamentStatisticsResponse, error) {
	out := new(TeamTournamentStatisticsResponse)
	err := c.cc.Invoke(ctx, "/bragi.Bragi/TeamTournamentStatistics", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bragiClient) PlayerStatisticsAccordingRole(ctx context.Context, in *PlayerStatisticsAccordingRoleRequest, opts ...grpc.CallOption) (*PlayerStatisticsAccordingRoleResponse, error) {
	out := new(PlayerStatisticsAccordingRoleResponse)
	err := c.cc.Invoke(ctx, "/bragi.Bragi/PlayerStatisticsAccordingRole", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bragiClient) LiveDataFeed(ctx context.Context, in *data_stream.LiveDataFeedRequest, opts ...grpc.CallOption) (Bragi_LiveDataFeedClient, error) {
	stream, err := c.cc.NewStream(ctx, &Bragi_ServiceDesc.Streams[0], "/bragi.Bragi/LiveDataFeed", opts...)
	if err != nil {
		return nil, err
	}
	x := &bragiLiveDataFeedClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type Bragi_LiveDataFeedClient interface {
	Recv() (*data_stream.LiveDataFeedMessage, error)
	grpc.ClientStream
}

type bragiLiveDataFeedClient struct {
	grpc.ClientStream
}

func (x *bragiLiveDataFeedClient) Recv() (*data_stream.LiveDataFeedMessage, error) {
	m := new(data_stream.LiveDataFeedMessage)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// BragiServer is the server API for Bragi service.
// All implementations must embed UnimplementedBragiServer
// for forward compatibility
type BragiServer interface {
	// Sports gRPC remote call returning SportsResponse
	Sports(context.Context, *SportsRequest) (*SportsResponse, error)
	// Tournaments gRPC remote call returning TournamentResponse
	Tournaments(context.Context, *TournamentsRequest) (*TournamentResponse, error)
	// TournamentInfo gRPC remote call returning TournamentInfoResponse
	TournamentInfo(context.Context, *TournamentInfoRequest) (*TournamentInfoResponse, error)
	// TeamHistoricalStatistics gRPC remote call returning HistoricalStatisticsResponse
	TeamHistoricalStatistics(context.Context, *TeamHistoricalStatisticsRequest) (*HistoricalStatisticsResponse, error)
	// LastFiveEncounters gRPC remote call returning LastFiveEncountersResponse
	LastFiveEncounters(context.Context, *LastFiveEncountersRequest) (*LastFiveEncountersResponse, error)
	// PostMapStatistics gRPC remote call returning PostMapStatisticsResponse
	PostMapStatistics(context.Context, *PostMapStatisticsRequest) (*PostMapStatisticsResponse, error)
	// TournamentStatistics gRPC remote call returning TournamentStatisticsResponse
	TournamentStatistics(context.Context, *TournamentStatisticsRequest) (*TournamentStatisticsResponse, error)
	// TeamTournamentStatistics gRPC remote call returning TeamTournamentStatisticsResponse
	TeamTournamentStatistics(context.Context, *TeamTournamentStatisticsRequest) (*TeamTournamentStatisticsResponse, error)
	// PlayerStatisticsAccordingRole gRPC remote call returning PlayerStatisticsAccordingRoleResponse
	PlayerStatisticsAccordingRole(context.Context, *PlayerStatisticsAccordingRoleRequest) (*PlayerStatisticsAccordingRoleResponse, error)
	// LiveDataFeed gRPC stream returning LiveDataFeedMessage one direction stream
	LiveDataFeed(*data_stream.LiveDataFeedRequest, Bragi_LiveDataFeedServer) error
	mustEmbedUnimplementedBragiServer()
}

// UnimplementedBragiServer must be embedded to have forward compatible implementations.
type UnimplementedBragiServer struct {
}

func (UnimplementedBragiServer) Sports(context.Context, *SportsRequest) (*SportsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Sports not implemented")
}
func (UnimplementedBragiServer) Tournaments(context.Context, *TournamentsRequest) (*TournamentResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Tournaments not implemented")
}
func (UnimplementedBragiServer) TournamentInfo(context.Context, *TournamentInfoRequest) (*TournamentInfoResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method TournamentInfo not implemented")
}
func (UnimplementedBragiServer) TeamHistoricalStatistics(context.Context, *TeamHistoricalStatisticsRequest) (*HistoricalStatisticsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method TeamHistoricalStatistics not implemented")
}
func (UnimplementedBragiServer) LastFiveEncounters(context.Context, *LastFiveEncountersRequest) (*LastFiveEncountersResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method LastFiveEncounters not implemented")
}
func (UnimplementedBragiServer) PostMapStatistics(context.Context, *PostMapStatisticsRequest) (*PostMapStatisticsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PostMapStatistics not implemented")
}
func (UnimplementedBragiServer) TournamentStatistics(context.Context, *TournamentStatisticsRequest) (*TournamentStatisticsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method TournamentStatistics not implemented")
}
func (UnimplementedBragiServer) TeamTournamentStatistics(context.Context, *TeamTournamentStatisticsRequest) (*TeamTournamentStatisticsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method TeamTournamentStatistics not implemented")
}
func (UnimplementedBragiServer) PlayerStatisticsAccordingRole(context.Context, *PlayerStatisticsAccordingRoleRequest) (*PlayerStatisticsAccordingRoleResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PlayerStatisticsAccordingRole not implemented")
}
func (UnimplementedBragiServer) LiveDataFeed(*data_stream.LiveDataFeedRequest, Bragi_LiveDataFeedServer) error {
	return status.Errorf(codes.Unimplemented, "method LiveDataFeed not implemented")
}
func (UnimplementedBragiServer) mustEmbedUnimplementedBragiServer() {}

// UnsafeBragiServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to BragiServer will
// result in compilation errors.
type UnsafeBragiServer interface {
	mustEmbedUnimplementedBragiServer()
}

func RegisterBragiServer(s grpc.ServiceRegistrar, srv BragiServer) {
	s.RegisterService(&Bragi_ServiceDesc, srv)
}

func _Bragi_Sports_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SportsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BragiServer).Sports(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/bragi.Bragi/Sports",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BragiServer).Sports(ctx, req.(*SportsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Bragi_Tournaments_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TournamentsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BragiServer).Tournaments(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/bragi.Bragi/Tournaments",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BragiServer).Tournaments(ctx, req.(*TournamentsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Bragi_TournamentInfo_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TournamentInfoRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BragiServer).TournamentInfo(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/bragi.Bragi/TournamentInfo",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BragiServer).TournamentInfo(ctx, req.(*TournamentInfoRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Bragi_TeamHistoricalStatistics_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TeamHistoricalStatisticsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BragiServer).TeamHistoricalStatistics(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/bragi.Bragi/TeamHistoricalStatistics",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BragiServer).TeamHistoricalStatistics(ctx, req.(*TeamHistoricalStatisticsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Bragi_LastFiveEncounters_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(LastFiveEncountersRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BragiServer).LastFiveEncounters(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/bragi.Bragi/LastFiveEncounters",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BragiServer).LastFiveEncounters(ctx, req.(*LastFiveEncountersRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Bragi_PostMapStatistics_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PostMapStatisticsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BragiServer).PostMapStatistics(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/bragi.Bragi/PostMapStatistics",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BragiServer).PostMapStatistics(ctx, req.(*PostMapStatisticsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Bragi_TournamentStatistics_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TournamentStatisticsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BragiServer).TournamentStatistics(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/bragi.Bragi/TournamentStatistics",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BragiServer).TournamentStatistics(ctx, req.(*TournamentStatisticsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Bragi_TeamTournamentStatistics_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TeamTournamentStatisticsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BragiServer).TeamTournamentStatistics(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/bragi.Bragi/TeamTournamentStatistics",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BragiServer).TeamTournamentStatistics(ctx, req.(*TeamTournamentStatisticsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Bragi_PlayerStatisticsAccordingRole_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PlayerStatisticsAccordingRoleRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BragiServer).PlayerStatisticsAccordingRole(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/bragi.Bragi/PlayerStatisticsAccordingRole",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BragiServer).PlayerStatisticsAccordingRole(ctx, req.(*PlayerStatisticsAccordingRoleRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Bragi_LiveDataFeed_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(data_stream.LiveDataFeedRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(BragiServer).LiveDataFeed(m, &bragiLiveDataFeedServer{stream})
}

type Bragi_LiveDataFeedServer interface {
	Send(*data_stream.LiveDataFeedMessage) error
	grpc.ServerStream
}

type bragiLiveDataFeedServer struct {
	grpc.ServerStream
}

func (x *bragiLiveDataFeedServer) Send(m *data_stream.LiveDataFeedMessage) error {
	return x.ServerStream.SendMsg(m)
}

// Bragi_ServiceDesc is the grpc.ServiceDesc for Bragi service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Bragi_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "bragi.Bragi",
	HandlerType: (*BragiServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Sports",
			Handler:    _Bragi_Sports_Handler,
		},
		{
			MethodName: "Tournaments",
			Handler:    _Bragi_Tournaments_Handler,
		},
		{
			MethodName: "TournamentInfo",
			Handler:    _Bragi_TournamentInfo_Handler,
		},
		{
			MethodName: "TeamHistoricalStatistics",
			Handler:    _Bragi_TeamHistoricalStatistics_Handler,
		},
		{
			MethodName: "LastFiveEncounters",
			Handler:    _Bragi_LastFiveEncounters_Handler,
		},
		{
			MethodName: "PostMapStatistics",
			Handler:    _Bragi_PostMapStatistics_Handler,
		},
		{
			MethodName: "TournamentStatistics",
			Handler:    _Bragi_TournamentStatistics_Handler,
		},
		{
			MethodName: "TeamTournamentStatistics",
			Handler:    _Bragi_TeamTournamentStatistics_Handler,
		},
		{
			MethodName: "PlayerStatisticsAccordingRole",
			Handler:    _Bragi_PlayerStatisticsAccordingRole_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "LiveDataFeed",
			Handler:       _Bragi_LiveDataFeed_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "bragi/bragi_service.proto",
}
