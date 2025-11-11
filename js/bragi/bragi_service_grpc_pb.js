// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var bragi_bragi_service_pb = require('../bragi/bragi_service_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var bragi_common_pb = require('../bragi/common_pb.js');
var bragi_cs2_pb = require('../bragi/cs2_pb.js');
var bragi_dota2_pb = require('../bragi/dota2_pb.js');
var bragi_rush_soccer_pb = require('../bragi/rush_soccer_pb.js');
var bragi_lol_pb = require('../bragi/lol_pb.js');
var bragi_rush_basketball_pb = require('../bragi/rush_basketball_pb.js');
var bragi_valorant_pb = require('../bragi/valorant_pb.js');
var bragi_rush_cricket_pb = require('../bragi/rush_cricket_pb.js');

function serialize_bragi_LiveDataFeedMessage(arg) {
  if (!(arg instanceof bragi_bragi_service_pb.LiveDataFeedMessage)) {
    throw new Error('Expected argument of type bragi.LiveDataFeedMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_LiveDataFeedMessage(buffer_arg) {
  return bragi_bragi_service_pb.LiveDataFeedMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_LiveDataFeedRequest(arg) {
  if (!(arg instanceof bragi_bragi_service_pb.LiveDataFeedRequest)) {
    throw new Error('Expected argument of type bragi.LiveDataFeedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_LiveDataFeedRequest(buffer_arg) {
  return bragi_bragi_service_pb.LiveDataFeedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_MatchEventsFeedMessage(arg) {
  if (!(arg instanceof bragi_bragi_service_pb.MatchEventsFeedMessage)) {
    throw new Error('Expected argument of type bragi.MatchEventsFeedMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_MatchEventsFeedMessage(buffer_arg) {
  return bragi_bragi_service_pb.MatchEventsFeedMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_MatchEventsFeedRequest(arg) {
  if (!(arg instanceof bragi_bragi_service_pb.MatchEventsFeedRequest)) {
    throw new Error('Expected argument of type bragi.MatchEventsFeedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_MatchEventsFeedRequest(buffer_arg) {
  return bragi_bragi_service_pb.MatchEventsFeedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_MatchTimelineFeedMessage(arg) {
  if (!(arg instanceof bragi_bragi_service_pb.MatchTimelineFeedMessage)) {
    throw new Error('Expected argument of type bragi.MatchTimelineFeedMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_MatchTimelineFeedMessage(buffer_arg) {
  return bragi_bragi_service_pb.MatchTimelineFeedMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_MatchTimelineFeedRequest(arg) {
  if (!(arg instanceof bragi_bragi_service_pb.MatchTimelineFeedRequest)) {
    throw new Error('Expected argument of type bragi.MatchTimelineFeedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_MatchTimelineFeedRequest(buffer_arg) {
  return bragi_bragi_service_pb.MatchTimelineFeedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_MatchTimelineRequest(arg) {
  if (!(arg instanceof bragi_bragi_service_pb.MatchTimelineRequest)) {
    throw new Error('Expected argument of type bragi.MatchTimelineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_MatchTimelineRequest(buffer_arg) {
  return bragi_bragi_service_pb.MatchTimelineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_MatchTimelineResponse(arg) {
  if (!(arg instanceof bragi_bragi_service_pb.MatchTimelineResponse)) {
    throw new Error('Expected argument of type bragi.MatchTimelineResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_MatchTimelineResponse(buffer_arg) {
  return bragi_bragi_service_pb.MatchTimelineResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_MatchTimelineSportsFeedRequest(arg) {
  if (!(arg instanceof bragi_bragi_service_pb.MatchTimelineSportsFeedRequest)) {
    throw new Error('Expected argument of type bragi.MatchTimelineSportsFeedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_MatchTimelineSportsFeedRequest(buffer_arg) {
  return bragi_bragi_service_pb.MatchTimelineSportsFeedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_MatchTimelineSportsFeedResponse(arg) {
  if (!(arg instanceof bragi_bragi_service_pb.MatchTimelineSportsFeedResponse)) {
    throw new Error('Expected argument of type bragi.MatchTimelineSportsFeedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_MatchTimelineSportsFeedResponse(buffer_arg) {
  return bragi_bragi_service_pb.MatchTimelineSportsFeedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_MatchTimelineSportsRequest(arg) {
  if (!(arg instanceof bragi_bragi_service_pb.MatchTimelineSportsRequest)) {
    throw new Error('Expected argument of type bragi.MatchTimelineSportsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_MatchTimelineSportsRequest(buffer_arg) {
  return bragi_bragi_service_pb.MatchTimelineSportsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_MatchTimelineSportsResponse(arg) {
  if (!(arg instanceof bragi_bragi_service_pb.MatchTimelineSportsResponse)) {
    throw new Error('Expected argument of type bragi.MatchTimelineSportsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_MatchTimelineSportsResponse(buffer_arg) {
  return bragi_bragi_service_pb.MatchTimelineSportsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_MatchTimelineTournamentsFeedRequest(arg) {
  if (!(arg instanceof bragi_bragi_service_pb.MatchTimelineTournamentsFeedRequest)) {
    throw new Error('Expected argument of type bragi.MatchTimelineTournamentsFeedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_MatchTimelineTournamentsFeedRequest(buffer_arg) {
  return bragi_bragi_service_pb.MatchTimelineTournamentsFeedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_MatchTimelineTournamentsFeedResponse(arg) {
  if (!(arg instanceof bragi_bragi_service_pb.MatchTimelineTournamentsFeedResponse)) {
    throw new Error('Expected argument of type bragi.MatchTimelineTournamentsFeedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_MatchTimelineTournamentsFeedResponse(buffer_arg) {
  return bragi_bragi_service_pb.MatchTimelineTournamentsFeedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_MatchTimelineTournamentsRequest(arg) {
  if (!(arg instanceof bragi_bragi_service_pb.MatchTimelineTournamentsRequest)) {
    throw new Error('Expected argument of type bragi.MatchTimelineTournamentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_MatchTimelineTournamentsRequest(buffer_arg) {
  return bragi_bragi_service_pb.MatchTimelineTournamentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_MatchTimelineTournamentsResponse(arg) {
  if (!(arg instanceof bragi_bragi_service_pb.MatchTimelineTournamentsResponse)) {
    throw new Error('Expected argument of type bragi.MatchTimelineTournamentsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_MatchTimelineTournamentsResponse(buffer_arg) {
  return bragi_bragi_service_pb.MatchTimelineTournamentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BragiService = exports.BragiService = {
  // MatchTimelineSports gRPC unary call returns all sports with count of planned or currently played matches
matchTimelineSports: {
    path: '/bragi.Bragi/MatchTimelineSports',
    requestStream: false,
    responseStream: false,
    requestType: bragi_bragi_service_pb.MatchTimelineSportsRequest,
    responseType: bragi_bragi_service_pb.MatchTimelineSportsResponse,
    requestSerialize: serialize_bragi_MatchTimelineSportsRequest,
    requestDeserialize: deserialize_bragi_MatchTimelineSportsRequest,
    responseSerialize: serialize_bragi_MatchTimelineSportsResponse,
    responseDeserialize: deserialize_bragi_MatchTimelineSportsResponse,
  },
  // MatchTimelineTournaments gRPC unary call returns all tournaments with count of planned or currently played matches
matchTimelineTournaments: {
    path: '/bragi.Bragi/MatchTimelineTournaments',
    requestStream: false,
    responseStream: false,
    requestType: bragi_bragi_service_pb.MatchTimelineTournamentsRequest,
    responseType: bragi_bragi_service_pb.MatchTimelineTournamentsResponse,
    requestSerialize: serialize_bragi_MatchTimelineTournamentsRequest,
    requestDeserialize: deserialize_bragi_MatchTimelineTournamentsRequest,
    responseSerialize: serialize_bragi_MatchTimelineTournamentsResponse,
    responseDeserialize: deserialize_bragi_MatchTimelineTournamentsResponse,
  },
  // Matches gRPC unary call returns all planned or currently played matches
matchTimeline: {
    path: '/bragi.Bragi/MatchTimeline',
    requestStream: false,
    responseStream: false,
    requestType: bragi_bragi_service_pb.MatchTimelineRequest,
    responseType: bragi_bragi_service_pb.MatchTimelineResponse,
    requestSerialize: serialize_bragi_MatchTimelineRequest,
    requestDeserialize: deserialize_bragi_MatchTimelineRequest,
    responseSerialize: serialize_bragi_MatchTimelineResponse,
    responseDeserialize: deserialize_bragi_MatchTimelineResponse,
  },
  // MatchTimelineSportsFeed gRPC stream call provides real-time updates for all sports with planned or currently played matches.
matchTimelineSportsFeed: {
    path: '/bragi.Bragi/MatchTimelineSportsFeed',
    requestStream: false,
    responseStream: true,
    requestType: bragi_bragi_service_pb.MatchTimelineSportsFeedRequest,
    responseType: bragi_bragi_service_pb.MatchTimelineSportsFeedResponse,
    requestSerialize: serialize_bragi_MatchTimelineSportsFeedRequest,
    requestDeserialize: deserialize_bragi_MatchTimelineSportsFeedRequest,
    responseSerialize: serialize_bragi_MatchTimelineSportsFeedResponse,
    responseDeserialize: deserialize_bragi_MatchTimelineSportsFeedResponse,
  },
  // MatchTimelineTournamentsFeed gRPC stream call provides real-time updates for all tournaments with planned or currently played matches.
matchTimelineTournamentsFeed: {
    path: '/bragi.Bragi/MatchTimelineTournamentsFeed',
    requestStream: false,
    responseStream: true,
    requestType: bragi_bragi_service_pb.MatchTimelineTournamentsFeedRequest,
    responseType: bragi_bragi_service_pb.MatchTimelineTournamentsFeedResponse,
    requestSerialize: serialize_bragi_MatchTimelineTournamentsFeedRequest,
    requestDeserialize: deserialize_bragi_MatchTimelineTournamentsFeedRequest,
    responseSerialize: serialize_bragi_MatchTimelineTournamentsFeedResponse,
    responseDeserialize: deserialize_bragi_MatchTimelineTournamentsFeedResponse,
  },
  // The MatchTimelineFeed gRPC stream call provides all upcoming or currently in-progress matches. 
// It also sends real-time updates when the status of a match changes. 
// To ensure you have the latest match timeline information, you must remain connected to this stream.
// If the connection is lost, you need to reconnect to continue receiving up-to-date match data.
matchTimelineFeed: {
    path: '/bragi.Bragi/MatchTimelineFeed',
    requestStream: false,
    responseStream: true,
    requestType: bragi_bragi_service_pb.MatchTimelineFeedRequest,
    responseType: bragi_bragi_service_pb.MatchTimelineFeedMessage,
    requestSerialize: serialize_bragi_MatchTimelineFeedRequest,
    requestDeserialize: deserialize_bragi_MatchTimelineFeedRequest,
    responseSerialize: serialize_bragi_MatchTimelineFeedMessage,
    responseDeserialize: deserialize_bragi_MatchTimelineFeedMessage,
  },
  // LiveDataFeed gRPC stream returning LiveDataFeedMessage one direction stream
liveDataFeed: {
    path: '/bragi.Bragi/LiveDataFeed',
    requestStream: false,
    responseStream: true,
    requestType: bragi_bragi_service_pb.LiveDataFeedRequest,
    responseType: bragi_bragi_service_pb.LiveDataFeedMessage,
    requestSerialize: serialize_bragi_LiveDataFeedRequest,
    requestDeserialize: deserialize_bragi_LiveDataFeedRequest,
    responseSerialize: serialize_bragi_LiveDataFeedMessage,
    responseDeserialize: deserialize_bragi_LiveDataFeedMessage,
  },
  // Sends all historical events for currently played matches, then only real-time updates
matchEventsFeed: {
    path: '/bragi.Bragi/MatchEventsFeed',
    requestStream: false,
    responseStream: true,
    requestType: bragi_bragi_service_pb.MatchEventsFeedRequest,
    responseType: bragi_bragi_service_pb.MatchEventsFeedMessage,
    requestSerialize: serialize_bragi_MatchEventsFeedRequest,
    requestDeserialize: deserialize_bragi_MatchEventsFeedRequest,
    responseSerialize: serialize_bragi_MatchEventsFeedMessage,
    responseDeserialize: deserialize_bragi_MatchEventsFeedMessage,
  },
};

exports.BragiClient = grpc.makeGenericClientConstructor(BragiService, 'Bragi');
