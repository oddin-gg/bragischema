// source: bragi/valorant.proto
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
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var bragi_common_pb = require('../bragi/common_pb.js');
goog.object.extend(proto, bragi_common_pb);
goog.exportSymbol('proto.bragi.ValorantAbilitiesState', null, global);
goog.exportSymbol('proto.bragi.ValorantAbility', null, global);
goog.exportSymbol('proto.bragi.ValorantCurrentMapState', null, global);
goog.exportSymbol('proto.bragi.ValorantCurrentMapStatePartialUpdate', null, global);
goog.exportSymbol('proto.bragi.ValorantCurrentMapStatePartialUpdate.UpdateCase', null, global);
goog.exportSymbol('proto.bragi.ValorantCurrentRoundState', null, global);
goog.exportSymbol('proto.bragi.ValorantCurrentRoundStatePartialUpdate', null, global);
goog.exportSymbol('proto.bragi.ValorantCurrentRoundStatePartialUpdate.UpdateCase', null, global);
goog.exportSymbol('proto.bragi.ValorantCurrentRoundTeamSpikeState', null, global);
goog.exportSymbol('proto.bragi.ValorantCurrentRoundTimeState', null, global);
goog.exportSymbol('proto.bragi.ValorantMapScoreState', null, global);
goog.exportSymbol('proto.bragi.ValorantMatchMessage', null, global);
goog.exportSymbol('proto.bragi.ValorantMatchMessage.Payload', null, global);
goog.exportSymbol('proto.bragi.ValorantMatchMessage.Payload.PayloadCase', null, global);
goog.exportSymbol('proto.bragi.ValorantMatchScoreState', null, global);
goog.exportSymbol('proto.bragi.ValorantMatchSnapshot', null, global);
goog.exportSymbol('proto.bragi.ValorantMatchState', null, global);
goog.exportSymbol('proto.bragi.ValorantMatchStatePartialUpdate', null, global);
goog.exportSymbol('proto.bragi.ValorantMatchStatePartialUpdate.UpdateCase', null, global);
goog.exportSymbol('proto.bragi.ValorantMatchStatePartialUpdates', null, global);
goog.exportSymbol('proto.bragi.ValorantMatchUpdate', null, global);
goog.exportSymbol('proto.bragi.ValorantMatchUpdate.Payload', null, global);
goog.exportSymbol('proto.bragi.ValorantMatchUpdate.Payload.PayloadCase', null, global);
goog.exportSymbol('proto.bragi.ValorantPlayerCurrentMapState', null, global);
goog.exportSymbol('proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate', null, global);
goog.exportSymbol('proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload', null, global);
goog.exportSymbol('proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.PayloadCase', null, global);
goog.exportSymbol('proto.bragi.ValorantPlayerCurrentMapStatisticsState', null, global);
goog.exportSymbol('proto.bragi.ValorantPlayerCurrentRoundState', null, global);
goog.exportSymbol('proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate', null, global);
goog.exportSymbol('proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload', null, global);
goog.exportSymbol('proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.PayloadCase', null, global);
goog.exportSymbol('proto.bragi.ValorantPlayerCurrentRoundStatisticsState', null, global);
goog.exportSymbol('proto.bragi.ValorantPlayerInfoState', null, global);
goog.exportSymbol('proto.bragi.ValorantPositionState', null, global);
goog.exportSymbol('proto.bragi.ValorantPreviousRound', null, global);
goog.exportSymbol('proto.bragi.ValorantPreviousRoundsState', null, global);
goog.exportSymbol('proto.bragi.ValorantRoundInfoState', null, global);
goog.exportSymbol('proto.bragi.ValorantRoundOutcome', null, global);
goog.exportSymbol('proto.bragi.ValorantRoundPhase', null, global);
goog.exportSymbol('proto.bragi.ValorantSide', null, global);
goog.exportSymbol('proto.bragi.ValorantSpikeState', null, global);
goog.exportSymbol('proto.bragi.ValorantTeamCurrentMapState', null, global);
goog.exportSymbol('proto.bragi.ValorantTeamCurrentMapStatePartialUpdate', null, global);
goog.exportSymbol('proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload', null, global);
goog.exportSymbol('proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload.PayloadCase', null, global);
goog.exportSymbol('proto.bragi.ValorantTeamCurrentRoundState', null, global);
goog.exportSymbol('proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate', null, global);
goog.exportSymbol('proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload', null, global);
goog.exportSymbol('proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload.PayloadCase', null, global);
goog.exportSymbol('proto.bragi.ValorantUltimateState', null, global);
goog.exportSymbol('proto.bragi.ValorantWeapon', null, global);
goog.exportSymbol('proto.bragi.ValorantWeaponsState', null, global);
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
proto.bragi.ValorantMatchMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.ValorantMatchMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantMatchMessage.displayName = 'proto.bragi.ValorantMatchMessage';
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
proto.bragi.ValorantMatchMessage.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.ValorantMatchMessage.Payload.oneofGroups_);
};
goog.inherits(proto.bragi.ValorantMatchMessage.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantMatchMessage.Payload.displayName = 'proto.bragi.ValorantMatchMessage.Payload';
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
proto.bragi.ValorantMatchSnapshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.ValorantMatchSnapshot.repeatedFields_, null);
};
goog.inherits(proto.bragi.ValorantMatchSnapshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantMatchSnapshot.displayName = 'proto.bragi.ValorantMatchSnapshot';
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
proto.bragi.ValorantMatchUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.ValorantMatchUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantMatchUpdate.displayName = 'proto.bragi.ValorantMatchUpdate';
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
proto.bragi.ValorantMatchUpdate.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.ValorantMatchUpdate.Payload.oneofGroups_);
};
goog.inherits(proto.bragi.ValorantMatchUpdate.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantMatchUpdate.Payload.displayName = 'proto.bragi.ValorantMatchUpdate.Payload';
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
proto.bragi.ValorantMatchStatePartialUpdates = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.ValorantMatchStatePartialUpdates.repeatedFields_, null);
};
goog.inherits(proto.bragi.ValorantMatchStatePartialUpdates, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantMatchStatePartialUpdates.displayName = 'proto.bragi.ValorantMatchStatePartialUpdates';
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
proto.bragi.ValorantMatchStatePartialUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.ValorantMatchStatePartialUpdate.oneofGroups_);
};
goog.inherits(proto.bragi.ValorantMatchStatePartialUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantMatchStatePartialUpdate.displayName = 'proto.bragi.ValorantMatchStatePartialUpdate';
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
proto.bragi.ValorantMatchState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.ValorantMatchState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantMatchState.displayName = 'proto.bragi.ValorantMatchState';
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
proto.bragi.ValorantMatchScoreState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.ValorantMatchScoreState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantMatchScoreState.displayName = 'proto.bragi.ValorantMatchScoreState';
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
proto.bragi.ValorantCurrentMapStatePartialUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.ValorantCurrentMapStatePartialUpdate.oneofGroups_);
};
goog.inherits(proto.bragi.ValorantCurrentMapStatePartialUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantCurrentMapStatePartialUpdate.displayName = 'proto.bragi.ValorantCurrentMapStatePartialUpdate';
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
proto.bragi.ValorantCurrentMapState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.ValorantCurrentMapState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantCurrentMapState.displayName = 'proto.bragi.ValorantCurrentMapState';
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
proto.bragi.ValorantMapScoreState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.ValorantMapScoreState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantMapScoreState.displayName = 'proto.bragi.ValorantMapScoreState';
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
proto.bragi.ValorantPreviousRoundsState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.ValorantPreviousRoundsState.repeatedFields_, null);
};
goog.inherits(proto.bragi.ValorantPreviousRoundsState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantPreviousRoundsState.displayName = 'proto.bragi.ValorantPreviousRoundsState';
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
proto.bragi.ValorantTeamCurrentMapStatePartialUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.ValorantTeamCurrentMapStatePartialUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.displayName = 'proto.bragi.ValorantTeamCurrentMapStatePartialUpdate';
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
proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload.oneofGroups_);
};
goog.inherits(proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload.displayName = 'proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload';
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
proto.bragi.ValorantTeamCurrentMapState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.ValorantTeamCurrentMapState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantTeamCurrentMapState.displayName = 'proto.bragi.ValorantTeamCurrentMapState';
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
proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.displayName = 'proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate';
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
proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.oneofGroups_);
};
goog.inherits(proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.displayName = 'proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload';
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
proto.bragi.ValorantPlayerCurrentMapState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.ValorantPlayerCurrentMapState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantPlayerCurrentMapState.displayName = 'proto.bragi.ValorantPlayerCurrentMapState';
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
proto.bragi.ValorantPlayerCurrentMapStatisticsState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.ValorantPlayerCurrentMapStatisticsState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantPlayerCurrentMapStatisticsState.displayName = 'proto.bragi.ValorantPlayerCurrentMapStatisticsState';
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
proto.bragi.ValorantCurrentRoundStatePartialUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.ValorantCurrentRoundStatePartialUpdate.oneofGroups_);
};
goog.inherits(proto.bragi.ValorantCurrentRoundStatePartialUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantCurrentRoundStatePartialUpdate.displayName = 'proto.bragi.ValorantCurrentRoundStatePartialUpdate';
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
proto.bragi.ValorantCurrentRoundState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.ValorantCurrentRoundState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantCurrentRoundState.displayName = 'proto.bragi.ValorantCurrentRoundState';
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
proto.bragi.ValorantRoundInfoState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.ValorantRoundInfoState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantRoundInfoState.displayName = 'proto.bragi.ValorantRoundInfoState';
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
proto.bragi.ValorantCurrentRoundTimeState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.ValorantCurrentRoundTimeState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantCurrentRoundTimeState.displayName = 'proto.bragi.ValorantCurrentRoundTimeState';
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
proto.bragi.ValorantCurrentRoundTeamSpikeState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.ValorantCurrentRoundTeamSpikeState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantCurrentRoundTeamSpikeState.displayName = 'proto.bragi.ValorantCurrentRoundTeamSpikeState';
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
proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.displayName = 'proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate';
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
proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload.oneofGroups_);
};
goog.inherits(proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload.displayName = 'proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload';
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
proto.bragi.ValorantTeamCurrentRoundState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.ValorantTeamCurrentRoundState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantTeamCurrentRoundState.displayName = 'proto.bragi.ValorantTeamCurrentRoundState';
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
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.displayName = 'proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate';
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
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.oneofGroups_);
};
goog.inherits(proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.displayName = 'proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload';
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
proto.bragi.ValorantPlayerCurrentRoundState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.ValorantPlayerCurrentRoundState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantPlayerCurrentRoundState.displayName = 'proto.bragi.ValorantPlayerCurrentRoundState';
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
proto.bragi.ValorantPlayerCurrentRoundStatisticsState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.ValorantPlayerCurrentRoundStatisticsState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantPlayerCurrentRoundStatisticsState.displayName = 'proto.bragi.ValorantPlayerCurrentRoundStatisticsState';
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
proto.bragi.ValorantAbilitiesState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.ValorantAbilitiesState.repeatedFields_, null);
};
goog.inherits(proto.bragi.ValorantAbilitiesState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantAbilitiesState.displayName = 'proto.bragi.ValorantAbilitiesState';
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
proto.bragi.ValorantWeaponsState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.ValorantWeaponsState.repeatedFields_, null);
};
goog.inherits(proto.bragi.ValorantWeaponsState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantWeaponsState.displayName = 'proto.bragi.ValorantWeaponsState';
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
proto.bragi.ValorantPlayerInfoState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.ValorantPlayerInfoState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantPlayerInfoState.displayName = 'proto.bragi.ValorantPlayerInfoState';
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
proto.bragi.ValorantPositionState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.ValorantPositionState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantPositionState.displayName = 'proto.bragi.ValorantPositionState';
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
proto.bragi.ValorantPreviousRound = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.ValorantPreviousRound, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantPreviousRound.displayName = 'proto.bragi.ValorantPreviousRound';
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
proto.bragi.ValorantWeapon = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.ValorantWeapon, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantWeapon.displayName = 'proto.bragi.ValorantWeapon';
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
proto.bragi.ValorantAbility = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.ValorantAbility, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.ValorantAbility.displayName = 'proto.bragi.ValorantAbility';
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
proto.bragi.ValorantMatchMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantMatchMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantMatchMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantMatchMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
matchUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
sequence: jspb.Message.getFieldWithDefault(msg, 2, 0),
timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
dataStatus: jspb.Message.getFieldWithDefault(msg, 4, 0),
payload: (f = msg.getPayload()) && proto.bragi.ValorantMatchMessage.Payload.toObject(includeInstance, f)
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
 * @return {!proto.bragi.ValorantMatchMessage}
 */
proto.bragi.ValorantMatchMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantMatchMessage;
  return proto.bragi.ValorantMatchMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantMatchMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantMatchMessage}
 */
proto.bragi.ValorantMatchMessage.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.bragi.DataStatus} */ (reader.readEnum());
      msg.setDataStatus(value);
      break;
    case 5:
      var value = new proto.bragi.ValorantMatchMessage.Payload;
      reader.readMessage(value,proto.bragi.ValorantMatchMessage.Payload.deserializeBinaryFromReader);
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
proto.bragi.ValorantMatchMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantMatchMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantMatchMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantMatchMessage.serializeBinaryToWriter = function(message, writer) {
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
      4,
      f
    );
  }
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bragi.ValorantMatchMessage.Payload.serializeBinaryToWriter
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
proto.bragi.ValorantMatchMessage.Payload.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.bragi.ValorantMatchMessage.Payload.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  SNAPSHOT: 1,
  UPDATE: 2
};

/**
 * @return {proto.bragi.ValorantMatchMessage.Payload.PayloadCase}
 */
proto.bragi.ValorantMatchMessage.Payload.prototype.getPayloadCase = function() {
  return /** @type {proto.bragi.ValorantMatchMessage.Payload.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.bragi.ValorantMatchMessage.Payload.oneofGroups_[0]));
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
proto.bragi.ValorantMatchMessage.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantMatchMessage.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantMatchMessage.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantMatchMessage.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
snapshot: (f = msg.getSnapshot()) && proto.bragi.ValorantMatchSnapshot.toObject(includeInstance, f),
update: (f = msg.getUpdate()) && proto.bragi.ValorantMatchUpdate.toObject(includeInstance, f)
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
 * @return {!proto.bragi.ValorantMatchMessage.Payload}
 */
proto.bragi.ValorantMatchMessage.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantMatchMessage.Payload;
  return proto.bragi.ValorantMatchMessage.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantMatchMessage.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantMatchMessage.Payload}
 */
proto.bragi.ValorantMatchMessage.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.ValorantMatchSnapshot;
      reader.readMessage(value,proto.bragi.ValorantMatchSnapshot.deserializeBinaryFromReader);
      msg.setSnapshot(value);
      break;
    case 2:
      var value = new proto.bragi.ValorantMatchUpdate;
      reader.readMessage(value,proto.bragi.ValorantMatchUpdate.deserializeBinaryFromReader);
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
proto.bragi.ValorantMatchMessage.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantMatchMessage.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantMatchMessage.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantMatchMessage.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSnapshot();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.ValorantMatchSnapshot.serializeBinaryToWriter
    );
  }
  f = message.getUpdate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.ValorantMatchUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * optional ValorantMatchSnapshot snapshot = 1;
 * @return {?proto.bragi.ValorantMatchSnapshot}
 */
proto.bragi.ValorantMatchMessage.Payload.prototype.getSnapshot = function() {
  return /** @type{?proto.bragi.ValorantMatchSnapshot} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantMatchSnapshot, 1));
};


/**
 * @param {?proto.bragi.ValorantMatchSnapshot|undefined} value
 * @return {!proto.bragi.ValorantMatchMessage.Payload} returns this
*/
proto.bragi.ValorantMatchMessage.Payload.prototype.setSnapshot = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.ValorantMatchMessage.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantMatchMessage.Payload} returns this
 */
proto.bragi.ValorantMatchMessage.Payload.prototype.clearSnapshot = function() {
  return this.setSnapshot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantMatchMessage.Payload.prototype.hasSnapshot = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ValorantMatchUpdate update = 2;
 * @return {?proto.bragi.ValorantMatchUpdate}
 */
proto.bragi.ValorantMatchMessage.Payload.prototype.getUpdate = function() {
  return /** @type{?proto.bragi.ValorantMatchUpdate} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantMatchUpdate, 2));
};


/**
 * @param {?proto.bragi.ValorantMatchUpdate|undefined} value
 * @return {!proto.bragi.ValorantMatchMessage.Payload} returns this
*/
proto.bragi.ValorantMatchMessage.Payload.prototype.setUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bragi.ValorantMatchMessage.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantMatchMessage.Payload} returns this
 */
proto.bragi.ValorantMatchMessage.Payload.prototype.clearUpdate = function() {
  return this.setUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantMatchMessage.Payload.prototype.hasUpdate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string match_urn = 1;
 * @return {string}
 */
proto.bragi.ValorantMatchMessage.prototype.getMatchUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.ValorantMatchMessage} returns this
 */
proto.bragi.ValorantMatchMessage.prototype.setMatchUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 sequence = 2;
 * @return {number}
 */
proto.bragi.ValorantMatchMessage.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.ValorantMatchMessage} returns this
 */
proto.bragi.ValorantMatchMessage.prototype.setSequence = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bragi.ValorantMatchMessage.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bragi.ValorantMatchMessage} returns this
*/
proto.bragi.ValorantMatchMessage.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantMatchMessage} returns this
 */
proto.bragi.ValorantMatchMessage.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantMatchMessage.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional DataStatus data_status = 4;
 * @return {!proto.bragi.DataStatus}
 */
proto.bragi.ValorantMatchMessage.prototype.getDataStatus = function() {
  return /** @type {!proto.bragi.DataStatus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.bragi.DataStatus} value
 * @return {!proto.bragi.ValorantMatchMessage} returns this
 */
proto.bragi.ValorantMatchMessage.prototype.setDataStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional Payload payload = 5;
 * @return {?proto.bragi.ValorantMatchMessage.Payload}
 */
proto.bragi.ValorantMatchMessage.prototype.getPayload = function() {
  return /** @type{?proto.bragi.ValorantMatchMessage.Payload} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantMatchMessage.Payload, 5));
};


/**
 * @param {?proto.bragi.ValorantMatchMessage.Payload|undefined} value
 * @return {!proto.bragi.ValorantMatchMessage} returns this
*/
proto.bragi.ValorantMatchMessage.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantMatchMessage} returns this
 */
proto.bragi.ValorantMatchMessage.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantMatchMessage.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.ValorantMatchSnapshot.repeatedFields_ = [5];



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
proto.bragi.ValorantMatchSnapshot.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantMatchSnapshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantMatchSnapshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantMatchSnapshot.toObject = function(includeInstance, msg) {
  var f, obj = {
matchUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
sequence: jspb.Message.getFieldWithDefault(msg, 2, 0),
timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
dataStatus: jspb.Message.getFieldWithDefault(msg, 4, 0),
announcementsList: jspb.Message.toObjectList(msg.getAnnouncementsList(),
    bragi_common_pb.Announcement.toObject, includeInstance),
matchState: (f = msg.getMatchState()) && proto.bragi.ValorantMatchState.toObject(includeInstance, f),
tournament: (f = msg.getTournament()) && bragi_common_pb.Tournament.toObject(includeInstance, f)
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
 * @return {!proto.bragi.ValorantMatchSnapshot}
 */
proto.bragi.ValorantMatchSnapshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantMatchSnapshot;
  return proto.bragi.ValorantMatchSnapshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantMatchSnapshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantMatchSnapshot}
 */
proto.bragi.ValorantMatchSnapshot.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.bragi.DataStatus} */ (reader.readEnum());
      msg.setDataStatus(value);
      break;
    case 5:
      var value = new bragi_common_pb.Announcement;
      reader.readMessage(value,bragi_common_pb.Announcement.deserializeBinaryFromReader);
      msg.addAnnouncements(value);
      break;
    case 6:
      var value = new proto.bragi.ValorantMatchState;
      reader.readMessage(value,proto.bragi.ValorantMatchState.deserializeBinaryFromReader);
      msg.setMatchState(value);
      break;
    case 7:
      var value = new bragi_common_pb.Tournament;
      reader.readMessage(value,bragi_common_pb.Tournament.deserializeBinaryFromReader);
      msg.setTournament(value);
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
proto.bragi.ValorantMatchSnapshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantMatchSnapshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantMatchSnapshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantMatchSnapshot.serializeBinaryToWriter = function(message, writer) {
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
      4,
      f
    );
  }
  f = message.getAnnouncementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      bragi_common_pb.Announcement.serializeBinaryToWriter
    );
  }
  f = message.getMatchState();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bragi.ValorantMatchState.serializeBinaryToWriter
    );
  }
  f = message.getTournament();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      bragi_common_pb.Tournament.serializeBinaryToWriter
    );
  }
};


/**
 * optional string match_urn = 1;
 * @return {string}
 */
proto.bragi.ValorantMatchSnapshot.prototype.getMatchUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.ValorantMatchSnapshot} returns this
 */
proto.bragi.ValorantMatchSnapshot.prototype.setMatchUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 sequence = 2;
 * @return {number}
 */
proto.bragi.ValorantMatchSnapshot.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.ValorantMatchSnapshot} returns this
 */
proto.bragi.ValorantMatchSnapshot.prototype.setSequence = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bragi.ValorantMatchSnapshot.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bragi.ValorantMatchSnapshot} returns this
*/
proto.bragi.ValorantMatchSnapshot.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantMatchSnapshot} returns this
 */
proto.bragi.ValorantMatchSnapshot.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantMatchSnapshot.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional DataStatus data_status = 4;
 * @return {!proto.bragi.DataStatus}
 */
proto.bragi.ValorantMatchSnapshot.prototype.getDataStatus = function() {
  return /** @type {!proto.bragi.DataStatus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.bragi.DataStatus} value
 * @return {!proto.bragi.ValorantMatchSnapshot} returns this
 */
proto.bragi.ValorantMatchSnapshot.prototype.setDataStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * repeated Announcement announcements = 5;
 * @return {!Array<!proto.bragi.Announcement>}
 */
proto.bragi.ValorantMatchSnapshot.prototype.getAnnouncementsList = function() {
  return /** @type{!Array<!proto.bragi.Announcement>} */ (
    jspb.Message.getRepeatedWrapperField(this, bragi_common_pb.Announcement, 5));
};


/**
 * @param {!Array<!proto.bragi.Announcement>} value
 * @return {!proto.bragi.ValorantMatchSnapshot} returns this
*/
proto.bragi.ValorantMatchSnapshot.prototype.setAnnouncementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.bragi.Announcement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.Announcement}
 */
proto.bragi.ValorantMatchSnapshot.prototype.addAnnouncements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.bragi.Announcement, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.ValorantMatchSnapshot} returns this
 */
proto.bragi.ValorantMatchSnapshot.prototype.clearAnnouncementsList = function() {
  return this.setAnnouncementsList([]);
};


/**
 * optional ValorantMatchState match_state = 6;
 * @return {?proto.bragi.ValorantMatchState}
 */
proto.bragi.ValorantMatchSnapshot.prototype.getMatchState = function() {
  return /** @type{?proto.bragi.ValorantMatchState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantMatchState, 6));
};


/**
 * @param {?proto.bragi.ValorantMatchState|undefined} value
 * @return {!proto.bragi.ValorantMatchSnapshot} returns this
*/
proto.bragi.ValorantMatchSnapshot.prototype.setMatchState = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantMatchSnapshot} returns this
 */
proto.bragi.ValorantMatchSnapshot.prototype.clearMatchState = function() {
  return this.setMatchState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantMatchSnapshot.prototype.hasMatchState = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Tournament tournament = 7;
 * @return {?proto.bragi.Tournament}
 */
proto.bragi.ValorantMatchSnapshot.prototype.getTournament = function() {
  return /** @type{?proto.bragi.Tournament} */ (
    jspb.Message.getWrapperField(this, bragi_common_pb.Tournament, 7));
};


/**
 * @param {?proto.bragi.Tournament|undefined} value
 * @return {!proto.bragi.ValorantMatchSnapshot} returns this
*/
proto.bragi.ValorantMatchSnapshot.prototype.setTournament = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantMatchSnapshot} returns this
 */
proto.bragi.ValorantMatchSnapshot.prototype.clearTournament = function() {
  return this.setTournament(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantMatchSnapshot.prototype.hasTournament = function() {
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
proto.bragi.ValorantMatchUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantMatchUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantMatchUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantMatchUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
payload: (f = msg.getPayload()) && proto.bragi.ValorantMatchUpdate.Payload.toObject(includeInstance, f)
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
 * @return {!proto.bragi.ValorantMatchUpdate}
 */
proto.bragi.ValorantMatchUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantMatchUpdate;
  return proto.bragi.ValorantMatchUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantMatchUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantMatchUpdate}
 */
proto.bragi.ValorantMatchUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.ValorantMatchUpdate.Payload;
      reader.readMessage(value,proto.bragi.ValorantMatchUpdate.Payload.deserializeBinaryFromReader);
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
proto.bragi.ValorantMatchUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantMatchUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantMatchUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantMatchUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.ValorantMatchUpdate.Payload.serializeBinaryToWriter
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
proto.bragi.ValorantMatchUpdate.Payload.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.bragi.ValorantMatchUpdate.Payload.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  MATCH_STATE: 1,
  PARTIAL_UPDATES: 2
};

/**
 * @return {proto.bragi.ValorantMatchUpdate.Payload.PayloadCase}
 */
proto.bragi.ValorantMatchUpdate.Payload.prototype.getPayloadCase = function() {
  return /** @type {proto.bragi.ValorantMatchUpdate.Payload.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.bragi.ValorantMatchUpdate.Payload.oneofGroups_[0]));
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
proto.bragi.ValorantMatchUpdate.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantMatchUpdate.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantMatchUpdate.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantMatchUpdate.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
matchState: (f = msg.getMatchState()) && proto.bragi.ValorantMatchState.toObject(includeInstance, f),
partialUpdates: (f = msg.getPartialUpdates()) && proto.bragi.ValorantMatchStatePartialUpdates.toObject(includeInstance, f)
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
 * @return {!proto.bragi.ValorantMatchUpdate.Payload}
 */
proto.bragi.ValorantMatchUpdate.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantMatchUpdate.Payload;
  return proto.bragi.ValorantMatchUpdate.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantMatchUpdate.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantMatchUpdate.Payload}
 */
proto.bragi.ValorantMatchUpdate.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.ValorantMatchState;
      reader.readMessage(value,proto.bragi.ValorantMatchState.deserializeBinaryFromReader);
      msg.setMatchState(value);
      break;
    case 2:
      var value = new proto.bragi.ValorantMatchStatePartialUpdates;
      reader.readMessage(value,proto.bragi.ValorantMatchStatePartialUpdates.deserializeBinaryFromReader);
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
proto.bragi.ValorantMatchUpdate.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantMatchUpdate.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantMatchUpdate.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantMatchUpdate.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatchState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.ValorantMatchState.serializeBinaryToWriter
    );
  }
  f = message.getPartialUpdates();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.ValorantMatchStatePartialUpdates.serializeBinaryToWriter
    );
  }
};


/**
 * optional ValorantMatchState match_state = 1;
 * @return {?proto.bragi.ValorantMatchState}
 */
proto.bragi.ValorantMatchUpdate.Payload.prototype.getMatchState = function() {
  return /** @type{?proto.bragi.ValorantMatchState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantMatchState, 1));
};


/**
 * @param {?proto.bragi.ValorantMatchState|undefined} value
 * @return {!proto.bragi.ValorantMatchUpdate.Payload} returns this
*/
proto.bragi.ValorantMatchUpdate.Payload.prototype.setMatchState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.ValorantMatchUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantMatchUpdate.Payload} returns this
 */
proto.bragi.ValorantMatchUpdate.Payload.prototype.clearMatchState = function() {
  return this.setMatchState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantMatchUpdate.Payload.prototype.hasMatchState = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ValorantMatchStatePartialUpdates partial_updates = 2;
 * @return {?proto.bragi.ValorantMatchStatePartialUpdates}
 */
proto.bragi.ValorantMatchUpdate.Payload.prototype.getPartialUpdates = function() {
  return /** @type{?proto.bragi.ValorantMatchStatePartialUpdates} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantMatchStatePartialUpdates, 2));
};


/**
 * @param {?proto.bragi.ValorantMatchStatePartialUpdates|undefined} value
 * @return {!proto.bragi.ValorantMatchUpdate.Payload} returns this
*/
proto.bragi.ValorantMatchUpdate.Payload.prototype.setPartialUpdates = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bragi.ValorantMatchUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantMatchUpdate.Payload} returns this
 */
proto.bragi.ValorantMatchUpdate.Payload.prototype.clearPartialUpdates = function() {
  return this.setPartialUpdates(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantMatchUpdate.Payload.prototype.hasPartialUpdates = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Payload payload = 1;
 * @return {?proto.bragi.ValorantMatchUpdate.Payload}
 */
proto.bragi.ValorantMatchUpdate.prototype.getPayload = function() {
  return /** @type{?proto.bragi.ValorantMatchUpdate.Payload} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantMatchUpdate.Payload, 1));
};


/**
 * @param {?proto.bragi.ValorantMatchUpdate.Payload|undefined} value
 * @return {!proto.bragi.ValorantMatchUpdate} returns this
*/
proto.bragi.ValorantMatchUpdate.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantMatchUpdate} returns this
 */
proto.bragi.ValorantMatchUpdate.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantMatchUpdate.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.ValorantMatchStatePartialUpdates.repeatedFields_ = [1];



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
proto.bragi.ValorantMatchStatePartialUpdates.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantMatchStatePartialUpdates.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantMatchStatePartialUpdates} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantMatchStatePartialUpdates.toObject = function(includeInstance, msg) {
  var f, obj = {
updatesList: jspb.Message.toObjectList(msg.getUpdatesList(),
    proto.bragi.ValorantMatchStatePartialUpdate.toObject, includeInstance)
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
 * @return {!proto.bragi.ValorantMatchStatePartialUpdates}
 */
proto.bragi.ValorantMatchStatePartialUpdates.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantMatchStatePartialUpdates;
  return proto.bragi.ValorantMatchStatePartialUpdates.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantMatchStatePartialUpdates} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantMatchStatePartialUpdates}
 */
proto.bragi.ValorantMatchStatePartialUpdates.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.ValorantMatchStatePartialUpdate;
      reader.readMessage(value,proto.bragi.ValorantMatchStatePartialUpdate.deserializeBinaryFromReader);
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
proto.bragi.ValorantMatchStatePartialUpdates.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantMatchStatePartialUpdates.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantMatchStatePartialUpdates} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantMatchStatePartialUpdates.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUpdatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bragi.ValorantMatchStatePartialUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ValorantMatchStatePartialUpdate updates = 1;
 * @return {!Array<!proto.bragi.ValorantMatchStatePartialUpdate>}
 */
proto.bragi.ValorantMatchStatePartialUpdates.prototype.getUpdatesList = function() {
  return /** @type{!Array<!proto.bragi.ValorantMatchStatePartialUpdate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.ValorantMatchStatePartialUpdate, 1));
};


/**
 * @param {!Array<!proto.bragi.ValorantMatchStatePartialUpdate>} value
 * @return {!proto.bragi.ValorantMatchStatePartialUpdates} returns this
*/
proto.bragi.ValorantMatchStatePartialUpdates.prototype.setUpdatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bragi.ValorantMatchStatePartialUpdate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.ValorantMatchStatePartialUpdate}
 */
proto.bragi.ValorantMatchStatePartialUpdates.prototype.addUpdates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bragi.ValorantMatchStatePartialUpdate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.ValorantMatchStatePartialUpdates} returns this
 */
proto.bragi.ValorantMatchStatePartialUpdates.prototype.clearUpdatesList = function() {
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
proto.bragi.ValorantMatchStatePartialUpdate.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.bragi.ValorantMatchStatePartialUpdate.UpdateCase = {
  UPDATE_NOT_SET: 0,
  SCORE: 1,
  CURRENT_MAP: 2,
  CURRENT_MAP_PARTIAL_UPDATE: 3
};

/**
 * @return {proto.bragi.ValorantMatchStatePartialUpdate.UpdateCase}
 */
proto.bragi.ValorantMatchStatePartialUpdate.prototype.getUpdateCase = function() {
  return /** @type {proto.bragi.ValorantMatchStatePartialUpdate.UpdateCase} */(jspb.Message.computeOneofCase(this, proto.bragi.ValorantMatchStatePartialUpdate.oneofGroups_[0]));
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
proto.bragi.ValorantMatchStatePartialUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantMatchStatePartialUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantMatchStatePartialUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantMatchStatePartialUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
score: (f = msg.getScore()) && proto.bragi.ValorantMatchScoreState.toObject(includeInstance, f),
currentMap: (f = msg.getCurrentMap()) && proto.bragi.ValorantCurrentMapState.toObject(includeInstance, f),
currentMapPartialUpdate: (f = msg.getCurrentMapPartialUpdate()) && proto.bragi.ValorantCurrentMapStatePartialUpdate.toObject(includeInstance, f)
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
 * @return {!proto.bragi.ValorantMatchStatePartialUpdate}
 */
proto.bragi.ValorantMatchStatePartialUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantMatchStatePartialUpdate;
  return proto.bragi.ValorantMatchStatePartialUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantMatchStatePartialUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantMatchStatePartialUpdate}
 */
proto.bragi.ValorantMatchStatePartialUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.ValorantMatchScoreState;
      reader.readMessage(value,proto.bragi.ValorantMatchScoreState.deserializeBinaryFromReader);
      msg.setScore(value);
      break;
    case 2:
      var value = new proto.bragi.ValorantCurrentMapState;
      reader.readMessage(value,proto.bragi.ValorantCurrentMapState.deserializeBinaryFromReader);
      msg.setCurrentMap(value);
      break;
    case 3:
      var value = new proto.bragi.ValorantCurrentMapStatePartialUpdate;
      reader.readMessage(value,proto.bragi.ValorantCurrentMapStatePartialUpdate.deserializeBinaryFromReader);
      msg.setCurrentMapPartialUpdate(value);
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
proto.bragi.ValorantMatchStatePartialUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantMatchStatePartialUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantMatchStatePartialUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantMatchStatePartialUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScore();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.ValorantMatchScoreState.serializeBinaryToWriter
    );
  }
  f = message.getCurrentMap();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.ValorantCurrentMapState.serializeBinaryToWriter
    );
  }
  f = message.getCurrentMapPartialUpdate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.ValorantCurrentMapStatePartialUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * optional ValorantMatchScoreState score = 1;
 * @return {?proto.bragi.ValorantMatchScoreState}
 */
proto.bragi.ValorantMatchStatePartialUpdate.prototype.getScore = function() {
  return /** @type{?proto.bragi.ValorantMatchScoreState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantMatchScoreState, 1));
};


/**
 * @param {?proto.bragi.ValorantMatchScoreState|undefined} value
 * @return {!proto.bragi.ValorantMatchStatePartialUpdate} returns this
*/
proto.bragi.ValorantMatchStatePartialUpdate.prototype.setScore = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.ValorantMatchStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantMatchStatePartialUpdate} returns this
 */
proto.bragi.ValorantMatchStatePartialUpdate.prototype.clearScore = function() {
  return this.setScore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantMatchStatePartialUpdate.prototype.hasScore = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ValorantCurrentMapState current_map = 2;
 * @return {?proto.bragi.ValorantCurrentMapState}
 */
proto.bragi.ValorantMatchStatePartialUpdate.prototype.getCurrentMap = function() {
  return /** @type{?proto.bragi.ValorantCurrentMapState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantCurrentMapState, 2));
};


/**
 * @param {?proto.bragi.ValorantCurrentMapState|undefined} value
 * @return {!proto.bragi.ValorantMatchStatePartialUpdate} returns this
*/
proto.bragi.ValorantMatchStatePartialUpdate.prototype.setCurrentMap = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bragi.ValorantMatchStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantMatchStatePartialUpdate} returns this
 */
proto.bragi.ValorantMatchStatePartialUpdate.prototype.clearCurrentMap = function() {
  return this.setCurrentMap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantMatchStatePartialUpdate.prototype.hasCurrentMap = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ValorantCurrentMapStatePartialUpdate current_map_partial_update = 3;
 * @return {?proto.bragi.ValorantCurrentMapStatePartialUpdate}
 */
proto.bragi.ValorantMatchStatePartialUpdate.prototype.getCurrentMapPartialUpdate = function() {
  return /** @type{?proto.bragi.ValorantCurrentMapStatePartialUpdate} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantCurrentMapStatePartialUpdate, 3));
};


/**
 * @param {?proto.bragi.ValorantCurrentMapStatePartialUpdate|undefined} value
 * @return {!proto.bragi.ValorantMatchStatePartialUpdate} returns this
*/
proto.bragi.ValorantMatchStatePartialUpdate.prototype.setCurrentMapPartialUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.bragi.ValorantMatchStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantMatchStatePartialUpdate} returns this
 */
proto.bragi.ValorantMatchStatePartialUpdate.prototype.clearCurrentMapPartialUpdate = function() {
  return this.setCurrentMapPartialUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantMatchStatePartialUpdate.prototype.hasCurrentMapPartialUpdate = function() {
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
proto.bragi.ValorantMatchState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantMatchState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantMatchState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantMatchState.toObject = function(includeInstance, msg) {
  var f, obj = {
matchUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
matchType: jspb.Message.getFieldWithDefault(msg, 2, 0),
homeTeam: (f = msg.getHomeTeam()) && bragi_common_pb.Team.toObject(includeInstance, f),
awayTeam: (f = msg.getAwayTeam()) && bragi_common_pb.Team.toObject(includeInstance, f),
score: (f = msg.getScore()) && proto.bragi.ValorantMatchScoreState.toObject(includeInstance, f),
matchStatus: jspb.Message.getFieldWithDefault(msg, 6, 0),
currentMap: (f = msg.getCurrentMap()) && proto.bragi.ValorantCurrentMapState.toObject(includeInstance, f)
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
 * @return {!proto.bragi.ValorantMatchState}
 */
proto.bragi.ValorantMatchState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantMatchState;
  return proto.bragi.ValorantMatchState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantMatchState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantMatchState}
 */
proto.bragi.ValorantMatchState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new bragi_common_pb.Team;
      reader.readMessage(value,bragi_common_pb.Team.deserializeBinaryFromReader);
      msg.setHomeTeam(value);
      break;
    case 4:
      var value = new bragi_common_pb.Team;
      reader.readMessage(value,bragi_common_pb.Team.deserializeBinaryFromReader);
      msg.setAwayTeam(value);
      break;
    case 5:
      var value = new proto.bragi.ValorantMatchScoreState;
      reader.readMessage(value,proto.bragi.ValorantMatchScoreState.deserializeBinaryFromReader);
      msg.setScore(value);
      break;
    case 6:
      var value = /** @type {!proto.bragi.MatchStatusType} */ (reader.readEnum());
      msg.setMatchStatus(value);
      break;
    case 7:
      var value = new proto.bragi.ValorantCurrentMapState;
      reader.readMessage(value,proto.bragi.ValorantCurrentMapState.deserializeBinaryFromReader);
      msg.setCurrentMap(value);
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
proto.bragi.ValorantMatchState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantMatchState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantMatchState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantMatchState.serializeBinaryToWriter = function(message, writer) {
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
      bragi_common_pb.Team.serializeBinaryToWriter
    );
  }
  f = message.getAwayTeam();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      bragi_common_pb.Team.serializeBinaryToWriter
    );
  }
  f = message.getScore();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bragi.ValorantMatchScoreState.serializeBinaryToWriter
    );
  }
  f = message.getMatchStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getCurrentMap();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bragi.ValorantCurrentMapState.serializeBinaryToWriter
    );
  }
};


/**
 * optional string match_urn = 1;
 * @return {string}
 */
proto.bragi.ValorantMatchState.prototype.getMatchUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.ValorantMatchState} returns this
 */
proto.bragi.ValorantMatchState.prototype.setMatchUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional BestOfType match_type = 2;
 * @return {!proto.bragi.BestOfType}
 */
proto.bragi.ValorantMatchState.prototype.getMatchType = function() {
  return /** @type {!proto.bragi.BestOfType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bragi.BestOfType} value
 * @return {!proto.bragi.ValorantMatchState} returns this
 */
proto.bragi.ValorantMatchState.prototype.setMatchType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional Team home_team = 3;
 * @return {?proto.bragi.Team}
 */
proto.bragi.ValorantMatchState.prototype.getHomeTeam = function() {
  return /** @type{?proto.bragi.Team} */ (
    jspb.Message.getWrapperField(this, bragi_common_pb.Team, 3));
};


/**
 * @param {?proto.bragi.Team|undefined} value
 * @return {!proto.bragi.ValorantMatchState} returns this
*/
proto.bragi.ValorantMatchState.prototype.setHomeTeam = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantMatchState} returns this
 */
proto.bragi.ValorantMatchState.prototype.clearHomeTeam = function() {
  return this.setHomeTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantMatchState.prototype.hasHomeTeam = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Team away_team = 4;
 * @return {?proto.bragi.Team}
 */
proto.bragi.ValorantMatchState.prototype.getAwayTeam = function() {
  return /** @type{?proto.bragi.Team} */ (
    jspb.Message.getWrapperField(this, bragi_common_pb.Team, 4));
};


/**
 * @param {?proto.bragi.Team|undefined} value
 * @return {!proto.bragi.ValorantMatchState} returns this
*/
proto.bragi.ValorantMatchState.prototype.setAwayTeam = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantMatchState} returns this
 */
proto.bragi.ValorantMatchState.prototype.clearAwayTeam = function() {
  return this.setAwayTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantMatchState.prototype.hasAwayTeam = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ValorantMatchScoreState score = 5;
 * @return {?proto.bragi.ValorantMatchScoreState}
 */
proto.bragi.ValorantMatchState.prototype.getScore = function() {
  return /** @type{?proto.bragi.ValorantMatchScoreState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantMatchScoreState, 5));
};


/**
 * @param {?proto.bragi.ValorantMatchScoreState|undefined} value
 * @return {!proto.bragi.ValorantMatchState} returns this
*/
proto.bragi.ValorantMatchState.prototype.setScore = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantMatchState} returns this
 */
proto.bragi.ValorantMatchState.prototype.clearScore = function() {
  return this.setScore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantMatchState.prototype.hasScore = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional MatchStatusType match_status = 6;
 * @return {!proto.bragi.MatchStatusType}
 */
proto.bragi.ValorantMatchState.prototype.getMatchStatus = function() {
  return /** @type {!proto.bragi.MatchStatusType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.bragi.MatchStatusType} value
 * @return {!proto.bragi.ValorantMatchState} returns this
 */
proto.bragi.ValorantMatchState.prototype.setMatchStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional ValorantCurrentMapState current_map = 7;
 * @return {?proto.bragi.ValorantCurrentMapState}
 */
proto.bragi.ValorantMatchState.prototype.getCurrentMap = function() {
  return /** @type{?proto.bragi.ValorantCurrentMapState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantCurrentMapState, 7));
};


/**
 * @param {?proto.bragi.ValorantCurrentMapState|undefined} value
 * @return {!proto.bragi.ValorantMatchState} returns this
*/
proto.bragi.ValorantMatchState.prototype.setCurrentMap = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantMatchState} returns this
 */
proto.bragi.ValorantMatchState.prototype.clearCurrentMap = function() {
  return this.setCurrentMap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantMatchState.prototype.hasCurrentMap = function() {
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
proto.bragi.ValorantMatchScoreState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantMatchScoreState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantMatchScoreState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantMatchScoreState.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bragi.ValorantMatchScoreState}
 */
proto.bragi.ValorantMatchScoreState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantMatchScoreState;
  return proto.bragi.ValorantMatchScoreState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantMatchScoreState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantMatchScoreState}
 */
proto.bragi.ValorantMatchScoreState.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bragi.ValorantMatchScoreState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantMatchScoreState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantMatchScoreState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantMatchScoreState.serializeBinaryToWriter = function(message, writer) {
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
proto.bragi.ValorantMatchScoreState.prototype.getHomeScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.ValorantMatchScoreState} returns this
 */
proto.bragi.ValorantMatchScoreState.prototype.setHomeScore = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 away_score = 2;
 * @return {number}
 */
proto.bragi.ValorantMatchScoreState.prototype.getAwayScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.ValorantMatchScoreState} returns this
 */
proto.bragi.ValorantMatchScoreState.prototype.setAwayScore = function(value) {
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
proto.bragi.ValorantCurrentMapStatePartialUpdate.oneofGroups_ = [[1,2,3,4,5,6]];

/**
 * @enum {number}
 */
proto.bragi.ValorantCurrentMapStatePartialUpdate.UpdateCase = {
  UPDATE_NOT_SET: 0,
  SCORE: 1,
  CURRENT_ROUND: 2,
  CURRENT_ROUND_PARTIAL_UPDATE: 3,
  TEAM_CURRENT_MAP_STATE: 4,
  TEAM_CURRENT_MAP_PARTIAL_UPDATE: 5,
  PREVIOUS_ROUNDS: 6
};

/**
 * @return {proto.bragi.ValorantCurrentMapStatePartialUpdate.UpdateCase}
 */
proto.bragi.ValorantCurrentMapStatePartialUpdate.prototype.getUpdateCase = function() {
  return /** @type {proto.bragi.ValorantCurrentMapStatePartialUpdate.UpdateCase} */(jspb.Message.computeOneofCase(this, proto.bragi.ValorantCurrentMapStatePartialUpdate.oneofGroups_[0]));
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
proto.bragi.ValorantCurrentMapStatePartialUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantCurrentMapStatePartialUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantCurrentMapStatePartialUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantCurrentMapStatePartialUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
score: (f = msg.getScore()) && proto.bragi.ValorantMapScoreState.toObject(includeInstance, f),
currentRound: (f = msg.getCurrentRound()) && proto.bragi.ValorantCurrentRoundState.toObject(includeInstance, f),
currentRoundPartialUpdate: (f = msg.getCurrentRoundPartialUpdate()) && proto.bragi.ValorantCurrentRoundStatePartialUpdate.toObject(includeInstance, f),
teamCurrentMapState: (f = msg.getTeamCurrentMapState()) && proto.bragi.ValorantTeamCurrentMapState.toObject(includeInstance, f),
teamCurrentMapPartialUpdate: (f = msg.getTeamCurrentMapPartialUpdate()) && proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.toObject(includeInstance, f),
previousRounds: (f = msg.getPreviousRounds()) && proto.bragi.ValorantPreviousRoundsState.toObject(includeInstance, f)
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
 * @return {!proto.bragi.ValorantCurrentMapStatePartialUpdate}
 */
proto.bragi.ValorantCurrentMapStatePartialUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantCurrentMapStatePartialUpdate;
  return proto.bragi.ValorantCurrentMapStatePartialUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantCurrentMapStatePartialUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantCurrentMapStatePartialUpdate}
 */
proto.bragi.ValorantCurrentMapStatePartialUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.ValorantMapScoreState;
      reader.readMessage(value,proto.bragi.ValorantMapScoreState.deserializeBinaryFromReader);
      msg.setScore(value);
      break;
    case 2:
      var value = new proto.bragi.ValorantCurrentRoundState;
      reader.readMessage(value,proto.bragi.ValorantCurrentRoundState.deserializeBinaryFromReader);
      msg.setCurrentRound(value);
      break;
    case 3:
      var value = new proto.bragi.ValorantCurrentRoundStatePartialUpdate;
      reader.readMessage(value,proto.bragi.ValorantCurrentRoundStatePartialUpdate.deserializeBinaryFromReader);
      msg.setCurrentRoundPartialUpdate(value);
      break;
    case 4:
      var value = new proto.bragi.ValorantTeamCurrentMapState;
      reader.readMessage(value,proto.bragi.ValorantTeamCurrentMapState.deserializeBinaryFromReader);
      msg.setTeamCurrentMapState(value);
      break;
    case 5:
      var value = new proto.bragi.ValorantTeamCurrentMapStatePartialUpdate;
      reader.readMessage(value,proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.deserializeBinaryFromReader);
      msg.setTeamCurrentMapPartialUpdate(value);
      break;
    case 6:
      var value = new proto.bragi.ValorantPreviousRoundsState;
      reader.readMessage(value,proto.bragi.ValorantPreviousRoundsState.deserializeBinaryFromReader);
      msg.setPreviousRounds(value);
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
proto.bragi.ValorantCurrentMapStatePartialUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantCurrentMapStatePartialUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantCurrentMapStatePartialUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantCurrentMapStatePartialUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScore();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.ValorantMapScoreState.serializeBinaryToWriter
    );
  }
  f = message.getCurrentRound();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.ValorantCurrentRoundState.serializeBinaryToWriter
    );
  }
  f = message.getCurrentRoundPartialUpdate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.ValorantCurrentRoundStatePartialUpdate.serializeBinaryToWriter
    );
  }
  f = message.getTeamCurrentMapState();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.ValorantTeamCurrentMapState.serializeBinaryToWriter
    );
  }
  f = message.getTeamCurrentMapPartialUpdate();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.serializeBinaryToWriter
    );
  }
  f = message.getPreviousRounds();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bragi.ValorantPreviousRoundsState.serializeBinaryToWriter
    );
  }
};


/**
 * optional ValorantMapScoreState score = 1;
 * @return {?proto.bragi.ValorantMapScoreState}
 */
proto.bragi.ValorantCurrentMapStatePartialUpdate.prototype.getScore = function() {
  return /** @type{?proto.bragi.ValorantMapScoreState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantMapScoreState, 1));
};


/**
 * @param {?proto.bragi.ValorantMapScoreState|undefined} value
 * @return {!proto.bragi.ValorantCurrentMapStatePartialUpdate} returns this
*/
proto.bragi.ValorantCurrentMapStatePartialUpdate.prototype.setScore = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.ValorantCurrentMapStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantCurrentMapStatePartialUpdate} returns this
 */
proto.bragi.ValorantCurrentMapStatePartialUpdate.prototype.clearScore = function() {
  return this.setScore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantCurrentMapStatePartialUpdate.prototype.hasScore = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ValorantCurrentRoundState current_round = 2;
 * @return {?proto.bragi.ValorantCurrentRoundState}
 */
proto.bragi.ValorantCurrentMapStatePartialUpdate.prototype.getCurrentRound = function() {
  return /** @type{?proto.bragi.ValorantCurrentRoundState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantCurrentRoundState, 2));
};


/**
 * @param {?proto.bragi.ValorantCurrentRoundState|undefined} value
 * @return {!proto.bragi.ValorantCurrentMapStatePartialUpdate} returns this
*/
proto.bragi.ValorantCurrentMapStatePartialUpdate.prototype.setCurrentRound = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bragi.ValorantCurrentMapStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantCurrentMapStatePartialUpdate} returns this
 */
proto.bragi.ValorantCurrentMapStatePartialUpdate.prototype.clearCurrentRound = function() {
  return this.setCurrentRound(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantCurrentMapStatePartialUpdate.prototype.hasCurrentRound = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ValorantCurrentRoundStatePartialUpdate current_round_partial_update = 3;
 * @return {?proto.bragi.ValorantCurrentRoundStatePartialUpdate}
 */
proto.bragi.ValorantCurrentMapStatePartialUpdate.prototype.getCurrentRoundPartialUpdate = function() {
  return /** @type{?proto.bragi.ValorantCurrentRoundStatePartialUpdate} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantCurrentRoundStatePartialUpdate, 3));
};


/**
 * @param {?proto.bragi.ValorantCurrentRoundStatePartialUpdate|undefined} value
 * @return {!proto.bragi.ValorantCurrentMapStatePartialUpdate} returns this
*/
proto.bragi.ValorantCurrentMapStatePartialUpdate.prototype.setCurrentRoundPartialUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.bragi.ValorantCurrentMapStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantCurrentMapStatePartialUpdate} returns this
 */
proto.bragi.ValorantCurrentMapStatePartialUpdate.prototype.clearCurrentRoundPartialUpdate = function() {
  return this.setCurrentRoundPartialUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantCurrentMapStatePartialUpdate.prototype.hasCurrentRoundPartialUpdate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ValorantTeamCurrentMapState team_current_map_state = 4;
 * @return {?proto.bragi.ValorantTeamCurrentMapState}
 */
proto.bragi.ValorantCurrentMapStatePartialUpdate.prototype.getTeamCurrentMapState = function() {
  return /** @type{?proto.bragi.ValorantTeamCurrentMapState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantTeamCurrentMapState, 4));
};


/**
 * @param {?proto.bragi.ValorantTeamCurrentMapState|undefined} value
 * @return {!proto.bragi.ValorantCurrentMapStatePartialUpdate} returns this
*/
proto.bragi.ValorantCurrentMapStatePartialUpdate.prototype.setTeamCurrentMapState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.bragi.ValorantCurrentMapStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantCurrentMapStatePartialUpdate} returns this
 */
proto.bragi.ValorantCurrentMapStatePartialUpdate.prototype.clearTeamCurrentMapState = function() {
  return this.setTeamCurrentMapState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantCurrentMapStatePartialUpdate.prototype.hasTeamCurrentMapState = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ValorantTeamCurrentMapStatePartialUpdate team_current_map_partial_update = 5;
 * @return {?proto.bragi.ValorantTeamCurrentMapStatePartialUpdate}
 */
proto.bragi.ValorantCurrentMapStatePartialUpdate.prototype.getTeamCurrentMapPartialUpdate = function() {
  return /** @type{?proto.bragi.ValorantTeamCurrentMapStatePartialUpdate} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantTeamCurrentMapStatePartialUpdate, 5));
};


/**
 * @param {?proto.bragi.ValorantTeamCurrentMapStatePartialUpdate|undefined} value
 * @return {!proto.bragi.ValorantCurrentMapStatePartialUpdate} returns this
*/
proto.bragi.ValorantCurrentMapStatePartialUpdate.prototype.setTeamCurrentMapPartialUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.bragi.ValorantCurrentMapStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantCurrentMapStatePartialUpdate} returns this
 */
proto.bragi.ValorantCurrentMapStatePartialUpdate.prototype.clearTeamCurrentMapPartialUpdate = function() {
  return this.setTeamCurrentMapPartialUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantCurrentMapStatePartialUpdate.prototype.hasTeamCurrentMapPartialUpdate = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ValorantPreviousRoundsState previous_rounds = 6;
 * @return {?proto.bragi.ValorantPreviousRoundsState}
 */
proto.bragi.ValorantCurrentMapStatePartialUpdate.prototype.getPreviousRounds = function() {
  return /** @type{?proto.bragi.ValorantPreviousRoundsState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantPreviousRoundsState, 6));
};


/**
 * @param {?proto.bragi.ValorantPreviousRoundsState|undefined} value
 * @return {!proto.bragi.ValorantCurrentMapStatePartialUpdate} returns this
*/
proto.bragi.ValorantCurrentMapStatePartialUpdate.prototype.setPreviousRounds = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.bragi.ValorantCurrentMapStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantCurrentMapStatePartialUpdate} returns this
 */
proto.bragi.ValorantCurrentMapStatePartialUpdate.prototype.clearPreviousRounds = function() {
  return this.setPreviousRounds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantCurrentMapStatePartialUpdate.prototype.hasPreviousRounds = function() {
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
proto.bragi.ValorantCurrentMapState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantCurrentMapState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantCurrentMapState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantCurrentMapState.toObject = function(includeInstance, msg) {
  var f, obj = {
mapOrder: jspb.Message.getFieldWithDefault(msg, 1, 0),
mapPaused: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
mapName: jspb.Message.getFieldWithDefault(msg, 3, ""),
winTeamUrn: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
score: (f = msg.getScore()) && proto.bragi.ValorantMapScoreState.toObject(includeInstance, f),
currentRound: (f = msg.getCurrentRound()) && proto.bragi.ValorantCurrentRoundState.toObject(includeInstance, f),
teamsMap: (f = msg.getTeamsMap()) ? f.toObject(includeInstance, proto.bragi.ValorantTeamCurrentMapState.toObject) : [],
previousRounds: (f = msg.getPreviousRounds()) && proto.bragi.ValorantPreviousRoundsState.toObject(includeInstance, f)
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
 * @return {!proto.bragi.ValorantCurrentMapState}
 */
proto.bragi.ValorantCurrentMapState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantCurrentMapState;
  return proto.bragi.ValorantCurrentMapState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantCurrentMapState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantCurrentMapState}
 */
proto.bragi.ValorantCurrentMapState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMapPaused(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMapName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setWinTeamUrn(value);
      break;
    case 5:
      var value = new proto.bragi.ValorantMapScoreState;
      reader.readMessage(value,proto.bragi.ValorantMapScoreState.deserializeBinaryFromReader);
      msg.setScore(value);
      break;
    case 6:
      var value = new proto.bragi.ValorantCurrentRoundState;
      reader.readMessage(value,proto.bragi.ValorantCurrentRoundState.deserializeBinaryFromReader);
      msg.setCurrentRound(value);
      break;
    case 7:
      var value = msg.getTeamsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bragi.ValorantTeamCurrentMapState.deserializeBinaryFromReader, "", new proto.bragi.ValorantTeamCurrentMapState());
         });
      break;
    case 8:
      var value = new proto.bragi.ValorantPreviousRoundsState;
      reader.readMessage(value,proto.bragi.ValorantPreviousRoundsState.deserializeBinaryFromReader);
      msg.setPreviousRounds(value);
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
proto.bragi.ValorantCurrentMapState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantCurrentMapState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantCurrentMapState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantCurrentMapState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapOrder();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getMapPaused();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getMapName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getScore();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bragi.ValorantMapScoreState.serializeBinaryToWriter
    );
  }
  f = message.getCurrentRound();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bragi.ValorantCurrentRoundState.serializeBinaryToWriter
    );
  }
  f = message.getTeamsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bragi.ValorantTeamCurrentMapState.serializeBinaryToWriter);
  }
  f = message.getPreviousRounds();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.bragi.ValorantPreviousRoundsState.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 map_order = 1;
 * @return {number}
 */
proto.bragi.ValorantCurrentMapState.prototype.getMapOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.ValorantCurrentMapState} returns this
 */
proto.bragi.ValorantCurrentMapState.prototype.setMapOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool map_paused = 2;
 * @return {boolean}
 */
proto.bragi.ValorantCurrentMapState.prototype.getMapPaused = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.ValorantCurrentMapState} returns this
 */
proto.bragi.ValorantCurrentMapState.prototype.setMapPaused = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string map_name = 3;
 * @return {string}
 */
proto.bragi.ValorantCurrentMapState.prototype.getMapName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.ValorantCurrentMapState} returns this
 */
proto.bragi.ValorantCurrentMapState.prototype.setMapName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string win_team_urn = 4;
 * @return {string}
 */
proto.bragi.ValorantCurrentMapState.prototype.getWinTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.ValorantCurrentMapState} returns this
 */
proto.bragi.ValorantCurrentMapState.prototype.setWinTeamUrn = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.ValorantCurrentMapState} returns this
 */
proto.bragi.ValorantCurrentMapState.prototype.clearWinTeamUrn = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantCurrentMapState.prototype.hasWinTeamUrn = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ValorantMapScoreState score = 5;
 * @return {?proto.bragi.ValorantMapScoreState}
 */
proto.bragi.ValorantCurrentMapState.prototype.getScore = function() {
  return /** @type{?proto.bragi.ValorantMapScoreState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantMapScoreState, 5));
};


/**
 * @param {?proto.bragi.ValorantMapScoreState|undefined} value
 * @return {!proto.bragi.ValorantCurrentMapState} returns this
*/
proto.bragi.ValorantCurrentMapState.prototype.setScore = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantCurrentMapState} returns this
 */
proto.bragi.ValorantCurrentMapState.prototype.clearScore = function() {
  return this.setScore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantCurrentMapState.prototype.hasScore = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ValorantCurrentRoundState current_round = 6;
 * @return {?proto.bragi.ValorantCurrentRoundState}
 */
proto.bragi.ValorantCurrentMapState.prototype.getCurrentRound = function() {
  return /** @type{?proto.bragi.ValorantCurrentRoundState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantCurrentRoundState, 6));
};


/**
 * @param {?proto.bragi.ValorantCurrentRoundState|undefined} value
 * @return {!proto.bragi.ValorantCurrentMapState} returns this
*/
proto.bragi.ValorantCurrentMapState.prototype.setCurrentRound = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantCurrentMapState} returns this
 */
proto.bragi.ValorantCurrentMapState.prototype.clearCurrentRound = function() {
  return this.setCurrentRound(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantCurrentMapState.prototype.hasCurrentRound = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * map<string, ValorantTeamCurrentMapState> teams = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bragi.ValorantTeamCurrentMapState>}
 */
proto.bragi.ValorantCurrentMapState.prototype.getTeamsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bragi.ValorantTeamCurrentMapState>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      proto.bragi.ValorantTeamCurrentMapState));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bragi.ValorantCurrentMapState} returns this
 */
proto.bragi.ValorantCurrentMapState.prototype.clearTeamsMap = function() {
  this.getTeamsMap().clear();
  return this;
};


/**
 * optional ValorantPreviousRoundsState previous_rounds = 8;
 * @return {?proto.bragi.ValorantPreviousRoundsState}
 */
proto.bragi.ValorantCurrentMapState.prototype.getPreviousRounds = function() {
  return /** @type{?proto.bragi.ValorantPreviousRoundsState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantPreviousRoundsState, 8));
};


/**
 * @param {?proto.bragi.ValorantPreviousRoundsState|undefined} value
 * @return {!proto.bragi.ValorantCurrentMapState} returns this
*/
proto.bragi.ValorantCurrentMapState.prototype.setPreviousRounds = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantCurrentMapState} returns this
 */
proto.bragi.ValorantCurrentMapState.prototype.clearPreviousRounds = function() {
  return this.setPreviousRounds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantCurrentMapState.prototype.hasPreviousRounds = function() {
  return jspb.Message.getField(this, 8) != null;
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
proto.bragi.ValorantMapScoreState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantMapScoreState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantMapScoreState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantMapScoreState.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bragi.ValorantMapScoreState}
 */
proto.bragi.ValorantMapScoreState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantMapScoreState;
  return proto.bragi.ValorantMapScoreState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantMapScoreState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantMapScoreState}
 */
proto.bragi.ValorantMapScoreState.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bragi.ValorantMapScoreState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantMapScoreState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantMapScoreState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantMapScoreState.serializeBinaryToWriter = function(message, writer) {
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
proto.bragi.ValorantMapScoreState.prototype.getHomeScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.ValorantMapScoreState} returns this
 */
proto.bragi.ValorantMapScoreState.prototype.setHomeScore = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 away_score = 2;
 * @return {number}
 */
proto.bragi.ValorantMapScoreState.prototype.getAwayScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.ValorantMapScoreState} returns this
 */
proto.bragi.ValorantMapScoreState.prototype.setAwayScore = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.ValorantPreviousRoundsState.repeatedFields_ = [1];



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
proto.bragi.ValorantPreviousRoundsState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantPreviousRoundsState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantPreviousRoundsState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantPreviousRoundsState.toObject = function(includeInstance, msg) {
  var f, obj = {
roundsList: jspb.Message.toObjectList(msg.getRoundsList(),
    proto.bragi.ValorantPreviousRound.toObject, includeInstance)
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
 * @return {!proto.bragi.ValorantPreviousRoundsState}
 */
proto.bragi.ValorantPreviousRoundsState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantPreviousRoundsState;
  return proto.bragi.ValorantPreviousRoundsState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantPreviousRoundsState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantPreviousRoundsState}
 */
proto.bragi.ValorantPreviousRoundsState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.ValorantPreviousRound;
      reader.readMessage(value,proto.bragi.ValorantPreviousRound.deserializeBinaryFromReader);
      msg.addRounds(value);
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
proto.bragi.ValorantPreviousRoundsState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantPreviousRoundsState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantPreviousRoundsState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantPreviousRoundsState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoundsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bragi.ValorantPreviousRound.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ValorantPreviousRound rounds = 1;
 * @return {!Array<!proto.bragi.ValorantPreviousRound>}
 */
proto.bragi.ValorantPreviousRoundsState.prototype.getRoundsList = function() {
  return /** @type{!Array<!proto.bragi.ValorantPreviousRound>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.ValorantPreviousRound, 1));
};


/**
 * @param {!Array<!proto.bragi.ValorantPreviousRound>} value
 * @return {!proto.bragi.ValorantPreviousRoundsState} returns this
*/
proto.bragi.ValorantPreviousRoundsState.prototype.setRoundsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bragi.ValorantPreviousRound=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.ValorantPreviousRound}
 */
proto.bragi.ValorantPreviousRoundsState.prototype.addRounds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bragi.ValorantPreviousRound, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.ValorantPreviousRoundsState} returns this
 */
proto.bragi.ValorantPreviousRoundsState.prototype.clearRoundsList = function() {
  return this.setRoundsList([]);
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
proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantTeamCurrentMapStatePartialUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
teamUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
payload: (f = msg.getPayload()) && proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload.toObject(includeInstance, f)
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
 * @return {!proto.bragi.ValorantTeamCurrentMapStatePartialUpdate}
 */
proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantTeamCurrentMapStatePartialUpdate;
  return proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantTeamCurrentMapStatePartialUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantTeamCurrentMapStatePartialUpdate}
 */
proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload;
      reader.readMessage(value,proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload.deserializeBinaryFromReader);
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
proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantTeamCurrentMapStatePartialUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.serializeBinaryToWriter = function(message, writer) {
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
      proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload.serializeBinaryToWriter
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
proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  PLAYER_CURRENT_MAP_STATE: 1,
  PLAYER_CURRENT_MAP_PARTIAL_UPDATE: 2
};

/**
 * @return {proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload.PayloadCase}
 */
proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload.prototype.getPayloadCase = function() {
  return /** @type {proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload.oneofGroups_[0]));
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
proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
playerCurrentMapState: (f = msg.getPlayerCurrentMapState()) && proto.bragi.ValorantPlayerCurrentMapState.toObject(includeInstance, f),
playerCurrentMapPartialUpdate: (f = msg.getPlayerCurrentMapPartialUpdate()) && proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.toObject(includeInstance, f)
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
 * @return {!proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload}
 */
proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload;
  return proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload}
 */
proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.ValorantPlayerCurrentMapState;
      reader.readMessage(value,proto.bragi.ValorantPlayerCurrentMapState.deserializeBinaryFromReader);
      msg.setPlayerCurrentMapState(value);
      break;
    case 2:
      var value = new proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate;
      reader.readMessage(value,proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.deserializeBinaryFromReader);
      msg.setPlayerCurrentMapPartialUpdate(value);
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
proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerCurrentMapState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.ValorantPlayerCurrentMapState.serializeBinaryToWriter
    );
  }
  f = message.getPlayerCurrentMapPartialUpdate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * optional ValorantPlayerCurrentMapState player_current_map_state = 1;
 * @return {?proto.bragi.ValorantPlayerCurrentMapState}
 */
proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload.prototype.getPlayerCurrentMapState = function() {
  return /** @type{?proto.bragi.ValorantPlayerCurrentMapState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantPlayerCurrentMapState, 1));
};


/**
 * @param {?proto.bragi.ValorantPlayerCurrentMapState|undefined} value
 * @return {!proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload} returns this
*/
proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload.prototype.setPlayerCurrentMapState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload} returns this
 */
proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload.prototype.clearPlayerCurrentMapState = function() {
  return this.setPlayerCurrentMapState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload.prototype.hasPlayerCurrentMapState = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ValorantPlayerCurrentMapStatePartialUpdate player_current_map_partial_update = 2;
 * @return {?proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate}
 */
proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload.prototype.getPlayerCurrentMapPartialUpdate = function() {
  return /** @type{?proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate, 2));
};


/**
 * @param {?proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate|undefined} value
 * @return {!proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload} returns this
*/
proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload.prototype.setPlayerCurrentMapPartialUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload} returns this
 */
proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload.prototype.clearPlayerCurrentMapPartialUpdate = function() {
  return this.setPlayerCurrentMapPartialUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload.prototype.hasPlayerCurrentMapPartialUpdate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string team_urn = 1;
 * @return {string}
 */
proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.ValorantTeamCurrentMapStatePartialUpdate} returns this
 */
proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Payload payload = 2;
 * @return {?proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload}
 */
proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.prototype.getPayload = function() {
  return /** @type{?proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload, 2));
};


/**
 * @param {?proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.Payload|undefined} value
 * @return {!proto.bragi.ValorantTeamCurrentMapStatePartialUpdate} returns this
*/
proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantTeamCurrentMapStatePartialUpdate} returns this
 */
proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantTeamCurrentMapStatePartialUpdate.prototype.hasPayload = function() {
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
proto.bragi.ValorantTeamCurrentMapState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantTeamCurrentMapState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantTeamCurrentMapState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantTeamCurrentMapState.toObject = function(includeInstance, msg) {
  var f, obj = {
teamUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
side: jspb.Message.getFieldWithDefault(msg, 2, 0),
playersMap: (f = msg.getPlayersMap()) ? f.toObject(includeInstance, proto.bragi.ValorantPlayerCurrentMapState.toObject) : []
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
 * @return {!proto.bragi.ValorantTeamCurrentMapState}
 */
proto.bragi.ValorantTeamCurrentMapState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantTeamCurrentMapState;
  return proto.bragi.ValorantTeamCurrentMapState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantTeamCurrentMapState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantTeamCurrentMapState}
 */
proto.bragi.ValorantTeamCurrentMapState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.bragi.ValorantSide} */ (reader.readEnum());
      msg.setSide(value);
      break;
    case 3:
      var value = msg.getPlayersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bragi.ValorantPlayerCurrentMapState.deserializeBinaryFromReader, "", new proto.bragi.ValorantPlayerCurrentMapState());
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
proto.bragi.ValorantTeamCurrentMapState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantTeamCurrentMapState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantTeamCurrentMapState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantTeamCurrentMapState.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getPlayersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bragi.ValorantPlayerCurrentMapState.serializeBinaryToWriter);
  }
};


/**
 * optional string team_urn = 1;
 * @return {string}
 */
proto.bragi.ValorantTeamCurrentMapState.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.ValorantTeamCurrentMapState} returns this
 */
proto.bragi.ValorantTeamCurrentMapState.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ValorantSide side = 2;
 * @return {!proto.bragi.ValorantSide}
 */
proto.bragi.ValorantTeamCurrentMapState.prototype.getSide = function() {
  return /** @type {!proto.bragi.ValorantSide} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bragi.ValorantSide} value
 * @return {!proto.bragi.ValorantTeamCurrentMapState} returns this
 */
proto.bragi.ValorantTeamCurrentMapState.prototype.setSide = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * map<string, ValorantPlayerCurrentMapState> players = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bragi.ValorantPlayerCurrentMapState>}
 */
proto.bragi.ValorantTeamCurrentMapState.prototype.getPlayersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bragi.ValorantPlayerCurrentMapState>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.bragi.ValorantPlayerCurrentMapState));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bragi.ValorantTeamCurrentMapState} returns this
 */
proto.bragi.ValorantTeamCurrentMapState.prototype.clearPlayersMap = function() {
  this.getPlayersMap().clear();
  return this;
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
proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
payload: (f = msg.getPayload()) && proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.toObject(includeInstance, f)
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
 * @return {!proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate}
 */
proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate;
  return proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate}
 */
proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload;
      reader.readMessage(value,proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.deserializeBinaryFromReader);
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
proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.serializeBinaryToWriter = function(message, writer) {
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
      proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.serializeBinaryToWriter
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
proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  PLAYER_INFO: 1,
  ABILITIES: 2,
  STATISTICS: 3
};

/**
 * @return {proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.PayloadCase}
 */
proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.prototype.getPayloadCase = function() {
  return /** @type {proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.oneofGroups_[0]));
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
proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
playerInfo: (f = msg.getPlayerInfo()) && proto.bragi.ValorantPlayerInfoState.toObject(includeInstance, f),
abilities: (f = msg.getAbilities()) && proto.bragi.ValorantAbilitiesState.toObject(includeInstance, f),
statistics: (f = msg.getStatistics()) && proto.bragi.ValorantPlayerCurrentMapStatisticsState.toObject(includeInstance, f)
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
 * @return {!proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload}
 */
proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload;
  return proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload}
 */
proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.ValorantPlayerInfoState;
      reader.readMessage(value,proto.bragi.ValorantPlayerInfoState.deserializeBinaryFromReader);
      msg.setPlayerInfo(value);
      break;
    case 2:
      var value = new proto.bragi.ValorantAbilitiesState;
      reader.readMessage(value,proto.bragi.ValorantAbilitiesState.deserializeBinaryFromReader);
      msg.setAbilities(value);
      break;
    case 3:
      var value = new proto.bragi.ValorantPlayerCurrentMapStatisticsState;
      reader.readMessage(value,proto.bragi.ValorantPlayerCurrentMapStatisticsState.deserializeBinaryFromReader);
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
proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.ValorantPlayerInfoState.serializeBinaryToWriter
    );
  }
  f = message.getAbilities();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.ValorantAbilitiesState.serializeBinaryToWriter
    );
  }
  f = message.getStatistics();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.ValorantPlayerCurrentMapStatisticsState.serializeBinaryToWriter
    );
  }
};


/**
 * optional ValorantPlayerInfoState player_info = 1;
 * @return {?proto.bragi.ValorantPlayerInfoState}
 */
proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.prototype.getPlayerInfo = function() {
  return /** @type{?proto.bragi.ValorantPlayerInfoState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantPlayerInfoState, 1));
};


/**
 * @param {?proto.bragi.ValorantPlayerInfoState|undefined} value
 * @return {!proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload} returns this
*/
proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.prototype.setPlayerInfo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload} returns this
 */
proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.prototype.clearPlayerInfo = function() {
  return this.setPlayerInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.prototype.hasPlayerInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ValorantAbilitiesState abilities = 2;
 * @return {?proto.bragi.ValorantAbilitiesState}
 */
proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.prototype.getAbilities = function() {
  return /** @type{?proto.bragi.ValorantAbilitiesState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantAbilitiesState, 2));
};


/**
 * @param {?proto.bragi.ValorantAbilitiesState|undefined} value
 * @return {!proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload} returns this
*/
proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.prototype.setAbilities = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload} returns this
 */
proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.prototype.clearAbilities = function() {
  return this.setAbilities(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.prototype.hasAbilities = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ValorantPlayerCurrentMapStatisticsState statistics = 3;
 * @return {?proto.bragi.ValorantPlayerCurrentMapStatisticsState}
 */
proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.prototype.getStatistics = function() {
  return /** @type{?proto.bragi.ValorantPlayerCurrentMapStatisticsState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantPlayerCurrentMapStatisticsState, 3));
};


/**
 * @param {?proto.bragi.ValorantPlayerCurrentMapStatisticsState|undefined} value
 * @return {!proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload} returns this
*/
proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.prototype.setStatistics = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload} returns this
 */
proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.prototype.clearStatistics = function() {
  return this.setStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload.prototype.hasStatistics = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate} returns this
 */
proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Payload payload = 2;
 * @return {?proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload}
 */
proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.prototype.getPayload = function() {
  return /** @type{?proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload, 2));
};


/**
 * @param {?proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.Payload|undefined} value
 * @return {!proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate} returns this
*/
proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate} returns this
 */
proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantPlayerCurrentMapStatePartialUpdate.prototype.hasPayload = function() {
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
proto.bragi.ValorantPlayerCurrentMapState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantPlayerCurrentMapState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantPlayerCurrentMapState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantPlayerCurrentMapState.toObject = function(includeInstance, msg) {
  var f, obj = {
playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
agentUrn: jspb.Message.getFieldWithDefault(msg, 2, ""),
playerInfo: (f = msg.getPlayerInfo()) && proto.bragi.ValorantPlayerInfoState.toObject(includeInstance, f),
abilities: (f = msg.getAbilities()) && proto.bragi.ValorantAbilitiesState.toObject(includeInstance, f),
statistics: (f = msg.getStatistics()) && proto.bragi.ValorantPlayerCurrentMapStatisticsState.toObject(includeInstance, f)
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
 * @return {!proto.bragi.ValorantPlayerCurrentMapState}
 */
proto.bragi.ValorantPlayerCurrentMapState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantPlayerCurrentMapState;
  return proto.bragi.ValorantPlayerCurrentMapState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantPlayerCurrentMapState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantPlayerCurrentMapState}
 */
proto.bragi.ValorantPlayerCurrentMapState.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setAgentUrn(value);
      break;
    case 3:
      var value = new proto.bragi.ValorantPlayerInfoState;
      reader.readMessage(value,proto.bragi.ValorantPlayerInfoState.deserializeBinaryFromReader);
      msg.setPlayerInfo(value);
      break;
    case 4:
      var value = new proto.bragi.ValorantAbilitiesState;
      reader.readMessage(value,proto.bragi.ValorantAbilitiesState.deserializeBinaryFromReader);
      msg.setAbilities(value);
      break;
    case 5:
      var value = new proto.bragi.ValorantPlayerCurrentMapStatisticsState;
      reader.readMessage(value,proto.bragi.ValorantPlayerCurrentMapStatisticsState.deserializeBinaryFromReader);
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
proto.bragi.ValorantPlayerCurrentMapState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantPlayerCurrentMapState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantPlayerCurrentMapState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantPlayerCurrentMapState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAgentUrn();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlayerInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.ValorantPlayerInfoState.serializeBinaryToWriter
    );
  }
  f = message.getAbilities();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.ValorantAbilitiesState.serializeBinaryToWriter
    );
  }
  f = message.getStatistics();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bragi.ValorantPlayerCurrentMapStatisticsState.serializeBinaryToWriter
    );
  }
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.ValorantPlayerCurrentMapState.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.ValorantPlayerCurrentMapState} returns this
 */
proto.bragi.ValorantPlayerCurrentMapState.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string agent_urn = 2;
 * @return {string}
 */
proto.bragi.ValorantPlayerCurrentMapState.prototype.getAgentUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.ValorantPlayerCurrentMapState} returns this
 */
proto.bragi.ValorantPlayerCurrentMapState.prototype.setAgentUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ValorantPlayerInfoState player_info = 3;
 * @return {?proto.bragi.ValorantPlayerInfoState}
 */
proto.bragi.ValorantPlayerCurrentMapState.prototype.getPlayerInfo = function() {
  return /** @type{?proto.bragi.ValorantPlayerInfoState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantPlayerInfoState, 3));
};


/**
 * @param {?proto.bragi.ValorantPlayerInfoState|undefined} value
 * @return {!proto.bragi.ValorantPlayerCurrentMapState} returns this
*/
proto.bragi.ValorantPlayerCurrentMapState.prototype.setPlayerInfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantPlayerCurrentMapState} returns this
 */
proto.bragi.ValorantPlayerCurrentMapState.prototype.clearPlayerInfo = function() {
  return this.setPlayerInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantPlayerCurrentMapState.prototype.hasPlayerInfo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ValorantAbilitiesState abilities = 4;
 * @return {?proto.bragi.ValorantAbilitiesState}
 */
proto.bragi.ValorantPlayerCurrentMapState.prototype.getAbilities = function() {
  return /** @type{?proto.bragi.ValorantAbilitiesState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantAbilitiesState, 4));
};


/**
 * @param {?proto.bragi.ValorantAbilitiesState|undefined} value
 * @return {!proto.bragi.ValorantPlayerCurrentMapState} returns this
*/
proto.bragi.ValorantPlayerCurrentMapState.prototype.setAbilities = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantPlayerCurrentMapState} returns this
 */
proto.bragi.ValorantPlayerCurrentMapState.prototype.clearAbilities = function() {
  return this.setAbilities(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantPlayerCurrentMapState.prototype.hasAbilities = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ValorantPlayerCurrentMapStatisticsState statistics = 5;
 * @return {?proto.bragi.ValorantPlayerCurrentMapStatisticsState}
 */
proto.bragi.ValorantPlayerCurrentMapState.prototype.getStatistics = function() {
  return /** @type{?proto.bragi.ValorantPlayerCurrentMapStatisticsState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantPlayerCurrentMapStatisticsState, 5));
};


/**
 * @param {?proto.bragi.ValorantPlayerCurrentMapStatisticsState|undefined} value
 * @return {!proto.bragi.ValorantPlayerCurrentMapState} returns this
*/
proto.bragi.ValorantPlayerCurrentMapState.prototype.setStatistics = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantPlayerCurrentMapState} returns this
 */
proto.bragi.ValorantPlayerCurrentMapState.prototype.clearStatistics = function() {
  return this.setStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantPlayerCurrentMapState.prototype.hasStatistics = function() {
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
proto.bragi.ValorantPlayerCurrentMapStatisticsState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantPlayerCurrentMapStatisticsState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantPlayerCurrentMapStatisticsState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantPlayerCurrentMapStatisticsState.toObject = function(includeInstance, msg) {
  var f, obj = {
playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
kills: jspb.Message.getFieldWithDefault(msg, 2, 0),
deaths: jspb.Message.getFieldWithDefault(msg, 3, 0),
assists: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.bragi.ValorantPlayerCurrentMapStatisticsState}
 */
proto.bragi.ValorantPlayerCurrentMapStatisticsState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantPlayerCurrentMapStatisticsState;
  return proto.bragi.ValorantPlayerCurrentMapStatisticsState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantPlayerCurrentMapStatisticsState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantPlayerCurrentMapStatisticsState}
 */
proto.bragi.ValorantPlayerCurrentMapStatisticsState.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDeaths(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAssists(value);
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
proto.bragi.ValorantPlayerCurrentMapStatisticsState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantPlayerCurrentMapStatisticsState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantPlayerCurrentMapStatisticsState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantPlayerCurrentMapStatisticsState.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getDeaths();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getAssists();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.ValorantPlayerCurrentMapStatisticsState.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.ValorantPlayerCurrentMapStatisticsState} returns this
 */
proto.bragi.ValorantPlayerCurrentMapStatisticsState.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 kills = 2;
 * @return {number}
 */
proto.bragi.ValorantPlayerCurrentMapStatisticsState.prototype.getKills = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.ValorantPlayerCurrentMapStatisticsState} returns this
 */
proto.bragi.ValorantPlayerCurrentMapStatisticsState.prototype.setKills = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 deaths = 3;
 * @return {number}
 */
proto.bragi.ValorantPlayerCurrentMapStatisticsState.prototype.getDeaths = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.ValorantPlayerCurrentMapStatisticsState} returns this
 */
proto.bragi.ValorantPlayerCurrentMapStatisticsState.prototype.setDeaths = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 assists = 4;
 * @return {number}
 */
proto.bragi.ValorantPlayerCurrentMapStatisticsState.prototype.getAssists = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.ValorantPlayerCurrentMapStatisticsState} returns this
 */
proto.bragi.ValorantPlayerCurrentMapStatisticsState.prototype.setAssists = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bragi.ValorantCurrentRoundStatePartialUpdate.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.bragi.ValorantCurrentRoundStatePartialUpdate.UpdateCase = {
  UPDATE_NOT_SET: 0,
  ROUND_INFO: 1,
  TIME: 2,
  SPIKE: 3,
  TEAM_CURRENT_ROUND_STATE: 4,
  TEAM_CURRENT_ROUND_PARTIAL_UPDATE: 5
};

/**
 * @return {proto.bragi.ValorantCurrentRoundStatePartialUpdate.UpdateCase}
 */
proto.bragi.ValorantCurrentRoundStatePartialUpdate.prototype.getUpdateCase = function() {
  return /** @type {proto.bragi.ValorantCurrentRoundStatePartialUpdate.UpdateCase} */(jspb.Message.computeOneofCase(this, proto.bragi.ValorantCurrentRoundStatePartialUpdate.oneofGroups_[0]));
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
proto.bragi.ValorantCurrentRoundStatePartialUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantCurrentRoundStatePartialUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantCurrentRoundStatePartialUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantCurrentRoundStatePartialUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
roundInfo: (f = msg.getRoundInfo()) && proto.bragi.ValorantRoundInfoState.toObject(includeInstance, f),
time: (f = msg.getTime()) && proto.bragi.ValorantCurrentRoundTimeState.toObject(includeInstance, f),
spike: (f = msg.getSpike()) && proto.bragi.ValorantCurrentRoundTeamSpikeState.toObject(includeInstance, f),
teamCurrentRoundState: (f = msg.getTeamCurrentRoundState()) && proto.bragi.ValorantTeamCurrentRoundState.toObject(includeInstance, f),
teamCurrentRoundPartialUpdate: (f = msg.getTeamCurrentRoundPartialUpdate()) && proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.toObject(includeInstance, f)
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
 * @return {!proto.bragi.ValorantCurrentRoundStatePartialUpdate}
 */
proto.bragi.ValorantCurrentRoundStatePartialUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantCurrentRoundStatePartialUpdate;
  return proto.bragi.ValorantCurrentRoundStatePartialUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantCurrentRoundStatePartialUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantCurrentRoundStatePartialUpdate}
 */
proto.bragi.ValorantCurrentRoundStatePartialUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.ValorantRoundInfoState;
      reader.readMessage(value,proto.bragi.ValorantRoundInfoState.deserializeBinaryFromReader);
      msg.setRoundInfo(value);
      break;
    case 2:
      var value = new proto.bragi.ValorantCurrentRoundTimeState;
      reader.readMessage(value,proto.bragi.ValorantCurrentRoundTimeState.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 3:
      var value = new proto.bragi.ValorantCurrentRoundTeamSpikeState;
      reader.readMessage(value,proto.bragi.ValorantCurrentRoundTeamSpikeState.deserializeBinaryFromReader);
      msg.setSpike(value);
      break;
    case 4:
      var value = new proto.bragi.ValorantTeamCurrentRoundState;
      reader.readMessage(value,proto.bragi.ValorantTeamCurrentRoundState.deserializeBinaryFromReader);
      msg.setTeamCurrentRoundState(value);
      break;
    case 5:
      var value = new proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate;
      reader.readMessage(value,proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.deserializeBinaryFromReader);
      msg.setTeamCurrentRoundPartialUpdate(value);
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
proto.bragi.ValorantCurrentRoundStatePartialUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantCurrentRoundStatePartialUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantCurrentRoundStatePartialUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantCurrentRoundStatePartialUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoundInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.ValorantRoundInfoState.serializeBinaryToWriter
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.ValorantCurrentRoundTimeState.serializeBinaryToWriter
    );
  }
  f = message.getSpike();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.ValorantCurrentRoundTeamSpikeState.serializeBinaryToWriter
    );
  }
  f = message.getTeamCurrentRoundState();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.ValorantTeamCurrentRoundState.serializeBinaryToWriter
    );
  }
  f = message.getTeamCurrentRoundPartialUpdate();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * optional ValorantRoundInfoState round_info = 1;
 * @return {?proto.bragi.ValorantRoundInfoState}
 */
proto.bragi.ValorantCurrentRoundStatePartialUpdate.prototype.getRoundInfo = function() {
  return /** @type{?proto.bragi.ValorantRoundInfoState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantRoundInfoState, 1));
};


/**
 * @param {?proto.bragi.ValorantRoundInfoState|undefined} value
 * @return {!proto.bragi.ValorantCurrentRoundStatePartialUpdate} returns this
*/
proto.bragi.ValorantCurrentRoundStatePartialUpdate.prototype.setRoundInfo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.ValorantCurrentRoundStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantCurrentRoundStatePartialUpdate} returns this
 */
proto.bragi.ValorantCurrentRoundStatePartialUpdate.prototype.clearRoundInfo = function() {
  return this.setRoundInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantCurrentRoundStatePartialUpdate.prototype.hasRoundInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ValorantCurrentRoundTimeState time = 2;
 * @return {?proto.bragi.ValorantCurrentRoundTimeState}
 */
proto.bragi.ValorantCurrentRoundStatePartialUpdate.prototype.getTime = function() {
  return /** @type{?proto.bragi.ValorantCurrentRoundTimeState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantCurrentRoundTimeState, 2));
};


/**
 * @param {?proto.bragi.ValorantCurrentRoundTimeState|undefined} value
 * @return {!proto.bragi.ValorantCurrentRoundStatePartialUpdate} returns this
*/
proto.bragi.ValorantCurrentRoundStatePartialUpdate.prototype.setTime = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bragi.ValorantCurrentRoundStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantCurrentRoundStatePartialUpdate} returns this
 */
proto.bragi.ValorantCurrentRoundStatePartialUpdate.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantCurrentRoundStatePartialUpdate.prototype.hasTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ValorantCurrentRoundTeamSpikeState spike = 3;
 * @return {?proto.bragi.ValorantCurrentRoundTeamSpikeState}
 */
proto.bragi.ValorantCurrentRoundStatePartialUpdate.prototype.getSpike = function() {
  return /** @type{?proto.bragi.ValorantCurrentRoundTeamSpikeState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantCurrentRoundTeamSpikeState, 3));
};


/**
 * @param {?proto.bragi.ValorantCurrentRoundTeamSpikeState|undefined} value
 * @return {!proto.bragi.ValorantCurrentRoundStatePartialUpdate} returns this
*/
proto.bragi.ValorantCurrentRoundStatePartialUpdate.prototype.setSpike = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.bragi.ValorantCurrentRoundStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantCurrentRoundStatePartialUpdate} returns this
 */
proto.bragi.ValorantCurrentRoundStatePartialUpdate.prototype.clearSpike = function() {
  return this.setSpike(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantCurrentRoundStatePartialUpdate.prototype.hasSpike = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ValorantTeamCurrentRoundState team_current_round_state = 4;
 * @return {?proto.bragi.ValorantTeamCurrentRoundState}
 */
proto.bragi.ValorantCurrentRoundStatePartialUpdate.prototype.getTeamCurrentRoundState = function() {
  return /** @type{?proto.bragi.ValorantTeamCurrentRoundState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantTeamCurrentRoundState, 4));
};


/**
 * @param {?proto.bragi.ValorantTeamCurrentRoundState|undefined} value
 * @return {!proto.bragi.ValorantCurrentRoundStatePartialUpdate} returns this
*/
proto.bragi.ValorantCurrentRoundStatePartialUpdate.prototype.setTeamCurrentRoundState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.bragi.ValorantCurrentRoundStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantCurrentRoundStatePartialUpdate} returns this
 */
proto.bragi.ValorantCurrentRoundStatePartialUpdate.prototype.clearTeamCurrentRoundState = function() {
  return this.setTeamCurrentRoundState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantCurrentRoundStatePartialUpdate.prototype.hasTeamCurrentRoundState = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ValorantTeamCurrentRoundStatePartialUpdate team_current_round_partial_update = 5;
 * @return {?proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate}
 */
proto.bragi.ValorantCurrentRoundStatePartialUpdate.prototype.getTeamCurrentRoundPartialUpdate = function() {
  return /** @type{?proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate, 5));
};


/**
 * @param {?proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate|undefined} value
 * @return {!proto.bragi.ValorantCurrentRoundStatePartialUpdate} returns this
*/
proto.bragi.ValorantCurrentRoundStatePartialUpdate.prototype.setTeamCurrentRoundPartialUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.bragi.ValorantCurrentRoundStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantCurrentRoundStatePartialUpdate} returns this
 */
proto.bragi.ValorantCurrentRoundStatePartialUpdate.prototype.clearTeamCurrentRoundPartialUpdate = function() {
  return this.setTeamCurrentRoundPartialUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantCurrentRoundStatePartialUpdate.prototype.hasTeamCurrentRoundPartialUpdate = function() {
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
proto.bragi.ValorantCurrentRoundState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantCurrentRoundState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantCurrentRoundState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantCurrentRoundState.toObject = function(includeInstance, msg) {
  var f, obj = {
roundInfo: (f = msg.getRoundInfo()) && proto.bragi.ValorantRoundInfoState.toObject(includeInstance, f),
time: (f = msg.getTime()) && proto.bragi.ValorantCurrentRoundTimeState.toObject(includeInstance, f),
spike: (f = msg.getSpike()) && proto.bragi.ValorantCurrentRoundTeamSpikeState.toObject(includeInstance, f),
teamsMap: (f = msg.getTeamsMap()) ? f.toObject(includeInstance, proto.bragi.ValorantTeamCurrentRoundState.toObject) : []
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
 * @return {!proto.bragi.ValorantCurrentRoundState}
 */
proto.bragi.ValorantCurrentRoundState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantCurrentRoundState;
  return proto.bragi.ValorantCurrentRoundState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantCurrentRoundState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantCurrentRoundState}
 */
proto.bragi.ValorantCurrentRoundState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.ValorantRoundInfoState;
      reader.readMessage(value,proto.bragi.ValorantRoundInfoState.deserializeBinaryFromReader);
      msg.setRoundInfo(value);
      break;
    case 2:
      var value = new proto.bragi.ValorantCurrentRoundTimeState;
      reader.readMessage(value,proto.bragi.ValorantCurrentRoundTimeState.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 3:
      var value = new proto.bragi.ValorantCurrentRoundTeamSpikeState;
      reader.readMessage(value,proto.bragi.ValorantCurrentRoundTeamSpikeState.deserializeBinaryFromReader);
      msg.setSpike(value);
      break;
    case 4:
      var value = msg.getTeamsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bragi.ValorantTeamCurrentRoundState.deserializeBinaryFromReader, "", new proto.bragi.ValorantTeamCurrentRoundState());
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
proto.bragi.ValorantCurrentRoundState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantCurrentRoundState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantCurrentRoundState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantCurrentRoundState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoundInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.ValorantRoundInfoState.serializeBinaryToWriter
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.ValorantCurrentRoundTimeState.serializeBinaryToWriter
    );
  }
  f = message.getSpike();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.ValorantCurrentRoundTeamSpikeState.serializeBinaryToWriter
    );
  }
  f = message.getTeamsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bragi.ValorantTeamCurrentRoundState.serializeBinaryToWriter);
  }
};


/**
 * optional ValorantRoundInfoState round_info = 1;
 * @return {?proto.bragi.ValorantRoundInfoState}
 */
proto.bragi.ValorantCurrentRoundState.prototype.getRoundInfo = function() {
  return /** @type{?proto.bragi.ValorantRoundInfoState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantRoundInfoState, 1));
};


/**
 * @param {?proto.bragi.ValorantRoundInfoState|undefined} value
 * @return {!proto.bragi.ValorantCurrentRoundState} returns this
*/
proto.bragi.ValorantCurrentRoundState.prototype.setRoundInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantCurrentRoundState} returns this
 */
proto.bragi.ValorantCurrentRoundState.prototype.clearRoundInfo = function() {
  return this.setRoundInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantCurrentRoundState.prototype.hasRoundInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ValorantCurrentRoundTimeState time = 2;
 * @return {?proto.bragi.ValorantCurrentRoundTimeState}
 */
proto.bragi.ValorantCurrentRoundState.prototype.getTime = function() {
  return /** @type{?proto.bragi.ValorantCurrentRoundTimeState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantCurrentRoundTimeState, 2));
};


/**
 * @param {?proto.bragi.ValorantCurrentRoundTimeState|undefined} value
 * @return {!proto.bragi.ValorantCurrentRoundState} returns this
*/
proto.bragi.ValorantCurrentRoundState.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantCurrentRoundState} returns this
 */
proto.bragi.ValorantCurrentRoundState.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantCurrentRoundState.prototype.hasTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ValorantCurrentRoundTeamSpikeState spike = 3;
 * @return {?proto.bragi.ValorantCurrentRoundTeamSpikeState}
 */
proto.bragi.ValorantCurrentRoundState.prototype.getSpike = function() {
  return /** @type{?proto.bragi.ValorantCurrentRoundTeamSpikeState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantCurrentRoundTeamSpikeState, 3));
};


/**
 * @param {?proto.bragi.ValorantCurrentRoundTeamSpikeState|undefined} value
 * @return {!proto.bragi.ValorantCurrentRoundState} returns this
*/
proto.bragi.ValorantCurrentRoundState.prototype.setSpike = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantCurrentRoundState} returns this
 */
proto.bragi.ValorantCurrentRoundState.prototype.clearSpike = function() {
  return this.setSpike(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantCurrentRoundState.prototype.hasSpike = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * map<string, ValorantTeamCurrentRoundState> teams = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bragi.ValorantTeamCurrentRoundState>}
 */
proto.bragi.ValorantCurrentRoundState.prototype.getTeamsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bragi.ValorantTeamCurrentRoundState>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.bragi.ValorantTeamCurrentRoundState));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bragi.ValorantCurrentRoundState} returns this
 */
proto.bragi.ValorantCurrentRoundState.prototype.clearTeamsMap = function() {
  this.getTeamsMap().clear();
  return this;
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
proto.bragi.ValorantRoundInfoState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantRoundInfoState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantRoundInfoState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantRoundInfoState.toObject = function(includeInstance, msg) {
  var f, obj = {
number: jspb.Message.getFieldWithDefault(msg, 1, 0),
phase: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.bragi.ValorantRoundInfoState}
 */
proto.bragi.ValorantRoundInfoState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantRoundInfoState;
  return proto.bragi.ValorantRoundInfoState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantRoundInfoState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantRoundInfoState}
 */
proto.bragi.ValorantRoundInfoState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumber(value);
      break;
    case 2:
      var value = /** @type {!proto.bragi.ValorantRoundPhase} */ (reader.readEnum());
      msg.setPhase(value);
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
proto.bragi.ValorantRoundInfoState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantRoundInfoState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantRoundInfoState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantRoundInfoState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumber();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPhase();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional uint32 number = 1;
 * @return {number}
 */
proto.bragi.ValorantRoundInfoState.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.ValorantRoundInfoState} returns this
 */
proto.bragi.ValorantRoundInfoState.prototype.setNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional ValorantRoundPhase phase = 2;
 * @return {!proto.bragi.ValorantRoundPhase}
 */
proto.bragi.ValorantRoundInfoState.prototype.getPhase = function() {
  return /** @type {!proto.bragi.ValorantRoundPhase} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bragi.ValorantRoundPhase} value
 * @return {!proto.bragi.ValorantRoundInfoState} returns this
 */
proto.bragi.ValorantRoundInfoState.prototype.setPhase = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.bragi.ValorantCurrentRoundTimeState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantCurrentRoundTimeState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantCurrentRoundTimeState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantCurrentRoundTimeState.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bragi.ValorantCurrentRoundTimeState}
 */
proto.bragi.ValorantCurrentRoundTimeState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantCurrentRoundTimeState;
  return proto.bragi.ValorantCurrentRoundTimeState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantCurrentRoundTimeState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantCurrentRoundTimeState}
 */
proto.bragi.ValorantCurrentRoundTimeState.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bragi.ValorantCurrentRoundTimeState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantCurrentRoundTimeState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantCurrentRoundTimeState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantCurrentRoundTimeState.serializeBinaryToWriter = function(message, writer) {
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
proto.bragi.ValorantCurrentRoundTimeState.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.ValorantCurrentRoundTimeState} returns this
*/
proto.bragi.ValorantCurrentRoundTimeState.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantCurrentRoundTimeState} returns this
 */
proto.bragi.ValorantCurrentRoundTimeState.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantCurrentRoundTimeState.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.bragi.ValorantCurrentRoundTeamSpikeState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantCurrentRoundTeamSpikeState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantCurrentRoundTeamSpikeState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantCurrentRoundTeamSpikeState.toObject = function(includeInstance, msg) {
  var f, obj = {
state: jspb.Message.getFieldWithDefault(msg, 1, 0),
timeToDefused: (f = msg.getTimeToDefused()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.bragi.ValorantCurrentRoundTeamSpikeState}
 */
proto.bragi.ValorantCurrentRoundTeamSpikeState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantCurrentRoundTeamSpikeState;
  return proto.bragi.ValorantCurrentRoundTeamSpikeState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantCurrentRoundTeamSpikeState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantCurrentRoundTeamSpikeState}
 */
proto.bragi.ValorantCurrentRoundTeamSpikeState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bragi.ValorantSpikeState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeToDefused(value);
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
proto.bragi.ValorantCurrentRoundTeamSpikeState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantCurrentRoundTeamSpikeState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantCurrentRoundTeamSpikeState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantCurrentRoundTeamSpikeState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getTimeToDefused();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional ValorantSpikeState state = 1;
 * @return {!proto.bragi.ValorantSpikeState}
 */
proto.bragi.ValorantCurrentRoundTeamSpikeState.prototype.getState = function() {
  return /** @type {!proto.bragi.ValorantSpikeState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bragi.ValorantSpikeState} value
 * @return {!proto.bragi.ValorantCurrentRoundTeamSpikeState} returns this
 */
proto.bragi.ValorantCurrentRoundTeamSpikeState.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional google.protobuf.Duration time_to_defused = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.ValorantCurrentRoundTeamSpikeState.prototype.getTimeToDefused = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.ValorantCurrentRoundTeamSpikeState} returns this
*/
proto.bragi.ValorantCurrentRoundTeamSpikeState.prototype.setTimeToDefused = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantCurrentRoundTeamSpikeState} returns this
 */
proto.bragi.ValorantCurrentRoundTeamSpikeState.prototype.clearTimeToDefused = function() {
  return this.setTimeToDefused(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantCurrentRoundTeamSpikeState.prototype.hasTimeToDefused = function() {
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
proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
teamUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
payload: (f = msg.getPayload()) && proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload.toObject(includeInstance, f)
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
 * @return {!proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate}
 */
proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate;
  return proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate}
 */
proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload;
      reader.readMessage(value,proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload.deserializeBinaryFromReader);
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
proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.serializeBinaryToWriter = function(message, writer) {
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
      proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload.serializeBinaryToWriter
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
proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload.oneofGroups_ = [[3,2]];

/**
 * @enum {number}
 */
proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  PLAYER_CURRENT_ROUND_STATE: 3,
  PLAYER_CURRENT_ROUND_PARTIAL_UPDATE: 2
};

/**
 * @return {proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload.PayloadCase}
 */
proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload.prototype.getPayloadCase = function() {
  return /** @type {proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload.oneofGroups_[0]));
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
proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
playerCurrentRoundState: (f = msg.getPlayerCurrentRoundState()) && proto.bragi.ValorantPlayerCurrentRoundState.toObject(includeInstance, f),
playerCurrentRoundPartialUpdate: (f = msg.getPlayerCurrentRoundPartialUpdate()) && proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.toObject(includeInstance, f)
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
 * @return {!proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload}
 */
proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload;
  return proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload}
 */
proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new proto.bragi.ValorantPlayerCurrentRoundState;
      reader.readMessage(value,proto.bragi.ValorantPlayerCurrentRoundState.deserializeBinaryFromReader);
      msg.setPlayerCurrentRoundState(value);
      break;
    case 2:
      var value = new proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate;
      reader.readMessage(value,proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.deserializeBinaryFromReader);
      msg.setPlayerCurrentRoundPartialUpdate(value);
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
proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerCurrentRoundState();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.ValorantPlayerCurrentRoundState.serializeBinaryToWriter
    );
  }
  f = message.getPlayerCurrentRoundPartialUpdate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * optional ValorantPlayerCurrentRoundState player_current_round_state = 3;
 * @return {?proto.bragi.ValorantPlayerCurrentRoundState}
 */
proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload.prototype.getPlayerCurrentRoundState = function() {
  return /** @type{?proto.bragi.ValorantPlayerCurrentRoundState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantPlayerCurrentRoundState, 3));
};


/**
 * @param {?proto.bragi.ValorantPlayerCurrentRoundState|undefined} value
 * @return {!proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload} returns this
*/
proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload.prototype.setPlayerCurrentRoundState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload} returns this
 */
proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload.prototype.clearPlayerCurrentRoundState = function() {
  return this.setPlayerCurrentRoundState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload.prototype.hasPlayerCurrentRoundState = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ValorantPlayerCurrentRoundStatePartialUpdate player_current_round_partial_update = 2;
 * @return {?proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate}
 */
proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload.prototype.getPlayerCurrentRoundPartialUpdate = function() {
  return /** @type{?proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate, 2));
};


/**
 * @param {?proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate|undefined} value
 * @return {!proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload} returns this
*/
proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload.prototype.setPlayerCurrentRoundPartialUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload} returns this
 */
proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload.prototype.clearPlayerCurrentRoundPartialUpdate = function() {
  return this.setPlayerCurrentRoundPartialUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload.prototype.hasPlayerCurrentRoundPartialUpdate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string team_urn = 1;
 * @return {string}
 */
proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate} returns this
 */
proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Payload payload = 2;
 * @return {?proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload}
 */
proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.prototype.getPayload = function() {
  return /** @type{?proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload, 2));
};


/**
 * @param {?proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.Payload|undefined} value
 * @return {!proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate} returns this
*/
proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate} returns this
 */
proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantTeamCurrentRoundStatePartialUpdate.prototype.hasPayload = function() {
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
proto.bragi.ValorantTeamCurrentRoundState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantTeamCurrentRoundState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantTeamCurrentRoundState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantTeamCurrentRoundState.toObject = function(includeInstance, msg) {
  var f, obj = {
teamUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
side: jspb.Message.getFieldWithDefault(msg, 2, 0),
playersMap: (f = msg.getPlayersMap()) ? f.toObject(includeInstance, proto.bragi.ValorantPlayerCurrentRoundState.toObject) : []
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
 * @return {!proto.bragi.ValorantTeamCurrentRoundState}
 */
proto.bragi.ValorantTeamCurrentRoundState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantTeamCurrentRoundState;
  return proto.bragi.ValorantTeamCurrentRoundState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantTeamCurrentRoundState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantTeamCurrentRoundState}
 */
proto.bragi.ValorantTeamCurrentRoundState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.bragi.ValorantSide} */ (reader.readEnum());
      msg.setSide(value);
      break;
    case 3:
      var value = msg.getPlayersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bragi.ValorantPlayerCurrentRoundState.deserializeBinaryFromReader, "", new proto.bragi.ValorantPlayerCurrentRoundState());
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
proto.bragi.ValorantTeamCurrentRoundState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantTeamCurrentRoundState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantTeamCurrentRoundState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantTeamCurrentRoundState.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getPlayersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bragi.ValorantPlayerCurrentRoundState.serializeBinaryToWriter);
  }
};


/**
 * optional string team_urn = 1;
 * @return {string}
 */
proto.bragi.ValorantTeamCurrentRoundState.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.ValorantTeamCurrentRoundState} returns this
 */
proto.bragi.ValorantTeamCurrentRoundState.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ValorantSide side = 2;
 * @return {!proto.bragi.ValorantSide}
 */
proto.bragi.ValorantTeamCurrentRoundState.prototype.getSide = function() {
  return /** @type {!proto.bragi.ValorantSide} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bragi.ValorantSide} value
 * @return {!proto.bragi.ValorantTeamCurrentRoundState} returns this
 */
proto.bragi.ValorantTeamCurrentRoundState.prototype.setSide = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * map<string, ValorantPlayerCurrentRoundState> players = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bragi.ValorantPlayerCurrentRoundState>}
 */
proto.bragi.ValorantTeamCurrentRoundState.prototype.getPlayersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bragi.ValorantPlayerCurrentRoundState>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.bragi.ValorantPlayerCurrentRoundState));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bragi.ValorantTeamCurrentRoundState} returns this
 */
proto.bragi.ValorantTeamCurrentRoundState.prototype.clearPlayersMap = function() {
  this.getPlayersMap().clear();
  return this;
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
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
payload: (f = msg.getPayload()) && proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.toObject(includeInstance, f)
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
 * @return {!proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate}
 */
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate;
  return proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate}
 */
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload;
      reader.readMessage(value,proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.deserializeBinaryFromReader);
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
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.serializeBinaryToWriter = function(message, writer) {
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
      proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.serializeBinaryToWriter
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
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  PLAYER_INFO: 1,
  STATISTICS: 2,
  WEAPONS: 3,
  POSITION: 4
};

/**
 * @return {proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.PayloadCase}
 */
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.prototype.getPayloadCase = function() {
  return /** @type {proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.oneofGroups_[0]));
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
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
playerInfo: (f = msg.getPlayerInfo()) && proto.bragi.ValorantPlayerInfoState.toObject(includeInstance, f),
statistics: (f = msg.getStatistics()) && proto.bragi.ValorantPlayerCurrentRoundStatisticsState.toObject(includeInstance, f),
weapons: (f = msg.getWeapons()) && proto.bragi.ValorantWeaponsState.toObject(includeInstance, f),
position: (f = msg.getPosition()) && proto.bragi.ValorantPositionState.toObject(includeInstance, f)
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
 * @return {!proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload}
 */
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload;
  return proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload}
 */
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.ValorantPlayerInfoState;
      reader.readMessage(value,proto.bragi.ValorantPlayerInfoState.deserializeBinaryFromReader);
      msg.setPlayerInfo(value);
      break;
    case 2:
      var value = new proto.bragi.ValorantPlayerCurrentRoundStatisticsState;
      reader.readMessage(value,proto.bragi.ValorantPlayerCurrentRoundStatisticsState.deserializeBinaryFromReader);
      msg.setStatistics(value);
      break;
    case 3:
      var value = new proto.bragi.ValorantWeaponsState;
      reader.readMessage(value,proto.bragi.ValorantWeaponsState.deserializeBinaryFromReader);
      msg.setWeapons(value);
      break;
    case 4:
      var value = new proto.bragi.ValorantPositionState;
      reader.readMessage(value,proto.bragi.ValorantPositionState.deserializeBinaryFromReader);
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
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.ValorantPlayerInfoState.serializeBinaryToWriter
    );
  }
  f = message.getStatistics();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.ValorantPlayerCurrentRoundStatisticsState.serializeBinaryToWriter
    );
  }
  f = message.getWeapons();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.ValorantWeaponsState.serializeBinaryToWriter
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.ValorantPositionState.serializeBinaryToWriter
    );
  }
};


/**
 * optional ValorantPlayerInfoState player_info = 1;
 * @return {?proto.bragi.ValorantPlayerInfoState}
 */
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.prototype.getPlayerInfo = function() {
  return /** @type{?proto.bragi.ValorantPlayerInfoState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantPlayerInfoState, 1));
};


/**
 * @param {?proto.bragi.ValorantPlayerInfoState|undefined} value
 * @return {!proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload} returns this
*/
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.prototype.setPlayerInfo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload} returns this
 */
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.prototype.clearPlayerInfo = function() {
  return this.setPlayerInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.prototype.hasPlayerInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ValorantPlayerCurrentRoundStatisticsState statistics = 2;
 * @return {?proto.bragi.ValorantPlayerCurrentRoundStatisticsState}
 */
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.prototype.getStatistics = function() {
  return /** @type{?proto.bragi.ValorantPlayerCurrentRoundStatisticsState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantPlayerCurrentRoundStatisticsState, 2));
};


/**
 * @param {?proto.bragi.ValorantPlayerCurrentRoundStatisticsState|undefined} value
 * @return {!proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload} returns this
*/
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.prototype.setStatistics = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload} returns this
 */
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.prototype.clearStatistics = function() {
  return this.setStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.prototype.hasStatistics = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ValorantWeaponsState weapons = 3;
 * @return {?proto.bragi.ValorantWeaponsState}
 */
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.prototype.getWeapons = function() {
  return /** @type{?proto.bragi.ValorantWeaponsState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantWeaponsState, 3));
};


/**
 * @param {?proto.bragi.ValorantWeaponsState|undefined} value
 * @return {!proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload} returns this
*/
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.prototype.setWeapons = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload} returns this
 */
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.prototype.clearWeapons = function() {
  return this.setWeapons(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.prototype.hasWeapons = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ValorantPositionState position = 4;
 * @return {?proto.bragi.ValorantPositionState}
 */
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.prototype.getPosition = function() {
  return /** @type{?proto.bragi.ValorantPositionState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantPositionState, 4));
};


/**
 * @param {?proto.bragi.ValorantPositionState|undefined} value
 * @return {!proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload} returns this
*/
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.prototype.setPosition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload} returns this
 */
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate} returns this
 */
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Payload payload = 2;
 * @return {?proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload}
 */
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.prototype.getPayload = function() {
  return /** @type{?proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload, 2));
};


/**
 * @param {?proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.Payload|undefined} value
 * @return {!proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate} returns this
*/
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate} returns this
 */
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.prototype.hasPayload = function() {
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
proto.bragi.ValorantPlayerCurrentRoundState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantPlayerCurrentRoundState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantPlayerCurrentRoundState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantPlayerCurrentRoundState.toObject = function(includeInstance, msg) {
  var f, obj = {
playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
playerInfo: (f = msg.getPlayerInfo()) && proto.bragi.ValorantPlayerInfoState.toObject(includeInstance, f),
statistics: (f = msg.getStatistics()) && proto.bragi.ValorantPlayerCurrentRoundStatisticsState.toObject(includeInstance, f),
weapons: (f = msg.getWeapons()) && proto.bragi.ValorantWeaponsState.toObject(includeInstance, f),
position: (f = msg.getPosition()) && proto.bragi.ValorantPositionState.toObject(includeInstance, f)
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
 * @return {!proto.bragi.ValorantPlayerCurrentRoundState}
 */
proto.bragi.ValorantPlayerCurrentRoundState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantPlayerCurrentRoundState;
  return proto.bragi.ValorantPlayerCurrentRoundState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantPlayerCurrentRoundState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantPlayerCurrentRoundState}
 */
proto.bragi.ValorantPlayerCurrentRoundState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.ValorantPlayerInfoState;
      reader.readMessage(value,proto.bragi.ValorantPlayerInfoState.deserializeBinaryFromReader);
      msg.setPlayerInfo(value);
      break;
    case 3:
      var value = new proto.bragi.ValorantPlayerCurrentRoundStatisticsState;
      reader.readMessage(value,proto.bragi.ValorantPlayerCurrentRoundStatisticsState.deserializeBinaryFromReader);
      msg.setStatistics(value);
      break;
    case 4:
      var value = new proto.bragi.ValorantWeaponsState;
      reader.readMessage(value,proto.bragi.ValorantWeaponsState.deserializeBinaryFromReader);
      msg.setWeapons(value);
      break;
    case 5:
      var value = new proto.bragi.ValorantPositionState;
      reader.readMessage(value,proto.bragi.ValorantPositionState.deserializeBinaryFromReader);
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
proto.bragi.ValorantPlayerCurrentRoundState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantPlayerCurrentRoundState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantPlayerCurrentRoundState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantPlayerCurrentRoundState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlayerInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.ValorantPlayerInfoState.serializeBinaryToWriter
    );
  }
  f = message.getStatistics();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.ValorantPlayerCurrentRoundStatisticsState.serializeBinaryToWriter
    );
  }
  f = message.getWeapons();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.ValorantWeaponsState.serializeBinaryToWriter
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bragi.ValorantPositionState.serializeBinaryToWriter
    );
  }
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.ValorantPlayerCurrentRoundState.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.ValorantPlayerCurrentRoundState} returns this
 */
proto.bragi.ValorantPlayerCurrentRoundState.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ValorantPlayerInfoState player_info = 2;
 * @return {?proto.bragi.ValorantPlayerInfoState}
 */
proto.bragi.ValorantPlayerCurrentRoundState.prototype.getPlayerInfo = function() {
  return /** @type{?proto.bragi.ValorantPlayerInfoState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantPlayerInfoState, 2));
};


/**
 * @param {?proto.bragi.ValorantPlayerInfoState|undefined} value
 * @return {!proto.bragi.ValorantPlayerCurrentRoundState} returns this
*/
proto.bragi.ValorantPlayerCurrentRoundState.prototype.setPlayerInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantPlayerCurrentRoundState} returns this
 */
proto.bragi.ValorantPlayerCurrentRoundState.prototype.clearPlayerInfo = function() {
  return this.setPlayerInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantPlayerCurrentRoundState.prototype.hasPlayerInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ValorantPlayerCurrentRoundStatisticsState statistics = 3;
 * @return {?proto.bragi.ValorantPlayerCurrentRoundStatisticsState}
 */
proto.bragi.ValorantPlayerCurrentRoundState.prototype.getStatistics = function() {
  return /** @type{?proto.bragi.ValorantPlayerCurrentRoundStatisticsState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantPlayerCurrentRoundStatisticsState, 3));
};


/**
 * @param {?proto.bragi.ValorantPlayerCurrentRoundStatisticsState|undefined} value
 * @return {!proto.bragi.ValorantPlayerCurrentRoundState} returns this
*/
proto.bragi.ValorantPlayerCurrentRoundState.prototype.setStatistics = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantPlayerCurrentRoundState} returns this
 */
proto.bragi.ValorantPlayerCurrentRoundState.prototype.clearStatistics = function() {
  return this.setStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantPlayerCurrentRoundState.prototype.hasStatistics = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ValorantWeaponsState weapons = 4;
 * @return {?proto.bragi.ValorantWeaponsState}
 */
proto.bragi.ValorantPlayerCurrentRoundState.prototype.getWeapons = function() {
  return /** @type{?proto.bragi.ValorantWeaponsState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantWeaponsState, 4));
};


/**
 * @param {?proto.bragi.ValorantWeaponsState|undefined} value
 * @return {!proto.bragi.ValorantPlayerCurrentRoundState} returns this
*/
proto.bragi.ValorantPlayerCurrentRoundState.prototype.setWeapons = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantPlayerCurrentRoundState} returns this
 */
proto.bragi.ValorantPlayerCurrentRoundState.prototype.clearWeapons = function() {
  return this.setWeapons(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantPlayerCurrentRoundState.prototype.hasWeapons = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ValorantPositionState position = 5;
 * @return {?proto.bragi.ValorantPositionState}
 */
proto.bragi.ValorantPlayerCurrentRoundState.prototype.getPosition = function() {
  return /** @type{?proto.bragi.ValorantPositionState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.ValorantPositionState, 5));
};


/**
 * @param {?proto.bragi.ValorantPositionState|undefined} value
 * @return {!proto.bragi.ValorantPlayerCurrentRoundState} returns this
*/
proto.bragi.ValorantPlayerCurrentRoundState.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.ValorantPlayerCurrentRoundState} returns this
 */
proto.bragi.ValorantPlayerCurrentRoundState.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.ValorantPlayerCurrentRoundState.prototype.hasPosition = function() {
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
proto.bragi.ValorantPlayerCurrentRoundStatisticsState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantPlayerCurrentRoundStatisticsState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantPlayerCurrentRoundStatisticsState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantPlayerCurrentRoundStatisticsState.toObject = function(includeInstance, msg) {
  var f, obj = {
playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
isAlive: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.bragi.ValorantPlayerCurrentRoundStatisticsState}
 */
proto.bragi.ValorantPlayerCurrentRoundStatisticsState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantPlayerCurrentRoundStatisticsState;
  return proto.bragi.ValorantPlayerCurrentRoundStatisticsState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantPlayerCurrentRoundStatisticsState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantPlayerCurrentRoundStatisticsState}
 */
proto.bragi.ValorantPlayerCurrentRoundStatisticsState.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setIsAlive(value);
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
proto.bragi.ValorantPlayerCurrentRoundStatisticsState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantPlayerCurrentRoundStatisticsState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantPlayerCurrentRoundStatisticsState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantPlayerCurrentRoundStatisticsState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIsAlive();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.ValorantPlayerCurrentRoundStatisticsState.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.ValorantPlayerCurrentRoundStatisticsState} returns this
 */
proto.bragi.ValorantPlayerCurrentRoundStatisticsState.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool is_alive = 2;
 * @return {boolean}
 */
proto.bragi.ValorantPlayerCurrentRoundStatisticsState.prototype.getIsAlive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.ValorantPlayerCurrentRoundStatisticsState} returns this
 */
proto.bragi.ValorantPlayerCurrentRoundStatisticsState.prototype.setIsAlive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.ValorantAbilitiesState.repeatedFields_ = [2];



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
proto.bragi.ValorantAbilitiesState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantAbilitiesState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantAbilitiesState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantAbilitiesState.toObject = function(includeInstance, msg) {
  var f, obj = {
playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
abilitiesList: jspb.Message.toObjectList(msg.getAbilitiesList(),
    proto.bragi.ValorantAbility.toObject, includeInstance)
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
 * @return {!proto.bragi.ValorantAbilitiesState}
 */
proto.bragi.ValorantAbilitiesState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantAbilitiesState;
  return proto.bragi.ValorantAbilitiesState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantAbilitiesState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantAbilitiesState}
 */
proto.bragi.ValorantAbilitiesState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.ValorantAbility;
      reader.readMessage(value,proto.bragi.ValorantAbility.deserializeBinaryFromReader);
      msg.addAbilities(value);
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
proto.bragi.ValorantAbilitiesState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantAbilitiesState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantAbilitiesState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantAbilitiesState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAbilitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.bragi.ValorantAbility.serializeBinaryToWriter
    );
  }
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.ValorantAbilitiesState.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.ValorantAbilitiesState} returns this
 */
proto.bragi.ValorantAbilitiesState.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated ValorantAbility abilities = 2;
 * @return {!Array<!proto.bragi.ValorantAbility>}
 */
proto.bragi.ValorantAbilitiesState.prototype.getAbilitiesList = function() {
  return /** @type{!Array<!proto.bragi.ValorantAbility>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.ValorantAbility, 2));
};


/**
 * @param {!Array<!proto.bragi.ValorantAbility>} value
 * @return {!proto.bragi.ValorantAbilitiesState} returns this
*/
proto.bragi.ValorantAbilitiesState.prototype.setAbilitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bragi.ValorantAbility=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.ValorantAbility}
 */
proto.bragi.ValorantAbilitiesState.prototype.addAbilities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bragi.ValorantAbility, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.ValorantAbilitiesState} returns this
 */
proto.bragi.ValorantAbilitiesState.prototype.clearAbilitiesList = function() {
  return this.setAbilitiesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.ValorantWeaponsState.repeatedFields_ = [2];



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
proto.bragi.ValorantWeaponsState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantWeaponsState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantWeaponsState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantWeaponsState.toObject = function(includeInstance, msg) {
  var f, obj = {
playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
weaponsList: jspb.Message.toObjectList(msg.getWeaponsList(),
    proto.bragi.ValorantWeapon.toObject, includeInstance)
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
 * @return {!proto.bragi.ValorantWeaponsState}
 */
proto.bragi.ValorantWeaponsState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantWeaponsState;
  return proto.bragi.ValorantWeaponsState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantWeaponsState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantWeaponsState}
 */
proto.bragi.ValorantWeaponsState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.ValorantWeapon;
      reader.readMessage(value,proto.bragi.ValorantWeapon.deserializeBinaryFromReader);
      msg.addWeapons(value);
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
proto.bragi.ValorantWeaponsState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantWeaponsState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantWeaponsState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantWeaponsState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWeaponsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.bragi.ValorantWeapon.serializeBinaryToWriter
    );
  }
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.ValorantWeaponsState.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.ValorantWeaponsState} returns this
 */
proto.bragi.ValorantWeaponsState.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated ValorantWeapon weapons = 2;
 * @return {!Array<!proto.bragi.ValorantWeapon>}
 */
proto.bragi.ValorantWeaponsState.prototype.getWeaponsList = function() {
  return /** @type{!Array<!proto.bragi.ValorantWeapon>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.ValorantWeapon, 2));
};


/**
 * @param {!Array<!proto.bragi.ValorantWeapon>} value
 * @return {!proto.bragi.ValorantWeaponsState} returns this
*/
proto.bragi.ValorantWeaponsState.prototype.setWeaponsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bragi.ValorantWeapon=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.ValorantWeapon}
 */
proto.bragi.ValorantWeaponsState.prototype.addWeapons = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bragi.ValorantWeapon, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.ValorantWeaponsState} returns this
 */
proto.bragi.ValorantWeaponsState.prototype.clearWeaponsList = function() {
  return this.setWeaponsList([]);
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
proto.bragi.ValorantPlayerInfoState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantPlayerInfoState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantPlayerInfoState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantPlayerInfoState.toObject = function(includeInstance, msg) {
  var f, obj = {
playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
slotId: jspb.Message.getFieldWithDefault(msg, 2, 0),
extName: jspb.Message.getFieldWithDefault(msg, 3, ""),
extId: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.bragi.ValorantPlayerInfoState}
 */
proto.bragi.ValorantPlayerInfoState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantPlayerInfoState;
  return proto.bragi.ValorantPlayerInfoState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantPlayerInfoState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantPlayerInfoState}
 */
proto.bragi.ValorantPlayerInfoState.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setSlotId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setExtName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setExtId(value);
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
proto.bragi.ValorantPlayerInfoState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantPlayerInfoState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantPlayerInfoState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantPlayerInfoState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSlotId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getExtName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getExtId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.ValorantPlayerInfoState.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.ValorantPlayerInfoState} returns this
 */
proto.bragi.ValorantPlayerInfoState.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 slot_id = 2;
 * @return {number}
 */
proto.bragi.ValorantPlayerInfoState.prototype.getSlotId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.ValorantPlayerInfoState} returns this
 */
proto.bragi.ValorantPlayerInfoState.prototype.setSlotId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string ext_name = 3;
 * @return {string}
 */
proto.bragi.ValorantPlayerInfoState.prototype.getExtName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.ValorantPlayerInfoState} returns this
 */
proto.bragi.ValorantPlayerInfoState.prototype.setExtName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string ext_id = 4;
 * @return {string}
 */
proto.bragi.ValorantPlayerInfoState.prototype.getExtId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.ValorantPlayerInfoState} returns this
 */
proto.bragi.ValorantPlayerInfoState.prototype.setExtId = function(value) {
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
proto.bragi.ValorantPositionState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantPositionState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantPositionState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantPositionState.toObject = function(includeInstance, msg) {
  var f, obj = {
playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
x: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
y: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.bragi.ValorantPositionState}
 */
proto.bragi.ValorantPositionState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantPositionState;
  return proto.bragi.ValorantPositionState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantPositionState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantPositionState}
 */
proto.bragi.ValorantPositionState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readFloat());
      msg.setX(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setY(value);
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
proto.bragi.ValorantPositionState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantPositionState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantPositionState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantPositionState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getX();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.ValorantPositionState.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.ValorantPositionState} returns this
 */
proto.bragi.ValorantPositionState.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional float x = 2;
 * @return {number}
 */
proto.bragi.ValorantPositionState.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.ValorantPositionState} returns this
 */
proto.bragi.ValorantPositionState.prototype.setX = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float y = 3;
 * @return {number}
 */
proto.bragi.ValorantPositionState.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.ValorantPositionState} returns this
 */
proto.bragi.ValorantPositionState.prototype.setY = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
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
proto.bragi.ValorantPreviousRound.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantPreviousRound.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantPreviousRound} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantPreviousRound.toObject = function(includeInstance, msg) {
  var f, obj = {
number: jspb.Message.getFieldWithDefault(msg, 1, 0),
outcome: jspb.Message.getFieldWithDefault(msg, 2, 0),
homeWon: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.bragi.ValorantPreviousRound}
 */
proto.bragi.ValorantPreviousRound.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantPreviousRound;
  return proto.bragi.ValorantPreviousRound.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantPreviousRound} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantPreviousRound}
 */
proto.bragi.ValorantPreviousRound.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumber(value);
      break;
    case 2:
      var value = /** @type {!proto.bragi.ValorantRoundOutcome} */ (reader.readEnum());
      msg.setOutcome(value);
      break;
    case 3:
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
proto.bragi.ValorantPreviousRound.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantPreviousRound.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantPreviousRound} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantPreviousRound.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumber();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getOutcome();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getHomeWon();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional uint32 number = 1;
 * @return {number}
 */
proto.bragi.ValorantPreviousRound.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.ValorantPreviousRound} returns this
 */
proto.bragi.ValorantPreviousRound.prototype.setNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional ValorantRoundOutcome outcome = 2;
 * @return {!proto.bragi.ValorantRoundOutcome}
 */
proto.bragi.ValorantPreviousRound.prototype.getOutcome = function() {
  return /** @type {!proto.bragi.ValorantRoundOutcome} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bragi.ValorantRoundOutcome} value
 * @return {!proto.bragi.ValorantPreviousRound} returns this
 */
proto.bragi.ValorantPreviousRound.prototype.setOutcome = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional bool home_won = 3;
 * @return {boolean}
 */
proto.bragi.ValorantPreviousRound.prototype.getHomeWon = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.ValorantPreviousRound} returns this
 */
proto.bragi.ValorantPreviousRound.prototype.setHomeWon = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
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
proto.bragi.ValorantWeapon.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantWeapon.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantWeapon} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantWeapon.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.bragi.ValorantWeapon}
 */
proto.bragi.ValorantWeapon.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantWeapon;
  return proto.bragi.ValorantWeapon.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantWeapon} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantWeapon}
 */
proto.bragi.ValorantWeapon.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
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
proto.bragi.ValorantWeapon.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantWeapon.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantWeapon} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantWeapon.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.bragi.ValorantWeapon.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.ValorantWeapon} returns this
 */
proto.bragi.ValorantWeapon.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.bragi.ValorantAbility.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.ValorantAbility.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.ValorantAbility} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantAbility.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
ready: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
isUltimate: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.bragi.ValorantAbility}
 */
proto.bragi.ValorantAbility.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.ValorantAbility;
  return proto.bragi.ValorantAbility.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.ValorantAbility} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.ValorantAbility}
 */
proto.bragi.ValorantAbility.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReady(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsUltimate(value);
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
proto.bragi.ValorantAbility.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.ValorantAbility.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.ValorantAbility} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.ValorantAbility.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReady();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getIsUltimate();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.bragi.ValorantAbility.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.ValorantAbility} returns this
 */
proto.bragi.ValorantAbility.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool ready = 2;
 * @return {boolean}
 */
proto.bragi.ValorantAbility.prototype.getReady = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.ValorantAbility} returns this
 */
proto.bragi.ValorantAbility.prototype.setReady = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool is_ultimate = 3;
 * @return {boolean}
 */
proto.bragi.ValorantAbility.prototype.getIsUltimate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.ValorantAbility} returns this
 */
proto.bragi.ValorantAbility.prototype.setIsUltimate = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * @enum {number}
 */
proto.bragi.ValorantUltimateState = {
  VALORANT_ULTIMATE_STATE__UNSPECIFIED: 0,
  VALORANT_ULTIMATE_STATE_READY: 1,
  VALORANT_ULTIMATE_STATE_NOT_READY: 2
};

/**
 * @enum {number}
 */
proto.bragi.ValorantSide = {
  VALORANT_SIDE_UNSPECIFIED: 0,
  VALORANT_SIDE_DEFENDERS: 1,
  VALORANT_SIDE_ATTACKERS: 2
};

/**
 * @enum {number}
 */
proto.bragi.ValorantRoundOutcome = {
  VALORANT_ROUND_OUTCOME_UNSPECIFIED: 0,
  VALORANT_ROUND_OUTCOME_DEFENDERS_WIN_ELIMINATION: 1,
  VALORANT_ROUND_OUTCOME_DEFENDERS_WIN_TIMEOUT: 2,
  VALORANT_ROUND_OUTCOME_DEFENDERS_WIN_DEFUSE: 3,
  VALORANT_ROUND_OUTCOME_ATTACKERS_WIN_ELIMINATION: 4,
  VALORANT_ROUND_OUTCOME_ATTACKERS_WIN_EXPLODE: 5
};

/**
 * @enum {number}
 */
proto.bragi.ValorantRoundPhase = {
  VALORANT_ROUND_PHASE_UNSPECIFIED: 0,
  VALORANT_ROUND_PHASE_BUY_PHASE: 1,
  VALORANT_ROUND_PHASE_RUNNING: 2,
  VALORANT_ROUND_PHASE_OVER: 3
};

/**
 * @enum {number}
 */
proto.bragi.ValorantSpikeState = {
  VALORANT_SPIKE_STATE_UNSPECIFIED: 0,
  VALORANT_SPIKE_STATE_CARRIED: 1,
  VALORANT_SPIKE_STATE_DROPPED: 2,
  VALORANT_SPIKE_STATE_PLANTING: 3,
  VALORANT_SPIKE_STATE_DEFUSING: 4,
  VALORANT_SPIKE_STATE_PLANTED: 5,
  VALORANT_SPIKE_STATE_EXPLODED: 6,
  VALORANT_SPIKE_STATE_DEFUSED: 7
};

goog.object.extend(exports, proto.bragi);
