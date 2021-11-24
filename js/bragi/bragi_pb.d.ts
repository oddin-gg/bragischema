// package: bragi
// file: bragi/bragi.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class SportsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SportsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SportsRequest): SportsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SportsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SportsRequest;
  static deserializeBinaryFromReader(message: SportsRequest, reader: jspb.BinaryReader): SportsRequest;
}

export namespace SportsRequest {
  export type AsObject = {
  }
}

export class TeamHistoricalStatisticsRequest extends jspb.Message {
  getSportId(): number;
  setSportId(value: number): void;

  getTimeframe(): TimeframeMap[keyof TimeframeMap];
  setTimeframe(value: TimeframeMap[keyof TimeframeMap]): void;

  getTeamId(): number;
  setTeamId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamHistoricalStatisticsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TeamHistoricalStatisticsRequest): TeamHistoricalStatisticsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TeamHistoricalStatisticsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamHistoricalStatisticsRequest;
  static deserializeBinaryFromReader(message: TeamHistoricalStatisticsRequest, reader: jspb.BinaryReader): TeamHistoricalStatisticsRequest;
}

export namespace TeamHistoricalStatisticsRequest {
  export type AsObject = {
    sportId: number,
    timeframe: TimeframeMap[keyof TimeframeMap],
    teamId: number,
  }
}

export class LastFiveEncountersRequest extends jspb.Message {
  getSportId(): number;
  setSportId(value: number): void;

  getTimeframe(): TimeframeMap[keyof TimeframeMap];
  setTimeframe(value: TimeframeMap[keyof TimeframeMap]): void;

  getHomeTeamId(): number;
  setHomeTeamId(value: number): void;

  getAwayTeamId(): number;
  setAwayTeamId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LastFiveEncountersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LastFiveEncountersRequest): LastFiveEncountersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LastFiveEncountersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LastFiveEncountersRequest;
  static deserializeBinaryFromReader(message: LastFiveEncountersRequest, reader: jspb.BinaryReader): LastFiveEncountersRequest;
}

export namespace LastFiveEncountersRequest {
  export type AsObject = {
    sportId: number,
    timeframe: TimeframeMap[keyof TimeframeMap],
    homeTeamId: number,
    awayTeamId: number,
  }
}

export class TournamentsRequest extends jspb.Message {
  getSportId(): number;
  setSportId(value: number): void;

  hasDateFrom(): boolean;
  clearDateFrom(): void;
  getDateFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDateTo(): boolean;
  clearDateTo(): void;
  getDateTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateTo(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TournamentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TournamentsRequest): TournamentsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TournamentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TournamentsRequest;
  static deserializeBinaryFromReader(message: TournamentsRequest, reader: jspb.BinaryReader): TournamentsRequest;
}

export namespace TournamentsRequest {
  export type AsObject = {
    sportId: number,
    dateFrom?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dateTo?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class TournamentInfoRequest extends jspb.Message {
  getTournamentId(): number;
  setTournamentId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TournamentInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TournamentInfoRequest): TournamentInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TournamentInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TournamentInfoRequest;
  static deserializeBinaryFromReader(message: TournamentInfoRequest, reader: jspb.BinaryReader): TournamentInfoRequest;
}

export namespace TournamentInfoRequest {
  export type AsObject = {
    tournamentId: number,
  }
}

export class PostMapStatisticsRequest extends jspb.Message {
  getMapId(): number;
  setMapId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostMapStatisticsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostMapStatisticsRequest): PostMapStatisticsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostMapStatisticsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostMapStatisticsRequest;
  static deserializeBinaryFromReader(message: PostMapStatisticsRequest, reader: jspb.BinaryReader): PostMapStatisticsRequest;
}

export namespace PostMapStatisticsRequest {
  export type AsObject = {
    mapId: number,
  }
}

export class TournamentStatisticsRequest extends jspb.Message {
  getTournamentId(): number;
  setTournamentId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TournamentStatisticsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TournamentStatisticsRequest): TournamentStatisticsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TournamentStatisticsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TournamentStatisticsRequest;
  static deserializeBinaryFromReader(message: TournamentStatisticsRequest, reader: jspb.BinaryReader): TournamentStatisticsRequest;
}

export namespace TournamentStatisticsRequest {
  export type AsObject = {
    tournamentId: number,
  }
}

export class TeamTournamentStatisticsRequest extends jspb.Message {
  getTournamentId(): number;
  setTournamentId(value: number): void;

  getTeamId(): number;
  setTeamId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamTournamentStatisticsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TeamTournamentStatisticsRequest): TeamTournamentStatisticsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TeamTournamentStatisticsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamTournamentStatisticsRequest;
  static deserializeBinaryFromReader(message: TeamTournamentStatisticsRequest, reader: jspb.BinaryReader): TeamTournamentStatisticsRequest;
}

export namespace TeamTournamentStatisticsRequest {
  export type AsObject = {
    tournamentId: number,
    teamId: number,
  }
}

export class PlayerStatisticsAccordingRoleRequest extends jspb.Message {
  getSportId(): number;
  setSportId(value: number): void;

  getTimeframe(): TimeframeMap[keyof TimeframeMap];
  setTimeframe(value: TimeframeMap[keyof TimeframeMap]): void;

  getRole(): string;
  setRole(value: string): void;

  getTeamId(): number;
  setTeamId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerStatisticsAccordingRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerStatisticsAccordingRoleRequest): PlayerStatisticsAccordingRoleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerStatisticsAccordingRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerStatisticsAccordingRoleRequest;
  static deserializeBinaryFromReader(message: PlayerStatisticsAccordingRoleRequest, reader: jspb.BinaryReader): PlayerStatisticsAccordingRoleRequest;
}

export namespace PlayerStatisticsAccordingRoleRequest {
  export type AsObject = {
    sportId: number,
    timeframe: TimeframeMap[keyof TimeframeMap],
    role: string,
    teamId: number,
  }
}

export class SportsResponse extends jspb.Message {
  clearSportsList(): void;
  getSportsList(): Array<Sport>;
  setSportsList(value: Array<Sport>): void;
  addSports(value?: Sport, index?: number): Sport;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SportsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SportsResponse): SportsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SportsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SportsResponse;
  static deserializeBinaryFromReader(message: SportsResponse, reader: jspb.BinaryReader): SportsResponse;
}

export namespace SportsResponse {
  export type AsObject = {
    sportsList: Array<Sport.AsObject>,
  }
}

export class TournamentResponse extends jspb.Message {
  clearTournamentsList(): void;
  getTournamentsList(): Array<Tournament>;
  setTournamentsList(value: Array<Tournament>): void;
  addTournaments(value?: Tournament, index?: number): Tournament;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TournamentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TournamentResponse): TournamentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TournamentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TournamentResponse;
  static deserializeBinaryFromReader(message: TournamentResponse, reader: jspb.BinaryReader): TournamentResponse;
}

export namespace TournamentResponse {
  export type AsObject = {
    tournamentsList: Array<Tournament.AsObject>,
  }
}

export class HistoricalStatisticsResponse extends jspb.Message {
  hasCsgoTeamStatistics(): boolean;
  clearCsgoTeamStatistics(): void;
  getCsgoTeamStatistics(): CsgoTeamStatistics | undefined;
  setCsgoTeamStatistics(value?: CsgoTeamStatistics): void;

  getOneofNameCase(): HistoricalStatisticsResponse.OneofNameCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HistoricalStatisticsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HistoricalStatisticsResponse): HistoricalStatisticsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HistoricalStatisticsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HistoricalStatisticsResponse;
  static deserializeBinaryFromReader(message: HistoricalStatisticsResponse, reader: jspb.BinaryReader): HistoricalStatisticsResponse;
}

export namespace HistoricalStatisticsResponse {
  export type AsObject = {
    csgoTeamStatistics?: CsgoTeamStatistics.AsObject,
  }

  export enum OneofNameCase {
    ONEOF_NAME_NOT_SET = 0,
    CSGO_TEAM_STATISTICS = 1,
  }
}

export class LastFiveEncountersResponse extends jspb.Message {
  clearMatchesList(): void;
  getMatchesList(): Array<Match>;
  setMatchesList(value: Array<Match>): void;
  addMatches(value?: Match, index?: number): Match;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LastFiveEncountersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LastFiveEncountersResponse): LastFiveEncountersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LastFiveEncountersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LastFiveEncountersResponse;
  static deserializeBinaryFromReader(message: LastFiveEncountersResponse, reader: jspb.BinaryReader): LastFiveEncountersResponse;
}

export namespace LastFiveEncountersResponse {
  export type AsObject = {
    matchesList: Array<Match.AsObject>,
  }
}

export class PostMapStatisticsResponse extends jspb.Message {
  hasCsgoPostMapStatistics(): boolean;
  clearCsgoPostMapStatistics(): void;
  getCsgoPostMapStatistics(): CsgoPostMapStatistics | undefined;
  setCsgoPostMapStatistics(value?: CsgoPostMapStatistics): void;

  getOneofNameCase(): PostMapStatisticsResponse.OneofNameCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostMapStatisticsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostMapStatisticsResponse): PostMapStatisticsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostMapStatisticsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostMapStatisticsResponse;
  static deserializeBinaryFromReader(message: PostMapStatisticsResponse, reader: jspb.BinaryReader): PostMapStatisticsResponse;
}

export namespace PostMapStatisticsResponse {
  export type AsObject = {
    csgoPostMapStatistics?: CsgoPostMapStatistics.AsObject,
  }

  export enum OneofNameCase {
    ONEOF_NAME_NOT_SET = 0,
    CSGO_POST_MAP_STATISTICS = 1,
  }
}

export class TournamentInfoResponse extends jspb.Message {
  hasCsgoTournamentInfo(): boolean;
  clearCsgoTournamentInfo(): void;
  getCsgoTournamentInfo(): CsgoTournamentInfo | undefined;
  setCsgoTournamentInfo(value?: CsgoTournamentInfo): void;

  getOneofNameCase(): TournamentInfoResponse.OneofNameCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TournamentInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TournamentInfoResponse): TournamentInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TournamentInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TournamentInfoResponse;
  static deserializeBinaryFromReader(message: TournamentInfoResponse, reader: jspb.BinaryReader): TournamentInfoResponse;
}

export namespace TournamentInfoResponse {
  export type AsObject = {
    csgoTournamentInfo?: CsgoTournamentInfo.AsObject,
  }

  export enum OneofNameCase {
    ONEOF_NAME_NOT_SET = 0,
    CSGO_TOURNAMENT_INFO = 1,
  }
}

export class TournamentStatisticsResponse extends jspb.Message {
  hasCsgoTournamentStatistics(): boolean;
  clearCsgoTournamentStatistics(): void;
  getCsgoTournamentStatistics(): CsgoTournamentStatistics | undefined;
  setCsgoTournamentStatistics(value?: CsgoTournamentStatistics): void;

  getOneofNameCase(): TournamentStatisticsResponse.OneofNameCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TournamentStatisticsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TournamentStatisticsResponse): TournamentStatisticsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TournamentStatisticsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TournamentStatisticsResponse;
  static deserializeBinaryFromReader(message: TournamentStatisticsResponse, reader: jspb.BinaryReader): TournamentStatisticsResponse;
}

export namespace TournamentStatisticsResponse {
  export type AsObject = {
    csgoTournamentStatistics?: CsgoTournamentStatistics.AsObject,
  }

  export enum OneofNameCase {
    ONEOF_NAME_NOT_SET = 0,
    CSGO_TOURNAMENT_STATISTICS = 1,
  }
}

export class TeamTournamentStatisticsResponse extends jspb.Message {
  hasCsgoTeamsTournamentStatistics(): boolean;
  clearCsgoTeamsTournamentStatistics(): void;
  getCsgoTeamsTournamentStatistics(): CsgoTeamStatistics | undefined;
  setCsgoTeamsTournamentStatistics(value?: CsgoTeamStatistics): void;

  getOneofNameCase(): TeamTournamentStatisticsResponse.OneofNameCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamTournamentStatisticsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TeamTournamentStatisticsResponse): TeamTournamentStatisticsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TeamTournamentStatisticsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamTournamentStatisticsResponse;
  static deserializeBinaryFromReader(message: TeamTournamentStatisticsResponse, reader: jspb.BinaryReader): TeamTournamentStatisticsResponse;
}

export namespace TeamTournamentStatisticsResponse {
  export type AsObject = {
    csgoTeamsTournamentStatistics?: CsgoTeamStatistics.AsObject,
  }

  export enum OneofNameCase {
    ONEOF_NAME_NOT_SET = 0,
    CSGO_TEAMS_TOURNAMENT_STATISTICS = 1,
  }
}

export class PlayerStatisticsAccordingRoleResponse extends jspb.Message {
  hasCsgoPlayerStatistics(): boolean;
  clearCsgoPlayerStatistics(): void;
  getCsgoPlayerStatistics(): CsgoPlayerStatistics | undefined;
  setCsgoPlayerStatistics(value?: CsgoPlayerStatistics): void;

  getOneofNameCase(): PlayerStatisticsAccordingRoleResponse.OneofNameCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerStatisticsAccordingRoleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerStatisticsAccordingRoleResponse): PlayerStatisticsAccordingRoleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerStatisticsAccordingRoleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerStatisticsAccordingRoleResponse;
  static deserializeBinaryFromReader(message: PlayerStatisticsAccordingRoleResponse, reader: jspb.BinaryReader): PlayerStatisticsAccordingRoleResponse;
}

export namespace PlayerStatisticsAccordingRoleResponse {
  export type AsObject = {
    csgoPlayerStatistics?: CsgoPlayerStatistics.AsObject,
  }

  export enum OneofNameCase {
    ONEOF_NAME_NOT_SET = 0,
    CSGO_PLAYER_STATISTICS = 1,
  }
}

export class CsgoTeamStatistics extends jspb.Message {
  hasTeam(): boolean;
  clearTeam(): void;
  getTeam(): Team | undefined;
  setTeam(value?: Team): void;

  clearPlayerStatisticsList(): void;
  getPlayerStatisticsList(): Array<CsgoPlayerStatistics>;
  setPlayerStatisticsList(value: Array<CsgoPlayerStatistics>): void;
  addPlayerStatistics(value?: CsgoPlayerStatistics, index?: number): CsgoPlayerStatistics;

  hasMapVote(): boolean;
  clearMapVote(): void;
  getMapVote(): CsgoMapVote | undefined;
  setMapVote(value?: CsgoMapVote): void;

  clearMapWinrateList(): void;
  getMapWinrateList(): Array<CsgoMapStatistics>;
  setMapWinrateList(value: Array<CsgoMapStatistics>): void;
  addMapWinrate(value?: CsgoMapStatistics, index?: number): CsgoMapStatistics;

  clearRoundWinrateList(): void;
  getRoundWinrateList(): Array<CsgoMapStatisticsAccordingSide>;
  setRoundWinrateList(value: Array<CsgoMapStatisticsAccordingSide>): void;
  addRoundWinrate(value?: CsgoMapStatisticsAccordingSide, index?: number): CsgoMapStatisticsAccordingSide;

  hasOverallMapWinrate(): boolean;
  clearOverallMapWinrate(): void;
  getOverallMapWinrate(): StatisticsValues | undefined;
  setOverallMapWinrate(value?: StatisticsValues): void;

  hasOverallRoundWinrate(): boolean;
  clearOverallRoundWinrate(): void;
  getOverallRoundWinrate(): CsgoStatisticsSideValues | undefined;
  setOverallRoundWinrate(value?: CsgoStatisticsSideValues): void;

  hasPistolWinrate(): boolean;
  clearPistolWinrate(): void;
  getPistolWinrate(): CsgoStatisticsSideValues | undefined;
  setPistolWinrate(value?: CsgoStatisticsSideValues): void;

  hasPistolWinConversion(): boolean;
  clearPistolWinConversion(): void;
  getPistolWinConversion(): CsgoStatisticsSideValues | undefined;
  setPistolWinConversion(value?: CsgoStatisticsSideValues): void;

  hasPistolLossConversion(): boolean;
  clearPistolLossConversion(): void;
  getPistolLossConversion(): CsgoStatisticsSideValues | undefined;
  setPistolLossConversion(value?: CsgoStatisticsSideValues): void;

  hasKills(): boolean;
  clearKills(): void;
  getKills(): CsgoStatisticsSideValues | undefined;
  setKills(value?: CsgoStatisticsSideValues): void;

  hasDeaths(): boolean;
  clearDeaths(): void;
  getDeaths(): CsgoStatisticsSideValues | undefined;
  setDeaths(value?: CsgoStatisticsSideValues): void;

  hasKillsOverDeaths(): boolean;
  clearKillsOverDeaths(): void;
  getKillsOverDeaths(): CsgoStatisticsSideValues | undefined;
  setKillsOverDeaths(value?: CsgoStatisticsSideValues): void;

  hasAssists(): boolean;
  clearAssists(): void;
  getAssists(): CsgoStatisticsSideValues | undefined;
  setAssists(value?: CsgoStatisticsSideValues): void;

  hasFlashAssists(): boolean;
  clearFlashAssists(): void;
  getFlashAssists(): CsgoStatisticsSideValues | undefined;
  setFlashAssists(value?: CsgoStatisticsSideValues): void;

  hasDamage(): boolean;
  clearDamage(): void;
  getDamage(): CsgoStatisticsSideValues | undefined;
  setDamage(value?: CsgoStatisticsSideValues): void;

  hasHeadshotRate(): boolean;
  clearHeadshotRate(): void;
  getHeadshotRate(): CsgoStatisticsSideValues | undefined;
  setHeadshotRate(value?: CsgoStatisticsSideValues): void;

  hasOpeningKills(): boolean;
  clearOpeningKills(): void;
  getOpeningKills(): CsgoStatisticsSideValues | undefined;
  setOpeningKills(value?: CsgoStatisticsSideValues): void;

  hasOpeningConversion(): boolean;
  clearOpeningConversion(): void;
  getOpeningConversion(): CsgoStatisticsSideValues | undefined;
  setOpeningConversion(value?: CsgoStatisticsSideValues): void;

  hasOpeningDeathConversion(): boolean;
  clearOpeningDeathConversion(): void;
  getOpeningDeathConversion(): CsgoStatisticsSideValues | undefined;
  setOpeningDeathConversion(value?: CsgoStatisticsSideValues): void;

  hasAwpKills(): boolean;
  clearAwpKills(): void;
  getAwpKills(): CsgoStatisticsSideValues | undefined;
  setAwpKills(value?: CsgoStatisticsSideValues): void;

  hasEliminationWinrate(): boolean;
  clearEliminationWinrate(): void;
  getEliminationWinrate(): CsgoStatisticsSideValues | undefined;
  setEliminationWinrate(value?: CsgoStatisticsSideValues): void;

  hasObjectiveWinrate(): boolean;
  clearObjectiveWinrate(): void;
  getObjectiveWinrate(): CsgoStatisticsSideValues | undefined;
  setObjectiveWinrate(value?: CsgoStatisticsSideValues): void;

  hasUtilityDamage(): boolean;
  clearUtilityDamage(): void;
  getUtilityDamage(): CsgoStatisticsSideValues | undefined;
  setUtilityDamage(value?: CsgoStatisticsSideValues): void;

  hasFirstToWin3Rounds(): boolean;
  clearFirstToWin3Rounds(): void;
  getFirstToWin3Rounds(): CsgoStatisticsSideValues | undefined;
  setFirstToWin3Rounds(value?: CsgoStatisticsSideValues): void;

  hasFirstToWin6Rounds(): boolean;
  clearFirstToWin6Rounds(): void;
  getFirstToWin6Rounds(): CsgoStatisticsSideValues | undefined;
  setFirstToWin6Rounds(value?: CsgoStatisticsSideValues): void;

  hasFirstToWin9Rounds(): boolean;
  clearFirstToWin9Rounds(): void;
  getFirstToWin9Rounds(): CsgoStatisticsSideValues | undefined;
  setFirstToWin9Rounds(value?: CsgoStatisticsSideValues): void;

  hasFirstToWin12Rounds(): boolean;
  clearFirstToWin12Rounds(): void;
  getFirstToWin12Rounds(): CsgoStatisticsSideValues | undefined;
  setFirstToWin12Rounds(value?: CsgoStatisticsSideValues): void;

  hasRoundsLost(): boolean;
  clearRoundsLost(): void;
  getRoundsLost(): CsgoStatisticsSideValues | undefined;
  setRoundsLost(value?: CsgoStatisticsSideValues): void;

  clearFavouriteWeaponsList(): void;
  getFavouriteWeaponsList(): Array<CsgoWeaponStatistics>;
  setFavouriteWeaponsList(value: Array<CsgoWeaponStatistics>): void;
  addFavouriteWeapons(value?: CsgoWeaponStatistics, index?: number): CsgoWeaponStatistics;

  clearFormList(): void;
  getFormList(): Array<Match>;
  setFormList(value: Array<Match>): void;
  addForm(value?: Match, index?: number): Match;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoTeamStatistics.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoTeamStatistics): CsgoTeamStatistics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoTeamStatistics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoTeamStatistics;
  static deserializeBinaryFromReader(message: CsgoTeamStatistics, reader: jspb.BinaryReader): CsgoTeamStatistics;
}

export namespace CsgoTeamStatistics {
  export type AsObject = {
    team?: Team.AsObject,
    playerStatisticsList: Array<CsgoPlayerStatistics.AsObject>,
    mapVote?: CsgoMapVote.AsObject,
    mapWinrateList: Array<CsgoMapStatistics.AsObject>,
    roundWinrateList: Array<CsgoMapStatisticsAccordingSide.AsObject>,
    overallMapWinrate?: StatisticsValues.AsObject,
    overallRoundWinrate?: CsgoStatisticsSideValues.AsObject,
    pistolWinrate?: CsgoStatisticsSideValues.AsObject,
    pistolWinConversion?: CsgoStatisticsSideValues.AsObject,
    pistolLossConversion?: CsgoStatisticsSideValues.AsObject,
    kills?: CsgoStatisticsSideValues.AsObject,
    deaths?: CsgoStatisticsSideValues.AsObject,
    killsOverDeaths?: CsgoStatisticsSideValues.AsObject,
    assists?: CsgoStatisticsSideValues.AsObject,
    flashAssists?: CsgoStatisticsSideValues.AsObject,
    damage?: CsgoStatisticsSideValues.AsObject,
    headshotRate?: CsgoStatisticsSideValues.AsObject,
    openingKills?: CsgoStatisticsSideValues.AsObject,
    openingConversion?: CsgoStatisticsSideValues.AsObject,
    openingDeathConversion?: CsgoStatisticsSideValues.AsObject,
    awpKills?: CsgoStatisticsSideValues.AsObject,
    eliminationWinrate?: CsgoStatisticsSideValues.AsObject,
    objectiveWinrate?: CsgoStatisticsSideValues.AsObject,
    utilityDamage?: CsgoStatisticsSideValues.AsObject,
    firstToWin3Rounds?: CsgoStatisticsSideValues.AsObject,
    firstToWin6Rounds?: CsgoStatisticsSideValues.AsObject,
    firstToWin9Rounds?: CsgoStatisticsSideValues.AsObject,
    firstToWin12Rounds?: CsgoStatisticsSideValues.AsObject,
    roundsLost?: CsgoStatisticsSideValues.AsObject,
    favouriteWeaponsList: Array<CsgoWeaponStatistics.AsObject>,
    formList: Array<Match.AsObject>,
  }
}

export class CsgoPlayerStatistics extends jspb.Message {
  hasPlayer(): boolean;
  clearPlayer(): void;
  getPlayer(): Player | undefined;
  setPlayer(value?: Player): void;

  hasKills(): boolean;
  clearKills(): void;
  getKills(): StatisticsValues | undefined;
  setKills(value?: StatisticsValues): void;

  hasDeaths(): boolean;
  clearDeaths(): void;
  getDeaths(): StatisticsValues | undefined;
  setDeaths(value?: StatisticsValues): void;

  hasAssists(): boolean;
  clearAssists(): void;
  getAssists(): StatisticsValues | undefined;
  setAssists(value?: StatisticsValues): void;

  hasKillsOverDeaths(): boolean;
  clearKillsOverDeaths(): void;
  getKillsOverDeaths(): StatisticsValues | undefined;
  setKillsOverDeaths(value?: StatisticsValues): void;

  hasDamage(): boolean;
  clearDamage(): void;
  getDamage(): StatisticsValues | undefined;
  setDamage(value?: StatisticsValues): void;

  hasHeadshotRate(): boolean;
  clearHeadshotRate(): void;
  getHeadshotRate(): StatisticsValues | undefined;
  setHeadshotRate(value?: StatisticsValues): void;

  hasFlashAssists(): boolean;
  clearFlashAssists(): void;
  getFlashAssists(): StatisticsValues | undefined;
  setFlashAssists(value?: StatisticsValues): void;

  hasOpeningKills(): boolean;
  clearOpeningKills(): void;
  getOpeningKills(): StatisticsValues | undefined;
  setOpeningKills(value?: StatisticsValues): void;

  hasAwpKills(): boolean;
  clearAwpKills(): void;
  getAwpKills(): StatisticsValues | undefined;
  setAwpKills(value?: StatisticsValues): void;

  hasUtilityDamage(): boolean;
  clearUtilityDamage(): void;
  getUtilityDamage(): StatisticsValues | undefined;
  setUtilityDamage(value?: StatisticsValues): void;

  hasEnemiesFlashed(): boolean;
  clearEnemiesFlashed(): void;
  getEnemiesFlashed(): StatisticsValues | undefined;
  setEnemiesFlashed(value?: StatisticsValues): void;

  hasMultiKillRounds(): boolean;
  clearMultiKillRounds(): void;
  getMultiKillRounds(): StatisticsValues | undefined;
  setMultiKillRounds(value?: StatisticsValues): void;

  hasClutchRounds(): boolean;
  clearClutchRounds(): void;
  getClutchRounds(): StatisticsValues | undefined;
  setClutchRounds(value?: StatisticsValues): void;

  hasLurkKills(): boolean;
  clearLurkKills(): void;
  getLurkKills(): StatisticsValues | undefined;
  setLurkKills(value?: StatisticsValues): void;

  hasGrenadesUsed(): boolean;
  clearGrenadesUsed(): void;
  getGrenadesUsed(): StatisticsValues | undefined;
  setGrenadesUsed(value?: StatisticsValues): void;

  clearFavouriteWeaponsList(): void;
  getFavouriteWeaponsList(): Array<CsgoWeaponStatistics>;
  setFavouriteWeaponsList(value: Array<CsgoWeaponStatistics>): void;
  addFavouriteWeapons(value?: CsgoWeaponStatistics, index?: number): CsgoWeaponStatistics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoPlayerStatistics.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoPlayerStatistics): CsgoPlayerStatistics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoPlayerStatistics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoPlayerStatistics;
  static deserializeBinaryFromReader(message: CsgoPlayerStatistics, reader: jspb.BinaryReader): CsgoPlayerStatistics;
}

export namespace CsgoPlayerStatistics {
  export type AsObject = {
    player?: Player.AsObject,
    kills?: StatisticsValues.AsObject,
    deaths?: StatisticsValues.AsObject,
    assists?: StatisticsValues.AsObject,
    killsOverDeaths?: StatisticsValues.AsObject,
    damage?: StatisticsValues.AsObject,
    headshotRate?: StatisticsValues.AsObject,
    flashAssists?: StatisticsValues.AsObject,
    openingKills?: StatisticsValues.AsObject,
    awpKills?: StatisticsValues.AsObject,
    utilityDamage?: StatisticsValues.AsObject,
    enemiesFlashed?: StatisticsValues.AsObject,
    multiKillRounds?: StatisticsValues.AsObject,
    clutchRounds?: StatisticsValues.AsObject,
    lurkKills?: StatisticsValues.AsObject,
    grenadesUsed?: StatisticsValues.AsObject,
    favouriteWeaponsList: Array<CsgoWeaponStatistics.AsObject>,
  }
}

export class CsgoPostMapStatistics extends jspb.Message {
  hasMap(): boolean;
  clearMap(): void;
  getMap(): CsgoMap | undefined;
  setMap(value?: CsgoMap): void;

  hasHomeTeamStatistics(): boolean;
  clearHomeTeamStatistics(): void;
  getHomeTeamStatistics(): CsgoTeamPostMapStatistics | undefined;
  setHomeTeamStatistics(value?: CsgoTeamPostMapStatistics): void;

  hasAwayTeamStatistics(): boolean;
  clearAwayTeamStatistics(): void;
  getAwayTeamStatistics(): CsgoTeamPostMapStatistics | undefined;
  setAwayTeamStatistics(value?: CsgoTeamPostMapStatistics): void;

  clearDuelsList(): void;
  getDuelsList(): Array<CsgoPlayersDuel>;
  setDuelsList(value: Array<CsgoPlayersDuel>): void;
  addDuels(value?: CsgoPlayersDuel, index?: number): CsgoPlayersDuel;

  clearRoundsList(): void;
  getRoundsList(): Array<CsgoRoundPostmap>;
  setRoundsList(value: Array<CsgoRoundPostmap>): void;
  addRounds(value?: CsgoRoundPostmap, index?: number): CsgoRoundPostmap;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoPostMapStatistics.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoPostMapStatistics): CsgoPostMapStatistics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoPostMapStatistics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoPostMapStatistics;
  static deserializeBinaryFromReader(message: CsgoPostMapStatistics, reader: jspb.BinaryReader): CsgoPostMapStatistics;
}

export namespace CsgoPostMapStatistics {
  export type AsObject = {
    map?: CsgoMap.AsObject,
    homeTeamStatistics?: CsgoTeamPostMapStatistics.AsObject,
    awayTeamStatistics?: CsgoTeamPostMapStatistics.AsObject,
    duelsList: Array<CsgoPlayersDuel.AsObject>,
    roundsList: Array<CsgoRoundPostmap.AsObject>,
  }
}

export class CsgoTournamentInfo extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasTournament(): boolean;
  clearTournament(): void;
  getTournament(): Tournament | undefined;
  setTournament(value?: Tournament): void;

  hasOrganizer(): boolean;
  clearOrganizer(): void;
  getOrganizer(): string;
  setOrganizer(value: string): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): string;
  setLocation(value: string): void;

  hasPrizePool(): boolean;
  clearPrizePool(): void;
  getPrizePool(): string;
  setPrizePool(value: string): void;

  hasIsOffline(): boolean;
  clearIsOffline(): void;
  getIsOffline(): boolean;
  setIsOffline(value: boolean): void;

  hasIsQualification(): boolean;
  clearIsQualification(): void;
  getIsQualification(): boolean;
  setIsQualification(value: boolean): void;

  clearTeamsList(): void;
  getTeamsList(): Array<CsgoTeam>;
  setTeamsList(value: Array<CsgoTeam>): void;
  addTeams(value?: CsgoTeam, index?: number): CsgoTeam;

  clearMatchesList(): void;
  getMatchesList(): Array<Match>;
  setMatchesList(value: Array<Match>): void;
  addMatches(value?: Match, index?: number): Match;

  clearBlocksList(): void;
  getBlocksList(): Array<CsgoTournamentBlock>;
  setBlocksList(value: Array<CsgoTournamentBlock>): void;
  addBlocks(value?: CsgoTournamentBlock, index?: number): CsgoTournamentBlock;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoTournamentInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoTournamentInfo): CsgoTournamentInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoTournamentInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoTournamentInfo;
  static deserializeBinaryFromReader(message: CsgoTournamentInfo, reader: jspb.BinaryReader): CsgoTournamentInfo;
}

export namespace CsgoTournamentInfo {
  export type AsObject = {
    id: number,
    tournament?: Tournament.AsObject,
    organizer: string,
    location: string,
    prizePool: string,
    isOffline: boolean,
    isQualification: boolean,
    teamsList: Array<CsgoTeam.AsObject>,
    matchesList: Array<Match.AsObject>,
    blocksList: Array<CsgoTournamentBlock.AsObject>,
  }
}

export class CsgoTournamentStatistics extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasTournament(): boolean;
  clearTournament(): void;
  getTournament(): Tournament | undefined;
  setTournament(value?: Tournament): void;

  hasTerroristsWinrateInPercent(): boolean;
  clearTerroristsWinrateInPercent(): void;
  getTerroristsWinrateInPercent(): number;
  setTerroristsWinrateInPercent(value: number): void;

  hasCounterTerroristsWinrateInPercent(): boolean;
  clearCounterTerroristsWinrateInPercent(): void;
  getCounterTerroristsWinrateInPercent(): number;
  setCounterTerroristsWinrateInPercent(value: number): void;

  hasBestTeams(): boolean;
  clearBestTeams(): void;
  getBestTeams(): CsgoTournamentBestTeamStatistics | undefined;
  setBestTeams(value?: CsgoTournamentBestTeamStatistics): void;

  hasBestPlayers(): boolean;
  clearBestPlayers(): void;
  getBestPlayers(): CsgoTournamentBestPlayerStatistics | undefined;
  setBestPlayers(value?: CsgoTournamentBestPlayerStatistics): void;

  clearTournamentMapsStatisticsList(): void;
  getTournamentMapsStatisticsList(): Array<CsgoTournamentMapStatistics>;
  setTournamentMapsStatisticsList(value: Array<CsgoTournamentMapStatistics>): void;
  addTournamentMapsStatistics(value?: CsgoTournamentMapStatistics, index?: number): CsgoTournamentMapStatistics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoTournamentStatistics.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoTournamentStatistics): CsgoTournamentStatistics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoTournamentStatistics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoTournamentStatistics;
  static deserializeBinaryFromReader(message: CsgoTournamentStatistics, reader: jspb.BinaryReader): CsgoTournamentStatistics;
}

export namespace CsgoTournamentStatistics {
  export type AsObject = {
    id: number,
    tournament?: Tournament.AsObject,
    terroristsWinrateInPercent: number,
    counterTerroristsWinrateInPercent: number,
    bestTeams?: CsgoTournamentBestTeamStatistics.AsObject,
    bestPlayers?: CsgoTournamentBestPlayerStatistics.AsObject,
    tournamentMapsStatisticsList: Array<CsgoTournamentMapStatistics.AsObject>,
  }
}

export class CsgoTeamPostMapStatistics extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasTeam(): boolean;
  clearTeam(): void;
  getTeam(): Team | undefined;
  setTeam(value?: Team): void;

  clearPlayersStatisticsList(): void;
  getPlayersStatisticsList(): Array<CsgoPlayerPostMapStatistics>;
  setPlayersStatisticsList(value: Array<CsgoPlayerPostMapStatistics>): void;
  addPlayersStatistics(value?: CsgoPlayerPostMapStatistics, index?: number): CsgoPlayerPostMapStatistics;

  getRoundsWon(): number;
  setRoundsWon(value: number): void;

  getRoundsLost(): number;
  setRoundsLost(value: number): void;

  hasKills(): boolean;
  clearKills(): void;
  getKills(): PostMapStatisticsValues | undefined;
  setKills(value?: PostMapStatisticsValues): void;

  hasDeaths(): boolean;
  clearDeaths(): void;
  getDeaths(): PostMapStatisticsValues | undefined;
  setDeaths(value?: PostMapStatisticsValues): void;

  hasAssists(): boolean;
  clearAssists(): void;
  getAssists(): PostMapStatisticsValues | undefined;
  setAssists(value?: PostMapStatisticsValues): void;

  hasKillsOverDeaths(): boolean;
  clearKillsOverDeaths(): void;
  getKillsOverDeaths(): PostMapStatisticsValues | undefined;
  setKillsOverDeaths(value?: PostMapStatisticsValues): void;

  hasDamage(): boolean;
  clearDamage(): void;
  getDamage(): PostMapStatisticsValues | undefined;
  setDamage(value?: PostMapStatisticsValues): void;

  hasHeadshotRate(): boolean;
  clearHeadshotRate(): void;
  getHeadshotRate(): PostMapStatisticsValues | undefined;
  setHeadshotRate(value?: PostMapStatisticsValues): void;

  hasFlashAssists(): boolean;
  clearFlashAssists(): void;
  getFlashAssists(): PostMapStatisticsValues | undefined;
  setFlashAssists(value?: PostMapStatisticsValues): void;

  hasOpeningKills(): boolean;
  clearOpeningKills(): void;
  getOpeningKills(): PostMapStatisticsValues | undefined;
  setOpeningKills(value?: PostMapStatisticsValues): void;

  hasKillsDifference(): boolean;
  clearKillsDifference(): void;
  getKillsDifference(): PostMapStatisticsValues | undefined;
  setKillsDifference(value?: PostMapStatisticsValues): void;

  hasKillCost(): boolean;
  clearKillCost(): void;
  getKillCost(): PostMapStatisticsValues | undefined;
  setKillCost(value?: PostMapStatisticsValues): void;

  hasAccuracyRate(): boolean;
  clearAccuracyRate(): void;
  getAccuracyRate(): PostMapStatisticsValues | undefined;
  setAccuracyRate(value?: PostMapStatisticsValues): void;

  hasKillsWithDroppedWeapons(): boolean;
  clearKillsWithDroppedWeapons(): void;
  getKillsWithDroppedWeapons(): PostMapStatisticsValues | undefined;
  setKillsWithDroppedWeapons(value?: PostMapStatisticsValues): void;

  clearFavouriteWeaponsList(): void;
  getFavouriteWeaponsList(): Array<CsgoWeaponPostMapStatistics>;
  setFavouriteWeaponsList(value: Array<CsgoWeaponPostMapStatistics>): void;
  addFavouriteWeapons(value?: CsgoWeaponPostMapStatistics, index?: number): CsgoWeaponPostMapStatistics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoTeamPostMapStatistics.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoTeamPostMapStatistics): CsgoTeamPostMapStatistics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoTeamPostMapStatistics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoTeamPostMapStatistics;
  static deserializeBinaryFromReader(message: CsgoTeamPostMapStatistics, reader: jspb.BinaryReader): CsgoTeamPostMapStatistics;
}

export namespace CsgoTeamPostMapStatistics {
  export type AsObject = {
    id: number,
    team?: Team.AsObject,
    playersStatisticsList: Array<CsgoPlayerPostMapStatistics.AsObject>,
    roundsWon: number,
    roundsLost: number,
    kills?: PostMapStatisticsValues.AsObject,
    deaths?: PostMapStatisticsValues.AsObject,
    assists?: PostMapStatisticsValues.AsObject,
    killsOverDeaths?: PostMapStatisticsValues.AsObject,
    damage?: PostMapStatisticsValues.AsObject,
    headshotRate?: PostMapStatisticsValues.AsObject,
    flashAssists?: PostMapStatisticsValues.AsObject,
    openingKills?: PostMapStatisticsValues.AsObject,
    killsDifference?: PostMapStatisticsValues.AsObject,
    killCost?: PostMapStatisticsValues.AsObject,
    accuracyRate?: PostMapStatisticsValues.AsObject,
    killsWithDroppedWeapons?: PostMapStatisticsValues.AsObject,
    favouriteWeaponsList: Array<CsgoWeaponPostMapStatistics.AsObject>,
  }
}

export class CsgoPlayerPostMapStatistics extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasPlayer(): boolean;
  clearPlayer(): void;
  getPlayer(): Player | undefined;
  setPlayer(value?: Player): void;

  getPlayerMapRole(): CsgoPlayerRoleMap[keyof CsgoPlayerRoleMap];
  setPlayerMapRole(value: CsgoPlayerRoleMap[keyof CsgoPlayerRoleMap]): void;

  hasKills(): boolean;
  clearKills(): void;
  getKills(): PostMapStatisticsValues | undefined;
  setKills(value?: PostMapStatisticsValues): void;

  hasDeaths(): boolean;
  clearDeaths(): void;
  getDeaths(): PostMapStatisticsValues | undefined;
  setDeaths(value?: PostMapStatisticsValues): void;

  hasAssists(): boolean;
  clearAssists(): void;
  getAssists(): PostMapStatisticsValues | undefined;
  setAssists(value?: PostMapStatisticsValues): void;

  hasRoundsSurvived(): boolean;
  clearRoundsSurvived(): void;
  getRoundsSurvived(): PostMapStatisticsValues | undefined;
  setRoundsSurvived(value?: PostMapStatisticsValues): void;

  hasKillsOverDeaths(): boolean;
  clearKillsOverDeaths(): void;
  getKillsOverDeaths(): PostMapStatisticsValues | undefined;
  setKillsOverDeaths(value?: PostMapStatisticsValues): void;

  hasDamage(): boolean;
  clearDamage(): void;
  getDamage(): PostMapStatisticsValues | undefined;
  setDamage(value?: PostMapStatisticsValues): void;

  hasHeadshotRate(): boolean;
  clearHeadshotRate(): void;
  getHeadshotRate(): PostMapStatisticsValues | undefined;
  setHeadshotRate(value?: PostMapStatisticsValues): void;

  hasFlashAssists(): boolean;
  clearFlashAssists(): void;
  getFlashAssists(): PostMapStatisticsValues | undefined;
  setFlashAssists(value?: PostMapStatisticsValues): void;

  hasOpeningKills(): boolean;
  clearOpeningKills(): void;
  getOpeningKills(): PostMapStatisticsValues | undefined;
  setOpeningKills(value?: PostMapStatisticsValues): void;

  hasClutchRounds(): boolean;
  clearClutchRounds(): void;
  getClutchRounds(): PostMapStatisticsValues | undefined;
  setClutchRounds(value?: PostMapStatisticsValues): void;

  hasUtilityDamage(): boolean;
  clearUtilityDamage(): void;
  getUtilityDamage(): PostMapStatisticsValues | undefined;
  setUtilityDamage(value?: PostMapStatisticsValues): void;

  hasGrenadesUsed(): boolean;
  clearGrenadesUsed(): void;
  getGrenadesUsed(): PostMapStatisticsValues | undefined;
  setGrenadesUsed(value?: PostMapStatisticsValues): void;

  hasEnemiesFlashed(): boolean;
  clearEnemiesFlashed(): void;
  getEnemiesFlashed(): PostMapStatisticsValues | undefined;
  setEnemiesFlashed(value?: PostMapStatisticsValues): void;

  hasAwpKills(): boolean;
  clearAwpKills(): void;
  getAwpKills(): PostMapStatisticsValues | undefined;
  setAwpKills(value?: PostMapStatisticsValues): void;

  hasLurkKills(): boolean;
  clearLurkKills(): void;
  getLurkKills(): PostMapStatisticsValues | undefined;
  setLurkKills(value?: PostMapStatisticsValues): void;

  hasKillsDifference(): boolean;
  clearKillsDifference(): void;
  getKillsDifference(): PostMapStatisticsValues | undefined;
  setKillsDifference(value?: PostMapStatisticsValues): void;

  hasKillCost(): boolean;
  clearKillCost(): void;
  getKillCost(): PostMapStatisticsValues | undefined;
  setKillCost(value?: PostMapStatisticsValues): void;

  hasAccuracyRate(): boolean;
  clearAccuracyRate(): void;
  getAccuracyRate(): PostMapStatisticsValues | undefined;
  setAccuracyRate(value?: PostMapStatisticsValues): void;

  clearFavouriteWeaponsList(): void;
  getFavouriteWeaponsList(): Array<CsgoWeaponPostMapStatistics>;
  setFavouriteWeaponsList(value: Array<CsgoWeaponPostMapStatistics>): void;
  addFavouriteWeapons(value?: CsgoWeaponPostMapStatistics, index?: number): CsgoWeaponPostMapStatistics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoPlayerPostMapStatistics.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoPlayerPostMapStatistics): CsgoPlayerPostMapStatistics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoPlayerPostMapStatistics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoPlayerPostMapStatistics;
  static deserializeBinaryFromReader(message: CsgoPlayerPostMapStatistics, reader: jspb.BinaryReader): CsgoPlayerPostMapStatistics;
}

export namespace CsgoPlayerPostMapStatistics {
  export type AsObject = {
    id: number,
    player?: Player.AsObject,
    playerMapRole: CsgoPlayerRoleMap[keyof CsgoPlayerRoleMap],
    kills?: PostMapStatisticsValues.AsObject,
    deaths?: PostMapStatisticsValues.AsObject,
    assists?: PostMapStatisticsValues.AsObject,
    roundsSurvived?: PostMapStatisticsValues.AsObject,
    killsOverDeaths?: PostMapStatisticsValues.AsObject,
    damage?: PostMapStatisticsValues.AsObject,
    headshotRate?: PostMapStatisticsValues.AsObject,
    flashAssists?: PostMapStatisticsValues.AsObject,
    openingKills?: PostMapStatisticsValues.AsObject,
    clutchRounds?: PostMapStatisticsValues.AsObject,
    utilityDamage?: PostMapStatisticsValues.AsObject,
    grenadesUsed?: PostMapStatisticsValues.AsObject,
    enemiesFlashed?: PostMapStatisticsValues.AsObject,
    awpKills?: PostMapStatisticsValues.AsObject,
    lurkKills?: PostMapStatisticsValues.AsObject,
    killsDifference?: PostMapStatisticsValues.AsObject,
    killCost?: PostMapStatisticsValues.AsObject,
    accuracyRate?: PostMapStatisticsValues.AsObject,
    favouriteWeaponsList: Array<CsgoWeaponPostMapStatistics.AsObject>,
  }
}

export class CsgoRoundPostmap extends jspb.Message {
  getRound(): number;
  setRound(value: number): void;

  hasMap(): boolean;
  clearMap(): void;
  getMap(): Map | undefined;
  setMap(value?: Map): void;

  hasCsgoMap(): boolean;
  clearCsgoMap(): void;
  getCsgoMap(): CsgoMap | undefined;
  setCsgoMap(value?: CsgoMap): void;

  hasWinnerTeam(): boolean;
  clearWinnerTeam(): void;
  getWinnerTeam(): Team | undefined;
  setWinnerTeam(value?: Team): void;

  getWinnerSide(): CsgoSideMap[keyof CsgoSideMap];
  setWinnerSide(value: CsgoSideMap[keyof CsgoSideMap]): void;

  getRoundOutcome(): CsgoRoundOutcomeMap[keyof CsgoRoundOutcomeMap];
  setRoundOutcome(value: CsgoRoundOutcomeMap[keyof CsgoRoundOutcomeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoRoundPostmap.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoRoundPostmap): CsgoRoundPostmap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoRoundPostmap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoRoundPostmap;
  static deserializeBinaryFromReader(message: CsgoRoundPostmap, reader: jspb.BinaryReader): CsgoRoundPostmap;
}

export namespace CsgoRoundPostmap {
  export type AsObject = {
    round: number,
    map?: Map.AsObject,
    csgoMap?: CsgoMap.AsObject,
    winnerTeam?: Team.AsObject,
    winnerSide: CsgoSideMap[keyof CsgoSideMap],
    roundOutcome: CsgoRoundOutcomeMap[keyof CsgoRoundOutcomeMap],
  }
}

export class CsgoMapStatisticsAccordingSide extends jspb.Message {
  hasMap(): boolean;
  clearMap(): void;
  getMap(): CsgoMap | undefined;
  setMap(value?: CsgoMap): void;

  hasStatistics(): boolean;
  clearStatistics(): void;
  getStatistics(): CsgoStatisticsSideValues | undefined;
  setStatistics(value?: CsgoStatisticsSideValues): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoMapStatisticsAccordingSide.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoMapStatisticsAccordingSide): CsgoMapStatisticsAccordingSide.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoMapStatisticsAccordingSide, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoMapStatisticsAccordingSide;
  static deserializeBinaryFromReader(message: CsgoMapStatisticsAccordingSide, reader: jspb.BinaryReader): CsgoMapStatisticsAccordingSide;
}

export namespace CsgoMapStatisticsAccordingSide {
  export type AsObject = {
    map?: CsgoMap.AsObject,
    statistics?: CsgoStatisticsSideValues.AsObject,
  }
}

export class CsgoTournamentMapStatistics extends jspb.Message {
  hasMap(): boolean;
  clearMap(): void;
  getMap(): CsgoMap | undefined;
  setMap(value?: CsgoMap): void;

  getPicks(): number;
  setPicks(value: number): void;

  getBans(): number;
  setBans(value: number): void;

  hasTerroristsWinrateInPercent(): boolean;
  clearTerroristsWinrateInPercent(): void;
  getTerroristsWinrateInPercent(): number;
  setTerroristsWinrateInPercent(value: number): void;

  hasCounterTerroristsWinrateInPercent(): boolean;
  clearCounterTerroristsWinrateInPercent(): void;
  getCounterTerroristsWinrateInPercent(): number;
  setCounterTerroristsWinrateInPercent(value: number): void;

  hasBestTeams(): boolean;
  clearBestTeams(): void;
  getBestTeams(): CsgoTournamentBestTeamStatistics | undefined;
  setBestTeams(value?: CsgoTournamentBestTeamStatistics): void;

  hasBestPlayers(): boolean;
  clearBestPlayers(): void;
  getBestPlayers(): CsgoTournamentBestPlayerStatistics | undefined;
  setBestPlayers(value?: CsgoTournamentBestPlayerStatistics): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoTournamentMapStatistics.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoTournamentMapStatistics): CsgoTournamentMapStatistics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoTournamentMapStatistics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoTournamentMapStatistics;
  static deserializeBinaryFromReader(message: CsgoTournamentMapStatistics, reader: jspb.BinaryReader): CsgoTournamentMapStatistics;
}

export namespace CsgoTournamentMapStatistics {
  export type AsObject = {
    map?: CsgoMap.AsObject,
    picks: number,
    bans: number,
    terroristsWinrateInPercent: number,
    counterTerroristsWinrateInPercent: number,
    bestTeams?: CsgoTournamentBestTeamStatistics.AsObject,
    bestPlayers?: CsgoTournamentBestPlayerStatistics.AsObject,
  }
}

export class CsgoTournamentPlayerStatistics extends jspb.Message {
  hasPlayer(): boolean;
  clearPlayer(): void;
  getPlayer(): Player | undefined;
  setPlayer(value?: Player): void;

  hasTeam(): boolean;
  clearTeam(): void;
  getTeam(): Team | undefined;
  setTeam(value?: Team): void;

  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoTournamentPlayerStatistics.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoTournamentPlayerStatistics): CsgoTournamentPlayerStatistics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoTournamentPlayerStatistics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoTournamentPlayerStatistics;
  static deserializeBinaryFromReader(message: CsgoTournamentPlayerStatistics, reader: jspb.BinaryReader): CsgoTournamentPlayerStatistics;
}

export namespace CsgoTournamentPlayerStatistics {
  export type AsObject = {
    player?: Player.AsObject,
    team?: Team.AsObject,
    value: number,
  }
}

export class CsgoTournamentBestTeamStatistics extends jspb.Message {
  hasHighestKills(): boolean;
  clearHighestKills(): void;
  getHighestKills(): TournamentTeamStatisticsValue | undefined;
  setHighestKills(value?: TournamentTeamStatisticsValue): void;

  hasHighestKillsOverDeaths(): boolean;
  clearHighestKillsOverDeaths(): void;
  getHighestKillsOverDeaths(): TournamentTeamStatisticsValue | undefined;
  setHighestKillsOverDeaths(value?: TournamentTeamStatisticsValue): void;

  hasHighestAwpKills(): boolean;
  clearHighestAwpKills(): void;
  getHighestAwpKills(): TournamentTeamStatisticsValue | undefined;
  setHighestAwpKills(value?: TournamentTeamStatisticsValue): void;

  hasHighestPlantRate(): boolean;
  clearHighestPlantRate(): void;
  getHighestPlantRate(): TournamentTeamStatisticsValueInPercent | undefined;
  setHighestPlantRate(value?: TournamentTeamStatisticsValueInPercent): void;

  hasHighestDefuseRate(): boolean;
  clearHighestDefuseRate(): void;
  getHighestDefuseRate(): TournamentTeamStatisticsValueInPercent | undefined;
  setHighestDefuseRate(value?: TournamentTeamStatisticsValueInPercent): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoTournamentBestTeamStatistics.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoTournamentBestTeamStatistics): CsgoTournamentBestTeamStatistics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoTournamentBestTeamStatistics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoTournamentBestTeamStatistics;
  static deserializeBinaryFromReader(message: CsgoTournamentBestTeamStatistics, reader: jspb.BinaryReader): CsgoTournamentBestTeamStatistics;
}

export namespace CsgoTournamentBestTeamStatistics {
  export type AsObject = {
    highestKills?: TournamentTeamStatisticsValue.AsObject,
    highestKillsOverDeaths?: TournamentTeamStatisticsValue.AsObject,
    highestAwpKills?: TournamentTeamStatisticsValue.AsObject,
    highestPlantRate?: TournamentTeamStatisticsValueInPercent.AsObject,
    highestDefuseRate?: TournamentTeamStatisticsValueInPercent.AsObject,
  }
}

export class CsgoTournamentBestPlayerStatistics extends jspb.Message {
  hasHighestKills(): boolean;
  clearHighestKills(): void;
  getHighestKills(): CsgoTournamentPlayerStatistics | undefined;
  setHighestKills(value?: CsgoTournamentPlayerStatistics): void;

  hasHighestKillsOverDeaths(): boolean;
  clearHighestKillsOverDeaths(): void;
  getHighestKillsOverDeaths(): CsgoTournamentPlayerStatistics | undefined;
  setHighestKillsOverDeaths(value?: CsgoTournamentPlayerStatistics): void;

  hasHighestDamage(): boolean;
  clearHighestDamage(): void;
  getHighestDamage(): CsgoTournamentPlayerStatistics | undefined;
  setHighestDamage(value?: CsgoTournamentPlayerStatistics): void;

  hasHighestFlashAssists(): boolean;
  clearHighestFlashAssists(): void;
  getHighestFlashAssists(): CsgoTournamentPlayerStatistics | undefined;
  setHighestFlashAssists(value?: CsgoTournamentPlayerStatistics): void;

  hasHighestUtilityDamage(): boolean;
  clearHighestUtilityDamage(): void;
  getHighestUtilityDamage(): CsgoTournamentPlayerStatistics | undefined;
  setHighestUtilityDamage(value?: CsgoTournamentPlayerStatistics): void;

  hasHighestOpeningKills(): boolean;
  clearHighestOpeningKills(): void;
  getHighestOpeningKills(): CsgoTournamentPlayerStatistics | undefined;
  setHighestOpeningKills(value?: CsgoTournamentPlayerStatistics): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoTournamentBestPlayerStatistics.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoTournamentBestPlayerStatistics): CsgoTournamentBestPlayerStatistics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoTournamentBestPlayerStatistics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoTournamentBestPlayerStatistics;
  static deserializeBinaryFromReader(message: CsgoTournamentBestPlayerStatistics, reader: jspb.BinaryReader): CsgoTournamentBestPlayerStatistics;
}

export namespace CsgoTournamentBestPlayerStatistics {
  export type AsObject = {
    highestKills?: CsgoTournamentPlayerStatistics.AsObject,
    highestKillsOverDeaths?: CsgoTournamentPlayerStatistics.AsObject,
    highestDamage?: CsgoTournamentPlayerStatistics.AsObject,
    highestFlashAssists?: CsgoTournamentPlayerStatistics.AsObject,
    highestUtilityDamage?: CsgoTournamentPlayerStatistics.AsObject,
    highestOpeningKills?: CsgoTournamentPlayerStatistics.AsObject,
  }
}

export class CsgoTeamStandingRound extends jspb.Message {
  getRound(): number;
  setRound(value: number): void;

  hasTeamScore(): boolean;
  clearTeamScore(): void;
  getTeamScore(): number;
  setTeamScore(value: number): void;

  hasOpponent(): boolean;
  clearOpponent(): void;
  getOpponent(): Team | undefined;
  setOpponent(value?: Team): void;

  hasOpponentScore(): boolean;
  clearOpponentScore(): void;
  getOpponentScore(): number;
  setOpponentScore(value: number): void;

  getMatchIsClosed(): boolean;
  setMatchIsClosed(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoTeamStandingRound.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoTeamStandingRound): CsgoTeamStandingRound.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoTeamStandingRound, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoTeamStandingRound;
  static deserializeBinaryFromReader(message: CsgoTeamStandingRound, reader: jspb.BinaryReader): CsgoTeamStandingRound;
}

export namespace CsgoTeamStandingRound {
  export type AsObject = {
    round: number,
    teamScore: number,
    opponent?: Team.AsObject,
    opponentScore: number,
    matchIsClosed: boolean,
  }
}

export class CsgoPlayersDuel extends jspb.Message {
  hasHomePlayer(): boolean;
  clearHomePlayer(): void;
  getHomePlayer(): CsgoPlayer | undefined;
  setHomePlayer(value?: CsgoPlayer): void;

  getHomePlayerKills(): number;
  setHomePlayerKills(value: number): void;

  hasAwayPlayer(): boolean;
  clearAwayPlayer(): void;
  getAwayPlayer(): CsgoPlayer | undefined;
  setAwayPlayer(value?: CsgoPlayer): void;

  getAwayPlayerKills(): number;
  setAwayPlayerKills(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoPlayersDuel.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoPlayersDuel): CsgoPlayersDuel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoPlayersDuel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoPlayersDuel;
  static deserializeBinaryFromReader(message: CsgoPlayersDuel, reader: jspb.BinaryReader): CsgoPlayersDuel;
}

export namespace CsgoPlayersDuel {
  export type AsObject = {
    homePlayer?: CsgoPlayer.AsObject,
    homePlayerKills: number,
    awayPlayer?: CsgoPlayer.AsObject,
    awayPlayerKills: number,
  }
}

export class CsgoStatisticsSideValues extends jspb.Message {
  hasTerrorists(): boolean;
  clearTerrorists(): void;
  getTerrorists(): StatisticsValues | undefined;
  setTerrorists(value?: StatisticsValues): void;

  hasCounterTerrorists(): boolean;
  clearCounterTerrorists(): void;
  getCounterTerrorists(): StatisticsValues | undefined;
  setCounterTerrorists(value?: StatisticsValues): void;

  hasAll(): boolean;
  clearAll(): void;
  getAll(): StatisticsValues | undefined;
  setAll(value?: StatisticsValues): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoStatisticsSideValues.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoStatisticsSideValues): CsgoStatisticsSideValues.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoStatisticsSideValues, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoStatisticsSideValues;
  static deserializeBinaryFromReader(message: CsgoStatisticsSideValues, reader: jspb.BinaryReader): CsgoStatisticsSideValues;
}

export namespace CsgoStatisticsSideValues {
  export type AsObject = {
    terrorists?: StatisticsValues.AsObject,
    counterTerrorists?: StatisticsValues.AsObject,
    all?: StatisticsValues.AsObject,
  }
}

export class CsgoWeaponStatistics extends jspb.Message {
  hasWeapon(): boolean;
  clearWeapon(): void;
  getWeapon(): CsgoWeapon | undefined;
  setWeapon(value?: CsgoWeapon): void;

  hasKillsWithWeapon(): boolean;
  clearKillsWithWeapon(): void;
  getKillsWithWeapon(): StatisticsValues | undefined;
  setKillsWithWeapon(value?: StatisticsValues): void;

  hasHeadshotsWithWeapon(): boolean;
  clearHeadshotsWithWeapon(): void;
  getHeadshotsWithWeapon(): StatisticsValues | undefined;
  setHeadshotsWithWeapon(value?: StatisticsValues): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoWeaponStatistics.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoWeaponStatistics): CsgoWeaponStatistics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoWeaponStatistics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoWeaponStatistics;
  static deserializeBinaryFromReader(message: CsgoWeaponStatistics, reader: jspb.BinaryReader): CsgoWeaponStatistics;
}

export namespace CsgoWeaponStatistics {
  export type AsObject = {
    weapon?: CsgoWeapon.AsObject,
    killsWithWeapon?: StatisticsValues.AsObject,
    headshotsWithWeapon?: StatisticsValues.AsObject,
  }
}

export class CsgoWeaponPostMapStatistics extends jspb.Message {
  hasWeapon(): boolean;
  clearWeapon(): void;
  getWeapon(): CsgoWeapon | undefined;
  setWeapon(value?: CsgoWeapon): void;

  getKillsWithWeapon(): number;
  setKillsWithWeapon(value: number): void;

  getHeadshotsWithWeapon(): number;
  setHeadshotsWithWeapon(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoWeaponPostMapStatistics.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoWeaponPostMapStatistics): CsgoWeaponPostMapStatistics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoWeaponPostMapStatistics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoWeaponPostMapStatistics;
  static deserializeBinaryFromReader(message: CsgoWeaponPostMapStatistics, reader: jspb.BinaryReader): CsgoWeaponPostMapStatistics;
}

export namespace CsgoWeaponPostMapStatistics {
  export type AsObject = {
    weapon?: CsgoWeapon.AsObject,
    killsWithWeapon: number,
    headshotsWithWeapon: number,
  }
}

export class CsgoMap extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  hasIconPath(): boolean;
  clearIconPath(): void;
  getIconPath(): string;
  setIconPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoMap.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoMap): CsgoMap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoMap;
  static deserializeBinaryFromReader(message: CsgoMap, reader: jspb.BinaryReader): CsgoMap;
}

export namespace CsgoMap {
  export type AsObject = {
    id: number,
    name: string,
    iconPath: string,
  }
}

export class CsgoMapVote extends jspb.Message {
  clearPickedList(): void;
  getPickedList(): Array<CsgoMapStatistics>;
  setPickedList(value: Array<CsgoMapStatistics>): void;
  addPicked(value?: CsgoMapStatistics, index?: number): CsgoMapStatistics;

  clearBannedList(): void;
  getBannedList(): Array<CsgoMapStatistics>;
  setBannedList(value: Array<CsgoMapStatistics>): void;
  addBanned(value?: CsgoMapStatistics, index?: number): CsgoMapStatistics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoMapVote.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoMapVote): CsgoMapVote.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoMapVote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoMapVote;
  static deserializeBinaryFromReader(message: CsgoMapVote, reader: jspb.BinaryReader): CsgoMapVote;
}

export namespace CsgoMapVote {
  export type AsObject = {
    pickedList: Array<CsgoMapStatistics.AsObject>,
    bannedList: Array<CsgoMapStatistics.AsObject>,
  }
}

export class CsgoMapStatistics extends jspb.Message {
  hasMap(): boolean;
  clearMap(): void;
  getMap(): CsgoMap | undefined;
  setMap(value?: CsgoMap): void;

  hasStatistics(): boolean;
  clearStatistics(): void;
  getStatistics(): StatisticsValues | undefined;
  setStatistics(value?: StatisticsValues): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoMapStatistics.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoMapStatistics): CsgoMapStatistics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoMapStatistics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoMapStatistics;
  static deserializeBinaryFromReader(message: CsgoMapStatistics, reader: jspb.BinaryReader): CsgoMapStatistics;
}

export namespace CsgoMapStatistics {
  export type AsObject = {
    map?: CsgoMap.AsObject,
    statistics?: StatisticsValues.AsObject,
  }
}

export class CsgoWeapon extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  hasIconPath(): boolean;
  clearIconPath(): void;
  getIconPath(): string;
  setIconPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoWeapon.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoWeapon): CsgoWeapon.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoWeapon, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoWeapon;
  static deserializeBinaryFromReader(message: CsgoWeapon, reader: jspb.BinaryReader): CsgoWeapon;
}

export namespace CsgoWeapon {
  export type AsObject = {
    id: number,
    name: string,
    iconPath: string,
  }
}

export class CsgoTeam extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasTeam(): boolean;
  clearTeam(): void;
  getTeam(): Team | undefined;
  setTeam(value?: Team): void;

  clearPlayersList(): void;
  getPlayersList(): Array<Player>;
  setPlayersList(value: Array<Player>): void;
  addPlayers(value?: Player, index?: number): Player;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoTeam.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoTeam): CsgoTeam.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoTeam, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoTeam;
  static deserializeBinaryFromReader(message: CsgoTeam, reader: jspb.BinaryReader): CsgoTeam;
}

export namespace CsgoTeam {
  export type AsObject = {
    id: number,
    team?: Team.AsObject,
    playersList: Array<Player.AsObject>,
  }
}

export class CsgoPlayer extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getNickname(): string;
  setNickname(value: string): void;

  hasRealName(): boolean;
  clearRealName(): void;
  getRealName(): string;
  setRealName(value: string): void;

  hasShortcut(): boolean;
  clearShortcut(): void;
  getShortcut(): string;
  setShortcut(value: string): void;

  hasIconPath(): boolean;
  clearIconPath(): void;
  getIconPath(): string;
  setIconPath(value: string): void;

  getRole(): CsgoPlayerRoleMap[keyof CsgoPlayerRoleMap];
  setRole(value: CsgoPlayerRoleMap[keyof CsgoPlayerRoleMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoPlayer.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoPlayer): CsgoPlayer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoPlayer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoPlayer;
  static deserializeBinaryFromReader(message: CsgoPlayer, reader: jspb.BinaryReader): CsgoPlayer;
}

export namespace CsgoPlayer {
  export type AsObject = {
    id: number,
    nickname: string,
    realName: string,
    shortcut: string,
    iconPath: string,
    role: CsgoPlayerRoleMap[keyof CsgoPlayerRoleMap],
  }
}

export class CsgoTournamentBlock extends jspb.Message {
  hasCsgoTournamentStandingsBlock(): boolean;
  clearCsgoTournamentStandingsBlock(): void;
  getCsgoTournamentStandingsBlock(): CsgoTournamentStandingsBlock | undefined;
  setCsgoTournamentStandingsBlock(value?: CsgoTournamentStandingsBlock): void;

  hasCsgoTournamentBracketsBlock(): boolean;
  clearCsgoTournamentBracketsBlock(): void;
  getCsgoTournamentBracketsBlock(): CsgoTournamentBracketsBlock | undefined;
  setCsgoTournamentBracketsBlock(value?: CsgoTournamentBracketsBlock): void;

  getOneofNameCase(): CsgoTournamentBlock.OneofNameCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoTournamentBlock.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoTournamentBlock): CsgoTournamentBlock.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoTournamentBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoTournamentBlock;
  static deserializeBinaryFromReader(message: CsgoTournamentBlock, reader: jspb.BinaryReader): CsgoTournamentBlock;
}

export namespace CsgoTournamentBlock {
  export type AsObject = {
    csgoTournamentStandingsBlock?: CsgoTournamentStandingsBlock.AsObject,
    csgoTournamentBracketsBlock?: CsgoTournamentBracketsBlock.AsObject,
  }

  export enum OneofNameCase {
    ONEOF_NAME_NOT_SET = 0,
    CSGO_TOURNAMENT_STANDINGS_BLOCK = 1,
    CSGO_TOURNAMENT_BRACKETS_BLOCK = 2,
  }
}

export class CsgoTournamentStandingsBlock extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getOrder(): number;
  setOrder(value: number): void;

  clearStandingsList(): void;
  getStandingsList(): Array<CsgoTeamStanding>;
  setStandingsList(value: Array<CsgoTeamStanding>): void;
  addStandings(value?: CsgoTeamStanding, index?: number): CsgoTeamStanding;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoTournamentStandingsBlock.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoTournamentStandingsBlock): CsgoTournamentStandingsBlock.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoTournamentStandingsBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoTournamentStandingsBlock;
  static deserializeBinaryFromReader(message: CsgoTournamentStandingsBlock, reader: jspb.BinaryReader): CsgoTournamentStandingsBlock;
}

export namespace CsgoTournamentStandingsBlock {
  export type AsObject = {
    id: number,
    name: string,
    order: number,
    standingsList: Array<CsgoTeamStanding.AsObject>,
  }
}

export class CsgoTournamentBracketsBlock extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getOrder(): number;
  setOrder(value: number): void;

  clearBracketsList(): void;
  getBracketsList(): Array<TournamentBracketNode>;
  setBracketsList(value: Array<TournamentBracketNode>): void;
  addBrackets(value?: TournamentBracketNode, index?: number): TournamentBracketNode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoTournamentBracketsBlock.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoTournamentBracketsBlock): CsgoTournamentBracketsBlock.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoTournamentBracketsBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoTournamentBracketsBlock;
  static deserializeBinaryFromReader(message: CsgoTournamentBracketsBlock, reader: jspb.BinaryReader): CsgoTournamentBracketsBlock;
}

export namespace CsgoTournamentBracketsBlock {
  export type AsObject = {
    id: number,
    name: string,
    order: number,
    bracketsList: Array<TournamentBracketNode.AsObject>,
  }
}

export class CsgoTeamStanding extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getRank(): number;
  setRank(value: number): void;

  hasTeam(): boolean;
  clearTeam(): void;
  getTeam(): Team | undefined;
  setTeam(value?: Team): void;

  getPoints(): number;
  setPoints(value: number): void;

  getMatchesWon(): number;
  setMatchesWon(value: number): void;

  getMatchesLost(): number;
  setMatchesLost(value: number): void;

  getMatchesDrawn(): number;
  setMatchesDrawn(value: number): void;

  getMapsWon(): number;
  setMapsWon(value: number): void;

  getMapsLost(): number;
  setMapsLost(value: number): void;

  getMapsDrawn(): number;
  setMapsDrawn(value: number): void;

  getRoundsWon(): number;
  setRoundsWon(value: number): void;

  getRoundsLost(): number;
  setRoundsLost(value: number): void;

  getMapDifference(): number;
  setMapDifference(value: number): void;

  getRoundDifference(): number;
  setRoundDifference(value: number): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): string;
  setStatus(value: string): void;

  clearRoundsList(): void;
  getRoundsList(): Array<CsgoTeamStandingRound>;
  setRoundsList(value: Array<CsgoTeamStandingRound>): void;
  addRounds(value?: CsgoTeamStandingRound, index?: number): CsgoTeamStandingRound;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoTeamStanding.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoTeamStanding): CsgoTeamStanding.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoTeamStanding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoTeamStanding;
  static deserializeBinaryFromReader(message: CsgoTeamStanding, reader: jspb.BinaryReader): CsgoTeamStanding;
}

export namespace CsgoTeamStanding {
  export type AsObject = {
    id: number,
    rank: number,
    team?: Team.AsObject,
    points: number,
    matchesWon: number,
    matchesLost: number,
    matchesDrawn: number,
    mapsWon: number,
    mapsLost: number,
    mapsDrawn: number,
    roundsWon: number,
    roundsLost: number,
    mapDifference: number,
    roundDifference: number,
    status: string,
    roundsList: Array<CsgoTeamStandingRound.AsObject>,
  }
}

export class TournamentBracketNode extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasHomeTeam(): boolean;
  clearHomeTeam(): void;
  getHomeTeam(): Team | undefined;
  setHomeTeam(value?: Team): void;

  hasHomeScore(): boolean;
  clearHomeScore(): void;
  getHomeScore(): number;
  setHomeScore(value: number): void;

  hasAwayTeam(): boolean;
  clearAwayTeam(): void;
  getAwayTeam(): Team | undefined;
  setAwayTeam(value?: Team): void;

  hasAwayScore(): boolean;
  clearAwayScore(): void;
  getAwayScore(): number;
  setAwayScore(value: number): void;

  hasMatch(): boolean;
  clearMatch(): void;
  getMatch(): Match | undefined;
  setMatch(value?: Match): void;

  hasLabel(): boolean;
  clearLabel(): void;
  getLabel(): string;
  setLabel(value: string): void;

  getIsRoot(): boolean;
  setIsRoot(value: boolean): void;

  clearChildNodesList(): void;
  getChildNodesList(): Array<number>;
  setChildNodesList(value: Array<number>): void;
  addChildNodes(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TournamentBracketNode.AsObject;
  static toObject(includeInstance: boolean, msg: TournamentBracketNode): TournamentBracketNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TournamentBracketNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TournamentBracketNode;
  static deserializeBinaryFromReader(message: TournamentBracketNode, reader: jspb.BinaryReader): TournamentBracketNode;
}

export namespace TournamentBracketNode {
  export type AsObject = {
    id: number,
    homeTeam?: Team.AsObject,
    homeScore: number,
    awayTeam?: Team.AsObject,
    awayScore: number,
    match?: Match.AsObject,
    label: string,
    isRoot: boolean,
    childNodesList: Array<number>,
  }
}

export class Sport extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sport.AsObject;
  static toObject(includeInstance: boolean, msg: Sport): Sport.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Sport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sport;
  static deserializeBinaryFromReader(message: Sport, reader: jspb.BinaryReader): Sport;
}

export namespace Sport {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class Tournament extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  hasStartTimestamp(): boolean;
  clearStartTimestamp(): void;
  getStartTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTimestamp(): boolean;
  clearEndTimestamp(): void;
  getEndTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tournament.AsObject;
  static toObject(includeInstance: boolean, msg: Tournament): Tournament.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Tournament, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tournament;
  static deserializeBinaryFromReader(message: Tournament, reader: jspb.BinaryReader): Tournament;
}

export namespace Tournament {
  export type AsObject = {
    id: number,
    name: string,
    startTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Team extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  hasIconPath(): boolean;
  clearIconPath(): void;
  getIconPath(): string;
  setIconPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Team.AsObject;
  static toObject(includeInstance: boolean, msg: Team): Team.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Team, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Team;
  static deserializeBinaryFromReader(message: Team, reader: jspb.BinaryReader): Team;
}

export namespace Team {
  export type AsObject = {
    id: number,
    name: string,
    iconPath: string,
  }
}

export class Match extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasPlannedStartTimestamp(): boolean;
  clearPlannedStartTimestamp(): void;
  getPlannedStartTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPlannedStartTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStartTimestamp(): boolean;
  clearStartTimestamp(): void;
  getStartTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTimestamp(): boolean;
  clearEndTimestamp(): void;
  getEndTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTournament(): boolean;
  clearTournament(): void;
  getTournament(): Tournament | undefined;
  setTournament(value?: Tournament): void;

  hasHomeTeam(): boolean;
  clearHomeTeam(): void;
  getHomeTeam(): Team | undefined;
  setHomeTeam(value?: Team): void;

  hasHomeScore(): boolean;
  clearHomeScore(): void;
  getHomeScore(): number;
  setHomeScore(value: number): void;

  hasAwayTeam(): boolean;
  clearAwayTeam(): void;
  getAwayTeam(): Team | undefined;
  setAwayTeam(value?: Team): void;

  hasAwayScore(): boolean;
  clearAwayScore(): void;
  getAwayScore(): number;
  setAwayScore(value: number): void;

  hasWinTeam(): boolean;
  clearWinTeam(): void;
  getWinTeam(): Team | undefined;
  setWinTeam(value?: Team): void;

  getIsClosed(): boolean;
  setIsClosed(value: boolean): void;

  getBestOfType(): BestOfTypeMap[keyof BestOfTypeMap];
  setBestOfType(value: BestOfTypeMap[keyof BestOfTypeMap]): void;

  clearMapsList(): void;
  getMapsList(): Array<Map>;
  setMapsList(value: Array<Map>): void;
  addMaps(value?: Map, index?: number): Map;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Match.AsObject;
  static toObject(includeInstance: boolean, msg: Match): Match.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Match, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Match;
  static deserializeBinaryFromReader(message: Match, reader: jspb.BinaryReader): Match;
}

export namespace Match {
  export type AsObject = {
    id: number,
    plannedStartTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    startTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    tournament?: Tournament.AsObject,
    homeTeam?: Team.AsObject,
    homeScore: number,
    awayTeam?: Team.AsObject,
    awayScore: number,
    winTeam?: Team.AsObject,
    isClosed: boolean,
    bestOfType: BestOfTypeMap[keyof BestOfTypeMap],
    mapsList: Array<Map.AsObject>,
  }
}

export class Map extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getOrder(): number;
  setOrder(value: number): void;

  hasStartTimestamp(): boolean;
  clearStartTimestamp(): void;
  getStartTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTimestamp(): boolean;
  clearEndTimestamp(): void;
  getEndTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getIsClosed(): boolean;
  setIsClosed(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Map.AsObject;
  static toObject(includeInstance: boolean, msg: Map): Map.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Map, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Map;
  static deserializeBinaryFromReader(message: Map, reader: jspb.BinaryReader): Map;
}

export namespace Map {
  export type AsObject = {
    id: number,
    order: number,
    startTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    isClosed: boolean,
  }
}

export class Player extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getNickname(): string;
  setNickname(value: string): void;

  hasRealName(): boolean;
  clearRealName(): void;
  getRealName(): string;
  setRealName(value: string): void;

  hasShortcut(): boolean;
  clearShortcut(): void;
  getShortcut(): string;
  setShortcut(value: string): void;

  hasIconPath(): boolean;
  clearIconPath(): void;
  getIconPath(): string;
  setIconPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Player.AsObject;
  static toObject(includeInstance: boolean, msg: Player): Player.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Player, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Player;
  static deserializeBinaryFromReader(message: Player, reader: jspb.BinaryReader): Player;
}

export namespace Player {
  export type AsObject = {
    id: number,
    nickname: string,
    realName: string,
    shortcut: string,
    iconPath: string,
  }
}

export class TournamentTeamStatisticsValue extends jspb.Message {
  hasTeam(): boolean;
  clearTeam(): void;
  getTeam(): Team | undefined;
  setTeam(value?: Team): void;

  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TournamentTeamStatisticsValue.AsObject;
  static toObject(includeInstance: boolean, msg: TournamentTeamStatisticsValue): TournamentTeamStatisticsValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TournamentTeamStatisticsValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TournamentTeamStatisticsValue;
  static deserializeBinaryFromReader(message: TournamentTeamStatisticsValue, reader: jspb.BinaryReader): TournamentTeamStatisticsValue;
}

export namespace TournamentTeamStatisticsValue {
  export type AsObject = {
    team?: Team.AsObject,
    value: number,
  }
}

export class TournamentTeamStatisticsValueInPercent extends jspb.Message {
  hasTeam(): boolean;
  clearTeam(): void;
  getTeam(): Team | undefined;
  setTeam(value?: Team): void;

  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TournamentTeamStatisticsValueInPercent.AsObject;
  static toObject(includeInstance: boolean, msg: TournamentTeamStatisticsValueInPercent): TournamentTeamStatisticsValueInPercent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TournamentTeamStatisticsValueInPercent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TournamentTeamStatisticsValueInPercent;
  static deserializeBinaryFromReader(message: TournamentTeamStatisticsValueInPercent, reader: jspb.BinaryReader): TournamentTeamStatisticsValueInPercent;
}

export namespace TournamentTeamStatisticsValueInPercent {
  export type AsObject = {
    team?: Team.AsObject,
    value: number,
  }
}

export class PostMapStatisticsValues extends jspb.Message {
  getPercentageOfMaximum(): number;
  setPercentageOfMaximum(value: number): void;

  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostMapStatisticsValues.AsObject;
  static toObject(includeInstance: boolean, msg: PostMapStatisticsValues): PostMapStatisticsValues.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostMapStatisticsValues, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostMapStatisticsValues;
  static deserializeBinaryFromReader(message: PostMapStatisticsValues, reader: jspb.BinaryReader): PostMapStatisticsValues;
}

export namespace PostMapStatisticsValues {
  export type AsObject = {
    percentageOfMaximum: number,
    total: number,
  }
}

export class StatisticsValues extends jspb.Message {
  getAvg(): number;
  setAvg(value: number): void;

  getPercentile(): number;
  setPercentile(value: number): void;

  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatisticsValues.AsObject;
  static toObject(includeInstance: boolean, msg: StatisticsValues): StatisticsValues.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatisticsValues, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatisticsValues;
  static deserializeBinaryFromReader(message: StatisticsValues, reader: jspb.BinaryReader): StatisticsValues;
}

export namespace StatisticsValues {
  export type AsObject = {
    avg: number,
    percentile: number,
    total: number,
  }
}

export interface CsgoPlayerRoleMap {
  CSGO_PLAYER_ROLE_UNSPECIFIED: 0;
  CSGO_PLAYER_ROLE_KILL_LEADER: 1;
  CSGO_PLAYER_ROLE_ENTRY_FRAGGER: 2;
  CSGO_PLAYER_ROLE_SUPPORT: 3;
  CSGO_PLAYER_ROLE_AWPER: 4;
  CSGO_PLAYER_ROLE_LURKER: 5;
}

export const CsgoPlayerRole: CsgoPlayerRoleMap;

export interface CsgoSideMap {
  CSGO_SIDE_UNSPECIFIED: 0;
  CSGO_SIDE_COUNTER_TERRORISTS: 1;
  CSGO_SIDE_TERRORISTS: 2;
}

export const CsgoSide: CsgoSideMap;

export interface CsgoRoundOutcomeMap {
  CSGO_ROUND_OUTCOME_UNSPECIFIED: 0;
  CSGO_ROUND_OUTCOME_COUNTER_TERRORISTS_ELIMINATED: 1;
  CSGO_ROUND_OUTCOME_TERRORISTS_ELIMINATED: 2;
  CSGO_ROUND_OUTCOME_EXPLOSION: 3;
  CSGO_ROUND_OUTCOME_DEFUSE: 4;
  CSGO_ROUND_OUTCOME_TIMEOUT: 5;
}

export const CsgoRoundOutcome: CsgoRoundOutcomeMap;

export interface TimeframeMap {
  TIMEFRAME_UNSPECIFIED: 0;
  TIMEFRAME_ONE_MONTH: 1;
  TIMEFRAME_THREE_MONTHS: 2;
  TIMEFRAME_SIX_MONTHS: 3;
  TIMEFRAME_ONE_YEAR: 4;
}

export const Timeframe: TimeframeMap;

export interface BestOfTypeMap {
  BEST_OF_TYPE_UNSPECIFIED: 0;
  BEST_OF_TYPE_BO1: 1;
  BEST_OF_TYPE_BO2: 2;
  BEST_OF_TYPE_BO3: 3;
  BEST_OF_TYPE_BO4: 4;
  BEST_OF_TYPE_BO5: 5;
  BEST_OF_TYPE_BO6: 6;
  BEST_OF_TYPE_BO7: 7;
}

export const BestOfType: BestOfTypeMap;

