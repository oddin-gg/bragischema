// source: bragi/csgo.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var bragi_common_pb = require('../bragi/common_pb.js');
goog.object.extend(proto, bragi_common_pb);
goog.exportSymbol('proto.bragi.CsgoBombCarriedState', null, global);
goog.exportSymbol('proto.bragi.CsgoBombDefuseStarted', null, global);
goog.exportSymbol('proto.bragi.CsgoBombDefused', null, global);
goog.exportSymbol('proto.bragi.CsgoBombDefusedState', null, global);
goog.exportSymbol('proto.bragi.CsgoBombDefusingState', null, global);
goog.exportSymbol('proto.bragi.CsgoBombDroppedState', null, global);
goog.exportSymbol('proto.bragi.CsgoBombExploded', null, global);
goog.exportSymbol('proto.bragi.CsgoBombPlanted', null, global);
goog.exportSymbol('proto.bragi.CsgoBombPlantedState', null, global);
goog.exportSymbol('proto.bragi.CsgoBombPlantingState', null, global);
goog.exportSymbol('proto.bragi.CsgoBombState', null, global);
goog.exportSymbol('proto.bragi.CsgoBombState.PayloadCase', null, global);
goog.exportSymbol('proto.bragi.CsgoCurrentMapStatePartialUpdate', null, global);
goog.exportSymbol('proto.bragi.CsgoCurrentMapStatePartialUpdate.PayloadCase', null, global);
goog.exportSymbol('proto.bragi.CsgoCurrentRoundState', null, global);
goog.exportSymbol('proto.bragi.CsgoCurrentRoundStatePartialUpdate', null, global);
goog.exportSymbol('proto.bragi.CsgoCurrentRoundStatePartialUpdate.UpdateCase', null, global);
goog.exportSymbol('proto.bragi.CsgoDamageDealt', null, global);
goog.exportSymbol('proto.bragi.CsgoDeath', null, global);
goog.exportSymbol('proto.bragi.CsgoEvent', null, global);
goog.exportSymbol('proto.bragi.CsgoEvent.EventCase', null, global);
goog.exportSymbol('proto.bragi.CsgoFreezeTimeEnded', null, global);
goog.exportSymbol('proto.bragi.CsgoFreezeTimeStarted', null, global);
goog.exportSymbol('proto.bragi.CsgoItemDrop', null, global);
goog.exportSymbol('proto.bragi.CsgoItemPickUp', null, global);
goog.exportSymbol('proto.bragi.CsgoItemPurchase', null, global);
goog.exportSymbol('proto.bragi.CsgoItemThrow', null, global);
goog.exportSymbol('proto.bragi.CsgoKill', null, global);
goog.exportSymbol('proto.bragi.CsgoMapEnd', null, global);
goog.exportSymbol('proto.bragi.CsgoMapInfoState', null, global);
goog.exportSymbol('proto.bragi.CsgoMapScoreState', null, global);
goog.exportSymbol('proto.bragi.CsgoMapStart', null, global);
goog.exportSymbol('proto.bragi.CsgoMapState', null, global);
goog.exportSymbol('proto.bragi.CsgoMatchMessage', null, global);
goog.exportSymbol('proto.bragi.CsgoMatchMessage.Payload', null, global);
goog.exportSymbol('proto.bragi.CsgoMatchMessage.Payload.PayloadCase', null, global);
goog.exportSymbol('proto.bragi.CsgoMatchScoreState', null, global);
goog.exportSymbol('proto.bragi.CsgoMatchState', null, global);
goog.exportSymbol('proto.bragi.CsgoMatchStatePartialUpdate', null, global);
goog.exportSymbol('proto.bragi.CsgoMatchStatePartialUpdate.UpdateCase', null, global);
goog.exportSymbol('proto.bragi.CsgoMatchStatusType', null, global);
goog.exportSymbol('proto.bragi.CsgoMatchUpdate', null, global);
goog.exportSymbol('proto.bragi.CsgoPlayerBalance', null, global);
goog.exportSymbol('proto.bragi.CsgoPlayerCurrentRoundState', null, global);
goog.exportSymbol('proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate', null, global);
goog.exportSymbol('proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload', null, global);
goog.exportSymbol('proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.PayloadCase', null, global);
goog.exportSymbol('proto.bragi.CsgoPlayerCurrentRoundStatisticsState', null, global);
goog.exportSymbol('proto.bragi.CsgoPlayerItem', null, global);
goog.exportSymbol('proto.bragi.CsgoPlayerItems', null, global);
goog.exportSymbol('proto.bragi.CsgoPlayerItemsState', null, global);
goog.exportSymbol('proto.bragi.CsgoPlayerMapState', null, global);
goog.exportSymbol('proto.bragi.CsgoPlayerMapStatePartialUpdate', null, global);
goog.exportSymbol('proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload', null, global);
goog.exportSymbol('proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload.PayloadCase', null, global);
goog.exportSymbol('proto.bragi.CsgoPlayerMapStatisticsState', null, global);
goog.exportSymbol('proto.bragi.CsgoPlayerPositionState', null, global);
goog.exportSymbol('proto.bragi.CsgoPlayerPreviousRoundState', null, global);
goog.exportSymbol('proto.bragi.CsgoPlayerStatistics', null, global);
goog.exportSymbol('proto.bragi.CsgoPosition', null, global);
goog.exportSymbol('proto.bragi.CsgoPreviousRoundState', null, global);
goog.exportSymbol('proto.bragi.CsgoPreviousTeamRoundState', null, global);
goog.exportSymbol('proto.bragi.CsgoRoundEnd', null, global);
goog.exportSymbol('proto.bragi.CsgoRoundInfoState', null, global);
goog.exportSymbol('proto.bragi.CsgoRoundPause', null, global);
goog.exportSymbol('proto.bragi.CsgoRoundResume', null, global);
goog.exportSymbol('proto.bragi.CsgoRoundRollback', null, global);
goog.exportSymbol('proto.bragi.CsgoRoundScoreState', null, global);
goog.exportSymbol('proto.bragi.CsgoRoundStart', null, global);
goog.exportSymbol('proto.bragi.CsgoRoundStateType', null, global);
goog.exportSymbol('proto.bragi.CsgoRoundTimeState', null, global);
goog.exportSymbol('proto.bragi.CsgoSide', null, global);
goog.exportSymbol('proto.bragi.CsgoTeam', null, global);
goog.exportSymbol('proto.bragi.CsgoTeamCurrentRoundState', null, global);
goog.exportSymbol('proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate', null, global);
goog.exportSymbol('proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload', null, global);
goog.exportSymbol('proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload.PayloadCase', null, global);
goog.exportSymbol('proto.bragi.CsgoTeamMapState', null, global);
goog.exportSymbol('proto.bragi.CsgoTeamMapStatePartialUpdate', null, global);
goog.exportSymbol('proto.bragi.CsgoTeamMapStatePartialUpdate.Payload', null, global);
goog.exportSymbol('proto.bragi.CsgoTeamMapStatePartialUpdate.Payload.PayloadCase', null, global);
goog.exportSymbol('proto.bragi.CsgoWinReason', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoMatchMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoMatchMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoMatchMessage.displayName = 'proto.bragi.CsgoMatchMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoMatchMessage.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.CsgoMatchMessage.Payload.oneofGroups_);
};
goog.inherits(proto.bragi.CsgoMatchMessage.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoMatchMessage.Payload.displayName = 'proto.bragi.CsgoMatchMessage.Payload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoMatchUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.CsgoMatchUpdate.repeatedFields_, null);
};
goog.inherits(proto.bragi.CsgoMatchUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoMatchUpdate.displayName = 'proto.bragi.CsgoMatchUpdate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoMatchStatePartialUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.CsgoMatchStatePartialUpdate.oneofGroups_);
};
goog.inherits(proto.bragi.CsgoMatchStatePartialUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoMatchStatePartialUpdate.displayName = 'proto.bragi.CsgoMatchStatePartialUpdate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoMatchState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.CsgoMatchState.repeatedFields_, null);
};
goog.inherits(proto.bragi.CsgoMatchState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoMatchState.displayName = 'proto.bragi.CsgoMatchState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoMatchScoreState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoMatchScoreState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoMatchScoreState.displayName = 'proto.bragi.CsgoMatchScoreState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoTeam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoTeam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoTeam.displayName = 'proto.bragi.CsgoTeam';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoCurrentMapStatePartialUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.CsgoCurrentMapStatePartialUpdate.oneofGroups_);
};
goog.inherits(proto.bragi.CsgoCurrentMapStatePartialUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoCurrentMapStatePartialUpdate.displayName = 'proto.bragi.CsgoCurrentMapStatePartialUpdate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoMapState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.CsgoMapState.repeatedFields_, null);
};
goog.inherits(proto.bragi.CsgoMapState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoMapState.displayName = 'proto.bragi.CsgoMapState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoMapInfoState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoMapInfoState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoMapInfoState.displayName = 'proto.bragi.CsgoMapInfoState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoMapScoreState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoMapScoreState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoMapScoreState.displayName = 'proto.bragi.CsgoMapScoreState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoCurrentRoundStatePartialUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.CsgoCurrentRoundStatePartialUpdate.oneofGroups_);
};
goog.inherits(proto.bragi.CsgoCurrentRoundStatePartialUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoCurrentRoundStatePartialUpdate.displayName = 'proto.bragi.CsgoCurrentRoundStatePartialUpdate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoCurrentRoundState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoCurrentRoundState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoCurrentRoundState.displayName = 'proto.bragi.CsgoCurrentRoundState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoPreviousRoundState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoPreviousRoundState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoPreviousRoundState.displayName = 'proto.bragi.CsgoPreviousRoundState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoRoundInfoState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoRoundInfoState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoRoundInfoState.displayName = 'proto.bragi.CsgoRoundInfoState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoRoundScoreState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoRoundScoreState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoRoundScoreState.displayName = 'proto.bragi.CsgoRoundScoreState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoRoundTimeState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoRoundTimeState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoRoundTimeState.displayName = 'proto.bragi.CsgoRoundTimeState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoBombState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.CsgoBombState.oneofGroups_);
};
goog.inherits(proto.bragi.CsgoBombState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoBombState.displayName = 'proto.bragi.CsgoBombState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoBombCarriedState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoBombCarriedState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoBombCarriedState.displayName = 'proto.bragi.CsgoBombCarriedState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoBombDroppedState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoBombDroppedState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoBombDroppedState.displayName = 'proto.bragi.CsgoBombDroppedState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoBombPlantingState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoBombPlantingState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoBombPlantingState.displayName = 'proto.bragi.CsgoBombPlantingState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoBombPlantedState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoBombPlantedState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoBombPlantedState.displayName = 'proto.bragi.CsgoBombPlantedState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoBombDefusingState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoBombDefusingState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoBombDefusingState.displayName = 'proto.bragi.CsgoBombDefusingState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoBombDefusedState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoBombDefusedState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoBombDefusedState.displayName = 'proto.bragi.CsgoBombDefusedState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoTeamMapStatePartialUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoTeamMapStatePartialUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoTeamMapStatePartialUpdate.displayName = 'proto.bragi.CsgoTeamMapStatePartialUpdate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoTeamMapStatePartialUpdate.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.CsgoTeamMapStatePartialUpdate.Payload.oneofGroups_);
};
goog.inherits(proto.bragi.CsgoTeamMapStatePartialUpdate.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoTeamMapStatePartialUpdate.Payload.displayName = 'proto.bragi.CsgoTeamMapStatePartialUpdate.Payload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoTeamMapState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoTeamMapState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoTeamMapState.displayName = 'proto.bragi.CsgoTeamMapState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.displayName = 'proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload.oneofGroups_);
};
goog.inherits(proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload.displayName = 'proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoTeamCurrentRoundState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoTeamCurrentRoundState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoTeamCurrentRoundState.displayName = 'proto.bragi.CsgoTeamCurrentRoundState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoPreviousTeamRoundState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoPreviousTeamRoundState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoPreviousTeamRoundState.displayName = 'proto.bragi.CsgoPreviousTeamRoundState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoPlayerMapStatePartialUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoPlayerMapStatePartialUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoPlayerMapStatePartialUpdate.displayName = 'proto.bragi.CsgoPlayerMapStatePartialUpdate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload.oneofGroups_);
};
goog.inherits(proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload.displayName = 'proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoPlayerMapState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoPlayerMapState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoPlayerMapState.displayName = 'proto.bragi.CsgoPlayerMapState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoPlayerMapStatisticsState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoPlayerMapStatisticsState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoPlayerMapStatisticsState.displayName = 'proto.bragi.CsgoPlayerMapStatisticsState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.displayName = 'proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.oneofGroups_);
};
goog.inherits(proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.displayName = 'proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoPlayerCurrentRoundState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoPlayerCurrentRoundState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoPlayerCurrentRoundState.displayName = 'proto.bragi.CsgoPlayerCurrentRoundState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoPlayerCurrentRoundStatisticsState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoPlayerCurrentRoundStatisticsState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoPlayerCurrentRoundStatisticsState.displayName = 'proto.bragi.CsgoPlayerCurrentRoundStatisticsState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoPlayerItemsState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.CsgoPlayerItemsState.repeatedFields_, null);
};
goog.inherits(proto.bragi.CsgoPlayerItemsState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoPlayerItemsState.displayName = 'proto.bragi.CsgoPlayerItemsState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoPlayerPreviousRoundState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoPlayerPreviousRoundState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoPlayerPreviousRoundState.displayName = 'proto.bragi.CsgoPlayerPreviousRoundState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoPlayerPositionState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoPlayerPositionState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoPlayerPositionState.displayName = 'proto.bragi.CsgoPlayerPositionState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoPlayerStatistics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoPlayerStatistics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoPlayerStatistics.displayName = 'proto.bragi.CsgoPlayerStatistics';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoPlayerItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.CsgoPlayerItem.repeatedFields_, null);
};
goog.inherits(proto.bragi.CsgoPlayerItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoPlayerItem.displayName = 'proto.bragi.CsgoPlayerItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoPosition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoPosition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoPosition.displayName = 'proto.bragi.CsgoPosition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.CsgoEvent.oneofGroups_);
};
goog.inherits(proto.bragi.CsgoEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoEvent.displayName = 'proto.bragi.CsgoEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoPlayerBalance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoPlayerBalance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoPlayerBalance.displayName = 'proto.bragi.CsgoPlayerBalance';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoPlayerItems = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.CsgoPlayerItems.repeatedFields_, null);
};
goog.inherits(proto.bragi.CsgoPlayerItems, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoPlayerItems.displayName = 'proto.bragi.CsgoPlayerItems';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoBombDefuseStarted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoBombDefuseStarted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoBombDefuseStarted.displayName = 'proto.bragi.CsgoBombDefuseStarted';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoBombDefused = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoBombDefused, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoBombDefused.displayName = 'proto.bragi.CsgoBombDefused';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoBombExploded = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoBombExploded, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoBombExploded.displayName = 'proto.bragi.CsgoBombExploded';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoBombPlanted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoBombPlanted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoBombPlanted.displayName = 'proto.bragi.CsgoBombPlanted';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoDamageDealt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoDamageDealt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoDamageDealt.displayName = 'proto.bragi.CsgoDamageDealt';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoFreezeTimeEnded = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoFreezeTimeEnded, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoFreezeTimeEnded.displayName = 'proto.bragi.CsgoFreezeTimeEnded';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoFreezeTimeStarted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoFreezeTimeStarted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoFreezeTimeStarted.displayName = 'proto.bragi.CsgoFreezeTimeStarted';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoItemDrop = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoItemDrop, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoItemDrop.displayName = 'proto.bragi.CsgoItemDrop';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoItemPickUp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoItemPickUp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoItemPickUp.displayName = 'proto.bragi.CsgoItemPickUp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoItemPurchase = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoItemPurchase, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoItemPurchase.displayName = 'proto.bragi.CsgoItemPurchase';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoItemThrow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoItemThrow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoItemThrow.displayName = 'proto.bragi.CsgoItemThrow';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoKill = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.CsgoKill.repeatedFields_, null);
};
goog.inherits(proto.bragi.CsgoKill, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoKill.displayName = 'proto.bragi.CsgoKill';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoDeath = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoDeath, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoDeath.displayName = 'proto.bragi.CsgoDeath';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoMapEnd = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoMapEnd, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoMapEnd.displayName = 'proto.bragi.CsgoMapEnd';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoMapStart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoMapStart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoMapStart.displayName = 'proto.bragi.CsgoMapStart';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoRoundEnd = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoRoundEnd, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoRoundEnd.displayName = 'proto.bragi.CsgoRoundEnd';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoRoundPause = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoRoundPause, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoRoundPause.displayName = 'proto.bragi.CsgoRoundPause';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoRoundResume = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoRoundResume, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoRoundResume.displayName = 'proto.bragi.CsgoRoundResume';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoRoundRollback = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoRoundRollback, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoRoundRollback.displayName = 'proto.bragi.CsgoRoundRollback';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bragi.CsgoRoundStart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoRoundStart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoRoundStart.displayName = 'proto.bragi.CsgoRoundStart';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoMatchMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoMatchMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoMatchMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoMatchMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    matchUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sequence: jspb.Message.getFieldWithDefault(msg, 2, 0),
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    payload: (f = msg.getPayload()) && proto.bragi.CsgoMatchMessage.Payload.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoMatchMessage}
 */
proto.bragi.CsgoMatchMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoMatchMessage;
  return proto.bragi.CsgoMatchMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoMatchMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoMatchMessage}
 */
proto.bragi.CsgoMatchMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMatchUrn(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequence(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 4:
      var value = new proto.bragi.CsgoMatchMessage.Payload;
      reader.readMessage(value,proto.bragi.CsgoMatchMessage.Payload.deserializeBinaryFromReader);
      msg.setPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoMatchMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoMatchMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoMatchMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoMatchMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatchUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSequence();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.CsgoMatchMessage.Payload.serializeBinaryToWriter
    );
  }
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bragi.CsgoMatchMessage.Payload.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.bragi.CsgoMatchMessage.Payload.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  MATCH_STATE: 1,
  UPDATE: 2
};

/**
 * @return {proto.bragi.CsgoMatchMessage.Payload.PayloadCase}
 */
proto.bragi.CsgoMatchMessage.Payload.prototype.getPayloadCase = function() {
  return /** @type {proto.bragi.CsgoMatchMessage.Payload.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.bragi.CsgoMatchMessage.Payload.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoMatchMessage.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoMatchMessage.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoMatchMessage.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoMatchMessage.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
    matchState: (f = msg.getMatchState()) && proto.bragi.CsgoMatchState.toObject(includeInstance, f),
    update: (f = msg.getUpdate()) && proto.bragi.CsgoMatchUpdate.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoMatchMessage.Payload}
 */
proto.bragi.CsgoMatchMessage.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoMatchMessage.Payload;
  return proto.bragi.CsgoMatchMessage.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoMatchMessage.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoMatchMessage.Payload}
 */
proto.bragi.CsgoMatchMessage.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CsgoMatchState;
      reader.readMessage(value,proto.bragi.CsgoMatchState.deserializeBinaryFromReader);
      msg.setMatchState(value);
      break;
    case 2:
      var value = new proto.bragi.CsgoMatchUpdate;
      reader.readMessage(value,proto.bragi.CsgoMatchUpdate.deserializeBinaryFromReader);
      msg.setUpdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoMatchMessage.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoMatchMessage.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoMatchMessage.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoMatchMessage.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatchState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CsgoMatchState.serializeBinaryToWriter
    );
  }
  f = message.getUpdate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CsgoMatchUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * optional CsgoMatchState match_state = 1;
 * @return {?proto.bragi.CsgoMatchState}
 */
proto.bragi.CsgoMatchMessage.Payload.prototype.getMatchState = function() {
  return /** @type{?proto.bragi.CsgoMatchState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoMatchState, 1));
};


/**
 * @param {?proto.bragi.CsgoMatchState|undefined} value
 * @return {!proto.bragi.CsgoMatchMessage.Payload} returns this
*/
proto.bragi.CsgoMatchMessage.Payload.prototype.setMatchState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.CsgoMatchMessage.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoMatchMessage.Payload} returns this
 */
proto.bragi.CsgoMatchMessage.Payload.prototype.clearMatchState = function() {
  return this.setMatchState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoMatchMessage.Payload.prototype.hasMatchState = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CsgoMatchUpdate update = 2;
 * @return {?proto.bragi.CsgoMatchUpdate}
 */
proto.bragi.CsgoMatchMessage.Payload.prototype.getUpdate = function() {
  return /** @type{?proto.bragi.CsgoMatchUpdate} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoMatchUpdate, 2));
};


/**
 * @param {?proto.bragi.CsgoMatchUpdate|undefined} value
 * @return {!proto.bragi.CsgoMatchMessage.Payload} returns this
*/
proto.bragi.CsgoMatchMessage.Payload.prototype.setUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bragi.CsgoMatchMessage.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoMatchMessage.Payload} returns this
 */
proto.bragi.CsgoMatchMessage.Payload.prototype.clearUpdate = function() {
  return this.setUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoMatchMessage.Payload.prototype.hasUpdate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string match_urn = 1;
 * @return {string}
 */
proto.bragi.CsgoMatchMessage.prototype.getMatchUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoMatchMessage} returns this
 */
proto.bragi.CsgoMatchMessage.prototype.setMatchUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 sequence = 2;
 * @return {number}
 */
proto.bragi.CsgoMatchMessage.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoMatchMessage} returns this
 */
proto.bragi.CsgoMatchMessage.prototype.setSequence = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bragi.CsgoMatchMessage.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bragi.CsgoMatchMessage} returns this
*/
proto.bragi.CsgoMatchMessage.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoMatchMessage} returns this
 */
proto.bragi.CsgoMatchMessage.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoMatchMessage.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Payload payload = 4;
 * @return {?proto.bragi.CsgoMatchMessage.Payload}
 */
proto.bragi.CsgoMatchMessage.prototype.getPayload = function() {
  return /** @type{?proto.bragi.CsgoMatchMessage.Payload} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoMatchMessage.Payload, 4));
};


/**
 * @param {?proto.bragi.CsgoMatchMessage.Payload|undefined} value
 * @return {!proto.bragi.CsgoMatchMessage} returns this
*/
proto.bragi.CsgoMatchMessage.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoMatchMessage} returns this
 */
proto.bragi.CsgoMatchMessage.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoMatchMessage.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.CsgoMatchUpdate.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoMatchUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoMatchUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoMatchUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoMatchUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    updatesList: jspb.Message.toObjectList(msg.getUpdatesList(),
    proto.bragi.CsgoMatchStatePartialUpdate.toObject, includeInstance),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.bragi.CsgoEvent.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoMatchUpdate}
 */
proto.bragi.CsgoMatchUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoMatchUpdate;
  return proto.bragi.CsgoMatchUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoMatchUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoMatchUpdate}
 */
proto.bragi.CsgoMatchUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CsgoMatchStatePartialUpdate;
      reader.readMessage(value,proto.bragi.CsgoMatchStatePartialUpdate.deserializeBinaryFromReader);
      msg.addUpdates(value);
      break;
    case 2:
      var value = new proto.bragi.CsgoEvent;
      reader.readMessage(value,proto.bragi.CsgoEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoMatchUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoMatchUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoMatchUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoMatchUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUpdatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bragi.CsgoMatchStatePartialUpdate.serializeBinaryToWriter
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.bragi.CsgoEvent.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CsgoMatchStatePartialUpdate updates = 1;
 * @return {!Array<!proto.bragi.CsgoMatchStatePartialUpdate>}
 */
proto.bragi.CsgoMatchUpdate.prototype.getUpdatesList = function() {
  return /** @type{!Array<!proto.bragi.CsgoMatchStatePartialUpdate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.CsgoMatchStatePartialUpdate, 1));
};


/**
 * @param {!Array<!proto.bragi.CsgoMatchStatePartialUpdate>} value
 * @return {!proto.bragi.CsgoMatchUpdate} returns this
*/
proto.bragi.CsgoMatchUpdate.prototype.setUpdatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bragi.CsgoMatchStatePartialUpdate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.CsgoMatchStatePartialUpdate}
 */
proto.bragi.CsgoMatchUpdate.prototype.addUpdates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bragi.CsgoMatchStatePartialUpdate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CsgoMatchUpdate} returns this
 */
proto.bragi.CsgoMatchUpdate.prototype.clearUpdatesList = function() {
  return this.setUpdatesList([]);
};


/**
 * repeated CsgoEvent events = 2;
 * @return {!Array<!proto.bragi.CsgoEvent>}
 */
proto.bragi.CsgoMatchUpdate.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.bragi.CsgoEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.CsgoEvent, 2));
};


/**
 * @param {!Array<!proto.bragi.CsgoEvent>} value
 * @return {!proto.bragi.CsgoMatchUpdate} returns this
*/
proto.bragi.CsgoMatchUpdate.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bragi.CsgoEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.CsgoEvent}
 */
proto.bragi.CsgoMatchUpdate.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bragi.CsgoEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CsgoMatchUpdate} returns this
 */
proto.bragi.CsgoMatchUpdate.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bragi.CsgoMatchStatePartialUpdate.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.bragi.CsgoMatchStatePartialUpdate.UpdateCase = {
  UPDATE_NOT_SET: 0,
  SCORE: 1,
  CURRENT_MAP_STATE: 2,
  CURRENT_MAP_STATE_PARTIAL_UPDATE: 3
};

/**
 * @return {proto.bragi.CsgoMatchStatePartialUpdate.UpdateCase}
 */
proto.bragi.CsgoMatchStatePartialUpdate.prototype.getUpdateCase = function() {
  return /** @type {proto.bragi.CsgoMatchStatePartialUpdate.UpdateCase} */(jspb.Message.computeOneofCase(this, proto.bragi.CsgoMatchStatePartialUpdate.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoMatchStatePartialUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoMatchStatePartialUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoMatchStatePartialUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoMatchStatePartialUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    score: (f = msg.getScore()) && proto.bragi.CsgoMatchScoreState.toObject(includeInstance, f),
    currentMapState: (f = msg.getCurrentMapState()) && proto.bragi.CsgoMapState.toObject(includeInstance, f),
    currentMapStatePartialUpdate: (f = msg.getCurrentMapStatePartialUpdate()) && proto.bragi.CsgoCurrentMapStatePartialUpdate.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoMatchStatePartialUpdate}
 */
proto.bragi.CsgoMatchStatePartialUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoMatchStatePartialUpdate;
  return proto.bragi.CsgoMatchStatePartialUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoMatchStatePartialUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoMatchStatePartialUpdate}
 */
proto.bragi.CsgoMatchStatePartialUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CsgoMatchScoreState;
      reader.readMessage(value,proto.bragi.CsgoMatchScoreState.deserializeBinaryFromReader);
      msg.setScore(value);
      break;
    case 2:
      var value = new proto.bragi.CsgoMapState;
      reader.readMessage(value,proto.bragi.CsgoMapState.deserializeBinaryFromReader);
      msg.setCurrentMapState(value);
      break;
    case 3:
      var value = new proto.bragi.CsgoCurrentMapStatePartialUpdate;
      reader.readMessage(value,proto.bragi.CsgoCurrentMapStatePartialUpdate.deserializeBinaryFromReader);
      msg.setCurrentMapStatePartialUpdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoMatchStatePartialUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoMatchStatePartialUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoMatchStatePartialUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoMatchStatePartialUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScore();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CsgoMatchScoreState.serializeBinaryToWriter
    );
  }
  f = message.getCurrentMapState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CsgoMapState.serializeBinaryToWriter
    );
  }
  f = message.getCurrentMapStatePartialUpdate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.CsgoCurrentMapStatePartialUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * optional CsgoMatchScoreState score = 1;
 * @return {?proto.bragi.CsgoMatchScoreState}
 */
proto.bragi.CsgoMatchStatePartialUpdate.prototype.getScore = function() {
  return /** @type{?proto.bragi.CsgoMatchScoreState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoMatchScoreState, 1));
};


/**
 * @param {?proto.bragi.CsgoMatchScoreState|undefined} value
 * @return {!proto.bragi.CsgoMatchStatePartialUpdate} returns this
*/
proto.bragi.CsgoMatchStatePartialUpdate.prototype.setScore = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.CsgoMatchStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoMatchStatePartialUpdate} returns this
 */
proto.bragi.CsgoMatchStatePartialUpdate.prototype.clearScore = function() {
  return this.setScore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoMatchStatePartialUpdate.prototype.hasScore = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CsgoMapState current_map_state = 2;
 * @return {?proto.bragi.CsgoMapState}
 */
proto.bragi.CsgoMatchStatePartialUpdate.prototype.getCurrentMapState = function() {
  return /** @type{?proto.bragi.CsgoMapState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoMapState, 2));
};


/**
 * @param {?proto.bragi.CsgoMapState|undefined} value
 * @return {!proto.bragi.CsgoMatchStatePartialUpdate} returns this
*/
proto.bragi.CsgoMatchStatePartialUpdate.prototype.setCurrentMapState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bragi.CsgoMatchStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoMatchStatePartialUpdate} returns this
 */
proto.bragi.CsgoMatchStatePartialUpdate.prototype.clearCurrentMapState = function() {
  return this.setCurrentMapState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoMatchStatePartialUpdate.prototype.hasCurrentMapState = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CsgoCurrentMapStatePartialUpdate current_map_state_partial_update = 3;
 * @return {?proto.bragi.CsgoCurrentMapStatePartialUpdate}
 */
proto.bragi.CsgoMatchStatePartialUpdate.prototype.getCurrentMapStatePartialUpdate = function() {
  return /** @type{?proto.bragi.CsgoCurrentMapStatePartialUpdate} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoCurrentMapStatePartialUpdate, 3));
};


/**
 * @param {?proto.bragi.CsgoCurrentMapStatePartialUpdate|undefined} value
 * @return {!proto.bragi.CsgoMatchStatePartialUpdate} returns this
*/
proto.bragi.CsgoMatchStatePartialUpdate.prototype.setCurrentMapStatePartialUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.bragi.CsgoMatchStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoMatchStatePartialUpdate} returns this
 */
proto.bragi.CsgoMatchStatePartialUpdate.prototype.clearCurrentMapStatePartialUpdate = function() {
  return this.setCurrentMapStatePartialUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoMatchStatePartialUpdate.prototype.hasCurrentMapStatePartialUpdate = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.CsgoMatchState.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoMatchState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoMatchState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoMatchState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoMatchState.toObject = function(includeInstance, msg) {
  var f, obj = {
    matchUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    matchType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    homeTeam: (f = msg.getHomeTeam()) && proto.bragi.CsgoTeam.toObject(includeInstance, f),
    awayTeam: (f = msg.getAwayTeam()) && proto.bragi.CsgoTeam.toObject(includeInstance, f),
    score: (f = msg.getScore()) && proto.bragi.CsgoMatchScoreState.toObject(includeInstance, f),
    matchStatus: jspb.Message.getFieldWithDefault(msg, 6, 0),
    currentMapState: (f = msg.getCurrentMapState()) && proto.bragi.CsgoMapState.toObject(includeInstance, f),
    previousMapStatesList: jspb.Message.toObjectList(msg.getPreviousMapStatesList(),
    proto.bragi.CsgoMapState.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoMatchState}
 */
proto.bragi.CsgoMatchState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoMatchState;
  return proto.bragi.CsgoMatchState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoMatchState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoMatchState}
 */
proto.bragi.CsgoMatchState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMatchUrn(value);
      break;
    case 2:
      var value = /** @type {!proto.bragi.BestOfType} */ (reader.readEnum());
      msg.setMatchType(value);
      break;
    case 3:
      var value = new proto.bragi.CsgoTeam;
      reader.readMessage(value,proto.bragi.CsgoTeam.deserializeBinaryFromReader);
      msg.setHomeTeam(value);
      break;
    case 4:
      var value = new proto.bragi.CsgoTeam;
      reader.readMessage(value,proto.bragi.CsgoTeam.deserializeBinaryFromReader);
      msg.setAwayTeam(value);
      break;
    case 5:
      var value = new proto.bragi.CsgoMatchScoreState;
      reader.readMessage(value,proto.bragi.CsgoMatchScoreState.deserializeBinaryFromReader);
      msg.setScore(value);
      break;
    case 6:
      var value = /** @type {!proto.bragi.CsgoMatchStatusType} */ (reader.readEnum());
      msg.setMatchStatus(value);
      break;
    case 7:
      var value = new proto.bragi.CsgoMapState;
      reader.readMessage(value,proto.bragi.CsgoMapState.deserializeBinaryFromReader);
      msg.setCurrentMapState(value);
      break;
    case 8:
      var value = new proto.bragi.CsgoMapState;
      reader.readMessage(value,proto.bragi.CsgoMapState.deserializeBinaryFromReader);
      msg.addPreviousMapStates(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoMatchState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoMatchState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoMatchState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoMatchState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatchUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMatchType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getHomeTeam();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.CsgoTeam.serializeBinaryToWriter
    );
  }
  f = message.getAwayTeam();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.CsgoTeam.serializeBinaryToWriter
    );
  }
  f = message.getScore();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bragi.CsgoMatchScoreState.serializeBinaryToWriter
    );
  }
  f = message.getMatchStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getCurrentMapState();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bragi.CsgoMapState.serializeBinaryToWriter
    );
  }
  f = message.getPreviousMapStatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.bragi.CsgoMapState.serializeBinaryToWriter
    );
  }
};


/**
 * optional string match_urn = 1;
 * @return {string}
 */
proto.bragi.CsgoMatchState.prototype.getMatchUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoMatchState} returns this
 */
proto.bragi.CsgoMatchState.prototype.setMatchUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional BestOfType match_type = 2;
 * @return {!proto.bragi.BestOfType}
 */
proto.bragi.CsgoMatchState.prototype.getMatchType = function() {
  return /** @type {!proto.bragi.BestOfType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bragi.BestOfType} value
 * @return {!proto.bragi.CsgoMatchState} returns this
 */
proto.bragi.CsgoMatchState.prototype.setMatchType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional CsgoTeam home_team = 3;
 * @return {?proto.bragi.CsgoTeam}
 */
proto.bragi.CsgoMatchState.prototype.getHomeTeam = function() {
  return /** @type{?proto.bragi.CsgoTeam} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoTeam, 3));
};


/**
 * @param {?proto.bragi.CsgoTeam|undefined} value
 * @return {!proto.bragi.CsgoMatchState} returns this
*/
proto.bragi.CsgoMatchState.prototype.setHomeTeam = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoMatchState} returns this
 */
proto.bragi.CsgoMatchState.prototype.clearHomeTeam = function() {
  return this.setHomeTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoMatchState.prototype.hasHomeTeam = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CsgoTeam away_team = 4;
 * @return {?proto.bragi.CsgoTeam}
 */
proto.bragi.CsgoMatchState.prototype.getAwayTeam = function() {
  return /** @type{?proto.bragi.CsgoTeam} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoTeam, 4));
};


/**
 * @param {?proto.bragi.CsgoTeam|undefined} value
 * @return {!proto.bragi.CsgoMatchState} returns this
*/
proto.bragi.CsgoMatchState.prototype.setAwayTeam = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoMatchState} returns this
 */
proto.bragi.CsgoMatchState.prototype.clearAwayTeam = function() {
  return this.setAwayTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoMatchState.prototype.hasAwayTeam = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CsgoMatchScoreState score = 5;
 * @return {?proto.bragi.CsgoMatchScoreState}
 */
proto.bragi.CsgoMatchState.prototype.getScore = function() {
  return /** @type{?proto.bragi.CsgoMatchScoreState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoMatchScoreState, 5));
};


/**
 * @param {?proto.bragi.CsgoMatchScoreState|undefined} value
 * @return {!proto.bragi.CsgoMatchState} returns this
*/
proto.bragi.CsgoMatchState.prototype.setScore = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoMatchState} returns this
 */
proto.bragi.CsgoMatchState.prototype.clearScore = function() {
  return this.setScore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoMatchState.prototype.hasScore = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional CsgoMatchStatusType match_status = 6;
 * @return {!proto.bragi.CsgoMatchStatusType}
 */
proto.bragi.CsgoMatchState.prototype.getMatchStatus = function() {
  return /** @type {!proto.bragi.CsgoMatchStatusType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.bragi.CsgoMatchStatusType} value
 * @return {!proto.bragi.CsgoMatchState} returns this
 */
proto.bragi.CsgoMatchState.prototype.setMatchStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional CsgoMapState current_map_state = 7;
 * @return {?proto.bragi.CsgoMapState}
 */
proto.bragi.CsgoMatchState.prototype.getCurrentMapState = function() {
  return /** @type{?proto.bragi.CsgoMapState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoMapState, 7));
};


/**
 * @param {?proto.bragi.CsgoMapState|undefined} value
 * @return {!proto.bragi.CsgoMatchState} returns this
*/
proto.bragi.CsgoMatchState.prototype.setCurrentMapState = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoMatchState} returns this
 */
proto.bragi.CsgoMatchState.prototype.clearCurrentMapState = function() {
  return this.setCurrentMapState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoMatchState.prototype.hasCurrentMapState = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated CsgoMapState previous_map_states = 8;
 * @return {!Array<!proto.bragi.CsgoMapState>}
 */
proto.bragi.CsgoMatchState.prototype.getPreviousMapStatesList = function() {
  return /** @type{!Array<!proto.bragi.CsgoMapState>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.CsgoMapState, 8));
};


/**
 * @param {!Array<!proto.bragi.CsgoMapState>} value
 * @return {!proto.bragi.CsgoMatchState} returns this
*/
proto.bragi.CsgoMatchState.prototype.setPreviousMapStatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.bragi.CsgoMapState=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.CsgoMapState}
 */
proto.bragi.CsgoMatchState.prototype.addPreviousMapStates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.bragi.CsgoMapState, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CsgoMatchState} returns this
 */
proto.bragi.CsgoMatchState.prototype.clearPreviousMapStatesList = function() {
  return this.setPreviousMapStatesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoMatchScoreState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoMatchScoreState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoMatchScoreState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoMatchScoreState.toObject = function(includeInstance, msg) {
  var f, obj = {
    homeScore: jspb.Message.getFieldWithDefault(msg, 1, 0),
    awayScore: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoMatchScoreState}
 */
proto.bragi.CsgoMatchScoreState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoMatchScoreState;
  return proto.bragi.CsgoMatchScoreState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoMatchScoreState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoMatchScoreState}
 */
proto.bragi.CsgoMatchScoreState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHomeScore(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAwayScore(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoMatchScoreState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoMatchScoreState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoMatchScoreState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoMatchScoreState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHomeScore();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getAwayScore();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 home_score = 1;
 * @return {number}
 */
proto.bragi.CsgoMatchScoreState.prototype.getHomeScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoMatchScoreState} returns this
 */
proto.bragi.CsgoMatchScoreState.prototype.setHomeScore = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 away_score = 2;
 * @return {number}
 */
proto.bragi.CsgoMatchScoreState.prototype.getAwayScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoMatchScoreState} returns this
 */
proto.bragi.CsgoMatchScoreState.prototype.setAwayScore = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoTeam.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoTeam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoTeam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTeam.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    teamName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoTeam}
 */
proto.bragi.CsgoTeam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoTeam;
  return proto.bragi.CsgoTeam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoTeam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoTeam}
 */
proto.bragi.CsgoTeam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeamUrn(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeamName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoTeam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoTeam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoTeam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTeam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTeamName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string team_urn = 1;
 * @return {string}
 */
proto.bragi.CsgoTeam.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoTeam} returns this
 */
proto.bragi.CsgoTeam.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string team_name = 2;
 * @return {string}
 */
proto.bragi.CsgoTeam.prototype.getTeamName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoTeam} returns this
 */
proto.bragi.CsgoTeam.prototype.setTeamName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bragi.CsgoCurrentMapStatePartialUpdate.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.bragi.CsgoCurrentMapStatePartialUpdate.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  INFO: 1,
  SCORE: 2,
  CURRENT_ROUND_STATE_PARTIAL_UPDATE: 3,
  TEAM_MAP_STATES_PARTIAL_UPDATE: 4
};

/**
 * @return {proto.bragi.CsgoCurrentMapStatePartialUpdate.PayloadCase}
 */
proto.bragi.CsgoCurrentMapStatePartialUpdate.prototype.getPayloadCase = function() {
  return /** @type {proto.bragi.CsgoCurrentMapStatePartialUpdate.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.bragi.CsgoCurrentMapStatePartialUpdate.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoCurrentMapStatePartialUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoCurrentMapStatePartialUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoCurrentMapStatePartialUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoCurrentMapStatePartialUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && proto.bragi.CsgoMapInfoState.toObject(includeInstance, f),
    score: (f = msg.getScore()) && proto.bragi.CsgoMapScoreState.toObject(includeInstance, f),
    currentRoundStatePartialUpdate: (f = msg.getCurrentRoundStatePartialUpdate()) && proto.bragi.CsgoCurrentRoundStatePartialUpdate.toObject(includeInstance, f),
    teamMapStatesPartialUpdate: (f = msg.getTeamMapStatesPartialUpdate()) && proto.bragi.CsgoTeamMapStatePartialUpdate.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoCurrentMapStatePartialUpdate}
 */
proto.bragi.CsgoCurrentMapStatePartialUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoCurrentMapStatePartialUpdate;
  return proto.bragi.CsgoCurrentMapStatePartialUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoCurrentMapStatePartialUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoCurrentMapStatePartialUpdate}
 */
proto.bragi.CsgoCurrentMapStatePartialUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CsgoMapInfoState;
      reader.readMessage(value,proto.bragi.CsgoMapInfoState.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = new proto.bragi.CsgoMapScoreState;
      reader.readMessage(value,proto.bragi.CsgoMapScoreState.deserializeBinaryFromReader);
      msg.setScore(value);
      break;
    case 3:
      var value = new proto.bragi.CsgoCurrentRoundStatePartialUpdate;
      reader.readMessage(value,proto.bragi.CsgoCurrentRoundStatePartialUpdate.deserializeBinaryFromReader);
      msg.setCurrentRoundStatePartialUpdate(value);
      break;
    case 4:
      var value = new proto.bragi.CsgoTeamMapStatePartialUpdate;
      reader.readMessage(value,proto.bragi.CsgoTeamMapStatePartialUpdate.deserializeBinaryFromReader);
      msg.setTeamMapStatesPartialUpdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoCurrentMapStatePartialUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoCurrentMapStatePartialUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoCurrentMapStatePartialUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoCurrentMapStatePartialUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CsgoMapInfoState.serializeBinaryToWriter
    );
  }
  f = message.getScore();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CsgoMapScoreState.serializeBinaryToWriter
    );
  }
  f = message.getCurrentRoundStatePartialUpdate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.CsgoCurrentRoundStatePartialUpdate.serializeBinaryToWriter
    );
  }
  f = message.getTeamMapStatesPartialUpdate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.CsgoTeamMapStatePartialUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * optional CsgoMapInfoState info = 1;
 * @return {?proto.bragi.CsgoMapInfoState}
 */
proto.bragi.CsgoCurrentMapStatePartialUpdate.prototype.getInfo = function() {
  return /** @type{?proto.bragi.CsgoMapInfoState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoMapInfoState, 1));
};


/**
 * @param {?proto.bragi.CsgoMapInfoState|undefined} value
 * @return {!proto.bragi.CsgoCurrentMapStatePartialUpdate} returns this
*/
proto.bragi.CsgoCurrentMapStatePartialUpdate.prototype.setInfo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.CsgoCurrentMapStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoCurrentMapStatePartialUpdate} returns this
 */
proto.bragi.CsgoCurrentMapStatePartialUpdate.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoCurrentMapStatePartialUpdate.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CsgoMapScoreState score = 2;
 * @return {?proto.bragi.CsgoMapScoreState}
 */
proto.bragi.CsgoCurrentMapStatePartialUpdate.prototype.getScore = function() {
  return /** @type{?proto.bragi.CsgoMapScoreState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoMapScoreState, 2));
};


/**
 * @param {?proto.bragi.CsgoMapScoreState|undefined} value
 * @return {!proto.bragi.CsgoCurrentMapStatePartialUpdate} returns this
*/
proto.bragi.CsgoCurrentMapStatePartialUpdate.prototype.setScore = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bragi.CsgoCurrentMapStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoCurrentMapStatePartialUpdate} returns this
 */
proto.bragi.CsgoCurrentMapStatePartialUpdate.prototype.clearScore = function() {
  return this.setScore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoCurrentMapStatePartialUpdate.prototype.hasScore = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CsgoCurrentRoundStatePartialUpdate current_round_state_partial_update = 3;
 * @return {?proto.bragi.CsgoCurrentRoundStatePartialUpdate}
 */
proto.bragi.CsgoCurrentMapStatePartialUpdate.prototype.getCurrentRoundStatePartialUpdate = function() {
  return /** @type{?proto.bragi.CsgoCurrentRoundStatePartialUpdate} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoCurrentRoundStatePartialUpdate, 3));
};


/**
 * @param {?proto.bragi.CsgoCurrentRoundStatePartialUpdate|undefined} value
 * @return {!proto.bragi.CsgoCurrentMapStatePartialUpdate} returns this
*/
proto.bragi.CsgoCurrentMapStatePartialUpdate.prototype.setCurrentRoundStatePartialUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.bragi.CsgoCurrentMapStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoCurrentMapStatePartialUpdate} returns this
 */
proto.bragi.CsgoCurrentMapStatePartialUpdate.prototype.clearCurrentRoundStatePartialUpdate = function() {
  return this.setCurrentRoundStatePartialUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoCurrentMapStatePartialUpdate.prototype.hasCurrentRoundStatePartialUpdate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CsgoTeamMapStatePartialUpdate team_map_states_partial_update = 4;
 * @return {?proto.bragi.CsgoTeamMapStatePartialUpdate}
 */
proto.bragi.CsgoCurrentMapStatePartialUpdate.prototype.getTeamMapStatesPartialUpdate = function() {
  return /** @type{?proto.bragi.CsgoTeamMapStatePartialUpdate} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoTeamMapStatePartialUpdate, 4));
};


/**
 * @param {?proto.bragi.CsgoTeamMapStatePartialUpdate|undefined} value
 * @return {!proto.bragi.CsgoCurrentMapStatePartialUpdate} returns this
*/
proto.bragi.CsgoCurrentMapStatePartialUpdate.prototype.setTeamMapStatesPartialUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.bragi.CsgoCurrentMapStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoCurrentMapStatePartialUpdate} returns this
 */
proto.bragi.CsgoCurrentMapStatePartialUpdate.prototype.clearTeamMapStatesPartialUpdate = function() {
  return this.setTeamMapStatesPartialUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoCurrentMapStatePartialUpdate.prototype.hasTeamMapStatesPartialUpdate = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.CsgoMapState.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoMapState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoMapState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoMapState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoMapState.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapOrder: jspb.Message.getFieldWithDefault(msg, 1, 0),
    info: (f = msg.getInfo()) && proto.bragi.CsgoMapInfoState.toObject(includeInstance, f),
    score: (f = msg.getScore()) && proto.bragi.CsgoMapScoreState.toObject(includeInstance, f),
    currentRoundState: (f = msg.getCurrentRoundState()) && proto.bragi.CsgoCurrentRoundState.toObject(includeInstance, f),
    previousRoundStatesList: jspb.Message.toObjectList(msg.getPreviousRoundStatesList(),
    proto.bragi.CsgoPreviousRoundState.toObject, includeInstance),
    teamMapStatesMap: (f = msg.getTeamMapStatesMap()) ? f.toObject(includeInstance, proto.bragi.CsgoTeamMapState.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoMapState}
 */
proto.bragi.CsgoMapState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoMapState;
  return proto.bragi.CsgoMapState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoMapState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoMapState}
 */
proto.bragi.CsgoMapState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMapOrder(value);
      break;
    case 2:
      var value = new proto.bragi.CsgoMapInfoState;
      reader.readMessage(value,proto.bragi.CsgoMapInfoState.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 3:
      var value = new proto.bragi.CsgoMapScoreState;
      reader.readMessage(value,proto.bragi.CsgoMapScoreState.deserializeBinaryFromReader);
      msg.setScore(value);
      break;
    case 4:
      var value = new proto.bragi.CsgoCurrentRoundState;
      reader.readMessage(value,proto.bragi.CsgoCurrentRoundState.deserializeBinaryFromReader);
      msg.setCurrentRoundState(value);
      break;
    case 5:
      var value = new proto.bragi.CsgoPreviousRoundState;
      reader.readMessage(value,proto.bragi.CsgoPreviousRoundState.deserializeBinaryFromReader);
      msg.addPreviousRoundStates(value);
      break;
    case 6:
      var value = msg.getTeamMapStatesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bragi.CsgoTeamMapState.deserializeBinaryFromReader, "", new proto.bragi.CsgoTeamMapState());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoMapState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoMapState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoMapState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoMapState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapOrder();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CsgoMapInfoState.serializeBinaryToWriter
    );
  }
  f = message.getScore();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.CsgoMapScoreState.serializeBinaryToWriter
    );
  }
  f = message.getCurrentRoundState();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.CsgoCurrentRoundState.serializeBinaryToWriter
    );
  }
  f = message.getPreviousRoundStatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.bragi.CsgoPreviousRoundState.serializeBinaryToWriter
    );
  }
  f = message.getTeamMapStatesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bragi.CsgoTeamMapState.serializeBinaryToWriter);
  }
};


/**
 * optional uint32 map_order = 1;
 * @return {number}
 */
proto.bragi.CsgoMapState.prototype.getMapOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoMapState} returns this
 */
proto.bragi.CsgoMapState.prototype.setMapOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional CsgoMapInfoState info = 2;
 * @return {?proto.bragi.CsgoMapInfoState}
 */
proto.bragi.CsgoMapState.prototype.getInfo = function() {
  return /** @type{?proto.bragi.CsgoMapInfoState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoMapInfoState, 2));
};


/**
 * @param {?proto.bragi.CsgoMapInfoState|undefined} value
 * @return {!proto.bragi.CsgoMapState} returns this
*/
proto.bragi.CsgoMapState.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoMapState} returns this
 */
proto.bragi.CsgoMapState.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoMapState.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CsgoMapScoreState score = 3;
 * @return {?proto.bragi.CsgoMapScoreState}
 */
proto.bragi.CsgoMapState.prototype.getScore = function() {
  return /** @type{?proto.bragi.CsgoMapScoreState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoMapScoreState, 3));
};


/**
 * @param {?proto.bragi.CsgoMapScoreState|undefined} value
 * @return {!proto.bragi.CsgoMapState} returns this
*/
proto.bragi.CsgoMapState.prototype.setScore = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoMapState} returns this
 */
proto.bragi.CsgoMapState.prototype.clearScore = function() {
  return this.setScore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoMapState.prototype.hasScore = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CsgoCurrentRoundState current_round_state = 4;
 * @return {?proto.bragi.CsgoCurrentRoundState}
 */
proto.bragi.CsgoMapState.prototype.getCurrentRoundState = function() {
  return /** @type{?proto.bragi.CsgoCurrentRoundState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoCurrentRoundState, 4));
};


/**
 * @param {?proto.bragi.CsgoCurrentRoundState|undefined} value
 * @return {!proto.bragi.CsgoMapState} returns this
*/
proto.bragi.CsgoMapState.prototype.setCurrentRoundState = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoMapState} returns this
 */
proto.bragi.CsgoMapState.prototype.clearCurrentRoundState = function() {
  return this.setCurrentRoundState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoMapState.prototype.hasCurrentRoundState = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated CsgoPreviousRoundState previous_round_states = 5;
 * @return {!Array<!proto.bragi.CsgoPreviousRoundState>}
 */
proto.bragi.CsgoMapState.prototype.getPreviousRoundStatesList = function() {
  return /** @type{!Array<!proto.bragi.CsgoPreviousRoundState>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.CsgoPreviousRoundState, 5));
};


/**
 * @param {!Array<!proto.bragi.CsgoPreviousRoundState>} value
 * @return {!proto.bragi.CsgoMapState} returns this
*/
proto.bragi.CsgoMapState.prototype.setPreviousRoundStatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.bragi.CsgoPreviousRoundState=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.CsgoPreviousRoundState}
 */
proto.bragi.CsgoMapState.prototype.addPreviousRoundStates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.bragi.CsgoPreviousRoundState, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CsgoMapState} returns this
 */
proto.bragi.CsgoMapState.prototype.clearPreviousRoundStatesList = function() {
  return this.setPreviousRoundStatesList([]);
};


/**
 * map<string, CsgoTeamMapState> team_map_states = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bragi.CsgoTeamMapState>}
 */
proto.bragi.CsgoMapState.prototype.getTeamMapStatesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bragi.CsgoTeamMapState>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      proto.bragi.CsgoTeamMapState));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bragi.CsgoMapState} returns this
 */
proto.bragi.CsgoMapState.prototype.clearTeamMapStatesMap = function() {
  this.getTeamMapStatesMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoMapInfoState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoMapInfoState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoMapInfoState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoMapInfoState.toObject = function(includeInstance, msg) {
  var f, obj = {
    csgoMapName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    maxRoundsDefault: jspb.Message.getFieldWithDefault(msg, 2, 0),
    maxRoundsOvertime: jspb.Message.getFieldWithDefault(msg, 3, 0),
    freezeTimeDuration: (f = msg.getFreezeTimeDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    roundTimeDuration: (f = msg.getRoundTimeDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    bombTimeDuration: (f = msg.getBombTimeDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    mapEnded: jspb.Message.getBooleanFieldWithDefault(msg, 9, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoMapInfoState}
 */
proto.bragi.CsgoMapInfoState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoMapInfoState;
  return proto.bragi.CsgoMapInfoState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoMapInfoState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoMapInfoState}
 */
proto.bragi.CsgoMapInfoState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCsgoMapName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxRoundsDefault(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxRoundsOvertime(value);
      break;
    case 4:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setFreezeTimeDuration(value);
      break;
    case 5:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setRoundTimeDuration(value);
      break;
    case 6:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setBombTimeDuration(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTime(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMapEnded(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoMapInfoState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoMapInfoState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoMapInfoState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoMapInfoState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCsgoMapName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMaxRoundsDefault();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getMaxRoundsOvertime();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getFreezeTimeDuration();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getRoundTimeDuration();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getBombTimeDuration();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndTime();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMapEnded();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
};


/**
 * optional string csgo_map_name = 1;
 * @return {string}
 */
proto.bragi.CsgoMapInfoState.prototype.getCsgoMapName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoMapInfoState} returns this
 */
proto.bragi.CsgoMapInfoState.prototype.setCsgoMapName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 max_rounds_default = 2;
 * @return {number}
 */
proto.bragi.CsgoMapInfoState.prototype.getMaxRoundsDefault = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoMapInfoState} returns this
 */
proto.bragi.CsgoMapInfoState.prototype.setMaxRoundsDefault = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 max_rounds_overtime = 3;
 * @return {number}
 */
proto.bragi.CsgoMapInfoState.prototype.getMaxRoundsOvertime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoMapInfoState} returns this
 */
proto.bragi.CsgoMapInfoState.prototype.setMaxRoundsOvertime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional google.protobuf.Duration freeze_time_duration = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoMapInfoState.prototype.getFreezeTimeDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoMapInfoState} returns this
*/
proto.bragi.CsgoMapInfoState.prototype.setFreezeTimeDuration = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoMapInfoState} returns this
 */
proto.bragi.CsgoMapInfoState.prototype.clearFreezeTimeDuration = function() {
  return this.setFreezeTimeDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoMapInfoState.prototype.hasFreezeTimeDuration = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Duration round_time_duration = 5;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoMapInfoState.prototype.getRoundTimeDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 5));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoMapInfoState} returns this
*/
proto.bragi.CsgoMapInfoState.prototype.setRoundTimeDuration = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoMapInfoState} returns this
 */
proto.bragi.CsgoMapInfoState.prototype.clearRoundTimeDuration = function() {
  return this.setRoundTimeDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoMapInfoState.prototype.hasRoundTimeDuration = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Duration bomb_time_duration = 6;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoMapInfoState.prototype.getBombTimeDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 6));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoMapInfoState} returns this
*/
proto.bragi.CsgoMapInfoState.prototype.setBombTimeDuration = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoMapInfoState} returns this
 */
proto.bragi.CsgoMapInfoState.prototype.clearBombTimeDuration = function() {
  return this.setBombTimeDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoMapInfoState.prototype.hasBombTimeDuration = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp start_time = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bragi.CsgoMapInfoState.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bragi.CsgoMapInfoState} returns this
*/
proto.bragi.CsgoMapInfoState.prototype.setStartTime = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoMapInfoState} returns this
 */
proto.bragi.CsgoMapInfoState.prototype.clearStartTime = function() {
  return this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoMapInfoState.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp end_time = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bragi.CsgoMapInfoState.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bragi.CsgoMapInfoState} returns this
*/
proto.bragi.CsgoMapInfoState.prototype.setEndTime = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoMapInfoState} returns this
 */
proto.bragi.CsgoMapInfoState.prototype.clearEndTime = function() {
  return this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoMapInfoState.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool map_ended = 9;
 * @return {boolean}
 */
proto.bragi.CsgoMapInfoState.prototype.getMapEnded = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.CsgoMapInfoState} returns this
 */
proto.bragi.CsgoMapInfoState.prototype.setMapEnded = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoMapScoreState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoMapScoreState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoMapScoreState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoMapScoreState.toObject = function(includeInstance, msg) {
  var f, obj = {
    homeScore: jspb.Message.getFieldWithDefault(msg, 1, 0),
    awayScore: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoMapScoreState}
 */
proto.bragi.CsgoMapScoreState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoMapScoreState;
  return proto.bragi.CsgoMapScoreState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoMapScoreState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoMapScoreState}
 */
proto.bragi.CsgoMapScoreState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHomeScore(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAwayScore(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoMapScoreState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoMapScoreState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoMapScoreState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoMapScoreState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHomeScore();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getAwayScore();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 home_score = 1;
 * @return {number}
 */
proto.bragi.CsgoMapScoreState.prototype.getHomeScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoMapScoreState} returns this
 */
proto.bragi.CsgoMapScoreState.prototype.setHomeScore = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 away_score = 2;
 * @return {number}
 */
proto.bragi.CsgoMapScoreState.prototype.getAwayScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoMapScoreState} returns this
 */
proto.bragi.CsgoMapScoreState.prototype.setAwayScore = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bragi.CsgoCurrentRoundStatePartialUpdate.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.bragi.CsgoCurrentRoundStatePartialUpdate.UpdateCase = {
  UPDATE_NOT_SET: 0,
  INFO: 1,
  SCORE: 2,
  TIME: 3,
  BOMB_STATE: 4,
  TEAM_STATES_PARTIAL_UPDATE: 5
};

/**
 * @return {proto.bragi.CsgoCurrentRoundStatePartialUpdate.UpdateCase}
 */
proto.bragi.CsgoCurrentRoundStatePartialUpdate.prototype.getUpdateCase = function() {
  return /** @type {proto.bragi.CsgoCurrentRoundStatePartialUpdate.UpdateCase} */(jspb.Message.computeOneofCase(this, proto.bragi.CsgoCurrentRoundStatePartialUpdate.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoCurrentRoundStatePartialUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoCurrentRoundStatePartialUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoCurrentRoundStatePartialUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoCurrentRoundStatePartialUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && proto.bragi.CsgoRoundInfoState.toObject(includeInstance, f),
    score: (f = msg.getScore()) && proto.bragi.CsgoRoundScoreState.toObject(includeInstance, f),
    time: (f = msg.getTime()) && proto.bragi.CsgoRoundTimeState.toObject(includeInstance, f),
    bombState: (f = msg.getBombState()) && proto.bragi.CsgoBombState.toObject(includeInstance, f),
    teamStatesPartialUpdate: (f = msg.getTeamStatesPartialUpdate()) && proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoCurrentRoundStatePartialUpdate}
 */
proto.bragi.CsgoCurrentRoundStatePartialUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoCurrentRoundStatePartialUpdate;
  return proto.bragi.CsgoCurrentRoundStatePartialUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoCurrentRoundStatePartialUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoCurrentRoundStatePartialUpdate}
 */
proto.bragi.CsgoCurrentRoundStatePartialUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CsgoRoundInfoState;
      reader.readMessage(value,proto.bragi.CsgoRoundInfoState.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = new proto.bragi.CsgoRoundScoreState;
      reader.readMessage(value,proto.bragi.CsgoRoundScoreState.deserializeBinaryFromReader);
      msg.setScore(value);
      break;
    case 3:
      var value = new proto.bragi.CsgoRoundTimeState;
      reader.readMessage(value,proto.bragi.CsgoRoundTimeState.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 4:
      var value = new proto.bragi.CsgoBombState;
      reader.readMessage(value,proto.bragi.CsgoBombState.deserializeBinaryFromReader);
      msg.setBombState(value);
      break;
    case 5:
      var value = new proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate;
      reader.readMessage(value,proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.deserializeBinaryFromReader);
      msg.setTeamStatesPartialUpdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoCurrentRoundStatePartialUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoCurrentRoundStatePartialUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoCurrentRoundStatePartialUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoCurrentRoundStatePartialUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CsgoRoundInfoState.serializeBinaryToWriter
    );
  }
  f = message.getScore();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CsgoRoundScoreState.serializeBinaryToWriter
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.CsgoRoundTimeState.serializeBinaryToWriter
    );
  }
  f = message.getBombState();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.CsgoBombState.serializeBinaryToWriter
    );
  }
  f = message.getTeamStatesPartialUpdate();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * optional CsgoRoundInfoState info = 1;
 * @return {?proto.bragi.CsgoRoundInfoState}
 */
proto.bragi.CsgoCurrentRoundStatePartialUpdate.prototype.getInfo = function() {
  return /** @type{?proto.bragi.CsgoRoundInfoState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoRoundInfoState, 1));
};


/**
 * @param {?proto.bragi.CsgoRoundInfoState|undefined} value
 * @return {!proto.bragi.CsgoCurrentRoundStatePartialUpdate} returns this
*/
proto.bragi.CsgoCurrentRoundStatePartialUpdate.prototype.setInfo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.CsgoCurrentRoundStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoCurrentRoundStatePartialUpdate} returns this
 */
proto.bragi.CsgoCurrentRoundStatePartialUpdate.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoCurrentRoundStatePartialUpdate.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CsgoRoundScoreState score = 2;
 * @return {?proto.bragi.CsgoRoundScoreState}
 */
proto.bragi.CsgoCurrentRoundStatePartialUpdate.prototype.getScore = function() {
  return /** @type{?proto.bragi.CsgoRoundScoreState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoRoundScoreState, 2));
};


/**
 * @param {?proto.bragi.CsgoRoundScoreState|undefined} value
 * @return {!proto.bragi.CsgoCurrentRoundStatePartialUpdate} returns this
*/
proto.bragi.CsgoCurrentRoundStatePartialUpdate.prototype.setScore = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bragi.CsgoCurrentRoundStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoCurrentRoundStatePartialUpdate} returns this
 */
proto.bragi.CsgoCurrentRoundStatePartialUpdate.prototype.clearScore = function() {
  return this.setScore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoCurrentRoundStatePartialUpdate.prototype.hasScore = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CsgoRoundTimeState time = 3;
 * @return {?proto.bragi.CsgoRoundTimeState}
 */
proto.bragi.CsgoCurrentRoundStatePartialUpdate.prototype.getTime = function() {
  return /** @type{?proto.bragi.CsgoRoundTimeState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoRoundTimeState, 3));
};


/**
 * @param {?proto.bragi.CsgoRoundTimeState|undefined} value
 * @return {!proto.bragi.CsgoCurrentRoundStatePartialUpdate} returns this
*/
proto.bragi.CsgoCurrentRoundStatePartialUpdate.prototype.setTime = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.bragi.CsgoCurrentRoundStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoCurrentRoundStatePartialUpdate} returns this
 */
proto.bragi.CsgoCurrentRoundStatePartialUpdate.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoCurrentRoundStatePartialUpdate.prototype.hasTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CsgoBombState bomb_state = 4;
 * @return {?proto.bragi.CsgoBombState}
 */
proto.bragi.CsgoCurrentRoundStatePartialUpdate.prototype.getBombState = function() {
  return /** @type{?proto.bragi.CsgoBombState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoBombState, 4));
};


/**
 * @param {?proto.bragi.CsgoBombState|undefined} value
 * @return {!proto.bragi.CsgoCurrentRoundStatePartialUpdate} returns this
*/
proto.bragi.CsgoCurrentRoundStatePartialUpdate.prototype.setBombState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.bragi.CsgoCurrentRoundStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoCurrentRoundStatePartialUpdate} returns this
 */
proto.bragi.CsgoCurrentRoundStatePartialUpdate.prototype.clearBombState = function() {
  return this.setBombState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoCurrentRoundStatePartialUpdate.prototype.hasBombState = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CsgoTeamCurrentRoundStatePartialUpdate team_states_partial_update = 5;
 * @return {?proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate}
 */
proto.bragi.CsgoCurrentRoundStatePartialUpdate.prototype.getTeamStatesPartialUpdate = function() {
  return /** @type{?proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate, 5));
};


/**
 * @param {?proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate|undefined} value
 * @return {!proto.bragi.CsgoCurrentRoundStatePartialUpdate} returns this
*/
proto.bragi.CsgoCurrentRoundStatePartialUpdate.prototype.setTeamStatesPartialUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.bragi.CsgoCurrentRoundStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoCurrentRoundStatePartialUpdate} returns this
 */
proto.bragi.CsgoCurrentRoundStatePartialUpdate.prototype.clearTeamStatesPartialUpdate = function() {
  return this.setTeamStatesPartialUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoCurrentRoundStatePartialUpdate.prototype.hasTeamStatesPartialUpdate = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoCurrentRoundState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoCurrentRoundState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoCurrentRoundState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoCurrentRoundState.toObject = function(includeInstance, msg) {
  var f, obj = {
    roundNumber: jspb.Message.getFieldWithDefault(msg, 1, 0),
    info: (f = msg.getInfo()) && proto.bragi.CsgoRoundInfoState.toObject(includeInstance, f),
    score: (f = msg.getScore()) && proto.bragi.CsgoRoundScoreState.toObject(includeInstance, f),
    time: (f = msg.getTime()) && proto.bragi.CsgoRoundTimeState.toObject(includeInstance, f),
    bombState: (f = msg.getBombState()) && proto.bragi.CsgoBombState.toObject(includeInstance, f),
    teamStatesMap: (f = msg.getTeamStatesMap()) ? f.toObject(includeInstance, proto.bragi.CsgoTeamCurrentRoundState.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoCurrentRoundState}
 */
proto.bragi.CsgoCurrentRoundState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoCurrentRoundState;
  return proto.bragi.CsgoCurrentRoundState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoCurrentRoundState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoCurrentRoundState}
 */
proto.bragi.CsgoCurrentRoundState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRoundNumber(value);
      break;
    case 2:
      var value = new proto.bragi.CsgoRoundInfoState;
      reader.readMessage(value,proto.bragi.CsgoRoundInfoState.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 3:
      var value = new proto.bragi.CsgoRoundScoreState;
      reader.readMessage(value,proto.bragi.CsgoRoundScoreState.deserializeBinaryFromReader);
      msg.setScore(value);
      break;
    case 4:
      var value = new proto.bragi.CsgoRoundTimeState;
      reader.readMessage(value,proto.bragi.CsgoRoundTimeState.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 5:
      var value = new proto.bragi.CsgoBombState;
      reader.readMessage(value,proto.bragi.CsgoBombState.deserializeBinaryFromReader);
      msg.setBombState(value);
      break;
    case 6:
      var value = msg.getTeamStatesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bragi.CsgoTeamCurrentRoundState.deserializeBinaryFromReader, "", new proto.bragi.CsgoTeamCurrentRoundState());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoCurrentRoundState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoCurrentRoundState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoCurrentRoundState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoCurrentRoundState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoundNumber();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CsgoRoundInfoState.serializeBinaryToWriter
    );
  }
  f = message.getScore();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.CsgoRoundScoreState.serializeBinaryToWriter
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.CsgoRoundTimeState.serializeBinaryToWriter
    );
  }
  f = message.getBombState();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bragi.CsgoBombState.serializeBinaryToWriter
    );
  }
  f = message.getTeamStatesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bragi.CsgoTeamCurrentRoundState.serializeBinaryToWriter);
  }
};


/**
 * optional uint32 round_number = 1;
 * @return {number}
 */
proto.bragi.CsgoCurrentRoundState.prototype.getRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoCurrentRoundState} returns this
 */
proto.bragi.CsgoCurrentRoundState.prototype.setRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional CsgoRoundInfoState info = 2;
 * @return {?proto.bragi.CsgoRoundInfoState}
 */
proto.bragi.CsgoCurrentRoundState.prototype.getInfo = function() {
  return /** @type{?proto.bragi.CsgoRoundInfoState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoRoundInfoState, 2));
};


/**
 * @param {?proto.bragi.CsgoRoundInfoState|undefined} value
 * @return {!proto.bragi.CsgoCurrentRoundState} returns this
*/
proto.bragi.CsgoCurrentRoundState.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoCurrentRoundState} returns this
 */
proto.bragi.CsgoCurrentRoundState.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoCurrentRoundState.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CsgoRoundScoreState score = 3;
 * @return {?proto.bragi.CsgoRoundScoreState}
 */
proto.bragi.CsgoCurrentRoundState.prototype.getScore = function() {
  return /** @type{?proto.bragi.CsgoRoundScoreState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoRoundScoreState, 3));
};


/**
 * @param {?proto.bragi.CsgoRoundScoreState|undefined} value
 * @return {!proto.bragi.CsgoCurrentRoundState} returns this
*/
proto.bragi.CsgoCurrentRoundState.prototype.setScore = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoCurrentRoundState} returns this
 */
proto.bragi.CsgoCurrentRoundState.prototype.clearScore = function() {
  return this.setScore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoCurrentRoundState.prototype.hasScore = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CsgoRoundTimeState time = 4;
 * @return {?proto.bragi.CsgoRoundTimeState}
 */
proto.bragi.CsgoCurrentRoundState.prototype.getTime = function() {
  return /** @type{?proto.bragi.CsgoRoundTimeState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoRoundTimeState, 4));
};


/**
 * @param {?proto.bragi.CsgoRoundTimeState|undefined} value
 * @return {!proto.bragi.CsgoCurrentRoundState} returns this
*/
proto.bragi.CsgoCurrentRoundState.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoCurrentRoundState} returns this
 */
proto.bragi.CsgoCurrentRoundState.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoCurrentRoundState.prototype.hasTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CsgoBombState bomb_state = 5;
 * @return {?proto.bragi.CsgoBombState}
 */
proto.bragi.CsgoCurrentRoundState.prototype.getBombState = function() {
  return /** @type{?proto.bragi.CsgoBombState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoBombState, 5));
};


/**
 * @param {?proto.bragi.CsgoBombState|undefined} value
 * @return {!proto.bragi.CsgoCurrentRoundState} returns this
*/
proto.bragi.CsgoCurrentRoundState.prototype.setBombState = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoCurrentRoundState} returns this
 */
proto.bragi.CsgoCurrentRoundState.prototype.clearBombState = function() {
  return this.setBombState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoCurrentRoundState.prototype.hasBombState = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * map<string, CsgoTeamCurrentRoundState> team_states = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bragi.CsgoTeamCurrentRoundState>}
 */
proto.bragi.CsgoCurrentRoundState.prototype.getTeamStatesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bragi.CsgoTeamCurrentRoundState>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      proto.bragi.CsgoTeamCurrentRoundState));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bragi.CsgoCurrentRoundState} returns this
 */
proto.bragi.CsgoCurrentRoundState.prototype.clearTeamStatesMap = function() {
  this.getTeamStatesMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoPreviousRoundState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoPreviousRoundState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoPreviousRoundState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPreviousRoundState.toObject = function(includeInstance, msg) {
  var f, obj = {
    roundNumber: jspb.Message.getFieldWithDefault(msg, 1, 0),
    info: (f = msg.getInfo()) && proto.bragi.CsgoRoundInfoState.toObject(includeInstance, f),
    score: (f = msg.getScore()) && proto.bragi.CsgoRoundScoreState.toObject(includeInstance, f),
    teamStatesMap: (f = msg.getTeamStatesMap()) ? f.toObject(includeInstance, proto.bragi.CsgoPreviousTeamRoundState.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoPreviousRoundState}
 */
proto.bragi.CsgoPreviousRoundState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoPreviousRoundState;
  return proto.bragi.CsgoPreviousRoundState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoPreviousRoundState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoPreviousRoundState}
 */
proto.bragi.CsgoPreviousRoundState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRoundNumber(value);
      break;
    case 2:
      var value = new proto.bragi.CsgoRoundInfoState;
      reader.readMessage(value,proto.bragi.CsgoRoundInfoState.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 3:
      var value = new proto.bragi.CsgoRoundScoreState;
      reader.readMessage(value,proto.bragi.CsgoRoundScoreState.deserializeBinaryFromReader);
      msg.setScore(value);
      break;
    case 4:
      var value = msg.getTeamStatesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bragi.CsgoPreviousTeamRoundState.deserializeBinaryFromReader, "", new proto.bragi.CsgoPreviousTeamRoundState());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoPreviousRoundState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoPreviousRoundState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoPreviousRoundState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPreviousRoundState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoundNumber();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CsgoRoundInfoState.serializeBinaryToWriter
    );
  }
  f = message.getScore();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.CsgoRoundScoreState.serializeBinaryToWriter
    );
  }
  f = message.getTeamStatesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bragi.CsgoPreviousTeamRoundState.serializeBinaryToWriter);
  }
};


/**
 * optional uint32 round_number = 1;
 * @return {number}
 */
proto.bragi.CsgoPreviousRoundState.prototype.getRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPreviousRoundState} returns this
 */
proto.bragi.CsgoPreviousRoundState.prototype.setRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional CsgoRoundInfoState info = 2;
 * @return {?proto.bragi.CsgoRoundInfoState}
 */
proto.bragi.CsgoPreviousRoundState.prototype.getInfo = function() {
  return /** @type{?proto.bragi.CsgoRoundInfoState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoRoundInfoState, 2));
};


/**
 * @param {?proto.bragi.CsgoRoundInfoState|undefined} value
 * @return {!proto.bragi.CsgoPreviousRoundState} returns this
*/
proto.bragi.CsgoPreviousRoundState.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPreviousRoundState} returns this
 */
proto.bragi.CsgoPreviousRoundState.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPreviousRoundState.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CsgoRoundScoreState score = 3;
 * @return {?proto.bragi.CsgoRoundScoreState}
 */
proto.bragi.CsgoPreviousRoundState.prototype.getScore = function() {
  return /** @type{?proto.bragi.CsgoRoundScoreState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoRoundScoreState, 3));
};


/**
 * @param {?proto.bragi.CsgoRoundScoreState|undefined} value
 * @return {!proto.bragi.CsgoPreviousRoundState} returns this
*/
proto.bragi.CsgoPreviousRoundState.prototype.setScore = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPreviousRoundState} returns this
 */
proto.bragi.CsgoPreviousRoundState.prototype.clearScore = function() {
  return this.setScore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPreviousRoundState.prototype.hasScore = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * map<string, CsgoPreviousTeamRoundState> team_states = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bragi.CsgoPreviousTeamRoundState>}
 */
proto.bragi.CsgoPreviousRoundState.prototype.getTeamStatesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bragi.CsgoPreviousTeamRoundState>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.bragi.CsgoPreviousTeamRoundState));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bragi.CsgoPreviousRoundState} returns this
 */
proto.bragi.CsgoPreviousRoundState.prototype.clearTeamStatesMap = function() {
  this.getTeamStatesMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoRoundInfoState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoRoundInfoState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoRoundInfoState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoRoundInfoState.toObject = function(includeInstance, msg) {
  var f, obj = {
    roundType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    winningTeamUrn: jspb.Message.getFieldWithDefault(msg, 4, ""),
    winReason: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoRoundInfoState}
 */
proto.bragi.CsgoRoundInfoState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoRoundInfoState;
  return proto.bragi.CsgoRoundInfoState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoRoundInfoState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoRoundInfoState}
 */
proto.bragi.CsgoRoundInfoState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bragi.CsgoRoundStateType} */ (reader.readEnum());
      msg.setRoundType(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTime(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setWinningTeamUrn(value);
      break;
    case 5:
      var value = /** @type {!proto.bragi.CsgoWinReason} */ (reader.readEnum());
      msg.setWinReason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoRoundInfoState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoRoundInfoState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoRoundInfoState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoRoundInfoState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoundType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {!proto.bragi.CsgoWinReason} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional CsgoRoundStateType round_type = 1;
 * @return {!proto.bragi.CsgoRoundStateType}
 */
proto.bragi.CsgoRoundInfoState.prototype.getRoundType = function() {
  return /** @type {!proto.bragi.CsgoRoundStateType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bragi.CsgoRoundStateType} value
 * @return {!proto.bragi.CsgoRoundInfoState} returns this
 */
proto.bragi.CsgoRoundInfoState.prototype.setRoundType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp start_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bragi.CsgoRoundInfoState.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bragi.CsgoRoundInfoState} returns this
*/
proto.bragi.CsgoRoundInfoState.prototype.setStartTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoRoundInfoState} returns this
 */
proto.bragi.CsgoRoundInfoState.prototype.clearStartTime = function() {
  return this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoRoundInfoState.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp end_time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bragi.CsgoRoundInfoState.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bragi.CsgoRoundInfoState} returns this
*/
proto.bragi.CsgoRoundInfoState.prototype.setEndTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoRoundInfoState} returns this
 */
proto.bragi.CsgoRoundInfoState.prototype.clearEndTime = function() {
  return this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoRoundInfoState.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string winning_team_urn = 4;
 * @return {string}
 */
proto.bragi.CsgoRoundInfoState.prototype.getWinningTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoRoundInfoState} returns this
 */
proto.bragi.CsgoRoundInfoState.prototype.setWinningTeamUrn = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CsgoRoundInfoState} returns this
 */
proto.bragi.CsgoRoundInfoState.prototype.clearWinningTeamUrn = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoRoundInfoState.prototype.hasWinningTeamUrn = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CsgoWinReason win_reason = 5;
 * @return {!proto.bragi.CsgoWinReason}
 */
proto.bragi.CsgoRoundInfoState.prototype.getWinReason = function() {
  return /** @type {!proto.bragi.CsgoWinReason} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.bragi.CsgoWinReason} value
 * @return {!proto.bragi.CsgoRoundInfoState} returns this
 */
proto.bragi.CsgoRoundInfoState.prototype.setWinReason = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CsgoRoundInfoState} returns this
 */
proto.bragi.CsgoRoundInfoState.prototype.clearWinReason = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoRoundInfoState.prototype.hasWinReason = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoRoundScoreState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoRoundScoreState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoRoundScoreState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoRoundScoreState.toObject = function(includeInstance, msg) {
  var f, obj = {
    homeScore: jspb.Message.getFieldWithDefault(msg, 1, 0),
    awayScore: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoRoundScoreState}
 */
proto.bragi.CsgoRoundScoreState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoRoundScoreState;
  return proto.bragi.CsgoRoundScoreState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoRoundScoreState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoRoundScoreState}
 */
proto.bragi.CsgoRoundScoreState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHomeScore(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAwayScore(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoRoundScoreState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoRoundScoreState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoRoundScoreState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoRoundScoreState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHomeScore();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getAwayScore();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 home_score = 1;
 * @return {number}
 */
proto.bragi.CsgoRoundScoreState.prototype.getHomeScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoRoundScoreState} returns this
 */
proto.bragi.CsgoRoundScoreState.prototype.setHomeScore = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 away_score = 2;
 * @return {number}
 */
proto.bragi.CsgoRoundScoreState.prototype.getAwayScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoRoundScoreState} returns this
 */
proto.bragi.CsgoRoundScoreState.prototype.setAwayScore = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoRoundTimeState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoRoundTimeState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoRoundTimeState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoRoundTimeState.toObject = function(includeInstance, msg) {
  var f, obj = {
    timeRemaining: (f = msg.getTimeRemaining()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    mapTime: (f = msg.getMapTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoRoundTimeState}
 */
proto.bragi.CsgoRoundTimeState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoRoundTimeState;
  return proto.bragi.CsgoRoundTimeState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoRoundTimeState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoRoundTimeState}
 */
proto.bragi.CsgoRoundTimeState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeRemaining(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setMapTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoRoundTimeState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoRoundTimeState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoRoundTimeState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoRoundTimeState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimeRemaining();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getMapTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Duration time_remaining = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoRoundTimeState.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoRoundTimeState} returns this
*/
proto.bragi.CsgoRoundTimeState.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoRoundTimeState} returns this
 */
proto.bragi.CsgoRoundTimeState.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoRoundTimeState.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration map_time = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoRoundTimeState.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoRoundTimeState} returns this
*/
proto.bragi.CsgoRoundTimeState.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoRoundTimeState} returns this
 */
proto.bragi.CsgoRoundTimeState.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoRoundTimeState.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bragi.CsgoBombState.oneofGroups_ = [[1,2,3,4,5,6]];

/**
 * @enum {number}
 */
proto.bragi.CsgoBombState.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  CARRIED: 1,
  DROPPED: 2,
  PLANTING: 3,
  PLANTED: 4,
  DEFUSING: 5,
  DEFUSED: 6
};

/**
 * @return {proto.bragi.CsgoBombState.PayloadCase}
 */
proto.bragi.CsgoBombState.prototype.getPayloadCase = function() {
  return /** @type {proto.bragi.CsgoBombState.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.bragi.CsgoBombState.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoBombState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoBombState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoBombState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoBombState.toObject = function(includeInstance, msg) {
  var f, obj = {
    carried: (f = msg.getCarried()) && proto.bragi.CsgoBombCarriedState.toObject(includeInstance, f),
    dropped: (f = msg.getDropped()) && proto.bragi.CsgoBombDroppedState.toObject(includeInstance, f),
    planting: (f = msg.getPlanting()) && proto.bragi.CsgoBombPlantingState.toObject(includeInstance, f),
    planted: (f = msg.getPlanted()) && proto.bragi.CsgoBombPlantedState.toObject(includeInstance, f),
    defusing: (f = msg.getDefusing()) && proto.bragi.CsgoBombDefusingState.toObject(includeInstance, f),
    defused: (f = msg.getDefused()) && proto.bragi.CsgoBombDefusedState.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoBombState}
 */
proto.bragi.CsgoBombState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoBombState;
  return proto.bragi.CsgoBombState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoBombState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoBombState}
 */
proto.bragi.CsgoBombState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CsgoBombCarriedState;
      reader.readMessage(value,proto.bragi.CsgoBombCarriedState.deserializeBinaryFromReader);
      msg.setCarried(value);
      break;
    case 2:
      var value = new proto.bragi.CsgoBombDroppedState;
      reader.readMessage(value,proto.bragi.CsgoBombDroppedState.deserializeBinaryFromReader);
      msg.setDropped(value);
      break;
    case 3:
      var value = new proto.bragi.CsgoBombPlantingState;
      reader.readMessage(value,proto.bragi.CsgoBombPlantingState.deserializeBinaryFromReader);
      msg.setPlanting(value);
      break;
    case 4:
      var value = new proto.bragi.CsgoBombPlantedState;
      reader.readMessage(value,proto.bragi.CsgoBombPlantedState.deserializeBinaryFromReader);
      msg.setPlanted(value);
      break;
    case 5:
      var value = new proto.bragi.CsgoBombDefusingState;
      reader.readMessage(value,proto.bragi.CsgoBombDefusingState.deserializeBinaryFromReader);
      msg.setDefusing(value);
      break;
    case 6:
      var value = new proto.bragi.CsgoBombDefusedState;
      reader.readMessage(value,proto.bragi.CsgoBombDefusedState.deserializeBinaryFromReader);
      msg.setDefused(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoBombState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoBombState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoBombState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoBombState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCarried();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CsgoBombCarriedState.serializeBinaryToWriter
    );
  }
  f = message.getDropped();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CsgoBombDroppedState.serializeBinaryToWriter
    );
  }
  f = message.getPlanting();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.CsgoBombPlantingState.serializeBinaryToWriter
    );
  }
  f = message.getPlanted();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.CsgoBombPlantedState.serializeBinaryToWriter
    );
  }
  f = message.getDefusing();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bragi.CsgoBombDefusingState.serializeBinaryToWriter
    );
  }
  f = message.getDefused();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bragi.CsgoBombDefusedState.serializeBinaryToWriter
    );
  }
};


/**
 * optional CsgoBombCarriedState carried = 1;
 * @return {?proto.bragi.CsgoBombCarriedState}
 */
proto.bragi.CsgoBombState.prototype.getCarried = function() {
  return /** @type{?proto.bragi.CsgoBombCarriedState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoBombCarriedState, 1));
};


/**
 * @param {?proto.bragi.CsgoBombCarriedState|undefined} value
 * @return {!proto.bragi.CsgoBombState} returns this
*/
proto.bragi.CsgoBombState.prototype.setCarried = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.CsgoBombState.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoBombState} returns this
 */
proto.bragi.CsgoBombState.prototype.clearCarried = function() {
  return this.setCarried(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoBombState.prototype.hasCarried = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CsgoBombDroppedState dropped = 2;
 * @return {?proto.bragi.CsgoBombDroppedState}
 */
proto.bragi.CsgoBombState.prototype.getDropped = function() {
  return /** @type{?proto.bragi.CsgoBombDroppedState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoBombDroppedState, 2));
};


/**
 * @param {?proto.bragi.CsgoBombDroppedState|undefined} value
 * @return {!proto.bragi.CsgoBombState} returns this
*/
proto.bragi.CsgoBombState.prototype.setDropped = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bragi.CsgoBombState.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoBombState} returns this
 */
proto.bragi.CsgoBombState.prototype.clearDropped = function() {
  return this.setDropped(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoBombState.prototype.hasDropped = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CsgoBombPlantingState planting = 3;
 * @return {?proto.bragi.CsgoBombPlantingState}
 */
proto.bragi.CsgoBombState.prototype.getPlanting = function() {
  return /** @type{?proto.bragi.CsgoBombPlantingState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoBombPlantingState, 3));
};


/**
 * @param {?proto.bragi.CsgoBombPlantingState|undefined} value
 * @return {!proto.bragi.CsgoBombState} returns this
*/
proto.bragi.CsgoBombState.prototype.setPlanting = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.bragi.CsgoBombState.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoBombState} returns this
 */
proto.bragi.CsgoBombState.prototype.clearPlanting = function() {
  return this.setPlanting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoBombState.prototype.hasPlanting = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CsgoBombPlantedState planted = 4;
 * @return {?proto.bragi.CsgoBombPlantedState}
 */
proto.bragi.CsgoBombState.prototype.getPlanted = function() {
  return /** @type{?proto.bragi.CsgoBombPlantedState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoBombPlantedState, 4));
};


/**
 * @param {?proto.bragi.CsgoBombPlantedState|undefined} value
 * @return {!proto.bragi.CsgoBombState} returns this
*/
proto.bragi.CsgoBombState.prototype.setPlanted = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.bragi.CsgoBombState.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoBombState} returns this
 */
proto.bragi.CsgoBombState.prototype.clearPlanted = function() {
  return this.setPlanted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoBombState.prototype.hasPlanted = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CsgoBombDefusingState defusing = 5;
 * @return {?proto.bragi.CsgoBombDefusingState}
 */
proto.bragi.CsgoBombState.prototype.getDefusing = function() {
  return /** @type{?proto.bragi.CsgoBombDefusingState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoBombDefusingState, 5));
};


/**
 * @param {?proto.bragi.CsgoBombDefusingState|undefined} value
 * @return {!proto.bragi.CsgoBombState} returns this
*/
proto.bragi.CsgoBombState.prototype.setDefusing = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.bragi.CsgoBombState.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoBombState} returns this
 */
proto.bragi.CsgoBombState.prototype.clearDefusing = function() {
  return this.setDefusing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoBombState.prototype.hasDefusing = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional CsgoBombDefusedState defused = 6;
 * @return {?proto.bragi.CsgoBombDefusedState}
 */
proto.bragi.CsgoBombState.prototype.getDefused = function() {
  return /** @type{?proto.bragi.CsgoBombDefusedState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoBombDefusedState, 6));
};


/**
 * @param {?proto.bragi.CsgoBombDefusedState|undefined} value
 * @return {!proto.bragi.CsgoBombState} returns this
*/
proto.bragi.CsgoBombState.prototype.setDefused = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.bragi.CsgoBombState.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoBombState} returns this
 */
proto.bragi.CsgoBombState.prototype.clearDefused = function() {
  return this.setDefused(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoBombState.prototype.hasDefused = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoBombCarriedState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoBombCarriedState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoBombCarriedState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoBombCarriedState.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    position: (f = msg.getPosition()) && proto.bragi.CsgoPosition.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoBombCarriedState}
 */
proto.bragi.CsgoBombCarriedState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoBombCarriedState;
  return proto.bragi.CsgoBombCarriedState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoBombCarriedState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoBombCarriedState}
 */
proto.bragi.CsgoBombCarriedState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerUrn(value);
      break;
    case 2:
      var value = new proto.bragi.CsgoPosition;
      reader.readMessage(value,proto.bragi.CsgoPosition.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoBombCarriedState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoBombCarriedState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoBombCarriedState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoBombCarriedState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CsgoPosition.serializeBinaryToWriter
    );
  }
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.CsgoBombCarriedState.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoBombCarriedState} returns this
 */
proto.bragi.CsgoBombCarriedState.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CsgoPosition position = 2;
 * @return {?proto.bragi.CsgoPosition}
 */
proto.bragi.CsgoBombCarriedState.prototype.getPosition = function() {
  return /** @type{?proto.bragi.CsgoPosition} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoPosition, 2));
};


/**
 * @param {?proto.bragi.CsgoPosition|undefined} value
 * @return {!proto.bragi.CsgoBombCarriedState} returns this
*/
proto.bragi.CsgoBombCarriedState.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoBombCarriedState} returns this
 */
proto.bragi.CsgoBombCarriedState.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoBombCarriedState.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoBombDroppedState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoBombDroppedState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoBombDroppedState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoBombDroppedState.toObject = function(includeInstance, msg) {
  var f, obj = {
    droppedByPlayerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    position: (f = msg.getPosition()) && proto.bragi.CsgoPosition.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoBombDroppedState}
 */
proto.bragi.CsgoBombDroppedState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoBombDroppedState;
  return proto.bragi.CsgoBombDroppedState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoBombDroppedState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoBombDroppedState}
 */
proto.bragi.CsgoBombDroppedState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDroppedByPlayerUrn(value);
      break;
    case 2:
      var value = new proto.bragi.CsgoPosition;
      reader.readMessage(value,proto.bragi.CsgoPosition.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoBombDroppedState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoBombDroppedState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoBombDroppedState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoBombDroppedState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDroppedByPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CsgoPosition.serializeBinaryToWriter
    );
  }
};


/**
 * optional string dropped_by_player_urn = 1;
 * @return {string}
 */
proto.bragi.CsgoBombDroppedState.prototype.getDroppedByPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoBombDroppedState} returns this
 */
proto.bragi.CsgoBombDroppedState.prototype.setDroppedByPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CsgoPosition position = 2;
 * @return {?proto.bragi.CsgoPosition}
 */
proto.bragi.CsgoBombDroppedState.prototype.getPosition = function() {
  return /** @type{?proto.bragi.CsgoPosition} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoPosition, 2));
};


/**
 * @param {?proto.bragi.CsgoPosition|undefined} value
 * @return {!proto.bragi.CsgoBombDroppedState} returns this
*/
proto.bragi.CsgoBombDroppedState.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoBombDroppedState} returns this
 */
proto.bragi.CsgoBombDroppedState.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoBombDroppedState.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoBombPlantingState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoBombPlantingState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoBombPlantingState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoBombPlantingState.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    position: (f = msg.getPosition()) && proto.bragi.CsgoPosition.toObject(includeInstance, f),
    countdown: (f = msg.getCountdown()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoBombPlantingState}
 */
proto.bragi.CsgoBombPlantingState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoBombPlantingState;
  return proto.bragi.CsgoBombPlantingState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoBombPlantingState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoBombPlantingState}
 */
proto.bragi.CsgoBombPlantingState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerUrn(value);
      break;
    case 2:
      var value = new proto.bragi.CsgoPosition;
      reader.readMessage(value,proto.bragi.CsgoPosition.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 3:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setCountdown(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoBombPlantingState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoBombPlantingState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoBombPlantingState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoBombPlantingState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CsgoPosition.serializeBinaryToWriter
    );
  }
  f = message.getCountdown();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.CsgoBombPlantingState.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoBombPlantingState} returns this
 */
proto.bragi.CsgoBombPlantingState.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CsgoPosition position = 2;
 * @return {?proto.bragi.CsgoPosition}
 */
proto.bragi.CsgoBombPlantingState.prototype.getPosition = function() {
  return /** @type{?proto.bragi.CsgoPosition} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoPosition, 2));
};


/**
 * @param {?proto.bragi.CsgoPosition|undefined} value
 * @return {!proto.bragi.CsgoBombPlantingState} returns this
*/
proto.bragi.CsgoBombPlantingState.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoBombPlantingState} returns this
 */
proto.bragi.CsgoBombPlantingState.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoBombPlantingState.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Duration countdown = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoBombPlantingState.prototype.getCountdown = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoBombPlantingState} returns this
*/
proto.bragi.CsgoBombPlantingState.prototype.setCountdown = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoBombPlantingState} returns this
 */
proto.bragi.CsgoBombPlantingState.prototype.clearCountdown = function() {
  return this.setCountdown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoBombPlantingState.prototype.hasCountdown = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoBombPlantedState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoBombPlantedState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoBombPlantedState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoBombPlantedState.toObject = function(includeInstance, msg) {
  var f, obj = {
    plantedByPlayerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    position: (f = msg.getPosition()) && proto.bragi.CsgoPosition.toObject(includeInstance, f),
    plantedAt: (f = msg.getPlantedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoBombPlantedState}
 */
proto.bragi.CsgoBombPlantedState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoBombPlantedState;
  return proto.bragi.CsgoBombPlantedState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoBombPlantedState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoBombPlantedState}
 */
proto.bragi.CsgoBombPlantedState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlantedByPlayerUrn(value);
      break;
    case 2:
      var value = new proto.bragi.CsgoPosition;
      reader.readMessage(value,proto.bragi.CsgoPosition.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setPlantedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoBombPlantedState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoBombPlantedState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoBombPlantedState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoBombPlantedState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlantedByPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CsgoPosition.serializeBinaryToWriter
    );
  }
  f = message.getPlantedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string planted_by_player_urn = 1;
 * @return {string}
 */
proto.bragi.CsgoBombPlantedState.prototype.getPlantedByPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoBombPlantedState} returns this
 */
proto.bragi.CsgoBombPlantedState.prototype.setPlantedByPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CsgoPosition position = 2;
 * @return {?proto.bragi.CsgoPosition}
 */
proto.bragi.CsgoBombPlantedState.prototype.getPosition = function() {
  return /** @type{?proto.bragi.CsgoPosition} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoPosition, 2));
};


/**
 * @param {?proto.bragi.CsgoPosition|undefined} value
 * @return {!proto.bragi.CsgoBombPlantedState} returns this
*/
proto.bragi.CsgoBombPlantedState.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoBombPlantedState} returns this
 */
proto.bragi.CsgoBombPlantedState.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoBombPlantedState.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp planted_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bragi.CsgoBombPlantedState.prototype.getPlantedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bragi.CsgoBombPlantedState} returns this
*/
proto.bragi.CsgoBombPlantedState.prototype.setPlantedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoBombPlantedState} returns this
 */
proto.bragi.CsgoBombPlantedState.prototype.clearPlantedAt = function() {
  return this.setPlantedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoBombPlantedState.prototype.hasPlantedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoBombDefusingState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoBombDefusingState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoBombDefusingState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoBombDefusingState.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    position: (f = msg.getPosition()) && proto.bragi.CsgoPosition.toObject(includeInstance, f),
    countdown: (f = msg.getCountdown()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    defuseStartedAt: (f = msg.getDefuseStartedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoBombDefusingState}
 */
proto.bragi.CsgoBombDefusingState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoBombDefusingState;
  return proto.bragi.CsgoBombDefusingState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoBombDefusingState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoBombDefusingState}
 */
proto.bragi.CsgoBombDefusingState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerUrn(value);
      break;
    case 2:
      var value = new proto.bragi.CsgoPosition;
      reader.readMessage(value,proto.bragi.CsgoPosition.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 3:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setCountdown(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDefuseStartedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoBombDefusingState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoBombDefusingState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoBombDefusingState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoBombDefusingState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CsgoPosition.serializeBinaryToWriter
    );
  }
  f = message.getCountdown();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getDefuseStartedAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.CsgoBombDefusingState.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoBombDefusingState} returns this
 */
proto.bragi.CsgoBombDefusingState.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CsgoPosition position = 2;
 * @return {?proto.bragi.CsgoPosition}
 */
proto.bragi.CsgoBombDefusingState.prototype.getPosition = function() {
  return /** @type{?proto.bragi.CsgoPosition} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoPosition, 2));
};


/**
 * @param {?proto.bragi.CsgoPosition|undefined} value
 * @return {!proto.bragi.CsgoBombDefusingState} returns this
*/
proto.bragi.CsgoBombDefusingState.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoBombDefusingState} returns this
 */
proto.bragi.CsgoBombDefusingState.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoBombDefusingState.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Duration countdown = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoBombDefusingState.prototype.getCountdown = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoBombDefusingState} returns this
*/
proto.bragi.CsgoBombDefusingState.prototype.setCountdown = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoBombDefusingState} returns this
 */
proto.bragi.CsgoBombDefusingState.prototype.clearCountdown = function() {
  return this.setCountdown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoBombDefusingState.prototype.hasCountdown = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp defuse_started_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bragi.CsgoBombDefusingState.prototype.getDefuseStartedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bragi.CsgoBombDefusingState} returns this
*/
proto.bragi.CsgoBombDefusingState.prototype.setDefuseStartedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoBombDefusingState} returns this
 */
proto.bragi.CsgoBombDefusingState.prototype.clearDefuseStartedAt = function() {
  return this.setDefuseStartedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoBombDefusingState.prototype.hasDefuseStartedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoBombDefusedState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoBombDefusedState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoBombDefusedState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoBombDefusedState.toObject = function(includeInstance, msg) {
  var f, obj = {
    defusedByPlayerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    position: (f = msg.getPosition()) && proto.bragi.CsgoPosition.toObject(includeInstance, f),
    defusedAt: (f = msg.getDefusedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoBombDefusedState}
 */
proto.bragi.CsgoBombDefusedState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoBombDefusedState;
  return proto.bragi.CsgoBombDefusedState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoBombDefusedState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoBombDefusedState}
 */
proto.bragi.CsgoBombDefusedState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefusedByPlayerUrn(value);
      break;
    case 2:
      var value = new proto.bragi.CsgoPosition;
      reader.readMessage(value,proto.bragi.CsgoPosition.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDefusedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoBombDefusedState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoBombDefusedState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoBombDefusedState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoBombDefusedState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDefusedByPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CsgoPosition.serializeBinaryToWriter
    );
  }
  f = message.getDefusedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string defused_by_player_urn = 1;
 * @return {string}
 */
proto.bragi.CsgoBombDefusedState.prototype.getDefusedByPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoBombDefusedState} returns this
 */
proto.bragi.CsgoBombDefusedState.prototype.setDefusedByPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CsgoPosition position = 2;
 * @return {?proto.bragi.CsgoPosition}
 */
proto.bragi.CsgoBombDefusedState.prototype.getPosition = function() {
  return /** @type{?proto.bragi.CsgoPosition} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoPosition, 2));
};


/**
 * @param {?proto.bragi.CsgoPosition|undefined} value
 * @return {!proto.bragi.CsgoBombDefusedState} returns this
*/
proto.bragi.CsgoBombDefusedState.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoBombDefusedState} returns this
 */
proto.bragi.CsgoBombDefusedState.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoBombDefusedState.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp defused_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bragi.CsgoBombDefusedState.prototype.getDefusedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bragi.CsgoBombDefusedState} returns this
*/
proto.bragi.CsgoBombDefusedState.prototype.setDefusedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoBombDefusedState} returns this
 */
proto.bragi.CsgoBombDefusedState.prototype.clearDefusedAt = function() {
  return this.setDefusedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoBombDefusedState.prototype.hasDefusedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoTeamMapStatePartialUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoTeamMapStatePartialUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoTeamMapStatePartialUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTeamMapStatePartialUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    payload: (f = msg.getPayload()) && proto.bragi.CsgoTeamMapStatePartialUpdate.Payload.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoTeamMapStatePartialUpdate}
 */
proto.bragi.CsgoTeamMapStatePartialUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoTeamMapStatePartialUpdate;
  return proto.bragi.CsgoTeamMapStatePartialUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoTeamMapStatePartialUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoTeamMapStatePartialUpdate}
 */
proto.bragi.CsgoTeamMapStatePartialUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeamUrn(value);
      break;
    case 2:
      var value = new proto.bragi.CsgoTeamMapStatePartialUpdate.Payload;
      reader.readMessage(value,proto.bragi.CsgoTeamMapStatePartialUpdate.Payload.deserializeBinaryFromReader);
      msg.setPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoTeamMapStatePartialUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoTeamMapStatePartialUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoTeamMapStatePartialUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTeamMapStatePartialUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CsgoTeamMapStatePartialUpdate.Payload.serializeBinaryToWriter
    );
  }
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bragi.CsgoTeamMapStatePartialUpdate.Payload.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.bragi.CsgoTeamMapStatePartialUpdate.Payload.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  PLAYER_MAP_STATES_PARTIAL_UPDATE: 1
};

/**
 * @return {proto.bragi.CsgoTeamMapStatePartialUpdate.Payload.PayloadCase}
 */
proto.bragi.CsgoTeamMapStatePartialUpdate.Payload.prototype.getPayloadCase = function() {
  return /** @type {proto.bragi.CsgoTeamMapStatePartialUpdate.Payload.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.bragi.CsgoTeamMapStatePartialUpdate.Payload.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoTeamMapStatePartialUpdate.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoTeamMapStatePartialUpdate.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoTeamMapStatePartialUpdate.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTeamMapStatePartialUpdate.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerMapStatesPartialUpdate: (f = msg.getPlayerMapStatesPartialUpdate()) && proto.bragi.CsgoPlayerMapStatePartialUpdate.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoTeamMapStatePartialUpdate.Payload}
 */
proto.bragi.CsgoTeamMapStatePartialUpdate.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoTeamMapStatePartialUpdate.Payload;
  return proto.bragi.CsgoTeamMapStatePartialUpdate.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoTeamMapStatePartialUpdate.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoTeamMapStatePartialUpdate.Payload}
 */
proto.bragi.CsgoTeamMapStatePartialUpdate.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CsgoPlayerMapStatePartialUpdate;
      reader.readMessage(value,proto.bragi.CsgoPlayerMapStatePartialUpdate.deserializeBinaryFromReader);
      msg.setPlayerMapStatesPartialUpdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoTeamMapStatePartialUpdate.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoTeamMapStatePartialUpdate.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoTeamMapStatePartialUpdate.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTeamMapStatePartialUpdate.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerMapStatesPartialUpdate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CsgoPlayerMapStatePartialUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * optional CsgoPlayerMapStatePartialUpdate player_map_states_partial_update = 1;
 * @return {?proto.bragi.CsgoPlayerMapStatePartialUpdate}
 */
proto.bragi.CsgoTeamMapStatePartialUpdate.Payload.prototype.getPlayerMapStatesPartialUpdate = function() {
  return /** @type{?proto.bragi.CsgoPlayerMapStatePartialUpdate} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoPlayerMapStatePartialUpdate, 1));
};


/**
 * @param {?proto.bragi.CsgoPlayerMapStatePartialUpdate|undefined} value
 * @return {!proto.bragi.CsgoTeamMapStatePartialUpdate.Payload} returns this
*/
proto.bragi.CsgoTeamMapStatePartialUpdate.Payload.prototype.setPlayerMapStatesPartialUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.CsgoTeamMapStatePartialUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamMapStatePartialUpdate.Payload} returns this
 */
proto.bragi.CsgoTeamMapStatePartialUpdate.Payload.prototype.clearPlayerMapStatesPartialUpdate = function() {
  return this.setPlayerMapStatesPartialUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamMapStatePartialUpdate.Payload.prototype.hasPlayerMapStatesPartialUpdate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string team_urn = 1;
 * @return {string}
 */
proto.bragi.CsgoTeamMapStatePartialUpdate.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoTeamMapStatePartialUpdate} returns this
 */
proto.bragi.CsgoTeamMapStatePartialUpdate.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Payload payload = 2;
 * @return {?proto.bragi.CsgoTeamMapStatePartialUpdate.Payload}
 */
proto.bragi.CsgoTeamMapStatePartialUpdate.prototype.getPayload = function() {
  return /** @type{?proto.bragi.CsgoTeamMapStatePartialUpdate.Payload} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoTeamMapStatePartialUpdate.Payload, 2));
};


/**
 * @param {?proto.bragi.CsgoTeamMapStatePartialUpdate.Payload|undefined} value
 * @return {!proto.bragi.CsgoTeamMapStatePartialUpdate} returns this
*/
proto.bragi.CsgoTeamMapStatePartialUpdate.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamMapStatePartialUpdate} returns this
 */
proto.bragi.CsgoTeamMapStatePartialUpdate.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamMapStatePartialUpdate.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoTeamMapState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoTeamMapState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoTeamMapState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTeamMapState.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    side: jspb.Message.getFieldWithDefault(msg, 2, 0),
    playerMapStatesMap: (f = msg.getPlayerMapStatesMap()) ? f.toObject(includeInstance, proto.bragi.CsgoPlayerMapState.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoTeamMapState}
 */
proto.bragi.CsgoTeamMapState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoTeamMapState;
  return proto.bragi.CsgoTeamMapState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoTeamMapState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoTeamMapState}
 */
proto.bragi.CsgoTeamMapState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeamUrn(value);
      break;
    case 2:
      var value = /** @type {!proto.bragi.CsgoSide} */ (reader.readEnum());
      msg.setSide(value);
      break;
    case 3:
      var value = msg.getPlayerMapStatesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bragi.CsgoPlayerMapState.deserializeBinaryFromReader, "", new proto.bragi.CsgoPlayerMapState());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoTeamMapState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoTeamMapState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoTeamMapState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTeamMapState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSide();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getPlayerMapStatesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bragi.CsgoPlayerMapState.serializeBinaryToWriter);
  }
};


/**
 * optional string team_urn = 1;
 * @return {string}
 */
proto.bragi.CsgoTeamMapState.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoTeamMapState} returns this
 */
proto.bragi.CsgoTeamMapState.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CsgoSide side = 2;
 * @return {!proto.bragi.CsgoSide}
 */
proto.bragi.CsgoTeamMapState.prototype.getSide = function() {
  return /** @type {!proto.bragi.CsgoSide} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bragi.CsgoSide} value
 * @return {!proto.bragi.CsgoTeamMapState} returns this
 */
proto.bragi.CsgoTeamMapState.prototype.setSide = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * map<string, CsgoPlayerMapState> player_map_states = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bragi.CsgoPlayerMapState>}
 */
proto.bragi.CsgoTeamMapState.prototype.getPlayerMapStatesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bragi.CsgoPlayerMapState>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.bragi.CsgoPlayerMapState));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bragi.CsgoTeamMapState} returns this
 */
proto.bragi.CsgoTeamMapState.prototype.clearPlayerMapStatesMap = function() {
  this.getPlayerMapStatesMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    payload: (f = msg.getPayload()) && proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate}
 */
proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate;
  return proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate}
 */
proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeamUrn(value);
      break;
    case 2:
      var value = new proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload;
      reader.readMessage(value,proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload.deserializeBinaryFromReader);
      msg.setPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload.serializeBinaryToWriter
    );
  }
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  PLAYER_ROUND_STATES_PARTIAL_UPDATE: 1
};

/**
 * @return {proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload.PayloadCase}
 */
proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload.prototype.getPayloadCase = function() {
  return /** @type {proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerRoundStatesPartialUpdate: (f = msg.getPlayerRoundStatesPartialUpdate()) && proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload}
 */
proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload;
  return proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload}
 */
proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate;
      reader.readMessage(value,proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.deserializeBinaryFromReader);
      msg.setPlayerRoundStatesPartialUpdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerRoundStatesPartialUpdate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * optional CsgoPlayerCurrentRoundStatePartialUpdate player_round_states_partial_update = 1;
 * @return {?proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate}
 */
proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload.prototype.getPlayerRoundStatesPartialUpdate = function() {
  return /** @type{?proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate, 1));
};


/**
 * @param {?proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate|undefined} value
 * @return {!proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload} returns this
*/
proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload.prototype.setPlayerRoundStatesPartialUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload} returns this
 */
proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload.prototype.clearPlayerRoundStatesPartialUpdate = function() {
  return this.setPlayerRoundStatesPartialUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload.prototype.hasPlayerRoundStatesPartialUpdate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string team_urn = 1;
 * @return {string}
 */
proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate} returns this
 */
proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Payload payload = 2;
 * @return {?proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload}
 */
proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.prototype.getPayload = function() {
  return /** @type{?proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload, 2));
};


/**
 * @param {?proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.Payload|undefined} value
 * @return {!proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate} returns this
*/
proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate} returns this
 */
proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamCurrentRoundStatePartialUpdate.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoTeamCurrentRoundState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoTeamCurrentRoundState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoTeamCurrentRoundState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTeamCurrentRoundState.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    playerRoundStatesMap: (f = msg.getPlayerRoundStatesMap()) ? f.toObject(includeInstance, proto.bragi.CsgoPlayerCurrentRoundState.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoTeamCurrentRoundState}
 */
proto.bragi.CsgoTeamCurrentRoundState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoTeamCurrentRoundState;
  return proto.bragi.CsgoTeamCurrentRoundState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoTeamCurrentRoundState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoTeamCurrentRoundState}
 */
proto.bragi.CsgoTeamCurrentRoundState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeamUrn(value);
      break;
    case 2:
      var value = msg.getPlayerRoundStatesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bragi.CsgoPlayerCurrentRoundState.deserializeBinaryFromReader, "", new proto.bragi.CsgoPlayerCurrentRoundState());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoTeamCurrentRoundState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoTeamCurrentRoundState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoTeamCurrentRoundState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTeamCurrentRoundState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlayerRoundStatesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bragi.CsgoPlayerCurrentRoundState.serializeBinaryToWriter);
  }
};


/**
 * optional string team_urn = 1;
 * @return {string}
 */
proto.bragi.CsgoTeamCurrentRoundState.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoTeamCurrentRoundState} returns this
 */
proto.bragi.CsgoTeamCurrentRoundState.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, CsgoPlayerCurrentRoundState> player_round_states = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bragi.CsgoPlayerCurrentRoundState>}
 */
proto.bragi.CsgoTeamCurrentRoundState.prototype.getPlayerRoundStatesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bragi.CsgoPlayerCurrentRoundState>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.bragi.CsgoPlayerCurrentRoundState));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bragi.CsgoTeamCurrentRoundState} returns this
 */
proto.bragi.CsgoTeamCurrentRoundState.prototype.clearPlayerRoundStatesMap = function() {
  this.getPlayerRoundStatesMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoPreviousTeamRoundState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoPreviousTeamRoundState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoPreviousTeamRoundState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPreviousTeamRoundState.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    playersMap: (f = msg.getPlayersMap()) ? f.toObject(includeInstance, proto.bragi.CsgoPlayerPreviousRoundState.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoPreviousTeamRoundState}
 */
proto.bragi.CsgoPreviousTeamRoundState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoPreviousTeamRoundState;
  return proto.bragi.CsgoPreviousTeamRoundState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoPreviousTeamRoundState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoPreviousTeamRoundState}
 */
proto.bragi.CsgoPreviousTeamRoundState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeamUrn(value);
      break;
    case 2:
      var value = msg.getPlayersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bragi.CsgoPlayerPreviousRoundState.deserializeBinaryFromReader, "", new proto.bragi.CsgoPlayerPreviousRoundState());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoPreviousTeamRoundState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoPreviousTeamRoundState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoPreviousTeamRoundState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPreviousTeamRoundState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlayersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bragi.CsgoPlayerPreviousRoundState.serializeBinaryToWriter);
  }
};


/**
 * optional string team_urn = 1;
 * @return {string}
 */
proto.bragi.CsgoPreviousTeamRoundState.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoPreviousTeamRoundState} returns this
 */
proto.bragi.CsgoPreviousTeamRoundState.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, CsgoPlayerPreviousRoundState> players = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bragi.CsgoPlayerPreviousRoundState>}
 */
proto.bragi.CsgoPreviousTeamRoundState.prototype.getPlayersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bragi.CsgoPlayerPreviousRoundState>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.bragi.CsgoPlayerPreviousRoundState));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bragi.CsgoPreviousTeamRoundState} returns this
 */
proto.bragi.CsgoPreviousTeamRoundState.prototype.clearPlayersMap = function() {
  this.getPlayersMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoPlayerMapStatePartialUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoPlayerMapStatePartialUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoPlayerMapStatePartialUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayerMapStatePartialUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    payload: (f = msg.getPayload()) && proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoPlayerMapStatePartialUpdate}
 */
proto.bragi.CsgoPlayerMapStatePartialUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoPlayerMapStatePartialUpdate;
  return proto.bragi.CsgoPlayerMapStatePartialUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoPlayerMapStatePartialUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoPlayerMapStatePartialUpdate}
 */
proto.bragi.CsgoPlayerMapStatePartialUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerUrn(value);
      break;
    case 2:
      var value = new proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload;
      reader.readMessage(value,proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload.deserializeBinaryFromReader);
      msg.setPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoPlayerMapStatePartialUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoPlayerMapStatePartialUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoPlayerMapStatePartialUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayerMapStatePartialUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload.serializeBinaryToWriter
    );
  }
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  STATISTICS: 1
};

/**
 * @return {proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload.PayloadCase}
 */
proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload.prototype.getPayloadCase = function() {
  return /** @type {proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
    statistics: (f = msg.getStatistics()) && proto.bragi.CsgoPlayerMapStatisticsState.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload}
 */
proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload;
  return proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload}
 */
proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CsgoPlayerMapStatisticsState;
      reader.readMessage(value,proto.bragi.CsgoPlayerMapStatisticsState.deserializeBinaryFromReader);
      msg.setStatistics(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatistics();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CsgoPlayerMapStatisticsState.serializeBinaryToWriter
    );
  }
};


/**
 * optional CsgoPlayerMapStatisticsState statistics = 1;
 * @return {?proto.bragi.CsgoPlayerMapStatisticsState}
 */
proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload.prototype.getStatistics = function() {
  return /** @type{?proto.bragi.CsgoPlayerMapStatisticsState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoPlayerMapStatisticsState, 1));
};


/**
 * @param {?proto.bragi.CsgoPlayerMapStatisticsState|undefined} value
 * @return {!proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload} returns this
*/
proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload.prototype.setStatistics = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload} returns this
 */
proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload.prototype.clearStatistics = function() {
  return this.setStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload.prototype.hasStatistics = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.CsgoPlayerMapStatePartialUpdate.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoPlayerMapStatePartialUpdate} returns this
 */
proto.bragi.CsgoPlayerMapStatePartialUpdate.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Payload payload = 2;
 * @return {?proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload}
 */
proto.bragi.CsgoPlayerMapStatePartialUpdate.prototype.getPayload = function() {
  return /** @type{?proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload, 2));
};


/**
 * @param {?proto.bragi.CsgoPlayerMapStatePartialUpdate.Payload|undefined} value
 * @return {!proto.bragi.CsgoPlayerMapStatePartialUpdate} returns this
*/
proto.bragi.CsgoPlayerMapStatePartialUpdate.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerMapStatePartialUpdate} returns this
 */
proto.bragi.CsgoPlayerMapStatePartialUpdate.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerMapStatePartialUpdate.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoPlayerMapState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoPlayerMapState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoPlayerMapState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayerMapState.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    playerName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    statistics: (f = msg.getStatistics()) && proto.bragi.CsgoPlayerMapStatisticsState.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoPlayerMapState}
 */
proto.bragi.CsgoPlayerMapState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoPlayerMapState;
  return proto.bragi.CsgoPlayerMapState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoPlayerMapState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoPlayerMapState}
 */
proto.bragi.CsgoPlayerMapState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerUrn(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerName(value);
      break;
    case 3:
      var value = new proto.bragi.CsgoPlayerMapStatisticsState;
      reader.readMessage(value,proto.bragi.CsgoPlayerMapStatisticsState.deserializeBinaryFromReader);
      msg.setStatistics(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoPlayerMapState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoPlayerMapState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoPlayerMapState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayerMapState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlayerName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatistics();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.CsgoPlayerMapStatisticsState.serializeBinaryToWriter
    );
  }
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.CsgoPlayerMapState.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoPlayerMapState} returns this
 */
proto.bragi.CsgoPlayerMapState.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string player_name = 2;
 * @return {string}
 */
proto.bragi.CsgoPlayerMapState.prototype.getPlayerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoPlayerMapState} returns this
 */
proto.bragi.CsgoPlayerMapState.prototype.setPlayerName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional CsgoPlayerMapStatisticsState statistics = 3;
 * @return {?proto.bragi.CsgoPlayerMapStatisticsState}
 */
proto.bragi.CsgoPlayerMapState.prototype.getStatistics = function() {
  return /** @type{?proto.bragi.CsgoPlayerMapStatisticsState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoPlayerMapStatisticsState, 3));
};


/**
 * @param {?proto.bragi.CsgoPlayerMapStatisticsState|undefined} value
 * @return {!proto.bragi.CsgoPlayerMapState} returns this
*/
proto.bragi.CsgoPlayerMapState.prototype.setStatistics = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerMapState} returns this
 */
proto.bragi.CsgoPlayerMapState.prototype.clearStatistics = function() {
  return this.setStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerMapState.prototype.hasStatistics = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoPlayerMapStatisticsState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoPlayerMapStatisticsState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoPlayerMapStatisticsState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayerMapStatisticsState.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    statistics: (f = msg.getStatistics()) && proto.bragi.CsgoPlayerStatistics.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoPlayerMapStatisticsState}
 */
proto.bragi.CsgoPlayerMapStatisticsState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoPlayerMapStatisticsState;
  return proto.bragi.CsgoPlayerMapStatisticsState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoPlayerMapStatisticsState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoPlayerMapStatisticsState}
 */
proto.bragi.CsgoPlayerMapStatisticsState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerUrn(value);
      break;
    case 2:
      var value = new proto.bragi.CsgoPlayerStatistics;
      reader.readMessage(value,proto.bragi.CsgoPlayerStatistics.deserializeBinaryFromReader);
      msg.setStatistics(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoPlayerMapStatisticsState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoPlayerMapStatisticsState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoPlayerMapStatisticsState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayerMapStatisticsState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatistics();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CsgoPlayerStatistics.serializeBinaryToWriter
    );
  }
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.CsgoPlayerMapStatisticsState.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoPlayerMapStatisticsState} returns this
 */
proto.bragi.CsgoPlayerMapStatisticsState.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CsgoPlayerStatistics statistics = 2;
 * @return {?proto.bragi.CsgoPlayerStatistics}
 */
proto.bragi.CsgoPlayerMapStatisticsState.prototype.getStatistics = function() {
  return /** @type{?proto.bragi.CsgoPlayerStatistics} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoPlayerStatistics, 2));
};


/**
 * @param {?proto.bragi.CsgoPlayerStatistics|undefined} value
 * @return {!proto.bragi.CsgoPlayerMapStatisticsState} returns this
*/
proto.bragi.CsgoPlayerMapStatisticsState.prototype.setStatistics = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerMapStatisticsState} returns this
 */
proto.bragi.CsgoPlayerMapStatisticsState.prototype.clearStatistics = function() {
  return this.setStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerMapStatisticsState.prototype.hasStatistics = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    payload: (f = msg.getPayload()) && proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate}
 */
proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate;
  return proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate}
 */
proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerUrn(value);
      break;
    case 2:
      var value = new proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload;
      reader.readMessage(value,proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.deserializeBinaryFromReader);
      msg.setPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.serializeBinaryToWriter
    );
  }
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  STATISTICS: 1,
  ITEMS: 2,
  POSITION: 3
};

/**
 * @return {proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.PayloadCase}
 */
proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.prototype.getPayloadCase = function() {
  return /** @type {proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
    statistics: (f = msg.getStatistics()) && proto.bragi.CsgoPlayerCurrentRoundStatisticsState.toObject(includeInstance, f),
    items: (f = msg.getItems()) && proto.bragi.CsgoPlayerItemsState.toObject(includeInstance, f),
    position: (f = msg.getPosition()) && proto.bragi.CsgoPlayerPositionState.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload}
 */
proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload;
  return proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload}
 */
proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CsgoPlayerCurrentRoundStatisticsState;
      reader.readMessage(value,proto.bragi.CsgoPlayerCurrentRoundStatisticsState.deserializeBinaryFromReader);
      msg.setStatistics(value);
      break;
    case 2:
      var value = new proto.bragi.CsgoPlayerItemsState;
      reader.readMessage(value,proto.bragi.CsgoPlayerItemsState.deserializeBinaryFromReader);
      msg.setItems(value);
      break;
    case 3:
      var value = new proto.bragi.CsgoPlayerPositionState;
      reader.readMessage(value,proto.bragi.CsgoPlayerPositionState.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatistics();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CsgoPlayerCurrentRoundStatisticsState.serializeBinaryToWriter
    );
  }
  f = message.getItems();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CsgoPlayerItemsState.serializeBinaryToWriter
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.CsgoPlayerPositionState.serializeBinaryToWriter
    );
  }
};


/**
 * optional CsgoPlayerCurrentRoundStatisticsState statistics = 1;
 * @return {?proto.bragi.CsgoPlayerCurrentRoundStatisticsState}
 */
proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.prototype.getStatistics = function() {
  return /** @type{?proto.bragi.CsgoPlayerCurrentRoundStatisticsState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoPlayerCurrentRoundStatisticsState, 1));
};


/**
 * @param {?proto.bragi.CsgoPlayerCurrentRoundStatisticsState|undefined} value
 * @return {!proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload} returns this
*/
proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.prototype.setStatistics = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload} returns this
 */
proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.prototype.clearStatistics = function() {
  return this.setStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.prototype.hasStatistics = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CsgoPlayerItemsState items = 2;
 * @return {?proto.bragi.CsgoPlayerItemsState}
 */
proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.prototype.getItems = function() {
  return /** @type{?proto.bragi.CsgoPlayerItemsState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoPlayerItemsState, 2));
};


/**
 * @param {?proto.bragi.CsgoPlayerItemsState|undefined} value
 * @return {!proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload} returns this
*/
proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.prototype.setItems = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload} returns this
 */
proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.prototype.clearItems = function() {
  return this.setItems(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.prototype.hasItems = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CsgoPlayerPositionState position = 3;
 * @return {?proto.bragi.CsgoPlayerPositionState}
 */
proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.prototype.getPosition = function() {
  return /** @type{?proto.bragi.CsgoPlayerPositionState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoPlayerPositionState, 3));
};


/**
 * @param {?proto.bragi.CsgoPlayerPositionState|undefined} value
 * @return {!proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload} returns this
*/
proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.prototype.setPosition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload} returns this
 */
proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate} returns this
 */
proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Payload payload = 2;
 * @return {?proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload}
 */
proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.prototype.getPayload = function() {
  return /** @type{?proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload, 2));
};


/**
 * @param {?proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.Payload|undefined} value
 * @return {!proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate} returns this
*/
proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate} returns this
 */
proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerCurrentRoundStatePartialUpdate.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoPlayerCurrentRoundState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoPlayerCurrentRoundState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoPlayerCurrentRoundState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayerCurrentRoundState.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    playerName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    statistics: (f = msg.getStatistics()) && proto.bragi.CsgoPlayerCurrentRoundStatisticsState.toObject(includeInstance, f),
    items: (f = msg.getItems()) && proto.bragi.CsgoPlayerItemsState.toObject(includeInstance, f),
    position: (f = msg.getPosition()) && proto.bragi.CsgoPlayerPositionState.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoPlayerCurrentRoundState}
 */
proto.bragi.CsgoPlayerCurrentRoundState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoPlayerCurrentRoundState;
  return proto.bragi.CsgoPlayerCurrentRoundState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoPlayerCurrentRoundState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoPlayerCurrentRoundState}
 */
proto.bragi.CsgoPlayerCurrentRoundState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerUrn(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerName(value);
      break;
    case 3:
      var value = new proto.bragi.CsgoPlayerCurrentRoundStatisticsState;
      reader.readMessage(value,proto.bragi.CsgoPlayerCurrentRoundStatisticsState.deserializeBinaryFromReader);
      msg.setStatistics(value);
      break;
    case 4:
      var value = new proto.bragi.CsgoPlayerItemsState;
      reader.readMessage(value,proto.bragi.CsgoPlayerItemsState.deserializeBinaryFromReader);
      msg.setItems(value);
      break;
    case 5:
      var value = new proto.bragi.CsgoPlayerPositionState;
      reader.readMessage(value,proto.bragi.CsgoPlayerPositionState.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoPlayerCurrentRoundState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoPlayerCurrentRoundState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoPlayerCurrentRoundState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayerCurrentRoundState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlayerName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatistics();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.CsgoPlayerCurrentRoundStatisticsState.serializeBinaryToWriter
    );
  }
  f = message.getItems();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.CsgoPlayerItemsState.serializeBinaryToWriter
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bragi.CsgoPlayerPositionState.serializeBinaryToWriter
    );
  }
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.CsgoPlayerCurrentRoundState.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoPlayerCurrentRoundState} returns this
 */
proto.bragi.CsgoPlayerCurrentRoundState.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string player_name = 2;
 * @return {string}
 */
proto.bragi.CsgoPlayerCurrentRoundState.prototype.getPlayerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoPlayerCurrentRoundState} returns this
 */
proto.bragi.CsgoPlayerCurrentRoundState.prototype.setPlayerName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional CsgoPlayerCurrentRoundStatisticsState statistics = 3;
 * @return {?proto.bragi.CsgoPlayerCurrentRoundStatisticsState}
 */
proto.bragi.CsgoPlayerCurrentRoundState.prototype.getStatistics = function() {
  return /** @type{?proto.bragi.CsgoPlayerCurrentRoundStatisticsState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoPlayerCurrentRoundStatisticsState, 3));
};


/**
 * @param {?proto.bragi.CsgoPlayerCurrentRoundStatisticsState|undefined} value
 * @return {!proto.bragi.CsgoPlayerCurrentRoundState} returns this
*/
proto.bragi.CsgoPlayerCurrentRoundState.prototype.setStatistics = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerCurrentRoundState} returns this
 */
proto.bragi.CsgoPlayerCurrentRoundState.prototype.clearStatistics = function() {
  return this.setStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerCurrentRoundState.prototype.hasStatistics = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CsgoPlayerItemsState items = 4;
 * @return {?proto.bragi.CsgoPlayerItemsState}
 */
proto.bragi.CsgoPlayerCurrentRoundState.prototype.getItems = function() {
  return /** @type{?proto.bragi.CsgoPlayerItemsState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoPlayerItemsState, 4));
};


/**
 * @param {?proto.bragi.CsgoPlayerItemsState|undefined} value
 * @return {!proto.bragi.CsgoPlayerCurrentRoundState} returns this
*/
proto.bragi.CsgoPlayerCurrentRoundState.prototype.setItems = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerCurrentRoundState} returns this
 */
proto.bragi.CsgoPlayerCurrentRoundState.prototype.clearItems = function() {
  return this.setItems(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerCurrentRoundState.prototype.hasItems = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CsgoPlayerPositionState position = 5;
 * @return {?proto.bragi.CsgoPlayerPositionState}
 */
proto.bragi.CsgoPlayerCurrentRoundState.prototype.getPosition = function() {
  return /** @type{?proto.bragi.CsgoPlayerPositionState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoPlayerPositionState, 5));
};


/**
 * @param {?proto.bragi.CsgoPlayerPositionState|undefined} value
 * @return {!proto.bragi.CsgoPlayerCurrentRoundState} returns this
*/
proto.bragi.CsgoPlayerCurrentRoundState.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerCurrentRoundState} returns this
 */
proto.bragi.CsgoPlayerCurrentRoundState.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerCurrentRoundState.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoPlayerCurrentRoundStatisticsState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoPlayerCurrentRoundStatisticsState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoPlayerCurrentRoundStatisticsState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayerCurrentRoundStatisticsState.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    alive: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    active: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    health: jspb.Message.getFieldWithDefault(msg, 5, 0),
    armor: jspb.Message.getFieldWithDefault(msg, 6, 0),
    balance: jspb.Message.getFieldWithDefault(msg, 7, 0),
    primaryWeapon: jspb.Message.getFieldWithDefault(msg, 8, ""),
    secondaryWeapon: jspb.Message.getFieldWithDefault(msg, 9, ""),
    equipmentValue: jspb.Message.getFieldWithDefault(msg, 10, 0),
    statistics: (f = msg.getStatistics()) && proto.bragi.CsgoPlayerStatistics.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoPlayerCurrentRoundStatisticsState}
 */
proto.bragi.CsgoPlayerCurrentRoundStatisticsState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoPlayerCurrentRoundStatisticsState;
  return proto.bragi.CsgoPlayerCurrentRoundStatisticsState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoPlayerCurrentRoundStatisticsState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoPlayerCurrentRoundStatisticsState}
 */
proto.bragi.CsgoPlayerCurrentRoundStatisticsState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerUrn(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAlive(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActive(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHealth(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setArmor(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBalance(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrimaryWeapon(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecondaryWeapon(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEquipmentValue(value);
      break;
    case 11:
      var value = new proto.bragi.CsgoPlayerStatistics;
      reader.readMessage(value,proto.bragi.CsgoPlayerStatistics.deserializeBinaryFromReader);
      msg.setStatistics(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoPlayerCurrentRoundStatisticsState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoPlayerCurrentRoundStatisticsState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoPlayerCurrentRoundStatisticsState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayerCurrentRoundStatisticsState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAlive();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getActive();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getHealth();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getArmor();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getBalance();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getPrimaryWeapon();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getSecondaryWeapon();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getEquipmentValue();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getStatistics();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.bragi.CsgoPlayerStatistics.serializeBinaryToWriter
    );
  }
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.CsgoPlayerCurrentRoundStatisticsState.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoPlayerCurrentRoundStatisticsState} returns this
 */
proto.bragi.CsgoPlayerCurrentRoundStatisticsState.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool alive = 2;
 * @return {boolean}
 */
proto.bragi.CsgoPlayerCurrentRoundStatisticsState.prototype.getAlive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.CsgoPlayerCurrentRoundStatisticsState} returns this
 */
proto.bragi.CsgoPlayerCurrentRoundStatisticsState.prototype.setAlive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool active = 3;
 * @return {boolean}
 */
proto.bragi.CsgoPlayerCurrentRoundStatisticsState.prototype.getActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.CsgoPlayerCurrentRoundStatisticsState} returns this
 */
proto.bragi.CsgoPlayerCurrentRoundStatisticsState.prototype.setActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional uint32 health = 5;
 * @return {number}
 */
proto.bragi.CsgoPlayerCurrentRoundStatisticsState.prototype.getHealth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPlayerCurrentRoundStatisticsState} returns this
 */
proto.bragi.CsgoPlayerCurrentRoundStatisticsState.prototype.setHealth = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 armor = 6;
 * @return {number}
 */
proto.bragi.CsgoPlayerCurrentRoundStatisticsState.prototype.getArmor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPlayerCurrentRoundStatisticsState} returns this
 */
proto.bragi.CsgoPlayerCurrentRoundStatisticsState.prototype.setArmor = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 balance = 7;
 * @return {number}
 */
proto.bragi.CsgoPlayerCurrentRoundStatisticsState.prototype.getBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPlayerCurrentRoundStatisticsState} returns this
 */
proto.bragi.CsgoPlayerCurrentRoundStatisticsState.prototype.setBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string primary_weapon = 8;
 * @return {string}
 */
proto.bragi.CsgoPlayerCurrentRoundStatisticsState.prototype.getPrimaryWeapon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoPlayerCurrentRoundStatisticsState} returns this
 */
proto.bragi.CsgoPlayerCurrentRoundStatisticsState.prototype.setPrimaryWeapon = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string secondary_weapon = 9;
 * @return {string}
 */
proto.bragi.CsgoPlayerCurrentRoundStatisticsState.prototype.getSecondaryWeapon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoPlayerCurrentRoundStatisticsState} returns this
 */
proto.bragi.CsgoPlayerCurrentRoundStatisticsState.prototype.setSecondaryWeapon = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional uint32 equipment_value = 10;
 * @return {number}
 */
proto.bragi.CsgoPlayerCurrentRoundStatisticsState.prototype.getEquipmentValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPlayerCurrentRoundStatisticsState} returns this
 */
proto.bragi.CsgoPlayerCurrentRoundStatisticsState.prototype.setEquipmentValue = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional CsgoPlayerStatistics statistics = 11;
 * @return {?proto.bragi.CsgoPlayerStatistics}
 */
proto.bragi.CsgoPlayerCurrentRoundStatisticsState.prototype.getStatistics = function() {
  return /** @type{?proto.bragi.CsgoPlayerStatistics} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoPlayerStatistics, 11));
};


/**
 * @param {?proto.bragi.CsgoPlayerStatistics|undefined} value
 * @return {!proto.bragi.CsgoPlayerCurrentRoundStatisticsState} returns this
*/
proto.bragi.CsgoPlayerCurrentRoundStatisticsState.prototype.setStatistics = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerCurrentRoundStatisticsState} returns this
 */
proto.bragi.CsgoPlayerCurrentRoundStatisticsState.prototype.clearStatistics = function() {
  return this.setStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerCurrentRoundStatisticsState.prototype.hasStatistics = function() {
  return jspb.Message.getField(this, 11) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.CsgoPlayerItemsState.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoPlayerItemsState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoPlayerItemsState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoPlayerItemsState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayerItemsState.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.bragi.CsgoPlayerItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoPlayerItemsState}
 */
proto.bragi.CsgoPlayerItemsState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoPlayerItemsState;
  return proto.bragi.CsgoPlayerItemsState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoPlayerItemsState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoPlayerItemsState}
 */
proto.bragi.CsgoPlayerItemsState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerUrn(value);
      break;
    case 2:
      var value = new proto.bragi.CsgoPlayerItem;
      reader.readMessage(value,proto.bragi.CsgoPlayerItem.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoPlayerItemsState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoPlayerItemsState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoPlayerItemsState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayerItemsState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.bragi.CsgoPlayerItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.CsgoPlayerItemsState.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoPlayerItemsState} returns this
 */
proto.bragi.CsgoPlayerItemsState.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated CsgoPlayerItem items = 2;
 * @return {!Array<!proto.bragi.CsgoPlayerItem>}
 */
proto.bragi.CsgoPlayerItemsState.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.bragi.CsgoPlayerItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.CsgoPlayerItem, 2));
};


/**
 * @param {!Array<!proto.bragi.CsgoPlayerItem>} value
 * @return {!proto.bragi.CsgoPlayerItemsState} returns this
*/
proto.bragi.CsgoPlayerItemsState.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bragi.CsgoPlayerItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.CsgoPlayerItem}
 */
proto.bragi.CsgoPlayerItemsState.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bragi.CsgoPlayerItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CsgoPlayerItemsState} returns this
 */
proto.bragi.CsgoPlayerItemsState.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoPlayerPreviousRoundState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoPlayerPreviousRoundState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoPlayerPreviousRoundState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayerPreviousRoundState.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    playerName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    statistics: (f = msg.getStatistics()) && proto.bragi.CsgoPlayerStatistics.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoPlayerPreviousRoundState}
 */
proto.bragi.CsgoPlayerPreviousRoundState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoPlayerPreviousRoundState;
  return proto.bragi.CsgoPlayerPreviousRoundState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoPlayerPreviousRoundState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoPlayerPreviousRoundState}
 */
proto.bragi.CsgoPlayerPreviousRoundState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerUrn(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerName(value);
      break;
    case 3:
      var value = new proto.bragi.CsgoPlayerStatistics;
      reader.readMessage(value,proto.bragi.CsgoPlayerStatistics.deserializeBinaryFromReader);
      msg.setStatistics(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoPlayerPreviousRoundState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoPlayerPreviousRoundState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoPlayerPreviousRoundState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayerPreviousRoundState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlayerName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatistics();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.CsgoPlayerStatistics.serializeBinaryToWriter
    );
  }
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.CsgoPlayerPreviousRoundState.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoPlayerPreviousRoundState} returns this
 */
proto.bragi.CsgoPlayerPreviousRoundState.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string player_name = 2;
 * @return {string}
 */
proto.bragi.CsgoPlayerPreviousRoundState.prototype.getPlayerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoPlayerPreviousRoundState} returns this
 */
proto.bragi.CsgoPlayerPreviousRoundState.prototype.setPlayerName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional CsgoPlayerStatistics statistics = 3;
 * @return {?proto.bragi.CsgoPlayerStatistics}
 */
proto.bragi.CsgoPlayerPreviousRoundState.prototype.getStatistics = function() {
  return /** @type{?proto.bragi.CsgoPlayerStatistics} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoPlayerStatistics, 3));
};


/**
 * @param {?proto.bragi.CsgoPlayerStatistics|undefined} value
 * @return {!proto.bragi.CsgoPlayerPreviousRoundState} returns this
*/
proto.bragi.CsgoPlayerPreviousRoundState.prototype.setStatistics = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerPreviousRoundState} returns this
 */
proto.bragi.CsgoPlayerPreviousRoundState.prototype.clearStatistics = function() {
  return this.setStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerPreviousRoundState.prototype.hasStatistics = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoPlayerPositionState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoPlayerPositionState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoPlayerPositionState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayerPositionState.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    position: (f = msg.getPosition()) && proto.bragi.CsgoPosition.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoPlayerPositionState}
 */
proto.bragi.CsgoPlayerPositionState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoPlayerPositionState;
  return proto.bragi.CsgoPlayerPositionState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoPlayerPositionState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoPlayerPositionState}
 */
proto.bragi.CsgoPlayerPositionState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerUrn(value);
      break;
    case 2:
      var value = new proto.bragi.CsgoPosition;
      reader.readMessage(value,proto.bragi.CsgoPosition.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoPlayerPositionState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoPlayerPositionState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoPlayerPositionState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayerPositionState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CsgoPosition.serializeBinaryToWriter
    );
  }
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.CsgoPlayerPositionState.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoPlayerPositionState} returns this
 */
proto.bragi.CsgoPlayerPositionState.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CsgoPosition position = 2;
 * @return {?proto.bragi.CsgoPosition}
 */
proto.bragi.CsgoPlayerPositionState.prototype.getPosition = function() {
  return /** @type{?proto.bragi.CsgoPosition} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoPosition, 2));
};


/**
 * @param {?proto.bragi.CsgoPosition|undefined} value
 * @return {!proto.bragi.CsgoPlayerPositionState} returns this
*/
proto.bragi.CsgoPlayerPositionState.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerPositionState} returns this
 */
proto.bragi.CsgoPlayerPositionState.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerPositionState.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoPlayerStatistics.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoPlayerStatistics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoPlayerStatistics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayerStatistics.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    kills: jspb.Message.getFieldWithDefault(msg, 2, 0),
    friendlyKills: jspb.Message.getFieldWithDefault(msg, 3, 0),
    enemyKills: jspb.Message.getFieldWithDefault(msg, 4, 0),
    selfKills: jspb.Message.getFieldWithDefault(msg, 5, 0),
    deaths: jspb.Message.getFieldWithDefault(msg, 6, 0),
    assists: jspb.Message.getFieldWithDefault(msg, 7, 0),
    headshots: jspb.Message.getFieldWithDefault(msg, 8, 0),
    friendlyDamageDealtArmor: jspb.Message.getFieldWithDefault(msg, 9, 0),
    friendlyDamageDealtHealth: jspb.Message.getFieldWithDefault(msg, 10, 0),
    enemyDamageDealtArmor: jspb.Message.getFieldWithDefault(msg, 11, 0),
    enemyDamageDealtHealth: jspb.Message.getFieldWithDefault(msg, 12, 0),
    enemyDamageDealtArmorRaw: jspb.Message.getFieldWithDefault(msg, 13, 0),
    enemyDamageDealtHealthRaw: jspb.Message.getFieldWithDefault(msg, 14, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoPlayerStatistics}
 */
proto.bragi.CsgoPlayerStatistics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoPlayerStatistics;
  return proto.bragi.CsgoPlayerStatistics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoPlayerStatistics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoPlayerStatistics}
 */
proto.bragi.CsgoPlayerStatistics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerUrn(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setKills(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFriendlyKills(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEnemyKills(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSelfKills(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDeaths(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAssists(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHeadshots(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFriendlyDamageDealtArmor(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFriendlyDamageDealtHealth(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEnemyDamageDealtArmor(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEnemyDamageDealtHealth(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEnemyDamageDealtArmorRaw(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEnemyDamageDealtHealthRaw(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoPlayerStatistics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoPlayerStatistics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoPlayerStatistics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayerStatistics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKills();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getFriendlyKills();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getEnemyKills();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getSelfKills();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getDeaths();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getAssists();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getHeadshots();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeUint32(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeUint32(
      12,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeUint32(
      13,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeUint32(
      14,
      f
    );
  }
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.CsgoPlayerStatistics.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 kills = 2;
 * @return {number}
 */
proto.bragi.CsgoPlayerStatistics.prototype.getKills = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.setKills = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 friendly_kills = 3;
 * @return {number}
 */
proto.bragi.CsgoPlayerStatistics.prototype.getFriendlyKills = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.setFriendlyKills = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 enemy_kills = 4;
 * @return {number}
 */
proto.bragi.CsgoPlayerStatistics.prototype.getEnemyKills = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.setEnemyKills = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 self_kills = 5;
 * @return {number}
 */
proto.bragi.CsgoPlayerStatistics.prototype.getSelfKills = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.setSelfKills = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 deaths = 6;
 * @return {number}
 */
proto.bragi.CsgoPlayerStatistics.prototype.getDeaths = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.setDeaths = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 assists = 7;
 * @return {number}
 */
proto.bragi.CsgoPlayerStatistics.prototype.getAssists = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.setAssists = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 headshots = 8;
 * @return {number}
 */
proto.bragi.CsgoPlayerStatistics.prototype.getHeadshots = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.setHeadshots = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint32 friendly_damage_dealt_armor = 9;
 * @return {number}
 */
proto.bragi.CsgoPlayerStatistics.prototype.getFriendlyDamageDealtArmor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.setFriendlyDamageDealtArmor = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.clearFriendlyDamageDealtArmor = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerStatistics.prototype.hasFriendlyDamageDealtArmor = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional uint32 friendly_damage_dealt_health = 10;
 * @return {number}
 */
proto.bragi.CsgoPlayerStatistics.prototype.getFriendlyDamageDealtHealth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.setFriendlyDamageDealtHealth = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.clearFriendlyDamageDealtHealth = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerStatistics.prototype.hasFriendlyDamageDealtHealth = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional uint32 enemy_damage_dealt_armor = 11;
 * @return {number}
 */
proto.bragi.CsgoPlayerStatistics.prototype.getEnemyDamageDealtArmor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.setEnemyDamageDealtArmor = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.clearEnemyDamageDealtArmor = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerStatistics.prototype.hasEnemyDamageDealtArmor = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional uint32 enemy_damage_dealt_health = 12;
 * @return {number}
 */
proto.bragi.CsgoPlayerStatistics.prototype.getEnemyDamageDealtHealth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.setEnemyDamageDealtHealth = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.clearEnemyDamageDealtHealth = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerStatistics.prototype.hasEnemyDamageDealtHealth = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional uint32 enemy_damage_dealt_armor_raw = 13;
 * @return {number}
 */
proto.bragi.CsgoPlayerStatistics.prototype.getEnemyDamageDealtArmorRaw = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.setEnemyDamageDealtArmorRaw = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.clearEnemyDamageDealtArmorRaw = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerStatistics.prototype.hasEnemyDamageDealtArmorRaw = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional uint32 enemy_damage_dealt_health_raw = 14;
 * @return {number}
 */
proto.bragi.CsgoPlayerStatistics.prototype.getEnemyDamageDealtHealthRaw = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.setEnemyDamageDealtHealthRaw = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.clearEnemyDamageDealtHealthRaw = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerStatistics.prototype.hasEnemyDamageDealtHealthRaw = function() {
  return jspb.Message.getField(this, 14) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.CsgoPlayerItem.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoPlayerItem.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoPlayerItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoPlayerItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayerItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    equipmentValue: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoPlayerItem}
 */
proto.bragi.CsgoPlayerItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoPlayerItem;
  return proto.bragi.CsgoPlayerItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoPlayerItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoPlayerItem}
 */
proto.bragi.CsgoPlayerItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addItems(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEquipmentValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoPlayerItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoPlayerItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoPlayerItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayerItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getEquipmentValue();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * repeated string items = 1;
 * @return {!Array<string>}
 */
proto.bragi.CsgoPlayerItem.prototype.getItemsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bragi.CsgoPlayerItem} returns this
 */
proto.bragi.CsgoPlayerItem.prototype.setItemsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bragi.CsgoPlayerItem} returns this
 */
proto.bragi.CsgoPlayerItem.prototype.addItems = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CsgoPlayerItem} returns this
 */
proto.bragi.CsgoPlayerItem.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};


/**
 * optional uint32 equipment_value = 2;
 * @return {number}
 */
proto.bragi.CsgoPlayerItem.prototype.getEquipmentValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPlayerItem} returns this
 */
proto.bragi.CsgoPlayerItem.prototype.setEquipmentValue = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoPosition.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoPosition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoPosition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPosition.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    y: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    angle: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoPosition}
 */
proto.bragi.CsgoPosition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoPosition;
  return proto.bragi.CsgoPosition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoPosition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoPosition}
 */
proto.bragi.CsgoPosition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAngle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoPosition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoPosition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoPosition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPosition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getAngle();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional float x = 1;
 * @return {number}
 */
proto.bragi.CsgoPosition.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPosition} returns this
 */
proto.bragi.CsgoPosition.prototype.setX = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float y = 2;
 * @return {number}
 */
proto.bragi.CsgoPosition.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPosition} returns this
 */
proto.bragi.CsgoPosition.prototype.setY = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float angle = 3;
 * @return {number}
 */
proto.bragi.CsgoPosition.prototype.getAngle = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPosition} returns this
 */
proto.bragi.CsgoPosition.prototype.setAngle = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bragi.CsgoEvent.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]];

/**
 * @enum {number}
 */
proto.bragi.CsgoEvent.EventCase = {
  EVENT_NOT_SET: 0,
  BOMB_DEFUSE_STARTED: 1,
  BOMB_DEFUSED: 2,
  BOMB_EXPLODED: 3,
  BOMB_PLANTED: 4,
  DAMAGE_DEALT: 5,
  FREEZE_TIME_ENDED: 6,
  FREEZE_TIME_STARTED: 7,
  ITEM_DROP: 8,
  ITEM_PICK_UP: 9,
  ITEM_PURCHASE: 10,
  ITEM_THROW: 11,
  KILL: 12,
  DEATH: 13,
  MAP_END: 14,
  MAP_START: 15,
  ROUND_END: 16,
  ROUND_PAUSE: 17,
  ROUND_RESUME: 18,
  ROUND_ROLLBACK: 19,
  ROUND_START: 20
};

/**
 * @return {proto.bragi.CsgoEvent.EventCase}
 */
proto.bragi.CsgoEvent.prototype.getEventCase = function() {
  return /** @type {proto.bragi.CsgoEvent.EventCase} */(jspb.Message.computeOneofCase(this, proto.bragi.CsgoEvent.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    bombDefuseStarted: (f = msg.getBombDefuseStarted()) && proto.bragi.CsgoBombDefuseStarted.toObject(includeInstance, f),
    bombDefused: (f = msg.getBombDefused()) && proto.bragi.CsgoBombDefused.toObject(includeInstance, f),
    bombExploded: (f = msg.getBombExploded()) && proto.bragi.CsgoBombExploded.toObject(includeInstance, f),
    bombPlanted: (f = msg.getBombPlanted()) && proto.bragi.CsgoBombPlanted.toObject(includeInstance, f),
    damageDealt: (f = msg.getDamageDealt()) && proto.bragi.CsgoDamageDealt.toObject(includeInstance, f),
    freezeTimeEnded: (f = msg.getFreezeTimeEnded()) && proto.bragi.CsgoFreezeTimeEnded.toObject(includeInstance, f),
    freezeTimeStarted: (f = msg.getFreezeTimeStarted()) && proto.bragi.CsgoFreezeTimeStarted.toObject(includeInstance, f),
    itemDrop: (f = msg.getItemDrop()) && proto.bragi.CsgoItemDrop.toObject(includeInstance, f),
    itemPickUp: (f = msg.getItemPickUp()) && proto.bragi.CsgoItemPickUp.toObject(includeInstance, f),
    itemPurchase: (f = msg.getItemPurchase()) && proto.bragi.CsgoItemPurchase.toObject(includeInstance, f),
    itemThrow: (f = msg.getItemThrow()) && proto.bragi.CsgoItemThrow.toObject(includeInstance, f),
    kill: (f = msg.getKill()) && proto.bragi.CsgoKill.toObject(includeInstance, f),
    death: (f = msg.getDeath()) && proto.bragi.CsgoDeath.toObject(includeInstance, f),
    mapEnd: (f = msg.getMapEnd()) && proto.bragi.CsgoMapEnd.toObject(includeInstance, f),
    mapStart: (f = msg.getMapStart()) && proto.bragi.CsgoMapStart.toObject(includeInstance, f),
    roundEnd: (f = msg.getRoundEnd()) && proto.bragi.CsgoRoundEnd.toObject(includeInstance, f),
    roundPause: (f = msg.getRoundPause()) && proto.bragi.CsgoRoundPause.toObject(includeInstance, f),
    roundResume: (f = msg.getRoundResume()) && proto.bragi.CsgoRoundResume.toObject(includeInstance, f),
    roundRollback: (f = msg.getRoundRollback()) && proto.bragi.CsgoRoundRollback.toObject(includeInstance, f),
    roundStart: (f = msg.getRoundStart()) && proto.bragi.CsgoRoundStart.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoEvent}
 */
proto.bragi.CsgoEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoEvent;
  return proto.bragi.CsgoEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoEvent}
 */
proto.bragi.CsgoEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CsgoBombDefuseStarted;
      reader.readMessage(value,proto.bragi.CsgoBombDefuseStarted.deserializeBinaryFromReader);
      msg.setBombDefuseStarted(value);
      break;
    case 2:
      var value = new proto.bragi.CsgoBombDefused;
      reader.readMessage(value,proto.bragi.CsgoBombDefused.deserializeBinaryFromReader);
      msg.setBombDefused(value);
      break;
    case 3:
      var value = new proto.bragi.CsgoBombExploded;
      reader.readMessage(value,proto.bragi.CsgoBombExploded.deserializeBinaryFromReader);
      msg.setBombExploded(value);
      break;
    case 4:
      var value = new proto.bragi.CsgoBombPlanted;
      reader.readMessage(value,proto.bragi.CsgoBombPlanted.deserializeBinaryFromReader);
      msg.setBombPlanted(value);
      break;
    case 5:
      var value = new proto.bragi.CsgoDamageDealt;
      reader.readMessage(value,proto.bragi.CsgoDamageDealt.deserializeBinaryFromReader);
      msg.setDamageDealt(value);
      break;
    case 6:
      var value = new proto.bragi.CsgoFreezeTimeEnded;
      reader.readMessage(value,proto.bragi.CsgoFreezeTimeEnded.deserializeBinaryFromReader);
      msg.setFreezeTimeEnded(value);
      break;
    case 7:
      var value = new proto.bragi.CsgoFreezeTimeStarted;
      reader.readMessage(value,proto.bragi.CsgoFreezeTimeStarted.deserializeBinaryFromReader);
      msg.setFreezeTimeStarted(value);
      break;
    case 8:
      var value = new proto.bragi.CsgoItemDrop;
      reader.readMessage(value,proto.bragi.CsgoItemDrop.deserializeBinaryFromReader);
      msg.setItemDrop(value);
      break;
    case 9:
      var value = new proto.bragi.CsgoItemPickUp;
      reader.readMessage(value,proto.bragi.CsgoItemPickUp.deserializeBinaryFromReader);
      msg.setItemPickUp(value);
      break;
    case 10:
      var value = new proto.bragi.CsgoItemPurchase;
      reader.readMessage(value,proto.bragi.CsgoItemPurchase.deserializeBinaryFromReader);
      msg.setItemPurchase(value);
      break;
    case 11:
      var value = new proto.bragi.CsgoItemThrow;
      reader.readMessage(value,proto.bragi.CsgoItemThrow.deserializeBinaryFromReader);
      msg.setItemThrow(value);
      break;
    case 12:
      var value = new proto.bragi.CsgoKill;
      reader.readMessage(value,proto.bragi.CsgoKill.deserializeBinaryFromReader);
      msg.setKill(value);
      break;
    case 13:
      var value = new proto.bragi.CsgoDeath;
      reader.readMessage(value,proto.bragi.CsgoDeath.deserializeBinaryFromReader);
      msg.setDeath(value);
      break;
    case 14:
      var value = new proto.bragi.CsgoMapEnd;
      reader.readMessage(value,proto.bragi.CsgoMapEnd.deserializeBinaryFromReader);
      msg.setMapEnd(value);
      break;
    case 15:
      var value = new proto.bragi.CsgoMapStart;
      reader.readMessage(value,proto.bragi.CsgoMapStart.deserializeBinaryFromReader);
      msg.setMapStart(value);
      break;
    case 16:
      var value = new proto.bragi.CsgoRoundEnd;
      reader.readMessage(value,proto.bragi.CsgoRoundEnd.deserializeBinaryFromReader);
      msg.setRoundEnd(value);
      break;
    case 17:
      var value = new proto.bragi.CsgoRoundPause;
      reader.readMessage(value,proto.bragi.CsgoRoundPause.deserializeBinaryFromReader);
      msg.setRoundPause(value);
      break;
    case 18:
      var value = new proto.bragi.CsgoRoundResume;
      reader.readMessage(value,proto.bragi.CsgoRoundResume.deserializeBinaryFromReader);
      msg.setRoundResume(value);
      break;
    case 19:
      var value = new proto.bragi.CsgoRoundRollback;
      reader.readMessage(value,proto.bragi.CsgoRoundRollback.deserializeBinaryFromReader);
      msg.setRoundRollback(value);
      break;
    case 20:
      var value = new proto.bragi.CsgoRoundStart;
      reader.readMessage(value,proto.bragi.CsgoRoundStart.deserializeBinaryFromReader);
      msg.setRoundStart(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBombDefuseStarted();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CsgoBombDefuseStarted.serializeBinaryToWriter
    );
  }
  f = message.getBombDefused();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CsgoBombDefused.serializeBinaryToWriter
    );
  }
  f = message.getBombExploded();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.CsgoBombExploded.serializeBinaryToWriter
    );
  }
  f = message.getBombPlanted();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.CsgoBombPlanted.serializeBinaryToWriter
    );
  }
  f = message.getDamageDealt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bragi.CsgoDamageDealt.serializeBinaryToWriter
    );
  }
  f = message.getFreezeTimeEnded();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bragi.CsgoFreezeTimeEnded.serializeBinaryToWriter
    );
  }
  f = message.getFreezeTimeStarted();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bragi.CsgoFreezeTimeStarted.serializeBinaryToWriter
    );
  }
  f = message.getItemDrop();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.bragi.CsgoItemDrop.serializeBinaryToWriter
    );
  }
  f = message.getItemPickUp();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.bragi.CsgoItemPickUp.serializeBinaryToWriter
    );
  }
  f = message.getItemPurchase();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.bragi.CsgoItemPurchase.serializeBinaryToWriter
    );
  }
  f = message.getItemThrow();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.bragi.CsgoItemThrow.serializeBinaryToWriter
    );
  }
  f = message.getKill();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.bragi.CsgoKill.serializeBinaryToWriter
    );
  }
  f = message.getDeath();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.bragi.CsgoDeath.serializeBinaryToWriter
    );
  }
  f = message.getMapEnd();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.bragi.CsgoMapEnd.serializeBinaryToWriter
    );
  }
  f = message.getMapStart();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.bragi.CsgoMapStart.serializeBinaryToWriter
    );
  }
  f = message.getRoundEnd();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.bragi.CsgoRoundEnd.serializeBinaryToWriter
    );
  }
  f = message.getRoundPause();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.bragi.CsgoRoundPause.serializeBinaryToWriter
    );
  }
  f = message.getRoundResume();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.bragi.CsgoRoundResume.serializeBinaryToWriter
    );
  }
  f = message.getRoundRollback();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.bragi.CsgoRoundRollback.serializeBinaryToWriter
    );
  }
  f = message.getRoundStart();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.bragi.CsgoRoundStart.serializeBinaryToWriter
    );
  }
};


/**
 * optional CsgoBombDefuseStarted bomb_defuse_started = 1;
 * @return {?proto.bragi.CsgoBombDefuseStarted}
 */
proto.bragi.CsgoEvent.prototype.getBombDefuseStarted = function() {
  return /** @type{?proto.bragi.CsgoBombDefuseStarted} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoBombDefuseStarted, 1));
};


/**
 * @param {?proto.bragi.CsgoBombDefuseStarted|undefined} value
 * @return {!proto.bragi.CsgoEvent} returns this
*/
proto.bragi.CsgoEvent.prototype.setBombDefuseStarted = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.CsgoEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoEvent} returns this
 */
proto.bragi.CsgoEvent.prototype.clearBombDefuseStarted = function() {
  return this.setBombDefuseStarted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoEvent.prototype.hasBombDefuseStarted = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CsgoBombDefused bomb_defused = 2;
 * @return {?proto.bragi.CsgoBombDefused}
 */
proto.bragi.CsgoEvent.prototype.getBombDefused = function() {
  return /** @type{?proto.bragi.CsgoBombDefused} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoBombDefused, 2));
};


/**
 * @param {?proto.bragi.CsgoBombDefused|undefined} value
 * @return {!proto.bragi.CsgoEvent} returns this
*/
proto.bragi.CsgoEvent.prototype.setBombDefused = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bragi.CsgoEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoEvent} returns this
 */
proto.bragi.CsgoEvent.prototype.clearBombDefused = function() {
  return this.setBombDefused(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoEvent.prototype.hasBombDefused = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CsgoBombExploded bomb_exploded = 3;
 * @return {?proto.bragi.CsgoBombExploded}
 */
proto.bragi.CsgoEvent.prototype.getBombExploded = function() {
  return /** @type{?proto.bragi.CsgoBombExploded} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoBombExploded, 3));
};


/**
 * @param {?proto.bragi.CsgoBombExploded|undefined} value
 * @return {!proto.bragi.CsgoEvent} returns this
*/
proto.bragi.CsgoEvent.prototype.setBombExploded = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.bragi.CsgoEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoEvent} returns this
 */
proto.bragi.CsgoEvent.prototype.clearBombExploded = function() {
  return this.setBombExploded(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoEvent.prototype.hasBombExploded = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CsgoBombPlanted bomb_planted = 4;
 * @return {?proto.bragi.CsgoBombPlanted}
 */
proto.bragi.CsgoEvent.prototype.getBombPlanted = function() {
  return /** @type{?proto.bragi.CsgoBombPlanted} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoBombPlanted, 4));
};


/**
 * @param {?proto.bragi.CsgoBombPlanted|undefined} value
 * @return {!proto.bragi.CsgoEvent} returns this
*/
proto.bragi.CsgoEvent.prototype.setBombPlanted = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.bragi.CsgoEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoEvent} returns this
 */
proto.bragi.CsgoEvent.prototype.clearBombPlanted = function() {
  return this.setBombPlanted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoEvent.prototype.hasBombPlanted = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CsgoDamageDealt damage_dealt = 5;
 * @return {?proto.bragi.CsgoDamageDealt}
 */
proto.bragi.CsgoEvent.prototype.getDamageDealt = function() {
  return /** @type{?proto.bragi.CsgoDamageDealt} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoDamageDealt, 5));
};


/**
 * @param {?proto.bragi.CsgoDamageDealt|undefined} value
 * @return {!proto.bragi.CsgoEvent} returns this
*/
proto.bragi.CsgoEvent.prototype.setDamageDealt = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.bragi.CsgoEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoEvent} returns this
 */
proto.bragi.CsgoEvent.prototype.clearDamageDealt = function() {
  return this.setDamageDealt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoEvent.prototype.hasDamageDealt = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional CsgoFreezeTimeEnded freeze_time_ended = 6;
 * @return {?proto.bragi.CsgoFreezeTimeEnded}
 */
proto.bragi.CsgoEvent.prototype.getFreezeTimeEnded = function() {
  return /** @type{?proto.bragi.CsgoFreezeTimeEnded} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoFreezeTimeEnded, 6));
};


/**
 * @param {?proto.bragi.CsgoFreezeTimeEnded|undefined} value
 * @return {!proto.bragi.CsgoEvent} returns this
*/
proto.bragi.CsgoEvent.prototype.setFreezeTimeEnded = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.bragi.CsgoEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoEvent} returns this
 */
proto.bragi.CsgoEvent.prototype.clearFreezeTimeEnded = function() {
  return this.setFreezeTimeEnded(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoEvent.prototype.hasFreezeTimeEnded = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional CsgoFreezeTimeStarted freeze_time_started = 7;
 * @return {?proto.bragi.CsgoFreezeTimeStarted}
 */
proto.bragi.CsgoEvent.prototype.getFreezeTimeStarted = function() {
  return /** @type{?proto.bragi.CsgoFreezeTimeStarted} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoFreezeTimeStarted, 7));
};


/**
 * @param {?proto.bragi.CsgoFreezeTimeStarted|undefined} value
 * @return {!proto.bragi.CsgoEvent} returns this
*/
proto.bragi.CsgoEvent.prototype.setFreezeTimeStarted = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.bragi.CsgoEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoEvent} returns this
 */
proto.bragi.CsgoEvent.prototype.clearFreezeTimeStarted = function() {
  return this.setFreezeTimeStarted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoEvent.prototype.hasFreezeTimeStarted = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional CsgoItemDrop item_drop = 8;
 * @return {?proto.bragi.CsgoItemDrop}
 */
proto.bragi.CsgoEvent.prototype.getItemDrop = function() {
  return /** @type{?proto.bragi.CsgoItemDrop} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoItemDrop, 8));
};


/**
 * @param {?proto.bragi.CsgoItemDrop|undefined} value
 * @return {!proto.bragi.CsgoEvent} returns this
*/
proto.bragi.CsgoEvent.prototype.setItemDrop = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.bragi.CsgoEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoEvent} returns this
 */
proto.bragi.CsgoEvent.prototype.clearItemDrop = function() {
  return this.setItemDrop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoEvent.prototype.hasItemDrop = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional CsgoItemPickUp item_pick_up = 9;
 * @return {?proto.bragi.CsgoItemPickUp}
 */
proto.bragi.CsgoEvent.prototype.getItemPickUp = function() {
  return /** @type{?proto.bragi.CsgoItemPickUp} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoItemPickUp, 9));
};


/**
 * @param {?proto.bragi.CsgoItemPickUp|undefined} value
 * @return {!proto.bragi.CsgoEvent} returns this
*/
proto.bragi.CsgoEvent.prototype.setItemPickUp = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.bragi.CsgoEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoEvent} returns this
 */
proto.bragi.CsgoEvent.prototype.clearItemPickUp = function() {
  return this.setItemPickUp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoEvent.prototype.hasItemPickUp = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional CsgoItemPurchase item_purchase = 10;
 * @return {?proto.bragi.CsgoItemPurchase}
 */
proto.bragi.CsgoEvent.prototype.getItemPurchase = function() {
  return /** @type{?proto.bragi.CsgoItemPurchase} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoItemPurchase, 10));
};


/**
 * @param {?proto.bragi.CsgoItemPurchase|undefined} value
 * @return {!proto.bragi.CsgoEvent} returns this
*/
proto.bragi.CsgoEvent.prototype.setItemPurchase = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.bragi.CsgoEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoEvent} returns this
 */
proto.bragi.CsgoEvent.prototype.clearItemPurchase = function() {
  return this.setItemPurchase(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoEvent.prototype.hasItemPurchase = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional CsgoItemThrow item_throw = 11;
 * @return {?proto.bragi.CsgoItemThrow}
 */
proto.bragi.CsgoEvent.prototype.getItemThrow = function() {
  return /** @type{?proto.bragi.CsgoItemThrow} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoItemThrow, 11));
};


/**
 * @param {?proto.bragi.CsgoItemThrow|undefined} value
 * @return {!proto.bragi.CsgoEvent} returns this
*/
proto.bragi.CsgoEvent.prototype.setItemThrow = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.bragi.CsgoEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoEvent} returns this
 */
proto.bragi.CsgoEvent.prototype.clearItemThrow = function() {
  return this.setItemThrow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoEvent.prototype.hasItemThrow = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional CsgoKill kill = 12;
 * @return {?proto.bragi.CsgoKill}
 */
proto.bragi.CsgoEvent.prototype.getKill = function() {
  return /** @type{?proto.bragi.CsgoKill} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoKill, 12));
};


/**
 * @param {?proto.bragi.CsgoKill|undefined} value
 * @return {!proto.bragi.CsgoEvent} returns this
*/
proto.bragi.CsgoEvent.prototype.setKill = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.bragi.CsgoEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoEvent} returns this
 */
proto.bragi.CsgoEvent.prototype.clearKill = function() {
  return this.setKill(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoEvent.prototype.hasKill = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional CsgoDeath death = 13;
 * @return {?proto.bragi.CsgoDeath}
 */
proto.bragi.CsgoEvent.prototype.getDeath = function() {
  return /** @type{?proto.bragi.CsgoDeath} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoDeath, 13));
};


/**
 * @param {?proto.bragi.CsgoDeath|undefined} value
 * @return {!proto.bragi.CsgoEvent} returns this
*/
proto.bragi.CsgoEvent.prototype.setDeath = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.bragi.CsgoEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoEvent} returns this
 */
proto.bragi.CsgoEvent.prototype.clearDeath = function() {
  return this.setDeath(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoEvent.prototype.hasDeath = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional CsgoMapEnd map_end = 14;
 * @return {?proto.bragi.CsgoMapEnd}
 */
proto.bragi.CsgoEvent.prototype.getMapEnd = function() {
  return /** @type{?proto.bragi.CsgoMapEnd} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoMapEnd, 14));
};


/**
 * @param {?proto.bragi.CsgoMapEnd|undefined} value
 * @return {!proto.bragi.CsgoEvent} returns this
*/
proto.bragi.CsgoEvent.prototype.setMapEnd = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.bragi.CsgoEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoEvent} returns this
 */
proto.bragi.CsgoEvent.prototype.clearMapEnd = function() {
  return this.setMapEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoEvent.prototype.hasMapEnd = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional CsgoMapStart map_start = 15;
 * @return {?proto.bragi.CsgoMapStart}
 */
proto.bragi.CsgoEvent.prototype.getMapStart = function() {
  return /** @type{?proto.bragi.CsgoMapStart} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoMapStart, 15));
};


/**
 * @param {?proto.bragi.CsgoMapStart|undefined} value
 * @return {!proto.bragi.CsgoEvent} returns this
*/
proto.bragi.CsgoEvent.prototype.setMapStart = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.bragi.CsgoEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoEvent} returns this
 */
proto.bragi.CsgoEvent.prototype.clearMapStart = function() {
  return this.setMapStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoEvent.prototype.hasMapStart = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional CsgoRoundEnd round_end = 16;
 * @return {?proto.bragi.CsgoRoundEnd}
 */
proto.bragi.CsgoEvent.prototype.getRoundEnd = function() {
  return /** @type{?proto.bragi.CsgoRoundEnd} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoRoundEnd, 16));
};


/**
 * @param {?proto.bragi.CsgoRoundEnd|undefined} value
 * @return {!proto.bragi.CsgoEvent} returns this
*/
proto.bragi.CsgoEvent.prototype.setRoundEnd = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.bragi.CsgoEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoEvent} returns this
 */
proto.bragi.CsgoEvent.prototype.clearRoundEnd = function() {
  return this.setRoundEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoEvent.prototype.hasRoundEnd = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional CsgoRoundPause round_pause = 17;
 * @return {?proto.bragi.CsgoRoundPause}
 */
proto.bragi.CsgoEvent.prototype.getRoundPause = function() {
  return /** @type{?proto.bragi.CsgoRoundPause} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoRoundPause, 17));
};


/**
 * @param {?proto.bragi.CsgoRoundPause|undefined} value
 * @return {!proto.bragi.CsgoEvent} returns this
*/
proto.bragi.CsgoEvent.prototype.setRoundPause = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.bragi.CsgoEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoEvent} returns this
 */
proto.bragi.CsgoEvent.prototype.clearRoundPause = function() {
  return this.setRoundPause(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoEvent.prototype.hasRoundPause = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional CsgoRoundResume round_resume = 18;
 * @return {?proto.bragi.CsgoRoundResume}
 */
proto.bragi.CsgoEvent.prototype.getRoundResume = function() {
  return /** @type{?proto.bragi.CsgoRoundResume} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoRoundResume, 18));
};


/**
 * @param {?proto.bragi.CsgoRoundResume|undefined} value
 * @return {!proto.bragi.CsgoEvent} returns this
*/
proto.bragi.CsgoEvent.prototype.setRoundResume = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.bragi.CsgoEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoEvent} returns this
 */
proto.bragi.CsgoEvent.prototype.clearRoundResume = function() {
  return this.setRoundResume(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoEvent.prototype.hasRoundResume = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional CsgoRoundRollback round_rollback = 19;
 * @return {?proto.bragi.CsgoRoundRollback}
 */
proto.bragi.CsgoEvent.prototype.getRoundRollback = function() {
  return /** @type{?proto.bragi.CsgoRoundRollback} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoRoundRollback, 19));
};


/**
 * @param {?proto.bragi.CsgoRoundRollback|undefined} value
 * @return {!proto.bragi.CsgoEvent} returns this
*/
proto.bragi.CsgoEvent.prototype.setRoundRollback = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.bragi.CsgoEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoEvent} returns this
 */
proto.bragi.CsgoEvent.prototype.clearRoundRollback = function() {
  return this.setRoundRollback(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoEvent.prototype.hasRoundRollback = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional CsgoRoundStart round_start = 20;
 * @return {?proto.bragi.CsgoRoundStart}
 */
proto.bragi.CsgoEvent.prototype.getRoundStart = function() {
  return /** @type{?proto.bragi.CsgoRoundStart} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoRoundStart, 20));
};


/**
 * @param {?proto.bragi.CsgoRoundStart|undefined} value
 * @return {!proto.bragi.CsgoEvent} returns this
*/
proto.bragi.CsgoEvent.prototype.setRoundStart = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.bragi.CsgoEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoEvent} returns this
 */
proto.bragi.CsgoEvent.prototype.clearRoundStart = function() {
  return this.setRoundStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoEvent.prototype.hasRoundStart = function() {
  return jspb.Message.getField(this, 20) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoPlayerBalance.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoPlayerBalance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoPlayerBalance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayerBalance.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    teamUrn: jspb.Message.getFieldWithDefault(msg, 2, ""),
    balance: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoPlayerBalance}
 */
proto.bragi.CsgoPlayerBalance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoPlayerBalance;
  return proto.bragi.CsgoPlayerBalance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoPlayerBalance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoPlayerBalance}
 */
proto.bragi.CsgoPlayerBalance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerUrn(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeamUrn(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoPlayerBalance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoPlayerBalance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoPlayerBalance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayerBalance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTeamUrn();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBalance();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.CsgoPlayerBalance.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoPlayerBalance} returns this
 */
proto.bragi.CsgoPlayerBalance.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string team_urn = 2;
 * @return {string}
 */
proto.bragi.CsgoPlayerBalance.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoPlayerBalance} returns this
 */
proto.bragi.CsgoPlayerBalance.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 balance = 3;
 * @return {number}
 */
proto.bragi.CsgoPlayerBalance.prototype.getBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPlayerBalance} returns this
 */
proto.bragi.CsgoPlayerBalance.prototype.setBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.CsgoPlayerItems.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoPlayerItems.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoPlayerItems.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoPlayerItems} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayerItems.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    teamUrn: jspb.Message.getFieldWithDefault(msg, 2, ""),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.bragi.CsgoPlayerItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoPlayerItems}
 */
proto.bragi.CsgoPlayerItems.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoPlayerItems;
  return proto.bragi.CsgoPlayerItems.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoPlayerItems} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoPlayerItems}
 */
proto.bragi.CsgoPlayerItems.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerUrn(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeamUrn(value);
      break;
    case 3:
      var value = new proto.bragi.CsgoPlayerItem;
      reader.readMessage(value,proto.bragi.CsgoPlayerItem.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoPlayerItems.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoPlayerItems.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoPlayerItems} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayerItems.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTeamUrn();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.bragi.CsgoPlayerItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.CsgoPlayerItems.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoPlayerItems} returns this
 */
proto.bragi.CsgoPlayerItems.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string team_urn = 2;
 * @return {string}
 */
proto.bragi.CsgoPlayerItems.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoPlayerItems} returns this
 */
proto.bragi.CsgoPlayerItems.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated CsgoPlayerItem items = 3;
 * @return {!Array<!proto.bragi.CsgoPlayerItem>}
 */
proto.bragi.CsgoPlayerItems.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.bragi.CsgoPlayerItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.CsgoPlayerItem, 3));
};


/**
 * @param {!Array<!proto.bragi.CsgoPlayerItem>} value
 * @return {!proto.bragi.CsgoPlayerItems} returns this
*/
proto.bragi.CsgoPlayerItems.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.bragi.CsgoPlayerItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.CsgoPlayerItem}
 */
proto.bragi.CsgoPlayerItems.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.bragi.CsgoPlayerItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CsgoPlayerItems} returns this
 */
proto.bragi.CsgoPlayerItems.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoBombDefuseStarted.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoBombDefuseStarted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoBombDefuseStarted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoBombDefuseStarted.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapTime: (f = msg.getMapTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    timeRemaining: (f = msg.getTimeRemaining()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    currentRoundNumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    playerUrn: jspb.Message.getFieldWithDefault(msg, 4, ""),
    teamUrn: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoBombDefuseStarted}
 */
proto.bragi.CsgoBombDefuseStarted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoBombDefuseStarted;
  return proto.bragi.CsgoBombDefuseStarted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoBombDefuseStarted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoBombDefuseStarted}
 */
proto.bragi.CsgoBombDefuseStarted.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setMapTime(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeRemaining(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCurrentRoundNumber(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerUrn(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeamUrn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoBombDefuseStarted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoBombDefuseStarted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoBombDefuseStarted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoBombDefuseStarted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getTimeRemaining();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getCurrentRoundNumber();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTeamUrn();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional google.protobuf.Duration map_time = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoBombDefuseStarted.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoBombDefuseStarted} returns this
*/
proto.bragi.CsgoBombDefuseStarted.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoBombDefuseStarted} returns this
 */
proto.bragi.CsgoBombDefuseStarted.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoBombDefuseStarted.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoBombDefuseStarted.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoBombDefuseStarted} returns this
*/
proto.bragi.CsgoBombDefuseStarted.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoBombDefuseStarted} returns this
 */
proto.bragi.CsgoBombDefuseStarted.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoBombDefuseStarted.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CsgoBombDefuseStarted.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoBombDefuseStarted} returns this
 */
proto.bragi.CsgoBombDefuseStarted.prototype.setCurrentRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string player_urn = 4;
 * @return {string}
 */
proto.bragi.CsgoBombDefuseStarted.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoBombDefuseStarted} returns this
 */
proto.bragi.CsgoBombDefuseStarted.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string team_urn = 5;
 * @return {string}
 */
proto.bragi.CsgoBombDefuseStarted.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoBombDefuseStarted} returns this
 */
proto.bragi.CsgoBombDefuseStarted.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoBombDefused.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoBombDefused.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoBombDefused} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoBombDefused.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapTime: (f = msg.getMapTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    timeRemaining: (f = msg.getTimeRemaining()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    currentRoundNumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    playerUrn: jspb.Message.getFieldWithDefault(msg, 4, ""),
    teamUrn: jspb.Message.getFieldWithDefault(msg, 5, ""),
    balance: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoBombDefused}
 */
proto.bragi.CsgoBombDefused.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoBombDefused;
  return proto.bragi.CsgoBombDefused.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoBombDefused} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoBombDefused}
 */
proto.bragi.CsgoBombDefused.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setMapTime(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeRemaining(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCurrentRoundNumber(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerUrn(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeamUrn(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoBombDefused.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoBombDefused.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoBombDefused} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoBombDefused.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getTimeRemaining();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getCurrentRoundNumber();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTeamUrn();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getBalance();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * optional google.protobuf.Duration map_time = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoBombDefused.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoBombDefused} returns this
*/
proto.bragi.CsgoBombDefused.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoBombDefused} returns this
 */
proto.bragi.CsgoBombDefused.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoBombDefused.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoBombDefused.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoBombDefused} returns this
*/
proto.bragi.CsgoBombDefused.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoBombDefused} returns this
 */
proto.bragi.CsgoBombDefused.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoBombDefused.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CsgoBombDefused.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoBombDefused} returns this
 */
proto.bragi.CsgoBombDefused.prototype.setCurrentRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string player_urn = 4;
 * @return {string}
 */
proto.bragi.CsgoBombDefused.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoBombDefused} returns this
 */
proto.bragi.CsgoBombDefused.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string team_urn = 5;
 * @return {string}
 */
proto.bragi.CsgoBombDefused.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoBombDefused} returns this
 */
proto.bragi.CsgoBombDefused.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint32 balance = 6;
 * @return {number}
 */
proto.bragi.CsgoBombDefused.prototype.getBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoBombDefused} returns this
 */
proto.bragi.CsgoBombDefused.prototype.setBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoBombExploded.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoBombExploded.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoBombExploded} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoBombExploded.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapTime: (f = msg.getMapTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    timeRemaining: (f = msg.getTimeRemaining()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    currentRoundNumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    teamUrn: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoBombExploded}
 */
proto.bragi.CsgoBombExploded.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoBombExploded;
  return proto.bragi.CsgoBombExploded.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoBombExploded} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoBombExploded}
 */
proto.bragi.CsgoBombExploded.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setMapTime(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeRemaining(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCurrentRoundNumber(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeamUrn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoBombExploded.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoBombExploded.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoBombExploded} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoBombExploded.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getTimeRemaining();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getCurrentRoundNumber();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getTeamUrn();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional google.protobuf.Duration map_time = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoBombExploded.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoBombExploded} returns this
*/
proto.bragi.CsgoBombExploded.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoBombExploded} returns this
 */
proto.bragi.CsgoBombExploded.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoBombExploded.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoBombExploded.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoBombExploded} returns this
*/
proto.bragi.CsgoBombExploded.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoBombExploded} returns this
 */
proto.bragi.CsgoBombExploded.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoBombExploded.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CsgoBombExploded.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoBombExploded} returns this
 */
proto.bragi.CsgoBombExploded.prototype.setCurrentRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string team_urn = 4;
 * @return {string}
 */
proto.bragi.CsgoBombExploded.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoBombExploded} returns this
 */
proto.bragi.CsgoBombExploded.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoBombPlanted.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoBombPlanted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoBombPlanted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoBombPlanted.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapTime: (f = msg.getMapTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    timeRemaining: (f = msg.getTimeRemaining()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    currentRoundNumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    playerUrn: jspb.Message.getFieldWithDefault(msg, 4, ""),
    teamUrn: jspb.Message.getFieldWithDefault(msg, 5, ""),
    balance: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoBombPlanted}
 */
proto.bragi.CsgoBombPlanted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoBombPlanted;
  return proto.bragi.CsgoBombPlanted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoBombPlanted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoBombPlanted}
 */
proto.bragi.CsgoBombPlanted.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setMapTime(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeRemaining(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCurrentRoundNumber(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerUrn(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeamUrn(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoBombPlanted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoBombPlanted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoBombPlanted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoBombPlanted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getTimeRemaining();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getCurrentRoundNumber();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTeamUrn();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getBalance();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * optional google.protobuf.Duration map_time = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoBombPlanted.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoBombPlanted} returns this
*/
proto.bragi.CsgoBombPlanted.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoBombPlanted} returns this
 */
proto.bragi.CsgoBombPlanted.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoBombPlanted.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoBombPlanted.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoBombPlanted} returns this
*/
proto.bragi.CsgoBombPlanted.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoBombPlanted} returns this
 */
proto.bragi.CsgoBombPlanted.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoBombPlanted.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CsgoBombPlanted.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoBombPlanted} returns this
 */
proto.bragi.CsgoBombPlanted.prototype.setCurrentRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string player_urn = 4;
 * @return {string}
 */
proto.bragi.CsgoBombPlanted.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoBombPlanted} returns this
 */
proto.bragi.CsgoBombPlanted.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string team_urn = 5;
 * @return {string}
 */
proto.bragi.CsgoBombPlanted.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoBombPlanted} returns this
 */
proto.bragi.CsgoBombPlanted.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint32 balance = 6;
 * @return {number}
 */
proto.bragi.CsgoBombPlanted.prototype.getBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoBombPlanted} returns this
 */
proto.bragi.CsgoBombPlanted.prototype.setBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoDamageDealt.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoDamageDealt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoDamageDealt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoDamageDealt.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapTime: (f = msg.getMapTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    timeRemaining: (f = msg.getTimeRemaining()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    currentRoundNumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    position: (f = msg.getPosition()) && proto.bragi.CsgoPosition.toObject(includeInstance, f),
    killerUrn: jspb.Message.getFieldWithDefault(msg, 5, ""),
    killerTeamUrn: jspb.Message.getFieldWithDefault(msg, 6, ""),
    victimUrn: jspb.Message.getFieldWithDefault(msg, 7, ""),
    victimTeamUrn: jspb.Message.getFieldWithDefault(msg, 8, ""),
    weapon: jspb.Message.getFieldWithDefault(msg, 9, ""),
    hitgroup: jspb.Message.getFieldWithDefault(msg, 10, ""),
    healthDeducted: jspb.Message.getFieldWithDefault(msg, 11, 0),
    healthRemaining: jspb.Message.getFieldWithDefault(msg, 12, 0),
    armorDeducted: jspb.Message.getFieldWithDefault(msg, 13, 0),
    armorRemaining: jspb.Message.getFieldWithDefault(msg, 14, 0),
    targetPosition: (f = msg.getTargetPosition()) && proto.bragi.CsgoPosition.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoDamageDealt}
 */
proto.bragi.CsgoDamageDealt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoDamageDealt;
  return proto.bragi.CsgoDamageDealt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoDamageDealt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoDamageDealt}
 */
proto.bragi.CsgoDamageDealt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setMapTime(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeRemaining(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCurrentRoundNumber(value);
      break;
    case 4:
      var value = new proto.bragi.CsgoPosition;
      reader.readMessage(value,proto.bragi.CsgoPosition.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setKillerUrn(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setKillerTeamUrn(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setVictimUrn(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setVictimTeamUrn(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setWeapon(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setHitgroup(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHealthDeducted(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHealthRemaining(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setArmorDeducted(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setArmorRemaining(value);
      break;
    case 15:
      var value = new proto.bragi.CsgoPosition;
      reader.readMessage(value,proto.bragi.CsgoPosition.deserializeBinaryFromReader);
      msg.setTargetPosition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoDamageDealt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoDamageDealt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoDamageDealt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoDamageDealt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getTimeRemaining();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getCurrentRoundNumber();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.CsgoPosition.serializeBinaryToWriter
    );
  }
  f = message.getKillerUrn();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getKillerTeamUrn();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getVictimUrn();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getVictimTeamUrn();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getWeapon();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getHitgroup();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getHealthDeducted();
  if (f !== 0) {
    writer.writeUint32(
      11,
      f
    );
  }
  f = message.getHealthRemaining();
  if (f !== 0) {
    writer.writeUint32(
      12,
      f
    );
  }
  f = message.getArmorDeducted();
  if (f !== 0) {
    writer.writeUint32(
      13,
      f
    );
  }
  f = message.getArmorRemaining();
  if (f !== 0) {
    writer.writeUint32(
      14,
      f
    );
  }
  f = message.getTargetPosition();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.bragi.CsgoPosition.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Duration map_time = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoDamageDealt.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoDamageDealt} returns this
*/
proto.bragi.CsgoDamageDealt.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoDamageDealt} returns this
 */
proto.bragi.CsgoDamageDealt.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoDamageDealt.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoDamageDealt.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoDamageDealt} returns this
*/
proto.bragi.CsgoDamageDealt.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoDamageDealt} returns this
 */
proto.bragi.CsgoDamageDealt.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoDamageDealt.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CsgoDamageDealt.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoDamageDealt} returns this
 */
proto.bragi.CsgoDamageDealt.prototype.setCurrentRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional CsgoPosition position = 4;
 * @return {?proto.bragi.CsgoPosition}
 */
proto.bragi.CsgoDamageDealt.prototype.getPosition = function() {
  return /** @type{?proto.bragi.CsgoPosition} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoPosition, 4));
};


/**
 * @param {?proto.bragi.CsgoPosition|undefined} value
 * @return {!proto.bragi.CsgoDamageDealt} returns this
*/
proto.bragi.CsgoDamageDealt.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoDamageDealt} returns this
 */
proto.bragi.CsgoDamageDealt.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoDamageDealt.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string killer_urn = 5;
 * @return {string}
 */
proto.bragi.CsgoDamageDealt.prototype.getKillerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoDamageDealt} returns this
 */
proto.bragi.CsgoDamageDealt.prototype.setKillerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string killer_team_urn = 6;
 * @return {string}
 */
proto.bragi.CsgoDamageDealt.prototype.getKillerTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoDamageDealt} returns this
 */
proto.bragi.CsgoDamageDealt.prototype.setKillerTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string victim_urn = 7;
 * @return {string}
 */
proto.bragi.CsgoDamageDealt.prototype.getVictimUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoDamageDealt} returns this
 */
proto.bragi.CsgoDamageDealt.prototype.setVictimUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string victim_team_urn = 8;
 * @return {string}
 */
proto.bragi.CsgoDamageDealt.prototype.getVictimTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoDamageDealt} returns this
 */
proto.bragi.CsgoDamageDealt.prototype.setVictimTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string weapon = 9;
 * @return {string}
 */
proto.bragi.CsgoDamageDealt.prototype.getWeapon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoDamageDealt} returns this
 */
proto.bragi.CsgoDamageDealt.prototype.setWeapon = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string hitgroup = 10;
 * @return {string}
 */
proto.bragi.CsgoDamageDealt.prototype.getHitgroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoDamageDealt} returns this
 */
proto.bragi.CsgoDamageDealt.prototype.setHitgroup = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional uint32 health_deducted = 11;
 * @return {number}
 */
proto.bragi.CsgoDamageDealt.prototype.getHealthDeducted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoDamageDealt} returns this
 */
proto.bragi.CsgoDamageDealt.prototype.setHealthDeducted = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional uint32 health_remaining = 12;
 * @return {number}
 */
proto.bragi.CsgoDamageDealt.prototype.getHealthRemaining = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoDamageDealt} returns this
 */
proto.bragi.CsgoDamageDealt.prototype.setHealthRemaining = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional uint32 armor_deducted = 13;
 * @return {number}
 */
proto.bragi.CsgoDamageDealt.prototype.getArmorDeducted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoDamageDealt} returns this
 */
proto.bragi.CsgoDamageDealt.prototype.setArmorDeducted = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional uint32 armor_remaining = 14;
 * @return {number}
 */
proto.bragi.CsgoDamageDealt.prototype.getArmorRemaining = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoDamageDealt} returns this
 */
proto.bragi.CsgoDamageDealt.prototype.setArmorRemaining = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional CsgoPosition target_position = 15;
 * @return {?proto.bragi.CsgoPosition}
 */
proto.bragi.CsgoDamageDealt.prototype.getTargetPosition = function() {
  return /** @type{?proto.bragi.CsgoPosition} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoPosition, 15));
};


/**
 * @param {?proto.bragi.CsgoPosition|undefined} value
 * @return {!proto.bragi.CsgoDamageDealt} returns this
*/
proto.bragi.CsgoDamageDealt.prototype.setTargetPosition = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoDamageDealt} returns this
 */
proto.bragi.CsgoDamageDealt.prototype.clearTargetPosition = function() {
  return this.setTargetPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoDamageDealt.prototype.hasTargetPosition = function() {
  return jspb.Message.getField(this, 15) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoFreezeTimeEnded.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoFreezeTimeEnded.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoFreezeTimeEnded} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoFreezeTimeEnded.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapTime: (f = msg.getMapTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    timeRemaining: (f = msg.getTimeRemaining()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    currentRoundNumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    playerBalancesMap: (f = msg.getPlayerBalancesMap()) ? f.toObject(includeInstance, proto.bragi.CsgoPlayerBalance.toObject) : [],
    playerInventoriesMap: (f = msg.getPlayerInventoriesMap()) ? f.toObject(includeInstance, proto.bragi.CsgoPlayerItems.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoFreezeTimeEnded}
 */
proto.bragi.CsgoFreezeTimeEnded.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoFreezeTimeEnded;
  return proto.bragi.CsgoFreezeTimeEnded.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoFreezeTimeEnded} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoFreezeTimeEnded}
 */
proto.bragi.CsgoFreezeTimeEnded.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setMapTime(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeRemaining(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCurrentRoundNumber(value);
      break;
    case 4:
      var value = msg.getPlayerBalancesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bragi.CsgoPlayerBalance.deserializeBinaryFromReader, "", new proto.bragi.CsgoPlayerBalance());
         });
      break;
    case 5:
      var value = msg.getPlayerInventoriesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bragi.CsgoPlayerItems.deserializeBinaryFromReader, "", new proto.bragi.CsgoPlayerItems());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoFreezeTimeEnded.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoFreezeTimeEnded.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoFreezeTimeEnded} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoFreezeTimeEnded.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getTimeRemaining();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getCurrentRoundNumber();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getPlayerBalancesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bragi.CsgoPlayerBalance.serializeBinaryToWriter);
  }
  f = message.getPlayerInventoriesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bragi.CsgoPlayerItems.serializeBinaryToWriter);
  }
};


/**
 * optional google.protobuf.Duration map_time = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoFreezeTimeEnded.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoFreezeTimeEnded} returns this
*/
proto.bragi.CsgoFreezeTimeEnded.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoFreezeTimeEnded} returns this
 */
proto.bragi.CsgoFreezeTimeEnded.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoFreezeTimeEnded.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoFreezeTimeEnded.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoFreezeTimeEnded} returns this
*/
proto.bragi.CsgoFreezeTimeEnded.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoFreezeTimeEnded} returns this
 */
proto.bragi.CsgoFreezeTimeEnded.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoFreezeTimeEnded.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CsgoFreezeTimeEnded.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoFreezeTimeEnded} returns this
 */
proto.bragi.CsgoFreezeTimeEnded.prototype.setCurrentRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * map<string, CsgoPlayerBalance> player_balances = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bragi.CsgoPlayerBalance>}
 */
proto.bragi.CsgoFreezeTimeEnded.prototype.getPlayerBalancesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bragi.CsgoPlayerBalance>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.bragi.CsgoPlayerBalance));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bragi.CsgoFreezeTimeEnded} returns this
 */
proto.bragi.CsgoFreezeTimeEnded.prototype.clearPlayerBalancesMap = function() {
  this.getPlayerBalancesMap().clear();
  return this;};


/**
 * map<string, CsgoPlayerItems> player_inventories = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bragi.CsgoPlayerItems>}
 */
proto.bragi.CsgoFreezeTimeEnded.prototype.getPlayerInventoriesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bragi.CsgoPlayerItems>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      proto.bragi.CsgoPlayerItems));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bragi.CsgoFreezeTimeEnded} returns this
 */
proto.bragi.CsgoFreezeTimeEnded.prototype.clearPlayerInventoriesMap = function() {
  this.getPlayerInventoriesMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoFreezeTimeStarted.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoFreezeTimeStarted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoFreezeTimeStarted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoFreezeTimeStarted.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapTime: (f = msg.getMapTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    timeRemaining: (f = msg.getTimeRemaining()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    currentRoundNumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    playerBalancesMap: (f = msg.getPlayerBalancesMap()) ? f.toObject(includeInstance, proto.bragi.CsgoPlayerBalance.toObject) : [],
    teamsRoundInfoMap: (f = msg.getTeamsRoundInfoMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoFreezeTimeStarted}
 */
proto.bragi.CsgoFreezeTimeStarted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoFreezeTimeStarted;
  return proto.bragi.CsgoFreezeTimeStarted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoFreezeTimeStarted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoFreezeTimeStarted}
 */
proto.bragi.CsgoFreezeTimeStarted.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setMapTime(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeRemaining(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCurrentRoundNumber(value);
      break;
    case 4:
      var value = msg.getPlayerBalancesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bragi.CsgoPlayerBalance.deserializeBinaryFromReader, "", new proto.bragi.CsgoPlayerBalance());
         });
      break;
    case 5:
      var value = msg.getTeamsRoundInfoMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readEnum, null, "", 0);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoFreezeTimeStarted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoFreezeTimeStarted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoFreezeTimeStarted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoFreezeTimeStarted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getTimeRemaining();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getCurrentRoundNumber();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getPlayerBalancesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bragi.CsgoPlayerBalance.serializeBinaryToWriter);
  }
  f = message.getTeamsRoundInfoMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeEnum);
  }
};


/**
 * optional google.protobuf.Duration map_time = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoFreezeTimeStarted.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoFreezeTimeStarted} returns this
*/
proto.bragi.CsgoFreezeTimeStarted.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoFreezeTimeStarted} returns this
 */
proto.bragi.CsgoFreezeTimeStarted.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoFreezeTimeStarted.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoFreezeTimeStarted.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoFreezeTimeStarted} returns this
*/
proto.bragi.CsgoFreezeTimeStarted.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoFreezeTimeStarted} returns this
 */
proto.bragi.CsgoFreezeTimeStarted.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoFreezeTimeStarted.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CsgoFreezeTimeStarted.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoFreezeTimeStarted} returns this
 */
proto.bragi.CsgoFreezeTimeStarted.prototype.setCurrentRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * map<string, CsgoPlayerBalance> player_balances = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bragi.CsgoPlayerBalance>}
 */
proto.bragi.CsgoFreezeTimeStarted.prototype.getPlayerBalancesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bragi.CsgoPlayerBalance>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.bragi.CsgoPlayerBalance));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bragi.CsgoFreezeTimeStarted} returns this
 */
proto.bragi.CsgoFreezeTimeStarted.prototype.clearPlayerBalancesMap = function() {
  this.getPlayerBalancesMap().clear();
  return this;};


/**
 * map<string, CsgoSide> teams_round_info = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bragi.CsgoSide>}
 */
proto.bragi.CsgoFreezeTimeStarted.prototype.getTeamsRoundInfoMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bragi.CsgoSide>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bragi.CsgoFreezeTimeStarted} returns this
 */
proto.bragi.CsgoFreezeTimeStarted.prototype.clearTeamsRoundInfoMap = function() {
  this.getTeamsRoundInfoMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoItemDrop.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoItemDrop.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoItemDrop} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoItemDrop.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapTime: (f = msg.getMapTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    timeRemaining: (f = msg.getTimeRemaining()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    currentRoundNumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    position: (f = msg.getPosition()) && proto.bragi.CsgoPosition.toObject(includeInstance, f),
    playerUrn: jspb.Message.getFieldWithDefault(msg, 5, ""),
    teamUrn: jspb.Message.getFieldWithDefault(msg, 6, ""),
    item: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoItemDrop}
 */
proto.bragi.CsgoItemDrop.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoItemDrop;
  return proto.bragi.CsgoItemDrop.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoItemDrop} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoItemDrop}
 */
proto.bragi.CsgoItemDrop.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setMapTime(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeRemaining(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCurrentRoundNumber(value);
      break;
    case 4:
      var value = new proto.bragi.CsgoPosition;
      reader.readMessage(value,proto.bragi.CsgoPosition.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerUrn(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeamUrn(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setItem(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoItemDrop.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoItemDrop.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoItemDrop} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoItemDrop.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getTimeRemaining();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getCurrentRoundNumber();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.CsgoPosition.serializeBinaryToWriter
    );
  }
  f = message.getPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTeamUrn();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getItem();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional google.protobuf.Duration map_time = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoItemDrop.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoItemDrop} returns this
*/
proto.bragi.CsgoItemDrop.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoItemDrop} returns this
 */
proto.bragi.CsgoItemDrop.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoItemDrop.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoItemDrop.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoItemDrop} returns this
*/
proto.bragi.CsgoItemDrop.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoItemDrop} returns this
 */
proto.bragi.CsgoItemDrop.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoItemDrop.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CsgoItemDrop.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoItemDrop} returns this
 */
proto.bragi.CsgoItemDrop.prototype.setCurrentRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional CsgoPosition position = 4;
 * @return {?proto.bragi.CsgoPosition}
 */
proto.bragi.CsgoItemDrop.prototype.getPosition = function() {
  return /** @type{?proto.bragi.CsgoPosition} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoPosition, 4));
};


/**
 * @param {?proto.bragi.CsgoPosition|undefined} value
 * @return {!proto.bragi.CsgoItemDrop} returns this
*/
proto.bragi.CsgoItemDrop.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoItemDrop} returns this
 */
proto.bragi.CsgoItemDrop.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoItemDrop.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string player_urn = 5;
 * @return {string}
 */
proto.bragi.CsgoItemDrop.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoItemDrop} returns this
 */
proto.bragi.CsgoItemDrop.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string team_urn = 6;
 * @return {string}
 */
proto.bragi.CsgoItemDrop.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoItemDrop} returns this
 */
proto.bragi.CsgoItemDrop.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string item = 7;
 * @return {string}
 */
proto.bragi.CsgoItemDrop.prototype.getItem = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoItemDrop} returns this
 */
proto.bragi.CsgoItemDrop.prototype.setItem = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoItemPickUp.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoItemPickUp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoItemPickUp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoItemPickUp.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapTime: (f = msg.getMapTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    timeRemaining: (f = msg.getTimeRemaining()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    currentRoundNumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    playerUrn: jspb.Message.getFieldWithDefault(msg, 4, ""),
    teamUrn: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoItemPickUp}
 */
proto.bragi.CsgoItemPickUp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoItemPickUp;
  return proto.bragi.CsgoItemPickUp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoItemPickUp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoItemPickUp}
 */
proto.bragi.CsgoItemPickUp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setMapTime(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeRemaining(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCurrentRoundNumber(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerUrn(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeamUrn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoItemPickUp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoItemPickUp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoItemPickUp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoItemPickUp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getTimeRemaining();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getCurrentRoundNumber();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTeamUrn();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional google.protobuf.Duration map_time = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoItemPickUp.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoItemPickUp} returns this
*/
proto.bragi.CsgoItemPickUp.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoItemPickUp} returns this
 */
proto.bragi.CsgoItemPickUp.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoItemPickUp.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoItemPickUp.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoItemPickUp} returns this
*/
proto.bragi.CsgoItemPickUp.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoItemPickUp} returns this
 */
proto.bragi.CsgoItemPickUp.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoItemPickUp.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CsgoItemPickUp.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoItemPickUp} returns this
 */
proto.bragi.CsgoItemPickUp.prototype.setCurrentRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string player_urn = 4;
 * @return {string}
 */
proto.bragi.CsgoItemPickUp.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoItemPickUp} returns this
 */
proto.bragi.CsgoItemPickUp.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string team_urn = 5;
 * @return {string}
 */
proto.bragi.CsgoItemPickUp.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoItemPickUp} returns this
 */
proto.bragi.CsgoItemPickUp.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoItemPurchase.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoItemPurchase.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoItemPurchase} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoItemPurchase.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapTime: (f = msg.getMapTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    timeRemaining: (f = msg.getTimeRemaining()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    currentRoundNumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    playerUrn: jspb.Message.getFieldWithDefault(msg, 4, ""),
    teamUrn: jspb.Message.getFieldWithDefault(msg, 5, ""),
    item: jspb.Message.getFieldWithDefault(msg, 6, ""),
    balance: jspb.Message.getFieldWithDefault(msg, 7, 0),
    equipmentValue: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoItemPurchase}
 */
proto.bragi.CsgoItemPurchase.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoItemPurchase;
  return proto.bragi.CsgoItemPurchase.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoItemPurchase} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoItemPurchase}
 */
proto.bragi.CsgoItemPurchase.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setMapTime(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeRemaining(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCurrentRoundNumber(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerUrn(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeamUrn(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setItem(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBalance(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEquipmentValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoItemPurchase.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoItemPurchase.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoItemPurchase} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoItemPurchase.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getTimeRemaining();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getCurrentRoundNumber();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTeamUrn();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getItem();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getBalance();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getEquipmentValue();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
};


/**
 * optional google.protobuf.Duration map_time = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoItemPurchase.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoItemPurchase} returns this
*/
proto.bragi.CsgoItemPurchase.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoItemPurchase} returns this
 */
proto.bragi.CsgoItemPurchase.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoItemPurchase.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoItemPurchase.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoItemPurchase} returns this
*/
proto.bragi.CsgoItemPurchase.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoItemPurchase} returns this
 */
proto.bragi.CsgoItemPurchase.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoItemPurchase.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CsgoItemPurchase.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoItemPurchase} returns this
 */
proto.bragi.CsgoItemPurchase.prototype.setCurrentRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string player_urn = 4;
 * @return {string}
 */
proto.bragi.CsgoItemPurchase.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoItemPurchase} returns this
 */
proto.bragi.CsgoItemPurchase.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string team_urn = 5;
 * @return {string}
 */
proto.bragi.CsgoItemPurchase.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoItemPurchase} returns this
 */
proto.bragi.CsgoItemPurchase.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string item = 6;
 * @return {string}
 */
proto.bragi.CsgoItemPurchase.prototype.getItem = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoItemPurchase} returns this
 */
proto.bragi.CsgoItemPurchase.prototype.setItem = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional uint32 balance = 7;
 * @return {number}
 */
proto.bragi.CsgoItemPurchase.prototype.getBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoItemPurchase} returns this
 */
proto.bragi.CsgoItemPurchase.prototype.setBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 equipment_value = 8;
 * @return {number}
 */
proto.bragi.CsgoItemPurchase.prototype.getEquipmentValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoItemPurchase} returns this
 */
proto.bragi.CsgoItemPurchase.prototype.setEquipmentValue = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoItemThrow.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoItemThrow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoItemThrow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoItemThrow.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapTime: (f = msg.getMapTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    timeRemaining: (f = msg.getTimeRemaining()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    currentRoundNumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    position: (f = msg.getPosition()) && proto.bragi.CsgoPosition.toObject(includeInstance, f),
    playerUrn: jspb.Message.getFieldWithDefault(msg, 5, ""),
    teamUrn: jspb.Message.getFieldWithDefault(msg, 6, ""),
    item: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoItemThrow}
 */
proto.bragi.CsgoItemThrow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoItemThrow;
  return proto.bragi.CsgoItemThrow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoItemThrow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoItemThrow}
 */
proto.bragi.CsgoItemThrow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setMapTime(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeRemaining(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCurrentRoundNumber(value);
      break;
    case 4:
      var value = new proto.bragi.CsgoPosition;
      reader.readMessage(value,proto.bragi.CsgoPosition.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerUrn(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeamUrn(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setItem(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoItemThrow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoItemThrow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoItemThrow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoItemThrow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getTimeRemaining();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getCurrentRoundNumber();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.CsgoPosition.serializeBinaryToWriter
    );
  }
  f = message.getPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTeamUrn();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getItem();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional google.protobuf.Duration map_time = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoItemThrow.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoItemThrow} returns this
*/
proto.bragi.CsgoItemThrow.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoItemThrow} returns this
 */
proto.bragi.CsgoItemThrow.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoItemThrow.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoItemThrow.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoItemThrow} returns this
*/
proto.bragi.CsgoItemThrow.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoItemThrow} returns this
 */
proto.bragi.CsgoItemThrow.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoItemThrow.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CsgoItemThrow.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoItemThrow} returns this
 */
proto.bragi.CsgoItemThrow.prototype.setCurrentRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional CsgoPosition position = 4;
 * @return {?proto.bragi.CsgoPosition}
 */
proto.bragi.CsgoItemThrow.prototype.getPosition = function() {
  return /** @type{?proto.bragi.CsgoPosition} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoPosition, 4));
};


/**
 * @param {?proto.bragi.CsgoPosition|undefined} value
 * @return {!proto.bragi.CsgoItemThrow} returns this
*/
proto.bragi.CsgoItemThrow.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoItemThrow} returns this
 */
proto.bragi.CsgoItemThrow.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoItemThrow.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string player_urn = 5;
 * @return {string}
 */
proto.bragi.CsgoItemThrow.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoItemThrow} returns this
 */
proto.bragi.CsgoItemThrow.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string team_urn = 6;
 * @return {string}
 */
proto.bragi.CsgoItemThrow.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoItemThrow} returns this
 */
proto.bragi.CsgoItemThrow.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string item = 7;
 * @return {string}
 */
proto.bragi.CsgoItemThrow.prototype.getItem = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoItemThrow} returns this
 */
proto.bragi.CsgoItemThrow.prototype.setItem = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.CsgoKill.repeatedFields_ = [12];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoKill.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoKill.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoKill} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoKill.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapTime: (f = msg.getMapTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    timeRemaining: (f = msg.getTimeRemaining()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    currentRoundNumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    position: (f = msg.getPosition()) && proto.bragi.CsgoPosition.toObject(includeInstance, f),
    killerUrn: jspb.Message.getFieldWithDefault(msg, 5, ""),
    killerTeamUrn: jspb.Message.getFieldWithDefault(msg, 6, ""),
    victimUrn: jspb.Message.getFieldWithDefault(msg, 7, ""),
    victimTeamUrn: jspb.Message.getFieldWithDefault(msg, 8, ""),
    weapon: jspb.Message.getFieldWithDefault(msg, 9, ""),
    headshot: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    penetrated: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    assistantsList: (f = jspb.Message.getRepeatedField(msg, 12)) == null ? undefined : f,
    balance: jspb.Message.getFieldWithDefault(msg, 13, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoKill}
 */
proto.bragi.CsgoKill.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoKill;
  return proto.bragi.CsgoKill.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoKill} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoKill}
 */
proto.bragi.CsgoKill.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setMapTime(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeRemaining(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCurrentRoundNumber(value);
      break;
    case 4:
      var value = new proto.bragi.CsgoPosition;
      reader.readMessage(value,proto.bragi.CsgoPosition.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setKillerUrn(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setKillerTeamUrn(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setVictimUrn(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setVictimTeamUrn(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setWeapon(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHeadshot(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPenetrated(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.addAssistants(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoKill.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoKill.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoKill} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoKill.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getTimeRemaining();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getCurrentRoundNumber();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.CsgoPosition.serializeBinaryToWriter
    );
  }
  f = message.getKillerUrn();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getKillerTeamUrn();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getVictimUrn();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getVictimTeamUrn();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getWeapon();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getHeadshot();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getPenetrated();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getAssistantsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      12,
      f
    );
  }
  f = message.getBalance();
  if (f !== 0) {
    writer.writeUint32(
      13,
      f
    );
  }
};


/**
 * optional google.protobuf.Duration map_time = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoKill.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoKill} returns this
*/
proto.bragi.CsgoKill.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoKill} returns this
 */
proto.bragi.CsgoKill.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoKill.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoKill.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoKill} returns this
*/
proto.bragi.CsgoKill.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoKill} returns this
 */
proto.bragi.CsgoKill.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoKill.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CsgoKill.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoKill} returns this
 */
proto.bragi.CsgoKill.prototype.setCurrentRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional CsgoPosition position = 4;
 * @return {?proto.bragi.CsgoPosition}
 */
proto.bragi.CsgoKill.prototype.getPosition = function() {
  return /** @type{?proto.bragi.CsgoPosition} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoPosition, 4));
};


/**
 * @param {?proto.bragi.CsgoPosition|undefined} value
 * @return {!proto.bragi.CsgoKill} returns this
*/
proto.bragi.CsgoKill.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoKill} returns this
 */
proto.bragi.CsgoKill.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoKill.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string killer_urn = 5;
 * @return {string}
 */
proto.bragi.CsgoKill.prototype.getKillerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoKill} returns this
 */
proto.bragi.CsgoKill.prototype.setKillerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string killer_team_urn = 6;
 * @return {string}
 */
proto.bragi.CsgoKill.prototype.getKillerTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoKill} returns this
 */
proto.bragi.CsgoKill.prototype.setKillerTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string victim_urn = 7;
 * @return {string}
 */
proto.bragi.CsgoKill.prototype.getVictimUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoKill} returns this
 */
proto.bragi.CsgoKill.prototype.setVictimUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string victim_team_urn = 8;
 * @return {string}
 */
proto.bragi.CsgoKill.prototype.getVictimTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoKill} returns this
 */
proto.bragi.CsgoKill.prototype.setVictimTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string weapon = 9;
 * @return {string}
 */
proto.bragi.CsgoKill.prototype.getWeapon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoKill} returns this
 */
proto.bragi.CsgoKill.prototype.setWeapon = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional bool headshot = 10;
 * @return {boolean}
 */
proto.bragi.CsgoKill.prototype.getHeadshot = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.CsgoKill} returns this
 */
proto.bragi.CsgoKill.prototype.setHeadshot = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool penetrated = 11;
 * @return {boolean}
 */
proto.bragi.CsgoKill.prototype.getPenetrated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.CsgoKill} returns this
 */
proto.bragi.CsgoKill.prototype.setPenetrated = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * repeated string assistants = 12;
 * @return {!Array<string>}
 */
proto.bragi.CsgoKill.prototype.getAssistantsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 12));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bragi.CsgoKill} returns this
 */
proto.bragi.CsgoKill.prototype.setAssistantsList = function(value) {
  return jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bragi.CsgoKill} returns this
 */
proto.bragi.CsgoKill.prototype.addAssistants = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CsgoKill} returns this
 */
proto.bragi.CsgoKill.prototype.clearAssistantsList = function() {
  return this.setAssistantsList([]);
};


/**
 * optional uint32 balance = 13;
 * @return {number}
 */
proto.bragi.CsgoKill.prototype.getBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoKill} returns this
 */
proto.bragi.CsgoKill.prototype.setBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoDeath.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoDeath.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoDeath} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoDeath.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapTime: (f = msg.getMapTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    timeRemaining: (f = msg.getTimeRemaining()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    currentRoundNumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    position: (f = msg.getPosition()) && proto.bragi.CsgoPosition.toObject(includeInstance, f),
    playerUrn: jspb.Message.getFieldWithDefault(msg, 5, ""),
    teamUrn: jspb.Message.getFieldWithDefault(msg, 6, ""),
    totalDeaths: jspb.Message.getFieldWithDefault(msg, 7, 0),
    respawnTime: (f = msg.getRespawnTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    suicide: jspb.Message.getBooleanFieldWithDefault(msg, 9, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoDeath}
 */
proto.bragi.CsgoDeath.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoDeath;
  return proto.bragi.CsgoDeath.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoDeath} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoDeath}
 */
proto.bragi.CsgoDeath.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setMapTime(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeRemaining(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCurrentRoundNumber(value);
      break;
    case 4:
      var value = new proto.bragi.CsgoPosition;
      reader.readMessage(value,proto.bragi.CsgoPosition.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerUrn(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeamUrn(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalDeaths(value);
      break;
    case 8:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setRespawnTime(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuicide(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoDeath.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoDeath.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoDeath} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoDeath.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getTimeRemaining();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getCurrentRoundNumber();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.CsgoPosition.serializeBinaryToWriter
    );
  }
  f = message.getPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTeamUrn();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTotalDeaths();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getRespawnTime();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getSuicide();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
};


/**
 * optional google.protobuf.Duration map_time = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoDeath.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoDeath} returns this
*/
proto.bragi.CsgoDeath.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoDeath} returns this
 */
proto.bragi.CsgoDeath.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoDeath.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoDeath.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoDeath} returns this
*/
proto.bragi.CsgoDeath.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoDeath} returns this
 */
proto.bragi.CsgoDeath.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoDeath.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CsgoDeath.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoDeath} returns this
 */
proto.bragi.CsgoDeath.prototype.setCurrentRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional CsgoPosition position = 4;
 * @return {?proto.bragi.CsgoPosition}
 */
proto.bragi.CsgoDeath.prototype.getPosition = function() {
  return /** @type{?proto.bragi.CsgoPosition} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoPosition, 4));
};


/**
 * @param {?proto.bragi.CsgoPosition|undefined} value
 * @return {!proto.bragi.CsgoDeath} returns this
*/
proto.bragi.CsgoDeath.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoDeath} returns this
 */
proto.bragi.CsgoDeath.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoDeath.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string player_urn = 5;
 * @return {string}
 */
proto.bragi.CsgoDeath.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoDeath} returns this
 */
proto.bragi.CsgoDeath.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string team_urn = 6;
 * @return {string}
 */
proto.bragi.CsgoDeath.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoDeath} returns this
 */
proto.bragi.CsgoDeath.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional uint32 total_deaths = 7;
 * @return {number}
 */
proto.bragi.CsgoDeath.prototype.getTotalDeaths = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoDeath} returns this
 */
proto.bragi.CsgoDeath.prototype.setTotalDeaths = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional google.protobuf.Duration respawn_time = 8;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoDeath.prototype.getRespawnTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 8));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoDeath} returns this
*/
proto.bragi.CsgoDeath.prototype.setRespawnTime = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoDeath} returns this
 */
proto.bragi.CsgoDeath.prototype.clearRespawnTime = function() {
  return this.setRespawnTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoDeath.prototype.hasRespawnTime = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool suicide = 9;
 * @return {boolean}
 */
proto.bragi.CsgoDeath.prototype.getSuicide = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.CsgoDeath} returns this
 */
proto.bragi.CsgoDeath.prototype.setSuicide = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoMapEnd.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoMapEnd.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoMapEnd} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoMapEnd.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapTime: (f = msg.getMapTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    timeRemaining: (f = msg.getTimeRemaining()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    currentRoundNumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    csgoMapName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    winningTeamUrn: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoMapEnd}
 */
proto.bragi.CsgoMapEnd.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoMapEnd;
  return proto.bragi.CsgoMapEnd.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoMapEnd} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoMapEnd}
 */
proto.bragi.CsgoMapEnd.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setMapTime(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeRemaining(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCurrentRoundNumber(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCsgoMapName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setWinningTeamUrn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoMapEnd.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoMapEnd.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoMapEnd} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoMapEnd.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getTimeRemaining();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getCurrentRoundNumber();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getCsgoMapName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getWinningTeamUrn();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional google.protobuf.Duration map_time = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoMapEnd.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoMapEnd} returns this
*/
proto.bragi.CsgoMapEnd.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoMapEnd} returns this
 */
proto.bragi.CsgoMapEnd.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoMapEnd.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoMapEnd.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoMapEnd} returns this
*/
proto.bragi.CsgoMapEnd.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoMapEnd} returns this
 */
proto.bragi.CsgoMapEnd.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoMapEnd.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CsgoMapEnd.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoMapEnd} returns this
 */
proto.bragi.CsgoMapEnd.prototype.setCurrentRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string csgo_map_name = 4;
 * @return {string}
 */
proto.bragi.CsgoMapEnd.prototype.getCsgoMapName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoMapEnd} returns this
 */
proto.bragi.CsgoMapEnd.prototype.setCsgoMapName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string winning_team_urn = 5;
 * @return {string}
 */
proto.bragi.CsgoMapEnd.prototype.getWinningTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoMapEnd} returns this
 */
proto.bragi.CsgoMapEnd.prototype.setWinningTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoMapStart.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoMapStart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoMapStart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoMapStart.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapTime: (f = msg.getMapTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    csgoMapName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoMapStart}
 */
proto.bragi.CsgoMapStart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoMapStart;
  return proto.bragi.CsgoMapStart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoMapStart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoMapStart}
 */
proto.bragi.CsgoMapStart.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setMapTime(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCsgoMapName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoMapStart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoMapStart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoMapStart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoMapStart.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getCsgoMapName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional google.protobuf.Duration map_time = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoMapStart.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoMapStart} returns this
*/
proto.bragi.CsgoMapStart.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoMapStart} returns this
 */
proto.bragi.CsgoMapStart.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoMapStart.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string csgo_map_name = 2;
 * @return {string}
 */
proto.bragi.CsgoMapStart.prototype.getCsgoMapName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoMapStart} returns this
 */
proto.bragi.CsgoMapStart.prototype.setCsgoMapName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoRoundEnd.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoRoundEnd.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoRoundEnd} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoRoundEnd.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapTime: (f = msg.getMapTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    timeRemaining: (f = msg.getTimeRemaining()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    currentRoundNumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    winningTeamUrn: jspb.Message.getFieldWithDefault(msg, 4, ""),
    winReason: jspb.Message.getFieldWithDefault(msg, 5, 0),
    playerBalancesMap: (f = msg.getPlayerBalancesMap()) ? f.toObject(includeInstance, proto.bragi.CsgoPlayerBalance.toObject) : [],
    playerInventoriesMap: (f = msg.getPlayerInventoriesMap()) ? f.toObject(includeInstance, proto.bragi.CsgoPlayerItems.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoRoundEnd}
 */
proto.bragi.CsgoRoundEnd.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoRoundEnd;
  return proto.bragi.CsgoRoundEnd.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoRoundEnd} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoRoundEnd}
 */
proto.bragi.CsgoRoundEnd.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setMapTime(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeRemaining(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCurrentRoundNumber(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setWinningTeamUrn(value);
      break;
    case 5:
      var value = /** @type {!proto.bragi.CsgoWinReason} */ (reader.readEnum());
      msg.setWinReason(value);
      break;
    case 6:
      var value = msg.getPlayerBalancesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bragi.CsgoPlayerBalance.deserializeBinaryFromReader, "", new proto.bragi.CsgoPlayerBalance());
         });
      break;
    case 7:
      var value = msg.getPlayerInventoriesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bragi.CsgoPlayerItems.deserializeBinaryFromReader, "", new proto.bragi.CsgoPlayerItems());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoRoundEnd.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoRoundEnd.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoRoundEnd} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoRoundEnd.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getTimeRemaining();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getCurrentRoundNumber();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getWinningTeamUrn();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getWinReason();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getPlayerBalancesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bragi.CsgoPlayerBalance.serializeBinaryToWriter);
  }
  f = message.getPlayerInventoriesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bragi.CsgoPlayerItems.serializeBinaryToWriter);
  }
};


/**
 * optional google.protobuf.Duration map_time = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoRoundEnd.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoRoundEnd} returns this
*/
proto.bragi.CsgoRoundEnd.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoRoundEnd} returns this
 */
proto.bragi.CsgoRoundEnd.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoRoundEnd.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoRoundEnd.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoRoundEnd} returns this
*/
proto.bragi.CsgoRoundEnd.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoRoundEnd} returns this
 */
proto.bragi.CsgoRoundEnd.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoRoundEnd.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CsgoRoundEnd.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoRoundEnd} returns this
 */
proto.bragi.CsgoRoundEnd.prototype.setCurrentRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string winning_team_urn = 4;
 * @return {string}
 */
proto.bragi.CsgoRoundEnd.prototype.getWinningTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoRoundEnd} returns this
 */
proto.bragi.CsgoRoundEnd.prototype.setWinningTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional CsgoWinReason win_reason = 5;
 * @return {!proto.bragi.CsgoWinReason}
 */
proto.bragi.CsgoRoundEnd.prototype.getWinReason = function() {
  return /** @type {!proto.bragi.CsgoWinReason} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.bragi.CsgoWinReason} value
 * @return {!proto.bragi.CsgoRoundEnd} returns this
 */
proto.bragi.CsgoRoundEnd.prototype.setWinReason = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * map<string, CsgoPlayerBalance> player_balances = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bragi.CsgoPlayerBalance>}
 */
proto.bragi.CsgoRoundEnd.prototype.getPlayerBalancesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bragi.CsgoPlayerBalance>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      proto.bragi.CsgoPlayerBalance));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bragi.CsgoRoundEnd} returns this
 */
proto.bragi.CsgoRoundEnd.prototype.clearPlayerBalancesMap = function() {
  this.getPlayerBalancesMap().clear();
  return this;};


/**
 * map<string, CsgoPlayerItems> player_inventories = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bragi.CsgoPlayerItems>}
 */
proto.bragi.CsgoRoundEnd.prototype.getPlayerInventoriesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bragi.CsgoPlayerItems>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      proto.bragi.CsgoPlayerItems));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bragi.CsgoRoundEnd} returns this
 */
proto.bragi.CsgoRoundEnd.prototype.clearPlayerInventoriesMap = function() {
  this.getPlayerInventoriesMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoRoundPause.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoRoundPause.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoRoundPause} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoRoundPause.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapTime: (f = msg.getMapTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    timeRemaining: (f = msg.getTimeRemaining()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    currentRoundNumber: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoRoundPause}
 */
proto.bragi.CsgoRoundPause.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoRoundPause;
  return proto.bragi.CsgoRoundPause.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoRoundPause} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoRoundPause}
 */
proto.bragi.CsgoRoundPause.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setMapTime(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeRemaining(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCurrentRoundNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoRoundPause.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoRoundPause.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoRoundPause} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoRoundPause.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getTimeRemaining();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getCurrentRoundNumber();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional google.protobuf.Duration map_time = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoRoundPause.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoRoundPause} returns this
*/
proto.bragi.CsgoRoundPause.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoRoundPause} returns this
 */
proto.bragi.CsgoRoundPause.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoRoundPause.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoRoundPause.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoRoundPause} returns this
*/
proto.bragi.CsgoRoundPause.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoRoundPause} returns this
 */
proto.bragi.CsgoRoundPause.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoRoundPause.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CsgoRoundPause.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoRoundPause} returns this
 */
proto.bragi.CsgoRoundPause.prototype.setCurrentRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoRoundResume.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoRoundResume.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoRoundResume} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoRoundResume.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapTime: (f = msg.getMapTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    timeRemaining: (f = msg.getTimeRemaining()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    currentRoundNumber: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoRoundResume}
 */
proto.bragi.CsgoRoundResume.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoRoundResume;
  return proto.bragi.CsgoRoundResume.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoRoundResume} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoRoundResume}
 */
proto.bragi.CsgoRoundResume.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setMapTime(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeRemaining(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCurrentRoundNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoRoundResume.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoRoundResume.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoRoundResume} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoRoundResume.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getTimeRemaining();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getCurrentRoundNumber();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional google.protobuf.Duration map_time = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoRoundResume.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoRoundResume} returns this
*/
proto.bragi.CsgoRoundResume.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoRoundResume} returns this
 */
proto.bragi.CsgoRoundResume.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoRoundResume.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoRoundResume.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoRoundResume} returns this
*/
proto.bragi.CsgoRoundResume.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoRoundResume} returns this
 */
proto.bragi.CsgoRoundResume.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoRoundResume.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CsgoRoundResume.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoRoundResume} returns this
 */
proto.bragi.CsgoRoundResume.prototype.setCurrentRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoRoundRollback.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoRoundRollback.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoRoundRollback} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoRoundRollback.toObject = function(includeInstance, msg) {
  var f, obj = {
    nextRoundNumber: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoRoundRollback}
 */
proto.bragi.CsgoRoundRollback.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoRoundRollback;
  return proto.bragi.CsgoRoundRollback.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoRoundRollback} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoRoundRollback}
 */
proto.bragi.CsgoRoundRollback.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNextRoundNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoRoundRollback.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoRoundRollback.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoRoundRollback} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoRoundRollback.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNextRoundNumber();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 next_round_number = 1;
 * @return {number}
 */
proto.bragi.CsgoRoundRollback.prototype.getNextRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoRoundRollback} returns this
 */
proto.bragi.CsgoRoundRollback.prototype.setNextRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bragi.CsgoRoundStart.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoRoundStart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoRoundStart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoRoundStart.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapTime: (f = msg.getMapTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    timeRemaining: (f = msg.getTimeRemaining()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    currentRoundNumber: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bragi.CsgoRoundStart}
 */
proto.bragi.CsgoRoundStart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoRoundStart;
  return proto.bragi.CsgoRoundStart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoRoundStart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoRoundStart}
 */
proto.bragi.CsgoRoundStart.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setMapTime(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeRemaining(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCurrentRoundNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bragi.CsgoRoundStart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoRoundStart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoRoundStart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoRoundStart.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getTimeRemaining();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getCurrentRoundNumber();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional google.protobuf.Duration map_time = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoRoundStart.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoRoundStart} returns this
*/
proto.bragi.CsgoRoundStart.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoRoundStart} returns this
 */
proto.bragi.CsgoRoundStart.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoRoundStart.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CsgoRoundStart.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CsgoRoundStart} returns this
*/
proto.bragi.CsgoRoundStart.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoRoundStart} returns this
 */
proto.bragi.CsgoRoundStart.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoRoundStart.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CsgoRoundStart.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoRoundStart} returns this
 */
proto.bragi.CsgoRoundStart.prototype.setCurrentRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * @enum {number}
 */
proto.bragi.CsgoSide = {
  CSGO_SIDE_UNSPECIFIED: 0,
  CSGO_SIDE_COUNTER_TERRORISTS: 1,
  CSGO_SIDE_TERRORISTS: 2
};

/**
 * @enum {number}
 */
proto.bragi.CsgoWinReason = {
  CSGO_WIN_REASON_UNSPECIFIED: 0,
  CSGO_WIN_REASON_COUNTER_TERRORISTS_ELIMINATED: 1,
  CSGO_WIN_REASON_TERRORISTS_ELIMINATED: 2,
  CSGO_WIN_REASON_EXPLOSION: 3,
  CSGO_WIN_REASON_DEFUSE: 4,
  CSGO_WIN_REASON_TIMEOUT: 5,
  CSGO_WIN_REASON_TARGET_SAVED: 6
};

/**
 * @enum {number}
 */
proto.bragi.CsgoRoundStateType = {
  CSGO_ROUND_STATE_TYPE_UNSPECIFIED: 0,
  CSGO_ROUND_STATE_TYPE_BUY_TIME: 1,
  CSGO_ROUND_STATE_TYPE_IN_PROGRESS: 2,
  CSGO_ROUND_STATE_TYPE_PAUSED: 3,
  CSGO_ROUND_STATE_TYPE_FINISHED: 4
};

/**
 * @enum {number}
 */
proto.bragi.CsgoMatchStatusType = {
  CSGO_MATCH_STATUS_TYPE_UNSPECIFIED: 0,
  CSGO_MATCH_STATUS_TYPE_LIVE: 1,
  CSGO_MATCH_STATUS_TYPE_FINISHED: 2
};

goog.object.extend(exports, proto.bragi);
