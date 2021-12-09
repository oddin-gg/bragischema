// source: bragi/csgo_common.proto
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

goog.exportSymbol('proto.bragi.CsgoMatchStatusType', null, global);
goog.exportSymbol('proto.bragi.CsgoPlayerRole', null, global);
goog.exportSymbol('proto.bragi.CsgoRoundStateType', null, global);
goog.exportSymbol('proto.bragi.CsgoSide', null, global);
goog.exportSymbol('proto.bragi.CsgoWinReason', null, global);
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
  CSGO_ROUND_OUTCOME_UNSPECIFIED: 0,
  CSGO_ROUND_OUTCOME_COUNTER_TERRORISTS_ELIMINATED: 1,
  CSGO_ROUND_OUTCOME_TERRORISTS_ELIMINATED: 2,
  CSGO_ROUND_OUTCOME_EXPLOSION: 3,
  CSGO_ROUND_OUTCOME_DEFUSE: 4,
  CSGO_ROUND_OUTCOME_TIMEOUT: 5,
  CSGO_ROUND_OUTCOME_TARGET_SAVED: 6
};

/**
 * @enum {number}
 */
proto.bragi.CsgoPlayerRole = {
  CSGO_PLAYER_ROLE_UNSPECIFIED: 0,
  CSGO_PLAYER_ROLE_KILL_LEADER: 1,
  CSGO_PLAYER_ROLE_ENTRY_FRAGGER: 2,
  CSGO_PLAYER_ROLE_SUPPORT: 3,
  CSGO_PLAYER_ROLE_AWPER: 4,
  CSGO_PLAYER_ROLE_LURKER: 5
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
