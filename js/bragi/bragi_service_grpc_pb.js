// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var bragi_bragi_service_pb = require('../bragi/bragi_service_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var bragi_csgo_pb = require('../bragi/csgo_pb.js');
var bragi_common_pb = require('../bragi/common_pb.js');

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


var BragiService = exports.BragiService = {
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
};

exports.BragiClient = grpc.makeGenericClientConstructor(BragiService);
