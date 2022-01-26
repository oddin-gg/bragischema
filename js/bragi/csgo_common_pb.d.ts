// package: bragi
// file: bragi/csgo_common.proto

import * as jspb from "google-protobuf";

export interface CsgoSideMap {
  CSGO_SIDE_UNSPECIFIED: 0;
  CSGO_SIDE_COUNTER_TERRORISTS: 1;
  CSGO_SIDE_TERRORISTS: 2;
}

export const CsgoSide: CsgoSideMap;

export interface CsgoWinReasonMap {
  CSGO_WIN_REASON_UNSPECIFIED: 0;
  CSGO_WIN_REASON_COUNTER_TERRORISTS_ELIMINATED: 1;
  CSGO_WIN_REASON_TERRORISTS_ELIMINATED: 2;
  CSGO_WIN_REASON_EXPLOSION: 3;
  CSGO_WIN_REASON_DEFUSE: 4;
  CSGO_WIN_REASON_TIMEOUT: 5;
  CSGO_WIN_REASON_TARGET_SAVED: 6;
}

export const CsgoWinReason: CsgoWinReasonMap;

export interface CsgoPlayerRoleMap {
  CSGO_PLAYER_ROLE_UNSPECIFIED: 0;
  CSGO_PLAYER_ROLE_KILL_LEADER: 1;
  CSGO_PLAYER_ROLE_ENTRY_FRAGGER: 2;
  CSGO_PLAYER_ROLE_SUPPORT: 3;
  CSGO_PLAYER_ROLE_AWPER: 4;
  CSGO_PLAYER_ROLE_LURKER: 5;
}

export const CsgoPlayerRole: CsgoPlayerRoleMap;

export interface CsgoRoundStateTypeMap {
  CSGO_ROUND_STATE_TYPE_UNSPECIFIED: 0;
  CSGO_ROUND_STATE_TYPE_BUY_TIME: 1;
  CSGO_ROUND_STATE_TYPE_IN_PROGRESS: 2;
  CSGO_ROUND_STATE_TYPE_PAUSED: 3;
  CSGO_ROUND_STATE_TYPE_FINISHED: 4;
}

export const CsgoRoundStateType: CsgoRoundStateTypeMap;

export interface CsgoMatchStatusTypeMap {
  CSGO_MATCH_STATUS_TYPE_UNSPECIFIED: 0;
  CSGO_MATCH_STATUS_TYPE_LIVE: 1;
  CSGO_MATCH_STATUS_TYPE_FINISHED: 2;
}

export const CsgoMatchStatusType: CsgoMatchStatusTypeMap;

