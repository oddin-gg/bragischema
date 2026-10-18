// source: bragi/dota2.proto
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
goog.exportSymbol('proto.bragi.Dota2Abilities', null, global);
goog.exportSymbol('proto.bragi.Dota2Ability', null, global);
goog.exportSymbol('proto.bragi.Dota2AegisLost', null, global);
goog.exportSymbol('proto.bragi.Dota2AegisPickedUp', null, global);
goog.exportSymbol('proto.bragi.Dota2AncientDestroyed', null, global);
goog.exportSymbol('proto.bragi.Dota2Barrack', null, global);
goog.exportSymbol('proto.bragi.Dota2BarrackType', null, global);
goog.exportSymbol('proto.bragi.Dota2Barracks', null, global);
goog.exportSymbol('proto.bragi.Dota2BarracksDestroyed', null, global);
goog.exportSymbol('proto.bragi.Dota2Buyback', null, global);
goog.exportSymbol('proto.bragi.Dota2CurrentMapState', null, global);
goog.exportSymbol('proto.bragi.Dota2CurrentMapStatePartialUpdate', null, global);
goog.exportSymbol('proto.bragi.Dota2CurrentMapStatePartialUpdate.UpdateCase', null, global);
goog.exportSymbol('proto.bragi.Dota2CurrentMapTimeState', null, global);
goog.exportSymbol('proto.bragi.Dota2DayNightChanged', null, global);
goog.exportSymbol('proto.bragi.Dota2EnvironmentKillerKind', null, global);
goog.exportSymbol('proto.bragi.Dota2Event', null, global);
goog.exportSymbol('proto.bragi.Dota2Event.EventCase', null, global);
goog.exportSymbol('proto.bragi.Dota2EventPlayer', null, global);
goog.exportSymbol('proto.bragi.Dota2EventTeam', null, global);
goog.exportSymbol('proto.bragi.Dota2Faction', null, global);
goog.exportSymbol('proto.bragi.Dota2HeroDeathByEnvironment', null, global);
goog.exportSymbol('proto.bragi.Dota2HeroKill', null, global);
goog.exportSymbol('proto.bragi.Dota2Item', null, global);
goog.exportSymbol('proto.bragi.Dota2ItemPosition', null, global);
goog.exportSymbol('proto.bragi.Dota2Items', null, global);
goog.exportSymbol('proto.bragi.Dota2Killstreak', null, global);
goog.exportSymbol('proto.bragi.Dota2Lane', null, global);
goog.exportSymbol('proto.bragi.Dota2MapEnded', null, global);
goog.exportSymbol('proto.bragi.Dota2MapPaused', null, global);
goog.exportSymbol('proto.bragi.Dota2MapResumed', null, global);
goog.exportSymbol('proto.bragi.Dota2MapStarted', null, global);
goog.exportSymbol('proto.bragi.Dota2MatchEvents', null, global);
goog.exportSymbol('proto.bragi.Dota2MatchMessage', null, global);
goog.exportSymbol('proto.bragi.Dota2MatchMessage.Payload', null, global);
goog.exportSymbol('proto.bragi.Dota2MatchMessage.Payload.PayloadCase', null, global);
goog.exportSymbol('proto.bragi.Dota2MatchScoreState', null, global);
goog.exportSymbol('proto.bragi.Dota2MatchSnapshot', null, global);
goog.exportSymbol('proto.bragi.Dota2MatchState', null, global);
goog.exportSymbol('proto.bragi.Dota2MatchStatePartialUpdate', null, global);
goog.exportSymbol('proto.bragi.Dota2MatchStatePartialUpdate.UpdateCase', null, global);
goog.exportSymbol('proto.bragi.Dota2MatchStatePartialUpdates', null, global);
goog.exportSymbol('proto.bragi.Dota2MatchUpdate', null, global);
goog.exportSymbol('proto.bragi.Dota2MatchUpdate.Payload', null, global);
goog.exportSymbol('proto.bragi.Dota2MatchUpdate.Payload.PayloadCase', null, global);
goog.exportSymbol('proto.bragi.Dota2MegaCreeps', null, global);
goog.exportSymbol('proto.bragi.Dota2Multikill', null, global);
goog.exportSymbol('proto.bragi.Dota2PlayerCurrentMapState', null, global);
goog.exportSymbol('proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate', null, global);
goog.exportSymbol('proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload', null, global);
goog.exportSymbol('proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.PayloadCase', null, global);
goog.exportSymbol('proto.bragi.Dota2PlayerCurrentMapStatisticsState', null, global);
goog.exportSymbol('proto.bragi.Dota2PlayerCurrentMapTimersState', null, global);
goog.exportSymbol('proto.bragi.Dota2PlayerInfoState', null, global);
goog.exportSymbol('proto.bragi.Dota2PlayerPreviousMapState', null, global);
goog.exportSymbol('proto.bragi.Dota2PlayerStatisticsState', null, global);
goog.exportSymbol('proto.bragi.Dota2Position', null, global);
goog.exportSymbol('proto.bragi.Dota2PreviousMapState', null, global);
goog.exportSymbol('proto.bragi.Dota2RoshanKilled', null, global);
goog.exportSymbol('proto.bragi.Dota2RoshanRespawned', null, global);
goog.exportSymbol('proto.bragi.Dota2TeamCurrentMapState', null, global);
goog.exportSymbol('proto.bragi.Dota2TeamCurrentMapStatePartialUpdate', null, global);
goog.exportSymbol('proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload', null, global);
goog.exportSymbol('proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.PayloadCase', null, global);
goog.exportSymbol('proto.bragi.Dota2TeamCurrentMapStatisticsState', null, global);
goog.exportSymbol('proto.bragi.Dota2TeamPreviousMapState', null, global);
goog.exportSymbol('proto.bragi.Dota2TormentorKilled', null, global);
goog.exportSymbol('proto.bragi.Dota2Tower', null, global);
goog.exportSymbol('proto.bragi.Dota2TowerDestroyed', null, global);
goog.exportSymbol('proto.bragi.Dota2TowerTier', null, global);
goog.exportSymbol('proto.bragi.Dota2Towers', null, global);
goog.exportSymbol('proto.bragi.PicksAndBansSelections', null, global);
goog.exportSymbol('proto.bragi.PicksAndBansSelections.CurrentHeroSelection', null, global);
goog.exportSymbol('proto.bragi.PicksAndBansSelections.PickOrBan', null, global);
goog.exportSymbol('proto.bragi.PicksAndBansSelections.State', null, global);
goog.exportSymbol('proto.bragi.PicksAndBansSelections.TeamType', null, global);
goog.exportSymbol('proto.bragi.PicksAndBansSelectionsPerTeam', null, global);
goog.exportSymbol('proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections', null, global);
goog.exportSymbol('proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection', null, global);
goog.exportSymbol('proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections', null, global);
goog.exportSymbol('proto.bragi.PicksAndBansSelectionsPerTeam.SelectionType', null, global);
goog.exportSymbol('proto.bragi.PicksAndBansSelectionsPerTeam.State', null, global);
goog.exportSymbol('proto.bragi.PicksAndBansSelectionsPerTeam.TeamType', null, global);
goog.exportSymbol('proto.bragi.Roshan', null, global);
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
proto.bragi.Dota2MatchMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2MatchMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2MatchMessage.displayName = 'proto.bragi.Dota2MatchMessage';
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
proto.bragi.Dota2MatchMessage.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.Dota2MatchMessage.Payload.oneofGroups_);
};
goog.inherits(proto.bragi.Dota2MatchMessage.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2MatchMessage.Payload.displayName = 'proto.bragi.Dota2MatchMessage.Payload';
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
proto.bragi.Dota2MatchSnapshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.Dota2MatchSnapshot.repeatedFields_, null);
};
goog.inherits(proto.bragi.Dota2MatchSnapshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2MatchSnapshot.displayName = 'proto.bragi.Dota2MatchSnapshot';
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
proto.bragi.PicksAndBansSelectionsPerTeam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.PicksAndBansSelectionsPerTeam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.PicksAndBansSelectionsPerTeam.displayName = 'proto.bragi.PicksAndBansSelectionsPerTeam';
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
proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection.displayName = 'proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection';
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
proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections.repeatedFields_, null);
};
goog.inherits(proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections.displayName = 'proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections';
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
proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections.repeatedFields_, null);
};
goog.inherits(proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections.displayName = 'proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections';
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
proto.bragi.PicksAndBansSelections = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.PicksAndBansSelections.repeatedFields_, null);
};
goog.inherits(proto.bragi.PicksAndBansSelections, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.PicksAndBansSelections.displayName = 'proto.bragi.PicksAndBansSelections';
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
proto.bragi.PicksAndBansSelections.CurrentHeroSelection = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.PicksAndBansSelections.CurrentHeroSelection, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.PicksAndBansSelections.CurrentHeroSelection.displayName = 'proto.bragi.PicksAndBansSelections.CurrentHeroSelection';
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
proto.bragi.PicksAndBansSelections.PickOrBan = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.PicksAndBansSelections.PickOrBan, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.PicksAndBansSelections.PickOrBan.displayName = 'proto.bragi.PicksAndBansSelections.PickOrBan';
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
proto.bragi.Dota2MatchUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2MatchUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2MatchUpdate.displayName = 'proto.bragi.Dota2MatchUpdate';
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
proto.bragi.Dota2MatchUpdate.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.Dota2MatchUpdate.Payload.oneofGroups_);
};
goog.inherits(proto.bragi.Dota2MatchUpdate.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2MatchUpdate.Payload.displayName = 'proto.bragi.Dota2MatchUpdate.Payload';
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
proto.bragi.Dota2MatchStatePartialUpdates = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.Dota2MatchStatePartialUpdates.repeatedFields_, null);
};
goog.inherits(proto.bragi.Dota2MatchStatePartialUpdates, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2MatchStatePartialUpdates.displayName = 'proto.bragi.Dota2MatchStatePartialUpdates';
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
proto.bragi.Dota2MatchStatePartialUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.Dota2MatchStatePartialUpdate.oneofGroups_);
};
goog.inherits(proto.bragi.Dota2MatchStatePartialUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2MatchStatePartialUpdate.displayName = 'proto.bragi.Dota2MatchStatePartialUpdate';
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
proto.bragi.Dota2MatchState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.Dota2MatchState.repeatedFields_, null);
};
goog.inherits(proto.bragi.Dota2MatchState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2MatchState.displayName = 'proto.bragi.Dota2MatchState';
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
proto.bragi.Dota2MatchScoreState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2MatchScoreState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2MatchScoreState.displayName = 'proto.bragi.Dota2MatchScoreState';
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
proto.bragi.Dota2CurrentMapStatePartialUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.Dota2CurrentMapStatePartialUpdate.oneofGroups_);
};
goog.inherits(proto.bragi.Dota2CurrentMapStatePartialUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2CurrentMapStatePartialUpdate.displayName = 'proto.bragi.Dota2CurrentMapStatePartialUpdate';
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
proto.bragi.Dota2CurrentMapState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2CurrentMapState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2CurrentMapState.displayName = 'proto.bragi.Dota2CurrentMapState';
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
proto.bragi.Dota2CurrentMapTimeState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2CurrentMapTimeState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2CurrentMapTimeState.displayName = 'proto.bragi.Dota2CurrentMapTimeState';
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
proto.bragi.Dota2PreviousMapState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2PreviousMapState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2PreviousMapState.displayName = 'proto.bragi.Dota2PreviousMapState';
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
proto.bragi.Dota2TeamCurrentMapStatePartialUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2TeamCurrentMapStatePartialUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.displayName = 'proto.bragi.Dota2TeamCurrentMapStatePartialUpdate';
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
proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.oneofGroups_);
};
goog.inherits(proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.displayName = 'proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload';
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
proto.bragi.Dota2TeamCurrentMapState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2TeamCurrentMapState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2TeamCurrentMapState.displayName = 'proto.bragi.Dota2TeamCurrentMapState';
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
proto.bragi.Dota2TeamCurrentMapStatisticsState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2TeamCurrentMapStatisticsState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2TeamCurrentMapStatisticsState.displayName = 'proto.bragi.Dota2TeamCurrentMapStatisticsState';
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
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.displayName = 'proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate';
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
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.oneofGroups_);
};
goog.inherits(proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.displayName = 'proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload';
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
proto.bragi.Dota2PlayerCurrentMapState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2PlayerCurrentMapState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2PlayerCurrentMapState.displayName = 'proto.bragi.Dota2PlayerCurrentMapState';
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
proto.bragi.Dota2PlayerCurrentMapStatisticsState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2PlayerCurrentMapStatisticsState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2PlayerCurrentMapStatisticsState.displayName = 'proto.bragi.Dota2PlayerCurrentMapStatisticsState';
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
proto.bragi.Dota2PlayerCurrentMapTimersState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2PlayerCurrentMapTimersState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2PlayerCurrentMapTimersState.displayName = 'proto.bragi.Dota2PlayerCurrentMapTimersState';
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
proto.bragi.Dota2TeamPreviousMapState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2TeamPreviousMapState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2TeamPreviousMapState.displayName = 'proto.bragi.Dota2TeamPreviousMapState';
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
proto.bragi.Dota2PlayerPreviousMapState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2PlayerPreviousMapState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2PlayerPreviousMapState.displayName = 'proto.bragi.Dota2PlayerPreviousMapState';
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
proto.bragi.Dota2PlayerInfoState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2PlayerInfoState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2PlayerInfoState.displayName = 'proto.bragi.Dota2PlayerInfoState';
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
proto.bragi.Dota2PlayerStatisticsState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2PlayerStatisticsState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2PlayerStatisticsState.displayName = 'proto.bragi.Dota2PlayerStatisticsState';
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
proto.bragi.Dota2Towers = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.Dota2Towers.repeatedFields_, null);
};
goog.inherits(proto.bragi.Dota2Towers, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2Towers.displayName = 'proto.bragi.Dota2Towers';
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
proto.bragi.Dota2Barracks = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.Dota2Barracks.repeatedFields_, null);
};
goog.inherits(proto.bragi.Dota2Barracks, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2Barracks.displayName = 'proto.bragi.Dota2Barracks';
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
proto.bragi.Dota2Abilities = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.Dota2Abilities.repeatedFields_, null);
};
goog.inherits(proto.bragi.Dota2Abilities, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2Abilities.displayName = 'proto.bragi.Dota2Abilities';
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
proto.bragi.Dota2Items = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.Dota2Items.repeatedFields_, null);
};
goog.inherits(proto.bragi.Dota2Items, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2Items.displayName = 'proto.bragi.Dota2Items';
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
proto.bragi.Dota2Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2Item.displayName = 'proto.bragi.Dota2Item';
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
proto.bragi.Dota2Ability = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2Ability, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2Ability.displayName = 'proto.bragi.Dota2Ability';
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
proto.bragi.Roshan = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Roshan, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Roshan.displayName = 'proto.bragi.Roshan';
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
proto.bragi.Dota2Tower = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2Tower, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2Tower.displayName = 'proto.bragi.Dota2Tower';
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
proto.bragi.Dota2Barrack = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2Barrack, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2Barrack.displayName = 'proto.bragi.Dota2Barrack';
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
proto.bragi.Dota2Position = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2Position, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2Position.displayName = 'proto.bragi.Dota2Position';
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
proto.bragi.Dota2MatchEvents = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.Dota2MatchEvents.repeatedFields_, null);
};
goog.inherits(proto.bragi.Dota2MatchEvents, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2MatchEvents.displayName = 'proto.bragi.Dota2MatchEvents';
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
proto.bragi.Dota2Event = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.Dota2Event.oneofGroups_);
};
goog.inherits(proto.bragi.Dota2Event, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2Event.displayName = 'proto.bragi.Dota2Event';
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
proto.bragi.Dota2EventTeam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2EventTeam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2EventTeam.displayName = 'proto.bragi.Dota2EventTeam';
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
proto.bragi.Dota2EventPlayer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2EventPlayer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2EventPlayer.displayName = 'proto.bragi.Dota2EventPlayer';
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
proto.bragi.Dota2MapStarted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2MapStarted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2MapStarted.displayName = 'proto.bragi.Dota2MapStarted';
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
proto.bragi.Dota2MapEnded = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2MapEnded, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2MapEnded.displayName = 'proto.bragi.Dota2MapEnded';
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
proto.bragi.Dota2MapPaused = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2MapPaused, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2MapPaused.displayName = 'proto.bragi.Dota2MapPaused';
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
proto.bragi.Dota2MapResumed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2MapResumed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2MapResumed.displayName = 'proto.bragi.Dota2MapResumed';
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
proto.bragi.Dota2HeroKill = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2HeroKill, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2HeroKill.displayName = 'proto.bragi.Dota2HeroKill';
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
proto.bragi.Dota2HeroDeathByEnvironment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2HeroDeathByEnvironment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2HeroDeathByEnvironment.displayName = 'proto.bragi.Dota2HeroDeathByEnvironment';
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
proto.bragi.Dota2TowerDestroyed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2TowerDestroyed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2TowerDestroyed.displayName = 'proto.bragi.Dota2TowerDestroyed';
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
proto.bragi.Dota2BarracksDestroyed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2BarracksDestroyed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2BarracksDestroyed.displayName = 'proto.bragi.Dota2BarracksDestroyed';
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
proto.bragi.Dota2AncientDestroyed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2AncientDestroyed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2AncientDestroyed.displayName = 'proto.bragi.Dota2AncientDestroyed';
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
proto.bragi.Dota2MegaCreeps = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2MegaCreeps, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2MegaCreeps.displayName = 'proto.bragi.Dota2MegaCreeps';
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
proto.bragi.Dota2RoshanKilled = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2RoshanKilled, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2RoshanKilled.displayName = 'proto.bragi.Dota2RoshanKilled';
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
proto.bragi.Dota2RoshanRespawned = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2RoshanRespawned, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2RoshanRespawned.displayName = 'proto.bragi.Dota2RoshanRespawned';
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
proto.bragi.Dota2AegisPickedUp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2AegisPickedUp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2AegisPickedUp.displayName = 'proto.bragi.Dota2AegisPickedUp';
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
proto.bragi.Dota2AegisLost = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2AegisLost, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2AegisLost.displayName = 'proto.bragi.Dota2AegisLost';
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
proto.bragi.Dota2Buyback = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2Buyback, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2Buyback.displayName = 'proto.bragi.Dota2Buyback';
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
proto.bragi.Dota2DayNightChanged = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2DayNightChanged, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2DayNightChanged.displayName = 'proto.bragi.Dota2DayNightChanged';
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
proto.bragi.Dota2Multikill = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2Multikill, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2Multikill.displayName = 'proto.bragi.Dota2Multikill';
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
proto.bragi.Dota2Killstreak = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2Killstreak, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2Killstreak.displayName = 'proto.bragi.Dota2Killstreak';
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
proto.bragi.Dota2TormentorKilled = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Dota2TormentorKilled, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Dota2TormentorKilled.displayName = 'proto.bragi.Dota2TormentorKilled';
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
proto.bragi.Dota2MatchMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2MatchMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2MatchMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2MatchMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
matchUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
sequence: jspb.Message.getFieldWithDefault(msg, 2, 0),
timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
dataStatus: jspb.Message.getFieldWithDefault(msg, 5, 0),
payload: (f = msg.getPayload()) && proto.bragi.Dota2MatchMessage.Payload.toObject(includeInstance, f)
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
 * @return {!proto.bragi.Dota2MatchMessage}
 */
proto.bragi.Dota2MatchMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2MatchMessage;
  return proto.bragi.Dota2MatchMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2MatchMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2MatchMessage}
 */
proto.bragi.Dota2MatchMessage.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.Dota2MatchMessage.Payload;
      reader.readMessage(value,proto.bragi.Dota2MatchMessage.Payload.deserializeBinaryFromReader);
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
proto.bragi.Dota2MatchMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2MatchMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2MatchMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2MatchMessage.serializeBinaryToWriter = function(message, writer) {
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
      proto.bragi.Dota2MatchMessage.Payload.serializeBinaryToWriter
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
proto.bragi.Dota2MatchMessage.Payload.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.bragi.Dota2MatchMessage.Payload.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  SNAPSHOT: 1,
  UPDATE: 2
};

/**
 * @return {proto.bragi.Dota2MatchMessage.Payload.PayloadCase}
 */
proto.bragi.Dota2MatchMessage.Payload.prototype.getPayloadCase = function() {
  return /** @type {proto.bragi.Dota2MatchMessage.Payload.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.bragi.Dota2MatchMessage.Payload.oneofGroups_[0]));
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
proto.bragi.Dota2MatchMessage.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2MatchMessage.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2MatchMessage.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2MatchMessage.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
snapshot: (f = msg.getSnapshot()) && proto.bragi.Dota2MatchSnapshot.toObject(includeInstance, f),
update: (f = msg.getUpdate()) && proto.bragi.Dota2MatchUpdate.toObject(includeInstance, f)
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
 * @return {!proto.bragi.Dota2MatchMessage.Payload}
 */
proto.bragi.Dota2MatchMessage.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2MatchMessage.Payload;
  return proto.bragi.Dota2MatchMessage.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2MatchMessage.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2MatchMessage.Payload}
 */
proto.bragi.Dota2MatchMessage.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Dota2MatchSnapshot;
      reader.readMessage(value,proto.bragi.Dota2MatchSnapshot.deserializeBinaryFromReader);
      msg.setSnapshot(value);
      break;
    case 2:
      var value = new proto.bragi.Dota2MatchUpdate;
      reader.readMessage(value,proto.bragi.Dota2MatchUpdate.deserializeBinaryFromReader);
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
proto.bragi.Dota2MatchMessage.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2MatchMessage.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2MatchMessage.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2MatchMessage.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSnapshot();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.Dota2MatchSnapshot.serializeBinaryToWriter
    );
  }
  f = message.getUpdate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.Dota2MatchUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * optional Dota2MatchSnapshot snapshot = 1;
 * @return {?proto.bragi.Dota2MatchSnapshot}
 */
proto.bragi.Dota2MatchMessage.Payload.prototype.getSnapshot = function() {
  return /** @type{?proto.bragi.Dota2MatchSnapshot} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2MatchSnapshot, 1));
};


/**
 * @param {?proto.bragi.Dota2MatchSnapshot|undefined} value
 * @return {!proto.bragi.Dota2MatchMessage.Payload} returns this
*/
proto.bragi.Dota2MatchMessage.Payload.prototype.setSnapshot = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.Dota2MatchMessage.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2MatchMessage.Payload} returns this
 */
proto.bragi.Dota2MatchMessage.Payload.prototype.clearSnapshot = function() {
  return this.setSnapshot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2MatchMessage.Payload.prototype.hasSnapshot = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Dota2MatchUpdate update = 2;
 * @return {?proto.bragi.Dota2MatchUpdate}
 */
proto.bragi.Dota2MatchMessage.Payload.prototype.getUpdate = function() {
  return /** @type{?proto.bragi.Dota2MatchUpdate} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2MatchUpdate, 2));
};


/**
 * @param {?proto.bragi.Dota2MatchUpdate|undefined} value
 * @return {!proto.bragi.Dota2MatchMessage.Payload} returns this
*/
proto.bragi.Dota2MatchMessage.Payload.prototype.setUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bragi.Dota2MatchMessage.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2MatchMessage.Payload} returns this
 */
proto.bragi.Dota2MatchMessage.Payload.prototype.clearUpdate = function() {
  return this.setUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2MatchMessage.Payload.prototype.hasUpdate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string match_urn = 1;
 * @return {string}
 */
proto.bragi.Dota2MatchMessage.prototype.getMatchUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.Dota2MatchMessage} returns this
 */
proto.bragi.Dota2MatchMessage.prototype.setMatchUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 sequence = 2;
 * @return {number}
 */
proto.bragi.Dota2MatchMessage.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2MatchMessage} returns this
 */
proto.bragi.Dota2MatchMessage.prototype.setSequence = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bragi.Dota2MatchMessage.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bragi.Dota2MatchMessage} returns this
*/
proto.bragi.Dota2MatchMessage.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2MatchMessage} returns this
 */
proto.bragi.Dota2MatchMessage.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2MatchMessage.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional DataStatus data_status = 5;
 * @return {!proto.bragi.DataStatus}
 */
proto.bragi.Dota2MatchMessage.prototype.getDataStatus = function() {
  return /** @type {!proto.bragi.DataStatus} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.bragi.DataStatus} value
 * @return {!proto.bragi.Dota2MatchMessage} returns this
 */
proto.bragi.Dota2MatchMessage.prototype.setDataStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional Payload payload = 4;
 * @return {?proto.bragi.Dota2MatchMessage.Payload}
 */
proto.bragi.Dota2MatchMessage.prototype.getPayload = function() {
  return /** @type{?proto.bragi.Dota2MatchMessage.Payload} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2MatchMessage.Payload, 4));
};


/**
 * @param {?proto.bragi.Dota2MatchMessage.Payload|undefined} value
 * @return {!proto.bragi.Dota2MatchMessage} returns this
*/
proto.bragi.Dota2MatchMessage.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2MatchMessage} returns this
 */
proto.bragi.Dota2MatchMessage.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2MatchMessage.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.Dota2MatchSnapshot.repeatedFields_ = [6];



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
proto.bragi.Dota2MatchSnapshot.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2MatchSnapshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2MatchSnapshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2MatchSnapshot.toObject = function(includeInstance, msg) {
  var f, obj = {
matchUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
sequence: jspb.Message.getFieldWithDefault(msg, 2, 0),
timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
dataStatus: jspb.Message.getFieldWithDefault(msg, 4, 0),
announcementsList: jspb.Message.toObjectList(msg.getAnnouncementsList(),
    bragi_common_pb.Announcement.toObject, includeInstance),
matchState: (f = msg.getMatchState()) && proto.bragi.Dota2MatchState.toObject(includeInstance, f),
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
 * @return {!proto.bragi.Dota2MatchSnapshot}
 */
proto.bragi.Dota2MatchSnapshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2MatchSnapshot;
  return proto.bragi.Dota2MatchSnapshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2MatchSnapshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2MatchSnapshot}
 */
proto.bragi.Dota2MatchSnapshot.deserializeBinaryFromReader = function(msg, reader) {
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
    case 6:
      var value = new bragi_common_pb.Announcement;
      reader.readMessage(value,bragi_common_pb.Announcement.deserializeBinaryFromReader);
      msg.addAnnouncements(value);
      break;
    case 7:
      var value = new proto.bragi.Dota2MatchState;
      reader.readMessage(value,proto.bragi.Dota2MatchState.deserializeBinaryFromReader);
      msg.setMatchState(value);
      break;
    case 8:
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
proto.bragi.Dota2MatchSnapshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2MatchSnapshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2MatchSnapshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2MatchSnapshot.serializeBinaryToWriter = function(message, writer) {
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
      6,
      f,
      bragi_common_pb.Announcement.serializeBinaryToWriter
    );
  }
  f = message.getMatchState();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bragi.Dota2MatchState.serializeBinaryToWriter
    );
  }
  f = message.getTournament();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      bragi_common_pb.Tournament.serializeBinaryToWriter
    );
  }
};


/**
 * optional string match_urn = 1;
 * @return {string}
 */
proto.bragi.Dota2MatchSnapshot.prototype.getMatchUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.Dota2MatchSnapshot} returns this
 */
proto.bragi.Dota2MatchSnapshot.prototype.setMatchUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 sequence = 2;
 * @return {number}
 */
proto.bragi.Dota2MatchSnapshot.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2MatchSnapshot} returns this
 */
proto.bragi.Dota2MatchSnapshot.prototype.setSequence = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bragi.Dota2MatchSnapshot.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bragi.Dota2MatchSnapshot} returns this
*/
proto.bragi.Dota2MatchSnapshot.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2MatchSnapshot} returns this
 */
proto.bragi.Dota2MatchSnapshot.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2MatchSnapshot.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional DataStatus data_status = 4;
 * @return {!proto.bragi.DataStatus}
 */
proto.bragi.Dota2MatchSnapshot.prototype.getDataStatus = function() {
  return /** @type {!proto.bragi.DataStatus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.bragi.DataStatus} value
 * @return {!proto.bragi.Dota2MatchSnapshot} returns this
 */
proto.bragi.Dota2MatchSnapshot.prototype.setDataStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * repeated Announcement announcements = 6;
 * @return {!Array<!proto.bragi.Announcement>}
 */
proto.bragi.Dota2MatchSnapshot.prototype.getAnnouncementsList = function() {
  return /** @type{!Array<!proto.bragi.Announcement>} */ (
    jspb.Message.getRepeatedWrapperField(this, bragi_common_pb.Announcement, 6));
};


/**
 * @param {!Array<!proto.bragi.Announcement>} value
 * @return {!proto.bragi.Dota2MatchSnapshot} returns this
*/
proto.bragi.Dota2MatchSnapshot.prototype.setAnnouncementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.bragi.Announcement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.Announcement}
 */
proto.bragi.Dota2MatchSnapshot.prototype.addAnnouncements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.bragi.Announcement, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.Dota2MatchSnapshot} returns this
 */
proto.bragi.Dota2MatchSnapshot.prototype.clearAnnouncementsList = function() {
  return this.setAnnouncementsList([]);
};


/**
 * optional Dota2MatchState match_state = 7;
 * @return {?proto.bragi.Dota2MatchState}
 */
proto.bragi.Dota2MatchSnapshot.prototype.getMatchState = function() {
  return /** @type{?proto.bragi.Dota2MatchState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2MatchState, 7));
};


/**
 * @param {?proto.bragi.Dota2MatchState|undefined} value
 * @return {!proto.bragi.Dota2MatchSnapshot} returns this
*/
proto.bragi.Dota2MatchSnapshot.prototype.setMatchState = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2MatchSnapshot} returns this
 */
proto.bragi.Dota2MatchSnapshot.prototype.clearMatchState = function() {
  return this.setMatchState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2MatchSnapshot.prototype.hasMatchState = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Tournament tournament = 8;
 * @return {?proto.bragi.Tournament}
 */
proto.bragi.Dota2MatchSnapshot.prototype.getTournament = function() {
  return /** @type{?proto.bragi.Tournament} */ (
    jspb.Message.getWrapperField(this, bragi_common_pb.Tournament, 8));
};


/**
 * @param {?proto.bragi.Tournament|undefined} value
 * @return {!proto.bragi.Dota2MatchSnapshot} returns this
*/
proto.bragi.Dota2MatchSnapshot.prototype.setTournament = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2MatchSnapshot} returns this
 */
proto.bragi.Dota2MatchSnapshot.prototype.clearTournament = function() {
  return this.setTournament(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2MatchSnapshot.prototype.hasTournament = function() {
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
proto.bragi.PicksAndBansSelectionsPerTeam.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.PicksAndBansSelectionsPerTeam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.PicksAndBansSelectionsPerTeam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.PicksAndBansSelectionsPerTeam.toObject = function(includeInstance, msg) {
  var f, obj = {
state: jspb.Message.getFieldWithDefault(msg, 1, 0),
activeTeam: jspb.Message.getFieldWithDefault(msg, 2, 0),
selectionType: jspb.Message.getFieldWithDefault(msg, 3, 0),
activeTeamTimeRemaining: jspb.Message.getFieldWithDefault(msg, 4, 0),
radiantBonusTime: jspb.Message.getFieldWithDefault(msg, 5, 0),
direBonusTime: jspb.Message.getFieldWithDefault(msg, 6, 0),
radiantSelections: (f = msg.getRadiantSelections()) && proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections.toObject(includeInstance, f),
direSelections: (f = msg.getDireSelections()) && proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections.toObject(includeInstance, f)
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
 * @return {!proto.bragi.PicksAndBansSelectionsPerTeam}
 */
proto.bragi.PicksAndBansSelectionsPerTeam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.PicksAndBansSelectionsPerTeam;
  return proto.bragi.PicksAndBansSelectionsPerTeam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.PicksAndBansSelectionsPerTeam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.PicksAndBansSelectionsPerTeam}
 */
proto.bragi.PicksAndBansSelectionsPerTeam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bragi.PicksAndBansSelectionsPerTeam.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {!proto.bragi.PicksAndBansSelectionsPerTeam.TeamType} */ (reader.readEnum());
      msg.setActiveTeam(value);
      break;
    case 3:
      var value = /** @type {!proto.bragi.PicksAndBansSelectionsPerTeam.SelectionType} */ (reader.readEnum());
      msg.setSelectionType(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setActiveTeamTimeRemaining(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRadiantBonusTime(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDireBonusTime(value);
      break;
    case 7:
      var value = new proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections;
      reader.readMessage(value,proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections.deserializeBinaryFromReader);
      msg.setRadiantSelections(value);
      break;
    case 8:
      var value = new proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections;
      reader.readMessage(value,proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections.deserializeBinaryFromReader);
      msg.setDireSelections(value);
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
proto.bragi.PicksAndBansSelectionsPerTeam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.PicksAndBansSelectionsPerTeam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.PicksAndBansSelectionsPerTeam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.PicksAndBansSelectionsPerTeam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getActiveTeam();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getSelectionType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getActiveTeamTimeRemaining();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getRadiantBonusTime();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getDireBonusTime();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getRadiantSelections();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections.serializeBinaryToWriter
    );
  }
  f = message.getDireSelections();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bragi.PicksAndBansSelectionsPerTeam.State = {
  STATE_UNSPECIFIED: 0,
  STATE_IN_PROGRESS: 1,
  STATE_ENDED: 2
};

/**
 * @enum {number}
 */
proto.bragi.PicksAndBansSelectionsPerTeam.SelectionType = {
  SELECTION_TYPE_UNSPECIFIED: 0,
  SELECTION_TYPE_PICK: 1,
  SELECTION_TYPE_BAN: 2
};

/**
 * @enum {number}
 */
proto.bragi.PicksAndBansSelectionsPerTeam.TeamType = {
  TEAM_TYPE_UNSPECIFIED: 0,
  TEAM_TYPE_RADIANT: 1,
  TEAM_TYPE_DIRE: 2
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
proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection.toObject = function(includeInstance, msg) {
  var f, obj = {
heroSteamId: jspb.Message.getFieldWithDefault(msg, 1, 0),
heroKey: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection}
 */
proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection;
  return proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection}
 */
proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHeroSteamId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHeroKey(value);
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
proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeroSteamId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getHeroKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 hero_steam_id = 1;
 * @return {number}
 */
proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection.prototype.getHeroSteamId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection} returns this
 */
proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection.prototype.setHeroSteamId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string hero_key = 2;
 * @return {string}
 */
proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection.prototype.getHeroKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection} returns this
 */
proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection.prototype.setHeroKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections.repeatedFields_ = [1,2];



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
proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections.toObject = function(includeInstance, msg) {
  var f, obj = {
bansList: jspb.Message.toObjectList(msg.getBansList(),
    proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection.toObject, includeInstance),
picksList: jspb.Message.toObjectList(msg.getPicksList(),
    proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection.toObject, includeInstance)
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
 * @return {!proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections}
 */
proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections;
  return proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections}
 */
proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection;
      reader.readMessage(value,proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection.deserializeBinaryFromReader);
      msg.addBans(value);
      break;
    case 2:
      var value = new proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection;
      reader.readMessage(value,proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection.deserializeBinaryFromReader);
      msg.addPicks(value);
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
proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBansList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection.serializeBinaryToWriter
    );
  }
  f = message.getPicksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection.serializeBinaryToWriter
    );
  }
};


/**
 * repeated HeroSelection bans = 1;
 * @return {!Array<!proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection>}
 */
proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections.prototype.getBansList = function() {
  return /** @type{!Array<!proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection, 1));
};


/**
 * @param {!Array<!proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection>} value
 * @return {!proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections} returns this
*/
proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections.prototype.setBansList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection}
 */
proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections.prototype.addBans = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections} returns this
 */
proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections.prototype.clearBansList = function() {
  return this.setBansList([]);
};


/**
 * repeated HeroSelection picks = 2;
 * @return {!Array<!proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection>}
 */
proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections.prototype.getPicksList = function() {
  return /** @type{!Array<!proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection, 2));
};


/**
 * @param {!Array<!proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection>} value
 * @return {!proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections} returns this
*/
proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections.prototype.setPicksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection}
 */
proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections.prototype.addPicks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections} returns this
 */
proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections.prototype.clearPicksList = function() {
  return this.setPicksList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections.repeatedFields_ = [1,2];



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
proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections.toObject = function(includeInstance, msg) {
  var f, obj = {
bansList: jspb.Message.toObjectList(msg.getBansList(),
    proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection.toObject, includeInstance),
picksList: jspb.Message.toObjectList(msg.getPicksList(),
    proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection.toObject, includeInstance)
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
 * @return {!proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections}
 */
proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections;
  return proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections}
 */
proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection;
      reader.readMessage(value,proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection.deserializeBinaryFromReader);
      msg.addBans(value);
      break;
    case 2:
      var value = new proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection;
      reader.readMessage(value,proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection.deserializeBinaryFromReader);
      msg.addPicks(value);
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
proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBansList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection.serializeBinaryToWriter
    );
  }
  f = message.getPicksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection.serializeBinaryToWriter
    );
  }
};


/**
 * repeated HeroSelection bans = 1;
 * @return {!Array<!proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection>}
 */
proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections.prototype.getBansList = function() {
  return /** @type{!Array<!proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection, 1));
};


/**
 * @param {!Array<!proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection>} value
 * @return {!proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections} returns this
*/
proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections.prototype.setBansList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection}
 */
proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections.prototype.addBans = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections} returns this
 */
proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections.prototype.clearBansList = function() {
  return this.setBansList([]);
};


/**
 * repeated HeroSelection picks = 2;
 * @return {!Array<!proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection>}
 */
proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections.prototype.getPicksList = function() {
  return /** @type{!Array<!proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection, 2));
};


/**
 * @param {!Array<!proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection>} value
 * @return {!proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections} returns this
*/
proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections.prototype.setPicksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection}
 */
proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections.prototype.addPicks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bragi.PicksAndBansSelectionsPerTeam.HeroSelection, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections} returns this
 */
proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections.prototype.clearPicksList = function() {
  return this.setPicksList([]);
};


/**
 * optional State state = 1;
 * @return {!proto.bragi.PicksAndBansSelectionsPerTeam.State}
 */
proto.bragi.PicksAndBansSelectionsPerTeam.prototype.getState = function() {
  return /** @type {!proto.bragi.PicksAndBansSelectionsPerTeam.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bragi.PicksAndBansSelectionsPerTeam.State} value
 * @return {!proto.bragi.PicksAndBansSelectionsPerTeam} returns this
 */
proto.bragi.PicksAndBansSelectionsPerTeam.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional TeamType active_team = 2;
 * @return {!proto.bragi.PicksAndBansSelectionsPerTeam.TeamType}
 */
proto.bragi.PicksAndBansSelectionsPerTeam.prototype.getActiveTeam = function() {
  return /** @type {!proto.bragi.PicksAndBansSelectionsPerTeam.TeamType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bragi.PicksAndBansSelectionsPerTeam.TeamType} value
 * @return {!proto.bragi.PicksAndBansSelectionsPerTeam} returns this
 */
proto.bragi.PicksAndBansSelectionsPerTeam.prototype.setActiveTeam = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional SelectionType selection_type = 3;
 * @return {!proto.bragi.PicksAndBansSelectionsPerTeam.SelectionType}
 */
proto.bragi.PicksAndBansSelectionsPerTeam.prototype.getSelectionType = function() {
  return /** @type {!proto.bragi.PicksAndBansSelectionsPerTeam.SelectionType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.bragi.PicksAndBansSelectionsPerTeam.SelectionType} value
 * @return {!proto.bragi.PicksAndBansSelectionsPerTeam} returns this
 */
proto.bragi.PicksAndBansSelectionsPerTeam.prototype.setSelectionType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int32 active_team_time_remaining = 4;
 * @return {number}
 */
proto.bragi.PicksAndBansSelectionsPerTeam.prototype.getActiveTeamTimeRemaining = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.PicksAndBansSelectionsPerTeam} returns this
 */
proto.bragi.PicksAndBansSelectionsPerTeam.prototype.setActiveTeamTimeRemaining = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 radiant_bonus_time = 5;
 * @return {number}
 */
proto.bragi.PicksAndBansSelectionsPerTeam.prototype.getRadiantBonusTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.PicksAndBansSelectionsPerTeam} returns this
 */
proto.bragi.PicksAndBansSelectionsPerTeam.prototype.setRadiantBonusTime = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 dire_bonus_time = 6;
 * @return {number}
 */
proto.bragi.PicksAndBansSelectionsPerTeam.prototype.getDireBonusTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.PicksAndBansSelectionsPerTeam} returns this
 */
proto.bragi.PicksAndBansSelectionsPerTeam.prototype.setDireBonusTime = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional RadiantSelections radiant_selections = 7;
 * @return {?proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections}
 */
proto.bragi.PicksAndBansSelectionsPerTeam.prototype.getRadiantSelections = function() {
  return /** @type{?proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections, 7));
};


/**
 * @param {?proto.bragi.PicksAndBansSelectionsPerTeam.RadiantSelections|undefined} value
 * @return {!proto.bragi.PicksAndBansSelectionsPerTeam} returns this
*/
proto.bragi.PicksAndBansSelectionsPerTeam.prototype.setRadiantSelections = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.PicksAndBansSelectionsPerTeam} returns this
 */
proto.bragi.PicksAndBansSelectionsPerTeam.prototype.clearRadiantSelections = function() {
  return this.setRadiantSelections(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.PicksAndBansSelectionsPerTeam.prototype.hasRadiantSelections = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional DireSelections dire_selections = 8;
 * @return {?proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections}
 */
proto.bragi.PicksAndBansSelectionsPerTeam.prototype.getDireSelections = function() {
  return /** @type{?proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections, 8));
};


/**
 * @param {?proto.bragi.PicksAndBansSelectionsPerTeam.DireSelections|undefined} value
 * @return {!proto.bragi.PicksAndBansSelectionsPerTeam} returns this
*/
proto.bragi.PicksAndBansSelectionsPerTeam.prototype.setDireSelections = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.PicksAndBansSelectionsPerTeam} returns this
 */
proto.bragi.PicksAndBansSelectionsPerTeam.prototype.clearDireSelections = function() {
  return this.setDireSelections(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.PicksAndBansSelectionsPerTeam.prototype.hasDireSelections = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.PicksAndBansSelections.repeatedFields_ = [2];



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
proto.bragi.PicksAndBansSelections.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.PicksAndBansSelections.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.PicksAndBansSelections} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.PicksAndBansSelections.toObject = function(includeInstance, msg) {
  var f, obj = {
currentHeroSelection: (f = msg.getCurrentHeroSelection()) && proto.bragi.PicksAndBansSelections.CurrentHeroSelection.toObject(includeInstance, f),
picksAndBansList: jspb.Message.toObjectList(msg.getPicksAndBansList(),
    proto.bragi.PicksAndBansSelections.PickOrBan.toObject, includeInstance),
state: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.bragi.PicksAndBansSelections}
 */
proto.bragi.PicksAndBansSelections.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.PicksAndBansSelections;
  return proto.bragi.PicksAndBansSelections.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.PicksAndBansSelections} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.PicksAndBansSelections}
 */
proto.bragi.PicksAndBansSelections.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.PicksAndBansSelections.CurrentHeroSelection;
      reader.readMessage(value,proto.bragi.PicksAndBansSelections.CurrentHeroSelection.deserializeBinaryFromReader);
      msg.setCurrentHeroSelection(value);
      break;
    case 2:
      var value = new proto.bragi.PicksAndBansSelections.PickOrBan;
      reader.readMessage(value,proto.bragi.PicksAndBansSelections.PickOrBan.deserializeBinaryFromReader);
      msg.addPicksAndBans(value);
      break;
    case 3:
      var value = /** @type {!proto.bragi.PicksAndBansSelections.State} */ (reader.readEnum());
      msg.setState(value);
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
proto.bragi.PicksAndBansSelections.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.PicksAndBansSelections.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.PicksAndBansSelections} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.PicksAndBansSelections.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrentHeroSelection();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.PicksAndBansSelections.CurrentHeroSelection.serializeBinaryToWriter
    );
  }
  f = message.getPicksAndBansList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.bragi.PicksAndBansSelections.PickOrBan.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.bragi.PicksAndBansSelections.TeamType = {
  TEAM_TYPE_UNSPECIFIED: 0,
  TEAM_TYPE_RADIANT: 1,
  TEAM_TYPE_DIRE: 2
};

/**
 * @enum {number}
 */
proto.bragi.PicksAndBansSelections.State = {
  STATE_UNSPECIFIED: 0,
  STATE_IN_PROGRESS: 1,
  STATE_ENDED: 2
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
proto.bragi.PicksAndBansSelections.CurrentHeroSelection.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.PicksAndBansSelections.CurrentHeroSelection.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.PicksAndBansSelections.CurrentHeroSelection} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.PicksAndBansSelections.CurrentHeroSelection.toObject = function(includeInstance, msg) {
  var f, obj = {
activeTeam: jspb.Message.getFieldWithDefault(msg, 1, 0),
pick: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
activeTeamTimeRemaining: jspb.Message.getFieldWithDefault(msg, 3, 0),
radiantBonusTime: jspb.Message.getFieldWithDefault(msg, 4, 0),
direBonusTime: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.bragi.PicksAndBansSelections.CurrentHeroSelection}
 */
proto.bragi.PicksAndBansSelections.CurrentHeroSelection.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.PicksAndBansSelections.CurrentHeroSelection;
  return proto.bragi.PicksAndBansSelections.CurrentHeroSelection.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.PicksAndBansSelections.CurrentHeroSelection} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.PicksAndBansSelections.CurrentHeroSelection}
 */
proto.bragi.PicksAndBansSelections.CurrentHeroSelection.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bragi.PicksAndBansSelections.TeamType} */ (reader.readEnum());
      msg.setActiveTeam(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPick(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setActiveTeamTimeRemaining(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRadiantBonusTime(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDireBonusTime(value);
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
proto.bragi.PicksAndBansSelections.CurrentHeroSelection.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.PicksAndBansSelections.CurrentHeroSelection.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.PicksAndBansSelections.CurrentHeroSelection} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.PicksAndBansSelections.CurrentHeroSelection.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActiveTeam();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPick();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getActiveTeamTimeRemaining();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getRadiantBonusTime();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getDireBonusTime();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional TeamType active_team = 1;
 * @return {!proto.bragi.PicksAndBansSelections.TeamType}
 */
proto.bragi.PicksAndBansSelections.CurrentHeroSelection.prototype.getActiveTeam = function() {
  return /** @type {!proto.bragi.PicksAndBansSelections.TeamType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bragi.PicksAndBansSelections.TeamType} value
 * @return {!proto.bragi.PicksAndBansSelections.CurrentHeroSelection} returns this
 */
proto.bragi.PicksAndBansSelections.CurrentHeroSelection.prototype.setActiveTeam = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bool pick = 2;
 * @return {boolean}
 */
proto.bragi.PicksAndBansSelections.CurrentHeroSelection.prototype.getPick = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.PicksAndBansSelections.CurrentHeroSelection} returns this
 */
proto.bragi.PicksAndBansSelections.CurrentHeroSelection.prototype.setPick = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional int32 active_team_time_remaining = 3;
 * @return {number}
 */
proto.bragi.PicksAndBansSelections.CurrentHeroSelection.prototype.getActiveTeamTimeRemaining = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.PicksAndBansSelections.CurrentHeroSelection} returns this
 */
proto.bragi.PicksAndBansSelections.CurrentHeroSelection.prototype.setActiveTeamTimeRemaining = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 radiant_bonus_time = 4;
 * @return {number}
 */
proto.bragi.PicksAndBansSelections.CurrentHeroSelection.prototype.getRadiantBonusTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.PicksAndBansSelections.CurrentHeroSelection} returns this
 */
proto.bragi.PicksAndBansSelections.CurrentHeroSelection.prototype.setRadiantBonusTime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 dire_bonus_time = 5;
 * @return {number}
 */
proto.bragi.PicksAndBansSelections.CurrentHeroSelection.prototype.getDireBonusTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.PicksAndBansSelections.CurrentHeroSelection} returns this
 */
proto.bragi.PicksAndBansSelections.CurrentHeroSelection.prototype.setDireBonusTime = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
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
proto.bragi.PicksAndBansSelections.PickOrBan.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.PicksAndBansSelections.PickOrBan.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.PicksAndBansSelections.PickOrBan} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.PicksAndBansSelections.PickOrBan.toObject = function(includeInstance, msg) {
  var f, obj = {
team: jspb.Message.getFieldWithDefault(msg, 1, 0),
pick: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
heroSteamId: jspb.Message.getFieldWithDefault(msg, 3, 0),
heroKey: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.bragi.PicksAndBansSelections.PickOrBan}
 */
proto.bragi.PicksAndBansSelections.PickOrBan.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.PicksAndBansSelections.PickOrBan;
  return proto.bragi.PicksAndBansSelections.PickOrBan.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.PicksAndBansSelections.PickOrBan} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.PicksAndBansSelections.PickOrBan}
 */
proto.bragi.PicksAndBansSelections.PickOrBan.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bragi.PicksAndBansSelections.TeamType} */ (reader.readEnum());
      msg.setTeam(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPick(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHeroSteamId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setHeroKey(value);
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
proto.bragi.PicksAndBansSelections.PickOrBan.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.PicksAndBansSelections.PickOrBan.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.PicksAndBansSelections.PickOrBan} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.PicksAndBansSelections.PickOrBan.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeam();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPick();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getHeroSteamId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getHeroKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional TeamType team = 1;
 * @return {!proto.bragi.PicksAndBansSelections.TeamType}
 */
proto.bragi.PicksAndBansSelections.PickOrBan.prototype.getTeam = function() {
  return /** @type {!proto.bragi.PicksAndBansSelections.TeamType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bragi.PicksAndBansSelections.TeamType} value
 * @return {!proto.bragi.PicksAndBansSelections.PickOrBan} returns this
 */
proto.bragi.PicksAndBansSelections.PickOrBan.prototype.setTeam = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bool pick = 2;
 * @return {boolean}
 */
proto.bragi.PicksAndBansSelections.PickOrBan.prototype.getPick = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.PicksAndBansSelections.PickOrBan} returns this
 */
proto.bragi.PicksAndBansSelections.PickOrBan.prototype.setPick = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional uint32 hero_steam_id = 3;
 * @return {number}
 */
proto.bragi.PicksAndBansSelections.PickOrBan.prototype.getHeroSteamId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.PicksAndBansSelections.PickOrBan} returns this
 */
proto.bragi.PicksAndBansSelections.PickOrBan.prototype.setHeroSteamId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string hero_key = 4;
 * @return {string}
 */
proto.bragi.PicksAndBansSelections.PickOrBan.prototype.getHeroKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.PicksAndBansSelections.PickOrBan} returns this
 */
proto.bragi.PicksAndBansSelections.PickOrBan.prototype.setHeroKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional CurrentHeroSelection current_hero_selection = 1;
 * @return {?proto.bragi.PicksAndBansSelections.CurrentHeroSelection}
 */
proto.bragi.PicksAndBansSelections.prototype.getCurrentHeroSelection = function() {
  return /** @type{?proto.bragi.PicksAndBansSelections.CurrentHeroSelection} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PicksAndBansSelections.CurrentHeroSelection, 1));
};


/**
 * @param {?proto.bragi.PicksAndBansSelections.CurrentHeroSelection|undefined} value
 * @return {!proto.bragi.PicksAndBansSelections} returns this
*/
proto.bragi.PicksAndBansSelections.prototype.setCurrentHeroSelection = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.PicksAndBansSelections} returns this
 */
proto.bragi.PicksAndBansSelections.prototype.clearCurrentHeroSelection = function() {
  return this.setCurrentHeroSelection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.PicksAndBansSelections.prototype.hasCurrentHeroSelection = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated PickOrBan picks_and_bans = 2;
 * @return {!Array<!proto.bragi.PicksAndBansSelections.PickOrBan>}
 */
proto.bragi.PicksAndBansSelections.prototype.getPicksAndBansList = function() {
  return /** @type{!Array<!proto.bragi.PicksAndBansSelections.PickOrBan>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.PicksAndBansSelections.PickOrBan, 2));
};


/**
 * @param {!Array<!proto.bragi.PicksAndBansSelections.PickOrBan>} value
 * @return {!proto.bragi.PicksAndBansSelections} returns this
*/
proto.bragi.PicksAndBansSelections.prototype.setPicksAndBansList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bragi.PicksAndBansSelections.PickOrBan=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.PicksAndBansSelections.PickOrBan}
 */
proto.bragi.PicksAndBansSelections.prototype.addPicksAndBans = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bragi.PicksAndBansSelections.PickOrBan, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.PicksAndBansSelections} returns this
 */
proto.bragi.PicksAndBansSelections.prototype.clearPicksAndBansList = function() {
  return this.setPicksAndBansList([]);
};


/**
 * optional State state = 3;
 * @return {!proto.bragi.PicksAndBansSelections.State}
 */
proto.bragi.PicksAndBansSelections.prototype.getState = function() {
  return /** @type {!proto.bragi.PicksAndBansSelections.State} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.bragi.PicksAndBansSelections.State} value
 * @return {!proto.bragi.PicksAndBansSelections} returns this
 */
proto.bragi.PicksAndBansSelections.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
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
proto.bragi.Dota2MatchUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2MatchUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2MatchUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2MatchUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
payload: (f = msg.getPayload()) && proto.bragi.Dota2MatchUpdate.Payload.toObject(includeInstance, f)
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
 * @return {!proto.bragi.Dota2MatchUpdate}
 */
proto.bragi.Dota2MatchUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2MatchUpdate;
  return proto.bragi.Dota2MatchUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2MatchUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2MatchUpdate}
 */
proto.bragi.Dota2MatchUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Dota2MatchUpdate.Payload;
      reader.readMessage(value,proto.bragi.Dota2MatchUpdate.Payload.deserializeBinaryFromReader);
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
proto.bragi.Dota2MatchUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2MatchUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2MatchUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2MatchUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.Dota2MatchUpdate.Payload.serializeBinaryToWriter
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
proto.bragi.Dota2MatchUpdate.Payload.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.bragi.Dota2MatchUpdate.Payload.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  MATCH_STATE: 1,
  PARTIAL_UPDATES: 2
};

/**
 * @return {proto.bragi.Dota2MatchUpdate.Payload.PayloadCase}
 */
proto.bragi.Dota2MatchUpdate.Payload.prototype.getPayloadCase = function() {
  return /** @type {proto.bragi.Dota2MatchUpdate.Payload.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.bragi.Dota2MatchUpdate.Payload.oneofGroups_[0]));
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
proto.bragi.Dota2MatchUpdate.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2MatchUpdate.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2MatchUpdate.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2MatchUpdate.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
matchState: (f = msg.getMatchState()) && proto.bragi.Dota2MatchState.toObject(includeInstance, f),
partialUpdates: (f = msg.getPartialUpdates()) && proto.bragi.Dota2MatchStatePartialUpdates.toObject(includeInstance, f)
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
 * @return {!proto.bragi.Dota2MatchUpdate.Payload}
 */
proto.bragi.Dota2MatchUpdate.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2MatchUpdate.Payload;
  return proto.bragi.Dota2MatchUpdate.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2MatchUpdate.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2MatchUpdate.Payload}
 */
proto.bragi.Dota2MatchUpdate.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Dota2MatchState;
      reader.readMessage(value,proto.bragi.Dota2MatchState.deserializeBinaryFromReader);
      msg.setMatchState(value);
      break;
    case 2:
      var value = new proto.bragi.Dota2MatchStatePartialUpdates;
      reader.readMessage(value,proto.bragi.Dota2MatchStatePartialUpdates.deserializeBinaryFromReader);
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
proto.bragi.Dota2MatchUpdate.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2MatchUpdate.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2MatchUpdate.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2MatchUpdate.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatchState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.Dota2MatchState.serializeBinaryToWriter
    );
  }
  f = message.getPartialUpdates();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.Dota2MatchStatePartialUpdates.serializeBinaryToWriter
    );
  }
};


/**
 * optional Dota2MatchState match_state = 1;
 * @return {?proto.bragi.Dota2MatchState}
 */
proto.bragi.Dota2MatchUpdate.Payload.prototype.getMatchState = function() {
  return /** @type{?proto.bragi.Dota2MatchState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2MatchState, 1));
};


/**
 * @param {?proto.bragi.Dota2MatchState|undefined} value
 * @return {!proto.bragi.Dota2MatchUpdate.Payload} returns this
*/
proto.bragi.Dota2MatchUpdate.Payload.prototype.setMatchState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.Dota2MatchUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2MatchUpdate.Payload} returns this
 */
proto.bragi.Dota2MatchUpdate.Payload.prototype.clearMatchState = function() {
  return this.setMatchState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2MatchUpdate.Payload.prototype.hasMatchState = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Dota2MatchStatePartialUpdates partial_updates = 2;
 * @return {?proto.bragi.Dota2MatchStatePartialUpdates}
 */
proto.bragi.Dota2MatchUpdate.Payload.prototype.getPartialUpdates = function() {
  return /** @type{?proto.bragi.Dota2MatchStatePartialUpdates} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2MatchStatePartialUpdates, 2));
};


/**
 * @param {?proto.bragi.Dota2MatchStatePartialUpdates|undefined} value
 * @return {!proto.bragi.Dota2MatchUpdate.Payload} returns this
*/
proto.bragi.Dota2MatchUpdate.Payload.prototype.setPartialUpdates = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bragi.Dota2MatchUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2MatchUpdate.Payload} returns this
 */
proto.bragi.Dota2MatchUpdate.Payload.prototype.clearPartialUpdates = function() {
  return this.setPartialUpdates(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2MatchUpdate.Payload.prototype.hasPartialUpdates = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Payload payload = 1;
 * @return {?proto.bragi.Dota2MatchUpdate.Payload}
 */
proto.bragi.Dota2MatchUpdate.prototype.getPayload = function() {
  return /** @type{?proto.bragi.Dota2MatchUpdate.Payload} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2MatchUpdate.Payload, 1));
};


/**
 * @param {?proto.bragi.Dota2MatchUpdate.Payload|undefined} value
 * @return {!proto.bragi.Dota2MatchUpdate} returns this
*/
proto.bragi.Dota2MatchUpdate.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2MatchUpdate} returns this
 */
proto.bragi.Dota2MatchUpdate.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2MatchUpdate.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.Dota2MatchStatePartialUpdates.repeatedFields_ = [1];



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
proto.bragi.Dota2MatchStatePartialUpdates.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2MatchStatePartialUpdates.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2MatchStatePartialUpdates} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2MatchStatePartialUpdates.toObject = function(includeInstance, msg) {
  var f, obj = {
updatesList: jspb.Message.toObjectList(msg.getUpdatesList(),
    proto.bragi.Dota2MatchStatePartialUpdate.toObject, includeInstance)
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
 * @return {!proto.bragi.Dota2MatchStatePartialUpdates}
 */
proto.bragi.Dota2MatchStatePartialUpdates.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2MatchStatePartialUpdates;
  return proto.bragi.Dota2MatchStatePartialUpdates.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2MatchStatePartialUpdates} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2MatchStatePartialUpdates}
 */
proto.bragi.Dota2MatchStatePartialUpdates.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Dota2MatchStatePartialUpdate;
      reader.readMessage(value,proto.bragi.Dota2MatchStatePartialUpdate.deserializeBinaryFromReader);
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
proto.bragi.Dota2MatchStatePartialUpdates.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2MatchStatePartialUpdates.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2MatchStatePartialUpdates} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2MatchStatePartialUpdates.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUpdatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bragi.Dota2MatchStatePartialUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Dota2MatchStatePartialUpdate updates = 1;
 * @return {!Array<!proto.bragi.Dota2MatchStatePartialUpdate>}
 */
proto.bragi.Dota2MatchStatePartialUpdates.prototype.getUpdatesList = function() {
  return /** @type{!Array<!proto.bragi.Dota2MatchStatePartialUpdate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.Dota2MatchStatePartialUpdate, 1));
};


/**
 * @param {!Array<!proto.bragi.Dota2MatchStatePartialUpdate>} value
 * @return {!proto.bragi.Dota2MatchStatePartialUpdates} returns this
*/
proto.bragi.Dota2MatchStatePartialUpdates.prototype.setUpdatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bragi.Dota2MatchStatePartialUpdate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.Dota2MatchStatePartialUpdate}
 */
proto.bragi.Dota2MatchStatePartialUpdates.prototype.addUpdates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bragi.Dota2MatchStatePartialUpdate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.Dota2MatchStatePartialUpdates} returns this
 */
proto.bragi.Dota2MatchStatePartialUpdates.prototype.clearUpdatesList = function() {
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
proto.bragi.Dota2MatchStatePartialUpdate.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.bragi.Dota2MatchStatePartialUpdate.UpdateCase = {
  UPDATE_NOT_SET: 0,
  SCORE: 1,
  CURRENT_MAP_STATE: 2,
  CURRENT_MAP_STATE_PARTIAL_UPDATE: 3,
  PICKS_AND_BANS_SELECTIONS: 4,
  PICKS_AND_BANS_SELECTIONS_PER_TEAM: 5
};

/**
 * @return {proto.bragi.Dota2MatchStatePartialUpdate.UpdateCase}
 */
proto.bragi.Dota2MatchStatePartialUpdate.prototype.getUpdateCase = function() {
  return /** @type {proto.bragi.Dota2MatchStatePartialUpdate.UpdateCase} */(jspb.Message.computeOneofCase(this, proto.bragi.Dota2MatchStatePartialUpdate.oneofGroups_[0]));
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
proto.bragi.Dota2MatchStatePartialUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2MatchStatePartialUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2MatchStatePartialUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2MatchStatePartialUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
score: (f = msg.getScore()) && proto.bragi.Dota2MatchScoreState.toObject(includeInstance, f),
currentMapState: (f = msg.getCurrentMapState()) && proto.bragi.Dota2CurrentMapState.toObject(includeInstance, f),
currentMapStatePartialUpdate: (f = msg.getCurrentMapStatePartialUpdate()) && proto.bragi.Dota2CurrentMapStatePartialUpdate.toObject(includeInstance, f),
picksAndBansSelections: (f = msg.getPicksAndBansSelections()) && proto.bragi.PicksAndBansSelections.toObject(includeInstance, f),
picksAndBansSelectionsPerTeam: (f = msg.getPicksAndBansSelectionsPerTeam()) && proto.bragi.PicksAndBansSelectionsPerTeam.toObject(includeInstance, f)
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
 * @return {!proto.bragi.Dota2MatchStatePartialUpdate}
 */
proto.bragi.Dota2MatchStatePartialUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2MatchStatePartialUpdate;
  return proto.bragi.Dota2MatchStatePartialUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2MatchStatePartialUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2MatchStatePartialUpdate}
 */
proto.bragi.Dota2MatchStatePartialUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Dota2MatchScoreState;
      reader.readMessage(value,proto.bragi.Dota2MatchScoreState.deserializeBinaryFromReader);
      msg.setScore(value);
      break;
    case 2:
      var value = new proto.bragi.Dota2CurrentMapState;
      reader.readMessage(value,proto.bragi.Dota2CurrentMapState.deserializeBinaryFromReader);
      msg.setCurrentMapState(value);
      break;
    case 3:
      var value = new proto.bragi.Dota2CurrentMapStatePartialUpdate;
      reader.readMessage(value,proto.bragi.Dota2CurrentMapStatePartialUpdate.deserializeBinaryFromReader);
      msg.setCurrentMapStatePartialUpdate(value);
      break;
    case 4:
      var value = new proto.bragi.PicksAndBansSelections;
      reader.readMessage(value,proto.bragi.PicksAndBansSelections.deserializeBinaryFromReader);
      msg.setPicksAndBansSelections(value);
      break;
    case 5:
      var value = new proto.bragi.PicksAndBansSelectionsPerTeam;
      reader.readMessage(value,proto.bragi.PicksAndBansSelectionsPerTeam.deserializeBinaryFromReader);
      msg.setPicksAndBansSelectionsPerTeam(value);
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
proto.bragi.Dota2MatchStatePartialUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2MatchStatePartialUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2MatchStatePartialUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2MatchStatePartialUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScore();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.Dota2MatchScoreState.serializeBinaryToWriter
    );
  }
  f = message.getCurrentMapState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.Dota2CurrentMapState.serializeBinaryToWriter
    );
  }
  f = message.getCurrentMapStatePartialUpdate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.Dota2CurrentMapStatePartialUpdate.serializeBinaryToWriter
    );
  }
  f = message.getPicksAndBansSelections();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.PicksAndBansSelections.serializeBinaryToWriter
    );
  }
  f = message.getPicksAndBansSelectionsPerTeam();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bragi.PicksAndBansSelectionsPerTeam.serializeBinaryToWriter
    );
  }
};


/**
 * optional Dota2MatchScoreState score = 1;
 * @return {?proto.bragi.Dota2MatchScoreState}
 */
proto.bragi.Dota2MatchStatePartialUpdate.prototype.getScore = function() {
  return /** @type{?proto.bragi.Dota2MatchScoreState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2MatchScoreState, 1));
};


/**
 * @param {?proto.bragi.Dota2MatchScoreState|undefined} value
 * @return {!proto.bragi.Dota2MatchStatePartialUpdate} returns this
*/
proto.bragi.Dota2MatchStatePartialUpdate.prototype.setScore = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.Dota2MatchStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2MatchStatePartialUpdate} returns this
 */
proto.bragi.Dota2MatchStatePartialUpdate.prototype.clearScore = function() {
  return this.setScore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2MatchStatePartialUpdate.prototype.hasScore = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Dota2CurrentMapState current_map_state = 2;
 * @return {?proto.bragi.Dota2CurrentMapState}
 */
proto.bragi.Dota2MatchStatePartialUpdate.prototype.getCurrentMapState = function() {
  return /** @type{?proto.bragi.Dota2CurrentMapState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2CurrentMapState, 2));
};


/**
 * @param {?proto.bragi.Dota2CurrentMapState|undefined} value
 * @return {!proto.bragi.Dota2MatchStatePartialUpdate} returns this
*/
proto.bragi.Dota2MatchStatePartialUpdate.prototype.setCurrentMapState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bragi.Dota2MatchStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2MatchStatePartialUpdate} returns this
 */
proto.bragi.Dota2MatchStatePartialUpdate.prototype.clearCurrentMapState = function() {
  return this.setCurrentMapState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2MatchStatePartialUpdate.prototype.hasCurrentMapState = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Dota2CurrentMapStatePartialUpdate current_map_state_partial_update = 3;
 * @return {?proto.bragi.Dota2CurrentMapStatePartialUpdate}
 */
proto.bragi.Dota2MatchStatePartialUpdate.prototype.getCurrentMapStatePartialUpdate = function() {
  return /** @type{?proto.bragi.Dota2CurrentMapStatePartialUpdate} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2CurrentMapStatePartialUpdate, 3));
};


/**
 * @param {?proto.bragi.Dota2CurrentMapStatePartialUpdate|undefined} value
 * @return {!proto.bragi.Dota2MatchStatePartialUpdate} returns this
*/
proto.bragi.Dota2MatchStatePartialUpdate.prototype.setCurrentMapStatePartialUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.bragi.Dota2MatchStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2MatchStatePartialUpdate} returns this
 */
proto.bragi.Dota2MatchStatePartialUpdate.prototype.clearCurrentMapStatePartialUpdate = function() {
  return this.setCurrentMapStatePartialUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2MatchStatePartialUpdate.prototype.hasCurrentMapStatePartialUpdate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PicksAndBansSelections picks_and_bans_selections = 4;
 * @return {?proto.bragi.PicksAndBansSelections}
 */
proto.bragi.Dota2MatchStatePartialUpdate.prototype.getPicksAndBansSelections = function() {
  return /** @type{?proto.bragi.PicksAndBansSelections} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PicksAndBansSelections, 4));
};


/**
 * @param {?proto.bragi.PicksAndBansSelections|undefined} value
 * @return {!proto.bragi.Dota2MatchStatePartialUpdate} returns this
*/
proto.bragi.Dota2MatchStatePartialUpdate.prototype.setPicksAndBansSelections = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.bragi.Dota2MatchStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2MatchStatePartialUpdate} returns this
 */
proto.bragi.Dota2MatchStatePartialUpdate.prototype.clearPicksAndBansSelections = function() {
  return this.setPicksAndBansSelections(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2MatchStatePartialUpdate.prototype.hasPicksAndBansSelections = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional PicksAndBansSelectionsPerTeam picks_and_bans_selections_per_team = 5;
 * @return {?proto.bragi.PicksAndBansSelectionsPerTeam}
 */
proto.bragi.Dota2MatchStatePartialUpdate.prototype.getPicksAndBansSelectionsPerTeam = function() {
  return /** @type{?proto.bragi.PicksAndBansSelectionsPerTeam} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PicksAndBansSelectionsPerTeam, 5));
};


/**
 * @param {?proto.bragi.PicksAndBansSelectionsPerTeam|undefined} value
 * @return {!proto.bragi.Dota2MatchStatePartialUpdate} returns this
*/
proto.bragi.Dota2MatchStatePartialUpdate.prototype.setPicksAndBansSelectionsPerTeam = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.bragi.Dota2MatchStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2MatchStatePartialUpdate} returns this
 */
proto.bragi.Dota2MatchStatePartialUpdate.prototype.clearPicksAndBansSelectionsPerTeam = function() {
  return this.setPicksAndBansSelectionsPerTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2MatchStatePartialUpdate.prototype.hasPicksAndBansSelectionsPerTeam = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.Dota2MatchState.repeatedFields_ = [8];



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
proto.bragi.Dota2MatchState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2MatchState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2MatchState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2MatchState.toObject = function(includeInstance, msg) {
  var f, obj = {
matchUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
matchType: jspb.Message.getFieldWithDefault(msg, 2, 0),
homeTeam: (f = msg.getHomeTeam()) && bragi_common_pb.Team.toObject(includeInstance, f),
awayTeam: (f = msg.getAwayTeam()) && bragi_common_pb.Team.toObject(includeInstance, f),
score: (f = msg.getScore()) && proto.bragi.Dota2MatchScoreState.toObject(includeInstance, f),
matchStatus: jspb.Message.getFieldWithDefault(msg, 6, 0),
currentMap: (f = msg.getCurrentMap()) && proto.bragi.Dota2CurrentMapState.toObject(includeInstance, f),
previousMapsList: jspb.Message.toObjectList(msg.getPreviousMapsList(),
    proto.bragi.Dota2PreviousMapState.toObject, includeInstance),
picksAndBansSelections: (f = msg.getPicksAndBansSelections()) && proto.bragi.PicksAndBansSelections.toObject(includeInstance, f),
picksAndBansSelectionsPerTeam: (f = msg.getPicksAndBansSelectionsPerTeam()) && proto.bragi.PicksAndBansSelectionsPerTeam.toObject(includeInstance, f)
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
 * @return {!proto.bragi.Dota2MatchState}
 */
proto.bragi.Dota2MatchState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2MatchState;
  return proto.bragi.Dota2MatchState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2MatchState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2MatchState}
 */
proto.bragi.Dota2MatchState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.Dota2MatchScoreState;
      reader.readMessage(value,proto.bragi.Dota2MatchScoreState.deserializeBinaryFromReader);
      msg.setScore(value);
      break;
    case 6:
      var value = /** @type {!proto.bragi.MatchStatusType} */ (reader.readEnum());
      msg.setMatchStatus(value);
      break;
    case 7:
      var value = new proto.bragi.Dota2CurrentMapState;
      reader.readMessage(value,proto.bragi.Dota2CurrentMapState.deserializeBinaryFromReader);
      msg.setCurrentMap(value);
      break;
    case 8:
      var value = new proto.bragi.Dota2PreviousMapState;
      reader.readMessage(value,proto.bragi.Dota2PreviousMapState.deserializeBinaryFromReader);
      msg.addPreviousMaps(value);
      break;
    case 9:
      var value = new proto.bragi.PicksAndBansSelections;
      reader.readMessage(value,proto.bragi.PicksAndBansSelections.deserializeBinaryFromReader);
      msg.setPicksAndBansSelections(value);
      break;
    case 10:
      var value = new proto.bragi.PicksAndBansSelectionsPerTeam;
      reader.readMessage(value,proto.bragi.PicksAndBansSelectionsPerTeam.deserializeBinaryFromReader);
      msg.setPicksAndBansSelectionsPerTeam(value);
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
proto.bragi.Dota2MatchState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2MatchState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2MatchState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2MatchState.serializeBinaryToWriter = function(message, writer) {
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
      proto.bragi.Dota2MatchScoreState.serializeBinaryToWriter
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
      proto.bragi.Dota2CurrentMapState.serializeBinaryToWriter
    );
  }
  f = message.getPreviousMapsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.bragi.Dota2PreviousMapState.serializeBinaryToWriter
    );
  }
  f = message.getPicksAndBansSelections();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.bragi.PicksAndBansSelections.serializeBinaryToWriter
    );
  }
  f = message.getPicksAndBansSelectionsPerTeam();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.bragi.PicksAndBansSelectionsPerTeam.serializeBinaryToWriter
    );
  }
};


/**
 * optional string match_urn = 1;
 * @return {string}
 */
proto.bragi.Dota2MatchState.prototype.getMatchUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.Dota2MatchState} returns this
 */
proto.bragi.Dota2MatchState.prototype.setMatchUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional BestOfType match_type = 2;
 * @return {!proto.bragi.BestOfType}
 */
proto.bragi.Dota2MatchState.prototype.getMatchType = function() {
  return /** @type {!proto.bragi.BestOfType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bragi.BestOfType} value
 * @return {!proto.bragi.Dota2MatchState} returns this
 */
proto.bragi.Dota2MatchState.prototype.setMatchType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional Team home_team = 3;
 * @return {?proto.bragi.Team}
 */
proto.bragi.Dota2MatchState.prototype.getHomeTeam = function() {
  return /** @type{?proto.bragi.Team} */ (
    jspb.Message.getWrapperField(this, bragi_common_pb.Team, 3));
};


/**
 * @param {?proto.bragi.Team|undefined} value
 * @return {!proto.bragi.Dota2MatchState} returns this
*/
proto.bragi.Dota2MatchState.prototype.setHomeTeam = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2MatchState} returns this
 */
proto.bragi.Dota2MatchState.prototype.clearHomeTeam = function() {
  return this.setHomeTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2MatchState.prototype.hasHomeTeam = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Team away_team = 4;
 * @return {?proto.bragi.Team}
 */
proto.bragi.Dota2MatchState.prototype.getAwayTeam = function() {
  return /** @type{?proto.bragi.Team} */ (
    jspb.Message.getWrapperField(this, bragi_common_pb.Team, 4));
};


/**
 * @param {?proto.bragi.Team|undefined} value
 * @return {!proto.bragi.Dota2MatchState} returns this
*/
proto.bragi.Dota2MatchState.prototype.setAwayTeam = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2MatchState} returns this
 */
proto.bragi.Dota2MatchState.prototype.clearAwayTeam = function() {
  return this.setAwayTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2MatchState.prototype.hasAwayTeam = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Dota2MatchScoreState score = 5;
 * @return {?proto.bragi.Dota2MatchScoreState}
 */
proto.bragi.Dota2MatchState.prototype.getScore = function() {
  return /** @type{?proto.bragi.Dota2MatchScoreState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2MatchScoreState, 5));
};


/**
 * @param {?proto.bragi.Dota2MatchScoreState|undefined} value
 * @return {!proto.bragi.Dota2MatchState} returns this
*/
proto.bragi.Dota2MatchState.prototype.setScore = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2MatchState} returns this
 */
proto.bragi.Dota2MatchState.prototype.clearScore = function() {
  return this.setScore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2MatchState.prototype.hasScore = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional MatchStatusType match_status = 6;
 * @return {!proto.bragi.MatchStatusType}
 */
proto.bragi.Dota2MatchState.prototype.getMatchStatus = function() {
  return /** @type {!proto.bragi.MatchStatusType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.bragi.MatchStatusType} value
 * @return {!proto.bragi.Dota2MatchState} returns this
 */
proto.bragi.Dota2MatchState.prototype.setMatchStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional Dota2CurrentMapState current_map = 7;
 * @return {?proto.bragi.Dota2CurrentMapState}
 */
proto.bragi.Dota2MatchState.prototype.getCurrentMap = function() {
  return /** @type{?proto.bragi.Dota2CurrentMapState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2CurrentMapState, 7));
};


/**
 * @param {?proto.bragi.Dota2CurrentMapState|undefined} value
 * @return {!proto.bragi.Dota2MatchState} returns this
*/
proto.bragi.Dota2MatchState.prototype.setCurrentMap = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2MatchState} returns this
 */
proto.bragi.Dota2MatchState.prototype.clearCurrentMap = function() {
  return this.setCurrentMap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2MatchState.prototype.hasCurrentMap = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated Dota2PreviousMapState previous_maps = 8;
 * @return {!Array<!proto.bragi.Dota2PreviousMapState>}
 */
proto.bragi.Dota2MatchState.prototype.getPreviousMapsList = function() {
  return /** @type{!Array<!proto.bragi.Dota2PreviousMapState>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.Dota2PreviousMapState, 8));
};


/**
 * @param {!Array<!proto.bragi.Dota2PreviousMapState>} value
 * @return {!proto.bragi.Dota2MatchState} returns this
*/
proto.bragi.Dota2MatchState.prototype.setPreviousMapsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.bragi.Dota2PreviousMapState=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.Dota2PreviousMapState}
 */
proto.bragi.Dota2MatchState.prototype.addPreviousMaps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.bragi.Dota2PreviousMapState, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.Dota2MatchState} returns this
 */
proto.bragi.Dota2MatchState.prototype.clearPreviousMapsList = function() {
  return this.setPreviousMapsList([]);
};


/**
 * optional PicksAndBansSelections picks_and_bans_selections = 9;
 * @return {?proto.bragi.PicksAndBansSelections}
 */
proto.bragi.Dota2MatchState.prototype.getPicksAndBansSelections = function() {
  return /** @type{?proto.bragi.PicksAndBansSelections} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PicksAndBansSelections, 9));
};


/**
 * @param {?proto.bragi.PicksAndBansSelections|undefined} value
 * @return {!proto.bragi.Dota2MatchState} returns this
*/
proto.bragi.Dota2MatchState.prototype.setPicksAndBansSelections = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2MatchState} returns this
 */
proto.bragi.Dota2MatchState.prototype.clearPicksAndBansSelections = function() {
  return this.setPicksAndBansSelections(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2MatchState.prototype.hasPicksAndBansSelections = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional PicksAndBansSelectionsPerTeam picks_and_bans_selections_per_team = 10;
 * @return {?proto.bragi.PicksAndBansSelectionsPerTeam}
 */
proto.bragi.Dota2MatchState.prototype.getPicksAndBansSelectionsPerTeam = function() {
  return /** @type{?proto.bragi.PicksAndBansSelectionsPerTeam} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PicksAndBansSelectionsPerTeam, 10));
};


/**
 * @param {?proto.bragi.PicksAndBansSelectionsPerTeam|undefined} value
 * @return {!proto.bragi.Dota2MatchState} returns this
*/
proto.bragi.Dota2MatchState.prototype.setPicksAndBansSelectionsPerTeam = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2MatchState} returns this
 */
proto.bragi.Dota2MatchState.prototype.clearPicksAndBansSelectionsPerTeam = function() {
  return this.setPicksAndBansSelectionsPerTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2MatchState.prototype.hasPicksAndBansSelectionsPerTeam = function() {
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
proto.bragi.Dota2MatchScoreState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2MatchScoreState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2MatchScoreState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2MatchScoreState.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bragi.Dota2MatchScoreState}
 */
proto.bragi.Dota2MatchScoreState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2MatchScoreState;
  return proto.bragi.Dota2MatchScoreState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2MatchScoreState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2MatchScoreState}
 */
proto.bragi.Dota2MatchScoreState.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bragi.Dota2MatchScoreState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2MatchScoreState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2MatchScoreState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2MatchScoreState.serializeBinaryToWriter = function(message, writer) {
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
proto.bragi.Dota2MatchScoreState.prototype.getHomeScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2MatchScoreState} returns this
 */
proto.bragi.Dota2MatchScoreState.prototype.setHomeScore = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 away_score = 2;
 * @return {number}
 */
proto.bragi.Dota2MatchScoreState.prototype.getAwayScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2MatchScoreState} returns this
 */
proto.bragi.Dota2MatchScoreState.prototype.setAwayScore = function(value) {
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
proto.bragi.Dota2CurrentMapStatePartialUpdate.oneofGroups_ = [[1,2,3,4,5,8]];

/**
 * @enum {number}
 */
proto.bragi.Dota2CurrentMapStatePartialUpdate.UpdateCase = {
  UPDATE_NOT_SET: 0,
  GAME_TIME: 1,
  TEAM_CURRENT_MAP_STATE: 2,
  TEAM_CURRENT_MAP_PARTIAL_UPDATE: 3,
  TOWERS: 4,
  BARRACKS: 5,
  ROSHAN: 8
};

/**
 * @return {proto.bragi.Dota2CurrentMapStatePartialUpdate.UpdateCase}
 */
proto.bragi.Dota2CurrentMapStatePartialUpdate.prototype.getUpdateCase = function() {
  return /** @type {proto.bragi.Dota2CurrentMapStatePartialUpdate.UpdateCase} */(jspb.Message.computeOneofCase(this, proto.bragi.Dota2CurrentMapStatePartialUpdate.oneofGroups_[0]));
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
proto.bragi.Dota2CurrentMapStatePartialUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2CurrentMapStatePartialUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2CurrentMapStatePartialUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2CurrentMapStatePartialUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
gameTime: (f = msg.getGameTime()) && proto.bragi.Dota2CurrentMapTimeState.toObject(includeInstance, f),
teamCurrentMapState: (f = msg.getTeamCurrentMapState()) && proto.bragi.Dota2TeamCurrentMapState.toObject(includeInstance, f),
teamCurrentMapPartialUpdate: (f = msg.getTeamCurrentMapPartialUpdate()) && proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.toObject(includeInstance, f),
towers: (f = msg.getTowers()) && proto.bragi.Dota2Towers.toObject(includeInstance, f),
barracks: (f = msg.getBarracks()) && proto.bragi.Dota2Barracks.toObject(includeInstance, f),
roshan: (f = msg.getRoshan()) && proto.bragi.Roshan.toObject(includeInstance, f)
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
 * @return {!proto.bragi.Dota2CurrentMapStatePartialUpdate}
 */
proto.bragi.Dota2CurrentMapStatePartialUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2CurrentMapStatePartialUpdate;
  return proto.bragi.Dota2CurrentMapStatePartialUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2CurrentMapStatePartialUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2CurrentMapStatePartialUpdate}
 */
proto.bragi.Dota2CurrentMapStatePartialUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Dota2CurrentMapTimeState;
      reader.readMessage(value,proto.bragi.Dota2CurrentMapTimeState.deserializeBinaryFromReader);
      msg.setGameTime(value);
      break;
    case 2:
      var value = new proto.bragi.Dota2TeamCurrentMapState;
      reader.readMessage(value,proto.bragi.Dota2TeamCurrentMapState.deserializeBinaryFromReader);
      msg.setTeamCurrentMapState(value);
      break;
    case 3:
      var value = new proto.bragi.Dota2TeamCurrentMapStatePartialUpdate;
      reader.readMessage(value,proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.deserializeBinaryFromReader);
      msg.setTeamCurrentMapPartialUpdate(value);
      break;
    case 4:
      var value = new proto.bragi.Dota2Towers;
      reader.readMessage(value,proto.bragi.Dota2Towers.deserializeBinaryFromReader);
      msg.setTowers(value);
      break;
    case 5:
      var value = new proto.bragi.Dota2Barracks;
      reader.readMessage(value,proto.bragi.Dota2Barracks.deserializeBinaryFromReader);
      msg.setBarracks(value);
      break;
    case 8:
      var value = new proto.bragi.Roshan;
      reader.readMessage(value,proto.bragi.Roshan.deserializeBinaryFromReader);
      msg.setRoshan(value);
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
proto.bragi.Dota2CurrentMapStatePartialUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2CurrentMapStatePartialUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2CurrentMapStatePartialUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2CurrentMapStatePartialUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGameTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.Dota2CurrentMapTimeState.serializeBinaryToWriter
    );
  }
  f = message.getTeamCurrentMapState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.Dota2TeamCurrentMapState.serializeBinaryToWriter
    );
  }
  f = message.getTeamCurrentMapPartialUpdate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.serializeBinaryToWriter
    );
  }
  f = message.getTowers();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.Dota2Towers.serializeBinaryToWriter
    );
  }
  f = message.getBarracks();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bragi.Dota2Barracks.serializeBinaryToWriter
    );
  }
  f = message.getRoshan();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.bragi.Roshan.serializeBinaryToWriter
    );
  }
};


/**
 * optional Dota2CurrentMapTimeState game_time = 1;
 * @return {?proto.bragi.Dota2CurrentMapTimeState}
 */
proto.bragi.Dota2CurrentMapStatePartialUpdate.prototype.getGameTime = function() {
  return /** @type{?proto.bragi.Dota2CurrentMapTimeState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2CurrentMapTimeState, 1));
};


/**
 * @param {?proto.bragi.Dota2CurrentMapTimeState|undefined} value
 * @return {!proto.bragi.Dota2CurrentMapStatePartialUpdate} returns this
*/
proto.bragi.Dota2CurrentMapStatePartialUpdate.prototype.setGameTime = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.Dota2CurrentMapStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2CurrentMapStatePartialUpdate} returns this
 */
proto.bragi.Dota2CurrentMapStatePartialUpdate.prototype.clearGameTime = function() {
  return this.setGameTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2CurrentMapStatePartialUpdate.prototype.hasGameTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Dota2TeamCurrentMapState team_current_map_state = 2;
 * @return {?proto.bragi.Dota2TeamCurrentMapState}
 */
proto.bragi.Dota2CurrentMapStatePartialUpdate.prototype.getTeamCurrentMapState = function() {
  return /** @type{?proto.bragi.Dota2TeamCurrentMapState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2TeamCurrentMapState, 2));
};


/**
 * @param {?proto.bragi.Dota2TeamCurrentMapState|undefined} value
 * @return {!proto.bragi.Dota2CurrentMapStatePartialUpdate} returns this
*/
proto.bragi.Dota2CurrentMapStatePartialUpdate.prototype.setTeamCurrentMapState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bragi.Dota2CurrentMapStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2CurrentMapStatePartialUpdate} returns this
 */
proto.bragi.Dota2CurrentMapStatePartialUpdate.prototype.clearTeamCurrentMapState = function() {
  return this.setTeamCurrentMapState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2CurrentMapStatePartialUpdate.prototype.hasTeamCurrentMapState = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Dota2TeamCurrentMapStatePartialUpdate team_current_map_partial_update = 3;
 * @return {?proto.bragi.Dota2TeamCurrentMapStatePartialUpdate}
 */
proto.bragi.Dota2CurrentMapStatePartialUpdate.prototype.getTeamCurrentMapPartialUpdate = function() {
  return /** @type{?proto.bragi.Dota2TeamCurrentMapStatePartialUpdate} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2TeamCurrentMapStatePartialUpdate, 3));
};


/**
 * @param {?proto.bragi.Dota2TeamCurrentMapStatePartialUpdate|undefined} value
 * @return {!proto.bragi.Dota2CurrentMapStatePartialUpdate} returns this
*/
proto.bragi.Dota2CurrentMapStatePartialUpdate.prototype.setTeamCurrentMapPartialUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.bragi.Dota2CurrentMapStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2CurrentMapStatePartialUpdate} returns this
 */
proto.bragi.Dota2CurrentMapStatePartialUpdate.prototype.clearTeamCurrentMapPartialUpdate = function() {
  return this.setTeamCurrentMapPartialUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2CurrentMapStatePartialUpdate.prototype.hasTeamCurrentMapPartialUpdate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Dota2Towers towers = 4;
 * @return {?proto.bragi.Dota2Towers}
 */
proto.bragi.Dota2CurrentMapStatePartialUpdate.prototype.getTowers = function() {
  return /** @type{?proto.bragi.Dota2Towers} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2Towers, 4));
};


/**
 * @param {?proto.bragi.Dota2Towers|undefined} value
 * @return {!proto.bragi.Dota2CurrentMapStatePartialUpdate} returns this
*/
proto.bragi.Dota2CurrentMapStatePartialUpdate.prototype.setTowers = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.bragi.Dota2CurrentMapStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2CurrentMapStatePartialUpdate} returns this
 */
proto.bragi.Dota2CurrentMapStatePartialUpdate.prototype.clearTowers = function() {
  return this.setTowers(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2CurrentMapStatePartialUpdate.prototype.hasTowers = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Dota2Barracks barracks = 5;
 * @return {?proto.bragi.Dota2Barracks}
 */
proto.bragi.Dota2CurrentMapStatePartialUpdate.prototype.getBarracks = function() {
  return /** @type{?proto.bragi.Dota2Barracks} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2Barracks, 5));
};


/**
 * @param {?proto.bragi.Dota2Barracks|undefined} value
 * @return {!proto.bragi.Dota2CurrentMapStatePartialUpdate} returns this
*/
proto.bragi.Dota2CurrentMapStatePartialUpdate.prototype.setBarracks = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.bragi.Dota2CurrentMapStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2CurrentMapStatePartialUpdate} returns this
 */
proto.bragi.Dota2CurrentMapStatePartialUpdate.prototype.clearBarracks = function() {
  return this.setBarracks(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2CurrentMapStatePartialUpdate.prototype.hasBarracks = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Roshan roshan = 8;
 * @return {?proto.bragi.Roshan}
 */
proto.bragi.Dota2CurrentMapStatePartialUpdate.prototype.getRoshan = function() {
  return /** @type{?proto.bragi.Roshan} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Roshan, 8));
};


/**
 * @param {?proto.bragi.Roshan|undefined} value
 * @return {!proto.bragi.Dota2CurrentMapStatePartialUpdate} returns this
*/
proto.bragi.Dota2CurrentMapStatePartialUpdate.prototype.setRoshan = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.bragi.Dota2CurrentMapStatePartialUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2CurrentMapStatePartialUpdate} returns this
 */
proto.bragi.Dota2CurrentMapStatePartialUpdate.prototype.clearRoshan = function() {
  return this.setRoshan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2CurrentMapStatePartialUpdate.prototype.hasRoshan = function() {
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
proto.bragi.Dota2CurrentMapState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2CurrentMapState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2CurrentMapState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2CurrentMapState.toObject = function(includeInstance, msg) {
  var f, obj = {
mapOrder: jspb.Message.getFieldWithDefault(msg, 1, 0),
mapPaused: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
gameTime: (f = msg.getGameTime()) && proto.bragi.Dota2CurrentMapTimeState.toObject(includeInstance, f),
teamsMap: (f = msg.getTeamsMap()) ? f.toObject(includeInstance, proto.bragi.Dota2TeamCurrentMapState.toObject) : [],
towers: (f = msg.getTowers()) && proto.bragi.Dota2Towers.toObject(includeInstance, f),
barracks: (f = msg.getBarracks()) && proto.bragi.Dota2Barracks.toObject(includeInstance, f),
roshan: (f = msg.getRoshan()) && proto.bragi.Roshan.toObject(includeInstance, f),
dayTime: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
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
 * @return {!proto.bragi.Dota2CurrentMapState}
 */
proto.bragi.Dota2CurrentMapState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2CurrentMapState;
  return proto.bragi.Dota2CurrentMapState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2CurrentMapState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2CurrentMapState}
 */
proto.bragi.Dota2CurrentMapState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.Dota2CurrentMapTimeState;
      reader.readMessage(value,proto.bragi.Dota2CurrentMapTimeState.deserializeBinaryFromReader);
      msg.setGameTime(value);
      break;
    case 4:
      var value = msg.getTeamsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bragi.Dota2TeamCurrentMapState.deserializeBinaryFromReader, "", new proto.bragi.Dota2TeamCurrentMapState());
         });
      break;
    case 5:
      var value = new proto.bragi.Dota2Towers;
      reader.readMessage(value,proto.bragi.Dota2Towers.deserializeBinaryFromReader);
      msg.setTowers(value);
      break;
    case 6:
      var value = new proto.bragi.Dota2Barracks;
      reader.readMessage(value,proto.bragi.Dota2Barracks.deserializeBinaryFromReader);
      msg.setBarracks(value);
      break;
    case 7:
      var value = new proto.bragi.Roshan;
      reader.readMessage(value,proto.bragi.Roshan.deserializeBinaryFromReader);
      msg.setRoshan(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDayTime(value);
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
proto.bragi.Dota2CurrentMapState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2CurrentMapState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2CurrentMapState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2CurrentMapState.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getGameTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.Dota2CurrentMapTimeState.serializeBinaryToWriter
    );
  }
  f = message.getTeamsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bragi.Dota2TeamCurrentMapState.serializeBinaryToWriter);
  }
  f = message.getTowers();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bragi.Dota2Towers.serializeBinaryToWriter
    );
  }
  f = message.getBarracks();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bragi.Dota2Barracks.serializeBinaryToWriter
    );
  }
  f = message.getRoshan();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bragi.Roshan.serializeBinaryToWriter
    );
  }
  f = message.getDayTime();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * optional uint32 map_order = 1;
 * @return {number}
 */
proto.bragi.Dota2CurrentMapState.prototype.getMapOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2CurrentMapState} returns this
 */
proto.bragi.Dota2CurrentMapState.prototype.setMapOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool map_paused = 2;
 * @return {boolean}
 */
proto.bragi.Dota2CurrentMapState.prototype.getMapPaused = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.Dota2CurrentMapState} returns this
 */
proto.bragi.Dota2CurrentMapState.prototype.setMapPaused = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional Dota2CurrentMapTimeState game_time = 3;
 * @return {?proto.bragi.Dota2CurrentMapTimeState}
 */
proto.bragi.Dota2CurrentMapState.prototype.getGameTime = function() {
  return /** @type{?proto.bragi.Dota2CurrentMapTimeState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2CurrentMapTimeState, 3));
};


/**
 * @param {?proto.bragi.Dota2CurrentMapTimeState|undefined} value
 * @return {!proto.bragi.Dota2CurrentMapState} returns this
*/
proto.bragi.Dota2CurrentMapState.prototype.setGameTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2CurrentMapState} returns this
 */
proto.bragi.Dota2CurrentMapState.prototype.clearGameTime = function() {
  return this.setGameTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2CurrentMapState.prototype.hasGameTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * map<string, Dota2TeamCurrentMapState> teams = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bragi.Dota2TeamCurrentMapState>}
 */
proto.bragi.Dota2CurrentMapState.prototype.getTeamsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bragi.Dota2TeamCurrentMapState>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.bragi.Dota2TeamCurrentMapState));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bragi.Dota2CurrentMapState} returns this
 */
proto.bragi.Dota2CurrentMapState.prototype.clearTeamsMap = function() {
  this.getTeamsMap().clear();
  return this;
};


/**
 * optional Dota2Towers towers = 5;
 * @return {?proto.bragi.Dota2Towers}
 */
proto.bragi.Dota2CurrentMapState.prototype.getTowers = function() {
  return /** @type{?proto.bragi.Dota2Towers} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2Towers, 5));
};


/**
 * @param {?proto.bragi.Dota2Towers|undefined} value
 * @return {!proto.bragi.Dota2CurrentMapState} returns this
*/
proto.bragi.Dota2CurrentMapState.prototype.setTowers = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2CurrentMapState} returns this
 */
proto.bragi.Dota2CurrentMapState.prototype.clearTowers = function() {
  return this.setTowers(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2CurrentMapState.prototype.hasTowers = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Dota2Barracks barracks = 6;
 * @return {?proto.bragi.Dota2Barracks}
 */
proto.bragi.Dota2CurrentMapState.prototype.getBarracks = function() {
  return /** @type{?proto.bragi.Dota2Barracks} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2Barracks, 6));
};


/**
 * @param {?proto.bragi.Dota2Barracks|undefined} value
 * @return {!proto.bragi.Dota2CurrentMapState} returns this
*/
proto.bragi.Dota2CurrentMapState.prototype.setBarracks = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2CurrentMapState} returns this
 */
proto.bragi.Dota2CurrentMapState.prototype.clearBarracks = function() {
  return this.setBarracks(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2CurrentMapState.prototype.hasBarracks = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Roshan roshan = 7;
 * @return {?proto.bragi.Roshan}
 */
proto.bragi.Dota2CurrentMapState.prototype.getRoshan = function() {
  return /** @type{?proto.bragi.Roshan} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Roshan, 7));
};


/**
 * @param {?proto.bragi.Roshan|undefined} value
 * @return {!proto.bragi.Dota2CurrentMapState} returns this
*/
proto.bragi.Dota2CurrentMapState.prototype.setRoshan = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2CurrentMapState} returns this
 */
proto.bragi.Dota2CurrentMapState.prototype.clearRoshan = function() {
  return this.setRoshan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2CurrentMapState.prototype.hasRoshan = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool day_time = 8;
 * @return {boolean}
 */
proto.bragi.Dota2CurrentMapState.prototype.getDayTime = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.Dota2CurrentMapState} returns this
 */
proto.bragi.Dota2CurrentMapState.prototype.setDayTime = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
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
proto.bragi.Dota2CurrentMapTimeState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2CurrentMapTimeState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2CurrentMapTimeState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2CurrentMapTimeState.toObject = function(includeInstance, msg) {
  var f, obj = {
gameTime: (f = msg.getGameTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.bragi.Dota2CurrentMapTimeState}
 */
proto.bragi.Dota2CurrentMapTimeState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2CurrentMapTimeState;
  return proto.bragi.Dota2CurrentMapTimeState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2CurrentMapTimeState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2CurrentMapTimeState}
 */
proto.bragi.Dota2CurrentMapTimeState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setGameTime(value);
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
proto.bragi.Dota2CurrentMapTimeState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2CurrentMapTimeState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2CurrentMapTimeState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2CurrentMapTimeState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGameTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Duration game_time = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.Dota2CurrentMapTimeState.prototype.getGameTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.Dota2CurrentMapTimeState} returns this
*/
proto.bragi.Dota2CurrentMapTimeState.prototype.setGameTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2CurrentMapTimeState} returns this
 */
proto.bragi.Dota2CurrentMapTimeState.prototype.clearGameTime = function() {
  return this.setGameTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2CurrentMapTimeState.prototype.hasGameTime = function() {
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
proto.bragi.Dota2PreviousMapState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2PreviousMapState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2PreviousMapState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2PreviousMapState.toObject = function(includeInstance, msg) {
  var f, obj = {
mapOrder: jspb.Message.getFieldWithDefault(msg, 1, 0),
teamsMap: (f = msg.getTeamsMap()) ? f.toObject(includeInstance, proto.bragi.Dota2TeamPreviousMapState.toObject) : []
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
 * @return {!proto.bragi.Dota2PreviousMapState}
 */
proto.bragi.Dota2PreviousMapState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2PreviousMapState;
  return proto.bragi.Dota2PreviousMapState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2PreviousMapState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2PreviousMapState}
 */
proto.bragi.Dota2PreviousMapState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = msg.getTeamsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bragi.Dota2TeamPreviousMapState.deserializeBinaryFromReader, "", new proto.bragi.Dota2TeamPreviousMapState());
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
proto.bragi.Dota2PreviousMapState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2PreviousMapState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2PreviousMapState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2PreviousMapState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapOrder();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getTeamsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bragi.Dota2TeamPreviousMapState.serializeBinaryToWriter);
  }
};


/**
 * optional uint32 map_order = 1;
 * @return {number}
 */
proto.bragi.Dota2PreviousMapState.prototype.getMapOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2PreviousMapState} returns this
 */
proto.bragi.Dota2PreviousMapState.prototype.setMapOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * map<string, Dota2TeamPreviousMapState> teams = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bragi.Dota2TeamPreviousMapState>}
 */
proto.bragi.Dota2PreviousMapState.prototype.getTeamsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bragi.Dota2TeamPreviousMapState>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.bragi.Dota2TeamPreviousMapState));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bragi.Dota2PreviousMapState} returns this
 */
proto.bragi.Dota2PreviousMapState.prototype.clearTeamsMap = function() {
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
proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2TeamCurrentMapStatePartialUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
teamUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
payload: (f = msg.getPayload()) && proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.toObject(includeInstance, f)
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
 * @return {!proto.bragi.Dota2TeamCurrentMapStatePartialUpdate}
 */
proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2TeamCurrentMapStatePartialUpdate;
  return proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2TeamCurrentMapStatePartialUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2TeamCurrentMapStatePartialUpdate}
 */
proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload;
      reader.readMessage(value,proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.deserializeBinaryFromReader);
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
proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2TeamCurrentMapStatePartialUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.serializeBinaryToWriter = function(message, writer) {
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
      proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.serializeBinaryToWriter
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
proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  STATISTICS: 1,
  PLAYER_CURRENT_MAP_STATE: 2,
  PLAYER_CURRENT_MAP_PARTIAL_UPDATE: 3
};

/**
 * @return {proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.PayloadCase}
 */
proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.prototype.getPayloadCase = function() {
  return /** @type {proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.oneofGroups_[0]));
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
proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
statistics: (f = msg.getStatistics()) && proto.bragi.Dota2TeamCurrentMapStatisticsState.toObject(includeInstance, f),
playerCurrentMapState: (f = msg.getPlayerCurrentMapState()) && proto.bragi.Dota2PlayerCurrentMapState.toObject(includeInstance, f),
playerCurrentMapPartialUpdate: (f = msg.getPlayerCurrentMapPartialUpdate()) && proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.toObject(includeInstance, f)
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
 * @return {!proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload}
 */
proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload;
  return proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload}
 */
proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Dota2TeamCurrentMapStatisticsState;
      reader.readMessage(value,proto.bragi.Dota2TeamCurrentMapStatisticsState.deserializeBinaryFromReader);
      msg.setStatistics(value);
      break;
    case 2:
      var value = new proto.bragi.Dota2PlayerCurrentMapState;
      reader.readMessage(value,proto.bragi.Dota2PlayerCurrentMapState.deserializeBinaryFromReader);
      msg.setPlayerCurrentMapState(value);
      break;
    case 3:
      var value = new proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate;
      reader.readMessage(value,proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.deserializeBinaryFromReader);
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
proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatistics();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.Dota2TeamCurrentMapStatisticsState.serializeBinaryToWriter
    );
  }
  f = message.getPlayerCurrentMapState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.Dota2PlayerCurrentMapState.serializeBinaryToWriter
    );
  }
  f = message.getPlayerCurrentMapPartialUpdate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * optional Dota2TeamCurrentMapStatisticsState statistics = 1;
 * @return {?proto.bragi.Dota2TeamCurrentMapStatisticsState}
 */
proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.prototype.getStatistics = function() {
  return /** @type{?proto.bragi.Dota2TeamCurrentMapStatisticsState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2TeamCurrentMapStatisticsState, 1));
};


/**
 * @param {?proto.bragi.Dota2TeamCurrentMapStatisticsState|undefined} value
 * @return {!proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload} returns this
*/
proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.prototype.setStatistics = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload} returns this
 */
proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.prototype.clearStatistics = function() {
  return this.setStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.prototype.hasStatistics = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Dota2PlayerCurrentMapState player_current_map_state = 2;
 * @return {?proto.bragi.Dota2PlayerCurrentMapState}
 */
proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.prototype.getPlayerCurrentMapState = function() {
  return /** @type{?proto.bragi.Dota2PlayerCurrentMapState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2PlayerCurrentMapState, 2));
};


/**
 * @param {?proto.bragi.Dota2PlayerCurrentMapState|undefined} value
 * @return {!proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload} returns this
*/
proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.prototype.setPlayerCurrentMapState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload} returns this
 */
proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.prototype.clearPlayerCurrentMapState = function() {
  return this.setPlayerCurrentMapState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.prototype.hasPlayerCurrentMapState = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Dota2PlayerCurrentMapStatePartialUpdate player_current_map_partial_update = 3;
 * @return {?proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate}
 */
proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.prototype.getPlayerCurrentMapPartialUpdate = function() {
  return /** @type{?proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate, 3));
};


/**
 * @param {?proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate|undefined} value
 * @return {!proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload} returns this
*/
proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.prototype.setPlayerCurrentMapPartialUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload} returns this
 */
proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.prototype.clearPlayerCurrentMapPartialUpdate = function() {
  return this.setPlayerCurrentMapPartialUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload.prototype.hasPlayerCurrentMapPartialUpdate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string team_urn = 1;
 * @return {string}
 */
proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.Dota2TeamCurrentMapStatePartialUpdate} returns this
 */
proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Payload payload = 2;
 * @return {?proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload}
 */
proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.prototype.getPayload = function() {
  return /** @type{?proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload, 2));
};


/**
 * @param {?proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.Payload|undefined} value
 * @return {!proto.bragi.Dota2TeamCurrentMapStatePartialUpdate} returns this
*/
proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2TeamCurrentMapStatePartialUpdate} returns this
 */
proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2TeamCurrentMapStatePartialUpdate.prototype.hasPayload = function() {
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
proto.bragi.Dota2TeamCurrentMapState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2TeamCurrentMapState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2TeamCurrentMapState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2TeamCurrentMapState.toObject = function(includeInstance, msg) {
  var f, obj = {
teamUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
faction: jspb.Message.getFieldWithDefault(msg, 2, 0),
statistics: (f = msg.getStatistics()) && proto.bragi.Dota2TeamCurrentMapStatisticsState.toObject(includeInstance, f),
won: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
playersMap: (f = msg.getPlayersMap()) ? f.toObject(includeInstance, proto.bragi.Dota2PlayerCurrentMapState.toObject) : []
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
 * @return {!proto.bragi.Dota2TeamCurrentMapState}
 */
proto.bragi.Dota2TeamCurrentMapState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2TeamCurrentMapState;
  return proto.bragi.Dota2TeamCurrentMapState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2TeamCurrentMapState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2TeamCurrentMapState}
 */
proto.bragi.Dota2TeamCurrentMapState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.bragi.Dota2Faction} */ (reader.readEnum());
      msg.setFaction(value);
      break;
    case 3:
      var value = new proto.bragi.Dota2TeamCurrentMapStatisticsState;
      reader.readMessage(value,proto.bragi.Dota2TeamCurrentMapStatisticsState.deserializeBinaryFromReader);
      msg.setStatistics(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWon(value);
      break;
    case 5:
      var value = msg.getPlayersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bragi.Dota2PlayerCurrentMapState.deserializeBinaryFromReader, "", new proto.bragi.Dota2PlayerCurrentMapState());
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
proto.bragi.Dota2TeamCurrentMapState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2TeamCurrentMapState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2TeamCurrentMapState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2TeamCurrentMapState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFaction();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getStatistics();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.Dota2TeamCurrentMapStatisticsState.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getPlayersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bragi.Dota2PlayerCurrentMapState.serializeBinaryToWriter);
  }
};


/**
 * optional string team_urn = 1;
 * @return {string}
 */
proto.bragi.Dota2TeamCurrentMapState.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.Dota2TeamCurrentMapState} returns this
 */
proto.bragi.Dota2TeamCurrentMapState.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Dota2Faction faction = 2;
 * @return {!proto.bragi.Dota2Faction}
 */
proto.bragi.Dota2TeamCurrentMapState.prototype.getFaction = function() {
  return /** @type {!proto.bragi.Dota2Faction} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bragi.Dota2Faction} value
 * @return {!proto.bragi.Dota2TeamCurrentMapState} returns this
 */
proto.bragi.Dota2TeamCurrentMapState.prototype.setFaction = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional Dota2TeamCurrentMapStatisticsState statistics = 3;
 * @return {?proto.bragi.Dota2TeamCurrentMapStatisticsState}
 */
proto.bragi.Dota2TeamCurrentMapState.prototype.getStatistics = function() {
  return /** @type{?proto.bragi.Dota2TeamCurrentMapStatisticsState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2TeamCurrentMapStatisticsState, 3));
};


/**
 * @param {?proto.bragi.Dota2TeamCurrentMapStatisticsState|undefined} value
 * @return {!proto.bragi.Dota2TeamCurrentMapState} returns this
*/
proto.bragi.Dota2TeamCurrentMapState.prototype.setStatistics = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2TeamCurrentMapState} returns this
 */
proto.bragi.Dota2TeamCurrentMapState.prototype.clearStatistics = function() {
  return this.setStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2TeamCurrentMapState.prototype.hasStatistics = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool won = 4;
 * @return {boolean}
 */
proto.bragi.Dota2TeamCurrentMapState.prototype.getWon = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.Dota2TeamCurrentMapState} returns this
 */
proto.bragi.Dota2TeamCurrentMapState.prototype.setWon = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.Dota2TeamCurrentMapState} returns this
 */
proto.bragi.Dota2TeamCurrentMapState.prototype.clearWon = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2TeamCurrentMapState.prototype.hasWon = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * map<string, Dota2PlayerCurrentMapState> players = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bragi.Dota2PlayerCurrentMapState>}
 */
proto.bragi.Dota2TeamCurrentMapState.prototype.getPlayersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bragi.Dota2PlayerCurrentMapState>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      proto.bragi.Dota2PlayerCurrentMapState));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bragi.Dota2TeamCurrentMapState} returns this
 */
proto.bragi.Dota2TeamCurrentMapState.prototype.clearPlayersMap = function() {
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
proto.bragi.Dota2TeamCurrentMapStatisticsState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2TeamCurrentMapStatisticsState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2TeamCurrentMapStatisticsState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2TeamCurrentMapStatisticsState.toObject = function(includeInstance, msg) {
  var f, obj = {
teamUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
barracks: jspb.Message.getFieldWithDefault(msg, 2, 0),
kills: jspb.Message.getFieldWithDefault(msg, 3, 0),
netWorth: jspb.Message.getFieldWithDefault(msg, 4, 0),
roshans: jspb.Message.getFieldWithDefault(msg, 5, 0),
towers: jspb.Message.getFieldWithDefault(msg, 6, 0),
hasRoshans: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
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
 * @return {!proto.bragi.Dota2TeamCurrentMapStatisticsState}
 */
proto.bragi.Dota2TeamCurrentMapStatisticsState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2TeamCurrentMapStatisticsState;
  return proto.bragi.Dota2TeamCurrentMapStatisticsState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2TeamCurrentMapStatisticsState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2TeamCurrentMapStatisticsState}
 */
proto.bragi.Dota2TeamCurrentMapStatisticsState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBarracks(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setKills(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNetWorth(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRoshans(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTowers(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasRoshans(value);
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
proto.bragi.Dota2TeamCurrentMapStatisticsState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2TeamCurrentMapStatisticsState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2TeamCurrentMapStatisticsState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2TeamCurrentMapStatisticsState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBarracks();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getKills();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getNetWorth();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getRoshans();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getTowers();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getHasRoshans();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional string team_urn = 1;
 * @return {string}
 */
proto.bragi.Dota2TeamCurrentMapStatisticsState.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.Dota2TeamCurrentMapStatisticsState} returns this
 */
proto.bragi.Dota2TeamCurrentMapStatisticsState.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 barracks = 2;
 * @return {number}
 */
proto.bragi.Dota2TeamCurrentMapStatisticsState.prototype.getBarracks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2TeamCurrentMapStatisticsState} returns this
 */
proto.bragi.Dota2TeamCurrentMapStatisticsState.prototype.setBarracks = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 kills = 3;
 * @return {number}
 */
proto.bragi.Dota2TeamCurrentMapStatisticsState.prototype.getKills = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2TeamCurrentMapStatisticsState} returns this
 */
proto.bragi.Dota2TeamCurrentMapStatisticsState.prototype.setKills = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 net_worth = 4;
 * @return {number}
 */
proto.bragi.Dota2TeamCurrentMapStatisticsState.prototype.getNetWorth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2TeamCurrentMapStatisticsState} returns this
 */
proto.bragi.Dota2TeamCurrentMapStatisticsState.prototype.setNetWorth = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 roshans = 5;
 * @return {number}
 */
proto.bragi.Dota2TeamCurrentMapStatisticsState.prototype.getRoshans = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2TeamCurrentMapStatisticsState} returns this
 */
proto.bragi.Dota2TeamCurrentMapStatisticsState.prototype.setRoshans = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 towers = 6;
 * @return {number}
 */
proto.bragi.Dota2TeamCurrentMapStatisticsState.prototype.getTowers = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2TeamCurrentMapStatisticsState} returns this
 */
proto.bragi.Dota2TeamCurrentMapStatisticsState.prototype.setTowers = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional bool has_roshans = 7;
 * @return {boolean}
 */
proto.bragi.Dota2TeamCurrentMapStatisticsState.prototype.getHasRoshans = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.Dota2TeamCurrentMapStatisticsState} returns this
 */
proto.bragi.Dota2TeamCurrentMapStatisticsState.prototype.setHasRoshans = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
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
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
payload: (f = msg.getPayload()) && proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.toObject(includeInstance, f)
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
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate}
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate;
  return proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate}
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload;
      reader.readMessage(value,proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.deserializeBinaryFromReader);
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
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.serializeBinaryToWriter = function(message, writer) {
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
      proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.serializeBinaryToWriter
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
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.oneofGroups_ = [[1,2,3,4,5,6,7]];

/**
 * @enum {number}
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  PLAYER_INFO: 1,
  TIMERS: 2,
  STATISTICS: 3,
  MAP_STATISTICS: 4,
  POSITION: 5,
  ITEMS: 6,
  ABILITIES: 7
};

/**
 * @return {proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.PayloadCase}
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.prototype.getPayloadCase = function() {
  return /** @type {proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.oneofGroups_[0]));
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
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
playerInfo: (f = msg.getPlayerInfo()) && proto.bragi.Dota2PlayerInfoState.toObject(includeInstance, f),
timers: (f = msg.getTimers()) && proto.bragi.Dota2PlayerCurrentMapTimersState.toObject(includeInstance, f),
statistics: (f = msg.getStatistics()) && proto.bragi.Dota2PlayerStatisticsState.toObject(includeInstance, f),
mapStatistics: (f = msg.getMapStatistics()) && proto.bragi.Dota2PlayerCurrentMapStatisticsState.toObject(includeInstance, f),
position: (f = msg.getPosition()) && proto.bragi.Dota2Position.toObject(includeInstance, f),
items: (f = msg.getItems()) && proto.bragi.Dota2Items.toObject(includeInstance, f),
abilities: (f = msg.getAbilities()) && proto.bragi.Dota2Abilities.toObject(includeInstance, f)
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
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload}
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload;
  return proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload}
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Dota2PlayerInfoState;
      reader.readMessage(value,proto.bragi.Dota2PlayerInfoState.deserializeBinaryFromReader);
      msg.setPlayerInfo(value);
      break;
    case 2:
      var value = new proto.bragi.Dota2PlayerCurrentMapTimersState;
      reader.readMessage(value,proto.bragi.Dota2PlayerCurrentMapTimersState.deserializeBinaryFromReader);
      msg.setTimers(value);
      break;
    case 3:
      var value = new proto.bragi.Dota2PlayerStatisticsState;
      reader.readMessage(value,proto.bragi.Dota2PlayerStatisticsState.deserializeBinaryFromReader);
      msg.setStatistics(value);
      break;
    case 4:
      var value = new proto.bragi.Dota2PlayerCurrentMapStatisticsState;
      reader.readMessage(value,proto.bragi.Dota2PlayerCurrentMapStatisticsState.deserializeBinaryFromReader);
      msg.setMapStatistics(value);
      break;
    case 5:
      var value = new proto.bragi.Dota2Position;
      reader.readMessage(value,proto.bragi.Dota2Position.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 6:
      var value = new proto.bragi.Dota2Items;
      reader.readMessage(value,proto.bragi.Dota2Items.deserializeBinaryFromReader);
      msg.setItems(value);
      break;
    case 7:
      var value = new proto.bragi.Dota2Abilities;
      reader.readMessage(value,proto.bragi.Dota2Abilities.deserializeBinaryFromReader);
      msg.setAbilities(value);
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
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.Dota2PlayerInfoState.serializeBinaryToWriter
    );
  }
  f = message.getTimers();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.Dota2PlayerCurrentMapTimersState.serializeBinaryToWriter
    );
  }
  f = message.getStatistics();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.Dota2PlayerStatisticsState.serializeBinaryToWriter
    );
  }
  f = message.getMapStatistics();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.Dota2PlayerCurrentMapStatisticsState.serializeBinaryToWriter
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bragi.Dota2Position.serializeBinaryToWriter
    );
  }
  f = message.getItems();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bragi.Dota2Items.serializeBinaryToWriter
    );
  }
  f = message.getAbilities();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bragi.Dota2Abilities.serializeBinaryToWriter
    );
  }
};


/**
 * optional Dota2PlayerInfoState player_info = 1;
 * @return {?proto.bragi.Dota2PlayerInfoState}
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.prototype.getPlayerInfo = function() {
  return /** @type{?proto.bragi.Dota2PlayerInfoState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2PlayerInfoState, 1));
};


/**
 * @param {?proto.bragi.Dota2PlayerInfoState|undefined} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload} returns this
*/
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.prototype.setPlayerInfo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload} returns this
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.prototype.clearPlayerInfo = function() {
  return this.setPlayerInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.prototype.hasPlayerInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Dota2PlayerCurrentMapTimersState timers = 2;
 * @return {?proto.bragi.Dota2PlayerCurrentMapTimersState}
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.prototype.getTimers = function() {
  return /** @type{?proto.bragi.Dota2PlayerCurrentMapTimersState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2PlayerCurrentMapTimersState, 2));
};


/**
 * @param {?proto.bragi.Dota2PlayerCurrentMapTimersState|undefined} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload} returns this
*/
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.prototype.setTimers = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload} returns this
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.prototype.clearTimers = function() {
  return this.setTimers(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.prototype.hasTimers = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Dota2PlayerStatisticsState statistics = 3;
 * @return {?proto.bragi.Dota2PlayerStatisticsState}
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.prototype.getStatistics = function() {
  return /** @type{?proto.bragi.Dota2PlayerStatisticsState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2PlayerStatisticsState, 3));
};


/**
 * @param {?proto.bragi.Dota2PlayerStatisticsState|undefined} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload} returns this
*/
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.prototype.setStatistics = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload} returns this
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.prototype.clearStatistics = function() {
  return this.setStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.prototype.hasStatistics = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Dota2PlayerCurrentMapStatisticsState map_statistics = 4;
 * @return {?proto.bragi.Dota2PlayerCurrentMapStatisticsState}
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.prototype.getMapStatistics = function() {
  return /** @type{?proto.bragi.Dota2PlayerCurrentMapStatisticsState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2PlayerCurrentMapStatisticsState, 4));
};


/**
 * @param {?proto.bragi.Dota2PlayerCurrentMapStatisticsState|undefined} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload} returns this
*/
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.prototype.setMapStatistics = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload} returns this
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.prototype.clearMapStatistics = function() {
  return this.setMapStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.prototype.hasMapStatistics = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Dota2Position position = 5;
 * @return {?proto.bragi.Dota2Position}
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.prototype.getPosition = function() {
  return /** @type{?proto.bragi.Dota2Position} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2Position, 5));
};


/**
 * @param {?proto.bragi.Dota2Position|undefined} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload} returns this
*/
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.prototype.setPosition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload} returns this
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Dota2Items items = 6;
 * @return {?proto.bragi.Dota2Items}
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.prototype.getItems = function() {
  return /** @type{?proto.bragi.Dota2Items} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2Items, 6));
};


/**
 * @param {?proto.bragi.Dota2Items|undefined} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload} returns this
*/
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.prototype.setItems = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload} returns this
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.prototype.clearItems = function() {
  return this.setItems(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.prototype.hasItems = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Dota2Abilities abilities = 7;
 * @return {?proto.bragi.Dota2Abilities}
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.prototype.getAbilities = function() {
  return /** @type{?proto.bragi.Dota2Abilities} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2Abilities, 7));
};


/**
 * @param {?proto.bragi.Dota2Abilities|undefined} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload} returns this
*/
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.prototype.setAbilities = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload} returns this
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.prototype.clearAbilities = function() {
  return this.setAbilities(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload.prototype.hasAbilities = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate} returns this
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Payload payload = 2;
 * @return {?proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload}
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.prototype.getPayload = function() {
  return /** @type{?proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload, 2));
};


/**
 * @param {?proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.Payload|undefined} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate} returns this
*/
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate} returns this
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2PlayerCurrentMapStatePartialUpdate.prototype.hasPayload = function() {
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
proto.bragi.Dota2PlayerCurrentMapState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2PlayerCurrentMapState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2PlayerCurrentMapState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2PlayerCurrentMapState.toObject = function(includeInstance, msg) {
  var f, obj = {
playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
playerInfo: (f = msg.getPlayerInfo()) && proto.bragi.Dota2PlayerInfoState.toObject(includeInstance, f),
timers: (f = msg.getTimers()) && proto.bragi.Dota2PlayerCurrentMapTimersState.toObject(includeInstance, f),
statistics: (f = msg.getStatistics()) && proto.bragi.Dota2PlayerStatisticsState.toObject(includeInstance, f),
mapStatistics: (f = msg.getMapStatistics()) && proto.bragi.Dota2PlayerCurrentMapStatisticsState.toObject(includeInstance, f),
position: (f = msg.getPosition()) && proto.bragi.Dota2Position.toObject(includeInstance, f),
items: (f = msg.getItems()) && proto.bragi.Dota2Items.toObject(includeInstance, f),
abilities: (f = msg.getAbilities()) && proto.bragi.Dota2Abilities.toObject(includeInstance, f)
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
 * @return {!proto.bragi.Dota2PlayerCurrentMapState}
 */
proto.bragi.Dota2PlayerCurrentMapState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2PlayerCurrentMapState;
  return proto.bragi.Dota2PlayerCurrentMapState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2PlayerCurrentMapState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2PlayerCurrentMapState}
 */
proto.bragi.Dota2PlayerCurrentMapState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.Dota2PlayerInfoState;
      reader.readMessage(value,proto.bragi.Dota2PlayerInfoState.deserializeBinaryFromReader);
      msg.setPlayerInfo(value);
      break;
    case 3:
      var value = new proto.bragi.Dota2PlayerCurrentMapTimersState;
      reader.readMessage(value,proto.bragi.Dota2PlayerCurrentMapTimersState.deserializeBinaryFromReader);
      msg.setTimers(value);
      break;
    case 4:
      var value = new proto.bragi.Dota2PlayerStatisticsState;
      reader.readMessage(value,proto.bragi.Dota2PlayerStatisticsState.deserializeBinaryFromReader);
      msg.setStatistics(value);
      break;
    case 5:
      var value = new proto.bragi.Dota2PlayerCurrentMapStatisticsState;
      reader.readMessage(value,proto.bragi.Dota2PlayerCurrentMapStatisticsState.deserializeBinaryFromReader);
      msg.setMapStatistics(value);
      break;
    case 6:
      var value = new proto.bragi.Dota2Position;
      reader.readMessage(value,proto.bragi.Dota2Position.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 7:
      var value = new proto.bragi.Dota2Items;
      reader.readMessage(value,proto.bragi.Dota2Items.deserializeBinaryFromReader);
      msg.setItems(value);
      break;
    case 8:
      var value = new proto.bragi.Dota2Abilities;
      reader.readMessage(value,proto.bragi.Dota2Abilities.deserializeBinaryFromReader);
      msg.setAbilities(value);
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
proto.bragi.Dota2PlayerCurrentMapState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2PlayerCurrentMapState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2PlayerCurrentMapState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2PlayerCurrentMapState.serializeBinaryToWriter = function(message, writer) {
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
      proto.bragi.Dota2PlayerInfoState.serializeBinaryToWriter
    );
  }
  f = message.getTimers();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.Dota2PlayerCurrentMapTimersState.serializeBinaryToWriter
    );
  }
  f = message.getStatistics();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.Dota2PlayerStatisticsState.serializeBinaryToWriter
    );
  }
  f = message.getMapStatistics();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bragi.Dota2PlayerCurrentMapStatisticsState.serializeBinaryToWriter
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bragi.Dota2Position.serializeBinaryToWriter
    );
  }
  f = message.getItems();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bragi.Dota2Items.serializeBinaryToWriter
    );
  }
  f = message.getAbilities();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.bragi.Dota2Abilities.serializeBinaryToWriter
    );
  }
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.Dota2PlayerCurrentMapState.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapState} returns this
 */
proto.bragi.Dota2PlayerCurrentMapState.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Dota2PlayerInfoState player_info = 2;
 * @return {?proto.bragi.Dota2PlayerInfoState}
 */
proto.bragi.Dota2PlayerCurrentMapState.prototype.getPlayerInfo = function() {
  return /** @type{?proto.bragi.Dota2PlayerInfoState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2PlayerInfoState, 2));
};


/**
 * @param {?proto.bragi.Dota2PlayerInfoState|undefined} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapState} returns this
*/
proto.bragi.Dota2PlayerCurrentMapState.prototype.setPlayerInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2PlayerCurrentMapState} returns this
 */
proto.bragi.Dota2PlayerCurrentMapState.prototype.clearPlayerInfo = function() {
  return this.setPlayerInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2PlayerCurrentMapState.prototype.hasPlayerInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Dota2PlayerCurrentMapTimersState timers = 3;
 * @return {?proto.bragi.Dota2PlayerCurrentMapTimersState}
 */
proto.bragi.Dota2PlayerCurrentMapState.prototype.getTimers = function() {
  return /** @type{?proto.bragi.Dota2PlayerCurrentMapTimersState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2PlayerCurrentMapTimersState, 3));
};


/**
 * @param {?proto.bragi.Dota2PlayerCurrentMapTimersState|undefined} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapState} returns this
*/
proto.bragi.Dota2PlayerCurrentMapState.prototype.setTimers = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2PlayerCurrentMapState} returns this
 */
proto.bragi.Dota2PlayerCurrentMapState.prototype.clearTimers = function() {
  return this.setTimers(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2PlayerCurrentMapState.prototype.hasTimers = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Dota2PlayerStatisticsState statistics = 4;
 * @return {?proto.bragi.Dota2PlayerStatisticsState}
 */
proto.bragi.Dota2PlayerCurrentMapState.prototype.getStatistics = function() {
  return /** @type{?proto.bragi.Dota2PlayerStatisticsState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2PlayerStatisticsState, 4));
};


/**
 * @param {?proto.bragi.Dota2PlayerStatisticsState|undefined} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapState} returns this
*/
proto.bragi.Dota2PlayerCurrentMapState.prototype.setStatistics = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2PlayerCurrentMapState} returns this
 */
proto.bragi.Dota2PlayerCurrentMapState.prototype.clearStatistics = function() {
  return this.setStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2PlayerCurrentMapState.prototype.hasStatistics = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Dota2PlayerCurrentMapStatisticsState map_statistics = 5;
 * @return {?proto.bragi.Dota2PlayerCurrentMapStatisticsState}
 */
proto.bragi.Dota2PlayerCurrentMapState.prototype.getMapStatistics = function() {
  return /** @type{?proto.bragi.Dota2PlayerCurrentMapStatisticsState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2PlayerCurrentMapStatisticsState, 5));
};


/**
 * @param {?proto.bragi.Dota2PlayerCurrentMapStatisticsState|undefined} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapState} returns this
*/
proto.bragi.Dota2PlayerCurrentMapState.prototype.setMapStatistics = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2PlayerCurrentMapState} returns this
 */
proto.bragi.Dota2PlayerCurrentMapState.prototype.clearMapStatistics = function() {
  return this.setMapStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2PlayerCurrentMapState.prototype.hasMapStatistics = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Dota2Position position = 6;
 * @return {?proto.bragi.Dota2Position}
 */
proto.bragi.Dota2PlayerCurrentMapState.prototype.getPosition = function() {
  return /** @type{?proto.bragi.Dota2Position} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2Position, 6));
};


/**
 * @param {?proto.bragi.Dota2Position|undefined} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapState} returns this
*/
proto.bragi.Dota2PlayerCurrentMapState.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2PlayerCurrentMapState} returns this
 */
proto.bragi.Dota2PlayerCurrentMapState.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2PlayerCurrentMapState.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Dota2Items items = 7;
 * @return {?proto.bragi.Dota2Items}
 */
proto.bragi.Dota2PlayerCurrentMapState.prototype.getItems = function() {
  return /** @type{?proto.bragi.Dota2Items} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2Items, 7));
};


/**
 * @param {?proto.bragi.Dota2Items|undefined} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapState} returns this
*/
proto.bragi.Dota2PlayerCurrentMapState.prototype.setItems = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2PlayerCurrentMapState} returns this
 */
proto.bragi.Dota2PlayerCurrentMapState.prototype.clearItems = function() {
  return this.setItems(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2PlayerCurrentMapState.prototype.hasItems = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Dota2Abilities abilities = 8;
 * @return {?proto.bragi.Dota2Abilities}
 */
proto.bragi.Dota2PlayerCurrentMapState.prototype.getAbilities = function() {
  return /** @type{?proto.bragi.Dota2Abilities} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2Abilities, 8));
};


/**
 * @param {?proto.bragi.Dota2Abilities|undefined} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapState} returns this
*/
proto.bragi.Dota2PlayerCurrentMapState.prototype.setAbilities = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2PlayerCurrentMapState} returns this
 */
proto.bragi.Dota2PlayerCurrentMapState.prototype.clearAbilities = function() {
  return this.setAbilities(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2PlayerCurrentMapState.prototype.hasAbilities = function() {
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
proto.bragi.Dota2PlayerCurrentMapStatisticsState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2PlayerCurrentMapStatisticsState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2PlayerCurrentMapStatisticsState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.toObject = function(includeInstance, msg) {
  var f, obj = {
playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
alive: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
health: jspb.Message.getFieldWithDefault(msg, 3, 0),
maxHealth: jspb.Message.getFieldWithDefault(msg, 4, 0),
currentGold: jspb.Message.getFieldWithDefault(msg, 5, 0),
netWorth: jspb.Message.getFieldWithDefault(msg, 6, 0),
buybackCost: jspb.Message.getFieldWithDefault(msg, 7, 0),
hasBuyback: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
hasAegis: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
mana: jspb.Message.getFieldWithDefault(msg, 10, 0),
maxMana: jspb.Message.getFieldWithDefault(msg, 11, 0),
goldReliable: jspb.Message.getFieldWithDefault(msg, 12, 0),
goldUnreliable: jspb.Message.getFieldWithDefault(msg, 13, 0),
denies: jspb.Message.getFieldWithDefault(msg, 14, 0),
lastHits: jspb.Message.getFieldWithDefault(msg, 15, 0),
level: jspb.Message.getFieldWithDefault(msg, 16, 0)
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
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatisticsState}
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2PlayerCurrentMapStatisticsState;
  return proto.bragi.Dota2PlayerCurrentMapStatisticsState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2PlayerCurrentMapStatisticsState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatisticsState}
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setMaxHealth(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCurrentGold(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNetWorth(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBuybackCost(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasBuyback(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasAegis(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMana(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxMana(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGoldReliable(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGoldUnreliable(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDenies(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLastHits(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLevel(value);
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
proto.bragi.Dota2PlayerCurrentMapStatisticsState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2PlayerCurrentMapStatisticsState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2PlayerCurrentMapStatisticsState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getMaxHealth();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getCurrentGold();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getNetWorth();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getBuybackCost();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getHasBuyback();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getHasAegis();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getMana();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getMaxMana();
  if (f !== 0) {
    writer.writeUint32(
      11,
      f
    );
  }
  f = message.getGoldReliable();
  if (f !== 0) {
    writer.writeUint32(
      12,
      f
    );
  }
  f = message.getGoldUnreliable();
  if (f !== 0) {
    writer.writeUint32(
      13,
      f
    );
  }
  f = message.getDenies();
  if (f !== 0) {
    writer.writeUint32(
      14,
      f
    );
  }
  f = message.getLastHits();
  if (f !== 0) {
    writer.writeUint32(
      15,
      f
    );
  }
  f = message.getLevel();
  if (f !== 0) {
    writer.writeUint32(
      16,
      f
    );
  }
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatisticsState} returns this
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool alive = 2;
 * @return {boolean}
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.prototype.getAlive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatisticsState} returns this
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.prototype.setAlive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional uint32 health = 3;
 * @return {number}
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.prototype.getHealth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatisticsState} returns this
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.prototype.setHealth = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 max_health = 4;
 * @return {number}
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.prototype.getMaxHealth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatisticsState} returns this
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.prototype.setMaxHealth = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 current_gold = 5;
 * @return {number}
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.prototype.getCurrentGold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatisticsState} returns this
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.prototype.setCurrentGold = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 net_worth = 6;
 * @return {number}
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.prototype.getNetWorth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatisticsState} returns this
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.prototype.setNetWorth = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 buyback_cost = 7;
 * @return {number}
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.prototype.getBuybackCost = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatisticsState} returns this
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.prototype.setBuybackCost = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional bool has_buyback = 8;
 * @return {boolean}
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.prototype.getHasBuyback = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatisticsState} returns this
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.prototype.setHasBuyback = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional bool has_aegis = 9;
 * @return {boolean}
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.prototype.getHasAegis = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatisticsState} returns this
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.prototype.setHasAegis = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional uint32 mana = 10;
 * @return {number}
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.prototype.getMana = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatisticsState} returns this
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.prototype.setMana = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint32 max_mana = 11;
 * @return {number}
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.prototype.getMaxMana = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatisticsState} returns this
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.prototype.setMaxMana = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional uint32 gold_reliable = 12;
 * @return {number}
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.prototype.getGoldReliable = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatisticsState} returns this
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.prototype.setGoldReliable = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional uint32 gold_unreliable = 13;
 * @return {number}
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.prototype.getGoldUnreliable = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatisticsState} returns this
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.prototype.setGoldUnreliable = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional uint32 denies = 14;
 * @return {number}
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.prototype.getDenies = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatisticsState} returns this
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.prototype.setDenies = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional uint32 last_hits = 15;
 * @return {number}
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.prototype.getLastHits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatisticsState} returns this
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.prototype.setLastHits = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional uint32 level = 16;
 * @return {number}
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapStatisticsState} returns this
 */
proto.bragi.Dota2PlayerCurrentMapStatisticsState.prototype.setLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
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
proto.bragi.Dota2PlayerCurrentMapTimersState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2PlayerCurrentMapTimersState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2PlayerCurrentMapTimersState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2PlayerCurrentMapTimersState.toObject = function(includeInstance, msg) {
  var f, obj = {
playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
respawnTimer: (f = msg.getRespawnTimer()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
buybackCooldown: (f = msg.getBuybackCooldown()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.bragi.Dota2PlayerCurrentMapTimersState}
 */
proto.bragi.Dota2PlayerCurrentMapTimersState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2PlayerCurrentMapTimersState;
  return proto.bragi.Dota2PlayerCurrentMapTimersState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2PlayerCurrentMapTimersState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2PlayerCurrentMapTimersState}
 */
proto.bragi.Dota2PlayerCurrentMapTimersState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setRespawnTimer(value);
      break;
    case 3:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setBuybackCooldown(value);
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
proto.bragi.Dota2PlayerCurrentMapTimersState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2PlayerCurrentMapTimersState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2PlayerCurrentMapTimersState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2PlayerCurrentMapTimersState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRespawnTimer();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getBuybackCooldown();
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
proto.bragi.Dota2PlayerCurrentMapTimersState.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapTimersState} returns this
 */
proto.bragi.Dota2PlayerCurrentMapTimersState.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Duration respawn_timer = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.Dota2PlayerCurrentMapTimersState.prototype.getRespawnTimer = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapTimersState} returns this
*/
proto.bragi.Dota2PlayerCurrentMapTimersState.prototype.setRespawnTimer = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2PlayerCurrentMapTimersState} returns this
 */
proto.bragi.Dota2PlayerCurrentMapTimersState.prototype.clearRespawnTimer = function() {
  return this.setRespawnTimer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2PlayerCurrentMapTimersState.prototype.hasRespawnTimer = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Duration buyback_cooldown = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bragi.Dota2PlayerCurrentMapTimersState.prototype.getBuybackCooldown = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bragi.Dota2PlayerCurrentMapTimersState} returns this
*/
proto.bragi.Dota2PlayerCurrentMapTimersState.prototype.setBuybackCooldown = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2PlayerCurrentMapTimersState} returns this
 */
proto.bragi.Dota2PlayerCurrentMapTimersState.prototype.clearBuybackCooldown = function() {
  return this.setBuybackCooldown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2PlayerCurrentMapTimersState.prototype.hasBuybackCooldown = function() {
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
proto.bragi.Dota2TeamPreviousMapState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2TeamPreviousMapState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2TeamPreviousMapState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2TeamPreviousMapState.toObject = function(includeInstance, msg) {
  var f, obj = {
teamUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
faction: jspb.Message.getFieldWithDefault(msg, 2, 0),
barracks: jspb.Message.getFieldWithDefault(msg, 3, 0),
kills: jspb.Message.getFieldWithDefault(msg, 4, 0),
netWorth: jspb.Message.getFieldWithDefault(msg, 5, 0),
roshans: jspb.Message.getFieldWithDefault(msg, 6, 0),
towers: jspb.Message.getFieldWithDefault(msg, 7, 0),
won: (f = jspb.Message.getBooleanField(msg, 8)) == null ? undefined : f,
playersMap: (f = msg.getPlayersMap()) ? f.toObject(includeInstance, proto.bragi.Dota2PlayerPreviousMapState.toObject) : [],
hasRoshans: jspb.Message.getBooleanFieldWithDefault(msg, 10, false)
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
 * @return {!proto.bragi.Dota2TeamPreviousMapState}
 */
proto.bragi.Dota2TeamPreviousMapState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2TeamPreviousMapState;
  return proto.bragi.Dota2TeamPreviousMapState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2TeamPreviousMapState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2TeamPreviousMapState}
 */
proto.bragi.Dota2TeamPreviousMapState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.bragi.Dota2Faction} */ (reader.readEnum());
      msg.setFaction(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBarracks(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setKills(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNetWorth(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRoshans(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTowers(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWon(value);
      break;
    case 9:
      var value = msg.getPlayersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bragi.Dota2PlayerPreviousMapState.deserializeBinaryFromReader, "", new proto.bragi.Dota2PlayerPreviousMapState());
         });
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasRoshans(value);
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
proto.bragi.Dota2TeamPreviousMapState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2TeamPreviousMapState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2TeamPreviousMapState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2TeamPreviousMapState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFaction();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getBarracks();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getKills();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getNetWorth();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getRoshans();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getTowers();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getPlayersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(9, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bragi.Dota2PlayerPreviousMapState.serializeBinaryToWriter);
  }
  f = message.getHasRoshans();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
};


/**
 * optional string team_urn = 1;
 * @return {string}
 */
proto.bragi.Dota2TeamPreviousMapState.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.Dota2TeamPreviousMapState} returns this
 */
proto.bragi.Dota2TeamPreviousMapState.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Dota2Faction faction = 2;
 * @return {!proto.bragi.Dota2Faction}
 */
proto.bragi.Dota2TeamPreviousMapState.prototype.getFaction = function() {
  return /** @type {!proto.bragi.Dota2Faction} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bragi.Dota2Faction} value
 * @return {!proto.bragi.Dota2TeamPreviousMapState} returns this
 */
proto.bragi.Dota2TeamPreviousMapState.prototype.setFaction = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint32 barracks = 3;
 * @return {number}
 */
proto.bragi.Dota2TeamPreviousMapState.prototype.getBarracks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2TeamPreviousMapState} returns this
 */
proto.bragi.Dota2TeamPreviousMapState.prototype.setBarracks = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 kills = 4;
 * @return {number}
 */
proto.bragi.Dota2TeamPreviousMapState.prototype.getKills = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2TeamPreviousMapState} returns this
 */
proto.bragi.Dota2TeamPreviousMapState.prototype.setKills = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 net_worth = 5;
 * @return {number}
 */
proto.bragi.Dota2TeamPreviousMapState.prototype.getNetWorth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2TeamPreviousMapState} returns this
 */
proto.bragi.Dota2TeamPreviousMapState.prototype.setNetWorth = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 roshans = 6;
 * @return {number}
 */
proto.bragi.Dota2TeamPreviousMapState.prototype.getRoshans = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2TeamPreviousMapState} returns this
 */
proto.bragi.Dota2TeamPreviousMapState.prototype.setRoshans = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 towers = 7;
 * @return {number}
 */
proto.bragi.Dota2TeamPreviousMapState.prototype.getTowers = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2TeamPreviousMapState} returns this
 */
proto.bragi.Dota2TeamPreviousMapState.prototype.setTowers = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional bool won = 8;
 * @return {boolean}
 */
proto.bragi.Dota2TeamPreviousMapState.prototype.getWon = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.Dota2TeamPreviousMapState} returns this
 */
proto.bragi.Dota2TeamPreviousMapState.prototype.setWon = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.Dota2TeamPreviousMapState} returns this
 */
proto.bragi.Dota2TeamPreviousMapState.prototype.clearWon = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2TeamPreviousMapState.prototype.hasWon = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * map<string, Dota2PlayerPreviousMapState> players = 9;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bragi.Dota2PlayerPreviousMapState>}
 */
proto.bragi.Dota2TeamPreviousMapState.prototype.getPlayersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bragi.Dota2PlayerPreviousMapState>} */ (
      jspb.Message.getMapField(this, 9, opt_noLazyCreate,
      proto.bragi.Dota2PlayerPreviousMapState));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bragi.Dota2TeamPreviousMapState} returns this
 */
proto.bragi.Dota2TeamPreviousMapState.prototype.clearPlayersMap = function() {
  this.getPlayersMap().clear();
  return this;
};


/**
 * optional bool has_roshans = 10;
 * @return {boolean}
 */
proto.bragi.Dota2TeamPreviousMapState.prototype.getHasRoshans = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.Dota2TeamPreviousMapState} returns this
 */
proto.bragi.Dota2TeamPreviousMapState.prototype.setHasRoshans = function(value) {
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
proto.bragi.Dota2PlayerPreviousMapState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2PlayerPreviousMapState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2PlayerPreviousMapState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2PlayerPreviousMapState.toObject = function(includeInstance, msg) {
  var f, obj = {
playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
playerInfo: (f = msg.getPlayerInfo()) && proto.bragi.Dota2PlayerInfoState.toObject(includeInstance, f),
statistics: (f = msg.getStatistics()) && proto.bragi.Dota2PlayerStatisticsState.toObject(includeInstance, f)
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
 * @return {!proto.bragi.Dota2PlayerPreviousMapState}
 */
proto.bragi.Dota2PlayerPreviousMapState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2PlayerPreviousMapState;
  return proto.bragi.Dota2PlayerPreviousMapState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2PlayerPreviousMapState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2PlayerPreviousMapState}
 */
proto.bragi.Dota2PlayerPreviousMapState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.Dota2PlayerInfoState;
      reader.readMessage(value,proto.bragi.Dota2PlayerInfoState.deserializeBinaryFromReader);
      msg.setPlayerInfo(value);
      break;
    case 3:
      var value = new proto.bragi.Dota2PlayerStatisticsState;
      reader.readMessage(value,proto.bragi.Dota2PlayerStatisticsState.deserializeBinaryFromReader);
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
proto.bragi.Dota2PlayerPreviousMapState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2PlayerPreviousMapState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2PlayerPreviousMapState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2PlayerPreviousMapState.serializeBinaryToWriter = function(message, writer) {
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
      proto.bragi.Dota2PlayerInfoState.serializeBinaryToWriter
    );
  }
  f = message.getStatistics();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.Dota2PlayerStatisticsState.serializeBinaryToWriter
    );
  }
};


/**
 * optional string player_urn = 1;
 * @return {string}
 */
proto.bragi.Dota2PlayerPreviousMapState.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.Dota2PlayerPreviousMapState} returns this
 */
proto.bragi.Dota2PlayerPreviousMapState.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Dota2PlayerInfoState player_info = 2;
 * @return {?proto.bragi.Dota2PlayerInfoState}
 */
proto.bragi.Dota2PlayerPreviousMapState.prototype.getPlayerInfo = function() {
  return /** @type{?proto.bragi.Dota2PlayerInfoState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2PlayerInfoState, 2));
};


/**
 * @param {?proto.bragi.Dota2PlayerInfoState|undefined} value
 * @return {!proto.bragi.Dota2PlayerPreviousMapState} returns this
*/
proto.bragi.Dota2PlayerPreviousMapState.prototype.setPlayerInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2PlayerPreviousMapState} returns this
 */
proto.bragi.Dota2PlayerPreviousMapState.prototype.clearPlayerInfo = function() {
  return this.setPlayerInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2PlayerPreviousMapState.prototype.hasPlayerInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Dota2PlayerStatisticsState statistics = 3;
 * @return {?proto.bragi.Dota2PlayerStatisticsState}
 */
proto.bragi.Dota2PlayerPreviousMapState.prototype.getStatistics = function() {
  return /** @type{?proto.bragi.Dota2PlayerStatisticsState} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2PlayerStatisticsState, 3));
};


/**
 * @param {?proto.bragi.Dota2PlayerStatisticsState|undefined} value
 * @return {!proto.bragi.Dota2PlayerPreviousMapState} returns this
*/
proto.bragi.Dota2PlayerPreviousMapState.prototype.setStatistics = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2PlayerPreviousMapState} returns this
 */
proto.bragi.Dota2PlayerPreviousMapState.prototype.clearStatistics = function() {
  return this.setStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2PlayerPreviousMapState.prototype.hasStatistics = function() {
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
proto.bragi.Dota2PlayerInfoState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2PlayerInfoState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2PlayerInfoState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2PlayerInfoState.toObject = function(includeInstance, msg) {
  var f, obj = {
playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
slotId: jspb.Message.getFieldWithDefault(msg, 2, 0),
extName: jspb.Message.getFieldWithDefault(msg, 3, ""),
extId: jspb.Message.getFieldWithDefault(msg, 5, ""),
heroId: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.bragi.Dota2PlayerInfoState}
 */
proto.bragi.Dota2PlayerInfoState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2PlayerInfoState;
  return proto.bragi.Dota2PlayerInfoState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2PlayerInfoState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2PlayerInfoState}
 */
proto.bragi.Dota2PlayerInfoState.deserializeBinaryFromReader = function(msg, reader) {
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
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setExtId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHeroId(value);
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
proto.bragi.Dota2PlayerInfoState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2PlayerInfoState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2PlayerInfoState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2PlayerInfoState.serializeBinaryToWriter = function(message, writer) {
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
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
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
proto.bragi.Dota2PlayerInfoState.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.Dota2PlayerInfoState} returns this
 */
proto.bragi.Dota2PlayerInfoState.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 slot_id = 2;
 * @return {number}
 */
proto.bragi.Dota2PlayerInfoState.prototype.getSlotId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2PlayerInfoState} returns this
 */
proto.bragi.Dota2PlayerInfoState.prototype.setSlotId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string ext_name = 3;
 * @return {string}
 */
proto.bragi.Dota2PlayerInfoState.prototype.getExtName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.Dota2PlayerInfoState} returns this
 */
proto.bragi.Dota2PlayerInfoState.prototype.setExtName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string ext_id = 5;
 * @return {string}
 */
proto.bragi.Dota2PlayerInfoState.prototype.getExtId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.Dota2PlayerInfoState} returns this
 */
proto.bragi.Dota2PlayerInfoState.prototype.setExtId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint32 hero_id = 4;
 * @return {number}
 */
proto.bragi.Dota2PlayerInfoState.prototype.getHeroId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2PlayerInfoState} returns this
 */
proto.bragi.Dota2PlayerInfoState.prototype.setHeroId = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.Dota2PlayerInfoState} returns this
 */
proto.bragi.Dota2PlayerInfoState.prototype.clearHeroId = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2PlayerInfoState.prototype.hasHeroId = function() {
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
proto.bragi.Dota2PlayerStatisticsState.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2PlayerStatisticsState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2PlayerStatisticsState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2PlayerStatisticsState.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bragi.Dota2PlayerStatisticsState}
 */
proto.bragi.Dota2PlayerStatisticsState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2PlayerStatisticsState;
  return proto.bragi.Dota2PlayerStatisticsState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2PlayerStatisticsState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2PlayerStatisticsState}
 */
proto.bragi.Dota2PlayerStatisticsState.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bragi.Dota2PlayerStatisticsState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2PlayerStatisticsState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2PlayerStatisticsState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2PlayerStatisticsState.serializeBinaryToWriter = function(message, writer) {
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
proto.bragi.Dota2PlayerStatisticsState.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.Dota2PlayerStatisticsState} returns this
 */
proto.bragi.Dota2PlayerStatisticsState.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 kills = 2;
 * @return {number}
 */
proto.bragi.Dota2PlayerStatisticsState.prototype.getKills = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2PlayerStatisticsState} returns this
 */
proto.bragi.Dota2PlayerStatisticsState.prototype.setKills = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 deaths = 3;
 * @return {number}
 */
proto.bragi.Dota2PlayerStatisticsState.prototype.getDeaths = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2PlayerStatisticsState} returns this
 */
proto.bragi.Dota2PlayerStatisticsState.prototype.setDeaths = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 assists = 4;
 * @return {number}
 */
proto.bragi.Dota2PlayerStatisticsState.prototype.getAssists = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2PlayerStatisticsState} returns this
 */
proto.bragi.Dota2PlayerStatisticsState.prototype.setAssists = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.Dota2Towers.repeatedFields_ = [1];



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
proto.bragi.Dota2Towers.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2Towers.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2Towers} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2Towers.toObject = function(includeInstance, msg) {
  var f, obj = {
towersList: jspb.Message.toObjectList(msg.getTowersList(),
    proto.bragi.Dota2Tower.toObject, includeInstance)
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
 * @return {!proto.bragi.Dota2Towers}
 */
proto.bragi.Dota2Towers.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2Towers;
  return proto.bragi.Dota2Towers.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2Towers} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2Towers}
 */
proto.bragi.Dota2Towers.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Dota2Tower;
      reader.readMessage(value,proto.bragi.Dota2Tower.deserializeBinaryFromReader);
      msg.addTowers(value);
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
proto.bragi.Dota2Towers.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2Towers.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2Towers} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2Towers.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTowersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bragi.Dota2Tower.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Dota2Tower towers = 1;
 * @return {!Array<!proto.bragi.Dota2Tower>}
 */
proto.bragi.Dota2Towers.prototype.getTowersList = function() {
  return /** @type{!Array<!proto.bragi.Dota2Tower>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.Dota2Tower, 1));
};


/**
 * @param {!Array<!proto.bragi.Dota2Tower>} value
 * @return {!proto.bragi.Dota2Towers} returns this
*/
proto.bragi.Dota2Towers.prototype.setTowersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bragi.Dota2Tower=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.Dota2Tower}
 */
proto.bragi.Dota2Towers.prototype.addTowers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bragi.Dota2Tower, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.Dota2Towers} returns this
 */
proto.bragi.Dota2Towers.prototype.clearTowersList = function() {
  return this.setTowersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.Dota2Barracks.repeatedFields_ = [1];



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
proto.bragi.Dota2Barracks.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2Barracks.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2Barracks} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2Barracks.toObject = function(includeInstance, msg) {
  var f, obj = {
barracksList: jspb.Message.toObjectList(msg.getBarracksList(),
    proto.bragi.Dota2Barrack.toObject, includeInstance)
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
 * @return {!proto.bragi.Dota2Barracks}
 */
proto.bragi.Dota2Barracks.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2Barracks;
  return proto.bragi.Dota2Barracks.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2Barracks} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2Barracks}
 */
proto.bragi.Dota2Barracks.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Dota2Barrack;
      reader.readMessage(value,proto.bragi.Dota2Barrack.deserializeBinaryFromReader);
      msg.addBarracks(value);
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
proto.bragi.Dota2Barracks.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2Barracks.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2Barracks} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2Barracks.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBarracksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bragi.Dota2Barrack.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Dota2Barrack barracks = 1;
 * @return {!Array<!proto.bragi.Dota2Barrack>}
 */
proto.bragi.Dota2Barracks.prototype.getBarracksList = function() {
  return /** @type{!Array<!proto.bragi.Dota2Barrack>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.Dota2Barrack, 1));
};


/**
 * @param {!Array<!proto.bragi.Dota2Barrack>} value
 * @return {!proto.bragi.Dota2Barracks} returns this
*/
proto.bragi.Dota2Barracks.prototype.setBarracksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bragi.Dota2Barrack=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.Dota2Barrack}
 */
proto.bragi.Dota2Barracks.prototype.addBarracks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bragi.Dota2Barrack, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.Dota2Barracks} returns this
 */
proto.bragi.Dota2Barracks.prototype.clearBarracksList = function() {
  return this.setBarracksList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.Dota2Abilities.repeatedFields_ = [1];



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
proto.bragi.Dota2Abilities.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2Abilities.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2Abilities} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2Abilities.toObject = function(includeInstance, msg) {
  var f, obj = {
abilitiesList: jspb.Message.toObjectList(msg.getAbilitiesList(),
    proto.bragi.Dota2Ability.toObject, includeInstance)
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
 * @return {!proto.bragi.Dota2Abilities}
 */
proto.bragi.Dota2Abilities.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2Abilities;
  return proto.bragi.Dota2Abilities.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2Abilities} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2Abilities}
 */
proto.bragi.Dota2Abilities.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Dota2Ability;
      reader.readMessage(value,proto.bragi.Dota2Ability.deserializeBinaryFromReader);
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
proto.bragi.Dota2Abilities.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2Abilities.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2Abilities} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2Abilities.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAbilitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bragi.Dota2Ability.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Dota2Ability abilities = 1;
 * @return {!Array<!proto.bragi.Dota2Ability>}
 */
proto.bragi.Dota2Abilities.prototype.getAbilitiesList = function() {
  return /** @type{!Array<!proto.bragi.Dota2Ability>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.Dota2Ability, 1));
};


/**
 * @param {!Array<!proto.bragi.Dota2Ability>} value
 * @return {!proto.bragi.Dota2Abilities} returns this
*/
proto.bragi.Dota2Abilities.prototype.setAbilitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bragi.Dota2Ability=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.Dota2Ability}
 */
proto.bragi.Dota2Abilities.prototype.addAbilities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bragi.Dota2Ability, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.Dota2Abilities} returns this
 */
proto.bragi.Dota2Abilities.prototype.clearAbilitiesList = function() {
  return this.setAbilitiesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.Dota2Items.repeatedFields_ = [1];



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
proto.bragi.Dota2Items.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2Items.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2Items} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2Items.toObject = function(includeInstance, msg) {
  var f, obj = {
itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.bragi.Dota2Item.toObject, includeInstance)
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
 * @return {!proto.bragi.Dota2Items}
 */
proto.bragi.Dota2Items.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2Items;
  return proto.bragi.Dota2Items.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2Items} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2Items}
 */
proto.bragi.Dota2Items.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Dota2Item;
      reader.readMessage(value,proto.bragi.Dota2Item.deserializeBinaryFromReader);
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
proto.bragi.Dota2Items.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2Items.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2Items} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2Items.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bragi.Dota2Item.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Dota2Item items = 1;
 * @return {!Array<!proto.bragi.Dota2Item>}
 */
proto.bragi.Dota2Items.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.bragi.Dota2Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.Dota2Item, 1));
};


/**
 * @param {!Array<!proto.bragi.Dota2Item>} value
 * @return {!proto.bragi.Dota2Items} returns this
*/
proto.bragi.Dota2Items.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bragi.Dota2Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.Dota2Item}
 */
proto.bragi.Dota2Items.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bragi.Dota2Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.Dota2Items} returns this
 */
proto.bragi.Dota2Items.prototype.clearItemsList = function() {
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
proto.bragi.Dota2Item.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2Item.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
cooldown: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
position: jspb.Message.getFieldWithDefault(msg, 3, 0),
level: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.bragi.Dota2Item}
 */
proto.bragi.Dota2Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2Item;
  return proto.bragi.Dota2Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2Item}
 */
proto.bragi.Dota2Item.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCooldown(value);
      break;
    case 3:
      var value = /** @type {!proto.bragi.Dota2ItemPosition} */ (reader.readEnum());
      msg.setPosition(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLevel(value);
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
proto.bragi.Dota2Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPosition();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getLevel();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.bragi.Dota2Item.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.Dota2Item} returns this
 */
proto.bragi.Dota2Item.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 cooldown = 2;
 * @return {number}
 */
proto.bragi.Dota2Item.prototype.getCooldown = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2Item} returns this
 */
proto.bragi.Dota2Item.prototype.setCooldown = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.Dota2Item} returns this
 */
proto.bragi.Dota2Item.prototype.clearCooldown = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2Item.prototype.hasCooldown = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Dota2ItemPosition position = 3;
 * @return {!proto.bragi.Dota2ItemPosition}
 */
proto.bragi.Dota2Item.prototype.getPosition = function() {
  return /** @type {!proto.bragi.Dota2ItemPosition} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.bragi.Dota2ItemPosition} value
 * @return {!proto.bragi.Dota2Item} returns this
 */
proto.bragi.Dota2Item.prototype.setPosition = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional uint32 level = 4;
 * @return {number}
 */
proto.bragi.Dota2Item.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2Item} returns this
 */
proto.bragi.Dota2Item.prototype.setLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
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
proto.bragi.Dota2Ability.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2Ability.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2Ability} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2Ability.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
cooldown: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
ultimate: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
passive: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
canCast: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.bragi.Dota2Ability}
 */
proto.bragi.Dota2Ability.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2Ability;
  return proto.bragi.Dota2Ability.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2Ability} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2Ability}
 */
proto.bragi.Dota2Ability.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCooldown(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUltimate(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPassive(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanCast(value);
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
proto.bragi.Dota2Ability.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2Ability.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2Ability} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2Ability.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getUltimate();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getPassive();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getCanCast();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.bragi.Dota2Ability.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.Dota2Ability} returns this
 */
proto.bragi.Dota2Ability.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 cooldown = 2;
 * @return {number}
 */
proto.bragi.Dota2Ability.prototype.getCooldown = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2Ability} returns this
 */
proto.bragi.Dota2Ability.prototype.setCooldown = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.Dota2Ability} returns this
 */
proto.bragi.Dota2Ability.prototype.clearCooldown = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2Ability.prototype.hasCooldown = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool ultimate = 3;
 * @return {boolean}
 */
proto.bragi.Dota2Ability.prototype.getUltimate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.Dota2Ability} returns this
 */
proto.bragi.Dota2Ability.prototype.setUltimate = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool passive = 4;
 * @return {boolean}
 */
proto.bragi.Dota2Ability.prototype.getPassive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.Dota2Ability} returns this
 */
proto.bragi.Dota2Ability.prototype.setPassive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool can_cast = 5;
 * @return {boolean}
 */
proto.bragi.Dota2Ability.prototype.getCanCast = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.Dota2Ability} returns this
 */
proto.bragi.Dota2Ability.prototype.setCanCast = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
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
proto.bragi.Roshan.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Roshan.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Roshan} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Roshan.toObject = function(includeInstance, msg) {
  var f, obj = {
alive: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
respawntime: jspb.Message.getFieldWithDefault(msg, 2, 0),
position: (f = msg.getPosition()) && proto.bragi.Dota2Position.toObject(includeInstance, f)
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
 * @return {!proto.bragi.Roshan}
 */
proto.bragi.Roshan.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Roshan;
  return proto.bragi.Roshan.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Roshan} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Roshan}
 */
proto.bragi.Roshan.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAlive(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRespawntime(value);
      break;
    case 3:
      var value = new proto.bragi.Dota2Position;
      reader.readMessage(value,proto.bragi.Dota2Position.deserializeBinaryFromReader);
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
proto.bragi.Roshan.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Roshan.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Roshan} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Roshan.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAlive();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getRespawntime();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.Dota2Position.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool alive = 1;
 * @return {boolean}
 */
proto.bragi.Roshan.prototype.getAlive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.Roshan} returns this
 */
proto.bragi.Roshan.prototype.setAlive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional uint32 respawnTime = 2;
 * @return {number}
 */
proto.bragi.Roshan.prototype.getRespawntime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Roshan} returns this
 */
proto.bragi.Roshan.prototype.setRespawntime = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Dota2Position position = 3;
 * @return {?proto.bragi.Dota2Position}
 */
proto.bragi.Roshan.prototype.getPosition = function() {
  return /** @type{?proto.bragi.Dota2Position} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2Position, 3));
};


/**
 * @param {?proto.bragi.Dota2Position|undefined} value
 * @return {!proto.bragi.Roshan} returns this
*/
proto.bragi.Roshan.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Roshan} returns this
 */
proto.bragi.Roshan.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Roshan.prototype.hasPosition = function() {
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
proto.bragi.Dota2Tower.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2Tower.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2Tower} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2Tower.toObject = function(includeInstance, msg) {
  var f, obj = {
lane: jspb.Message.getFieldWithDefault(msg, 1, 0),
faction: jspb.Message.getFieldWithDefault(msg, 2, 0),
tier: jspb.Message.getFieldWithDefault(msg, 3, 0),
alive: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.bragi.Dota2Tower}
 */
proto.bragi.Dota2Tower.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2Tower;
  return proto.bragi.Dota2Tower.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2Tower} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2Tower}
 */
proto.bragi.Dota2Tower.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bragi.Dota2Lane} */ (reader.readEnum());
      msg.setLane(value);
      break;
    case 2:
      var value = /** @type {!proto.bragi.Dota2Faction} */ (reader.readEnum());
      msg.setFaction(value);
      break;
    case 3:
      var value = /** @type {!proto.bragi.Dota2TowerTier} */ (reader.readEnum());
      msg.setTier(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAlive(value);
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
proto.bragi.Dota2Tower.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2Tower.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2Tower} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2Tower.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLane();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getFaction();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getTier();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getAlive();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional Dota2Lane lane = 1;
 * @return {!proto.bragi.Dota2Lane}
 */
proto.bragi.Dota2Tower.prototype.getLane = function() {
  return /** @type {!proto.bragi.Dota2Lane} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bragi.Dota2Lane} value
 * @return {!proto.bragi.Dota2Tower} returns this
 */
proto.bragi.Dota2Tower.prototype.setLane = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Dota2Faction faction = 2;
 * @return {!proto.bragi.Dota2Faction}
 */
proto.bragi.Dota2Tower.prototype.getFaction = function() {
  return /** @type {!proto.bragi.Dota2Faction} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bragi.Dota2Faction} value
 * @return {!proto.bragi.Dota2Tower} returns this
 */
proto.bragi.Dota2Tower.prototype.setFaction = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional Dota2TowerTier tier = 3;
 * @return {!proto.bragi.Dota2TowerTier}
 */
proto.bragi.Dota2Tower.prototype.getTier = function() {
  return /** @type {!proto.bragi.Dota2TowerTier} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.bragi.Dota2TowerTier} value
 * @return {!proto.bragi.Dota2Tower} returns this
 */
proto.bragi.Dota2Tower.prototype.setTier = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bool alive = 4;
 * @return {boolean}
 */
proto.bragi.Dota2Tower.prototype.getAlive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.Dota2Tower} returns this
 */
proto.bragi.Dota2Tower.prototype.setAlive = function(value) {
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
proto.bragi.Dota2Barrack.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2Barrack.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2Barrack} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2Barrack.toObject = function(includeInstance, msg) {
  var f, obj = {
lane: jspb.Message.getFieldWithDefault(msg, 1, 0),
faction: jspb.Message.getFieldWithDefault(msg, 2, 0),
type: jspb.Message.getFieldWithDefault(msg, 3, 0),
alive: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.bragi.Dota2Barrack}
 */
proto.bragi.Dota2Barrack.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2Barrack;
  return proto.bragi.Dota2Barrack.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2Barrack} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2Barrack}
 */
proto.bragi.Dota2Barrack.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bragi.Dota2Lane} */ (reader.readEnum());
      msg.setLane(value);
      break;
    case 2:
      var value = /** @type {!proto.bragi.Dota2Faction} */ (reader.readEnum());
      msg.setFaction(value);
      break;
    case 3:
      var value = /** @type {!proto.bragi.Dota2BarrackType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAlive(value);
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
proto.bragi.Dota2Barrack.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2Barrack.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2Barrack} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2Barrack.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLane();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getFaction();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getAlive();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional Dota2Lane lane = 1;
 * @return {!proto.bragi.Dota2Lane}
 */
proto.bragi.Dota2Barrack.prototype.getLane = function() {
  return /** @type {!proto.bragi.Dota2Lane} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bragi.Dota2Lane} value
 * @return {!proto.bragi.Dota2Barrack} returns this
 */
proto.bragi.Dota2Barrack.prototype.setLane = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Dota2Faction faction = 2;
 * @return {!proto.bragi.Dota2Faction}
 */
proto.bragi.Dota2Barrack.prototype.getFaction = function() {
  return /** @type {!proto.bragi.Dota2Faction} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bragi.Dota2Faction} value
 * @return {!proto.bragi.Dota2Barrack} returns this
 */
proto.bragi.Dota2Barrack.prototype.setFaction = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional Dota2BarrackType type = 3;
 * @return {!proto.bragi.Dota2BarrackType}
 */
proto.bragi.Dota2Barrack.prototype.getType = function() {
  return /** @type {!proto.bragi.Dota2BarrackType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.bragi.Dota2BarrackType} value
 * @return {!proto.bragi.Dota2Barrack} returns this
 */
proto.bragi.Dota2Barrack.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bool alive = 4;
 * @return {boolean}
 */
proto.bragi.Dota2Barrack.prototype.getAlive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.Dota2Barrack} returns this
 */
proto.bragi.Dota2Barrack.prototype.setAlive = function(value) {
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
proto.bragi.Dota2Position.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2Position.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2Position} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2Position.toObject = function(includeInstance, msg) {
  var f, obj = {
x: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
y: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.bragi.Dota2Position}
 */
proto.bragi.Dota2Position.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2Position;
  return proto.bragi.Dota2Position.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2Position} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2Position}
 */
proto.bragi.Dota2Position.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bragi.Dota2Position.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2Position.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2Position} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2Position.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional float x = 1;
 * @return {number}
 */
proto.bragi.Dota2Position.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2Position} returns this
 */
proto.bragi.Dota2Position.prototype.setX = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float y = 2;
 * @return {number}
 */
proto.bragi.Dota2Position.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2Position} returns this
 */
proto.bragi.Dota2Position.prototype.setY = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.Dota2MatchEvents.repeatedFields_ = [2];



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
proto.bragi.Dota2MatchEvents.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2MatchEvents.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2MatchEvents} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2MatchEvents.toObject = function(includeInstance, msg) {
  var f, obj = {
matchUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.bragi.Dota2Event.toObject, includeInstance)
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
 * @return {!proto.bragi.Dota2MatchEvents}
 */
proto.bragi.Dota2MatchEvents.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2MatchEvents;
  return proto.bragi.Dota2MatchEvents.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2MatchEvents} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2MatchEvents}
 */
proto.bragi.Dota2MatchEvents.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bragi.Dota2Event;
      reader.readMessage(value,proto.bragi.Dota2Event.deserializeBinaryFromReader);
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
proto.bragi.Dota2MatchEvents.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2MatchEvents.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2MatchEvents} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2MatchEvents.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatchUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.bragi.Dota2Event.serializeBinaryToWriter
    );
  }
};


/**
 * optional string match_urn = 1;
 * @return {string}
 */
proto.bragi.Dota2MatchEvents.prototype.getMatchUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.Dota2MatchEvents} returns this
 */
proto.bragi.Dota2MatchEvents.prototype.setMatchUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Dota2Event events = 2;
 * @return {!Array<!proto.bragi.Dota2Event>}
 */
proto.bragi.Dota2MatchEvents.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.bragi.Dota2Event>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.Dota2Event, 2));
};


/**
 * @param {!Array<!proto.bragi.Dota2Event>} value
 * @return {!proto.bragi.Dota2MatchEvents} returns this
*/
proto.bragi.Dota2MatchEvents.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bragi.Dota2Event=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.Dota2Event}
 */
proto.bragi.Dota2MatchEvents.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bragi.Dota2Event, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.Dota2MatchEvents} returns this
 */
proto.bragi.Dota2MatchEvents.prototype.clearEventsList = function() {
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
proto.bragi.Dota2Event.oneofGroups_ = [[10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]];

/**
 * @enum {number}
 */
proto.bragi.Dota2Event.EventCase = {
  EVENT_NOT_SET: 0,
  MAP_STARTED: 10,
  MAP_ENDED: 11,
  MAP_PAUSED: 12,
  MAP_RESUMED: 13,
  HERO_KILL: 14,
  HERO_DEATH_BY_ENVIRONMENT: 15,
  TOWER_DESTROYED: 16,
  BARRACKS_DESTROYED: 17,
  ANCIENT_DESTROYED: 18,
  MEGA_CREEPS: 19,
  ROSHAN_KILLED: 20,
  ROSHAN_RESPAWNED: 21,
  AEGIS_PICKED_UP: 22,
  AEGIS_LOST: 23,
  BUYBACK: 24,
  DAY_NIGHT_CHANGED: 25,
  MULTIKILL: 26,
  KILLSTREAK: 27,
  TORMENTOR_KILLED: 28
};

/**
 * @return {proto.bragi.Dota2Event.EventCase}
 */
proto.bragi.Dota2Event.prototype.getEventCase = function() {
  return /** @type {proto.bragi.Dota2Event.EventCase} */(jspb.Message.computeOneofCase(this, proto.bragi.Dota2Event.oneofGroups_[0]));
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
proto.bragi.Dota2Event.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2Event.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2Event} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2Event.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
mapId: jspb.Message.getFieldWithDefault(msg, 2, 0),
gameTime: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
mapStarted: (f = msg.getMapStarted()) && proto.bragi.Dota2MapStarted.toObject(includeInstance, f),
mapEnded: (f = msg.getMapEnded()) && proto.bragi.Dota2MapEnded.toObject(includeInstance, f),
mapPaused: (f = msg.getMapPaused()) && proto.bragi.Dota2MapPaused.toObject(includeInstance, f),
mapResumed: (f = msg.getMapResumed()) && proto.bragi.Dota2MapResumed.toObject(includeInstance, f),
heroKill: (f = msg.getHeroKill()) && proto.bragi.Dota2HeroKill.toObject(includeInstance, f),
heroDeathByEnvironment: (f = msg.getHeroDeathByEnvironment()) && proto.bragi.Dota2HeroDeathByEnvironment.toObject(includeInstance, f),
towerDestroyed: (f = msg.getTowerDestroyed()) && proto.bragi.Dota2TowerDestroyed.toObject(includeInstance, f),
barracksDestroyed: (f = msg.getBarracksDestroyed()) && proto.bragi.Dota2BarracksDestroyed.toObject(includeInstance, f),
ancientDestroyed: (f = msg.getAncientDestroyed()) && proto.bragi.Dota2AncientDestroyed.toObject(includeInstance, f),
megaCreeps: (f = msg.getMegaCreeps()) && proto.bragi.Dota2MegaCreeps.toObject(includeInstance, f),
roshanKilled: (f = msg.getRoshanKilled()) && proto.bragi.Dota2RoshanKilled.toObject(includeInstance, f),
roshanRespawned: (f = msg.getRoshanRespawned()) && proto.bragi.Dota2RoshanRespawned.toObject(includeInstance, f),
aegisPickedUp: (f = msg.getAegisPickedUp()) && proto.bragi.Dota2AegisPickedUp.toObject(includeInstance, f),
aegisLost: (f = msg.getAegisLost()) && proto.bragi.Dota2AegisLost.toObject(includeInstance, f),
buyback: (f = msg.getBuyback()) && proto.bragi.Dota2Buyback.toObject(includeInstance, f),
dayNightChanged: (f = msg.getDayNightChanged()) && proto.bragi.Dota2DayNightChanged.toObject(includeInstance, f),
multikill: (f = msg.getMultikill()) && proto.bragi.Dota2Multikill.toObject(includeInstance, f),
killstreak: (f = msg.getKillstreak()) && proto.bragi.Dota2Killstreak.toObject(includeInstance, f),
tormentorKilled: (f = msg.getTormentorKilled()) && proto.bragi.Dota2TormentorKilled.toObject(includeInstance, f)
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
 * @return {!proto.bragi.Dota2Event}
 */
proto.bragi.Dota2Event.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2Event;
  return proto.bragi.Dota2Event.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2Event} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2Event}
 */
proto.bragi.Dota2Event.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMapId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGameTime(value);
      break;
    case 10:
      var value = new proto.bragi.Dota2MapStarted;
      reader.readMessage(value,proto.bragi.Dota2MapStarted.deserializeBinaryFromReader);
      msg.setMapStarted(value);
      break;
    case 11:
      var value = new proto.bragi.Dota2MapEnded;
      reader.readMessage(value,proto.bragi.Dota2MapEnded.deserializeBinaryFromReader);
      msg.setMapEnded(value);
      break;
    case 12:
      var value = new proto.bragi.Dota2MapPaused;
      reader.readMessage(value,proto.bragi.Dota2MapPaused.deserializeBinaryFromReader);
      msg.setMapPaused(value);
      break;
    case 13:
      var value = new proto.bragi.Dota2MapResumed;
      reader.readMessage(value,proto.bragi.Dota2MapResumed.deserializeBinaryFromReader);
      msg.setMapResumed(value);
      break;
    case 14:
      var value = new proto.bragi.Dota2HeroKill;
      reader.readMessage(value,proto.bragi.Dota2HeroKill.deserializeBinaryFromReader);
      msg.setHeroKill(value);
      break;
    case 15:
      var value = new proto.bragi.Dota2HeroDeathByEnvironment;
      reader.readMessage(value,proto.bragi.Dota2HeroDeathByEnvironment.deserializeBinaryFromReader);
      msg.setHeroDeathByEnvironment(value);
      break;
    case 16:
      var value = new proto.bragi.Dota2TowerDestroyed;
      reader.readMessage(value,proto.bragi.Dota2TowerDestroyed.deserializeBinaryFromReader);
      msg.setTowerDestroyed(value);
      break;
    case 17:
      var value = new proto.bragi.Dota2BarracksDestroyed;
      reader.readMessage(value,proto.bragi.Dota2BarracksDestroyed.deserializeBinaryFromReader);
      msg.setBarracksDestroyed(value);
      break;
    case 18:
      var value = new proto.bragi.Dota2AncientDestroyed;
      reader.readMessage(value,proto.bragi.Dota2AncientDestroyed.deserializeBinaryFromReader);
      msg.setAncientDestroyed(value);
      break;
    case 19:
      var value = new proto.bragi.Dota2MegaCreeps;
      reader.readMessage(value,proto.bragi.Dota2MegaCreeps.deserializeBinaryFromReader);
      msg.setMegaCreeps(value);
      break;
    case 20:
      var value = new proto.bragi.Dota2RoshanKilled;
      reader.readMessage(value,proto.bragi.Dota2RoshanKilled.deserializeBinaryFromReader);
      msg.setRoshanKilled(value);
      break;
    case 21:
      var value = new proto.bragi.Dota2RoshanRespawned;
      reader.readMessage(value,proto.bragi.Dota2RoshanRespawned.deserializeBinaryFromReader);
      msg.setRoshanRespawned(value);
      break;
    case 22:
      var value = new proto.bragi.Dota2AegisPickedUp;
      reader.readMessage(value,proto.bragi.Dota2AegisPickedUp.deserializeBinaryFromReader);
      msg.setAegisPickedUp(value);
      break;
    case 23:
      var value = new proto.bragi.Dota2AegisLost;
      reader.readMessage(value,proto.bragi.Dota2AegisLost.deserializeBinaryFromReader);
      msg.setAegisLost(value);
      break;
    case 24:
      var value = new proto.bragi.Dota2Buyback;
      reader.readMessage(value,proto.bragi.Dota2Buyback.deserializeBinaryFromReader);
      msg.setBuyback(value);
      break;
    case 25:
      var value = new proto.bragi.Dota2DayNightChanged;
      reader.readMessage(value,proto.bragi.Dota2DayNightChanged.deserializeBinaryFromReader);
      msg.setDayNightChanged(value);
      break;
    case 26:
      var value = new proto.bragi.Dota2Multikill;
      reader.readMessage(value,proto.bragi.Dota2Multikill.deserializeBinaryFromReader);
      msg.setMultikill(value);
      break;
    case 27:
      var value = new proto.bragi.Dota2Killstreak;
      reader.readMessage(value,proto.bragi.Dota2Killstreak.deserializeBinaryFromReader);
      msg.setKillstreak(value);
      break;
    case 28:
      var value = new proto.bragi.Dota2TormentorKilled;
      reader.readMessage(value,proto.bragi.Dota2TormentorKilled.deserializeBinaryFromReader);
      msg.setTormentorKilled(value);
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
proto.bragi.Dota2Event.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2Event.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2Event} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2Event.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMapId();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getMapStarted();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.bragi.Dota2MapStarted.serializeBinaryToWriter
    );
  }
  f = message.getMapEnded();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.bragi.Dota2MapEnded.serializeBinaryToWriter
    );
  }
  f = message.getMapPaused();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.bragi.Dota2MapPaused.serializeBinaryToWriter
    );
  }
  f = message.getMapResumed();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.bragi.Dota2MapResumed.serializeBinaryToWriter
    );
  }
  f = message.getHeroKill();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.bragi.Dota2HeroKill.serializeBinaryToWriter
    );
  }
  f = message.getHeroDeathByEnvironment();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.bragi.Dota2HeroDeathByEnvironment.serializeBinaryToWriter
    );
  }
  f = message.getTowerDestroyed();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.bragi.Dota2TowerDestroyed.serializeBinaryToWriter
    );
  }
  f = message.getBarracksDestroyed();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.bragi.Dota2BarracksDestroyed.serializeBinaryToWriter
    );
  }
  f = message.getAncientDestroyed();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.bragi.Dota2AncientDestroyed.serializeBinaryToWriter
    );
  }
  f = message.getMegaCreeps();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.bragi.Dota2MegaCreeps.serializeBinaryToWriter
    );
  }
  f = message.getRoshanKilled();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.bragi.Dota2RoshanKilled.serializeBinaryToWriter
    );
  }
  f = message.getRoshanRespawned();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.bragi.Dota2RoshanRespawned.serializeBinaryToWriter
    );
  }
  f = message.getAegisPickedUp();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.bragi.Dota2AegisPickedUp.serializeBinaryToWriter
    );
  }
  f = message.getAegisLost();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.bragi.Dota2AegisLost.serializeBinaryToWriter
    );
  }
  f = message.getBuyback();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.bragi.Dota2Buyback.serializeBinaryToWriter
    );
  }
  f = message.getDayNightChanged();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto.bragi.Dota2DayNightChanged.serializeBinaryToWriter
    );
  }
  f = message.getMultikill();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto.bragi.Dota2Multikill.serializeBinaryToWriter
    );
  }
  f = message.getKillstreak();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto.bragi.Dota2Killstreak.serializeBinaryToWriter
    );
  }
  f = message.getTormentorKilled();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      proto.bragi.Dota2TormentorKilled.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp timestamp = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bragi.Dota2Event.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bragi.Dota2Event} returns this
*/
proto.bragi.Dota2Event.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2Event} returns this
 */
proto.bragi.Dota2Event.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2Event.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 map_id = 2;
 * @return {number}
 */
proto.bragi.Dota2Event.prototype.getMapId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2Event} returns this
 */
proto.bragi.Dota2Event.prototype.setMapId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 game_time = 3;
 * @return {number}
 */
proto.bragi.Dota2Event.prototype.getGameTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2Event} returns this
 */
proto.bragi.Dota2Event.prototype.setGameTime = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.Dota2Event} returns this
 */
proto.bragi.Dota2Event.prototype.clearGameTime = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2Event.prototype.hasGameTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Dota2MapStarted map_started = 10;
 * @return {?proto.bragi.Dota2MapStarted}
 */
proto.bragi.Dota2Event.prototype.getMapStarted = function() {
  return /** @type{?proto.bragi.Dota2MapStarted} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2MapStarted, 10));
};


/**
 * @param {?proto.bragi.Dota2MapStarted|undefined} value
 * @return {!proto.bragi.Dota2Event} returns this
*/
proto.bragi.Dota2Event.prototype.setMapStarted = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.bragi.Dota2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2Event} returns this
 */
proto.bragi.Dota2Event.prototype.clearMapStarted = function() {
  return this.setMapStarted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2Event.prototype.hasMapStarted = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Dota2MapEnded map_ended = 11;
 * @return {?proto.bragi.Dota2MapEnded}
 */
proto.bragi.Dota2Event.prototype.getMapEnded = function() {
  return /** @type{?proto.bragi.Dota2MapEnded} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2MapEnded, 11));
};


/**
 * @param {?proto.bragi.Dota2MapEnded|undefined} value
 * @return {!proto.bragi.Dota2Event} returns this
*/
proto.bragi.Dota2Event.prototype.setMapEnded = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.bragi.Dota2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2Event} returns this
 */
proto.bragi.Dota2Event.prototype.clearMapEnded = function() {
  return this.setMapEnded(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2Event.prototype.hasMapEnded = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Dota2MapPaused map_paused = 12;
 * @return {?proto.bragi.Dota2MapPaused}
 */
proto.bragi.Dota2Event.prototype.getMapPaused = function() {
  return /** @type{?proto.bragi.Dota2MapPaused} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2MapPaused, 12));
};


/**
 * @param {?proto.bragi.Dota2MapPaused|undefined} value
 * @return {!proto.bragi.Dota2Event} returns this
*/
proto.bragi.Dota2Event.prototype.setMapPaused = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.bragi.Dota2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2Event} returns this
 */
proto.bragi.Dota2Event.prototype.clearMapPaused = function() {
  return this.setMapPaused(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2Event.prototype.hasMapPaused = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional Dota2MapResumed map_resumed = 13;
 * @return {?proto.bragi.Dota2MapResumed}
 */
proto.bragi.Dota2Event.prototype.getMapResumed = function() {
  return /** @type{?proto.bragi.Dota2MapResumed} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2MapResumed, 13));
};


/**
 * @param {?proto.bragi.Dota2MapResumed|undefined} value
 * @return {!proto.bragi.Dota2Event} returns this
*/
proto.bragi.Dota2Event.prototype.setMapResumed = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.bragi.Dota2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2Event} returns this
 */
proto.bragi.Dota2Event.prototype.clearMapResumed = function() {
  return this.setMapResumed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2Event.prototype.hasMapResumed = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional Dota2HeroKill hero_kill = 14;
 * @return {?proto.bragi.Dota2HeroKill}
 */
proto.bragi.Dota2Event.prototype.getHeroKill = function() {
  return /** @type{?proto.bragi.Dota2HeroKill} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2HeroKill, 14));
};


/**
 * @param {?proto.bragi.Dota2HeroKill|undefined} value
 * @return {!proto.bragi.Dota2Event} returns this
*/
proto.bragi.Dota2Event.prototype.setHeroKill = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.bragi.Dota2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2Event} returns this
 */
proto.bragi.Dota2Event.prototype.clearHeroKill = function() {
  return this.setHeroKill(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2Event.prototype.hasHeroKill = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional Dota2HeroDeathByEnvironment hero_death_by_environment = 15;
 * @return {?proto.bragi.Dota2HeroDeathByEnvironment}
 */
proto.bragi.Dota2Event.prototype.getHeroDeathByEnvironment = function() {
  return /** @type{?proto.bragi.Dota2HeroDeathByEnvironment} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2HeroDeathByEnvironment, 15));
};


/**
 * @param {?proto.bragi.Dota2HeroDeathByEnvironment|undefined} value
 * @return {!proto.bragi.Dota2Event} returns this
*/
proto.bragi.Dota2Event.prototype.setHeroDeathByEnvironment = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.bragi.Dota2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2Event} returns this
 */
proto.bragi.Dota2Event.prototype.clearHeroDeathByEnvironment = function() {
  return this.setHeroDeathByEnvironment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2Event.prototype.hasHeroDeathByEnvironment = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional Dota2TowerDestroyed tower_destroyed = 16;
 * @return {?proto.bragi.Dota2TowerDestroyed}
 */
proto.bragi.Dota2Event.prototype.getTowerDestroyed = function() {
  return /** @type{?proto.bragi.Dota2TowerDestroyed} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2TowerDestroyed, 16));
};


/**
 * @param {?proto.bragi.Dota2TowerDestroyed|undefined} value
 * @return {!proto.bragi.Dota2Event} returns this
*/
proto.bragi.Dota2Event.prototype.setTowerDestroyed = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.bragi.Dota2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2Event} returns this
 */
proto.bragi.Dota2Event.prototype.clearTowerDestroyed = function() {
  return this.setTowerDestroyed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2Event.prototype.hasTowerDestroyed = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional Dota2BarracksDestroyed barracks_destroyed = 17;
 * @return {?proto.bragi.Dota2BarracksDestroyed}
 */
proto.bragi.Dota2Event.prototype.getBarracksDestroyed = function() {
  return /** @type{?proto.bragi.Dota2BarracksDestroyed} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2BarracksDestroyed, 17));
};


/**
 * @param {?proto.bragi.Dota2BarracksDestroyed|undefined} value
 * @return {!proto.bragi.Dota2Event} returns this
*/
proto.bragi.Dota2Event.prototype.setBarracksDestroyed = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.bragi.Dota2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2Event} returns this
 */
proto.bragi.Dota2Event.prototype.clearBarracksDestroyed = function() {
  return this.setBarracksDestroyed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2Event.prototype.hasBarracksDestroyed = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional Dota2AncientDestroyed ancient_destroyed = 18;
 * @return {?proto.bragi.Dota2AncientDestroyed}
 */
proto.bragi.Dota2Event.prototype.getAncientDestroyed = function() {
  return /** @type{?proto.bragi.Dota2AncientDestroyed} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2AncientDestroyed, 18));
};


/**
 * @param {?proto.bragi.Dota2AncientDestroyed|undefined} value
 * @return {!proto.bragi.Dota2Event} returns this
*/
proto.bragi.Dota2Event.prototype.setAncientDestroyed = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.bragi.Dota2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2Event} returns this
 */
proto.bragi.Dota2Event.prototype.clearAncientDestroyed = function() {
  return this.setAncientDestroyed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2Event.prototype.hasAncientDestroyed = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional Dota2MegaCreeps mega_creeps = 19;
 * @return {?proto.bragi.Dota2MegaCreeps}
 */
proto.bragi.Dota2Event.prototype.getMegaCreeps = function() {
  return /** @type{?proto.bragi.Dota2MegaCreeps} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2MegaCreeps, 19));
};


/**
 * @param {?proto.bragi.Dota2MegaCreeps|undefined} value
 * @return {!proto.bragi.Dota2Event} returns this
*/
proto.bragi.Dota2Event.prototype.setMegaCreeps = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.bragi.Dota2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2Event} returns this
 */
proto.bragi.Dota2Event.prototype.clearMegaCreeps = function() {
  return this.setMegaCreeps(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2Event.prototype.hasMegaCreeps = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional Dota2RoshanKilled roshan_killed = 20;
 * @return {?proto.bragi.Dota2RoshanKilled}
 */
proto.bragi.Dota2Event.prototype.getRoshanKilled = function() {
  return /** @type{?proto.bragi.Dota2RoshanKilled} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2RoshanKilled, 20));
};


/**
 * @param {?proto.bragi.Dota2RoshanKilled|undefined} value
 * @return {!proto.bragi.Dota2Event} returns this
*/
proto.bragi.Dota2Event.prototype.setRoshanKilled = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.bragi.Dota2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2Event} returns this
 */
proto.bragi.Dota2Event.prototype.clearRoshanKilled = function() {
  return this.setRoshanKilled(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2Event.prototype.hasRoshanKilled = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional Dota2RoshanRespawned roshan_respawned = 21;
 * @return {?proto.bragi.Dota2RoshanRespawned}
 */
proto.bragi.Dota2Event.prototype.getRoshanRespawned = function() {
  return /** @type{?proto.bragi.Dota2RoshanRespawned} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2RoshanRespawned, 21));
};


/**
 * @param {?proto.bragi.Dota2RoshanRespawned|undefined} value
 * @return {!proto.bragi.Dota2Event} returns this
*/
proto.bragi.Dota2Event.prototype.setRoshanRespawned = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.bragi.Dota2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2Event} returns this
 */
proto.bragi.Dota2Event.prototype.clearRoshanRespawned = function() {
  return this.setRoshanRespawned(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2Event.prototype.hasRoshanRespawned = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional Dota2AegisPickedUp aegis_picked_up = 22;
 * @return {?proto.bragi.Dota2AegisPickedUp}
 */
proto.bragi.Dota2Event.prototype.getAegisPickedUp = function() {
  return /** @type{?proto.bragi.Dota2AegisPickedUp} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2AegisPickedUp, 22));
};


/**
 * @param {?proto.bragi.Dota2AegisPickedUp|undefined} value
 * @return {!proto.bragi.Dota2Event} returns this
*/
proto.bragi.Dota2Event.prototype.setAegisPickedUp = function(value) {
  return jspb.Message.setOneofWrapperField(this, 22, proto.bragi.Dota2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2Event} returns this
 */
proto.bragi.Dota2Event.prototype.clearAegisPickedUp = function() {
  return this.setAegisPickedUp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2Event.prototype.hasAegisPickedUp = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional Dota2AegisLost aegis_lost = 23;
 * @return {?proto.bragi.Dota2AegisLost}
 */
proto.bragi.Dota2Event.prototype.getAegisLost = function() {
  return /** @type{?proto.bragi.Dota2AegisLost} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2AegisLost, 23));
};


/**
 * @param {?proto.bragi.Dota2AegisLost|undefined} value
 * @return {!proto.bragi.Dota2Event} returns this
*/
proto.bragi.Dota2Event.prototype.setAegisLost = function(value) {
  return jspb.Message.setOneofWrapperField(this, 23, proto.bragi.Dota2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2Event} returns this
 */
proto.bragi.Dota2Event.prototype.clearAegisLost = function() {
  return this.setAegisLost(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2Event.prototype.hasAegisLost = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional Dota2Buyback buyback = 24;
 * @return {?proto.bragi.Dota2Buyback}
 */
proto.bragi.Dota2Event.prototype.getBuyback = function() {
  return /** @type{?proto.bragi.Dota2Buyback} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2Buyback, 24));
};


/**
 * @param {?proto.bragi.Dota2Buyback|undefined} value
 * @return {!proto.bragi.Dota2Event} returns this
*/
proto.bragi.Dota2Event.prototype.setBuyback = function(value) {
  return jspb.Message.setOneofWrapperField(this, 24, proto.bragi.Dota2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2Event} returns this
 */
proto.bragi.Dota2Event.prototype.clearBuyback = function() {
  return this.setBuyback(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2Event.prototype.hasBuyback = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional Dota2DayNightChanged day_night_changed = 25;
 * @return {?proto.bragi.Dota2DayNightChanged}
 */
proto.bragi.Dota2Event.prototype.getDayNightChanged = function() {
  return /** @type{?proto.bragi.Dota2DayNightChanged} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2DayNightChanged, 25));
};


/**
 * @param {?proto.bragi.Dota2DayNightChanged|undefined} value
 * @return {!proto.bragi.Dota2Event} returns this
*/
proto.bragi.Dota2Event.prototype.setDayNightChanged = function(value) {
  return jspb.Message.setOneofWrapperField(this, 25, proto.bragi.Dota2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2Event} returns this
 */
proto.bragi.Dota2Event.prototype.clearDayNightChanged = function() {
  return this.setDayNightChanged(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2Event.prototype.hasDayNightChanged = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional Dota2Multikill multikill = 26;
 * @return {?proto.bragi.Dota2Multikill}
 */
proto.bragi.Dota2Event.prototype.getMultikill = function() {
  return /** @type{?proto.bragi.Dota2Multikill} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2Multikill, 26));
};


/**
 * @param {?proto.bragi.Dota2Multikill|undefined} value
 * @return {!proto.bragi.Dota2Event} returns this
*/
proto.bragi.Dota2Event.prototype.setMultikill = function(value) {
  return jspb.Message.setOneofWrapperField(this, 26, proto.bragi.Dota2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2Event} returns this
 */
proto.bragi.Dota2Event.prototype.clearMultikill = function() {
  return this.setMultikill(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2Event.prototype.hasMultikill = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional Dota2Killstreak killstreak = 27;
 * @return {?proto.bragi.Dota2Killstreak}
 */
proto.bragi.Dota2Event.prototype.getKillstreak = function() {
  return /** @type{?proto.bragi.Dota2Killstreak} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2Killstreak, 27));
};


/**
 * @param {?proto.bragi.Dota2Killstreak|undefined} value
 * @return {!proto.bragi.Dota2Event} returns this
*/
proto.bragi.Dota2Event.prototype.setKillstreak = function(value) {
  return jspb.Message.setOneofWrapperField(this, 27, proto.bragi.Dota2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2Event} returns this
 */
proto.bragi.Dota2Event.prototype.clearKillstreak = function() {
  return this.setKillstreak(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2Event.prototype.hasKillstreak = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional Dota2TormentorKilled tormentor_killed = 28;
 * @return {?proto.bragi.Dota2TormentorKilled}
 */
proto.bragi.Dota2Event.prototype.getTormentorKilled = function() {
  return /** @type{?proto.bragi.Dota2TormentorKilled} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2TormentorKilled, 28));
};


/**
 * @param {?proto.bragi.Dota2TormentorKilled|undefined} value
 * @return {!proto.bragi.Dota2Event} returns this
*/
proto.bragi.Dota2Event.prototype.setTormentorKilled = function(value) {
  return jspb.Message.setOneofWrapperField(this, 28, proto.bragi.Dota2Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2Event} returns this
 */
proto.bragi.Dota2Event.prototype.clearTormentorKilled = function() {
  return this.setTormentorKilled(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2Event.prototype.hasTormentorKilled = function() {
  return jspb.Message.getField(this, 28) != null;
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
proto.bragi.Dota2EventTeam.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2EventTeam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2EventTeam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2EventTeam.toObject = function(includeInstance, msg) {
  var f, obj = {
teamUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
faction: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.bragi.Dota2EventTeam}
 */
proto.bragi.Dota2EventTeam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2EventTeam;
  return proto.bragi.Dota2EventTeam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2EventTeam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2EventTeam}
 */
proto.bragi.Dota2EventTeam.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.bragi.Dota2Faction} */ (reader.readEnum());
      msg.setFaction(value);
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
proto.bragi.Dota2EventTeam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2EventTeam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2EventTeam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2EventTeam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFaction();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string team_urn = 1;
 * @return {string}
 */
proto.bragi.Dota2EventTeam.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.Dota2EventTeam} returns this
 */
proto.bragi.Dota2EventTeam.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Dota2Faction faction = 2;
 * @return {!proto.bragi.Dota2Faction}
 */
proto.bragi.Dota2EventTeam.prototype.getFaction = function() {
  return /** @type {!proto.bragi.Dota2Faction} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bragi.Dota2Faction} value
 * @return {!proto.bragi.Dota2EventTeam} returns this
 */
proto.bragi.Dota2EventTeam.prototype.setFaction = function(value) {
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
proto.bragi.Dota2EventPlayer.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2EventPlayer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2EventPlayer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2EventPlayer.toObject = function(includeInstance, msg) {
  var f, obj = {
playerUrn: jspb.Message.getFieldWithDefault(msg, 1, ""),
teamUrn: jspb.Message.getFieldWithDefault(msg, 2, ""),
faction: jspb.Message.getFieldWithDefault(msg, 3, 0),
heroId: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.bragi.Dota2EventPlayer}
 */
proto.bragi.Dota2EventPlayer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2EventPlayer;
  return proto.bragi.Dota2EventPlayer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2EventPlayer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2EventPlayer}
 */
proto.bragi.Dota2EventPlayer.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.bragi.Dota2Faction} */ (reader.readEnum());
      msg.setFaction(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHeroId(value);
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
proto.bragi.Dota2EventPlayer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2EventPlayer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2EventPlayer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2EventPlayer.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getFaction();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getHeroId();
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
proto.bragi.Dota2EventPlayer.prototype.getPlayerUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.Dota2EventPlayer} returns this
 */
proto.bragi.Dota2EventPlayer.prototype.setPlayerUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string team_urn = 2;
 * @return {string}
 */
proto.bragi.Dota2EventPlayer.prototype.getTeamUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.Dota2EventPlayer} returns this
 */
proto.bragi.Dota2EventPlayer.prototype.setTeamUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Dota2Faction faction = 3;
 * @return {!proto.bragi.Dota2Faction}
 */
proto.bragi.Dota2EventPlayer.prototype.getFaction = function() {
  return /** @type {!proto.bragi.Dota2Faction} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.bragi.Dota2Faction} value
 * @return {!proto.bragi.Dota2EventPlayer} returns this
 */
proto.bragi.Dota2EventPlayer.prototype.setFaction = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional uint32 hero_id = 4;
 * @return {number}
 */
proto.bragi.Dota2EventPlayer.prototype.getHeroId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2EventPlayer} returns this
 */
proto.bragi.Dota2EventPlayer.prototype.setHeroId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
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
proto.bragi.Dota2MapStarted.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2MapStarted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2MapStarted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2MapStarted.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.bragi.Dota2MapStarted}
 */
proto.bragi.Dota2MapStarted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2MapStarted;
  return proto.bragi.Dota2MapStarted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2MapStarted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2MapStarted}
 */
proto.bragi.Dota2MapStarted.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.bragi.Dota2MapStarted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2MapStarted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2MapStarted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2MapStarted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.bragi.Dota2MapEnded.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2MapEnded.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2MapEnded} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2MapEnded.toObject = function(includeInstance, msg) {
  var f, obj = {
winner: (f = msg.getWinner()) && proto.bragi.Dota2EventTeam.toObject(includeInstance, f)
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
 * @return {!proto.bragi.Dota2MapEnded}
 */
proto.bragi.Dota2MapEnded.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2MapEnded;
  return proto.bragi.Dota2MapEnded.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2MapEnded} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2MapEnded}
 */
proto.bragi.Dota2MapEnded.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Dota2EventTeam;
      reader.readMessage(value,proto.bragi.Dota2EventTeam.deserializeBinaryFromReader);
      msg.setWinner(value);
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
proto.bragi.Dota2MapEnded.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2MapEnded.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2MapEnded} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2MapEnded.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWinner();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.Dota2EventTeam.serializeBinaryToWriter
    );
  }
};


/**
 * optional Dota2EventTeam winner = 1;
 * @return {?proto.bragi.Dota2EventTeam}
 */
proto.bragi.Dota2MapEnded.prototype.getWinner = function() {
  return /** @type{?proto.bragi.Dota2EventTeam} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2EventTeam, 1));
};


/**
 * @param {?proto.bragi.Dota2EventTeam|undefined} value
 * @return {!proto.bragi.Dota2MapEnded} returns this
*/
proto.bragi.Dota2MapEnded.prototype.setWinner = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2MapEnded} returns this
 */
proto.bragi.Dota2MapEnded.prototype.clearWinner = function() {
  return this.setWinner(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2MapEnded.prototype.hasWinner = function() {
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
proto.bragi.Dota2MapPaused.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2MapPaused.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2MapPaused} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2MapPaused.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.bragi.Dota2MapPaused}
 */
proto.bragi.Dota2MapPaused.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2MapPaused;
  return proto.bragi.Dota2MapPaused.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2MapPaused} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2MapPaused}
 */
proto.bragi.Dota2MapPaused.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.bragi.Dota2MapPaused.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2MapPaused.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2MapPaused} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2MapPaused.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.bragi.Dota2MapResumed.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2MapResumed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2MapResumed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2MapResumed.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.bragi.Dota2MapResumed}
 */
proto.bragi.Dota2MapResumed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2MapResumed;
  return proto.bragi.Dota2MapResumed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2MapResumed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2MapResumed}
 */
proto.bragi.Dota2MapResumed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.bragi.Dota2MapResumed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2MapResumed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2MapResumed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2MapResumed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.bragi.Dota2HeroKill.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2HeroKill.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2HeroKill} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2HeroKill.toObject = function(includeInstance, msg) {
  var f, obj = {
killer: (f = msg.getKiller()) && proto.bragi.Dota2EventPlayer.toObject(includeInstance, f),
victim: (f = msg.getVictim()) && proto.bragi.Dota2EventPlayer.toObject(includeInstance, f),
firstBlood: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
killerStreak: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.bragi.Dota2HeroKill}
 */
proto.bragi.Dota2HeroKill.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2HeroKill;
  return proto.bragi.Dota2HeroKill.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2HeroKill} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2HeroKill}
 */
proto.bragi.Dota2HeroKill.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Dota2EventPlayer;
      reader.readMessage(value,proto.bragi.Dota2EventPlayer.deserializeBinaryFromReader);
      msg.setKiller(value);
      break;
    case 2:
      var value = new proto.bragi.Dota2EventPlayer;
      reader.readMessage(value,proto.bragi.Dota2EventPlayer.deserializeBinaryFromReader);
      msg.setVictim(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFirstBlood(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setKillerStreak(value);
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
proto.bragi.Dota2HeroKill.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2HeroKill.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2HeroKill} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2HeroKill.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKiller();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.Dota2EventPlayer.serializeBinaryToWriter
    );
  }
  f = message.getVictim();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.Dota2EventPlayer.serializeBinaryToWriter
    );
  }
  f = message.getFirstBlood();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getKillerStreak();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional Dota2EventPlayer killer = 1;
 * @return {?proto.bragi.Dota2EventPlayer}
 */
proto.bragi.Dota2HeroKill.prototype.getKiller = function() {
  return /** @type{?proto.bragi.Dota2EventPlayer} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2EventPlayer, 1));
};


/**
 * @param {?proto.bragi.Dota2EventPlayer|undefined} value
 * @return {!proto.bragi.Dota2HeroKill} returns this
*/
proto.bragi.Dota2HeroKill.prototype.setKiller = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2HeroKill} returns this
 */
proto.bragi.Dota2HeroKill.prototype.clearKiller = function() {
  return this.setKiller(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2HeroKill.prototype.hasKiller = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Dota2EventPlayer victim = 2;
 * @return {?proto.bragi.Dota2EventPlayer}
 */
proto.bragi.Dota2HeroKill.prototype.getVictim = function() {
  return /** @type{?proto.bragi.Dota2EventPlayer} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2EventPlayer, 2));
};


/**
 * @param {?proto.bragi.Dota2EventPlayer|undefined} value
 * @return {!proto.bragi.Dota2HeroKill} returns this
*/
proto.bragi.Dota2HeroKill.prototype.setVictim = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2HeroKill} returns this
 */
proto.bragi.Dota2HeroKill.prototype.clearVictim = function() {
  return this.setVictim(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2HeroKill.prototype.hasVictim = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool first_blood = 3;
 * @return {boolean}
 */
proto.bragi.Dota2HeroKill.prototype.getFirstBlood = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.Dota2HeroKill} returns this
 */
proto.bragi.Dota2HeroKill.prototype.setFirstBlood = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional uint32 killer_streak = 4;
 * @return {number}
 */
proto.bragi.Dota2HeroKill.prototype.getKillerStreak = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2HeroKill} returns this
 */
proto.bragi.Dota2HeroKill.prototype.setKillerStreak = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
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
proto.bragi.Dota2HeroDeathByEnvironment.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2HeroDeathByEnvironment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2HeroDeathByEnvironment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2HeroDeathByEnvironment.toObject = function(includeInstance, msg) {
  var f, obj = {
victim: (f = msg.getVictim()) && proto.bragi.Dota2EventPlayer.toObject(includeInstance, f),
killerKind: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.bragi.Dota2HeroDeathByEnvironment}
 */
proto.bragi.Dota2HeroDeathByEnvironment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2HeroDeathByEnvironment;
  return proto.bragi.Dota2HeroDeathByEnvironment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2HeroDeathByEnvironment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2HeroDeathByEnvironment}
 */
proto.bragi.Dota2HeroDeathByEnvironment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Dota2EventPlayer;
      reader.readMessage(value,proto.bragi.Dota2EventPlayer.deserializeBinaryFromReader);
      msg.setVictim(value);
      break;
    case 2:
      var value = /** @type {!proto.bragi.Dota2EnvironmentKillerKind} */ (reader.readEnum());
      msg.setKillerKind(value);
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
proto.bragi.Dota2HeroDeathByEnvironment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2HeroDeathByEnvironment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2HeroDeathByEnvironment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2HeroDeathByEnvironment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVictim();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.Dota2EventPlayer.serializeBinaryToWriter
    );
  }
  f = message.getKillerKind();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional Dota2EventPlayer victim = 1;
 * @return {?proto.bragi.Dota2EventPlayer}
 */
proto.bragi.Dota2HeroDeathByEnvironment.prototype.getVictim = function() {
  return /** @type{?proto.bragi.Dota2EventPlayer} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2EventPlayer, 1));
};


/**
 * @param {?proto.bragi.Dota2EventPlayer|undefined} value
 * @return {!proto.bragi.Dota2HeroDeathByEnvironment} returns this
*/
proto.bragi.Dota2HeroDeathByEnvironment.prototype.setVictim = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2HeroDeathByEnvironment} returns this
 */
proto.bragi.Dota2HeroDeathByEnvironment.prototype.clearVictim = function() {
  return this.setVictim(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2HeroDeathByEnvironment.prototype.hasVictim = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Dota2EnvironmentKillerKind killer_kind = 2;
 * @return {!proto.bragi.Dota2EnvironmentKillerKind}
 */
proto.bragi.Dota2HeroDeathByEnvironment.prototype.getKillerKind = function() {
  return /** @type {!proto.bragi.Dota2EnvironmentKillerKind} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bragi.Dota2EnvironmentKillerKind} value
 * @return {!proto.bragi.Dota2HeroDeathByEnvironment} returns this
 */
proto.bragi.Dota2HeroDeathByEnvironment.prototype.setKillerKind = function(value) {
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
proto.bragi.Dota2TowerDestroyed.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2TowerDestroyed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2TowerDestroyed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2TowerDestroyed.toObject = function(includeInstance, msg) {
  var f, obj = {
team: (f = msg.getTeam()) && proto.bragi.Dota2EventTeam.toObject(includeInstance, f),
attributedTeam: (f = msg.getAttributedTeam()) && proto.bragi.Dota2EventTeam.toObject(includeInstance, f),
lane: jspb.Message.getFieldWithDefault(msg, 3, 0),
tier: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.bragi.Dota2TowerDestroyed}
 */
proto.bragi.Dota2TowerDestroyed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2TowerDestroyed;
  return proto.bragi.Dota2TowerDestroyed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2TowerDestroyed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2TowerDestroyed}
 */
proto.bragi.Dota2TowerDestroyed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Dota2EventTeam;
      reader.readMessage(value,proto.bragi.Dota2EventTeam.deserializeBinaryFromReader);
      msg.setTeam(value);
      break;
    case 2:
      var value = new proto.bragi.Dota2EventTeam;
      reader.readMessage(value,proto.bragi.Dota2EventTeam.deserializeBinaryFromReader);
      msg.setAttributedTeam(value);
      break;
    case 3:
      var value = /** @type {!proto.bragi.Dota2Lane} */ (reader.readEnum());
      msg.setLane(value);
      break;
    case 4:
      var value = /** @type {!proto.bragi.Dota2TowerTier} */ (reader.readEnum());
      msg.setTier(value);
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
proto.bragi.Dota2TowerDestroyed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2TowerDestroyed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2TowerDestroyed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2TowerDestroyed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeam();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.Dota2EventTeam.serializeBinaryToWriter
    );
  }
  f = message.getAttributedTeam();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.Dota2EventTeam.serializeBinaryToWriter
    );
  }
  f = message.getLane();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getTier();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional Dota2EventTeam team = 1;
 * @return {?proto.bragi.Dota2EventTeam}
 */
proto.bragi.Dota2TowerDestroyed.prototype.getTeam = function() {
  return /** @type{?proto.bragi.Dota2EventTeam} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2EventTeam, 1));
};


/**
 * @param {?proto.bragi.Dota2EventTeam|undefined} value
 * @return {!proto.bragi.Dota2TowerDestroyed} returns this
*/
proto.bragi.Dota2TowerDestroyed.prototype.setTeam = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2TowerDestroyed} returns this
 */
proto.bragi.Dota2TowerDestroyed.prototype.clearTeam = function() {
  return this.setTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2TowerDestroyed.prototype.hasTeam = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Dota2EventTeam attributed_team = 2;
 * @return {?proto.bragi.Dota2EventTeam}
 */
proto.bragi.Dota2TowerDestroyed.prototype.getAttributedTeam = function() {
  return /** @type{?proto.bragi.Dota2EventTeam} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2EventTeam, 2));
};


/**
 * @param {?proto.bragi.Dota2EventTeam|undefined} value
 * @return {!proto.bragi.Dota2TowerDestroyed} returns this
*/
proto.bragi.Dota2TowerDestroyed.prototype.setAttributedTeam = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2TowerDestroyed} returns this
 */
proto.bragi.Dota2TowerDestroyed.prototype.clearAttributedTeam = function() {
  return this.setAttributedTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2TowerDestroyed.prototype.hasAttributedTeam = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Dota2Lane lane = 3;
 * @return {!proto.bragi.Dota2Lane}
 */
proto.bragi.Dota2TowerDestroyed.prototype.getLane = function() {
  return /** @type {!proto.bragi.Dota2Lane} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.bragi.Dota2Lane} value
 * @return {!proto.bragi.Dota2TowerDestroyed} returns this
 */
proto.bragi.Dota2TowerDestroyed.prototype.setLane = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional Dota2TowerTier tier = 4;
 * @return {!proto.bragi.Dota2TowerTier}
 */
proto.bragi.Dota2TowerDestroyed.prototype.getTier = function() {
  return /** @type {!proto.bragi.Dota2TowerTier} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.bragi.Dota2TowerTier} value
 * @return {!proto.bragi.Dota2TowerDestroyed} returns this
 */
proto.bragi.Dota2TowerDestroyed.prototype.setTier = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
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
proto.bragi.Dota2BarracksDestroyed.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2BarracksDestroyed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2BarracksDestroyed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2BarracksDestroyed.toObject = function(includeInstance, msg) {
  var f, obj = {
team: (f = msg.getTeam()) && proto.bragi.Dota2EventTeam.toObject(includeInstance, f),
attributedTeam: (f = msg.getAttributedTeam()) && proto.bragi.Dota2EventTeam.toObject(includeInstance, f),
lane: jspb.Message.getFieldWithDefault(msg, 3, 0),
type: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.bragi.Dota2BarracksDestroyed}
 */
proto.bragi.Dota2BarracksDestroyed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2BarracksDestroyed;
  return proto.bragi.Dota2BarracksDestroyed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2BarracksDestroyed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2BarracksDestroyed}
 */
proto.bragi.Dota2BarracksDestroyed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Dota2EventTeam;
      reader.readMessage(value,proto.bragi.Dota2EventTeam.deserializeBinaryFromReader);
      msg.setTeam(value);
      break;
    case 2:
      var value = new proto.bragi.Dota2EventTeam;
      reader.readMessage(value,proto.bragi.Dota2EventTeam.deserializeBinaryFromReader);
      msg.setAttributedTeam(value);
      break;
    case 3:
      var value = /** @type {!proto.bragi.Dota2Lane} */ (reader.readEnum());
      msg.setLane(value);
      break;
    case 4:
      var value = /** @type {!proto.bragi.Dota2BarrackType} */ (reader.readEnum());
      msg.setType(value);
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
proto.bragi.Dota2BarracksDestroyed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2BarracksDestroyed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2BarracksDestroyed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2BarracksDestroyed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeam();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.Dota2EventTeam.serializeBinaryToWriter
    );
  }
  f = message.getAttributedTeam();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.Dota2EventTeam.serializeBinaryToWriter
    );
  }
  f = message.getLane();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional Dota2EventTeam team = 1;
 * @return {?proto.bragi.Dota2EventTeam}
 */
proto.bragi.Dota2BarracksDestroyed.prototype.getTeam = function() {
  return /** @type{?proto.bragi.Dota2EventTeam} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2EventTeam, 1));
};


/**
 * @param {?proto.bragi.Dota2EventTeam|undefined} value
 * @return {!proto.bragi.Dota2BarracksDestroyed} returns this
*/
proto.bragi.Dota2BarracksDestroyed.prototype.setTeam = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2BarracksDestroyed} returns this
 */
proto.bragi.Dota2BarracksDestroyed.prototype.clearTeam = function() {
  return this.setTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2BarracksDestroyed.prototype.hasTeam = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Dota2EventTeam attributed_team = 2;
 * @return {?proto.bragi.Dota2EventTeam}
 */
proto.bragi.Dota2BarracksDestroyed.prototype.getAttributedTeam = function() {
  return /** @type{?proto.bragi.Dota2EventTeam} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2EventTeam, 2));
};


/**
 * @param {?proto.bragi.Dota2EventTeam|undefined} value
 * @return {!proto.bragi.Dota2BarracksDestroyed} returns this
*/
proto.bragi.Dota2BarracksDestroyed.prototype.setAttributedTeam = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2BarracksDestroyed} returns this
 */
proto.bragi.Dota2BarracksDestroyed.prototype.clearAttributedTeam = function() {
  return this.setAttributedTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2BarracksDestroyed.prototype.hasAttributedTeam = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Dota2Lane lane = 3;
 * @return {!proto.bragi.Dota2Lane}
 */
proto.bragi.Dota2BarracksDestroyed.prototype.getLane = function() {
  return /** @type {!proto.bragi.Dota2Lane} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.bragi.Dota2Lane} value
 * @return {!proto.bragi.Dota2BarracksDestroyed} returns this
 */
proto.bragi.Dota2BarracksDestroyed.prototype.setLane = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional Dota2BarrackType type = 4;
 * @return {!proto.bragi.Dota2BarrackType}
 */
proto.bragi.Dota2BarracksDestroyed.prototype.getType = function() {
  return /** @type {!proto.bragi.Dota2BarrackType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.bragi.Dota2BarrackType} value
 * @return {!proto.bragi.Dota2BarracksDestroyed} returns this
 */
proto.bragi.Dota2BarracksDestroyed.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
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
proto.bragi.Dota2AncientDestroyed.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2AncientDestroyed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2AncientDestroyed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2AncientDestroyed.toObject = function(includeInstance, msg) {
  var f, obj = {
team: (f = msg.getTeam()) && proto.bragi.Dota2EventTeam.toObject(includeInstance, f),
attributedTeam: (f = msg.getAttributedTeam()) && proto.bragi.Dota2EventTeam.toObject(includeInstance, f)
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
 * @return {!proto.bragi.Dota2AncientDestroyed}
 */
proto.bragi.Dota2AncientDestroyed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2AncientDestroyed;
  return proto.bragi.Dota2AncientDestroyed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2AncientDestroyed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2AncientDestroyed}
 */
proto.bragi.Dota2AncientDestroyed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Dota2EventTeam;
      reader.readMessage(value,proto.bragi.Dota2EventTeam.deserializeBinaryFromReader);
      msg.setTeam(value);
      break;
    case 2:
      var value = new proto.bragi.Dota2EventTeam;
      reader.readMessage(value,proto.bragi.Dota2EventTeam.deserializeBinaryFromReader);
      msg.setAttributedTeam(value);
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
proto.bragi.Dota2AncientDestroyed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2AncientDestroyed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2AncientDestroyed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2AncientDestroyed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeam();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.Dota2EventTeam.serializeBinaryToWriter
    );
  }
  f = message.getAttributedTeam();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.Dota2EventTeam.serializeBinaryToWriter
    );
  }
};


/**
 * optional Dota2EventTeam team = 1;
 * @return {?proto.bragi.Dota2EventTeam}
 */
proto.bragi.Dota2AncientDestroyed.prototype.getTeam = function() {
  return /** @type{?proto.bragi.Dota2EventTeam} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2EventTeam, 1));
};


/**
 * @param {?proto.bragi.Dota2EventTeam|undefined} value
 * @return {!proto.bragi.Dota2AncientDestroyed} returns this
*/
proto.bragi.Dota2AncientDestroyed.prototype.setTeam = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2AncientDestroyed} returns this
 */
proto.bragi.Dota2AncientDestroyed.prototype.clearTeam = function() {
  return this.setTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2AncientDestroyed.prototype.hasTeam = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Dota2EventTeam attributed_team = 2;
 * @return {?proto.bragi.Dota2EventTeam}
 */
proto.bragi.Dota2AncientDestroyed.prototype.getAttributedTeam = function() {
  return /** @type{?proto.bragi.Dota2EventTeam} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2EventTeam, 2));
};


/**
 * @param {?proto.bragi.Dota2EventTeam|undefined} value
 * @return {!proto.bragi.Dota2AncientDestroyed} returns this
*/
proto.bragi.Dota2AncientDestroyed.prototype.setAttributedTeam = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2AncientDestroyed} returns this
 */
proto.bragi.Dota2AncientDestroyed.prototype.clearAttributedTeam = function() {
  return this.setAttributedTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2AncientDestroyed.prototype.hasAttributedTeam = function() {
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
proto.bragi.Dota2MegaCreeps.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2MegaCreeps.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2MegaCreeps} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2MegaCreeps.toObject = function(includeInstance, msg) {
  var f, obj = {
team: (f = msg.getTeam()) && proto.bragi.Dota2EventTeam.toObject(includeInstance, f),
againstTeam: (f = msg.getAgainstTeam()) && proto.bragi.Dota2EventTeam.toObject(includeInstance, f)
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
 * @return {!proto.bragi.Dota2MegaCreeps}
 */
proto.bragi.Dota2MegaCreeps.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2MegaCreeps;
  return proto.bragi.Dota2MegaCreeps.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2MegaCreeps} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2MegaCreeps}
 */
proto.bragi.Dota2MegaCreeps.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Dota2EventTeam;
      reader.readMessage(value,proto.bragi.Dota2EventTeam.deserializeBinaryFromReader);
      msg.setTeam(value);
      break;
    case 2:
      var value = new proto.bragi.Dota2EventTeam;
      reader.readMessage(value,proto.bragi.Dota2EventTeam.deserializeBinaryFromReader);
      msg.setAgainstTeam(value);
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
proto.bragi.Dota2MegaCreeps.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2MegaCreeps.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2MegaCreeps} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2MegaCreeps.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeam();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.Dota2EventTeam.serializeBinaryToWriter
    );
  }
  f = message.getAgainstTeam();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.Dota2EventTeam.serializeBinaryToWriter
    );
  }
};


/**
 * optional Dota2EventTeam team = 1;
 * @return {?proto.bragi.Dota2EventTeam}
 */
proto.bragi.Dota2MegaCreeps.prototype.getTeam = function() {
  return /** @type{?proto.bragi.Dota2EventTeam} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2EventTeam, 1));
};


/**
 * @param {?proto.bragi.Dota2EventTeam|undefined} value
 * @return {!proto.bragi.Dota2MegaCreeps} returns this
*/
proto.bragi.Dota2MegaCreeps.prototype.setTeam = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2MegaCreeps} returns this
 */
proto.bragi.Dota2MegaCreeps.prototype.clearTeam = function() {
  return this.setTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2MegaCreeps.prototype.hasTeam = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Dota2EventTeam against_team = 2;
 * @return {?proto.bragi.Dota2EventTeam}
 */
proto.bragi.Dota2MegaCreeps.prototype.getAgainstTeam = function() {
  return /** @type{?proto.bragi.Dota2EventTeam} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2EventTeam, 2));
};


/**
 * @param {?proto.bragi.Dota2EventTeam|undefined} value
 * @return {!proto.bragi.Dota2MegaCreeps} returns this
*/
proto.bragi.Dota2MegaCreeps.prototype.setAgainstTeam = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2MegaCreeps} returns this
 */
proto.bragi.Dota2MegaCreeps.prototype.clearAgainstTeam = function() {
  return this.setAgainstTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2MegaCreeps.prototype.hasAgainstTeam = function() {
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
proto.bragi.Dota2RoshanKilled.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2RoshanKilled.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2RoshanKilled} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2RoshanKilled.toObject = function(includeInstance, msg) {
  var f, obj = {
team: (f = msg.getTeam()) && proto.bragi.Dota2EventTeam.toObject(includeInstance, f)
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
 * @return {!proto.bragi.Dota2RoshanKilled}
 */
proto.bragi.Dota2RoshanKilled.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2RoshanKilled;
  return proto.bragi.Dota2RoshanKilled.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2RoshanKilled} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2RoshanKilled}
 */
proto.bragi.Dota2RoshanKilled.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Dota2EventTeam;
      reader.readMessage(value,proto.bragi.Dota2EventTeam.deserializeBinaryFromReader);
      msg.setTeam(value);
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
proto.bragi.Dota2RoshanKilled.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2RoshanKilled.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2RoshanKilled} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2RoshanKilled.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeam();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.Dota2EventTeam.serializeBinaryToWriter
    );
  }
};


/**
 * optional Dota2EventTeam team = 1;
 * @return {?proto.bragi.Dota2EventTeam}
 */
proto.bragi.Dota2RoshanKilled.prototype.getTeam = function() {
  return /** @type{?proto.bragi.Dota2EventTeam} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2EventTeam, 1));
};


/**
 * @param {?proto.bragi.Dota2EventTeam|undefined} value
 * @return {!proto.bragi.Dota2RoshanKilled} returns this
*/
proto.bragi.Dota2RoshanKilled.prototype.setTeam = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2RoshanKilled} returns this
 */
proto.bragi.Dota2RoshanKilled.prototype.clearTeam = function() {
  return this.setTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2RoshanKilled.prototype.hasTeam = function() {
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
proto.bragi.Dota2RoshanRespawned.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2RoshanRespawned.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2RoshanRespawned} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2RoshanRespawned.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.bragi.Dota2RoshanRespawned}
 */
proto.bragi.Dota2RoshanRespawned.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2RoshanRespawned;
  return proto.bragi.Dota2RoshanRespawned.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2RoshanRespawned} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2RoshanRespawned}
 */
proto.bragi.Dota2RoshanRespawned.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.bragi.Dota2RoshanRespawned.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2RoshanRespawned.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2RoshanRespawned} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2RoshanRespawned.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.bragi.Dota2AegisPickedUp.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2AegisPickedUp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2AegisPickedUp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2AegisPickedUp.toObject = function(includeInstance, msg) {
  var f, obj = {
player: (f = msg.getPlayer()) && proto.bragi.Dota2EventPlayer.toObject(includeInstance, f),
snatched: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.bragi.Dota2AegisPickedUp}
 */
proto.bragi.Dota2AegisPickedUp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2AegisPickedUp;
  return proto.bragi.Dota2AegisPickedUp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2AegisPickedUp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2AegisPickedUp}
 */
proto.bragi.Dota2AegisPickedUp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Dota2EventPlayer;
      reader.readMessage(value,proto.bragi.Dota2EventPlayer.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSnatched(value);
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
proto.bragi.Dota2AegisPickedUp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2AegisPickedUp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2AegisPickedUp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2AegisPickedUp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.Dota2EventPlayer.serializeBinaryToWriter
    );
  }
  f = message.getSnatched();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional Dota2EventPlayer player = 1;
 * @return {?proto.bragi.Dota2EventPlayer}
 */
proto.bragi.Dota2AegisPickedUp.prototype.getPlayer = function() {
  return /** @type{?proto.bragi.Dota2EventPlayer} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2EventPlayer, 1));
};


/**
 * @param {?proto.bragi.Dota2EventPlayer|undefined} value
 * @return {!proto.bragi.Dota2AegisPickedUp} returns this
*/
proto.bragi.Dota2AegisPickedUp.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2AegisPickedUp} returns this
 */
proto.bragi.Dota2AegisPickedUp.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2AegisPickedUp.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool snatched = 2;
 * @return {boolean}
 */
proto.bragi.Dota2AegisPickedUp.prototype.getSnatched = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.Dota2AegisPickedUp} returns this
 */
proto.bragi.Dota2AegisPickedUp.prototype.setSnatched = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.bragi.Dota2AegisLost.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2AegisLost.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2AegisLost} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2AegisLost.toObject = function(includeInstance, msg) {
  var f, obj = {
player: (f = msg.getPlayer()) && proto.bragi.Dota2EventPlayer.toObject(includeInstance, f)
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
 * @return {!proto.bragi.Dota2AegisLost}
 */
proto.bragi.Dota2AegisLost.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2AegisLost;
  return proto.bragi.Dota2AegisLost.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2AegisLost} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2AegisLost}
 */
proto.bragi.Dota2AegisLost.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Dota2EventPlayer;
      reader.readMessage(value,proto.bragi.Dota2EventPlayer.deserializeBinaryFromReader);
      msg.setPlayer(value);
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
proto.bragi.Dota2AegisLost.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2AegisLost.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2AegisLost} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2AegisLost.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.Dota2EventPlayer.serializeBinaryToWriter
    );
  }
};


/**
 * optional Dota2EventPlayer player = 1;
 * @return {?proto.bragi.Dota2EventPlayer}
 */
proto.bragi.Dota2AegisLost.prototype.getPlayer = function() {
  return /** @type{?proto.bragi.Dota2EventPlayer} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2EventPlayer, 1));
};


/**
 * @param {?proto.bragi.Dota2EventPlayer|undefined} value
 * @return {!proto.bragi.Dota2AegisLost} returns this
*/
proto.bragi.Dota2AegisLost.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2AegisLost} returns this
 */
proto.bragi.Dota2AegisLost.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2AegisLost.prototype.hasPlayer = function() {
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
proto.bragi.Dota2Buyback.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2Buyback.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2Buyback} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2Buyback.toObject = function(includeInstance, msg) {
  var f, obj = {
player: (f = msg.getPlayer()) && proto.bragi.Dota2EventPlayer.toObject(includeInstance, f)
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
 * @return {!proto.bragi.Dota2Buyback}
 */
proto.bragi.Dota2Buyback.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2Buyback;
  return proto.bragi.Dota2Buyback.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2Buyback} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2Buyback}
 */
proto.bragi.Dota2Buyback.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Dota2EventPlayer;
      reader.readMessage(value,proto.bragi.Dota2EventPlayer.deserializeBinaryFromReader);
      msg.setPlayer(value);
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
proto.bragi.Dota2Buyback.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2Buyback.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2Buyback} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2Buyback.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.Dota2EventPlayer.serializeBinaryToWriter
    );
  }
};


/**
 * optional Dota2EventPlayer player = 1;
 * @return {?proto.bragi.Dota2EventPlayer}
 */
proto.bragi.Dota2Buyback.prototype.getPlayer = function() {
  return /** @type{?proto.bragi.Dota2EventPlayer} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2EventPlayer, 1));
};


/**
 * @param {?proto.bragi.Dota2EventPlayer|undefined} value
 * @return {!proto.bragi.Dota2Buyback} returns this
*/
proto.bragi.Dota2Buyback.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2Buyback} returns this
 */
proto.bragi.Dota2Buyback.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2Buyback.prototype.hasPlayer = function() {
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
proto.bragi.Dota2DayNightChanged.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2DayNightChanged.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2DayNightChanged} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2DayNightChanged.toObject = function(includeInstance, msg) {
  var f, obj = {
isDay: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.bragi.Dota2DayNightChanged}
 */
proto.bragi.Dota2DayNightChanged.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2DayNightChanged;
  return proto.bragi.Dota2DayNightChanged.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2DayNightChanged} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2DayNightChanged}
 */
proto.bragi.Dota2DayNightChanged.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDay(value);
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
proto.bragi.Dota2DayNightChanged.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2DayNightChanged.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2DayNightChanged} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2DayNightChanged.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsDay();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_day = 1;
 * @return {boolean}
 */
proto.bragi.Dota2DayNightChanged.prototype.getIsDay = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.Dota2DayNightChanged} returns this
 */
proto.bragi.Dota2DayNightChanged.prototype.setIsDay = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
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
proto.bragi.Dota2Multikill.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2Multikill.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2Multikill} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2Multikill.toObject = function(includeInstance, msg) {
  var f, obj = {
player: (f = msg.getPlayer()) && proto.bragi.Dota2EventPlayer.toObject(includeInstance, f),
kills: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.bragi.Dota2Multikill}
 */
proto.bragi.Dota2Multikill.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2Multikill;
  return proto.bragi.Dota2Multikill.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2Multikill} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2Multikill}
 */
proto.bragi.Dota2Multikill.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Dota2EventPlayer;
      reader.readMessage(value,proto.bragi.Dota2EventPlayer.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setKills(value);
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
proto.bragi.Dota2Multikill.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2Multikill.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2Multikill} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2Multikill.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.Dota2EventPlayer.serializeBinaryToWriter
    );
  }
  f = message.getKills();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional Dota2EventPlayer player = 1;
 * @return {?proto.bragi.Dota2EventPlayer}
 */
proto.bragi.Dota2Multikill.prototype.getPlayer = function() {
  return /** @type{?proto.bragi.Dota2EventPlayer} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2EventPlayer, 1));
};


/**
 * @param {?proto.bragi.Dota2EventPlayer|undefined} value
 * @return {!proto.bragi.Dota2Multikill} returns this
*/
proto.bragi.Dota2Multikill.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2Multikill} returns this
 */
proto.bragi.Dota2Multikill.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2Multikill.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 kills = 2;
 * @return {number}
 */
proto.bragi.Dota2Multikill.prototype.getKills = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2Multikill} returns this
 */
proto.bragi.Dota2Multikill.prototype.setKills = function(value) {
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
proto.bragi.Dota2Killstreak.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2Killstreak.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2Killstreak} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2Killstreak.toObject = function(includeInstance, msg) {
  var f, obj = {
player: (f = msg.getPlayer()) && proto.bragi.Dota2EventPlayer.toObject(includeInstance, f),
streak: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.bragi.Dota2Killstreak}
 */
proto.bragi.Dota2Killstreak.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2Killstreak;
  return proto.bragi.Dota2Killstreak.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2Killstreak} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2Killstreak}
 */
proto.bragi.Dota2Killstreak.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Dota2EventPlayer;
      reader.readMessage(value,proto.bragi.Dota2EventPlayer.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStreak(value);
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
proto.bragi.Dota2Killstreak.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2Killstreak.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2Killstreak} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2Killstreak.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.Dota2EventPlayer.serializeBinaryToWriter
    );
  }
  f = message.getStreak();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional Dota2EventPlayer player = 1;
 * @return {?proto.bragi.Dota2EventPlayer}
 */
proto.bragi.Dota2Killstreak.prototype.getPlayer = function() {
  return /** @type{?proto.bragi.Dota2EventPlayer} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2EventPlayer, 1));
};


/**
 * @param {?proto.bragi.Dota2EventPlayer|undefined} value
 * @return {!proto.bragi.Dota2Killstreak} returns this
*/
proto.bragi.Dota2Killstreak.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2Killstreak} returns this
 */
proto.bragi.Dota2Killstreak.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2Killstreak.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 streak = 2;
 * @return {number}
 */
proto.bragi.Dota2Killstreak.prototype.getStreak = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Dota2Killstreak} returns this
 */
proto.bragi.Dota2Killstreak.prototype.setStreak = function(value) {
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
proto.bragi.Dota2TormentorKilled.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Dota2TormentorKilled.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Dota2TormentorKilled} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2TormentorKilled.toObject = function(includeInstance, msg) {
  var f, obj = {
killer: (f = msg.getKiller()) && proto.bragi.Dota2EventPlayer.toObject(includeInstance, f)
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
 * @return {!proto.bragi.Dota2TormentorKilled}
 */
proto.bragi.Dota2TormentorKilled.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Dota2TormentorKilled;
  return proto.bragi.Dota2TormentorKilled.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Dota2TormentorKilled} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Dota2TormentorKilled}
 */
proto.bragi.Dota2TormentorKilled.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Dota2EventPlayer;
      reader.readMessage(value,proto.bragi.Dota2EventPlayer.deserializeBinaryFromReader);
      msg.setKiller(value);
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
proto.bragi.Dota2TormentorKilled.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Dota2TormentorKilled.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Dota2TormentorKilled} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Dota2TormentorKilled.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKiller();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.Dota2EventPlayer.serializeBinaryToWriter
    );
  }
};


/**
 * optional Dota2EventPlayer killer = 1;
 * @return {?proto.bragi.Dota2EventPlayer}
 */
proto.bragi.Dota2TormentorKilled.prototype.getKiller = function() {
  return /** @type{?proto.bragi.Dota2EventPlayer} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Dota2EventPlayer, 1));
};


/**
 * @param {?proto.bragi.Dota2EventPlayer|undefined} value
 * @return {!proto.bragi.Dota2TormentorKilled} returns this
*/
proto.bragi.Dota2TormentorKilled.prototype.setKiller = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Dota2TormentorKilled} returns this
 */
proto.bragi.Dota2TormentorKilled.prototype.clearKiller = function() {
  return this.setKiller(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Dota2TormentorKilled.prototype.hasKiller = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * @enum {number}
 */
proto.bragi.Dota2Faction = {
  DOTA2_FACTION_UNSPECIFIED: 0,
  DOTA2_FACTION_RADIANT: 1,
  DOTA2_FACTION_DIRE: 2
};

/**
 * @enum {number}
 */
proto.bragi.Dota2Lane = {
  DOTA2_LANE_UNSPECIFIED: 0,
  DOTA2_LANE_TOP: 1,
  DOTA2_LANE_MID: 2,
  DOTA2_LANE_BOT: 3
};

/**
 * @enum {number}
 */
proto.bragi.Dota2TowerTier = {
  DOTA2_TOWER_TIER_UNSPECIFIED: 0,
  DOTA2_TOWER_TIER_1: 1,
  DOTA2_TOWER_TIER_2: 2,
  DOTA2_TOWER_TIER_3: 3,
  DOTA2_TOWER_TIER_4: 4
};

/**
 * @enum {number}
 */
proto.bragi.Dota2BarrackType = {
  DOTA2_BARRACK_TYPE_UNSPECIFIED: 0,
  DOTA2_BARRACK_TYPE_RANGED: 1,
  DOTA2_BARRACK_TYPE_MELEE: 2
};

/**
 * @enum {number}
 */
proto.bragi.Dota2ItemPosition = {
  DOTA2_ITEM_POSITION_UNSPECIFIED: 0,
  DOTA2_ITEM_POSITION_NEUTRAL: 1,
  DOTA2_ITEM_POSITION_STASH0: 2,
  DOTA2_ITEM_POSITION_STASH1: 3,
  DOTA2_ITEM_POSITION_STASH2: 4,
  DOTA2_ITEM_POSITION_STASH3: 5,
  DOTA2_ITEM_POSITION_STASH4: 6,
  DOTA2_ITEM_POSITION_STASH5: 7,
  DOTA2_ITEM_POSITION_TELEPORT: 8,
  DOTA2_ITEM_POSITION_SLOT0: 9,
  DOTA2_ITEM_POSITION_SLOT1: 10,
  DOTA2_ITEM_POSITION_SLOT2: 11,
  DOTA2_ITEM_POSITION_SLOT3: 12,
  DOTA2_ITEM_POSITION_SLOT4: 13,
  DOTA2_ITEM_POSITION_SLOT5: 14,
  DOTA2_ITEM_POSITION_SLOT6: 15,
  DOTA2_ITEM_POSITION_SLOT7: 16,
  DOTA2_ITEM_POSITION_SLOT8: 17
};

/**
 * @enum {number}
 */
proto.bragi.Dota2EnvironmentKillerKind = {
  DOTA2_ENVIRONMENT_KILLER_KIND_UNSPECIFIED: 0,
  DOTA2_ENVIRONMENT_KILLER_KIND_UNKNOWN: 1,
  DOTA2_ENVIRONMENT_KILLER_KIND_TOWER: 2,
  DOTA2_ENVIRONMENT_KILLER_KIND_NEUTRAL: 3,
  DOTA2_ENVIRONMENT_KILLER_KIND_ROSHAN: 4,
  DOTA2_ENVIRONMENT_KILLER_KIND_TORMENTOR: 5
};

goog.object.extend(exports, proto.bragi);
