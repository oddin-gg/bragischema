// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var bragi_bragi_pb = require('../bragi/bragi_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_bragi_HistoricalStatisticsResponse(arg) {
  if (!(arg instanceof bragi_bragi_pb.HistoricalStatisticsResponse)) {
    throw new Error('Expected argument of type bragi.HistoricalStatisticsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_HistoricalStatisticsResponse(buffer_arg) {
  return bragi_bragi_pb.HistoricalStatisticsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_LastFiveEncountersRequest(arg) {
  if (!(arg instanceof bragi_bragi_pb.LastFiveEncountersRequest)) {
    throw new Error('Expected argument of type bragi.LastFiveEncountersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_LastFiveEncountersRequest(buffer_arg) {
  return bragi_bragi_pb.LastFiveEncountersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_LastFiveEncountersResponse(arg) {
  if (!(arg instanceof bragi_bragi_pb.LastFiveEncountersResponse)) {
    throw new Error('Expected argument of type bragi.LastFiveEncountersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_LastFiveEncountersResponse(buffer_arg) {
  return bragi_bragi_pb.LastFiveEncountersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_PlayerStatisticsAccordingRoleRequest(arg) {
  if (!(arg instanceof bragi_bragi_pb.PlayerStatisticsAccordingRoleRequest)) {
    throw new Error('Expected argument of type bragi.PlayerStatisticsAccordingRoleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_PlayerStatisticsAccordingRoleRequest(buffer_arg) {
  return bragi_bragi_pb.PlayerStatisticsAccordingRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_PlayerStatisticsAccordingRoleResponse(arg) {
  if (!(arg instanceof bragi_bragi_pb.PlayerStatisticsAccordingRoleResponse)) {
    throw new Error('Expected argument of type bragi.PlayerStatisticsAccordingRoleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_PlayerStatisticsAccordingRoleResponse(buffer_arg) {
  return bragi_bragi_pb.PlayerStatisticsAccordingRoleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_PostMapStatisticsRequest(arg) {
  if (!(arg instanceof bragi_bragi_pb.PostMapStatisticsRequest)) {
    throw new Error('Expected argument of type bragi.PostMapStatisticsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_PostMapStatisticsRequest(buffer_arg) {
  return bragi_bragi_pb.PostMapStatisticsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_PostMapStatisticsResponse(arg) {
  if (!(arg instanceof bragi_bragi_pb.PostMapStatisticsResponse)) {
    throw new Error('Expected argument of type bragi.PostMapStatisticsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_PostMapStatisticsResponse(buffer_arg) {
  return bragi_bragi_pb.PostMapStatisticsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_SportsRequest(arg) {
  if (!(arg instanceof bragi_bragi_pb.SportsRequest)) {
    throw new Error('Expected argument of type bragi.SportsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_SportsRequest(buffer_arg) {
  return bragi_bragi_pb.SportsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_SportsResponse(arg) {
  if (!(arg instanceof bragi_bragi_pb.SportsResponse)) {
    throw new Error('Expected argument of type bragi.SportsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_SportsResponse(buffer_arg) {
  return bragi_bragi_pb.SportsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_TeamHistoricalStatisticsRequest(arg) {
  if (!(arg instanceof bragi_bragi_pb.TeamHistoricalStatisticsRequest)) {
    throw new Error('Expected argument of type bragi.TeamHistoricalStatisticsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_TeamHistoricalStatisticsRequest(buffer_arg) {
  return bragi_bragi_pb.TeamHistoricalStatisticsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_TeamTournamentStatisticsRequest(arg) {
  if (!(arg instanceof bragi_bragi_pb.TeamTournamentStatisticsRequest)) {
    throw new Error('Expected argument of type bragi.TeamTournamentStatisticsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_TeamTournamentStatisticsRequest(buffer_arg) {
  return bragi_bragi_pb.TeamTournamentStatisticsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_TeamTournamentStatisticsResponse(arg) {
  if (!(arg instanceof bragi_bragi_pb.TeamTournamentStatisticsResponse)) {
    throw new Error('Expected argument of type bragi.TeamTournamentStatisticsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_TeamTournamentStatisticsResponse(buffer_arg) {
  return bragi_bragi_pb.TeamTournamentStatisticsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_TournamentInfoRequest(arg) {
  if (!(arg instanceof bragi_bragi_pb.TournamentInfoRequest)) {
    throw new Error('Expected argument of type bragi.TournamentInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_TournamentInfoRequest(buffer_arg) {
  return bragi_bragi_pb.TournamentInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_TournamentInfoResponse(arg) {
  if (!(arg instanceof bragi_bragi_pb.TournamentInfoResponse)) {
    throw new Error('Expected argument of type bragi.TournamentInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_TournamentInfoResponse(buffer_arg) {
  return bragi_bragi_pb.TournamentInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_TournamentResponse(arg) {
  if (!(arg instanceof bragi_bragi_pb.TournamentResponse)) {
    throw new Error('Expected argument of type bragi.TournamentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_TournamentResponse(buffer_arg) {
  return bragi_bragi_pb.TournamentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_TournamentStatisticsRequest(arg) {
  if (!(arg instanceof bragi_bragi_pb.TournamentStatisticsRequest)) {
    throw new Error('Expected argument of type bragi.TournamentStatisticsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_TournamentStatisticsRequest(buffer_arg) {
  return bragi_bragi_pb.TournamentStatisticsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_TournamentStatisticsResponse(arg) {
  if (!(arg instanceof bragi_bragi_pb.TournamentStatisticsResponse)) {
    throw new Error('Expected argument of type bragi.TournamentStatisticsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_TournamentStatisticsResponse(buffer_arg) {
  return bragi_bragi_pb.TournamentStatisticsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_TournamentsRequest(arg) {
  if (!(arg instanceof bragi_bragi_pb.TournamentsRequest)) {
    throw new Error('Expected argument of type bragi.TournamentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_TournamentsRequest(buffer_arg) {
  return bragi_bragi_pb.TournamentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var BragiGrpcService = exports.BragiGrpcService = {
  sports: {
    path: '/bragi.BragiGrpc/Sports',
    requestStream: false,
    responseStream: false,
    requestType: bragi_bragi_pb.SportsRequest,
    responseType: bragi_bragi_pb.SportsResponse,
    requestSerialize: serialize_bragi_SportsRequest,
    requestDeserialize: deserialize_bragi_SportsRequest,
    responseSerialize: serialize_bragi_SportsResponse,
    responseDeserialize: deserialize_bragi_SportsResponse,
  },
  tournaments: {
    path: '/bragi.BragiGrpc/Tournaments',
    requestStream: false,
    responseStream: false,
    requestType: bragi_bragi_pb.TournamentsRequest,
    responseType: bragi_bragi_pb.TournamentResponse,
    requestSerialize: serialize_bragi_TournamentsRequest,
    requestDeserialize: deserialize_bragi_TournamentsRequest,
    responseSerialize: serialize_bragi_TournamentResponse,
    responseDeserialize: deserialize_bragi_TournamentResponse,
  },
  tournamentInfo: {
    path: '/bragi.BragiGrpc/TournamentInfo',
    requestStream: false,
    responseStream: false,
    requestType: bragi_bragi_pb.TournamentInfoRequest,
    responseType: bragi_bragi_pb.TournamentInfoResponse,
    requestSerialize: serialize_bragi_TournamentInfoRequest,
    requestDeserialize: deserialize_bragi_TournamentInfoRequest,
    responseSerialize: serialize_bragi_TournamentInfoResponse,
    responseDeserialize: deserialize_bragi_TournamentInfoResponse,
  },
  teamHistoricalStatistics: {
    path: '/bragi.BragiGrpc/TeamHistoricalStatistics',
    requestStream: false,
    responseStream: false,
    requestType: bragi_bragi_pb.TeamHistoricalStatisticsRequest,
    responseType: bragi_bragi_pb.HistoricalStatisticsResponse,
    requestSerialize: serialize_bragi_TeamHistoricalStatisticsRequest,
    requestDeserialize: deserialize_bragi_TeamHistoricalStatisticsRequest,
    responseSerialize: serialize_bragi_HistoricalStatisticsResponse,
    responseDeserialize: deserialize_bragi_HistoricalStatisticsResponse,
  },
  lastFiveEncounters: {
    path: '/bragi.BragiGrpc/LastFiveEncounters',
    requestStream: false,
    responseStream: false,
    requestType: bragi_bragi_pb.LastFiveEncountersRequest,
    responseType: bragi_bragi_pb.LastFiveEncountersResponse,
    requestSerialize: serialize_bragi_LastFiveEncountersRequest,
    requestDeserialize: deserialize_bragi_LastFiveEncountersRequest,
    responseSerialize: serialize_bragi_LastFiveEncountersResponse,
    responseDeserialize: deserialize_bragi_LastFiveEncountersResponse,
  },
  postMapStatistics: {
    path: '/bragi.BragiGrpc/PostMapStatistics',
    requestStream: false,
    responseStream: false,
    requestType: bragi_bragi_pb.PostMapStatisticsRequest,
    responseType: bragi_bragi_pb.PostMapStatisticsResponse,
    requestSerialize: serialize_bragi_PostMapStatisticsRequest,
    requestDeserialize: deserialize_bragi_PostMapStatisticsRequest,
    responseSerialize: serialize_bragi_PostMapStatisticsResponse,
    responseDeserialize: deserialize_bragi_PostMapStatisticsResponse,
  },
  tournamentStatistics: {
    path: '/bragi.BragiGrpc/TournamentStatistics',
    requestStream: false,
    responseStream: false,
    requestType: bragi_bragi_pb.TournamentStatisticsRequest,
    responseType: bragi_bragi_pb.TournamentStatisticsResponse,
    requestSerialize: serialize_bragi_TournamentStatisticsRequest,
    requestDeserialize: deserialize_bragi_TournamentStatisticsRequest,
    responseSerialize: serialize_bragi_TournamentStatisticsResponse,
    responseDeserialize: deserialize_bragi_TournamentStatisticsResponse,
  },
  teamTournamentStatistics: {
    path: '/bragi.BragiGrpc/TeamTournamentStatistics',
    requestStream: false,
    responseStream: false,
    requestType: bragi_bragi_pb.TeamTournamentStatisticsRequest,
    responseType: bragi_bragi_pb.TeamTournamentStatisticsResponse,
    requestSerialize: serialize_bragi_TeamTournamentStatisticsRequest,
    requestDeserialize: deserialize_bragi_TeamTournamentStatisticsRequest,
    responseSerialize: serialize_bragi_TeamTournamentStatisticsResponse,
    responseDeserialize: deserialize_bragi_TeamTournamentStatisticsResponse,
  },
  playerStatisticsAccordingRole: {
    path: '/bragi.BragiGrpc/PlayerStatisticsAccordingRole',
    requestStream: false,
    responseStream: false,
    requestType: bragi_bragi_pb.PlayerStatisticsAccordingRoleRequest,
    responseType: bragi_bragi_pb.PlayerStatisticsAccordingRoleResponse,
    requestSerialize: serialize_bragi_PlayerStatisticsAccordingRoleRequest,
    requestDeserialize: deserialize_bragi_PlayerStatisticsAccordingRoleRequest,
    responseSerialize: serialize_bragi_PlayerStatisticsAccordingRoleResponse,
    responseDeserialize: deserialize_bragi_PlayerStatisticsAccordingRoleResponse,
  },
};

exports.BragiGrpcClient = grpc.makeGenericClientConstructor(BragiGrpcService);
