// package: bragi
// file: bragi/csgo.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as bragi_common_pb from "../bragi/common_pb";

export class CsgoMatchMessage extends jspb.Message {
  getMatchUrn(): string;
  setMatchUrn(value: string): void;

  getSequence(): number;
  setSequence(value: number): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): CsgoMatchMessage.Payload | undefined;
  setPayload(value?: CsgoMatchMessage.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoMatchMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoMatchMessage): CsgoMatchMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoMatchMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoMatchMessage;
  static deserializeBinaryFromReader(message: CsgoMatchMessage, reader: jspb.BinaryReader): CsgoMatchMessage;
}

export namespace CsgoMatchMessage {
  export type AsObject = {
    matchUrn: string,
    sequence: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    payload?: CsgoMatchMessage.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasSnapshot(): boolean;
    clearSnapshot(): void;
    getSnapshot(): CsgoMatchSnapshot | undefined;
    setSnapshot(value?: CsgoMatchSnapshot): void;

    hasUpdate(): boolean;
    clearUpdate(): void;
    getUpdate(): CsgoMatchUpdate | undefined;
    setUpdate(value?: CsgoMatchUpdate): void;

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
      snapshot?: CsgoMatchSnapshot.AsObject,
      update?: CsgoMatchUpdate.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      SNAPSHOT = 1,
      UPDATE = 2,
    }
  }
}

export class CsgoMatchSnapshot extends jspb.Message {
  getMatchUrn(): string;
  setMatchUrn(value: string): void;

  getSequence(): number;
  setSequence(value: number): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearAnnouncementsList(): void;
  getAnnouncementsList(): Array<bragi_common_pb.Announcement>;
  setAnnouncementsList(value: Array<bragi_common_pb.Announcement>): void;
  addAnnouncements(value?: bragi_common_pb.Announcement, index?: number): bragi_common_pb.Announcement;

  hasMatchState(): boolean;
  clearMatchState(): void;
  getMatchState(): CsgoMatchState | undefined;
  setMatchState(value?: CsgoMatchState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoMatchSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoMatchSnapshot): CsgoMatchSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoMatchSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoMatchSnapshot;
  static deserializeBinaryFromReader(message: CsgoMatchSnapshot, reader: jspb.BinaryReader): CsgoMatchSnapshot;
}

export namespace CsgoMatchSnapshot {
  export type AsObject = {
    matchUrn: string,
    sequence: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    announcementsList: Array<bragi_common_pb.Announcement.AsObject>,
    matchState?: CsgoMatchState.AsObject,
  }
}

export class CsgoMatchUpdate extends jspb.Message {
  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): CsgoMatchUpdate.Payload | undefined;
  setPayload(value?: CsgoMatchUpdate.Payload): void;

  clearEventsList(): void;
  getEventsList(): Array<CsgoEvent>;
  setEventsList(value: Array<CsgoEvent>): void;
  addEvents(value?: CsgoEvent, index?: number): CsgoEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoMatchUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoMatchUpdate): CsgoMatchUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoMatchUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoMatchUpdate;
  static deserializeBinaryFromReader(message: CsgoMatchUpdate, reader: jspb.BinaryReader): CsgoMatchUpdate;
}

export namespace CsgoMatchUpdate {
  export type AsObject = {
    payload?: CsgoMatchUpdate.Payload.AsObject,
    eventsList: Array<CsgoEvent.AsObject>,
  }

  export class Payload extends jspb.Message {
    hasMatchState(): boolean;
    clearMatchState(): void;
    getMatchState(): CsgoMatchState | undefined;
    setMatchState(value?: CsgoMatchState): void;

    hasPartialUpdates(): boolean;
    clearPartialUpdates(): void;
    getPartialUpdates(): CsgoMatchStatePartialUpdates | undefined;
    setPartialUpdates(value?: CsgoMatchStatePartialUpdates): void;

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
      matchState?: CsgoMatchState.AsObject,
      partialUpdates?: CsgoMatchStatePartialUpdates.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      MATCH_STATE = 1,
      PARTIAL_UPDATES = 2,
    }
  }
}

export class CsgoMatchStatePartialUpdates extends jspb.Message {
  clearUpdatesList(): void;
  getUpdatesList(): Array<CsgoMatchStatePartialUpdate>;
  setUpdatesList(value: Array<CsgoMatchStatePartialUpdate>): void;
  addUpdates(value?: CsgoMatchStatePartialUpdate, index?: number): CsgoMatchStatePartialUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoMatchStatePartialUpdates.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoMatchStatePartialUpdates): CsgoMatchStatePartialUpdates.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoMatchStatePartialUpdates, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoMatchStatePartialUpdates;
  static deserializeBinaryFromReader(message: CsgoMatchStatePartialUpdates, reader: jspb.BinaryReader): CsgoMatchStatePartialUpdates;
}

export namespace CsgoMatchStatePartialUpdates {
  export type AsObject = {
    updatesList: Array<CsgoMatchStatePartialUpdate.AsObject>,
  }
}

export class CsgoMatchStatePartialUpdate extends jspb.Message {
  hasScore(): boolean;
  clearScore(): void;
  getScore(): CsgoMatchScoreState | undefined;
  setScore(value?: CsgoMatchScoreState): void;

  hasCurrentMapState(): boolean;
  clearCurrentMapState(): void;
  getCurrentMapState(): CsgoCurrentMapState | undefined;
  setCurrentMapState(value?: CsgoCurrentMapState): void;

  hasCurrentMapStatePartialUpdate(): boolean;
  clearCurrentMapStatePartialUpdate(): void;
  getCurrentMapStatePartialUpdate(): CsgoCurrentMapStatePartialUpdate | undefined;
  setCurrentMapStatePartialUpdate(value?: CsgoCurrentMapStatePartialUpdate): void;

  getUpdateCase(): CsgoMatchStatePartialUpdate.UpdateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoMatchStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoMatchStatePartialUpdate): CsgoMatchStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoMatchStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoMatchStatePartialUpdate;
  static deserializeBinaryFromReader(message: CsgoMatchStatePartialUpdate, reader: jspb.BinaryReader): CsgoMatchStatePartialUpdate;
}

export namespace CsgoMatchStatePartialUpdate {
  export type AsObject = {
    score?: CsgoMatchScoreState.AsObject,
    currentMapState?: CsgoCurrentMapState.AsObject,
    currentMapStatePartialUpdate?: CsgoCurrentMapStatePartialUpdate.AsObject,
  }

  export enum UpdateCase {
    UPDATE_NOT_SET = 0,
    SCORE = 1,
    CURRENT_MAP_STATE = 2,
    CURRENT_MAP_STATE_PARTIAL_UPDATE = 3,
  }
}

export class CsgoMatchState extends jspb.Message {
  getMatchUrn(): string;
  setMatchUrn(value: string): void;

  getMatchType(): bragi_common_pb.BestOfTypeMap[keyof bragi_common_pb.BestOfTypeMap];
  setMatchType(value: bragi_common_pb.BestOfTypeMap[keyof bragi_common_pb.BestOfTypeMap]): void;

  hasHomeTeam(): boolean;
  clearHomeTeam(): void;
  getHomeTeam(): CsgoTeam | undefined;
  setHomeTeam(value?: CsgoTeam): void;

  hasAwayTeam(): boolean;
  clearAwayTeam(): void;
  getAwayTeam(): CsgoTeam | undefined;
  setAwayTeam(value?: CsgoTeam): void;

  hasScore(): boolean;
  clearScore(): void;
  getScore(): CsgoMatchScoreState | undefined;
  setScore(value?: CsgoMatchScoreState): void;

  getMatchStatus(): bragi_common_pb.MatchStatusTypeMap[keyof bragi_common_pb.MatchStatusTypeMap];
  setMatchStatus(value: bragi_common_pb.MatchStatusTypeMap[keyof bragi_common_pb.MatchStatusTypeMap]): void;

  hasCurrentMapState(): boolean;
  clearCurrentMapState(): void;
  getCurrentMapState(): CsgoCurrentMapState | undefined;
  setCurrentMapState(value?: CsgoCurrentMapState): void;

  clearPreviousMapStatesList(): void;
  getPreviousMapStatesList(): Array<CsgoPreviousMapState>;
  setPreviousMapStatesList(value: Array<CsgoPreviousMapState>): void;
  addPreviousMapStates(value?: CsgoPreviousMapState, index?: number): CsgoPreviousMapState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoMatchState.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoMatchState): CsgoMatchState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoMatchState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoMatchState;
  static deserializeBinaryFromReader(message: CsgoMatchState, reader: jspb.BinaryReader): CsgoMatchState;
}

export namespace CsgoMatchState {
  export type AsObject = {
    matchUrn: string,
    matchType: bragi_common_pb.BestOfTypeMap[keyof bragi_common_pb.BestOfTypeMap],
    homeTeam?: CsgoTeam.AsObject,
    awayTeam?: CsgoTeam.AsObject,
    score?: CsgoMatchScoreState.AsObject,
    matchStatus: bragi_common_pb.MatchStatusTypeMap[keyof bragi_common_pb.MatchStatusTypeMap],
    currentMapState?: CsgoCurrentMapState.AsObject,
    previousMapStatesList: Array<CsgoPreviousMapState.AsObject>,
  }
}

export class CsgoMatchScoreState extends jspb.Message {
  getHomeScore(): number;
  setHomeScore(value: number): void;

  getAwayScore(): number;
  setAwayScore(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoMatchScoreState.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoMatchScoreState): CsgoMatchScoreState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoMatchScoreState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoMatchScoreState;
  static deserializeBinaryFromReader(message: CsgoMatchScoreState, reader: jspb.BinaryReader): CsgoMatchScoreState;
}

export namespace CsgoMatchScoreState {
  export type AsObject = {
    homeScore: number,
    awayScore: number,
  }
}

export class CsgoTeam extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getTeamName(): string;
  setTeamName(value: string): void;

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
    teamUrn: string,
    teamName: string,
  }
}

export class CsgoCurrentMapStatePartialUpdate extends jspb.Message {
  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): CsgoMapInfoState | undefined;
  setInfo(value?: CsgoMapInfoState): void;

  hasScore(): boolean;
  clearScore(): void;
  getScore(): CsgoMapScoreState | undefined;
  setScore(value?: CsgoMapScoreState): void;

  hasCurrentRoundState(): boolean;
  clearCurrentRoundState(): void;
  getCurrentRoundState(): CsgoCurrentRoundState | undefined;
  setCurrentRoundState(value?: CsgoCurrentRoundState): void;

  hasCurrentRoundStatePartialUpdate(): boolean;
  clearCurrentRoundStatePartialUpdate(): void;
  getCurrentRoundStatePartialUpdate(): CsgoCurrentRoundStatePartialUpdate | undefined;
  setCurrentRoundStatePartialUpdate(value?: CsgoCurrentRoundStatePartialUpdate): void;

  hasTeamMapStatesPartialUpdate(): boolean;
  clearTeamMapStatesPartialUpdate(): void;
  getTeamMapStatesPartialUpdate(): CsgoTeamMapStatePartialUpdate | undefined;
  setTeamMapStatesPartialUpdate(value?: CsgoTeamMapStatePartialUpdate): void;

  getUpdateCase(): CsgoCurrentMapStatePartialUpdate.UpdateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoCurrentMapStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoCurrentMapStatePartialUpdate): CsgoCurrentMapStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoCurrentMapStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoCurrentMapStatePartialUpdate;
  static deserializeBinaryFromReader(message: CsgoCurrentMapStatePartialUpdate, reader: jspb.BinaryReader): CsgoCurrentMapStatePartialUpdate;
}

export namespace CsgoCurrentMapStatePartialUpdate {
  export type AsObject = {
    info?: CsgoMapInfoState.AsObject,
    score?: CsgoMapScoreState.AsObject,
    currentRoundState?: CsgoCurrentRoundState.AsObject,
    currentRoundStatePartialUpdate?: CsgoCurrentRoundStatePartialUpdate.AsObject,
    teamMapStatesPartialUpdate?: CsgoTeamMapStatePartialUpdate.AsObject,
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

export class CsgoCurrentMapState extends jspb.Message {
  getMapOrder(): number;
  setMapOrder(value: number): void;

  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): CsgoMapInfoState | undefined;
  setInfo(value?: CsgoMapInfoState): void;

  hasScore(): boolean;
  clearScore(): void;
  getScore(): CsgoMapScoreState | undefined;
  setScore(value?: CsgoMapScoreState): void;

  hasCurrentRoundState(): boolean;
  clearCurrentRoundState(): void;
  getCurrentRoundState(): CsgoCurrentRoundState | undefined;
  setCurrentRoundState(value?: CsgoCurrentRoundState): void;

  clearPreviousRoundStatesList(): void;
  getPreviousRoundStatesList(): Array<CsgoPreviousRoundState>;
  setPreviousRoundStatesList(value: Array<CsgoPreviousRoundState>): void;
  addPreviousRoundStates(value?: CsgoPreviousRoundState, index?: number): CsgoPreviousRoundState;

  getTeamMapStatesMap(): jspb.Map<string, CsgoTeamMapState>;
  clearTeamMapStatesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoCurrentMapState.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoCurrentMapState): CsgoCurrentMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoCurrentMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoCurrentMapState;
  static deserializeBinaryFromReader(message: CsgoCurrentMapState, reader: jspb.BinaryReader): CsgoCurrentMapState;
}

export namespace CsgoCurrentMapState {
  export type AsObject = {
    mapOrder: number,
    info?: CsgoMapInfoState.AsObject,
    score?: CsgoMapScoreState.AsObject,
    currentRoundState?: CsgoCurrentRoundState.AsObject,
    previousRoundStatesList: Array<CsgoPreviousRoundState.AsObject>,
    teamMapStatesMap: Array<[string, CsgoTeamMapState.AsObject]>,
  }
}

export class CsgoPreviousMapState extends jspb.Message {
  getMapOrder(): number;
  setMapOrder(value: number): void;

  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): CsgoMapInfoState | undefined;
  setInfo(value?: CsgoMapInfoState): void;

  hasScore(): boolean;
  clearScore(): void;
  getScore(): CsgoMapScoreState | undefined;
  setScore(value?: CsgoMapScoreState): void;

  clearRoundStatesList(): void;
  getRoundStatesList(): Array<CsgoPreviousRoundState>;
  setRoundStatesList(value: Array<CsgoPreviousRoundState>): void;
  addRoundStates(value?: CsgoPreviousRoundState, index?: number): CsgoPreviousRoundState;

  getTeamMapStatesMap(): jspb.Map<string, CsgoTeamMapState>;
  clearTeamMapStatesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoPreviousMapState.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoPreviousMapState): CsgoPreviousMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoPreviousMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoPreviousMapState;
  static deserializeBinaryFromReader(message: CsgoPreviousMapState, reader: jspb.BinaryReader): CsgoPreviousMapState;
}

export namespace CsgoPreviousMapState {
  export type AsObject = {
    mapOrder: number,
    info?: CsgoMapInfoState.AsObject,
    score?: CsgoMapScoreState.AsObject,
    roundStatesList: Array<CsgoPreviousRoundState.AsObject>,
    teamMapStatesMap: Array<[string, CsgoTeamMapState.AsObject]>,
  }
}

export class CsgoMapInfoState extends jspb.Message {
  getCsgoMapName(): string;
  setCsgoMapName(value: string): void;

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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoMapInfoState.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoMapInfoState): CsgoMapInfoState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoMapInfoState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoMapInfoState;
  static deserializeBinaryFromReader(message: CsgoMapInfoState, reader: jspb.BinaryReader): CsgoMapInfoState;
}

export namespace CsgoMapInfoState {
  export type AsObject = {
    csgoMapName: string,
    maxRoundsDefault: number,
    maxRoundsOvertime: number,
    freezeTimeDuration?: google_protobuf_duration_pb.Duration.AsObject,
    roundTimeDuration?: google_protobuf_duration_pb.Duration.AsObject,
    bombTimeDuration?: google_protobuf_duration_pb.Duration.AsObject,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    mapEnded: boolean,
  }
}

export class CsgoMapScoreState extends jspb.Message {
  getHomeScore(): number;
  setHomeScore(value: number): void;

  getAwayScore(): number;
  setAwayScore(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoMapScoreState.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoMapScoreState): CsgoMapScoreState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoMapScoreState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoMapScoreState;
  static deserializeBinaryFromReader(message: CsgoMapScoreState, reader: jspb.BinaryReader): CsgoMapScoreState;
}

export namespace CsgoMapScoreState {
  export type AsObject = {
    homeScore: number,
    awayScore: number,
  }
}

export class CsgoCurrentRoundStatePartialUpdate extends jspb.Message {
  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): CsgoRoundInfoState | undefined;
  setInfo(value?: CsgoRoundInfoState): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): CsgoRoundTimeState | undefined;
  setTime(value?: CsgoRoundTimeState): void;

  hasBombState(): boolean;
  clearBombState(): void;
  getBombState(): CsgoBombState | undefined;
  setBombState(value?: CsgoBombState): void;

  hasTeamStatesPartialUpdate(): boolean;
  clearTeamStatesPartialUpdate(): void;
  getTeamStatesPartialUpdate(): CsgoTeamCurrentRoundStatePartialUpdate | undefined;
  setTeamStatesPartialUpdate(value?: CsgoTeamCurrentRoundStatePartialUpdate): void;

  getUpdateCase(): CsgoCurrentRoundStatePartialUpdate.UpdateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoCurrentRoundStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoCurrentRoundStatePartialUpdate): CsgoCurrentRoundStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoCurrentRoundStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoCurrentRoundStatePartialUpdate;
  static deserializeBinaryFromReader(message: CsgoCurrentRoundStatePartialUpdate, reader: jspb.BinaryReader): CsgoCurrentRoundStatePartialUpdate;
}

export namespace CsgoCurrentRoundStatePartialUpdate {
  export type AsObject = {
    info?: CsgoRoundInfoState.AsObject,
    time?: CsgoRoundTimeState.AsObject,
    bombState?: CsgoBombState.AsObject,
    teamStatesPartialUpdate?: CsgoTeamCurrentRoundStatePartialUpdate.AsObject,
  }

  export enum UpdateCase {
    UPDATE_NOT_SET = 0,
    INFO = 1,
    TIME = 2,
    BOMB_STATE = 3,
    TEAM_STATES_PARTIAL_UPDATE = 4,
  }
}

export class CsgoCurrentRoundState extends jspb.Message {
  getRoundNumber(): number;
  setRoundNumber(value: number): void;

  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): CsgoRoundInfoState | undefined;
  setInfo(value?: CsgoRoundInfoState): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): CsgoRoundTimeState | undefined;
  setTime(value?: CsgoRoundTimeState): void;

  hasBombState(): boolean;
  clearBombState(): void;
  getBombState(): CsgoBombState | undefined;
  setBombState(value?: CsgoBombState): void;

  getTeamStatesMap(): jspb.Map<string, CsgoTeamCurrentRoundState>;
  clearTeamStatesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoCurrentRoundState.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoCurrentRoundState): CsgoCurrentRoundState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoCurrentRoundState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoCurrentRoundState;
  static deserializeBinaryFromReader(message: CsgoCurrentRoundState, reader: jspb.BinaryReader): CsgoCurrentRoundState;
}

export namespace CsgoCurrentRoundState {
  export type AsObject = {
    roundNumber: number,
    info?: CsgoRoundInfoState.AsObject,
    time?: CsgoRoundTimeState.AsObject,
    bombState?: CsgoBombState.AsObject,
    teamStatesMap: Array<[string, CsgoTeamCurrentRoundState.AsObject]>,
  }
}

export class CsgoPreviousRoundState extends jspb.Message {
  getRoundNumber(): number;
  setRoundNumber(value: number): void;

  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): CsgoRoundInfoState | undefined;
  setInfo(value?: CsgoRoundInfoState): void;

  getTeamStatesMap(): jspb.Map<string, CsgoPreviousTeamRoundState>;
  clearTeamStatesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoPreviousRoundState.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoPreviousRoundState): CsgoPreviousRoundState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoPreviousRoundState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoPreviousRoundState;
  static deserializeBinaryFromReader(message: CsgoPreviousRoundState, reader: jspb.BinaryReader): CsgoPreviousRoundState;
}

export namespace CsgoPreviousRoundState {
  export type AsObject = {
    roundNumber: number,
    info?: CsgoRoundInfoState.AsObject,
    teamStatesMap: Array<[string, CsgoPreviousTeamRoundState.AsObject]>,
  }
}

export class CsgoRoundInfoState extends jspb.Message {
  getRoundType(): CsgoRoundStateTypeMap[keyof CsgoRoundStateTypeMap];
  setRoundType(value: CsgoRoundStateTypeMap[keyof CsgoRoundStateTypeMap]): void;

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
  getWinReason(): CsgoWinReasonMap[keyof CsgoWinReasonMap];
  setWinReason(value: CsgoWinReasonMap[keyof CsgoWinReasonMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoRoundInfoState.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoRoundInfoState): CsgoRoundInfoState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoRoundInfoState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoRoundInfoState;
  static deserializeBinaryFromReader(message: CsgoRoundInfoState, reader: jspb.BinaryReader): CsgoRoundInfoState;
}

export namespace CsgoRoundInfoState {
  export type AsObject = {
    roundType: CsgoRoundStateTypeMap[keyof CsgoRoundStateTypeMap],
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    winningTeamUrn: string,
    winReason: CsgoWinReasonMap[keyof CsgoWinReasonMap],
  }
}

export class CsgoRoundTimeState extends jspb.Message {
  hasTimeRemaining(): boolean;
  clearTimeRemaining(): void;
  getTimeRemaining(): google_protobuf_duration_pb.Duration | undefined;
  setTimeRemaining(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoRoundTimeState.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoRoundTimeState): CsgoRoundTimeState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoRoundTimeState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoRoundTimeState;
  static deserializeBinaryFromReader(message: CsgoRoundTimeState, reader: jspb.BinaryReader): CsgoRoundTimeState;
}

export namespace CsgoRoundTimeState {
  export type AsObject = {
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class CsgoBombState extends jspb.Message {
  hasCarried(): boolean;
  clearCarried(): void;
  getCarried(): CsgoBombCarriedState | undefined;
  setCarried(value?: CsgoBombCarriedState): void;

  hasDropped(): boolean;
  clearDropped(): void;
  getDropped(): CsgoBombDroppedState | undefined;
  setDropped(value?: CsgoBombDroppedState): void;

  hasPlanting(): boolean;
  clearPlanting(): void;
  getPlanting(): CsgoBombPlantingState | undefined;
  setPlanting(value?: CsgoBombPlantingState): void;

  hasPlanted(): boolean;
  clearPlanted(): void;
  getPlanted(): CsgoBombPlantedState | undefined;
  setPlanted(value?: CsgoBombPlantedState): void;

  hasDefusing(): boolean;
  clearDefusing(): void;
  getDefusing(): CsgoBombDefusingState | undefined;
  setDefusing(value?: CsgoBombDefusingState): void;

  hasDefused(): boolean;
  clearDefused(): void;
  getDefused(): CsgoBombDefusedState | undefined;
  setDefused(value?: CsgoBombDefusedState): void;

  hasExploded(): boolean;
  clearExploded(): void;
  getExploded(): CsgoBombExplodedState | undefined;
  setExploded(value?: CsgoBombExplodedState): void;

  getPayloadCase(): CsgoBombState.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoBombState.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoBombState): CsgoBombState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoBombState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoBombState;
  static deserializeBinaryFromReader(message: CsgoBombState, reader: jspb.BinaryReader): CsgoBombState;
}

export namespace CsgoBombState {
  export type AsObject = {
    carried?: CsgoBombCarriedState.AsObject,
    dropped?: CsgoBombDroppedState.AsObject,
    planting?: CsgoBombPlantingState.AsObject,
    planted?: CsgoBombPlantedState.AsObject,
    defusing?: CsgoBombDefusingState.AsObject,
    defused?: CsgoBombDefusedState.AsObject,
    exploded?: CsgoBombExplodedState.AsObject,
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

export class CsgoBombCarriedState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): CsgoPosition | undefined;
  setPosition(value?: CsgoPosition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoBombCarriedState.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoBombCarriedState): CsgoBombCarriedState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoBombCarriedState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoBombCarriedState;
  static deserializeBinaryFromReader(message: CsgoBombCarriedState, reader: jspb.BinaryReader): CsgoBombCarriedState;
}

export namespace CsgoBombCarriedState {
  export type AsObject = {
    playerUrn: string,
    position?: CsgoPosition.AsObject,
  }
}

export class CsgoBombDroppedState extends jspb.Message {
  getDroppedByPlayerUrn(): string;
  setDroppedByPlayerUrn(value: string): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): CsgoPosition | undefined;
  setPosition(value?: CsgoPosition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoBombDroppedState.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoBombDroppedState): CsgoBombDroppedState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoBombDroppedState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoBombDroppedState;
  static deserializeBinaryFromReader(message: CsgoBombDroppedState, reader: jspb.BinaryReader): CsgoBombDroppedState;
}

export namespace CsgoBombDroppedState {
  export type AsObject = {
    droppedByPlayerUrn: string,
    position?: CsgoPosition.AsObject,
  }
}

export class CsgoBombPlantingState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): CsgoPosition | undefined;
  setPosition(value?: CsgoPosition): void;

  hasCountdown(): boolean;
  clearCountdown(): void;
  getCountdown(): google_protobuf_duration_pb.Duration | undefined;
  setCountdown(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoBombPlantingState.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoBombPlantingState): CsgoBombPlantingState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoBombPlantingState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoBombPlantingState;
  static deserializeBinaryFromReader(message: CsgoBombPlantingState, reader: jspb.BinaryReader): CsgoBombPlantingState;
}

export namespace CsgoBombPlantingState {
  export type AsObject = {
    playerUrn: string,
    position?: CsgoPosition.AsObject,
    countdown?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class CsgoBombPlantedState extends jspb.Message {
  getPlantedByPlayerUrn(): string;
  setPlantedByPlayerUrn(value: string): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): CsgoPosition | undefined;
  setPosition(value?: CsgoPosition): void;

  hasPlantedAt(): boolean;
  clearPlantedAt(): void;
  getPlantedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPlantedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCountdown(): boolean;
  clearCountdown(): void;
  getCountdown(): google_protobuf_duration_pb.Duration | undefined;
  setCountdown(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoBombPlantedState.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoBombPlantedState): CsgoBombPlantedState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoBombPlantedState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoBombPlantedState;
  static deserializeBinaryFromReader(message: CsgoBombPlantedState, reader: jspb.BinaryReader): CsgoBombPlantedState;
}

export namespace CsgoBombPlantedState {
  export type AsObject = {
    plantedByPlayerUrn: string,
    position?: CsgoPosition.AsObject,
    plantedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    countdown?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class CsgoBombDefusingState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): CsgoPosition | undefined;
  setPosition(value?: CsgoPosition): void;

  hasCountdown(): boolean;
  clearCountdown(): void;
  getCountdown(): google_protobuf_duration_pb.Duration | undefined;
  setCountdown(value?: google_protobuf_duration_pb.Duration): void;

  hasDefuseStartedAt(): boolean;
  clearDefuseStartedAt(): void;
  getDefuseStartedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDefuseStartedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoBombDefusingState.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoBombDefusingState): CsgoBombDefusingState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoBombDefusingState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoBombDefusingState;
  static deserializeBinaryFromReader(message: CsgoBombDefusingState, reader: jspb.BinaryReader): CsgoBombDefusingState;
}

export namespace CsgoBombDefusingState {
  export type AsObject = {
    playerUrn: string,
    position?: CsgoPosition.AsObject,
    countdown?: google_protobuf_duration_pb.Duration.AsObject,
    defuseStartedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CsgoBombDefusedState extends jspb.Message {
  getDefusedByPlayerUrn(): string;
  setDefusedByPlayerUrn(value: string): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): CsgoPosition | undefined;
  setPosition(value?: CsgoPosition): void;

  hasDefusedAt(): boolean;
  clearDefusedAt(): void;
  getDefusedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDefusedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoBombDefusedState.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoBombDefusedState): CsgoBombDefusedState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoBombDefusedState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoBombDefusedState;
  static deserializeBinaryFromReader(message: CsgoBombDefusedState, reader: jspb.BinaryReader): CsgoBombDefusedState;
}

export namespace CsgoBombDefusedState {
  export type AsObject = {
    defusedByPlayerUrn: string,
    position?: CsgoPosition.AsObject,
    defusedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CsgoBombExplodedState extends jspb.Message {
  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): CsgoPosition | undefined;
  setPosition(value?: CsgoPosition): void;

  hasExplodedAt(): boolean;
  clearExplodedAt(): void;
  getExplodedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExplodedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoBombExplodedState.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoBombExplodedState): CsgoBombExplodedState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoBombExplodedState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoBombExplodedState;
  static deserializeBinaryFromReader(message: CsgoBombExplodedState, reader: jspb.BinaryReader): CsgoBombExplodedState;
}

export namespace CsgoBombExplodedState {
  export type AsObject = {
    position?: CsgoPosition.AsObject,
    explodedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CsgoTeamMapStatePartialUpdate extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): CsgoTeamMapStatePartialUpdate.Payload | undefined;
  setPayload(value?: CsgoTeamMapStatePartialUpdate.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoTeamMapStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoTeamMapStatePartialUpdate): CsgoTeamMapStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoTeamMapStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoTeamMapStatePartialUpdate;
  static deserializeBinaryFromReader(message: CsgoTeamMapStatePartialUpdate, reader: jspb.BinaryReader): CsgoTeamMapStatePartialUpdate;
}

export namespace CsgoTeamMapStatePartialUpdate {
  export type AsObject = {
    teamUrn: string,
    payload?: CsgoTeamMapStatePartialUpdate.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasPlayerState(): boolean;
    clearPlayerState(): void;
    getPlayerState(): CsgoPlayerMapState | undefined;
    setPlayerState(value?: CsgoPlayerMapState): void;

    hasPlayerMapStatesPartialUpdate(): boolean;
    clearPlayerMapStatesPartialUpdate(): void;
    getPlayerMapStatesPartialUpdate(): CsgoPlayerMapStatePartialUpdate | undefined;
    setPlayerMapStatesPartialUpdate(value?: CsgoPlayerMapStatePartialUpdate): void;

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
      playerState?: CsgoPlayerMapState.AsObject,
      playerMapStatesPartialUpdate?: CsgoPlayerMapStatePartialUpdate.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      PLAYER_STATE = 2,
      PLAYER_MAP_STATES_PARTIAL_UPDATE = 1,
    }
  }
}

export class CsgoTeamMapState extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getSide(): CsgoSideMap[keyof CsgoSideMap];
  setSide(value: CsgoSideMap[keyof CsgoSideMap]): void;

  getPlayerMapStatesMap(): jspb.Map<string, CsgoPlayerMapState>;
  clearPlayerMapStatesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoTeamMapState.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoTeamMapState): CsgoTeamMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoTeamMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoTeamMapState;
  static deserializeBinaryFromReader(message: CsgoTeamMapState, reader: jspb.BinaryReader): CsgoTeamMapState;
}

export namespace CsgoTeamMapState {
  export type AsObject = {
    teamUrn: string,
    side: CsgoSideMap[keyof CsgoSideMap],
    playerMapStatesMap: Array<[string, CsgoPlayerMapState.AsObject]>,
  }
}

export class CsgoTeamCurrentRoundStatePartialUpdate extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): CsgoTeamCurrentRoundStatePartialUpdate.Payload | undefined;
  setPayload(value?: CsgoTeamCurrentRoundStatePartialUpdate.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoTeamCurrentRoundStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoTeamCurrentRoundStatePartialUpdate): CsgoTeamCurrentRoundStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoTeamCurrentRoundStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoTeamCurrentRoundStatePartialUpdate;
  static deserializeBinaryFromReader(message: CsgoTeamCurrentRoundStatePartialUpdate, reader: jspb.BinaryReader): CsgoTeamCurrentRoundStatePartialUpdate;
}

export namespace CsgoTeamCurrentRoundStatePartialUpdate {
  export type AsObject = {
    teamUrn: string,
    payload?: CsgoTeamCurrentRoundStatePartialUpdate.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasPlayerState(): boolean;
    clearPlayerState(): void;
    getPlayerState(): CsgoPlayerCurrentRoundState | undefined;
    setPlayerState(value?: CsgoPlayerCurrentRoundState): void;

    hasPlayerRoundStatesPartialUpdate(): boolean;
    clearPlayerRoundStatesPartialUpdate(): void;
    getPlayerRoundStatesPartialUpdate(): CsgoPlayerCurrentRoundStatePartialUpdate | undefined;
    setPlayerRoundStatesPartialUpdate(value?: CsgoPlayerCurrentRoundStatePartialUpdate): void;

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
      playerState?: CsgoPlayerCurrentRoundState.AsObject,
      playerRoundStatesPartialUpdate?: CsgoPlayerCurrentRoundStatePartialUpdate.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      PLAYER_STATE = 2,
      PLAYER_ROUND_STATES_PARTIAL_UPDATE = 1,
    }
  }
}

export class CsgoTeamCurrentRoundState extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getPlayerRoundStatesMap(): jspb.Map<string, CsgoPlayerCurrentRoundState>;
  clearPlayerRoundStatesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoTeamCurrentRoundState.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoTeamCurrentRoundState): CsgoTeamCurrentRoundState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoTeamCurrentRoundState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoTeamCurrentRoundState;
  static deserializeBinaryFromReader(message: CsgoTeamCurrentRoundState, reader: jspb.BinaryReader): CsgoTeamCurrentRoundState;
}

export namespace CsgoTeamCurrentRoundState {
  export type AsObject = {
    teamUrn: string,
    playerRoundStatesMap: Array<[string, CsgoPlayerCurrentRoundState.AsObject]>,
  }
}

export class CsgoPreviousTeamRoundState extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getPlayersMap(): jspb.Map<string, CsgoPlayerPreviousRoundState>;
  clearPlayersMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoPreviousTeamRoundState.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoPreviousTeamRoundState): CsgoPreviousTeamRoundState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoPreviousTeamRoundState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoPreviousTeamRoundState;
  static deserializeBinaryFromReader(message: CsgoPreviousTeamRoundState, reader: jspb.BinaryReader): CsgoPreviousTeamRoundState;
}

export namespace CsgoPreviousTeamRoundState {
  export type AsObject = {
    teamUrn: string,
    playersMap: Array<[string, CsgoPlayerPreviousRoundState.AsObject]>,
  }
}

export class CsgoPlayerMapStatePartialUpdate extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): CsgoPlayerMapStatePartialUpdate.Payload | undefined;
  setPayload(value?: CsgoPlayerMapStatePartialUpdate.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoPlayerMapStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoPlayerMapStatePartialUpdate): CsgoPlayerMapStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoPlayerMapStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoPlayerMapStatePartialUpdate;
  static deserializeBinaryFromReader(message: CsgoPlayerMapStatePartialUpdate, reader: jspb.BinaryReader): CsgoPlayerMapStatePartialUpdate;
}

export namespace CsgoPlayerMapStatePartialUpdate {
  export type AsObject = {
    playerUrn: string,
    payload?: CsgoPlayerMapStatePartialUpdate.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasStatistics(): boolean;
    clearStatistics(): void;
    getStatistics(): CsgoPlayerMapStatisticsState | undefined;
    setStatistics(value?: CsgoPlayerMapStatisticsState): void;

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
      statistics?: CsgoPlayerMapStatisticsState.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      STATISTICS = 1,
    }
  }
}

export class CsgoPlayerMapState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getPlayerName(): string;
  setPlayerName(value: string): void;

  hasStatistics(): boolean;
  clearStatistics(): void;
  getStatistics(): CsgoPlayerMapStatisticsState | undefined;
  setStatistics(value?: CsgoPlayerMapStatisticsState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoPlayerMapState.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoPlayerMapState): CsgoPlayerMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoPlayerMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoPlayerMapState;
  static deserializeBinaryFromReader(message: CsgoPlayerMapState, reader: jspb.BinaryReader): CsgoPlayerMapState;
}

export namespace CsgoPlayerMapState {
  export type AsObject = {
    playerUrn: string,
    playerName: string,
    statistics?: CsgoPlayerMapStatisticsState.AsObject,
  }
}

export class CsgoPlayerMapStatisticsState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getOpeningKills(): number;
  setOpeningKills(value: number): void;

  getOpeningDeaths(): number;
  setOpeningDeaths(value: number): void;

  hasStatistics(): boolean;
  clearStatistics(): void;
  getStatistics(): CsgoPlayerStatistics | undefined;
  setStatistics(value?: CsgoPlayerStatistics): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoPlayerMapStatisticsState.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoPlayerMapStatisticsState): CsgoPlayerMapStatisticsState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoPlayerMapStatisticsState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoPlayerMapStatisticsState;
  static deserializeBinaryFromReader(message: CsgoPlayerMapStatisticsState, reader: jspb.BinaryReader): CsgoPlayerMapStatisticsState;
}

export namespace CsgoPlayerMapStatisticsState {
  export type AsObject = {
    playerUrn: string,
    openingKills: number,
    openingDeaths: number,
    statistics?: CsgoPlayerStatistics.AsObject,
  }
}

export class CsgoPlayerCurrentRoundStatePartialUpdate extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): CsgoPlayerCurrentRoundStatePartialUpdate.Payload | undefined;
  setPayload(value?: CsgoPlayerCurrentRoundStatePartialUpdate.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoPlayerCurrentRoundStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoPlayerCurrentRoundStatePartialUpdate): CsgoPlayerCurrentRoundStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoPlayerCurrentRoundStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoPlayerCurrentRoundStatePartialUpdate;
  static deserializeBinaryFromReader(message: CsgoPlayerCurrentRoundStatePartialUpdate, reader: jspb.BinaryReader): CsgoPlayerCurrentRoundStatePartialUpdate;
}

export namespace CsgoPlayerCurrentRoundStatePartialUpdate {
  export type AsObject = {
    playerUrn: string,
    payload?: CsgoPlayerCurrentRoundStatePartialUpdate.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasStatistics(): boolean;
    clearStatistics(): void;
    getStatistics(): CsgoPlayerCurrentRoundStatisticsState | undefined;
    setStatistics(value?: CsgoPlayerCurrentRoundStatisticsState): void;

    hasItems(): boolean;
    clearItems(): void;
    getItems(): CsgoPlayerItemsState | undefined;
    setItems(value?: CsgoPlayerItemsState): void;

    hasPosition(): boolean;
    clearPosition(): void;
    getPosition(): CsgoPlayerPositionState | undefined;
    setPosition(value?: CsgoPlayerPositionState): void;

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
      statistics?: CsgoPlayerCurrentRoundStatisticsState.AsObject,
      items?: CsgoPlayerItemsState.AsObject,
      position?: CsgoPlayerPositionState.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      STATISTICS = 1,
      ITEMS = 2,
      POSITION = 3,
    }
  }
}

export class CsgoPlayerCurrentRoundState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getPlayerName(): string;
  setPlayerName(value: string): void;

  hasStatistics(): boolean;
  clearStatistics(): void;
  getStatistics(): CsgoPlayerCurrentRoundStatisticsState | undefined;
  setStatistics(value?: CsgoPlayerCurrentRoundStatisticsState): void;

  hasItems(): boolean;
  clearItems(): void;
  getItems(): CsgoPlayerItemsState | undefined;
  setItems(value?: CsgoPlayerItemsState): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): CsgoPlayerPositionState | undefined;
  setPosition(value?: CsgoPlayerPositionState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoPlayerCurrentRoundState.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoPlayerCurrentRoundState): CsgoPlayerCurrentRoundState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoPlayerCurrentRoundState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoPlayerCurrentRoundState;
  static deserializeBinaryFromReader(message: CsgoPlayerCurrentRoundState, reader: jspb.BinaryReader): CsgoPlayerCurrentRoundState;
}

export namespace CsgoPlayerCurrentRoundState {
  export type AsObject = {
    playerUrn: string,
    playerName: string,
    statistics?: CsgoPlayerCurrentRoundStatisticsState.AsObject,
    items?: CsgoPlayerItemsState.AsObject,
    position?: CsgoPlayerPositionState.AsObject,
  }
}

export class CsgoPlayerCurrentRoundStatisticsState extends jspb.Message {
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

  hasStatistics(): boolean;
  clearStatistics(): void;
  getStatistics(): CsgoPlayerStatistics | undefined;
  setStatistics(value?: CsgoPlayerStatistics): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoPlayerCurrentRoundStatisticsState.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoPlayerCurrentRoundStatisticsState): CsgoPlayerCurrentRoundStatisticsState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoPlayerCurrentRoundStatisticsState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoPlayerCurrentRoundStatisticsState;
  static deserializeBinaryFromReader(message: CsgoPlayerCurrentRoundStatisticsState, reader: jspb.BinaryReader): CsgoPlayerCurrentRoundStatisticsState;
}

export namespace CsgoPlayerCurrentRoundStatisticsState {
  export type AsObject = {
    playerUrn: string,
    alive: boolean,
    health: number,
    armor: number,
    balance: number,
    statistics?: CsgoPlayerStatistics.AsObject,
  }
}

export class CsgoPlayerItemsState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getEquipmentValue(): number;
  setEquipmentValue(value: number): void;

  clearItemsList(): void;
  getItemsList(): Array<CsgoItem>;
  setItemsList(value: Array<CsgoItem>): void;
  addItems(value?: CsgoItem, index?: number): CsgoItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoPlayerItemsState.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoPlayerItemsState): CsgoPlayerItemsState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoPlayerItemsState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoPlayerItemsState;
  static deserializeBinaryFromReader(message: CsgoPlayerItemsState, reader: jspb.BinaryReader): CsgoPlayerItemsState;
}

export namespace CsgoPlayerItemsState {
  export type AsObject = {
    playerUrn: string,
    equipmentValue: number,
    itemsList: Array<CsgoItem.AsObject>,
  }
}

export class CsgoPlayerPreviousRoundState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getPlayerName(): string;
  setPlayerName(value: string): void;

  hasStatistics(): boolean;
  clearStatistics(): void;
  getStatistics(): CsgoPlayerStatistics | undefined;
  setStatistics(value?: CsgoPlayerStatistics): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoPlayerPreviousRoundState.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoPlayerPreviousRoundState): CsgoPlayerPreviousRoundState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoPlayerPreviousRoundState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoPlayerPreviousRoundState;
  static deserializeBinaryFromReader(message: CsgoPlayerPreviousRoundState, reader: jspb.BinaryReader): CsgoPlayerPreviousRoundState;
}

export namespace CsgoPlayerPreviousRoundState {
  export type AsObject = {
    playerUrn: string,
    playerName: string,
    statistics?: CsgoPlayerStatistics.AsObject,
  }
}

export class CsgoPlayerPositionState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): CsgoPosition | undefined;
  setPosition(value?: CsgoPosition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoPlayerPositionState.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoPlayerPositionState): CsgoPlayerPositionState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoPlayerPositionState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoPlayerPositionState;
  static deserializeBinaryFromReader(message: CsgoPlayerPositionState, reader: jspb.BinaryReader): CsgoPlayerPositionState;
}

export namespace CsgoPlayerPositionState {
  export type AsObject = {
    playerUrn: string,
    position?: CsgoPosition.AsObject,
  }
}

export class CsgoPlayerStatistics extends jspb.Message {
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
    playerUrn: string,
    kills: number,
    friendlyKills: number,
    enemyKills: number,
    selfKills: number,
    deaths: number,
    assists: number,
    headshots: number,
    friendlyDamageDealtArmor: number,
    friendlyDamageDealtHealth: number,
    enemyDamageDealtArmor: number,
    enemyDamageDealtHealth: number,
    enemyDamageDealtArmorRaw: number,
    enemyDamageDealtHealthRaw: number,
  }
}

export class CsgoItem extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getType(): CsgoWeaponTypeMap[keyof CsgoWeaponTypeMap];
  setType(value: CsgoWeaponTypeMap[keyof CsgoWeaponTypeMap]): void;

  getCount(): number;
  setCount(value: number): void;

  getIsactive(): boolean;
  setIsactive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoItem.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoItem): CsgoItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoItem;
  static deserializeBinaryFromReader(message: CsgoItem, reader: jspb.BinaryReader): CsgoItem;
}

export namespace CsgoItem {
  export type AsObject = {
    name: string,
    type: CsgoWeaponTypeMap[keyof CsgoWeaponTypeMap],
    count: number,
    isactive: boolean,
  }
}

export class CsgoPosition extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  getZ(): number;
  setZ(value: number): void;

  getAngle(): number;
  setAngle(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoPosition.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoPosition): CsgoPosition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoPosition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoPosition;
  static deserializeBinaryFromReader(message: CsgoPosition, reader: jspb.BinaryReader): CsgoPosition;
}

export namespace CsgoPosition {
  export type AsObject = {
    x: number,
    y: number,
    z: number,
    angle: number,
  }
}

export class CsgoEvent extends jspb.Message {
  hasBombDefuseStarted(): boolean;
  clearBombDefuseStarted(): void;
  getBombDefuseStarted(): CsgoBombDefuseStarted | undefined;
  setBombDefuseStarted(value?: CsgoBombDefuseStarted): void;

  hasBombDefused(): boolean;
  clearBombDefused(): void;
  getBombDefused(): CsgoBombDefused | undefined;
  setBombDefused(value?: CsgoBombDefused): void;

  hasBombExploded(): boolean;
  clearBombExploded(): void;
  getBombExploded(): CsgoBombExploded | undefined;
  setBombExploded(value?: CsgoBombExploded): void;

  hasBombPlanted(): boolean;
  clearBombPlanted(): void;
  getBombPlanted(): CsgoBombPlanted | undefined;
  setBombPlanted(value?: CsgoBombPlanted): void;

  hasDamageDealt(): boolean;
  clearDamageDealt(): void;
  getDamageDealt(): CsgoDamageDealt | undefined;
  setDamageDealt(value?: CsgoDamageDealt): void;

  hasFreezeTimeEnded(): boolean;
  clearFreezeTimeEnded(): void;
  getFreezeTimeEnded(): CsgoFreezeTimeEnded | undefined;
  setFreezeTimeEnded(value?: CsgoFreezeTimeEnded): void;

  hasFreezeTimeStarted(): boolean;
  clearFreezeTimeStarted(): void;
  getFreezeTimeStarted(): CsgoFreezeTimeStarted | undefined;
  setFreezeTimeStarted(value?: CsgoFreezeTimeStarted): void;

  hasItemDrop(): boolean;
  clearItemDrop(): void;
  getItemDrop(): CsgoItemDrop | undefined;
  setItemDrop(value?: CsgoItemDrop): void;

  hasItemPickUp(): boolean;
  clearItemPickUp(): void;
  getItemPickUp(): CsgoItemPickUp | undefined;
  setItemPickUp(value?: CsgoItemPickUp): void;

  hasItemPurchase(): boolean;
  clearItemPurchase(): void;
  getItemPurchase(): CsgoItemPurchase | undefined;
  setItemPurchase(value?: CsgoItemPurchase): void;

  hasItemThrow(): boolean;
  clearItemThrow(): void;
  getItemThrow(): CsgoItemThrow | undefined;
  setItemThrow(value?: CsgoItemThrow): void;

  hasKill(): boolean;
  clearKill(): void;
  getKill(): CsgoKill | undefined;
  setKill(value?: CsgoKill): void;

  hasDeath(): boolean;
  clearDeath(): void;
  getDeath(): CsgoDeath | undefined;
  setDeath(value?: CsgoDeath): void;

  hasMapEnd(): boolean;
  clearMapEnd(): void;
  getMapEnd(): CsgoMapEnd | undefined;
  setMapEnd(value?: CsgoMapEnd): void;

  hasMapStart(): boolean;
  clearMapStart(): void;
  getMapStart(): CsgoMapStart | undefined;
  setMapStart(value?: CsgoMapStart): void;

  hasRoundEnd(): boolean;
  clearRoundEnd(): void;
  getRoundEnd(): CsgoRoundEnd | undefined;
  setRoundEnd(value?: CsgoRoundEnd): void;

  hasRoundPause(): boolean;
  clearRoundPause(): void;
  getRoundPause(): CsgoRoundPause | undefined;
  setRoundPause(value?: CsgoRoundPause): void;

  hasRoundResume(): boolean;
  clearRoundResume(): void;
  getRoundResume(): CsgoRoundResume | undefined;
  setRoundResume(value?: CsgoRoundResume): void;

  hasRoundRollback(): boolean;
  clearRoundRollback(): void;
  getRoundRollback(): CsgoRoundRollback | undefined;
  setRoundRollback(value?: CsgoRoundRollback): void;

  hasRoundStart(): boolean;
  clearRoundStart(): void;
  getRoundStart(): CsgoRoundStart | undefined;
  setRoundStart(value?: CsgoRoundStart): void;

  getEventCase(): CsgoEvent.EventCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoEvent.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoEvent): CsgoEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoEvent;
  static deserializeBinaryFromReader(message: CsgoEvent, reader: jspb.BinaryReader): CsgoEvent;
}

export namespace CsgoEvent {
  export type AsObject = {
    bombDefuseStarted?: CsgoBombDefuseStarted.AsObject,
    bombDefused?: CsgoBombDefused.AsObject,
    bombExploded?: CsgoBombExploded.AsObject,
    bombPlanted?: CsgoBombPlanted.AsObject,
    damageDealt?: CsgoDamageDealt.AsObject,
    freezeTimeEnded?: CsgoFreezeTimeEnded.AsObject,
    freezeTimeStarted?: CsgoFreezeTimeStarted.AsObject,
    itemDrop?: CsgoItemDrop.AsObject,
    itemPickUp?: CsgoItemPickUp.AsObject,
    itemPurchase?: CsgoItemPurchase.AsObject,
    itemThrow?: CsgoItemThrow.AsObject,
    kill?: CsgoKill.AsObject,
    death?: CsgoDeath.AsObject,
    mapEnd?: CsgoMapEnd.AsObject,
    mapStart?: CsgoMapStart.AsObject,
    roundEnd?: CsgoRoundEnd.AsObject,
    roundPause?: CsgoRoundPause.AsObject,
    roundResume?: CsgoRoundResume.AsObject,
    roundRollback?: CsgoRoundRollback.AsObject,
    roundStart?: CsgoRoundStart.AsObject,
  }

  export enum EventCase {
    EVENT_NOT_SET = 0,
    BOMB_DEFUSE_STARTED = 1,
    BOMB_DEFUSED = 2,
    BOMB_EXPLODED = 3,
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

export class CsgoPlayerBalance extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getBalance(): number;
  setBalance(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoPlayerBalance.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoPlayerBalance): CsgoPlayerBalance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoPlayerBalance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoPlayerBalance;
  static deserializeBinaryFromReader(message: CsgoPlayerBalance, reader: jspb.BinaryReader): CsgoPlayerBalance;
}

export namespace CsgoPlayerBalance {
  export type AsObject = {
    playerUrn: string,
    teamUrn: string,
    balance: number,
  }
}

export class CsgoPlayerItems extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getEquipmentValue(): number;
  setEquipmentValue(value: number): void;

  clearItemsList(): void;
  getItemsList(): Array<CsgoItem>;
  setItemsList(value: Array<CsgoItem>): void;
  addItems(value?: CsgoItem, index?: number): CsgoItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoPlayerItems.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoPlayerItems): CsgoPlayerItems.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoPlayerItems, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoPlayerItems;
  static deserializeBinaryFromReader(message: CsgoPlayerItems, reader: jspb.BinaryReader): CsgoPlayerItems;
}

export namespace CsgoPlayerItems {
  export type AsObject = {
    playerUrn: string,
    teamUrn: string,
    equipmentValue: number,
    itemsList: Array<CsgoItem.AsObject>,
  }
}

export class CsgoBombDefuseStarted extends jspb.Message {
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
  toObject(includeInstance?: boolean): CsgoBombDefuseStarted.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoBombDefuseStarted): CsgoBombDefuseStarted.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoBombDefuseStarted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoBombDefuseStarted;
  static deserializeBinaryFromReader(message: CsgoBombDefuseStarted, reader: jspb.BinaryReader): CsgoBombDefuseStarted;
}

export namespace CsgoBombDefuseStarted {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
    playerUrn: string,
    teamUrn: string,
  }
}

export class CsgoBombDefused extends jspb.Message {
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

  getBalance(): number;
  setBalance(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoBombDefused.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoBombDefused): CsgoBombDefused.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoBombDefused, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoBombDefused;
  static deserializeBinaryFromReader(message: CsgoBombDefused, reader: jspb.BinaryReader): CsgoBombDefused;
}

export namespace CsgoBombDefused {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
    playerUrn: string,
    teamUrn: string,
    balance: number,
  }
}

export class CsgoBombExploded extends jspb.Message {
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

  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoBombExploded.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoBombExploded): CsgoBombExploded.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoBombExploded, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoBombExploded;
  static deserializeBinaryFromReader(message: CsgoBombExploded, reader: jspb.BinaryReader): CsgoBombExploded;
}

export namespace CsgoBombExploded {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
    teamUrn: string,
  }
}

export class CsgoBombPlanted extends jspb.Message {
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

  getBalance(): number;
  setBalance(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoBombPlanted.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoBombPlanted): CsgoBombPlanted.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoBombPlanted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoBombPlanted;
  static deserializeBinaryFromReader(message: CsgoBombPlanted, reader: jspb.BinaryReader): CsgoBombPlanted;
}

export namespace CsgoBombPlanted {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
    playerUrn: string,
    teamUrn: string,
    balance: number,
  }
}

export class CsgoDamageDealt extends jspb.Message {
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
  getPosition(): CsgoPosition | undefined;
  setPosition(value?: CsgoPosition): void;

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

  hasTargetPosition(): boolean;
  clearTargetPosition(): void;
  getTargetPosition(): CsgoPosition | undefined;
  setTargetPosition(value?: CsgoPosition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoDamageDealt.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoDamageDealt): CsgoDamageDealt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoDamageDealt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoDamageDealt;
  static deserializeBinaryFromReader(message: CsgoDamageDealt, reader: jspb.BinaryReader): CsgoDamageDealt;
}

export namespace CsgoDamageDealt {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
    position?: CsgoPosition.AsObject,
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
    targetPosition?: CsgoPosition.AsObject,
  }
}

export class CsgoFreezeTimeEnded extends jspb.Message {
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

  getPlayerBalancesMap(): jspb.Map<string, CsgoPlayerBalance>;
  clearPlayerBalancesMap(): void;
  getPlayerInventoriesMap(): jspb.Map<string, CsgoPlayerItems>;
  clearPlayerInventoriesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoFreezeTimeEnded.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoFreezeTimeEnded): CsgoFreezeTimeEnded.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoFreezeTimeEnded, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoFreezeTimeEnded;
  static deserializeBinaryFromReader(message: CsgoFreezeTimeEnded, reader: jspb.BinaryReader): CsgoFreezeTimeEnded;
}

export namespace CsgoFreezeTimeEnded {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
    playerBalancesMap: Array<[string, CsgoPlayerBalance.AsObject]>,
    playerInventoriesMap: Array<[string, CsgoPlayerItems.AsObject]>,
  }
}

export class CsgoFreezeTimeStarted extends jspb.Message {
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

  getPlayerBalancesMap(): jspb.Map<string, CsgoPlayerBalance>;
  clearPlayerBalancesMap(): void;
  getTeamsRoundInfoMap(): jspb.Map<string, CsgoSideMap[keyof CsgoSideMap]>;
  clearTeamsRoundInfoMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoFreezeTimeStarted.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoFreezeTimeStarted): CsgoFreezeTimeStarted.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoFreezeTimeStarted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoFreezeTimeStarted;
  static deserializeBinaryFromReader(message: CsgoFreezeTimeStarted, reader: jspb.BinaryReader): CsgoFreezeTimeStarted;
}

export namespace CsgoFreezeTimeStarted {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
    playerBalancesMap: Array<[string, CsgoPlayerBalance.AsObject]>,
    teamsRoundInfoMap: Array<[string, CsgoSideMap[keyof CsgoSideMap]]>,
  }
}

export class CsgoItemDrop extends jspb.Message {
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
  getPosition(): CsgoPosition | undefined;
  setPosition(value?: CsgoPosition): void;

  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getItem(): string;
  setItem(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoItemDrop.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoItemDrop): CsgoItemDrop.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoItemDrop, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoItemDrop;
  static deserializeBinaryFromReader(message: CsgoItemDrop, reader: jspb.BinaryReader): CsgoItemDrop;
}

export namespace CsgoItemDrop {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
    position?: CsgoPosition.AsObject,
    playerUrn: string,
    teamUrn: string,
    item: string,
  }
}

export class CsgoItemPickUp extends jspb.Message {
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
  toObject(includeInstance?: boolean): CsgoItemPickUp.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoItemPickUp): CsgoItemPickUp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoItemPickUp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoItemPickUp;
  static deserializeBinaryFromReader(message: CsgoItemPickUp, reader: jspb.BinaryReader): CsgoItemPickUp;
}

export namespace CsgoItemPickUp {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
    playerUrn: string,
    teamUrn: string,
    item: string,
  }
}

export class CsgoItemPurchase extends jspb.Message {
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

  getBalance(): number;
  setBalance(value: number): void;

  getEquipmentValue(): number;
  setEquipmentValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoItemPurchase.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoItemPurchase): CsgoItemPurchase.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoItemPurchase, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoItemPurchase;
  static deserializeBinaryFromReader(message: CsgoItemPurchase, reader: jspb.BinaryReader): CsgoItemPurchase;
}

export namespace CsgoItemPurchase {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
    playerUrn: string,
    teamUrn: string,
    item: string,
    balance: number,
    equipmentValue: number,
  }
}

export class CsgoItemThrow extends jspb.Message {
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
  getPosition(): CsgoPosition | undefined;
  setPosition(value?: CsgoPosition): void;

  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getItem(): string;
  setItem(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoItemThrow.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoItemThrow): CsgoItemThrow.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoItemThrow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoItemThrow;
  static deserializeBinaryFromReader(message: CsgoItemThrow, reader: jspb.BinaryReader): CsgoItemThrow;
}

export namespace CsgoItemThrow {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
    position?: CsgoPosition.AsObject,
    playerUrn: string,
    teamUrn: string,
    item: string,
  }
}

export class CsgoKill extends jspb.Message {
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
  getPosition(): CsgoPosition | undefined;
  setPosition(value?: CsgoPosition): void;

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

  getBalance(): number;
  setBalance(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoKill.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoKill): CsgoKill.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoKill, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoKill;
  static deserializeBinaryFromReader(message: CsgoKill, reader: jspb.BinaryReader): CsgoKill;
}

export namespace CsgoKill {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
    position?: CsgoPosition.AsObject,
    killerUrn: string,
    killerTeamUrn: string,
    victimUrn: string,
    victimTeamUrn: string,
    weapon: string,
    headshot: boolean,
    penetrated: boolean,
    assistantsList: Array<string>,
    balance: number,
  }
}

export class CsgoDeath extends jspb.Message {
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
  getPosition(): CsgoPosition | undefined;
  setPosition(value?: CsgoPosition): void;

  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getTotalDeaths(): number;
  setTotalDeaths(value: number): void;

  hasRespawnTime(): boolean;
  clearRespawnTime(): void;
  getRespawnTime(): google_protobuf_duration_pb.Duration | undefined;
  setRespawnTime(value?: google_protobuf_duration_pb.Duration): void;

  getSuicide(): boolean;
  setSuicide(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoDeath.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoDeath): CsgoDeath.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoDeath, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoDeath;
  static deserializeBinaryFromReader(message: CsgoDeath, reader: jspb.BinaryReader): CsgoDeath;
}

export namespace CsgoDeath {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
    position?: CsgoPosition.AsObject,
    playerUrn: string,
    teamUrn: string,
    totalDeaths: number,
    respawnTime?: google_protobuf_duration_pb.Duration.AsObject,
    suicide: boolean,
  }
}

export class CsgoMapEnd extends jspb.Message {
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

  getCsgoMapName(): string;
  setCsgoMapName(value: string): void;

  getWinningTeamUrn(): string;
  setWinningTeamUrn(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoMapEnd.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoMapEnd): CsgoMapEnd.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoMapEnd, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoMapEnd;
  static deserializeBinaryFromReader(message: CsgoMapEnd, reader: jspb.BinaryReader): CsgoMapEnd;
}

export namespace CsgoMapEnd {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
    csgoMapName: string,
    winningTeamUrn: string,
  }
}

export class CsgoMapStart extends jspb.Message {
  hasMapTime(): boolean;
  clearMapTime(): void;
  getMapTime(): google_protobuf_duration_pb.Duration | undefined;
  setMapTime(value?: google_protobuf_duration_pb.Duration): void;

  getCsgoMapName(): string;
  setCsgoMapName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoMapStart.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoMapStart): CsgoMapStart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoMapStart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoMapStart;
  static deserializeBinaryFromReader(message: CsgoMapStart, reader: jspb.BinaryReader): CsgoMapStart;
}

export namespace CsgoMapStart {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    csgoMapName: string,
  }
}

export class CsgoRoundEnd extends jspb.Message {
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

  getWinReason(): CsgoWinReasonMap[keyof CsgoWinReasonMap];
  setWinReason(value: CsgoWinReasonMap[keyof CsgoWinReasonMap]): void;

  getPlayerBalancesMap(): jspb.Map<string, CsgoPlayerBalance>;
  clearPlayerBalancesMap(): void;
  getPlayerInventoriesMap(): jspb.Map<string, CsgoPlayerItems>;
  clearPlayerInventoriesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoRoundEnd.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoRoundEnd): CsgoRoundEnd.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoRoundEnd, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoRoundEnd;
  static deserializeBinaryFromReader(message: CsgoRoundEnd, reader: jspb.BinaryReader): CsgoRoundEnd;
}

export namespace CsgoRoundEnd {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
    winningTeamUrn: string,
    winReason: CsgoWinReasonMap[keyof CsgoWinReasonMap],
    playerBalancesMap: Array<[string, CsgoPlayerBalance.AsObject]>,
    playerInventoriesMap: Array<[string, CsgoPlayerItems.AsObject]>,
  }
}

export class CsgoRoundPause extends jspb.Message {
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
  toObject(includeInstance?: boolean): CsgoRoundPause.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoRoundPause): CsgoRoundPause.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoRoundPause, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoRoundPause;
  static deserializeBinaryFromReader(message: CsgoRoundPause, reader: jspb.BinaryReader): CsgoRoundPause;
}

export namespace CsgoRoundPause {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
  }
}

export class CsgoRoundResume extends jspb.Message {
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
  toObject(includeInstance?: boolean): CsgoRoundResume.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoRoundResume): CsgoRoundResume.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoRoundResume, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoRoundResume;
  static deserializeBinaryFromReader(message: CsgoRoundResume, reader: jspb.BinaryReader): CsgoRoundResume;
}

export namespace CsgoRoundResume {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
  }
}

export class CsgoRoundRollback extends jspb.Message {
  getNextRoundNumber(): number;
  setNextRoundNumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsgoRoundRollback.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoRoundRollback): CsgoRoundRollback.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoRoundRollback, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoRoundRollback;
  static deserializeBinaryFromReader(message: CsgoRoundRollback, reader: jspb.BinaryReader): CsgoRoundRollback;
}

export namespace CsgoRoundRollback {
  export type AsObject = {
    nextRoundNumber: number,
  }
}

export class CsgoRoundStart extends jspb.Message {
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
  toObject(includeInstance?: boolean): CsgoRoundStart.AsObject;
  static toObject(includeInstance: boolean, msg: CsgoRoundStart): CsgoRoundStart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsgoRoundStart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsgoRoundStart;
  static deserializeBinaryFromReader(message: CsgoRoundStart, reader: jspb.BinaryReader): CsgoRoundStart;
}

export namespace CsgoRoundStart {
  export type AsObject = {
    mapTime?: google_protobuf_duration_pb.Duration.AsObject,
    timeRemaining?: google_protobuf_duration_pb.Duration.AsObject,
    currentRoundNumber: number,
  }
}

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

export interface CsgoRoundStateTypeMap {
  CSGO_ROUND_STATE_TYPE_UNSPECIFIED: 0;
  CSGO_ROUND_STATE_TYPE_BUY_TIME: 1;
  CSGO_ROUND_STATE_TYPE_IN_PROGRESS: 2;
  CSGO_ROUND_STATE_TYPE_PAUSED: 3;
  CSGO_ROUND_STATE_TYPE_FINISHED: 4;
}

export const CsgoRoundStateType: CsgoRoundStateTypeMap;

export interface CsgoWeaponTypeMap {
  CSGO_WEAPON_TYPE_UNSPECIFIED: 0;
  CSGO_WEAPON_TYPE_PISTOL: 1;
  CSGO_WEAPON_TYPE_BOMB: 2;
  CSGO_WEAPON_TYPE_GRENADE: 3;
  CSGO_WEAPON_TYPE_MACHINE_GUN: 4;
  CSGO_WEAPON_TYPE_RIFLE: 5;
  CSGO_WEAPON_TYPE_SHOTGUN: 6;
  CSGO_WEAPON_TYPE_SNIPER_RIFLE: 7;
  CSGO_WEAPON_TYPE_SUBMACHINE_GUN: 8;
  CSGO_WEAPON_TYPE_KNIFE: 9;
  CSGO_WEAPON_TYPE_DEFUSE_KIT: 10;
}

export const CsgoWeaponType: CsgoWeaponTypeMap;

