// source: bragi/bragi.proto
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
goog.exportSymbol('proto.bragi.BestOfType', null, global);
goog.exportSymbol('proto.bragi.Csgo2dMaFeedRequest', null, global);
goog.exportSymbol('proto.bragi.Csgo2dMap', null, global);
goog.exportSymbol('proto.bragi.Csgo2dMapBombPosition', null, global);
goog.exportSymbol('proto.bragi.Csgo2dMapPlayerPosition', null, global);
goog.exportSymbol('proto.bragi.CsgoEvents', null, global);
goog.exportSymbol('proto.bragi.CsgoEventsFeedRequest', null, global);
goog.exportSymbol('proto.bragi.CsgoMap', null, global);
goog.exportSymbol('proto.bragi.CsgoMapStatistics', null, global);
goog.exportSymbol('proto.bragi.CsgoMapStatisticsAccordingSide', null, global);
goog.exportSymbol('proto.bragi.CsgoMapVote', null, global);
goog.exportSymbol('proto.bragi.CsgoOpeningDuels', null, global);
goog.exportSymbol('proto.bragi.CsgoPlayer', null, global);
goog.exportSymbol('proto.bragi.CsgoPlayerPostMapStatistics', null, global);
goog.exportSymbol('proto.bragi.CsgoPlayerRole', null, global);
goog.exportSymbol('proto.bragi.CsgoPlayerScoreBoard', null, global);
goog.exportSymbol('proto.bragi.CsgoPlayerStatistics', null, global);
goog.exportSymbol('proto.bragi.CsgoPlayersDuel', null, global);
goog.exportSymbol('proto.bragi.CsgoPostMapStatistics', null, global);
goog.exportSymbol('proto.bragi.CsgoRound', null, global);
goog.exportSymbol('proto.bragi.CsgoRoundOutcome', null, global);
goog.exportSymbol('proto.bragi.CsgoRoundPostmap', null, global);
goog.exportSymbol('proto.bragi.CsgoScoreBoard', null, global);
goog.exportSymbol('proto.bragi.CsgoScoreBoardFeedRequest', null, global);
goog.exportSymbol('proto.bragi.CsgoSide', null, global);
goog.exportSymbol('proto.bragi.CsgoStatisticsSideValues', null, global);
goog.exportSymbol('proto.bragi.CsgoTeam', null, global);
goog.exportSymbol('proto.bragi.CsgoTeamPostMapStatistics', null, global);
goog.exportSymbol('proto.bragi.CsgoTeamScoreBoard', null, global);
goog.exportSymbol('proto.bragi.CsgoTeamStanding', null, global);
goog.exportSymbol('proto.bragi.CsgoTeamStandingRound', null, global);
goog.exportSymbol('proto.bragi.CsgoTeamStatistics', null, global);
goog.exportSymbol('proto.bragi.CsgoTournamentBestPlayerStatistics', null, global);
goog.exportSymbol('proto.bragi.CsgoTournamentBestTeamStatistics', null, global);
goog.exportSymbol('proto.bragi.CsgoTournamentBlock', null, global);
goog.exportSymbol('proto.bragi.CsgoTournamentBlock.OneofNameCase', null, global);
goog.exportSymbol('proto.bragi.CsgoTournamentBracketsBlock', null, global);
goog.exportSymbol('proto.bragi.CsgoTournamentInfo', null, global);
goog.exportSymbol('proto.bragi.CsgoTournamentMapStatistics', null, global);
goog.exportSymbol('proto.bragi.CsgoTournamentPlayerStatistics', null, global);
goog.exportSymbol('proto.bragi.CsgoTournamentStandingsBlock', null, global);
goog.exportSymbol('proto.bragi.CsgoTournamentStatistics', null, global);
goog.exportSymbol('proto.bragi.CsgoWeapon', null, global);
goog.exportSymbol('proto.bragi.CsgoWeaponPostMapStatistics', null, global);
goog.exportSymbol('proto.bragi.CsgoWeaponStatistics', null, global);
goog.exportSymbol('proto.bragi.HistoricalStatisticsResponse', null, global);
goog.exportSymbol('proto.bragi.HistoricalStatisticsResponse.HistoricalStatisticsCase', null, global);
goog.exportSymbol('proto.bragi.LastFiveEncountersRequest', null, global);
goog.exportSymbol('proto.bragi.LastFiveEncountersResponse', null, global);
goog.exportSymbol('proto.bragi.Map', null, global);
goog.exportSymbol('proto.bragi.Map2dPosition', null, global);
goog.exportSymbol('proto.bragi.Match', null, global);
goog.exportSymbol('proto.bragi.Player', null, global);
goog.exportSymbol('proto.bragi.PlayerStatisticsAccordingRoleRequest', null, global);
goog.exportSymbol('proto.bragi.PlayerStatisticsAccordingRoleResponse', null, global);
goog.exportSymbol('proto.bragi.PlayerStatisticsAccordingRoleResponse.PlayerStatisticsAccordingRoleCase', null, global);
goog.exportSymbol('proto.bragi.PostMapStatisticsRequest', null, global);
goog.exportSymbol('proto.bragi.PostMapStatisticsResponse', null, global);
goog.exportSymbol('proto.bragi.PostMapStatisticsResponse.PostMapStatisticsCase', null, global);
goog.exportSymbol('proto.bragi.PostMapStatisticsValues', null, global);
goog.exportSymbol('proto.bragi.Sport', null, global);
goog.exportSymbol('proto.bragi.SportsRequest', null, global);
goog.exportSymbol('proto.bragi.SportsResponse', null, global);
goog.exportSymbol('proto.bragi.StatisticsValues', null, global);
goog.exportSymbol('proto.bragi.Team', null, global);
goog.exportSymbol('proto.bragi.TeamHistoricalStatisticsRequest', null, global);
goog.exportSymbol('proto.bragi.TeamTournamentStatisticsRequest', null, global);
goog.exportSymbol('proto.bragi.TeamTournamentStatisticsResponse', null, global);
goog.exportSymbol('proto.bragi.TeamTournamentStatisticsResponse.TeamsTournamentStatisticsCase', null, global);
goog.exportSymbol('proto.bragi.Timeframe', null, global);
goog.exportSymbol('proto.bragi.Tournament', null, global);
goog.exportSymbol('proto.bragi.TournamentBracketNode', null, global);
goog.exportSymbol('proto.bragi.TournamentInfoRequest', null, global);
goog.exportSymbol('proto.bragi.TournamentInfoResponse', null, global);
goog.exportSymbol('proto.bragi.TournamentInfoResponse.TournamentInfoCase', null, global);
goog.exportSymbol('proto.bragi.TournamentResponse', null, global);
goog.exportSymbol('proto.bragi.TournamentStatisticsRequest', null, global);
goog.exportSymbol('proto.bragi.TournamentStatisticsResponse', null, global);
goog.exportSymbol('proto.bragi.TournamentStatisticsResponse.TournamentStatisticsCase', null, global);
goog.exportSymbol('proto.bragi.TournamentTeamStatisticsValue', null, global);
goog.exportSymbol('proto.bragi.TournamentTeamStatisticsValueInPercent', null, global);
goog.exportSymbol('proto.bragi.TournamentsRequest', null, global);
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
proto.bragi.SportsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.SportsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.SportsRequest.displayName = 'proto.bragi.SportsRequest';
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
proto.bragi.TeamHistoricalStatisticsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.TeamHistoricalStatisticsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.TeamHistoricalStatisticsRequest.displayName = 'proto.bragi.TeamHistoricalStatisticsRequest';
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
proto.bragi.LastFiveEncountersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.LastFiveEncountersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.LastFiveEncountersRequest.displayName = 'proto.bragi.LastFiveEncountersRequest';
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
proto.bragi.TournamentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.TournamentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.TournamentsRequest.displayName = 'proto.bragi.TournamentsRequest';
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
proto.bragi.TournamentInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.TournamentInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.TournamentInfoRequest.displayName = 'proto.bragi.TournamentInfoRequest';
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
proto.bragi.PostMapStatisticsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.PostMapStatisticsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.PostMapStatisticsRequest.displayName = 'proto.bragi.PostMapStatisticsRequest';
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
proto.bragi.TournamentStatisticsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.TournamentStatisticsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.TournamentStatisticsRequest.displayName = 'proto.bragi.TournamentStatisticsRequest';
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
proto.bragi.TeamTournamentStatisticsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.TeamTournamentStatisticsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.TeamTournamentStatisticsRequest.displayName = 'proto.bragi.TeamTournamentStatisticsRequest';
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
proto.bragi.PlayerStatisticsAccordingRoleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.PlayerStatisticsAccordingRoleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.PlayerStatisticsAccordingRoleRequest.displayName = 'proto.bragi.PlayerStatisticsAccordingRoleRequest';
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
proto.bragi.Csgo2dMaFeedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Csgo2dMaFeedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Csgo2dMaFeedRequest.displayName = 'proto.bragi.Csgo2dMaFeedRequest';
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
proto.bragi.CsgoScoreBoardFeedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoScoreBoardFeedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoScoreBoardFeedRequest.displayName = 'proto.bragi.CsgoScoreBoardFeedRequest';
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
proto.bragi.CsgoEventsFeedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoEventsFeedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoEventsFeedRequest.displayName = 'proto.bragi.CsgoEventsFeedRequest';
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
proto.bragi.SportsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.SportsResponse.repeatedFields_, null);
};
goog.inherits(proto.bragi.SportsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.SportsResponse.displayName = 'proto.bragi.SportsResponse';
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
proto.bragi.TournamentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.TournamentResponse.repeatedFields_, null);
};
goog.inherits(proto.bragi.TournamentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.TournamentResponse.displayName = 'proto.bragi.TournamentResponse';
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
proto.bragi.HistoricalStatisticsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.HistoricalStatisticsResponse.oneofGroups_);
};
goog.inherits(proto.bragi.HistoricalStatisticsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.HistoricalStatisticsResponse.displayName = 'proto.bragi.HistoricalStatisticsResponse';
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
proto.bragi.LastFiveEncountersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.LastFiveEncountersResponse.repeatedFields_, null);
};
goog.inherits(proto.bragi.LastFiveEncountersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.LastFiveEncountersResponse.displayName = 'proto.bragi.LastFiveEncountersResponse';
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
proto.bragi.PostMapStatisticsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.PostMapStatisticsResponse.oneofGroups_);
};
goog.inherits(proto.bragi.PostMapStatisticsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.PostMapStatisticsResponse.displayName = 'proto.bragi.PostMapStatisticsResponse';
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
proto.bragi.TournamentInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.TournamentInfoResponse.oneofGroups_);
};
goog.inherits(proto.bragi.TournamentInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.TournamentInfoResponse.displayName = 'proto.bragi.TournamentInfoResponse';
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
proto.bragi.TournamentStatisticsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.TournamentStatisticsResponse.oneofGroups_);
};
goog.inherits(proto.bragi.TournamentStatisticsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.TournamentStatisticsResponse.displayName = 'proto.bragi.TournamentStatisticsResponse';
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
proto.bragi.TeamTournamentStatisticsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.TeamTournamentStatisticsResponse.oneofGroups_);
};
goog.inherits(proto.bragi.TeamTournamentStatisticsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.TeamTournamentStatisticsResponse.displayName = 'proto.bragi.TeamTournamentStatisticsResponse';
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
proto.bragi.PlayerStatisticsAccordingRoleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.PlayerStatisticsAccordingRoleResponse.oneofGroups_);
};
goog.inherits(proto.bragi.PlayerStatisticsAccordingRoleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.PlayerStatisticsAccordingRoleResponse.displayName = 'proto.bragi.PlayerStatisticsAccordingRoleResponse';
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
proto.bragi.CsgoTeamStatistics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.CsgoTeamStatistics.repeatedFields_, null);
};
goog.inherits(proto.bragi.CsgoTeamStatistics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoTeamStatistics.displayName = 'proto.bragi.CsgoTeamStatistics';
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
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.CsgoPlayerStatistics.repeatedFields_, null);
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
proto.bragi.CsgoPostMapStatistics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.CsgoPostMapStatistics.repeatedFields_, null);
};
goog.inherits(proto.bragi.CsgoPostMapStatistics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoPostMapStatistics.displayName = 'proto.bragi.CsgoPostMapStatistics';
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
proto.bragi.CsgoTournamentInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.CsgoTournamentInfo.repeatedFields_, null);
};
goog.inherits(proto.bragi.CsgoTournamentInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoTournamentInfo.displayName = 'proto.bragi.CsgoTournamentInfo';
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
proto.bragi.CsgoTournamentStatistics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.CsgoTournamentStatistics.repeatedFields_, null);
};
goog.inherits(proto.bragi.CsgoTournamentStatistics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoTournamentStatistics.displayName = 'proto.bragi.CsgoTournamentStatistics';
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
proto.bragi.CsgoTeamPostMapStatistics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.CsgoTeamPostMapStatistics.repeatedFields_, null);
};
goog.inherits(proto.bragi.CsgoTeamPostMapStatistics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoTeamPostMapStatistics.displayName = 'proto.bragi.CsgoTeamPostMapStatistics';
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
proto.bragi.CsgoPlayerPostMapStatistics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.CsgoPlayerPostMapStatistics.repeatedFields_, null);
};
goog.inherits(proto.bragi.CsgoPlayerPostMapStatistics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoPlayerPostMapStatistics.displayName = 'proto.bragi.CsgoPlayerPostMapStatistics';
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
proto.bragi.CsgoRoundPostmap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoRoundPostmap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoRoundPostmap.displayName = 'proto.bragi.CsgoRoundPostmap';
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
proto.bragi.CsgoMapStatisticsAccordingSide = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoMapStatisticsAccordingSide, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoMapStatisticsAccordingSide.displayName = 'proto.bragi.CsgoMapStatisticsAccordingSide';
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
proto.bragi.CsgoTournamentMapStatistics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoTournamentMapStatistics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoTournamentMapStatistics.displayName = 'proto.bragi.CsgoTournamentMapStatistics';
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
proto.bragi.CsgoTournamentPlayerStatistics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoTournamentPlayerStatistics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoTournamentPlayerStatistics.displayName = 'proto.bragi.CsgoTournamentPlayerStatistics';
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
proto.bragi.CsgoTournamentBestTeamStatistics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoTournamentBestTeamStatistics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoTournamentBestTeamStatistics.displayName = 'proto.bragi.CsgoTournamentBestTeamStatistics';
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
proto.bragi.CsgoTournamentBestPlayerStatistics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoTournamentBestPlayerStatistics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoTournamentBestPlayerStatistics.displayName = 'proto.bragi.CsgoTournamentBestPlayerStatistics';
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
proto.bragi.CsgoTeamStandingRound = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoTeamStandingRound, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoTeamStandingRound.displayName = 'proto.bragi.CsgoTeamStandingRound';
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
proto.bragi.CsgoPlayersDuel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoPlayersDuel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoPlayersDuel.displayName = 'proto.bragi.CsgoPlayersDuel';
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
proto.bragi.CsgoStatisticsSideValues = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoStatisticsSideValues, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoStatisticsSideValues.displayName = 'proto.bragi.CsgoStatisticsSideValues';
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
proto.bragi.CsgoWeaponStatistics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoWeaponStatistics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoWeaponStatistics.displayName = 'proto.bragi.CsgoWeaponStatistics';
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
proto.bragi.CsgoWeaponPostMapStatistics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoWeaponPostMapStatistics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoWeaponPostMapStatistics.displayName = 'proto.bragi.CsgoWeaponPostMapStatistics';
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
proto.bragi.CsgoMap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoMap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoMap.displayName = 'proto.bragi.CsgoMap';
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
proto.bragi.CsgoMapVote = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.CsgoMapVote.repeatedFields_, null);
};
goog.inherits(proto.bragi.CsgoMapVote, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoMapVote.displayName = 'proto.bragi.CsgoMapVote';
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
proto.bragi.CsgoMapStatistics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoMapStatistics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoMapStatistics.displayName = 'proto.bragi.CsgoMapStatistics';
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
proto.bragi.CsgoWeapon = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoWeapon, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoWeapon.displayName = 'proto.bragi.CsgoWeapon';
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
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.CsgoTeam.repeatedFields_, null);
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
proto.bragi.CsgoPlayer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoPlayer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoPlayer.displayName = 'proto.bragi.CsgoPlayer';
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
proto.bragi.CsgoTournamentBlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bragi.CsgoTournamentBlock.oneofGroups_);
};
goog.inherits(proto.bragi.CsgoTournamentBlock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoTournamentBlock.displayName = 'proto.bragi.CsgoTournamentBlock';
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
proto.bragi.CsgoTournamentStandingsBlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.CsgoTournamentStandingsBlock.repeatedFields_, null);
};
goog.inherits(proto.bragi.CsgoTournamentStandingsBlock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoTournamentStandingsBlock.displayName = 'proto.bragi.CsgoTournamentStandingsBlock';
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
proto.bragi.CsgoTournamentBracketsBlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.CsgoTournamentBracketsBlock.repeatedFields_, null);
};
goog.inherits(proto.bragi.CsgoTournamentBracketsBlock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoTournamentBracketsBlock.displayName = 'proto.bragi.CsgoTournamentBracketsBlock';
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
proto.bragi.CsgoTeamStanding = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.CsgoTeamStanding.repeatedFields_, null);
};
goog.inherits(proto.bragi.CsgoTeamStanding, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoTeamStanding.displayName = 'proto.bragi.CsgoTeamStanding';
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
proto.bragi.TournamentBracketNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.TournamentBracketNode.repeatedFields_, null);
};
goog.inherits(proto.bragi.TournamentBracketNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.TournamentBracketNode.displayName = 'proto.bragi.TournamentBracketNode';
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
proto.bragi.Csgo2dMap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.Csgo2dMap.repeatedFields_, null);
};
goog.inherits(proto.bragi.Csgo2dMap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Csgo2dMap.displayName = 'proto.bragi.Csgo2dMap';
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
proto.bragi.Csgo2dMapPlayerPosition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Csgo2dMapPlayerPosition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Csgo2dMapPlayerPosition.displayName = 'proto.bragi.Csgo2dMapPlayerPosition';
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
proto.bragi.Csgo2dMapBombPosition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Csgo2dMapBombPosition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Csgo2dMapBombPosition.displayName = 'proto.bragi.Csgo2dMapBombPosition';
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
proto.bragi.Map2dPosition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Map2dPosition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Map2dPosition.displayName = 'proto.bragi.Map2dPosition';
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
proto.bragi.CsgoRound = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoRound, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoRound.displayName = 'proto.bragi.CsgoRound';
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
proto.bragi.CsgoScoreBoard = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoScoreBoard, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoScoreBoard.displayName = 'proto.bragi.CsgoScoreBoard';
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
proto.bragi.CsgoTeamScoreBoard = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.CsgoTeamScoreBoard.repeatedFields_, null);
};
goog.inherits(proto.bragi.CsgoTeamScoreBoard, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoTeamScoreBoard.displayName = 'proto.bragi.CsgoTeamScoreBoard';
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
proto.bragi.CsgoPlayerScoreBoard = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoPlayerScoreBoard, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoPlayerScoreBoard.displayName = 'proto.bragi.CsgoPlayerScoreBoard';
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
proto.bragi.CsgoOpeningDuels = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoOpeningDuels, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoOpeningDuels.displayName = 'proto.bragi.CsgoOpeningDuels';
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
proto.bragi.CsgoEvents = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.CsgoEvents, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.CsgoEvents.displayName = 'proto.bragi.CsgoEvents';
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
proto.bragi.Sport = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Sport, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Sport.displayName = 'proto.bragi.Sport';
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
proto.bragi.Tournament = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Tournament, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Tournament.displayName = 'proto.bragi.Tournament';
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
proto.bragi.Team = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Team, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Team.displayName = 'proto.bragi.Team';
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
proto.bragi.Match = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bragi.Match.repeatedFields_, null);
};
goog.inherits(proto.bragi.Match, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Match.displayName = 'proto.bragi.Match';
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
proto.bragi.Map = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Map, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Map.displayName = 'proto.bragi.Map';
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
proto.bragi.Player = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.Player, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.Player.displayName = 'proto.bragi.Player';
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
proto.bragi.TournamentTeamStatisticsValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.TournamentTeamStatisticsValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.TournamentTeamStatisticsValue.displayName = 'proto.bragi.TournamentTeamStatisticsValue';
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
proto.bragi.TournamentTeamStatisticsValueInPercent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.TournamentTeamStatisticsValueInPercent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.TournamentTeamStatisticsValueInPercent.displayName = 'proto.bragi.TournamentTeamStatisticsValueInPercent';
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
proto.bragi.PostMapStatisticsValues = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.PostMapStatisticsValues, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.PostMapStatisticsValues.displayName = 'proto.bragi.PostMapStatisticsValues';
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
proto.bragi.StatisticsValues = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bragi.StatisticsValues, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bragi.StatisticsValues.displayName = 'proto.bragi.StatisticsValues';
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
proto.bragi.SportsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.SportsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.SportsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.SportsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bragi.SportsRequest}
 */
proto.bragi.SportsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.SportsRequest;
  return proto.bragi.SportsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.SportsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.SportsRequest}
 */
proto.bragi.SportsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bragi.SportsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.SportsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.SportsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.SportsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.bragi.TeamHistoricalStatisticsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.TeamHistoricalStatisticsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.TeamHistoricalStatisticsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.TeamHistoricalStatisticsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sportId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    timeframe: jspb.Message.getFieldWithDefault(msg, 2, 0),
    teamId: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.bragi.TeamHistoricalStatisticsRequest}
 */
proto.bragi.TeamHistoricalStatisticsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.TeamHistoricalStatisticsRequest;
  return proto.bragi.TeamHistoricalStatisticsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.TeamHistoricalStatisticsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.TeamHistoricalStatisticsRequest}
 */
proto.bragi.TeamHistoricalStatisticsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSportId(value);
      break;
    case 2:
      var value = /** @type {!proto.bragi.Timeframe} */ (reader.readEnum());
      msg.setTimeframe(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTeamId(value);
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
proto.bragi.TeamHistoricalStatisticsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.TeamHistoricalStatisticsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.TeamHistoricalStatisticsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.TeamHistoricalStatisticsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSportId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getTimeframe();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getTeamId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 sport_id = 1;
 * @return {number}
 */
proto.bragi.TeamHistoricalStatisticsRequest.prototype.getSportId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.TeamHistoricalStatisticsRequest} returns this
 */
proto.bragi.TeamHistoricalStatisticsRequest.prototype.setSportId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Timeframe timeframe = 2;
 * @return {!proto.bragi.Timeframe}
 */
proto.bragi.TeamHistoricalStatisticsRequest.prototype.getTimeframe = function() {
  return /** @type {!proto.bragi.Timeframe} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bragi.Timeframe} value
 * @return {!proto.bragi.TeamHistoricalStatisticsRequest} returns this
 */
proto.bragi.TeamHistoricalStatisticsRequest.prototype.setTimeframe = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint32 team_id = 3;
 * @return {number}
 */
proto.bragi.TeamHistoricalStatisticsRequest.prototype.getTeamId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.TeamHistoricalStatisticsRequest} returns this
 */
proto.bragi.TeamHistoricalStatisticsRequest.prototype.setTeamId = function(value) {
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
proto.bragi.LastFiveEncountersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.LastFiveEncountersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.LastFiveEncountersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.LastFiveEncountersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sportId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    timeframe: jspb.Message.getFieldWithDefault(msg, 2, 0),
    homeTeamId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    awayTeamId: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.bragi.LastFiveEncountersRequest}
 */
proto.bragi.LastFiveEncountersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.LastFiveEncountersRequest;
  return proto.bragi.LastFiveEncountersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.LastFiveEncountersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.LastFiveEncountersRequest}
 */
proto.bragi.LastFiveEncountersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSportId(value);
      break;
    case 2:
      var value = /** @type {!proto.bragi.Timeframe} */ (reader.readEnum());
      msg.setTimeframe(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHomeTeamId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAwayTeamId(value);
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
proto.bragi.LastFiveEncountersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.LastFiveEncountersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.LastFiveEncountersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.LastFiveEncountersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSportId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getTimeframe();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getHomeTeamId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getAwayTeamId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional uint32 sport_id = 1;
 * @return {number}
 */
proto.bragi.LastFiveEncountersRequest.prototype.getSportId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.LastFiveEncountersRequest} returns this
 */
proto.bragi.LastFiveEncountersRequest.prototype.setSportId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Timeframe timeframe = 2;
 * @return {!proto.bragi.Timeframe}
 */
proto.bragi.LastFiveEncountersRequest.prototype.getTimeframe = function() {
  return /** @type {!proto.bragi.Timeframe} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bragi.Timeframe} value
 * @return {!proto.bragi.LastFiveEncountersRequest} returns this
 */
proto.bragi.LastFiveEncountersRequest.prototype.setTimeframe = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint32 home_team_id = 3;
 * @return {number}
 */
proto.bragi.LastFiveEncountersRequest.prototype.getHomeTeamId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.LastFiveEncountersRequest} returns this
 */
proto.bragi.LastFiveEncountersRequest.prototype.setHomeTeamId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 away_team_id = 4;
 * @return {number}
 */
proto.bragi.LastFiveEncountersRequest.prototype.getAwayTeamId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.LastFiveEncountersRequest} returns this
 */
proto.bragi.LastFiveEncountersRequest.prototype.setAwayTeamId = function(value) {
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
proto.bragi.TournamentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.TournamentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.TournamentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.TournamentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sportId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dateFrom: (f = msg.getDateFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    dateTo: (f = msg.getDateTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.bragi.TournamentsRequest}
 */
proto.bragi.TournamentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.TournamentsRequest;
  return proto.bragi.TournamentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.TournamentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.TournamentsRequest}
 */
proto.bragi.TournamentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSportId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateFrom(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateTo(value);
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
proto.bragi.TournamentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.TournamentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.TournamentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.TournamentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSportId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getDateFrom();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDateTo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 sport_id = 1;
 * @return {number}
 */
proto.bragi.TournamentsRequest.prototype.getSportId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.TournamentsRequest} returns this
 */
proto.bragi.TournamentsRequest.prototype.setSportId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp date_from = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bragi.TournamentsRequest.prototype.getDateFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bragi.TournamentsRequest} returns this
*/
proto.bragi.TournamentsRequest.prototype.setDateFrom = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.TournamentsRequest} returns this
 */
proto.bragi.TournamentsRequest.prototype.clearDateFrom = function() {
  return this.setDateFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.TournamentsRequest.prototype.hasDateFrom = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp date_to = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bragi.TournamentsRequest.prototype.getDateTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bragi.TournamentsRequest} returns this
*/
proto.bragi.TournamentsRequest.prototype.setDateTo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.TournamentsRequest} returns this
 */
proto.bragi.TournamentsRequest.prototype.clearDateTo = function() {
  return this.setDateTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.TournamentsRequest.prototype.hasDateTo = function() {
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
proto.bragi.TournamentInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.TournamentInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.TournamentInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.TournamentInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tournamentId: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.bragi.TournamentInfoRequest}
 */
proto.bragi.TournamentInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.TournamentInfoRequest;
  return proto.bragi.TournamentInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.TournamentInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.TournamentInfoRequest}
 */
proto.bragi.TournamentInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTournamentId(value);
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
proto.bragi.TournamentInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.TournamentInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.TournamentInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.TournamentInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTournamentId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 tournament_id = 1;
 * @return {number}
 */
proto.bragi.TournamentInfoRequest.prototype.getTournamentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.TournamentInfoRequest} returns this
 */
proto.bragi.TournamentInfoRequest.prototype.setTournamentId = function(value) {
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
proto.bragi.PostMapStatisticsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.PostMapStatisticsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.PostMapStatisticsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.PostMapStatisticsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapId: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.bragi.PostMapStatisticsRequest}
 */
proto.bragi.PostMapStatisticsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.PostMapStatisticsRequest;
  return proto.bragi.PostMapStatisticsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.PostMapStatisticsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.PostMapStatisticsRequest}
 */
proto.bragi.PostMapStatisticsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMapId(value);
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
proto.bragi.PostMapStatisticsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.PostMapStatisticsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.PostMapStatisticsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.PostMapStatisticsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 map_id = 1;
 * @return {number}
 */
proto.bragi.PostMapStatisticsRequest.prototype.getMapId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.PostMapStatisticsRequest} returns this
 */
proto.bragi.PostMapStatisticsRequest.prototype.setMapId = function(value) {
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
proto.bragi.TournamentStatisticsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.TournamentStatisticsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.TournamentStatisticsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.TournamentStatisticsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tournamentId: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.bragi.TournamentStatisticsRequest}
 */
proto.bragi.TournamentStatisticsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.TournamentStatisticsRequest;
  return proto.bragi.TournamentStatisticsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.TournamentStatisticsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.TournamentStatisticsRequest}
 */
proto.bragi.TournamentStatisticsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTournamentId(value);
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
proto.bragi.TournamentStatisticsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.TournamentStatisticsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.TournamentStatisticsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.TournamentStatisticsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTournamentId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 tournament_id = 1;
 * @return {number}
 */
proto.bragi.TournamentStatisticsRequest.prototype.getTournamentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.TournamentStatisticsRequest} returns this
 */
proto.bragi.TournamentStatisticsRequest.prototype.setTournamentId = function(value) {
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
proto.bragi.TeamTournamentStatisticsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.TeamTournamentStatisticsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.TeamTournamentStatisticsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.TeamTournamentStatisticsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tournamentId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    teamId: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.bragi.TeamTournamentStatisticsRequest}
 */
proto.bragi.TeamTournamentStatisticsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.TeamTournamentStatisticsRequest;
  return proto.bragi.TeamTournamentStatisticsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.TeamTournamentStatisticsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.TeamTournamentStatisticsRequest}
 */
proto.bragi.TeamTournamentStatisticsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTournamentId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTeamId(value);
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
proto.bragi.TeamTournamentStatisticsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.TeamTournamentStatisticsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.TeamTournamentStatisticsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.TeamTournamentStatisticsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTournamentId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getTeamId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 tournament_id = 1;
 * @return {number}
 */
proto.bragi.TeamTournamentStatisticsRequest.prototype.getTournamentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.TeamTournamentStatisticsRequest} returns this
 */
proto.bragi.TeamTournamentStatisticsRequest.prototype.setTournamentId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 team_id = 2;
 * @return {number}
 */
proto.bragi.TeamTournamentStatisticsRequest.prototype.getTeamId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.TeamTournamentStatisticsRequest} returns this
 */
proto.bragi.TeamTournamentStatisticsRequest.prototype.setTeamId = function(value) {
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
proto.bragi.PlayerStatisticsAccordingRoleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.PlayerStatisticsAccordingRoleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.PlayerStatisticsAccordingRoleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.PlayerStatisticsAccordingRoleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sportId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    timeframe: jspb.Message.getFieldWithDefault(msg, 2, 0),
    role: jspb.Message.getFieldWithDefault(msg, 3, ""),
    teamId: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.bragi.PlayerStatisticsAccordingRoleRequest}
 */
proto.bragi.PlayerStatisticsAccordingRoleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.PlayerStatisticsAccordingRoleRequest;
  return proto.bragi.PlayerStatisticsAccordingRoleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.PlayerStatisticsAccordingRoleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.PlayerStatisticsAccordingRoleRequest}
 */
proto.bragi.PlayerStatisticsAccordingRoleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSportId(value);
      break;
    case 2:
      var value = /** @type {!proto.bragi.Timeframe} */ (reader.readEnum());
      msg.setTimeframe(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRole(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTeamId(value);
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
proto.bragi.PlayerStatisticsAccordingRoleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.PlayerStatisticsAccordingRoleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.PlayerStatisticsAccordingRoleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.PlayerStatisticsAccordingRoleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSportId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getTimeframe();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getRole();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTeamId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional uint32 sport_id = 1;
 * @return {number}
 */
proto.bragi.PlayerStatisticsAccordingRoleRequest.prototype.getSportId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.PlayerStatisticsAccordingRoleRequest} returns this
 */
proto.bragi.PlayerStatisticsAccordingRoleRequest.prototype.setSportId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Timeframe timeframe = 2;
 * @return {!proto.bragi.Timeframe}
 */
proto.bragi.PlayerStatisticsAccordingRoleRequest.prototype.getTimeframe = function() {
  return /** @type {!proto.bragi.Timeframe} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bragi.Timeframe} value
 * @return {!proto.bragi.PlayerStatisticsAccordingRoleRequest} returns this
 */
proto.bragi.PlayerStatisticsAccordingRoleRequest.prototype.setTimeframe = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string role = 3;
 * @return {string}
 */
proto.bragi.PlayerStatisticsAccordingRoleRequest.prototype.getRole = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.PlayerStatisticsAccordingRoleRequest} returns this
 */
proto.bragi.PlayerStatisticsAccordingRoleRequest.prototype.setRole = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 team_id = 4;
 * @return {number}
 */
proto.bragi.PlayerStatisticsAccordingRoleRequest.prototype.getTeamId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.PlayerStatisticsAccordingRoleRequest} returns this
 */
proto.bragi.PlayerStatisticsAccordingRoleRequest.prototype.setTeamId = function(value) {
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
proto.bragi.Csgo2dMaFeedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Csgo2dMaFeedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Csgo2dMaFeedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Csgo2dMaFeedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapId: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.bragi.Csgo2dMaFeedRequest}
 */
proto.bragi.Csgo2dMaFeedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Csgo2dMaFeedRequest;
  return proto.bragi.Csgo2dMaFeedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Csgo2dMaFeedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Csgo2dMaFeedRequest}
 */
proto.bragi.Csgo2dMaFeedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMapId(value);
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
proto.bragi.Csgo2dMaFeedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Csgo2dMaFeedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Csgo2dMaFeedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Csgo2dMaFeedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 map_id = 1;
 * @return {number}
 */
proto.bragi.Csgo2dMaFeedRequest.prototype.getMapId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Csgo2dMaFeedRequest} returns this
 */
proto.bragi.Csgo2dMaFeedRequest.prototype.setMapId = function(value) {
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
proto.bragi.CsgoScoreBoardFeedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoScoreBoardFeedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoScoreBoardFeedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoScoreBoardFeedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    matchId: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.bragi.CsgoScoreBoardFeedRequest}
 */
proto.bragi.CsgoScoreBoardFeedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoScoreBoardFeedRequest;
  return proto.bragi.CsgoScoreBoardFeedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoScoreBoardFeedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoScoreBoardFeedRequest}
 */
proto.bragi.CsgoScoreBoardFeedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMatchId(value);
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
proto.bragi.CsgoScoreBoardFeedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoScoreBoardFeedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoScoreBoardFeedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoScoreBoardFeedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatchId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 match_id = 1;
 * @return {number}
 */
proto.bragi.CsgoScoreBoardFeedRequest.prototype.getMatchId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoScoreBoardFeedRequest} returns this
 */
proto.bragi.CsgoScoreBoardFeedRequest.prototype.setMatchId = function(value) {
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
proto.bragi.CsgoEventsFeedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoEventsFeedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoEventsFeedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoEventsFeedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    matchId: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.bragi.CsgoEventsFeedRequest}
 */
proto.bragi.CsgoEventsFeedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoEventsFeedRequest;
  return proto.bragi.CsgoEventsFeedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoEventsFeedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoEventsFeedRequest}
 */
proto.bragi.CsgoEventsFeedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMatchId(value);
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
proto.bragi.CsgoEventsFeedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoEventsFeedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoEventsFeedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoEventsFeedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatchId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 match_id = 1;
 * @return {number}
 */
proto.bragi.CsgoEventsFeedRequest.prototype.getMatchId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoEventsFeedRequest} returns this
 */
proto.bragi.CsgoEventsFeedRequest.prototype.setMatchId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.SportsResponse.repeatedFields_ = [1];



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
proto.bragi.SportsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.SportsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.SportsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.SportsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    sportsList: jspb.Message.toObjectList(msg.getSportsList(),
    proto.bragi.Sport.toObject, includeInstance)
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
 * @return {!proto.bragi.SportsResponse}
 */
proto.bragi.SportsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.SportsResponse;
  return proto.bragi.SportsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.SportsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.SportsResponse}
 */
proto.bragi.SportsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Sport;
      reader.readMessage(value,proto.bragi.Sport.deserializeBinaryFromReader);
      msg.addSports(value);
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
proto.bragi.SportsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.SportsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.SportsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.SportsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSportsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bragi.Sport.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Sport sports = 1;
 * @return {!Array<!proto.bragi.Sport>}
 */
proto.bragi.SportsResponse.prototype.getSportsList = function() {
  return /** @type{!Array<!proto.bragi.Sport>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.Sport, 1));
};


/**
 * @param {!Array<!proto.bragi.Sport>} value
 * @return {!proto.bragi.SportsResponse} returns this
*/
proto.bragi.SportsResponse.prototype.setSportsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bragi.Sport=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.Sport}
 */
proto.bragi.SportsResponse.prototype.addSports = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bragi.Sport, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.SportsResponse} returns this
 */
proto.bragi.SportsResponse.prototype.clearSportsList = function() {
  return this.setSportsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.TournamentResponse.repeatedFields_ = [1];



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
proto.bragi.TournamentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.TournamentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.TournamentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.TournamentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tournamentsList: jspb.Message.toObjectList(msg.getTournamentsList(),
    proto.bragi.Tournament.toObject, includeInstance)
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
 * @return {!proto.bragi.TournamentResponse}
 */
proto.bragi.TournamentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.TournamentResponse;
  return proto.bragi.TournamentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.TournamentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.TournamentResponse}
 */
proto.bragi.TournamentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Tournament;
      reader.readMessage(value,proto.bragi.Tournament.deserializeBinaryFromReader);
      msg.addTournaments(value);
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
proto.bragi.TournamentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.TournamentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.TournamentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.TournamentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTournamentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bragi.Tournament.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Tournament tournaments = 1;
 * @return {!Array<!proto.bragi.Tournament>}
 */
proto.bragi.TournamentResponse.prototype.getTournamentsList = function() {
  return /** @type{!Array<!proto.bragi.Tournament>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.Tournament, 1));
};


/**
 * @param {!Array<!proto.bragi.Tournament>} value
 * @return {!proto.bragi.TournamentResponse} returns this
*/
proto.bragi.TournamentResponse.prototype.setTournamentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bragi.Tournament=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.Tournament}
 */
proto.bragi.TournamentResponse.prototype.addTournaments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bragi.Tournament, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.TournamentResponse} returns this
 */
proto.bragi.TournamentResponse.prototype.clearTournamentsList = function() {
  return this.setTournamentsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bragi.HistoricalStatisticsResponse.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.bragi.HistoricalStatisticsResponse.HistoricalStatisticsCase = {
  HISTORICAL_STATISTICS_NOT_SET: 0,
  CSGO: 1
};

/**
 * @return {proto.bragi.HistoricalStatisticsResponse.HistoricalStatisticsCase}
 */
proto.bragi.HistoricalStatisticsResponse.prototype.getHistoricalStatisticsCase = function() {
  return /** @type {proto.bragi.HistoricalStatisticsResponse.HistoricalStatisticsCase} */(jspb.Message.computeOneofCase(this, proto.bragi.HistoricalStatisticsResponse.oneofGroups_[0]));
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
proto.bragi.HistoricalStatisticsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.HistoricalStatisticsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.HistoricalStatisticsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.HistoricalStatisticsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    csgo: (f = msg.getCsgo()) && proto.bragi.CsgoTeamStatistics.toObject(includeInstance, f)
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
 * @return {!proto.bragi.HistoricalStatisticsResponse}
 */
proto.bragi.HistoricalStatisticsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.HistoricalStatisticsResponse;
  return proto.bragi.HistoricalStatisticsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.HistoricalStatisticsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.HistoricalStatisticsResponse}
 */
proto.bragi.HistoricalStatisticsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CsgoTeamStatistics;
      reader.readMessage(value,proto.bragi.CsgoTeamStatistics.deserializeBinaryFromReader);
      msg.setCsgo(value);
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
proto.bragi.HistoricalStatisticsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.HistoricalStatisticsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.HistoricalStatisticsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.HistoricalStatisticsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCsgo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CsgoTeamStatistics.serializeBinaryToWriter
    );
  }
};


/**
 * optional CsgoTeamStatistics csgo = 1;
 * @return {?proto.bragi.CsgoTeamStatistics}
 */
proto.bragi.HistoricalStatisticsResponse.prototype.getCsgo = function() {
  return /** @type{?proto.bragi.CsgoTeamStatistics} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoTeamStatistics, 1));
};


/**
 * @param {?proto.bragi.CsgoTeamStatistics|undefined} value
 * @return {!proto.bragi.HistoricalStatisticsResponse} returns this
*/
proto.bragi.HistoricalStatisticsResponse.prototype.setCsgo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.HistoricalStatisticsResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.HistoricalStatisticsResponse} returns this
 */
proto.bragi.HistoricalStatisticsResponse.prototype.clearCsgo = function() {
  return this.setCsgo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.HistoricalStatisticsResponse.prototype.hasCsgo = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.LastFiveEncountersResponse.repeatedFields_ = [1];



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
proto.bragi.LastFiveEncountersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.LastFiveEncountersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.LastFiveEncountersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.LastFiveEncountersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    matchesList: jspb.Message.toObjectList(msg.getMatchesList(),
    proto.bragi.Match.toObject, includeInstance)
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
 * @return {!proto.bragi.LastFiveEncountersResponse}
 */
proto.bragi.LastFiveEncountersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.LastFiveEncountersResponse;
  return proto.bragi.LastFiveEncountersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.LastFiveEncountersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.LastFiveEncountersResponse}
 */
proto.bragi.LastFiveEncountersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Match;
      reader.readMessage(value,proto.bragi.Match.deserializeBinaryFromReader);
      msg.addMatches(value);
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
proto.bragi.LastFiveEncountersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.LastFiveEncountersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.LastFiveEncountersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.LastFiveEncountersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatchesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bragi.Match.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Match matches = 1;
 * @return {!Array<!proto.bragi.Match>}
 */
proto.bragi.LastFiveEncountersResponse.prototype.getMatchesList = function() {
  return /** @type{!Array<!proto.bragi.Match>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.Match, 1));
};


/**
 * @param {!Array<!proto.bragi.Match>} value
 * @return {!proto.bragi.LastFiveEncountersResponse} returns this
*/
proto.bragi.LastFiveEncountersResponse.prototype.setMatchesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bragi.Match=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.Match}
 */
proto.bragi.LastFiveEncountersResponse.prototype.addMatches = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bragi.Match, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.LastFiveEncountersResponse} returns this
 */
proto.bragi.LastFiveEncountersResponse.prototype.clearMatchesList = function() {
  return this.setMatchesList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bragi.PostMapStatisticsResponse.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.bragi.PostMapStatisticsResponse.PostMapStatisticsCase = {
  POST_MAP_STATISTICS_NOT_SET: 0,
  CSGO: 1
};

/**
 * @return {proto.bragi.PostMapStatisticsResponse.PostMapStatisticsCase}
 */
proto.bragi.PostMapStatisticsResponse.prototype.getPostMapStatisticsCase = function() {
  return /** @type {proto.bragi.PostMapStatisticsResponse.PostMapStatisticsCase} */(jspb.Message.computeOneofCase(this, proto.bragi.PostMapStatisticsResponse.oneofGroups_[0]));
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
proto.bragi.PostMapStatisticsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.PostMapStatisticsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.PostMapStatisticsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.PostMapStatisticsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    csgo: (f = msg.getCsgo()) && proto.bragi.CsgoPostMapStatistics.toObject(includeInstance, f)
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
 * @return {!proto.bragi.PostMapStatisticsResponse}
 */
proto.bragi.PostMapStatisticsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.PostMapStatisticsResponse;
  return proto.bragi.PostMapStatisticsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.PostMapStatisticsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.PostMapStatisticsResponse}
 */
proto.bragi.PostMapStatisticsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CsgoPostMapStatistics;
      reader.readMessage(value,proto.bragi.CsgoPostMapStatistics.deserializeBinaryFromReader);
      msg.setCsgo(value);
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
proto.bragi.PostMapStatisticsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.PostMapStatisticsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.PostMapStatisticsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.PostMapStatisticsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCsgo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CsgoPostMapStatistics.serializeBinaryToWriter
    );
  }
};


/**
 * optional CsgoPostMapStatistics csgo = 1;
 * @return {?proto.bragi.CsgoPostMapStatistics}
 */
proto.bragi.PostMapStatisticsResponse.prototype.getCsgo = function() {
  return /** @type{?proto.bragi.CsgoPostMapStatistics} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoPostMapStatistics, 1));
};


/**
 * @param {?proto.bragi.CsgoPostMapStatistics|undefined} value
 * @return {!proto.bragi.PostMapStatisticsResponse} returns this
*/
proto.bragi.PostMapStatisticsResponse.prototype.setCsgo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.PostMapStatisticsResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.PostMapStatisticsResponse} returns this
 */
proto.bragi.PostMapStatisticsResponse.prototype.clearCsgo = function() {
  return this.setCsgo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.PostMapStatisticsResponse.prototype.hasCsgo = function() {
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
proto.bragi.TournamentInfoResponse.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.bragi.TournamentInfoResponse.TournamentInfoCase = {
  TOURNAMENT_INFO_NOT_SET: 0,
  CSGO: 1
};

/**
 * @return {proto.bragi.TournamentInfoResponse.TournamentInfoCase}
 */
proto.bragi.TournamentInfoResponse.prototype.getTournamentInfoCase = function() {
  return /** @type {proto.bragi.TournamentInfoResponse.TournamentInfoCase} */(jspb.Message.computeOneofCase(this, proto.bragi.TournamentInfoResponse.oneofGroups_[0]));
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
proto.bragi.TournamentInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.TournamentInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.TournamentInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.TournamentInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    csgo: (f = msg.getCsgo()) && proto.bragi.CsgoTournamentInfo.toObject(includeInstance, f)
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
 * @return {!proto.bragi.TournamentInfoResponse}
 */
proto.bragi.TournamentInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.TournamentInfoResponse;
  return proto.bragi.TournamentInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.TournamentInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.TournamentInfoResponse}
 */
proto.bragi.TournamentInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CsgoTournamentInfo;
      reader.readMessage(value,proto.bragi.CsgoTournamentInfo.deserializeBinaryFromReader);
      msg.setCsgo(value);
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
proto.bragi.TournamentInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.TournamentInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.TournamentInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.TournamentInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCsgo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CsgoTournamentInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional CsgoTournamentInfo csgo = 1;
 * @return {?proto.bragi.CsgoTournamentInfo}
 */
proto.bragi.TournamentInfoResponse.prototype.getCsgo = function() {
  return /** @type{?proto.bragi.CsgoTournamentInfo} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoTournamentInfo, 1));
};


/**
 * @param {?proto.bragi.CsgoTournamentInfo|undefined} value
 * @return {!proto.bragi.TournamentInfoResponse} returns this
*/
proto.bragi.TournamentInfoResponse.prototype.setCsgo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.TournamentInfoResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.TournamentInfoResponse} returns this
 */
proto.bragi.TournamentInfoResponse.prototype.clearCsgo = function() {
  return this.setCsgo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.TournamentInfoResponse.prototype.hasCsgo = function() {
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
proto.bragi.TournamentStatisticsResponse.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.bragi.TournamentStatisticsResponse.TournamentStatisticsCase = {
  TOURNAMENT_STATISTICS_NOT_SET: 0,
  CSGO: 1
};

/**
 * @return {proto.bragi.TournamentStatisticsResponse.TournamentStatisticsCase}
 */
proto.bragi.TournamentStatisticsResponse.prototype.getTournamentStatisticsCase = function() {
  return /** @type {proto.bragi.TournamentStatisticsResponse.TournamentStatisticsCase} */(jspb.Message.computeOneofCase(this, proto.bragi.TournamentStatisticsResponse.oneofGroups_[0]));
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
proto.bragi.TournamentStatisticsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.TournamentStatisticsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.TournamentStatisticsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.TournamentStatisticsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    csgo: (f = msg.getCsgo()) && proto.bragi.CsgoTournamentStatistics.toObject(includeInstance, f)
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
 * @return {!proto.bragi.TournamentStatisticsResponse}
 */
proto.bragi.TournamentStatisticsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.TournamentStatisticsResponse;
  return proto.bragi.TournamentStatisticsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.TournamentStatisticsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.TournamentStatisticsResponse}
 */
proto.bragi.TournamentStatisticsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CsgoTournamentStatistics;
      reader.readMessage(value,proto.bragi.CsgoTournamentStatistics.deserializeBinaryFromReader);
      msg.setCsgo(value);
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
proto.bragi.TournamentStatisticsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.TournamentStatisticsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.TournamentStatisticsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.TournamentStatisticsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCsgo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CsgoTournamentStatistics.serializeBinaryToWriter
    );
  }
};


/**
 * optional CsgoTournamentStatistics csgo = 1;
 * @return {?proto.bragi.CsgoTournamentStatistics}
 */
proto.bragi.TournamentStatisticsResponse.prototype.getCsgo = function() {
  return /** @type{?proto.bragi.CsgoTournamentStatistics} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoTournamentStatistics, 1));
};


/**
 * @param {?proto.bragi.CsgoTournamentStatistics|undefined} value
 * @return {!proto.bragi.TournamentStatisticsResponse} returns this
*/
proto.bragi.TournamentStatisticsResponse.prototype.setCsgo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.TournamentStatisticsResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.TournamentStatisticsResponse} returns this
 */
proto.bragi.TournamentStatisticsResponse.prototype.clearCsgo = function() {
  return this.setCsgo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.TournamentStatisticsResponse.prototype.hasCsgo = function() {
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
proto.bragi.TeamTournamentStatisticsResponse.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.bragi.TeamTournamentStatisticsResponse.TeamsTournamentStatisticsCase = {
  TEAMS_TOURNAMENT_STATISTICS_NOT_SET: 0,
  CSGO: 1
};

/**
 * @return {proto.bragi.TeamTournamentStatisticsResponse.TeamsTournamentStatisticsCase}
 */
proto.bragi.TeamTournamentStatisticsResponse.prototype.getTeamsTournamentStatisticsCase = function() {
  return /** @type {proto.bragi.TeamTournamentStatisticsResponse.TeamsTournamentStatisticsCase} */(jspb.Message.computeOneofCase(this, proto.bragi.TeamTournamentStatisticsResponse.oneofGroups_[0]));
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
proto.bragi.TeamTournamentStatisticsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.TeamTournamentStatisticsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.TeamTournamentStatisticsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.TeamTournamentStatisticsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    csgo: (f = msg.getCsgo()) && proto.bragi.CsgoTeamStatistics.toObject(includeInstance, f)
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
 * @return {!proto.bragi.TeamTournamentStatisticsResponse}
 */
proto.bragi.TeamTournamentStatisticsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.TeamTournamentStatisticsResponse;
  return proto.bragi.TeamTournamentStatisticsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.TeamTournamentStatisticsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.TeamTournamentStatisticsResponse}
 */
proto.bragi.TeamTournamentStatisticsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CsgoTeamStatistics;
      reader.readMessage(value,proto.bragi.CsgoTeamStatistics.deserializeBinaryFromReader);
      msg.setCsgo(value);
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
proto.bragi.TeamTournamentStatisticsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.TeamTournamentStatisticsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.TeamTournamentStatisticsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.TeamTournamentStatisticsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCsgo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CsgoTeamStatistics.serializeBinaryToWriter
    );
  }
};


/**
 * optional CsgoTeamStatistics csgo = 1;
 * @return {?proto.bragi.CsgoTeamStatistics}
 */
proto.bragi.TeamTournamentStatisticsResponse.prototype.getCsgo = function() {
  return /** @type{?proto.bragi.CsgoTeamStatistics} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoTeamStatistics, 1));
};


/**
 * @param {?proto.bragi.CsgoTeamStatistics|undefined} value
 * @return {!proto.bragi.TeamTournamentStatisticsResponse} returns this
*/
proto.bragi.TeamTournamentStatisticsResponse.prototype.setCsgo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.TeamTournamentStatisticsResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.TeamTournamentStatisticsResponse} returns this
 */
proto.bragi.TeamTournamentStatisticsResponse.prototype.clearCsgo = function() {
  return this.setCsgo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.TeamTournamentStatisticsResponse.prototype.hasCsgo = function() {
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
proto.bragi.PlayerStatisticsAccordingRoleResponse.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.bragi.PlayerStatisticsAccordingRoleResponse.PlayerStatisticsAccordingRoleCase = {
  PLAYER_STATISTICS_ACCORDING_ROLE_NOT_SET: 0,
  CSGO: 1
};

/**
 * @return {proto.bragi.PlayerStatisticsAccordingRoleResponse.PlayerStatisticsAccordingRoleCase}
 */
proto.bragi.PlayerStatisticsAccordingRoleResponse.prototype.getPlayerStatisticsAccordingRoleCase = function() {
  return /** @type {proto.bragi.PlayerStatisticsAccordingRoleResponse.PlayerStatisticsAccordingRoleCase} */(jspb.Message.computeOneofCase(this, proto.bragi.PlayerStatisticsAccordingRoleResponse.oneofGroups_[0]));
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
proto.bragi.PlayerStatisticsAccordingRoleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.PlayerStatisticsAccordingRoleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.PlayerStatisticsAccordingRoleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.PlayerStatisticsAccordingRoleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    csgo: (f = msg.getCsgo()) && proto.bragi.CsgoPlayerStatistics.toObject(includeInstance, f)
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
 * @return {!proto.bragi.PlayerStatisticsAccordingRoleResponse}
 */
proto.bragi.PlayerStatisticsAccordingRoleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.PlayerStatisticsAccordingRoleResponse;
  return proto.bragi.PlayerStatisticsAccordingRoleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.PlayerStatisticsAccordingRoleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.PlayerStatisticsAccordingRoleResponse}
 */
proto.bragi.PlayerStatisticsAccordingRoleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CsgoPlayerStatistics;
      reader.readMessage(value,proto.bragi.CsgoPlayerStatistics.deserializeBinaryFromReader);
      msg.setCsgo(value);
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
proto.bragi.PlayerStatisticsAccordingRoleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.PlayerStatisticsAccordingRoleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.PlayerStatisticsAccordingRoleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.PlayerStatisticsAccordingRoleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCsgo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CsgoPlayerStatistics.serializeBinaryToWriter
    );
  }
};


/**
 * optional CsgoPlayerStatistics csgo = 1;
 * @return {?proto.bragi.CsgoPlayerStatistics}
 */
proto.bragi.PlayerStatisticsAccordingRoleResponse.prototype.getCsgo = function() {
  return /** @type{?proto.bragi.CsgoPlayerStatistics} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoPlayerStatistics, 1));
};


/**
 * @param {?proto.bragi.CsgoPlayerStatistics|undefined} value
 * @return {!proto.bragi.PlayerStatisticsAccordingRoleResponse} returns this
*/
proto.bragi.PlayerStatisticsAccordingRoleResponse.prototype.setCsgo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.PlayerStatisticsAccordingRoleResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.PlayerStatisticsAccordingRoleResponse} returns this
 */
proto.bragi.PlayerStatisticsAccordingRoleResponse.prototype.clearCsgo = function() {
  return this.setCsgo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.PlayerStatisticsAccordingRoleResponse.prototype.hasCsgo = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.CsgoTeamStatistics.repeatedFields_ = [3,5,6,31,32];



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
proto.bragi.CsgoTeamStatistics.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoTeamStatistics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoTeamStatistics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTeamStatistics.toObject = function(includeInstance, msg) {
  var f, obj = {
    team: (f = msg.getTeam()) && proto.bragi.Team.toObject(includeInstance, f),
    playerStatisticsList: jspb.Message.toObjectList(msg.getPlayerStatisticsList(),
    proto.bragi.CsgoPlayerStatistics.toObject, includeInstance),
    mapVote: (f = msg.getMapVote()) && proto.bragi.CsgoMapVote.toObject(includeInstance, f),
    mapWinrateList: jspb.Message.toObjectList(msg.getMapWinrateList(),
    proto.bragi.CsgoMapStatistics.toObject, includeInstance),
    roundWinrateList: jspb.Message.toObjectList(msg.getRoundWinrateList(),
    proto.bragi.CsgoMapStatisticsAccordingSide.toObject, includeInstance),
    overallMapWinrate: (f = msg.getOverallMapWinrate()) && proto.bragi.StatisticsValues.toObject(includeInstance, f),
    overallRoundWinrate: (f = msg.getOverallRoundWinrate()) && proto.bragi.CsgoStatisticsSideValues.toObject(includeInstance, f),
    pistolWinrate: (f = msg.getPistolWinrate()) && proto.bragi.CsgoStatisticsSideValues.toObject(includeInstance, f),
    pistolWinConversion: (f = msg.getPistolWinConversion()) && proto.bragi.CsgoStatisticsSideValues.toObject(includeInstance, f),
    pistolLossConversion: (f = msg.getPistolLossConversion()) && proto.bragi.CsgoStatisticsSideValues.toObject(includeInstance, f),
    kills: (f = msg.getKills()) && proto.bragi.CsgoStatisticsSideValues.toObject(includeInstance, f),
    deaths: (f = msg.getDeaths()) && proto.bragi.CsgoStatisticsSideValues.toObject(includeInstance, f),
    killsOverDeaths: (f = msg.getKillsOverDeaths()) && proto.bragi.CsgoStatisticsSideValues.toObject(includeInstance, f),
    assists: (f = msg.getAssists()) && proto.bragi.CsgoStatisticsSideValues.toObject(includeInstance, f),
    flashAssists: (f = msg.getFlashAssists()) && proto.bragi.CsgoStatisticsSideValues.toObject(includeInstance, f),
    damage: (f = msg.getDamage()) && proto.bragi.CsgoStatisticsSideValues.toObject(includeInstance, f),
    headshotRate: (f = msg.getHeadshotRate()) && proto.bragi.CsgoStatisticsSideValues.toObject(includeInstance, f),
    openingKills: (f = msg.getOpeningKills()) && proto.bragi.CsgoStatisticsSideValues.toObject(includeInstance, f),
    openingConversion: (f = msg.getOpeningConversion()) && proto.bragi.CsgoStatisticsSideValues.toObject(includeInstance, f),
    openingDeathConversion: (f = msg.getOpeningDeathConversion()) && proto.bragi.CsgoStatisticsSideValues.toObject(includeInstance, f),
    awpKills: (f = msg.getAwpKills()) && proto.bragi.CsgoStatisticsSideValues.toObject(includeInstance, f),
    eliminationWinrate: (f = msg.getEliminationWinrate()) && proto.bragi.CsgoStatisticsSideValues.toObject(includeInstance, f),
    objectiveWinrate: (f = msg.getObjectiveWinrate()) && proto.bragi.CsgoStatisticsSideValues.toObject(includeInstance, f),
    utilityDamage: (f = msg.getUtilityDamage()) && proto.bragi.CsgoStatisticsSideValues.toObject(includeInstance, f),
    firstToWin3Rounds: (f = msg.getFirstToWin3Rounds()) && proto.bragi.CsgoStatisticsSideValues.toObject(includeInstance, f),
    firstToWin6Rounds: (f = msg.getFirstToWin6Rounds()) && proto.bragi.CsgoStatisticsSideValues.toObject(includeInstance, f),
    firstToWin9Rounds: (f = msg.getFirstToWin9Rounds()) && proto.bragi.CsgoStatisticsSideValues.toObject(includeInstance, f),
    firstToWin12Rounds: (f = msg.getFirstToWin12Rounds()) && proto.bragi.CsgoStatisticsSideValues.toObject(includeInstance, f),
    roundsLost: (f = msg.getRoundsLost()) && proto.bragi.CsgoStatisticsSideValues.toObject(includeInstance, f),
    favouriteWeaponsList: jspb.Message.toObjectList(msg.getFavouriteWeaponsList(),
    proto.bragi.CsgoWeaponStatistics.toObject, includeInstance),
    formList: jspb.Message.toObjectList(msg.getFormList(),
    proto.bragi.Match.toObject, includeInstance)
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
 * @return {!proto.bragi.CsgoTeamStatistics}
 */
proto.bragi.CsgoTeamStatistics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoTeamStatistics;
  return proto.bragi.CsgoTeamStatistics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoTeamStatistics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoTeamStatistics}
 */
proto.bragi.CsgoTeamStatistics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.bragi.Team;
      reader.readMessage(value,proto.bragi.Team.deserializeBinaryFromReader);
      msg.setTeam(value);
      break;
    case 3:
      var value = new proto.bragi.CsgoPlayerStatistics;
      reader.readMessage(value,proto.bragi.CsgoPlayerStatistics.deserializeBinaryFromReader);
      msg.addPlayerStatistics(value);
      break;
    case 4:
      var value = new proto.bragi.CsgoMapVote;
      reader.readMessage(value,proto.bragi.CsgoMapVote.deserializeBinaryFromReader);
      msg.setMapVote(value);
      break;
    case 5:
      var value = new proto.bragi.CsgoMapStatistics;
      reader.readMessage(value,proto.bragi.CsgoMapStatistics.deserializeBinaryFromReader);
      msg.addMapWinrate(value);
      break;
    case 6:
      var value = new proto.bragi.CsgoMapStatisticsAccordingSide;
      reader.readMessage(value,proto.bragi.CsgoMapStatisticsAccordingSide.deserializeBinaryFromReader);
      msg.addRoundWinrate(value);
      break;
    case 7:
      var value = new proto.bragi.StatisticsValues;
      reader.readMessage(value,proto.bragi.StatisticsValues.deserializeBinaryFromReader);
      msg.setOverallMapWinrate(value);
      break;
    case 8:
      var value = new proto.bragi.CsgoStatisticsSideValues;
      reader.readMessage(value,proto.bragi.CsgoStatisticsSideValues.deserializeBinaryFromReader);
      msg.setOverallRoundWinrate(value);
      break;
    case 9:
      var value = new proto.bragi.CsgoStatisticsSideValues;
      reader.readMessage(value,proto.bragi.CsgoStatisticsSideValues.deserializeBinaryFromReader);
      msg.setPistolWinrate(value);
      break;
    case 10:
      var value = new proto.bragi.CsgoStatisticsSideValues;
      reader.readMessage(value,proto.bragi.CsgoStatisticsSideValues.deserializeBinaryFromReader);
      msg.setPistolWinConversion(value);
      break;
    case 11:
      var value = new proto.bragi.CsgoStatisticsSideValues;
      reader.readMessage(value,proto.bragi.CsgoStatisticsSideValues.deserializeBinaryFromReader);
      msg.setPistolLossConversion(value);
      break;
    case 12:
      var value = new proto.bragi.CsgoStatisticsSideValues;
      reader.readMessage(value,proto.bragi.CsgoStatisticsSideValues.deserializeBinaryFromReader);
      msg.setKills(value);
      break;
    case 13:
      var value = new proto.bragi.CsgoStatisticsSideValues;
      reader.readMessage(value,proto.bragi.CsgoStatisticsSideValues.deserializeBinaryFromReader);
      msg.setDeaths(value);
      break;
    case 14:
      var value = new proto.bragi.CsgoStatisticsSideValues;
      reader.readMessage(value,proto.bragi.CsgoStatisticsSideValues.deserializeBinaryFromReader);
      msg.setKillsOverDeaths(value);
      break;
    case 15:
      var value = new proto.bragi.CsgoStatisticsSideValues;
      reader.readMessage(value,proto.bragi.CsgoStatisticsSideValues.deserializeBinaryFromReader);
      msg.setAssists(value);
      break;
    case 16:
      var value = new proto.bragi.CsgoStatisticsSideValues;
      reader.readMessage(value,proto.bragi.CsgoStatisticsSideValues.deserializeBinaryFromReader);
      msg.setFlashAssists(value);
      break;
    case 17:
      var value = new proto.bragi.CsgoStatisticsSideValues;
      reader.readMessage(value,proto.bragi.CsgoStatisticsSideValues.deserializeBinaryFromReader);
      msg.setDamage(value);
      break;
    case 18:
      var value = new proto.bragi.CsgoStatisticsSideValues;
      reader.readMessage(value,proto.bragi.CsgoStatisticsSideValues.deserializeBinaryFromReader);
      msg.setHeadshotRate(value);
      break;
    case 19:
      var value = new proto.bragi.CsgoStatisticsSideValues;
      reader.readMessage(value,proto.bragi.CsgoStatisticsSideValues.deserializeBinaryFromReader);
      msg.setOpeningKills(value);
      break;
    case 20:
      var value = new proto.bragi.CsgoStatisticsSideValues;
      reader.readMessage(value,proto.bragi.CsgoStatisticsSideValues.deserializeBinaryFromReader);
      msg.setOpeningConversion(value);
      break;
    case 21:
      var value = new proto.bragi.CsgoStatisticsSideValues;
      reader.readMessage(value,proto.bragi.CsgoStatisticsSideValues.deserializeBinaryFromReader);
      msg.setOpeningDeathConversion(value);
      break;
    case 22:
      var value = new proto.bragi.CsgoStatisticsSideValues;
      reader.readMessage(value,proto.bragi.CsgoStatisticsSideValues.deserializeBinaryFromReader);
      msg.setAwpKills(value);
      break;
    case 23:
      var value = new proto.bragi.CsgoStatisticsSideValues;
      reader.readMessage(value,proto.bragi.CsgoStatisticsSideValues.deserializeBinaryFromReader);
      msg.setEliminationWinrate(value);
      break;
    case 24:
      var value = new proto.bragi.CsgoStatisticsSideValues;
      reader.readMessage(value,proto.bragi.CsgoStatisticsSideValues.deserializeBinaryFromReader);
      msg.setObjectiveWinrate(value);
      break;
    case 25:
      var value = new proto.bragi.CsgoStatisticsSideValues;
      reader.readMessage(value,proto.bragi.CsgoStatisticsSideValues.deserializeBinaryFromReader);
      msg.setUtilityDamage(value);
      break;
    case 26:
      var value = new proto.bragi.CsgoStatisticsSideValues;
      reader.readMessage(value,proto.bragi.CsgoStatisticsSideValues.deserializeBinaryFromReader);
      msg.setFirstToWin3Rounds(value);
      break;
    case 27:
      var value = new proto.bragi.CsgoStatisticsSideValues;
      reader.readMessage(value,proto.bragi.CsgoStatisticsSideValues.deserializeBinaryFromReader);
      msg.setFirstToWin6Rounds(value);
      break;
    case 28:
      var value = new proto.bragi.CsgoStatisticsSideValues;
      reader.readMessage(value,proto.bragi.CsgoStatisticsSideValues.deserializeBinaryFromReader);
      msg.setFirstToWin9Rounds(value);
      break;
    case 29:
      var value = new proto.bragi.CsgoStatisticsSideValues;
      reader.readMessage(value,proto.bragi.CsgoStatisticsSideValues.deserializeBinaryFromReader);
      msg.setFirstToWin12Rounds(value);
      break;
    case 30:
      var value = new proto.bragi.CsgoStatisticsSideValues;
      reader.readMessage(value,proto.bragi.CsgoStatisticsSideValues.deserializeBinaryFromReader);
      msg.setRoundsLost(value);
      break;
    case 31:
      var value = new proto.bragi.CsgoWeaponStatistics;
      reader.readMessage(value,proto.bragi.CsgoWeaponStatistics.deserializeBinaryFromReader);
      msg.addFavouriteWeapons(value);
      break;
    case 32:
      var value = new proto.bragi.Match;
      reader.readMessage(value,proto.bragi.Match.deserializeBinaryFromReader);
      msg.addForm(value);
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
proto.bragi.CsgoTeamStatistics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoTeamStatistics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoTeamStatistics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTeamStatistics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeam();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.Team.serializeBinaryToWriter
    );
  }
  f = message.getPlayerStatisticsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.bragi.CsgoPlayerStatistics.serializeBinaryToWriter
    );
  }
  f = message.getMapVote();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.CsgoMapVote.serializeBinaryToWriter
    );
  }
  f = message.getMapWinrateList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.bragi.CsgoMapStatistics.serializeBinaryToWriter
    );
  }
  f = message.getRoundWinrateList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.bragi.CsgoMapStatisticsAccordingSide.serializeBinaryToWriter
    );
  }
  f = message.getOverallMapWinrate();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bragi.StatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getOverallRoundWinrate();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.bragi.CsgoStatisticsSideValues.serializeBinaryToWriter
    );
  }
  f = message.getPistolWinrate();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.bragi.CsgoStatisticsSideValues.serializeBinaryToWriter
    );
  }
  f = message.getPistolWinConversion();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.bragi.CsgoStatisticsSideValues.serializeBinaryToWriter
    );
  }
  f = message.getPistolLossConversion();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.bragi.CsgoStatisticsSideValues.serializeBinaryToWriter
    );
  }
  f = message.getKills();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.bragi.CsgoStatisticsSideValues.serializeBinaryToWriter
    );
  }
  f = message.getDeaths();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.bragi.CsgoStatisticsSideValues.serializeBinaryToWriter
    );
  }
  f = message.getKillsOverDeaths();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.bragi.CsgoStatisticsSideValues.serializeBinaryToWriter
    );
  }
  f = message.getAssists();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.bragi.CsgoStatisticsSideValues.serializeBinaryToWriter
    );
  }
  f = message.getFlashAssists();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.bragi.CsgoStatisticsSideValues.serializeBinaryToWriter
    );
  }
  f = message.getDamage();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.bragi.CsgoStatisticsSideValues.serializeBinaryToWriter
    );
  }
  f = message.getHeadshotRate();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.bragi.CsgoStatisticsSideValues.serializeBinaryToWriter
    );
  }
  f = message.getOpeningKills();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.bragi.CsgoStatisticsSideValues.serializeBinaryToWriter
    );
  }
  f = message.getOpeningConversion();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.bragi.CsgoStatisticsSideValues.serializeBinaryToWriter
    );
  }
  f = message.getOpeningDeathConversion();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.bragi.CsgoStatisticsSideValues.serializeBinaryToWriter
    );
  }
  f = message.getAwpKills();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.bragi.CsgoStatisticsSideValues.serializeBinaryToWriter
    );
  }
  f = message.getEliminationWinrate();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.bragi.CsgoStatisticsSideValues.serializeBinaryToWriter
    );
  }
  f = message.getObjectiveWinrate();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.bragi.CsgoStatisticsSideValues.serializeBinaryToWriter
    );
  }
  f = message.getUtilityDamage();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto.bragi.CsgoStatisticsSideValues.serializeBinaryToWriter
    );
  }
  f = message.getFirstToWin3Rounds();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto.bragi.CsgoStatisticsSideValues.serializeBinaryToWriter
    );
  }
  f = message.getFirstToWin6Rounds();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto.bragi.CsgoStatisticsSideValues.serializeBinaryToWriter
    );
  }
  f = message.getFirstToWin9Rounds();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      proto.bragi.CsgoStatisticsSideValues.serializeBinaryToWriter
    );
  }
  f = message.getFirstToWin12Rounds();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto.bragi.CsgoStatisticsSideValues.serializeBinaryToWriter
    );
  }
  f = message.getRoundsLost();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto.bragi.CsgoStatisticsSideValues.serializeBinaryToWriter
    );
  }
  f = message.getFavouriteWeaponsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      31,
      f,
      proto.bragi.CsgoWeaponStatistics.serializeBinaryToWriter
    );
  }
  f = message.getFormList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      32,
      f,
      proto.bragi.Match.serializeBinaryToWriter
    );
  }
};


/**
 * optional Team team = 2;
 * @return {?proto.bragi.Team}
 */
proto.bragi.CsgoTeamStatistics.prototype.getTeam = function() {
  return /** @type{?proto.bragi.Team} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Team, 2));
};


/**
 * @param {?proto.bragi.Team|undefined} value
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
*/
proto.bragi.CsgoTeamStatistics.prototype.setTeam = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
 */
proto.bragi.CsgoTeamStatistics.prototype.clearTeam = function() {
  return this.setTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamStatistics.prototype.hasTeam = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated CsgoPlayerStatistics player_statistics = 3;
 * @return {!Array<!proto.bragi.CsgoPlayerStatistics>}
 */
proto.bragi.CsgoTeamStatistics.prototype.getPlayerStatisticsList = function() {
  return /** @type{!Array<!proto.bragi.CsgoPlayerStatistics>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.CsgoPlayerStatistics, 3));
};


/**
 * @param {!Array<!proto.bragi.CsgoPlayerStatistics>} value
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
*/
proto.bragi.CsgoTeamStatistics.prototype.setPlayerStatisticsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.bragi.CsgoPlayerStatistics=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.CsgoPlayerStatistics}
 */
proto.bragi.CsgoTeamStatistics.prototype.addPlayerStatistics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.bragi.CsgoPlayerStatistics, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
 */
proto.bragi.CsgoTeamStatistics.prototype.clearPlayerStatisticsList = function() {
  return this.setPlayerStatisticsList([]);
};


/**
 * optional CsgoMapVote map_vote = 4;
 * @return {?proto.bragi.CsgoMapVote}
 */
proto.bragi.CsgoTeamStatistics.prototype.getMapVote = function() {
  return /** @type{?proto.bragi.CsgoMapVote} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoMapVote, 4));
};


/**
 * @param {?proto.bragi.CsgoMapVote|undefined} value
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
*/
proto.bragi.CsgoTeamStatistics.prototype.setMapVote = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
 */
proto.bragi.CsgoTeamStatistics.prototype.clearMapVote = function() {
  return this.setMapVote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamStatistics.prototype.hasMapVote = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated CsgoMapStatistics map_winrate = 5;
 * @return {!Array<!proto.bragi.CsgoMapStatistics>}
 */
proto.bragi.CsgoTeamStatistics.prototype.getMapWinrateList = function() {
  return /** @type{!Array<!proto.bragi.CsgoMapStatistics>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.CsgoMapStatistics, 5));
};


/**
 * @param {!Array<!proto.bragi.CsgoMapStatistics>} value
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
*/
proto.bragi.CsgoTeamStatistics.prototype.setMapWinrateList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.bragi.CsgoMapStatistics=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.CsgoMapStatistics}
 */
proto.bragi.CsgoTeamStatistics.prototype.addMapWinrate = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.bragi.CsgoMapStatistics, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
 */
proto.bragi.CsgoTeamStatistics.prototype.clearMapWinrateList = function() {
  return this.setMapWinrateList([]);
};


/**
 * repeated CsgoMapStatisticsAccordingSide round_winrate = 6;
 * @return {!Array<!proto.bragi.CsgoMapStatisticsAccordingSide>}
 */
proto.bragi.CsgoTeamStatistics.prototype.getRoundWinrateList = function() {
  return /** @type{!Array<!proto.bragi.CsgoMapStatisticsAccordingSide>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.CsgoMapStatisticsAccordingSide, 6));
};


/**
 * @param {!Array<!proto.bragi.CsgoMapStatisticsAccordingSide>} value
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
*/
proto.bragi.CsgoTeamStatistics.prototype.setRoundWinrateList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.bragi.CsgoMapStatisticsAccordingSide=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.CsgoMapStatisticsAccordingSide}
 */
proto.bragi.CsgoTeamStatistics.prototype.addRoundWinrate = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.bragi.CsgoMapStatisticsAccordingSide, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
 */
proto.bragi.CsgoTeamStatistics.prototype.clearRoundWinrateList = function() {
  return this.setRoundWinrateList([]);
};


/**
 * optional StatisticsValues overall_map_winrate = 7;
 * @return {?proto.bragi.StatisticsValues}
 */
proto.bragi.CsgoTeamStatistics.prototype.getOverallMapWinrate = function() {
  return /** @type{?proto.bragi.StatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.StatisticsValues, 7));
};


/**
 * @param {?proto.bragi.StatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
*/
proto.bragi.CsgoTeamStatistics.prototype.setOverallMapWinrate = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
 */
proto.bragi.CsgoTeamStatistics.prototype.clearOverallMapWinrate = function() {
  return this.setOverallMapWinrate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamStatistics.prototype.hasOverallMapWinrate = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional CsgoStatisticsSideValues overall_round_winrate = 8;
 * @return {?proto.bragi.CsgoStatisticsSideValues}
 */
proto.bragi.CsgoTeamStatistics.prototype.getOverallRoundWinrate = function() {
  return /** @type{?proto.bragi.CsgoStatisticsSideValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoStatisticsSideValues, 8));
};


/**
 * @param {?proto.bragi.CsgoStatisticsSideValues|undefined} value
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
*/
proto.bragi.CsgoTeamStatistics.prototype.setOverallRoundWinrate = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
 */
proto.bragi.CsgoTeamStatistics.prototype.clearOverallRoundWinrate = function() {
  return this.setOverallRoundWinrate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamStatistics.prototype.hasOverallRoundWinrate = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional CsgoStatisticsSideValues pistol_winrate = 9;
 * @return {?proto.bragi.CsgoStatisticsSideValues}
 */
proto.bragi.CsgoTeamStatistics.prototype.getPistolWinrate = function() {
  return /** @type{?proto.bragi.CsgoStatisticsSideValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoStatisticsSideValues, 9));
};


/**
 * @param {?proto.bragi.CsgoStatisticsSideValues|undefined} value
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
*/
proto.bragi.CsgoTeamStatistics.prototype.setPistolWinrate = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
 */
proto.bragi.CsgoTeamStatistics.prototype.clearPistolWinrate = function() {
  return this.setPistolWinrate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamStatistics.prototype.hasPistolWinrate = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional CsgoStatisticsSideValues pistol_win_conversion = 10;
 * @return {?proto.bragi.CsgoStatisticsSideValues}
 */
proto.bragi.CsgoTeamStatistics.prototype.getPistolWinConversion = function() {
  return /** @type{?proto.bragi.CsgoStatisticsSideValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoStatisticsSideValues, 10));
};


/**
 * @param {?proto.bragi.CsgoStatisticsSideValues|undefined} value
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
*/
proto.bragi.CsgoTeamStatistics.prototype.setPistolWinConversion = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
 */
proto.bragi.CsgoTeamStatistics.prototype.clearPistolWinConversion = function() {
  return this.setPistolWinConversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamStatistics.prototype.hasPistolWinConversion = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional CsgoStatisticsSideValues pistol_loss_conversion = 11;
 * @return {?proto.bragi.CsgoStatisticsSideValues}
 */
proto.bragi.CsgoTeamStatistics.prototype.getPistolLossConversion = function() {
  return /** @type{?proto.bragi.CsgoStatisticsSideValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoStatisticsSideValues, 11));
};


/**
 * @param {?proto.bragi.CsgoStatisticsSideValues|undefined} value
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
*/
proto.bragi.CsgoTeamStatistics.prototype.setPistolLossConversion = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
 */
proto.bragi.CsgoTeamStatistics.prototype.clearPistolLossConversion = function() {
  return this.setPistolLossConversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamStatistics.prototype.hasPistolLossConversion = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional CsgoStatisticsSideValues kills = 12;
 * @return {?proto.bragi.CsgoStatisticsSideValues}
 */
proto.bragi.CsgoTeamStatistics.prototype.getKills = function() {
  return /** @type{?proto.bragi.CsgoStatisticsSideValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoStatisticsSideValues, 12));
};


/**
 * @param {?proto.bragi.CsgoStatisticsSideValues|undefined} value
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
*/
proto.bragi.CsgoTeamStatistics.prototype.setKills = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
 */
proto.bragi.CsgoTeamStatistics.prototype.clearKills = function() {
  return this.setKills(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamStatistics.prototype.hasKills = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional CsgoStatisticsSideValues deaths = 13;
 * @return {?proto.bragi.CsgoStatisticsSideValues}
 */
proto.bragi.CsgoTeamStatistics.prototype.getDeaths = function() {
  return /** @type{?proto.bragi.CsgoStatisticsSideValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoStatisticsSideValues, 13));
};


/**
 * @param {?proto.bragi.CsgoStatisticsSideValues|undefined} value
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
*/
proto.bragi.CsgoTeamStatistics.prototype.setDeaths = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
 */
proto.bragi.CsgoTeamStatistics.prototype.clearDeaths = function() {
  return this.setDeaths(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamStatistics.prototype.hasDeaths = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional CsgoStatisticsSideValues kills_over_deaths = 14;
 * @return {?proto.bragi.CsgoStatisticsSideValues}
 */
proto.bragi.CsgoTeamStatistics.prototype.getKillsOverDeaths = function() {
  return /** @type{?proto.bragi.CsgoStatisticsSideValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoStatisticsSideValues, 14));
};


/**
 * @param {?proto.bragi.CsgoStatisticsSideValues|undefined} value
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
*/
proto.bragi.CsgoTeamStatistics.prototype.setKillsOverDeaths = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
 */
proto.bragi.CsgoTeamStatistics.prototype.clearKillsOverDeaths = function() {
  return this.setKillsOverDeaths(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamStatistics.prototype.hasKillsOverDeaths = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional CsgoStatisticsSideValues assists = 15;
 * @return {?proto.bragi.CsgoStatisticsSideValues}
 */
proto.bragi.CsgoTeamStatistics.prototype.getAssists = function() {
  return /** @type{?proto.bragi.CsgoStatisticsSideValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoStatisticsSideValues, 15));
};


/**
 * @param {?proto.bragi.CsgoStatisticsSideValues|undefined} value
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
*/
proto.bragi.CsgoTeamStatistics.prototype.setAssists = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
 */
proto.bragi.CsgoTeamStatistics.prototype.clearAssists = function() {
  return this.setAssists(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamStatistics.prototype.hasAssists = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional CsgoStatisticsSideValues flash_assists = 16;
 * @return {?proto.bragi.CsgoStatisticsSideValues}
 */
proto.bragi.CsgoTeamStatistics.prototype.getFlashAssists = function() {
  return /** @type{?proto.bragi.CsgoStatisticsSideValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoStatisticsSideValues, 16));
};


/**
 * @param {?proto.bragi.CsgoStatisticsSideValues|undefined} value
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
*/
proto.bragi.CsgoTeamStatistics.prototype.setFlashAssists = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
 */
proto.bragi.CsgoTeamStatistics.prototype.clearFlashAssists = function() {
  return this.setFlashAssists(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamStatistics.prototype.hasFlashAssists = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional CsgoStatisticsSideValues damage = 17;
 * @return {?proto.bragi.CsgoStatisticsSideValues}
 */
proto.bragi.CsgoTeamStatistics.prototype.getDamage = function() {
  return /** @type{?proto.bragi.CsgoStatisticsSideValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoStatisticsSideValues, 17));
};


/**
 * @param {?proto.bragi.CsgoStatisticsSideValues|undefined} value
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
*/
proto.bragi.CsgoTeamStatistics.prototype.setDamage = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
 */
proto.bragi.CsgoTeamStatistics.prototype.clearDamage = function() {
  return this.setDamage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamStatistics.prototype.hasDamage = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional CsgoStatisticsSideValues headshot_rate = 18;
 * @return {?proto.bragi.CsgoStatisticsSideValues}
 */
proto.bragi.CsgoTeamStatistics.prototype.getHeadshotRate = function() {
  return /** @type{?proto.bragi.CsgoStatisticsSideValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoStatisticsSideValues, 18));
};


/**
 * @param {?proto.bragi.CsgoStatisticsSideValues|undefined} value
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
*/
proto.bragi.CsgoTeamStatistics.prototype.setHeadshotRate = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
 */
proto.bragi.CsgoTeamStatistics.prototype.clearHeadshotRate = function() {
  return this.setHeadshotRate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamStatistics.prototype.hasHeadshotRate = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional CsgoStatisticsSideValues opening_kills = 19;
 * @return {?proto.bragi.CsgoStatisticsSideValues}
 */
proto.bragi.CsgoTeamStatistics.prototype.getOpeningKills = function() {
  return /** @type{?proto.bragi.CsgoStatisticsSideValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoStatisticsSideValues, 19));
};


/**
 * @param {?proto.bragi.CsgoStatisticsSideValues|undefined} value
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
*/
proto.bragi.CsgoTeamStatistics.prototype.setOpeningKills = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
 */
proto.bragi.CsgoTeamStatistics.prototype.clearOpeningKills = function() {
  return this.setOpeningKills(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamStatistics.prototype.hasOpeningKills = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional CsgoStatisticsSideValues opening_conversion = 20;
 * @return {?proto.bragi.CsgoStatisticsSideValues}
 */
proto.bragi.CsgoTeamStatistics.prototype.getOpeningConversion = function() {
  return /** @type{?proto.bragi.CsgoStatisticsSideValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoStatisticsSideValues, 20));
};


/**
 * @param {?proto.bragi.CsgoStatisticsSideValues|undefined} value
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
*/
proto.bragi.CsgoTeamStatistics.prototype.setOpeningConversion = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
 */
proto.bragi.CsgoTeamStatistics.prototype.clearOpeningConversion = function() {
  return this.setOpeningConversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamStatistics.prototype.hasOpeningConversion = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional CsgoStatisticsSideValues opening_death_conversion = 21;
 * @return {?proto.bragi.CsgoStatisticsSideValues}
 */
proto.bragi.CsgoTeamStatistics.prototype.getOpeningDeathConversion = function() {
  return /** @type{?proto.bragi.CsgoStatisticsSideValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoStatisticsSideValues, 21));
};


/**
 * @param {?proto.bragi.CsgoStatisticsSideValues|undefined} value
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
*/
proto.bragi.CsgoTeamStatistics.prototype.setOpeningDeathConversion = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
 */
proto.bragi.CsgoTeamStatistics.prototype.clearOpeningDeathConversion = function() {
  return this.setOpeningDeathConversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamStatistics.prototype.hasOpeningDeathConversion = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional CsgoStatisticsSideValues awp_kills = 22;
 * @return {?proto.bragi.CsgoStatisticsSideValues}
 */
proto.bragi.CsgoTeamStatistics.prototype.getAwpKills = function() {
  return /** @type{?proto.bragi.CsgoStatisticsSideValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoStatisticsSideValues, 22));
};


/**
 * @param {?proto.bragi.CsgoStatisticsSideValues|undefined} value
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
*/
proto.bragi.CsgoTeamStatistics.prototype.setAwpKills = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
 */
proto.bragi.CsgoTeamStatistics.prototype.clearAwpKills = function() {
  return this.setAwpKills(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamStatistics.prototype.hasAwpKills = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional CsgoStatisticsSideValues elimination_winrate = 23;
 * @return {?proto.bragi.CsgoStatisticsSideValues}
 */
proto.bragi.CsgoTeamStatistics.prototype.getEliminationWinrate = function() {
  return /** @type{?proto.bragi.CsgoStatisticsSideValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoStatisticsSideValues, 23));
};


/**
 * @param {?proto.bragi.CsgoStatisticsSideValues|undefined} value
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
*/
proto.bragi.CsgoTeamStatistics.prototype.setEliminationWinrate = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
 */
proto.bragi.CsgoTeamStatistics.prototype.clearEliminationWinrate = function() {
  return this.setEliminationWinrate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamStatistics.prototype.hasEliminationWinrate = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional CsgoStatisticsSideValues objective_winrate = 24;
 * @return {?proto.bragi.CsgoStatisticsSideValues}
 */
proto.bragi.CsgoTeamStatistics.prototype.getObjectiveWinrate = function() {
  return /** @type{?proto.bragi.CsgoStatisticsSideValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoStatisticsSideValues, 24));
};


/**
 * @param {?proto.bragi.CsgoStatisticsSideValues|undefined} value
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
*/
proto.bragi.CsgoTeamStatistics.prototype.setObjectiveWinrate = function(value) {
  return jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
 */
proto.bragi.CsgoTeamStatistics.prototype.clearObjectiveWinrate = function() {
  return this.setObjectiveWinrate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamStatistics.prototype.hasObjectiveWinrate = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional CsgoStatisticsSideValues utility_damage = 25;
 * @return {?proto.bragi.CsgoStatisticsSideValues}
 */
proto.bragi.CsgoTeamStatistics.prototype.getUtilityDamage = function() {
  return /** @type{?proto.bragi.CsgoStatisticsSideValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoStatisticsSideValues, 25));
};


/**
 * @param {?proto.bragi.CsgoStatisticsSideValues|undefined} value
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
*/
proto.bragi.CsgoTeamStatistics.prototype.setUtilityDamage = function(value) {
  return jspb.Message.setWrapperField(this, 25, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
 */
proto.bragi.CsgoTeamStatistics.prototype.clearUtilityDamage = function() {
  return this.setUtilityDamage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamStatistics.prototype.hasUtilityDamage = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional CsgoStatisticsSideValues first_to_win_3_rounds = 26;
 * @return {?proto.bragi.CsgoStatisticsSideValues}
 */
proto.bragi.CsgoTeamStatistics.prototype.getFirstToWin3Rounds = function() {
  return /** @type{?proto.bragi.CsgoStatisticsSideValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoStatisticsSideValues, 26));
};


/**
 * @param {?proto.bragi.CsgoStatisticsSideValues|undefined} value
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
*/
proto.bragi.CsgoTeamStatistics.prototype.setFirstToWin3Rounds = function(value) {
  return jspb.Message.setWrapperField(this, 26, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
 */
proto.bragi.CsgoTeamStatistics.prototype.clearFirstToWin3Rounds = function() {
  return this.setFirstToWin3Rounds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamStatistics.prototype.hasFirstToWin3Rounds = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional CsgoStatisticsSideValues first_to_win_6_rounds = 27;
 * @return {?proto.bragi.CsgoStatisticsSideValues}
 */
proto.bragi.CsgoTeamStatistics.prototype.getFirstToWin6Rounds = function() {
  return /** @type{?proto.bragi.CsgoStatisticsSideValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoStatisticsSideValues, 27));
};


/**
 * @param {?proto.bragi.CsgoStatisticsSideValues|undefined} value
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
*/
proto.bragi.CsgoTeamStatistics.prototype.setFirstToWin6Rounds = function(value) {
  return jspb.Message.setWrapperField(this, 27, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
 */
proto.bragi.CsgoTeamStatistics.prototype.clearFirstToWin6Rounds = function() {
  return this.setFirstToWin6Rounds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamStatistics.prototype.hasFirstToWin6Rounds = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional CsgoStatisticsSideValues first_to_win_9_rounds = 28;
 * @return {?proto.bragi.CsgoStatisticsSideValues}
 */
proto.bragi.CsgoTeamStatistics.prototype.getFirstToWin9Rounds = function() {
  return /** @type{?proto.bragi.CsgoStatisticsSideValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoStatisticsSideValues, 28));
};


/**
 * @param {?proto.bragi.CsgoStatisticsSideValues|undefined} value
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
*/
proto.bragi.CsgoTeamStatistics.prototype.setFirstToWin9Rounds = function(value) {
  return jspb.Message.setWrapperField(this, 28, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
 */
proto.bragi.CsgoTeamStatistics.prototype.clearFirstToWin9Rounds = function() {
  return this.setFirstToWin9Rounds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamStatistics.prototype.hasFirstToWin9Rounds = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional CsgoStatisticsSideValues first_to_win_12_rounds = 29;
 * @return {?proto.bragi.CsgoStatisticsSideValues}
 */
proto.bragi.CsgoTeamStatistics.prototype.getFirstToWin12Rounds = function() {
  return /** @type{?proto.bragi.CsgoStatisticsSideValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoStatisticsSideValues, 29));
};


/**
 * @param {?proto.bragi.CsgoStatisticsSideValues|undefined} value
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
*/
proto.bragi.CsgoTeamStatistics.prototype.setFirstToWin12Rounds = function(value) {
  return jspb.Message.setWrapperField(this, 29, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
 */
proto.bragi.CsgoTeamStatistics.prototype.clearFirstToWin12Rounds = function() {
  return this.setFirstToWin12Rounds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamStatistics.prototype.hasFirstToWin12Rounds = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional CsgoStatisticsSideValues rounds_lost = 30;
 * @return {?proto.bragi.CsgoStatisticsSideValues}
 */
proto.bragi.CsgoTeamStatistics.prototype.getRoundsLost = function() {
  return /** @type{?proto.bragi.CsgoStatisticsSideValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoStatisticsSideValues, 30));
};


/**
 * @param {?proto.bragi.CsgoStatisticsSideValues|undefined} value
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
*/
proto.bragi.CsgoTeamStatistics.prototype.setRoundsLost = function(value) {
  return jspb.Message.setWrapperField(this, 30, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
 */
proto.bragi.CsgoTeamStatistics.prototype.clearRoundsLost = function() {
  return this.setRoundsLost(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamStatistics.prototype.hasRoundsLost = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * repeated CsgoWeaponStatistics favourite_weapons = 31;
 * @return {!Array<!proto.bragi.CsgoWeaponStatistics>}
 */
proto.bragi.CsgoTeamStatistics.prototype.getFavouriteWeaponsList = function() {
  return /** @type{!Array<!proto.bragi.CsgoWeaponStatistics>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.CsgoWeaponStatistics, 31));
};


/**
 * @param {!Array<!proto.bragi.CsgoWeaponStatistics>} value
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
*/
proto.bragi.CsgoTeamStatistics.prototype.setFavouriteWeaponsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 31, value);
};


/**
 * @param {!proto.bragi.CsgoWeaponStatistics=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.CsgoWeaponStatistics}
 */
proto.bragi.CsgoTeamStatistics.prototype.addFavouriteWeapons = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 31, opt_value, proto.bragi.CsgoWeaponStatistics, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
 */
proto.bragi.CsgoTeamStatistics.prototype.clearFavouriteWeaponsList = function() {
  return this.setFavouriteWeaponsList([]);
};


/**
 * repeated Match form = 32;
 * @return {!Array<!proto.bragi.Match>}
 */
proto.bragi.CsgoTeamStatistics.prototype.getFormList = function() {
  return /** @type{!Array<!proto.bragi.Match>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.Match, 32));
};


/**
 * @param {!Array<!proto.bragi.Match>} value
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
*/
proto.bragi.CsgoTeamStatistics.prototype.setFormList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 32, value);
};


/**
 * @param {!proto.bragi.Match=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.Match}
 */
proto.bragi.CsgoTeamStatistics.prototype.addForm = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 32, opt_value, proto.bragi.Match, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CsgoTeamStatistics} returns this
 */
proto.bragi.CsgoTeamStatistics.prototype.clearFormList = function() {
  return this.setFormList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.CsgoPlayerStatistics.repeatedFields_ = [17];



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
    player: (f = msg.getPlayer()) && proto.bragi.Player.toObject(includeInstance, f),
    kills: (f = msg.getKills()) && proto.bragi.StatisticsValues.toObject(includeInstance, f),
    deaths: (f = msg.getDeaths()) && proto.bragi.StatisticsValues.toObject(includeInstance, f),
    assists: (f = msg.getAssists()) && proto.bragi.StatisticsValues.toObject(includeInstance, f),
    killsOverDeaths: (f = msg.getKillsOverDeaths()) && proto.bragi.StatisticsValues.toObject(includeInstance, f),
    damage: (f = msg.getDamage()) && proto.bragi.StatisticsValues.toObject(includeInstance, f),
    headshotRate: (f = msg.getHeadshotRate()) && proto.bragi.StatisticsValues.toObject(includeInstance, f),
    flashAssists: (f = msg.getFlashAssists()) && proto.bragi.StatisticsValues.toObject(includeInstance, f),
    openingKills: (f = msg.getOpeningKills()) && proto.bragi.StatisticsValues.toObject(includeInstance, f),
    awpKills: (f = msg.getAwpKills()) && proto.bragi.StatisticsValues.toObject(includeInstance, f),
    utilityDamage: (f = msg.getUtilityDamage()) && proto.bragi.StatisticsValues.toObject(includeInstance, f),
    enemiesFlashed: (f = msg.getEnemiesFlashed()) && proto.bragi.StatisticsValues.toObject(includeInstance, f),
    multiKillRounds: (f = msg.getMultiKillRounds()) && proto.bragi.StatisticsValues.toObject(includeInstance, f),
    clutchRounds: (f = msg.getClutchRounds()) && proto.bragi.StatisticsValues.toObject(includeInstance, f),
    lurkKills: (f = msg.getLurkKills()) && proto.bragi.StatisticsValues.toObject(includeInstance, f),
    grenadesUsed: (f = msg.getGrenadesUsed()) && proto.bragi.StatisticsValues.toObject(includeInstance, f),
    favouriteWeaponsList: jspb.Message.toObjectList(msg.getFavouriteWeaponsList(),
    proto.bragi.CsgoWeaponStatistics.toObject, includeInstance)
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
      var value = new proto.bragi.Player;
      reader.readMessage(value,proto.bragi.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    case 2:
      var value = new proto.bragi.StatisticsValues;
      reader.readMessage(value,proto.bragi.StatisticsValues.deserializeBinaryFromReader);
      msg.setKills(value);
      break;
    case 3:
      var value = new proto.bragi.StatisticsValues;
      reader.readMessage(value,proto.bragi.StatisticsValues.deserializeBinaryFromReader);
      msg.setDeaths(value);
      break;
    case 4:
      var value = new proto.bragi.StatisticsValues;
      reader.readMessage(value,proto.bragi.StatisticsValues.deserializeBinaryFromReader);
      msg.setAssists(value);
      break;
    case 5:
      var value = new proto.bragi.StatisticsValues;
      reader.readMessage(value,proto.bragi.StatisticsValues.deserializeBinaryFromReader);
      msg.setKillsOverDeaths(value);
      break;
    case 6:
      var value = new proto.bragi.StatisticsValues;
      reader.readMessage(value,proto.bragi.StatisticsValues.deserializeBinaryFromReader);
      msg.setDamage(value);
      break;
    case 7:
      var value = new proto.bragi.StatisticsValues;
      reader.readMessage(value,proto.bragi.StatisticsValues.deserializeBinaryFromReader);
      msg.setHeadshotRate(value);
      break;
    case 8:
      var value = new proto.bragi.StatisticsValues;
      reader.readMessage(value,proto.bragi.StatisticsValues.deserializeBinaryFromReader);
      msg.setFlashAssists(value);
      break;
    case 9:
      var value = new proto.bragi.StatisticsValues;
      reader.readMessage(value,proto.bragi.StatisticsValues.deserializeBinaryFromReader);
      msg.setOpeningKills(value);
      break;
    case 10:
      var value = new proto.bragi.StatisticsValues;
      reader.readMessage(value,proto.bragi.StatisticsValues.deserializeBinaryFromReader);
      msg.setAwpKills(value);
      break;
    case 11:
      var value = new proto.bragi.StatisticsValues;
      reader.readMessage(value,proto.bragi.StatisticsValues.deserializeBinaryFromReader);
      msg.setUtilityDamage(value);
      break;
    case 12:
      var value = new proto.bragi.StatisticsValues;
      reader.readMessage(value,proto.bragi.StatisticsValues.deserializeBinaryFromReader);
      msg.setEnemiesFlashed(value);
      break;
    case 13:
      var value = new proto.bragi.StatisticsValues;
      reader.readMessage(value,proto.bragi.StatisticsValues.deserializeBinaryFromReader);
      msg.setMultiKillRounds(value);
      break;
    case 14:
      var value = new proto.bragi.StatisticsValues;
      reader.readMessage(value,proto.bragi.StatisticsValues.deserializeBinaryFromReader);
      msg.setClutchRounds(value);
      break;
    case 15:
      var value = new proto.bragi.StatisticsValues;
      reader.readMessage(value,proto.bragi.StatisticsValues.deserializeBinaryFromReader);
      msg.setLurkKills(value);
      break;
    case 16:
      var value = new proto.bragi.StatisticsValues;
      reader.readMessage(value,proto.bragi.StatisticsValues.deserializeBinaryFromReader);
      msg.setGrenadesUsed(value);
      break;
    case 17:
      var value = new proto.bragi.CsgoWeaponStatistics;
      reader.readMessage(value,proto.bragi.CsgoWeaponStatistics.deserializeBinaryFromReader);
      msg.addFavouriteWeapons(value);
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
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.Player.serializeBinaryToWriter
    );
  }
  f = message.getKills();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.StatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getDeaths();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.StatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getAssists();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.StatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getKillsOverDeaths();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bragi.StatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getDamage();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bragi.StatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getHeadshotRate();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bragi.StatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getFlashAssists();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.bragi.StatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getOpeningKills();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.bragi.StatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getAwpKills();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.bragi.StatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getUtilityDamage();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.bragi.StatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getEnemiesFlashed();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.bragi.StatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getMultiKillRounds();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.bragi.StatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getClutchRounds();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.bragi.StatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getLurkKills();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.bragi.StatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getGrenadesUsed();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.bragi.StatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getFavouriteWeaponsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      17,
      f,
      proto.bragi.CsgoWeaponStatistics.serializeBinaryToWriter
    );
  }
};


/**
 * optional Player player = 1;
 * @return {?proto.bragi.Player}
 */
proto.bragi.CsgoPlayerStatistics.prototype.getPlayer = function() {
  return /** @type{?proto.bragi.Player} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Player, 1));
};


/**
 * @param {?proto.bragi.Player|undefined} value
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
*/
proto.bragi.CsgoPlayerStatistics.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerStatistics.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional StatisticsValues kills = 2;
 * @return {?proto.bragi.StatisticsValues}
 */
proto.bragi.CsgoPlayerStatistics.prototype.getKills = function() {
  return /** @type{?proto.bragi.StatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.StatisticsValues, 2));
};


/**
 * @param {?proto.bragi.StatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
*/
proto.bragi.CsgoPlayerStatistics.prototype.setKills = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.clearKills = function() {
  return this.setKills(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerStatistics.prototype.hasKills = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional StatisticsValues deaths = 3;
 * @return {?proto.bragi.StatisticsValues}
 */
proto.bragi.CsgoPlayerStatistics.prototype.getDeaths = function() {
  return /** @type{?proto.bragi.StatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.StatisticsValues, 3));
};


/**
 * @param {?proto.bragi.StatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
*/
proto.bragi.CsgoPlayerStatistics.prototype.setDeaths = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.clearDeaths = function() {
  return this.setDeaths(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerStatistics.prototype.hasDeaths = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional StatisticsValues assists = 4;
 * @return {?proto.bragi.StatisticsValues}
 */
proto.bragi.CsgoPlayerStatistics.prototype.getAssists = function() {
  return /** @type{?proto.bragi.StatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.StatisticsValues, 4));
};


/**
 * @param {?proto.bragi.StatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
*/
proto.bragi.CsgoPlayerStatistics.prototype.setAssists = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.clearAssists = function() {
  return this.setAssists(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerStatistics.prototype.hasAssists = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional StatisticsValues kills_over_deaths = 5;
 * @return {?proto.bragi.StatisticsValues}
 */
proto.bragi.CsgoPlayerStatistics.prototype.getKillsOverDeaths = function() {
  return /** @type{?proto.bragi.StatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.StatisticsValues, 5));
};


/**
 * @param {?proto.bragi.StatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
*/
proto.bragi.CsgoPlayerStatistics.prototype.setKillsOverDeaths = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.clearKillsOverDeaths = function() {
  return this.setKillsOverDeaths(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerStatistics.prototype.hasKillsOverDeaths = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional StatisticsValues damage = 6;
 * @return {?proto.bragi.StatisticsValues}
 */
proto.bragi.CsgoPlayerStatistics.prototype.getDamage = function() {
  return /** @type{?proto.bragi.StatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.StatisticsValues, 6));
};


/**
 * @param {?proto.bragi.StatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
*/
proto.bragi.CsgoPlayerStatistics.prototype.setDamage = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.clearDamage = function() {
  return this.setDamage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerStatistics.prototype.hasDamage = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional StatisticsValues headshot_rate = 7;
 * @return {?proto.bragi.StatisticsValues}
 */
proto.bragi.CsgoPlayerStatistics.prototype.getHeadshotRate = function() {
  return /** @type{?proto.bragi.StatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.StatisticsValues, 7));
};


/**
 * @param {?proto.bragi.StatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
*/
proto.bragi.CsgoPlayerStatistics.prototype.setHeadshotRate = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.clearHeadshotRate = function() {
  return this.setHeadshotRate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerStatistics.prototype.hasHeadshotRate = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional StatisticsValues flash_assists = 8;
 * @return {?proto.bragi.StatisticsValues}
 */
proto.bragi.CsgoPlayerStatistics.prototype.getFlashAssists = function() {
  return /** @type{?proto.bragi.StatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.StatisticsValues, 8));
};


/**
 * @param {?proto.bragi.StatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
*/
proto.bragi.CsgoPlayerStatistics.prototype.setFlashAssists = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.clearFlashAssists = function() {
  return this.setFlashAssists(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerStatistics.prototype.hasFlashAssists = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional StatisticsValues opening_kills = 9;
 * @return {?proto.bragi.StatisticsValues}
 */
proto.bragi.CsgoPlayerStatistics.prototype.getOpeningKills = function() {
  return /** @type{?proto.bragi.StatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.StatisticsValues, 9));
};


/**
 * @param {?proto.bragi.StatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
*/
proto.bragi.CsgoPlayerStatistics.prototype.setOpeningKills = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.clearOpeningKills = function() {
  return this.setOpeningKills(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerStatistics.prototype.hasOpeningKills = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional StatisticsValues awp_kills = 10;
 * @return {?proto.bragi.StatisticsValues}
 */
proto.bragi.CsgoPlayerStatistics.prototype.getAwpKills = function() {
  return /** @type{?proto.bragi.StatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.StatisticsValues, 10));
};


/**
 * @param {?proto.bragi.StatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
*/
proto.bragi.CsgoPlayerStatistics.prototype.setAwpKills = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.clearAwpKills = function() {
  return this.setAwpKills(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerStatistics.prototype.hasAwpKills = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional StatisticsValues utility_damage = 11;
 * @return {?proto.bragi.StatisticsValues}
 */
proto.bragi.CsgoPlayerStatistics.prototype.getUtilityDamage = function() {
  return /** @type{?proto.bragi.StatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.StatisticsValues, 11));
};


/**
 * @param {?proto.bragi.StatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
*/
proto.bragi.CsgoPlayerStatistics.prototype.setUtilityDamage = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.clearUtilityDamage = function() {
  return this.setUtilityDamage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerStatistics.prototype.hasUtilityDamage = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional StatisticsValues enemies_flashed = 12;
 * @return {?proto.bragi.StatisticsValues}
 */
proto.bragi.CsgoPlayerStatistics.prototype.getEnemiesFlashed = function() {
  return /** @type{?proto.bragi.StatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.StatisticsValues, 12));
};


/**
 * @param {?proto.bragi.StatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
*/
proto.bragi.CsgoPlayerStatistics.prototype.setEnemiesFlashed = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.clearEnemiesFlashed = function() {
  return this.setEnemiesFlashed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerStatistics.prototype.hasEnemiesFlashed = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional StatisticsValues multi_kill_rounds = 13;
 * @return {?proto.bragi.StatisticsValues}
 */
proto.bragi.CsgoPlayerStatistics.prototype.getMultiKillRounds = function() {
  return /** @type{?proto.bragi.StatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.StatisticsValues, 13));
};


/**
 * @param {?proto.bragi.StatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
*/
proto.bragi.CsgoPlayerStatistics.prototype.setMultiKillRounds = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.clearMultiKillRounds = function() {
  return this.setMultiKillRounds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerStatistics.prototype.hasMultiKillRounds = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional StatisticsValues clutch_rounds = 14;
 * @return {?proto.bragi.StatisticsValues}
 */
proto.bragi.CsgoPlayerStatistics.prototype.getClutchRounds = function() {
  return /** @type{?proto.bragi.StatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.StatisticsValues, 14));
};


/**
 * @param {?proto.bragi.StatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
*/
proto.bragi.CsgoPlayerStatistics.prototype.setClutchRounds = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.clearClutchRounds = function() {
  return this.setClutchRounds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerStatistics.prototype.hasClutchRounds = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional StatisticsValues lurk_kills = 15;
 * @return {?proto.bragi.StatisticsValues}
 */
proto.bragi.CsgoPlayerStatistics.prototype.getLurkKills = function() {
  return /** @type{?proto.bragi.StatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.StatisticsValues, 15));
};


/**
 * @param {?proto.bragi.StatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
*/
proto.bragi.CsgoPlayerStatistics.prototype.setLurkKills = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.clearLurkKills = function() {
  return this.setLurkKills(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerStatistics.prototype.hasLurkKills = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional StatisticsValues grenades_used = 16;
 * @return {?proto.bragi.StatisticsValues}
 */
proto.bragi.CsgoPlayerStatistics.prototype.getGrenadesUsed = function() {
  return /** @type{?proto.bragi.StatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.StatisticsValues, 16));
};


/**
 * @param {?proto.bragi.StatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
*/
proto.bragi.CsgoPlayerStatistics.prototype.setGrenadesUsed = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.clearGrenadesUsed = function() {
  return this.setGrenadesUsed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerStatistics.prototype.hasGrenadesUsed = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * repeated CsgoWeaponStatistics favourite_weapons = 17;
 * @return {!Array<!proto.bragi.CsgoWeaponStatistics>}
 */
proto.bragi.CsgoPlayerStatistics.prototype.getFavouriteWeaponsList = function() {
  return /** @type{!Array<!proto.bragi.CsgoWeaponStatistics>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.CsgoWeaponStatistics, 17));
};


/**
 * @param {!Array<!proto.bragi.CsgoWeaponStatistics>} value
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
*/
proto.bragi.CsgoPlayerStatistics.prototype.setFavouriteWeaponsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 17, value);
};


/**
 * @param {!proto.bragi.CsgoWeaponStatistics=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.CsgoWeaponStatistics}
 */
proto.bragi.CsgoPlayerStatistics.prototype.addFavouriteWeapons = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 17, opt_value, proto.bragi.CsgoWeaponStatistics, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CsgoPlayerStatistics} returns this
 */
proto.bragi.CsgoPlayerStatistics.prototype.clearFavouriteWeaponsList = function() {
  return this.setFavouriteWeaponsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.CsgoPostMapStatistics.repeatedFields_ = [4,5];



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
proto.bragi.CsgoPostMapStatistics.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoPostMapStatistics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoPostMapStatistics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPostMapStatistics.toObject = function(includeInstance, msg) {
  var f, obj = {
    map: (f = msg.getMap()) && proto.bragi.CsgoMap.toObject(includeInstance, f),
    homeTeamStatistics: (f = msg.getHomeTeamStatistics()) && proto.bragi.CsgoTeamPostMapStatistics.toObject(includeInstance, f),
    awayTeamStatistics: (f = msg.getAwayTeamStatistics()) && proto.bragi.CsgoTeamPostMapStatistics.toObject(includeInstance, f),
    duelsList: jspb.Message.toObjectList(msg.getDuelsList(),
    proto.bragi.CsgoPlayersDuel.toObject, includeInstance),
    roundsList: jspb.Message.toObjectList(msg.getRoundsList(),
    proto.bragi.CsgoRoundPostmap.toObject, includeInstance)
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
 * @return {!proto.bragi.CsgoPostMapStatistics}
 */
proto.bragi.CsgoPostMapStatistics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoPostMapStatistics;
  return proto.bragi.CsgoPostMapStatistics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoPostMapStatistics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoPostMapStatistics}
 */
proto.bragi.CsgoPostMapStatistics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CsgoMap;
      reader.readMessage(value,proto.bragi.CsgoMap.deserializeBinaryFromReader);
      msg.setMap(value);
      break;
    case 2:
      var value = new proto.bragi.CsgoTeamPostMapStatistics;
      reader.readMessage(value,proto.bragi.CsgoTeamPostMapStatistics.deserializeBinaryFromReader);
      msg.setHomeTeamStatistics(value);
      break;
    case 3:
      var value = new proto.bragi.CsgoTeamPostMapStatistics;
      reader.readMessage(value,proto.bragi.CsgoTeamPostMapStatistics.deserializeBinaryFromReader);
      msg.setAwayTeamStatistics(value);
      break;
    case 4:
      var value = new proto.bragi.CsgoPlayersDuel;
      reader.readMessage(value,proto.bragi.CsgoPlayersDuel.deserializeBinaryFromReader);
      msg.addDuels(value);
      break;
    case 5:
      var value = new proto.bragi.CsgoRoundPostmap;
      reader.readMessage(value,proto.bragi.CsgoRoundPostmap.deserializeBinaryFromReader);
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
proto.bragi.CsgoPostMapStatistics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoPostMapStatistics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoPostMapStatistics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPostMapStatistics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMap();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CsgoMap.serializeBinaryToWriter
    );
  }
  f = message.getHomeTeamStatistics();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CsgoTeamPostMapStatistics.serializeBinaryToWriter
    );
  }
  f = message.getAwayTeamStatistics();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.CsgoTeamPostMapStatistics.serializeBinaryToWriter
    );
  }
  f = message.getDuelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.bragi.CsgoPlayersDuel.serializeBinaryToWriter
    );
  }
  f = message.getRoundsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.bragi.CsgoRoundPostmap.serializeBinaryToWriter
    );
  }
};


/**
 * optional CsgoMap map = 1;
 * @return {?proto.bragi.CsgoMap}
 */
proto.bragi.CsgoPostMapStatistics.prototype.getMap = function() {
  return /** @type{?proto.bragi.CsgoMap} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoMap, 1));
};


/**
 * @param {?proto.bragi.CsgoMap|undefined} value
 * @return {!proto.bragi.CsgoPostMapStatistics} returns this
*/
proto.bragi.CsgoPostMapStatistics.prototype.setMap = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPostMapStatistics} returns this
 */
proto.bragi.CsgoPostMapStatistics.prototype.clearMap = function() {
  return this.setMap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPostMapStatistics.prototype.hasMap = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CsgoTeamPostMapStatistics home_team_statistics = 2;
 * @return {?proto.bragi.CsgoTeamPostMapStatistics}
 */
proto.bragi.CsgoPostMapStatistics.prototype.getHomeTeamStatistics = function() {
  return /** @type{?proto.bragi.CsgoTeamPostMapStatistics} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoTeamPostMapStatistics, 2));
};


/**
 * @param {?proto.bragi.CsgoTeamPostMapStatistics|undefined} value
 * @return {!proto.bragi.CsgoPostMapStatistics} returns this
*/
proto.bragi.CsgoPostMapStatistics.prototype.setHomeTeamStatistics = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPostMapStatistics} returns this
 */
proto.bragi.CsgoPostMapStatistics.prototype.clearHomeTeamStatistics = function() {
  return this.setHomeTeamStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPostMapStatistics.prototype.hasHomeTeamStatistics = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CsgoTeamPostMapStatistics away_team_statistics = 3;
 * @return {?proto.bragi.CsgoTeamPostMapStatistics}
 */
proto.bragi.CsgoPostMapStatistics.prototype.getAwayTeamStatistics = function() {
  return /** @type{?proto.bragi.CsgoTeamPostMapStatistics} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoTeamPostMapStatistics, 3));
};


/**
 * @param {?proto.bragi.CsgoTeamPostMapStatistics|undefined} value
 * @return {!proto.bragi.CsgoPostMapStatistics} returns this
*/
proto.bragi.CsgoPostMapStatistics.prototype.setAwayTeamStatistics = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPostMapStatistics} returns this
 */
proto.bragi.CsgoPostMapStatistics.prototype.clearAwayTeamStatistics = function() {
  return this.setAwayTeamStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPostMapStatistics.prototype.hasAwayTeamStatistics = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated CsgoPlayersDuel duels = 4;
 * @return {!Array<!proto.bragi.CsgoPlayersDuel>}
 */
proto.bragi.CsgoPostMapStatistics.prototype.getDuelsList = function() {
  return /** @type{!Array<!proto.bragi.CsgoPlayersDuel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.CsgoPlayersDuel, 4));
};


/**
 * @param {!Array<!proto.bragi.CsgoPlayersDuel>} value
 * @return {!proto.bragi.CsgoPostMapStatistics} returns this
*/
proto.bragi.CsgoPostMapStatistics.prototype.setDuelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.bragi.CsgoPlayersDuel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.CsgoPlayersDuel}
 */
proto.bragi.CsgoPostMapStatistics.prototype.addDuels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.bragi.CsgoPlayersDuel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CsgoPostMapStatistics} returns this
 */
proto.bragi.CsgoPostMapStatistics.prototype.clearDuelsList = function() {
  return this.setDuelsList([]);
};


/**
 * repeated CsgoRoundPostmap rounds = 5;
 * @return {!Array<!proto.bragi.CsgoRoundPostmap>}
 */
proto.bragi.CsgoPostMapStatistics.prototype.getRoundsList = function() {
  return /** @type{!Array<!proto.bragi.CsgoRoundPostmap>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.CsgoRoundPostmap, 5));
};


/**
 * @param {!Array<!proto.bragi.CsgoRoundPostmap>} value
 * @return {!proto.bragi.CsgoPostMapStatistics} returns this
*/
proto.bragi.CsgoPostMapStatistics.prototype.setRoundsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.bragi.CsgoRoundPostmap=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.CsgoRoundPostmap}
 */
proto.bragi.CsgoPostMapStatistics.prototype.addRounds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.bragi.CsgoRoundPostmap, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CsgoPostMapStatistics} returns this
 */
proto.bragi.CsgoPostMapStatistics.prototype.clearRoundsList = function() {
  return this.setRoundsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.CsgoTournamentInfo.repeatedFields_ = [8,9,10];



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
proto.bragi.CsgoTournamentInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoTournamentInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoTournamentInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTournamentInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    tournament: (f = msg.getTournament()) && proto.bragi.Tournament.toObject(includeInstance, f),
    organizer: jspb.Message.getFieldWithDefault(msg, 3, ""),
    location: jspb.Message.getFieldWithDefault(msg, 4, ""),
    prizePool: jspb.Message.getFieldWithDefault(msg, 5, ""),
    isOffline: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    isQualification: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    teamsList: jspb.Message.toObjectList(msg.getTeamsList(),
    proto.bragi.CsgoTeam.toObject, includeInstance),
    matchesList: jspb.Message.toObjectList(msg.getMatchesList(),
    proto.bragi.Match.toObject, includeInstance),
    blocksList: jspb.Message.toObjectList(msg.getBlocksList(),
    proto.bragi.CsgoTournamentBlock.toObject, includeInstance)
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
 * @return {!proto.bragi.CsgoTournamentInfo}
 */
proto.bragi.CsgoTournamentInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoTournamentInfo;
  return proto.bragi.CsgoTournamentInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoTournamentInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoTournamentInfo}
 */
proto.bragi.CsgoTournamentInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.bragi.Tournament;
      reader.readMessage(value,proto.bragi.Tournament.deserializeBinaryFromReader);
      msg.setTournament(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizer(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrizePool(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsOffline(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsQualification(value);
      break;
    case 8:
      var value = new proto.bragi.CsgoTeam;
      reader.readMessage(value,proto.bragi.CsgoTeam.deserializeBinaryFromReader);
      msg.addTeams(value);
      break;
    case 9:
      var value = new proto.bragi.Match;
      reader.readMessage(value,proto.bragi.Match.deserializeBinaryFromReader);
      msg.addMatches(value);
      break;
    case 10:
      var value = new proto.bragi.CsgoTournamentBlock;
      reader.readMessage(value,proto.bragi.CsgoTournamentBlock.deserializeBinaryFromReader);
      msg.addBlocks(value);
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
proto.bragi.CsgoTournamentInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoTournamentInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoTournamentInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTournamentInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getTournament();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.Tournament.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
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
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getTeamsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.bragi.CsgoTeam.serializeBinaryToWriter
    );
  }
  f = message.getMatchesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.bragi.Match.serializeBinaryToWriter
    );
  }
  f = message.getBlocksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.bragi.CsgoTournamentBlock.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.bragi.CsgoTournamentInfo.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTournamentInfo} returns this
 */
proto.bragi.CsgoTournamentInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Tournament tournament = 2;
 * @return {?proto.bragi.Tournament}
 */
proto.bragi.CsgoTournamentInfo.prototype.getTournament = function() {
  return /** @type{?proto.bragi.Tournament} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Tournament, 2));
};


/**
 * @param {?proto.bragi.Tournament|undefined} value
 * @return {!proto.bragi.CsgoTournamentInfo} returns this
*/
proto.bragi.CsgoTournamentInfo.prototype.setTournament = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTournamentInfo} returns this
 */
proto.bragi.CsgoTournamentInfo.prototype.clearTournament = function() {
  return this.setTournament(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTournamentInfo.prototype.hasTournament = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string organizer = 3;
 * @return {string}
 */
proto.bragi.CsgoTournamentInfo.prototype.getOrganizer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoTournamentInfo} returns this
 */
proto.bragi.CsgoTournamentInfo.prototype.setOrganizer = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CsgoTournamentInfo} returns this
 */
proto.bragi.CsgoTournamentInfo.prototype.clearOrganizer = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTournamentInfo.prototype.hasOrganizer = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string location = 4;
 * @return {string}
 */
proto.bragi.CsgoTournamentInfo.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoTournamentInfo} returns this
 */
proto.bragi.CsgoTournamentInfo.prototype.setLocation = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CsgoTournamentInfo} returns this
 */
proto.bragi.CsgoTournamentInfo.prototype.clearLocation = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTournamentInfo.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string prize_pool = 5;
 * @return {string}
 */
proto.bragi.CsgoTournamentInfo.prototype.getPrizePool = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoTournamentInfo} returns this
 */
proto.bragi.CsgoTournamentInfo.prototype.setPrizePool = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CsgoTournamentInfo} returns this
 */
proto.bragi.CsgoTournamentInfo.prototype.clearPrizePool = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTournamentInfo.prototype.hasPrizePool = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool is_offline = 6;
 * @return {boolean}
 */
proto.bragi.CsgoTournamentInfo.prototype.getIsOffline = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.CsgoTournamentInfo} returns this
 */
proto.bragi.CsgoTournamentInfo.prototype.setIsOffline = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CsgoTournamentInfo} returns this
 */
proto.bragi.CsgoTournamentInfo.prototype.clearIsOffline = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTournamentInfo.prototype.hasIsOffline = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool is_qualification = 7;
 * @return {boolean}
 */
proto.bragi.CsgoTournamentInfo.prototype.getIsQualification = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.CsgoTournamentInfo} returns this
 */
proto.bragi.CsgoTournamentInfo.prototype.setIsQualification = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CsgoTournamentInfo} returns this
 */
proto.bragi.CsgoTournamentInfo.prototype.clearIsQualification = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTournamentInfo.prototype.hasIsQualification = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated CsgoTeam teams = 8;
 * @return {!Array<!proto.bragi.CsgoTeam>}
 */
proto.bragi.CsgoTournamentInfo.prototype.getTeamsList = function() {
  return /** @type{!Array<!proto.bragi.CsgoTeam>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.CsgoTeam, 8));
};


/**
 * @param {!Array<!proto.bragi.CsgoTeam>} value
 * @return {!proto.bragi.CsgoTournamentInfo} returns this
*/
proto.bragi.CsgoTournamentInfo.prototype.setTeamsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.bragi.CsgoTeam=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.CsgoTeam}
 */
proto.bragi.CsgoTournamentInfo.prototype.addTeams = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.bragi.CsgoTeam, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CsgoTournamentInfo} returns this
 */
proto.bragi.CsgoTournamentInfo.prototype.clearTeamsList = function() {
  return this.setTeamsList([]);
};


/**
 * repeated Match matches = 9;
 * @return {!Array<!proto.bragi.Match>}
 */
proto.bragi.CsgoTournamentInfo.prototype.getMatchesList = function() {
  return /** @type{!Array<!proto.bragi.Match>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.Match, 9));
};


/**
 * @param {!Array<!proto.bragi.Match>} value
 * @return {!proto.bragi.CsgoTournamentInfo} returns this
*/
proto.bragi.CsgoTournamentInfo.prototype.setMatchesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.bragi.Match=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.Match}
 */
proto.bragi.CsgoTournamentInfo.prototype.addMatches = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.bragi.Match, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CsgoTournamentInfo} returns this
 */
proto.bragi.CsgoTournamentInfo.prototype.clearMatchesList = function() {
  return this.setMatchesList([]);
};


/**
 * repeated CsgoTournamentBlock blocks = 10;
 * @return {!Array<!proto.bragi.CsgoTournamentBlock>}
 */
proto.bragi.CsgoTournamentInfo.prototype.getBlocksList = function() {
  return /** @type{!Array<!proto.bragi.CsgoTournamentBlock>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.CsgoTournamentBlock, 10));
};


/**
 * @param {!Array<!proto.bragi.CsgoTournamentBlock>} value
 * @return {!proto.bragi.CsgoTournamentInfo} returns this
*/
proto.bragi.CsgoTournamentInfo.prototype.setBlocksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.bragi.CsgoTournamentBlock=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.CsgoTournamentBlock}
 */
proto.bragi.CsgoTournamentInfo.prototype.addBlocks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.bragi.CsgoTournamentBlock, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CsgoTournamentInfo} returns this
 */
proto.bragi.CsgoTournamentInfo.prototype.clearBlocksList = function() {
  return this.setBlocksList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.CsgoTournamentStatistics.repeatedFields_ = [7];



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
proto.bragi.CsgoTournamentStatistics.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoTournamentStatistics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoTournamentStatistics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTournamentStatistics.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    tournament: (f = msg.getTournament()) && proto.bragi.Tournament.toObject(includeInstance, f),
    terroristsWinrateInPercent: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    counterTerroristsWinrateInPercent: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    bestTeams: (f = msg.getBestTeams()) && proto.bragi.CsgoTournamentBestTeamStatistics.toObject(includeInstance, f),
    bestPlayers: (f = msg.getBestPlayers()) && proto.bragi.CsgoTournamentBestPlayerStatistics.toObject(includeInstance, f),
    tournamentMapsStatisticsList: jspb.Message.toObjectList(msg.getTournamentMapsStatisticsList(),
    proto.bragi.CsgoTournamentMapStatistics.toObject, includeInstance)
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
 * @return {!proto.bragi.CsgoTournamentStatistics}
 */
proto.bragi.CsgoTournamentStatistics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoTournamentStatistics;
  return proto.bragi.CsgoTournamentStatistics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoTournamentStatistics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoTournamentStatistics}
 */
proto.bragi.CsgoTournamentStatistics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.bragi.Tournament;
      reader.readMessage(value,proto.bragi.Tournament.deserializeBinaryFromReader);
      msg.setTournament(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTerroristsWinrateInPercent(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setCounterTerroristsWinrateInPercent(value);
      break;
    case 5:
      var value = new proto.bragi.CsgoTournamentBestTeamStatistics;
      reader.readMessage(value,proto.bragi.CsgoTournamentBestTeamStatistics.deserializeBinaryFromReader);
      msg.setBestTeams(value);
      break;
    case 6:
      var value = new proto.bragi.CsgoTournamentBestPlayerStatistics;
      reader.readMessage(value,proto.bragi.CsgoTournamentBestPlayerStatistics.deserializeBinaryFromReader);
      msg.setBestPlayers(value);
      break;
    case 7:
      var value = new proto.bragi.CsgoTournamentMapStatistics;
      reader.readMessage(value,proto.bragi.CsgoTournamentMapStatistics.deserializeBinaryFromReader);
      msg.addTournamentMapsStatistics(value);
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
proto.bragi.CsgoTournamentStatistics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoTournamentStatistics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoTournamentStatistics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTournamentStatistics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getTournament();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.Tournament.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getBestTeams();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bragi.CsgoTournamentBestTeamStatistics.serializeBinaryToWriter
    );
  }
  f = message.getBestPlayers();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bragi.CsgoTournamentBestPlayerStatistics.serializeBinaryToWriter
    );
  }
  f = message.getTournamentMapsStatisticsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.bragi.CsgoTournamentMapStatistics.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.bragi.CsgoTournamentStatistics.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTournamentStatistics} returns this
 */
proto.bragi.CsgoTournamentStatistics.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Tournament tournament = 2;
 * @return {?proto.bragi.Tournament}
 */
proto.bragi.CsgoTournamentStatistics.prototype.getTournament = function() {
  return /** @type{?proto.bragi.Tournament} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Tournament, 2));
};


/**
 * @param {?proto.bragi.Tournament|undefined} value
 * @return {!proto.bragi.CsgoTournamentStatistics} returns this
*/
proto.bragi.CsgoTournamentStatistics.prototype.setTournament = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTournamentStatistics} returns this
 */
proto.bragi.CsgoTournamentStatistics.prototype.clearTournament = function() {
  return this.setTournament(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTournamentStatistics.prototype.hasTournament = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional float terrorists_winrate_in_percent = 3;
 * @return {number}
 */
proto.bragi.CsgoTournamentStatistics.prototype.getTerroristsWinrateInPercent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTournamentStatistics} returns this
 */
proto.bragi.CsgoTournamentStatistics.prototype.setTerroristsWinrateInPercent = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CsgoTournamentStatistics} returns this
 */
proto.bragi.CsgoTournamentStatistics.prototype.clearTerroristsWinrateInPercent = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTournamentStatistics.prototype.hasTerroristsWinrateInPercent = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional float counter_terrorists_winrate_in_percent = 4;
 * @return {number}
 */
proto.bragi.CsgoTournamentStatistics.prototype.getCounterTerroristsWinrateInPercent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTournamentStatistics} returns this
 */
proto.bragi.CsgoTournamentStatistics.prototype.setCounterTerroristsWinrateInPercent = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CsgoTournamentStatistics} returns this
 */
proto.bragi.CsgoTournamentStatistics.prototype.clearCounterTerroristsWinrateInPercent = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTournamentStatistics.prototype.hasCounterTerroristsWinrateInPercent = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CsgoTournamentBestTeamStatistics best_teams = 5;
 * @return {?proto.bragi.CsgoTournamentBestTeamStatistics}
 */
proto.bragi.CsgoTournamentStatistics.prototype.getBestTeams = function() {
  return /** @type{?proto.bragi.CsgoTournamentBestTeamStatistics} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoTournamentBestTeamStatistics, 5));
};


/**
 * @param {?proto.bragi.CsgoTournamentBestTeamStatistics|undefined} value
 * @return {!proto.bragi.CsgoTournamentStatistics} returns this
*/
proto.bragi.CsgoTournamentStatistics.prototype.setBestTeams = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTournamentStatistics} returns this
 */
proto.bragi.CsgoTournamentStatistics.prototype.clearBestTeams = function() {
  return this.setBestTeams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTournamentStatistics.prototype.hasBestTeams = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional CsgoTournamentBestPlayerStatistics best_players = 6;
 * @return {?proto.bragi.CsgoTournamentBestPlayerStatistics}
 */
proto.bragi.CsgoTournamentStatistics.prototype.getBestPlayers = function() {
  return /** @type{?proto.bragi.CsgoTournamentBestPlayerStatistics} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoTournamentBestPlayerStatistics, 6));
};


/**
 * @param {?proto.bragi.CsgoTournamentBestPlayerStatistics|undefined} value
 * @return {!proto.bragi.CsgoTournamentStatistics} returns this
*/
proto.bragi.CsgoTournamentStatistics.prototype.setBestPlayers = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTournamentStatistics} returns this
 */
proto.bragi.CsgoTournamentStatistics.prototype.clearBestPlayers = function() {
  return this.setBestPlayers(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTournamentStatistics.prototype.hasBestPlayers = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated CsgoTournamentMapStatistics tournament_maps_statistics = 7;
 * @return {!Array<!proto.bragi.CsgoTournamentMapStatistics>}
 */
proto.bragi.CsgoTournamentStatistics.prototype.getTournamentMapsStatisticsList = function() {
  return /** @type{!Array<!proto.bragi.CsgoTournamentMapStatistics>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.CsgoTournamentMapStatistics, 7));
};


/**
 * @param {!Array<!proto.bragi.CsgoTournamentMapStatistics>} value
 * @return {!proto.bragi.CsgoTournamentStatistics} returns this
*/
proto.bragi.CsgoTournamentStatistics.prototype.setTournamentMapsStatisticsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.bragi.CsgoTournamentMapStatistics=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.CsgoTournamentMapStatistics}
 */
proto.bragi.CsgoTournamentStatistics.prototype.addTournamentMapsStatistics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.bragi.CsgoTournamentMapStatistics, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CsgoTournamentStatistics} returns this
 */
proto.bragi.CsgoTournamentStatistics.prototype.clearTournamentMapsStatisticsList = function() {
  return this.setTournamentMapsStatisticsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.CsgoTeamPostMapStatistics.repeatedFields_ = [3,18];



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
proto.bragi.CsgoTeamPostMapStatistics.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoTeamPostMapStatistics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoTeamPostMapStatistics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTeamPostMapStatistics.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    team: (f = msg.getTeam()) && proto.bragi.Team.toObject(includeInstance, f),
    playersStatisticsList: jspb.Message.toObjectList(msg.getPlayersStatisticsList(),
    proto.bragi.CsgoPlayerPostMapStatistics.toObject, includeInstance),
    roundsWon: jspb.Message.getFieldWithDefault(msg, 4, 0),
    roundsLost: jspb.Message.getFieldWithDefault(msg, 5, 0),
    kills: (f = msg.getKills()) && proto.bragi.PostMapStatisticsValues.toObject(includeInstance, f),
    deaths: (f = msg.getDeaths()) && proto.bragi.PostMapStatisticsValues.toObject(includeInstance, f),
    assists: (f = msg.getAssists()) && proto.bragi.PostMapStatisticsValues.toObject(includeInstance, f),
    killsOverDeaths: (f = msg.getKillsOverDeaths()) && proto.bragi.PostMapStatisticsValues.toObject(includeInstance, f),
    damage: (f = msg.getDamage()) && proto.bragi.PostMapStatisticsValues.toObject(includeInstance, f),
    headshotRate: (f = msg.getHeadshotRate()) && proto.bragi.PostMapStatisticsValues.toObject(includeInstance, f),
    flashAssists: (f = msg.getFlashAssists()) && proto.bragi.PostMapStatisticsValues.toObject(includeInstance, f),
    openingKills: (f = msg.getOpeningKills()) && proto.bragi.PostMapStatisticsValues.toObject(includeInstance, f),
    killsDifference: (f = msg.getKillsDifference()) && proto.bragi.PostMapStatisticsValues.toObject(includeInstance, f),
    killCost: (f = msg.getKillCost()) && proto.bragi.PostMapStatisticsValues.toObject(includeInstance, f),
    accuracyRate: (f = msg.getAccuracyRate()) && proto.bragi.PostMapStatisticsValues.toObject(includeInstance, f),
    killsWithDroppedWeapons: (f = msg.getKillsWithDroppedWeapons()) && proto.bragi.PostMapStatisticsValues.toObject(includeInstance, f),
    favouriteWeaponsList: jspb.Message.toObjectList(msg.getFavouriteWeaponsList(),
    proto.bragi.CsgoWeaponPostMapStatistics.toObject, includeInstance)
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
 * @return {!proto.bragi.CsgoTeamPostMapStatistics}
 */
proto.bragi.CsgoTeamPostMapStatistics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoTeamPostMapStatistics;
  return proto.bragi.CsgoTeamPostMapStatistics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoTeamPostMapStatistics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoTeamPostMapStatistics}
 */
proto.bragi.CsgoTeamPostMapStatistics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.bragi.Team;
      reader.readMessage(value,proto.bragi.Team.deserializeBinaryFromReader);
      msg.setTeam(value);
      break;
    case 3:
      var value = new proto.bragi.CsgoPlayerPostMapStatistics;
      reader.readMessage(value,proto.bragi.CsgoPlayerPostMapStatistics.deserializeBinaryFromReader);
      msg.addPlayersStatistics(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoundsWon(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoundsLost(value);
      break;
    case 6:
      var value = new proto.bragi.PostMapStatisticsValues;
      reader.readMessage(value,proto.bragi.PostMapStatisticsValues.deserializeBinaryFromReader);
      msg.setKills(value);
      break;
    case 7:
      var value = new proto.bragi.PostMapStatisticsValues;
      reader.readMessage(value,proto.bragi.PostMapStatisticsValues.deserializeBinaryFromReader);
      msg.setDeaths(value);
      break;
    case 8:
      var value = new proto.bragi.PostMapStatisticsValues;
      reader.readMessage(value,proto.bragi.PostMapStatisticsValues.deserializeBinaryFromReader);
      msg.setAssists(value);
      break;
    case 9:
      var value = new proto.bragi.PostMapStatisticsValues;
      reader.readMessage(value,proto.bragi.PostMapStatisticsValues.deserializeBinaryFromReader);
      msg.setKillsOverDeaths(value);
      break;
    case 10:
      var value = new proto.bragi.PostMapStatisticsValues;
      reader.readMessage(value,proto.bragi.PostMapStatisticsValues.deserializeBinaryFromReader);
      msg.setDamage(value);
      break;
    case 11:
      var value = new proto.bragi.PostMapStatisticsValues;
      reader.readMessage(value,proto.bragi.PostMapStatisticsValues.deserializeBinaryFromReader);
      msg.setHeadshotRate(value);
      break;
    case 12:
      var value = new proto.bragi.PostMapStatisticsValues;
      reader.readMessage(value,proto.bragi.PostMapStatisticsValues.deserializeBinaryFromReader);
      msg.setFlashAssists(value);
      break;
    case 13:
      var value = new proto.bragi.PostMapStatisticsValues;
      reader.readMessage(value,proto.bragi.PostMapStatisticsValues.deserializeBinaryFromReader);
      msg.setOpeningKills(value);
      break;
    case 14:
      var value = new proto.bragi.PostMapStatisticsValues;
      reader.readMessage(value,proto.bragi.PostMapStatisticsValues.deserializeBinaryFromReader);
      msg.setKillsDifference(value);
      break;
    case 15:
      var value = new proto.bragi.PostMapStatisticsValues;
      reader.readMessage(value,proto.bragi.PostMapStatisticsValues.deserializeBinaryFromReader);
      msg.setKillCost(value);
      break;
    case 16:
      var value = new proto.bragi.PostMapStatisticsValues;
      reader.readMessage(value,proto.bragi.PostMapStatisticsValues.deserializeBinaryFromReader);
      msg.setAccuracyRate(value);
      break;
    case 17:
      var value = new proto.bragi.PostMapStatisticsValues;
      reader.readMessage(value,proto.bragi.PostMapStatisticsValues.deserializeBinaryFromReader);
      msg.setKillsWithDroppedWeapons(value);
      break;
    case 18:
      var value = new proto.bragi.CsgoWeaponPostMapStatistics;
      reader.readMessage(value,proto.bragi.CsgoWeaponPostMapStatistics.deserializeBinaryFromReader);
      msg.addFavouriteWeapons(value);
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
proto.bragi.CsgoTeamPostMapStatistics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoTeamPostMapStatistics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoTeamPostMapStatistics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTeamPostMapStatistics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getTeam();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.Team.serializeBinaryToWriter
    );
  }
  f = message.getPlayersStatisticsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.bragi.CsgoPlayerPostMapStatistics.serializeBinaryToWriter
    );
  }
  f = message.getRoundsWon();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getRoundsLost();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getKills();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bragi.PostMapStatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getDeaths();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bragi.PostMapStatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getAssists();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.bragi.PostMapStatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getKillsOverDeaths();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.bragi.PostMapStatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getDamage();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.bragi.PostMapStatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getHeadshotRate();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.bragi.PostMapStatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getFlashAssists();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.bragi.PostMapStatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getOpeningKills();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.bragi.PostMapStatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getKillsDifference();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.bragi.PostMapStatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getKillCost();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.bragi.PostMapStatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getAccuracyRate();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.bragi.PostMapStatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getKillsWithDroppedWeapons();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.bragi.PostMapStatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getFavouriteWeaponsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      18,
      f,
      proto.bragi.CsgoWeaponPostMapStatistics.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTeamPostMapStatistics} returns this
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Team team = 2;
 * @return {?proto.bragi.Team}
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.getTeam = function() {
  return /** @type{?proto.bragi.Team} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Team, 2));
};


/**
 * @param {?proto.bragi.Team|undefined} value
 * @return {!proto.bragi.CsgoTeamPostMapStatistics} returns this
*/
proto.bragi.CsgoTeamPostMapStatistics.prototype.setTeam = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamPostMapStatistics} returns this
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.clearTeam = function() {
  return this.setTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.hasTeam = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated CsgoPlayerPostMapStatistics players_statistics = 3;
 * @return {!Array<!proto.bragi.CsgoPlayerPostMapStatistics>}
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.getPlayersStatisticsList = function() {
  return /** @type{!Array<!proto.bragi.CsgoPlayerPostMapStatistics>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.CsgoPlayerPostMapStatistics, 3));
};


/**
 * @param {!Array<!proto.bragi.CsgoPlayerPostMapStatistics>} value
 * @return {!proto.bragi.CsgoTeamPostMapStatistics} returns this
*/
proto.bragi.CsgoTeamPostMapStatistics.prototype.setPlayersStatisticsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.bragi.CsgoPlayerPostMapStatistics=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics}
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.addPlayersStatistics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.bragi.CsgoPlayerPostMapStatistics, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CsgoTeamPostMapStatistics} returns this
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.clearPlayersStatisticsList = function() {
  return this.setPlayersStatisticsList([]);
};


/**
 * optional int32 rounds_won = 4;
 * @return {number}
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.getRoundsWon = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTeamPostMapStatistics} returns this
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.setRoundsWon = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 rounds_lost = 5;
 * @return {number}
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.getRoundsLost = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTeamPostMapStatistics} returns this
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.setRoundsLost = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional PostMapStatisticsValues kills = 6;
 * @return {?proto.bragi.PostMapStatisticsValues}
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.getKills = function() {
  return /** @type{?proto.bragi.PostMapStatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PostMapStatisticsValues, 6));
};


/**
 * @param {?proto.bragi.PostMapStatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoTeamPostMapStatistics} returns this
*/
proto.bragi.CsgoTeamPostMapStatistics.prototype.setKills = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamPostMapStatistics} returns this
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.clearKills = function() {
  return this.setKills(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.hasKills = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional PostMapStatisticsValues deaths = 7;
 * @return {?proto.bragi.PostMapStatisticsValues}
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.getDeaths = function() {
  return /** @type{?proto.bragi.PostMapStatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PostMapStatisticsValues, 7));
};


/**
 * @param {?proto.bragi.PostMapStatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoTeamPostMapStatistics} returns this
*/
proto.bragi.CsgoTeamPostMapStatistics.prototype.setDeaths = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamPostMapStatistics} returns this
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.clearDeaths = function() {
  return this.setDeaths(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.hasDeaths = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional PostMapStatisticsValues assists = 8;
 * @return {?proto.bragi.PostMapStatisticsValues}
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.getAssists = function() {
  return /** @type{?proto.bragi.PostMapStatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PostMapStatisticsValues, 8));
};


/**
 * @param {?proto.bragi.PostMapStatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoTeamPostMapStatistics} returns this
*/
proto.bragi.CsgoTeamPostMapStatistics.prototype.setAssists = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamPostMapStatistics} returns this
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.clearAssists = function() {
  return this.setAssists(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.hasAssists = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional PostMapStatisticsValues kills_over_deaths = 9;
 * @return {?proto.bragi.PostMapStatisticsValues}
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.getKillsOverDeaths = function() {
  return /** @type{?proto.bragi.PostMapStatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PostMapStatisticsValues, 9));
};


/**
 * @param {?proto.bragi.PostMapStatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoTeamPostMapStatistics} returns this
*/
proto.bragi.CsgoTeamPostMapStatistics.prototype.setKillsOverDeaths = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamPostMapStatistics} returns this
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.clearKillsOverDeaths = function() {
  return this.setKillsOverDeaths(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.hasKillsOverDeaths = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional PostMapStatisticsValues damage = 10;
 * @return {?proto.bragi.PostMapStatisticsValues}
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.getDamage = function() {
  return /** @type{?proto.bragi.PostMapStatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PostMapStatisticsValues, 10));
};


/**
 * @param {?proto.bragi.PostMapStatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoTeamPostMapStatistics} returns this
*/
proto.bragi.CsgoTeamPostMapStatistics.prototype.setDamage = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamPostMapStatistics} returns this
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.clearDamage = function() {
  return this.setDamage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.hasDamage = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional PostMapStatisticsValues headshot_rate = 11;
 * @return {?proto.bragi.PostMapStatisticsValues}
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.getHeadshotRate = function() {
  return /** @type{?proto.bragi.PostMapStatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PostMapStatisticsValues, 11));
};


/**
 * @param {?proto.bragi.PostMapStatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoTeamPostMapStatistics} returns this
*/
proto.bragi.CsgoTeamPostMapStatistics.prototype.setHeadshotRate = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamPostMapStatistics} returns this
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.clearHeadshotRate = function() {
  return this.setHeadshotRate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.hasHeadshotRate = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional PostMapStatisticsValues flash_assists = 12;
 * @return {?proto.bragi.PostMapStatisticsValues}
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.getFlashAssists = function() {
  return /** @type{?proto.bragi.PostMapStatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PostMapStatisticsValues, 12));
};


/**
 * @param {?proto.bragi.PostMapStatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoTeamPostMapStatistics} returns this
*/
proto.bragi.CsgoTeamPostMapStatistics.prototype.setFlashAssists = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamPostMapStatistics} returns this
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.clearFlashAssists = function() {
  return this.setFlashAssists(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.hasFlashAssists = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional PostMapStatisticsValues opening_kills = 13;
 * @return {?proto.bragi.PostMapStatisticsValues}
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.getOpeningKills = function() {
  return /** @type{?proto.bragi.PostMapStatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PostMapStatisticsValues, 13));
};


/**
 * @param {?proto.bragi.PostMapStatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoTeamPostMapStatistics} returns this
*/
proto.bragi.CsgoTeamPostMapStatistics.prototype.setOpeningKills = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamPostMapStatistics} returns this
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.clearOpeningKills = function() {
  return this.setOpeningKills(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.hasOpeningKills = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional PostMapStatisticsValues kills_difference = 14;
 * @return {?proto.bragi.PostMapStatisticsValues}
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.getKillsDifference = function() {
  return /** @type{?proto.bragi.PostMapStatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PostMapStatisticsValues, 14));
};


/**
 * @param {?proto.bragi.PostMapStatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoTeamPostMapStatistics} returns this
*/
proto.bragi.CsgoTeamPostMapStatistics.prototype.setKillsDifference = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamPostMapStatistics} returns this
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.clearKillsDifference = function() {
  return this.setKillsDifference(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.hasKillsDifference = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional PostMapStatisticsValues kill_cost = 15;
 * @return {?proto.bragi.PostMapStatisticsValues}
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.getKillCost = function() {
  return /** @type{?proto.bragi.PostMapStatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PostMapStatisticsValues, 15));
};


/**
 * @param {?proto.bragi.PostMapStatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoTeamPostMapStatistics} returns this
*/
proto.bragi.CsgoTeamPostMapStatistics.prototype.setKillCost = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamPostMapStatistics} returns this
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.clearKillCost = function() {
  return this.setKillCost(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.hasKillCost = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional PostMapStatisticsValues accuracy_rate = 16;
 * @return {?proto.bragi.PostMapStatisticsValues}
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.getAccuracyRate = function() {
  return /** @type{?proto.bragi.PostMapStatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PostMapStatisticsValues, 16));
};


/**
 * @param {?proto.bragi.PostMapStatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoTeamPostMapStatistics} returns this
*/
proto.bragi.CsgoTeamPostMapStatistics.prototype.setAccuracyRate = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamPostMapStatistics} returns this
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.clearAccuracyRate = function() {
  return this.setAccuracyRate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.hasAccuracyRate = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional PostMapStatisticsValues kills_with_dropped_weapons = 17;
 * @return {?proto.bragi.PostMapStatisticsValues}
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.getKillsWithDroppedWeapons = function() {
  return /** @type{?proto.bragi.PostMapStatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PostMapStatisticsValues, 17));
};


/**
 * @param {?proto.bragi.PostMapStatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoTeamPostMapStatistics} returns this
*/
proto.bragi.CsgoTeamPostMapStatistics.prototype.setKillsWithDroppedWeapons = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamPostMapStatistics} returns this
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.clearKillsWithDroppedWeapons = function() {
  return this.setKillsWithDroppedWeapons(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.hasKillsWithDroppedWeapons = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * repeated CsgoWeaponPostMapStatistics favourite_weapons = 18;
 * @return {!Array<!proto.bragi.CsgoWeaponPostMapStatistics>}
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.getFavouriteWeaponsList = function() {
  return /** @type{!Array<!proto.bragi.CsgoWeaponPostMapStatistics>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.CsgoWeaponPostMapStatistics, 18));
};


/**
 * @param {!Array<!proto.bragi.CsgoWeaponPostMapStatistics>} value
 * @return {!proto.bragi.CsgoTeamPostMapStatistics} returns this
*/
proto.bragi.CsgoTeamPostMapStatistics.prototype.setFavouriteWeaponsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 18, value);
};


/**
 * @param {!proto.bragi.CsgoWeaponPostMapStatistics=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.CsgoWeaponPostMapStatistics}
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.addFavouriteWeapons = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 18, opt_value, proto.bragi.CsgoWeaponPostMapStatistics, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CsgoTeamPostMapStatistics} returns this
 */
proto.bragi.CsgoTeamPostMapStatistics.prototype.clearFavouriteWeaponsList = function() {
  return this.setFavouriteWeaponsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.CsgoPlayerPostMapStatistics.repeatedFields_ = [22];



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
proto.bragi.CsgoPlayerPostMapStatistics.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoPlayerPostMapStatistics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoPlayerPostMapStatistics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayerPostMapStatistics.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    player: (f = msg.getPlayer()) && proto.bragi.Player.toObject(includeInstance, f),
    playerMapRole: jspb.Message.getFieldWithDefault(msg, 3, 0),
    kills: (f = msg.getKills()) && proto.bragi.PostMapStatisticsValues.toObject(includeInstance, f),
    deaths: (f = msg.getDeaths()) && proto.bragi.PostMapStatisticsValues.toObject(includeInstance, f),
    assists: (f = msg.getAssists()) && proto.bragi.PostMapStatisticsValues.toObject(includeInstance, f),
    roundsSurvived: (f = msg.getRoundsSurvived()) && proto.bragi.PostMapStatisticsValues.toObject(includeInstance, f),
    killsOverDeaths: (f = msg.getKillsOverDeaths()) && proto.bragi.PostMapStatisticsValues.toObject(includeInstance, f),
    damage: (f = msg.getDamage()) && proto.bragi.PostMapStatisticsValues.toObject(includeInstance, f),
    headshotRate: (f = msg.getHeadshotRate()) && proto.bragi.PostMapStatisticsValues.toObject(includeInstance, f),
    flashAssists: (f = msg.getFlashAssists()) && proto.bragi.PostMapStatisticsValues.toObject(includeInstance, f),
    openingKills: (f = msg.getOpeningKills()) && proto.bragi.PostMapStatisticsValues.toObject(includeInstance, f),
    clutchRounds: (f = msg.getClutchRounds()) && proto.bragi.PostMapStatisticsValues.toObject(includeInstance, f),
    utilityDamage: (f = msg.getUtilityDamage()) && proto.bragi.PostMapStatisticsValues.toObject(includeInstance, f),
    grenadesUsed: (f = msg.getGrenadesUsed()) && proto.bragi.PostMapStatisticsValues.toObject(includeInstance, f),
    enemiesFlashed: (f = msg.getEnemiesFlashed()) && proto.bragi.PostMapStatisticsValues.toObject(includeInstance, f),
    awpKills: (f = msg.getAwpKills()) && proto.bragi.PostMapStatisticsValues.toObject(includeInstance, f),
    lurkKills: (f = msg.getLurkKills()) && proto.bragi.PostMapStatisticsValues.toObject(includeInstance, f),
    killsDifference: (f = msg.getKillsDifference()) && proto.bragi.PostMapStatisticsValues.toObject(includeInstance, f),
    killCost: (f = msg.getKillCost()) && proto.bragi.PostMapStatisticsValues.toObject(includeInstance, f),
    accuracyRate: (f = msg.getAccuracyRate()) && proto.bragi.PostMapStatisticsValues.toObject(includeInstance, f),
    favouriteWeaponsList: jspb.Message.toObjectList(msg.getFavouriteWeaponsList(),
    proto.bragi.CsgoWeaponPostMapStatistics.toObject, includeInstance)
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
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics}
 */
proto.bragi.CsgoPlayerPostMapStatistics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoPlayerPostMapStatistics;
  return proto.bragi.CsgoPlayerPostMapStatistics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoPlayerPostMapStatistics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics}
 */
proto.bragi.CsgoPlayerPostMapStatistics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.bragi.Player;
      reader.readMessage(value,proto.bragi.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    case 3:
      var value = /** @type {!proto.bragi.CsgoPlayerRole} */ (reader.readEnum());
      msg.setPlayerMapRole(value);
      break;
    case 4:
      var value = new proto.bragi.PostMapStatisticsValues;
      reader.readMessage(value,proto.bragi.PostMapStatisticsValues.deserializeBinaryFromReader);
      msg.setKills(value);
      break;
    case 5:
      var value = new proto.bragi.PostMapStatisticsValues;
      reader.readMessage(value,proto.bragi.PostMapStatisticsValues.deserializeBinaryFromReader);
      msg.setDeaths(value);
      break;
    case 6:
      var value = new proto.bragi.PostMapStatisticsValues;
      reader.readMessage(value,proto.bragi.PostMapStatisticsValues.deserializeBinaryFromReader);
      msg.setAssists(value);
      break;
    case 7:
      var value = new proto.bragi.PostMapStatisticsValues;
      reader.readMessage(value,proto.bragi.PostMapStatisticsValues.deserializeBinaryFromReader);
      msg.setRoundsSurvived(value);
      break;
    case 8:
      var value = new proto.bragi.PostMapStatisticsValues;
      reader.readMessage(value,proto.bragi.PostMapStatisticsValues.deserializeBinaryFromReader);
      msg.setKillsOverDeaths(value);
      break;
    case 9:
      var value = new proto.bragi.PostMapStatisticsValues;
      reader.readMessage(value,proto.bragi.PostMapStatisticsValues.deserializeBinaryFromReader);
      msg.setDamage(value);
      break;
    case 10:
      var value = new proto.bragi.PostMapStatisticsValues;
      reader.readMessage(value,proto.bragi.PostMapStatisticsValues.deserializeBinaryFromReader);
      msg.setHeadshotRate(value);
      break;
    case 11:
      var value = new proto.bragi.PostMapStatisticsValues;
      reader.readMessage(value,proto.bragi.PostMapStatisticsValues.deserializeBinaryFromReader);
      msg.setFlashAssists(value);
      break;
    case 12:
      var value = new proto.bragi.PostMapStatisticsValues;
      reader.readMessage(value,proto.bragi.PostMapStatisticsValues.deserializeBinaryFromReader);
      msg.setOpeningKills(value);
      break;
    case 13:
      var value = new proto.bragi.PostMapStatisticsValues;
      reader.readMessage(value,proto.bragi.PostMapStatisticsValues.deserializeBinaryFromReader);
      msg.setClutchRounds(value);
      break;
    case 14:
      var value = new proto.bragi.PostMapStatisticsValues;
      reader.readMessage(value,proto.bragi.PostMapStatisticsValues.deserializeBinaryFromReader);
      msg.setUtilityDamage(value);
      break;
    case 15:
      var value = new proto.bragi.PostMapStatisticsValues;
      reader.readMessage(value,proto.bragi.PostMapStatisticsValues.deserializeBinaryFromReader);
      msg.setGrenadesUsed(value);
      break;
    case 16:
      var value = new proto.bragi.PostMapStatisticsValues;
      reader.readMessage(value,proto.bragi.PostMapStatisticsValues.deserializeBinaryFromReader);
      msg.setEnemiesFlashed(value);
      break;
    case 17:
      var value = new proto.bragi.PostMapStatisticsValues;
      reader.readMessage(value,proto.bragi.PostMapStatisticsValues.deserializeBinaryFromReader);
      msg.setAwpKills(value);
      break;
    case 18:
      var value = new proto.bragi.PostMapStatisticsValues;
      reader.readMessage(value,proto.bragi.PostMapStatisticsValues.deserializeBinaryFromReader);
      msg.setLurkKills(value);
      break;
    case 19:
      var value = new proto.bragi.PostMapStatisticsValues;
      reader.readMessage(value,proto.bragi.PostMapStatisticsValues.deserializeBinaryFromReader);
      msg.setKillsDifference(value);
      break;
    case 20:
      var value = new proto.bragi.PostMapStatisticsValues;
      reader.readMessage(value,proto.bragi.PostMapStatisticsValues.deserializeBinaryFromReader);
      msg.setKillCost(value);
      break;
    case 21:
      var value = new proto.bragi.PostMapStatisticsValues;
      reader.readMessage(value,proto.bragi.PostMapStatisticsValues.deserializeBinaryFromReader);
      msg.setAccuracyRate(value);
      break;
    case 22:
      var value = new proto.bragi.CsgoWeaponPostMapStatistics;
      reader.readMessage(value,proto.bragi.CsgoWeaponPostMapStatistics.deserializeBinaryFromReader);
      msg.addFavouriteWeapons(value);
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
proto.bragi.CsgoPlayerPostMapStatistics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoPlayerPostMapStatistics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoPlayerPostMapStatistics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayerPostMapStatistics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.Player.serializeBinaryToWriter
    );
  }
  f = message.getPlayerMapRole();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getKills();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.PostMapStatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getDeaths();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bragi.PostMapStatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getAssists();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bragi.PostMapStatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getRoundsSurvived();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bragi.PostMapStatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getKillsOverDeaths();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.bragi.PostMapStatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getDamage();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.bragi.PostMapStatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getHeadshotRate();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.bragi.PostMapStatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getFlashAssists();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.bragi.PostMapStatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getOpeningKills();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.bragi.PostMapStatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getClutchRounds();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.bragi.PostMapStatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getUtilityDamage();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.bragi.PostMapStatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getGrenadesUsed();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.bragi.PostMapStatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getEnemiesFlashed();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.bragi.PostMapStatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getAwpKills();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.bragi.PostMapStatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getLurkKills();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.bragi.PostMapStatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getKillsDifference();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.bragi.PostMapStatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getKillCost();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.bragi.PostMapStatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getAccuracyRate();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.bragi.PostMapStatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getFavouriteWeaponsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      22,
      f,
      proto.bragi.CsgoWeaponPostMapStatistics.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Player player = 2;
 * @return {?proto.bragi.Player}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.getPlayer = function() {
  return /** @type{?proto.bragi.Player} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Player, 2));
};


/**
 * @param {?proto.bragi.Player|undefined} value
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
*/
proto.bragi.CsgoPlayerPostMapStatistics.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CsgoPlayerRole player_map_role = 3;
 * @return {!proto.bragi.CsgoPlayerRole}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.getPlayerMapRole = function() {
  return /** @type {!proto.bragi.CsgoPlayerRole} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.bragi.CsgoPlayerRole} value
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.setPlayerMapRole = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional PostMapStatisticsValues kills = 4;
 * @return {?proto.bragi.PostMapStatisticsValues}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.getKills = function() {
  return /** @type{?proto.bragi.PostMapStatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PostMapStatisticsValues, 4));
};


/**
 * @param {?proto.bragi.PostMapStatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
*/
proto.bragi.CsgoPlayerPostMapStatistics.prototype.setKills = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.clearKills = function() {
  return this.setKills(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.hasKills = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional PostMapStatisticsValues deaths = 5;
 * @return {?proto.bragi.PostMapStatisticsValues}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.getDeaths = function() {
  return /** @type{?proto.bragi.PostMapStatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PostMapStatisticsValues, 5));
};


/**
 * @param {?proto.bragi.PostMapStatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
*/
proto.bragi.CsgoPlayerPostMapStatistics.prototype.setDeaths = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.clearDeaths = function() {
  return this.setDeaths(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.hasDeaths = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional PostMapStatisticsValues assists = 6;
 * @return {?proto.bragi.PostMapStatisticsValues}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.getAssists = function() {
  return /** @type{?proto.bragi.PostMapStatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PostMapStatisticsValues, 6));
};


/**
 * @param {?proto.bragi.PostMapStatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
*/
proto.bragi.CsgoPlayerPostMapStatistics.prototype.setAssists = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.clearAssists = function() {
  return this.setAssists(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.hasAssists = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional PostMapStatisticsValues rounds_survived = 7;
 * @return {?proto.bragi.PostMapStatisticsValues}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.getRoundsSurvived = function() {
  return /** @type{?proto.bragi.PostMapStatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PostMapStatisticsValues, 7));
};


/**
 * @param {?proto.bragi.PostMapStatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
*/
proto.bragi.CsgoPlayerPostMapStatistics.prototype.setRoundsSurvived = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.clearRoundsSurvived = function() {
  return this.setRoundsSurvived(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.hasRoundsSurvived = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional PostMapStatisticsValues kills_over_deaths = 8;
 * @return {?proto.bragi.PostMapStatisticsValues}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.getKillsOverDeaths = function() {
  return /** @type{?proto.bragi.PostMapStatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PostMapStatisticsValues, 8));
};


/**
 * @param {?proto.bragi.PostMapStatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
*/
proto.bragi.CsgoPlayerPostMapStatistics.prototype.setKillsOverDeaths = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.clearKillsOverDeaths = function() {
  return this.setKillsOverDeaths(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.hasKillsOverDeaths = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional PostMapStatisticsValues damage = 9;
 * @return {?proto.bragi.PostMapStatisticsValues}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.getDamage = function() {
  return /** @type{?proto.bragi.PostMapStatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PostMapStatisticsValues, 9));
};


/**
 * @param {?proto.bragi.PostMapStatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
*/
proto.bragi.CsgoPlayerPostMapStatistics.prototype.setDamage = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.clearDamage = function() {
  return this.setDamage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.hasDamage = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional PostMapStatisticsValues headshot_rate = 10;
 * @return {?proto.bragi.PostMapStatisticsValues}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.getHeadshotRate = function() {
  return /** @type{?proto.bragi.PostMapStatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PostMapStatisticsValues, 10));
};


/**
 * @param {?proto.bragi.PostMapStatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
*/
proto.bragi.CsgoPlayerPostMapStatistics.prototype.setHeadshotRate = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.clearHeadshotRate = function() {
  return this.setHeadshotRate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.hasHeadshotRate = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional PostMapStatisticsValues flash_assists = 11;
 * @return {?proto.bragi.PostMapStatisticsValues}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.getFlashAssists = function() {
  return /** @type{?proto.bragi.PostMapStatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PostMapStatisticsValues, 11));
};


/**
 * @param {?proto.bragi.PostMapStatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
*/
proto.bragi.CsgoPlayerPostMapStatistics.prototype.setFlashAssists = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.clearFlashAssists = function() {
  return this.setFlashAssists(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.hasFlashAssists = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional PostMapStatisticsValues opening_kills = 12;
 * @return {?proto.bragi.PostMapStatisticsValues}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.getOpeningKills = function() {
  return /** @type{?proto.bragi.PostMapStatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PostMapStatisticsValues, 12));
};


/**
 * @param {?proto.bragi.PostMapStatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
*/
proto.bragi.CsgoPlayerPostMapStatistics.prototype.setOpeningKills = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.clearOpeningKills = function() {
  return this.setOpeningKills(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.hasOpeningKills = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional PostMapStatisticsValues clutch_rounds = 13;
 * @return {?proto.bragi.PostMapStatisticsValues}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.getClutchRounds = function() {
  return /** @type{?proto.bragi.PostMapStatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PostMapStatisticsValues, 13));
};


/**
 * @param {?proto.bragi.PostMapStatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
*/
proto.bragi.CsgoPlayerPostMapStatistics.prototype.setClutchRounds = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.clearClutchRounds = function() {
  return this.setClutchRounds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.hasClutchRounds = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional PostMapStatisticsValues utility_damage = 14;
 * @return {?proto.bragi.PostMapStatisticsValues}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.getUtilityDamage = function() {
  return /** @type{?proto.bragi.PostMapStatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PostMapStatisticsValues, 14));
};


/**
 * @param {?proto.bragi.PostMapStatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
*/
proto.bragi.CsgoPlayerPostMapStatistics.prototype.setUtilityDamage = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.clearUtilityDamage = function() {
  return this.setUtilityDamage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.hasUtilityDamage = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional PostMapStatisticsValues grenades_used = 15;
 * @return {?proto.bragi.PostMapStatisticsValues}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.getGrenadesUsed = function() {
  return /** @type{?proto.bragi.PostMapStatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PostMapStatisticsValues, 15));
};


/**
 * @param {?proto.bragi.PostMapStatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
*/
proto.bragi.CsgoPlayerPostMapStatistics.prototype.setGrenadesUsed = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.clearGrenadesUsed = function() {
  return this.setGrenadesUsed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.hasGrenadesUsed = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional PostMapStatisticsValues enemies_flashed = 16;
 * @return {?proto.bragi.PostMapStatisticsValues}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.getEnemiesFlashed = function() {
  return /** @type{?proto.bragi.PostMapStatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PostMapStatisticsValues, 16));
};


/**
 * @param {?proto.bragi.PostMapStatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
*/
proto.bragi.CsgoPlayerPostMapStatistics.prototype.setEnemiesFlashed = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.clearEnemiesFlashed = function() {
  return this.setEnemiesFlashed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.hasEnemiesFlashed = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional PostMapStatisticsValues awp_kills = 17;
 * @return {?proto.bragi.PostMapStatisticsValues}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.getAwpKills = function() {
  return /** @type{?proto.bragi.PostMapStatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PostMapStatisticsValues, 17));
};


/**
 * @param {?proto.bragi.PostMapStatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
*/
proto.bragi.CsgoPlayerPostMapStatistics.prototype.setAwpKills = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.clearAwpKills = function() {
  return this.setAwpKills(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.hasAwpKills = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional PostMapStatisticsValues lurk_kills = 18;
 * @return {?proto.bragi.PostMapStatisticsValues}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.getLurkKills = function() {
  return /** @type{?proto.bragi.PostMapStatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PostMapStatisticsValues, 18));
};


/**
 * @param {?proto.bragi.PostMapStatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
*/
proto.bragi.CsgoPlayerPostMapStatistics.prototype.setLurkKills = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.clearLurkKills = function() {
  return this.setLurkKills(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.hasLurkKills = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional PostMapStatisticsValues kills_difference = 19;
 * @return {?proto.bragi.PostMapStatisticsValues}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.getKillsDifference = function() {
  return /** @type{?proto.bragi.PostMapStatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PostMapStatisticsValues, 19));
};


/**
 * @param {?proto.bragi.PostMapStatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
*/
proto.bragi.CsgoPlayerPostMapStatistics.prototype.setKillsDifference = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.clearKillsDifference = function() {
  return this.setKillsDifference(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.hasKillsDifference = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional PostMapStatisticsValues kill_cost = 20;
 * @return {?proto.bragi.PostMapStatisticsValues}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.getKillCost = function() {
  return /** @type{?proto.bragi.PostMapStatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PostMapStatisticsValues, 20));
};


/**
 * @param {?proto.bragi.PostMapStatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
*/
proto.bragi.CsgoPlayerPostMapStatistics.prototype.setKillCost = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.clearKillCost = function() {
  return this.setKillCost(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.hasKillCost = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional PostMapStatisticsValues accuracy_rate = 21;
 * @return {?proto.bragi.PostMapStatisticsValues}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.getAccuracyRate = function() {
  return /** @type{?proto.bragi.PostMapStatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.PostMapStatisticsValues, 21));
};


/**
 * @param {?proto.bragi.PostMapStatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
*/
proto.bragi.CsgoPlayerPostMapStatistics.prototype.setAccuracyRate = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.clearAccuracyRate = function() {
  return this.setAccuracyRate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.hasAccuracyRate = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * repeated CsgoWeaponPostMapStatistics favourite_weapons = 22;
 * @return {!Array<!proto.bragi.CsgoWeaponPostMapStatistics>}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.getFavouriteWeaponsList = function() {
  return /** @type{!Array<!proto.bragi.CsgoWeaponPostMapStatistics>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.CsgoWeaponPostMapStatistics, 22));
};


/**
 * @param {!Array<!proto.bragi.CsgoWeaponPostMapStatistics>} value
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
*/
proto.bragi.CsgoPlayerPostMapStatistics.prototype.setFavouriteWeaponsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 22, value);
};


/**
 * @param {!proto.bragi.CsgoWeaponPostMapStatistics=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.CsgoWeaponPostMapStatistics}
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.addFavouriteWeapons = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 22, opt_value, proto.bragi.CsgoWeaponPostMapStatistics, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CsgoPlayerPostMapStatistics} returns this
 */
proto.bragi.CsgoPlayerPostMapStatistics.prototype.clearFavouriteWeaponsList = function() {
  return this.setFavouriteWeaponsList([]);
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
proto.bragi.CsgoRoundPostmap.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoRoundPostmap.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoRoundPostmap} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoRoundPostmap.toObject = function(includeInstance, msg) {
  var f, obj = {
    round: jspb.Message.getFieldWithDefault(msg, 1, 0),
    map: (f = msg.getMap()) && proto.bragi.Map.toObject(includeInstance, f),
    csgoMap: (f = msg.getCsgoMap()) && proto.bragi.CsgoMap.toObject(includeInstance, f),
    winnerTeam: (f = msg.getWinnerTeam()) && proto.bragi.Team.toObject(includeInstance, f),
    winnerSide: jspb.Message.getFieldWithDefault(msg, 5, 0),
    roundOutcome: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.bragi.CsgoRoundPostmap}
 */
proto.bragi.CsgoRoundPostmap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoRoundPostmap;
  return proto.bragi.CsgoRoundPostmap.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoRoundPostmap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoRoundPostmap}
 */
proto.bragi.CsgoRoundPostmap.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRound(value);
      break;
    case 2:
      var value = new proto.bragi.Map;
      reader.readMessage(value,proto.bragi.Map.deserializeBinaryFromReader);
      msg.setMap(value);
      break;
    case 3:
      var value = new proto.bragi.CsgoMap;
      reader.readMessage(value,proto.bragi.CsgoMap.deserializeBinaryFromReader);
      msg.setCsgoMap(value);
      break;
    case 4:
      var value = new proto.bragi.Team;
      reader.readMessage(value,proto.bragi.Team.deserializeBinaryFromReader);
      msg.setWinnerTeam(value);
      break;
    case 5:
      var value = /** @type {!proto.bragi.CsgoSide} */ (reader.readEnum());
      msg.setWinnerSide(value);
      break;
    case 6:
      var value = /** @type {!proto.bragi.CsgoRoundOutcome} */ (reader.readEnum());
      msg.setRoundOutcome(value);
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
proto.bragi.CsgoRoundPostmap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoRoundPostmap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoRoundPostmap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoRoundPostmap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRound();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMap();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.Map.serializeBinaryToWriter
    );
  }
  f = message.getCsgoMap();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.CsgoMap.serializeBinaryToWriter
    );
  }
  f = message.getWinnerTeam();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.Team.serializeBinaryToWriter
    );
  }
  f = message.getWinnerSide();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getRoundOutcome();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional int32 round = 1;
 * @return {number}
 */
proto.bragi.CsgoRoundPostmap.prototype.getRound = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoRoundPostmap} returns this
 */
proto.bragi.CsgoRoundPostmap.prototype.setRound = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Map map = 2;
 * @return {?proto.bragi.Map}
 */
proto.bragi.CsgoRoundPostmap.prototype.getMap = function() {
  return /** @type{?proto.bragi.Map} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Map, 2));
};


/**
 * @param {?proto.bragi.Map|undefined} value
 * @return {!proto.bragi.CsgoRoundPostmap} returns this
*/
proto.bragi.CsgoRoundPostmap.prototype.setMap = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoRoundPostmap} returns this
 */
proto.bragi.CsgoRoundPostmap.prototype.clearMap = function() {
  return this.setMap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoRoundPostmap.prototype.hasMap = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CsgoMap csgo_map = 3;
 * @return {?proto.bragi.CsgoMap}
 */
proto.bragi.CsgoRoundPostmap.prototype.getCsgoMap = function() {
  return /** @type{?proto.bragi.CsgoMap} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoMap, 3));
};


/**
 * @param {?proto.bragi.CsgoMap|undefined} value
 * @return {!proto.bragi.CsgoRoundPostmap} returns this
*/
proto.bragi.CsgoRoundPostmap.prototype.setCsgoMap = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoRoundPostmap} returns this
 */
proto.bragi.CsgoRoundPostmap.prototype.clearCsgoMap = function() {
  return this.setCsgoMap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoRoundPostmap.prototype.hasCsgoMap = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Team winner_team = 4;
 * @return {?proto.bragi.Team}
 */
proto.bragi.CsgoRoundPostmap.prototype.getWinnerTeam = function() {
  return /** @type{?proto.bragi.Team} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Team, 4));
};


/**
 * @param {?proto.bragi.Team|undefined} value
 * @return {!proto.bragi.CsgoRoundPostmap} returns this
*/
proto.bragi.CsgoRoundPostmap.prototype.setWinnerTeam = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoRoundPostmap} returns this
 */
proto.bragi.CsgoRoundPostmap.prototype.clearWinnerTeam = function() {
  return this.setWinnerTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoRoundPostmap.prototype.hasWinnerTeam = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CsgoSide winner_side = 5;
 * @return {!proto.bragi.CsgoSide}
 */
proto.bragi.CsgoRoundPostmap.prototype.getWinnerSide = function() {
  return /** @type {!proto.bragi.CsgoSide} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.bragi.CsgoSide} value
 * @return {!proto.bragi.CsgoRoundPostmap} returns this
 */
proto.bragi.CsgoRoundPostmap.prototype.setWinnerSide = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional CsgoRoundOutcome round_outcome = 6;
 * @return {!proto.bragi.CsgoRoundOutcome}
 */
proto.bragi.CsgoRoundPostmap.prototype.getRoundOutcome = function() {
  return /** @type {!proto.bragi.CsgoRoundOutcome} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.bragi.CsgoRoundOutcome} value
 * @return {!proto.bragi.CsgoRoundPostmap} returns this
 */
proto.bragi.CsgoRoundPostmap.prototype.setRoundOutcome = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
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
proto.bragi.CsgoMapStatisticsAccordingSide.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoMapStatisticsAccordingSide.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoMapStatisticsAccordingSide} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoMapStatisticsAccordingSide.toObject = function(includeInstance, msg) {
  var f, obj = {
    map: (f = msg.getMap()) && proto.bragi.CsgoMap.toObject(includeInstance, f),
    statistics: (f = msg.getStatistics()) && proto.bragi.CsgoStatisticsSideValues.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CsgoMapStatisticsAccordingSide}
 */
proto.bragi.CsgoMapStatisticsAccordingSide.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoMapStatisticsAccordingSide;
  return proto.bragi.CsgoMapStatisticsAccordingSide.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoMapStatisticsAccordingSide} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoMapStatisticsAccordingSide}
 */
proto.bragi.CsgoMapStatisticsAccordingSide.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CsgoMap;
      reader.readMessage(value,proto.bragi.CsgoMap.deserializeBinaryFromReader);
      msg.setMap(value);
      break;
    case 2:
      var value = new proto.bragi.CsgoStatisticsSideValues;
      reader.readMessage(value,proto.bragi.CsgoStatisticsSideValues.deserializeBinaryFromReader);
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
proto.bragi.CsgoMapStatisticsAccordingSide.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoMapStatisticsAccordingSide.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoMapStatisticsAccordingSide} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoMapStatisticsAccordingSide.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMap();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CsgoMap.serializeBinaryToWriter
    );
  }
  f = message.getStatistics();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CsgoStatisticsSideValues.serializeBinaryToWriter
    );
  }
};


/**
 * optional CsgoMap map = 1;
 * @return {?proto.bragi.CsgoMap}
 */
proto.bragi.CsgoMapStatisticsAccordingSide.prototype.getMap = function() {
  return /** @type{?proto.bragi.CsgoMap} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoMap, 1));
};


/**
 * @param {?proto.bragi.CsgoMap|undefined} value
 * @return {!proto.bragi.CsgoMapStatisticsAccordingSide} returns this
*/
proto.bragi.CsgoMapStatisticsAccordingSide.prototype.setMap = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoMapStatisticsAccordingSide} returns this
 */
proto.bragi.CsgoMapStatisticsAccordingSide.prototype.clearMap = function() {
  return this.setMap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoMapStatisticsAccordingSide.prototype.hasMap = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CsgoStatisticsSideValues statistics = 2;
 * @return {?proto.bragi.CsgoStatisticsSideValues}
 */
proto.bragi.CsgoMapStatisticsAccordingSide.prototype.getStatistics = function() {
  return /** @type{?proto.bragi.CsgoStatisticsSideValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoStatisticsSideValues, 2));
};


/**
 * @param {?proto.bragi.CsgoStatisticsSideValues|undefined} value
 * @return {!proto.bragi.CsgoMapStatisticsAccordingSide} returns this
*/
proto.bragi.CsgoMapStatisticsAccordingSide.prototype.setStatistics = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoMapStatisticsAccordingSide} returns this
 */
proto.bragi.CsgoMapStatisticsAccordingSide.prototype.clearStatistics = function() {
  return this.setStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoMapStatisticsAccordingSide.prototype.hasStatistics = function() {
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
proto.bragi.CsgoTournamentMapStatistics.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoTournamentMapStatistics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoTournamentMapStatistics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTournamentMapStatistics.toObject = function(includeInstance, msg) {
  var f, obj = {
    map: (f = msg.getMap()) && proto.bragi.CsgoMap.toObject(includeInstance, f),
    picks: jspb.Message.getFieldWithDefault(msg, 2, 0),
    bans: jspb.Message.getFieldWithDefault(msg, 3, 0),
    terroristsWinrateInPercent: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    counterTerroristsWinrateInPercent: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    bestTeams: (f = msg.getBestTeams()) && proto.bragi.CsgoTournamentBestTeamStatistics.toObject(includeInstance, f),
    bestPlayers: (f = msg.getBestPlayers()) && proto.bragi.CsgoTournamentBestPlayerStatistics.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CsgoTournamentMapStatistics}
 */
proto.bragi.CsgoTournamentMapStatistics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoTournamentMapStatistics;
  return proto.bragi.CsgoTournamentMapStatistics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoTournamentMapStatistics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoTournamentMapStatistics}
 */
proto.bragi.CsgoTournamentMapStatistics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CsgoMap;
      reader.readMessage(value,proto.bragi.CsgoMap.deserializeBinaryFromReader);
      msg.setMap(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPicks(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBans(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTerroristsWinrateInPercent(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setCounterTerroristsWinrateInPercent(value);
      break;
    case 6:
      var value = new proto.bragi.CsgoTournamentBestTeamStatistics;
      reader.readMessage(value,proto.bragi.CsgoTournamentBestTeamStatistics.deserializeBinaryFromReader);
      msg.setBestTeams(value);
      break;
    case 7:
      var value = new proto.bragi.CsgoTournamentBestPlayerStatistics;
      reader.readMessage(value,proto.bragi.CsgoTournamentBestPlayerStatistics.deserializeBinaryFromReader);
      msg.setBestPlayers(value);
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
proto.bragi.CsgoTournamentMapStatistics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoTournamentMapStatistics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoTournamentMapStatistics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTournamentMapStatistics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMap();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CsgoMap.serializeBinaryToWriter
    );
  }
  f = message.getPicks();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getBans();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getBestTeams();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bragi.CsgoTournamentBestTeamStatistics.serializeBinaryToWriter
    );
  }
  f = message.getBestPlayers();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bragi.CsgoTournamentBestPlayerStatistics.serializeBinaryToWriter
    );
  }
};


/**
 * optional CsgoMap map = 1;
 * @return {?proto.bragi.CsgoMap}
 */
proto.bragi.CsgoTournamentMapStatistics.prototype.getMap = function() {
  return /** @type{?proto.bragi.CsgoMap} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoMap, 1));
};


/**
 * @param {?proto.bragi.CsgoMap|undefined} value
 * @return {!proto.bragi.CsgoTournamentMapStatistics} returns this
*/
proto.bragi.CsgoTournamentMapStatistics.prototype.setMap = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTournamentMapStatistics} returns this
 */
proto.bragi.CsgoTournamentMapStatistics.prototype.clearMap = function() {
  return this.setMap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTournamentMapStatistics.prototype.hasMap = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 picks = 2;
 * @return {number}
 */
proto.bragi.CsgoTournamentMapStatistics.prototype.getPicks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTournamentMapStatistics} returns this
 */
proto.bragi.CsgoTournamentMapStatistics.prototype.setPicks = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 bans = 3;
 * @return {number}
 */
proto.bragi.CsgoTournamentMapStatistics.prototype.getBans = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTournamentMapStatistics} returns this
 */
proto.bragi.CsgoTournamentMapStatistics.prototype.setBans = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional float terrorists_winrate_in_percent = 4;
 * @return {number}
 */
proto.bragi.CsgoTournamentMapStatistics.prototype.getTerroristsWinrateInPercent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTournamentMapStatistics} returns this
 */
proto.bragi.CsgoTournamentMapStatistics.prototype.setTerroristsWinrateInPercent = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CsgoTournamentMapStatistics} returns this
 */
proto.bragi.CsgoTournamentMapStatistics.prototype.clearTerroristsWinrateInPercent = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTournamentMapStatistics.prototype.hasTerroristsWinrateInPercent = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional float counter_terrorists_winrate_in_percent = 5;
 * @return {number}
 */
proto.bragi.CsgoTournamentMapStatistics.prototype.getCounterTerroristsWinrateInPercent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTournamentMapStatistics} returns this
 */
proto.bragi.CsgoTournamentMapStatistics.prototype.setCounterTerroristsWinrateInPercent = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CsgoTournamentMapStatistics} returns this
 */
proto.bragi.CsgoTournamentMapStatistics.prototype.clearCounterTerroristsWinrateInPercent = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTournamentMapStatistics.prototype.hasCounterTerroristsWinrateInPercent = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional CsgoTournamentBestTeamStatistics best_teams = 6;
 * @return {?proto.bragi.CsgoTournamentBestTeamStatistics}
 */
proto.bragi.CsgoTournamentMapStatistics.prototype.getBestTeams = function() {
  return /** @type{?proto.bragi.CsgoTournamentBestTeamStatistics} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoTournamentBestTeamStatistics, 6));
};


/**
 * @param {?proto.bragi.CsgoTournamentBestTeamStatistics|undefined} value
 * @return {!proto.bragi.CsgoTournamentMapStatistics} returns this
*/
proto.bragi.CsgoTournamentMapStatistics.prototype.setBestTeams = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTournamentMapStatistics} returns this
 */
proto.bragi.CsgoTournamentMapStatistics.prototype.clearBestTeams = function() {
  return this.setBestTeams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTournamentMapStatistics.prototype.hasBestTeams = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional CsgoTournamentBestPlayerStatistics best_players = 7;
 * @return {?proto.bragi.CsgoTournamentBestPlayerStatistics}
 */
proto.bragi.CsgoTournamentMapStatistics.prototype.getBestPlayers = function() {
  return /** @type{?proto.bragi.CsgoTournamentBestPlayerStatistics} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoTournamentBestPlayerStatistics, 7));
};


/**
 * @param {?proto.bragi.CsgoTournamentBestPlayerStatistics|undefined} value
 * @return {!proto.bragi.CsgoTournamentMapStatistics} returns this
*/
proto.bragi.CsgoTournamentMapStatistics.prototype.setBestPlayers = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTournamentMapStatistics} returns this
 */
proto.bragi.CsgoTournamentMapStatistics.prototype.clearBestPlayers = function() {
  return this.setBestPlayers(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTournamentMapStatistics.prototype.hasBestPlayers = function() {
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
proto.bragi.CsgoTournamentPlayerStatistics.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoTournamentPlayerStatistics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoTournamentPlayerStatistics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTournamentPlayerStatistics.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: (f = msg.getPlayer()) && proto.bragi.Player.toObject(includeInstance, f),
    team: (f = msg.getTeam()) && proto.bragi.Team.toObject(includeInstance, f),
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.bragi.CsgoTournamentPlayerStatistics}
 */
proto.bragi.CsgoTournamentPlayerStatistics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoTournamentPlayerStatistics;
  return proto.bragi.CsgoTournamentPlayerStatistics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoTournamentPlayerStatistics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoTournamentPlayerStatistics}
 */
proto.bragi.CsgoTournamentPlayerStatistics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Player;
      reader.readMessage(value,proto.bragi.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    case 2:
      var value = new proto.bragi.Team;
      reader.readMessage(value,proto.bragi.Team.deserializeBinaryFromReader);
      msg.setTeam(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
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
proto.bragi.CsgoTournamentPlayerStatistics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoTournamentPlayerStatistics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoTournamentPlayerStatistics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTournamentPlayerStatistics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.Player.serializeBinaryToWriter
    );
  }
  f = message.getTeam();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.Team.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional Player player = 1;
 * @return {?proto.bragi.Player}
 */
proto.bragi.CsgoTournamentPlayerStatistics.prototype.getPlayer = function() {
  return /** @type{?proto.bragi.Player} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Player, 1));
};


/**
 * @param {?proto.bragi.Player|undefined} value
 * @return {!proto.bragi.CsgoTournamentPlayerStatistics} returns this
*/
proto.bragi.CsgoTournamentPlayerStatistics.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTournamentPlayerStatistics} returns this
 */
proto.bragi.CsgoTournamentPlayerStatistics.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTournamentPlayerStatistics.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Team team = 2;
 * @return {?proto.bragi.Team}
 */
proto.bragi.CsgoTournamentPlayerStatistics.prototype.getTeam = function() {
  return /** @type{?proto.bragi.Team} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Team, 2));
};


/**
 * @param {?proto.bragi.Team|undefined} value
 * @return {!proto.bragi.CsgoTournamentPlayerStatistics} returns this
*/
proto.bragi.CsgoTournamentPlayerStatistics.prototype.setTeam = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTournamentPlayerStatistics} returns this
 */
proto.bragi.CsgoTournamentPlayerStatistics.prototype.clearTeam = function() {
  return this.setTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTournamentPlayerStatistics.prototype.hasTeam = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional float value = 3;
 * @return {number}
 */
proto.bragi.CsgoTournamentPlayerStatistics.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTournamentPlayerStatistics} returns this
 */
proto.bragi.CsgoTournamentPlayerStatistics.prototype.setValue = function(value) {
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
proto.bragi.CsgoTournamentBestTeamStatistics.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoTournamentBestTeamStatistics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoTournamentBestTeamStatistics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTournamentBestTeamStatistics.toObject = function(includeInstance, msg) {
  var f, obj = {
    highestKills: (f = msg.getHighestKills()) && proto.bragi.TournamentTeamStatisticsValue.toObject(includeInstance, f),
    highestKillsOverDeaths: (f = msg.getHighestKillsOverDeaths()) && proto.bragi.TournamentTeamStatisticsValue.toObject(includeInstance, f),
    highestAwpKills: (f = msg.getHighestAwpKills()) && proto.bragi.TournamentTeamStatisticsValue.toObject(includeInstance, f),
    highestPlantRate: (f = msg.getHighestPlantRate()) && proto.bragi.TournamentTeamStatisticsValueInPercent.toObject(includeInstance, f),
    highestDefuseRate: (f = msg.getHighestDefuseRate()) && proto.bragi.TournamentTeamStatisticsValueInPercent.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CsgoTournamentBestTeamStatistics}
 */
proto.bragi.CsgoTournamentBestTeamStatistics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoTournamentBestTeamStatistics;
  return proto.bragi.CsgoTournamentBestTeamStatistics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoTournamentBestTeamStatistics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoTournamentBestTeamStatistics}
 */
proto.bragi.CsgoTournamentBestTeamStatistics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.TournamentTeamStatisticsValue;
      reader.readMessage(value,proto.bragi.TournamentTeamStatisticsValue.deserializeBinaryFromReader);
      msg.setHighestKills(value);
      break;
    case 2:
      var value = new proto.bragi.TournamentTeamStatisticsValue;
      reader.readMessage(value,proto.bragi.TournamentTeamStatisticsValue.deserializeBinaryFromReader);
      msg.setHighestKillsOverDeaths(value);
      break;
    case 3:
      var value = new proto.bragi.TournamentTeamStatisticsValue;
      reader.readMessage(value,proto.bragi.TournamentTeamStatisticsValue.deserializeBinaryFromReader);
      msg.setHighestAwpKills(value);
      break;
    case 4:
      var value = new proto.bragi.TournamentTeamStatisticsValueInPercent;
      reader.readMessage(value,proto.bragi.TournamentTeamStatisticsValueInPercent.deserializeBinaryFromReader);
      msg.setHighestPlantRate(value);
      break;
    case 5:
      var value = new proto.bragi.TournamentTeamStatisticsValueInPercent;
      reader.readMessage(value,proto.bragi.TournamentTeamStatisticsValueInPercent.deserializeBinaryFromReader);
      msg.setHighestDefuseRate(value);
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
proto.bragi.CsgoTournamentBestTeamStatistics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoTournamentBestTeamStatistics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoTournamentBestTeamStatistics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTournamentBestTeamStatistics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHighestKills();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.TournamentTeamStatisticsValue.serializeBinaryToWriter
    );
  }
  f = message.getHighestKillsOverDeaths();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.TournamentTeamStatisticsValue.serializeBinaryToWriter
    );
  }
  f = message.getHighestAwpKills();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.TournamentTeamStatisticsValue.serializeBinaryToWriter
    );
  }
  f = message.getHighestPlantRate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.TournamentTeamStatisticsValueInPercent.serializeBinaryToWriter
    );
  }
  f = message.getHighestDefuseRate();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bragi.TournamentTeamStatisticsValueInPercent.serializeBinaryToWriter
    );
  }
};


/**
 * optional TournamentTeamStatisticsValue highest_kills = 1;
 * @return {?proto.bragi.TournamentTeamStatisticsValue}
 */
proto.bragi.CsgoTournamentBestTeamStatistics.prototype.getHighestKills = function() {
  return /** @type{?proto.bragi.TournamentTeamStatisticsValue} */ (
    jspb.Message.getWrapperField(this, proto.bragi.TournamentTeamStatisticsValue, 1));
};


/**
 * @param {?proto.bragi.TournamentTeamStatisticsValue|undefined} value
 * @return {!proto.bragi.CsgoTournamentBestTeamStatistics} returns this
*/
proto.bragi.CsgoTournamentBestTeamStatistics.prototype.setHighestKills = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTournamentBestTeamStatistics} returns this
 */
proto.bragi.CsgoTournamentBestTeamStatistics.prototype.clearHighestKills = function() {
  return this.setHighestKills(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTournamentBestTeamStatistics.prototype.hasHighestKills = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TournamentTeamStatisticsValue highest_kills_over_deaths = 2;
 * @return {?proto.bragi.TournamentTeamStatisticsValue}
 */
proto.bragi.CsgoTournamentBestTeamStatistics.prototype.getHighestKillsOverDeaths = function() {
  return /** @type{?proto.bragi.TournamentTeamStatisticsValue} */ (
    jspb.Message.getWrapperField(this, proto.bragi.TournamentTeamStatisticsValue, 2));
};


/**
 * @param {?proto.bragi.TournamentTeamStatisticsValue|undefined} value
 * @return {!proto.bragi.CsgoTournamentBestTeamStatistics} returns this
*/
proto.bragi.CsgoTournamentBestTeamStatistics.prototype.setHighestKillsOverDeaths = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTournamentBestTeamStatistics} returns this
 */
proto.bragi.CsgoTournamentBestTeamStatistics.prototype.clearHighestKillsOverDeaths = function() {
  return this.setHighestKillsOverDeaths(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTournamentBestTeamStatistics.prototype.hasHighestKillsOverDeaths = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TournamentTeamStatisticsValue highest_awp_kills = 3;
 * @return {?proto.bragi.TournamentTeamStatisticsValue}
 */
proto.bragi.CsgoTournamentBestTeamStatistics.prototype.getHighestAwpKills = function() {
  return /** @type{?proto.bragi.TournamentTeamStatisticsValue} */ (
    jspb.Message.getWrapperField(this, proto.bragi.TournamentTeamStatisticsValue, 3));
};


/**
 * @param {?proto.bragi.TournamentTeamStatisticsValue|undefined} value
 * @return {!proto.bragi.CsgoTournamentBestTeamStatistics} returns this
*/
proto.bragi.CsgoTournamentBestTeamStatistics.prototype.setHighestAwpKills = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTournamentBestTeamStatistics} returns this
 */
proto.bragi.CsgoTournamentBestTeamStatistics.prototype.clearHighestAwpKills = function() {
  return this.setHighestAwpKills(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTournamentBestTeamStatistics.prototype.hasHighestAwpKills = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional TournamentTeamStatisticsValueInPercent highest_plant_rate = 4;
 * @return {?proto.bragi.TournamentTeamStatisticsValueInPercent}
 */
proto.bragi.CsgoTournamentBestTeamStatistics.prototype.getHighestPlantRate = function() {
  return /** @type{?proto.bragi.TournamentTeamStatisticsValueInPercent} */ (
    jspb.Message.getWrapperField(this, proto.bragi.TournamentTeamStatisticsValueInPercent, 4));
};


/**
 * @param {?proto.bragi.TournamentTeamStatisticsValueInPercent|undefined} value
 * @return {!proto.bragi.CsgoTournamentBestTeamStatistics} returns this
*/
proto.bragi.CsgoTournamentBestTeamStatistics.prototype.setHighestPlantRate = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTournamentBestTeamStatistics} returns this
 */
proto.bragi.CsgoTournamentBestTeamStatistics.prototype.clearHighestPlantRate = function() {
  return this.setHighestPlantRate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTournamentBestTeamStatistics.prototype.hasHighestPlantRate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional TournamentTeamStatisticsValueInPercent highest_defuse_rate = 5;
 * @return {?proto.bragi.TournamentTeamStatisticsValueInPercent}
 */
proto.bragi.CsgoTournamentBestTeamStatistics.prototype.getHighestDefuseRate = function() {
  return /** @type{?proto.bragi.TournamentTeamStatisticsValueInPercent} */ (
    jspb.Message.getWrapperField(this, proto.bragi.TournamentTeamStatisticsValueInPercent, 5));
};


/**
 * @param {?proto.bragi.TournamentTeamStatisticsValueInPercent|undefined} value
 * @return {!proto.bragi.CsgoTournamentBestTeamStatistics} returns this
*/
proto.bragi.CsgoTournamentBestTeamStatistics.prototype.setHighestDefuseRate = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTournamentBestTeamStatistics} returns this
 */
proto.bragi.CsgoTournamentBestTeamStatistics.prototype.clearHighestDefuseRate = function() {
  return this.setHighestDefuseRate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTournamentBestTeamStatistics.prototype.hasHighestDefuseRate = function() {
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
proto.bragi.CsgoTournamentBestPlayerStatistics.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoTournamentBestPlayerStatistics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoTournamentBestPlayerStatistics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTournamentBestPlayerStatistics.toObject = function(includeInstance, msg) {
  var f, obj = {
    highestKills: (f = msg.getHighestKills()) && proto.bragi.CsgoTournamentPlayerStatistics.toObject(includeInstance, f),
    highestKillsOverDeaths: (f = msg.getHighestKillsOverDeaths()) && proto.bragi.CsgoTournamentPlayerStatistics.toObject(includeInstance, f),
    highestDamage: (f = msg.getHighestDamage()) && proto.bragi.CsgoTournamentPlayerStatistics.toObject(includeInstance, f),
    highestFlashAssists: (f = msg.getHighestFlashAssists()) && proto.bragi.CsgoTournamentPlayerStatistics.toObject(includeInstance, f),
    highestUtilityDamage: (f = msg.getHighestUtilityDamage()) && proto.bragi.CsgoTournamentPlayerStatistics.toObject(includeInstance, f),
    highestOpeningKills: (f = msg.getHighestOpeningKills()) && proto.bragi.CsgoTournamentPlayerStatistics.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CsgoTournamentBestPlayerStatistics}
 */
proto.bragi.CsgoTournamentBestPlayerStatistics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoTournamentBestPlayerStatistics;
  return proto.bragi.CsgoTournamentBestPlayerStatistics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoTournamentBestPlayerStatistics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoTournamentBestPlayerStatistics}
 */
proto.bragi.CsgoTournamentBestPlayerStatistics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CsgoTournamentPlayerStatistics;
      reader.readMessage(value,proto.bragi.CsgoTournamentPlayerStatistics.deserializeBinaryFromReader);
      msg.setHighestKills(value);
      break;
    case 2:
      var value = new proto.bragi.CsgoTournamentPlayerStatistics;
      reader.readMessage(value,proto.bragi.CsgoTournamentPlayerStatistics.deserializeBinaryFromReader);
      msg.setHighestKillsOverDeaths(value);
      break;
    case 3:
      var value = new proto.bragi.CsgoTournamentPlayerStatistics;
      reader.readMessage(value,proto.bragi.CsgoTournamentPlayerStatistics.deserializeBinaryFromReader);
      msg.setHighestDamage(value);
      break;
    case 4:
      var value = new proto.bragi.CsgoTournamentPlayerStatistics;
      reader.readMessage(value,proto.bragi.CsgoTournamentPlayerStatistics.deserializeBinaryFromReader);
      msg.setHighestFlashAssists(value);
      break;
    case 5:
      var value = new proto.bragi.CsgoTournamentPlayerStatistics;
      reader.readMessage(value,proto.bragi.CsgoTournamentPlayerStatistics.deserializeBinaryFromReader);
      msg.setHighestUtilityDamage(value);
      break;
    case 6:
      var value = new proto.bragi.CsgoTournamentPlayerStatistics;
      reader.readMessage(value,proto.bragi.CsgoTournamentPlayerStatistics.deserializeBinaryFromReader);
      msg.setHighestOpeningKills(value);
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
proto.bragi.CsgoTournamentBestPlayerStatistics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoTournamentBestPlayerStatistics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoTournamentBestPlayerStatistics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTournamentBestPlayerStatistics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHighestKills();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CsgoTournamentPlayerStatistics.serializeBinaryToWriter
    );
  }
  f = message.getHighestKillsOverDeaths();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CsgoTournamentPlayerStatistics.serializeBinaryToWriter
    );
  }
  f = message.getHighestDamage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.CsgoTournamentPlayerStatistics.serializeBinaryToWriter
    );
  }
  f = message.getHighestFlashAssists();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.CsgoTournamentPlayerStatistics.serializeBinaryToWriter
    );
  }
  f = message.getHighestUtilityDamage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bragi.CsgoTournamentPlayerStatistics.serializeBinaryToWriter
    );
  }
  f = message.getHighestOpeningKills();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bragi.CsgoTournamentPlayerStatistics.serializeBinaryToWriter
    );
  }
};


/**
 * optional CsgoTournamentPlayerStatistics highest_kills = 1;
 * @return {?proto.bragi.CsgoTournamentPlayerStatistics}
 */
proto.bragi.CsgoTournamentBestPlayerStatistics.prototype.getHighestKills = function() {
  return /** @type{?proto.bragi.CsgoTournamentPlayerStatistics} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoTournamentPlayerStatistics, 1));
};


/**
 * @param {?proto.bragi.CsgoTournamentPlayerStatistics|undefined} value
 * @return {!proto.bragi.CsgoTournamentBestPlayerStatistics} returns this
*/
proto.bragi.CsgoTournamentBestPlayerStatistics.prototype.setHighestKills = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTournamentBestPlayerStatistics} returns this
 */
proto.bragi.CsgoTournamentBestPlayerStatistics.prototype.clearHighestKills = function() {
  return this.setHighestKills(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTournamentBestPlayerStatistics.prototype.hasHighestKills = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CsgoTournamentPlayerStatistics highest_kills_over_deaths = 2;
 * @return {?proto.bragi.CsgoTournamentPlayerStatistics}
 */
proto.bragi.CsgoTournamentBestPlayerStatistics.prototype.getHighestKillsOverDeaths = function() {
  return /** @type{?proto.bragi.CsgoTournamentPlayerStatistics} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoTournamentPlayerStatistics, 2));
};


/**
 * @param {?proto.bragi.CsgoTournamentPlayerStatistics|undefined} value
 * @return {!proto.bragi.CsgoTournamentBestPlayerStatistics} returns this
*/
proto.bragi.CsgoTournamentBestPlayerStatistics.prototype.setHighestKillsOverDeaths = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTournamentBestPlayerStatistics} returns this
 */
proto.bragi.CsgoTournamentBestPlayerStatistics.prototype.clearHighestKillsOverDeaths = function() {
  return this.setHighestKillsOverDeaths(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTournamentBestPlayerStatistics.prototype.hasHighestKillsOverDeaths = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CsgoTournamentPlayerStatistics highest_damage = 3;
 * @return {?proto.bragi.CsgoTournamentPlayerStatistics}
 */
proto.bragi.CsgoTournamentBestPlayerStatistics.prototype.getHighestDamage = function() {
  return /** @type{?proto.bragi.CsgoTournamentPlayerStatistics} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoTournamentPlayerStatistics, 3));
};


/**
 * @param {?proto.bragi.CsgoTournamentPlayerStatistics|undefined} value
 * @return {!proto.bragi.CsgoTournamentBestPlayerStatistics} returns this
*/
proto.bragi.CsgoTournamentBestPlayerStatistics.prototype.setHighestDamage = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTournamentBestPlayerStatistics} returns this
 */
proto.bragi.CsgoTournamentBestPlayerStatistics.prototype.clearHighestDamage = function() {
  return this.setHighestDamage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTournamentBestPlayerStatistics.prototype.hasHighestDamage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CsgoTournamentPlayerStatistics highest_flash_assists = 4;
 * @return {?proto.bragi.CsgoTournamentPlayerStatistics}
 */
proto.bragi.CsgoTournamentBestPlayerStatistics.prototype.getHighestFlashAssists = function() {
  return /** @type{?proto.bragi.CsgoTournamentPlayerStatistics} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoTournamentPlayerStatistics, 4));
};


/**
 * @param {?proto.bragi.CsgoTournamentPlayerStatistics|undefined} value
 * @return {!proto.bragi.CsgoTournamentBestPlayerStatistics} returns this
*/
proto.bragi.CsgoTournamentBestPlayerStatistics.prototype.setHighestFlashAssists = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTournamentBestPlayerStatistics} returns this
 */
proto.bragi.CsgoTournamentBestPlayerStatistics.prototype.clearHighestFlashAssists = function() {
  return this.setHighestFlashAssists(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTournamentBestPlayerStatistics.prototype.hasHighestFlashAssists = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CsgoTournamentPlayerStatistics highest_utility_damage = 5;
 * @return {?proto.bragi.CsgoTournamentPlayerStatistics}
 */
proto.bragi.CsgoTournamentBestPlayerStatistics.prototype.getHighestUtilityDamage = function() {
  return /** @type{?proto.bragi.CsgoTournamentPlayerStatistics} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoTournamentPlayerStatistics, 5));
};


/**
 * @param {?proto.bragi.CsgoTournamentPlayerStatistics|undefined} value
 * @return {!proto.bragi.CsgoTournamentBestPlayerStatistics} returns this
*/
proto.bragi.CsgoTournamentBestPlayerStatistics.prototype.setHighestUtilityDamage = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTournamentBestPlayerStatistics} returns this
 */
proto.bragi.CsgoTournamentBestPlayerStatistics.prototype.clearHighestUtilityDamage = function() {
  return this.setHighestUtilityDamage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTournamentBestPlayerStatistics.prototype.hasHighestUtilityDamage = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional CsgoTournamentPlayerStatistics highest_opening_kills = 6;
 * @return {?proto.bragi.CsgoTournamentPlayerStatistics}
 */
proto.bragi.CsgoTournamentBestPlayerStatistics.prototype.getHighestOpeningKills = function() {
  return /** @type{?proto.bragi.CsgoTournamentPlayerStatistics} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoTournamentPlayerStatistics, 6));
};


/**
 * @param {?proto.bragi.CsgoTournamentPlayerStatistics|undefined} value
 * @return {!proto.bragi.CsgoTournamentBestPlayerStatistics} returns this
*/
proto.bragi.CsgoTournamentBestPlayerStatistics.prototype.setHighestOpeningKills = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTournamentBestPlayerStatistics} returns this
 */
proto.bragi.CsgoTournamentBestPlayerStatistics.prototype.clearHighestOpeningKills = function() {
  return this.setHighestOpeningKills(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTournamentBestPlayerStatistics.prototype.hasHighestOpeningKills = function() {
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
proto.bragi.CsgoTeamStandingRound.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoTeamStandingRound.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoTeamStandingRound} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTeamStandingRound.toObject = function(includeInstance, msg) {
  var f, obj = {
    round: jspb.Message.getFieldWithDefault(msg, 1, 0),
    teamScore: jspb.Message.getFieldWithDefault(msg, 2, 0),
    opponent: (f = msg.getOpponent()) && proto.bragi.Team.toObject(includeInstance, f),
    opponentScore: jspb.Message.getFieldWithDefault(msg, 4, 0),
    matchIsClosed: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.bragi.CsgoTeamStandingRound}
 */
proto.bragi.CsgoTeamStandingRound.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoTeamStandingRound;
  return proto.bragi.CsgoTeamStandingRound.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoTeamStandingRound} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoTeamStandingRound}
 */
proto.bragi.CsgoTeamStandingRound.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRound(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTeamScore(value);
      break;
    case 3:
      var value = new proto.bragi.Team;
      reader.readMessage(value,proto.bragi.Team.deserializeBinaryFromReader);
      msg.setOpponent(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOpponentScore(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMatchIsClosed(value);
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
proto.bragi.CsgoTeamStandingRound.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoTeamStandingRound.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoTeamStandingRound} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTeamStandingRound.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRound();
  if (f !== 0) {
    writer.writeInt32(
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
  f = message.getOpponent();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.Team.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getMatchIsClosed();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional int32 round = 1;
 * @return {number}
 */
proto.bragi.CsgoTeamStandingRound.prototype.getRound = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTeamStandingRound} returns this
 */
proto.bragi.CsgoTeamStandingRound.prototype.setRound = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 team_score = 2;
 * @return {number}
 */
proto.bragi.CsgoTeamStandingRound.prototype.getTeamScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTeamStandingRound} returns this
 */
proto.bragi.CsgoTeamStandingRound.prototype.setTeamScore = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CsgoTeamStandingRound} returns this
 */
proto.bragi.CsgoTeamStandingRound.prototype.clearTeamScore = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamStandingRound.prototype.hasTeamScore = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Team opponent = 3;
 * @return {?proto.bragi.Team}
 */
proto.bragi.CsgoTeamStandingRound.prototype.getOpponent = function() {
  return /** @type{?proto.bragi.Team} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Team, 3));
};


/**
 * @param {?proto.bragi.Team|undefined} value
 * @return {!proto.bragi.CsgoTeamStandingRound} returns this
*/
proto.bragi.CsgoTeamStandingRound.prototype.setOpponent = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamStandingRound} returns this
 */
proto.bragi.CsgoTeamStandingRound.prototype.clearOpponent = function() {
  return this.setOpponent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamStandingRound.prototype.hasOpponent = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 opponent_score = 4;
 * @return {number}
 */
proto.bragi.CsgoTeamStandingRound.prototype.getOpponentScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTeamStandingRound} returns this
 */
proto.bragi.CsgoTeamStandingRound.prototype.setOpponentScore = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CsgoTeamStandingRound} returns this
 */
proto.bragi.CsgoTeamStandingRound.prototype.clearOpponentScore = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamStandingRound.prototype.hasOpponentScore = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool match_is_closed = 5;
 * @return {boolean}
 */
proto.bragi.CsgoTeamStandingRound.prototype.getMatchIsClosed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.CsgoTeamStandingRound} returns this
 */
proto.bragi.CsgoTeamStandingRound.prototype.setMatchIsClosed = function(value) {
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
proto.bragi.CsgoPlayersDuel.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoPlayersDuel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoPlayersDuel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayersDuel.toObject = function(includeInstance, msg) {
  var f, obj = {
    homePlayer: (f = msg.getHomePlayer()) && proto.bragi.CsgoPlayer.toObject(includeInstance, f),
    homePlayerKills: jspb.Message.getFieldWithDefault(msg, 2, 0),
    awayPlayer: (f = msg.getAwayPlayer()) && proto.bragi.CsgoPlayer.toObject(includeInstance, f),
    awayPlayerKills: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.bragi.CsgoPlayersDuel}
 */
proto.bragi.CsgoPlayersDuel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoPlayersDuel;
  return proto.bragi.CsgoPlayersDuel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoPlayersDuel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoPlayersDuel}
 */
proto.bragi.CsgoPlayersDuel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CsgoPlayer;
      reader.readMessage(value,proto.bragi.CsgoPlayer.deserializeBinaryFromReader);
      msg.setHomePlayer(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHomePlayerKills(value);
      break;
    case 3:
      var value = new proto.bragi.CsgoPlayer;
      reader.readMessage(value,proto.bragi.CsgoPlayer.deserializeBinaryFromReader);
      msg.setAwayPlayer(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAwayPlayerKills(value);
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
proto.bragi.CsgoPlayersDuel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoPlayersDuel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoPlayersDuel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayersDuel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHomePlayer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CsgoPlayer.serializeBinaryToWriter
    );
  }
  f = message.getHomePlayerKills();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getAwayPlayer();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.CsgoPlayer.serializeBinaryToWriter
    );
  }
  f = message.getAwayPlayerKills();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional CsgoPlayer home_player = 1;
 * @return {?proto.bragi.CsgoPlayer}
 */
proto.bragi.CsgoPlayersDuel.prototype.getHomePlayer = function() {
  return /** @type{?proto.bragi.CsgoPlayer} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoPlayer, 1));
};


/**
 * @param {?proto.bragi.CsgoPlayer|undefined} value
 * @return {!proto.bragi.CsgoPlayersDuel} returns this
*/
proto.bragi.CsgoPlayersDuel.prototype.setHomePlayer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayersDuel} returns this
 */
proto.bragi.CsgoPlayersDuel.prototype.clearHomePlayer = function() {
  return this.setHomePlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayersDuel.prototype.hasHomePlayer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 home_player_kills = 2;
 * @return {number}
 */
proto.bragi.CsgoPlayersDuel.prototype.getHomePlayerKills = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPlayersDuel} returns this
 */
proto.bragi.CsgoPlayersDuel.prototype.setHomePlayerKills = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional CsgoPlayer away_player = 3;
 * @return {?proto.bragi.CsgoPlayer}
 */
proto.bragi.CsgoPlayersDuel.prototype.getAwayPlayer = function() {
  return /** @type{?proto.bragi.CsgoPlayer} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoPlayer, 3));
};


/**
 * @param {?proto.bragi.CsgoPlayer|undefined} value
 * @return {!proto.bragi.CsgoPlayersDuel} returns this
*/
proto.bragi.CsgoPlayersDuel.prototype.setAwayPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayersDuel} returns this
 */
proto.bragi.CsgoPlayersDuel.prototype.clearAwayPlayer = function() {
  return this.setAwayPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayersDuel.prototype.hasAwayPlayer = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 away_player_kills = 4;
 * @return {number}
 */
proto.bragi.CsgoPlayersDuel.prototype.getAwayPlayerKills = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPlayersDuel} returns this
 */
proto.bragi.CsgoPlayersDuel.prototype.setAwayPlayerKills = function(value) {
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
proto.bragi.CsgoStatisticsSideValues.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoStatisticsSideValues.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoStatisticsSideValues} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoStatisticsSideValues.toObject = function(includeInstance, msg) {
  var f, obj = {
    terrorists: (f = msg.getTerrorists()) && proto.bragi.StatisticsValues.toObject(includeInstance, f),
    counterTerrorists: (f = msg.getCounterTerrorists()) && proto.bragi.StatisticsValues.toObject(includeInstance, f),
    all: (f = msg.getAll()) && proto.bragi.StatisticsValues.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CsgoStatisticsSideValues}
 */
proto.bragi.CsgoStatisticsSideValues.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoStatisticsSideValues;
  return proto.bragi.CsgoStatisticsSideValues.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoStatisticsSideValues} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoStatisticsSideValues}
 */
proto.bragi.CsgoStatisticsSideValues.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.StatisticsValues;
      reader.readMessage(value,proto.bragi.StatisticsValues.deserializeBinaryFromReader);
      msg.setTerrorists(value);
      break;
    case 2:
      var value = new proto.bragi.StatisticsValues;
      reader.readMessage(value,proto.bragi.StatisticsValues.deserializeBinaryFromReader);
      msg.setCounterTerrorists(value);
      break;
    case 3:
      var value = new proto.bragi.StatisticsValues;
      reader.readMessage(value,proto.bragi.StatisticsValues.deserializeBinaryFromReader);
      msg.setAll(value);
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
proto.bragi.CsgoStatisticsSideValues.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoStatisticsSideValues.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoStatisticsSideValues} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoStatisticsSideValues.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTerrorists();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.StatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getCounterTerrorists();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.StatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getAll();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.StatisticsValues.serializeBinaryToWriter
    );
  }
};


/**
 * optional StatisticsValues terrorists = 1;
 * @return {?proto.bragi.StatisticsValues}
 */
proto.bragi.CsgoStatisticsSideValues.prototype.getTerrorists = function() {
  return /** @type{?proto.bragi.StatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.StatisticsValues, 1));
};


/**
 * @param {?proto.bragi.StatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoStatisticsSideValues} returns this
*/
proto.bragi.CsgoStatisticsSideValues.prototype.setTerrorists = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoStatisticsSideValues} returns this
 */
proto.bragi.CsgoStatisticsSideValues.prototype.clearTerrorists = function() {
  return this.setTerrorists(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoStatisticsSideValues.prototype.hasTerrorists = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional StatisticsValues counter_terrorists = 2;
 * @return {?proto.bragi.StatisticsValues}
 */
proto.bragi.CsgoStatisticsSideValues.prototype.getCounterTerrorists = function() {
  return /** @type{?proto.bragi.StatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.StatisticsValues, 2));
};


/**
 * @param {?proto.bragi.StatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoStatisticsSideValues} returns this
*/
proto.bragi.CsgoStatisticsSideValues.prototype.setCounterTerrorists = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoStatisticsSideValues} returns this
 */
proto.bragi.CsgoStatisticsSideValues.prototype.clearCounterTerrorists = function() {
  return this.setCounterTerrorists(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoStatisticsSideValues.prototype.hasCounterTerrorists = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional StatisticsValues all = 3;
 * @return {?proto.bragi.StatisticsValues}
 */
proto.bragi.CsgoStatisticsSideValues.prototype.getAll = function() {
  return /** @type{?proto.bragi.StatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.StatisticsValues, 3));
};


/**
 * @param {?proto.bragi.StatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoStatisticsSideValues} returns this
*/
proto.bragi.CsgoStatisticsSideValues.prototype.setAll = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoStatisticsSideValues} returns this
 */
proto.bragi.CsgoStatisticsSideValues.prototype.clearAll = function() {
  return this.setAll(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoStatisticsSideValues.prototype.hasAll = function() {
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
proto.bragi.CsgoWeaponStatistics.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoWeaponStatistics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoWeaponStatistics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoWeaponStatistics.toObject = function(includeInstance, msg) {
  var f, obj = {
    weapon: (f = msg.getWeapon()) && proto.bragi.CsgoWeapon.toObject(includeInstance, f),
    killsWithWeapon: (f = msg.getKillsWithWeapon()) && proto.bragi.StatisticsValues.toObject(includeInstance, f),
    headshotsWithWeapon: (f = msg.getHeadshotsWithWeapon()) && proto.bragi.StatisticsValues.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CsgoWeaponStatistics}
 */
proto.bragi.CsgoWeaponStatistics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoWeaponStatistics;
  return proto.bragi.CsgoWeaponStatistics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoWeaponStatistics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoWeaponStatistics}
 */
proto.bragi.CsgoWeaponStatistics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CsgoWeapon;
      reader.readMessage(value,proto.bragi.CsgoWeapon.deserializeBinaryFromReader);
      msg.setWeapon(value);
      break;
    case 2:
      var value = new proto.bragi.StatisticsValues;
      reader.readMessage(value,proto.bragi.StatisticsValues.deserializeBinaryFromReader);
      msg.setKillsWithWeapon(value);
      break;
    case 3:
      var value = new proto.bragi.StatisticsValues;
      reader.readMessage(value,proto.bragi.StatisticsValues.deserializeBinaryFromReader);
      msg.setHeadshotsWithWeapon(value);
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
proto.bragi.CsgoWeaponStatistics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoWeaponStatistics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoWeaponStatistics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoWeaponStatistics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWeapon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CsgoWeapon.serializeBinaryToWriter
    );
  }
  f = message.getKillsWithWeapon();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.StatisticsValues.serializeBinaryToWriter
    );
  }
  f = message.getHeadshotsWithWeapon();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.StatisticsValues.serializeBinaryToWriter
    );
  }
};


/**
 * optional CsgoWeapon weapon = 1;
 * @return {?proto.bragi.CsgoWeapon}
 */
proto.bragi.CsgoWeaponStatistics.prototype.getWeapon = function() {
  return /** @type{?proto.bragi.CsgoWeapon} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoWeapon, 1));
};


/**
 * @param {?proto.bragi.CsgoWeapon|undefined} value
 * @return {!proto.bragi.CsgoWeaponStatistics} returns this
*/
proto.bragi.CsgoWeaponStatistics.prototype.setWeapon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoWeaponStatistics} returns this
 */
proto.bragi.CsgoWeaponStatistics.prototype.clearWeapon = function() {
  return this.setWeapon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoWeaponStatistics.prototype.hasWeapon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional StatisticsValues kills_with_weapon = 2;
 * @return {?proto.bragi.StatisticsValues}
 */
proto.bragi.CsgoWeaponStatistics.prototype.getKillsWithWeapon = function() {
  return /** @type{?proto.bragi.StatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.StatisticsValues, 2));
};


/**
 * @param {?proto.bragi.StatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoWeaponStatistics} returns this
*/
proto.bragi.CsgoWeaponStatistics.prototype.setKillsWithWeapon = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoWeaponStatistics} returns this
 */
proto.bragi.CsgoWeaponStatistics.prototype.clearKillsWithWeapon = function() {
  return this.setKillsWithWeapon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoWeaponStatistics.prototype.hasKillsWithWeapon = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional StatisticsValues headshots_with_weapon = 3;
 * @return {?proto.bragi.StatisticsValues}
 */
proto.bragi.CsgoWeaponStatistics.prototype.getHeadshotsWithWeapon = function() {
  return /** @type{?proto.bragi.StatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.StatisticsValues, 3));
};


/**
 * @param {?proto.bragi.StatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoWeaponStatistics} returns this
*/
proto.bragi.CsgoWeaponStatistics.prototype.setHeadshotsWithWeapon = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoWeaponStatistics} returns this
 */
proto.bragi.CsgoWeaponStatistics.prototype.clearHeadshotsWithWeapon = function() {
  return this.setHeadshotsWithWeapon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoWeaponStatistics.prototype.hasHeadshotsWithWeapon = function() {
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
proto.bragi.CsgoWeaponPostMapStatistics.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoWeaponPostMapStatistics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoWeaponPostMapStatistics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoWeaponPostMapStatistics.toObject = function(includeInstance, msg) {
  var f, obj = {
    weapon: (f = msg.getWeapon()) && proto.bragi.CsgoWeapon.toObject(includeInstance, f),
    killsWithWeapon: jspb.Message.getFieldWithDefault(msg, 2, 0),
    headshotsWithWeapon: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.bragi.CsgoWeaponPostMapStatistics}
 */
proto.bragi.CsgoWeaponPostMapStatistics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoWeaponPostMapStatistics;
  return proto.bragi.CsgoWeaponPostMapStatistics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoWeaponPostMapStatistics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoWeaponPostMapStatistics}
 */
proto.bragi.CsgoWeaponPostMapStatistics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CsgoWeapon;
      reader.readMessage(value,proto.bragi.CsgoWeapon.deserializeBinaryFromReader);
      msg.setWeapon(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setKillsWithWeapon(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHeadshotsWithWeapon(value);
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
proto.bragi.CsgoWeaponPostMapStatistics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoWeaponPostMapStatistics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoWeaponPostMapStatistics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoWeaponPostMapStatistics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWeapon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CsgoWeapon.serializeBinaryToWriter
    );
  }
  f = message.getKillsWithWeapon();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getHeadshotsWithWeapon();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional CsgoWeapon weapon = 1;
 * @return {?proto.bragi.CsgoWeapon}
 */
proto.bragi.CsgoWeaponPostMapStatistics.prototype.getWeapon = function() {
  return /** @type{?proto.bragi.CsgoWeapon} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoWeapon, 1));
};


/**
 * @param {?proto.bragi.CsgoWeapon|undefined} value
 * @return {!proto.bragi.CsgoWeaponPostMapStatistics} returns this
*/
proto.bragi.CsgoWeaponPostMapStatistics.prototype.setWeapon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoWeaponPostMapStatistics} returns this
 */
proto.bragi.CsgoWeaponPostMapStatistics.prototype.clearWeapon = function() {
  return this.setWeapon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoWeaponPostMapStatistics.prototype.hasWeapon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 kills_with_weapon = 2;
 * @return {number}
 */
proto.bragi.CsgoWeaponPostMapStatistics.prototype.getKillsWithWeapon = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoWeaponPostMapStatistics} returns this
 */
proto.bragi.CsgoWeaponPostMapStatistics.prototype.setKillsWithWeapon = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 headshots_with_weapon = 3;
 * @return {number}
 */
proto.bragi.CsgoWeaponPostMapStatistics.prototype.getHeadshotsWithWeapon = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoWeaponPostMapStatistics} returns this
 */
proto.bragi.CsgoWeaponPostMapStatistics.prototype.setHeadshotsWithWeapon = function(value) {
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
proto.bragi.CsgoMap.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoMap.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoMap} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoMap.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    iconPath: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.bragi.CsgoMap}
 */
proto.bragi.CsgoMap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoMap;
  return proto.bragi.CsgoMap.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoMap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoMap}
 */
proto.bragi.CsgoMap.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIconPath(value);
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
proto.bragi.CsgoMap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoMap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoMap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoMap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.bragi.CsgoMap.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoMap} returns this
 */
proto.bragi.CsgoMap.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.bragi.CsgoMap.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoMap} returns this
 */
proto.bragi.CsgoMap.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string icon_path = 3;
 * @return {string}
 */
proto.bragi.CsgoMap.prototype.getIconPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoMap} returns this
 */
proto.bragi.CsgoMap.prototype.setIconPath = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CsgoMap} returns this
 */
proto.bragi.CsgoMap.prototype.clearIconPath = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoMap.prototype.hasIconPath = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.CsgoMapVote.repeatedFields_ = [1,2];



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
proto.bragi.CsgoMapVote.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoMapVote.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoMapVote} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoMapVote.toObject = function(includeInstance, msg) {
  var f, obj = {
    pickedList: jspb.Message.toObjectList(msg.getPickedList(),
    proto.bragi.CsgoMapStatistics.toObject, includeInstance),
    bannedList: jspb.Message.toObjectList(msg.getBannedList(),
    proto.bragi.CsgoMapStatistics.toObject, includeInstance)
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
 * @return {!proto.bragi.CsgoMapVote}
 */
proto.bragi.CsgoMapVote.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoMapVote;
  return proto.bragi.CsgoMapVote.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoMapVote} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoMapVote}
 */
proto.bragi.CsgoMapVote.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CsgoMapStatistics;
      reader.readMessage(value,proto.bragi.CsgoMapStatistics.deserializeBinaryFromReader);
      msg.addPicked(value);
      break;
    case 2:
      var value = new proto.bragi.CsgoMapStatistics;
      reader.readMessage(value,proto.bragi.CsgoMapStatistics.deserializeBinaryFromReader);
      msg.addBanned(value);
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
proto.bragi.CsgoMapVote.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoMapVote.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoMapVote} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoMapVote.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPickedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bragi.CsgoMapStatistics.serializeBinaryToWriter
    );
  }
  f = message.getBannedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.bragi.CsgoMapStatistics.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CsgoMapStatistics picked = 1;
 * @return {!Array<!proto.bragi.CsgoMapStatistics>}
 */
proto.bragi.CsgoMapVote.prototype.getPickedList = function() {
  return /** @type{!Array<!proto.bragi.CsgoMapStatistics>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.CsgoMapStatistics, 1));
};


/**
 * @param {!Array<!proto.bragi.CsgoMapStatistics>} value
 * @return {!proto.bragi.CsgoMapVote} returns this
*/
proto.bragi.CsgoMapVote.prototype.setPickedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bragi.CsgoMapStatistics=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.CsgoMapStatistics}
 */
proto.bragi.CsgoMapVote.prototype.addPicked = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bragi.CsgoMapStatistics, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CsgoMapVote} returns this
 */
proto.bragi.CsgoMapVote.prototype.clearPickedList = function() {
  return this.setPickedList([]);
};


/**
 * repeated CsgoMapStatistics banned = 2;
 * @return {!Array<!proto.bragi.CsgoMapStatistics>}
 */
proto.bragi.CsgoMapVote.prototype.getBannedList = function() {
  return /** @type{!Array<!proto.bragi.CsgoMapStatistics>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.CsgoMapStatistics, 2));
};


/**
 * @param {!Array<!proto.bragi.CsgoMapStatistics>} value
 * @return {!proto.bragi.CsgoMapVote} returns this
*/
proto.bragi.CsgoMapVote.prototype.setBannedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bragi.CsgoMapStatistics=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.CsgoMapStatistics}
 */
proto.bragi.CsgoMapVote.prototype.addBanned = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bragi.CsgoMapStatistics, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CsgoMapVote} returns this
 */
proto.bragi.CsgoMapVote.prototype.clearBannedList = function() {
  return this.setBannedList([]);
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
proto.bragi.CsgoMapStatistics.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoMapStatistics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoMapStatistics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoMapStatistics.toObject = function(includeInstance, msg) {
  var f, obj = {
    map: (f = msg.getMap()) && proto.bragi.CsgoMap.toObject(includeInstance, f),
    statistics: (f = msg.getStatistics()) && proto.bragi.StatisticsValues.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CsgoMapStatistics}
 */
proto.bragi.CsgoMapStatistics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoMapStatistics;
  return proto.bragi.CsgoMapStatistics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoMapStatistics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoMapStatistics}
 */
proto.bragi.CsgoMapStatistics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CsgoMap;
      reader.readMessage(value,proto.bragi.CsgoMap.deserializeBinaryFromReader);
      msg.setMap(value);
      break;
    case 2:
      var value = new proto.bragi.StatisticsValues;
      reader.readMessage(value,proto.bragi.StatisticsValues.deserializeBinaryFromReader);
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
proto.bragi.CsgoMapStatistics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoMapStatistics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoMapStatistics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoMapStatistics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMap();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CsgoMap.serializeBinaryToWriter
    );
  }
  f = message.getStatistics();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.StatisticsValues.serializeBinaryToWriter
    );
  }
};


/**
 * optional CsgoMap map = 1;
 * @return {?proto.bragi.CsgoMap}
 */
proto.bragi.CsgoMapStatistics.prototype.getMap = function() {
  return /** @type{?proto.bragi.CsgoMap} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoMap, 1));
};


/**
 * @param {?proto.bragi.CsgoMap|undefined} value
 * @return {!proto.bragi.CsgoMapStatistics} returns this
*/
proto.bragi.CsgoMapStatistics.prototype.setMap = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoMapStatistics} returns this
 */
proto.bragi.CsgoMapStatistics.prototype.clearMap = function() {
  return this.setMap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoMapStatistics.prototype.hasMap = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional StatisticsValues statistics = 2;
 * @return {?proto.bragi.StatisticsValues}
 */
proto.bragi.CsgoMapStatistics.prototype.getStatistics = function() {
  return /** @type{?proto.bragi.StatisticsValues} */ (
    jspb.Message.getWrapperField(this, proto.bragi.StatisticsValues, 2));
};


/**
 * @param {?proto.bragi.StatisticsValues|undefined} value
 * @return {!proto.bragi.CsgoMapStatistics} returns this
*/
proto.bragi.CsgoMapStatistics.prototype.setStatistics = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoMapStatistics} returns this
 */
proto.bragi.CsgoMapStatistics.prototype.clearStatistics = function() {
  return this.setStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoMapStatistics.prototype.hasStatistics = function() {
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
proto.bragi.CsgoWeapon.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoWeapon.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoWeapon} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoWeapon.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    iconPath: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.bragi.CsgoWeapon}
 */
proto.bragi.CsgoWeapon.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoWeapon;
  return proto.bragi.CsgoWeapon.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoWeapon} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoWeapon}
 */
proto.bragi.CsgoWeapon.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIconPath(value);
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
proto.bragi.CsgoWeapon.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoWeapon.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoWeapon} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoWeapon.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.bragi.CsgoWeapon.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoWeapon} returns this
 */
proto.bragi.CsgoWeapon.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.bragi.CsgoWeapon.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoWeapon} returns this
 */
proto.bragi.CsgoWeapon.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string icon_path = 3;
 * @return {string}
 */
proto.bragi.CsgoWeapon.prototype.getIconPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoWeapon} returns this
 */
proto.bragi.CsgoWeapon.prototype.setIconPath = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CsgoWeapon} returns this
 */
proto.bragi.CsgoWeapon.prototype.clearIconPath = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoWeapon.prototype.hasIconPath = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.CsgoTeam.repeatedFields_ = [3];



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
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    team: (f = msg.getTeam()) && proto.bragi.Team.toObject(includeInstance, f),
    playersList: jspb.Message.toObjectList(msg.getPlayersList(),
    proto.bragi.Player.toObject, includeInstance)
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
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.bragi.Team;
      reader.readMessage(value,proto.bragi.Team.deserializeBinaryFromReader);
      msg.setTeam(value);
      break;
    case 3:
      var value = new proto.bragi.Player;
      reader.readMessage(value,proto.bragi.Player.deserializeBinaryFromReader);
      msg.addPlayers(value);
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
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getTeam();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.Team.serializeBinaryToWriter
    );
  }
  f = message.getPlayersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.bragi.Player.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.bragi.CsgoTeam.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTeam} returns this
 */
proto.bragi.CsgoTeam.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Team team = 2;
 * @return {?proto.bragi.Team}
 */
proto.bragi.CsgoTeam.prototype.getTeam = function() {
  return /** @type{?proto.bragi.Team} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Team, 2));
};


/**
 * @param {?proto.bragi.Team|undefined} value
 * @return {!proto.bragi.CsgoTeam} returns this
*/
proto.bragi.CsgoTeam.prototype.setTeam = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeam} returns this
 */
proto.bragi.CsgoTeam.prototype.clearTeam = function() {
  return this.setTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeam.prototype.hasTeam = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Player players = 3;
 * @return {!Array<!proto.bragi.Player>}
 */
proto.bragi.CsgoTeam.prototype.getPlayersList = function() {
  return /** @type{!Array<!proto.bragi.Player>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.Player, 3));
};


/**
 * @param {!Array<!proto.bragi.Player>} value
 * @return {!proto.bragi.CsgoTeam} returns this
*/
proto.bragi.CsgoTeam.prototype.setPlayersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.bragi.Player=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.Player}
 */
proto.bragi.CsgoTeam.prototype.addPlayers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.bragi.Player, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CsgoTeam} returns this
 */
proto.bragi.CsgoTeam.prototype.clearPlayersList = function() {
  return this.setPlayersList([]);
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
proto.bragi.CsgoPlayer.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoPlayer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoPlayer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayer.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nickname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    realName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    shortcut: jspb.Message.getFieldWithDefault(msg, 4, ""),
    iconPath: jspb.Message.getFieldWithDefault(msg, 5, ""),
    role: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.bragi.CsgoPlayer}
 */
proto.bragi.CsgoPlayer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoPlayer;
  return proto.bragi.CsgoPlayer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoPlayer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoPlayer}
 */
proto.bragi.CsgoPlayer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRealName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortcut(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setIconPath(value);
      break;
    case 6:
      var value = /** @type {!proto.bragi.CsgoPlayerRole} */ (reader.readEnum());
      msg.setRole(value);
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
proto.bragi.CsgoPlayer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoPlayer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoPlayer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getNickname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
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
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRole();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.bragi.CsgoPlayer.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPlayer} returns this
 */
proto.bragi.CsgoPlayer.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string nickname = 2;
 * @return {string}
 */
proto.bragi.CsgoPlayer.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoPlayer} returns this
 */
proto.bragi.CsgoPlayer.prototype.setNickname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string real_name = 3;
 * @return {string}
 */
proto.bragi.CsgoPlayer.prototype.getRealName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoPlayer} returns this
 */
proto.bragi.CsgoPlayer.prototype.setRealName = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CsgoPlayer} returns this
 */
proto.bragi.CsgoPlayer.prototype.clearRealName = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayer.prototype.hasRealName = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string shortcut = 4;
 * @return {string}
 */
proto.bragi.CsgoPlayer.prototype.getShortcut = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoPlayer} returns this
 */
proto.bragi.CsgoPlayer.prototype.setShortcut = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CsgoPlayer} returns this
 */
proto.bragi.CsgoPlayer.prototype.clearShortcut = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayer.prototype.hasShortcut = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string icon_path = 5;
 * @return {string}
 */
proto.bragi.CsgoPlayer.prototype.getIconPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoPlayer} returns this
 */
proto.bragi.CsgoPlayer.prototype.setIconPath = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CsgoPlayer} returns this
 */
proto.bragi.CsgoPlayer.prototype.clearIconPath = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayer.prototype.hasIconPath = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional CsgoPlayerRole role = 6;
 * @return {!proto.bragi.CsgoPlayerRole}
 */
proto.bragi.CsgoPlayer.prototype.getRole = function() {
  return /** @type {!proto.bragi.CsgoPlayerRole} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.bragi.CsgoPlayerRole} value
 * @return {!proto.bragi.CsgoPlayer} returns this
 */
proto.bragi.CsgoPlayer.prototype.setRole = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bragi.CsgoTournamentBlock.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.bragi.CsgoTournamentBlock.OneofNameCase = {
  ONEOF_NAME_NOT_SET: 0,
  CSGO_TOURNAMENT_STANDINGS_BLOCK: 1,
  CSGO_TOURNAMENT_BRACKETS_BLOCK: 2
};

/**
 * @return {proto.bragi.CsgoTournamentBlock.OneofNameCase}
 */
proto.bragi.CsgoTournamentBlock.prototype.getOneofNameCase = function() {
  return /** @type {proto.bragi.CsgoTournamentBlock.OneofNameCase} */(jspb.Message.computeOneofCase(this, proto.bragi.CsgoTournamentBlock.oneofGroups_[0]));
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
proto.bragi.CsgoTournamentBlock.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoTournamentBlock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoTournamentBlock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTournamentBlock.toObject = function(includeInstance, msg) {
  var f, obj = {
    csgoTournamentStandingsBlock: (f = msg.getCsgoTournamentStandingsBlock()) && proto.bragi.CsgoTournamentStandingsBlock.toObject(includeInstance, f),
    csgoTournamentBracketsBlock: (f = msg.getCsgoTournamentBracketsBlock()) && proto.bragi.CsgoTournamentBracketsBlock.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CsgoTournamentBlock}
 */
proto.bragi.CsgoTournamentBlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoTournamentBlock;
  return proto.bragi.CsgoTournamentBlock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoTournamentBlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoTournamentBlock}
 */
proto.bragi.CsgoTournamentBlock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CsgoTournamentStandingsBlock;
      reader.readMessage(value,proto.bragi.CsgoTournamentStandingsBlock.deserializeBinaryFromReader);
      msg.setCsgoTournamentStandingsBlock(value);
      break;
    case 2:
      var value = new proto.bragi.CsgoTournamentBracketsBlock;
      reader.readMessage(value,proto.bragi.CsgoTournamentBracketsBlock.deserializeBinaryFromReader);
      msg.setCsgoTournamentBracketsBlock(value);
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
proto.bragi.CsgoTournamentBlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoTournamentBlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoTournamentBlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTournamentBlock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCsgoTournamentStandingsBlock();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CsgoTournamentStandingsBlock.serializeBinaryToWriter
    );
  }
  f = message.getCsgoTournamentBracketsBlock();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.CsgoTournamentBracketsBlock.serializeBinaryToWriter
    );
  }
};


/**
 * optional CsgoTournamentStandingsBlock csgo_tournament_standings_block = 1;
 * @return {?proto.bragi.CsgoTournamentStandingsBlock}
 */
proto.bragi.CsgoTournamentBlock.prototype.getCsgoTournamentStandingsBlock = function() {
  return /** @type{?proto.bragi.CsgoTournamentStandingsBlock} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoTournamentStandingsBlock, 1));
};


/**
 * @param {?proto.bragi.CsgoTournamentStandingsBlock|undefined} value
 * @return {!proto.bragi.CsgoTournamentBlock} returns this
*/
proto.bragi.CsgoTournamentBlock.prototype.setCsgoTournamentStandingsBlock = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bragi.CsgoTournamentBlock.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTournamentBlock} returns this
 */
proto.bragi.CsgoTournamentBlock.prototype.clearCsgoTournamentStandingsBlock = function() {
  return this.setCsgoTournamentStandingsBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTournamentBlock.prototype.hasCsgoTournamentStandingsBlock = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CsgoTournamentBracketsBlock csgo_tournament_brackets_block = 2;
 * @return {?proto.bragi.CsgoTournamentBracketsBlock}
 */
proto.bragi.CsgoTournamentBlock.prototype.getCsgoTournamentBracketsBlock = function() {
  return /** @type{?proto.bragi.CsgoTournamentBracketsBlock} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoTournamentBracketsBlock, 2));
};


/**
 * @param {?proto.bragi.CsgoTournamentBracketsBlock|undefined} value
 * @return {!proto.bragi.CsgoTournamentBlock} returns this
*/
proto.bragi.CsgoTournamentBlock.prototype.setCsgoTournamentBracketsBlock = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bragi.CsgoTournamentBlock.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTournamentBlock} returns this
 */
proto.bragi.CsgoTournamentBlock.prototype.clearCsgoTournamentBracketsBlock = function() {
  return this.setCsgoTournamentBracketsBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTournamentBlock.prototype.hasCsgoTournamentBracketsBlock = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.CsgoTournamentStandingsBlock.repeatedFields_ = [4];



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
proto.bragi.CsgoTournamentStandingsBlock.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoTournamentStandingsBlock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoTournamentStandingsBlock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTournamentStandingsBlock.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    order: jspb.Message.getFieldWithDefault(msg, 3, 0),
    standingsList: jspb.Message.toObjectList(msg.getStandingsList(),
    proto.bragi.CsgoTeamStanding.toObject, includeInstance)
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
 * @return {!proto.bragi.CsgoTournamentStandingsBlock}
 */
proto.bragi.CsgoTournamentStandingsBlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoTournamentStandingsBlock;
  return proto.bragi.CsgoTournamentStandingsBlock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoTournamentStandingsBlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoTournamentStandingsBlock}
 */
proto.bragi.CsgoTournamentStandingsBlock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOrder(value);
      break;
    case 4:
      var value = new proto.bragi.CsgoTeamStanding;
      reader.readMessage(value,proto.bragi.CsgoTeamStanding.deserializeBinaryFromReader);
      msg.addStandings(value);
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
proto.bragi.CsgoTournamentStandingsBlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoTournamentStandingsBlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoTournamentStandingsBlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTournamentStandingsBlock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOrder();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getStandingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.bragi.CsgoTeamStanding.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.bragi.CsgoTournamentStandingsBlock.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTournamentStandingsBlock} returns this
 */
proto.bragi.CsgoTournamentStandingsBlock.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.bragi.CsgoTournamentStandingsBlock.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoTournamentStandingsBlock} returns this
 */
proto.bragi.CsgoTournamentStandingsBlock.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 order = 3;
 * @return {number}
 */
proto.bragi.CsgoTournamentStandingsBlock.prototype.getOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTournamentStandingsBlock} returns this
 */
proto.bragi.CsgoTournamentStandingsBlock.prototype.setOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated CsgoTeamStanding standings = 4;
 * @return {!Array<!proto.bragi.CsgoTeamStanding>}
 */
proto.bragi.CsgoTournamentStandingsBlock.prototype.getStandingsList = function() {
  return /** @type{!Array<!proto.bragi.CsgoTeamStanding>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.CsgoTeamStanding, 4));
};


/**
 * @param {!Array<!proto.bragi.CsgoTeamStanding>} value
 * @return {!proto.bragi.CsgoTournamentStandingsBlock} returns this
*/
proto.bragi.CsgoTournamentStandingsBlock.prototype.setStandingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.bragi.CsgoTeamStanding=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.CsgoTeamStanding}
 */
proto.bragi.CsgoTournamentStandingsBlock.prototype.addStandings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.bragi.CsgoTeamStanding, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CsgoTournamentStandingsBlock} returns this
 */
proto.bragi.CsgoTournamentStandingsBlock.prototype.clearStandingsList = function() {
  return this.setStandingsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.CsgoTournamentBracketsBlock.repeatedFields_ = [4];



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
proto.bragi.CsgoTournamentBracketsBlock.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoTournamentBracketsBlock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoTournamentBracketsBlock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTournamentBracketsBlock.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    order: jspb.Message.getFieldWithDefault(msg, 3, 0),
    bracketsList: jspb.Message.toObjectList(msg.getBracketsList(),
    proto.bragi.TournamentBracketNode.toObject, includeInstance)
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
 * @return {!proto.bragi.CsgoTournamentBracketsBlock}
 */
proto.bragi.CsgoTournamentBracketsBlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoTournamentBracketsBlock;
  return proto.bragi.CsgoTournamentBracketsBlock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoTournamentBracketsBlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoTournamentBracketsBlock}
 */
proto.bragi.CsgoTournamentBracketsBlock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOrder(value);
      break;
    case 4:
      var value = new proto.bragi.TournamentBracketNode;
      reader.readMessage(value,proto.bragi.TournamentBracketNode.deserializeBinaryFromReader);
      msg.addBrackets(value);
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
proto.bragi.CsgoTournamentBracketsBlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoTournamentBracketsBlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoTournamentBracketsBlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTournamentBracketsBlock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOrder();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getBracketsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.bragi.TournamentBracketNode.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.bragi.CsgoTournamentBracketsBlock.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTournamentBracketsBlock} returns this
 */
proto.bragi.CsgoTournamentBracketsBlock.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.bragi.CsgoTournamentBracketsBlock.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoTournamentBracketsBlock} returns this
 */
proto.bragi.CsgoTournamentBracketsBlock.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 order = 3;
 * @return {number}
 */
proto.bragi.CsgoTournamentBracketsBlock.prototype.getOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTournamentBracketsBlock} returns this
 */
proto.bragi.CsgoTournamentBracketsBlock.prototype.setOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated TournamentBracketNode brackets = 4;
 * @return {!Array<!proto.bragi.TournamentBracketNode>}
 */
proto.bragi.CsgoTournamentBracketsBlock.prototype.getBracketsList = function() {
  return /** @type{!Array<!proto.bragi.TournamentBracketNode>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.TournamentBracketNode, 4));
};


/**
 * @param {!Array<!proto.bragi.TournamentBracketNode>} value
 * @return {!proto.bragi.CsgoTournamentBracketsBlock} returns this
*/
proto.bragi.CsgoTournamentBracketsBlock.prototype.setBracketsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.bragi.TournamentBracketNode=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.TournamentBracketNode}
 */
proto.bragi.CsgoTournamentBracketsBlock.prototype.addBrackets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.bragi.TournamentBracketNode, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CsgoTournamentBracketsBlock} returns this
 */
proto.bragi.CsgoTournamentBracketsBlock.prototype.clearBracketsList = function() {
  return this.setBracketsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.CsgoTeamStanding.repeatedFields_ = [16];



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
proto.bragi.CsgoTeamStanding.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoTeamStanding.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoTeamStanding} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTeamStanding.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    rank: jspb.Message.getFieldWithDefault(msg, 2, 0),
    team: (f = msg.getTeam()) && proto.bragi.Team.toObject(includeInstance, f),
    points: jspb.Message.getFieldWithDefault(msg, 4, 0),
    matchesWon: jspb.Message.getFieldWithDefault(msg, 5, 0),
    matchesLost: jspb.Message.getFieldWithDefault(msg, 6, 0),
    matchesDrawn: jspb.Message.getFieldWithDefault(msg, 7, 0),
    mapsWon: jspb.Message.getFieldWithDefault(msg, 8, 0),
    mapsLost: jspb.Message.getFieldWithDefault(msg, 9, 0),
    mapsDrawn: jspb.Message.getFieldWithDefault(msg, 10, 0),
    roundsWon: jspb.Message.getFieldWithDefault(msg, 11, 0),
    roundsLost: jspb.Message.getFieldWithDefault(msg, 12, 0),
    mapDifference: jspb.Message.getFieldWithDefault(msg, 13, 0),
    roundDifference: jspb.Message.getFieldWithDefault(msg, 14, 0),
    status: jspb.Message.getFieldWithDefault(msg, 15, ""),
    roundsList: jspb.Message.toObjectList(msg.getRoundsList(),
    proto.bragi.CsgoTeamStandingRound.toObject, includeInstance)
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
 * @return {!proto.bragi.CsgoTeamStanding}
 */
proto.bragi.CsgoTeamStanding.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoTeamStanding;
  return proto.bragi.CsgoTeamStanding.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoTeamStanding} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoTeamStanding}
 */
proto.bragi.CsgoTeamStanding.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRank(value);
      break;
    case 3:
      var value = new proto.bragi.Team;
      reader.readMessage(value,proto.bragi.Team.deserializeBinaryFromReader);
      msg.setTeam(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPoints(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMatchesWon(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMatchesLost(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMatchesDrawn(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMapsWon(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMapsLost(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMapsDrawn(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoundsWon(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoundsLost(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMapDifference(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoundDifference(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 16:
      var value = new proto.bragi.CsgoTeamStandingRound;
      reader.readMessage(value,proto.bragi.CsgoTeamStandingRound.deserializeBinaryFromReader);
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
proto.bragi.CsgoTeamStanding.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoTeamStanding.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoTeamStanding} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTeamStanding.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getRank();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getTeam();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.Team.serializeBinaryToWriter
    );
  }
  f = message.getPoints();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getMatchesWon();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getMatchesLost();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getMatchesDrawn();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getMapsWon();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getMapsLost();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getMapsDrawn();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getRoundsWon();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getRoundsLost();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getMapDifference();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
  f = message.getRoundDifference();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getRoundsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      16,
      f,
      proto.bragi.CsgoTeamStandingRound.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.bragi.CsgoTeamStanding.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTeamStanding} returns this
 */
proto.bragi.CsgoTeamStanding.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 rank = 2;
 * @return {number}
 */
proto.bragi.CsgoTeamStanding.prototype.getRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTeamStanding} returns this
 */
proto.bragi.CsgoTeamStanding.prototype.setRank = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Team team = 3;
 * @return {?proto.bragi.Team}
 */
proto.bragi.CsgoTeamStanding.prototype.getTeam = function() {
  return /** @type{?proto.bragi.Team} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Team, 3));
};


/**
 * @param {?proto.bragi.Team|undefined} value
 * @return {!proto.bragi.CsgoTeamStanding} returns this
*/
proto.bragi.CsgoTeamStanding.prototype.setTeam = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamStanding} returns this
 */
proto.bragi.CsgoTeamStanding.prototype.clearTeam = function() {
  return this.setTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamStanding.prototype.hasTeam = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 points = 4;
 * @return {number}
 */
proto.bragi.CsgoTeamStanding.prototype.getPoints = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTeamStanding} returns this
 */
proto.bragi.CsgoTeamStanding.prototype.setPoints = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 matches_won = 5;
 * @return {number}
 */
proto.bragi.CsgoTeamStanding.prototype.getMatchesWon = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTeamStanding} returns this
 */
proto.bragi.CsgoTeamStanding.prototype.setMatchesWon = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 matches_lost = 6;
 * @return {number}
 */
proto.bragi.CsgoTeamStanding.prototype.getMatchesLost = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTeamStanding} returns this
 */
proto.bragi.CsgoTeamStanding.prototype.setMatchesLost = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 matches_drawn = 7;
 * @return {number}
 */
proto.bragi.CsgoTeamStanding.prototype.getMatchesDrawn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTeamStanding} returns this
 */
proto.bragi.CsgoTeamStanding.prototype.setMatchesDrawn = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 maps_won = 8;
 * @return {number}
 */
proto.bragi.CsgoTeamStanding.prototype.getMapsWon = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTeamStanding} returns this
 */
proto.bragi.CsgoTeamStanding.prototype.setMapsWon = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 maps_lost = 9;
 * @return {number}
 */
proto.bragi.CsgoTeamStanding.prototype.getMapsLost = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTeamStanding} returns this
 */
proto.bragi.CsgoTeamStanding.prototype.setMapsLost = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int32 maps_drawn = 10;
 * @return {number}
 */
proto.bragi.CsgoTeamStanding.prototype.getMapsDrawn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTeamStanding} returns this
 */
proto.bragi.CsgoTeamStanding.prototype.setMapsDrawn = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int32 rounds_won = 11;
 * @return {number}
 */
proto.bragi.CsgoTeamStanding.prototype.getRoundsWon = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTeamStanding} returns this
 */
proto.bragi.CsgoTeamStanding.prototype.setRoundsWon = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int32 rounds_lost = 12;
 * @return {number}
 */
proto.bragi.CsgoTeamStanding.prototype.getRoundsLost = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTeamStanding} returns this
 */
proto.bragi.CsgoTeamStanding.prototype.setRoundsLost = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int32 map_difference = 13;
 * @return {number}
 */
proto.bragi.CsgoTeamStanding.prototype.getMapDifference = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTeamStanding} returns this
 */
proto.bragi.CsgoTeamStanding.prototype.setMapDifference = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional int32 round_difference = 14;
 * @return {number}
 */
proto.bragi.CsgoTeamStanding.prototype.getRoundDifference = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTeamStanding} returns this
 */
proto.bragi.CsgoTeamStanding.prototype.setRoundDifference = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional string status = 15;
 * @return {string}
 */
proto.bragi.CsgoTeamStanding.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoTeamStanding} returns this
 */
proto.bragi.CsgoTeamStanding.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CsgoTeamStanding} returns this
 */
proto.bragi.CsgoTeamStanding.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamStanding.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * repeated CsgoTeamStandingRound rounds = 16;
 * @return {!Array<!proto.bragi.CsgoTeamStandingRound>}
 */
proto.bragi.CsgoTeamStanding.prototype.getRoundsList = function() {
  return /** @type{!Array<!proto.bragi.CsgoTeamStandingRound>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.CsgoTeamStandingRound, 16));
};


/**
 * @param {!Array<!proto.bragi.CsgoTeamStandingRound>} value
 * @return {!proto.bragi.CsgoTeamStanding} returns this
*/
proto.bragi.CsgoTeamStanding.prototype.setRoundsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 16, value);
};


/**
 * @param {!proto.bragi.CsgoTeamStandingRound=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.CsgoTeamStandingRound}
 */
proto.bragi.CsgoTeamStanding.prototype.addRounds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 16, opt_value, proto.bragi.CsgoTeamStandingRound, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CsgoTeamStanding} returns this
 */
proto.bragi.CsgoTeamStanding.prototype.clearRoundsList = function() {
  return this.setRoundsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.TournamentBracketNode.repeatedFields_ = [9];



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
proto.bragi.TournamentBracketNode.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.TournamentBracketNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.TournamentBracketNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.TournamentBracketNode.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    homeTeam: (f = msg.getHomeTeam()) && proto.bragi.Team.toObject(includeInstance, f),
    homeScore: jspb.Message.getFieldWithDefault(msg, 3, 0),
    awayTeam: (f = msg.getAwayTeam()) && proto.bragi.Team.toObject(includeInstance, f),
    awayScore: jspb.Message.getFieldWithDefault(msg, 5, 0),
    match: (f = msg.getMatch()) && proto.bragi.Match.toObject(includeInstance, f),
    label: jspb.Message.getFieldWithDefault(msg, 7, ""),
    isRoot: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    childNodesList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f
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
 * @return {!proto.bragi.TournamentBracketNode}
 */
proto.bragi.TournamentBracketNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.TournamentBracketNode;
  return proto.bragi.TournamentBracketNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.TournamentBracketNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.TournamentBracketNode}
 */
proto.bragi.TournamentBracketNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.bragi.Team;
      reader.readMessage(value,proto.bragi.Team.deserializeBinaryFromReader);
      msg.setHomeTeam(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHomeScore(value);
      break;
    case 4:
      var value = new proto.bragi.Team;
      reader.readMessage(value,proto.bragi.Team.deserializeBinaryFromReader);
      msg.setAwayTeam(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAwayScore(value);
      break;
    case 6:
      var value = new proto.bragi.Match;
      reader.readMessage(value,proto.bragi.Match.deserializeBinaryFromReader);
      msg.setMatch(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabel(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsRoot(value);
      break;
    case 9:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addChildNodes(values[i]);
      }
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
proto.bragi.TournamentBracketNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.TournamentBracketNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.TournamentBracketNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.TournamentBracketNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getHomeTeam();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.Team.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getAwayTeam();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.Team.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getMatch();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bragi.Match.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getIsRoot();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getChildNodesList();
  if (f.length > 0) {
    writer.writePackedUint32(
      9,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.bragi.TournamentBracketNode.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.TournamentBracketNode} returns this
 */
proto.bragi.TournamentBracketNode.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Team home_team = 2;
 * @return {?proto.bragi.Team}
 */
proto.bragi.TournamentBracketNode.prototype.getHomeTeam = function() {
  return /** @type{?proto.bragi.Team} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Team, 2));
};


/**
 * @param {?proto.bragi.Team|undefined} value
 * @return {!proto.bragi.TournamentBracketNode} returns this
*/
proto.bragi.TournamentBracketNode.prototype.setHomeTeam = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.TournamentBracketNode} returns this
 */
proto.bragi.TournamentBracketNode.prototype.clearHomeTeam = function() {
  return this.setHomeTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.TournamentBracketNode.prototype.hasHomeTeam = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 home_score = 3;
 * @return {number}
 */
proto.bragi.TournamentBracketNode.prototype.getHomeScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.TournamentBracketNode} returns this
 */
proto.bragi.TournamentBracketNode.prototype.setHomeScore = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.TournamentBracketNode} returns this
 */
proto.bragi.TournamentBracketNode.prototype.clearHomeScore = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.TournamentBracketNode.prototype.hasHomeScore = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Team away_team = 4;
 * @return {?proto.bragi.Team}
 */
proto.bragi.TournamentBracketNode.prototype.getAwayTeam = function() {
  return /** @type{?proto.bragi.Team} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Team, 4));
};


/**
 * @param {?proto.bragi.Team|undefined} value
 * @return {!proto.bragi.TournamentBracketNode} returns this
*/
proto.bragi.TournamentBracketNode.prototype.setAwayTeam = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.TournamentBracketNode} returns this
 */
proto.bragi.TournamentBracketNode.prototype.clearAwayTeam = function() {
  return this.setAwayTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.TournamentBracketNode.prototype.hasAwayTeam = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 away_score = 5;
 * @return {number}
 */
proto.bragi.TournamentBracketNode.prototype.getAwayScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.TournamentBracketNode} returns this
 */
proto.bragi.TournamentBracketNode.prototype.setAwayScore = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.TournamentBracketNode} returns this
 */
proto.bragi.TournamentBracketNode.prototype.clearAwayScore = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.TournamentBracketNode.prototype.hasAwayScore = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Match match = 6;
 * @return {?proto.bragi.Match}
 */
proto.bragi.TournamentBracketNode.prototype.getMatch = function() {
  return /** @type{?proto.bragi.Match} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Match, 6));
};


/**
 * @param {?proto.bragi.Match|undefined} value
 * @return {!proto.bragi.TournamentBracketNode} returns this
*/
proto.bragi.TournamentBracketNode.prototype.setMatch = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.TournamentBracketNode} returns this
 */
proto.bragi.TournamentBracketNode.prototype.clearMatch = function() {
  return this.setMatch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.TournamentBracketNode.prototype.hasMatch = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string label = 7;
 * @return {string}
 */
proto.bragi.TournamentBracketNode.prototype.getLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.TournamentBracketNode} returns this
 */
proto.bragi.TournamentBracketNode.prototype.setLabel = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.TournamentBracketNode} returns this
 */
proto.bragi.TournamentBracketNode.prototype.clearLabel = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.TournamentBracketNode.prototype.hasLabel = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool is_root = 8;
 * @return {boolean}
 */
proto.bragi.TournamentBracketNode.prototype.getIsRoot = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.TournamentBracketNode} returns this
 */
proto.bragi.TournamentBracketNode.prototype.setIsRoot = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * repeated uint32 child_nodes = 9;
 * @return {!Array<number>}
 */
proto.bragi.TournamentBracketNode.prototype.getChildNodesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.bragi.TournamentBracketNode} returns this
 */
proto.bragi.TournamentBracketNode.prototype.setChildNodesList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.bragi.TournamentBracketNode} returns this
 */
proto.bragi.TournamentBracketNode.prototype.addChildNodes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.TournamentBracketNode} returns this
 */
proto.bragi.TournamentBracketNode.prototype.clearChildNodesList = function() {
  return this.setChildNodesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.Csgo2dMap.repeatedFields_ = [1];



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
proto.bragi.Csgo2dMap.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Csgo2dMap.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Csgo2dMap} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Csgo2dMap.toObject = function(includeInstance, msg) {
  var f, obj = {
    playersPositionsList: jspb.Message.toObjectList(msg.getPlayersPositionsList(),
    proto.bragi.Csgo2dMapPlayerPosition.toObject, includeInstance),
    bombPositions: (f = msg.getBombPositions()) && proto.bragi.Csgo2dMapBombPosition.toObject(includeInstance, f),
    round: (f = msg.getRound()) && proto.bragi.CsgoRound.toObject(includeInstance, f)
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
 * @return {!proto.bragi.Csgo2dMap}
 */
proto.bragi.Csgo2dMap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Csgo2dMap;
  return proto.bragi.Csgo2dMap.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Csgo2dMap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Csgo2dMap}
 */
proto.bragi.Csgo2dMap.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Csgo2dMapPlayerPosition;
      reader.readMessage(value,proto.bragi.Csgo2dMapPlayerPosition.deserializeBinaryFromReader);
      msg.addPlayersPositions(value);
      break;
    case 2:
      var value = new proto.bragi.Csgo2dMapBombPosition;
      reader.readMessage(value,proto.bragi.Csgo2dMapBombPosition.deserializeBinaryFromReader);
      msg.setBombPositions(value);
      break;
    case 3:
      var value = new proto.bragi.CsgoRound;
      reader.readMessage(value,proto.bragi.CsgoRound.deserializeBinaryFromReader);
      msg.setRound(value);
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
proto.bragi.Csgo2dMap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Csgo2dMap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Csgo2dMap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Csgo2dMap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayersPositionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bragi.Csgo2dMapPlayerPosition.serializeBinaryToWriter
    );
  }
  f = message.getBombPositions();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.Csgo2dMapBombPosition.serializeBinaryToWriter
    );
  }
  f = message.getRound();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.CsgoRound.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Csgo2dMapPlayerPosition players_positions = 1;
 * @return {!Array<!proto.bragi.Csgo2dMapPlayerPosition>}
 */
proto.bragi.Csgo2dMap.prototype.getPlayersPositionsList = function() {
  return /** @type{!Array<!proto.bragi.Csgo2dMapPlayerPosition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.Csgo2dMapPlayerPosition, 1));
};


/**
 * @param {!Array<!proto.bragi.Csgo2dMapPlayerPosition>} value
 * @return {!proto.bragi.Csgo2dMap} returns this
*/
proto.bragi.Csgo2dMap.prototype.setPlayersPositionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bragi.Csgo2dMapPlayerPosition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.Csgo2dMapPlayerPosition}
 */
proto.bragi.Csgo2dMap.prototype.addPlayersPositions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bragi.Csgo2dMapPlayerPosition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.Csgo2dMap} returns this
 */
proto.bragi.Csgo2dMap.prototype.clearPlayersPositionsList = function() {
  return this.setPlayersPositionsList([]);
};


/**
 * optional Csgo2dMapBombPosition bomb_positions = 2;
 * @return {?proto.bragi.Csgo2dMapBombPosition}
 */
proto.bragi.Csgo2dMap.prototype.getBombPositions = function() {
  return /** @type{?proto.bragi.Csgo2dMapBombPosition} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Csgo2dMapBombPosition, 2));
};


/**
 * @param {?proto.bragi.Csgo2dMapBombPosition|undefined} value
 * @return {!proto.bragi.Csgo2dMap} returns this
*/
proto.bragi.Csgo2dMap.prototype.setBombPositions = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Csgo2dMap} returns this
 */
proto.bragi.Csgo2dMap.prototype.clearBombPositions = function() {
  return this.setBombPositions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Csgo2dMap.prototype.hasBombPositions = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CsgoRound round = 3;
 * @return {?proto.bragi.CsgoRound}
 */
proto.bragi.Csgo2dMap.prototype.getRound = function() {
  return /** @type{?proto.bragi.CsgoRound} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoRound, 3));
};


/**
 * @param {?proto.bragi.CsgoRound|undefined} value
 * @return {!proto.bragi.Csgo2dMap} returns this
*/
proto.bragi.Csgo2dMap.prototype.setRound = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Csgo2dMap} returns this
 */
proto.bragi.Csgo2dMap.prototype.clearRound = function() {
  return this.setRound(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Csgo2dMap.prototype.hasRound = function() {
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
proto.bragi.Csgo2dMapPlayerPosition.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Csgo2dMapPlayerPosition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Csgo2dMapPlayerPosition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Csgo2dMapPlayerPosition.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: (f = msg.getPlayer()) && proto.bragi.Player.toObject(includeInstance, f),
    side: jspb.Message.getFieldWithDefault(msg, 2, 0),
    position: (f = msg.getPosition()) && proto.bragi.Map2dPosition.toObject(includeInstance, f),
    forward: (f = msg.getForward()) && proto.bragi.Map2dPosition.toObject(includeInstance, f),
    state: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.bragi.Csgo2dMapPlayerPosition}
 */
proto.bragi.Csgo2dMapPlayerPosition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Csgo2dMapPlayerPosition;
  return proto.bragi.Csgo2dMapPlayerPosition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Csgo2dMapPlayerPosition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Csgo2dMapPlayerPosition}
 */
proto.bragi.Csgo2dMapPlayerPosition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Player;
      reader.readMessage(value,proto.bragi.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    case 2:
      var value = /** @type {!proto.bragi.CsgoSide} */ (reader.readEnum());
      msg.setSide(value);
      break;
    case 3:
      var value = new proto.bragi.Map2dPosition;
      reader.readMessage(value,proto.bragi.Map2dPosition.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 4:
      var value = new proto.bragi.Map2dPosition;
      reader.readMessage(value,proto.bragi.Map2dPosition.deserializeBinaryFromReader);
      msg.setForward(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
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
proto.bragi.Csgo2dMapPlayerPosition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Csgo2dMapPlayerPosition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Csgo2dMapPlayerPosition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Csgo2dMapPlayerPosition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.Player.serializeBinaryToWriter
    );
  }
  f = message.getSide();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bragi.Map2dPosition.serializeBinaryToWriter
    );
  }
  f = message.getForward();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bragi.Map2dPosition.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional Player player = 1;
 * @return {?proto.bragi.Player}
 */
proto.bragi.Csgo2dMapPlayerPosition.prototype.getPlayer = function() {
  return /** @type{?proto.bragi.Player} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Player, 1));
};


/**
 * @param {?proto.bragi.Player|undefined} value
 * @return {!proto.bragi.Csgo2dMapPlayerPosition} returns this
*/
proto.bragi.Csgo2dMapPlayerPosition.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Csgo2dMapPlayerPosition} returns this
 */
proto.bragi.Csgo2dMapPlayerPosition.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Csgo2dMapPlayerPosition.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CsgoSide side = 2;
 * @return {!proto.bragi.CsgoSide}
 */
proto.bragi.Csgo2dMapPlayerPosition.prototype.getSide = function() {
  return /** @type {!proto.bragi.CsgoSide} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bragi.CsgoSide} value
 * @return {!proto.bragi.Csgo2dMapPlayerPosition} returns this
 */
proto.bragi.Csgo2dMapPlayerPosition.prototype.setSide = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional Map2dPosition position = 3;
 * @return {?proto.bragi.Map2dPosition}
 */
proto.bragi.Csgo2dMapPlayerPosition.prototype.getPosition = function() {
  return /** @type{?proto.bragi.Map2dPosition} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Map2dPosition, 3));
};


/**
 * @param {?proto.bragi.Map2dPosition|undefined} value
 * @return {!proto.bragi.Csgo2dMapPlayerPosition} returns this
*/
proto.bragi.Csgo2dMapPlayerPosition.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Csgo2dMapPlayerPosition} returns this
 */
proto.bragi.Csgo2dMapPlayerPosition.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Csgo2dMapPlayerPosition.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Map2dPosition forward = 4;
 * @return {?proto.bragi.Map2dPosition}
 */
proto.bragi.Csgo2dMapPlayerPosition.prototype.getForward = function() {
  return /** @type{?proto.bragi.Map2dPosition} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Map2dPosition, 4));
};


/**
 * @param {?proto.bragi.Map2dPosition|undefined} value
 * @return {!proto.bragi.Csgo2dMapPlayerPosition} returns this
*/
proto.bragi.Csgo2dMapPlayerPosition.prototype.setForward = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Csgo2dMapPlayerPosition} returns this
 */
proto.bragi.Csgo2dMapPlayerPosition.prototype.clearForward = function() {
  return this.setForward(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Csgo2dMapPlayerPosition.prototype.hasForward = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string state = 5;
 * @return {string}
 */
proto.bragi.Csgo2dMapPlayerPosition.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.Csgo2dMapPlayerPosition} returns this
 */
proto.bragi.Csgo2dMapPlayerPosition.prototype.setState = function(value) {
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
proto.bragi.Csgo2dMapBombPosition.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Csgo2dMapBombPosition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Csgo2dMapBombPosition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Csgo2dMapBombPosition.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: (f = msg.getPosition()) && proto.bragi.Map2dPosition.toObject(includeInstance, f),
    state: jspb.Message.getFieldWithDefault(msg, 2, ""),
    timeToDefused: jspb.Message.getFieldWithDefault(msg, 3, 0),
    timeToExploded: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.bragi.Csgo2dMapBombPosition}
 */
proto.bragi.Csgo2dMapBombPosition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Csgo2dMapBombPosition;
  return proto.bragi.Csgo2dMapBombPosition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Csgo2dMapBombPosition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Csgo2dMapBombPosition}
 */
proto.bragi.Csgo2dMapBombPosition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Map2dPosition;
      reader.readMessage(value,proto.bragi.Map2dPosition.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTimeToDefused(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTimeToExploded(value);
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
proto.bragi.Csgo2dMapBombPosition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Csgo2dMapBombPosition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Csgo2dMapBombPosition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Csgo2dMapBombPosition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.Map2dPosition.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTimeToDefused();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getTimeToExploded();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional Map2dPosition position = 1;
 * @return {?proto.bragi.Map2dPosition}
 */
proto.bragi.Csgo2dMapBombPosition.prototype.getPosition = function() {
  return /** @type{?proto.bragi.Map2dPosition} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Map2dPosition, 1));
};


/**
 * @param {?proto.bragi.Map2dPosition|undefined} value
 * @return {!proto.bragi.Csgo2dMapBombPosition} returns this
*/
proto.bragi.Csgo2dMapBombPosition.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Csgo2dMapBombPosition} returns this
 */
proto.bragi.Csgo2dMapBombPosition.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Csgo2dMapBombPosition.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string state = 2;
 * @return {string}
 */
proto.bragi.Csgo2dMapBombPosition.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.Csgo2dMapBombPosition} returns this
 */
proto.bragi.Csgo2dMapBombPosition.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 time_to_defused = 3;
 * @return {number}
 */
proto.bragi.Csgo2dMapBombPosition.prototype.getTimeToDefused = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Csgo2dMapBombPosition} returns this
 */
proto.bragi.Csgo2dMapBombPosition.prototype.setTimeToDefused = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 time_to_exploded = 4;
 * @return {number}
 */
proto.bragi.Csgo2dMapBombPosition.prototype.getTimeToExploded = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Csgo2dMapBombPosition} returns this
 */
proto.bragi.Csgo2dMapBombPosition.prototype.setTimeToExploded = function(value) {
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
proto.bragi.Map2dPosition.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Map2dPosition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Map2dPosition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Map2dPosition.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bragi.Map2dPosition}
 */
proto.bragi.Map2dPosition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Map2dPosition;
  return proto.bragi.Map2dPosition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Map2dPosition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Map2dPosition}
 */
proto.bragi.Map2dPosition.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bragi.Map2dPosition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Map2dPosition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Map2dPosition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Map2dPosition.serializeBinaryToWriter = function(message, writer) {
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
proto.bragi.Map2dPosition.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Map2dPosition} returns this
 */
proto.bragi.Map2dPosition.prototype.setX = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float y = 2;
 * @return {number}
 */
proto.bragi.Map2dPosition.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Map2dPosition} returns this
 */
proto.bragi.Map2dPosition.prototype.setY = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
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
proto.bragi.CsgoRound.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoRound.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoRound} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoRound.toObject = function(includeInstance, msg) {
  var f, obj = {
    number: jspb.Message.getFieldWithDefault(msg, 1, 0),
    state: jspb.Message.getFieldWithDefault(msg, 2, ""),
    timeRemaining: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.bragi.CsgoRound}
 */
proto.bragi.CsgoRound.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoRound;
  return proto.bragi.CsgoRound.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoRound} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoRound}
 */
proto.bragi.CsgoRound.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
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
proto.bragi.CsgoRound.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoRound.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoRound} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoRound.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumber();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTimeRemaining();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 number = 1;
 * @return {number}
 */
proto.bragi.CsgoRound.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoRound} returns this
 */
proto.bragi.CsgoRound.prototype.setNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string state = 2;
 * @return {string}
 */
proto.bragi.CsgoRound.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoRound} returns this
 */
proto.bragi.CsgoRound.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 time_remaining = 3;
 * @return {number}
 */
proto.bragi.CsgoRound.prototype.getTimeRemaining = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoRound} returns this
 */
proto.bragi.CsgoRound.prototype.setTimeRemaining = function(value) {
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
proto.bragi.CsgoScoreBoard.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoScoreBoard.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoScoreBoard} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoScoreBoard.toObject = function(includeInstance, msg) {
  var f, obj = {
    map: (f = msg.getMap()) && proto.bragi.CsgoMap.toObject(includeInstance, f),
    round: jspb.Message.getFieldWithDefault(msg, 2, 0),
    roundOutcome: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.bragi.CsgoScoreBoard}
 */
proto.bragi.CsgoScoreBoard.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoScoreBoard;
  return proto.bragi.CsgoScoreBoard.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoScoreBoard} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoScoreBoard}
 */
proto.bragi.CsgoScoreBoard.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.CsgoMap;
      reader.readMessage(value,proto.bragi.CsgoMap.deserializeBinaryFromReader);
      msg.setMap(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRound(value);
      break;
    case 3:
      var value = /** @type {!proto.bragi.CsgoRoundOutcome} */ (reader.readEnum());
      msg.setRoundOutcome(value);
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
proto.bragi.CsgoScoreBoard.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoScoreBoard.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoScoreBoard} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoScoreBoard.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMap();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.CsgoMap.serializeBinaryToWriter
    );
  }
  f = message.getRound();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = /** @type {!proto.bragi.CsgoRoundOutcome} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional CsgoMap map = 1;
 * @return {?proto.bragi.CsgoMap}
 */
proto.bragi.CsgoScoreBoard.prototype.getMap = function() {
  return /** @type{?proto.bragi.CsgoMap} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoMap, 1));
};


/**
 * @param {?proto.bragi.CsgoMap|undefined} value
 * @return {!proto.bragi.CsgoScoreBoard} returns this
*/
proto.bragi.CsgoScoreBoard.prototype.setMap = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoScoreBoard} returns this
 */
proto.bragi.CsgoScoreBoard.prototype.clearMap = function() {
  return this.setMap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoScoreBoard.prototype.hasMap = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 round = 2;
 * @return {number}
 */
proto.bragi.CsgoScoreBoard.prototype.getRound = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoScoreBoard} returns this
 */
proto.bragi.CsgoScoreBoard.prototype.setRound = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional CsgoRoundOutcome round_outcome = 3;
 * @return {!proto.bragi.CsgoRoundOutcome}
 */
proto.bragi.CsgoScoreBoard.prototype.getRoundOutcome = function() {
  return /** @type {!proto.bragi.CsgoRoundOutcome} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.bragi.CsgoRoundOutcome} value
 * @return {!proto.bragi.CsgoScoreBoard} returns this
 */
proto.bragi.CsgoScoreBoard.prototype.setRoundOutcome = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.CsgoScoreBoard} returns this
 */
proto.bragi.CsgoScoreBoard.prototype.clearRoundOutcome = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoScoreBoard.prototype.hasRoundOutcome = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.CsgoTeamScoreBoard.repeatedFields_ = [13];



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
proto.bragi.CsgoTeamScoreBoard.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoTeamScoreBoard.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoTeamScoreBoard} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTeamScoreBoard.toObject = function(includeInstance, msg) {
  var f, obj = {
    team: (f = msg.getTeam()) && proto.bragi.Team.toObject(includeInstance, f),
    scoreMaps: jspb.Message.getFieldWithDefault(msg, 2, 0),
    scoreRounds: jspb.Message.getFieldWithDefault(msg, 3, 0),
    side: jspb.Message.getFieldWithDefault(msg, 4, 0),
    equipmentValue: jspb.Message.getFieldWithDefault(msg, 5, 0),
    balance: jspb.Message.getFieldWithDefault(msg, 6, 0),
    frag: jspb.Message.getFieldWithDefault(msg, 7, 0),
    flashbang: jspb.Message.getFieldWithDefault(msg, 8, 0),
    firebomb: jspb.Message.getFieldWithDefault(msg, 9, 0),
    smoke: jspb.Message.getFieldWithDefault(msg, 10, 0),
    defuser: jspb.Message.getFieldWithDefault(msg, 11, 0),
    decoy: jspb.Message.getFieldWithDefault(msg, 12, 0),
    playersList: jspb.Message.toObjectList(msg.getPlayersList(),
    proto.bragi.CsgoPlayerScoreBoard.toObject, includeInstance)
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
 * @return {!proto.bragi.CsgoTeamScoreBoard}
 */
proto.bragi.CsgoTeamScoreBoard.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoTeamScoreBoard;
  return proto.bragi.CsgoTeamScoreBoard.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoTeamScoreBoard} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoTeamScoreBoard}
 */
proto.bragi.CsgoTeamScoreBoard.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Team;
      reader.readMessage(value,proto.bragi.Team.deserializeBinaryFromReader);
      msg.setTeam(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setScoreMaps(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setScoreRounds(value);
      break;
    case 4:
      var value = /** @type {!proto.bragi.CsgoSide} */ (reader.readEnum());
      msg.setSide(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEquipmentValue(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBalance(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFrag(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFlashbang(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFirebomb(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSmoke(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDefuser(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDecoy(value);
      break;
    case 13:
      var value = new proto.bragi.CsgoPlayerScoreBoard;
      reader.readMessage(value,proto.bragi.CsgoPlayerScoreBoard.deserializeBinaryFromReader);
      msg.addPlayers(value);
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
proto.bragi.CsgoTeamScoreBoard.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoTeamScoreBoard.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoTeamScoreBoard} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoTeamScoreBoard.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeam();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.Team.serializeBinaryToWriter
    );
  }
  f = message.getScoreMaps();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getScoreRounds();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getSide();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getEquipmentValue();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getBalance();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getFrag();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getFlashbang();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getFirebomb();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getSmoke();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getDefuser();
  if (f !== 0) {
    writer.writeUint32(
      11,
      f
    );
  }
  f = message.getDecoy();
  if (f !== 0) {
    writer.writeUint32(
      12,
      f
    );
  }
  f = message.getPlayersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.bragi.CsgoPlayerScoreBoard.serializeBinaryToWriter
    );
  }
};


/**
 * optional Team team = 1;
 * @return {?proto.bragi.Team}
 */
proto.bragi.CsgoTeamScoreBoard.prototype.getTeam = function() {
  return /** @type{?proto.bragi.Team} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Team, 1));
};


/**
 * @param {?proto.bragi.Team|undefined} value
 * @return {!proto.bragi.CsgoTeamScoreBoard} returns this
*/
proto.bragi.CsgoTeamScoreBoard.prototype.setTeam = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoTeamScoreBoard} returns this
 */
proto.bragi.CsgoTeamScoreBoard.prototype.clearTeam = function() {
  return this.setTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoTeamScoreBoard.prototype.hasTeam = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 score_maps = 2;
 * @return {number}
 */
proto.bragi.CsgoTeamScoreBoard.prototype.getScoreMaps = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTeamScoreBoard} returns this
 */
proto.bragi.CsgoTeamScoreBoard.prototype.setScoreMaps = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 score_rounds = 3;
 * @return {number}
 */
proto.bragi.CsgoTeamScoreBoard.prototype.getScoreRounds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTeamScoreBoard} returns this
 */
proto.bragi.CsgoTeamScoreBoard.prototype.setScoreRounds = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional CsgoSide side = 4;
 * @return {!proto.bragi.CsgoSide}
 */
proto.bragi.CsgoTeamScoreBoard.prototype.getSide = function() {
  return /** @type {!proto.bragi.CsgoSide} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.bragi.CsgoSide} value
 * @return {!proto.bragi.CsgoTeamScoreBoard} returns this
 */
proto.bragi.CsgoTeamScoreBoard.prototype.setSide = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional uint32 equipment_value = 5;
 * @return {number}
 */
proto.bragi.CsgoTeamScoreBoard.prototype.getEquipmentValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTeamScoreBoard} returns this
 */
proto.bragi.CsgoTeamScoreBoard.prototype.setEquipmentValue = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 balance = 6;
 * @return {number}
 */
proto.bragi.CsgoTeamScoreBoard.prototype.getBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTeamScoreBoard} returns this
 */
proto.bragi.CsgoTeamScoreBoard.prototype.setBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 frag = 7;
 * @return {number}
 */
proto.bragi.CsgoTeamScoreBoard.prototype.getFrag = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTeamScoreBoard} returns this
 */
proto.bragi.CsgoTeamScoreBoard.prototype.setFrag = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 flashbang = 8;
 * @return {number}
 */
proto.bragi.CsgoTeamScoreBoard.prototype.getFlashbang = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTeamScoreBoard} returns this
 */
proto.bragi.CsgoTeamScoreBoard.prototype.setFlashbang = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint32 firebomb = 9;
 * @return {number}
 */
proto.bragi.CsgoTeamScoreBoard.prototype.getFirebomb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTeamScoreBoard} returns this
 */
proto.bragi.CsgoTeamScoreBoard.prototype.setFirebomb = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint32 smoke = 10;
 * @return {number}
 */
proto.bragi.CsgoTeamScoreBoard.prototype.getSmoke = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTeamScoreBoard} returns this
 */
proto.bragi.CsgoTeamScoreBoard.prototype.setSmoke = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint32 defuser = 11;
 * @return {number}
 */
proto.bragi.CsgoTeamScoreBoard.prototype.getDefuser = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTeamScoreBoard} returns this
 */
proto.bragi.CsgoTeamScoreBoard.prototype.setDefuser = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional uint32 decoy = 12;
 * @return {number}
 */
proto.bragi.CsgoTeamScoreBoard.prototype.getDecoy = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoTeamScoreBoard} returns this
 */
proto.bragi.CsgoTeamScoreBoard.prototype.setDecoy = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * repeated CsgoPlayerScoreBoard players = 13;
 * @return {!Array<!proto.bragi.CsgoPlayerScoreBoard>}
 */
proto.bragi.CsgoTeamScoreBoard.prototype.getPlayersList = function() {
  return /** @type{!Array<!proto.bragi.CsgoPlayerScoreBoard>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.CsgoPlayerScoreBoard, 13));
};


/**
 * @param {!Array<!proto.bragi.CsgoPlayerScoreBoard>} value
 * @return {!proto.bragi.CsgoTeamScoreBoard} returns this
*/
proto.bragi.CsgoTeamScoreBoard.prototype.setPlayersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.bragi.CsgoPlayerScoreBoard=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.CsgoPlayerScoreBoard}
 */
proto.bragi.CsgoTeamScoreBoard.prototype.addPlayers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.bragi.CsgoPlayerScoreBoard, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.CsgoTeamScoreBoard} returns this
 */
proto.bragi.CsgoTeamScoreBoard.prototype.clearPlayersList = function() {
  return this.setPlayersList([]);
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
proto.bragi.CsgoPlayerScoreBoard.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoPlayerScoreBoard.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoPlayerScoreBoard} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayerScoreBoard.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: (f = msg.getPlayer()) && proto.bragi.Player.toObject(includeInstance, f),
    health: jspb.Message.getFieldWithDefault(msg, 2, 0),
    kills: jspb.Message.getFieldWithDefault(msg, 3, 0),
    deaths: jspb.Message.getFieldWithDefault(msg, 4, 0),
    assists: jspb.Message.getFieldWithDefault(msg, 5, 0),
    damage: jspb.Message.getFieldWithDefault(msg, 6, 0),
    headshotRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    armor: jspb.Message.getFieldWithDefault(msg, 8, 0),
    balance: jspb.Message.getFieldWithDefault(msg, 9, 0),
    primary: jspb.Message.getFieldWithDefault(msg, 10, 0),
    secondary: jspb.Message.getFieldWithDefault(msg, 11, 0),
    openingDuels: (f = msg.getOpeningDuels()) && proto.bragi.CsgoOpeningDuels.toObject(includeInstance, f)
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
 * @return {!proto.bragi.CsgoPlayerScoreBoard}
 */
proto.bragi.CsgoPlayerScoreBoard.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoPlayerScoreBoard;
  return proto.bragi.CsgoPlayerScoreBoard.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoPlayerScoreBoard} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoPlayerScoreBoard}
 */
proto.bragi.CsgoPlayerScoreBoard.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Player;
      reader.readMessage(value,proto.bragi.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHealth(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setKills(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDeaths(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAssists(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDamage(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHeadshotRate(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setArmor(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBalance(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPrimary(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSecondary(value);
      break;
    case 12:
      var value = new proto.bragi.CsgoOpeningDuels;
      reader.readMessage(value,proto.bragi.CsgoOpeningDuels.deserializeBinaryFromReader);
      msg.setOpeningDuels(value);
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
proto.bragi.CsgoPlayerScoreBoard.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoPlayerScoreBoard.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoPlayerScoreBoard} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoPlayerScoreBoard.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.Player.serializeBinaryToWriter
    );
  }
  f = message.getHealth();
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
  f = message.getDeaths();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getAssists();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getDamage();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getHeadshotRate();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getArmor();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getBalance();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getPrimary();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getSecondary();
  if (f !== 0) {
    writer.writeUint32(
      11,
      f
    );
  }
  f = message.getOpeningDuels();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.bragi.CsgoOpeningDuels.serializeBinaryToWriter
    );
  }
};


/**
 * optional Player player = 1;
 * @return {?proto.bragi.Player}
 */
proto.bragi.CsgoPlayerScoreBoard.prototype.getPlayer = function() {
  return /** @type{?proto.bragi.Player} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Player, 1));
};


/**
 * @param {?proto.bragi.Player|undefined} value
 * @return {!proto.bragi.CsgoPlayerScoreBoard} returns this
*/
proto.bragi.CsgoPlayerScoreBoard.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerScoreBoard} returns this
 */
proto.bragi.CsgoPlayerScoreBoard.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerScoreBoard.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 health = 2;
 * @return {number}
 */
proto.bragi.CsgoPlayerScoreBoard.prototype.getHealth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPlayerScoreBoard} returns this
 */
proto.bragi.CsgoPlayerScoreBoard.prototype.setHealth = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 kills = 3;
 * @return {number}
 */
proto.bragi.CsgoPlayerScoreBoard.prototype.getKills = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPlayerScoreBoard} returns this
 */
proto.bragi.CsgoPlayerScoreBoard.prototype.setKills = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 deaths = 4;
 * @return {number}
 */
proto.bragi.CsgoPlayerScoreBoard.prototype.getDeaths = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPlayerScoreBoard} returns this
 */
proto.bragi.CsgoPlayerScoreBoard.prototype.setDeaths = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 assists = 5;
 * @return {number}
 */
proto.bragi.CsgoPlayerScoreBoard.prototype.getAssists = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPlayerScoreBoard} returns this
 */
proto.bragi.CsgoPlayerScoreBoard.prototype.setAssists = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 damage = 6;
 * @return {number}
 */
proto.bragi.CsgoPlayerScoreBoard.prototype.getDamage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPlayerScoreBoard} returns this
 */
proto.bragi.CsgoPlayerScoreBoard.prototype.setDamage = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional double headshot_rate = 7;
 * @return {number}
 */
proto.bragi.CsgoPlayerScoreBoard.prototype.getHeadshotRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPlayerScoreBoard} returns this
 */
proto.bragi.CsgoPlayerScoreBoard.prototype.setHeadshotRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional uint32 armor = 8;
 * @return {number}
 */
proto.bragi.CsgoPlayerScoreBoard.prototype.getArmor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPlayerScoreBoard} returns this
 */
proto.bragi.CsgoPlayerScoreBoard.prototype.setArmor = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 balance = 9;
 * @return {number}
 */
proto.bragi.CsgoPlayerScoreBoard.prototype.getBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPlayerScoreBoard} returns this
 */
proto.bragi.CsgoPlayerScoreBoard.prototype.setBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint32 primary = 10;
 * @return {number}
 */
proto.bragi.CsgoPlayerScoreBoard.prototype.getPrimary = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPlayerScoreBoard} returns this
 */
proto.bragi.CsgoPlayerScoreBoard.prototype.setPrimary = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint32 secondary = 11;
 * @return {number}
 */
proto.bragi.CsgoPlayerScoreBoard.prototype.getSecondary = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoPlayerScoreBoard} returns this
 */
proto.bragi.CsgoPlayerScoreBoard.prototype.setSecondary = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional CsgoOpeningDuels opening_duels = 12;
 * @return {?proto.bragi.CsgoOpeningDuels}
 */
proto.bragi.CsgoPlayerScoreBoard.prototype.getOpeningDuels = function() {
  return /** @type{?proto.bragi.CsgoOpeningDuels} */ (
    jspb.Message.getWrapperField(this, proto.bragi.CsgoOpeningDuels, 12));
};


/**
 * @param {?proto.bragi.CsgoOpeningDuels|undefined} value
 * @return {!proto.bragi.CsgoPlayerScoreBoard} returns this
*/
proto.bragi.CsgoPlayerScoreBoard.prototype.setOpeningDuels = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoPlayerScoreBoard} returns this
 */
proto.bragi.CsgoPlayerScoreBoard.prototype.clearOpeningDuels = function() {
  return this.setOpeningDuels(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoPlayerScoreBoard.prototype.hasOpeningDuels = function() {
  return jspb.Message.getField(this, 12) != null;
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
proto.bragi.CsgoOpeningDuels.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoOpeningDuels.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoOpeningDuels} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoOpeningDuels.toObject = function(includeInstance, msg) {
  var f, obj = {
    kills: jspb.Message.getFieldWithDefault(msg, 1, 0),
    deaths: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.bragi.CsgoOpeningDuels}
 */
proto.bragi.CsgoOpeningDuels.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoOpeningDuels;
  return proto.bragi.CsgoOpeningDuels.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoOpeningDuels} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoOpeningDuels}
 */
proto.bragi.CsgoOpeningDuels.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setKills(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDeaths(value);
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
proto.bragi.CsgoOpeningDuels.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoOpeningDuels.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoOpeningDuels} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoOpeningDuels.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKills();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getDeaths();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 kills = 1;
 * @return {number}
 */
proto.bragi.CsgoOpeningDuels.prototype.getKills = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoOpeningDuels} returns this
 */
proto.bragi.CsgoOpeningDuels.prototype.setKills = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 deaths = 2;
 * @return {number}
 */
proto.bragi.CsgoOpeningDuels.prototype.getDeaths = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoOpeningDuels} returns this
 */
proto.bragi.CsgoOpeningDuels.prototype.setDeaths = function(value) {
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
proto.bragi.CsgoEvents.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.CsgoEvents.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.CsgoEvents} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoEvents.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    team: (f = msg.getTeam()) && proto.bragi.Team.toObject(includeInstance, f),
    round: jspb.Message.getFieldWithDefault(msg, 3, 0),
    roundTime: jspb.Message.getFieldWithDefault(msg, 4, 0),
    description: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.bragi.CsgoEvents}
 */
proto.bragi.CsgoEvents.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.CsgoEvents;
  return proto.bragi.CsgoEvents.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.CsgoEvents} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.CsgoEvents}
 */
proto.bragi.CsgoEvents.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = new proto.bragi.Team;
      reader.readMessage(value,proto.bragi.Team.deserializeBinaryFromReader);
      msg.setTeam(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRound(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRoundTime(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
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
proto.bragi.CsgoEvents.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.CsgoEvents.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.CsgoEvents} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.CsgoEvents.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTeam();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bragi.Team.serializeBinaryToWriter
    );
  }
  f = message.getRound();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getRoundTime();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.bragi.CsgoEvents.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoEvents} returns this
 */
proto.bragi.CsgoEvents.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Team team = 2;
 * @return {?proto.bragi.Team}
 */
proto.bragi.CsgoEvents.prototype.getTeam = function() {
  return /** @type{?proto.bragi.Team} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Team, 2));
};


/**
 * @param {?proto.bragi.Team|undefined} value
 * @return {!proto.bragi.CsgoEvents} returns this
*/
proto.bragi.CsgoEvents.prototype.setTeam = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.CsgoEvents} returns this
 */
proto.bragi.CsgoEvents.prototype.clearTeam = function() {
  return this.setTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.CsgoEvents.prototype.hasTeam = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 round = 3;
 * @return {number}
 */
proto.bragi.CsgoEvents.prototype.getRound = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoEvents} returns this
 */
proto.bragi.CsgoEvents.prototype.setRound = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 round_time = 4;
 * @return {number}
 */
proto.bragi.CsgoEvents.prototype.getRoundTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.CsgoEvents} returns this
 */
proto.bragi.CsgoEvents.prototype.setRoundTime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.bragi.CsgoEvents.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.CsgoEvents} returns this
 */
proto.bragi.CsgoEvents.prototype.setDescription = function(value) {
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
proto.bragi.Sport.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Sport.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Sport} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Sport.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.bragi.Sport}
 */
proto.bragi.Sport.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Sport;
  return proto.bragi.Sport.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Sport} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Sport}
 */
proto.bragi.Sport.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.bragi.Sport.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Sport.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Sport} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Sport.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.bragi.Sport.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Sport} returns this
 */
proto.bragi.Sport.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.bragi.Sport.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.Sport} returns this
 */
proto.bragi.Sport.prototype.setName = function(value) {
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
proto.bragi.Tournament.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Tournament.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Tournament} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Tournament.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    startTimestamp: (f = msg.getStartTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endTimestamp: (f = msg.getEndTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.bragi.Tournament}
 */
proto.bragi.Tournament.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Tournament;
  return proto.bragi.Tournament.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Tournament} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Tournament}
 */
proto.bragi.Tournament.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTimestamp(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTimestamp(value);
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
proto.bragi.Tournament.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Tournament.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Tournament} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Tournament.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStartTimestamp();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndTimestamp();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.bragi.Tournament.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Tournament} returns this
 */
proto.bragi.Tournament.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.bragi.Tournament.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.Tournament} returns this
 */
proto.bragi.Tournament.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp start_timestamp = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bragi.Tournament.prototype.getStartTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bragi.Tournament} returns this
*/
proto.bragi.Tournament.prototype.setStartTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Tournament} returns this
 */
proto.bragi.Tournament.prototype.clearStartTimestamp = function() {
  return this.setStartTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Tournament.prototype.hasStartTimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp end_timestamp = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bragi.Tournament.prototype.getEndTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bragi.Tournament} returns this
*/
proto.bragi.Tournament.prototype.setEndTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Tournament} returns this
 */
proto.bragi.Tournament.prototype.clearEndTimestamp = function() {
  return this.setEndTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Tournament.prototype.hasEndTimestamp = function() {
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
proto.bragi.Team.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Team.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Team} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Team.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    iconPath: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.bragi.Team}
 */
proto.bragi.Team.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Team;
  return proto.bragi.Team.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Team} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Team}
 */
proto.bragi.Team.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIconPath(value);
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
proto.bragi.Team.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Team.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Team} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Team.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.bragi.Team.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Team} returns this
 */
proto.bragi.Team.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.bragi.Team.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.Team} returns this
 */
proto.bragi.Team.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string icon_path = 3;
 * @return {string}
 */
proto.bragi.Team.prototype.getIconPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.Team} returns this
 */
proto.bragi.Team.prototype.setIconPath = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.Team} returns this
 */
proto.bragi.Team.prototype.clearIconPath = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Team.prototype.hasIconPath = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bragi.Match.repeatedFields_ = [13];



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
proto.bragi.Match.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Match.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Match} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Match.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    plannedStartTimestamp: (f = msg.getPlannedStartTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    startTimestamp: (f = msg.getStartTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endTimestamp: (f = msg.getEndTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    tournament: (f = msg.getTournament()) && proto.bragi.Tournament.toObject(includeInstance, f),
    homeTeam: (f = msg.getHomeTeam()) && proto.bragi.Team.toObject(includeInstance, f),
    homeScore: jspb.Message.getFieldWithDefault(msg, 7, 0),
    awayTeam: (f = msg.getAwayTeam()) && proto.bragi.Team.toObject(includeInstance, f),
    awayScore: jspb.Message.getFieldWithDefault(msg, 9, 0),
    winTeam: (f = msg.getWinTeam()) && proto.bragi.Team.toObject(includeInstance, f),
    isClosed: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    bestOfType: jspb.Message.getFieldWithDefault(msg, 12, 0),
    mapsList: jspb.Message.toObjectList(msg.getMapsList(),
    proto.bragi.Map.toObject, includeInstance)
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
 * @return {!proto.bragi.Match}
 */
proto.bragi.Match.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Match;
  return proto.bragi.Match.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Match} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Match}
 */
proto.bragi.Match.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setPlannedStartTimestamp(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTimestamp(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTimestamp(value);
      break;
    case 5:
      var value = new proto.bragi.Tournament;
      reader.readMessage(value,proto.bragi.Tournament.deserializeBinaryFromReader);
      msg.setTournament(value);
      break;
    case 6:
      var value = new proto.bragi.Team;
      reader.readMessage(value,proto.bragi.Team.deserializeBinaryFromReader);
      msg.setHomeTeam(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHomeScore(value);
      break;
    case 8:
      var value = new proto.bragi.Team;
      reader.readMessage(value,proto.bragi.Team.deserializeBinaryFromReader);
      msg.setAwayTeam(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAwayScore(value);
      break;
    case 10:
      var value = new proto.bragi.Team;
      reader.readMessage(value,proto.bragi.Team.deserializeBinaryFromReader);
      msg.setWinTeam(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsClosed(value);
      break;
    case 12:
      var value = /** @type {!proto.bragi.BestOfType} */ (reader.readEnum());
      msg.setBestOfType(value);
      break;
    case 13:
      var value = new proto.bragi.Map;
      reader.readMessage(value,proto.bragi.Map.deserializeBinaryFromReader);
      msg.addMaps(value);
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
proto.bragi.Match.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Match.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Match} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Match.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPlannedStartTimestamp();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStartTimestamp();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndTimestamp();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTournament();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bragi.Tournament.serializeBinaryToWriter
    );
  }
  f = message.getHomeTeam();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bragi.Team.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getAwayTeam();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.bragi.Team.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getWinTeam();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.bragi.Team.serializeBinaryToWriter
    );
  }
  f = message.getIsClosed();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getBestOfType();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getMapsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.bragi.Map.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.bragi.Match.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Match} returns this
 */
proto.bragi.Match.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp planned_start_timestamp = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bragi.Match.prototype.getPlannedStartTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bragi.Match} returns this
*/
proto.bragi.Match.prototype.setPlannedStartTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Match} returns this
 */
proto.bragi.Match.prototype.clearPlannedStartTimestamp = function() {
  return this.setPlannedStartTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Match.prototype.hasPlannedStartTimestamp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp start_timestamp = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bragi.Match.prototype.getStartTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bragi.Match} returns this
*/
proto.bragi.Match.prototype.setStartTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Match} returns this
 */
proto.bragi.Match.prototype.clearStartTimestamp = function() {
  return this.setStartTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Match.prototype.hasStartTimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp end_timestamp = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bragi.Match.prototype.getEndTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bragi.Match} returns this
*/
proto.bragi.Match.prototype.setEndTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Match} returns this
 */
proto.bragi.Match.prototype.clearEndTimestamp = function() {
  return this.setEndTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Match.prototype.hasEndTimestamp = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Tournament tournament = 5;
 * @return {?proto.bragi.Tournament}
 */
proto.bragi.Match.prototype.getTournament = function() {
  return /** @type{?proto.bragi.Tournament} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Tournament, 5));
};


/**
 * @param {?proto.bragi.Tournament|undefined} value
 * @return {!proto.bragi.Match} returns this
*/
proto.bragi.Match.prototype.setTournament = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Match} returns this
 */
proto.bragi.Match.prototype.clearTournament = function() {
  return this.setTournament(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Match.prototype.hasTournament = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Team home_team = 6;
 * @return {?proto.bragi.Team}
 */
proto.bragi.Match.prototype.getHomeTeam = function() {
  return /** @type{?proto.bragi.Team} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Team, 6));
};


/**
 * @param {?proto.bragi.Team|undefined} value
 * @return {!proto.bragi.Match} returns this
*/
proto.bragi.Match.prototype.setHomeTeam = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Match} returns this
 */
proto.bragi.Match.prototype.clearHomeTeam = function() {
  return this.setHomeTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Match.prototype.hasHomeTeam = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 home_score = 7;
 * @return {number}
 */
proto.bragi.Match.prototype.getHomeScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Match} returns this
 */
proto.bragi.Match.prototype.setHomeScore = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.Match} returns this
 */
proto.bragi.Match.prototype.clearHomeScore = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Match.prototype.hasHomeScore = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Team away_team = 8;
 * @return {?proto.bragi.Team}
 */
proto.bragi.Match.prototype.getAwayTeam = function() {
  return /** @type{?proto.bragi.Team} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Team, 8));
};


/**
 * @param {?proto.bragi.Team|undefined} value
 * @return {!proto.bragi.Match} returns this
*/
proto.bragi.Match.prototype.setAwayTeam = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Match} returns this
 */
proto.bragi.Match.prototype.clearAwayTeam = function() {
  return this.setAwayTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Match.prototype.hasAwayTeam = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 away_score = 9;
 * @return {number}
 */
proto.bragi.Match.prototype.getAwayScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Match} returns this
 */
proto.bragi.Match.prototype.setAwayScore = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.Match} returns this
 */
proto.bragi.Match.prototype.clearAwayScore = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Match.prototype.hasAwayScore = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Team win_team = 10;
 * @return {?proto.bragi.Team}
 */
proto.bragi.Match.prototype.getWinTeam = function() {
  return /** @type{?proto.bragi.Team} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Team, 10));
};


/**
 * @param {?proto.bragi.Team|undefined} value
 * @return {!proto.bragi.Match} returns this
*/
proto.bragi.Match.prototype.setWinTeam = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Match} returns this
 */
proto.bragi.Match.prototype.clearWinTeam = function() {
  return this.setWinTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Match.prototype.hasWinTeam = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bool is_closed = 11;
 * @return {boolean}
 */
proto.bragi.Match.prototype.getIsClosed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.Match} returns this
 */
proto.bragi.Match.prototype.setIsClosed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional BestOfType best_of_type = 12;
 * @return {!proto.bragi.BestOfType}
 */
proto.bragi.Match.prototype.getBestOfType = function() {
  return /** @type {!proto.bragi.BestOfType} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.bragi.BestOfType} value
 * @return {!proto.bragi.Match} returns this
 */
proto.bragi.Match.prototype.setBestOfType = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * repeated Map maps = 13;
 * @return {!Array<!proto.bragi.Map>}
 */
proto.bragi.Match.prototype.getMapsList = function() {
  return /** @type{!Array<!proto.bragi.Map>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bragi.Map, 13));
};


/**
 * @param {!Array<!proto.bragi.Map>} value
 * @return {!proto.bragi.Match} returns this
*/
proto.bragi.Match.prototype.setMapsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.bragi.Map=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bragi.Map}
 */
proto.bragi.Match.prototype.addMaps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.bragi.Map, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bragi.Match} returns this
 */
proto.bragi.Match.prototype.clearMapsList = function() {
  return this.setMapsList([]);
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
proto.bragi.Map.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Map.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Map} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Map.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    order: jspb.Message.getFieldWithDefault(msg, 2, 0),
    startTimestamp: (f = msg.getStartTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endTimestamp: (f = msg.getEndTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    isClosed: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.bragi.Map}
 */
proto.bragi.Map.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Map;
  return proto.bragi.Map.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Map} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Map}
 */
proto.bragi.Map.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOrder(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTimestamp(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTimestamp(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsClosed(value);
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
proto.bragi.Map.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Map.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Map} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Map.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getOrder();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getStartTimestamp();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndTimestamp();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getIsClosed();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.bragi.Map.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Map} returns this
 */
proto.bragi.Map.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 order = 2;
 * @return {number}
 */
proto.bragi.Map.prototype.getOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Map} returns this
 */
proto.bragi.Map.prototype.setOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp start_timestamp = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bragi.Map.prototype.getStartTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bragi.Map} returns this
*/
proto.bragi.Map.prototype.setStartTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Map} returns this
 */
proto.bragi.Map.prototype.clearStartTimestamp = function() {
  return this.setStartTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Map.prototype.hasStartTimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp end_timestamp = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bragi.Map.prototype.getEndTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bragi.Map} returns this
*/
proto.bragi.Map.prototype.setEndTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.Map} returns this
 */
proto.bragi.Map.prototype.clearEndTimestamp = function() {
  return this.setEndTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Map.prototype.hasEndTimestamp = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool is_closed = 5;
 * @return {boolean}
 */
proto.bragi.Map.prototype.getIsClosed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bragi.Map} returns this
 */
proto.bragi.Map.prototype.setIsClosed = function(value) {
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
proto.bragi.Player.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.Player.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.Player} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Player.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nickname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    realName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    shortcut: jspb.Message.getFieldWithDefault(msg, 4, ""),
    iconPath: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.bragi.Player}
 */
proto.bragi.Player.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.Player;
  return proto.bragi.Player.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.Player} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.Player}
 */
proto.bragi.Player.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRealName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortcut(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setIconPath(value);
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
proto.bragi.Player.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.Player.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.Player} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.Player.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getNickname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
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
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.bragi.Player.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.Player} returns this
 */
proto.bragi.Player.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string nickname = 2;
 * @return {string}
 */
proto.bragi.Player.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.Player} returns this
 */
proto.bragi.Player.prototype.setNickname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string real_name = 3;
 * @return {string}
 */
proto.bragi.Player.prototype.getRealName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.Player} returns this
 */
proto.bragi.Player.prototype.setRealName = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.Player} returns this
 */
proto.bragi.Player.prototype.clearRealName = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Player.prototype.hasRealName = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string shortcut = 4;
 * @return {string}
 */
proto.bragi.Player.prototype.getShortcut = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.Player} returns this
 */
proto.bragi.Player.prototype.setShortcut = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.Player} returns this
 */
proto.bragi.Player.prototype.clearShortcut = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Player.prototype.hasShortcut = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string icon_path = 5;
 * @return {string}
 */
proto.bragi.Player.prototype.getIconPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bragi.Player} returns this
 */
proto.bragi.Player.prototype.setIconPath = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bragi.Player} returns this
 */
proto.bragi.Player.prototype.clearIconPath = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.Player.prototype.hasIconPath = function() {
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
proto.bragi.TournamentTeamStatisticsValue.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.TournamentTeamStatisticsValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.TournamentTeamStatisticsValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.TournamentTeamStatisticsValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    team: (f = msg.getTeam()) && proto.bragi.Team.toObject(includeInstance, f),
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.bragi.TournamentTeamStatisticsValue}
 */
proto.bragi.TournamentTeamStatisticsValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.TournamentTeamStatisticsValue;
  return proto.bragi.TournamentTeamStatisticsValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.TournamentTeamStatisticsValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.TournamentTeamStatisticsValue}
 */
proto.bragi.TournamentTeamStatisticsValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Team;
      reader.readMessage(value,proto.bragi.Team.deserializeBinaryFromReader);
      msg.setTeam(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
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
proto.bragi.TournamentTeamStatisticsValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.TournamentTeamStatisticsValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.TournamentTeamStatisticsValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.TournamentTeamStatisticsValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeam();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.Team.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional Team team = 1;
 * @return {?proto.bragi.Team}
 */
proto.bragi.TournamentTeamStatisticsValue.prototype.getTeam = function() {
  return /** @type{?proto.bragi.Team} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Team, 1));
};


/**
 * @param {?proto.bragi.Team|undefined} value
 * @return {!proto.bragi.TournamentTeamStatisticsValue} returns this
*/
proto.bragi.TournamentTeamStatisticsValue.prototype.setTeam = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.TournamentTeamStatisticsValue} returns this
 */
proto.bragi.TournamentTeamStatisticsValue.prototype.clearTeam = function() {
  return this.setTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.TournamentTeamStatisticsValue.prototype.hasTeam = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float value = 2;
 * @return {number}
 */
proto.bragi.TournamentTeamStatisticsValue.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.TournamentTeamStatisticsValue} returns this
 */
proto.bragi.TournamentTeamStatisticsValue.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
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
proto.bragi.TournamentTeamStatisticsValueInPercent.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.TournamentTeamStatisticsValueInPercent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.TournamentTeamStatisticsValueInPercent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.TournamentTeamStatisticsValueInPercent.toObject = function(includeInstance, msg) {
  var f, obj = {
    team: (f = msg.getTeam()) && proto.bragi.Team.toObject(includeInstance, f),
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.bragi.TournamentTeamStatisticsValueInPercent}
 */
proto.bragi.TournamentTeamStatisticsValueInPercent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.TournamentTeamStatisticsValueInPercent;
  return proto.bragi.TournamentTeamStatisticsValueInPercent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.TournamentTeamStatisticsValueInPercent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.TournamentTeamStatisticsValueInPercent}
 */
proto.bragi.TournamentTeamStatisticsValueInPercent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bragi.Team;
      reader.readMessage(value,proto.bragi.Team.deserializeBinaryFromReader);
      msg.setTeam(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
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
proto.bragi.TournamentTeamStatisticsValueInPercent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.TournamentTeamStatisticsValueInPercent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.TournamentTeamStatisticsValueInPercent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.TournamentTeamStatisticsValueInPercent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeam();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bragi.Team.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional Team team = 1;
 * @return {?proto.bragi.Team}
 */
proto.bragi.TournamentTeamStatisticsValueInPercent.prototype.getTeam = function() {
  return /** @type{?proto.bragi.Team} */ (
    jspb.Message.getWrapperField(this, proto.bragi.Team, 1));
};


/**
 * @param {?proto.bragi.Team|undefined} value
 * @return {!proto.bragi.TournamentTeamStatisticsValueInPercent} returns this
*/
proto.bragi.TournamentTeamStatisticsValueInPercent.prototype.setTeam = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bragi.TournamentTeamStatisticsValueInPercent} returns this
 */
proto.bragi.TournamentTeamStatisticsValueInPercent.prototype.clearTeam = function() {
  return this.setTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bragi.TournamentTeamStatisticsValueInPercent.prototype.hasTeam = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float value = 2;
 * @return {number}
 */
proto.bragi.TournamentTeamStatisticsValueInPercent.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.TournamentTeamStatisticsValueInPercent} returns this
 */
proto.bragi.TournamentTeamStatisticsValueInPercent.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
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
proto.bragi.PostMapStatisticsValues.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.PostMapStatisticsValues.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.PostMapStatisticsValues} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.PostMapStatisticsValues.toObject = function(includeInstance, msg) {
  var f, obj = {
    percentageOfMaximum: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    total: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.bragi.PostMapStatisticsValues}
 */
proto.bragi.PostMapStatisticsValues.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.PostMapStatisticsValues;
  return proto.bragi.PostMapStatisticsValues.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.PostMapStatisticsValues} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.PostMapStatisticsValues}
 */
proto.bragi.PostMapStatisticsValues.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPercentageOfMaximum(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTotal(value);
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
proto.bragi.PostMapStatisticsValues.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.PostMapStatisticsValues.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.PostMapStatisticsValues} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.PostMapStatisticsValues.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPercentageOfMaximum();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional float percentage_of_maximum = 1;
 * @return {number}
 */
proto.bragi.PostMapStatisticsValues.prototype.getPercentageOfMaximum = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.PostMapStatisticsValues} returns this
 */
proto.bragi.PostMapStatisticsValues.prototype.setPercentageOfMaximum = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float total = 2;
 * @return {number}
 */
proto.bragi.PostMapStatisticsValues.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.PostMapStatisticsValues} returns this
 */
proto.bragi.PostMapStatisticsValues.prototype.setTotal = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
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
proto.bragi.StatisticsValues.prototype.toObject = function(opt_includeInstance) {
  return proto.bragi.StatisticsValues.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bragi.StatisticsValues} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.StatisticsValues.toObject = function(includeInstance, msg) {
  var f, obj = {
    avg: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    percentile: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    total: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.bragi.StatisticsValues}
 */
proto.bragi.StatisticsValues.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bragi.StatisticsValues;
  return proto.bragi.StatisticsValues.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bragi.StatisticsValues} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bragi.StatisticsValues}
 */
proto.bragi.StatisticsValues.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAvg(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPercentile(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTotal(value);
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
proto.bragi.StatisticsValues.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bragi.StatisticsValues.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bragi.StatisticsValues} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bragi.StatisticsValues.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAvg();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getPercentile();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional float avg = 1;
 * @return {number}
 */
proto.bragi.StatisticsValues.prototype.getAvg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.StatisticsValues} returns this
 */
proto.bragi.StatisticsValues.prototype.setAvg = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float percentile = 2;
 * @return {number}
 */
proto.bragi.StatisticsValues.prototype.getPercentile = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.StatisticsValues} returns this
 */
proto.bragi.StatisticsValues.prototype.setPercentile = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float total = 3;
 * @return {number}
 */
proto.bragi.StatisticsValues.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bragi.StatisticsValues} returns this
 */
proto.bragi.StatisticsValues.prototype.setTotal = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
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
proto.bragi.CsgoSide = {
  CSGO_SIDE_UNSPECIFIED: 0,
  CSGO_SIDE_COUNTER_TERRORISTS: 1,
  CSGO_SIDE_TERRORISTS: 2
};

/**
 * @enum {number}
 */
proto.bragi.CsgoRoundOutcome = {
  CSGO_ROUND_OUTCOME_UNSPECIFIED: 0,
  CSGO_ROUND_OUTCOME_COUNTER_TERRORISTS_ELIMINATED: 1,
  CSGO_ROUND_OUTCOME_TERRORISTS_ELIMINATED: 2,
  CSGO_ROUND_OUTCOME_EXPLOSION: 3,
  CSGO_ROUND_OUTCOME_DEFUSE: 4,
  CSGO_ROUND_OUTCOME_TIMEOUT: 5
};

/**
 * @enum {number}
 */
proto.bragi.Timeframe = {
  TIMEFRAME_UNSPECIFIED: 0,
  TIMEFRAME_ONE_MONTH: 1,
  TIMEFRAME_THREE_MONTHS: 2,
  TIMEFRAME_SIX_MONTHS: 3,
  TIMEFRAME_ONE_YEAR: 4
};

/**
 * @enum {number}
 */
proto.bragi.BestOfType = {
  BEST_OF_TYPE_UNSPECIFIED: 0,
  BEST_OF_TYPE_BO1: 1,
  BEST_OF_TYPE_BO2: 2,
  BEST_OF_TYPE_BO3: 3,
  BEST_OF_TYPE_BO4: 4,
  BEST_OF_TYPE_BO5: 5,
  BEST_OF_TYPE_BO6: 6,
  BEST_OF_TYPE_BO7: 7
};

goog.object.extend(exports, proto.bragi);
