// package: bragi
// file: bragi/lol.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as bragi_common_pb from "../bragi/common_pb";

export class LolMatchMessage extends jspb.Message {
  getMatchUrn(): string;
  setMatchUrn(value: string): void;

  getSequence(): number;
  setSequence(value: number): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getDataStatus(): bragi_common_pb.DataStatusMap[keyof bragi_common_pb.DataStatusMap];
  setDataStatus(value: bragi_common_pb.DataStatusMap[keyof bragi_common_pb.DataStatusMap]): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): LolMatchMessage.Payload | undefined;
  setPayload(value?: LolMatchMessage.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LolMatchMessage.AsObject;
  static toObject(includeInstance: boolean, msg: LolMatchMessage): LolMatchMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LolMatchMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LolMatchMessage;
  static deserializeBinaryFromReader(message: LolMatchMessage, reader: jspb.BinaryReader): LolMatchMessage;
}

export namespace LolMatchMessage {
  export type AsObject = {
    matchUrn: string,
    sequence: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dataStatus: bragi_common_pb.DataStatusMap[keyof bragi_common_pb.DataStatusMap],
    payload?: LolMatchMessage.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasSnapshot(): boolean;
    clearSnapshot(): void;
    getSnapshot(): LolMatchSnapshot | undefined;
    setSnapshot(value?: LolMatchSnapshot): void;

    hasUpdate(): boolean;
    clearUpdate(): void;
    getUpdate(): LolMatchUpdate | undefined;
    setUpdate(value?: LolMatchUpdate): void;

    getPayloadCase(): Payload.PayloadCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Payload.AsObject;
    static toObject(includeInstance: boolean, msg: Payload): Payload.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Payload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Payload;
    static deserializeBinaryFromReader(message: Payload, reader: jspb.BinaryReader): Payload;
  }

  export namespace Payload {
    export type AsObject = {
      snapshot?: LolMatchSnapshot.AsObject,
      update?: LolMatchUpdate.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      SNAPSHOT = 1,
      UPDATE = 2,
    }
  }
}

export class LolMatchSnapshot extends jspb.Message {
  getMatchUrn(): string;
  setMatchUrn(value: string): void;

  getSequence(): number;
  setSequence(value: number): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getDataStatus(): bragi_common_pb.DataStatusMap[keyof bragi_common_pb.DataStatusMap];
  setDataStatus(value: bragi_common_pb.DataStatusMap[keyof bragi_common_pb.DataStatusMap]): void;

  clearAnnouncementsList(): void;
  getAnnouncementsList(): Array<bragi_common_pb.Announcement>;
  setAnnouncementsList(value: Array<bragi_common_pb.Announcement>): void;
  addAnnouncements(value?: bragi_common_pb.Announcement, index?: number): bragi_common_pb.Announcement;

  hasMatchState(): boolean;
  clearMatchState(): void;
  getMatchState(): LolMatchState | undefined;
  setMatchState(value?: LolMatchState): void;

  hasTournament(): boolean;
  clearTournament(): void;
  getTournament(): bragi_common_pb.Tournament | undefined;
  setTournament(value?: bragi_common_pb.Tournament): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LolMatchSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: LolMatchSnapshot): LolMatchSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LolMatchSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LolMatchSnapshot;
  static deserializeBinaryFromReader(message: LolMatchSnapshot, reader: jspb.BinaryReader): LolMatchSnapshot;
}

export namespace LolMatchSnapshot {
  export type AsObject = {
    matchUrn: string,
    sequence: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dataStatus: bragi_common_pb.DataStatusMap[keyof bragi_common_pb.DataStatusMap],
    announcementsList: Array<bragi_common_pb.Announcement.AsObject>,
    matchState?: LolMatchState.AsObject,
    tournament?: bragi_common_pb.Tournament.AsObject,
  }
}

export class LolMatchUpdate extends jspb.Message {
  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): LolMatchUpdate.Payload | undefined;
  setPayload(value?: LolMatchUpdate.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LolMatchUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: LolMatchUpdate): LolMatchUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LolMatchUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LolMatchUpdate;
  static deserializeBinaryFromReader(message: LolMatchUpdate, reader: jspb.BinaryReader): LolMatchUpdate;
}

export namespace LolMatchUpdate {
  export type AsObject = {
    payload?: LolMatchUpdate.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasMatchState(): boolean;
    clearMatchState(): void;
    getMatchState(): LolMatchState | undefined;
    setMatchState(value?: LolMatchState): void;

    hasPartialUpdates(): boolean;
    clearPartialUpdates(): void;
    getPartialUpdates(): LolMatchStatePartialUpdates | undefined;
    setPartialUpdates(value?: LolMatchStatePartialUpdates): void;

    getPayloadCase(): Payload.PayloadCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Payload.AsObject;
    static toObject(includeInstance: boolean, msg: Payload): Payload.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Payload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Payload;
    static deserializeBinaryFromReader(message: Payload, reader: jspb.BinaryReader): Payload;
  }

  export namespace Payload {
    export type AsObject = {
      matchState?: LolMatchState.AsObject,
      partialUpdates?: LolMatchStatePartialUpdates.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      MATCH_STATE = 1,
      PARTIAL_UPDATES = 2,
    }
  }
}

export class LolMatchStatePartialUpdates extends jspb.Message {
  clearUpdatesList(): void;
  getUpdatesList(): Array<LolMatchStatePartialUpdate>;
  setUpdatesList(value: Array<LolMatchStatePartialUpdate>): void;
  addUpdates(value?: LolMatchStatePartialUpdate, index?: number): LolMatchStatePartialUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LolMatchStatePartialUpdates.AsObject;
  static toObject(includeInstance: boolean, msg: LolMatchStatePartialUpdates): LolMatchStatePartialUpdates.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LolMatchStatePartialUpdates, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LolMatchStatePartialUpdates;
  static deserializeBinaryFromReader(message: LolMatchStatePartialUpdates, reader: jspb.BinaryReader): LolMatchStatePartialUpdates;
}

export namespace LolMatchStatePartialUpdates {
  export type AsObject = {
    updatesList: Array<LolMatchStatePartialUpdate.AsObject>,
  }
}

export class LolMatchStatePartialUpdate extends jspb.Message {
  hasScore(): boolean;
  clearScore(): void;
  getScore(): LolMatchScoreState | undefined;
  setScore(value?: LolMatchScoreState): void;

  hasCurrentMapState(): boolean;
  clearCurrentMapState(): void;
  getCurrentMapState(): LolCurrentMapState | undefined;
  setCurrentMapState(value?: LolCurrentMapState): void;

  hasCurrentMapStatePartialUpdate(): boolean;
  clearCurrentMapStatePartialUpdate(): void;
  getCurrentMapStatePartialUpdate(): LolCurrentMapStatePartialUpdate | undefined;
  setCurrentMapStatePartialUpdate(value?: LolCurrentMapStatePartialUpdate): void;

  getUpdateCase(): LolMatchStatePartialUpdate.UpdateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LolMatchStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: LolMatchStatePartialUpdate): LolMatchStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LolMatchStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LolMatchStatePartialUpdate;
  static deserializeBinaryFromReader(message: LolMatchStatePartialUpdate, reader: jspb.BinaryReader): LolMatchStatePartialUpdate;
}

export namespace LolMatchStatePartialUpdate {
  export type AsObject = {
    score?: LolMatchScoreState.AsObject,
    currentMapState?: LolCurrentMapState.AsObject,
    currentMapStatePartialUpdate?: LolCurrentMapStatePartialUpdate.AsObject,
  }

  export enum UpdateCase {
    UPDATE_NOT_SET = 0,
    SCORE = 1,
    CURRENT_MAP_STATE = 2,
    CURRENT_MAP_STATE_PARTIAL_UPDATE = 3,
  }
}

export class LolMatchState extends jspb.Message {
  getMatchUrn(): string;
  setMatchUrn(value: string): void;

  getMatchType(): bragi_common_pb.BestOfTypeMap[keyof bragi_common_pb.BestOfTypeMap];
  setMatchType(value: bragi_common_pb.BestOfTypeMap[keyof bragi_common_pb.BestOfTypeMap]): void;

  hasHomeTeam(): boolean;
  clearHomeTeam(): void;
  getHomeTeam(): bragi_common_pb.Team | undefined;
  setHomeTeam(value?: bragi_common_pb.Team): void;

  hasAwayTeam(): boolean;
  clearAwayTeam(): void;
  getAwayTeam(): bragi_common_pb.Team | undefined;
  setAwayTeam(value?: bragi_common_pb.Team): void;

  hasScore(): boolean;
  clearScore(): void;
  getScore(): LolMatchScoreState | undefined;
  setScore(value?: LolMatchScoreState): void;

  getMatchStatus(): bragi_common_pb.MatchStatusTypeMap[keyof bragi_common_pb.MatchStatusTypeMap];
  setMatchStatus(value: bragi_common_pb.MatchStatusTypeMap[keyof bragi_common_pb.MatchStatusTypeMap]): void;

  hasCurrentMap(): boolean;
  clearCurrentMap(): void;
  getCurrentMap(): LolCurrentMapState | undefined;
  setCurrentMap(value?: LolCurrentMapState): void;

  clearPreviousMapsList(): void;
  getPreviousMapsList(): Array<LolPreviousMapState>;
  setPreviousMapsList(value: Array<LolPreviousMapState>): void;
  addPreviousMaps(value?: LolPreviousMapState, index?: number): LolPreviousMapState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LolMatchState.AsObject;
  static toObject(includeInstance: boolean, msg: LolMatchState): LolMatchState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LolMatchState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LolMatchState;
  static deserializeBinaryFromReader(message: LolMatchState, reader: jspb.BinaryReader): LolMatchState;
}

export namespace LolMatchState {
  export type AsObject = {
    matchUrn: string,
    matchType: bragi_common_pb.BestOfTypeMap[keyof bragi_common_pb.BestOfTypeMap],
    homeTeam?: bragi_common_pb.Team.AsObject,
    awayTeam?: bragi_common_pb.Team.AsObject,
    score?: LolMatchScoreState.AsObject,
    matchStatus: bragi_common_pb.MatchStatusTypeMap[keyof bragi_common_pb.MatchStatusTypeMap],
    currentMap?: LolCurrentMapState.AsObject,
    previousMapsList: Array<LolPreviousMapState.AsObject>,
  }
}

export class LolMatchScoreState extends jspb.Message {
  getHomeScore(): number;
  setHomeScore(value: number): void;

  getAwayScore(): number;
  setAwayScore(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LolMatchScoreState.AsObject;
  static toObject(includeInstance: boolean, msg: LolMatchScoreState): LolMatchScoreState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LolMatchScoreState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LolMatchScoreState;
  static deserializeBinaryFromReader(message: LolMatchScoreState, reader: jspb.BinaryReader): LolMatchScoreState;
}

export namespace LolMatchScoreState {
  export type AsObject = {
    homeScore: number,
    awayScore: number,
  }
}

export class LolCurrentMapStatePartialUpdate extends jspb.Message {
  hasGameTime(): boolean;
  clearGameTime(): void;
  getGameTime(): LolCurrentMapTimeState | undefined;
  setGameTime(value?: LolCurrentMapTimeState): void;

  hasTeamCurrentMapState(): boolean;
  clearTeamCurrentMapState(): void;
  getTeamCurrentMapState(): LolTeamCurrentMapState | undefined;
  setTeamCurrentMapState(value?: LolTeamCurrentMapState): void;

  hasTeamCurrentMapPartialUpdate(): boolean;
  clearTeamCurrentMapPartialUpdate(): void;
  getTeamCurrentMapPartialUpdate(): LolTeamCurrentMapStatePartialUpdate | undefined;
  setTeamCurrentMapPartialUpdate(value?: LolTeamCurrentMapStatePartialUpdate): void;

  hasTurrets(): boolean;
  clearTurrets(): void;
  getTurrets(): LolTurrets | undefined;
  setTurrets(value?: LolTurrets): void;

  hasInhibitors(): boolean;
  clearInhibitors(): void;
  getInhibitors(): LolInhibitors | undefined;
  setInhibitors(value?: LolInhibitors): void;

  getUpdateCase(): LolCurrentMapStatePartialUpdate.UpdateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LolCurrentMapStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: LolCurrentMapStatePartialUpdate): LolCurrentMapStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LolCurrentMapStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LolCurrentMapStatePartialUpdate;
  static deserializeBinaryFromReader(message: LolCurrentMapStatePartialUpdate, reader: jspb.BinaryReader): LolCurrentMapStatePartialUpdate;
}

export namespace LolCurrentMapStatePartialUpdate {
  export type AsObject = {
    gameTime?: LolCurrentMapTimeState.AsObject,
    teamCurrentMapState?: LolTeamCurrentMapState.AsObject,
    teamCurrentMapPartialUpdate?: LolTeamCurrentMapStatePartialUpdate.AsObject,
    turrets?: LolTurrets.AsObject,
    inhibitors?: LolInhibitors.AsObject,
  }

  export enum UpdateCase {
    UPDATE_NOT_SET = 0,
    GAME_TIME = 1,
    TEAM_CURRENT_MAP_STATE = 2,
    TEAM_CURRENT_MAP_PARTIAL_UPDATE = 3,
    TURRETS = 4,
    INHIBITORS = 5,
  }
}

export class LolCurrentMapState extends jspb.Message {
  getMapOrder(): number;
  setMapOrder(value: number): void;

  getMapPaused(): boolean;
  setMapPaused(value: boolean): void;

  hasGameTime(): boolean;
  clearGameTime(): void;
  getGameTime(): LolCurrentMapTimeState | undefined;
  setGameTime(value?: LolCurrentMapTimeState): void;

  getTeamsMap(): jspb.Map<string, LolTeamCurrentMapState>;
  clearTeamsMap(): void;
  hasTurrets(): boolean;
  clearTurrets(): void;
  getTurrets(): LolTurrets | undefined;
  setTurrets(value?: LolTurrets): void;

  hasInhibitors(): boolean;
  clearInhibitors(): void;
  getInhibitors(): LolInhibitors | undefined;
  setInhibitors(value?: LolInhibitors): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LolCurrentMapState.AsObject;
  static toObject(includeInstance: boolean, msg: LolCurrentMapState): LolCurrentMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LolCurrentMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LolCurrentMapState;
  static deserializeBinaryFromReader(message: LolCurrentMapState, reader: jspb.BinaryReader): LolCurrentMapState;
}

export namespace LolCurrentMapState {
  export type AsObject = {
    mapOrder: number,
    mapPaused: boolean,
    gameTime?: LolCurrentMapTimeState.AsObject,
    teamsMap: Array<[string, LolTeamCurrentMapState.AsObject]>,
    turrets?: LolTurrets.AsObject,
    inhibitors?: LolInhibitors.AsObject,
  }
}

export class LolCurrentMapTimeState extends jspb.Message {
  hasGameTime(): boolean;
  clearGameTime(): void;
  getGameTime(): google_protobuf_duration_pb.Duration | undefined;
  setGameTime(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LolCurrentMapTimeState.AsObject;
  static toObject(includeInstance: boolean, msg: LolCurrentMapTimeState): LolCurrentMapTimeState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LolCurrentMapTimeState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LolCurrentMapTimeState;
  static deserializeBinaryFromReader(message: LolCurrentMapTimeState, reader: jspb.BinaryReader): LolCurrentMapTimeState;
}

export namespace LolCurrentMapTimeState {
  export type AsObject = {
    gameTime?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class LolPreviousMapState extends jspb.Message {
  getMapOrder(): number;
  setMapOrder(value: number): void;

  getTeamsMap(): jspb.Map<string, LolTeamPreviousMapState>;
  clearTeamsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LolPreviousMapState.AsObject;
  static toObject(includeInstance: boolean, msg: LolPreviousMapState): LolPreviousMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LolPreviousMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LolPreviousMapState;
  static deserializeBinaryFromReader(message: LolPreviousMapState, reader: jspb.BinaryReader): LolPreviousMapState;
}

export namespace LolPreviousMapState {
  export type AsObject = {
    mapOrder: number,
    teamsMap: Array<[string, LolTeamPreviousMapState.AsObject]>,
  }
}

export class LolTeamCurrentMapStatePartialUpdate extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): LolTeamCurrentMapStatePartialUpdate.Payload | undefined;
  setPayload(value?: LolTeamCurrentMapStatePartialUpdate.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LolTeamCurrentMapStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: LolTeamCurrentMapStatePartialUpdate): LolTeamCurrentMapStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LolTeamCurrentMapStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LolTeamCurrentMapStatePartialUpdate;
  static deserializeBinaryFromReader(message: LolTeamCurrentMapStatePartialUpdate, reader: jspb.BinaryReader): LolTeamCurrentMapStatePartialUpdate;
}

export namespace LolTeamCurrentMapStatePartialUpdate {
  export type AsObject = {
    teamUrn: string,
    payload?: LolTeamCurrentMapStatePartialUpdate.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasStatistics(): boolean;
    clearStatistics(): void;
    getStatistics(): LolTeamCurrentMapStatisticsState | undefined;
    setStatistics(value?: LolTeamCurrentMapStatisticsState): void;

    hasPlayerCurrentMapState(): boolean;
    clearPlayerCurrentMapState(): void;
    getPlayerCurrentMapState(): LolPlayerCurrentMapState | undefined;
    setPlayerCurrentMapState(value?: LolPlayerCurrentMapState): void;

    hasPlayerCurrentMapPartialUpdate(): boolean;
    clearPlayerCurrentMapPartialUpdate(): void;
    getPlayerCurrentMapPartialUpdate(): LolPlayerCurrentMapStatePartialUpdate | undefined;
    setPlayerCurrentMapPartialUpdate(value?: LolPlayerCurrentMapStatePartialUpdate): void;

    getPayloadCase(): Payload.PayloadCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Payload.AsObject;
    static toObject(includeInstance: boolean, msg: Payload): Payload.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Payload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Payload;
    static deserializeBinaryFromReader(message: Payload, reader: jspb.BinaryReader): Payload;
  }

  export namespace Payload {
    export type AsObject = {
      statistics?: LolTeamCurrentMapStatisticsState.AsObject,
      playerCurrentMapState?: LolPlayerCurrentMapState.AsObject,
      playerCurrentMapPartialUpdate?: LolPlayerCurrentMapStatePartialUpdate.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      STATISTICS = 1,
      PLAYER_CURRENT_MAP_STATE = 2,
      PLAYER_CURRENT_MAP_PARTIAL_UPDATE = 3,
    }
  }
}

export class LolTeamCurrentMapState extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getFaction(): LolFactionMap[keyof LolFactionMap];
  setFaction(value: LolFactionMap[keyof LolFactionMap]): void;

  hasStatistics(): boolean;
  clearStatistics(): void;
  getStatistics(): LolTeamCurrentMapStatisticsState | undefined;
  setStatistics(value?: LolTeamCurrentMapStatisticsState): void;

  hasWon(): boolean;
  clearWon(): void;
  getWon(): boolean;
  setWon(value: boolean): void;

  getPlayersMap(): jspb.Map<string, LolPlayerCurrentMapState>;
  clearPlayersMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LolTeamCurrentMapState.AsObject;
  static toObject(includeInstance: boolean, msg: LolTeamCurrentMapState): LolTeamCurrentMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LolTeamCurrentMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LolTeamCurrentMapState;
  static deserializeBinaryFromReader(message: LolTeamCurrentMapState, reader: jspb.BinaryReader): LolTeamCurrentMapState;
}

export namespace LolTeamCurrentMapState {
  export type AsObject = {
    teamUrn: string,
    faction: LolFactionMap[keyof LolFactionMap],
    statistics?: LolTeamCurrentMapStatisticsState.AsObject,
    won: boolean,
    playersMap: Array<[string, LolPlayerCurrentMapState.AsObject]>,
  }
}

export class LolTeamCurrentMapStatisticsState extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getKills(): number;
  setKills(value: number): void;

  getBarons(): number;
  setBarons(value: number): void;

  getDragons(): number;
  setDragons(value: number): void;

  getTurrets(): number;
  setTurrets(value: number): void;

  getInhibitors(): number;
  setInhibitors(value: number): void;

  getGold(): number;
  setGold(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LolTeamCurrentMapStatisticsState.AsObject;
  static toObject(includeInstance: boolean, msg: LolTeamCurrentMapStatisticsState): LolTeamCurrentMapStatisticsState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LolTeamCurrentMapStatisticsState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LolTeamCurrentMapStatisticsState;
  static deserializeBinaryFromReader(message: LolTeamCurrentMapStatisticsState, reader: jspb.BinaryReader): LolTeamCurrentMapStatisticsState;
}

export namespace LolTeamCurrentMapStatisticsState {
  export type AsObject = {
    teamUrn: string,
    kills: number,
    barons: number,
    dragons: number,
    turrets: number,
    inhibitors: number,
    gold: number,
  }
}

export class LolPlayerCurrentMapStatePartialUpdate extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): LolPlayerCurrentMapStatePartialUpdate.Payload | undefined;
  setPayload(value?: LolPlayerCurrentMapStatePartialUpdate.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LolPlayerCurrentMapStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: LolPlayerCurrentMapStatePartialUpdate): LolPlayerCurrentMapStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LolPlayerCurrentMapStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LolPlayerCurrentMapStatePartialUpdate;
  static deserializeBinaryFromReader(message: LolPlayerCurrentMapStatePartialUpdate, reader: jspb.BinaryReader): LolPlayerCurrentMapStatePartialUpdate;
}

export namespace LolPlayerCurrentMapStatePartialUpdate {
  export type AsObject = {
    playerUrn: string,
    payload?: LolPlayerCurrentMapStatePartialUpdate.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasPlayerInfo(): boolean;
    clearPlayerInfo(): void;
    getPlayerInfo(): LolPlayerInfoState | undefined;
    setPlayerInfo(value?: LolPlayerInfoState): void;

    hasTimers(): boolean;
    clearTimers(): void;
    getTimers(): LolPlayerCurrentMapTimersState | undefined;
    setTimers(value?: LolPlayerCurrentMapTimersState): void;

    hasStatistics(): boolean;
    clearStatistics(): void;
    getStatistics(): LolPlayerStatisticsState | undefined;
    setStatistics(value?: LolPlayerStatisticsState): void;

    hasMapStatistics(): boolean;
    clearMapStatistics(): void;
    getMapStatistics(): LolPlayerCurrentMapStatisticsState | undefined;
    setMapStatistics(value?: LolPlayerCurrentMapStatisticsState): void;

    hasPosition(): boolean;
    clearPosition(): void;
    getPosition(): LolPosition | undefined;
    setPosition(value?: LolPosition): void;

    getPayloadCase(): Payload.PayloadCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Payload.AsObject;
    static toObject(includeInstance: boolean, msg: Payload): Payload.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Payload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Payload;
    static deserializeBinaryFromReader(message: Payload, reader: jspb.BinaryReader): Payload;
  }

  export namespace Payload {
    export type AsObject = {
      playerInfo?: LolPlayerInfoState.AsObject,
      timers?: LolPlayerCurrentMapTimersState.AsObject,
      statistics?: LolPlayerStatisticsState.AsObject,
      mapStatistics?: LolPlayerCurrentMapStatisticsState.AsObject,
      position?: LolPosition.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      PLAYER_INFO = 1,
      TIMERS = 2,
      STATISTICS = 3,
      MAP_STATISTICS = 4,
      POSITION = 5,
    }
  }
}

export class LolPlayerCurrentMapState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  hasPlayerInfo(): boolean;
  clearPlayerInfo(): void;
  getPlayerInfo(): LolPlayerInfoState | undefined;
  setPlayerInfo(value?: LolPlayerInfoState): void;

  hasTimers(): boolean;
  clearTimers(): void;
  getTimers(): LolPlayerCurrentMapTimersState | undefined;
  setTimers(value?: LolPlayerCurrentMapTimersState): void;

  hasStatistics(): boolean;
  clearStatistics(): void;
  getStatistics(): LolPlayerStatisticsState | undefined;
  setStatistics(value?: LolPlayerStatisticsState): void;

  hasMapStatistics(): boolean;
  clearMapStatistics(): void;
  getMapStatistics(): LolPlayerCurrentMapStatisticsState | undefined;
  setMapStatistics(value?: LolPlayerCurrentMapStatisticsState): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): LolPosition | undefined;
  setPosition(value?: LolPosition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LolPlayerCurrentMapState.AsObject;
  static toObject(includeInstance: boolean, msg: LolPlayerCurrentMapState): LolPlayerCurrentMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LolPlayerCurrentMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LolPlayerCurrentMapState;
  static deserializeBinaryFromReader(message: LolPlayerCurrentMapState, reader: jspb.BinaryReader): LolPlayerCurrentMapState;
}

export namespace LolPlayerCurrentMapState {
  export type AsObject = {
    playerUrn: string,
    playerInfo?: LolPlayerInfoState.AsObject,
    timers?: LolPlayerCurrentMapTimersState.AsObject,
    statistics?: LolPlayerStatisticsState.AsObject,
    mapStatistics?: LolPlayerCurrentMapStatisticsState.AsObject,
    position?: LolPosition.AsObject,
  }
}

export class LolPlayerCurrentMapStatisticsState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getAlive(): boolean;
  setAlive(value: boolean): void;

  getHealth(): number;
  setHealth(value: number): void;

  getMaxHealth(): number;
  setMaxHealth(value: number): void;

  getTotalGold(): number;
  setTotalGold(value: number): void;

  getMana(): number;
  setMana(value: number): void;

  getMaxMana(): number;
  setMaxMana(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LolPlayerCurrentMapStatisticsState.AsObject;
  static toObject(includeInstance: boolean, msg: LolPlayerCurrentMapStatisticsState): LolPlayerCurrentMapStatisticsState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LolPlayerCurrentMapStatisticsState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LolPlayerCurrentMapStatisticsState;
  static deserializeBinaryFromReader(message: LolPlayerCurrentMapStatisticsState, reader: jspb.BinaryReader): LolPlayerCurrentMapStatisticsState;
}

export namespace LolPlayerCurrentMapStatisticsState {
  export type AsObject = {
    playerUrn: string,
    alive: boolean,
    health: number,
    maxHealth: number,
    totalGold: number,
    mana: number,
    maxMana: number,
  }
}

export class LolPlayerCurrentMapTimersState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  hasRespawnTimer(): boolean;
  clearRespawnTimer(): void;
  getRespawnTimer(): google_protobuf_duration_pb.Duration | undefined;
  setRespawnTimer(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LolPlayerCurrentMapTimersState.AsObject;
  static toObject(includeInstance: boolean, msg: LolPlayerCurrentMapTimersState): LolPlayerCurrentMapTimersState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LolPlayerCurrentMapTimersState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LolPlayerCurrentMapTimersState;
  static deserializeBinaryFromReader(message: LolPlayerCurrentMapTimersState, reader: jspb.BinaryReader): LolPlayerCurrentMapTimersState;
}

export namespace LolPlayerCurrentMapTimersState {
  export type AsObject = {
    playerUrn: string,
    respawnTimer?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class LolTeamPreviousMapState extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getFaction(): LolFactionMap[keyof LolFactionMap];
  setFaction(value: LolFactionMap[keyof LolFactionMap]): void;

  getKills(): number;
  setKills(value: number): void;

  getBarons(): number;
  setBarons(value: number): void;

  getDragons(): number;
  setDragons(value: number): void;

  getTurrets(): number;
  setTurrets(value: number): void;

  getInhibitors(): number;
  setInhibitors(value: number): void;

  getGold(): number;
  setGold(value: number): void;

  hasWon(): boolean;
  clearWon(): void;
  getWon(): boolean;
  setWon(value: boolean): void;

  getPlayersMap(): jspb.Map<string, LolPlayerPreviousMapState>;
  clearPlayersMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LolTeamPreviousMapState.AsObject;
  static toObject(includeInstance: boolean, msg: LolTeamPreviousMapState): LolTeamPreviousMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LolTeamPreviousMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LolTeamPreviousMapState;
  static deserializeBinaryFromReader(message: LolTeamPreviousMapState, reader: jspb.BinaryReader): LolTeamPreviousMapState;
}

export namespace LolTeamPreviousMapState {
  export type AsObject = {
    teamUrn: string,
    faction: LolFactionMap[keyof LolFactionMap],
    kills: number,
    barons: number,
    dragons: number,
    turrets: number,
    inhibitors: number,
    gold: number,
    won: boolean,
    playersMap: Array<[string, LolPlayerPreviousMapState.AsObject]>,
  }
}

export class LolPlayerPreviousMapState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  hasPlayerInfo(): boolean;
  clearPlayerInfo(): void;
  getPlayerInfo(): LolPlayerInfoState | undefined;
  setPlayerInfo(value?: LolPlayerInfoState): void;

  hasStatistics(): boolean;
  clearStatistics(): void;
  getStatistics(): LolPlayerStatisticsState | undefined;
  setStatistics(value?: LolPlayerStatisticsState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LolPlayerPreviousMapState.AsObject;
  static toObject(includeInstance: boolean, msg: LolPlayerPreviousMapState): LolPlayerPreviousMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LolPlayerPreviousMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LolPlayerPreviousMapState;
  static deserializeBinaryFromReader(message: LolPlayerPreviousMapState, reader: jspb.BinaryReader): LolPlayerPreviousMapState;
}

export namespace LolPlayerPreviousMapState {
  export type AsObject = {
    playerUrn: string,
    playerInfo?: LolPlayerInfoState.AsObject,
    statistics?: LolPlayerStatisticsState.AsObject,
  }
}

export class LolPlayerInfoState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getSlotId(): number;
  setSlotId(value: number): void;

  getExtName(): string;
  setExtName(value: string): void;

  getExtId(): string;
  setExtId(value: string): void;

  hasChampionId(): boolean;
  clearChampionId(): void;
  getChampionId(): number;
  setChampionId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LolPlayerInfoState.AsObject;
  static toObject(includeInstance: boolean, msg: LolPlayerInfoState): LolPlayerInfoState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LolPlayerInfoState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LolPlayerInfoState;
  static deserializeBinaryFromReader(message: LolPlayerInfoState, reader: jspb.BinaryReader): LolPlayerInfoState;
}

export namespace LolPlayerInfoState {
  export type AsObject = {
    playerUrn: string,
    slotId: number,
    extName: string,
    extId: string,
    championId: number,
  }
}

export class LolPlayerStatisticsState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getKills(): number;
  setKills(value: number): void;

  getDeaths(): number;
  setDeaths(value: number): void;

  getAssists(): number;
  setAssists(value: number): void;

  getCreepScore(): number;
  setCreepScore(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LolPlayerStatisticsState.AsObject;
  static toObject(includeInstance: boolean, msg: LolPlayerStatisticsState): LolPlayerStatisticsState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LolPlayerStatisticsState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LolPlayerStatisticsState;
  static deserializeBinaryFromReader(message: LolPlayerStatisticsState, reader: jspb.BinaryReader): LolPlayerStatisticsState;
}

export namespace LolPlayerStatisticsState {
  export type AsObject = {
    playerUrn: string,
    kills: number,
    deaths: number,
    assists: number,
    creepScore: number,
  }
}

export class LolTurrets extends jspb.Message {
  clearTurretsList(): void;
  getTurretsList(): Array<LolTurret>;
  setTurretsList(value: Array<LolTurret>): void;
  addTurrets(value?: LolTurret, index?: number): LolTurret;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LolTurrets.AsObject;
  static toObject(includeInstance: boolean, msg: LolTurrets): LolTurrets.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LolTurrets, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LolTurrets;
  static deserializeBinaryFromReader(message: LolTurrets, reader: jspb.BinaryReader): LolTurrets;
}

export namespace LolTurrets {
  export type AsObject = {
    turretsList: Array<LolTurret.AsObject>,
  }
}

export class LolInhibitors extends jspb.Message {
  clearInhibitorsList(): void;
  getInhibitorsList(): Array<LolInhibitor>;
  setInhibitorsList(value: Array<LolInhibitor>): void;
  addInhibitors(value?: LolInhibitor, index?: number): LolInhibitor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LolInhibitors.AsObject;
  static toObject(includeInstance: boolean, msg: LolInhibitors): LolInhibitors.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LolInhibitors, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LolInhibitors;
  static deserializeBinaryFromReader(message: LolInhibitors, reader: jspb.BinaryReader): LolInhibitors;
}

export namespace LolInhibitors {
  export type AsObject = {
    inhibitorsList: Array<LolInhibitor.AsObject>,
  }
}

export class LolTurret extends jspb.Message {
  getLane(): LolLaneMap[keyof LolLaneMap];
  setLane(value: LolLaneMap[keyof LolLaneMap]): void;

  getFaction(): LolFactionMap[keyof LolFactionMap];
  setFaction(value: LolFactionMap[keyof LolFactionMap]): void;

  getTier(): LolTurretTierMap[keyof LolTurretTierMap];
  setTier(value: LolTurretTierMap[keyof LolTurretTierMap]): void;

  getAlive(): boolean;
  setAlive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LolTurret.AsObject;
  static toObject(includeInstance: boolean, msg: LolTurret): LolTurret.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LolTurret, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LolTurret;
  static deserializeBinaryFromReader(message: LolTurret, reader: jspb.BinaryReader): LolTurret;
}

export namespace LolTurret {
  export type AsObject = {
    lane: LolLaneMap[keyof LolLaneMap],
    faction: LolFactionMap[keyof LolFactionMap],
    tier: LolTurretTierMap[keyof LolTurretTierMap],
    alive: boolean,
  }
}

export class LolInhibitor extends jspb.Message {
  getLane(): LolLaneMap[keyof LolLaneMap];
  setLane(value: LolLaneMap[keyof LolLaneMap]): void;

  getFaction(): LolFactionMap[keyof LolFactionMap];
  setFaction(value: LolFactionMap[keyof LolFactionMap]): void;

  getAlive(): boolean;
  setAlive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LolInhibitor.AsObject;
  static toObject(includeInstance: boolean, msg: LolInhibitor): LolInhibitor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LolInhibitor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LolInhibitor;
  static deserializeBinaryFromReader(message: LolInhibitor, reader: jspb.BinaryReader): LolInhibitor;
}

export namespace LolInhibitor {
  export type AsObject = {
    lane: LolLaneMap[keyof LolLaneMap],
    faction: LolFactionMap[keyof LolFactionMap],
    alive: boolean,
  }
}

export class LolPosition extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LolPosition.AsObject;
  static toObject(includeInstance: boolean, msg: LolPosition): LolPosition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LolPosition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LolPosition;
  static deserializeBinaryFromReader(message: LolPosition, reader: jspb.BinaryReader): LolPosition;
}

export namespace LolPosition {
  export type AsObject = {
    x: number,
    y: number,
  }
}

export interface LolFactionMap {
  LOL_FACTION_UNSPECIFIED: 0;
  LOL_FACTION_BLUE: 1;
  LOL_FACTION_RED: 2;
}

export const LolFaction: LolFactionMap;

export interface LolLaneMap {
  LOL_LANE_UNSPECIFIED: 0;
  LOL_LANE_TOP: 1;
  LOL_LANE_MID: 2;
  LOL_LANE_BOT: 3;
}

export const LolLane: LolLaneMap;

export interface LolTurretTierMap {
  LOL_TURRET_TIER_UNSPECIFIED: 0;
  LOL_TURRET_TIER_1: 1;
  LOL_TURRET_TIER_2: 2;
  LOL_TURRET_TIER_3: 3;
  LOL_TURRET_TIER_4: 4;
}

export const LolTurretTier: LolTurretTierMap;

