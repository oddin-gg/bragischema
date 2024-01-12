// source: bragi/cs2.proto
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
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var bragi_common_pb = require('../bragi/common_pb.js');
goog.object.extend(proto, bragi_common_pb);
goog.exportSymbol('proto.bragi.CS2BombCarriedState', null, global);
goog.exportSymbol('proto.bragi.CS2BombDefuseStarted', null, global);
goog.exportSymbol('proto.bragi.CS2BombDefused', null, global);
goog.exportSymbol('proto.bragi.CS2BombDefusedState', null, global);
goog.exportSymbol('proto.bragi.CS2BombDefusingState', null, global);
goog.exportSymbol('proto.bragi.CS2BombDroppedState', null, global);
goog.exportSymbol('proto.bragi.CS2BombExploded', null, global);
goog.exportSymbol('proto.bragi.CS2BombExplodedState', null, global);
goog.exportSymbol('proto.bragi.CS2BombPlantStarted', null, global);
goog.exportSymbol('proto.bragi.CS2BombPlanted', null, global);
goog.exportSymbol('proto.bragi.CS2BombPlantedState', null, global);
goog.exportSymbol('proto.bragi.CS2BombPlantingState', null, global);
goog.exportSymbol('proto.bragi.CS2BombState', null, global);
goog.exportSymbol('proto.bragi.CS2BombState.PayloadCase', null, global);
goog.exportSymbol('proto.bragi.CS2CurrentMapState', null, global);
goog.exportSymbol('proto.bragi.CS2CurrentMapStatePartialUpdate', null, global);
goog.exportSymbol('proto.bragi.CS2CurrentMapStatePartialUpdate.UpdateCase', null, global);
goog.exportSymbol('proto.bragi.CS2CurrentRoundState', null, global);
goog.exportSymbol('proto.bragi.CS2CurrentRoundStatePartialUpdate', null, global);
goog.exportSymbol('proto.bragi.CS2CurrentRoundStatePartialUpdate.UpdateCase', null, global);
goog.exportSymbol('proto.bragi.CS2DamageDealt', null, global);
goog.exportSymbol('proto.bragi.CS2Death', null, global);
goog.exportSymbol('proto.bragi.CS2Event', null, global);
goog.exportSymbol('proto.bragi.CS2Event.EventCase', null, global);
goog.exportSymbol('proto.bragi.CS2FreezeTimeEnded', null, global);
goog.exportSymbol('proto.bragi.CS2FreezeTimeStarted', null, global);
goog.exportSymbol('proto.bragi.CS2Item', null, global);
goog.exportSymbol('proto.bragi.CS2ItemDrop', null, global);
goog.exportSymbol('proto.bragi.CS2ItemPickUp', null, global);
goog.exportSymbol('proto.bragi.CS2ItemPurchase', null, global);
goog.exportSymbol('proto.bragi.CS2ItemThrow', null, global);
goog.exportSymbol('proto.bragi.CS2ItemType', null, global);
goog.exportSymbol('proto.bragi.CS2Kill', null, global);
goog.exportSymbol('proto.bragi.CS2MapEnd', null, global);
goog.exportSymbol('proto.bragi.CS2MapInfoState', null, global);
goog.exportSymbol('proto.bragi.CS2MapScoreState', null, global);
goog.exportSymbol('proto.bragi.CS2MapStart', null, global);
goog.exportSymbol('proto.bragi.CS2MatchMessage', null, global);
goog.exportSymbol('proto.bragi.CS2MatchMessage.Payload', null, global);
goog.exportSymbol('proto.bragi.CS2MatchMessage.Payload.PayloadCase', null, global);
goog.exportSymbol('proto.bragi.CS2MatchScoreState', null, global);
goog.exportSymbol('proto.bragi.CS2MatchSnapshot', null, global);
goog.exportSymbol('proto.bragi.CS2MatchState', null, global);
goog.exportSymbol('proto.bragi.CS2MatchStatePartialUpdate', null, global);
goog.exportSymbol('proto.bragi.CS2MatchStatePartialUpdate.UpdateCase', null, global);
goog.exportSymbol('proto.bragi.CS2MatchStatePartialUpdates', null, global);
goog.exportSymbol('proto.bragi.CS2MatchUpdate', null, global);
goog.exportSymbol('proto.bragi.CS2MatchUpdate.Payload', null, global);
goog.exportSymbol('proto.bragi.CS2MatchUpdate.Payload.PayloadCase', null, global);
goog.exportSymbol('proto.bragi.CS2PlayerBalance', null, global);
goog.exportSymbol('proto.bragi.CS2PlayerCurrentRoundState', null, global);
goog.exportSymbol('proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate', null, global);
goog.exportSymbol('proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload', null, global);
goog.exportSymbol('proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.PayloadCase', null, global);
goog.exportSymbol('proto.bragi.CS2PlayerCurrentRoundStatisticsState', null, global);
goog.exportSymbol('proto.bragi.CS2PlayerItems', null, global);
goog.exportSymbol('proto.bragi.CS2PlayerItemsState', null, global);
goog.exportSymbol('proto.bragi.CS2PlayerMapState', null, global);
goog.exportSymbol('proto.bragi.CS2PlayerMapStatePartialUpdate', null, global);
goog.exportSymbol('proto.bragi.CS2PlayerMapStatePartialUpdate.Payload', null, global);
goog.exportSymbol('proto.bragi.CS2PlayerMapStatePartialUpdate.Payload.PayloadCase', null, global);
goog.exportSymbol('proto.bragi.CS2PlayerMapStatisticsState', null, global);
goog.exportSymbol('proto.bragi.CS2PlayerPositionState', null, global);
goog.exportSymbol('proto.bragi.CS2PlayerPreviousRoundState', null, global);
goog.exportSymbol('proto.bragi.CS2PlayerStatistics', null, global);
goog.exportSymbol('proto.bragi.CS2Position', null, global);
goog.exportSymbol('proto.bragi.CS2PreviousMapState', null, global);
goog.exportSymbol('proto.bragi.CS2PreviousRoundState', null, global);
goog.exportSymbol('proto.bragi.CS2PreviousTeamRoundState', null, global);
goog.exportSymbol('proto.bragi.CS2RoundEnd', null, global);
goog.exportSymbol('proto.bragi.CS2RoundInfoState', null, global);
goog.exportSymbol('proto.bragi.CS2RoundPause', null, global);
goog.exportSymbol('proto.bragi.CS2RoundResume', null, global);
goog.exportSymbol('proto.bragi.CS2RoundRollback', null, global);
goog.exportSymbol('proto.bragi.CS2RoundStart', null, global);
goog.exportSymbol('proto.bragi.CS2RoundStateType', null, global);
goog.exportSymbol('proto.bragi.CS2RoundTimeState', null, global);
goog.exportSymbol('proto.bragi.CS2Side', null, global);
goog.exportSymbol('proto.bragi.CS2Team', null, global);
goog.exportSymbol('proto.bragi.CS2TeamCurrentRoundState', null, global);
goog.exportSymbol('proto.bragi.CS2TeamCurrentRoundStatePartialUpdate', null, global);
goog.exportSymbol('proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload', null, global);
goog.exportSymbol('proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload.PayloadCase', null, global);
goog.exportSymbol('proto.bragi.CS2TeamMapState', null, global);
goog.exportSymbol('proto.bragi.CS2TeamMapStatePartialUpdate', null, global);
goog.exportSymbol('proto.bragi.CS2TeamMapStatePartialUpdate.Payload', null, global);
goog.exportSymbol('proto.bragi.CS2TeamMapStatePartialUpdate.Payload.PayloadCase', null, global);
goog.exportSymbol('proto.bragi.CS2WeaponType', null, global);
goog.exportSymbol('proto.bragi.CS2WinReason', null, global);
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
proto.bragi.CS2MatchMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2MatchMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2MatchMessage.displayName = 'proto.bragi.CS2MatchMessage';
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
proto.bragi.CS2MatchMessage.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.CS2MatchMessage.Payload.oneofGroups_);
};
goog.inherits(proto.bragi.CS2MatchMessage.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2MatchMessage.Payload.displayName = 'proto.bragi.CS2MatchMessage.Payload';
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
proto.bragi.CS2MatchSnapshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.CS2MatchSnapshot.repeatedFields_, null);
};
goog.inherits(proto.bragi.CS2MatchSnapshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2MatchSnapshot.displayName = 'proto.bragi.CS2MatchSnapshot';
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
proto.bragi.CS2MatchUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.CS2MatchUpdate.repeatedFields_, null);
};
goog.inherits(proto.bragi.CS2MatchUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2MatchUpdate.displayName = 'proto.bragi.CS2MatchUpdate';
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
proto.bragi.CS2MatchUpdate.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.CS2MatchUpdate.Payload.oneofGroups_);
};
goog.inherits(proto.bragi.CS2MatchUpdate.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2MatchUpdate.Payload.displayName = 'proto.bragi.CS2MatchUpdate.Payload';
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
proto.bragi.CS2MatchStatePartialUpdates = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.CS2MatchStatePartialUpdates.repeatedFields_, null);
};
goog.inherits(proto.bragi.CS2MatchStatePartialUpdates, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2MatchStatePartialUpdates.displayName = 'proto.bragi.CS2MatchStatePartialUpdates';
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
proto.bragi.CS2MatchStatePartialUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.CS2MatchStatePartialUpdate.oneofGroups_);
};
goog.inherits(proto.bragi.CS2MatchStatePartialUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2MatchStatePartialUpdate.displayName = 'proto.bragi.CS2MatchStatePartialUpdate';
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
proto.bragi.CS2MatchState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.CS2MatchState.repeatedFields_, null);
};
goog.inherits(proto.bragi.CS2MatchState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2MatchState.displayName = 'proto.bragi.CS2MatchState';
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
proto.bragi.CS2MatchScoreState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2MatchScoreState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2MatchScoreState.displayName = 'proto.bragi.CS2MatchScoreState';
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
proto.bragi.CS2Team = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2Team, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2Team.displayName = 'proto.bragi.CS2Team';
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
proto.bragi.CS2CurrentMapStatePartialUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.CS2CurrentMapStatePartialUpdate.oneofGroups_);
};
goog.inherits(proto.bragi.CS2CurrentMapStatePartialUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2CurrentMapStatePartialUpdate.displayName = 'proto.bragi.CS2CurrentMapStatePartialUpdate';
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
proto.bragi.CS2CurrentMapState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.CS2CurrentMapState.repeatedFields_, null);
};
goog.inherits(proto.bragi.CS2CurrentMapState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2CurrentMapState.displayName = 'proto.bragi.CS2CurrentMapState';
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
proto.bragi.CS2PreviousMapState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.CS2PreviousMapState.repeatedFields_, null);
};
goog.inherits(proto.bragi.CS2PreviousMapState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2PreviousMapState.displayName = 'proto.bragi.CS2PreviousMapState';
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
proto.bragi.CS2MapInfoState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2MapInfoState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2MapInfoState.displayName = 'proto.bragi.CS2MapInfoState';
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
proto.bragi.CS2MapScoreState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2MapScoreState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2MapScoreState.displayName = 'proto.bragi.CS2MapScoreState';
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
proto.bragi.CS2CurrentRoundStatePartialUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.CS2CurrentRoundStatePartialUpdate.oneofGroups_);
};
goog.inherits(proto.bragi.CS2CurrentRoundStatePartialUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2CurrentRoundStatePartialUpdate.displayName = 'proto.bragi.CS2CurrentRoundStatePartialUpdate';
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
proto.bragi.CS2CurrentRoundState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2CurrentRoundState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2CurrentRoundState.displayName = 'proto.bragi.CS2CurrentRoundState';
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
proto.bragi.CS2PreviousRoundState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2PreviousRoundState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2PreviousRoundState.displayName = 'proto.bragi.CS2PreviousRoundState';
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
proto.bragi.CS2RoundInfoState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2RoundInfoState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2RoundInfoState.displayName = 'proto.bragi.CS2RoundInfoState';
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
proto.bragi.CS2RoundTimeState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2RoundTimeState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2RoundTimeState.displayName = 'proto.bragi.CS2RoundTimeState';
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
proto.bragi.CS2BombState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.CS2BombState.oneofGroups_);
};
goog.inherits(proto.bragi.CS2BombState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2BombState.displayName = 'proto.bragi.CS2BombState';
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
proto.bragi.CS2BombCarriedState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2BombCarriedState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2BombCarriedState.displayName = 'proto.bragi.CS2BombCarriedState';
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
proto.bragi.CS2BombDroppedState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2BombDroppedState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2BombDroppedState.displayName = 'proto.bragi.CS2BombDroppedState';
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
proto.bragi.CS2BombPlantingState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2BombPlantingState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2BombPlantingState.displayName = 'proto.bragi.CS2BombPlantingState';
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
proto.bragi.CS2BombPlantedState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2BombPlantedState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2BombPlantedState.displayName = 'proto.bragi.CS2BombPlantedState';
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
proto.bragi.CS2BombDefusingState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2BombDefusingState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2BombDefusingState.displayName = 'proto.bragi.CS2BombDefusingState';
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
proto.bragi.CS2BombDefusedState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2BombDefusedState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2BombDefusedState.displayName = 'proto.bragi.CS2BombDefusedState';
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
proto.bragi.CS2BombExplodedState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2BombExplodedState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2BombExplodedState.displayName = 'proto.bragi.CS2BombExplodedState';
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
proto.bragi.CS2TeamMapStatePartialUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2TeamMapStatePartialUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2TeamMapStatePartialUpdate.displayName = 'proto.bragi.CS2TeamMapStatePartialUpdate';
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
proto.bragi.CS2TeamMapStatePartialUpdate.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.CS2TeamMapStatePartialUpdate.Payload.oneofGroups_);
};
goog.inherits(proto.bragi.CS2TeamMapStatePartialUpdate.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2TeamMapStatePartialUpdate.Payload.displayName = 'proto.bragi.CS2TeamMapStatePartialUpdate.Payload';
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
proto.bragi.CS2TeamMapState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2TeamMapState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2TeamMapState.displayName = 'proto.bragi.CS2TeamMapState';
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
proto.bragi.CS2TeamCurrentRoundStatePartialUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2TeamCurrentRoundStatePartialUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.displayName = 'proto.bragi.CS2TeamCurrentRoundStatePartialUpdate';
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
proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload.oneofGroups_);
};
goog.inherits(proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload.displayName = 'proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload';
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
proto.bragi.CS2TeamCurrentRoundState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2TeamCurrentRoundState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2TeamCurrentRoundState.displayName = 'proto.bragi.CS2TeamCurrentRoundState';
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
proto.bragi.CS2PreviousTeamRoundState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2PreviousTeamRoundState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2PreviousTeamRoundState.displayName = 'proto.bragi.CS2PreviousTeamRoundState';
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
proto.bragi.CS2PlayerMapStatePartialUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2PlayerMapStatePartialUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2PlayerMapStatePartialUpdate.displayName = 'proto.bragi.CS2PlayerMapStatePartialUpdate';
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
proto.bragi.CS2PlayerMapStatePartialUpdate.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.CS2PlayerMapStatePartialUpdate.Payload.oneofGroups_);
};
goog.inherits(proto.bragi.CS2PlayerMapStatePartialUpdate.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2PlayerMapStatePartialUpdate.Payload.displayName = 'proto.bragi.CS2PlayerMapStatePartialUpdate.Payload';
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
proto.bragi.CS2PlayerMapState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2PlayerMapState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2PlayerMapState.displayName = 'proto.bragi.CS2PlayerMapState';
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
proto.bragi.CS2PlayerMapStatisticsState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2PlayerMapStatisticsState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2PlayerMapStatisticsState.displayName = 'proto.bragi.CS2PlayerMapStatisticsState';
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
proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.displayName = 'proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate';
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
proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.oneofGroups_);
};
goog.inherits(proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.displayName = 'proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload';
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
proto.bragi.CS2PlayerCurrentRoundState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2PlayerCurrentRoundState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2PlayerCurrentRoundState.displayName = 'proto.bragi.CS2PlayerCurrentRoundState';
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
proto.bragi.CS2PlayerCurrentRoundStatisticsState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2PlayerCurrentRoundStatisticsState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2PlayerCurrentRoundStatisticsState.displayName = 'proto.bragi.CS2PlayerCurrentRoundStatisticsState';
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
proto.bragi.CS2PlayerItemsState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.CS2PlayerItemsState.repeatedFields_, null);
};
goog.inherits(proto.bragi.CS2PlayerItemsState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2PlayerItemsState.displayName = 'proto.bragi.CS2PlayerItemsState';
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
proto.bragi.CS2PlayerPreviousRoundState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2PlayerPreviousRoundState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2PlayerPreviousRoundState.displayName = 'proto.bragi.CS2PlayerPreviousRoundState';
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
proto.bragi.CS2PlayerPositionState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2PlayerPositionState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2PlayerPositionState.displayName = 'proto.bragi.CS2PlayerPositionState';
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
proto.bragi.CS2PlayerStatistics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2PlayerStatistics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2PlayerStatistics.displayName = 'proto.bragi.CS2PlayerStatistics';
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
proto.bragi.CS2Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2Item.displayName = 'proto.bragi.CS2Item';
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
proto.bragi.CS2Position = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2Position, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2Position.displayName = 'proto.bragi.CS2Position';
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
proto.bragi.CS2Event = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.CS2Event.oneofGroups_);
};
goog.inherits(proto.bragi.CS2Event, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2Event.displayName = 'proto.bragi.CS2Event';
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
proto.bragi.CS2PlayerBalance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2PlayerBalance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2PlayerBalance.displayName = 'proto.bragi.CS2PlayerBalance';
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
proto.bragi.CS2PlayerItems = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.CS2PlayerItems.repeatedFields_, null);
};
goog.inherits(proto.bragi.CS2PlayerItems, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2PlayerItems.displayName = 'proto.bragi.CS2PlayerItems';
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
proto.bragi.CS2BombDefuseStarted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2BombDefuseStarted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2BombDefuseStarted.displayName = 'proto.bragi.CS2BombDefuseStarted';
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
proto.bragi.CS2BombDefused = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2BombDefused, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2BombDefused.displayName = 'proto.bragi.CS2BombDefused';
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
proto.bragi.CS2BombExploded = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2BombExploded, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2BombExploded.displayName = 'proto.bragi.CS2BombExploded';
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
proto.bragi.CS2BombPlantStarted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2BombPlantStarted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2BombPlantStarted.displayName = 'proto.bragi.CS2BombPlantStarted';
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
proto.bragi.CS2BombPlanted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2BombPlanted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2BombPlanted.displayName = 'proto.bragi.CS2BombPlanted';
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
proto.bragi.CS2DamageDealt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2DamageDealt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2DamageDealt.displayName = 'proto.bragi.CS2DamageDealt';
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
proto.bragi.CS2FreezeTimeEnded = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2FreezeTimeEnded, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2FreezeTimeEnded.displayName = 'proto.bragi.CS2FreezeTimeEnded';
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
proto.bragi.CS2FreezeTimeStarted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2FreezeTimeStarted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2FreezeTimeStarted.displayName = 'proto.bragi.CS2FreezeTimeStarted';
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
proto.bragi.CS2ItemDrop = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2ItemDrop, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2ItemDrop.displayName = 'proto.bragi.CS2ItemDrop';
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
proto.bragi.CS2ItemPickUp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2ItemPickUp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2ItemPickUp.displayName = 'proto.bragi.CS2ItemPickUp';
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
proto.bragi.CS2ItemPurchase = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2ItemPurchase, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2ItemPurchase.displayName = 'proto.bragi.CS2ItemPurchase';
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
proto.bragi.CS2ItemThrow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2ItemThrow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2ItemThrow.displayName = 'proto.bragi.CS2ItemThrow';
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
proto.bragi.CS2Kill = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.CS2Kill.repeatedFields_, null);
};
goog.inherits(proto.bragi.CS2Kill, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2Kill.displayName = 'proto.bragi.CS2Kill';
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
proto.bragi.CS2Death = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2Death, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2Death.displayName = 'proto.bragi.CS2Death';
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
proto.bragi.CS2MapEnd = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2MapEnd, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2MapEnd.displayName = 'proto.bragi.CS2MapEnd';
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
proto.bragi.CS2MapStart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2MapStart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2MapStart.displayName = 'proto.bragi.CS2MapStart';
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
proto.bragi.CS2RoundEnd = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2RoundEnd, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2RoundEnd.displayName = 'proto.bragi.CS2RoundEnd';
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
proto.bragi.CS2RoundPause = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2RoundPause, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2RoundPause.displayName = 'proto.bragi.CS2RoundPause';
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
proto.bragi.CS2RoundResume = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2RoundResume, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2RoundResume.displayName = 'proto.bragi.CS2RoundResume';
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
proto.bragi.CS2RoundRollback = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2RoundRollback, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2RoundRollback.displayName = 'proto.bragi.CS2RoundRollback';
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
proto.bragi.CS2RoundStart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CS2RoundStart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CS2RoundStart.displayName = 'proto.bragi.CS2RoundStart';
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
proto.bragi.CS2MatchMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2MatchMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2MatchMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2MatchMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    matchUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sequence: jspb.Message.getFieldWithDefault(msg, 2, 0),
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    dataStatus: jspb.Message.getFieldWithDefault(msg, 5, 0),
    payload: (f = msg.getPayload()) && proto.bragi.CS2MatchMessage.Payload.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CS2MatchMessage}
 */
proto.bragi.CS2MatchMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2MatchMessage;
  return proto.bragi.CS2MatchMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2MatchMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2MatchMessage}
 */
proto.bragi.CS2MatchMessage.deserializeBinaryFromReader = function(msg, reader) {
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
    case 5:
      var value = /** @type {!proto.bragi.DataStatus} */ (reader.readEnum());
      msg.setDataStatus(value);
      break;
    case 4:
      var value = new proto.bragi.CS2MatchMessage.Payload;
      reader.readMessage(value,proto.bragi.CS2MatchMessage.Payload.deserializeBinaryFromReader);
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
proto.bragi.CS2MatchMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2MatchMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2MatchMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2MatchMessage.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getDataStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.CS2MatchMessage.Payload.serializeBinaryToWriter
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
proto.bragi.CS2MatchMessage.Payload.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.bragi.CS2MatchMessage.Payload.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  SNAPSHOT: 1,
  UPDATE: 2
};

/**
 * @return {proto.bragi.CS2MatchMessage.Payload.PayloadCase}
 */
proto.bragi.CS2MatchMessage.Payload.prototype.getPayloadCase = function() {
  return /** @type {proto.bragi.CS2MatchMessage.Payload.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.bragi.CS2MatchMessage.Payload.oneofGroups_[0]));
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
proto.bragi.CS2MatchMessage.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2MatchMessage.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2MatchMessage.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2MatchMessage.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
    snapshot: (f = msg.getSnapshot()) && proto.bragi.CS2MatchSnapshot.toObject(includeInstance, f),
    update: (f = msg.getUpdate()) && proto.bragi.CS2MatchUpdate.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CS2MatchMessage.Payload}
 */
proto.bragi.CS2MatchMessage.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2MatchMessage.Payload;
  return proto.bragi.CS2MatchMessage.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2MatchMessage.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2MatchMessage.Payload}
 */
proto.bragi.CS2MatchMessage.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CS2MatchSnapshot;
      reader.readMessage(value,proto.bragi.CS2MatchSnapshot.deserializeBinaryFromReader);
      msg.setSnapshot(value);
      break;
    case 2:
      var value = new proto.bragi.CS2MatchUpdate;
      reader.readMessage(value,proto.bragi.CS2MatchUpdate.deserializeBinaryFromReader);
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
proto.bragi.CS2MatchMessage.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2MatchMessage.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2MatchMessage.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2MatchMessage.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSnapshot();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CS2MatchSnapshot.serializeBinaryToWriter
    );
  }
  f = message.getUpdate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CS2MatchUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * optional CS2MatchSnapshot snapshot = 1;
 * @return {?proto.bragi.CS2MatchSnapshot}
 */
proto.bragi.CS2MatchMessage.Payload.prototype.getSnapshot = function() {
  return /** @type{?proto.bragi.CS2MatchSnapshot} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2MatchSnapshot, 1));
};


/**
 * @param {?proto.bragi.CS2MatchSnapshot|undefined} value
 * @return {!proto.bragi.CS2MatchMessage.Payload} returns this
*/
proto.bragi.CS2MatchMessage.Payload.prototype.setSnapshot = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.CS2MatchMessage.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2MatchMessage.Payload} returns this
 */
proto.bragi.CS2MatchMessage.Payload.prototype.clearSnapshot = function() {
  return this.setSnapshot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2MatchMessage.Payload.prototype.hasSnapshot = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CS2MatchUpdate update = 2;
 * @return {?proto.bragi.CS2MatchUpdate}
 */
proto.bragi.CS2MatchMessage.Payload.prototype.getUpdate = function() {
  return /** @type{?proto.bragi.CS2MatchUpdate} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2MatchUpdate, 2));
};


/**
 * @param {?proto.bragi.CS2MatchUpdate|undefined} value
 * @return {!proto.bragi.CS2MatchMessage.Payload} returns this
*/
proto.bragi.CS2MatchMessage.Payload.prototype.setUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bragi.CS2MatchMessage.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2MatchMessage.Payload} returns this
 */
proto.bragi.CS2MatchMessage.Payload.prototype.clearUpdate = function() {
  return this.setUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2MatchMessage.Payload.prototype.hasUpdate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string match_urn = 1;
 * @return {string}
 */
proto.bragi.CS2MatchMessage.prototype.getMatchUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2MatchMessage} returns this
 */
proto.bragi.CS2MatchMessage.prototype.setMatchUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 sequence = 2;
 * @return {number}
 */
proto.bragi.CS2MatchMessage.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2MatchMessage} returns this
 */
proto.bragi.CS2MatchMessage.prototype.setSequence = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bragi.CS2MatchMessage.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bragi.CS2MatchMessage} returns this
*/
proto.bragi.CS2MatchMessage.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2MatchMessage} returns this
 */
proto.bragi.CS2MatchMessage.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2MatchMessage.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional DataStatus data_status = 5;
 * @return {!proto.bragi.DataStatus}
 */
proto.bragi.CS2MatchMessage.prototype.getDataStatus = function() {
  return /** @type {!proto.bragi.DataStatus} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.bragi.DataStatus} value
 * @return {!proto.bragi.CS2MatchMessage} returns this
 */
proto.bragi.CS2MatchMessage.prototype.setDataStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional Payload payload = 4;
 * @return {?proto.bragi.CS2MatchMessage.Payload}
 */
proto.bragi.CS2MatchMessage.prototype.getPayload = function() {
  return /** @type{?proto.bragi.CS2MatchMessage.Payload} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2MatchMessage.Payload, 4));
};


/**
 * @param {?proto.bragi.CS2MatchMessage.Payload|undefined} value
 * @return {!proto.bragi.CS2MatchMessage} returns this
*/
proto.bragi.CS2MatchMessage.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2MatchMessage} returns this
 */
proto.bragi.CS2MatchMessage.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2MatchMessage.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.CS2MatchSnapshot.repeatedFields_ = [4];



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
proto.bragi.CS2MatchSnapshot.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2MatchSnapshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2MatchSnapshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2MatchSnapshot.toObject = function(includeInstance, msg) {
  var f, obj = {
    matchUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sequence: jspb.Message.getFieldWithDefault(msg, 2, 0),
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    dataStatus: jspb.Message.getFieldWithDefault(msg, 6, 0),
    announcementsList: jspb.Message.toObjectList(msg.getAnnouncementsList(),
    bragi_common_pb.Announcement.toObject, includeInstance),
    matchState: (f = msg.getMatchState()) && proto.bragi.CS2MatchState.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CS2MatchSnapshot}
 */
proto.bragi.CS2MatchSnapshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2MatchSnapshot;
  return proto.bragi.CS2MatchSnapshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2MatchSnapshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2MatchSnapshot}
 */
proto.bragi.CS2MatchSnapshot.deserializeBinaryFromReader = function(msg, reader) {
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
    case 6:
      var value = /** @type {!proto.bragi.DataStatus} */ (reader.readEnum());
      msg.setDataStatus(value);
      break;
    case 4:
      var value = new bragi_common_pb.Announcement;
      reader.readMessage(value,bragi_common_pb.Announcement.deserializeBinaryFromReader);
      msg.addAnnouncements(value);
      break;
    case 5:
      var value = new proto.bragi.CS2MatchState;
      reader.readMessage(value,proto.bragi.CS2MatchState.deserializeBinaryFromReader);
      msg.setMatchState(value);
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
proto.bragi.CS2MatchSnapshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2MatchSnapshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2MatchSnapshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2MatchSnapshot.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getDataStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getAnnouncementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      bragi_common_pb.Announcement.serializeBinaryToWriter
    );
  }
  f = message.getMatchState();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bragi.CS2MatchState.serializeBinaryToWriter
    );
  }
};


/**
 * optional string match_urn = 1;
 * @return {string}
 */
proto.bragi.CS2MatchSnapshot.prototype.getMatchUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2MatchSnapshot} returns this
 */
proto.bragi.CS2MatchSnapshot.prototype.setMatchUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 sequence = 2;
 * @return {number}
 */
proto.bragi.CS2MatchSnapshot.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2MatchSnapshot} returns this
 */
proto.bragi.CS2MatchSnapshot.prototype.setSequence = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bragi.CS2MatchSnapshot.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bragi.CS2MatchSnapshot} returns this
*/
proto.bragi.CS2MatchSnapshot.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2MatchSnapshot} returns this
 */
proto.bragi.CS2MatchSnapshot.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2MatchSnapshot.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional DataStatus data_status = 6;
 * @return {!proto.bragi.DataStatus}
 */
proto.bragi.CS2MatchSnapshot.prototype.getDataStatus = function() {
  return /** @type {!proto.bragi.DataStatus} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.bragi.DataStatus} value
 * @return {!proto.bragi.CS2MatchSnapshot} returns this
 */
proto.bragi.CS2MatchSnapshot.prototype.setDataStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * repeated Announcement announcements = 4;
 * @return {!Array<!proto.bragi.Announcement>}
 */
proto.bragi.CS2MatchSnapshot.prototype.getAnnouncementsList = function() {
  return /** @type{!Array<!proto.bragi.Announcement>} */ (
    jspb.Message.getRepeatedWrapperField(this, bragi_common_pb.Announcement, 4));
};


/**
 * @param {!Array<!proto.bragi.Announcement>} value
 * @return {!proto.bragi.CS2MatchSnapshot} returns this
*/
proto.bragi.CS2MatchSnapshot.prototype.setAnnouncementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.bragi.Announcement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.Announcement}
 */
proto.bragi.CS2MatchSnapshot.prototype.addAnnouncements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.bragi.Announcement, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CS2MatchSnapshot} returns this
 */
proto.bragi.CS2MatchSnapshot.prototype.clearAnnouncementsList = function() {
  return this.setAnnouncementsList([]);
};


/**
 * optional CS2MatchState match_state = 5;
 * @return {?proto.bragi.CS2MatchState}
 */
proto.bragi.CS2MatchSnapshot.prototype.getMatchState = function() {
  return /** @type{?proto.bragi.CS2MatchState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2MatchState, 5));
};


/**
 * @param {?proto.bragi.CS2MatchState|undefined} value
 * @return {!proto.bragi.CS2MatchSnapshot} returns this
*/
proto.bragi.CS2MatchSnapshot.prototype.setMatchState = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2MatchSnapshot} returns this
 */
proto.bragi.CS2MatchSnapshot.prototype.clearMatchState = function() {
  return this.setMatchState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2MatchSnapshot.prototype.hasMatchState = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.CS2MatchUpdate.repeatedFields_ = [2];



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
proto.bragi.CS2MatchUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2MatchUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2MatchUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2MatchUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    payload: (f = msg.getPayload()) && proto.bragi.CS2MatchUpdate.Payload.toObject(includeInstance, f),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.bragi.CS2Event.toObject, includeInstance)
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
 * @return {!proto.bragi.CS2MatchUpdate}
 */
proto.bragi.CS2MatchUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2MatchUpdate;
  return proto.bragi.CS2MatchUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2MatchUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2MatchUpdate}
 */
proto.bragi.CS2MatchUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CS2MatchUpdate.Payload;
      reader.readMessage(value,proto.bragi.CS2MatchUpdate.Payload.deserializeBinaryFromReader);
      msg.setPayload(value);
      break;
    case 2:
      var value = new proto.bragi.CS2Event;
      reader.readMessage(value,proto.bragi.CS2Event.deserializeBinaryFromReader);
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
proto.bragi.CS2MatchUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2MatchUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2MatchUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2MatchUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CS2MatchUpdate.Payload.serializeBinaryToWriter
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.bragi.CS2Event.serializeBinaryToWriter
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
proto.bragi.CS2MatchUpdate.Payload.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.bragi.CS2MatchUpdate.Payload.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  MATCH_STATE: 1,
  PARTIAL_UPDATES: 2
};

/**
 * @return {proto.bragi.CS2MatchUpdate.Payload.PayloadCase}
 */
proto.bragi.CS2MatchUpdate.Payload.prototype.getPayloadCase = function() {
  return /** @type {proto.bragi.CS2MatchUpdate.Payload.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.bragi.CS2MatchUpdate.Payload.oneofGroups_[0]));
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
proto.bragi.CS2MatchUpdate.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2MatchUpdate.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2MatchUpdate.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2MatchUpdate.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
    matchState: (f = msg.getMatchState()) && proto.bragi.CS2MatchState.toObject(includeInstance, f),
    partialUpdates: (f = msg.getPartialUpdates()) && proto.bragi.CS2MatchStatePartialUpdates.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CS2MatchUpdate.Payload}
 */
proto.bragi.CS2MatchUpdate.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2MatchUpdate.Payload;
  return proto.bragi.CS2MatchUpdate.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2MatchUpdate.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2MatchUpdate.Payload}
 */
proto.bragi.CS2MatchUpdate.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CS2MatchState;
      reader.readMessage(value,proto.bragi.CS2MatchState.deserializeBinaryFromReader);
      msg.setMatchState(value);
      break;
    case 2:
      var value = new proto.bragi.CS2MatchStatePartialUpdates;
      reader.readMessage(value,proto.bragi.CS2MatchStatePartialUpdates.deserializeBinaryFromReader);
      msg.setPartialUpdates(value);
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
proto.bragi.CS2MatchUpdate.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2MatchUpdate.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2MatchUpdate.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2MatchUpdate.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatchState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CS2MatchState.serializeBinaryToWriter
    );
  }
  f = message.getPartialUpdates();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CS2MatchStatePartialUpdates.serializeBinaryToWriter
    );
  }
};


/**
 * optional CS2MatchState match_state = 1;
 * @return {?proto.bragi.CS2MatchState}
 */
proto.bragi.CS2MatchUpdate.Payload.prototype.getMatchState = function() {
  return /** @type{?proto.bragi.CS2MatchState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2MatchState, 1));
};


/**
 * @param {?proto.bragi.CS2MatchState|undefined} value
 * @return {!proto.bragi.CS2MatchUpdate.Payload} returns this
*/
proto.bragi.CS2MatchUpdate.Payload.prototype.setMatchState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.CS2MatchUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2MatchUpdate.Payload} returns this
 */
proto.bragi.CS2MatchUpdate.Payload.prototype.clearMatchState = function() {
  return this.setMatchState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2MatchUpdate.Payload.prototype.hasMatchState = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CS2MatchStatePartialUpdates partial_updates = 2;
 * @return {?proto.bragi.CS2MatchStatePartialUpdates}
 */
proto.bragi.CS2MatchUpdate.Payload.prototype.getPartialUpdates = function() {
  return /** @type{?proto.bragi.CS2MatchStatePartialUpdates} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2MatchStatePartialUpdates, 2));
};


/**
 * @param {?proto.bragi.CS2MatchStatePartialUpdates|undefined} value
 * @return {!proto.bragi.CS2MatchUpdate.Payload} returns this
*/
proto.bragi.CS2MatchUpdate.Payload.prototype.setPartialUpdates = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bragi.CS2MatchUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2MatchUpdate.Payload} returns this
 */
proto.bragi.CS2MatchUpdate.Payload.prototype.clearPartialUpdates = function() {
  return this.setPartialUpdates(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2MatchUpdate.Payload.prototype.hasPartialUpdates = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Payload payload = 1;
 * @return {?proto.bragi.CS2MatchUpdate.Payload}
 */
proto.bragi.CS2MatchUpdate.prototype.getPayload = function() {
  return /** @type{?proto.bragi.CS2MatchUpdate.Payload} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2MatchUpdate.Payload, 1));
};


/**
 * @param {?proto.bragi.CS2MatchUpdate.Payload|undefined} value
 * @return {!proto.bragi.CS2MatchUpdate} returns this
*/
proto.bragi.CS2MatchUpdate.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2MatchUpdate} returns this
 */
proto.bragi.CS2MatchUpdate.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2MatchUpdate.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated CS2Event events = 2;
 * @return {!Array<!proto.bragi.CS2Event>}
 */
proto.bragi.CS2MatchUpdate.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.bragi.CS2Event>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.CS2Event, 2));
};


/**
 * @param {!Array<!proto.bragi.CS2Event>} value
 * @return {!proto.bragi.CS2MatchUpdate} returns this
*/
proto.bragi.CS2MatchUpdate.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bragi.CS2Event=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.CS2Event}
 */
proto.bragi.CS2MatchUpdate.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bragi.CS2Event, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CS2MatchUpdate} returns this
 */
proto.bragi.CS2MatchUpdate.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.CS2MatchStatePartialUpdates.repeatedFields_ = [1];



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
proto.bragi.CS2MatchStatePartialUpdates.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2MatchStatePartialUpdates.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2MatchStatePartialUpdates} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2MatchStatePartialUpdates.toObject = function(includeInstance, msg) {
  var f, obj = {
    updatesList: jspb.Message.toObjectList(msg.getUpdatesList(),
    proto.bragi.CS2MatchStatePartialUpdate.toObject, includeInstance)
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
 * @return {!proto.bragi.CS2MatchStatePartialUpdates}
 */
proto.bragi.CS2MatchStatePartialUpdates.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2MatchStatePartialUpdates;
  return proto.bragi.CS2MatchStatePartialUpdates.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2MatchStatePartialUpdates} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2MatchStatePartialUpdates}
 */
proto.bragi.CS2MatchStatePartialUpdates.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CS2MatchStatePartialUpdate;
      reader.readMessage(value,proto.bragi.CS2MatchStatePartialUpdate.deserializeBinaryFromReader);
      msg.addUpdates(value);
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
proto.bragi.CS2MatchStatePartialUpdates.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2MatchStatePartialUpdates.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2MatchStatePartialUpdates} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2MatchStatePartialUpdates.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUpdatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bragi.CS2MatchStatePartialUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CS2MatchStatePartialUpdate updates = 1;
 * @return {!Array<!proto.bragi.CS2MatchStatePartialUpdate>}
 */
proto.bragi.CS2MatchStatePartialUpdates.prototype.getUpdatesList = function() {
  return /** @type{!Array<!proto.bragi.CS2MatchStatePartialUpdate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.CS2MatchStatePartialUpdate, 1));
};


/**
 * @param {!Array<!proto.bragi.CS2MatchStatePartialUpdate>} value
 * @return {!proto.bragi.CS2MatchStatePartialUpdates} returns this
*/
proto.bragi.CS2MatchStatePartialUpdates.prototype.setUpdatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bragi.CS2MatchStatePartialUpdate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.CS2MatchStatePartialUpdate}
 */
proto.bragi.CS2MatchStatePartialUpdates.prototype.addUpdates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bragi.CS2MatchStatePartialUpdate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CS2MatchStatePartialUpdates} returns this
 */
proto.bragi.CS2MatchStatePartialUpdates.prototype.clearUpdatesList = function() {
  return this.setUpdatesList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bragi.CS2MatchStatePartialUpdate.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.bragi.CS2MatchStatePartialUpdate.UpdateCase = {
  UPDATE_NOT_SET: 0,
  SCORE: 1,
  CURRENT_MAP_STATE: 2,
  CURRENT_MAP_STATE_PARTIAL_UPDATE: 3
};

/**
 * @return {proto.bragi.CS2MatchStatePartialUpdate.UpdateCase}
 */
proto.bragi.CS2MatchStatePartialUpdate.prototype.getUpdateCase = function() {
  return /** @type {proto.bragi.CS2MatchStatePartialUpdate.UpdateCase} */(jspb.Message.computeOneofCase(this, proto.bragi.CS2MatchStatePartialUpdate.oneofGroups_[0]));
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
proto.bragi.CS2MatchStatePartialUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2MatchStatePartialUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2MatchStatePartialUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2MatchStatePartialUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    score: (f = msg.getScore()) && proto.bragi.CS2MatchScoreState.toObject(includeInstance, f),
    currentMapState: (f = msg.getCurrentMapState()) && proto.bragi.CS2CurrentMapState.toObject(includeInstance, f),
    currentMapStatePartialUpdate: (f = msg.getCurrentMapStatePartialUpdate()) && proto.bragi.CS2CurrentMapStatePartialUpdate.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CS2MatchStatePartialUpdate}
 */
proto.bragi.CS2MatchStatePartialUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2MatchStatePartialUpdate;
  return proto.bragi.CS2MatchStatePartialUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2MatchStatePartialUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2MatchStatePartialUpdate}
 */
proto.bragi.CS2MatchStatePartialUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CS2MatchScoreState;
      reader.readMessage(value,proto.bragi.CS2MatchScoreState.deserializeBinaryFromReader);
      msg.setScore(value);
      break;
    case 2:
      var value = new proto.bragi.CS2CurrentMapState;
      reader.readMessage(value,proto.bragi.CS2CurrentMapState.deserializeBinaryFromReader);
      msg.setCurrentMapState(value);
      break;
    case 3:
      var value = new proto.bragi.CS2CurrentMapStatePartialUpdate;
      reader.readMessage(value,proto.bragi.CS2CurrentMapStatePartialUpdate.deserializeBinaryFromReader);
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
proto.bragi.CS2MatchStatePartialUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2MatchStatePartialUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2MatchStatePartialUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2MatchStatePartialUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScore();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CS2MatchScoreState.serializeBinaryToWriter
    );
  }
  f = message.getCurrentMapState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CS2CurrentMapState.serializeBinaryToWriter
    );
  }
  f = message.getCurrentMapStatePartialUpdate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.CS2CurrentMapStatePartialUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * optional CS2MatchScoreState score = 1;
 * @return {?proto.bragi.CS2MatchScoreState}
 */
proto.bragi.CS2MatchStatePartialUpdate.prototype.getScore = function() {
  return /** @type{?proto.bragi.CS2MatchScoreState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2MatchScoreState, 1));
};


/**
 * @param {?proto.bragi.CS2MatchScoreState|undefined} value
 * @return {!proto.bragi.CS2MatchStatePartialUpdate} returns this
*/
proto.bragi.CS2MatchStatePartialUpdate.prototype.setScore = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.CS2MatchStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2MatchStatePartialUpdate} returns this
 */
proto.bragi.CS2MatchStatePartialUpdate.prototype.clearScore = function() {
  return this.setScore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2MatchStatePartialUpdate.prototype.hasScore = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CS2CurrentMapState current_map_state = 2;
 * @return {?proto.bragi.CS2CurrentMapState}
 */
proto.bragi.CS2MatchStatePartialUpdate.prototype.getCurrentMapState = function() {
  return /** @type{?proto.bragi.CS2CurrentMapState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2CurrentMapState, 2));
};


/**
 * @param {?proto.bragi.CS2CurrentMapState|undefined} value
 * @return {!proto.bragi.CS2MatchStatePartialUpdate} returns this
*/
proto.bragi.CS2MatchStatePartialUpdate.prototype.setCurrentMapState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bragi.CS2MatchStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2MatchStatePartialUpdate} returns this
 */
proto.bragi.CS2MatchStatePartialUpdate.prototype.clearCurrentMapState = function() {
  return this.setCurrentMapState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2MatchStatePartialUpdate.prototype.hasCurrentMapState = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CS2CurrentMapStatePartialUpdate current_map_state_partial_update = 3;
 * @return {?proto.bragi.CS2CurrentMapStatePartialUpdate}
 */
proto.bragi.CS2MatchStatePartialUpdate.prototype.getCurrentMapStatePartialUpdate = function() {
  return /** @type{?proto.bragi.CS2CurrentMapStatePartialUpdate} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2CurrentMapStatePartialUpdate, 3));
};


/**
 * @param {?proto.bragi.CS2CurrentMapStatePartialUpdate|undefined} value
 * @return {!proto.bragi.CS2MatchStatePartialUpdate} returns this
*/
proto.bragi.CS2MatchStatePartialUpdate.prototype.setCurrentMapStatePartialUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.bragi.CS2MatchStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2MatchStatePartialUpdate} returns this
 */
proto.bragi.CS2MatchStatePartialUpdate.prototype.clearCurrentMapStatePartialUpdate = function() {
  return this.setCurrentMapStatePartialUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2MatchStatePartialUpdate.prototype.hasCurrentMapStatePartialUpdate = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.CS2MatchState.repeatedFields_ = [8];



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
proto.bragi.CS2MatchState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2MatchState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2MatchState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2MatchState.toObject = function(includeInstance, msg) {
  var f, obj = {
    matchUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    matchType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    homeTeam: (f = msg.getHomeTeam()) && proto.bragi.CS2Team.toObject(includeInstance, f),
    awayTeam: (f = msg.getAwayTeam()) && proto.bragi.CS2Team.toObject(includeInstance, f),
    score: (f = msg.getScore()) && proto.bragi.CS2MatchScoreState.toObject(includeInstance, f),
    winTeamUrn: jspb.Message.getFieldWithDefault(msg, 9, ""),
    matchStatus: jspb.Message.getFieldWithDefault(msg, 6, 0),
    currentMapState: (f = msg.getCurrentMapState()) && proto.bragi.CS2CurrentMapState.toObject(includeInstance, f),
    previousMapStatesList: jspb.Message.toObjectList(msg.getPreviousMapStatesList(),
    proto.bragi.CS2PreviousMapState.toObject, includeInstance)
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
 * @return {!proto.bragi.CS2MatchState}
 */
proto.bragi.CS2MatchState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2MatchState;
  return proto.bragi.CS2MatchState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2MatchState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2MatchState}
 */
proto.bragi.CS2MatchState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.CS2Team;
      reader.readMessage(value,proto.bragi.CS2Team.deserializeBinaryFromReader);
      msg.setHomeTeam(value);
      break;
    case 4:
      var value = new proto.bragi.CS2Team;
      reader.readMessage(value,proto.bragi.CS2Team.deserializeBinaryFromReader);
      msg.setAwayTeam(value);
      break;
    case 5:
      var value = new proto.bragi.CS2MatchScoreState;
      reader.readMessage(value,proto.bragi.CS2MatchScoreState.deserializeBinaryFromReader);
      msg.setScore(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setWinTeamUrn(value);
      break;
    case 6:
      var value = /** @type {!proto.bragi.MatchStatusType} */ (reader.readEnum());
      msg.setMatchStatus(value);
      break;
    case 7:
      var value = new proto.bragi.CS2CurrentMapState;
      reader.readMessage(value,proto.bragi.CS2CurrentMapState.deserializeBinaryFromReader);
      msg.setCurrentMapState(value);
      break;
    case 8:
      var value = new proto.bragi.CS2PreviousMapState;
      reader.readMessage(value,proto.bragi.CS2PreviousMapState.deserializeBinaryFromReader);
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
proto.bragi.CS2MatchState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2MatchState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2MatchState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2MatchState.serializeBinaryToWriter = function(message, writer) {
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
      proto.bragi.CS2Team.serializeBinaryToWriter
    );
  }
  f = message.getAwayTeam();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.CS2Team.serializeBinaryToWriter
    );
  }
  f = message.getScore();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bragi.CS2MatchScoreState.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
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
      proto.bragi.CS2CurrentMapState.serializeBinaryToWriter
    );
  }
  f = message.getPreviousMapStatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.bragi.CS2PreviousMapState.serializeBinaryToWriter
    );
  }
};


/**
 * optional string match_urn = 1;
 * @return {string}
 */
proto.bragi.CS2MatchState.prototype.getMatchUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2MatchState} returns this
 */
proto.bragi.CS2MatchState.prototype.setMatchUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional BestOfType match_type = 2;
 * @return {!proto.bragi.BestOfType}
 */
proto.bragi.CS2MatchState.prototype.getMatchType = function() {
  return /** @type {!proto.bragi.BestOfType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bragi.BestOfType} value
 * @return {!proto.bragi.CS2MatchState} returns this
 */
proto.bragi.CS2MatchState.prototype.setMatchType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional CS2Team home_team = 3;
 * @return {?proto.bragi.CS2Team}
 */
proto.bragi.CS2MatchState.prototype.getHomeTeam = function() {
  return /** @type{?proto.bragi.CS2Team} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2Team, 3));
};


/**
 * @param {?proto.bragi.CS2Team|undefined} value
 * @return {!proto.bragi.CS2MatchState} returns this
*/
proto.bragi.CS2MatchState.prototype.setHomeTeam = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2MatchState} returns this
 */
proto.bragi.CS2MatchState.prototype.clearHomeTeam = function() {
  return this.setHomeTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2MatchState.prototype.hasHomeTeam = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CS2Team away_team = 4;
 * @return {?proto.bragi.CS2Team}
 */
proto.bragi.CS2MatchState.prototype.getAwayTeam = function() {
  return /** @type{?proto.bragi.CS2Team} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2Team, 4));
};


/**
 * @param {?proto.bragi.CS2Team|undefined} value
 * @return {!proto.bragi.CS2MatchState} returns this
*/
proto.bragi.CS2MatchState.prototype.setAwayTeam = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2MatchState} returns this
 */
proto.bragi.CS2MatchState.prototype.clearAwayTeam = function() {
  return this.setAwayTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2MatchState.prototype.hasAwayTeam = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CS2MatchScoreState score = 5;
 * @return {?proto.bragi.CS2MatchScoreState}
 */
proto.bragi.CS2MatchState.prototype.getScore = function() {
  return /** @type{?proto.bragi.CS2MatchScoreState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2MatchScoreState, 5));
};


/**
 * @param {?proto.bragi.CS2MatchScoreState|undefined} value
 * @return {!proto.bragi.CS2MatchState} returns this
*/
proto.bragi.CS2MatchState.prototype.setScore = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2MatchState} returns this
 */
proto.bragi.CS2MatchState.prototype.clearScore = function() {
  return this.setScore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2MatchState.prototype.hasScore = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string win_team_urn = 9;
 * @return {string}
 */
proto.bragi.CS2MatchState.prototype.getWinTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2MatchState} returns this
 */
proto.bragi.CS2MatchState.prototype.setWinTeamUrn = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CS2MatchState} returns this
 */
proto.bragi.CS2MatchState.prototype.clearWinTeamUrn = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2MatchState.prototype.hasWinTeamUrn = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional MatchStatusType match_status = 6;
 * @return {!proto.bragi.MatchStatusType}
 */
proto.bragi.CS2MatchState.prototype.getMatchStatus = function() {
  return /** @type {!proto.bragi.MatchStatusType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.bragi.MatchStatusType} value
 * @return {!proto.bragi.CS2MatchState} returns this
 */
proto.bragi.CS2MatchState.prototype.setMatchStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional CS2CurrentMapState current_map_state = 7;
 * @return {?proto.bragi.CS2CurrentMapState}
 */
proto.bragi.CS2MatchState.prototype.getCurrentMapState = function() {
  return /** @type{?proto.bragi.CS2CurrentMapState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2CurrentMapState, 7));
};


/**
 * @param {?proto.bragi.CS2CurrentMapState|undefined} value
 * @return {!proto.bragi.CS2MatchState} returns this
*/
proto.bragi.CS2MatchState.prototype.setCurrentMapState = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2MatchState} returns this
 */
proto.bragi.CS2MatchState.prototype.clearCurrentMapState = function() {
  return this.setCurrentMapState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2MatchState.prototype.hasCurrentMapState = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated CS2PreviousMapState previous_map_states = 8;
 * @return {!Array<!proto.bragi.CS2PreviousMapState>}
 */
proto.bragi.CS2MatchState.prototype.getPreviousMapStatesList = function() {
  return /** @type{!Array<!proto.bragi.CS2PreviousMapState>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.CS2PreviousMapState, 8));
};


/**
 * @param {!Array<!proto.bragi.CS2PreviousMapState>} value
 * @return {!proto.bragi.CS2MatchState} returns this
*/
proto.bragi.CS2MatchState.prototype.setPreviousMapStatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.bragi.CS2PreviousMapState=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.CS2PreviousMapState}
 */
proto.bragi.CS2MatchState.prototype.addPreviousMapStates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.bragi.CS2PreviousMapState, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CS2MatchState} returns this
 */
proto.bragi.CS2MatchState.prototype.clearPreviousMapStatesList = function() {
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
proto.bragi.CS2MatchScoreState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2MatchScoreState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2MatchScoreState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2MatchScoreState.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bragi.CS2MatchScoreState}
 */
proto.bragi.CS2MatchScoreState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2MatchScoreState;
  return proto.bragi.CS2MatchScoreState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2MatchScoreState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2MatchScoreState}
 */
proto.bragi.CS2MatchScoreState.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bragi.CS2MatchScoreState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2MatchScoreState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2MatchScoreState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2MatchScoreState.serializeBinaryToWriter = function(message, writer) {
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
proto.bragi.CS2MatchScoreState.prototype.getHomeScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2MatchScoreState} returns this
 */
proto.bragi.CS2MatchScoreState.prototype.setHomeScore = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 away_score = 2;
 * @return {number}
 */
proto.bragi.CS2MatchScoreState.prototype.getAwayScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2MatchScoreState} returns this
 */
proto.bragi.CS2MatchScoreState.prototype.setAwayScore = function(value) {
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
proto.bragi.CS2Team.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2Team.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2Team} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2Team.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bragi.CS2Team}
 */
proto.bragi.CS2Team.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2Team;
  return proto.bragi.CS2Team.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2Team} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2Team}
 */
proto.bragi.CS2Team.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bragi.CS2Team.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2Team.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2Team} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2Team.serializeBinaryToWriter = function(message, writer) {
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
proto.bragi.CS2Team.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2Team} returns this
 */
proto.bragi.CS2Team.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string team_name = 2;
 * @return {string}
 */
proto.bragi.CS2Team.prototype.getTeamName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2Team} returns this
 */
proto.bragi.CS2Team.prototype.setTeamName = function(value) {
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
proto.bragi.CS2CurrentMapStatePartialUpdate.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.bragi.CS2CurrentMapStatePartialUpdate.UpdateCase = {
  UPDATE_NOT_SET: 0,
  INFO: 1,
  SCORE: 2,
  CURRENT_ROUND_STATE: 3,
  CURRENT_ROUND_STATE_PARTIAL_UPDATE: 4,
  TEAM_MAP_STATES_PARTIAL_UPDATE: 5
};

/**
 * @return {proto.bragi.CS2CurrentMapStatePartialUpdate.UpdateCase}
 */
proto.bragi.CS2CurrentMapStatePartialUpdate.prototype.getUpdateCase = function() {
  return /** @type {proto.bragi.CS2CurrentMapStatePartialUpdate.UpdateCase} */(jspb.Message.computeOneofCase(this, proto.bragi.CS2CurrentMapStatePartialUpdate.oneofGroups_[0]));
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
proto.bragi.CS2CurrentMapStatePartialUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2CurrentMapStatePartialUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2CurrentMapStatePartialUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2CurrentMapStatePartialUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && proto.bragi.CS2MapInfoState.toObject(includeInstance, f),
    score: (f = msg.getScore()) && proto.bragi.CS2MapScoreState.toObject(includeInstance, f),
    currentRoundState: (f = msg.getCurrentRoundState()) && proto.bragi.CS2CurrentRoundState.toObject(includeInstance, f),
    currentRoundStatePartialUpdate: (f = msg.getCurrentRoundStatePartialUpdate()) && proto.bragi.CS2CurrentRoundStatePartialUpdate.toObject(includeInstance, f),
    teamMapStatesPartialUpdate: (f = msg.getTeamMapStatesPartialUpdate()) && proto.bragi.CS2TeamMapStatePartialUpdate.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CS2CurrentMapStatePartialUpdate}
 */
proto.bragi.CS2CurrentMapStatePartialUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2CurrentMapStatePartialUpdate;
  return proto.bragi.CS2CurrentMapStatePartialUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2CurrentMapStatePartialUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2CurrentMapStatePartialUpdate}
 */
proto.bragi.CS2CurrentMapStatePartialUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CS2MapInfoState;
      reader.readMessage(value,proto.bragi.CS2MapInfoState.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = new proto.bragi.CS2MapScoreState;
      reader.readMessage(value,proto.bragi.CS2MapScoreState.deserializeBinaryFromReader);
      msg.setScore(value);
      break;
    case 3:
      var value = new proto.bragi.CS2CurrentRoundState;
      reader.readMessage(value,proto.bragi.CS2CurrentRoundState.deserializeBinaryFromReader);
      msg.setCurrentRoundState(value);
      break;
    case 4:
      var value = new proto.bragi.CS2CurrentRoundStatePartialUpdate;
      reader.readMessage(value,proto.bragi.CS2CurrentRoundStatePartialUpdate.deserializeBinaryFromReader);
      msg.setCurrentRoundStatePartialUpdate(value);
      break;
    case 5:
      var value = new proto.bragi.CS2TeamMapStatePartialUpdate;
      reader.readMessage(value,proto.bragi.CS2TeamMapStatePartialUpdate.deserializeBinaryFromReader);
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
proto.bragi.CS2CurrentMapStatePartialUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2CurrentMapStatePartialUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2CurrentMapStatePartialUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2CurrentMapStatePartialUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CS2MapInfoState.serializeBinaryToWriter
    );
  }
  f = message.getScore();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CS2MapScoreState.serializeBinaryToWriter
    );
  }
  f = message.getCurrentRoundState();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.CS2CurrentRoundState.serializeBinaryToWriter
    );
  }
  f = message.getCurrentRoundStatePartialUpdate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.CS2CurrentRoundStatePartialUpdate.serializeBinaryToWriter
    );
  }
  f = message.getTeamMapStatesPartialUpdate();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bragi.CS2TeamMapStatePartialUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * optional CS2MapInfoState info = 1;
 * @return {?proto.bragi.CS2MapInfoState}
 */
proto.bragi.CS2CurrentMapStatePartialUpdate.prototype.getInfo = function() {
  return /** @type{?proto.bragi.CS2MapInfoState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2MapInfoState, 1));
};


/**
 * @param {?proto.bragi.CS2MapInfoState|undefined} value
 * @return {!proto.bragi.CS2CurrentMapStatePartialUpdate} returns this
*/
proto.bragi.CS2CurrentMapStatePartialUpdate.prototype.setInfo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.CS2CurrentMapStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2CurrentMapStatePartialUpdate} returns this
 */
proto.bragi.CS2CurrentMapStatePartialUpdate.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2CurrentMapStatePartialUpdate.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CS2MapScoreState score = 2;
 * @return {?proto.bragi.CS2MapScoreState}
 */
proto.bragi.CS2CurrentMapStatePartialUpdate.prototype.getScore = function() {
  return /** @type{?proto.bragi.CS2MapScoreState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2MapScoreState, 2));
};


/**
 * @param {?proto.bragi.CS2MapScoreState|undefined} value
 * @return {!proto.bragi.CS2CurrentMapStatePartialUpdate} returns this
*/
proto.bragi.CS2CurrentMapStatePartialUpdate.prototype.setScore = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bragi.CS2CurrentMapStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2CurrentMapStatePartialUpdate} returns this
 */
proto.bragi.CS2CurrentMapStatePartialUpdate.prototype.clearScore = function() {
  return this.setScore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2CurrentMapStatePartialUpdate.prototype.hasScore = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CS2CurrentRoundState current_round_state = 3;
 * @return {?proto.bragi.CS2CurrentRoundState}
 */
proto.bragi.CS2CurrentMapStatePartialUpdate.prototype.getCurrentRoundState = function() {
  return /** @type{?proto.bragi.CS2CurrentRoundState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2CurrentRoundState, 3));
};


/**
 * @param {?proto.bragi.CS2CurrentRoundState|undefined} value
 * @return {!proto.bragi.CS2CurrentMapStatePartialUpdate} returns this
*/
proto.bragi.CS2CurrentMapStatePartialUpdate.prototype.setCurrentRoundState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.bragi.CS2CurrentMapStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2CurrentMapStatePartialUpdate} returns this
 */
proto.bragi.CS2CurrentMapStatePartialUpdate.prototype.clearCurrentRoundState = function() {
  return this.setCurrentRoundState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2CurrentMapStatePartialUpdate.prototype.hasCurrentRoundState = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CS2CurrentRoundStatePartialUpdate current_round_state_partial_update = 4;
 * @return {?proto.bragi.CS2CurrentRoundStatePartialUpdate}
 */
proto.bragi.CS2CurrentMapStatePartialUpdate.prototype.getCurrentRoundStatePartialUpdate = function() {
  return /** @type{?proto.bragi.CS2CurrentRoundStatePartialUpdate} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2CurrentRoundStatePartialUpdate, 4));
};


/**
 * @param {?proto.bragi.CS2CurrentRoundStatePartialUpdate|undefined} value
 * @return {!proto.bragi.CS2CurrentMapStatePartialUpdate} returns this
*/
proto.bragi.CS2CurrentMapStatePartialUpdate.prototype.setCurrentRoundStatePartialUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.bragi.CS2CurrentMapStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2CurrentMapStatePartialUpdate} returns this
 */
proto.bragi.CS2CurrentMapStatePartialUpdate.prototype.clearCurrentRoundStatePartialUpdate = function() {
  return this.setCurrentRoundStatePartialUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2CurrentMapStatePartialUpdate.prototype.hasCurrentRoundStatePartialUpdate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CS2TeamMapStatePartialUpdate team_map_states_partial_update = 5;
 * @return {?proto.bragi.CS2TeamMapStatePartialUpdate}
 */
proto.bragi.CS2CurrentMapStatePartialUpdate.prototype.getTeamMapStatesPartialUpdate = function() {
  return /** @type{?proto.bragi.CS2TeamMapStatePartialUpdate} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2TeamMapStatePartialUpdate, 5));
};


/**
 * @param {?proto.bragi.CS2TeamMapStatePartialUpdate|undefined} value
 * @return {!proto.bragi.CS2CurrentMapStatePartialUpdate} returns this
*/
proto.bragi.CS2CurrentMapStatePartialUpdate.prototype.setTeamMapStatesPartialUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.bragi.CS2CurrentMapStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2CurrentMapStatePartialUpdate} returns this
 */
proto.bragi.CS2CurrentMapStatePartialUpdate.prototype.clearTeamMapStatesPartialUpdate = function() {
  return this.setTeamMapStatesPartialUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2CurrentMapStatePartialUpdate.prototype.hasTeamMapStatesPartialUpdate = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.CS2CurrentMapState.repeatedFields_ = [5];



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
proto.bragi.CS2CurrentMapState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2CurrentMapState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2CurrentMapState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2CurrentMapState.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapOrder: jspb.Message.getFieldWithDefault(msg, 1, 0),
    info: (f = msg.getInfo()) && proto.bragi.CS2MapInfoState.toObject(includeInstance, f),
    score: (f = msg.getScore()) && proto.bragi.CS2MapScoreState.toObject(includeInstance, f),
    currentRoundState: (f = msg.getCurrentRoundState()) && proto.bragi.CS2CurrentRoundState.toObject(includeInstance, f),
    previousRoundStatesList: jspb.Message.toObjectList(msg.getPreviousRoundStatesList(),
    proto.bragi.CS2PreviousRoundState.toObject, includeInstance),
    teamMapStatesMap: (f = msg.getTeamMapStatesMap()) ? f.toObject(includeInstance, proto.bragi.CS2TeamMapState.toObject) : []
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
 * @return {!proto.bragi.CS2CurrentMapState}
 */
proto.bragi.CS2CurrentMapState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2CurrentMapState;
  return proto.bragi.CS2CurrentMapState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2CurrentMapState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2CurrentMapState}
 */
proto.bragi.CS2CurrentMapState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.CS2MapInfoState;
      reader.readMessage(value,proto.bragi.CS2MapInfoState.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 3:
      var value = new proto.bragi.CS2MapScoreState;
      reader.readMessage(value,proto.bragi.CS2MapScoreState.deserializeBinaryFromReader);
      msg.setScore(value);
      break;
    case 4:
      var value = new proto.bragi.CS2CurrentRoundState;
      reader.readMessage(value,proto.bragi.CS2CurrentRoundState.deserializeBinaryFromReader);
      msg.setCurrentRoundState(value);
      break;
    case 5:
      var value = new proto.bragi.CS2PreviousRoundState;
      reader.readMessage(value,proto.bragi.CS2PreviousRoundState.deserializeBinaryFromReader);
      msg.addPreviousRoundStates(value);
      break;
    case 6:
      var value = msg.getTeamMapStatesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bragi.CS2TeamMapState.deserializeBinaryFromReader, "", new proto.bragi.CS2TeamMapState());
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
proto.bragi.CS2CurrentMapState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2CurrentMapState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2CurrentMapState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2CurrentMapState.serializeBinaryToWriter = function(message, writer) {
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
      proto.bragi.CS2MapInfoState.serializeBinaryToWriter
    );
  }
  f = message.getScore();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.CS2MapScoreState.serializeBinaryToWriter
    );
  }
  f = message.getCurrentRoundState();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.CS2CurrentRoundState.serializeBinaryToWriter
    );
  }
  f = message.getPreviousRoundStatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.bragi.CS2PreviousRoundState.serializeBinaryToWriter
    );
  }
  f = message.getTeamMapStatesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bragi.CS2TeamMapState.serializeBinaryToWriter);
  }
};


/**
 * optional uint32 map_order = 1;
 * @return {number}
 */
proto.bragi.CS2CurrentMapState.prototype.getMapOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2CurrentMapState} returns this
 */
proto.bragi.CS2CurrentMapState.prototype.setMapOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional CS2MapInfoState info = 2;
 * @return {?proto.bragi.CS2MapInfoState}
 */
proto.bragi.CS2CurrentMapState.prototype.getInfo = function() {
  return /** @type{?proto.bragi.CS2MapInfoState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2MapInfoState, 2));
};


/**
 * @param {?proto.bragi.CS2MapInfoState|undefined} value
 * @return {!proto.bragi.CS2CurrentMapState} returns this
*/
proto.bragi.CS2CurrentMapState.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2CurrentMapState} returns this
 */
proto.bragi.CS2CurrentMapState.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2CurrentMapState.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CS2MapScoreState score = 3;
 * @return {?proto.bragi.CS2MapScoreState}
 */
proto.bragi.CS2CurrentMapState.prototype.getScore = function() {
  return /** @type{?proto.bragi.CS2MapScoreState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2MapScoreState, 3));
};


/**
 * @param {?proto.bragi.CS2MapScoreState|undefined} value
 * @return {!proto.bragi.CS2CurrentMapState} returns this
*/
proto.bragi.CS2CurrentMapState.prototype.setScore = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2CurrentMapState} returns this
 */
proto.bragi.CS2CurrentMapState.prototype.clearScore = function() {
  return this.setScore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2CurrentMapState.prototype.hasScore = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CS2CurrentRoundState current_round_state = 4;
 * @return {?proto.bragi.CS2CurrentRoundState}
 */
proto.bragi.CS2CurrentMapState.prototype.getCurrentRoundState = function() {
  return /** @type{?proto.bragi.CS2CurrentRoundState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2CurrentRoundState, 4));
};


/**
 * @param {?proto.bragi.CS2CurrentRoundState|undefined} value
 * @return {!proto.bragi.CS2CurrentMapState} returns this
*/
proto.bragi.CS2CurrentMapState.prototype.setCurrentRoundState = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2CurrentMapState} returns this
 */
proto.bragi.CS2CurrentMapState.prototype.clearCurrentRoundState = function() {
  return this.setCurrentRoundState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2CurrentMapState.prototype.hasCurrentRoundState = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated CS2PreviousRoundState previous_round_states = 5;
 * @return {!Array<!proto.bragi.CS2PreviousRoundState>}
 */
proto.bragi.CS2CurrentMapState.prototype.getPreviousRoundStatesList = function() {
  return /** @type{!Array<!proto.bragi.CS2PreviousRoundState>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.CS2PreviousRoundState, 5));
};


/**
 * @param {!Array<!proto.bragi.CS2PreviousRoundState>} value
 * @return {!proto.bragi.CS2CurrentMapState} returns this
*/
proto.bragi.CS2CurrentMapState.prototype.setPreviousRoundStatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.bragi.CS2PreviousRoundState=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.CS2PreviousRoundState}
 */
proto.bragi.CS2CurrentMapState.prototype.addPreviousRoundStates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.bragi.CS2PreviousRoundState, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CS2CurrentMapState} returns this
 */
proto.bragi.CS2CurrentMapState.prototype.clearPreviousRoundStatesList = function() {
  return this.setPreviousRoundStatesList([]);
};


/**
 * map<string, CS2TeamMapState> team_map_states = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bragi.CS2TeamMapState>}
 */
proto.bragi.CS2CurrentMapState.prototype.getTeamMapStatesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bragi.CS2TeamMapState>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      proto.bragi.CS2TeamMapState));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bragi.CS2CurrentMapState} returns this
 */
proto.bragi.CS2CurrentMapState.prototype.clearTeamMapStatesMap = function() {
  this.getTeamMapStatesMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.CS2PreviousMapState.repeatedFields_ = [4];



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
proto.bragi.CS2PreviousMapState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2PreviousMapState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2PreviousMapState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2PreviousMapState.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapOrder: jspb.Message.getFieldWithDefault(msg, 1, 0),
    info: (f = msg.getInfo()) && proto.bragi.CS2MapInfoState.toObject(includeInstance, f),
    score: (f = msg.getScore()) && proto.bragi.CS2MapScoreState.toObject(includeInstance, f),
    roundStatesList: jspb.Message.toObjectList(msg.getRoundStatesList(),
    proto.bragi.CS2PreviousRoundState.toObject, includeInstance),
    teamMapStatesMap: (f = msg.getTeamMapStatesMap()) ? f.toObject(includeInstance, proto.bragi.CS2TeamMapState.toObject) : []
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
 * @return {!proto.bragi.CS2PreviousMapState}
 */
proto.bragi.CS2PreviousMapState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2PreviousMapState;
  return proto.bragi.CS2PreviousMapState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2PreviousMapState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2PreviousMapState}
 */
proto.bragi.CS2PreviousMapState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.CS2MapInfoState;
      reader.readMessage(value,proto.bragi.CS2MapInfoState.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 3:
      var value = new proto.bragi.CS2MapScoreState;
      reader.readMessage(value,proto.bragi.CS2MapScoreState.deserializeBinaryFromReader);
      msg.setScore(value);
      break;
    case 4:
      var value = new proto.bragi.CS2PreviousRoundState;
      reader.readMessage(value,proto.bragi.CS2PreviousRoundState.deserializeBinaryFromReader);
      msg.addRoundStates(value);
      break;
    case 5:
      var value = msg.getTeamMapStatesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bragi.CS2TeamMapState.deserializeBinaryFromReader, "", new proto.bragi.CS2TeamMapState());
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
proto.bragi.CS2PreviousMapState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2PreviousMapState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2PreviousMapState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2PreviousMapState.serializeBinaryToWriter = function(message, writer) {
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
      proto.bragi.CS2MapInfoState.serializeBinaryToWriter
    );
  }
  f = message.getScore();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.CS2MapScoreState.serializeBinaryToWriter
    );
  }
  f = message.getRoundStatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.bragi.CS2PreviousRoundState.serializeBinaryToWriter
    );
  }
  f = message.getTeamMapStatesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bragi.CS2TeamMapState.serializeBinaryToWriter);
  }
};


/**
 * optional uint32 map_order = 1;
 * @return {number}
 */
proto.bragi.CS2PreviousMapState.prototype.getMapOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2PreviousMapState} returns this
 */
proto.bragi.CS2PreviousMapState.prototype.setMapOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional CS2MapInfoState info = 2;
 * @return {?proto.bragi.CS2MapInfoState}
 */
proto.bragi.CS2PreviousMapState.prototype.getInfo = function() {
  return /** @type{?proto.bragi.CS2MapInfoState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2MapInfoState, 2));
};


/**
 * @param {?proto.bragi.CS2MapInfoState|undefined} value
 * @return {!proto.bragi.CS2PreviousMapState} returns this
*/
proto.bragi.CS2PreviousMapState.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2PreviousMapState} returns this
 */
proto.bragi.CS2PreviousMapState.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2PreviousMapState.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CS2MapScoreState score = 3;
 * @return {?proto.bragi.CS2MapScoreState}
 */
proto.bragi.CS2PreviousMapState.prototype.getScore = function() {
  return /** @type{?proto.bragi.CS2MapScoreState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2MapScoreState, 3));
};


/**
 * @param {?proto.bragi.CS2MapScoreState|undefined} value
 * @return {!proto.bragi.CS2PreviousMapState} returns this
*/
proto.bragi.CS2PreviousMapState.prototype.setScore = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2PreviousMapState} returns this
 */
proto.bragi.CS2PreviousMapState.prototype.clearScore = function() {
  return this.setScore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2PreviousMapState.prototype.hasScore = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated CS2PreviousRoundState round_states = 4;
 * @return {!Array<!proto.bragi.CS2PreviousRoundState>}
 */
proto.bragi.CS2PreviousMapState.prototype.getRoundStatesList = function() {
  return /** @type{!Array<!proto.bragi.CS2PreviousRoundState>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.CS2PreviousRoundState, 4));
};


/**
 * @param {!Array<!proto.bragi.CS2PreviousRoundState>} value
 * @return {!proto.bragi.CS2PreviousMapState} returns this
*/
proto.bragi.CS2PreviousMapState.prototype.setRoundStatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.bragi.CS2PreviousRoundState=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.CS2PreviousRoundState}
 */
proto.bragi.CS2PreviousMapState.prototype.addRoundStates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.bragi.CS2PreviousRoundState, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CS2PreviousMapState} returns this
 */
proto.bragi.CS2PreviousMapState.prototype.clearRoundStatesList = function() {
  return this.setRoundStatesList([]);
};


/**
 * map<string, CS2TeamMapState> team_map_states = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bragi.CS2TeamMapState>}
 */
proto.bragi.CS2PreviousMapState.prototype.getTeamMapStatesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bragi.CS2TeamMapState>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      proto.bragi.CS2TeamMapState));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bragi.CS2PreviousMapState} returns this
 */
proto.bragi.CS2PreviousMapState.prototype.clearTeamMapStatesMap = function() {
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
proto.bragi.CS2MapInfoState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2MapInfoState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2MapInfoState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2MapInfoState.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    maxRoundsDefault: jspb.Message.getFieldWithDefault(msg, 2, 0),
    maxRoundsOvertime: jspb.Message.getFieldWithDefault(msg, 3, 0),
    freezeTimeDuration: (f = msg.getFreezeTimeDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    roundTimeDuration: (f = msg.getRoundTimeDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    bombTimeDuration: (f = msg.getBombTimeDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    mapEnded: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    winTeamUrn: jspb.Message.getFieldWithDefault(msg, 10, "")
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
 * @return {!proto.bragi.CS2MapInfoState}
 */
proto.bragi.CS2MapInfoState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2MapInfoState;
  return proto.bragi.CS2MapInfoState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2MapInfoState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2MapInfoState}
 */
proto.bragi.CS2MapInfoState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMapName(value);
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
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setWinTeamUrn(value);
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
proto.bragi.CS2MapInfoState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2MapInfoState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2MapInfoState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2MapInfoState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapName();
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
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string map_name = 1;
 * @return {string}
 */
proto.bragi.CS2MapInfoState.prototype.getMapName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2MapInfoState} returns this
 */
proto.bragi.CS2MapInfoState.prototype.setMapName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 max_rounds_default = 2;
 * @return {number}
 */
proto.bragi.CS2MapInfoState.prototype.getMaxRoundsDefault = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2MapInfoState} returns this
 */
proto.bragi.CS2MapInfoState.prototype.setMaxRoundsDefault = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 max_rounds_overtime = 3;
 * @return {number}
 */
proto.bragi.CS2MapInfoState.prototype.getMaxRoundsOvertime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2MapInfoState} returns this
 */
proto.bragi.CS2MapInfoState.prototype.setMaxRoundsOvertime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional google.protobuf.Duration freeze_time_duration = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CS2MapInfoState.prototype.getFreezeTimeDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2MapInfoState} returns this
*/
proto.bragi.CS2MapInfoState.prototype.setFreezeTimeDuration = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2MapInfoState} returns this
 */
proto.bragi.CS2MapInfoState.prototype.clearFreezeTimeDuration = function() {
  return this.setFreezeTimeDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2MapInfoState.prototype.hasFreezeTimeDuration = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Duration round_time_duration = 5;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CS2MapInfoState.prototype.getRoundTimeDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 5));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2MapInfoState} returns this
*/
proto.bragi.CS2MapInfoState.prototype.setRoundTimeDuration = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2MapInfoState} returns this
 */
proto.bragi.CS2MapInfoState.prototype.clearRoundTimeDuration = function() {
  return this.setRoundTimeDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2MapInfoState.prototype.hasRoundTimeDuration = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Duration bomb_time_duration = 6;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CS2MapInfoState.prototype.getBombTimeDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 6));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2MapInfoState} returns this
*/
proto.bragi.CS2MapInfoState.prototype.setBombTimeDuration = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2MapInfoState} returns this
 */
proto.bragi.CS2MapInfoState.prototype.clearBombTimeDuration = function() {
  return this.setBombTimeDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2MapInfoState.prototype.hasBombTimeDuration = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp start_time = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bragi.CS2MapInfoState.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bragi.CS2MapInfoState} returns this
*/
proto.bragi.CS2MapInfoState.prototype.setStartTime = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2MapInfoState} returns this
 */
proto.bragi.CS2MapInfoState.prototype.clearStartTime = function() {
  return this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2MapInfoState.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp end_time = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bragi.CS2MapInfoState.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bragi.CS2MapInfoState} returns this
*/
proto.bragi.CS2MapInfoState.prototype.setEndTime = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2MapInfoState} returns this
 */
proto.bragi.CS2MapInfoState.prototype.clearEndTime = function() {
  return this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2MapInfoState.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool map_ended = 9;
 * @return {boolean}
 */
proto.bragi.CS2MapInfoState.prototype.getMapEnded = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.CS2MapInfoState} returns this
 */
proto.bragi.CS2MapInfoState.prototype.setMapEnded = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional string win_team_urn = 10;
 * @return {string}
 */
proto.bragi.CS2MapInfoState.prototype.getWinTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2MapInfoState} returns this
 */
proto.bragi.CS2MapInfoState.prototype.setWinTeamUrn = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CS2MapInfoState} returns this
 */
proto.bragi.CS2MapInfoState.prototype.clearWinTeamUrn = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2MapInfoState.prototype.hasWinTeamUrn = function() {
  return jspb.Message.getField(this, 10) != null;
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
proto.bragi.CS2MapScoreState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2MapScoreState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2MapScoreState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2MapScoreState.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bragi.CS2MapScoreState}
 */
proto.bragi.CS2MapScoreState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2MapScoreState;
  return proto.bragi.CS2MapScoreState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2MapScoreState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2MapScoreState}
 */
proto.bragi.CS2MapScoreState.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bragi.CS2MapScoreState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2MapScoreState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2MapScoreState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2MapScoreState.serializeBinaryToWriter = function(message, writer) {
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
proto.bragi.CS2MapScoreState.prototype.getHomeScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2MapScoreState} returns this
 */
proto.bragi.CS2MapScoreState.prototype.setHomeScore = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 away_score = 2;
 * @return {number}
 */
proto.bragi.CS2MapScoreState.prototype.getAwayScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2MapScoreState} returns this
 */
proto.bragi.CS2MapScoreState.prototype.setAwayScore = function(value) {
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
proto.bragi.CS2CurrentRoundStatePartialUpdate.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.bragi.CS2CurrentRoundStatePartialUpdate.UpdateCase = {
  UPDATE_NOT_SET: 0,
  INFO: 1,
  TIME: 2,
  BOMB_STATE: 3,
  TEAM_STATES_PARTIAL_UPDATE: 4
};

/**
 * @return {proto.bragi.CS2CurrentRoundStatePartialUpdate.UpdateCase}
 */
proto.bragi.CS2CurrentRoundStatePartialUpdate.prototype.getUpdateCase = function() {
  return /** @type {proto.bragi.CS2CurrentRoundStatePartialUpdate.UpdateCase} */(jspb.Message.computeOneofCase(this, proto.bragi.CS2CurrentRoundStatePartialUpdate.oneofGroups_[0]));
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
proto.bragi.CS2CurrentRoundStatePartialUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2CurrentRoundStatePartialUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2CurrentRoundStatePartialUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2CurrentRoundStatePartialUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && proto.bragi.CS2RoundInfoState.toObject(includeInstance, f),
    time: (f = msg.getTime()) && proto.bragi.CS2RoundTimeState.toObject(includeInstance, f),
    bombState: (f = msg.getBombState()) && proto.bragi.CS2BombState.toObject(includeInstance, f),
    teamStatesPartialUpdate: (f = msg.getTeamStatesPartialUpdate()) && proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CS2CurrentRoundStatePartialUpdate}
 */
proto.bragi.CS2CurrentRoundStatePartialUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2CurrentRoundStatePartialUpdate;
  return proto.bragi.CS2CurrentRoundStatePartialUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2CurrentRoundStatePartialUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2CurrentRoundStatePartialUpdate}
 */
proto.bragi.CS2CurrentRoundStatePartialUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CS2RoundInfoState;
      reader.readMessage(value,proto.bragi.CS2RoundInfoState.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = new proto.bragi.CS2RoundTimeState;
      reader.readMessage(value,proto.bragi.CS2RoundTimeState.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 3:
      var value = new proto.bragi.CS2BombState;
      reader.readMessage(value,proto.bragi.CS2BombState.deserializeBinaryFromReader);
      msg.setBombState(value);
      break;
    case 4:
      var value = new proto.bragi.CS2TeamCurrentRoundStatePartialUpdate;
      reader.readMessage(value,proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.deserializeBinaryFromReader);
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
proto.bragi.CS2CurrentRoundStatePartialUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2CurrentRoundStatePartialUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2CurrentRoundStatePartialUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2CurrentRoundStatePartialUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CS2RoundInfoState.serializeBinaryToWriter
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CS2RoundTimeState.serializeBinaryToWriter
    );
  }
  f = message.getBombState();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.CS2BombState.serializeBinaryToWriter
    );
  }
  f = message.getTeamStatesPartialUpdate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * optional CS2RoundInfoState info = 1;
 * @return {?proto.bragi.CS2RoundInfoState}
 */
proto.bragi.CS2CurrentRoundStatePartialUpdate.prototype.getInfo = function() {
  return /** @type{?proto.bragi.CS2RoundInfoState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2RoundInfoState, 1));
};


/**
 * @param {?proto.bragi.CS2RoundInfoState|undefined} value
 * @return {!proto.bragi.CS2CurrentRoundStatePartialUpdate} returns this
*/
proto.bragi.CS2CurrentRoundStatePartialUpdate.prototype.setInfo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.CS2CurrentRoundStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2CurrentRoundStatePartialUpdate} returns this
 */
proto.bragi.CS2CurrentRoundStatePartialUpdate.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2CurrentRoundStatePartialUpdate.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CS2RoundTimeState time = 2;
 * @return {?proto.bragi.CS2RoundTimeState}
 */
proto.bragi.CS2CurrentRoundStatePartialUpdate.prototype.getTime = function() {
  return /** @type{?proto.bragi.CS2RoundTimeState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2RoundTimeState, 2));
};


/**
 * @param {?proto.bragi.CS2RoundTimeState|undefined} value
 * @return {!proto.bragi.CS2CurrentRoundStatePartialUpdate} returns this
*/
proto.bragi.CS2CurrentRoundStatePartialUpdate.prototype.setTime = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bragi.CS2CurrentRoundStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2CurrentRoundStatePartialUpdate} returns this
 */
proto.bragi.CS2CurrentRoundStatePartialUpdate.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2CurrentRoundStatePartialUpdate.prototype.hasTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CS2BombState bomb_state = 3;
 * @return {?proto.bragi.CS2BombState}
 */
proto.bragi.CS2CurrentRoundStatePartialUpdate.prototype.getBombState = function() {
  return /** @type{?proto.bragi.CS2BombState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2BombState, 3));
};


/**
 * @param {?proto.bragi.CS2BombState|undefined} value
 * @return {!proto.bragi.CS2CurrentRoundStatePartialUpdate} returns this
*/
proto.bragi.CS2CurrentRoundStatePartialUpdate.prototype.setBombState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.bragi.CS2CurrentRoundStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2CurrentRoundStatePartialUpdate} returns this
 */
proto.bragi.CS2CurrentRoundStatePartialUpdate.prototype.clearBombState = function() {
  return this.setBombState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2CurrentRoundStatePartialUpdate.prototype.hasBombState = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CS2TeamCurrentRoundStatePartialUpdate team_states_partial_update = 4;
 * @return {?proto.bragi.CS2TeamCurrentRoundStatePartialUpdate}
 */
proto.bragi.CS2CurrentRoundStatePartialUpdate.prototype.getTeamStatesPartialUpdate = function() {
  return /** @type{?proto.bragi.CS2TeamCurrentRoundStatePartialUpdate} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2TeamCurrentRoundStatePartialUpdate, 4));
};


/**
 * @param {?proto.bragi.CS2TeamCurrentRoundStatePartialUpdate|undefined} value
 * @return {!proto.bragi.CS2CurrentRoundStatePartialUpdate} returns this
*/
proto.bragi.CS2CurrentRoundStatePartialUpdate.prototype.setTeamStatesPartialUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.bragi.CS2CurrentRoundStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2CurrentRoundStatePartialUpdate} returns this
 */
proto.bragi.CS2CurrentRoundStatePartialUpdate.prototype.clearTeamStatesPartialUpdate = function() {
  return this.setTeamStatesPartialUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2CurrentRoundStatePartialUpdate.prototype.hasTeamStatesPartialUpdate = function() {
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
proto.bragi.CS2CurrentRoundState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2CurrentRoundState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2CurrentRoundState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2CurrentRoundState.toObject = function(includeInstance, msg) {
  var f, obj = {
    roundNumber: jspb.Message.getFieldWithDefault(msg, 1, 0),
    info: (f = msg.getInfo()) && proto.bragi.CS2RoundInfoState.toObject(includeInstance, f),
    time: (f = msg.getTime()) && proto.bragi.CS2RoundTimeState.toObject(includeInstance, f),
    bombState: (f = msg.getBombState()) && proto.bragi.CS2BombState.toObject(includeInstance, f),
    teamStatesMap: (f = msg.getTeamStatesMap()) ? f.toObject(includeInstance, proto.bragi.CS2TeamCurrentRoundState.toObject) : []
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
 * @return {!proto.bragi.CS2CurrentRoundState}
 */
proto.bragi.CS2CurrentRoundState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2CurrentRoundState;
  return proto.bragi.CS2CurrentRoundState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2CurrentRoundState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2CurrentRoundState}
 */
proto.bragi.CS2CurrentRoundState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.CS2RoundInfoState;
      reader.readMessage(value,proto.bragi.CS2RoundInfoState.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 3:
      var value = new proto.bragi.CS2RoundTimeState;
      reader.readMessage(value,proto.bragi.CS2RoundTimeState.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 4:
      var value = new proto.bragi.CS2BombState;
      reader.readMessage(value,proto.bragi.CS2BombState.deserializeBinaryFromReader);
      msg.setBombState(value);
      break;
    case 5:
      var value = msg.getTeamStatesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bragi.CS2TeamCurrentRoundState.deserializeBinaryFromReader, "", new proto.bragi.CS2TeamCurrentRoundState());
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
proto.bragi.CS2CurrentRoundState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2CurrentRoundState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2CurrentRoundState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2CurrentRoundState.serializeBinaryToWriter = function(message, writer) {
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
      proto.bragi.CS2RoundInfoState.serializeBinaryToWriter
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.CS2RoundTimeState.serializeBinaryToWriter
    );
  }
  f = message.getBombState();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.CS2BombState.serializeBinaryToWriter
    );
  }
  f = message.getTeamStatesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bragi.CS2TeamCurrentRoundState.serializeBinaryToWriter);
  }
};


/**
 * optional uint32 round_number = 1;
 * @return {number}
 */
proto.bragi.CS2CurrentRoundState.prototype.getRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2CurrentRoundState} returns this
 */
proto.bragi.CS2CurrentRoundState.prototype.setRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional CS2RoundInfoState info = 2;
 * @return {?proto.bragi.CS2RoundInfoState}
 */
proto.bragi.CS2CurrentRoundState.prototype.getInfo = function() {
  return /** @type{?proto.bragi.CS2RoundInfoState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2RoundInfoState, 2));
};


/**
 * @param {?proto.bragi.CS2RoundInfoState|undefined} value
 * @return {!proto.bragi.CS2CurrentRoundState} returns this
*/
proto.bragi.CS2CurrentRoundState.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2CurrentRoundState} returns this
 */
proto.bragi.CS2CurrentRoundState.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2CurrentRoundState.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CS2RoundTimeState time = 3;
 * @return {?proto.bragi.CS2RoundTimeState}
 */
proto.bragi.CS2CurrentRoundState.prototype.getTime = function() {
  return /** @type{?proto.bragi.CS2RoundTimeState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2RoundTimeState, 3));
};


/**
 * @param {?proto.bragi.CS2RoundTimeState|undefined} value
 * @return {!proto.bragi.CS2CurrentRoundState} returns this
*/
proto.bragi.CS2CurrentRoundState.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2CurrentRoundState} returns this
 */
proto.bragi.CS2CurrentRoundState.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2CurrentRoundState.prototype.hasTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CS2BombState bomb_state = 4;
 * @return {?proto.bragi.CS2BombState}
 */
proto.bragi.CS2CurrentRoundState.prototype.getBombState = function() {
  return /** @type{?proto.bragi.CS2BombState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2BombState, 4));
};


/**
 * @param {?proto.bragi.CS2BombState|undefined} value
 * @return {!proto.bragi.CS2CurrentRoundState} returns this
*/
proto.bragi.CS2CurrentRoundState.prototype.setBombState = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2CurrentRoundState} returns this
 */
proto.bragi.CS2CurrentRoundState.prototype.clearBombState = function() {
  return this.setBombState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2CurrentRoundState.prototype.hasBombState = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * map<string, CS2TeamCurrentRoundState> team_states = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bragi.CS2TeamCurrentRoundState>}
 */
proto.bragi.CS2CurrentRoundState.prototype.getTeamStatesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bragi.CS2TeamCurrentRoundState>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      proto.bragi.CS2TeamCurrentRoundState));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bragi.CS2CurrentRoundState} returns this
 */
proto.bragi.CS2CurrentRoundState.prototype.clearTeamStatesMap = function() {
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
proto.bragi.CS2PreviousRoundState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2PreviousRoundState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2PreviousRoundState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2PreviousRoundState.toObject = function(includeInstance, msg) {
  var f, obj = {
    roundNumber: jspb.Message.getFieldWithDefault(msg, 1, 0),
    info: (f = msg.getInfo()) && proto.bragi.CS2RoundInfoState.toObject(includeInstance, f),
    teamStatesMap: (f = msg.getTeamStatesMap()) ? f.toObject(includeInstance, proto.bragi.CS2PreviousTeamRoundState.toObject) : []
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
 * @return {!proto.bragi.CS2PreviousRoundState}
 */
proto.bragi.CS2PreviousRoundState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2PreviousRoundState;
  return proto.bragi.CS2PreviousRoundState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2PreviousRoundState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2PreviousRoundState}
 */
proto.bragi.CS2PreviousRoundState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.CS2RoundInfoState;
      reader.readMessage(value,proto.bragi.CS2RoundInfoState.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 4:
      var value = msg.getTeamStatesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bragi.CS2PreviousTeamRoundState.deserializeBinaryFromReader, "", new proto.bragi.CS2PreviousTeamRoundState());
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
proto.bragi.CS2PreviousRoundState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2PreviousRoundState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2PreviousRoundState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2PreviousRoundState.serializeBinaryToWriter = function(message, writer) {
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
      proto.bragi.CS2RoundInfoState.serializeBinaryToWriter
    );
  }
  f = message.getTeamStatesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bragi.CS2PreviousTeamRoundState.serializeBinaryToWriter);
  }
};


/**
 * optional uint32 round_number = 1;
 * @return {number}
 */
proto.bragi.CS2PreviousRoundState.prototype.getRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2PreviousRoundState} returns this
 */
proto.bragi.CS2PreviousRoundState.prototype.setRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional CS2RoundInfoState info = 2;
 * @return {?proto.bragi.CS2RoundInfoState}
 */
proto.bragi.CS2PreviousRoundState.prototype.getInfo = function() {
  return /** @type{?proto.bragi.CS2RoundInfoState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2RoundInfoState, 2));
};


/**
 * @param {?proto.bragi.CS2RoundInfoState|undefined} value
 * @return {!proto.bragi.CS2PreviousRoundState} returns this
*/
proto.bragi.CS2PreviousRoundState.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2PreviousRoundState} returns this
 */
proto.bragi.CS2PreviousRoundState.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2PreviousRoundState.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * map<string, CS2PreviousTeamRoundState> team_states = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bragi.CS2PreviousTeamRoundState>}
 */
proto.bragi.CS2PreviousRoundState.prototype.getTeamStatesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bragi.CS2PreviousTeamRoundState>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.bragi.CS2PreviousTeamRoundState));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bragi.CS2PreviousRoundState} returns this
 */
proto.bragi.CS2PreviousRoundState.prototype.clearTeamStatesMap = function() {
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
proto.bragi.CS2RoundInfoState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2RoundInfoState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2RoundInfoState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2RoundInfoState.toObject = function(includeInstance, msg) {
  var f, obj = {
    roundType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    winningTeamUrn: jspb.Message.getFieldWithDefault(msg, 4, ""),
    winReason: jspb.Message.getFieldWithDefault(msg, 5, 0),
    homeWon: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.bragi.CS2RoundInfoState}
 */
proto.bragi.CS2RoundInfoState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2RoundInfoState;
  return proto.bragi.CS2RoundInfoState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2RoundInfoState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2RoundInfoState}
 */
proto.bragi.CS2RoundInfoState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bragi.CS2RoundStateType} */ (reader.readEnum());
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
      var value = /** @type {!proto.bragi.CS2WinReason} */ (reader.readEnum());
      msg.setWinReason(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHomeWon(value);
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
proto.bragi.CS2RoundInfoState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2RoundInfoState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2RoundInfoState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2RoundInfoState.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {!proto.bragi.CS2WinReason} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional CS2RoundStateType round_type = 1;
 * @return {!proto.bragi.CS2RoundStateType}
 */
proto.bragi.CS2RoundInfoState.prototype.getRoundType = function() {
  return /** @type {!proto.bragi.CS2RoundStateType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bragi.CS2RoundStateType} value
 * @return {!proto.bragi.CS2RoundInfoState} returns this
 */
proto.bragi.CS2RoundInfoState.prototype.setRoundType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp start_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bragi.CS2RoundInfoState.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bragi.CS2RoundInfoState} returns this
*/
proto.bragi.CS2RoundInfoState.prototype.setStartTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2RoundInfoState} returns this
 */
proto.bragi.CS2RoundInfoState.prototype.clearStartTime = function() {
  return this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2RoundInfoState.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp end_time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bragi.CS2RoundInfoState.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bragi.CS2RoundInfoState} returns this
*/
proto.bragi.CS2RoundInfoState.prototype.setEndTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2RoundInfoState} returns this
 */
proto.bragi.CS2RoundInfoState.prototype.clearEndTime = function() {
  return this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2RoundInfoState.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string winning_team_urn = 4;
 * @return {string}
 */
proto.bragi.CS2RoundInfoState.prototype.getWinningTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2RoundInfoState} returns this
 */
proto.bragi.CS2RoundInfoState.prototype.setWinningTeamUrn = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CS2RoundInfoState} returns this
 */
proto.bragi.CS2RoundInfoState.prototype.clearWinningTeamUrn = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2RoundInfoState.prototype.hasWinningTeamUrn = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CS2WinReason win_reason = 5;
 * @return {!proto.bragi.CS2WinReason}
 */
proto.bragi.CS2RoundInfoState.prototype.getWinReason = function() {
  return /** @type {!proto.bragi.CS2WinReason} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.bragi.CS2WinReason} value
 * @return {!proto.bragi.CS2RoundInfoState} returns this
 */
proto.bragi.CS2RoundInfoState.prototype.setWinReason = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CS2RoundInfoState} returns this
 */
proto.bragi.CS2RoundInfoState.prototype.clearWinReason = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2RoundInfoState.prototype.hasWinReason = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool home_won = 6;
 * @return {boolean}
 */
proto.bragi.CS2RoundInfoState.prototype.getHomeWon = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.CS2RoundInfoState} returns this
 */
proto.bragi.CS2RoundInfoState.prototype.setHomeWon = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CS2RoundInfoState} returns this
 */
proto.bragi.CS2RoundInfoState.prototype.clearHomeWon = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2RoundInfoState.prototype.hasHomeWon = function() {
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
proto.bragi.CS2RoundTimeState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2RoundTimeState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2RoundTimeState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2RoundTimeState.toObject = function(includeInstance, msg) {
  var f, obj = {
    timeRemaining: (f = msg.getTimeRemaining()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CS2RoundTimeState}
 */
proto.bragi.CS2RoundTimeState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2RoundTimeState;
  return proto.bragi.CS2RoundTimeState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2RoundTimeState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2RoundTimeState}
 */
proto.bragi.CS2RoundTimeState.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bragi.CS2RoundTimeState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2RoundTimeState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2RoundTimeState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2RoundTimeState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimeRemaining();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Duration time_remaining = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CS2RoundTimeState.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2RoundTimeState} returns this
*/
proto.bragi.CS2RoundTimeState.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2RoundTimeState} returns this
 */
proto.bragi.CS2RoundTimeState.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2RoundTimeState.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bragi.CS2BombState.oneofGroups_ = [[1,2,3,4,5,6,7]];

/**
 * @enum {number}
 */
proto.bragi.CS2BombState.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  CARRIED: 1,
  DROPPED: 2,
  PLANTING: 3,
  PLANTED: 4,
  DEFUSING: 5,
  DEFUSED: 6,
  EXPLODED: 7
};

/**
 * @return {proto.bragi.CS2BombState.PayloadCase}
 */
proto.bragi.CS2BombState.prototype.getPayloadCase = function() {
  return /** @type {proto.bragi.CS2BombState.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.bragi.CS2BombState.oneofGroups_[0]));
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
proto.bragi.CS2BombState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2BombState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2BombState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2BombState.toObject = function(includeInstance, msg) {
  var f, obj = {
    carried: (f = msg.getCarried()) && proto.bragi.CS2BombCarriedState.toObject(includeInstance, f),
    dropped: (f = msg.getDropped()) && proto.bragi.CS2BombDroppedState.toObject(includeInstance, f),
    planting: (f = msg.getPlanting()) && proto.bragi.CS2BombPlantingState.toObject(includeInstance, f),
    planted: (f = msg.getPlanted()) && proto.bragi.CS2BombPlantedState.toObject(includeInstance, f),
    defusing: (f = msg.getDefusing()) && proto.bragi.CS2BombDefusingState.toObject(includeInstance, f),
    defused: (f = msg.getDefused()) && proto.bragi.CS2BombDefusedState.toObject(includeInstance, f),
    exploded: (f = msg.getExploded()) && proto.bragi.CS2BombExplodedState.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CS2BombState}
 */
proto.bragi.CS2BombState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2BombState;
  return proto.bragi.CS2BombState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2BombState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2BombState}
 */
proto.bragi.CS2BombState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CS2BombCarriedState;
      reader.readMessage(value,proto.bragi.CS2BombCarriedState.deserializeBinaryFromReader);
      msg.setCarried(value);
      break;
    case 2:
      var value = new proto.bragi.CS2BombDroppedState;
      reader.readMessage(value,proto.bragi.CS2BombDroppedState.deserializeBinaryFromReader);
      msg.setDropped(value);
      break;
    case 3:
      var value = new proto.bragi.CS2BombPlantingState;
      reader.readMessage(value,proto.bragi.CS2BombPlantingState.deserializeBinaryFromReader);
      msg.setPlanting(value);
      break;
    case 4:
      var value = new proto.bragi.CS2BombPlantedState;
      reader.readMessage(value,proto.bragi.CS2BombPlantedState.deserializeBinaryFromReader);
      msg.setPlanted(value);
      break;
    case 5:
      var value = new proto.bragi.CS2BombDefusingState;
      reader.readMessage(value,proto.bragi.CS2BombDefusingState.deserializeBinaryFromReader);
      msg.setDefusing(value);
      break;
    case 6:
      var value = new proto.bragi.CS2BombDefusedState;
      reader.readMessage(value,proto.bragi.CS2BombDefusedState.deserializeBinaryFromReader);
      msg.setDefused(value);
      break;
    case 7:
      var value = new proto.bragi.CS2BombExplodedState;
      reader.readMessage(value,proto.bragi.CS2BombExplodedState.deserializeBinaryFromReader);
      msg.setExploded(value);
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
proto.bragi.CS2BombState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2BombState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2BombState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2BombState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCarried();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CS2BombCarriedState.serializeBinaryToWriter
    );
  }
  f = message.getDropped();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CS2BombDroppedState.serializeBinaryToWriter
    );
  }
  f = message.getPlanting();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.CS2BombPlantingState.serializeBinaryToWriter
    );
  }
  f = message.getPlanted();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.CS2BombPlantedState.serializeBinaryToWriter
    );
  }
  f = message.getDefusing();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bragi.CS2BombDefusingState.serializeBinaryToWriter
    );
  }
  f = message.getDefused();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bragi.CS2BombDefusedState.serializeBinaryToWriter
    );
  }
  f = message.getExploded();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bragi.CS2BombExplodedState.serializeBinaryToWriter
    );
  }
};


/**
 * optional CS2BombCarriedState carried = 1;
 * @return {?proto.bragi.CS2BombCarriedState}
 */
proto.bragi.CS2BombState.prototype.getCarried = function() {
  return /** @type{?proto.bragi.CS2BombCarriedState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2BombCarriedState, 1));
};


/**
 * @param {?proto.bragi.CS2BombCarriedState|undefined} value
 * @return {!proto.bragi.CS2BombState} returns this
*/
proto.bragi.CS2BombState.prototype.setCarried = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.CS2BombState.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2BombState} returns this
 */
proto.bragi.CS2BombState.prototype.clearCarried = function() {
  return this.setCarried(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2BombState.prototype.hasCarried = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CS2BombDroppedState dropped = 2;
 * @return {?proto.bragi.CS2BombDroppedState}
 */
proto.bragi.CS2BombState.prototype.getDropped = function() {
  return /** @type{?proto.bragi.CS2BombDroppedState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2BombDroppedState, 2));
};


/**
 * @param {?proto.bragi.CS2BombDroppedState|undefined} value
 * @return {!proto.bragi.CS2BombState} returns this
*/
proto.bragi.CS2BombState.prototype.setDropped = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bragi.CS2BombState.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2BombState} returns this
 */
proto.bragi.CS2BombState.prototype.clearDropped = function() {
  return this.setDropped(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2BombState.prototype.hasDropped = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CS2BombPlantingState planting = 3;
 * @return {?proto.bragi.CS2BombPlantingState}
 */
proto.bragi.CS2BombState.prototype.getPlanting = function() {
  return /** @type{?proto.bragi.CS2BombPlantingState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2BombPlantingState, 3));
};


/**
 * @param {?proto.bragi.CS2BombPlantingState|undefined} value
 * @return {!proto.bragi.CS2BombState} returns this
*/
proto.bragi.CS2BombState.prototype.setPlanting = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.bragi.CS2BombState.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2BombState} returns this
 */
proto.bragi.CS2BombState.prototype.clearPlanting = function() {
  return this.setPlanting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2BombState.prototype.hasPlanting = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CS2BombPlantedState planted = 4;
 * @return {?proto.bragi.CS2BombPlantedState}
 */
proto.bragi.CS2BombState.prototype.getPlanted = function() {
  return /** @type{?proto.bragi.CS2BombPlantedState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2BombPlantedState, 4));
};


/**
 * @param {?proto.bragi.CS2BombPlantedState|undefined} value
 * @return {!proto.bragi.CS2BombState} returns this
*/
proto.bragi.CS2BombState.prototype.setPlanted = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.bragi.CS2BombState.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2BombState} returns this
 */
proto.bragi.CS2BombState.prototype.clearPlanted = function() {
  return this.setPlanted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2BombState.prototype.hasPlanted = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CS2BombDefusingState defusing = 5;
 * @return {?proto.bragi.CS2BombDefusingState}
 */
proto.bragi.CS2BombState.prototype.getDefusing = function() {
  return /** @type{?proto.bragi.CS2BombDefusingState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2BombDefusingState, 5));
};


/**
 * @param {?proto.bragi.CS2BombDefusingState|undefined} value
 * @return {!proto.bragi.CS2BombState} returns this
*/
proto.bragi.CS2BombState.prototype.setDefusing = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.bragi.CS2BombState.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2BombState} returns this
 */
proto.bragi.CS2BombState.prototype.clearDefusing = function() {
  return this.setDefusing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2BombState.prototype.hasDefusing = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional CS2BombDefusedState defused = 6;
 * @return {?proto.bragi.CS2BombDefusedState}
 */
proto.bragi.CS2BombState.prototype.getDefused = function() {
  return /** @type{?proto.bragi.CS2BombDefusedState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2BombDefusedState, 6));
};


/**
 * @param {?proto.bragi.CS2BombDefusedState|undefined} value
 * @return {!proto.bragi.CS2BombState} returns this
*/
proto.bragi.CS2BombState.prototype.setDefused = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.bragi.CS2BombState.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2BombState} returns this
 */
proto.bragi.CS2BombState.prototype.clearDefused = function() {
  return this.setDefused(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2BombState.prototype.hasDefused = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional CS2BombExplodedState exploded = 7;
 * @return {?proto.bragi.CS2BombExplodedState}
 */
proto.bragi.CS2BombState.prototype.getExploded = function() {
  return /** @type{?proto.bragi.CS2BombExplodedState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2BombExplodedState, 7));
};


/**
 * @param {?proto.bragi.CS2BombExplodedState|undefined} value
 * @return {!proto.bragi.CS2BombState} returns this
*/
proto.bragi.CS2BombState.prototype.setExploded = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.bragi.CS2BombState.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2BombState} returns this
 */
proto.bragi.CS2BombState.prototype.clearExploded = function() {
  return this.setExploded(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2BombState.prototype.hasExploded = function() {
  return jspb.Message.getField(this, 7) != null;
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
proto.bragi.CS2BombCarriedState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2BombCarriedState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2BombCarriedState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2BombCarriedState.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    position: (f = msg.getPosition()) && proto.bragi.CS2Position.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CS2BombCarriedState}
 */
proto.bragi.CS2BombCarriedState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2BombCarriedState;
  return proto.bragi.CS2BombCarriedState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2BombCarriedState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2BombCarriedState}
 */
proto.bragi.CS2BombCarriedState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.CS2Position;
      reader.readMessage(value,proto.bragi.CS2Position.deserializeBinaryFromReader);
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
proto.bragi.CS2BombCarriedState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2BombCarriedState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2BombCarriedState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2BombCarriedState.serializeBinaryToWriter = function(message, writer) {
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
      proto.bragi.CS2Position.serializeBinaryToWriter
    );
  }
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.CS2BombCarriedState.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2BombCarriedState} returns this
 */
proto.bragi.CS2BombCarriedState.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CS2Position position = 2;
 * @return {?proto.bragi.CS2Position}
 */
proto.bragi.CS2BombCarriedState.prototype.getPosition = function() {
  return /** @type{?proto.bragi.CS2Position} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2Position, 2));
};


/**
 * @param {?proto.bragi.CS2Position|undefined} value
 * @return {!proto.bragi.CS2BombCarriedState} returns this
*/
proto.bragi.CS2BombCarriedState.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2BombCarriedState} returns this
 */
proto.bragi.CS2BombCarriedState.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2BombCarriedState.prototype.hasPosition = function() {
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
proto.bragi.CS2BombDroppedState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2BombDroppedState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2BombDroppedState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2BombDroppedState.toObject = function(includeInstance, msg) {
  var f, obj = {
    droppedByPlayerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    position: (f = msg.getPosition()) && proto.bragi.CS2Position.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CS2BombDroppedState}
 */
proto.bragi.CS2BombDroppedState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2BombDroppedState;
  return proto.bragi.CS2BombDroppedState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2BombDroppedState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2BombDroppedState}
 */
proto.bragi.CS2BombDroppedState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.CS2Position;
      reader.readMessage(value,proto.bragi.CS2Position.deserializeBinaryFromReader);
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
proto.bragi.CS2BombDroppedState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2BombDroppedState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2BombDroppedState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2BombDroppedState.serializeBinaryToWriter = function(message, writer) {
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
      proto.bragi.CS2Position.serializeBinaryToWriter
    );
  }
};


/**
 * optional string dropped_by_player_urn = 1;
 * @return {string}
 */
proto.bragi.CS2BombDroppedState.prototype.getDroppedByPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2BombDroppedState} returns this
 */
proto.bragi.CS2BombDroppedState.prototype.setDroppedByPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CS2Position position = 2;
 * @return {?proto.bragi.CS2Position}
 */
proto.bragi.CS2BombDroppedState.prototype.getPosition = function() {
  return /** @type{?proto.bragi.CS2Position} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2Position, 2));
};


/**
 * @param {?proto.bragi.CS2Position|undefined} value
 * @return {!proto.bragi.CS2BombDroppedState} returns this
*/
proto.bragi.CS2BombDroppedState.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2BombDroppedState} returns this
 */
proto.bragi.CS2BombDroppedState.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2BombDroppedState.prototype.hasPosition = function() {
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
proto.bragi.CS2BombPlantingState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2BombPlantingState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2BombPlantingState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2BombPlantingState.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    position: (f = msg.getPosition()) && proto.bragi.CS2Position.toObject(includeInstance, f),
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
 * @return {!proto.bragi.CS2BombPlantingState}
 */
proto.bragi.CS2BombPlantingState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2BombPlantingState;
  return proto.bragi.CS2BombPlantingState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2BombPlantingState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2BombPlantingState}
 */
proto.bragi.CS2BombPlantingState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.CS2Position;
      reader.readMessage(value,proto.bragi.CS2Position.deserializeBinaryFromReader);
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
proto.bragi.CS2BombPlantingState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2BombPlantingState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2BombPlantingState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2BombPlantingState.serializeBinaryToWriter = function(message, writer) {
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
      proto.bragi.CS2Position.serializeBinaryToWriter
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
proto.bragi.CS2BombPlantingState.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2BombPlantingState} returns this
 */
proto.bragi.CS2BombPlantingState.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CS2Position position = 2;
 * @return {?proto.bragi.CS2Position}
 */
proto.bragi.CS2BombPlantingState.prototype.getPosition = function() {
  return /** @type{?proto.bragi.CS2Position} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2Position, 2));
};


/**
 * @param {?proto.bragi.CS2Position|undefined} value
 * @return {!proto.bragi.CS2BombPlantingState} returns this
*/
proto.bragi.CS2BombPlantingState.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2BombPlantingState} returns this
 */
proto.bragi.CS2BombPlantingState.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2BombPlantingState.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Duration countdown = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CS2BombPlantingState.prototype.getCountdown = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2BombPlantingState} returns this
*/
proto.bragi.CS2BombPlantingState.prototype.setCountdown = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2BombPlantingState} returns this
 */
proto.bragi.CS2BombPlantingState.prototype.clearCountdown = function() {
  return this.setCountdown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2BombPlantingState.prototype.hasCountdown = function() {
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
proto.bragi.CS2BombPlantedState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2BombPlantedState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2BombPlantedState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2BombPlantedState.toObject = function(includeInstance, msg) {
  var f, obj = {
    plantedByPlayerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    position: (f = msg.getPosition()) && proto.bragi.CS2Position.toObject(includeInstance, f),
    plantedAt: (f = msg.getPlantedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
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
 * @return {!proto.bragi.CS2BombPlantedState}
 */
proto.bragi.CS2BombPlantedState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2BombPlantedState;
  return proto.bragi.CS2BombPlantedState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2BombPlantedState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2BombPlantedState}
 */
proto.bragi.CS2BombPlantedState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.CS2Position;
      reader.readMessage(value,proto.bragi.CS2Position.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setPlantedAt(value);
      break;
    case 4:
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
proto.bragi.CS2BombPlantedState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2BombPlantedState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2BombPlantedState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2BombPlantedState.serializeBinaryToWriter = function(message, writer) {
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
      proto.bragi.CS2Position.serializeBinaryToWriter
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
  f = message.getCountdown();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional string planted_by_player_urn = 1;
 * @return {string}
 */
proto.bragi.CS2BombPlantedState.prototype.getPlantedByPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2BombPlantedState} returns this
 */
proto.bragi.CS2BombPlantedState.prototype.setPlantedByPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CS2Position position = 2;
 * @return {?proto.bragi.CS2Position}
 */
proto.bragi.CS2BombPlantedState.prototype.getPosition = function() {
  return /** @type{?proto.bragi.CS2Position} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2Position, 2));
};


/**
 * @param {?proto.bragi.CS2Position|undefined} value
 * @return {!proto.bragi.CS2BombPlantedState} returns this
*/
proto.bragi.CS2BombPlantedState.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2BombPlantedState} returns this
 */
proto.bragi.CS2BombPlantedState.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2BombPlantedState.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp planted_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bragi.CS2BombPlantedState.prototype.getPlantedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bragi.CS2BombPlantedState} returns this
*/
proto.bragi.CS2BombPlantedState.prototype.setPlantedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2BombPlantedState} returns this
 */
proto.bragi.CS2BombPlantedState.prototype.clearPlantedAt = function() {
  return this.setPlantedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2BombPlantedState.prototype.hasPlantedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Duration countdown = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CS2BombPlantedState.prototype.getCountdown = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2BombPlantedState} returns this
*/
proto.bragi.CS2BombPlantedState.prototype.setCountdown = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2BombPlantedState} returns this
 */
proto.bragi.CS2BombPlantedState.prototype.clearCountdown = function() {
  return this.setCountdown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2BombPlantedState.prototype.hasCountdown = function() {
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
proto.bragi.CS2BombDefusingState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2BombDefusingState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2BombDefusingState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2BombDefusingState.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    position: (f = msg.getPosition()) && proto.bragi.CS2Position.toObject(includeInstance, f),
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
 * @return {!proto.bragi.CS2BombDefusingState}
 */
proto.bragi.CS2BombDefusingState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2BombDefusingState;
  return proto.bragi.CS2BombDefusingState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2BombDefusingState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2BombDefusingState}
 */
proto.bragi.CS2BombDefusingState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.CS2Position;
      reader.readMessage(value,proto.bragi.CS2Position.deserializeBinaryFromReader);
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
proto.bragi.CS2BombDefusingState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2BombDefusingState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2BombDefusingState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2BombDefusingState.serializeBinaryToWriter = function(message, writer) {
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
      proto.bragi.CS2Position.serializeBinaryToWriter
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
proto.bragi.CS2BombDefusingState.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2BombDefusingState} returns this
 */
proto.bragi.CS2BombDefusingState.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CS2Position position = 2;
 * @return {?proto.bragi.CS2Position}
 */
proto.bragi.CS2BombDefusingState.prototype.getPosition = function() {
  return /** @type{?proto.bragi.CS2Position} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2Position, 2));
};


/**
 * @param {?proto.bragi.CS2Position|undefined} value
 * @return {!proto.bragi.CS2BombDefusingState} returns this
*/
proto.bragi.CS2BombDefusingState.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2BombDefusingState} returns this
 */
proto.bragi.CS2BombDefusingState.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2BombDefusingState.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Duration countdown = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CS2BombDefusingState.prototype.getCountdown = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2BombDefusingState} returns this
*/
proto.bragi.CS2BombDefusingState.prototype.setCountdown = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2BombDefusingState} returns this
 */
proto.bragi.CS2BombDefusingState.prototype.clearCountdown = function() {
  return this.setCountdown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2BombDefusingState.prototype.hasCountdown = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp defuse_started_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bragi.CS2BombDefusingState.prototype.getDefuseStartedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bragi.CS2BombDefusingState} returns this
*/
proto.bragi.CS2BombDefusingState.prototype.setDefuseStartedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2BombDefusingState} returns this
 */
proto.bragi.CS2BombDefusingState.prototype.clearDefuseStartedAt = function() {
  return this.setDefuseStartedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2BombDefusingState.prototype.hasDefuseStartedAt = function() {
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
proto.bragi.CS2BombDefusedState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2BombDefusedState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2BombDefusedState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2BombDefusedState.toObject = function(includeInstance, msg) {
  var f, obj = {
    defusedByPlayerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    position: (f = msg.getPosition()) && proto.bragi.CS2Position.toObject(includeInstance, f),
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
 * @return {!proto.bragi.CS2BombDefusedState}
 */
proto.bragi.CS2BombDefusedState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2BombDefusedState;
  return proto.bragi.CS2BombDefusedState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2BombDefusedState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2BombDefusedState}
 */
proto.bragi.CS2BombDefusedState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.CS2Position;
      reader.readMessage(value,proto.bragi.CS2Position.deserializeBinaryFromReader);
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
proto.bragi.CS2BombDefusedState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2BombDefusedState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2BombDefusedState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2BombDefusedState.serializeBinaryToWriter = function(message, writer) {
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
      proto.bragi.CS2Position.serializeBinaryToWriter
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
proto.bragi.CS2BombDefusedState.prototype.getDefusedByPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2BombDefusedState} returns this
 */
proto.bragi.CS2BombDefusedState.prototype.setDefusedByPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CS2Position position = 2;
 * @return {?proto.bragi.CS2Position}
 */
proto.bragi.CS2BombDefusedState.prototype.getPosition = function() {
  return /** @type{?proto.bragi.CS2Position} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2Position, 2));
};


/**
 * @param {?proto.bragi.CS2Position|undefined} value
 * @return {!proto.bragi.CS2BombDefusedState} returns this
*/
proto.bragi.CS2BombDefusedState.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2BombDefusedState} returns this
 */
proto.bragi.CS2BombDefusedState.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2BombDefusedState.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp defused_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bragi.CS2BombDefusedState.prototype.getDefusedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bragi.CS2BombDefusedState} returns this
*/
proto.bragi.CS2BombDefusedState.prototype.setDefusedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2BombDefusedState} returns this
 */
proto.bragi.CS2BombDefusedState.prototype.clearDefusedAt = function() {
  return this.setDefusedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2BombDefusedState.prototype.hasDefusedAt = function() {
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
proto.bragi.CS2BombExplodedState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2BombExplodedState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2BombExplodedState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2BombExplodedState.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: (f = msg.getPosition()) && proto.bragi.CS2Position.toObject(includeInstance, f),
    explodedAt: (f = msg.getExplodedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CS2BombExplodedState}
 */
proto.bragi.CS2BombExplodedState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2BombExplodedState;
  return proto.bragi.CS2BombExplodedState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2BombExplodedState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2BombExplodedState}
 */
proto.bragi.CS2BombExplodedState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CS2Position;
      reader.readMessage(value,proto.bragi.CS2Position.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExplodedAt(value);
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
proto.bragi.CS2BombExplodedState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2BombExplodedState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2BombExplodedState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2BombExplodedState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CS2Position.serializeBinaryToWriter
    );
  }
  f = message.getExplodedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional CS2Position position = 1;
 * @return {?proto.bragi.CS2Position}
 */
proto.bragi.CS2BombExplodedState.prototype.getPosition = function() {
  return /** @type{?proto.bragi.CS2Position} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2Position, 1));
};


/**
 * @param {?proto.bragi.CS2Position|undefined} value
 * @return {!proto.bragi.CS2BombExplodedState} returns this
*/
proto.bragi.CS2BombExplodedState.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2BombExplodedState} returns this
 */
proto.bragi.CS2BombExplodedState.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2BombExplodedState.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp exploded_at = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bragi.CS2BombExplodedState.prototype.getExplodedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bragi.CS2BombExplodedState} returns this
*/
proto.bragi.CS2BombExplodedState.prototype.setExplodedAt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2BombExplodedState} returns this
 */
proto.bragi.CS2BombExplodedState.prototype.clearExplodedAt = function() {
  return this.setExplodedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2BombExplodedState.prototype.hasExplodedAt = function() {
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
proto.bragi.CS2TeamMapStatePartialUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2TeamMapStatePartialUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2TeamMapStatePartialUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2TeamMapStatePartialUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    payload: (f = msg.getPayload()) && proto.bragi.CS2TeamMapStatePartialUpdate.Payload.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CS2TeamMapStatePartialUpdate}
 */
proto.bragi.CS2TeamMapStatePartialUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2TeamMapStatePartialUpdate;
  return proto.bragi.CS2TeamMapStatePartialUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2TeamMapStatePartialUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2TeamMapStatePartialUpdate}
 */
proto.bragi.CS2TeamMapStatePartialUpdate.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.CS2TeamMapStatePartialUpdate.Payload;
      reader.readMessage(value,proto.bragi.CS2TeamMapStatePartialUpdate.Payload.deserializeBinaryFromReader);
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
proto.bragi.CS2TeamMapStatePartialUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2TeamMapStatePartialUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2TeamMapStatePartialUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2TeamMapStatePartialUpdate.serializeBinaryToWriter = function(message, writer) {
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
      proto.bragi.CS2TeamMapStatePartialUpdate.Payload.serializeBinaryToWriter
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
proto.bragi.CS2TeamMapStatePartialUpdate.Payload.oneofGroups_ = [[2,1]];

/**
 * @enum {number}
 */
proto.bragi.CS2TeamMapStatePartialUpdate.Payload.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  PLAYER_STATE: 2,
  PLAYER_MAP_STATES_PARTIAL_UPDATE: 1
};

/**
 * @return {proto.bragi.CS2TeamMapStatePartialUpdate.Payload.PayloadCase}
 */
proto.bragi.CS2TeamMapStatePartialUpdate.Payload.prototype.getPayloadCase = function() {
  return /** @type {proto.bragi.CS2TeamMapStatePartialUpdate.Payload.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.bragi.CS2TeamMapStatePartialUpdate.Payload.oneofGroups_[0]));
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
proto.bragi.CS2TeamMapStatePartialUpdate.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2TeamMapStatePartialUpdate.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2TeamMapStatePartialUpdate.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2TeamMapStatePartialUpdate.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerState: (f = msg.getPlayerState()) && proto.bragi.CS2PlayerMapState.toObject(includeInstance, f),
    playerMapStatesPartialUpdate: (f = msg.getPlayerMapStatesPartialUpdate()) && proto.bragi.CS2PlayerMapStatePartialUpdate.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CS2TeamMapStatePartialUpdate.Payload}
 */
proto.bragi.CS2TeamMapStatePartialUpdate.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2TeamMapStatePartialUpdate.Payload;
  return proto.bragi.CS2TeamMapStatePartialUpdate.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2TeamMapStatePartialUpdate.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2TeamMapStatePartialUpdate.Payload}
 */
proto.bragi.CS2TeamMapStatePartialUpdate.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.bragi.CS2PlayerMapState;
      reader.readMessage(value,proto.bragi.CS2PlayerMapState.deserializeBinaryFromReader);
      msg.setPlayerState(value);
      break;
    case 1:
      var value = new proto.bragi.CS2PlayerMapStatePartialUpdate;
      reader.readMessage(value,proto.bragi.CS2PlayerMapStatePartialUpdate.deserializeBinaryFromReader);
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
proto.bragi.CS2TeamMapStatePartialUpdate.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2TeamMapStatePartialUpdate.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2TeamMapStatePartialUpdate.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2TeamMapStatePartialUpdate.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CS2PlayerMapState.serializeBinaryToWriter
    );
  }
  f = message.getPlayerMapStatesPartialUpdate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CS2PlayerMapStatePartialUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * optional CS2PlayerMapState player_state = 2;
 * @return {?proto.bragi.CS2PlayerMapState}
 */
proto.bragi.CS2TeamMapStatePartialUpdate.Payload.prototype.getPlayerState = function() {
  return /** @type{?proto.bragi.CS2PlayerMapState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2PlayerMapState, 2));
};


/**
 * @param {?proto.bragi.CS2PlayerMapState|undefined} value
 * @return {!proto.bragi.CS2TeamMapStatePartialUpdate.Payload} returns this
*/
proto.bragi.CS2TeamMapStatePartialUpdate.Payload.prototype.setPlayerState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bragi.CS2TeamMapStatePartialUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2TeamMapStatePartialUpdate.Payload} returns this
 */
proto.bragi.CS2TeamMapStatePartialUpdate.Payload.prototype.clearPlayerState = function() {
  return this.setPlayerState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2TeamMapStatePartialUpdate.Payload.prototype.hasPlayerState = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CS2PlayerMapStatePartialUpdate player_map_states_partial_update = 1;
 * @return {?proto.bragi.CS2PlayerMapStatePartialUpdate}
 */
proto.bragi.CS2TeamMapStatePartialUpdate.Payload.prototype.getPlayerMapStatesPartialUpdate = function() {
  return /** @type{?proto.bragi.CS2PlayerMapStatePartialUpdate} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2PlayerMapStatePartialUpdate, 1));
};


/**
 * @param {?proto.bragi.CS2PlayerMapStatePartialUpdate|undefined} value
 * @return {!proto.bragi.CS2TeamMapStatePartialUpdate.Payload} returns this
*/
proto.bragi.CS2TeamMapStatePartialUpdate.Payload.prototype.setPlayerMapStatesPartialUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.CS2TeamMapStatePartialUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2TeamMapStatePartialUpdate.Payload} returns this
 */
proto.bragi.CS2TeamMapStatePartialUpdate.Payload.prototype.clearPlayerMapStatesPartialUpdate = function() {
  return this.setPlayerMapStatesPartialUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2TeamMapStatePartialUpdate.Payload.prototype.hasPlayerMapStatesPartialUpdate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string team_urn = 1;
 * @return {string}
 */
proto.bragi.CS2TeamMapStatePartialUpdate.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2TeamMapStatePartialUpdate} returns this
 */
proto.bragi.CS2TeamMapStatePartialUpdate.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Payload payload = 2;
 * @return {?proto.bragi.CS2TeamMapStatePartialUpdate.Payload}
 */
proto.bragi.CS2TeamMapStatePartialUpdate.prototype.getPayload = function() {
  return /** @type{?proto.bragi.CS2TeamMapStatePartialUpdate.Payload} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2TeamMapStatePartialUpdate.Payload, 2));
};


/**
 * @param {?proto.bragi.CS2TeamMapStatePartialUpdate.Payload|undefined} value
 * @return {!proto.bragi.CS2TeamMapStatePartialUpdate} returns this
*/
proto.bragi.CS2TeamMapStatePartialUpdate.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2TeamMapStatePartialUpdate} returns this
 */
proto.bragi.CS2TeamMapStatePartialUpdate.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2TeamMapStatePartialUpdate.prototype.hasPayload = function() {
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
proto.bragi.CS2TeamMapState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2TeamMapState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2TeamMapState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2TeamMapState.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    side: jspb.Message.getFieldWithDefault(msg, 2, 0),
    playerMapStatesMap: (f = msg.getPlayerMapStatesMap()) ? f.toObject(includeInstance, proto.bragi.CS2PlayerMapState.toObject) : []
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
 * @return {!proto.bragi.CS2TeamMapState}
 */
proto.bragi.CS2TeamMapState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2TeamMapState;
  return proto.bragi.CS2TeamMapState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2TeamMapState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2TeamMapState}
 */
proto.bragi.CS2TeamMapState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.bragi.CS2Side} */ (reader.readEnum());
      msg.setSide(value);
      break;
    case 3:
      var value = msg.getPlayerMapStatesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bragi.CS2PlayerMapState.deserializeBinaryFromReader, "", new proto.bragi.CS2PlayerMapState());
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
proto.bragi.CS2TeamMapState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2TeamMapState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2TeamMapState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2TeamMapState.serializeBinaryToWriter = function(message, writer) {
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
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bragi.CS2PlayerMapState.serializeBinaryToWriter);
  }
};


/**
 * optional string team_urn = 1;
 * @return {string}
 */
proto.bragi.CS2TeamMapState.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2TeamMapState} returns this
 */
proto.bragi.CS2TeamMapState.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CS2Side side = 2;
 * @return {!proto.bragi.CS2Side}
 */
proto.bragi.CS2TeamMapState.prototype.getSide = function() {
  return /** @type {!proto.bragi.CS2Side} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bragi.CS2Side} value
 * @return {!proto.bragi.CS2TeamMapState} returns this
 */
proto.bragi.CS2TeamMapState.prototype.setSide = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * map<string, CS2PlayerMapState> player_map_states = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bragi.CS2PlayerMapState>}
 */
proto.bragi.CS2TeamMapState.prototype.getPlayerMapStatesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bragi.CS2PlayerMapState>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.bragi.CS2PlayerMapState));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bragi.CS2TeamMapState} returns this
 */
proto.bragi.CS2TeamMapState.prototype.clearPlayerMapStatesMap = function() {
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
proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2TeamCurrentRoundStatePartialUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    payload: (f = msg.getPayload()) && proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CS2TeamCurrentRoundStatePartialUpdate}
 */
proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2TeamCurrentRoundStatePartialUpdate;
  return proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2TeamCurrentRoundStatePartialUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2TeamCurrentRoundStatePartialUpdate}
 */
proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload;
      reader.readMessage(value,proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload.deserializeBinaryFromReader);
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
proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2TeamCurrentRoundStatePartialUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.serializeBinaryToWriter = function(message, writer) {
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
      proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload.serializeBinaryToWriter
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
proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload.oneofGroups_ = [[2,1]];

/**
 * @enum {number}
 */
proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  PLAYER_STATE: 2,
  PLAYER_ROUND_STATES_PARTIAL_UPDATE: 1
};

/**
 * @return {proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload.PayloadCase}
 */
proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload.prototype.getPayloadCase = function() {
  return /** @type {proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload.oneofGroups_[0]));
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
proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerState: (f = msg.getPlayerState()) && proto.bragi.CS2PlayerCurrentRoundState.toObject(includeInstance, f),
    playerRoundStatesPartialUpdate: (f = msg.getPlayerRoundStatesPartialUpdate()) && proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload}
 */
proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload;
  return proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload}
 */
proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.bragi.CS2PlayerCurrentRoundState;
      reader.readMessage(value,proto.bragi.CS2PlayerCurrentRoundState.deserializeBinaryFromReader);
      msg.setPlayerState(value);
      break;
    case 1:
      var value = new proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate;
      reader.readMessage(value,proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.deserializeBinaryFromReader);
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
proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CS2PlayerCurrentRoundState.serializeBinaryToWriter
    );
  }
  f = message.getPlayerRoundStatesPartialUpdate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * optional CS2PlayerCurrentRoundState player_state = 2;
 * @return {?proto.bragi.CS2PlayerCurrentRoundState}
 */
proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload.prototype.getPlayerState = function() {
  return /** @type{?proto.bragi.CS2PlayerCurrentRoundState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2PlayerCurrentRoundState, 2));
};


/**
 * @param {?proto.bragi.CS2PlayerCurrentRoundState|undefined} value
 * @return {!proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload} returns this
*/
proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload.prototype.setPlayerState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload} returns this
 */
proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload.prototype.clearPlayerState = function() {
  return this.setPlayerState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload.prototype.hasPlayerState = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CS2PlayerCurrentRoundStatePartialUpdate player_round_states_partial_update = 1;
 * @return {?proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate}
 */
proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload.prototype.getPlayerRoundStatesPartialUpdate = function() {
  return /** @type{?proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate, 1));
};


/**
 * @param {?proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate|undefined} value
 * @return {!proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload} returns this
*/
proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload.prototype.setPlayerRoundStatesPartialUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload} returns this
 */
proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload.prototype.clearPlayerRoundStatesPartialUpdate = function() {
  return this.setPlayerRoundStatesPartialUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload.prototype.hasPlayerRoundStatesPartialUpdate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string team_urn = 1;
 * @return {string}
 */
proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2TeamCurrentRoundStatePartialUpdate} returns this
 */
proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Payload payload = 2;
 * @return {?proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload}
 */
proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.prototype.getPayload = function() {
  return /** @type{?proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload, 2));
};


/**
 * @param {?proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.Payload|undefined} value
 * @return {!proto.bragi.CS2TeamCurrentRoundStatePartialUpdate} returns this
*/
proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2TeamCurrentRoundStatePartialUpdate} returns this
 */
proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2TeamCurrentRoundStatePartialUpdate.prototype.hasPayload = function() {
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
proto.bragi.CS2TeamCurrentRoundState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2TeamCurrentRoundState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2TeamCurrentRoundState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2TeamCurrentRoundState.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    playerRoundStatesMap: (f = msg.getPlayerRoundStatesMap()) ? f.toObject(includeInstance, proto.bragi.CS2PlayerCurrentRoundState.toObject) : []
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
 * @return {!proto.bragi.CS2TeamCurrentRoundState}
 */
proto.bragi.CS2TeamCurrentRoundState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2TeamCurrentRoundState;
  return proto.bragi.CS2TeamCurrentRoundState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2TeamCurrentRoundState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2TeamCurrentRoundState}
 */
proto.bragi.CS2TeamCurrentRoundState.deserializeBinaryFromReader = function(msg, reader) {
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
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bragi.CS2PlayerCurrentRoundState.deserializeBinaryFromReader, "", new proto.bragi.CS2PlayerCurrentRoundState());
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
proto.bragi.CS2TeamCurrentRoundState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2TeamCurrentRoundState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2TeamCurrentRoundState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2TeamCurrentRoundState.serializeBinaryToWriter = function(message, writer) {
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
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bragi.CS2PlayerCurrentRoundState.serializeBinaryToWriter);
  }
};


/**
 * optional string team_urn = 1;
 * @return {string}
 */
proto.bragi.CS2TeamCurrentRoundState.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2TeamCurrentRoundState} returns this
 */
proto.bragi.CS2TeamCurrentRoundState.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, CS2PlayerCurrentRoundState> player_round_states = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bragi.CS2PlayerCurrentRoundState>}
 */
proto.bragi.CS2TeamCurrentRoundState.prototype.getPlayerRoundStatesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bragi.CS2PlayerCurrentRoundState>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.bragi.CS2PlayerCurrentRoundState));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bragi.CS2TeamCurrentRoundState} returns this
 */
proto.bragi.CS2TeamCurrentRoundState.prototype.clearPlayerRoundStatesMap = function() {
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
proto.bragi.CS2PreviousTeamRoundState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2PreviousTeamRoundState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2PreviousTeamRoundState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2PreviousTeamRoundState.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    playersMap: (f = msg.getPlayersMap()) ? f.toObject(includeInstance, proto.bragi.CS2PlayerPreviousRoundState.toObject) : []
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
 * @return {!proto.bragi.CS2PreviousTeamRoundState}
 */
proto.bragi.CS2PreviousTeamRoundState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2PreviousTeamRoundState;
  return proto.bragi.CS2PreviousTeamRoundState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2PreviousTeamRoundState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2PreviousTeamRoundState}
 */
proto.bragi.CS2PreviousTeamRoundState.deserializeBinaryFromReader = function(msg, reader) {
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
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bragi.CS2PlayerPreviousRoundState.deserializeBinaryFromReader, "", new proto.bragi.CS2PlayerPreviousRoundState());
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
proto.bragi.CS2PreviousTeamRoundState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2PreviousTeamRoundState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2PreviousTeamRoundState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2PreviousTeamRoundState.serializeBinaryToWriter = function(message, writer) {
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
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bragi.CS2PlayerPreviousRoundState.serializeBinaryToWriter);
  }
};


/**
 * optional string team_urn = 1;
 * @return {string}
 */
proto.bragi.CS2PreviousTeamRoundState.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2PreviousTeamRoundState} returns this
 */
proto.bragi.CS2PreviousTeamRoundState.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, CS2PlayerPreviousRoundState> players = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bragi.CS2PlayerPreviousRoundState>}
 */
proto.bragi.CS2PreviousTeamRoundState.prototype.getPlayersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bragi.CS2PlayerPreviousRoundState>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.bragi.CS2PlayerPreviousRoundState));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bragi.CS2PreviousTeamRoundState} returns this
 */
proto.bragi.CS2PreviousTeamRoundState.prototype.clearPlayersMap = function() {
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
proto.bragi.CS2PlayerMapStatePartialUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2PlayerMapStatePartialUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2PlayerMapStatePartialUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2PlayerMapStatePartialUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    payload: (f = msg.getPayload()) && proto.bragi.CS2PlayerMapStatePartialUpdate.Payload.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CS2PlayerMapStatePartialUpdate}
 */
proto.bragi.CS2PlayerMapStatePartialUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2PlayerMapStatePartialUpdate;
  return proto.bragi.CS2PlayerMapStatePartialUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2PlayerMapStatePartialUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2PlayerMapStatePartialUpdate}
 */
proto.bragi.CS2PlayerMapStatePartialUpdate.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.CS2PlayerMapStatePartialUpdate.Payload;
      reader.readMessage(value,proto.bragi.CS2PlayerMapStatePartialUpdate.Payload.deserializeBinaryFromReader);
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
proto.bragi.CS2PlayerMapStatePartialUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2PlayerMapStatePartialUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2PlayerMapStatePartialUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2PlayerMapStatePartialUpdate.serializeBinaryToWriter = function(message, writer) {
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
      proto.bragi.CS2PlayerMapStatePartialUpdate.Payload.serializeBinaryToWriter
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
proto.bragi.CS2PlayerMapStatePartialUpdate.Payload.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.bragi.CS2PlayerMapStatePartialUpdate.Payload.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  STATISTICS: 1
};

/**
 * @return {proto.bragi.CS2PlayerMapStatePartialUpdate.Payload.PayloadCase}
 */
proto.bragi.CS2PlayerMapStatePartialUpdate.Payload.prototype.getPayloadCase = function() {
  return /** @type {proto.bragi.CS2PlayerMapStatePartialUpdate.Payload.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.bragi.CS2PlayerMapStatePartialUpdate.Payload.oneofGroups_[0]));
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
proto.bragi.CS2PlayerMapStatePartialUpdate.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2PlayerMapStatePartialUpdate.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2PlayerMapStatePartialUpdate.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2PlayerMapStatePartialUpdate.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
    statistics: (f = msg.getStatistics()) && proto.bragi.CS2PlayerMapStatisticsState.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CS2PlayerMapStatePartialUpdate.Payload}
 */
proto.bragi.CS2PlayerMapStatePartialUpdate.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2PlayerMapStatePartialUpdate.Payload;
  return proto.bragi.CS2PlayerMapStatePartialUpdate.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2PlayerMapStatePartialUpdate.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2PlayerMapStatePartialUpdate.Payload}
 */
proto.bragi.CS2PlayerMapStatePartialUpdate.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CS2PlayerMapStatisticsState;
      reader.readMessage(value,proto.bragi.CS2PlayerMapStatisticsState.deserializeBinaryFromReader);
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
proto.bragi.CS2PlayerMapStatePartialUpdate.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2PlayerMapStatePartialUpdate.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2PlayerMapStatePartialUpdate.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2PlayerMapStatePartialUpdate.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatistics();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CS2PlayerMapStatisticsState.serializeBinaryToWriter
    );
  }
};


/**
 * optional CS2PlayerMapStatisticsState statistics = 1;
 * @return {?proto.bragi.CS2PlayerMapStatisticsState}
 */
proto.bragi.CS2PlayerMapStatePartialUpdate.Payload.prototype.getStatistics = function() {
  return /** @type{?proto.bragi.CS2PlayerMapStatisticsState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2PlayerMapStatisticsState, 1));
};


/**
 * @param {?proto.bragi.CS2PlayerMapStatisticsState|undefined} value
 * @return {!proto.bragi.CS2PlayerMapStatePartialUpdate.Payload} returns this
*/
proto.bragi.CS2PlayerMapStatePartialUpdate.Payload.prototype.setStatistics = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.CS2PlayerMapStatePartialUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2PlayerMapStatePartialUpdate.Payload} returns this
 */
proto.bragi.CS2PlayerMapStatePartialUpdate.Payload.prototype.clearStatistics = function() {
  return this.setStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2PlayerMapStatePartialUpdate.Payload.prototype.hasStatistics = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.CS2PlayerMapStatePartialUpdate.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2PlayerMapStatePartialUpdate} returns this
 */
proto.bragi.CS2PlayerMapStatePartialUpdate.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Payload payload = 2;
 * @return {?proto.bragi.CS2PlayerMapStatePartialUpdate.Payload}
 */
proto.bragi.CS2PlayerMapStatePartialUpdate.prototype.getPayload = function() {
  return /** @type{?proto.bragi.CS2PlayerMapStatePartialUpdate.Payload} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2PlayerMapStatePartialUpdate.Payload, 2));
};


/**
 * @param {?proto.bragi.CS2PlayerMapStatePartialUpdate.Payload|undefined} value
 * @return {!proto.bragi.CS2PlayerMapStatePartialUpdate} returns this
*/
proto.bragi.CS2PlayerMapStatePartialUpdate.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2PlayerMapStatePartialUpdate} returns this
 */
proto.bragi.CS2PlayerMapStatePartialUpdate.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2PlayerMapStatePartialUpdate.prototype.hasPayload = function() {
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
proto.bragi.CS2PlayerMapState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2PlayerMapState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2PlayerMapState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2PlayerMapState.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    playerName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    slotId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    statistics: (f = msg.getStatistics()) && proto.bragi.CS2PlayerMapStatisticsState.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CS2PlayerMapState}
 */
proto.bragi.CS2PlayerMapState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2PlayerMapState;
  return proto.bragi.CS2PlayerMapState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2PlayerMapState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2PlayerMapState}
 */
proto.bragi.CS2PlayerMapState.deserializeBinaryFromReader = function(msg, reader) {
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
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSlotId(value);
      break;
    case 3:
      var value = new proto.bragi.CS2PlayerMapStatisticsState;
      reader.readMessage(value,proto.bragi.CS2PlayerMapStatisticsState.deserializeBinaryFromReader);
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
proto.bragi.CS2PlayerMapState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2PlayerMapState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2PlayerMapState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2PlayerMapState.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getSlotId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getStatistics();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.CS2PlayerMapStatisticsState.serializeBinaryToWriter
    );
  }
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.CS2PlayerMapState.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2PlayerMapState} returns this
 */
proto.bragi.CS2PlayerMapState.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string player_name = 2;
 * @return {string}
 */
proto.bragi.CS2PlayerMapState.prototype.getPlayerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2PlayerMapState} returns this
 */
proto.bragi.CS2PlayerMapState.prototype.setPlayerName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 slot_id = 4;
 * @return {number}
 */
proto.bragi.CS2PlayerMapState.prototype.getSlotId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2PlayerMapState} returns this
 */
proto.bragi.CS2PlayerMapState.prototype.setSlotId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional CS2PlayerMapStatisticsState statistics = 3;
 * @return {?proto.bragi.CS2PlayerMapStatisticsState}
 */
proto.bragi.CS2PlayerMapState.prototype.getStatistics = function() {
  return /** @type{?proto.bragi.CS2PlayerMapStatisticsState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2PlayerMapStatisticsState, 3));
};


/**
 * @param {?proto.bragi.CS2PlayerMapStatisticsState|undefined} value
 * @return {!proto.bragi.CS2PlayerMapState} returns this
*/
proto.bragi.CS2PlayerMapState.prototype.setStatistics = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2PlayerMapState} returns this
 */
proto.bragi.CS2PlayerMapState.prototype.clearStatistics = function() {
  return this.setStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2PlayerMapState.prototype.hasStatistics = function() {
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
proto.bragi.CS2PlayerMapStatisticsState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2PlayerMapStatisticsState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2PlayerMapStatisticsState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2PlayerMapStatisticsState.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    openingKills: jspb.Message.getFieldWithDefault(msg, 4, 0),
    openingDeaths: jspb.Message.getFieldWithDefault(msg, 5, 0),
    totalDamage: jspb.Message.getFieldWithDefault(msg, 6, 0),
    averageDamagePerRound: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    statistics: (f = msg.getStatistics()) && proto.bragi.CS2PlayerStatistics.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CS2PlayerMapStatisticsState}
 */
proto.bragi.CS2PlayerMapStatisticsState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2PlayerMapStatisticsState;
  return proto.bragi.CS2PlayerMapStatisticsState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2PlayerMapStatisticsState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2PlayerMapStatisticsState}
 */
proto.bragi.CS2PlayerMapStatisticsState.deserializeBinaryFromReader = function(msg, reader) {
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
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOpeningKills(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOpeningDeaths(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalDamage(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAverageDamagePerRound(value);
      break;
    case 2:
      var value = new proto.bragi.CS2PlayerStatistics;
      reader.readMessage(value,proto.bragi.CS2PlayerStatistics.deserializeBinaryFromReader);
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
proto.bragi.CS2PlayerMapStatisticsState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2PlayerMapStatisticsState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2PlayerMapStatisticsState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2PlayerMapStatisticsState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOpeningKills();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getOpeningDeaths();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getTotalDamage();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getAverageDamagePerRound();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getStatistics();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CS2PlayerStatistics.serializeBinaryToWriter
    );
  }
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.CS2PlayerMapStatisticsState.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2PlayerMapStatisticsState} returns this
 */
proto.bragi.CS2PlayerMapStatisticsState.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 opening_kills = 4;
 * @return {number}
 */
proto.bragi.CS2PlayerMapStatisticsState.prototype.getOpeningKills = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2PlayerMapStatisticsState} returns this
 */
proto.bragi.CS2PlayerMapStatisticsState.prototype.setOpeningKills = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 opening_deaths = 5;
 * @return {number}
 */
proto.bragi.CS2PlayerMapStatisticsState.prototype.getOpeningDeaths = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2PlayerMapStatisticsState} returns this
 */
proto.bragi.CS2PlayerMapStatisticsState.prototype.setOpeningDeaths = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 total_damage = 6;
 * @return {number}
 */
proto.bragi.CS2PlayerMapStatisticsState.prototype.getTotalDamage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2PlayerMapStatisticsState} returns this
 */
proto.bragi.CS2PlayerMapStatisticsState.prototype.setTotalDamage = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional float average_damage_per_round = 7;
 * @return {number}
 */
proto.bragi.CS2PlayerMapStatisticsState.prototype.getAverageDamagePerRound = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2PlayerMapStatisticsState} returns this
 */
proto.bragi.CS2PlayerMapStatisticsState.prototype.setAverageDamagePerRound = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional CS2PlayerStatistics statistics = 2;
 * @return {?proto.bragi.CS2PlayerStatistics}
 */
proto.bragi.CS2PlayerMapStatisticsState.prototype.getStatistics = function() {
  return /** @type{?proto.bragi.CS2PlayerStatistics} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2PlayerStatistics, 2));
};


/**
 * @param {?proto.bragi.CS2PlayerStatistics|undefined} value
 * @return {!proto.bragi.CS2PlayerMapStatisticsState} returns this
*/
proto.bragi.CS2PlayerMapStatisticsState.prototype.setStatistics = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2PlayerMapStatisticsState} returns this
 */
proto.bragi.CS2PlayerMapStatisticsState.prototype.clearStatistics = function() {
  return this.setStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2PlayerMapStatisticsState.prototype.hasStatistics = function() {
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
proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    payload: (f = msg.getPayload()) && proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate}
 */
proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate;
  return proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate}
 */
proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload;
      reader.readMessage(value,proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.deserializeBinaryFromReader);
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
proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.serializeBinaryToWriter = function(message, writer) {
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
      proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.serializeBinaryToWriter
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
proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  STATISTICS: 1,
  ITEMS: 2,
  POSITION: 3
};

/**
 * @return {proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.PayloadCase}
 */
proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.prototype.getPayloadCase = function() {
  return /** @type {proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.oneofGroups_[0]));
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
proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
    statistics: (f = msg.getStatistics()) && proto.bragi.CS2PlayerCurrentRoundStatisticsState.toObject(includeInstance, f),
    items: (f = msg.getItems()) && proto.bragi.CS2PlayerItemsState.toObject(includeInstance, f),
    position: (f = msg.getPosition()) && proto.bragi.CS2PlayerPositionState.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload}
 */
proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload;
  return proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload}
 */
proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CS2PlayerCurrentRoundStatisticsState;
      reader.readMessage(value,proto.bragi.CS2PlayerCurrentRoundStatisticsState.deserializeBinaryFromReader);
      msg.setStatistics(value);
      break;
    case 2:
      var value = new proto.bragi.CS2PlayerItemsState;
      reader.readMessage(value,proto.bragi.CS2PlayerItemsState.deserializeBinaryFromReader);
      msg.setItems(value);
      break;
    case 3:
      var value = new proto.bragi.CS2PlayerPositionState;
      reader.readMessage(value,proto.bragi.CS2PlayerPositionState.deserializeBinaryFromReader);
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
proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatistics();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CS2PlayerCurrentRoundStatisticsState.serializeBinaryToWriter
    );
  }
  f = message.getItems();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CS2PlayerItemsState.serializeBinaryToWriter
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.CS2PlayerPositionState.serializeBinaryToWriter
    );
  }
};


/**
 * optional CS2PlayerCurrentRoundStatisticsState statistics = 1;
 * @return {?proto.bragi.CS2PlayerCurrentRoundStatisticsState}
 */
proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.prototype.getStatistics = function() {
  return /** @type{?proto.bragi.CS2PlayerCurrentRoundStatisticsState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2PlayerCurrentRoundStatisticsState, 1));
};


/**
 * @param {?proto.bragi.CS2PlayerCurrentRoundStatisticsState|undefined} value
 * @return {!proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload} returns this
*/
proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.prototype.setStatistics = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload} returns this
 */
proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.prototype.clearStatistics = function() {
  return this.setStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.prototype.hasStatistics = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CS2PlayerItemsState items = 2;
 * @return {?proto.bragi.CS2PlayerItemsState}
 */
proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.prototype.getItems = function() {
  return /** @type{?proto.bragi.CS2PlayerItemsState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2PlayerItemsState, 2));
};


/**
 * @param {?proto.bragi.CS2PlayerItemsState|undefined} value
 * @return {!proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload} returns this
*/
proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.prototype.setItems = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload} returns this
 */
proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.prototype.clearItems = function() {
  return this.setItems(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.prototype.hasItems = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CS2PlayerPositionState position = 3;
 * @return {?proto.bragi.CS2PlayerPositionState}
 */
proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.prototype.getPosition = function() {
  return /** @type{?proto.bragi.CS2PlayerPositionState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2PlayerPositionState, 3));
};


/**
 * @param {?proto.bragi.CS2PlayerPositionState|undefined} value
 * @return {!proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload} returns this
*/
proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.prototype.setPosition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload} returns this
 */
proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate} returns this
 */
proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Payload payload = 2;
 * @return {?proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload}
 */
proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.prototype.getPayload = function() {
  return /** @type{?proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload, 2));
};


/**
 * @param {?proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.Payload|undefined} value
 * @return {!proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate} returns this
*/
proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate} returns this
 */
proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2PlayerCurrentRoundStatePartialUpdate.prototype.hasPayload = function() {
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
proto.bragi.CS2PlayerCurrentRoundState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2PlayerCurrentRoundState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2PlayerCurrentRoundState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2PlayerCurrentRoundState.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    playerName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    slotId: jspb.Message.getFieldWithDefault(msg, 6, 0),
    statistics: (f = msg.getStatistics()) && proto.bragi.CS2PlayerCurrentRoundStatisticsState.toObject(includeInstance, f),
    items: (f = msg.getItems()) && proto.bragi.CS2PlayerItemsState.toObject(includeInstance, f),
    position: (f = msg.getPosition()) && proto.bragi.CS2PlayerPositionState.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CS2PlayerCurrentRoundState}
 */
proto.bragi.CS2PlayerCurrentRoundState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2PlayerCurrentRoundState;
  return proto.bragi.CS2PlayerCurrentRoundState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2PlayerCurrentRoundState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2PlayerCurrentRoundState}
 */
proto.bragi.CS2PlayerCurrentRoundState.deserializeBinaryFromReader = function(msg, reader) {
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
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSlotId(value);
      break;
    case 3:
      var value = new proto.bragi.CS2PlayerCurrentRoundStatisticsState;
      reader.readMessage(value,proto.bragi.CS2PlayerCurrentRoundStatisticsState.deserializeBinaryFromReader);
      msg.setStatistics(value);
      break;
    case 4:
      var value = new proto.bragi.CS2PlayerItemsState;
      reader.readMessage(value,proto.bragi.CS2PlayerItemsState.deserializeBinaryFromReader);
      msg.setItems(value);
      break;
    case 5:
      var value = new proto.bragi.CS2PlayerPositionState;
      reader.readMessage(value,proto.bragi.CS2PlayerPositionState.deserializeBinaryFromReader);
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
proto.bragi.CS2PlayerCurrentRoundState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2PlayerCurrentRoundState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2PlayerCurrentRoundState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2PlayerCurrentRoundState.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getSlotId();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getStatistics();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.CS2PlayerCurrentRoundStatisticsState.serializeBinaryToWriter
    );
  }
  f = message.getItems();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.CS2PlayerItemsState.serializeBinaryToWriter
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bragi.CS2PlayerPositionState.serializeBinaryToWriter
    );
  }
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.CS2PlayerCurrentRoundState.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2PlayerCurrentRoundState} returns this
 */
proto.bragi.CS2PlayerCurrentRoundState.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string player_name = 2;
 * @return {string}
 */
proto.bragi.CS2PlayerCurrentRoundState.prototype.getPlayerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2PlayerCurrentRoundState} returns this
 */
proto.bragi.CS2PlayerCurrentRoundState.prototype.setPlayerName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 slot_id = 6;
 * @return {number}
 */
proto.bragi.CS2PlayerCurrentRoundState.prototype.getSlotId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2PlayerCurrentRoundState} returns this
 */
proto.bragi.CS2PlayerCurrentRoundState.prototype.setSlotId = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional CS2PlayerCurrentRoundStatisticsState statistics = 3;
 * @return {?proto.bragi.CS2PlayerCurrentRoundStatisticsState}
 */
proto.bragi.CS2PlayerCurrentRoundState.prototype.getStatistics = function() {
  return /** @type{?proto.bragi.CS2PlayerCurrentRoundStatisticsState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2PlayerCurrentRoundStatisticsState, 3));
};


/**
 * @param {?proto.bragi.CS2PlayerCurrentRoundStatisticsState|undefined} value
 * @return {!proto.bragi.CS2PlayerCurrentRoundState} returns this
*/
proto.bragi.CS2PlayerCurrentRoundState.prototype.setStatistics = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2PlayerCurrentRoundState} returns this
 */
proto.bragi.CS2PlayerCurrentRoundState.prototype.clearStatistics = function() {
  return this.setStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2PlayerCurrentRoundState.prototype.hasStatistics = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CS2PlayerItemsState items = 4;
 * @return {?proto.bragi.CS2PlayerItemsState}
 */
proto.bragi.CS2PlayerCurrentRoundState.prototype.getItems = function() {
  return /** @type{?proto.bragi.CS2PlayerItemsState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2PlayerItemsState, 4));
};


/**
 * @param {?proto.bragi.CS2PlayerItemsState|undefined} value
 * @return {!proto.bragi.CS2PlayerCurrentRoundState} returns this
*/
proto.bragi.CS2PlayerCurrentRoundState.prototype.setItems = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2PlayerCurrentRoundState} returns this
 */
proto.bragi.CS2PlayerCurrentRoundState.prototype.clearItems = function() {
  return this.setItems(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2PlayerCurrentRoundState.prototype.hasItems = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CS2PlayerPositionState position = 5;
 * @return {?proto.bragi.CS2PlayerPositionState}
 */
proto.bragi.CS2PlayerCurrentRoundState.prototype.getPosition = function() {
  return /** @type{?proto.bragi.CS2PlayerPositionState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2PlayerPositionState, 5));
};


/**
 * @param {?proto.bragi.CS2PlayerPositionState|undefined} value
 * @return {!proto.bragi.CS2PlayerCurrentRoundState} returns this
*/
proto.bragi.CS2PlayerCurrentRoundState.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2PlayerCurrentRoundState} returns this
 */
proto.bragi.CS2PlayerCurrentRoundState.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2PlayerCurrentRoundState.prototype.hasPosition = function() {
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
proto.bragi.CS2PlayerCurrentRoundStatisticsState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2PlayerCurrentRoundStatisticsState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2PlayerCurrentRoundStatisticsState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2PlayerCurrentRoundStatisticsState.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    alive: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    health: jspb.Message.getFieldWithDefault(msg, 3, 0),
    armor: jspb.Message.getFieldWithDefault(msg, 4, 0),
    balance: jspb.Message.getFieldWithDefault(msg, 5, 0),
    damage: jspb.Message.getFieldWithDefault(msg, 7, 0),
    statistics: (f = msg.getStatistics()) && proto.bragi.CS2PlayerStatistics.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CS2PlayerCurrentRoundStatisticsState}
 */
proto.bragi.CS2PlayerCurrentRoundStatisticsState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2PlayerCurrentRoundStatisticsState;
  return proto.bragi.CS2PlayerCurrentRoundStatisticsState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2PlayerCurrentRoundStatisticsState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2PlayerCurrentRoundStatisticsState}
 */
proto.bragi.CS2PlayerCurrentRoundStatisticsState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHealth(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setArmor(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBalance(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDamage(value);
      break;
    case 6:
      var value = new proto.bragi.CS2PlayerStatistics;
      reader.readMessage(value,proto.bragi.CS2PlayerStatistics.deserializeBinaryFromReader);
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
proto.bragi.CS2PlayerCurrentRoundStatisticsState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2PlayerCurrentRoundStatisticsState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2PlayerCurrentRoundStatisticsState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2PlayerCurrentRoundStatisticsState.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getHealth();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getArmor();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getBalance();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getStatistics();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bragi.CS2PlayerStatistics.serializeBinaryToWriter
    );
  }
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.CS2PlayerCurrentRoundStatisticsState.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2PlayerCurrentRoundStatisticsState} returns this
 */
proto.bragi.CS2PlayerCurrentRoundStatisticsState.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool alive = 2;
 * @return {boolean}
 */
proto.bragi.CS2PlayerCurrentRoundStatisticsState.prototype.getAlive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.CS2PlayerCurrentRoundStatisticsState} returns this
 */
proto.bragi.CS2PlayerCurrentRoundStatisticsState.prototype.setAlive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional uint32 health = 3;
 * @return {number}
 */
proto.bragi.CS2PlayerCurrentRoundStatisticsState.prototype.getHealth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2PlayerCurrentRoundStatisticsState} returns this
 */
proto.bragi.CS2PlayerCurrentRoundStatisticsState.prototype.setHealth = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 armor = 4;
 * @return {number}
 */
proto.bragi.CS2PlayerCurrentRoundStatisticsState.prototype.getArmor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2PlayerCurrentRoundStatisticsState} returns this
 */
proto.bragi.CS2PlayerCurrentRoundStatisticsState.prototype.setArmor = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 balance = 5;
 * @return {number}
 */
proto.bragi.CS2PlayerCurrentRoundStatisticsState.prototype.getBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2PlayerCurrentRoundStatisticsState} returns this
 */
proto.bragi.CS2PlayerCurrentRoundStatisticsState.prototype.setBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 damage = 7;
 * @return {number}
 */
proto.bragi.CS2PlayerCurrentRoundStatisticsState.prototype.getDamage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2PlayerCurrentRoundStatisticsState} returns this
 */
proto.bragi.CS2PlayerCurrentRoundStatisticsState.prototype.setDamage = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CS2PlayerCurrentRoundStatisticsState} returns this
 */
proto.bragi.CS2PlayerCurrentRoundStatisticsState.prototype.clearDamage = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2PlayerCurrentRoundStatisticsState.prototype.hasDamage = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional CS2PlayerStatistics statistics = 6;
 * @return {?proto.bragi.CS2PlayerStatistics}
 */
proto.bragi.CS2PlayerCurrentRoundStatisticsState.prototype.getStatistics = function() {
  return /** @type{?proto.bragi.CS2PlayerStatistics} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2PlayerStatistics, 6));
};


/**
 * @param {?proto.bragi.CS2PlayerStatistics|undefined} value
 * @return {!proto.bragi.CS2PlayerCurrentRoundStatisticsState} returns this
*/
proto.bragi.CS2PlayerCurrentRoundStatisticsState.prototype.setStatistics = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2PlayerCurrentRoundStatisticsState} returns this
 */
proto.bragi.CS2PlayerCurrentRoundStatisticsState.prototype.clearStatistics = function() {
  return this.setStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2PlayerCurrentRoundStatisticsState.prototype.hasStatistics = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.CS2PlayerItemsState.repeatedFields_ = [3];



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
proto.bragi.CS2PlayerItemsState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2PlayerItemsState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2PlayerItemsState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2PlayerItemsState.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    equipmentValue: jspb.Message.getFieldWithDefault(msg, 2, 0),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.bragi.CS2Item.toObject, includeInstance)
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
 * @return {!proto.bragi.CS2PlayerItemsState}
 */
proto.bragi.CS2PlayerItemsState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2PlayerItemsState;
  return proto.bragi.CS2PlayerItemsState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2PlayerItemsState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2PlayerItemsState}
 */
proto.bragi.CS2PlayerItemsState.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setEquipmentValue(value);
      break;
    case 3:
      var value = new proto.bragi.CS2Item;
      reader.readMessage(value,proto.bragi.CS2Item.deserializeBinaryFromReader);
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
proto.bragi.CS2PlayerItemsState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2PlayerItemsState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2PlayerItemsState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2PlayerItemsState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.bragi.CS2Item.serializeBinaryToWriter
    );
  }
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.CS2PlayerItemsState.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2PlayerItemsState} returns this
 */
proto.bragi.CS2PlayerItemsState.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 equipment_value = 2;
 * @return {number}
 */
proto.bragi.CS2PlayerItemsState.prototype.getEquipmentValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2PlayerItemsState} returns this
 */
proto.bragi.CS2PlayerItemsState.prototype.setEquipmentValue = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated CS2Item items = 3;
 * @return {!Array<!proto.bragi.CS2Item>}
 */
proto.bragi.CS2PlayerItemsState.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.bragi.CS2Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.CS2Item, 3));
};


/**
 * @param {!Array<!proto.bragi.CS2Item>} value
 * @return {!proto.bragi.CS2PlayerItemsState} returns this
*/
proto.bragi.CS2PlayerItemsState.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.bragi.CS2Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.CS2Item}
 */
proto.bragi.CS2PlayerItemsState.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.bragi.CS2Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CS2PlayerItemsState} returns this
 */
proto.bragi.CS2PlayerItemsState.prototype.clearItemsList = function() {
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
proto.bragi.CS2PlayerPreviousRoundState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2PlayerPreviousRoundState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2PlayerPreviousRoundState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2PlayerPreviousRoundState.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    playerName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    statistics: (f = msg.getStatistics()) && proto.bragi.CS2PlayerStatistics.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CS2PlayerPreviousRoundState}
 */
proto.bragi.CS2PlayerPreviousRoundState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2PlayerPreviousRoundState;
  return proto.bragi.CS2PlayerPreviousRoundState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2PlayerPreviousRoundState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2PlayerPreviousRoundState}
 */
proto.bragi.CS2PlayerPreviousRoundState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.CS2PlayerStatistics;
      reader.readMessage(value,proto.bragi.CS2PlayerStatistics.deserializeBinaryFromReader);
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
proto.bragi.CS2PlayerPreviousRoundState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2PlayerPreviousRoundState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2PlayerPreviousRoundState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2PlayerPreviousRoundState.serializeBinaryToWriter = function(message, writer) {
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
      proto.bragi.CS2PlayerStatistics.serializeBinaryToWriter
    );
  }
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.CS2PlayerPreviousRoundState.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2PlayerPreviousRoundState} returns this
 */
proto.bragi.CS2PlayerPreviousRoundState.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string player_name = 2;
 * @return {string}
 */
proto.bragi.CS2PlayerPreviousRoundState.prototype.getPlayerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2PlayerPreviousRoundState} returns this
 */
proto.bragi.CS2PlayerPreviousRoundState.prototype.setPlayerName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional CS2PlayerStatistics statistics = 3;
 * @return {?proto.bragi.CS2PlayerStatistics}
 */
proto.bragi.CS2PlayerPreviousRoundState.prototype.getStatistics = function() {
  return /** @type{?proto.bragi.CS2PlayerStatistics} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2PlayerStatistics, 3));
};


/**
 * @param {?proto.bragi.CS2PlayerStatistics|undefined} value
 * @return {!proto.bragi.CS2PlayerPreviousRoundState} returns this
*/
proto.bragi.CS2PlayerPreviousRoundState.prototype.setStatistics = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2PlayerPreviousRoundState} returns this
 */
proto.bragi.CS2PlayerPreviousRoundState.prototype.clearStatistics = function() {
  return this.setStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2PlayerPreviousRoundState.prototype.hasStatistics = function() {
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
proto.bragi.CS2PlayerPositionState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2PlayerPositionState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2PlayerPositionState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2PlayerPositionState.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    position: (f = msg.getPosition()) && proto.bragi.CS2Position.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CS2PlayerPositionState}
 */
proto.bragi.CS2PlayerPositionState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2PlayerPositionState;
  return proto.bragi.CS2PlayerPositionState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2PlayerPositionState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2PlayerPositionState}
 */
proto.bragi.CS2PlayerPositionState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.CS2Position;
      reader.readMessage(value,proto.bragi.CS2Position.deserializeBinaryFromReader);
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
proto.bragi.CS2PlayerPositionState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2PlayerPositionState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2PlayerPositionState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2PlayerPositionState.serializeBinaryToWriter = function(message, writer) {
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
      proto.bragi.CS2Position.serializeBinaryToWriter
    );
  }
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.CS2PlayerPositionState.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2PlayerPositionState} returns this
 */
proto.bragi.CS2PlayerPositionState.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CS2Position position = 2;
 * @return {?proto.bragi.CS2Position}
 */
proto.bragi.CS2PlayerPositionState.prototype.getPosition = function() {
  return /** @type{?proto.bragi.CS2Position} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2Position, 2));
};


/**
 * @param {?proto.bragi.CS2Position|undefined} value
 * @return {!proto.bragi.CS2PlayerPositionState} returns this
*/
proto.bragi.CS2PlayerPositionState.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2PlayerPositionState} returns this
 */
proto.bragi.CS2PlayerPositionState.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2PlayerPositionState.prototype.hasPosition = function() {
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
proto.bragi.CS2PlayerStatistics.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2PlayerStatistics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2PlayerStatistics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2PlayerStatistics.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    kills: jspb.Message.getFieldWithDefault(msg, 2, 0),
    friendlyKills: jspb.Message.getFieldWithDefault(msg, 3, 0),
    enemyKills: jspb.Message.getFieldWithDefault(msg, 4, 0),
    selfKills: jspb.Message.getFieldWithDefault(msg, 5, 0),
    deaths: jspb.Message.getFieldWithDefault(msg, 6, 0),
    assists: jspb.Message.getFieldWithDefault(msg, 7, 0),
    headshots: jspb.Message.getFieldWithDefault(msg, 8, 0),
    damage: jspb.Message.getFieldWithDefault(msg, 15, 0),
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
 * @return {!proto.bragi.CS2PlayerStatistics}
 */
proto.bragi.CS2PlayerStatistics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2PlayerStatistics;
  return proto.bragi.CS2PlayerStatistics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2PlayerStatistics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2PlayerStatistics}
 */
proto.bragi.CS2PlayerStatistics.deserializeBinaryFromReader = function(msg, reader) {
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
    case 15:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDamage(value);
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
proto.bragi.CS2PlayerStatistics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2PlayerStatistics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2PlayerStatistics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2PlayerStatistics.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getDamage();
  if (f !== 0) {
    writer.writeUint32(
      15,
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
proto.bragi.CS2PlayerStatistics.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2PlayerStatistics} returns this
 */
proto.bragi.CS2PlayerStatistics.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 kills = 2;
 * @return {number}
 */
proto.bragi.CS2PlayerStatistics.prototype.getKills = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2PlayerStatistics} returns this
 */
proto.bragi.CS2PlayerStatistics.prototype.setKills = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 friendly_kills = 3;
 * @return {number}
 */
proto.bragi.CS2PlayerStatistics.prototype.getFriendlyKills = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2PlayerStatistics} returns this
 */
proto.bragi.CS2PlayerStatistics.prototype.setFriendlyKills = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 enemy_kills = 4;
 * @return {number}
 */
proto.bragi.CS2PlayerStatistics.prototype.getEnemyKills = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2PlayerStatistics} returns this
 */
proto.bragi.CS2PlayerStatistics.prototype.setEnemyKills = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 self_kills = 5;
 * @return {number}
 */
proto.bragi.CS2PlayerStatistics.prototype.getSelfKills = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2PlayerStatistics} returns this
 */
proto.bragi.CS2PlayerStatistics.prototype.setSelfKills = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 deaths = 6;
 * @return {number}
 */
proto.bragi.CS2PlayerStatistics.prototype.getDeaths = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2PlayerStatistics} returns this
 */
proto.bragi.CS2PlayerStatistics.prototype.setDeaths = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 assists = 7;
 * @return {number}
 */
proto.bragi.CS2PlayerStatistics.prototype.getAssists = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2PlayerStatistics} returns this
 */
proto.bragi.CS2PlayerStatistics.prototype.setAssists = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 headshots = 8;
 * @return {number}
 */
proto.bragi.CS2PlayerStatistics.prototype.getHeadshots = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2PlayerStatistics} returns this
 */
proto.bragi.CS2PlayerStatistics.prototype.setHeadshots = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint32 damage = 15;
 * @return {number}
 */
proto.bragi.CS2PlayerStatistics.prototype.getDamage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2PlayerStatistics} returns this
 */
proto.bragi.CS2PlayerStatistics.prototype.setDamage = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional uint32 friendly_damage_dealt_armor = 9;
 * @return {number}
 */
proto.bragi.CS2PlayerStatistics.prototype.getFriendlyDamageDealtArmor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2PlayerStatistics} returns this
 */
proto.bragi.CS2PlayerStatistics.prototype.setFriendlyDamageDealtArmor = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CS2PlayerStatistics} returns this
 */
proto.bragi.CS2PlayerStatistics.prototype.clearFriendlyDamageDealtArmor = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2PlayerStatistics.prototype.hasFriendlyDamageDealtArmor = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional uint32 friendly_damage_dealt_health = 10;
 * @return {number}
 */
proto.bragi.CS2PlayerStatistics.prototype.getFriendlyDamageDealtHealth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2PlayerStatistics} returns this
 */
proto.bragi.CS2PlayerStatistics.prototype.setFriendlyDamageDealtHealth = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CS2PlayerStatistics} returns this
 */
proto.bragi.CS2PlayerStatistics.prototype.clearFriendlyDamageDealtHealth = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2PlayerStatistics.prototype.hasFriendlyDamageDealtHealth = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional uint32 enemy_damage_dealt_armor = 11;
 * @return {number}
 */
proto.bragi.CS2PlayerStatistics.prototype.getEnemyDamageDealtArmor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2PlayerStatistics} returns this
 */
proto.bragi.CS2PlayerStatistics.prototype.setEnemyDamageDealtArmor = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CS2PlayerStatistics} returns this
 */
proto.bragi.CS2PlayerStatistics.prototype.clearEnemyDamageDealtArmor = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2PlayerStatistics.prototype.hasEnemyDamageDealtArmor = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional uint32 enemy_damage_dealt_health = 12;
 * @return {number}
 */
proto.bragi.CS2PlayerStatistics.prototype.getEnemyDamageDealtHealth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2PlayerStatistics} returns this
 */
proto.bragi.CS2PlayerStatistics.prototype.setEnemyDamageDealtHealth = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CS2PlayerStatistics} returns this
 */
proto.bragi.CS2PlayerStatistics.prototype.clearEnemyDamageDealtHealth = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2PlayerStatistics.prototype.hasEnemyDamageDealtHealth = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional uint32 enemy_damage_dealt_armor_raw = 13;
 * @return {number}
 */
proto.bragi.CS2PlayerStatistics.prototype.getEnemyDamageDealtArmorRaw = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2PlayerStatistics} returns this
 */
proto.bragi.CS2PlayerStatistics.prototype.setEnemyDamageDealtArmorRaw = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CS2PlayerStatistics} returns this
 */
proto.bragi.CS2PlayerStatistics.prototype.clearEnemyDamageDealtArmorRaw = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2PlayerStatistics.prototype.hasEnemyDamageDealtArmorRaw = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional uint32 enemy_damage_dealt_health_raw = 14;
 * @return {number}
 */
proto.bragi.CS2PlayerStatistics.prototype.getEnemyDamageDealtHealthRaw = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2PlayerStatistics} returns this
 */
proto.bragi.CS2PlayerStatistics.prototype.setEnemyDamageDealtHealthRaw = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CS2PlayerStatistics} returns this
 */
proto.bragi.CS2PlayerStatistics.prototype.clearEnemyDamageDealtHealthRaw = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2PlayerStatistics.prototype.hasEnemyDamageDealtHealthRaw = function() {
  return jspb.Message.getField(this, 14) != null;
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
proto.bragi.CS2Item.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    weaponType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    type: jspb.Message.getFieldWithDefault(msg, 5, 0),
    count: jspb.Message.getFieldWithDefault(msg, 3, 0),
    isactive: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.bragi.CS2Item}
 */
proto.bragi.CS2Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2Item;
  return proto.bragi.CS2Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2Item}
 */
proto.bragi.CS2Item.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!proto.bragi.CS2WeaponType} */ (reader.readEnum());
      msg.setWeaponType(value);
      break;
    case 5:
      var value = /** @type {!proto.bragi.CS2ItemType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCount(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsactive(value);
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
proto.bragi.CS2Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWeaponType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getIsactive();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.bragi.CS2Item.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2Item} returns this
 */
proto.bragi.CS2Item.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CS2WeaponType weapon_type = 2;
 * @return {!proto.bragi.CS2WeaponType}
 */
proto.bragi.CS2Item.prototype.getWeaponType = function() {
  return /** @type {!proto.bragi.CS2WeaponType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bragi.CS2WeaponType} value
 * @return {!proto.bragi.CS2Item} returns this
 */
proto.bragi.CS2Item.prototype.setWeaponType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional CS2ItemType type = 5;
 * @return {!proto.bragi.CS2ItemType}
 */
proto.bragi.CS2Item.prototype.getType = function() {
  return /** @type {!proto.bragi.CS2ItemType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.bragi.CS2ItemType} value
 * @return {!proto.bragi.CS2Item} returns this
 */
proto.bragi.CS2Item.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional uint32 count = 3;
 * @return {number}
 */
proto.bragi.CS2Item.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2Item} returns this
 */
proto.bragi.CS2Item.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool isActive = 4;
 * @return {boolean}
 */
proto.bragi.CS2Item.prototype.getIsactive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.CS2Item} returns this
 */
proto.bragi.CS2Item.prototype.setIsactive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
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
proto.bragi.CS2Position.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2Position.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2Position} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2Position.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    y: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    z: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
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
 * @return {!proto.bragi.CS2Position}
 */
proto.bragi.CS2Position.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2Position;
  return proto.bragi.CS2Position.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2Position} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2Position}
 */
proto.bragi.CS2Position.deserializeBinaryFromReader = function(msg, reader) {
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
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setZ(value);
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
proto.bragi.CS2Position.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2Position.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2Position} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2Position.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getZ();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
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
proto.bragi.CS2Position.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2Position} returns this
 */
proto.bragi.CS2Position.prototype.setX = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float y = 2;
 * @return {number}
 */
proto.bragi.CS2Position.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2Position} returns this
 */
proto.bragi.CS2Position.prototype.setY = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float z = 4;
 * @return {number}
 */
proto.bragi.CS2Position.prototype.getZ = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2Position} returns this
 */
proto.bragi.CS2Position.prototype.setZ = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float angle = 3;
 * @return {number}
 */
proto.bragi.CS2Position.prototype.getAngle = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2Position} returns this
 */
proto.bragi.CS2Position.prototype.setAngle = function(value) {
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
proto.bragi.CS2Event.oneofGroups_ = [[1,2,3,21,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]];

/**
 * @enum {number}
 */
proto.bragi.CS2Event.EventCase = {
  EVENT_NOT_SET: 0,
  BOMB_DEFUSE_STARTED: 1,
  BOMB_DEFUSED: 2,
  BOMB_EXPLODED: 3,
  BOMB_PLANT_STARTED: 21,
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
 * @return {proto.bragi.CS2Event.EventCase}
 */
proto.bragi.CS2Event.prototype.getEventCase = function() {
  return /** @type {proto.bragi.CS2Event.EventCase} */(jspb.Message.computeOneofCase(this, proto.bragi.CS2Event.oneofGroups_[0]));
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
proto.bragi.CS2Event.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2Event.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2Event} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2Event.toObject = function(includeInstance, msg) {
  var f, obj = {
    bombDefuseStarted: (f = msg.getBombDefuseStarted()) && proto.bragi.CS2BombDefuseStarted.toObject(includeInstance, f),
    bombDefused: (f = msg.getBombDefused()) && proto.bragi.CS2BombDefused.toObject(includeInstance, f),
    bombExploded: (f = msg.getBombExploded()) && proto.bragi.CS2BombExploded.toObject(includeInstance, f),
    bombPlantStarted: (f = msg.getBombPlantStarted()) && proto.bragi.CS2BombPlantStarted.toObject(includeInstance, f),
    bombPlanted: (f = msg.getBombPlanted()) && proto.bragi.CS2BombPlanted.toObject(includeInstance, f),
    damageDealt: (f = msg.getDamageDealt()) && proto.bragi.CS2DamageDealt.toObject(includeInstance, f),
    freezeTimeEnded: (f = msg.getFreezeTimeEnded()) && proto.bragi.CS2FreezeTimeEnded.toObject(includeInstance, f),
    freezeTimeStarted: (f = msg.getFreezeTimeStarted()) && proto.bragi.CS2FreezeTimeStarted.toObject(includeInstance, f),
    itemDrop: (f = msg.getItemDrop()) && proto.bragi.CS2ItemDrop.toObject(includeInstance, f),
    itemPickUp: (f = msg.getItemPickUp()) && proto.bragi.CS2ItemPickUp.toObject(includeInstance, f),
    itemPurchase: (f = msg.getItemPurchase()) && proto.bragi.CS2ItemPurchase.toObject(includeInstance, f),
    itemThrow: (f = msg.getItemThrow()) && proto.bragi.CS2ItemThrow.toObject(includeInstance, f),
    kill: (f = msg.getKill()) && proto.bragi.CS2Kill.toObject(includeInstance, f),
    death: (f = msg.getDeath()) && proto.bragi.CS2Death.toObject(includeInstance, f),
    mapEnd: (f = msg.getMapEnd()) && proto.bragi.CS2MapEnd.toObject(includeInstance, f),
    mapStart: (f = msg.getMapStart()) && proto.bragi.CS2MapStart.toObject(includeInstance, f),
    roundEnd: (f = msg.getRoundEnd()) && proto.bragi.CS2RoundEnd.toObject(includeInstance, f),
    roundPause: (f = msg.getRoundPause()) && proto.bragi.CS2RoundPause.toObject(includeInstance, f),
    roundResume: (f = msg.getRoundResume()) && proto.bragi.CS2RoundResume.toObject(includeInstance, f),
    roundRollback: (f = msg.getRoundRollback()) && proto.bragi.CS2RoundRollback.toObject(includeInstance, f),
    roundStart: (f = msg.getRoundStart()) && proto.bragi.CS2RoundStart.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CS2Event}
 */
proto.bragi.CS2Event.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2Event;
  return proto.bragi.CS2Event.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2Event} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2Event}
 */
proto.bragi.CS2Event.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CS2BombDefuseStarted;
      reader.readMessage(value,proto.bragi.CS2BombDefuseStarted.deserializeBinaryFromReader);
      msg.setBombDefuseStarted(value);
      break;
    case 2:
      var value = new proto.bragi.CS2BombDefused;
      reader.readMessage(value,proto.bragi.CS2BombDefused.deserializeBinaryFromReader);
      msg.setBombDefused(value);
      break;
    case 3:
      var value = new proto.bragi.CS2BombExploded;
      reader.readMessage(value,proto.bragi.CS2BombExploded.deserializeBinaryFromReader);
      msg.setBombExploded(value);
      break;
    case 21:
      var value = new proto.bragi.CS2BombPlantStarted;
      reader.readMessage(value,proto.bragi.CS2BombPlantStarted.deserializeBinaryFromReader);
      msg.setBombPlantStarted(value);
      break;
    case 4:
      var value = new proto.bragi.CS2BombPlanted;
      reader.readMessage(value,proto.bragi.CS2BombPlanted.deserializeBinaryFromReader);
      msg.setBombPlanted(value);
      break;
    case 5:
      var value = new proto.bragi.CS2DamageDealt;
      reader.readMessage(value,proto.bragi.CS2DamageDealt.deserializeBinaryFromReader);
      msg.setDamageDealt(value);
      break;
    case 6:
      var value = new proto.bragi.CS2FreezeTimeEnded;
      reader.readMessage(value,proto.bragi.CS2FreezeTimeEnded.deserializeBinaryFromReader);
      msg.setFreezeTimeEnded(value);
      break;
    case 7:
      var value = new proto.bragi.CS2FreezeTimeStarted;
      reader.readMessage(value,proto.bragi.CS2FreezeTimeStarted.deserializeBinaryFromReader);
      msg.setFreezeTimeStarted(value);
      break;
    case 8:
      var value = new proto.bragi.CS2ItemDrop;
      reader.readMessage(value,proto.bragi.CS2ItemDrop.deserializeBinaryFromReader);
      msg.setItemDrop(value);
      break;
    case 9:
      var value = new proto.bragi.CS2ItemPickUp;
      reader.readMessage(value,proto.bragi.CS2ItemPickUp.deserializeBinaryFromReader);
      msg.setItemPickUp(value);
      break;
    case 10:
      var value = new proto.bragi.CS2ItemPurchase;
      reader.readMessage(value,proto.bragi.CS2ItemPurchase.deserializeBinaryFromReader);
      msg.setItemPurchase(value);
      break;
    case 11:
      var value = new proto.bragi.CS2ItemThrow;
      reader.readMessage(value,proto.bragi.CS2ItemThrow.deserializeBinaryFromReader);
      msg.setItemThrow(value);
      break;
    case 12:
      var value = new proto.bragi.CS2Kill;
      reader.readMessage(value,proto.bragi.CS2Kill.deserializeBinaryFromReader);
      msg.setKill(value);
      break;
    case 13:
      var value = new proto.bragi.CS2Death;
      reader.readMessage(value,proto.bragi.CS2Death.deserializeBinaryFromReader);
      msg.setDeath(value);
      break;
    case 14:
      var value = new proto.bragi.CS2MapEnd;
      reader.readMessage(value,proto.bragi.CS2MapEnd.deserializeBinaryFromReader);
      msg.setMapEnd(value);
      break;
    case 15:
      var value = new proto.bragi.CS2MapStart;
      reader.readMessage(value,proto.bragi.CS2MapStart.deserializeBinaryFromReader);
      msg.setMapStart(value);
      break;
    case 16:
      var value = new proto.bragi.CS2RoundEnd;
      reader.readMessage(value,proto.bragi.CS2RoundEnd.deserializeBinaryFromReader);
      msg.setRoundEnd(value);
      break;
    case 17:
      var value = new proto.bragi.CS2RoundPause;
      reader.readMessage(value,proto.bragi.CS2RoundPause.deserializeBinaryFromReader);
      msg.setRoundPause(value);
      break;
    case 18:
      var value = new proto.bragi.CS2RoundResume;
      reader.readMessage(value,proto.bragi.CS2RoundResume.deserializeBinaryFromReader);
      msg.setRoundResume(value);
      break;
    case 19:
      var value = new proto.bragi.CS2RoundRollback;
      reader.readMessage(value,proto.bragi.CS2RoundRollback.deserializeBinaryFromReader);
      msg.setRoundRollback(value);
      break;
    case 20:
      var value = new proto.bragi.CS2RoundStart;
      reader.readMessage(value,proto.bragi.CS2RoundStart.deserializeBinaryFromReader);
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
proto.bragi.CS2Event.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2Event.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2Event} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2Event.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBombDefuseStarted();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CS2BombDefuseStarted.serializeBinaryToWriter
    );
  }
  f = message.getBombDefused();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CS2BombDefused.serializeBinaryToWriter
    );
  }
  f = message.getBombExploded();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.CS2BombExploded.serializeBinaryToWriter
    );
  }
  f = message.getBombPlantStarted();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.bragi.CS2BombPlantStarted.serializeBinaryToWriter
    );
  }
  f = message.getBombPlanted();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.CS2BombPlanted.serializeBinaryToWriter
    );
  }
  f = message.getDamageDealt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bragi.CS2DamageDealt.serializeBinaryToWriter
    );
  }
  f = message.getFreezeTimeEnded();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bragi.CS2FreezeTimeEnded.serializeBinaryToWriter
    );
  }
  f = message.getFreezeTimeStarted();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bragi.CS2FreezeTimeStarted.serializeBinaryToWriter
    );
  }
  f = message.getItemDrop();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.bragi.CS2ItemDrop.serializeBinaryToWriter
    );
  }
  f = message.getItemPickUp();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.bragi.CS2ItemPickUp.serializeBinaryToWriter
    );
  }
  f = message.getItemPurchase();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.bragi.CS2ItemPurchase.serializeBinaryToWriter
    );
  }
  f = message.getItemThrow();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.bragi.CS2ItemThrow.serializeBinaryToWriter
    );
  }
  f = message.getKill();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.bragi.CS2Kill.serializeBinaryToWriter
    );
  }
  f = message.getDeath();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.bragi.CS2Death.serializeBinaryToWriter
    );
  }
  f = message.getMapEnd();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.bragi.CS2MapEnd.serializeBinaryToWriter
    );
  }
  f = message.getMapStart();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.bragi.CS2MapStart.serializeBinaryToWriter
    );
  }
  f = message.getRoundEnd();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.bragi.CS2RoundEnd.serializeBinaryToWriter
    );
  }
  f = message.getRoundPause();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.bragi.CS2RoundPause.serializeBinaryToWriter
    );
  }
  f = message.getRoundResume();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.bragi.CS2RoundResume.serializeBinaryToWriter
    );
  }
  f = message.getRoundRollback();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.bragi.CS2RoundRollback.serializeBinaryToWriter
    );
  }
  f = message.getRoundStart();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.bragi.CS2RoundStart.serializeBinaryToWriter
    );
  }
};


/**
 * optional CS2BombDefuseStarted bomb_defuse_started = 1;
 * @return {?proto.bragi.CS2BombDefuseStarted}
 */
proto.bragi.CS2Event.prototype.getBombDefuseStarted = function() {
  return /** @type{?proto.bragi.CS2BombDefuseStarted} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2BombDefuseStarted, 1));
};


/**
 * @param {?proto.bragi.CS2BombDefuseStarted|undefined} value
 * @return {!proto.bragi.CS2Event} returns this
*/
proto.bragi.CS2Event.prototype.setBombDefuseStarted = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.CS2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2Event} returns this
 */
proto.bragi.CS2Event.prototype.clearBombDefuseStarted = function() {
  return this.setBombDefuseStarted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2Event.prototype.hasBombDefuseStarted = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CS2BombDefused bomb_defused = 2;
 * @return {?proto.bragi.CS2BombDefused}
 */
proto.bragi.CS2Event.prototype.getBombDefused = function() {
  return /** @type{?proto.bragi.CS2BombDefused} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2BombDefused, 2));
};


/**
 * @param {?proto.bragi.CS2BombDefused|undefined} value
 * @return {!proto.bragi.CS2Event} returns this
*/
proto.bragi.CS2Event.prototype.setBombDefused = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bragi.CS2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2Event} returns this
 */
proto.bragi.CS2Event.prototype.clearBombDefused = function() {
  return this.setBombDefused(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2Event.prototype.hasBombDefused = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CS2BombExploded bomb_exploded = 3;
 * @return {?proto.bragi.CS2BombExploded}
 */
proto.bragi.CS2Event.prototype.getBombExploded = function() {
  return /** @type{?proto.bragi.CS2BombExploded} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2BombExploded, 3));
};


/**
 * @param {?proto.bragi.CS2BombExploded|undefined} value
 * @return {!proto.bragi.CS2Event} returns this
*/
proto.bragi.CS2Event.prototype.setBombExploded = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.bragi.CS2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2Event} returns this
 */
proto.bragi.CS2Event.prototype.clearBombExploded = function() {
  return this.setBombExploded(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2Event.prototype.hasBombExploded = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CS2BombPlantStarted bomb_plant_started = 21;
 * @return {?proto.bragi.CS2BombPlantStarted}
 */
proto.bragi.CS2Event.prototype.getBombPlantStarted = function() {
  return /** @type{?proto.bragi.CS2BombPlantStarted} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2BombPlantStarted, 21));
};


/**
 * @param {?proto.bragi.CS2BombPlantStarted|undefined} value
 * @return {!proto.bragi.CS2Event} returns this
*/
proto.bragi.CS2Event.prototype.setBombPlantStarted = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.bragi.CS2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2Event} returns this
 */
proto.bragi.CS2Event.prototype.clearBombPlantStarted = function() {
  return this.setBombPlantStarted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2Event.prototype.hasBombPlantStarted = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional CS2BombPlanted bomb_planted = 4;
 * @return {?proto.bragi.CS2BombPlanted}
 */
proto.bragi.CS2Event.prototype.getBombPlanted = function() {
  return /** @type{?proto.bragi.CS2BombPlanted} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2BombPlanted, 4));
};


/**
 * @param {?proto.bragi.CS2BombPlanted|undefined} value
 * @return {!proto.bragi.CS2Event} returns this
*/
proto.bragi.CS2Event.prototype.setBombPlanted = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.bragi.CS2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2Event} returns this
 */
proto.bragi.CS2Event.prototype.clearBombPlanted = function() {
  return this.setBombPlanted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2Event.prototype.hasBombPlanted = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CS2DamageDealt damage_dealt = 5;
 * @return {?proto.bragi.CS2DamageDealt}
 */
proto.bragi.CS2Event.prototype.getDamageDealt = function() {
  return /** @type{?proto.bragi.CS2DamageDealt} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2DamageDealt, 5));
};


/**
 * @param {?proto.bragi.CS2DamageDealt|undefined} value
 * @return {!proto.bragi.CS2Event} returns this
*/
proto.bragi.CS2Event.prototype.setDamageDealt = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.bragi.CS2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2Event} returns this
 */
proto.bragi.CS2Event.prototype.clearDamageDealt = function() {
  return this.setDamageDealt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2Event.prototype.hasDamageDealt = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional CS2FreezeTimeEnded freeze_time_ended = 6;
 * @return {?proto.bragi.CS2FreezeTimeEnded}
 */
proto.bragi.CS2Event.prototype.getFreezeTimeEnded = function() {
  return /** @type{?proto.bragi.CS2FreezeTimeEnded} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2FreezeTimeEnded, 6));
};


/**
 * @param {?proto.bragi.CS2FreezeTimeEnded|undefined} value
 * @return {!proto.bragi.CS2Event} returns this
*/
proto.bragi.CS2Event.prototype.setFreezeTimeEnded = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.bragi.CS2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2Event} returns this
 */
proto.bragi.CS2Event.prototype.clearFreezeTimeEnded = function() {
  return this.setFreezeTimeEnded(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2Event.prototype.hasFreezeTimeEnded = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional CS2FreezeTimeStarted freeze_time_started = 7;
 * @return {?proto.bragi.CS2FreezeTimeStarted}
 */
proto.bragi.CS2Event.prototype.getFreezeTimeStarted = function() {
  return /** @type{?proto.bragi.CS2FreezeTimeStarted} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2FreezeTimeStarted, 7));
};


/**
 * @param {?proto.bragi.CS2FreezeTimeStarted|undefined} value
 * @return {!proto.bragi.CS2Event} returns this
*/
proto.bragi.CS2Event.prototype.setFreezeTimeStarted = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.bragi.CS2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2Event} returns this
 */
proto.bragi.CS2Event.prototype.clearFreezeTimeStarted = function() {
  return this.setFreezeTimeStarted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2Event.prototype.hasFreezeTimeStarted = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional CS2ItemDrop item_drop = 8;
 * @return {?proto.bragi.CS2ItemDrop}
 */
proto.bragi.CS2Event.prototype.getItemDrop = function() {
  return /** @type{?proto.bragi.CS2ItemDrop} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2ItemDrop, 8));
};


/**
 * @param {?proto.bragi.CS2ItemDrop|undefined} value
 * @return {!proto.bragi.CS2Event} returns this
*/
proto.bragi.CS2Event.prototype.setItemDrop = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.bragi.CS2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2Event} returns this
 */
proto.bragi.CS2Event.prototype.clearItemDrop = function() {
  return this.setItemDrop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2Event.prototype.hasItemDrop = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional CS2ItemPickUp item_pick_up = 9;
 * @return {?proto.bragi.CS2ItemPickUp}
 */
proto.bragi.CS2Event.prototype.getItemPickUp = function() {
  return /** @type{?proto.bragi.CS2ItemPickUp} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2ItemPickUp, 9));
};


/**
 * @param {?proto.bragi.CS2ItemPickUp|undefined} value
 * @return {!proto.bragi.CS2Event} returns this
*/
proto.bragi.CS2Event.prototype.setItemPickUp = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.bragi.CS2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2Event} returns this
 */
proto.bragi.CS2Event.prototype.clearItemPickUp = function() {
  return this.setItemPickUp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2Event.prototype.hasItemPickUp = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional CS2ItemPurchase item_purchase = 10;
 * @return {?proto.bragi.CS2ItemPurchase}
 */
proto.bragi.CS2Event.prototype.getItemPurchase = function() {
  return /** @type{?proto.bragi.CS2ItemPurchase} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2ItemPurchase, 10));
};


/**
 * @param {?proto.bragi.CS2ItemPurchase|undefined} value
 * @return {!proto.bragi.CS2Event} returns this
*/
proto.bragi.CS2Event.prototype.setItemPurchase = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.bragi.CS2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2Event} returns this
 */
proto.bragi.CS2Event.prototype.clearItemPurchase = function() {
  return this.setItemPurchase(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2Event.prototype.hasItemPurchase = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional CS2ItemThrow item_throw = 11;
 * @return {?proto.bragi.CS2ItemThrow}
 */
proto.bragi.CS2Event.prototype.getItemThrow = function() {
  return /** @type{?proto.bragi.CS2ItemThrow} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2ItemThrow, 11));
};


/**
 * @param {?proto.bragi.CS2ItemThrow|undefined} value
 * @return {!proto.bragi.CS2Event} returns this
*/
proto.bragi.CS2Event.prototype.setItemThrow = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.bragi.CS2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2Event} returns this
 */
proto.bragi.CS2Event.prototype.clearItemThrow = function() {
  return this.setItemThrow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2Event.prototype.hasItemThrow = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional CS2Kill kill = 12;
 * @return {?proto.bragi.CS2Kill}
 */
proto.bragi.CS2Event.prototype.getKill = function() {
  return /** @type{?proto.bragi.CS2Kill} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2Kill, 12));
};


/**
 * @param {?proto.bragi.CS2Kill|undefined} value
 * @return {!proto.bragi.CS2Event} returns this
*/
proto.bragi.CS2Event.prototype.setKill = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.bragi.CS2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2Event} returns this
 */
proto.bragi.CS2Event.prototype.clearKill = function() {
  return this.setKill(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2Event.prototype.hasKill = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional CS2Death death = 13;
 * @return {?proto.bragi.CS2Death}
 */
proto.bragi.CS2Event.prototype.getDeath = function() {
  return /** @type{?proto.bragi.CS2Death} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2Death, 13));
};


/**
 * @param {?proto.bragi.CS2Death|undefined} value
 * @return {!proto.bragi.CS2Event} returns this
*/
proto.bragi.CS2Event.prototype.setDeath = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.bragi.CS2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2Event} returns this
 */
proto.bragi.CS2Event.prototype.clearDeath = function() {
  return this.setDeath(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2Event.prototype.hasDeath = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional CS2MapEnd map_end = 14;
 * @return {?proto.bragi.CS2MapEnd}
 */
proto.bragi.CS2Event.prototype.getMapEnd = function() {
  return /** @type{?proto.bragi.CS2MapEnd} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2MapEnd, 14));
};


/**
 * @param {?proto.bragi.CS2MapEnd|undefined} value
 * @return {!proto.bragi.CS2Event} returns this
*/
proto.bragi.CS2Event.prototype.setMapEnd = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.bragi.CS2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2Event} returns this
 */
proto.bragi.CS2Event.prototype.clearMapEnd = function() {
  return this.setMapEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2Event.prototype.hasMapEnd = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional CS2MapStart map_start = 15;
 * @return {?proto.bragi.CS2MapStart}
 */
proto.bragi.CS2Event.prototype.getMapStart = function() {
  return /** @type{?proto.bragi.CS2MapStart} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2MapStart, 15));
};


/**
 * @param {?proto.bragi.CS2MapStart|undefined} value
 * @return {!proto.bragi.CS2Event} returns this
*/
proto.bragi.CS2Event.prototype.setMapStart = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.bragi.CS2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2Event} returns this
 */
proto.bragi.CS2Event.prototype.clearMapStart = function() {
  return this.setMapStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2Event.prototype.hasMapStart = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional CS2RoundEnd round_end = 16;
 * @return {?proto.bragi.CS2RoundEnd}
 */
proto.bragi.CS2Event.prototype.getRoundEnd = function() {
  return /** @type{?proto.bragi.CS2RoundEnd} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2RoundEnd, 16));
};


/**
 * @param {?proto.bragi.CS2RoundEnd|undefined} value
 * @return {!proto.bragi.CS2Event} returns this
*/
proto.bragi.CS2Event.prototype.setRoundEnd = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.bragi.CS2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2Event} returns this
 */
proto.bragi.CS2Event.prototype.clearRoundEnd = function() {
  return this.setRoundEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2Event.prototype.hasRoundEnd = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional CS2RoundPause round_pause = 17;
 * @return {?proto.bragi.CS2RoundPause}
 */
proto.bragi.CS2Event.prototype.getRoundPause = function() {
  return /** @type{?proto.bragi.CS2RoundPause} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2RoundPause, 17));
};


/**
 * @param {?proto.bragi.CS2RoundPause|undefined} value
 * @return {!proto.bragi.CS2Event} returns this
*/
proto.bragi.CS2Event.prototype.setRoundPause = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.bragi.CS2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2Event} returns this
 */
proto.bragi.CS2Event.prototype.clearRoundPause = function() {
  return this.setRoundPause(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2Event.prototype.hasRoundPause = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional CS2RoundResume round_resume = 18;
 * @return {?proto.bragi.CS2RoundResume}
 */
proto.bragi.CS2Event.prototype.getRoundResume = function() {
  return /** @type{?proto.bragi.CS2RoundResume} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2RoundResume, 18));
};


/**
 * @param {?proto.bragi.CS2RoundResume|undefined} value
 * @return {!proto.bragi.CS2Event} returns this
*/
proto.bragi.CS2Event.prototype.setRoundResume = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.bragi.CS2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2Event} returns this
 */
proto.bragi.CS2Event.prototype.clearRoundResume = function() {
  return this.setRoundResume(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2Event.prototype.hasRoundResume = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional CS2RoundRollback round_rollback = 19;
 * @return {?proto.bragi.CS2RoundRollback}
 */
proto.bragi.CS2Event.prototype.getRoundRollback = function() {
  return /** @type{?proto.bragi.CS2RoundRollback} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2RoundRollback, 19));
};


/**
 * @param {?proto.bragi.CS2RoundRollback|undefined} value
 * @return {!proto.bragi.CS2Event} returns this
*/
proto.bragi.CS2Event.prototype.setRoundRollback = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.bragi.CS2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2Event} returns this
 */
proto.bragi.CS2Event.prototype.clearRoundRollback = function() {
  return this.setRoundRollback(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2Event.prototype.hasRoundRollback = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional CS2RoundStart round_start = 20;
 * @return {?proto.bragi.CS2RoundStart}
 */
proto.bragi.CS2Event.prototype.getRoundStart = function() {
  return /** @type{?proto.bragi.CS2RoundStart} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2RoundStart, 20));
};


/**
 * @param {?proto.bragi.CS2RoundStart|undefined} value
 * @return {!proto.bragi.CS2Event} returns this
*/
proto.bragi.CS2Event.prototype.setRoundStart = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.bragi.CS2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2Event} returns this
 */
proto.bragi.CS2Event.prototype.clearRoundStart = function() {
  return this.setRoundStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2Event.prototype.hasRoundStart = function() {
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
proto.bragi.CS2PlayerBalance.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2PlayerBalance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2PlayerBalance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2PlayerBalance.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bragi.CS2PlayerBalance}
 */
proto.bragi.CS2PlayerBalance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2PlayerBalance;
  return proto.bragi.CS2PlayerBalance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2PlayerBalance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2PlayerBalance}
 */
proto.bragi.CS2PlayerBalance.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bragi.CS2PlayerBalance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2PlayerBalance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2PlayerBalance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2PlayerBalance.serializeBinaryToWriter = function(message, writer) {
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
proto.bragi.CS2PlayerBalance.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2PlayerBalance} returns this
 */
proto.bragi.CS2PlayerBalance.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string team_urn = 2;
 * @return {string}
 */
proto.bragi.CS2PlayerBalance.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2PlayerBalance} returns this
 */
proto.bragi.CS2PlayerBalance.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 balance = 3;
 * @return {number}
 */
proto.bragi.CS2PlayerBalance.prototype.getBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2PlayerBalance} returns this
 */
proto.bragi.CS2PlayerBalance.prototype.setBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.CS2PlayerItems.repeatedFields_ = [4];



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
proto.bragi.CS2PlayerItems.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2PlayerItems.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2PlayerItems} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2PlayerItems.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    teamUrn: jspb.Message.getFieldWithDefault(msg, 2, ""),
    equipmentValue: jspb.Message.getFieldWithDefault(msg, 3, 0),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.bragi.CS2Item.toObject, includeInstance)
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
 * @return {!proto.bragi.CS2PlayerItems}
 */
proto.bragi.CS2PlayerItems.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2PlayerItems;
  return proto.bragi.CS2PlayerItems.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2PlayerItems} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2PlayerItems}
 */
proto.bragi.CS2PlayerItems.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setEquipmentValue(value);
      break;
    case 4:
      var value = new proto.bragi.CS2Item;
      reader.readMessage(value,proto.bragi.CS2Item.deserializeBinaryFromReader);
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
proto.bragi.CS2PlayerItems.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2PlayerItems.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2PlayerItems} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2PlayerItems.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getEquipmentValue();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.bragi.CS2Item.serializeBinaryToWriter
    );
  }
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.CS2PlayerItems.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2PlayerItems} returns this
 */
proto.bragi.CS2PlayerItems.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string team_urn = 2;
 * @return {string}
 */
proto.bragi.CS2PlayerItems.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2PlayerItems} returns this
 */
proto.bragi.CS2PlayerItems.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 equipment_value = 3;
 * @return {number}
 */
proto.bragi.CS2PlayerItems.prototype.getEquipmentValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2PlayerItems} returns this
 */
proto.bragi.CS2PlayerItems.prototype.setEquipmentValue = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated CS2Item items = 4;
 * @return {!Array<!proto.bragi.CS2Item>}
 */
proto.bragi.CS2PlayerItems.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.bragi.CS2Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.CS2Item, 4));
};


/**
 * @param {!Array<!proto.bragi.CS2Item>} value
 * @return {!proto.bragi.CS2PlayerItems} returns this
*/
proto.bragi.CS2PlayerItems.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.bragi.CS2Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.CS2Item}
 */
proto.bragi.CS2PlayerItems.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.bragi.CS2Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CS2PlayerItems} returns this
 */
proto.bragi.CS2PlayerItems.prototype.clearItemsList = function() {
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
proto.bragi.CS2BombDefuseStarted.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2BombDefuseStarted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2BombDefuseStarted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2BombDefuseStarted.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bragi.CS2BombDefuseStarted}
 */
proto.bragi.CS2BombDefuseStarted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2BombDefuseStarted;
  return proto.bragi.CS2BombDefuseStarted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2BombDefuseStarted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2BombDefuseStarted}
 */
proto.bragi.CS2BombDefuseStarted.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bragi.CS2BombDefuseStarted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2BombDefuseStarted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2BombDefuseStarted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2BombDefuseStarted.serializeBinaryToWriter = function(message, writer) {
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
proto.bragi.CS2BombDefuseStarted.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2BombDefuseStarted} returns this
*/
proto.bragi.CS2BombDefuseStarted.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2BombDefuseStarted} returns this
 */
proto.bragi.CS2BombDefuseStarted.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2BombDefuseStarted.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CS2BombDefuseStarted.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2BombDefuseStarted} returns this
*/
proto.bragi.CS2BombDefuseStarted.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2BombDefuseStarted} returns this
 */
proto.bragi.CS2BombDefuseStarted.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2BombDefuseStarted.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CS2BombDefuseStarted.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2BombDefuseStarted} returns this
 */
proto.bragi.CS2BombDefuseStarted.prototype.setCurrentRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string player_urn = 4;
 * @return {string}
 */
proto.bragi.CS2BombDefuseStarted.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2BombDefuseStarted} returns this
 */
proto.bragi.CS2BombDefuseStarted.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string team_urn = 5;
 * @return {string}
 */
proto.bragi.CS2BombDefuseStarted.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2BombDefuseStarted} returns this
 */
proto.bragi.CS2BombDefuseStarted.prototype.setTeamUrn = function(value) {
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
proto.bragi.CS2BombDefused.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2BombDefused.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2BombDefused} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2BombDefused.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bragi.CS2BombDefused}
 */
proto.bragi.CS2BombDefused.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2BombDefused;
  return proto.bragi.CS2BombDefused.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2BombDefused} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2BombDefused}
 */
proto.bragi.CS2BombDefused.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bragi.CS2BombDefused.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2BombDefused.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2BombDefused} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2BombDefused.serializeBinaryToWriter = function(message, writer) {
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
proto.bragi.CS2BombDefused.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2BombDefused} returns this
*/
proto.bragi.CS2BombDefused.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2BombDefused} returns this
 */
proto.bragi.CS2BombDefused.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2BombDefused.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CS2BombDefused.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2BombDefused} returns this
*/
proto.bragi.CS2BombDefused.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2BombDefused} returns this
 */
proto.bragi.CS2BombDefused.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2BombDefused.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CS2BombDefused.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2BombDefused} returns this
 */
proto.bragi.CS2BombDefused.prototype.setCurrentRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string player_urn = 4;
 * @return {string}
 */
proto.bragi.CS2BombDefused.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2BombDefused} returns this
 */
proto.bragi.CS2BombDefused.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string team_urn = 5;
 * @return {string}
 */
proto.bragi.CS2BombDefused.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2BombDefused} returns this
 */
proto.bragi.CS2BombDefused.prototype.setTeamUrn = function(value) {
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
proto.bragi.CS2BombExploded.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2BombExploded.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2BombExploded} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2BombExploded.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bragi.CS2BombExploded}
 */
proto.bragi.CS2BombExploded.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2BombExploded;
  return proto.bragi.CS2BombExploded.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2BombExploded} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2BombExploded}
 */
proto.bragi.CS2BombExploded.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bragi.CS2BombExploded.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2BombExploded.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2BombExploded} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2BombExploded.serializeBinaryToWriter = function(message, writer) {
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
proto.bragi.CS2BombExploded.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2BombExploded} returns this
*/
proto.bragi.CS2BombExploded.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2BombExploded} returns this
 */
proto.bragi.CS2BombExploded.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2BombExploded.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CS2BombExploded.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2BombExploded} returns this
*/
proto.bragi.CS2BombExploded.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2BombExploded} returns this
 */
proto.bragi.CS2BombExploded.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2BombExploded.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CS2BombExploded.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2BombExploded} returns this
 */
proto.bragi.CS2BombExploded.prototype.setCurrentRoundNumber = function(value) {
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
proto.bragi.CS2BombPlantStarted.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2BombPlantStarted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2BombPlantStarted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2BombPlantStarted.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bragi.CS2BombPlantStarted}
 */
proto.bragi.CS2BombPlantStarted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2BombPlantStarted;
  return proto.bragi.CS2BombPlantStarted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2BombPlantStarted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2BombPlantStarted}
 */
proto.bragi.CS2BombPlantStarted.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bragi.CS2BombPlantStarted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2BombPlantStarted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2BombPlantStarted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2BombPlantStarted.serializeBinaryToWriter = function(message, writer) {
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
proto.bragi.CS2BombPlantStarted.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2BombPlantStarted} returns this
*/
proto.bragi.CS2BombPlantStarted.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2BombPlantStarted} returns this
 */
proto.bragi.CS2BombPlantStarted.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2BombPlantStarted.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CS2BombPlantStarted.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2BombPlantStarted} returns this
*/
proto.bragi.CS2BombPlantStarted.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2BombPlantStarted} returns this
 */
proto.bragi.CS2BombPlantStarted.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2BombPlantStarted.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CS2BombPlantStarted.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2BombPlantStarted} returns this
 */
proto.bragi.CS2BombPlantStarted.prototype.setCurrentRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string player_urn = 4;
 * @return {string}
 */
proto.bragi.CS2BombPlantStarted.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2BombPlantStarted} returns this
 */
proto.bragi.CS2BombPlantStarted.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string team_urn = 5;
 * @return {string}
 */
proto.bragi.CS2BombPlantStarted.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2BombPlantStarted} returns this
 */
proto.bragi.CS2BombPlantStarted.prototype.setTeamUrn = function(value) {
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
proto.bragi.CS2BombPlanted.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2BombPlanted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2BombPlanted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2BombPlanted.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bragi.CS2BombPlanted}
 */
proto.bragi.CS2BombPlanted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2BombPlanted;
  return proto.bragi.CS2BombPlanted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2BombPlanted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2BombPlanted}
 */
proto.bragi.CS2BombPlanted.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bragi.CS2BombPlanted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2BombPlanted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2BombPlanted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2BombPlanted.serializeBinaryToWriter = function(message, writer) {
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
proto.bragi.CS2BombPlanted.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2BombPlanted} returns this
*/
proto.bragi.CS2BombPlanted.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2BombPlanted} returns this
 */
proto.bragi.CS2BombPlanted.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2BombPlanted.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CS2BombPlanted.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2BombPlanted} returns this
*/
proto.bragi.CS2BombPlanted.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2BombPlanted} returns this
 */
proto.bragi.CS2BombPlanted.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2BombPlanted.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CS2BombPlanted.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2BombPlanted} returns this
 */
proto.bragi.CS2BombPlanted.prototype.setCurrentRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string player_urn = 4;
 * @return {string}
 */
proto.bragi.CS2BombPlanted.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2BombPlanted} returns this
 */
proto.bragi.CS2BombPlanted.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string team_urn = 5;
 * @return {string}
 */
proto.bragi.CS2BombPlanted.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2BombPlanted} returns this
 */
proto.bragi.CS2BombPlanted.prototype.setTeamUrn = function(value) {
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
proto.bragi.CS2DamageDealt.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2DamageDealt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2DamageDealt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2DamageDealt.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapTime: (f = msg.getMapTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    timeRemaining: (f = msg.getTimeRemaining()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    currentRoundNumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    killerPosition: (f = msg.getKillerPosition()) && proto.bragi.CS2Position.toObject(includeInstance, f),
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
    victimPosition: (f = msg.getVictimPosition()) && proto.bragi.CS2Position.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CS2DamageDealt}
 */
proto.bragi.CS2DamageDealt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2DamageDealt;
  return proto.bragi.CS2DamageDealt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2DamageDealt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2DamageDealt}
 */
proto.bragi.CS2DamageDealt.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.CS2Position;
      reader.readMessage(value,proto.bragi.CS2Position.deserializeBinaryFromReader);
      msg.setKillerPosition(value);
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
      var value = new proto.bragi.CS2Position;
      reader.readMessage(value,proto.bragi.CS2Position.deserializeBinaryFromReader);
      msg.setVictimPosition(value);
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
proto.bragi.CS2DamageDealt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2DamageDealt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2DamageDealt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2DamageDealt.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getKillerPosition();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.CS2Position.serializeBinaryToWriter
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
  f = message.getVictimPosition();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.bragi.CS2Position.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Duration map_time = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CS2DamageDealt.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2DamageDealt} returns this
*/
proto.bragi.CS2DamageDealt.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2DamageDealt} returns this
 */
proto.bragi.CS2DamageDealt.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2DamageDealt.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CS2DamageDealt.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2DamageDealt} returns this
*/
proto.bragi.CS2DamageDealt.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2DamageDealt} returns this
 */
proto.bragi.CS2DamageDealt.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2DamageDealt.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CS2DamageDealt.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2DamageDealt} returns this
 */
proto.bragi.CS2DamageDealt.prototype.setCurrentRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional CS2Position killer_position = 4;
 * @return {?proto.bragi.CS2Position}
 */
proto.bragi.CS2DamageDealt.prototype.getKillerPosition = function() {
  return /** @type{?proto.bragi.CS2Position} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2Position, 4));
};


/**
 * @param {?proto.bragi.CS2Position|undefined} value
 * @return {!proto.bragi.CS2DamageDealt} returns this
*/
proto.bragi.CS2DamageDealt.prototype.setKillerPosition = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2DamageDealt} returns this
 */
proto.bragi.CS2DamageDealt.prototype.clearKillerPosition = function() {
  return this.setKillerPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2DamageDealt.prototype.hasKillerPosition = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string killer_urn = 5;
 * @return {string}
 */
proto.bragi.CS2DamageDealt.prototype.getKillerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2DamageDealt} returns this
 */
proto.bragi.CS2DamageDealt.prototype.setKillerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string killer_team_urn = 6;
 * @return {string}
 */
proto.bragi.CS2DamageDealt.prototype.getKillerTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2DamageDealt} returns this
 */
proto.bragi.CS2DamageDealt.prototype.setKillerTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string victim_urn = 7;
 * @return {string}
 */
proto.bragi.CS2DamageDealt.prototype.getVictimUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2DamageDealt} returns this
 */
proto.bragi.CS2DamageDealt.prototype.setVictimUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string victim_team_urn = 8;
 * @return {string}
 */
proto.bragi.CS2DamageDealt.prototype.getVictimTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2DamageDealt} returns this
 */
proto.bragi.CS2DamageDealt.prototype.setVictimTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string weapon = 9;
 * @return {string}
 */
proto.bragi.CS2DamageDealt.prototype.getWeapon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2DamageDealt} returns this
 */
proto.bragi.CS2DamageDealt.prototype.setWeapon = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string hitgroup = 10;
 * @return {string}
 */
proto.bragi.CS2DamageDealt.prototype.getHitgroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2DamageDealt} returns this
 */
proto.bragi.CS2DamageDealt.prototype.setHitgroup = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional uint32 health_deducted = 11;
 * @return {number}
 */
proto.bragi.CS2DamageDealt.prototype.getHealthDeducted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2DamageDealt} returns this
 */
proto.bragi.CS2DamageDealt.prototype.setHealthDeducted = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional uint32 health_remaining = 12;
 * @return {number}
 */
proto.bragi.CS2DamageDealt.prototype.getHealthRemaining = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2DamageDealt} returns this
 */
proto.bragi.CS2DamageDealt.prototype.setHealthRemaining = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional uint32 armor_deducted = 13;
 * @return {number}
 */
proto.bragi.CS2DamageDealt.prototype.getArmorDeducted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2DamageDealt} returns this
 */
proto.bragi.CS2DamageDealt.prototype.setArmorDeducted = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional uint32 armor_remaining = 14;
 * @return {number}
 */
proto.bragi.CS2DamageDealt.prototype.getArmorRemaining = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2DamageDealt} returns this
 */
proto.bragi.CS2DamageDealt.prototype.setArmorRemaining = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional CS2Position victim_position = 15;
 * @return {?proto.bragi.CS2Position}
 */
proto.bragi.CS2DamageDealt.prototype.getVictimPosition = function() {
  return /** @type{?proto.bragi.CS2Position} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2Position, 15));
};


/**
 * @param {?proto.bragi.CS2Position|undefined} value
 * @return {!proto.bragi.CS2DamageDealt} returns this
*/
proto.bragi.CS2DamageDealt.prototype.setVictimPosition = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2DamageDealt} returns this
 */
proto.bragi.CS2DamageDealt.prototype.clearVictimPosition = function() {
  return this.setVictimPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2DamageDealt.prototype.hasVictimPosition = function() {
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
proto.bragi.CS2FreezeTimeEnded.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2FreezeTimeEnded.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2FreezeTimeEnded} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2FreezeTimeEnded.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapTime: (f = msg.getMapTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    timeRemaining: (f = msg.getTimeRemaining()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    currentRoundNumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    playerBalancesMap: (f = msg.getPlayerBalancesMap()) ? f.toObject(includeInstance, proto.bragi.CS2PlayerBalance.toObject) : [],
    playerInventoriesMap: (f = msg.getPlayerInventoriesMap()) ? f.toObject(includeInstance, proto.bragi.CS2PlayerItems.toObject) : []
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
 * @return {!proto.bragi.CS2FreezeTimeEnded}
 */
proto.bragi.CS2FreezeTimeEnded.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2FreezeTimeEnded;
  return proto.bragi.CS2FreezeTimeEnded.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2FreezeTimeEnded} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2FreezeTimeEnded}
 */
proto.bragi.CS2FreezeTimeEnded.deserializeBinaryFromReader = function(msg, reader) {
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
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bragi.CS2PlayerBalance.deserializeBinaryFromReader, "", new proto.bragi.CS2PlayerBalance());
         });
      break;
    case 5:
      var value = msg.getPlayerInventoriesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bragi.CS2PlayerItems.deserializeBinaryFromReader, "", new proto.bragi.CS2PlayerItems());
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
proto.bragi.CS2FreezeTimeEnded.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2FreezeTimeEnded.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2FreezeTimeEnded} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2FreezeTimeEnded.serializeBinaryToWriter = function(message, writer) {
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
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bragi.CS2PlayerBalance.serializeBinaryToWriter);
  }
  f = message.getPlayerInventoriesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bragi.CS2PlayerItems.serializeBinaryToWriter);
  }
};


/**
 * optional google.protobuf.Duration map_time = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CS2FreezeTimeEnded.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2FreezeTimeEnded} returns this
*/
proto.bragi.CS2FreezeTimeEnded.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2FreezeTimeEnded} returns this
 */
proto.bragi.CS2FreezeTimeEnded.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2FreezeTimeEnded.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CS2FreezeTimeEnded.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2FreezeTimeEnded} returns this
*/
proto.bragi.CS2FreezeTimeEnded.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2FreezeTimeEnded} returns this
 */
proto.bragi.CS2FreezeTimeEnded.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2FreezeTimeEnded.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CS2FreezeTimeEnded.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2FreezeTimeEnded} returns this
 */
proto.bragi.CS2FreezeTimeEnded.prototype.setCurrentRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * map<string, CS2PlayerBalance> player_balances = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bragi.CS2PlayerBalance>}
 */
proto.bragi.CS2FreezeTimeEnded.prototype.getPlayerBalancesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bragi.CS2PlayerBalance>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.bragi.CS2PlayerBalance));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bragi.CS2FreezeTimeEnded} returns this
 */
proto.bragi.CS2FreezeTimeEnded.prototype.clearPlayerBalancesMap = function() {
  this.getPlayerBalancesMap().clear();
  return this;};


/**
 * map<string, CS2PlayerItems> player_inventories = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bragi.CS2PlayerItems>}
 */
proto.bragi.CS2FreezeTimeEnded.prototype.getPlayerInventoriesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bragi.CS2PlayerItems>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      proto.bragi.CS2PlayerItems));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bragi.CS2FreezeTimeEnded} returns this
 */
proto.bragi.CS2FreezeTimeEnded.prototype.clearPlayerInventoriesMap = function() {
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
proto.bragi.CS2FreezeTimeStarted.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2FreezeTimeStarted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2FreezeTimeStarted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2FreezeTimeStarted.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapTime: (f = msg.getMapTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    timeRemaining: (f = msg.getTimeRemaining()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    currentRoundNumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    playerBalancesMap: (f = msg.getPlayerBalancesMap()) ? f.toObject(includeInstance, proto.bragi.CS2PlayerBalance.toObject) : [],
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
 * @return {!proto.bragi.CS2FreezeTimeStarted}
 */
proto.bragi.CS2FreezeTimeStarted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2FreezeTimeStarted;
  return proto.bragi.CS2FreezeTimeStarted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2FreezeTimeStarted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2FreezeTimeStarted}
 */
proto.bragi.CS2FreezeTimeStarted.deserializeBinaryFromReader = function(msg, reader) {
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
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bragi.CS2PlayerBalance.deserializeBinaryFromReader, "", new proto.bragi.CS2PlayerBalance());
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
proto.bragi.CS2FreezeTimeStarted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2FreezeTimeStarted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2FreezeTimeStarted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2FreezeTimeStarted.serializeBinaryToWriter = function(message, writer) {
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
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bragi.CS2PlayerBalance.serializeBinaryToWriter);
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
proto.bragi.CS2FreezeTimeStarted.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2FreezeTimeStarted} returns this
*/
proto.bragi.CS2FreezeTimeStarted.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2FreezeTimeStarted} returns this
 */
proto.bragi.CS2FreezeTimeStarted.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2FreezeTimeStarted.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CS2FreezeTimeStarted.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2FreezeTimeStarted} returns this
*/
proto.bragi.CS2FreezeTimeStarted.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2FreezeTimeStarted} returns this
 */
proto.bragi.CS2FreezeTimeStarted.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2FreezeTimeStarted.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CS2FreezeTimeStarted.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2FreezeTimeStarted} returns this
 */
proto.bragi.CS2FreezeTimeStarted.prototype.setCurrentRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * map<string, CS2PlayerBalance> player_balances = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bragi.CS2PlayerBalance>}
 */
proto.bragi.CS2FreezeTimeStarted.prototype.getPlayerBalancesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bragi.CS2PlayerBalance>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.bragi.CS2PlayerBalance));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bragi.CS2FreezeTimeStarted} returns this
 */
proto.bragi.CS2FreezeTimeStarted.prototype.clearPlayerBalancesMap = function() {
  this.getPlayerBalancesMap().clear();
  return this;};


/**
 * map<string, CS2Side> teams_round_info = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bragi.CS2Side>}
 */
proto.bragi.CS2FreezeTimeStarted.prototype.getTeamsRoundInfoMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bragi.CS2Side>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bragi.CS2FreezeTimeStarted} returns this
 */
proto.bragi.CS2FreezeTimeStarted.prototype.clearTeamsRoundInfoMap = function() {
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
proto.bragi.CS2ItemDrop.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2ItemDrop.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2ItemDrop} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2ItemDrop.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapTime: (f = msg.getMapTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    timeRemaining: (f = msg.getTimeRemaining()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    currentRoundNumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    position: (f = msg.getPosition()) && proto.bragi.CS2Position.toObject(includeInstance, f),
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
 * @return {!proto.bragi.CS2ItemDrop}
 */
proto.bragi.CS2ItemDrop.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2ItemDrop;
  return proto.bragi.CS2ItemDrop.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2ItemDrop} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2ItemDrop}
 */
proto.bragi.CS2ItemDrop.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.CS2Position;
      reader.readMessage(value,proto.bragi.CS2Position.deserializeBinaryFromReader);
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
proto.bragi.CS2ItemDrop.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2ItemDrop.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2ItemDrop} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2ItemDrop.serializeBinaryToWriter = function(message, writer) {
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
      proto.bragi.CS2Position.serializeBinaryToWriter
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
proto.bragi.CS2ItemDrop.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2ItemDrop} returns this
*/
proto.bragi.CS2ItemDrop.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2ItemDrop} returns this
 */
proto.bragi.CS2ItemDrop.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2ItemDrop.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CS2ItemDrop.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2ItemDrop} returns this
*/
proto.bragi.CS2ItemDrop.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2ItemDrop} returns this
 */
proto.bragi.CS2ItemDrop.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2ItemDrop.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CS2ItemDrop.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2ItemDrop} returns this
 */
proto.bragi.CS2ItemDrop.prototype.setCurrentRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional CS2Position position = 4;
 * @return {?proto.bragi.CS2Position}
 */
proto.bragi.CS2ItemDrop.prototype.getPosition = function() {
  return /** @type{?proto.bragi.CS2Position} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2Position, 4));
};


/**
 * @param {?proto.bragi.CS2Position|undefined} value
 * @return {!proto.bragi.CS2ItemDrop} returns this
*/
proto.bragi.CS2ItemDrop.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2ItemDrop} returns this
 */
proto.bragi.CS2ItemDrop.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2ItemDrop.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string player_urn = 5;
 * @return {string}
 */
proto.bragi.CS2ItemDrop.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2ItemDrop} returns this
 */
proto.bragi.CS2ItemDrop.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string team_urn = 6;
 * @return {string}
 */
proto.bragi.CS2ItemDrop.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2ItemDrop} returns this
 */
proto.bragi.CS2ItemDrop.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string item = 7;
 * @return {string}
 */
proto.bragi.CS2ItemDrop.prototype.getItem = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2ItemDrop} returns this
 */
proto.bragi.CS2ItemDrop.prototype.setItem = function(value) {
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
proto.bragi.CS2ItemPickUp.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2ItemPickUp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2ItemPickUp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2ItemPickUp.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapTime: (f = msg.getMapTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    timeRemaining: (f = msg.getTimeRemaining()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    currentRoundNumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    playerUrn: jspb.Message.getFieldWithDefault(msg, 4, ""),
    teamUrn: jspb.Message.getFieldWithDefault(msg, 5, ""),
    item: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.bragi.CS2ItemPickUp}
 */
proto.bragi.CS2ItemPickUp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2ItemPickUp;
  return proto.bragi.CS2ItemPickUp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2ItemPickUp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2ItemPickUp}
 */
proto.bragi.CS2ItemPickUp.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bragi.CS2ItemPickUp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2ItemPickUp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2ItemPickUp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2ItemPickUp.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional google.protobuf.Duration map_time = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CS2ItemPickUp.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2ItemPickUp} returns this
*/
proto.bragi.CS2ItemPickUp.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2ItemPickUp} returns this
 */
proto.bragi.CS2ItemPickUp.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2ItemPickUp.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CS2ItemPickUp.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2ItemPickUp} returns this
*/
proto.bragi.CS2ItemPickUp.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2ItemPickUp} returns this
 */
proto.bragi.CS2ItemPickUp.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2ItemPickUp.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CS2ItemPickUp.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2ItemPickUp} returns this
 */
proto.bragi.CS2ItemPickUp.prototype.setCurrentRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string player_urn = 4;
 * @return {string}
 */
proto.bragi.CS2ItemPickUp.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2ItemPickUp} returns this
 */
proto.bragi.CS2ItemPickUp.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string team_urn = 5;
 * @return {string}
 */
proto.bragi.CS2ItemPickUp.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2ItemPickUp} returns this
 */
proto.bragi.CS2ItemPickUp.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string item = 6;
 * @return {string}
 */
proto.bragi.CS2ItemPickUp.prototype.getItem = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2ItemPickUp} returns this
 */
proto.bragi.CS2ItemPickUp.prototype.setItem = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
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
proto.bragi.CS2ItemPurchase.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2ItemPurchase.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2ItemPurchase} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2ItemPurchase.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapTime: (f = msg.getMapTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    timeRemaining: (f = msg.getTimeRemaining()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    currentRoundNumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    playerUrn: jspb.Message.getFieldWithDefault(msg, 4, ""),
    teamUrn: jspb.Message.getFieldWithDefault(msg, 5, ""),
    item: jspb.Message.getFieldWithDefault(msg, 6, ""),
    playerBalance: jspb.Message.getFieldWithDefault(msg, 7, 0),
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
 * @return {!proto.bragi.CS2ItemPurchase}
 */
proto.bragi.CS2ItemPurchase.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2ItemPurchase;
  return proto.bragi.CS2ItemPurchase.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2ItemPurchase} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2ItemPurchase}
 */
proto.bragi.CS2ItemPurchase.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setPlayerBalance(value);
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
proto.bragi.CS2ItemPurchase.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2ItemPurchase.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2ItemPurchase} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2ItemPurchase.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getPlayerBalance();
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
proto.bragi.CS2ItemPurchase.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2ItemPurchase} returns this
*/
proto.bragi.CS2ItemPurchase.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2ItemPurchase} returns this
 */
proto.bragi.CS2ItemPurchase.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2ItemPurchase.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CS2ItemPurchase.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2ItemPurchase} returns this
*/
proto.bragi.CS2ItemPurchase.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2ItemPurchase} returns this
 */
proto.bragi.CS2ItemPurchase.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2ItemPurchase.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CS2ItemPurchase.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2ItemPurchase} returns this
 */
proto.bragi.CS2ItemPurchase.prototype.setCurrentRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string player_urn = 4;
 * @return {string}
 */
proto.bragi.CS2ItemPurchase.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2ItemPurchase} returns this
 */
proto.bragi.CS2ItemPurchase.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string team_urn = 5;
 * @return {string}
 */
proto.bragi.CS2ItemPurchase.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2ItemPurchase} returns this
 */
proto.bragi.CS2ItemPurchase.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string item = 6;
 * @return {string}
 */
proto.bragi.CS2ItemPurchase.prototype.getItem = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2ItemPurchase} returns this
 */
proto.bragi.CS2ItemPurchase.prototype.setItem = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional uint32 player_balance = 7;
 * @return {number}
 */
proto.bragi.CS2ItemPurchase.prototype.getPlayerBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2ItemPurchase} returns this
 */
proto.bragi.CS2ItemPurchase.prototype.setPlayerBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 equipment_value = 8;
 * @return {number}
 */
proto.bragi.CS2ItemPurchase.prototype.getEquipmentValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2ItemPurchase} returns this
 */
proto.bragi.CS2ItemPurchase.prototype.setEquipmentValue = function(value) {
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
proto.bragi.CS2ItemThrow.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2ItemThrow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2ItemThrow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2ItemThrow.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapTime: (f = msg.getMapTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    timeRemaining: (f = msg.getTimeRemaining()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    currentRoundNumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    position: (f = msg.getPosition()) && proto.bragi.CS2Position.toObject(includeInstance, f),
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
 * @return {!proto.bragi.CS2ItemThrow}
 */
proto.bragi.CS2ItemThrow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2ItemThrow;
  return proto.bragi.CS2ItemThrow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2ItemThrow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2ItemThrow}
 */
proto.bragi.CS2ItemThrow.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.CS2Position;
      reader.readMessage(value,proto.bragi.CS2Position.deserializeBinaryFromReader);
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
proto.bragi.CS2ItemThrow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2ItemThrow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2ItemThrow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2ItemThrow.serializeBinaryToWriter = function(message, writer) {
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
      proto.bragi.CS2Position.serializeBinaryToWriter
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
proto.bragi.CS2ItemThrow.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2ItemThrow} returns this
*/
proto.bragi.CS2ItemThrow.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2ItemThrow} returns this
 */
proto.bragi.CS2ItemThrow.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2ItemThrow.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CS2ItemThrow.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2ItemThrow} returns this
*/
proto.bragi.CS2ItemThrow.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2ItemThrow} returns this
 */
proto.bragi.CS2ItemThrow.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2ItemThrow.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CS2ItemThrow.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2ItemThrow} returns this
 */
proto.bragi.CS2ItemThrow.prototype.setCurrentRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional CS2Position position = 4;
 * @return {?proto.bragi.CS2Position}
 */
proto.bragi.CS2ItemThrow.prototype.getPosition = function() {
  return /** @type{?proto.bragi.CS2Position} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2Position, 4));
};


/**
 * @param {?proto.bragi.CS2Position|undefined} value
 * @return {!proto.bragi.CS2ItemThrow} returns this
*/
proto.bragi.CS2ItemThrow.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2ItemThrow} returns this
 */
proto.bragi.CS2ItemThrow.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2ItemThrow.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string player_urn = 5;
 * @return {string}
 */
proto.bragi.CS2ItemThrow.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2ItemThrow} returns this
 */
proto.bragi.CS2ItemThrow.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string team_urn = 6;
 * @return {string}
 */
proto.bragi.CS2ItemThrow.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2ItemThrow} returns this
 */
proto.bragi.CS2ItemThrow.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string item = 7;
 * @return {string}
 */
proto.bragi.CS2ItemThrow.prototype.getItem = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2ItemThrow} returns this
 */
proto.bragi.CS2ItemThrow.prototype.setItem = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.CS2Kill.repeatedFields_ = [12];



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
proto.bragi.CS2Kill.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2Kill.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2Kill} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2Kill.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapTime: (f = msg.getMapTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    timeRemaining: (f = msg.getTimeRemaining()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    currentRoundNumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    killerPosition: (f = msg.getKillerPosition()) && proto.bragi.CS2Position.toObject(includeInstance, f),
    killerUrn: jspb.Message.getFieldWithDefault(msg, 5, ""),
    killerTeamUrn: jspb.Message.getFieldWithDefault(msg, 6, ""),
    victimUrn: jspb.Message.getFieldWithDefault(msg, 7, ""),
    victimTeamUrn: jspb.Message.getFieldWithDefault(msg, 8, ""),
    weapon: jspb.Message.getFieldWithDefault(msg, 9, ""),
    headshot: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    penetrated: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    assistantsList: (f = jspb.Message.getRepeatedField(msg, 12)) == null ? undefined : f
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
 * @return {!proto.bragi.CS2Kill}
 */
proto.bragi.CS2Kill.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2Kill;
  return proto.bragi.CS2Kill.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2Kill} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2Kill}
 */
proto.bragi.CS2Kill.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.CS2Position;
      reader.readMessage(value,proto.bragi.CS2Position.deserializeBinaryFromReader);
      msg.setKillerPosition(value);
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
proto.bragi.CS2Kill.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2Kill.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2Kill} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2Kill.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getKillerPosition();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.CS2Position.serializeBinaryToWriter
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
};


/**
 * optional google.protobuf.Duration map_time = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CS2Kill.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2Kill} returns this
*/
proto.bragi.CS2Kill.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2Kill} returns this
 */
proto.bragi.CS2Kill.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2Kill.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CS2Kill.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2Kill} returns this
*/
proto.bragi.CS2Kill.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2Kill} returns this
 */
proto.bragi.CS2Kill.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2Kill.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CS2Kill.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2Kill} returns this
 */
proto.bragi.CS2Kill.prototype.setCurrentRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional CS2Position killer_position = 4;
 * @return {?proto.bragi.CS2Position}
 */
proto.bragi.CS2Kill.prototype.getKillerPosition = function() {
  return /** @type{?proto.bragi.CS2Position} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2Position, 4));
};


/**
 * @param {?proto.bragi.CS2Position|undefined} value
 * @return {!proto.bragi.CS2Kill} returns this
*/
proto.bragi.CS2Kill.prototype.setKillerPosition = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2Kill} returns this
 */
proto.bragi.CS2Kill.prototype.clearKillerPosition = function() {
  return this.setKillerPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2Kill.prototype.hasKillerPosition = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string killer_urn = 5;
 * @return {string}
 */
proto.bragi.CS2Kill.prototype.getKillerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2Kill} returns this
 */
proto.bragi.CS2Kill.prototype.setKillerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string killer_team_urn = 6;
 * @return {string}
 */
proto.bragi.CS2Kill.prototype.getKillerTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2Kill} returns this
 */
proto.bragi.CS2Kill.prototype.setKillerTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string victim_urn = 7;
 * @return {string}
 */
proto.bragi.CS2Kill.prototype.getVictimUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2Kill} returns this
 */
proto.bragi.CS2Kill.prototype.setVictimUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string victim_team_urn = 8;
 * @return {string}
 */
proto.bragi.CS2Kill.prototype.getVictimTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2Kill} returns this
 */
proto.bragi.CS2Kill.prototype.setVictimTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string weapon = 9;
 * @return {string}
 */
proto.bragi.CS2Kill.prototype.getWeapon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2Kill} returns this
 */
proto.bragi.CS2Kill.prototype.setWeapon = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional bool headshot = 10;
 * @return {boolean}
 */
proto.bragi.CS2Kill.prototype.getHeadshot = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.CS2Kill} returns this
 */
proto.bragi.CS2Kill.prototype.setHeadshot = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool penetrated = 11;
 * @return {boolean}
 */
proto.bragi.CS2Kill.prototype.getPenetrated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.CS2Kill} returns this
 */
proto.bragi.CS2Kill.prototype.setPenetrated = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * repeated string assistants = 12;
 * @return {!Array<string>}
 */
proto.bragi.CS2Kill.prototype.getAssistantsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 12));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bragi.CS2Kill} returns this
 */
proto.bragi.CS2Kill.prototype.setAssistantsList = function(value) {
  return jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bragi.CS2Kill} returns this
 */
proto.bragi.CS2Kill.prototype.addAssistants = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CS2Kill} returns this
 */
proto.bragi.CS2Kill.prototype.clearAssistantsList = function() {
  return this.setAssistantsList([]);
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
proto.bragi.CS2Death.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2Death.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2Death} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2Death.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapTime: (f = msg.getMapTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    timeRemaining: (f = msg.getTimeRemaining()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    currentRoundNumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    position: (f = msg.getPosition()) && proto.bragi.CS2Position.toObject(includeInstance, f),
    playerUrn: jspb.Message.getFieldWithDefault(msg, 5, ""),
    teamUrn: jspb.Message.getFieldWithDefault(msg, 6, ""),
    totalDeaths: jspb.Message.getFieldWithDefault(msg, 7, 0),
    suicide: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    deathByBomb: jspb.Message.getBooleanFieldWithDefault(msg, 10, false)
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
 * @return {!proto.bragi.CS2Death}
 */
proto.bragi.CS2Death.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2Death;
  return proto.bragi.CS2Death.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2Death} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2Death}
 */
proto.bragi.CS2Death.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.CS2Position;
      reader.readMessage(value,proto.bragi.CS2Position.deserializeBinaryFromReader);
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
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuicide(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeathByBomb(value);
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
proto.bragi.CS2Death.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2Death.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2Death} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2Death.serializeBinaryToWriter = function(message, writer) {
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
      proto.bragi.CS2Position.serializeBinaryToWriter
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
  f = message.getSuicide();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getDeathByBomb();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
};


/**
 * optional google.protobuf.Duration map_time = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CS2Death.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2Death} returns this
*/
proto.bragi.CS2Death.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2Death} returns this
 */
proto.bragi.CS2Death.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2Death.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CS2Death.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2Death} returns this
*/
proto.bragi.CS2Death.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2Death} returns this
 */
proto.bragi.CS2Death.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2Death.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CS2Death.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2Death} returns this
 */
proto.bragi.CS2Death.prototype.setCurrentRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional CS2Position position = 4;
 * @return {?proto.bragi.CS2Position}
 */
proto.bragi.CS2Death.prototype.getPosition = function() {
  return /** @type{?proto.bragi.CS2Position} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CS2Position, 4));
};


/**
 * @param {?proto.bragi.CS2Position|undefined} value
 * @return {!proto.bragi.CS2Death} returns this
*/
proto.bragi.CS2Death.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2Death} returns this
 */
proto.bragi.CS2Death.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2Death.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string player_urn = 5;
 * @return {string}
 */
proto.bragi.CS2Death.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2Death} returns this
 */
proto.bragi.CS2Death.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string team_urn = 6;
 * @return {string}
 */
proto.bragi.CS2Death.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2Death} returns this
 */
proto.bragi.CS2Death.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional uint32 total_deaths = 7;
 * @return {number}
 */
proto.bragi.CS2Death.prototype.getTotalDeaths = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2Death} returns this
 */
proto.bragi.CS2Death.prototype.setTotalDeaths = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional bool suicide = 9;
 * @return {boolean}
 */
proto.bragi.CS2Death.prototype.getSuicide = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.CS2Death} returns this
 */
proto.bragi.CS2Death.prototype.setSuicide = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional bool death_by_bomb = 10;
 * @return {boolean}
 */
proto.bragi.CS2Death.prototype.getDeathByBomb = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.CS2Death} returns this
 */
proto.bragi.CS2Death.prototype.setDeathByBomb = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
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
proto.bragi.CS2MapEnd.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2MapEnd.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2MapEnd} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2MapEnd.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapTime: (f = msg.getMapTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    currentRoundNumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    mapName: jspb.Message.getFieldWithDefault(msg, 4, ""),
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
 * @return {!proto.bragi.CS2MapEnd}
 */
proto.bragi.CS2MapEnd.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2MapEnd;
  return proto.bragi.CS2MapEnd.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2MapEnd} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2MapEnd}
 */
proto.bragi.CS2MapEnd.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCurrentRoundNumber(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMapName(value);
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
proto.bragi.CS2MapEnd.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2MapEnd.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2MapEnd} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2MapEnd.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapTime();
  if (f != null) {
    writer.writeMessage(
      1,
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
  f = message.getMapName();
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
proto.bragi.CS2MapEnd.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2MapEnd} returns this
*/
proto.bragi.CS2MapEnd.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2MapEnd} returns this
 */
proto.bragi.CS2MapEnd.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2MapEnd.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CS2MapEnd.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2MapEnd} returns this
 */
proto.bragi.CS2MapEnd.prototype.setCurrentRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string map_name = 4;
 * @return {string}
 */
proto.bragi.CS2MapEnd.prototype.getMapName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2MapEnd} returns this
 */
proto.bragi.CS2MapEnd.prototype.setMapName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string winning_team_urn = 5;
 * @return {string}
 */
proto.bragi.CS2MapEnd.prototype.getWinningTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2MapEnd} returns this
 */
proto.bragi.CS2MapEnd.prototype.setWinningTeamUrn = function(value) {
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
proto.bragi.CS2MapStart.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2MapStart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2MapStart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2MapStart.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapTime: (f = msg.getMapTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    mapName: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.bragi.CS2MapStart}
 */
proto.bragi.CS2MapStart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2MapStart;
  return proto.bragi.CS2MapStart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2MapStart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2MapStart}
 */
proto.bragi.CS2MapStart.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setMapName(value);
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
proto.bragi.CS2MapStart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2MapStart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2MapStart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2MapStart.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getMapName();
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
proto.bragi.CS2MapStart.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2MapStart} returns this
*/
proto.bragi.CS2MapStart.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2MapStart} returns this
 */
proto.bragi.CS2MapStart.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2MapStart.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string map_name = 2;
 * @return {string}
 */
proto.bragi.CS2MapStart.prototype.getMapName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2MapStart} returns this
 */
proto.bragi.CS2MapStart.prototype.setMapName = function(value) {
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
proto.bragi.CS2RoundEnd.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2RoundEnd.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2RoundEnd} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2RoundEnd.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapTime: (f = msg.getMapTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    timeRemaining: (f = msg.getTimeRemaining()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    currentRoundNumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    winningTeamUrn: jspb.Message.getFieldWithDefault(msg, 4, ""),
    winReason: jspb.Message.getFieldWithDefault(msg, 5, 0),
    playerBalancesMap: (f = msg.getPlayerBalancesMap()) ? f.toObject(includeInstance, proto.bragi.CS2PlayerBalance.toObject) : [],
    playerInventoriesMap: (f = msg.getPlayerInventoriesMap()) ? f.toObject(includeInstance, proto.bragi.CS2PlayerItems.toObject) : []
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
 * @return {!proto.bragi.CS2RoundEnd}
 */
proto.bragi.CS2RoundEnd.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2RoundEnd;
  return proto.bragi.CS2RoundEnd.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2RoundEnd} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2RoundEnd}
 */
proto.bragi.CS2RoundEnd.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.bragi.CS2WinReason} */ (reader.readEnum());
      msg.setWinReason(value);
      break;
    case 6:
      var value = msg.getPlayerBalancesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bragi.CS2PlayerBalance.deserializeBinaryFromReader, "", new proto.bragi.CS2PlayerBalance());
         });
      break;
    case 7:
      var value = msg.getPlayerInventoriesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bragi.CS2PlayerItems.deserializeBinaryFromReader, "", new proto.bragi.CS2PlayerItems());
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
proto.bragi.CS2RoundEnd.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2RoundEnd.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2RoundEnd} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2RoundEnd.serializeBinaryToWriter = function(message, writer) {
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
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bragi.CS2PlayerBalance.serializeBinaryToWriter);
  }
  f = message.getPlayerInventoriesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bragi.CS2PlayerItems.serializeBinaryToWriter);
  }
};


/**
 * optional google.protobuf.Duration map_time = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CS2RoundEnd.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2RoundEnd} returns this
*/
proto.bragi.CS2RoundEnd.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2RoundEnd} returns this
 */
proto.bragi.CS2RoundEnd.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2RoundEnd.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CS2RoundEnd.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2RoundEnd} returns this
*/
proto.bragi.CS2RoundEnd.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2RoundEnd} returns this
 */
proto.bragi.CS2RoundEnd.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2RoundEnd.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CS2RoundEnd.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2RoundEnd} returns this
 */
proto.bragi.CS2RoundEnd.prototype.setCurrentRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string winning_team_urn = 4;
 * @return {string}
 */
proto.bragi.CS2RoundEnd.prototype.getWinningTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CS2RoundEnd} returns this
 */
proto.bragi.CS2RoundEnd.prototype.setWinningTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional CS2WinReason win_reason = 5;
 * @return {!proto.bragi.CS2WinReason}
 */
proto.bragi.CS2RoundEnd.prototype.getWinReason = function() {
  return /** @type {!proto.bragi.CS2WinReason} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.bragi.CS2WinReason} value
 * @return {!proto.bragi.CS2RoundEnd} returns this
 */
proto.bragi.CS2RoundEnd.prototype.setWinReason = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * map<string, CS2PlayerBalance> player_balances = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bragi.CS2PlayerBalance>}
 */
proto.bragi.CS2RoundEnd.prototype.getPlayerBalancesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bragi.CS2PlayerBalance>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      proto.bragi.CS2PlayerBalance));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bragi.CS2RoundEnd} returns this
 */
proto.bragi.CS2RoundEnd.prototype.clearPlayerBalancesMap = function() {
  this.getPlayerBalancesMap().clear();
  return this;};


/**
 * map<string, CS2PlayerItems> player_inventories = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bragi.CS2PlayerItems>}
 */
proto.bragi.CS2RoundEnd.prototype.getPlayerInventoriesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bragi.CS2PlayerItems>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      proto.bragi.CS2PlayerItems));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bragi.CS2RoundEnd} returns this
 */
proto.bragi.CS2RoundEnd.prototype.clearPlayerInventoriesMap = function() {
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
proto.bragi.CS2RoundPause.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2RoundPause.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2RoundPause} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2RoundPause.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bragi.CS2RoundPause}
 */
proto.bragi.CS2RoundPause.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2RoundPause;
  return proto.bragi.CS2RoundPause.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2RoundPause} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2RoundPause}
 */
proto.bragi.CS2RoundPause.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bragi.CS2RoundPause.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2RoundPause.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2RoundPause} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2RoundPause.serializeBinaryToWriter = function(message, writer) {
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
proto.bragi.CS2RoundPause.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2RoundPause} returns this
*/
proto.bragi.CS2RoundPause.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2RoundPause} returns this
 */
proto.bragi.CS2RoundPause.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2RoundPause.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CS2RoundPause.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2RoundPause} returns this
*/
proto.bragi.CS2RoundPause.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2RoundPause} returns this
 */
proto.bragi.CS2RoundPause.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2RoundPause.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CS2RoundPause.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2RoundPause} returns this
 */
proto.bragi.CS2RoundPause.prototype.setCurrentRoundNumber = function(value) {
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
proto.bragi.CS2RoundResume.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2RoundResume.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2RoundResume} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2RoundResume.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bragi.CS2RoundResume}
 */
proto.bragi.CS2RoundResume.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2RoundResume;
  return proto.bragi.CS2RoundResume.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2RoundResume} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2RoundResume}
 */
proto.bragi.CS2RoundResume.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bragi.CS2RoundResume.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2RoundResume.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2RoundResume} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2RoundResume.serializeBinaryToWriter = function(message, writer) {
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
proto.bragi.CS2RoundResume.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2RoundResume} returns this
*/
proto.bragi.CS2RoundResume.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2RoundResume} returns this
 */
proto.bragi.CS2RoundResume.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2RoundResume.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CS2RoundResume.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2RoundResume} returns this
*/
proto.bragi.CS2RoundResume.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2RoundResume} returns this
 */
proto.bragi.CS2RoundResume.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2RoundResume.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CS2RoundResume.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2RoundResume} returns this
 */
proto.bragi.CS2RoundResume.prototype.setCurrentRoundNumber = function(value) {
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
proto.bragi.CS2RoundRollback.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2RoundRollback.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2RoundRollback} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2RoundRollback.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bragi.CS2RoundRollback}
 */
proto.bragi.CS2RoundRollback.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2RoundRollback;
  return proto.bragi.CS2RoundRollback.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2RoundRollback} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2RoundRollback}
 */
proto.bragi.CS2RoundRollback.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bragi.CS2RoundRollback.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2RoundRollback.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2RoundRollback} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2RoundRollback.serializeBinaryToWriter = function(message, writer) {
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
proto.bragi.CS2RoundRollback.prototype.getNextRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2RoundRollback} returns this
 */
proto.bragi.CS2RoundRollback.prototype.setNextRoundNumber = function(value) {
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
proto.bragi.CS2RoundStart.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CS2RoundStart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CS2RoundStart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2RoundStart.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bragi.CS2RoundStart}
 */
proto.bragi.CS2RoundStart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CS2RoundStart;
  return proto.bragi.CS2RoundStart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CS2RoundStart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CS2RoundStart}
 */
proto.bragi.CS2RoundStart.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bragi.CS2RoundStart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CS2RoundStart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CS2RoundStart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CS2RoundStart.serializeBinaryToWriter = function(message, writer) {
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
proto.bragi.CS2RoundStart.prototype.getMapTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2RoundStart} returns this
*/
proto.bragi.CS2RoundStart.prototype.setMapTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2RoundStart} returns this
 */
proto.bragi.CS2RoundStart.prototype.clearMapTime = function() {
  return this.setMapTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2RoundStart.prototype.hasMapTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_remaining = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.CS2RoundStart.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.CS2RoundStart} returns this
*/
proto.bragi.CS2RoundStart.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CS2RoundStart} returns this
 */
proto.bragi.CS2RoundStart.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CS2RoundStart.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 current_round_number = 3;
 * @return {number}
 */
proto.bragi.CS2RoundStart.prototype.getCurrentRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CS2RoundStart} returns this
 */
proto.bragi.CS2RoundStart.prototype.setCurrentRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * @enum {number}
 */
proto.bragi.CS2Side = {
  CS2_SIDE_UNSPECIFIED: 0,
  CS2_SIDE_COUNTER_TERRORISTS: 1,
  CS2_SIDE_TERRORISTS: 2
};

/**
 * @enum {number}
 */
proto.bragi.CS2WinReason = {
  CS2_WIN_REASON_UNSPECIFIED: 0,
  CS2_WIN_REASON_COUNTER_TERRORISTS_ELIMINATED: 1,
  CS2_WIN_REASON_TERRORISTS_ELIMINATED: 2,
  CS2_WIN_REASON_EXPLOSION: 3,
  CS2_WIN_REASON_DEFUSE: 4,
  CS2_WIN_REASON_TIMEOUT: 5,
  CS2_WIN_REASON_TARGET_SAVED: 6
};

/**
 * @enum {number}
 */
proto.bragi.CS2RoundStateType = {
  CS2_ROUND_STATE_TYPE_UNSPECIFIED: 0,
  CS2_ROUND_STATE_TYPE_BUY_TIME: 1,
  CS2_ROUND_STATE_TYPE_IN_PROGRESS: 2,
  CS2_ROUND_STATE_TYPE_PAUSED: 3,
  CS2_ROUND_STATE_TYPE_FINISHED: 4
};

/**
 * @enum {number}
 */
proto.bragi.CS2WeaponType = {
  CS2_WEAPON_TYPE_UNSPECIFIED: 0,
  CS2_WEAPON_TYPE_PISTOL: 1,
  CS2_WEAPON_TYPE_BOMB: 2,
  CS2_WEAPON_TYPE_GRENADE: 3,
  CS2_WEAPON_TYPE_MACHINE_GUN: 4,
  CS2_WEAPON_TYPE_RIFLE: 5,
  CS2_WEAPON_TYPE_SHOTGUN: 6,
  CS2_WEAPON_TYPE_SNIPER_RIFLE: 7,
  CS2_WEAPON_TYPE_SUBMACHINE_GUN: 8,
  CS2_WEAPON_TYPE_KNIFE: 9,
  CS2_WEAPON_TYPE_DEFUSE_KIT: 10
};

/**
 * @enum {number}
 */
proto.bragi.CS2ItemType = {
  CS2_ITEM_TYPE_UNSPECIFIED: 0,
  CS2_ITEM_TYPE_PISTOL: 1,
  CS2_ITEM_TYPE_BOMB: 2,
  CS2_ITEM_TYPE_GRENADE: 3,
  CS2_ITEM_TYPE_MACHINE_GUN: 4,
  CS2_ITEM_TYPE_RIFLE: 5,
  CS2_ITEM_TYPE_SHOTGUN: 6,
  CS2_ITEM_TYPE_SNIPER_RIFLE: 7,
  CS2_ITEM_TYPE_SUBMACHINE_GUN: 8,
  CS2_ITEM_TYPE_KNIFE: 9,
  CS2_ITEM_TYPE_DEFUSE_KIT: 10,
  CS2_ITEM_TYPE_ARMOR: 11
};

goog.object.extend(exports, proto.bragi);
