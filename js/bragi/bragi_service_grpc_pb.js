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

function serialize_bragi_ListMatchTimelineSportsFeedRequest(arg) {
  if (!(arg instanceof bragi_bragi_service_pb.ListMatchTimelineSportsFeedRequest)) {
    throw new Error('Expected argument of type bragi.ListMatchTimelineSportsFeedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_ListMatchTimelineSportsFeedRequest(buffer_arg) {
  return bragi_bragi_service_pb.ListMatchTimelineSportsFeedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_ListMatchTimelineSportsFeedResponse(arg) {
  if (!(arg instanceof bragi_bragi_service_pb.ListMatchTimelineSportsFeedResponse)) {
    throw new Error('Expected argument of type bragi.ListMatchTimelineSportsFeedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_ListMatchTimelineSportsFeedResponse(buffer_arg) {
  return bragi_bragi_service_pb.ListMatchTimelineSportsFeedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_ListMatchTimelineSportsRequest(arg) {
  if (!(arg instanceof bragi_bragi_service_pb.ListMatchTimelineSportsRequest)) {
    throw new Error('Expected argument of type bragi.ListMatchTimelineSportsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_ListMatchTimelineSportsRequest(buffer_arg) {
  return bragi_bragi_service_pb.ListMatchTimelineSportsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_ListMatchTimelineSportsResponse(arg) {
  if (!(arg instanceof bragi_bragi_service_pb.ListMatchTimelineSportsResponse)) {
    throw new Error('Expected argument of type bragi.ListMatchTimelineSportsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_ListMatchTimelineSportsResponse(buffer_arg) {
  return bragi_bragi_service_pb.ListMatchTimelineSportsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_ListMatchTimelineTournamentsFeedRequest(arg) {
  if (!(arg instanceof bragi_bragi_service_pb.ListMatchTimelineTournamentsFeedRequest)) {
    throw new Error('Expected argument of type bragi.ListMatchTimelineTournamentsFeedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_ListMatchTimelineTournamentsFeedRequest(buffer_arg) {
  return bragi_bragi_service_pb.ListMatchTimelineTournamentsFeedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_ListMatchTimelineTournamentsFeedResponse(arg) {
  if (!(arg instanceof bragi_bragi_service_pb.ListMatchTimelineTournamentsFeedResponse)) {
    throw new Error('Expected argument of type bragi.ListMatchTimelineTournamentsFeedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_ListMatchTimelineTournamentsFeedResponse(buffer_arg) {
  return bragi_bragi_service_pb.ListMatchTimelineTournamentsFeedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_ListMatchTimelineTournamentsRequest(arg) {
  if (!(arg instanceof bragi_bragi_service_pb.ListMatchTimelineTournamentsRequest)) {
    throw new Error('Expected argument of type bragi.ListMatchTimelineTournamentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_ListMatchTimelineTournamentsRequest(buffer_arg) {
  return bragi_bragi_service_pb.ListMatchTimelineTournamentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bragi_ListMatchTimelineTournamentsResponse(arg) {
  if (!(arg instanceof bragi_bragi_service_pb.ListMatchTimelineTournamentsResponse)) {
    throw new Error('Expected argument of type bragi.ListMatchTimelineTournamentsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bragi_ListMatchTimelineTournamentsResponse(buffer_arg) {
  return bragi_bragi_service_pb.ListMatchTimelineTournamentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

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


var BragiService = exports.BragiService = {
  listMatchTimelineSports: {
    path: '/bragi.Bragi/ListMatchTimelineSports',
    requestStream: false,
    responseStream: false,
    requestType: bragi_bragi_service_pb.ListMatchTimelineSportsRequest,
    responseType: bragi_bragi_service_pb.ListMatchTimelineSportsResponse,
    requestSerialize: serialize_bragi_ListMatchTimelineSportsRequest,
    requestDeserialize: deserialize_bragi_ListMatchTimelineSportsRequest,
    responseSerialize: serialize_bragi_ListMatchTimelineSportsResponse,
    responseDeserialize: deserialize_bragi_ListMatchTimelineSportsResponse,
  },
  listMatchTimelineTournaments: {
    path: '/bragi.Bragi/ListMatchTimelineTournaments',
    requestStream: false,
    responseStream: false,
    requestType: bragi_bragi_service_pb.ListMatchTimelineTournamentsRequest,
    responseType: bragi_bragi_service_pb.ListMatchTimelineTournamentsResponse,
    requestSerialize: serialize_bragi_ListMatchTimelineTournamentsRequest,
    requestDeserialize: deserialize_bragi_ListMatchTimelineTournamentsRequest,
    responseSerialize: serialize_bragi_ListMatchTimelineTournamentsResponse,
    responseDeserialize: deserialize_bragi_ListMatchTimelineTournamentsResponse,
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
  listMatchTimelineSportsFeed: {
    path: '/bragi.Bragi/ListMatchTimelineSportsFeed',
    requestStream: false,
    responseStream: true,
    requestType: bragi_bragi_service_pb.ListMatchTimelineSportsFeedRequest,
    responseType: bragi_bragi_service_pb.ListMatchTimelineSportsFeedResponse,
    requestSerialize: serialize_bragi_ListMatchTimelineSportsFeedRequest,
    requestDeserialize: deserialize_bragi_ListMatchTimelineSportsFeedRequest,
    responseSerialize: serialize_bragi_ListMatchTimelineSportsFeedResponse,
    responseDeserialize: deserialize_bragi_ListMatchTimelineSportsFeedResponse,
  },
  listMatchTimelineTournamentsFeed: {
    path: '/bragi.Bragi/ListMatchTimelineTournamentsFeed',
    requestStream: false,
    responseStream: true,
    requestType: bragi_bragi_service_pb.ListMatchTimelineTournamentsFeedRequest,
    responseType: bragi_bragi_service_pb.ListMatchTimelineTournamentsFeedResponse,
    requestSerialize: serialize_bragi_ListMatchTimelineTournamentsFeedRequest,
    requestDeserialize: deserialize_bragi_ListMatchTimelineTournamentsFeedRequest,
    responseSerialize: serialize_bragi_ListMatchTimelineTournamentsFeedResponse,
    responseDeserialize: deserialize_bragi_ListMatchTimelineTournamentsFeedResponse,
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
