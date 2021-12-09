// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var bragi_historical_statistics_statistics_pb = require('../bragi/historical_statistics/statistics_pb.js');
var bragi_stream_data_feed_pb = require('../bragi/stream/data_feed_pb.js');

function serialize_bragi_live_LiveDataFeedMessage(arg) {
  if (!(arg instanceof bragi_stream_data_feed_pb.LiveDataFeedMessage)) {
    throw new Error('Expected argument of type bragi.live.LiveDataFeedMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_live_LiveDataFeedMessage(buffer_arg) {
  return bragi_stream_data_feed_pb.LiveDataFeedMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_live_LiveDataFeedRequest(arg) {
  if (!(arg instanceof bragi_stream_data_feed_pb.LiveDataFeedRequest)) {
    throw new Error('Expected argument of type bragi.live.LiveDataFeedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_live_LiveDataFeedRequest(buffer_arg) {
  return bragi_stream_data_feed_pb.LiveDataFeedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_statistics_HistoricalStatisticsResponse(arg) {
  if (!(arg instanceof bragi_historical_statistics_statistics_pb.HistoricalStatisticsResponse)) {
    throw new Error('Expected argument of type bragi.statistics.HistoricalStatisticsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_statistics_HistoricalStatisticsResponse(buffer_arg) {
  return bragi_historical_statistics_statistics_pb.HistoricalStatisticsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_statistics_LastFiveEncountersRequest(arg) {
  if (!(arg instanceof bragi_historical_statistics_statistics_pb.LastFiveEncountersRequest)) {
    throw new Error('Expected argument of type bragi.statistics.LastFiveEncountersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_statistics_LastFiveEncountersRequest(buffer_arg) {
  return bragi_historical_statistics_statistics_pb.LastFiveEncountersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_statistics_LastFiveEncountersResponse(arg) {
  if (!(arg instanceof bragi_historical_statistics_statistics_pb.LastFiveEncountersResponse)) {
    throw new Error('Expected argument of type bragi.statistics.LastFiveEncountersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_statistics_LastFiveEncountersResponse(buffer_arg) {
  return bragi_historical_statistics_statistics_pb.LastFiveEncountersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_statistics_PlayerStatisticsAccordingRoleRequest(arg) {
  if (!(arg instanceof bragi_historical_statistics_statistics_pb.PlayerStatisticsAccordingRoleRequest)) {
    throw new Error('Expected argument of type bragi.statistics.PlayerStatisticsAccordingRoleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_statistics_PlayerStatisticsAccordingRoleRequest(buffer_arg) {
  return bragi_historical_statistics_statistics_pb.PlayerStatisticsAccordingRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_statistics_PlayerStatisticsAccordingRoleResponse(arg) {
  if (!(arg instanceof bragi_historical_statistics_statistics_pb.PlayerStatisticsAccordingRoleResponse)) {
    throw new Error('Expected argument of type bragi.statistics.PlayerStatisticsAccordingRoleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_statistics_PlayerStatisticsAccordingRoleResponse(buffer_arg) {
  return bragi_historical_statistics_statistics_pb.PlayerStatisticsAccordingRoleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_statistics_PostMapStatisticsRequest(arg) {
  if (!(arg instanceof bragi_historical_statistics_statistics_pb.PostMapStatisticsRequest)) {
    throw new Error('Expected argument of type bragi.statistics.PostMapStatisticsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_statistics_PostMapStatisticsRequest(buffer_arg) {
  return bragi_historical_statistics_statistics_pb.PostMapStatisticsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_statistics_PostMapStatisticsResponse(arg) {
  if (!(arg instanceof bragi_historical_statistics_statistics_pb.PostMapStatisticsResponse)) {
    throw new Error('Expected argument of type bragi.statistics.PostMapStatisticsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_statistics_PostMapStatisticsResponse(buffer_arg) {
  return bragi_historical_statistics_statistics_pb.PostMapStatisticsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_statistics_SportsRequest(arg) {
  if (!(arg instanceof bragi_historical_statistics_statistics_pb.SportsRequest)) {
    throw new Error('Expected argument of type bragi.statistics.SportsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_statistics_SportsRequest(buffer_arg) {
  return bragi_historical_statistics_statistics_pb.SportsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_statistics_SportsResponse(arg) {
  if (!(arg instanceof bragi_historical_statistics_statistics_pb.SportsResponse)) {
    throw new Error('Expected argument of type bragi.statistics.SportsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_statistics_SportsResponse(buffer_arg) {
  return bragi_historical_statistics_statistics_pb.SportsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_statistics_TeamHistoricalStatisticsRequest(arg) {
  if (!(arg instanceof bragi_historical_statistics_statistics_pb.TeamHistoricalStatisticsRequest)) {
    throw new Error('Expected argument of type bragi.statistics.TeamHistoricalStatisticsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_statistics_TeamHistoricalStatisticsRequest(buffer_arg) {
  return bragi_historical_statistics_statistics_pb.TeamHistoricalStatisticsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_statistics_TeamTournamentStatisticsRequest(arg) {
  if (!(arg instanceof bragi_historical_statistics_statistics_pb.TeamTournamentStatisticsRequest)) {
    throw new Error('Expected argument of type bragi.statistics.TeamTournamentStatisticsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_statistics_TeamTournamentStatisticsRequest(buffer_arg) {
  return bragi_historical_statistics_statistics_pb.TeamTournamentStatisticsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_statistics_TeamTournamentStatisticsResponse(arg) {
  if (!(arg instanceof bragi_historical_statistics_statistics_pb.TeamTournamentStatisticsResponse)) {
    throw new Error('Expected argument of type bragi.statistics.TeamTournamentStatisticsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_statistics_TeamTournamentStatisticsResponse(buffer_arg) {
  return bragi_historical_statistics_statistics_pb.TeamTournamentStatisticsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_statistics_TournamentInfoRequest(arg) {
  if (!(arg instanceof bragi_historical_statistics_statistics_pb.TournamentInfoRequest)) {
    throw new Error('Expected argument of type bragi.statistics.TournamentInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_statistics_TournamentInfoRequest(buffer_arg) {
  return bragi_historical_statistics_statistics_pb.TournamentInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_statistics_TournamentInfoResponse(arg) {
  if (!(arg instanceof bragi_historical_statistics_statistics_pb.TournamentInfoResponse)) {
    throw new Error('Expected argument of type bragi.statistics.TournamentInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_statistics_TournamentInfoResponse(buffer_arg) {
  return bragi_historical_statistics_statistics_pb.TournamentInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_statistics_TournamentResponse(arg) {
  if (!(arg instanceof bragi_historical_statistics_statistics_pb.TournamentResponse)) {
    throw new Error('Expected argument of type bragi.statistics.TournamentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_statistics_TournamentResponse(buffer_arg) {
  return bragi_historical_statistics_statistics_pb.TournamentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_statistics_TournamentStatisticsRequest(arg) {
  if (!(arg instanceof bragi_historical_statistics_statistics_pb.TournamentStatisticsRequest)) {
    throw new Error('Expected argument of type bragi.statistics.TournamentStatisticsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_statistics_TournamentStatisticsRequest(buffer_arg) {
  return bragi_historical_statistics_statistics_pb.TournamentStatisticsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_statistics_TournamentStatisticsResponse(arg) {
  if (!(arg instanceof bragi_historical_statistics_statistics_pb.TournamentStatisticsResponse)) {
    throw new Error('Expected argument of type bragi.statistics.TournamentStatisticsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_statistics_TournamentStatisticsResponse(buffer_arg) {
  return bragi_historical_statistics_statistics_pb.TournamentStatisticsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_statistics_TournamentsRequest(arg) {
  if (!(arg instanceof bragi_historical_statistics_statistics_pb.TournamentsRequest)) {
    throw new Error('Expected argument of type bragi.statistics.TournamentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_statistics_TournamentsRequest(buffer_arg) {
  return bragi_historical_statistics_statistics_pb.TournamentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var BragiService = exports.BragiService = {
  // Sports gRPC remote call returning SportsResponse
sports: {
    path: '/bragi.Bragi/Sports',
    requestStream: false,
    responseStream: false,
    requestType: bragi_historical_statistics_statistics_pb.SportsRequest,
    responseType: bragi_historical_statistics_statistics_pb.SportsResponse,
    requestSerialize: serialize_bragi_statistics_SportsRequest,
    requestDeserialize: deserialize_bragi_statistics_SportsRequest,
    responseSerialize: serialize_bragi_statistics_SportsResponse,
    responseDeserialize: deserialize_bragi_statistics_SportsResponse,
  },
  // Tournaments gRPC remote call returning TournamentResponse
tournaments: {
    path: '/bragi.Bragi/Tournaments',
    requestStream: false,
    responseStream: false,
    requestType: bragi_historical_statistics_statistics_pb.TournamentsRequest,
    responseType: bragi_historical_statistics_statistics_pb.TournamentResponse,
    requestSerialize: serialize_bragi_statistics_TournamentsRequest,
    requestDeserialize: deserialize_bragi_statistics_TournamentsRequest,
    responseSerialize: serialize_bragi_statistics_TournamentResponse,
    responseDeserialize: deserialize_bragi_statistics_TournamentResponse,
  },
  // TournamentInfo gRPC remote call returning TournamentInfoResponse
tournamentInfo: {
    path: '/bragi.Bragi/TournamentInfo',
    requestStream: false,
    responseStream: false,
    requestType: bragi_historical_statistics_statistics_pb.TournamentInfoRequest,
    responseType: bragi_historical_statistics_statistics_pb.TournamentInfoResponse,
    requestSerialize: serialize_bragi_statistics_TournamentInfoRequest,
    requestDeserialize: deserialize_bragi_statistics_TournamentInfoRequest,
    responseSerialize: serialize_bragi_statistics_TournamentInfoResponse,
    responseDeserialize: deserialize_bragi_statistics_TournamentInfoResponse,
  },
  // TeamHistoricalStatistics gRPC remote call returning HistoricalStatisticsResponse
teamHistoricalStatistics: {
    path: '/bragi.Bragi/TeamHistoricalStatistics',
    requestStream: false,
    responseStream: false,
    requestType: bragi_historical_statistics_statistics_pb.TeamHistoricalStatisticsRequest,
    responseType: bragi_historical_statistics_statistics_pb.HistoricalStatisticsResponse,
    requestSerialize: serialize_bragi_statistics_TeamHistoricalStatisticsRequest,
    requestDeserialize: deserialize_bragi_statistics_TeamHistoricalStatisticsRequest,
    responseSerialize: serialize_bragi_statistics_HistoricalStatisticsResponse,
    responseDeserialize: deserialize_bragi_statistics_HistoricalStatisticsResponse,
  },
  // LastFiveEncounters gRPC remote call returning LastFiveEncountersResponse
lastFiveEncounters: {
    path: '/bragi.Bragi/LastFiveEncounters',
    requestStream: false,
    responseStream: false,
    requestType: bragi_historical_statistics_statistics_pb.LastFiveEncountersRequest,
    responseType: bragi_historical_statistics_statistics_pb.LastFiveEncountersResponse,
    requestSerialize: serialize_bragi_statistics_LastFiveEncountersRequest,
    requestDeserialize: deserialize_bragi_statistics_LastFiveEncountersRequest,
    responseSerialize: serialize_bragi_statistics_LastFiveEncountersResponse,
    responseDeserialize: deserialize_bragi_statistics_LastFiveEncountersResponse,
  },
  // PostMapStatistics gRPC remote call returning PostMapStatisticsResponse
postMapStatistics: {
    path: '/bragi.Bragi/PostMapStatistics',
    requestStream: false,
    responseStream: false,
    requestType: bragi_historical_statistics_statistics_pb.PostMapStatisticsRequest,
    responseType: bragi_historical_statistics_statistics_pb.PostMapStatisticsResponse,
    requestSerialize: serialize_bragi_statistics_PostMapStatisticsRequest,
    requestDeserialize: deserialize_bragi_statistics_PostMapStatisticsRequest,
    responseSerialize: serialize_bragi_statistics_PostMapStatisticsResponse,
    responseDeserialize: deserialize_bragi_statistics_PostMapStatisticsResponse,
  },
  // TournamentStatistics gRPC remote call returning TournamentStatisticsResponse
tournamentStatistics: {
    path: '/bragi.Bragi/TournamentStatistics',
    requestStream: false,
    responseStream: false,
    requestType: bragi_historical_statistics_statistics_pb.TournamentStatisticsRequest,
    responseType: bragi_historical_statistics_statistics_pb.TournamentStatisticsResponse,
    requestSerialize: serialize_bragi_statistics_TournamentStatisticsRequest,
    requestDeserialize: deserialize_bragi_statistics_TournamentStatisticsRequest,
    responseSerialize: serialize_bragi_statistics_TournamentStatisticsResponse,
    responseDeserialize: deserialize_bragi_statistics_TournamentStatisticsResponse,
  },
  // TeamTournamentStatistics gRPC remote call returning TeamTournamentStatisticsResponse
teamTournamentStatistics: {
    path: '/bragi.Bragi/TeamTournamentStatistics',
    requestStream: false,
    responseStream: false,
    requestType: bragi_historical_statistics_statistics_pb.TeamTournamentStatisticsRequest,
    responseType: bragi_historical_statistics_statistics_pb.TeamTournamentStatisticsResponse,
    requestSerialize: serialize_bragi_statistics_TeamTournamentStatisticsRequest,
    requestDeserialize: deserialize_bragi_statistics_TeamTournamentStatisticsRequest,
    responseSerialize: serialize_bragi_statistics_TeamTournamentStatisticsResponse,
    responseDeserialize: deserialize_bragi_statistics_TeamTournamentStatisticsResponse,
  },
  // PlayerStatisticsAccordingRole gRPC remote call returning PlayerStatisticsAccordingRoleResponse
playerStatisticsAccordingRole: {
    path: '/bragi.Bragi/PlayerStatisticsAccordingRole',
    requestStream: false,
    responseStream: false,
    requestType: bragi_historical_statistics_statistics_pb.PlayerStatisticsAccordingRoleRequest,
    responseType: bragi_historical_statistics_statistics_pb.PlayerStatisticsAccordingRoleResponse,
    requestSerialize: serialize_bragi_statistics_PlayerStatisticsAccordingRoleRequest,
    requestDeserialize: deserialize_bragi_statistics_PlayerStatisticsAccordingRoleRequest,
    responseSerialize: serialize_bragi_statistics_PlayerStatisticsAccordingRoleResponse,
    responseDeserialize: deserialize_bragi_statistics_PlayerStatisticsAccordingRoleResponse,
  },
  // streamed ----------------------------------------------------------------------------------------------------------
//
// LiveDataFeed gRPC stream returning LiveDataFeedMessage one direction stream
liveDataFeed: {
    path: '/bragi.Bragi/LiveDataFeed',
    requestStream: false,
    responseStream: true,
    requestType: bragi_stream_data_feed_pb.LiveDataFeedRequest,
    responseType: bragi_stream_data_feed_pb.LiveDataFeedMessage,
    requestSerialize: serialize_bragi_live_LiveDataFeedRequest,
    requestDeserialize: deserialize_bragi_live_LiveDataFeedRequest,
    responseSerialize: serialize_bragi_live_LiveDataFeedMessage,
    responseDeserialize: deserialize_bragi_live_LiveDataFeedMessage,
  },
};

exports.BragiClient = grpc.makeGenericClientConstructor(BragiService);
