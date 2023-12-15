// package: bragi
// file: bragi/cs2.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as bragi_common_pb from "../bragi/common_pb";

export class CS2MatchMessage extends jspb.Message {
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
  getPayload(): CS2MatchMessage.Payload | undefined;
  setPayload(value?: CS2MatchMessage.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2MatchMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CS2MatchMessage): CS2MatchMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2MatchMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2MatchMessage;
  static deserializeBinaryFromReader(message: CS2MatchMessage, reader: jspb.BinaryReader): CS2MatchMessage;
}

export namespace CS2MatchMessage {
  export type AsObject = {
    matchUrn: string,
    sequence: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dataStatus: bragi_common_pb.DataStatusMap[keyof bragi_common_pb.DataStatusMap],
    payload?: CS2MatchMessage.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasSnapshot(): boolean;
    clearSnapshot(): void;
    getSnapshot(): CS2MatchSnapshot | undefined;
    setSnapshot(value?: CS2MatchSnapshot): void;

    hasUpdate(): boolean;
    clearUpdate(): void;
    getUpdate(): CS2MatchUpdate | undefined;
    setUpdate(value?: CS2MatchUpdate): void;

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
      snapshot?: CS2MatchSnapshot.AsObject,
      update?: CS2MatchUpdate.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      SNAPSHOT = 1,
      UPDATE = 2,
    }
  }
}

export class CS2MatchSnapshot extends jspb.Message {
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
  getMatchState(): CS2MatchState | undefined;
  setMatchState(value?: CS2MatchState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2MatchSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: CS2MatchSnapshot): CS2MatchSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2MatchSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2MatchSnapshot;
  static deserializeBinaryFromReader(message: CS2MatchSnapshot, reader: jspb.BinaryReader): CS2MatchSnapshot;
}

export namespace CS2MatchSnapshot {
  export type AsObject = {
    matchUrn: string,
    sequence: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dataStatus: bragi_common_pb.DataStatusMap[keyof bragi_common_pb.DataStatusMap],
    announcementsList: Array<bragi_common_pb.Announcement.AsObject>,
    matchState?: CS2MatchState.AsObject,
  }
}

export class CS2MatchUpdate extends jspb.Message {
  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): CS2MatchUpdate.Payload | undefined;
  setPayload(value?: CS2MatchUpdate.Payload): void;

  clearEventsList(): void;
  getEventsList(): Array<CS2Event>;
  setEventsList(value: Array<CS2Event>): void;
  addEvents(value?: CS2Event, index?: number): CS2Event;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2MatchUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: CS2MatchUpdate): CS2MatchUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2MatchUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2MatchUpdate;
  static deserializeBinaryFromReader(message: CS2MatchUpdate, reader: jspb.BinaryReader): CS2MatchUpdate;
}

export namespace CS2MatchUpdate {
  export type AsObject = {
    payload?: CS2MatchUpdate.Payload.AsObject,
    eventsList: Array<CS2Event.AsObject>,
  }

  export class Payload extends jspb.Message {
    hasMatchState(): boolean;
    clearMatchState(): void;
    getMatchState(): CS2MatchState | undefined;
    setMatchState(value?: CS2MatchState): void;

    hasPartialUpdates(): boolean;
    clearPartialUpdates(): void;
    getPartialUpdates(): CS2MatchStatePartialUpdates | undefined;
    setPartialUpdates(value?: CS2MatchStatePartialUpdates): void;

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
      matchState?: CS2MatchState.AsObject,
      partialUpdates?: CS2MatchStatePartialUpdates.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      MATCH_STATE = 1,
      PARTIAL_UPDATES = 2,
    }
  }
}

export class CS2MatchStatePartialUpdates extends jspb.Message {
  clearUpdatesList(): void;
  getUpdatesList(): Array<CS2MatchStatePartialUpdate>;
  setUpdatesList(value: Array<CS2MatchStatePartialUpdate>): void;
  addUpdates(value?: CS2MatchStatePartialUpdate, index?: number): CS2MatchStatePartialUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2MatchStatePartialUpdates.AsObject;
  static toObject(includeInstance: boolean, msg: CS2MatchStatePartialUpdates): CS2MatchStatePartialUpdates.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2MatchStatePartialUpdates, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2MatchStatePartialUpdates;
  static deserializeBinaryFromReader(message: CS2MatchStatePartialUpdates, reader: jspb.BinaryReader): CS2MatchStatePartialUpdates;
}

export namespace CS2MatchStatePartialUpdates {
  export type AsObject = {
    updatesList: Array<CS2MatchStatePartialUpdate.AsObject>,
  }
}

export class CS2MatchStatePartialUpdate extends jspb.Message {
  hasScore(): boolean;
  clearScore(): void;
  getScore(): CS2MatchScoreState | undefined;
  setScore(value?: CS2MatchScoreState): void;

  hasCurrentMapState(): boolean;
  clearCurrentMapState(): void;
  getCurrentMapState(): CS2CurrentMapState | undefined;
  setCurrentMapState(value?: CS2CurrentMapState): void;

  hasCurrentMapStatePartialUpdate(): boolean;
  clearCurrentMapStatePartialUpdate(): void;
  getCurrentMapStatePartialUpdate(): CS2CurrentMapStatePartialUpdate | undefined;
  setCurrentMapStatePartialUpdate(value?: CS2CurrentMapStatePartialUpdate): void;

  getUpdateCase(): CS2MatchStatePartialUpdate.UpdateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2MatchStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: CS2MatchStatePartialUpdate): CS2MatchStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2MatchStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2MatchStatePartialUpdate;
  static deserializeBinaryFromReader(message: CS2MatchStatePartialUpdate, reader: jspb.BinaryReader): CS2MatchStatePartialUpdate;
}

export namespace CS2MatchStatePartialUpdate {
  export type AsObject = {
    score?: CS2MatchScoreState.AsObject,
    currentMapState?: CS2CurrentMapState.AsObject,
    currentMapStatePartialUpdate?: CS2CurrentMapStatePartialUpdate.AsObject,
  }

  export enum UpdateCase {
    UPDATE_NOT_SET = 0,
    SCORE = 1,
    CURRENT_MAP_STATE = 2,
    CURRENT_MAP_STATE_PARTIAL_UPDATE = 3,
  }
}

export class CS2MatchState extends jspb.Message {
  getMatchUrn(): string;
  setMatchUrn(value: string): void;

  getMatchType(): bragi_common_pb.BestOfTypeMap[keyof bragi_common_pb.BestOfTypeMap];
  setMatchType(value: bragi_common_pb.BestOfTypeMap[keyof bragi_common_pb.BestOfTypeMap]): void;

  hasHomeTeam(): boolean;
  clearHomeTeam(): void;
  getHomeTeam(): CS2Team | undefined;
  setHomeTeam(value?: CS2Team): void;

  hasAwayTeam(): boolean;
  clearAwayTeam(): void;
  getAwayTeam(): CS2Team | undefined;
  setAwayTeam(value?: CS2Team): void;

  hasScore(): boolean;
  clearScore(): void;
  getScore(): CS2MatchScoreState | undefined;
  setScore(value?: CS2MatchScoreState): void;

  getMatchStatus(): bragi_common_pb.MatchStatusTypeMap[keyof bragi_common_pb.MatchStatusTypeMap];
  setMatchStatus(value: bragi_common_pb.MatchStatusTypeMap[keyof bragi_common_pb.MatchStatusTypeMap]): void;

  hasCurrentMapState(): boolean;
  clearCurrentMapState(): void;
  getCurrentMapState(): CS2CurrentMapState | undefined;
  setCurrentMapState(value?: CS2CurrentMapState): void;

  clearPreviousMapStatesList(): void;
  getPreviousMapStatesList(): Array<CS2PreviousMapState>;
  setPreviousMapStatesList(value: Array<CS2PreviousMapState>): void;
  addPreviousMapStates(value?: CS2PreviousMapState, index?: number): CS2PreviousMapState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2MatchState.AsObject;
  static toObject(includeInstance: boolean, msg: CS2MatchState): CS2MatchState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2MatchState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2MatchState;
  static deserializeBinaryFromReader(message: CS2MatchState, reader: jspb.BinaryReader): CS2MatchState;
}

export namespace CS2MatchState {
  export type AsObject = {
    matchUrn: string,
    matchType: bragi_common_pb.BestOfTypeMap[keyof bragi_common_pb.BestOfTypeMap],
    homeTeam?: CS2Team.AsObject,
    awayTeam?: CS2Team.AsObject,
    score?: CS2MatchScoreState.AsObject,
    matchStatus: bragi_common_pb.MatchStatusTypeMap[keyof bragi_common_pb.MatchStatusTypeMap],
    currentMapState?: CS2CurrentMapState.AsObject,
    previousMapStatesList: Array<CS2PreviousMapState.AsObject>,
  }
}

export class CS2MatchScoreState extends jspb.Message {
  getHomeScore(): number;
  setHomeScore(value: number): void;

  getAwayScore(): number;
  setAwayScore(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2MatchScoreState.AsObject;
  static toObject(includeInstance: boolean, msg: CS2MatchScoreState): CS2MatchScoreState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2MatchScoreState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2MatchScoreState;
  static deserializeBinaryFromReader(message: CS2MatchScoreState, reader: jspb.BinaryReader): CS2MatchScoreState;
}

export namespace CS2MatchScoreState {
  export type AsObject = {
    homeScore: number,
    awayScore: number,
  }
}

export class CS2Team extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getTeamName(): string;
  setTeamName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2Team.AsObject;
  static toObject(includeInstance: boolean, msg: CS2Team): CS2Team.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2Team, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2Team;
  static deserializeBinaryFromReader(message: CS2Team, reader: jspb.BinaryReader): CS2Team;
}

export namespace CS2Team {
  export type AsObject = {
    teamUrn: string,
    teamName: string,
  }
}

export class CS2CurrentMapStatePartialUpdate extends jspb.Message {
  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): CS2MapInfoState | undefined;
  setInfo(value?: CS2MapInfoState): void;

  hasScore(): boolean;
  clearScore(): void;
  getScore(): CS2MapScoreState | undefined;
  setScore(value?: CS2MapScoreState): void;

  hasCurrentRoundState(): boolean;
  clearCurrentRoundState(): void;
  getCurrentRoundState(): CS2CurrentRoundState | undefined;
  setCurrentRoundState(value?: CS2CurrentRoundState): void;

  hasCurrentRoundStatePartialUpdate(): boolean;
  clearCurrentRoundStatePartialUpdate(): void;
  getCurrentRoundStatePartialUpdate(): CS2CurrentRoundStatePartialUpdate | undefined;
  setCurrentRoundStatePartialUpdate(value?: CS2CurrentRoundStatePartialUpdate): void;

  hasTeamMapStatesPartialUpdate(): boolean;
  clearTeamMapStatesPartialUpdate(): void;
  getTeamMapStatesPartialUpdate(): CS2TeamMapStatePartialUpdate | undefined;
  setTeamMapStatesPartialUpdate(value?: CS2TeamMapStatePartialUpdate): void;

  getUpdateCase(): CS2CurrentMapStatePartialUpdate.UpdateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2CurrentMapStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: CS2CurrentMapStatePartialUpdate): CS2CurrentMapStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2CurrentMapStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2CurrentMapStatePartialUpdate;
  static deserializeBinaryFromReader(message: CS2CurrentMapStatePartialUpdate, reader: jspb.BinaryReader): CS2CurrentMapStatePartialUpdate;
}

export namespace CS2CurrentMapStatePartialUpdate {
  export type AsObject = {
    info?: CS2MapInfoState.AsObject,
    score?: CS2MapScoreState.AsObject,
    currentRoundState?: CS2CurrentRoundState.AsObject,
    currentRoundStatePartialUpdate?: CS2CurrentRoundStatePartialUpdate.AsObject,
    teamMapStatesPartialUpdate?: CS2TeamMapStatePartialUpdate.AsObject,
  }

  export enum UpdateCase {
    UPDATE_NOT_SET = 0,
    INFO = 1,
    SCORE = 2,
    CURRENT_ROUND_STATE = 3,
    CURRENT_ROUND_STATE_PARTIAL_UPDATE = 4,
    TEAM_MAP_STATES_PARTIAL_UPDATE = 5,
  }
}

export class CS2CurrentMapState extends jspb.Message {
  getMapOrder(): number;
  setMapOrder(value: number): void;

  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): CS2MapInfoState | undefined;
  setInfo(value?: CS2MapInfoState): void;

  hasScore(): boolean;
  clearScore(): void;
  getScore(): CS2MapScoreState | undefined;
  setScore(value?: CS2MapScoreState): void;

  hasCurrentRoundState(): boolean;
  clearCurrentRoundState(): void;
  getCurrentRoundState(): CS2CurrentRoundState | undefined;
  setCurrentRoundState(value?: CS2CurrentRoundState): void;

  clearPreviousRoundStatesList(): void;
  getPreviousRoundStatesList(): Array<CS2PreviousRoundState>;
  setPreviousRoundStatesList(value: Array<CS2PreviousRoundState>): void;
  addPreviousRoundStates(value?: CS2PreviousRoundState, index?: number): CS2PreviousRoundState;

  getTeamMapStatesMap(): jspb.Map<string, CS2TeamMapState>;
  clearTeamMapStatesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2CurrentMapState.AsObject;
  static toObject(includeInstance: boolean, msg: CS2CurrentMapState): CS2CurrentMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2CurrentMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2CurrentMapState;
  static deserializeBinaryFromReader(message: CS2CurrentMapState, reader: jspb.BinaryReader): CS2CurrentMapState;
}

export namespace CS2CurrentMapState {
  export type AsObject = {
    mapOrder: number,
    info?: CS2MapInfoState.AsObject,
    score?: CS2MapScoreState.AsObject,
    currentRoundState?: CS2CurrentRoundState.AsObject,
    previousRoundStatesList: Array<CS2PreviousRoundState.AsObject>,
    teamMapStatesMap: Array<[string, CS2TeamMapState.AsObject]>,
  }
}

export class CS2PreviousMapState extends jspb.Message {
  getMapOrder(): number;
  setMapOrder(value: number): void;

  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): CS2MapInfoState | undefined;
  setInfo(value?: CS2MapInfoState): void;

  hasScore(): boolean;
  clearScore(): void;
  getScore(): CS2MapScoreState | undefined;
  setScore(value?: CS2MapScoreState): void;

  clearRoundStatesList(): void;
  getRoundStatesList(): Array<CS2PreviousRoundState>;
  setRoundStatesList(value: Array<CS2PreviousRoundState>): void;
  addRoundStates(value?: CS2PreviousRoundState, index?: number): CS2PreviousRoundState;

  getTeamMapStatesMap(): jspb.Map<string, CS2TeamMapState>;
  clearTeamMapStatesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2PreviousMapState.AsObject;
  static toObject(includeInstance: boolean, msg: CS2PreviousMapState): CS2PreviousMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2PreviousMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2PreviousMapState;
  static deserializeBinaryFromReader(message: CS2PreviousMapState, reader: jspb.BinaryReader): CS2PreviousMapState;
}

export namespace CS2PreviousMapState {
  export type AsObject = {
    mapOrder: number,
    info?: CS2MapInfoState.AsObject,
    score?: CS2MapScoreState.AsObject,
    roundStatesList: Array<CS2PreviousRoundState.AsObject>,
    teamMapStatesMap: Array<[string, CS2TeamMapState.AsObject]>,
  }
}

export class CS2MapInfoState extends jspb.Message {
  getMapName(): string;
  setMapName(value: string): void;

  getMaxRoundsDefault(): number;
  setMaxRoundsDefault(value: number): void;

  getMaxRoundsOvertime(): number;
  setMaxRoundsOvertime(value: number): void;

  hasFreezeTimeDuration(): boolean;
  clearFreezeTimeDuration(): void;
  getFreezeTimeDuration(): google_protobuf_duration_pb.Duration | undefined;
  setFreezeTimeDuration(value?: google_protobuf_duration_pb.Duration): void;

  hasRoundTimeDuration(): boolean;
  clearRoundTimeDuration(): void;
  getRoundTimeDuration(): google_protobuf_duration_pb.Duration | undefined;
  setRoundTimeDuration(value?: google_protobuf_duration_pb.Duration): void;

  hasBombTimeDuration(): boolean;
  clearBombTimeDuration(): void;
  getBombTimeDuration(): google_protobuf_duration_pb.Duration | undefined;
  setBombTimeDuration(value?: google_protobuf_duration_pb.Duration): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getMapEnded(): boolean;
  setMapEnded(value: boolean): void;

  hasWinTeamUrn(): boolean;
  clearWinTeamUrn(): void;
  getWinTeamUrn(): string;
  setWinTeamUrn(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2MapInfoState.AsObject;
  static toObject(includeInstance: boolean, msg: CS2MapInfoState): CS2MapInfoState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2MapInfoState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2MapInfoState;
  static deserializeBinaryFromReader(message: CS2MapInfoState, reader: jspb.BinaryReader): CS2MapInfoState;
}

export namespace CS2MapInfoState {
  export type AsObject = {
    mapName: string,
    maxRoundsDefault: number,
    maxRoundsOvertime: number,
    freezeTimeDuration?: google_protobuf_duration_pb.Duration.AsObject,
    roundTimeDuration?: google_protobuf_duration_pb.Duration.AsObject,
    bombTimeDuration?: google_protobuf_duration_pb.Duration.AsObject,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    mapEnded: boolean,
    winTeamUrn: string,
  }
}

export class CS2MapScoreState extends jspb.Message {
  getHomeScore(): number;
  setHomeScore(value: number): void;

  getAwayScore(): number;
  setAwayScore(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2MapScoreState.AsObject;
  static toObject(includeInstance: boolean, msg: CS2MapScoreState): CS2MapScoreState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2MapScoreState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2MapScoreState;
  static deserializeBinaryFromReader(message: CS2MapScoreState, reader: jspb.BinaryReader): CS2MapScoreState;
}

export namespace CS2MapScoreState {
  export type AsObject = {
    homeScore: number,
    awayScore: number,
  }
}

export class CS2CurrentRoundStatePartialUpdate extends jspb.Message {
  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): CS2RoundInfoState | undefined;
  setInfo(value?: CS2RoundInfoState): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): CS2RoundTimeState | undefined;
  setTime(value?: CS2RoundTimeState): void;

  hasBombState(): boolean;
  clearBombState(): void;
  getBombState(): CS2BombState | undefined;
  setBombState(value?: CS2BombState): void;

  hasTeamStatesPartialUpdate(): boolean;
  clearTeamStatesPartialUpdate(): void;
  getTeamStatesPartialUpdate(): CS2TeamCurrentRoundStatePartialUpdate | undefined;
  setTeamStatesPartialUpdate(value?: CS2TeamCurrentRoundStatePartialUpdate): void;

  getUpdateCase(): CS2CurrentRoundStatePartialUpdate.UpdateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2CurrentRoundStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: CS2CurrentRoundStatePartialUpdate): CS2CurrentRoundStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2CurrentRoundStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2CurrentRoundStatePartialUpdate;
  static deserializeBinaryFromReader(message: CS2CurrentRoundStatePartialUpdate, reader: jspb.BinaryReader): CS2CurrentRoundStatePartialUpdate;
}

export namespace CS2CurrentRoundStatePartialUpdate {
  export type AsObject = {
    info?: CS2RoundInfoState.AsObject,
    time?: CS2RoundTimeState.AsObject,
    bombState?: CS2BombState.AsObject,
    teamStatesPartialUpdate?: CS2TeamCurrentRoundStatePartialUpdate.AsObject,
  }

  export enum UpdateCase {
    UPDATE_NOT_SET = 0,
    INFO = 1,
    TIME = 2,
    BOMB_STATE = 3,
    TEAM_STATES_PARTIAL_UPDATE = 4,
  }
}

export class CS2CurrentRoundState extends jspb.Message {
  getRoundNumber(): number;
  setRoundNumber(value: number): void;

  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): CS2RoundInfoState | undefined;
  setInfo(value?: CS2RoundInfoState): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): CS2RoundTimeState | undefined;
  setTime(value?: CS2RoundTimeState): void;

  hasBombState(): boolean;
  clearBombState(): void;
  getBombState(): CS2BombState | undefined;
  setBombState(value?: CS2BombState): void;

  getTeamStatesMap(): jspb.Map<string, CS2TeamCurrentRoundState>;
  clearTeamStatesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2CurrentRoundState.AsObject;
  static toObject(includeInstance: boolean, msg: CS2CurrentRoundState): CS2CurrentRoundState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2CurrentRoundState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2CurrentRoundState;
  static deserializeBinaryFromReader(message: CS2CurrentRoundState, reader: jspb.BinaryReader): CS2CurrentRoundState;
}

export namespace CS2CurrentRoundState {
  export type AsObject = {
    roundNumber: number,
    info?: CS2RoundInfoState.AsObject,
    time?: CS2RoundTimeState.AsObject,
    bombState?: CS2BombState.AsObject,
    teamStatesMap: Array<[string, CS2TeamCurrentRoundState.AsObject]>,
  }
}

export class CS2PreviousRoundState extends jspb.Message {
  getRoundNumber(): number;
  setRoundNumber(value: number): void;

  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): CS2RoundInfoState | undefined;
  setInfo(value?: CS2RoundInfoState): void;

  getTeamStatesMap(): jspb.Map<string, CS2PreviousTeamRoundState>;
  clearTeamStatesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2PreviousRoundState.AsObject;
  static toObject(includeInstance: boolean, msg: CS2PreviousRoundState): CS2PreviousRoundState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2PreviousRoundState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2PreviousRoundState;
  static deserializeBinaryFromReader(message: CS2PreviousRoundState, reader: jspb.BinaryReader): CS2PreviousRoundState;
}

export namespace CS2PreviousRoundState {
  export type AsObject = {
    roundNumber: number,
    info?: CS2RoundInfoState.AsObject,
    teamStatesMap: Array<[string, CS2PreviousTeamRoundState.AsObject]>,
  }
}

export class CS2RoundInfoState extends jspb.Message {
  getRoundType(): CS2RoundStateTypeMap[keyof CS2RoundStateTypeMap];
  setRoundType(value: CS2RoundStateTypeMap[keyof CS2RoundStateTypeMap]): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasWinningTeamUrn(): boolean;
  clearWinningTeamUrn(): void;
  getWinningTeamUrn(): string;
  setWinningTeamUrn(value: string): void;

  hasWinReason(): boolean;
  clearWinReason(): void;
  getWinReason(): CS2WinReasonMap[keyof CS2WinReasonMap];
  setWinReason(value: CS2WinReasonMap[keyof CS2WinReasonMap]): void;

  hasHomeWon(): boolean;
  clearHomeWon(): void;
  getHomeWon(): boolean;
  setHomeWon(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2RoundInfoState.AsObject;
  static toObject(includeInstance: boolean, msg: CS2RoundInfoState): CS2RoundInfoState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2RoundInfoState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2RoundInfoState;
  static deserializeBinaryFromReader(message: CS2RoundInfoState, reader: jspb.BinaryReader): CS2RoundInfoState;
}

export namespace CS2RoundInfoState {
  export type AsObject = {
    roundType: CS2RoundStateTypeMap[keyof CS2RoundStateTypeMap],
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    winningTeamUrn: string,
    winReason: CS2WinReasonMap[keyof CS2WinReasonMap],
    homeWon: boolean,
  }
}

export class CS2RoundTimeState extends jspb.Message {
  hasTimeRemaining(): boolean;
  clearTimeRemaining(): void;
  getTimeRemaining(): google_protobuf_duration_pb.Duration | undefined;
  setTimeRemaining(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2RoundTimeState.AsObject;
  static toObject(includeInstance: boolean, msg: CS2RoundTimeState): CS2RoundTimeState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2RoundTimeState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2RoundTimeState;
  static deserializeBinaryFromReader(message: CS2RoundTimeState, reader: jspb.BinaryReader): CS2RoundTimeState;
}

export namespace CS2RoundTimeState {
  export type AsObject = {
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class CS2BombState extends jspb.Message {
  hasCarried(): boolean;
  clearCarried(): void;
  getCarried(): CS2BombCarriedState | undefined;
  setCarried(value?: CS2BombCarriedState): void;

  hasDropped(): boolean;
  clearDropped(): void;
  getDropped(): CS2BombDroppedState | undefined;
  setDropped(value?: CS2BombDroppedState): void;

  hasPlanting(): boolean;
  clearPlanting(): void;
  getPlanting(): CS2BombPlantingState | undefined;
  setPlanting(value?: CS2BombPlantingState): void;

  hasPlanted(): boolean;
  clearPlanted(): void;
  getPlanted(): CS2BombPlantedState | undefined;
  setPlanted(value?: CS2BombPlantedState): void;

  hasDefusing(): boolean;
  clearDefusing(): void;
  getDefusing(): CS2BombDefusingState | undefined;
  setDefusing(value?: CS2BombDefusingState): void;

  hasDefused(): boolean;
  clearDefused(): void;
  getDefused(): CS2BombDefusedState | undefined;
  setDefused(value?: CS2BombDefusedState): void;

  hasExploded(): boolean;
  clearExploded(): void;
  getExploded(): CS2BombExplodedState | undefined;
  setExploded(value?: CS2BombExplodedState): void;

  getPayloadCase(): CS2BombState.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2BombState.AsObject;
  static toObject(includeInstance: boolean, msg: CS2BombState): CS2BombState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2BombState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2BombState;
  static deserializeBinaryFromReader(message: CS2BombState, reader: jspb.BinaryReader): CS2BombState;
}

export namespace CS2BombState {
  export type AsObject = {
    carried?: CS2BombCarriedState.AsObject,
    dropped?: CS2BombDroppedState.AsObject,
    planting?: CS2BombPlantingState.AsObject,
    planted?: CS2BombPlantedState.AsObject,
    defusing?: CS2BombDefusingState.AsObject,
    defused?: CS2BombDefusedState.AsObject,
    exploded?: CS2BombExplodedState.AsObject,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    CARRIED = 1,
    DROPPED = 2,
    PLANTING = 3,
    PLANTED = 4,
    DEFUSING = 5,
    DEFUSED = 6,
    EXPLODED = 7,
  }
}

export class CS2BombCarriedState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): CS2Position | undefined;
  setPosition(value?: CS2Position): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2BombCarriedState.AsObject;
  static toObject(includeInstance: boolean, msg: CS2BombCarriedState): CS2BombCarriedState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2BombCarriedState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2BombCarriedState;
  static deserializeBinaryFromReader(message: CS2BombCarriedState, reader: jspb.BinaryReader): CS2BombCarriedState;
}

export namespace CS2BombCarriedState {
  export type AsObject = {
    playerUrn: string,
    position?: CS2Position.AsObject,
  }
}

export class CS2BombDroppedState extends jspb.Message {
  getDroppedByPlayerUrn(): string;
  setDroppedByPlayerUrn(value: string): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): CS2Position | undefined;
  setPosition(value?: CS2Position): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2BombDroppedState.AsObject;
  static toObject(includeInstance: boolean, msg: CS2BombDroppedState): CS2BombDroppedState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2BombDroppedState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2BombDroppedState;
  static deserializeBinaryFromReader(message: CS2BombDroppedState, reader: jspb.BinaryReader): CS2BombDroppedState;
}

export namespace CS2BombDroppedState {
  export type AsObject = {
    droppedByPlayerUrn: string,
    position?: CS2Position.AsObject,
  }
}

export class CS2BombPlantingState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): CS2Position | undefined;
  setPosition(value?: CS2Position): void;

  hasCountdown(): boolean;
  clearCountdown(): void;
  getCountdown(): google_protobuf_duration_pb.Duration | undefined;
  setCountdown(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2BombPlantingState.AsObject;
  static toObject(includeInstance: boolean, msg: CS2BombPlantingState): CS2BombPlantingState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2BombPlantingState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2BombPlantingState;
  static deserializeBinaryFromReader(message: CS2BombPlantingState, reader: jspb.BinaryReader): CS2BombPlantingState;
}

export namespace CS2BombPlantingState {
  export type AsObject = {
    playerUrn: string,
    position?: CS2Position.AsObject,
    countdown?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class CS2BombPlantedState extends jspb.Message {
  getPlantedByPlayerUrn(): string;
  setPlantedByPlayerUrn(value: string): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): CS2Position | undefined;
  setPosition(value?: CS2Position): void;

  hasPlantedAt(): boolean;
  clearPlantedAt(): void;
  getPlantedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPlantedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCountdown(): boolean;
  clearCountdown(): void;
  getCountdown(): google_protobuf_duration_pb.Duration | undefined;
  setCountdown(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2BombPlantedState.AsObject;
  static toObject(includeInstance: boolean, msg: CS2BombPlantedState): CS2BombPlantedState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2BombPlantedState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2BombPlantedState;
  static deserializeBinaryFromReader(message: CS2BombPlantedState, reader: jspb.BinaryReader): CS2BombPlantedState;
}

export namespace CS2BombPlantedState {
  export type AsObject = {
    plantedByPlayerUrn: string,
    position?: CS2Position.AsObject,
    plantedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    countdown?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class CS2BombDefusingState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): CS2Position | undefined;
  setPosition(value?: CS2Position): void;

  hasCountdown(): boolean;
  clearCountdown(): void;
  getCountdown(): google_protobuf_duration_pb.Duration | undefined;
  setCountdown(value?: google_protobuf_duration_pb.Duration): void;

  hasDefuseStartedAt(): boolean;
  clearDefuseStartedAt(): void;
  getDefuseStartedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDefuseStartedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2BombDefusingState.AsObject;
  static toObject(includeInstance: boolean, msg: CS2BombDefusingState): CS2BombDefusingState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2BombDefusingState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2BombDefusingState;
  static deserializeBinaryFromReader(message: CS2BombDefusingState, reader: jspb.BinaryReader): CS2BombDefusingState;
}

export namespace CS2BombDefusingState {
  export type AsObject = {
    playerUrn: string,
    position?: CS2Position.AsObject,
    countdown?: google_protobuf_duration_pb.Duration.AsObject,
    defuseStartedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CS2BombDefusedState extends jspb.Message {
  getDefusedByPlayerUrn(): string;
  setDefusedByPlayerUrn(value: string): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): CS2Position | undefined;
  setPosition(value?: CS2Position): void;

  hasDefusedAt(): boolean;
  clearDefusedAt(): void;
  getDefusedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDefusedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2BombDefusedState.AsObject;
  static toObject(includeInstance: boolean, msg: CS2BombDefusedState): CS2BombDefusedState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2BombDefusedState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2BombDefusedState;
  static deserializeBinaryFromReader(message: CS2BombDefusedState, reader: jspb.BinaryReader): CS2BombDefusedState;
}

export namespace CS2BombDefusedState {
  export type AsObject = {
    defusedByPlayerUrn: string,
    position?: CS2Position.AsObject,
    defusedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CS2BombExplodedState extends jspb.Message {
  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): CS2Position | undefined;
  setPosition(value?: CS2Position): void;

  hasExplodedAt(): boolean;
  clearExplodedAt(): void;
  getExplodedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExplodedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2BombExplodedState.AsObject;
  static toObject(includeInstance: boolean, msg: CS2BombExplodedState): CS2BombExplodedState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2BombExplodedState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2BombExplodedState;
  static deserializeBinaryFromReader(message: CS2BombExplodedState, reader: jspb.BinaryReader): CS2BombExplodedState;
}

export namespace CS2BombExplodedState {
  export type AsObject = {
    position?: CS2Position.AsObject,
    explodedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CS2TeamMapStatePartialUpdate extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): CS2TeamMapStatePartialUpdate.Payload | undefined;
  setPayload(value?: CS2TeamMapStatePartialUpdate.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2TeamMapStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: CS2TeamMapStatePartialUpdate): CS2TeamMapStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2TeamMapStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2TeamMapStatePartialUpdate;
  static deserializeBinaryFromReader(message: CS2TeamMapStatePartialUpdate, reader: jspb.BinaryReader): CS2TeamMapStatePartialUpdate;
}

export namespace CS2TeamMapStatePartialUpdate {
  export type AsObject = {
    teamUrn: string,
    payload?: CS2TeamMapStatePartialUpdate.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasPlayerState(): boolean;
    clearPlayerState(): void;
    getPlayerState(): CS2PlayerMapState | undefined;
    setPlayerState(value?: CS2PlayerMapState): void;

    hasPlayerMapStatesPartialUpdate(): boolean;
    clearPlayerMapStatesPartialUpdate(): void;
    getPlayerMapStatesPartialUpdate(): CS2PlayerMapStatePartialUpdate | undefined;
    setPlayerMapStatesPartialUpdate(value?: CS2PlayerMapStatePartialUpdate): void;

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
      playerState?: CS2PlayerMapState.AsObject,
      playerMapStatesPartialUpdate?: CS2PlayerMapStatePartialUpdate.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      PLAYER_STATE = 2,
      PLAYER_MAP_STATES_PARTIAL_UPDATE = 1,
    }
  }
}

export class CS2TeamMapState extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getSide(): CS2SideMap[keyof CS2SideMap];
  setSide(value: CS2SideMap[keyof CS2SideMap]): void;

  getPlayerMapStatesMap(): jspb.Map<string, CS2PlayerMapState>;
  clearPlayerMapStatesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2TeamMapState.AsObject;
  static toObject(includeInstance: boolean, msg: CS2TeamMapState): CS2TeamMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2TeamMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2TeamMapState;
  static deserializeBinaryFromReader(message: CS2TeamMapState, reader: jspb.BinaryReader): CS2TeamMapState;
}

export namespace CS2TeamMapState {
  export type AsObject = {
    teamUrn: string,
    side: CS2SideMap[keyof CS2SideMap],
    playerMapStatesMap: Array<[string, CS2PlayerMapState.AsObject]>,
  }
}

export class CS2TeamCurrentRoundStatePartialUpdate extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): CS2TeamCurrentRoundStatePartialUpdate.Payload | undefined;
  setPayload(value?: CS2TeamCurrentRoundStatePartialUpdate.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2TeamCurrentRoundStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: CS2TeamCurrentRoundStatePartialUpdate): CS2TeamCurrentRoundStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2TeamCurrentRoundStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2TeamCurrentRoundStatePartialUpdate;
  static deserializeBinaryFromReader(message: CS2TeamCurrentRoundStatePartialUpdate, reader: jspb.BinaryReader): CS2TeamCurrentRoundStatePartialUpdate;
}

export namespace CS2TeamCurrentRoundStatePartialUpdate {
  export type AsObject = {
    teamUrn: string,
    payload?: CS2TeamCurrentRoundStatePartialUpdate.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasPlayerState(): boolean;
    clearPlayerState(): void;
    getPlayerState(): CS2PlayerCurrentRoundState | undefined;
    setPlayerState(value?: CS2PlayerCurrentRoundState): void;

    hasPlayerRoundStatesPartialUpdate(): boolean;
    clearPlayerRoundStatesPartialUpdate(): void;
    getPlayerRoundStatesPartialUpdate(): CS2PlayerCurrentRoundStatePartialUpdate | undefined;
    setPlayerRoundStatesPartialUpdate(value?: CS2PlayerCurrentRoundStatePartialUpdate): void;

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
      playerState?: CS2PlayerCurrentRoundState.AsObject,
      playerRoundStatesPartialUpdate?: CS2PlayerCurrentRoundStatePartialUpdate.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      PLAYER_STATE = 2,
      PLAYER_ROUND_STATES_PARTIAL_UPDATE = 1,
    }
  }
}

export class CS2TeamCurrentRoundState extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getPlayerRoundStatesMap(): jspb.Map<string, CS2PlayerCurrentRoundState>;
  clearPlayerRoundStatesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2TeamCurrentRoundState.AsObject;
  static toObject(includeInstance: boolean, msg: CS2TeamCurrentRoundState): CS2TeamCurrentRoundState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2TeamCurrentRoundState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2TeamCurrentRoundState;
  static deserializeBinaryFromReader(message: CS2TeamCurrentRoundState, reader: jspb.BinaryReader): CS2TeamCurrentRoundState;
}

export namespace CS2TeamCurrentRoundState {
  export type AsObject = {
    teamUrn: string,
    playerRoundStatesMap: Array<[string, CS2PlayerCurrentRoundState.AsObject]>,
  }
}

export class CS2PreviousTeamRoundState extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getPlayersMap(): jspb.Map<string, CS2PlayerPreviousRoundState>;
  clearPlayersMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2PreviousTeamRoundState.AsObject;
  static toObject(includeInstance: boolean, msg: CS2PreviousTeamRoundState): CS2PreviousTeamRoundState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2PreviousTeamRoundState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2PreviousTeamRoundState;
  static deserializeBinaryFromReader(message: CS2PreviousTeamRoundState, reader: jspb.BinaryReader): CS2PreviousTeamRoundState;
}

export namespace CS2PreviousTeamRoundState {
  export type AsObject = {
    teamUrn: string,
    playersMap: Array<[string, CS2PlayerPreviousRoundState.AsObject]>,
  }
}

export class CS2PlayerMapStatePartialUpdate extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): CS2PlayerMapStatePartialUpdate.Payload | undefined;
  setPayload(value?: CS2PlayerMapStatePartialUpdate.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2PlayerMapStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: CS2PlayerMapStatePartialUpdate): CS2PlayerMapStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2PlayerMapStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2PlayerMapStatePartialUpdate;
  static deserializeBinaryFromReader(message: CS2PlayerMapStatePartialUpdate, reader: jspb.BinaryReader): CS2PlayerMapStatePartialUpdate;
}

export namespace CS2PlayerMapStatePartialUpdate {
  export type AsObject = {
    playerUrn: string,
    payload?: CS2PlayerMapStatePartialUpdate.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasStatistics(): boolean;
    clearStatistics(): void;
    getStatistics(): CS2PlayerMapStatisticsState | undefined;
    setStatistics(value?: CS2PlayerMapStatisticsState): void;

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
      statistics?: CS2PlayerMapStatisticsState.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      STATISTICS = 1,
    }
  }
}

export class CS2PlayerMapState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getPlayerName(): string;
  setPlayerName(value: string): void;

  getSlotId(): number;
  setSlotId(value: number): void;

  hasStatistics(): boolean;
  clearStatistics(): void;
  getStatistics(): CS2PlayerMapStatisticsState | undefined;
  setStatistics(value?: CS2PlayerMapStatisticsState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2PlayerMapState.AsObject;
  static toObject(includeInstance: boolean, msg: CS2PlayerMapState): CS2PlayerMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2PlayerMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2PlayerMapState;
  static deserializeBinaryFromReader(message: CS2PlayerMapState, reader: jspb.BinaryReader): CS2PlayerMapState;
}

export namespace CS2PlayerMapState {
  export type AsObject = {
    playerUrn: string,
    playerName: string,
    slotId: number,
    statistics?: CS2PlayerMapStatisticsState.AsObject,
  }
}

export class CS2PlayerMapStatisticsState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getOpeningKills(): number;
  setOpeningKills(value: number): void;

  getOpeningDeaths(): number;
  setOpeningDeaths(value: number): void;

  getTotalDamage(): number;
  setTotalDamage(value: number): void;

  getAverageDamagePerRound(): number;
  setAverageDamagePerRound(value: number): void;

  hasStatistics(): boolean;
  clearStatistics(): void;
  getStatistics(): CS2PlayerStatistics | undefined;
  setStatistics(value?: CS2PlayerStatistics): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2PlayerMapStatisticsState.AsObject;
  static toObject(includeInstance: boolean, msg: CS2PlayerMapStatisticsState): CS2PlayerMapStatisticsState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2PlayerMapStatisticsState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2PlayerMapStatisticsState;
  static deserializeBinaryFromReader(message: CS2PlayerMapStatisticsState, reader: jspb.BinaryReader): CS2PlayerMapStatisticsState;
}

export namespace CS2PlayerMapStatisticsState {
  export type AsObject = {
    playerUrn: string,
    openingKills: number,
    openingDeaths: number,
    totalDamage: number,
    averageDamagePerRound: number,
    statistics?: CS2PlayerStatistics.AsObject,
  }
}

export class CS2PlayerCurrentRoundStatePartialUpdate extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): CS2PlayerCurrentRoundStatePartialUpdate.Payload | undefined;
  setPayload(value?: CS2PlayerCurrentRoundStatePartialUpdate.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2PlayerCurrentRoundStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: CS2PlayerCurrentRoundStatePartialUpdate): CS2PlayerCurrentRoundStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2PlayerCurrentRoundStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2PlayerCurrentRoundStatePartialUpdate;
  static deserializeBinaryFromReader(message: CS2PlayerCurrentRoundStatePartialUpdate, reader: jspb.BinaryReader): CS2PlayerCurrentRoundStatePartialUpdate;
}

export namespace CS2PlayerCurrentRoundStatePartialUpdate {
  export type AsObject = {
    playerUrn: string,
    payload?: CS2PlayerCurrentRoundStatePartialUpdate.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasStatistics(): boolean;
    clearStatistics(): void;
    getStatistics(): CS2PlayerCurrentRoundStatisticsState | undefined;
    setStatistics(value?: CS2PlayerCurrentRoundStatisticsState): void;

    hasItems(): boolean;
    clearItems(): void;
    getItems(): CS2PlayerItemsState | undefined;
    setItems(value?: CS2PlayerItemsState): void;

    hasPosition(): boolean;
    clearPosition(): void;
    getPosition(): CS2PlayerPositionState | undefined;
    setPosition(value?: CS2PlayerPositionState): void;

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
      statistics?: CS2PlayerCurrentRoundStatisticsState.AsObject,
      items?: CS2PlayerItemsState.AsObject,
      position?: CS2PlayerPositionState.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      STATISTICS = 1,
      ITEMS = 2,
      POSITION = 3,
    }
  }
}

export class CS2PlayerCurrentRoundState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getPlayerName(): string;
  setPlayerName(value: string): void;

  getSlotId(): number;
  setSlotId(value: number): void;

  hasStatistics(): boolean;
  clearStatistics(): void;
  getStatistics(): CS2PlayerCurrentRoundStatisticsState | undefined;
  setStatistics(value?: CS2PlayerCurrentRoundStatisticsState): void;

  hasItems(): boolean;
  clearItems(): void;
  getItems(): CS2PlayerItemsState | undefined;
  setItems(value?: CS2PlayerItemsState): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): CS2PlayerPositionState | undefined;
  setPosition(value?: CS2PlayerPositionState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2PlayerCurrentRoundState.AsObject;
  static toObject(includeInstance: boolean, msg: CS2PlayerCurrentRoundState): CS2PlayerCurrentRoundState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2PlayerCurrentRoundState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2PlayerCurrentRoundState;
  static deserializeBinaryFromReader(message: CS2PlayerCurrentRoundState, reader: jspb.BinaryReader): CS2PlayerCurrentRoundState;
}

export namespace CS2PlayerCurrentRoundState {
  export type AsObject = {
    playerUrn: string,
    playerName: string,
    slotId: number,
    statistics?: CS2PlayerCurrentRoundStatisticsState.AsObject,
    items?: CS2PlayerItemsState.AsObject,
    position?: CS2PlayerPositionState.AsObject,
  }
}

export class CS2PlayerCurrentRoundStatisticsState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getAlive(): boolean;
  setAlive(value: boolean): void;

  getHealth(): number;
  setHealth(value: number): void;

  getArmor(): number;
  setArmor(value: number): void;

  getBalance(): number;
  setBalance(value: number): void;

  hasDamage(): boolean;
  clearDamage(): void;
  getDamage(): number;
  setDamage(value: number): void;

  hasStatistics(): boolean;
  clearStatistics(): void;
  getStatistics(): CS2PlayerStatistics | undefined;
  setStatistics(value?: CS2PlayerStatistics): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2PlayerCurrentRoundStatisticsState.AsObject;
  static toObject(includeInstance: boolean, msg: CS2PlayerCurrentRoundStatisticsState): CS2PlayerCurrentRoundStatisticsState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2PlayerCurrentRoundStatisticsState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2PlayerCurrentRoundStatisticsState;
  static deserializeBinaryFromReader(message: CS2PlayerCurrentRoundStatisticsState, reader: jspb.BinaryReader): CS2PlayerCurrentRoundStatisticsState;
}

export namespace CS2PlayerCurrentRoundStatisticsState {
  export type AsObject = {
    playerUrn: string,
    alive: boolean,
    health: number,
    armor: number,
    balance: number,
    damage: number,
    statistics?: CS2PlayerStatistics.AsObject,
  }
}

export class CS2PlayerItemsState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getEquipmentValue(): number;
  setEquipmentValue(value: number): void;

  clearItemsList(): void;
  getItemsList(): Array<CS2Item>;
  setItemsList(value: Array<CS2Item>): void;
  addItems(value?: CS2Item, index?: number): CS2Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2PlayerItemsState.AsObject;
  static toObject(includeInstance: boolean, msg: CS2PlayerItemsState): CS2PlayerItemsState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2PlayerItemsState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2PlayerItemsState;
  static deserializeBinaryFromReader(message: CS2PlayerItemsState, reader: jspb.BinaryReader): CS2PlayerItemsState;
}

export namespace CS2PlayerItemsState {
  export type AsObject = {
    playerUrn: string,
    equipmentValue: number,
    itemsList: Array<CS2Item.AsObject>,
  }
}

export class CS2PlayerPreviousRoundState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getPlayerName(): string;
  setPlayerName(value: string): void;

  hasStatistics(): boolean;
  clearStatistics(): void;
  getStatistics(): CS2PlayerStatistics | undefined;
  setStatistics(value?: CS2PlayerStatistics): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2PlayerPreviousRoundState.AsObject;
  static toObject(includeInstance: boolean, msg: CS2PlayerPreviousRoundState): CS2PlayerPreviousRoundState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2PlayerPreviousRoundState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2PlayerPreviousRoundState;
  static deserializeBinaryFromReader(message: CS2PlayerPreviousRoundState, reader: jspb.BinaryReader): CS2PlayerPreviousRoundState;
}

export namespace CS2PlayerPreviousRoundState {
  export type AsObject = {
    playerUrn: string,
    playerName: string,
    statistics?: CS2PlayerStatistics.AsObject,
  }
}

export class CS2PlayerPositionState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): CS2Position | undefined;
  setPosition(value?: CS2Position): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2PlayerPositionState.AsObject;
  static toObject(includeInstance: boolean, msg: CS2PlayerPositionState): CS2PlayerPositionState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2PlayerPositionState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2PlayerPositionState;
  static deserializeBinaryFromReader(message: CS2PlayerPositionState, reader: jspb.BinaryReader): CS2PlayerPositionState;
}

export namespace CS2PlayerPositionState {
  export type AsObject = {
    playerUrn: string,
    position?: CS2Position.AsObject,
  }
}

export class CS2PlayerStatistics extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getKills(): number;
  setKills(value: number): void;

  getFriendlyKills(): number;
  setFriendlyKills(value: number): void;

  getEnemyKills(): number;
  setEnemyKills(value: number): void;

  getSelfKills(): number;
  setSelfKills(value: number): void;

  getDeaths(): number;
  setDeaths(value: number): void;

  getAssists(): number;
  setAssists(value: number): void;

  getHeadshots(): number;
  setHeadshots(value: number): void;

  getDamage(): number;
  setDamage(value: number): void;

  hasFriendlyDamageDealtArmor(): boolean;
  clearFriendlyDamageDealtArmor(): void;
  getFriendlyDamageDealtArmor(): number;
  setFriendlyDamageDealtArmor(value: number): void;

  hasFriendlyDamageDealtHealth(): boolean;
  clearFriendlyDamageDealtHealth(): void;
  getFriendlyDamageDealtHealth(): number;
  setFriendlyDamageDealtHealth(value: number): void;

  hasEnemyDamageDealtArmor(): boolean;
  clearEnemyDamageDealtArmor(): void;
  getEnemyDamageDealtArmor(): number;
  setEnemyDamageDealtArmor(value: number): void;

  hasEnemyDamageDealtHealth(): boolean;
  clearEnemyDamageDealtHealth(): void;
  getEnemyDamageDealtHealth(): number;
  setEnemyDamageDealtHealth(value: number): void;

  hasEnemyDamageDealtArmorRaw(): boolean;
  clearEnemyDamageDealtArmorRaw(): void;
  getEnemyDamageDealtArmorRaw(): number;
  setEnemyDamageDealtArmorRaw(value: number): void;

  hasEnemyDamageDealtHealthRaw(): boolean;
  clearEnemyDamageDealtHealthRaw(): void;
  getEnemyDamageDealtHealthRaw(): number;
  setEnemyDamageDealtHealthRaw(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2PlayerStatistics.AsObject;
  static toObject(includeInstance: boolean, msg: CS2PlayerStatistics): CS2PlayerStatistics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2PlayerStatistics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2PlayerStatistics;
  static deserializeBinaryFromReader(message: CS2PlayerStatistics, reader: jspb.BinaryReader): CS2PlayerStatistics;
}

export namespace CS2PlayerStatistics {
  export type AsObject = {
    playerUrn: string,
    kills: number,
    friendlyKills: number,
    enemyKills: number,
    selfKills: number,
    deaths: number,
    assists: number,
    headshots: number,
    damage: number,
    friendlyDamageDealtArmor: number,
    friendlyDamageDealtHealth: number,
    enemyDamageDealtArmor: number,
    enemyDamageDealtHealth: number,
    enemyDamageDealtArmorRaw: number,
    enemyDamageDealtHealthRaw: number,
  }
}

export class CS2Item extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getType(): CS2WeaponTypeMap[keyof CS2WeaponTypeMap];
  setType(value: CS2WeaponTypeMap[keyof CS2WeaponTypeMap]): void;

  getCount(): number;
  setCount(value: number): void;

  getIsactive(): boolean;
  setIsactive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2Item.AsObject;
  static toObject(includeInstance: boolean, msg: CS2Item): CS2Item.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2Item, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2Item;
  static deserializeBinaryFromReader(message: CS2Item, reader: jspb.BinaryReader): CS2Item;
}

export namespace CS2Item {
  export type AsObject = {
    name: string,
    type: CS2WeaponTypeMap[keyof CS2WeaponTypeMap],
    count: number,
    isactive: boolean,
  }
}

export class CS2Position extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  getZ(): number;
  setZ(value: number): void;

  getAngle(): number;
  setAngle(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2Position.AsObject;
  static toObject(includeInstance: boolean, msg: CS2Position): CS2Position.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2Position, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2Position;
  static deserializeBinaryFromReader(message: CS2Position, reader: jspb.BinaryReader): CS2Position;
}

export namespace CS2Position {
  export type AsObject = {
    x: number,
    y: number,
    z: number,
    angle: number,
  }
}

export class CS2Event extends jspb.Message {
  hasBombDefuseStarted(): boolean;
  clearBombDefuseStarted(): void;
  getBombDefuseStarted(): CS2BombDefuseStarted | undefined;
  setBombDefuseStarted(value?: CS2BombDefuseStarted): void;

  hasBombDefused(): boolean;
  clearBombDefused(): void;
  getBombDefused(): CS2BombDefused | undefined;
  setBombDefused(value?: CS2BombDefused): void;

  hasBombExploded(): boolean;
  clearBombExploded(): void;
  getBombExploded(): CS2BombExploded | undefined;
  setBombExploded(value?: CS2BombExploded): void;

  hasBombPlantStarted(): boolean;
  clearBombPlantStarted(): void;
  getBombPlantStarted(): CS2BombPlantStarted | undefined;
  setBombPlantStarted(value?: CS2BombPlantStarted): void;

  hasBombPlanted(): boolean;
  clearBombPlanted(): void;
  getBombPlanted(): CS2BombPlanted | undefined;
  setBombPlanted(value?: CS2BombPlanted): void;

  hasDamageDealt(): boolean;
  clearDamageDealt(): void;
  getDamageDealt(): CS2DamageDealt | undefined;
  setDamageDealt(value?: CS2DamageDealt): void;

  hasFreezeTimeEnded(): boolean;
  clearFreezeTimeEnded(): void;
  getFreezeTimeEnded(): CS2FreezeTimeEnded | undefined;
  setFreezeTimeEnded(value?: CS2FreezeTimeEnded): void;

  hasFreezeTimeStarted(): boolean;
  clearFreezeTimeStarted(): void;
  getFreezeTimeStarted(): CS2FreezeTimeStarted | undefined;
  setFreezeTimeStarted(value?: CS2FreezeTimeStarted): void;

  hasItemDrop(): boolean;
  clearItemDrop(): void;
  getItemDrop(): CS2ItemDrop | undefined;
  setItemDrop(value?: CS2ItemDrop): void;

  hasItemPickUp(): boolean;
  clearItemPickUp(): void;
  getItemPickUp(): CS2ItemPickUp | undefined;
  setItemPickUp(value?: CS2ItemPickUp): void;

  hasItemPurchase(): boolean;
  clearItemPurchase(): void;
  getItemPurchase(): CS2ItemPurchase | undefined;
  setItemPurchase(value?: CS2ItemPurchase): void;

  hasItemThrow(): boolean;
  clearItemThrow(): void;
  getItemThrow(): CS2ItemThrow | undefined;
  setItemThrow(value?: CS2ItemThrow): void;

  hasKill(): boolean;
  clearKill(): void;
  getKill(): CS2Kill | undefined;
  setKill(value?: CS2Kill): void;

  hasDeath(): boolean;
  clearDeath(): void;
  getDeath(): CS2Death | undefined;
  setDeath(value?: CS2Death): void;

  hasMapEnd(): boolean;
  clearMapEnd(): void;
  getMapEnd(): CS2MapEnd | undefined;
  setMapEnd(value?: CS2MapEnd): void;

  hasMapStart(): boolean;
  clearMapStart(): void;
  getMapStart(): CS2MapStart | undefined;
  setMapStart(value?: CS2MapStart): void;

  hasRoundEnd(): boolean;
  clearRoundEnd(): void;
  getRoundEnd(): CS2RoundEnd | undefined;
  setRoundEnd(value?: CS2RoundEnd): void;

  hasRoundPause(): boolean;
  clearRoundPause(): void;
  getRoundPause(): CS2RoundPause | undefined;
  setRoundPause(value?: CS2RoundPause): void;

  hasRoundResume(): boolean;
  clearRoundResume(): void;
  getRoundResume(): CS2RoundResume | undefined;
  setRoundResume(value?: CS2RoundResume): void;

  hasRoundRollback(): boolean;
  clearRoundRollback(): void;
  getRoundRollback(): CS2RoundRollback | undefined;
  setRoundRollback(value?: CS2RoundRollback): void;

  hasRoundStart(): boolean;
  clearRoundStart(): void;
  getRoundStart(): CS2RoundStart | undefined;
  setRoundStart(value?: CS2RoundStart): void;

  getEventCase(): CS2Event.EventCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2Event.AsObject;
  static toObject(includeInstance: boolean, msg: CS2Event): CS2Event.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2Event;
  static deserializeBinaryFromReader(message: CS2Event, reader: jspb.BinaryReader): CS2Event;
}

export namespace CS2Event {
  export type AsObject = {
    bombDefuseStarted?: CS2BombDefuseStarted.AsObject,
    bombDefused?: CS2BombDefused.AsObject,
    bombExploded?: CS2BombExploded.AsObject,
    bombPlantStarted?: CS2BombPlantStarted.AsObject,
    bombPlanted?: CS2BombPlanted.AsObject,
    damageDealt?: CS2DamageDealt.AsObject,
    freezeTimeEnded?: CS2FreezeTimeEnded.AsObject,
    freezeTimeStarted?: CS2FreezeTimeStarted.AsObject,
    itemDrop?: CS2ItemDrop.AsObject,
    itemPickUp?: CS2ItemPickUp.AsObject,
    itemPurchase?: CS2ItemPurchase.AsObject,
    itemThrow?: CS2ItemThrow.AsObject,
    kill?: CS2Kill.AsObject,
    death?: CS2Death.AsObject,
    mapEnd?: CS2MapEnd.AsObject,
    mapStart?: CS2MapStart.AsObject,
    roundEnd?: CS2RoundEnd.AsObject,
    roundPause?: CS2RoundPause.AsObject,
    roundResume?: CS2RoundResume.AsObject,
    roundRollback?: CS2RoundRollback.AsObject,
    roundStart?: CS2RoundStart.AsObject,
  }

  export enum EventCase {
    EVENT_NOT_SET = 0,
    BOMB_DEFUSE_STARTED = 1,
    BOMB_DEFUSED = 2,
    BOMB_EXPLODED = 3,
    BOMB_PLANT_STARTED = 21,
    BOMB_PLANTED = 4,
    DAMAGE_DEALT = 5,
    FREEZE_TIME_ENDED = 6,
    FREEZE_TIME_STARTED = 7,
    ITEM_DROP = 8,
    ITEM_PICK_UP = 9,
    ITEM_PURCHASE = 10,
    ITEM_THROW = 11,
    KILL = 12,
    DEATH = 13,
    MAP_END = 14,
    MAP_START = 15,
    ROUND_END = 16,
    ROUND_PAUSE = 17,
    ROUND_RESUME = 18,
    ROUND_ROLLBACK = 19,
    ROUND_START = 20,
  }
}

export class CS2PlayerBalance extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getBalance(): number;
  setBalance(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2PlayerBalance.AsObject;
  static toObject(includeInstance: boolean, msg: CS2PlayerBalance): CS2PlayerBalance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2PlayerBalance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2PlayerBalance;
  static deserializeBinaryFromReader(message: CS2PlayerBalance, reader: jspb.BinaryReader): CS2PlayerBalance;
}

export namespace CS2PlayerBalance {
  export type AsObject = {
    playerUrn: string,
    teamUrn: string,
    balance: number,
  }
}

export class CS2PlayerItems extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getEquipmentValue(): number;
  setEquipmentValue(value: number): void;

  clearItemsList(): void;
  getItemsList(): Array<CS2Item>;
  setItemsList(value: Array<CS2Item>): void;
  addItems(value?: CS2Item, index?: number): CS2Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2PlayerItems.AsObject;
  static toObject(includeInstance: boolean, msg: CS2PlayerItems): CS2PlayerItems.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2PlayerItems, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2PlayerItems;
  static deserializeBinaryFromReader(message: CS2PlayerItems, reader: jspb.BinaryReader): CS2PlayerItems;
}

export namespace CS2PlayerItems {
  export type AsObject = {
    playerUrn: string,
    teamUrn: string,
    equipmentValue: number,
    itemsList: Array<CS2Item.AsObject>,
  }
}

export class CS2BombDefuseStarted extends jspb.Message {
  hasMapTime(): boolean;
  clearMapTime(): void;
  getMapTime(): google_protobuf_duration_pb.Duration | undefined;
  setMapTime(value?: google_protobuf_duration_pb.Duration): void;

  hasTimeRemaining(): boolean;
  clearTimeRemaining(): void;
  getTimeRemaining(): google_protobuf_duration_pb.Duration | undefined;
  setTimeRemaining(value?: google_protobuf_duration_pb.Duration): void;

  getCurrentRoundNumber(): number;
  setCurrentRoundNumber(value: number): void;

  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2BombDefuseStarted.AsObject;
  static toObject(includeInstance: boolean, msg: CS2BombDefuseStarted): CS2BombDefuseStarted.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2BombDefuseStarted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2BombDefuseStarted;
  static deserializeBinaryFromReader(message: CS2BombDefuseStarted, reader: jspb.BinaryReader): CS2BombDefuseStarted;
}

export namespace CS2BombDefuseStarted {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
    playerUrn: string,
    teamUrn: string,
  }
}

export class CS2BombDefused extends jspb.Message {
  hasMapTime(): boolean;
  clearMapTime(): void;
  getMapTime(): google_protobuf_duration_pb.Duration | undefined;
  setMapTime(value?: google_protobuf_duration_pb.Duration): void;

  hasTimeRemaining(): boolean;
  clearTimeRemaining(): void;
  getTimeRemaining(): google_protobuf_duration_pb.Duration | undefined;
  setTimeRemaining(value?: google_protobuf_duration_pb.Duration): void;

  getCurrentRoundNumber(): number;
  setCurrentRoundNumber(value: number): void;

  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2BombDefused.AsObject;
  static toObject(includeInstance: boolean, msg: CS2BombDefused): CS2BombDefused.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2BombDefused, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2BombDefused;
  static deserializeBinaryFromReader(message: CS2BombDefused, reader: jspb.BinaryReader): CS2BombDefused;
}

export namespace CS2BombDefused {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
    playerUrn: string,
    teamUrn: string,
  }
}

export class CS2BombExploded extends jspb.Message {
  hasMapTime(): boolean;
  clearMapTime(): void;
  getMapTime(): google_protobuf_duration_pb.Duration | undefined;
  setMapTime(value?: google_protobuf_duration_pb.Duration): void;

  hasTimeRemaining(): boolean;
  clearTimeRemaining(): void;
  getTimeRemaining(): google_protobuf_duration_pb.Duration | undefined;
  setTimeRemaining(value?: google_protobuf_duration_pb.Duration): void;

  getCurrentRoundNumber(): number;
  setCurrentRoundNumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2BombExploded.AsObject;
  static toObject(includeInstance: boolean, msg: CS2BombExploded): CS2BombExploded.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2BombExploded, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2BombExploded;
  static deserializeBinaryFromReader(message: CS2BombExploded, reader: jspb.BinaryReader): CS2BombExploded;
}

export namespace CS2BombExploded {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
  }
}

export class CS2BombPlantStarted extends jspb.Message {
  hasMapTime(): boolean;
  clearMapTime(): void;
  getMapTime(): google_protobuf_duration_pb.Duration | undefined;
  setMapTime(value?: google_protobuf_duration_pb.Duration): void;

  hasTimeRemaining(): boolean;
  clearTimeRemaining(): void;
  getTimeRemaining(): google_protobuf_duration_pb.Duration | undefined;
  setTimeRemaining(value?: google_protobuf_duration_pb.Duration): void;

  getCurrentRoundNumber(): number;
  setCurrentRoundNumber(value: number): void;

  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2BombPlantStarted.AsObject;
  static toObject(includeInstance: boolean, msg: CS2BombPlantStarted): CS2BombPlantStarted.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2BombPlantStarted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2BombPlantStarted;
  static deserializeBinaryFromReader(message: CS2BombPlantStarted, reader: jspb.BinaryReader): CS2BombPlantStarted;
}

export namespace CS2BombPlantStarted {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
    playerUrn: string,
    teamUrn: string,
  }
}

export class CS2BombPlanted extends jspb.Message {
  hasMapTime(): boolean;
  clearMapTime(): void;
  getMapTime(): google_protobuf_duration_pb.Duration | undefined;
  setMapTime(value?: google_protobuf_duration_pb.Duration): void;

  hasTimeRemaining(): boolean;
  clearTimeRemaining(): void;
  getTimeRemaining(): google_protobuf_duration_pb.Duration | undefined;
  setTimeRemaining(value?: google_protobuf_duration_pb.Duration): void;

  getCurrentRoundNumber(): number;
  setCurrentRoundNumber(value: number): void;

  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2BombPlanted.AsObject;
  static toObject(includeInstance: boolean, msg: CS2BombPlanted): CS2BombPlanted.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2BombPlanted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2BombPlanted;
  static deserializeBinaryFromReader(message: CS2BombPlanted, reader: jspb.BinaryReader): CS2BombPlanted;
}

export namespace CS2BombPlanted {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
    playerUrn: string,
    teamUrn: string,
  }
}

export class CS2DamageDealt extends jspb.Message {
  hasMapTime(): boolean;
  clearMapTime(): void;
  getMapTime(): google_protobuf_duration_pb.Duration | undefined;
  setMapTime(value?: google_protobuf_duration_pb.Duration): void;

  hasTimeRemaining(): boolean;
  clearTimeRemaining(): void;
  getTimeRemaining(): google_protobuf_duration_pb.Duration | undefined;
  setTimeRemaining(value?: google_protobuf_duration_pb.Duration): void;

  getCurrentRoundNumber(): number;
  setCurrentRoundNumber(value: number): void;

  hasKillerPosition(): boolean;
  clearKillerPosition(): void;
  getKillerPosition(): CS2Position | undefined;
  setKillerPosition(value?: CS2Position): void;

  getKillerUrn(): string;
  setKillerUrn(value: string): void;

  getKillerTeamUrn(): string;
  setKillerTeamUrn(value: string): void;

  getVictimUrn(): string;
  setVictimUrn(value: string): void;

  getVictimTeamUrn(): string;
  setVictimTeamUrn(value: string): void;

  getWeapon(): string;
  setWeapon(value: string): void;

  getHitgroup(): string;
  setHitgroup(value: string): void;

  getHealthDeducted(): number;
  setHealthDeducted(value: number): void;

  getHealthRemaining(): number;
  setHealthRemaining(value: number): void;

  getArmorDeducted(): number;
  setArmorDeducted(value: number): void;

  getArmorRemaining(): number;
  setArmorRemaining(value: number): void;

  hasVictimPosition(): boolean;
  clearVictimPosition(): void;
  getVictimPosition(): CS2Position | undefined;
  setVictimPosition(value?: CS2Position): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2DamageDealt.AsObject;
  static toObject(includeInstance: boolean, msg: CS2DamageDealt): CS2DamageDealt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2DamageDealt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2DamageDealt;
  static deserializeBinaryFromReader(message: CS2DamageDealt, reader: jspb.BinaryReader): CS2DamageDealt;
}

export namespace CS2DamageDealt {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
    killerPosition?: CS2Position.AsObject,
    killerUrn: string,
    killerTeamUrn: string,
    victimUrn: string,
    victimTeamUrn: string,
    weapon: string,
    hitgroup: string,
    healthDeducted: number,
    healthRemaining: number,
    armorDeducted: number,
    armorRemaining: number,
    victimPosition?: CS2Position.AsObject,
  }
}

export class CS2FreezeTimeEnded extends jspb.Message {
  hasMapTime(): boolean;
  clearMapTime(): void;
  getMapTime(): google_protobuf_duration_pb.Duration | undefined;
  setMapTime(value?: google_protobuf_duration_pb.Duration): void;

  hasTimeRemaining(): boolean;
  clearTimeRemaining(): void;
  getTimeRemaining(): google_protobuf_duration_pb.Duration | undefined;
  setTimeRemaining(value?: google_protobuf_duration_pb.Duration): void;

  getCurrentRoundNumber(): number;
  setCurrentRoundNumber(value: number): void;

  getPlayerBalancesMap(): jspb.Map<string, CS2PlayerBalance>;
  clearPlayerBalancesMap(): void;
  getPlayerInventoriesMap(): jspb.Map<string, CS2PlayerItems>;
  clearPlayerInventoriesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2FreezeTimeEnded.AsObject;
  static toObject(includeInstance: boolean, msg: CS2FreezeTimeEnded): CS2FreezeTimeEnded.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2FreezeTimeEnded, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2FreezeTimeEnded;
  static deserializeBinaryFromReader(message: CS2FreezeTimeEnded, reader: jspb.BinaryReader): CS2FreezeTimeEnded;
}

export namespace CS2FreezeTimeEnded {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
    playerBalancesMap: Array<[string, CS2PlayerBalance.AsObject]>,
    playerInventoriesMap: Array<[string, CS2PlayerItems.AsObject]>,
  }
}

export class CS2FreezeTimeStarted extends jspb.Message {
  hasMapTime(): boolean;
  clearMapTime(): void;
  getMapTime(): google_protobuf_duration_pb.Duration | undefined;
  setMapTime(value?: google_protobuf_duration_pb.Duration): void;

  hasTimeRemaining(): boolean;
  clearTimeRemaining(): void;
  getTimeRemaining(): google_protobuf_duration_pb.Duration | undefined;
  setTimeRemaining(value?: google_protobuf_duration_pb.Duration): void;

  getCurrentRoundNumber(): number;
  setCurrentRoundNumber(value: number): void;

  getPlayerBalancesMap(): jspb.Map<string, CS2PlayerBalance>;
  clearPlayerBalancesMap(): void;
  getTeamsRoundInfoMap(): jspb.Map<string, CS2SideMap[keyof CS2SideMap]>;
  clearTeamsRoundInfoMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2FreezeTimeStarted.AsObject;
  static toObject(includeInstance: boolean, msg: CS2FreezeTimeStarted): CS2FreezeTimeStarted.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2FreezeTimeStarted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2FreezeTimeStarted;
  static deserializeBinaryFromReader(message: CS2FreezeTimeStarted, reader: jspb.BinaryReader): CS2FreezeTimeStarted;
}

export namespace CS2FreezeTimeStarted {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
    playerBalancesMap: Array<[string, CS2PlayerBalance.AsObject]>,
    teamsRoundInfoMap: Array<[string, CS2SideMap[keyof CS2SideMap]]>,
  }
}

export class CS2ItemDrop extends jspb.Message {
  hasMapTime(): boolean;
  clearMapTime(): void;
  getMapTime(): google_protobuf_duration_pb.Duration | undefined;
  setMapTime(value?: google_protobuf_duration_pb.Duration): void;

  hasTimeRemaining(): boolean;
  clearTimeRemaining(): void;
  getTimeRemaining(): google_protobuf_duration_pb.Duration | undefined;
  setTimeRemaining(value?: google_protobuf_duration_pb.Duration): void;

  getCurrentRoundNumber(): number;
  setCurrentRoundNumber(value: number): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): CS2Position | undefined;
  setPosition(value?: CS2Position): void;

  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getItem(): string;
  setItem(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2ItemDrop.AsObject;
  static toObject(includeInstance: boolean, msg: CS2ItemDrop): CS2ItemDrop.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2ItemDrop, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2ItemDrop;
  static deserializeBinaryFromReader(message: CS2ItemDrop, reader: jspb.BinaryReader): CS2ItemDrop;
}

export namespace CS2ItemDrop {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
    position?: CS2Position.AsObject,
    playerUrn: string,
    teamUrn: string,
    item: string,
  }
}

export class CS2ItemPickUp extends jspb.Message {
  hasMapTime(): boolean;
  clearMapTime(): void;
  getMapTime(): google_protobuf_duration_pb.Duration | undefined;
  setMapTime(value?: google_protobuf_duration_pb.Duration): void;

  hasTimeRemaining(): boolean;
  clearTimeRemaining(): void;
  getTimeRemaining(): google_protobuf_duration_pb.Duration | undefined;
  setTimeRemaining(value?: google_protobuf_duration_pb.Duration): void;

  getCurrentRoundNumber(): number;
  setCurrentRoundNumber(value: number): void;

  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getItem(): string;
  setItem(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2ItemPickUp.AsObject;
  static toObject(includeInstance: boolean, msg: CS2ItemPickUp): CS2ItemPickUp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2ItemPickUp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2ItemPickUp;
  static deserializeBinaryFromReader(message: CS2ItemPickUp, reader: jspb.BinaryReader): CS2ItemPickUp;
}

export namespace CS2ItemPickUp {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
    playerUrn: string,
    teamUrn: string,
    item: string,
  }
}

export class CS2ItemPurchase extends jspb.Message {
  hasMapTime(): boolean;
  clearMapTime(): void;
  getMapTime(): google_protobuf_duration_pb.Duration | undefined;
  setMapTime(value?: google_protobuf_duration_pb.Duration): void;

  hasTimeRemaining(): boolean;
  clearTimeRemaining(): void;
  getTimeRemaining(): google_protobuf_duration_pb.Duration | undefined;
  setTimeRemaining(value?: google_protobuf_duration_pb.Duration): void;

  getCurrentRoundNumber(): number;
  setCurrentRoundNumber(value: number): void;

  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getItem(): string;
  setItem(value: string): void;

  getPlayerBalance(): number;
  setPlayerBalance(value: number): void;

  getEquipmentValue(): number;
  setEquipmentValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2ItemPurchase.AsObject;
  static toObject(includeInstance: boolean, msg: CS2ItemPurchase): CS2ItemPurchase.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2ItemPurchase, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2ItemPurchase;
  static deserializeBinaryFromReader(message: CS2ItemPurchase, reader: jspb.BinaryReader): CS2ItemPurchase;
}

export namespace CS2ItemPurchase {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
    playerUrn: string,
    teamUrn: string,
    item: string,
    playerBalance: number,
    equipmentValue: number,
  }
}

export class CS2ItemThrow extends jspb.Message {
  hasMapTime(): boolean;
  clearMapTime(): void;
  getMapTime(): google_protobuf_duration_pb.Duration | undefined;
  setMapTime(value?: google_protobuf_duration_pb.Duration): void;

  hasTimeRemaining(): boolean;
  clearTimeRemaining(): void;
  getTimeRemaining(): google_protobuf_duration_pb.Duration | undefined;
  setTimeRemaining(value?: google_protobuf_duration_pb.Duration): void;

  getCurrentRoundNumber(): number;
  setCurrentRoundNumber(value: number): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): CS2Position | undefined;
  setPosition(value?: CS2Position): void;

  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getItem(): string;
  setItem(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2ItemThrow.AsObject;
  static toObject(includeInstance: boolean, msg: CS2ItemThrow): CS2ItemThrow.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2ItemThrow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2ItemThrow;
  static deserializeBinaryFromReader(message: CS2ItemThrow, reader: jspb.BinaryReader): CS2ItemThrow;
}

export namespace CS2ItemThrow {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
    position?: CS2Position.AsObject,
    playerUrn: string,
    teamUrn: string,
    item: string,
  }
}

export class CS2Kill extends jspb.Message {
  hasMapTime(): boolean;
  clearMapTime(): void;
  getMapTime(): google_protobuf_duration_pb.Duration | undefined;
  setMapTime(value?: google_protobuf_duration_pb.Duration): void;

  hasTimeRemaining(): boolean;
  clearTimeRemaining(): void;
  getTimeRemaining(): google_protobuf_duration_pb.Duration | undefined;
  setTimeRemaining(value?: google_protobuf_duration_pb.Duration): void;

  getCurrentRoundNumber(): number;
  setCurrentRoundNumber(value: number): void;

  hasKillerPosition(): boolean;
  clearKillerPosition(): void;
  getKillerPosition(): CS2Position | undefined;
  setKillerPosition(value?: CS2Position): void;

  getKillerUrn(): string;
  setKillerUrn(value: string): void;

  getKillerTeamUrn(): string;
  setKillerTeamUrn(value: string): void;

  getVictimUrn(): string;
  setVictimUrn(value: string): void;

  getVictimTeamUrn(): string;
  setVictimTeamUrn(value: string): void;

  getWeapon(): string;
  setWeapon(value: string): void;

  getHeadshot(): boolean;
  setHeadshot(value: boolean): void;

  getPenetrated(): boolean;
  setPenetrated(value: boolean): void;

  clearAssistantsList(): void;
  getAssistantsList(): Array<string>;
  setAssistantsList(value: Array<string>): void;
  addAssistants(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2Kill.AsObject;
  static toObject(includeInstance: boolean, msg: CS2Kill): CS2Kill.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2Kill, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2Kill;
  static deserializeBinaryFromReader(message: CS2Kill, reader: jspb.BinaryReader): CS2Kill;
}

export namespace CS2Kill {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
    killerPosition?: CS2Position.AsObject,
    killerUrn: string,
    killerTeamUrn: string,
    victimUrn: string,
    victimTeamUrn: string,
    weapon: string,
    headshot: boolean,
    penetrated: boolean,
    assistantsList: Array<string>,
  }
}

export class CS2Death extends jspb.Message {
  hasMapTime(): boolean;
  clearMapTime(): void;
  getMapTime(): google_protobuf_duration_pb.Duration | undefined;
  setMapTime(value?: google_protobuf_duration_pb.Duration): void;

  hasTimeRemaining(): boolean;
  clearTimeRemaining(): void;
  getTimeRemaining(): google_protobuf_duration_pb.Duration | undefined;
  setTimeRemaining(value?: google_protobuf_duration_pb.Duration): void;

  getCurrentRoundNumber(): number;
  setCurrentRoundNumber(value: number): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): CS2Position | undefined;
  setPosition(value?: CS2Position): void;

  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getTotalDeaths(): number;
  setTotalDeaths(value: number): void;

  getSuicide(): boolean;
  setSuicide(value: boolean): void;

  getDeathByBomb(): boolean;
  setDeathByBomb(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2Death.AsObject;
  static toObject(includeInstance: boolean, msg: CS2Death): CS2Death.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2Death, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2Death;
  static deserializeBinaryFromReader(message: CS2Death, reader: jspb.BinaryReader): CS2Death;
}

export namespace CS2Death {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
    position?: CS2Position.AsObject,
    playerUrn: string,
    teamUrn: string,
    totalDeaths: number,
    suicide: boolean,
    deathByBomb: boolean,
  }
}

export class CS2MapEnd extends jspb.Message {
  hasMapTime(): boolean;
  clearMapTime(): void;
  getMapTime(): google_protobuf_duration_pb.Duration | undefined;
  setMapTime(value?: google_protobuf_duration_pb.Duration): void;

  getCurrentRoundNumber(): number;
  setCurrentRoundNumber(value: number): void;

  getMapName(): string;
  setMapName(value: string): void;

  getWinningTeamUrn(): string;
  setWinningTeamUrn(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2MapEnd.AsObject;
  static toObject(includeInstance: boolean, msg: CS2MapEnd): CS2MapEnd.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2MapEnd, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2MapEnd;
  static deserializeBinaryFromReader(message: CS2MapEnd, reader: jspb.BinaryReader): CS2MapEnd;
}

export namespace CS2MapEnd {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
    mapName: string,
    winningTeamUrn: string,
  }
}

export class CS2MapStart extends jspb.Message {
  hasMapTime(): boolean;
  clearMapTime(): void;
  getMapTime(): google_protobuf_duration_pb.Duration | undefined;
  setMapTime(value?: google_protobuf_duration_pb.Duration): void;

  getMapName(): string;
  setMapName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2MapStart.AsObject;
  static toObject(includeInstance: boolean, msg: CS2MapStart): CS2MapStart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2MapStart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2MapStart;
  static deserializeBinaryFromReader(message: CS2MapStart, reader: jspb.BinaryReader): CS2MapStart;
}

export namespace CS2MapStart {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    mapName: string,
  }
}

export class CS2RoundEnd extends jspb.Message {
  hasMapTime(): boolean;
  clearMapTime(): void;
  getMapTime(): google_protobuf_duration_pb.Duration | undefined;
  setMapTime(value?: google_protobuf_duration_pb.Duration): void;

  hasTimeRemaining(): boolean;
  clearTimeRemaining(): void;
  getTimeRemaining(): google_protobuf_duration_pb.Duration | undefined;
  setTimeRemaining(value?: google_protobuf_duration_pb.Duration): void;

  getCurrentRoundNumber(): number;
  setCurrentRoundNumber(value: number): void;

  getWinningTeamUrn(): string;
  setWinningTeamUrn(value: string): void;

  getWinReason(): CS2WinReasonMap[keyof CS2WinReasonMap];
  setWinReason(value: CS2WinReasonMap[keyof CS2WinReasonMap]): void;

  getPlayerBalancesMap(): jspb.Map<string, CS2PlayerBalance>;
  clearPlayerBalancesMap(): void;
  getPlayerInventoriesMap(): jspb.Map<string, CS2PlayerItems>;
  clearPlayerInventoriesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2RoundEnd.AsObject;
  static toObject(includeInstance: boolean, msg: CS2RoundEnd): CS2RoundEnd.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2RoundEnd, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2RoundEnd;
  static deserializeBinaryFromReader(message: CS2RoundEnd, reader: jspb.BinaryReader): CS2RoundEnd;
}

export namespace CS2RoundEnd {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
    winningTeamUrn: string,
    winReason: CS2WinReasonMap[keyof CS2WinReasonMap],
    playerBalancesMap: Array<[string, CS2PlayerBalance.AsObject]>,
    playerInventoriesMap: Array<[string, CS2PlayerItems.AsObject]>,
  }
}

export class CS2RoundPause extends jspb.Message {
  hasMapTime(): boolean;
  clearMapTime(): void;
  getMapTime(): google_protobuf_duration_pb.Duration | undefined;
  setMapTime(value?: google_protobuf_duration_pb.Duration): void;

  hasTimeRemaining(): boolean;
  clearTimeRemaining(): void;
  getTimeRemaining(): google_protobuf_duration_pb.Duration | undefined;
  setTimeRemaining(value?: google_protobuf_duration_pb.Duration): void;

  getCurrentRoundNumber(): number;
  setCurrentRoundNumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2RoundPause.AsObject;
  static toObject(includeInstance: boolean, msg: CS2RoundPause): CS2RoundPause.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2RoundPause, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2RoundPause;
  static deserializeBinaryFromReader(message: CS2RoundPause, reader: jspb.BinaryReader): CS2RoundPause;
}

export namespace CS2RoundPause {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
  }
}

export class CS2RoundResume extends jspb.Message {
  hasMapTime(): boolean;
  clearMapTime(): void;
  getMapTime(): google_protobuf_duration_pb.Duration | undefined;
  setMapTime(value?: google_protobuf_duration_pb.Duration): void;

  hasTimeRemaining(): boolean;
  clearTimeRemaining(): void;
  getTimeRemaining(): google_protobuf_duration_pb.Duration | undefined;
  setTimeRemaining(value?: google_protobuf_duration_pb.Duration): void;

  getCurrentRoundNumber(): number;
  setCurrentRoundNumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2RoundResume.AsObject;
  static toObject(includeInstance: boolean, msg: CS2RoundResume): CS2RoundResume.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2RoundResume, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2RoundResume;
  static deserializeBinaryFromReader(message: CS2RoundResume, reader: jspb.BinaryReader): CS2RoundResume;
}

export namespace CS2RoundResume {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
  }
}

export class CS2RoundRollback extends jspb.Message {
  getNextRoundNumber(): number;
  setNextRoundNumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2RoundRollback.AsObject;
  static toObject(includeInstance: boolean, msg: CS2RoundRollback): CS2RoundRollback.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2RoundRollback, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2RoundRollback;
  static deserializeBinaryFromReader(message: CS2RoundRollback, reader: jspb.BinaryReader): CS2RoundRollback;
}

export namespace CS2RoundRollback {
  export type AsObject = {
    nextRoundNumber: number,
  }
}

export class CS2RoundStart extends jspb.Message {
  hasMapTime(): boolean;
  clearMapTime(): void;
  getMapTime(): google_protobuf_duration_pb.Duration | undefined;
  setMapTime(value?: google_protobuf_duration_pb.Duration): void;

  hasTimeRemaining(): boolean;
  clearTimeRemaining(): void;
  getTimeRemaining(): google_protobuf_duration_pb.Duration | undefined;
  setTimeRemaining(value?: google_protobuf_duration_pb.Duration): void;

  getCurrentRoundNumber(): number;
  setCurrentRoundNumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS2RoundStart.AsObject;
  static toObject(includeInstance: boolean, msg: CS2RoundStart): CS2RoundStart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CS2RoundStart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS2RoundStart;
  static deserializeBinaryFromReader(message: CS2RoundStart, reader: jspb.BinaryReader): CS2RoundStart;
}

export namespace CS2RoundStart {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
  }
}

export interface CS2SideMap {
  CS2_SIDE_UNSPECIFIED: 0;
  CS2_SIDE_COUNTER_TERRORISTS: 1;
  CS2_SIDE_TERRORISTS: 2;
}

export const CS2Side: CS2SideMap;

export interface CS2WinReasonMap {
  CS2_WIN_REASON_UNSPECIFIED: 0;
  CS2_WIN_REASON_COUNTER_TERRORISTS_ELIMINATED: 1;
  CS2_WIN_REASON_TERRORISTS_ELIMINATED: 2;
  CS2_WIN_REASON_EXPLOSION: 3;
  CS2_WIN_REASON_DEFUSE: 4;
  CS2_WIN_REASON_TIMEOUT: 5;
  CS2_WIN_REASON_TARGET_SAVED: 6;
}

export const CS2WinReason: CS2WinReasonMap;

export interface CS2RoundStateTypeMap {
  CS2_ROUND_STATE_TYPE_UNSPECIFIED: 0;
  CS2_ROUND_STATE_TYPE_BUY_TIME: 1;
  CS2_ROUND_STATE_TYPE_IN_PROGRESS: 2;
  CS2_ROUND_STATE_TYPE_PAUSED: 3;
  CS2_ROUND_STATE_TYPE_FINISHED: 4;
}

export const CS2RoundStateType: CS2RoundStateTypeMap;

export interface CS2WeaponTypeMap {
  CS2_WEAPON_TYPE_UNSPECIFIED: 0;
  CS2_WEAPON_TYPE_PISTOL: 1;
  CS2_WEAPON_TYPE_BOMB: 2;
  CS2_WEAPON_TYPE_GRENADE: 3;
  CS2_WEAPON_TYPE_MACHINE_GUN: 4;
  CS2_WEAPON_TYPE_RIFLE: 5;
  CS2_WEAPON_TYPE_SHOTGUN: 6;
  CS2_WEAPON_TYPE_SNIPER_RIFLE: 7;
  CS2_WEAPON_TYPE_SUBMACHINE_GUN: 8;
  CS2_WEAPON_TYPE_KNIFE: 9;
  CS2_WEAPON_TYPE_DEFUSE_KIT: 10;
}

export const CS2WeaponType: CS2WeaponTypeMap;

