// package: bragi
// file: bragi/valorant.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as bragi_common_pb from "../bragi/common_pb";

export class ValorantMatchMessage extends jspb.Message {
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
  getPayload(): ValorantMatchMessage.Payload | undefined;
  setPayload(value?: ValorantMatchMessage.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValorantMatchMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ValorantMatchMessage): ValorantMatchMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValorantMatchMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValorantMatchMessage;
  static deserializeBinaryFromReader(message: ValorantMatchMessage, reader: jspb.BinaryReader): ValorantMatchMessage;
}

export namespace ValorantMatchMessage {
  export type AsObject = {
    matchUrn: string,
    sequence: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dataStatus: bragi_common_pb.DataStatusMap[keyof bragi_common_pb.DataStatusMap],
    payload?: ValorantMatchMessage.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasSnapshot(): boolean;
    clearSnapshot(): void;
    getSnapshot(): ValorantMatchSnapshot | undefined;
    setSnapshot(value?: ValorantMatchSnapshot): void;

    hasUpdate(): boolean;
    clearUpdate(): void;
    getUpdate(): ValorantMatchUpdate | undefined;
    setUpdate(value?: ValorantMatchUpdate): void;

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
      snapshot?: ValorantMatchSnapshot.AsObject,
      update?: ValorantMatchUpdate.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      SNAPSHOT = 1,
      UPDATE = 2,
    }
  }
}

export class ValorantMatchSnapshot extends jspb.Message {
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
  getMatchState(): ValorantMatchState | undefined;
  setMatchState(value?: ValorantMatchState): void;

  hasTournament(): boolean;
  clearTournament(): void;
  getTournament(): bragi_common_pb.Tournament | undefined;
  setTournament(value?: bragi_common_pb.Tournament): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValorantMatchSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: ValorantMatchSnapshot): ValorantMatchSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValorantMatchSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValorantMatchSnapshot;
  static deserializeBinaryFromReader(message: ValorantMatchSnapshot, reader: jspb.BinaryReader): ValorantMatchSnapshot;
}

export namespace ValorantMatchSnapshot {
  export type AsObject = {
    matchUrn: string,
    sequence: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dataStatus: bragi_common_pb.DataStatusMap[keyof bragi_common_pb.DataStatusMap],
    announcementsList: Array<bragi_common_pb.Announcement.AsObject>,
    matchState?: ValorantMatchState.AsObject,
    tournament?: bragi_common_pb.Tournament.AsObject,
  }
}

export class ValorantMatchUpdate extends jspb.Message {
  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): ValorantMatchUpdate.Payload | undefined;
  setPayload(value?: ValorantMatchUpdate.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValorantMatchUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ValorantMatchUpdate): ValorantMatchUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValorantMatchUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValorantMatchUpdate;
  static deserializeBinaryFromReader(message: ValorantMatchUpdate, reader: jspb.BinaryReader): ValorantMatchUpdate;
}

export namespace ValorantMatchUpdate {
  export type AsObject = {
    payload?: ValorantMatchUpdate.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasMatchState(): boolean;
    clearMatchState(): void;
    getMatchState(): ValorantMatchState | undefined;
    setMatchState(value?: ValorantMatchState): void;

    hasPartialUpdates(): boolean;
    clearPartialUpdates(): void;
    getPartialUpdates(): ValorantMatchStatePartialUpdates | undefined;
    setPartialUpdates(value?: ValorantMatchStatePartialUpdates): void;

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
      matchState?: ValorantMatchState.AsObject,
      partialUpdates?: ValorantMatchStatePartialUpdates.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      MATCH_STATE = 1,
      PARTIAL_UPDATES = 2,
    }
  }
}

export class ValorantMatchStatePartialUpdates extends jspb.Message {
  clearUpdatesList(): void;
  getUpdatesList(): Array<ValorantMatchStatePartialUpdate>;
  setUpdatesList(value: Array<ValorantMatchStatePartialUpdate>): void;
  addUpdates(value?: ValorantMatchStatePartialUpdate, index?: number): ValorantMatchStatePartialUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValorantMatchStatePartialUpdates.AsObject;
  static toObject(includeInstance: boolean, msg: ValorantMatchStatePartialUpdates): ValorantMatchStatePartialUpdates.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValorantMatchStatePartialUpdates, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValorantMatchStatePartialUpdates;
  static deserializeBinaryFromReader(message: ValorantMatchStatePartialUpdates, reader: jspb.BinaryReader): ValorantMatchStatePartialUpdates;
}

export namespace ValorantMatchStatePartialUpdates {
  export type AsObject = {
    updatesList: Array<ValorantMatchStatePartialUpdate.AsObject>,
  }
}

export class ValorantMatchStatePartialUpdate extends jspb.Message {
  hasScore(): boolean;
  clearScore(): void;
  getScore(): ValorantMatchScoreState | undefined;
  setScore(value?: ValorantMatchScoreState): void;

  hasCurrentMap(): boolean;
  clearCurrentMap(): void;
  getCurrentMap(): ValorantCurrentMapState | undefined;
  setCurrentMap(value?: ValorantCurrentMapState): void;

  hasCurrentMapPartialUpdate(): boolean;
  clearCurrentMapPartialUpdate(): void;
  getCurrentMapPartialUpdate(): ValorantCurrentMapStatePartialUpdate | undefined;
  setCurrentMapPartialUpdate(value?: ValorantCurrentMapStatePartialUpdate): void;

  getUpdateCase(): ValorantMatchStatePartialUpdate.UpdateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValorantMatchStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ValorantMatchStatePartialUpdate): ValorantMatchStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValorantMatchStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValorantMatchStatePartialUpdate;
  static deserializeBinaryFromReader(message: ValorantMatchStatePartialUpdate, reader: jspb.BinaryReader): ValorantMatchStatePartialUpdate;
}

export namespace ValorantMatchStatePartialUpdate {
  export type AsObject = {
    score?: ValorantMatchScoreState.AsObject,
    currentMap?: ValorantCurrentMapState.AsObject,
    currentMapPartialUpdate?: ValorantCurrentMapStatePartialUpdate.AsObject,
  }

  export enum UpdateCase {
    UPDATE_NOT_SET = 0,
    SCORE = 1,
    CURRENT_MAP = 2,
    CURRENT_MAP_PARTIAL_UPDATE = 3,
  }
}

export class ValorantMatchState extends jspb.Message {
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
  getScore(): ValorantMatchScoreState | undefined;
  setScore(value?: ValorantMatchScoreState): void;

  getMatchStatus(): bragi_common_pb.MatchStatusTypeMap[keyof bragi_common_pb.MatchStatusTypeMap];
  setMatchStatus(value: bragi_common_pb.MatchStatusTypeMap[keyof bragi_common_pb.MatchStatusTypeMap]): void;

  hasCurrentMap(): boolean;
  clearCurrentMap(): void;
  getCurrentMap(): ValorantCurrentMapState | undefined;
  setCurrentMap(value?: ValorantCurrentMapState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValorantMatchState.AsObject;
  static toObject(includeInstance: boolean, msg: ValorantMatchState): ValorantMatchState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValorantMatchState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValorantMatchState;
  static deserializeBinaryFromReader(message: ValorantMatchState, reader: jspb.BinaryReader): ValorantMatchState;
}

export namespace ValorantMatchState {
  export type AsObject = {
    matchUrn: string,
    matchType: bragi_common_pb.BestOfTypeMap[keyof bragi_common_pb.BestOfTypeMap],
    homeTeam?: bragi_common_pb.Team.AsObject,
    awayTeam?: bragi_common_pb.Team.AsObject,
    score?: ValorantMatchScoreState.AsObject,
    matchStatus: bragi_common_pb.MatchStatusTypeMap[keyof bragi_common_pb.MatchStatusTypeMap],
    currentMap?: ValorantCurrentMapState.AsObject,
  }
}

export class ValorantMatchScoreState extends jspb.Message {
  getHomeScore(): number;
  setHomeScore(value: number): void;

  getAwayScore(): number;
  setAwayScore(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValorantMatchScoreState.AsObject;
  static toObject(includeInstance: boolean, msg: ValorantMatchScoreState): ValorantMatchScoreState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValorantMatchScoreState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValorantMatchScoreState;
  static deserializeBinaryFromReader(message: ValorantMatchScoreState, reader: jspb.BinaryReader): ValorantMatchScoreState;
}

export namespace ValorantMatchScoreState {
  export type AsObject = {
    homeScore: number,
    awayScore: number,
  }
}

export class ValorantCurrentMapStatePartialUpdate extends jspb.Message {
  hasScore(): boolean;
  clearScore(): void;
  getScore(): ValorantMapScoreState | undefined;
  setScore(value?: ValorantMapScoreState): void;

  hasCurrentRound(): boolean;
  clearCurrentRound(): void;
  getCurrentRound(): ValorantCurrentRoundState | undefined;
  setCurrentRound(value?: ValorantCurrentRoundState): void;

  hasCurrentRoundPartialUpdate(): boolean;
  clearCurrentRoundPartialUpdate(): void;
  getCurrentRoundPartialUpdate(): ValorantCurrentRoundStatePartialUpdate | undefined;
  setCurrentRoundPartialUpdate(value?: ValorantCurrentRoundStatePartialUpdate): void;

  hasTeamCurrentMapState(): boolean;
  clearTeamCurrentMapState(): void;
  getTeamCurrentMapState(): ValorantTeamCurrentMapState | undefined;
  setTeamCurrentMapState(value?: ValorantTeamCurrentMapState): void;

  hasTeamCurrentMapPartialUpdate(): boolean;
  clearTeamCurrentMapPartialUpdate(): void;
  getTeamCurrentMapPartialUpdate(): ValorantTeamCurrentMapStatePartialUpdate | undefined;
  setTeamCurrentMapPartialUpdate(value?: ValorantTeamCurrentMapStatePartialUpdate): void;

  hasPreviousRounds(): boolean;
  clearPreviousRounds(): void;
  getPreviousRounds(): ValorantPreviousRoundsState | undefined;
  setPreviousRounds(value?: ValorantPreviousRoundsState): void;

  getUpdateCase(): ValorantCurrentMapStatePartialUpdate.UpdateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValorantCurrentMapStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ValorantCurrentMapStatePartialUpdate): ValorantCurrentMapStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValorantCurrentMapStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValorantCurrentMapStatePartialUpdate;
  static deserializeBinaryFromReader(message: ValorantCurrentMapStatePartialUpdate, reader: jspb.BinaryReader): ValorantCurrentMapStatePartialUpdate;
}

export namespace ValorantCurrentMapStatePartialUpdate {
  export type AsObject = {
    score?: ValorantMapScoreState.AsObject,
    currentRound?: ValorantCurrentRoundState.AsObject,
    currentRoundPartialUpdate?: ValorantCurrentRoundStatePartialUpdate.AsObject,
    teamCurrentMapState?: ValorantTeamCurrentMapState.AsObject,
    teamCurrentMapPartialUpdate?: ValorantTeamCurrentMapStatePartialUpdate.AsObject,
    previousRounds?: ValorantPreviousRoundsState.AsObject,
  }

  export enum UpdateCase {
    UPDATE_NOT_SET = 0,
    SCORE = 1,
    CURRENT_ROUND = 2,
    CURRENT_ROUND_PARTIAL_UPDATE = 3,
    TEAM_CURRENT_MAP_STATE = 4,
    TEAM_CURRENT_MAP_PARTIAL_UPDATE = 5,
    PREVIOUS_ROUNDS = 6,
  }
}

export class ValorantCurrentMapState extends jspb.Message {
  getMapOrder(): number;
  setMapOrder(value: number): void;

  getMapPaused(): boolean;
  setMapPaused(value: boolean): void;

  getMapName(): string;
  setMapName(value: string): void;

  hasWinTeamUrn(): boolean;
  clearWinTeamUrn(): void;
  getWinTeamUrn(): string;
  setWinTeamUrn(value: string): void;

  hasScore(): boolean;
  clearScore(): void;
  getScore(): ValorantMapScoreState | undefined;
  setScore(value?: ValorantMapScoreState): void;

  hasCurrentRound(): boolean;
  clearCurrentRound(): void;
  getCurrentRound(): ValorantCurrentRoundState | undefined;
  setCurrentRound(value?: ValorantCurrentRoundState): void;

  getTeamsMap(): jspb.Map<string, ValorantTeamCurrentMapState>;
  clearTeamsMap(): void;
  hasPreviousRounds(): boolean;
  clearPreviousRounds(): void;
  getPreviousRounds(): ValorantPreviousRoundsState | undefined;
  setPreviousRounds(value?: ValorantPreviousRoundsState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValorantCurrentMapState.AsObject;
  static toObject(includeInstance: boolean, msg: ValorantCurrentMapState): ValorantCurrentMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValorantCurrentMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValorantCurrentMapState;
  static deserializeBinaryFromReader(message: ValorantCurrentMapState, reader: jspb.BinaryReader): ValorantCurrentMapState;
}

export namespace ValorantCurrentMapState {
  export type AsObject = {
    mapOrder: number,
    mapPaused: boolean,
    mapName: string,
    winTeamUrn: string,
    score?: ValorantMapScoreState.AsObject,
    currentRound?: ValorantCurrentRoundState.AsObject,
    teamsMap: Array<[string, ValorantTeamCurrentMapState.AsObject]>,
    previousRounds?: ValorantPreviousRoundsState.AsObject,
  }
}

export class ValorantMapScoreState extends jspb.Message {
  getHomeScore(): number;
  setHomeScore(value: number): void;

  getAwayScore(): number;
  setAwayScore(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValorantMapScoreState.AsObject;
  static toObject(includeInstance: boolean, msg: ValorantMapScoreState): ValorantMapScoreState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValorantMapScoreState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValorantMapScoreState;
  static deserializeBinaryFromReader(message: ValorantMapScoreState, reader: jspb.BinaryReader): ValorantMapScoreState;
}

export namespace ValorantMapScoreState {
  export type AsObject = {
    homeScore: number,
    awayScore: number,
  }
}

export class ValorantPreviousRoundsState extends jspb.Message {
  clearRoundsList(): void;
  getRoundsList(): Array<ValorantPreviousRound>;
  setRoundsList(value: Array<ValorantPreviousRound>): void;
  addRounds(value?: ValorantPreviousRound, index?: number): ValorantPreviousRound;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValorantPreviousRoundsState.AsObject;
  static toObject(includeInstance: boolean, msg: ValorantPreviousRoundsState): ValorantPreviousRoundsState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValorantPreviousRoundsState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValorantPreviousRoundsState;
  static deserializeBinaryFromReader(message: ValorantPreviousRoundsState, reader: jspb.BinaryReader): ValorantPreviousRoundsState;
}

export namespace ValorantPreviousRoundsState {
  export type AsObject = {
    roundsList: Array<ValorantPreviousRound.AsObject>,
  }
}

export class ValorantTeamCurrentMapStatePartialUpdate extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): ValorantTeamCurrentMapStatePartialUpdate.Payload | undefined;
  setPayload(value?: ValorantTeamCurrentMapStatePartialUpdate.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValorantTeamCurrentMapStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ValorantTeamCurrentMapStatePartialUpdate): ValorantTeamCurrentMapStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValorantTeamCurrentMapStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValorantTeamCurrentMapStatePartialUpdate;
  static deserializeBinaryFromReader(message: ValorantTeamCurrentMapStatePartialUpdate, reader: jspb.BinaryReader): ValorantTeamCurrentMapStatePartialUpdate;
}

export namespace ValorantTeamCurrentMapStatePartialUpdate {
  export type AsObject = {
    teamUrn: string,
    payload?: ValorantTeamCurrentMapStatePartialUpdate.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasPlayerCurrentMapState(): boolean;
    clearPlayerCurrentMapState(): void;
    getPlayerCurrentMapState(): ValorantPlayerCurrentMapState | undefined;
    setPlayerCurrentMapState(value?: ValorantPlayerCurrentMapState): void;

    hasPlayerCurrentMapPartialUpdate(): boolean;
    clearPlayerCurrentMapPartialUpdate(): void;
    getPlayerCurrentMapPartialUpdate(): ValorantPlayerCurrentMapStatePartialUpdate | undefined;
    setPlayerCurrentMapPartialUpdate(value?: ValorantPlayerCurrentMapStatePartialUpdate): void;

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
      playerCurrentMapState?: ValorantPlayerCurrentMapState.AsObject,
      playerCurrentMapPartialUpdate?: ValorantPlayerCurrentMapStatePartialUpdate.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      PLAYER_CURRENT_MAP_STATE = 1,
      PLAYER_CURRENT_MAP_PARTIAL_UPDATE = 2,
    }
  }
}

export class ValorantTeamCurrentMapState extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getSide(): ValorantSideMap[keyof ValorantSideMap];
  setSide(value: ValorantSideMap[keyof ValorantSideMap]): void;

  getPlayersMap(): jspb.Map<string, ValorantPlayerCurrentMapState>;
  clearPlayersMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValorantTeamCurrentMapState.AsObject;
  static toObject(includeInstance: boolean, msg: ValorantTeamCurrentMapState): ValorantTeamCurrentMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValorantTeamCurrentMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValorantTeamCurrentMapState;
  static deserializeBinaryFromReader(message: ValorantTeamCurrentMapState, reader: jspb.BinaryReader): ValorantTeamCurrentMapState;
}

export namespace ValorantTeamCurrentMapState {
  export type AsObject = {
    teamUrn: string,
    side: ValorantSideMap[keyof ValorantSideMap],
    playersMap: Array<[string, ValorantPlayerCurrentMapState.AsObject]>,
  }
}

export class ValorantPlayerCurrentMapStatePartialUpdate extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): ValorantPlayerCurrentMapStatePartialUpdate.Payload | undefined;
  setPayload(value?: ValorantPlayerCurrentMapStatePartialUpdate.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValorantPlayerCurrentMapStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ValorantPlayerCurrentMapStatePartialUpdate): ValorantPlayerCurrentMapStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValorantPlayerCurrentMapStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValorantPlayerCurrentMapStatePartialUpdate;
  static deserializeBinaryFromReader(message: ValorantPlayerCurrentMapStatePartialUpdate, reader: jspb.BinaryReader): ValorantPlayerCurrentMapStatePartialUpdate;
}

export namespace ValorantPlayerCurrentMapStatePartialUpdate {
  export type AsObject = {
    playerUrn: string,
    payload?: ValorantPlayerCurrentMapStatePartialUpdate.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasPlayerInfo(): boolean;
    clearPlayerInfo(): void;
    getPlayerInfo(): ValorantPlayerInfoState | undefined;
    setPlayerInfo(value?: ValorantPlayerInfoState): void;

    hasAbilities(): boolean;
    clearAbilities(): void;
    getAbilities(): ValorantAbilitiesState | undefined;
    setAbilities(value?: ValorantAbilitiesState): void;

    hasStatistics(): boolean;
    clearStatistics(): void;
    getStatistics(): ValorantPlayerCurrentMapStatisticsState | undefined;
    setStatistics(value?: ValorantPlayerCurrentMapStatisticsState): void;

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
      playerInfo?: ValorantPlayerInfoState.AsObject,
      abilities?: ValorantAbilitiesState.AsObject,
      statistics?: ValorantPlayerCurrentMapStatisticsState.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      PLAYER_INFO = 1,
      ABILITIES = 2,
      STATISTICS = 3,
    }
  }
}

export class ValorantPlayerCurrentMapState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getAgentUrn(): string;
  setAgentUrn(value: string): void;

  hasPlayerInfo(): boolean;
  clearPlayerInfo(): void;
  getPlayerInfo(): ValorantPlayerInfoState | undefined;
  setPlayerInfo(value?: ValorantPlayerInfoState): void;

  hasAbilities(): boolean;
  clearAbilities(): void;
  getAbilities(): ValorantAbilitiesState | undefined;
  setAbilities(value?: ValorantAbilitiesState): void;

  hasStatistics(): boolean;
  clearStatistics(): void;
  getStatistics(): ValorantPlayerCurrentMapStatisticsState | undefined;
  setStatistics(value?: ValorantPlayerCurrentMapStatisticsState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValorantPlayerCurrentMapState.AsObject;
  static toObject(includeInstance: boolean, msg: ValorantPlayerCurrentMapState): ValorantPlayerCurrentMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValorantPlayerCurrentMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValorantPlayerCurrentMapState;
  static deserializeBinaryFromReader(message: ValorantPlayerCurrentMapState, reader: jspb.BinaryReader): ValorantPlayerCurrentMapState;
}

export namespace ValorantPlayerCurrentMapState {
  export type AsObject = {
    playerUrn: string,
    agentUrn: string,
    playerInfo?: ValorantPlayerInfoState.AsObject,
    abilities?: ValorantAbilitiesState.AsObject,
    statistics?: ValorantPlayerCurrentMapStatisticsState.AsObject,
  }
}

export class ValorantPlayerCurrentMapStatisticsState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getKills(): number;
  setKills(value: number): void;

  getDeaths(): number;
  setDeaths(value: number): void;

  getAssists(): number;
  setAssists(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValorantPlayerCurrentMapStatisticsState.AsObject;
  static toObject(includeInstance: boolean, msg: ValorantPlayerCurrentMapStatisticsState): ValorantPlayerCurrentMapStatisticsState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValorantPlayerCurrentMapStatisticsState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValorantPlayerCurrentMapStatisticsState;
  static deserializeBinaryFromReader(message: ValorantPlayerCurrentMapStatisticsState, reader: jspb.BinaryReader): ValorantPlayerCurrentMapStatisticsState;
}

export namespace ValorantPlayerCurrentMapStatisticsState {
  export type AsObject = {
    playerUrn: string,
    kills: number,
    deaths: number,
    assists: number,
  }
}

export class ValorantCurrentRoundStatePartialUpdate extends jspb.Message {
  hasRoundInfo(): boolean;
  clearRoundInfo(): void;
  getRoundInfo(): ValorantRoundInfoState | undefined;
  setRoundInfo(value?: ValorantRoundInfoState): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): ValorantCurrentRoundTimeState | undefined;
  setTime(value?: ValorantCurrentRoundTimeState): void;

  hasSpike(): boolean;
  clearSpike(): void;
  getSpike(): ValorantCurrentRoundTeamSpikeState | undefined;
  setSpike(value?: ValorantCurrentRoundTeamSpikeState): void;

  hasTeamCurrentRoundState(): boolean;
  clearTeamCurrentRoundState(): void;
  getTeamCurrentRoundState(): ValorantTeamCurrentRoundState | undefined;
  setTeamCurrentRoundState(value?: ValorantTeamCurrentRoundState): void;

  hasTeamCurrentRoundPartialUpdate(): boolean;
  clearTeamCurrentRoundPartialUpdate(): void;
  getTeamCurrentRoundPartialUpdate(): ValorantTeamCurrentRoundStatePartialUpdate | undefined;
  setTeamCurrentRoundPartialUpdate(value?: ValorantTeamCurrentRoundStatePartialUpdate): void;

  getUpdateCase(): ValorantCurrentRoundStatePartialUpdate.UpdateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValorantCurrentRoundStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ValorantCurrentRoundStatePartialUpdate): ValorantCurrentRoundStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValorantCurrentRoundStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValorantCurrentRoundStatePartialUpdate;
  static deserializeBinaryFromReader(message: ValorantCurrentRoundStatePartialUpdate, reader: jspb.BinaryReader): ValorantCurrentRoundStatePartialUpdate;
}

export namespace ValorantCurrentRoundStatePartialUpdate {
  export type AsObject = {
    roundInfo?: ValorantRoundInfoState.AsObject,
    time?: ValorantCurrentRoundTimeState.AsObject,
    spike?: ValorantCurrentRoundTeamSpikeState.AsObject,
    teamCurrentRoundState?: ValorantTeamCurrentRoundState.AsObject,
    teamCurrentRoundPartialUpdate?: ValorantTeamCurrentRoundStatePartialUpdate.AsObject,
  }

  export enum UpdateCase {
    UPDATE_NOT_SET = 0,
    ROUND_INFO = 1,
    TIME = 2,
    SPIKE = 3,
    TEAM_CURRENT_ROUND_STATE = 4,
    TEAM_CURRENT_ROUND_PARTIAL_UPDATE = 5,
  }
}

export class ValorantCurrentRoundState extends jspb.Message {
  hasRoundInfo(): boolean;
  clearRoundInfo(): void;
  getRoundInfo(): ValorantRoundInfoState | undefined;
  setRoundInfo(value?: ValorantRoundInfoState): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): ValorantCurrentRoundTimeState | undefined;
  setTime(value?: ValorantCurrentRoundTimeState): void;

  hasSpike(): boolean;
  clearSpike(): void;
  getSpike(): ValorantCurrentRoundTeamSpikeState | undefined;
  setSpike(value?: ValorantCurrentRoundTeamSpikeState): void;

  getTeamsMap(): jspb.Map<string, ValorantTeamCurrentRoundState>;
  clearTeamsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValorantCurrentRoundState.AsObject;
  static toObject(includeInstance: boolean, msg: ValorantCurrentRoundState): ValorantCurrentRoundState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValorantCurrentRoundState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValorantCurrentRoundState;
  static deserializeBinaryFromReader(message: ValorantCurrentRoundState, reader: jspb.BinaryReader): ValorantCurrentRoundState;
}

export namespace ValorantCurrentRoundState {
  export type AsObject = {
    roundInfo?: ValorantRoundInfoState.AsObject,
    time?: ValorantCurrentRoundTimeState.AsObject,
    spike?: ValorantCurrentRoundTeamSpikeState.AsObject,
    teamsMap: Array<[string, ValorantTeamCurrentRoundState.AsObject]>,
  }
}

export class ValorantRoundInfoState extends jspb.Message {
  getNumber(): number;
  setNumber(value: number): void;

  getPhase(): ValorantRoundPhaseMap[keyof ValorantRoundPhaseMap];
  setPhase(value: ValorantRoundPhaseMap[keyof ValorantRoundPhaseMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValorantRoundInfoState.AsObject;
  static toObject(includeInstance: boolean, msg: ValorantRoundInfoState): ValorantRoundInfoState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValorantRoundInfoState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValorantRoundInfoState;
  static deserializeBinaryFromReader(message: ValorantRoundInfoState, reader: jspb.BinaryReader): ValorantRoundInfoState;
}

export namespace ValorantRoundInfoState {
  export type AsObject = {
    number: number,
    phase: ValorantRoundPhaseMap[keyof ValorantRoundPhaseMap],
  }
}

export class ValorantCurrentRoundTimeState extends jspb.Message {
  hasTimeRemaining(): boolean;
  clearTimeRemaining(): void;
  getTimeRemaining(): google_protobuf_duration_pb.Duration | undefined;
  setTimeRemaining(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValorantCurrentRoundTimeState.AsObject;
  static toObject(includeInstance: boolean, msg: ValorantCurrentRoundTimeState): ValorantCurrentRoundTimeState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValorantCurrentRoundTimeState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValorantCurrentRoundTimeState;
  static deserializeBinaryFromReader(message: ValorantCurrentRoundTimeState, reader: jspb.BinaryReader): ValorantCurrentRoundTimeState;
}

export namespace ValorantCurrentRoundTimeState {
  export type AsObject = {
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class ValorantCurrentRoundTeamSpikeState extends jspb.Message {
  getState(): ValorantSpikeStateMap[keyof ValorantSpikeStateMap];
  setState(value: ValorantSpikeStateMap[keyof ValorantSpikeStateMap]): void;

  hasTimeToDefused(): boolean;
  clearTimeToDefused(): void;
  getTimeToDefused(): google_protobuf_duration_pb.Duration | undefined;
  setTimeToDefused(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValorantCurrentRoundTeamSpikeState.AsObject;
  static toObject(includeInstance: boolean, msg: ValorantCurrentRoundTeamSpikeState): ValorantCurrentRoundTeamSpikeState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValorantCurrentRoundTeamSpikeState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValorantCurrentRoundTeamSpikeState;
  static deserializeBinaryFromReader(message: ValorantCurrentRoundTeamSpikeState, reader: jspb.BinaryReader): ValorantCurrentRoundTeamSpikeState;
}

export namespace ValorantCurrentRoundTeamSpikeState {
  export type AsObject = {
    state: ValorantSpikeStateMap[keyof ValorantSpikeStateMap],
    timeToDefused?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class ValorantTeamCurrentRoundStatePartialUpdate extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): ValorantTeamCurrentRoundStatePartialUpdate.Payload | undefined;
  setPayload(value?: ValorantTeamCurrentRoundStatePartialUpdate.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValorantTeamCurrentRoundStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ValorantTeamCurrentRoundStatePartialUpdate): ValorantTeamCurrentRoundStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValorantTeamCurrentRoundStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValorantTeamCurrentRoundStatePartialUpdate;
  static deserializeBinaryFromReader(message: ValorantTeamCurrentRoundStatePartialUpdate, reader: jspb.BinaryReader): ValorantTeamCurrentRoundStatePartialUpdate;
}

export namespace ValorantTeamCurrentRoundStatePartialUpdate {
  export type AsObject = {
    teamUrn: string,
    payload?: ValorantTeamCurrentRoundStatePartialUpdate.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasPlayerCurrentRoundState(): boolean;
    clearPlayerCurrentRoundState(): void;
    getPlayerCurrentRoundState(): ValorantPlayerCurrentRoundState | undefined;
    setPlayerCurrentRoundState(value?: ValorantPlayerCurrentRoundState): void;

    hasPlayerCurrentRoundPartialUpdate(): boolean;
    clearPlayerCurrentRoundPartialUpdate(): void;
    getPlayerCurrentRoundPartialUpdate(): ValorantPlayerCurrentRoundStatePartialUpdate | undefined;
    setPlayerCurrentRoundPartialUpdate(value?: ValorantPlayerCurrentRoundStatePartialUpdate): void;

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
      playerCurrentRoundState?: ValorantPlayerCurrentRoundState.AsObject,
      playerCurrentRoundPartialUpdate?: ValorantPlayerCurrentRoundStatePartialUpdate.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      PLAYER_CURRENT_ROUND_STATE = 3,
      PLAYER_CURRENT_ROUND_PARTIAL_UPDATE = 2,
    }
  }
}

export class ValorantTeamCurrentRoundState extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getSide(): ValorantSideMap[keyof ValorantSideMap];
  setSide(value: ValorantSideMap[keyof ValorantSideMap]): void;

  getPlayersMap(): jspb.Map<string, ValorantPlayerCurrentRoundState>;
  clearPlayersMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValorantTeamCurrentRoundState.AsObject;
  static toObject(includeInstance: boolean, msg: ValorantTeamCurrentRoundState): ValorantTeamCurrentRoundState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValorantTeamCurrentRoundState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValorantTeamCurrentRoundState;
  static deserializeBinaryFromReader(message: ValorantTeamCurrentRoundState, reader: jspb.BinaryReader): ValorantTeamCurrentRoundState;
}

export namespace ValorantTeamCurrentRoundState {
  export type AsObject = {
    teamUrn: string,
    side: ValorantSideMap[keyof ValorantSideMap],
    playersMap: Array<[string, ValorantPlayerCurrentRoundState.AsObject]>,
  }
}

export class ValorantPlayerCurrentRoundStatePartialUpdate extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): ValorantPlayerCurrentRoundStatePartialUpdate.Payload | undefined;
  setPayload(value?: ValorantPlayerCurrentRoundStatePartialUpdate.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValorantPlayerCurrentRoundStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ValorantPlayerCurrentRoundStatePartialUpdate): ValorantPlayerCurrentRoundStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValorantPlayerCurrentRoundStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValorantPlayerCurrentRoundStatePartialUpdate;
  static deserializeBinaryFromReader(message: ValorantPlayerCurrentRoundStatePartialUpdate, reader: jspb.BinaryReader): ValorantPlayerCurrentRoundStatePartialUpdate;
}

export namespace ValorantPlayerCurrentRoundStatePartialUpdate {
  export type AsObject = {
    playerUrn: string,
    payload?: ValorantPlayerCurrentRoundStatePartialUpdate.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasPlayerInfo(): boolean;
    clearPlayerInfo(): void;
    getPlayerInfo(): ValorantPlayerInfoState | undefined;
    setPlayerInfo(value?: ValorantPlayerInfoState): void;

    hasStatistics(): boolean;
    clearStatistics(): void;
    getStatistics(): ValorantPlayerCurrentRoundStatisticsState | undefined;
    setStatistics(value?: ValorantPlayerCurrentRoundStatisticsState): void;

    hasWeapons(): boolean;
    clearWeapons(): void;
    getWeapons(): ValorantWeaponsState | undefined;
    setWeapons(value?: ValorantWeaponsState): void;

    hasPosition(): boolean;
    clearPosition(): void;
    getPosition(): ValorantPositionState | undefined;
    setPosition(value?: ValorantPositionState): void;

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
      playerInfo?: ValorantPlayerInfoState.AsObject,
      statistics?: ValorantPlayerCurrentRoundStatisticsState.AsObject,
      weapons?: ValorantWeaponsState.AsObject,
      position?: ValorantPositionState.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      PLAYER_INFO = 1,
      STATISTICS = 2,
      WEAPONS = 3,
      POSITION = 4,
    }
  }
}

export class ValorantPlayerCurrentRoundState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  hasPlayerInfo(): boolean;
  clearPlayerInfo(): void;
  getPlayerInfo(): ValorantPlayerInfoState | undefined;
  setPlayerInfo(value?: ValorantPlayerInfoState): void;

  hasStatistics(): boolean;
  clearStatistics(): void;
  getStatistics(): ValorantPlayerCurrentRoundStatisticsState | undefined;
  setStatistics(value?: ValorantPlayerCurrentRoundStatisticsState): void;

  hasWeapons(): boolean;
  clearWeapons(): void;
  getWeapons(): ValorantWeaponsState | undefined;
  setWeapons(value?: ValorantWeaponsState): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): ValorantPositionState | undefined;
  setPosition(value?: ValorantPositionState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValorantPlayerCurrentRoundState.AsObject;
  static toObject(includeInstance: boolean, msg: ValorantPlayerCurrentRoundState): ValorantPlayerCurrentRoundState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValorantPlayerCurrentRoundState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValorantPlayerCurrentRoundState;
  static deserializeBinaryFromReader(message: ValorantPlayerCurrentRoundState, reader: jspb.BinaryReader): ValorantPlayerCurrentRoundState;
}

export namespace ValorantPlayerCurrentRoundState {
  export type AsObject = {
    playerUrn: string,
    playerInfo?: ValorantPlayerInfoState.AsObject,
    statistics?: ValorantPlayerCurrentRoundStatisticsState.AsObject,
    weapons?: ValorantWeaponsState.AsObject,
    position?: ValorantPositionState.AsObject,
  }
}

export class ValorantPlayerCurrentRoundStatisticsState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getIsAlive(): boolean;
  setIsAlive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValorantPlayerCurrentRoundStatisticsState.AsObject;
  static toObject(includeInstance: boolean, msg: ValorantPlayerCurrentRoundStatisticsState): ValorantPlayerCurrentRoundStatisticsState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValorantPlayerCurrentRoundStatisticsState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValorantPlayerCurrentRoundStatisticsState;
  static deserializeBinaryFromReader(message: ValorantPlayerCurrentRoundStatisticsState, reader: jspb.BinaryReader): ValorantPlayerCurrentRoundStatisticsState;
}

export namespace ValorantPlayerCurrentRoundStatisticsState {
  export type AsObject = {
    playerUrn: string,
    isAlive: boolean,
  }
}

export class ValorantAbilitiesState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  clearAbilitiesList(): void;
  getAbilitiesList(): Array<ValorantAbility>;
  setAbilitiesList(value: Array<ValorantAbility>): void;
  addAbilities(value?: ValorantAbility, index?: number): ValorantAbility;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValorantAbilitiesState.AsObject;
  static toObject(includeInstance: boolean, msg: ValorantAbilitiesState): ValorantAbilitiesState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValorantAbilitiesState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValorantAbilitiesState;
  static deserializeBinaryFromReader(message: ValorantAbilitiesState, reader: jspb.BinaryReader): ValorantAbilitiesState;
}

export namespace ValorantAbilitiesState {
  export type AsObject = {
    playerUrn: string,
    abilitiesList: Array<ValorantAbility.AsObject>,
  }
}

export class ValorantWeaponsState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  clearWeaponsList(): void;
  getWeaponsList(): Array<ValorantWeapon>;
  setWeaponsList(value: Array<ValorantWeapon>): void;
  addWeapons(value?: ValorantWeapon, index?: number): ValorantWeapon;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValorantWeaponsState.AsObject;
  static toObject(includeInstance: boolean, msg: ValorantWeaponsState): ValorantWeaponsState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValorantWeaponsState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValorantWeaponsState;
  static deserializeBinaryFromReader(message: ValorantWeaponsState, reader: jspb.BinaryReader): ValorantWeaponsState;
}

export namespace ValorantWeaponsState {
  export type AsObject = {
    playerUrn: string,
    weaponsList: Array<ValorantWeapon.AsObject>,
  }
}

export class ValorantPlayerInfoState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getSlotId(): number;
  setSlotId(value: number): void;

  getExtName(): string;
  setExtName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValorantPlayerInfoState.AsObject;
  static toObject(includeInstance: boolean, msg: ValorantPlayerInfoState): ValorantPlayerInfoState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValorantPlayerInfoState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValorantPlayerInfoState;
  static deserializeBinaryFromReader(message: ValorantPlayerInfoState, reader: jspb.BinaryReader): ValorantPlayerInfoState;
}

export namespace ValorantPlayerInfoState {
  export type AsObject = {
    playerUrn: string,
    slotId: number,
    extName: string,
  }
}

export class ValorantPositionState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValorantPositionState.AsObject;
  static toObject(includeInstance: boolean, msg: ValorantPositionState): ValorantPositionState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValorantPositionState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValorantPositionState;
  static deserializeBinaryFromReader(message: ValorantPositionState, reader: jspb.BinaryReader): ValorantPositionState;
}

export namespace ValorantPositionState {
  export type AsObject = {
    playerUrn: string,
    x: number,
    y: number,
  }
}

export class ValorantPreviousRound extends jspb.Message {
  getNumber(): number;
  setNumber(value: number): void;

  getOutcome(): ValorantRoundOutcomeMap[keyof ValorantRoundOutcomeMap];
  setOutcome(value: ValorantRoundOutcomeMap[keyof ValorantRoundOutcomeMap]): void;

  getHomeWon(): boolean;
  setHomeWon(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValorantPreviousRound.AsObject;
  static toObject(includeInstance: boolean, msg: ValorantPreviousRound): ValorantPreviousRound.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValorantPreviousRound, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValorantPreviousRound;
  static deserializeBinaryFromReader(message: ValorantPreviousRound, reader: jspb.BinaryReader): ValorantPreviousRound;
}

export namespace ValorantPreviousRound {
  export type AsObject = {
    number: number,
    outcome: ValorantRoundOutcomeMap[keyof ValorantRoundOutcomeMap],
    homeWon: boolean,
  }
}

export class ValorantWeapon extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValorantWeapon.AsObject;
  static toObject(includeInstance: boolean, msg: ValorantWeapon): ValorantWeapon.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValorantWeapon, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValorantWeapon;
  static deserializeBinaryFromReader(message: ValorantWeapon, reader: jspb.BinaryReader): ValorantWeapon;
}

export namespace ValorantWeapon {
  export type AsObject = {
    id: string,
  }
}

export class ValorantAbility extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getReady(): boolean;
  setReady(value: boolean): void;

  getIsUltimate(): boolean;
  setIsUltimate(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValorantAbility.AsObject;
  static toObject(includeInstance: boolean, msg: ValorantAbility): ValorantAbility.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValorantAbility, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValorantAbility;
  static deserializeBinaryFromReader(message: ValorantAbility, reader: jspb.BinaryReader): ValorantAbility;
}

export namespace ValorantAbility {
  export type AsObject = {
    id: string,
    ready: boolean,
    isUltimate: boolean,
  }
}

export interface ValorantUltimateStateMap {
  VALORANT_ULTIMATE_STATE__UNSPECIFIED: 0;
  VALORANT_ULTIMATE_STATE_READY: 1;
  VALORANT_ULTIMATE_STATE_NOT_READY: 2;
}

export const ValorantUltimateState: ValorantUltimateStateMap;

export interface ValorantSideMap {
  VALORANT_SIDE_UNSPECIFIED: 0;
  VALORANT_SIDE_DEFENDERS: 1;
  VALORANT_SIDE_ATTACKERS: 2;
}

export const ValorantSide: ValorantSideMap;

export interface ValorantRoundOutcomeMap {
  VALORANT_ROUND_OUTCOME_UNSPECIFIED: 0;
  VALORANT_ROUND_OUTCOME_DEFENDERS_WIN_ELIMINATION: 1;
  VALORANT_ROUND_OUTCOME_DEFENDERS_WIN_TIMEOUT: 2;
  VALORANT_ROUND_OUTCOME_DEFENDERS_WIN_DEFUSE: 3;
  VALORANT_ROUND_OUTCOME_ATTACKERS_WIN_ELIMINATION: 4;
  VALORANT_ROUND_OUTCOME_ATTACKERS_WIN_EXPLODE: 5;
}

export const ValorantRoundOutcome: ValorantRoundOutcomeMap;

export interface ValorantRoundPhaseMap {
  VALORANT_ROUND_PHASE_UNSPECIFIED: 0;
  VALORANT_ROUND_PHASE_BUY_PHASE: 1;
  VALORANT_ROUND_PHASE_RUNNING: 2;
  VALORANT_ROUND_PHASE_OVER: 3;
}

export const ValorantRoundPhase: ValorantRoundPhaseMap;

export interface ValorantSpikeStateMap {
  VALORANT_SPIKE_STATE_UNSPECIFIED: 0;
  VALORANT_SPIKE_STATE_CARRIED: 1;
  VALORANT_SPIKE_STATE_DROPPED: 2;
  VALORANT_SPIKE_STATE_PLANTING: 3;
  VALORANT_SPIKE_STATE_DEFUSING: 4;
  VALORANT_SPIKE_STATE_PLANTED: 5;
  VALORANT_SPIKE_STATE_EXPLODED: 6;
  VALORANT_SPIKE_STATE_DEFUSED: 7;
}

export const ValorantSpikeState: ValorantSpikeStateMap;

