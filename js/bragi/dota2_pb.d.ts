// package: bragi
// file: bragi/dota2.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as bragi_common_pb from "../bragi/common_pb";

export class Dota2MatchMessage extends jspb.Message {
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
  getPayload(): Dota2MatchMessage.Payload | undefined;
  setPayload(value?: Dota2MatchMessage.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2MatchMessage.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2MatchMessage): Dota2MatchMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2MatchMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2MatchMessage;
  static deserializeBinaryFromReader(message: Dota2MatchMessage, reader: jspb.BinaryReader): Dota2MatchMessage;
}

export namespace Dota2MatchMessage {
  export type AsObject = {
    matchUrn: string,
    sequence: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dataStatus: bragi_common_pb.DataStatusMap[keyof bragi_common_pb.DataStatusMap],
    payload?: Dota2MatchMessage.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasSnapshot(): boolean;
    clearSnapshot(): void;
    getSnapshot(): Dota2MatchSnapshot | undefined;
    setSnapshot(value?: Dota2MatchSnapshot): void;

    hasUpdate(): boolean;
    clearUpdate(): void;
    getUpdate(): Dota2MatchUpdate | undefined;
    setUpdate(value?: Dota2MatchUpdate): void;

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
      snapshot?: Dota2MatchSnapshot.AsObject,
      update?: Dota2MatchUpdate.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      SNAPSHOT = 1,
      UPDATE = 2,
    }
  }
}

export class Dota2MatchSnapshot extends jspb.Message {
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
  getMatchState(): Dota2MatchState | undefined;
  setMatchState(value?: Dota2MatchState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2MatchSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2MatchSnapshot): Dota2MatchSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2MatchSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2MatchSnapshot;
  static deserializeBinaryFromReader(message: Dota2MatchSnapshot, reader: jspb.BinaryReader): Dota2MatchSnapshot;
}

export namespace Dota2MatchSnapshot {
  export type AsObject = {
    matchUrn: string,
    sequence: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dataStatus: bragi_common_pb.DataStatusMap[keyof bragi_common_pb.DataStatusMap],
    announcementsList: Array<bragi_common_pb.Announcement.AsObject>,
    matchState?: Dota2MatchState.AsObject,
  }
}

export class Dota2MatchUpdate extends jspb.Message {
  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): Dota2MatchUpdate.Payload | undefined;
  setPayload(value?: Dota2MatchUpdate.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2MatchUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2MatchUpdate): Dota2MatchUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2MatchUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2MatchUpdate;
  static deserializeBinaryFromReader(message: Dota2MatchUpdate, reader: jspb.BinaryReader): Dota2MatchUpdate;
}

export namespace Dota2MatchUpdate {
  export type AsObject = {
    payload?: Dota2MatchUpdate.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasMatchState(): boolean;
    clearMatchState(): void;
    getMatchState(): Dota2MatchState | undefined;
    setMatchState(value?: Dota2MatchState): void;

    hasPartialUpdates(): boolean;
    clearPartialUpdates(): void;
    getPartialUpdates(): Dota2MatchStatePartialUpdates | undefined;
    setPartialUpdates(value?: Dota2MatchStatePartialUpdates): void;

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
      matchState?: Dota2MatchState.AsObject,
      partialUpdates?: Dota2MatchStatePartialUpdates.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      MATCH_STATE = 1,
      PARTIAL_UPDATES = 2,
    }
  }
}

export class Dota2MatchStatePartialUpdates extends jspb.Message {
  clearUpdatesList(): void;
  getUpdatesList(): Array<Dota2MatchStatePartialUpdate>;
  setUpdatesList(value: Array<Dota2MatchStatePartialUpdate>): void;
  addUpdates(value?: Dota2MatchStatePartialUpdate, index?: number): Dota2MatchStatePartialUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2MatchStatePartialUpdates.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2MatchStatePartialUpdates): Dota2MatchStatePartialUpdates.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2MatchStatePartialUpdates, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2MatchStatePartialUpdates;
  static deserializeBinaryFromReader(message: Dota2MatchStatePartialUpdates, reader: jspb.BinaryReader): Dota2MatchStatePartialUpdates;
}

export namespace Dota2MatchStatePartialUpdates {
  export type AsObject = {
    updatesList: Array<Dota2MatchStatePartialUpdate.AsObject>,
  }
}

export class Dota2MatchStatePartialUpdate extends jspb.Message {
  hasScore(): boolean;
  clearScore(): void;
  getScore(): Dota2MatchScoreState | undefined;
  setScore(value?: Dota2MatchScoreState): void;

  hasCurrentMapState(): boolean;
  clearCurrentMapState(): void;
  getCurrentMapState(): Dota2CurrentMapState | undefined;
  setCurrentMapState(value?: Dota2CurrentMapState): void;

  hasCurrentMapStatePartialUpdate(): boolean;
  clearCurrentMapStatePartialUpdate(): void;
  getCurrentMapStatePartialUpdate(): Dota2CurrentMapStatePartialUpdate | undefined;
  setCurrentMapStatePartialUpdate(value?: Dota2CurrentMapStatePartialUpdate): void;

  getUpdateCase(): Dota2MatchStatePartialUpdate.UpdateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2MatchStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2MatchStatePartialUpdate): Dota2MatchStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2MatchStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2MatchStatePartialUpdate;
  static deserializeBinaryFromReader(message: Dota2MatchStatePartialUpdate, reader: jspb.BinaryReader): Dota2MatchStatePartialUpdate;
}

export namespace Dota2MatchStatePartialUpdate {
  export type AsObject = {
    score?: Dota2MatchScoreState.AsObject,
    currentMapState?: Dota2CurrentMapState.AsObject,
    currentMapStatePartialUpdate?: Dota2CurrentMapStatePartialUpdate.AsObject,
  }

  export enum UpdateCase {
    UPDATE_NOT_SET = 0,
    SCORE = 1,
    CURRENT_MAP_STATE = 2,
    CURRENT_MAP_STATE_PARTIAL_UPDATE = 3,
  }
}

export class Dota2MatchState extends jspb.Message {
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
  getScore(): Dota2MatchScoreState | undefined;
  setScore(value?: Dota2MatchScoreState): void;

  getMatchStatus(): bragi_common_pb.MatchStatusTypeMap[keyof bragi_common_pb.MatchStatusTypeMap];
  setMatchStatus(value: bragi_common_pb.MatchStatusTypeMap[keyof bragi_common_pb.MatchStatusTypeMap]): void;

  hasCurrentMap(): boolean;
  clearCurrentMap(): void;
  getCurrentMap(): Dota2CurrentMapState | undefined;
  setCurrentMap(value?: Dota2CurrentMapState): void;

  clearPreviousMapsList(): void;
  getPreviousMapsList(): Array<Dota2PreviousMapState>;
  setPreviousMapsList(value: Array<Dota2PreviousMapState>): void;
  addPreviousMaps(value?: Dota2PreviousMapState, index?: number): Dota2PreviousMapState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2MatchState.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2MatchState): Dota2MatchState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2MatchState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2MatchState;
  static deserializeBinaryFromReader(message: Dota2MatchState, reader: jspb.BinaryReader): Dota2MatchState;
}

export namespace Dota2MatchState {
  export type AsObject = {
    matchUrn: string,
    matchType: bragi_common_pb.BestOfTypeMap[keyof bragi_common_pb.BestOfTypeMap],
    homeTeam?: bragi_common_pb.Team.AsObject,
    awayTeam?: bragi_common_pb.Team.AsObject,
    score?: Dota2MatchScoreState.AsObject,
    matchStatus: bragi_common_pb.MatchStatusTypeMap[keyof bragi_common_pb.MatchStatusTypeMap],
    currentMap?: Dota2CurrentMapState.AsObject,
    previousMapsList: Array<Dota2PreviousMapState.AsObject>,
  }
}

export class Dota2MatchScoreState extends jspb.Message {
  getHomeScore(): number;
  setHomeScore(value: number): void;

  getAwayScore(): number;
  setAwayScore(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2MatchScoreState.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2MatchScoreState): Dota2MatchScoreState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2MatchScoreState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2MatchScoreState;
  static deserializeBinaryFromReader(message: Dota2MatchScoreState, reader: jspb.BinaryReader): Dota2MatchScoreState;
}

export namespace Dota2MatchScoreState {
  export type AsObject = {
    homeScore: number,
    awayScore: number,
  }
}

export class Dota2CurrentMapStatePartialUpdate extends jspb.Message {
  hasGameTime(): boolean;
  clearGameTime(): void;
  getGameTime(): Dota2CurrentMapTimeState | undefined;
  setGameTime(value?: Dota2CurrentMapTimeState): void;

  hasTeamCurrentMapState(): boolean;
  clearTeamCurrentMapState(): void;
  getTeamCurrentMapState(): Dota2TeamCurrentMapState | undefined;
  setTeamCurrentMapState(value?: Dota2TeamCurrentMapState): void;

  hasTeamCurrentMapPartialUpdate(): boolean;
  clearTeamCurrentMapPartialUpdate(): void;
  getTeamCurrentMapPartialUpdate(): Dota2TeamCurrentMapStatePartialUpdate | undefined;
  setTeamCurrentMapPartialUpdate(value?: Dota2TeamCurrentMapStatePartialUpdate): void;

  hasTowers(): boolean;
  clearTowers(): void;
  getTowers(): Dota2Towers | undefined;
  setTowers(value?: Dota2Towers): void;

  hasBarracks(): boolean;
  clearBarracks(): void;
  getBarracks(): Dota2Barracks | undefined;
  setBarracks(value?: Dota2Barracks): void;

  hasRoshan(): boolean;
  clearRoshan(): void;
  getRoshan(): Roshan | undefined;
  setRoshan(value?: Roshan): void;

  getUpdateCase(): Dota2CurrentMapStatePartialUpdate.UpdateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2CurrentMapStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2CurrentMapStatePartialUpdate): Dota2CurrentMapStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2CurrentMapStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2CurrentMapStatePartialUpdate;
  static deserializeBinaryFromReader(message: Dota2CurrentMapStatePartialUpdate, reader: jspb.BinaryReader): Dota2CurrentMapStatePartialUpdate;
}

export namespace Dota2CurrentMapStatePartialUpdate {
  export type AsObject = {
    gameTime?: Dota2CurrentMapTimeState.AsObject,
    teamCurrentMapState?: Dota2TeamCurrentMapState.AsObject,
    teamCurrentMapPartialUpdate?: Dota2TeamCurrentMapStatePartialUpdate.AsObject,
    towers?: Dota2Towers.AsObject,
    barracks?: Dota2Barracks.AsObject,
    roshan?: Roshan.AsObject,
  }

  export enum UpdateCase {
    UPDATE_NOT_SET = 0,
    GAME_TIME = 1,
    TEAM_CURRENT_MAP_STATE = 2,
    TEAM_CURRENT_MAP_PARTIAL_UPDATE = 3,
    TOWERS = 4,
    BARRACKS = 5,
    ROSHAN = 8,
  }
}

export class Dota2CurrentMapState extends jspb.Message {
  getMapOrder(): number;
  setMapOrder(value: number): void;

  getMapPaused(): boolean;
  setMapPaused(value: boolean): void;

  hasGameTime(): boolean;
  clearGameTime(): void;
  getGameTime(): Dota2CurrentMapTimeState | undefined;
  setGameTime(value?: Dota2CurrentMapTimeState): void;

  getTeamsMap(): jspb.Map<string, Dota2TeamCurrentMapState>;
  clearTeamsMap(): void;
  hasTowers(): boolean;
  clearTowers(): void;
  getTowers(): Dota2Towers | undefined;
  setTowers(value?: Dota2Towers): void;

  hasBarracks(): boolean;
  clearBarracks(): void;
  getBarracks(): Dota2Barracks | undefined;
  setBarracks(value?: Dota2Barracks): void;

  hasRoshan(): boolean;
  clearRoshan(): void;
  getRoshan(): Roshan | undefined;
  setRoshan(value?: Roshan): void;

  getDayTime(): boolean;
  setDayTime(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2CurrentMapState.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2CurrentMapState): Dota2CurrentMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2CurrentMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2CurrentMapState;
  static deserializeBinaryFromReader(message: Dota2CurrentMapState, reader: jspb.BinaryReader): Dota2CurrentMapState;
}

export namespace Dota2CurrentMapState {
  export type AsObject = {
    mapOrder: number,
    mapPaused: boolean,
    gameTime?: Dota2CurrentMapTimeState.AsObject,
    teamsMap: Array<[string, Dota2TeamCurrentMapState.AsObject]>,
    towers?: Dota2Towers.AsObject,
    barracks?: Dota2Barracks.AsObject,
    roshan?: Roshan.AsObject,
    dayTime: boolean,
  }
}

export class Dota2CurrentMapTimeState extends jspb.Message {
  hasGameTime(): boolean;
  clearGameTime(): void;
  getGameTime(): google_protobuf_duration_pb.Duration | undefined;
  setGameTime(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2CurrentMapTimeState.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2CurrentMapTimeState): Dota2CurrentMapTimeState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2CurrentMapTimeState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2CurrentMapTimeState;
  static deserializeBinaryFromReader(message: Dota2CurrentMapTimeState, reader: jspb.BinaryReader): Dota2CurrentMapTimeState;
}

export namespace Dota2CurrentMapTimeState {
  export type AsObject = {
    gameTime?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class Dota2PreviousMapState extends jspb.Message {
  getMapOrder(): number;
  setMapOrder(value: number): void;

  getTeamsMap(): jspb.Map<string, Dota2TeamPreviousMapState>;
  clearTeamsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2PreviousMapState.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2PreviousMapState): Dota2PreviousMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2PreviousMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2PreviousMapState;
  static deserializeBinaryFromReader(message: Dota2PreviousMapState, reader: jspb.BinaryReader): Dota2PreviousMapState;
}

export namespace Dota2PreviousMapState {
  export type AsObject = {
    mapOrder: number,
    teamsMap: Array<[string, Dota2TeamPreviousMapState.AsObject]>,
  }
}

export class Dota2TeamCurrentMapStatePartialUpdate extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): Dota2TeamCurrentMapStatePartialUpdate.Payload | undefined;
  setPayload(value?: Dota2TeamCurrentMapStatePartialUpdate.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2TeamCurrentMapStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2TeamCurrentMapStatePartialUpdate): Dota2TeamCurrentMapStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2TeamCurrentMapStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2TeamCurrentMapStatePartialUpdate;
  static deserializeBinaryFromReader(message: Dota2TeamCurrentMapStatePartialUpdate, reader: jspb.BinaryReader): Dota2TeamCurrentMapStatePartialUpdate;
}

export namespace Dota2TeamCurrentMapStatePartialUpdate {
  export type AsObject = {
    teamUrn: string,
    payload?: Dota2TeamCurrentMapStatePartialUpdate.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasStatistics(): boolean;
    clearStatistics(): void;
    getStatistics(): Dota2TeamCurrentMapStatisticsState | undefined;
    setStatistics(value?: Dota2TeamCurrentMapStatisticsState): void;

    hasPlayerCurrentMapState(): boolean;
    clearPlayerCurrentMapState(): void;
    getPlayerCurrentMapState(): Dota2PlayerCurrentMapState | undefined;
    setPlayerCurrentMapState(value?: Dota2PlayerCurrentMapState): void;

    hasPlayerCurrentMapPartialUpdate(): boolean;
    clearPlayerCurrentMapPartialUpdate(): void;
    getPlayerCurrentMapPartialUpdate(): Dota2PlayerCurrentMapStatePartialUpdate | undefined;
    setPlayerCurrentMapPartialUpdate(value?: Dota2PlayerCurrentMapStatePartialUpdate): void;

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
      statistics?: Dota2TeamCurrentMapStatisticsState.AsObject,
      playerCurrentMapState?: Dota2PlayerCurrentMapState.AsObject,
      playerCurrentMapPartialUpdate?: Dota2PlayerCurrentMapStatePartialUpdate.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      STATISTICS = 1,
      PLAYER_CURRENT_MAP_STATE = 2,
      PLAYER_CURRENT_MAP_PARTIAL_UPDATE = 3,
    }
  }
}

export class Dota2TeamCurrentMapState extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getFaction(): Dota2FactionMap[keyof Dota2FactionMap];
  setFaction(value: Dota2FactionMap[keyof Dota2FactionMap]): void;

  hasStatistics(): boolean;
  clearStatistics(): void;
  getStatistics(): Dota2TeamCurrentMapStatisticsState | undefined;
  setStatistics(value?: Dota2TeamCurrentMapStatisticsState): void;

  hasWon(): boolean;
  clearWon(): void;
  getWon(): boolean;
  setWon(value: boolean): void;

  getPlayersMap(): jspb.Map<string, Dota2PlayerCurrentMapState>;
  clearPlayersMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2TeamCurrentMapState.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2TeamCurrentMapState): Dota2TeamCurrentMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2TeamCurrentMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2TeamCurrentMapState;
  static deserializeBinaryFromReader(message: Dota2TeamCurrentMapState, reader: jspb.BinaryReader): Dota2TeamCurrentMapState;
}

export namespace Dota2TeamCurrentMapState {
  export type AsObject = {
    teamUrn: string,
    faction: Dota2FactionMap[keyof Dota2FactionMap],
    statistics?: Dota2TeamCurrentMapStatisticsState.AsObject,
    won: boolean,
    playersMap: Array<[string, Dota2PlayerCurrentMapState.AsObject]>,
  }
}

export class Dota2TeamCurrentMapStatisticsState extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getBarracks(): number;
  setBarracks(value: number): void;

  getKills(): number;
  setKills(value: number): void;

  getNetWorth(): number;
  setNetWorth(value: number): void;

  getRoshans(): number;
  setRoshans(value: number): void;

  getTowers(): number;
  setTowers(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2TeamCurrentMapStatisticsState.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2TeamCurrentMapStatisticsState): Dota2TeamCurrentMapStatisticsState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2TeamCurrentMapStatisticsState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2TeamCurrentMapStatisticsState;
  static deserializeBinaryFromReader(message: Dota2TeamCurrentMapStatisticsState, reader: jspb.BinaryReader): Dota2TeamCurrentMapStatisticsState;
}

export namespace Dota2TeamCurrentMapStatisticsState {
  export type AsObject = {
    teamUrn: string,
    barracks: number,
    kills: number,
    netWorth: number,
    roshans: number,
    towers: number,
  }
}

export class Dota2PlayerCurrentMapStatePartialUpdate extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): Dota2PlayerCurrentMapStatePartialUpdate.Payload | undefined;
  setPayload(value?: Dota2PlayerCurrentMapStatePartialUpdate.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2PlayerCurrentMapStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2PlayerCurrentMapStatePartialUpdate): Dota2PlayerCurrentMapStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2PlayerCurrentMapStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2PlayerCurrentMapStatePartialUpdate;
  static deserializeBinaryFromReader(message: Dota2PlayerCurrentMapStatePartialUpdate, reader: jspb.BinaryReader): Dota2PlayerCurrentMapStatePartialUpdate;
}

export namespace Dota2PlayerCurrentMapStatePartialUpdate {
  export type AsObject = {
    playerUrn: string,
    payload?: Dota2PlayerCurrentMapStatePartialUpdate.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasPlayerInfo(): boolean;
    clearPlayerInfo(): void;
    getPlayerInfo(): Dota2PlayerInfoState | undefined;
    setPlayerInfo(value?: Dota2PlayerInfoState): void;

    hasTimers(): boolean;
    clearTimers(): void;
    getTimers(): Dota2PlayerCurrentMapTimersState | undefined;
    setTimers(value?: Dota2PlayerCurrentMapTimersState): void;

    hasStatistics(): boolean;
    clearStatistics(): void;
    getStatistics(): Dota2PlayerStatisticsState | undefined;
    setStatistics(value?: Dota2PlayerStatisticsState): void;

    hasMapStatistics(): boolean;
    clearMapStatistics(): void;
    getMapStatistics(): Dota2PlayerCurrentMapStatisticsState | undefined;
    setMapStatistics(value?: Dota2PlayerCurrentMapStatisticsState): void;

    hasPosition(): boolean;
    clearPosition(): void;
    getPosition(): Dota2Position | undefined;
    setPosition(value?: Dota2Position): void;

    hasItems(): boolean;
    clearItems(): void;
    getItems(): Dota2Items | undefined;
    setItems(value?: Dota2Items): void;

    hasAbilities(): boolean;
    clearAbilities(): void;
    getAbilities(): Dota2Abilities | undefined;
    setAbilities(value?: Dota2Abilities): void;

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
      playerInfo?: Dota2PlayerInfoState.AsObject,
      timers?: Dota2PlayerCurrentMapTimersState.AsObject,
      statistics?: Dota2PlayerStatisticsState.AsObject,
      mapStatistics?: Dota2PlayerCurrentMapStatisticsState.AsObject,
      position?: Dota2Position.AsObject,
      items?: Dota2Items.AsObject,
      abilities?: Dota2Abilities.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      PLAYER_INFO = 1,
      TIMERS = 2,
      STATISTICS = 3,
      MAP_STATISTICS = 4,
      POSITION = 5,
      ITEMS = 6,
      ABILITIES = 7,
    }
  }
}

export class Dota2PlayerCurrentMapState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  hasPlayerInfo(): boolean;
  clearPlayerInfo(): void;
  getPlayerInfo(): Dota2PlayerInfoState | undefined;
  setPlayerInfo(value?: Dota2PlayerInfoState): void;

  hasTimers(): boolean;
  clearTimers(): void;
  getTimers(): Dota2PlayerCurrentMapTimersState | undefined;
  setTimers(value?: Dota2PlayerCurrentMapTimersState): void;

  hasStatistics(): boolean;
  clearStatistics(): void;
  getStatistics(): Dota2PlayerStatisticsState | undefined;
  setStatistics(value?: Dota2PlayerStatisticsState): void;

  hasMapStatistics(): boolean;
  clearMapStatistics(): void;
  getMapStatistics(): Dota2PlayerCurrentMapStatisticsState | undefined;
  setMapStatistics(value?: Dota2PlayerCurrentMapStatisticsState): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): Dota2Position | undefined;
  setPosition(value?: Dota2Position): void;

  hasItems(): boolean;
  clearItems(): void;
  getItems(): Dota2Items | undefined;
  setItems(value?: Dota2Items): void;

  hasAbilities(): boolean;
  clearAbilities(): void;
  getAbilities(): Dota2Abilities | undefined;
  setAbilities(value?: Dota2Abilities): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2PlayerCurrentMapState.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2PlayerCurrentMapState): Dota2PlayerCurrentMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2PlayerCurrentMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2PlayerCurrentMapState;
  static deserializeBinaryFromReader(message: Dota2PlayerCurrentMapState, reader: jspb.BinaryReader): Dota2PlayerCurrentMapState;
}

export namespace Dota2PlayerCurrentMapState {
  export type AsObject = {
    playerUrn: string,
    playerInfo?: Dota2PlayerInfoState.AsObject,
    timers?: Dota2PlayerCurrentMapTimersState.AsObject,
    statistics?: Dota2PlayerStatisticsState.AsObject,
    mapStatistics?: Dota2PlayerCurrentMapStatisticsState.AsObject,
    position?: Dota2Position.AsObject,
    items?: Dota2Items.AsObject,
    abilities?: Dota2Abilities.AsObject,
  }
}

export class Dota2PlayerCurrentMapStatisticsState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getAlive(): boolean;
  setAlive(value: boolean): void;

  getHealth(): number;
  setHealth(value: number): void;

  getMaxHealth(): number;
  setMaxHealth(value: number): void;

  getCurrentGold(): number;
  setCurrentGold(value: number): void;

  getNetWorth(): number;
  setNetWorth(value: number): void;

  getBuybackCost(): number;
  setBuybackCost(value: number): void;

  getHasBuyback(): boolean;
  setHasBuyback(value: boolean): void;

  getHasAegis(): boolean;
  setHasAegis(value: boolean): void;

  getMana(): number;
  setMana(value: number): void;

  getMaxMana(): number;
  setMaxMana(value: number): void;

  getGoldReliable(): number;
  setGoldReliable(value: number): void;

  getGoldUnreliable(): number;
  setGoldUnreliable(value: number): void;

  getDenies(): number;
  setDenies(value: number): void;

  getLastHits(): number;
  setLastHits(value: number): void;

  getLevel(): number;
  setLevel(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2PlayerCurrentMapStatisticsState.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2PlayerCurrentMapStatisticsState): Dota2PlayerCurrentMapStatisticsState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2PlayerCurrentMapStatisticsState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2PlayerCurrentMapStatisticsState;
  static deserializeBinaryFromReader(message: Dota2PlayerCurrentMapStatisticsState, reader: jspb.BinaryReader): Dota2PlayerCurrentMapStatisticsState;
}

export namespace Dota2PlayerCurrentMapStatisticsState {
  export type AsObject = {
    playerUrn: string,
    alive: boolean,
    health: number,
    maxHealth: number,
    currentGold: number,
    netWorth: number,
    buybackCost: number,
    hasBuyback: boolean,
    hasAegis: boolean,
    mana: number,
    maxMana: number,
    goldReliable: number,
    goldUnreliable: number,
    denies: number,
    lastHits: number,
    level: number,
  }
}

export class Dota2PlayerCurrentMapTimersState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  hasRespawnTimer(): boolean;
  clearRespawnTimer(): void;
  getRespawnTimer(): google_protobuf_duration_pb.Duration | undefined;
  setRespawnTimer(value?: google_protobuf_duration_pb.Duration): void;

  hasBuybackCooldown(): boolean;
  clearBuybackCooldown(): void;
  getBuybackCooldown(): google_protobuf_duration_pb.Duration | undefined;
  setBuybackCooldown(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2PlayerCurrentMapTimersState.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2PlayerCurrentMapTimersState): Dota2PlayerCurrentMapTimersState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2PlayerCurrentMapTimersState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2PlayerCurrentMapTimersState;
  static deserializeBinaryFromReader(message: Dota2PlayerCurrentMapTimersState, reader: jspb.BinaryReader): Dota2PlayerCurrentMapTimersState;
}

export namespace Dota2PlayerCurrentMapTimersState {
  export type AsObject = {
    playerUrn: string,
    respawnTimer?: google_protobuf_duration_pb.Duration.AsObject,
    buybackCooldown?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class Dota2TeamPreviousMapState extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getFaction(): Dota2FactionMap[keyof Dota2FactionMap];
  setFaction(value: Dota2FactionMap[keyof Dota2FactionMap]): void;

  getBarracks(): number;
  setBarracks(value: number): void;

  getKills(): number;
  setKills(value: number): void;

  getNetWorth(): number;
  setNetWorth(value: number): void;

  getRoshans(): number;
  setRoshans(value: number): void;

  getTowers(): number;
  setTowers(value: number): void;

  hasWon(): boolean;
  clearWon(): void;
  getWon(): boolean;
  setWon(value: boolean): void;

  getPlayersMap(): jspb.Map<string, Dota2PlayerPreviousMapState>;
  clearPlayersMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2TeamPreviousMapState.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2TeamPreviousMapState): Dota2TeamPreviousMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2TeamPreviousMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2TeamPreviousMapState;
  static deserializeBinaryFromReader(message: Dota2TeamPreviousMapState, reader: jspb.BinaryReader): Dota2TeamPreviousMapState;
}

export namespace Dota2TeamPreviousMapState {
  export type AsObject = {
    teamUrn: string,
    faction: Dota2FactionMap[keyof Dota2FactionMap],
    barracks: number,
    kills: number,
    netWorth: number,
    roshans: number,
    towers: number,
    won: boolean,
    playersMap: Array<[string, Dota2PlayerPreviousMapState.AsObject]>,
  }
}

export class Dota2PlayerPreviousMapState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  hasPlayerInfo(): boolean;
  clearPlayerInfo(): void;
  getPlayerInfo(): Dota2PlayerInfoState | undefined;
  setPlayerInfo(value?: Dota2PlayerInfoState): void;

  hasStatistics(): boolean;
  clearStatistics(): void;
  getStatistics(): Dota2PlayerStatisticsState | undefined;
  setStatistics(value?: Dota2PlayerStatisticsState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2PlayerPreviousMapState.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2PlayerPreviousMapState): Dota2PlayerPreviousMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2PlayerPreviousMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2PlayerPreviousMapState;
  static deserializeBinaryFromReader(message: Dota2PlayerPreviousMapState, reader: jspb.BinaryReader): Dota2PlayerPreviousMapState;
}

export namespace Dota2PlayerPreviousMapState {
  export type AsObject = {
    playerUrn: string,
    playerInfo?: Dota2PlayerInfoState.AsObject,
    statistics?: Dota2PlayerStatisticsState.AsObject,
  }
}

export class Dota2PlayerInfoState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getSlotId(): number;
  setSlotId(value: number): void;

  getExtName(): string;
  setExtName(value: string): void;

  hasHeroId(): boolean;
  clearHeroId(): void;
  getHeroId(): number;
  setHeroId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2PlayerInfoState.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2PlayerInfoState): Dota2PlayerInfoState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2PlayerInfoState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2PlayerInfoState;
  static deserializeBinaryFromReader(message: Dota2PlayerInfoState, reader: jspb.BinaryReader): Dota2PlayerInfoState;
}

export namespace Dota2PlayerInfoState {
  export type AsObject = {
    playerUrn: string,
    slotId: number,
    extName: string,
    heroId: number,
  }
}

export class Dota2PlayerStatisticsState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getKills(): number;
  setKills(value: number): void;

  getDeaths(): number;
  setDeaths(value: number): void;

  getAssists(): number;
  setAssists(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2PlayerStatisticsState.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2PlayerStatisticsState): Dota2PlayerStatisticsState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2PlayerStatisticsState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2PlayerStatisticsState;
  static deserializeBinaryFromReader(message: Dota2PlayerStatisticsState, reader: jspb.BinaryReader): Dota2PlayerStatisticsState;
}

export namespace Dota2PlayerStatisticsState {
  export type AsObject = {
    playerUrn: string,
    kills: number,
    deaths: number,
    assists: number,
  }
}

export class Dota2Towers extends jspb.Message {
  clearTowersList(): void;
  getTowersList(): Array<Dota2Tower>;
  setTowersList(value: Array<Dota2Tower>): void;
  addTowers(value?: Dota2Tower, index?: number): Dota2Tower;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2Towers.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2Towers): Dota2Towers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2Towers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2Towers;
  static deserializeBinaryFromReader(message: Dota2Towers, reader: jspb.BinaryReader): Dota2Towers;
}

export namespace Dota2Towers {
  export type AsObject = {
    towersList: Array<Dota2Tower.AsObject>,
  }
}

export class Dota2Barracks extends jspb.Message {
  clearBarracksList(): void;
  getBarracksList(): Array<Dota2Barrack>;
  setBarracksList(value: Array<Dota2Barrack>): void;
  addBarracks(value?: Dota2Barrack, index?: number): Dota2Barrack;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2Barracks.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2Barracks): Dota2Barracks.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2Barracks, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2Barracks;
  static deserializeBinaryFromReader(message: Dota2Barracks, reader: jspb.BinaryReader): Dota2Barracks;
}

export namespace Dota2Barracks {
  export type AsObject = {
    barracksList: Array<Dota2Barrack.AsObject>,
  }
}

export class Dota2Abilities extends jspb.Message {
  clearAbilitiesList(): void;
  getAbilitiesList(): Array<Dota2Ability>;
  setAbilitiesList(value: Array<Dota2Ability>): void;
  addAbilities(value?: Dota2Ability, index?: number): Dota2Ability;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2Abilities.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2Abilities): Dota2Abilities.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2Abilities, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2Abilities;
  static deserializeBinaryFromReader(message: Dota2Abilities, reader: jspb.BinaryReader): Dota2Abilities;
}

export namespace Dota2Abilities {
  export type AsObject = {
    abilitiesList: Array<Dota2Ability.AsObject>,
  }
}

export class Dota2Items extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<Dota2Item>;
  setItemsList(value: Array<Dota2Item>): void;
  addItems(value?: Dota2Item, index?: number): Dota2Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2Items.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2Items): Dota2Items.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2Items, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2Items;
  static deserializeBinaryFromReader(message: Dota2Items, reader: jspb.BinaryReader): Dota2Items;
}

export namespace Dota2Items {
  export type AsObject = {
    itemsList: Array<Dota2Item.AsObject>,
  }
}

export class Dota2Item extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasCooldown(): boolean;
  clearCooldown(): void;
  getCooldown(): number;
  setCooldown(value: number): void;

  getPosition(): Dota2ItemPositionMap[keyof Dota2ItemPositionMap];
  setPosition(value: Dota2ItemPositionMap[keyof Dota2ItemPositionMap]): void;

  getLevel(): number;
  setLevel(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2Item.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2Item): Dota2Item.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2Item, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2Item;
  static deserializeBinaryFromReader(message: Dota2Item, reader: jspb.BinaryReader): Dota2Item;
}

export namespace Dota2Item {
  export type AsObject = {
    name: string,
    cooldown: number,
    position: Dota2ItemPositionMap[keyof Dota2ItemPositionMap],
    level: number,
  }
}

export class Dota2Ability extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasCooldown(): boolean;
  clearCooldown(): void;
  getCooldown(): number;
  setCooldown(value: number): void;

  getUltimate(): boolean;
  setUltimate(value: boolean): void;

  getPassive(): boolean;
  setPassive(value: boolean): void;

  getCanCast(): boolean;
  setCanCast(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2Ability.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2Ability): Dota2Ability.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2Ability, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2Ability;
  static deserializeBinaryFromReader(message: Dota2Ability, reader: jspb.BinaryReader): Dota2Ability;
}

export namespace Dota2Ability {
  export type AsObject = {
    name: string,
    cooldown: number,
    ultimate: boolean,
    passive: boolean,
    canCast: boolean,
  }
}

export class Roshan extends jspb.Message {
  getAlive(): boolean;
  setAlive(value: boolean): void;

  getRespawntime(): number;
  setRespawntime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Roshan.AsObject;
  static toObject(includeInstance: boolean, msg: Roshan): Roshan.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Roshan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Roshan;
  static deserializeBinaryFromReader(message: Roshan, reader: jspb.BinaryReader): Roshan;
}

export namespace Roshan {
  export type AsObject = {
    alive: boolean,
    respawntime: number,
  }
}

export class Dota2Tower extends jspb.Message {
  getLane(): Dota2LaneMap[keyof Dota2LaneMap];
  setLane(value: Dota2LaneMap[keyof Dota2LaneMap]): void;

  getFaction(): Dota2FactionMap[keyof Dota2FactionMap];
  setFaction(value: Dota2FactionMap[keyof Dota2FactionMap]): void;

  getTier(): Dota2TowerTierMap[keyof Dota2TowerTierMap];
  setTier(value: Dota2TowerTierMap[keyof Dota2TowerTierMap]): void;

  getAlive(): boolean;
  setAlive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2Tower.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2Tower): Dota2Tower.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2Tower, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2Tower;
  static deserializeBinaryFromReader(message: Dota2Tower, reader: jspb.BinaryReader): Dota2Tower;
}

export namespace Dota2Tower {
  export type AsObject = {
    lane: Dota2LaneMap[keyof Dota2LaneMap],
    faction: Dota2FactionMap[keyof Dota2FactionMap],
    tier: Dota2TowerTierMap[keyof Dota2TowerTierMap],
    alive: boolean,
  }
}

export class Dota2Barrack extends jspb.Message {
  getLane(): Dota2LaneMap[keyof Dota2LaneMap];
  setLane(value: Dota2LaneMap[keyof Dota2LaneMap]): void;

  getFaction(): Dota2FactionMap[keyof Dota2FactionMap];
  setFaction(value: Dota2FactionMap[keyof Dota2FactionMap]): void;

  getType(): Dota2BarrackTypeMap[keyof Dota2BarrackTypeMap];
  setType(value: Dota2BarrackTypeMap[keyof Dota2BarrackTypeMap]): void;

  getAlive(): boolean;
  setAlive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2Barrack.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2Barrack): Dota2Barrack.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2Barrack, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2Barrack;
  static deserializeBinaryFromReader(message: Dota2Barrack, reader: jspb.BinaryReader): Dota2Barrack;
}

export namespace Dota2Barrack {
  export type AsObject = {
    lane: Dota2LaneMap[keyof Dota2LaneMap],
    faction: Dota2FactionMap[keyof Dota2FactionMap],
    type: Dota2BarrackTypeMap[keyof Dota2BarrackTypeMap],
    alive: boolean,
  }
}

export class Dota2Position extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2Position.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2Position): Dota2Position.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2Position, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2Position;
  static deserializeBinaryFromReader(message: Dota2Position, reader: jspb.BinaryReader): Dota2Position;
}

export namespace Dota2Position {
  export type AsObject = {
    x: number,
    y: number,
  }
}

export interface Dota2FactionMap {
  DOTA2_FACTION_UNSPECIFIED: 0;
  DOTA2_FACTION_RADIANT: 1;
  DOTA2_FACTION_DIRE: 2;
}

export const Dota2Faction: Dota2FactionMap;

export interface Dota2LaneMap {
  DOTA2_LANE_UNSPECIFIED: 0;
  DOTA2_LANE_TOP: 1;
  DOTA2_LANE_MID: 2;
  DOTA2_LANE_BOT: 3;
}

export const Dota2Lane: Dota2LaneMap;

export interface Dota2TowerTierMap {
  DOTA2_TOWER_TIER_UNSPECIFIED: 0;
  DOTA2_TOWER_TIER_1: 1;
  DOTA2_TOWER_TIER_2: 2;
  DOTA2_TOWER_TIER_3: 3;
  DOTA2_TOWER_TIER_4: 4;
}

export const Dota2TowerTier: Dota2TowerTierMap;

export interface Dota2BarrackTypeMap {
  DOTA2_BARRACK_TYPE_UNSPECIFIED: 0;
  DOTA2_BARRACK_TYPE_RANGED: 1;
  DOTA2_BARRACK_TYPE_MELEE: 2;
}

export const Dota2BarrackType: Dota2BarrackTypeMap;

export interface Dota2ItemPositionMap {
  DOTA2_ITEM_POSITION_UNSPECIFIED: 0;
  DOTA2_ITEM_POSITION_NEUTRAL: 1;
  DOTA2_ITEM_POSITION_STASH0: 2;
  DOTA2_ITEM_POSITION_STASH1: 3;
  DOTA2_ITEM_POSITION_STASH2: 4;
  DOTA2_ITEM_POSITION_STASH3: 5;
  DOTA2_ITEM_POSITION_STASH4: 6;
  DOTA2_ITEM_POSITION_STASH5: 7;
  DOTA2_ITEM_POSITION_TELEPORT: 8;
  DOTA2_ITEM_POSITION_SLOT0: 9;
  DOTA2_ITEM_POSITION_SLOT1: 10;
  DOTA2_ITEM_POSITION_SLOT2: 11;
  DOTA2_ITEM_POSITION_SLOT3: 12;
  DOTA2_ITEM_POSITION_SLOT4: 13;
  DOTA2_ITEM_POSITION_SLOT5: 14;
  DOTA2_ITEM_POSITION_SLOT6: 15;
  DOTA2_ITEM_POSITION_SLOT7: 16;
  DOTA2_ITEM_POSITION_SLOT8: 17;
}

export const Dota2ItemPosition: Dota2ItemPositionMap;

