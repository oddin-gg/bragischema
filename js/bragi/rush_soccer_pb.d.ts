// package: bragi
// file: bragi/rush_soccer.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as bragi_common_pb from "../bragi/common_pb";

export class RushSoccerMatchMessage extends jspb.Message {
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
  getPayload(): RushSoccerMatchMessage.Payload | undefined;
  setPayload(value?: RushSoccerMatchMessage.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushSoccerMatchMessage.AsObject;
  static toObject(includeInstance: boolean, msg: RushSoccerMatchMessage): RushSoccerMatchMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushSoccerMatchMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushSoccerMatchMessage;
  static deserializeBinaryFromReader(message: RushSoccerMatchMessage, reader: jspb.BinaryReader): RushSoccerMatchMessage;
}

export namespace RushSoccerMatchMessage {
  export type AsObject = {
    matchUrn: string,
    sequence: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dataStatus: bragi_common_pb.DataStatusMap[keyof bragi_common_pb.DataStatusMap],
    payload?: RushSoccerMatchMessage.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasSnapshot(): boolean;
    clearSnapshot(): void;
    getSnapshot(): RushSoccerMatchSnapshot | undefined;
    setSnapshot(value?: RushSoccerMatchSnapshot): void;

    hasUpdate(): boolean;
    clearUpdate(): void;
    getUpdate(): RushSoccerMatchUpdate | undefined;
    setUpdate(value?: RushSoccerMatchUpdate): void;

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
      snapshot?: RushSoccerMatchSnapshot.AsObject,
      update?: RushSoccerMatchUpdate.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      SNAPSHOT = 1,
      UPDATE = 2,
    }
  }
}

export class RushSoccerMatchSnapshot extends jspb.Message {
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
  getMatchState(): RushSoccerMatchState | undefined;
  setMatchState(value?: RushSoccerMatchState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushSoccerMatchSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: RushSoccerMatchSnapshot): RushSoccerMatchSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushSoccerMatchSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushSoccerMatchSnapshot;
  static deserializeBinaryFromReader(message: RushSoccerMatchSnapshot, reader: jspb.BinaryReader): RushSoccerMatchSnapshot;
}

export namespace RushSoccerMatchSnapshot {
  export type AsObject = {
    matchUrn: string,
    sequence: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dataStatus: bragi_common_pb.DataStatusMap[keyof bragi_common_pb.DataStatusMap],
    announcementsList: Array<bragi_common_pb.Announcement.AsObject>,
    matchState?: RushSoccerMatchState.AsObject,
  }
}

export class RushSoccerMatchUpdate extends jspb.Message {
  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): RushSoccerMatchUpdate.Payload | undefined;
  setPayload(value?: RushSoccerMatchUpdate.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushSoccerMatchUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RushSoccerMatchUpdate): RushSoccerMatchUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushSoccerMatchUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushSoccerMatchUpdate;
  static deserializeBinaryFromReader(message: RushSoccerMatchUpdate, reader: jspb.BinaryReader): RushSoccerMatchUpdate;
}

export namespace RushSoccerMatchUpdate {
  export type AsObject = {
    payload?: RushSoccerMatchUpdate.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasMatchState(): boolean;
    clearMatchState(): void;
    getMatchState(): RushSoccerMatchState | undefined;
    setMatchState(value?: RushSoccerMatchState): void;

    hasPartialUpdates(): boolean;
    clearPartialUpdates(): void;
    getPartialUpdates(): RushSoccerMatchStatePartialUpdates | undefined;
    setPartialUpdates(value?: RushSoccerMatchStatePartialUpdates): void;

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
      matchState?: RushSoccerMatchState.AsObject,
      partialUpdates?: RushSoccerMatchStatePartialUpdates.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      MATCH_STATE = 1,
      PARTIAL_UPDATES = 2,
    }
  }
}

export class RushSoccerMatchStatePartialUpdates extends jspb.Message {
  clearUpdatesList(): void;
  getUpdatesList(): Array<RushSoccerMatchStatePartialUpdate>;
  setUpdatesList(value: Array<RushSoccerMatchStatePartialUpdate>): void;
  addUpdates(value?: RushSoccerMatchStatePartialUpdate, index?: number): RushSoccerMatchStatePartialUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushSoccerMatchStatePartialUpdates.AsObject;
  static toObject(includeInstance: boolean, msg: RushSoccerMatchStatePartialUpdates): RushSoccerMatchStatePartialUpdates.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushSoccerMatchStatePartialUpdates, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushSoccerMatchStatePartialUpdates;
  static deserializeBinaryFromReader(message: RushSoccerMatchStatePartialUpdates, reader: jspb.BinaryReader): RushSoccerMatchStatePartialUpdates;
}

export namespace RushSoccerMatchStatePartialUpdates {
  export type AsObject = {
    updatesList: Array<RushSoccerMatchStatePartialUpdate.AsObject>,
  }
}

export class RushSoccerMatchStatePartialUpdate extends jspb.Message {
  hasScore(): boolean;
  clearScore(): void;
  getScore(): RushSoccerMatchScoreState | undefined;
  setScore(value?: RushSoccerMatchScoreState): void;

  hasCurrentMapState(): boolean;
  clearCurrentMapState(): void;
  getCurrentMapState(): RushSoccerCurrentMapState | undefined;
  setCurrentMapState(value?: RushSoccerCurrentMapState): void;

  hasCurrentMapStatePartialUpdate(): boolean;
  clearCurrentMapStatePartialUpdate(): void;
  getCurrentMapStatePartialUpdate(): RushSoccerCurrentMapStatePartialUpdate | undefined;
  setCurrentMapStatePartialUpdate(value?: RushSoccerCurrentMapStatePartialUpdate): void;

  hasTimeline(): boolean;
  clearTimeline(): void;
  getTimeline(): RushSoccerTimelineState | undefined;
  setTimeline(value?: RushSoccerTimelineState): void;

  getUpdateCase(): RushSoccerMatchStatePartialUpdate.UpdateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushSoccerMatchStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RushSoccerMatchStatePartialUpdate): RushSoccerMatchStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushSoccerMatchStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushSoccerMatchStatePartialUpdate;
  static deserializeBinaryFromReader(message: RushSoccerMatchStatePartialUpdate, reader: jspb.BinaryReader): RushSoccerMatchStatePartialUpdate;
}

export namespace RushSoccerMatchStatePartialUpdate {
  export type AsObject = {
    score?: RushSoccerMatchScoreState.AsObject,
    currentMapState?: RushSoccerCurrentMapState.AsObject,
    currentMapStatePartialUpdate?: RushSoccerCurrentMapStatePartialUpdate.AsObject,
    timeline?: RushSoccerTimelineState.AsObject,
  }

  export enum UpdateCase {
    UPDATE_NOT_SET = 0,
    SCORE = 1,
    CURRENT_MAP_STATE = 2,
    CURRENT_MAP_STATE_PARTIAL_UPDATE = 3,
    TIMELINE = 4,
  }
}

export class RushSoccerMatchState extends jspb.Message {
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
  getScore(): RushSoccerMatchScoreState | undefined;
  setScore(value?: RushSoccerMatchScoreState): void;

  getMatchStatus(): bragi_common_pb.MatchStatusTypeMap[keyof bragi_common_pb.MatchStatusTypeMap];
  setMatchStatus(value: bragi_common_pb.MatchStatusTypeMap[keyof bragi_common_pb.MatchStatusTypeMap]): void;

  hasTimeline(): boolean;
  clearTimeline(): void;
  getTimeline(): RushSoccerTimelineState | undefined;
  setTimeline(value?: RushSoccerTimelineState): void;

  hasCurrentMap(): boolean;
  clearCurrentMap(): void;
  getCurrentMap(): RushSoccerCurrentMapState | undefined;
  setCurrentMap(value?: RushSoccerCurrentMapState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushSoccerMatchState.AsObject;
  static toObject(includeInstance: boolean, msg: RushSoccerMatchState): RushSoccerMatchState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushSoccerMatchState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushSoccerMatchState;
  static deserializeBinaryFromReader(message: RushSoccerMatchState, reader: jspb.BinaryReader): RushSoccerMatchState;
}

export namespace RushSoccerMatchState {
  export type AsObject = {
    matchUrn: string,
    matchType: bragi_common_pb.BestOfTypeMap[keyof bragi_common_pb.BestOfTypeMap],
    homeTeam?: bragi_common_pb.Team.AsObject,
    awayTeam?: bragi_common_pb.Team.AsObject,
    score?: RushSoccerMatchScoreState.AsObject,
    matchStatus: bragi_common_pb.MatchStatusTypeMap[keyof bragi_common_pb.MatchStatusTypeMap],
    timeline?: RushSoccerTimelineState.AsObject,
    currentMap?: RushSoccerCurrentMapState.AsObject,
  }
}

export class RushSoccerMatchScoreState extends jspb.Message {
  getHomeScore(): number;
  setHomeScore(value: number): void;

  getAwayScore(): number;
  setAwayScore(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushSoccerMatchScoreState.AsObject;
  static toObject(includeInstance: boolean, msg: RushSoccerMatchScoreState): RushSoccerMatchScoreState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushSoccerMatchScoreState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushSoccerMatchScoreState;
  static deserializeBinaryFromReader(message: RushSoccerMatchScoreState, reader: jspb.BinaryReader): RushSoccerMatchScoreState;
}

export namespace RushSoccerMatchScoreState {
  export type AsObject = {
    homeScore: number,
    awayScore: number,
  }
}

export class RushSoccerCurrentMapScoreState extends jspb.Message {
  getHomeGoals(): number;
  setHomeGoals(value: number): void;

  getAwayGoals(): number;
  setAwayGoals(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushSoccerCurrentMapScoreState.AsObject;
  static toObject(includeInstance: boolean, msg: RushSoccerCurrentMapScoreState): RushSoccerCurrentMapScoreState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushSoccerCurrentMapScoreState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushSoccerCurrentMapScoreState;
  static deserializeBinaryFromReader(message: RushSoccerCurrentMapScoreState, reader: jspb.BinaryReader): RushSoccerCurrentMapScoreState;
}

export namespace RushSoccerCurrentMapScoreState {
  export type AsObject = {
    homeGoals: number,
    awayGoals: number,
  }
}

export class RushSoccerTimelineState extends jspb.Message {
  clearEventsList(): void;
  getEventsList(): Array<RushSoccerTimelineEvent>;
  setEventsList(value: Array<RushSoccerTimelineEvent>): void;
  addEvents(value?: RushSoccerTimelineEvent, index?: number): RushSoccerTimelineEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushSoccerTimelineState.AsObject;
  static toObject(includeInstance: boolean, msg: RushSoccerTimelineState): RushSoccerTimelineState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushSoccerTimelineState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushSoccerTimelineState;
  static deserializeBinaryFromReader(message: RushSoccerTimelineState, reader: jspb.BinaryReader): RushSoccerTimelineState;
}

export namespace RushSoccerTimelineState {
  export type AsObject = {
    eventsList: Array<RushSoccerTimelineEvent.AsObject>,
  }
}

export class RushSoccerTimelineEvent extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getEventType(): RushSoccerEventTypeMap[keyof RushSoccerEventTypeMap];
  setEventType(value: RushSoccerEventTypeMap[keyof RushSoccerEventTypeMap]): void;

  hasRealTime(): boolean;
  clearRealTime(): void;
  getRealTime(): google_protobuf_duration_pb.Duration | undefined;
  setRealTime(value?: google_protobuf_duration_pb.Duration): void;

  hasGameTime(): boolean;
  clearGameTime(): void;
  getGameTime(): google_protobuf_duration_pb.Duration | undefined;
  setGameTime(value?: google_protobuf_duration_pb.Duration): void;

  getPeriod(): RushSoccerPeriodMap[keyof RushSoccerPeriodMap];
  setPeriod(value: RushSoccerPeriodMap[keyof RushSoccerPeriodMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushSoccerTimelineEvent.AsObject;
  static toObject(includeInstance: boolean, msg: RushSoccerTimelineEvent): RushSoccerTimelineEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushSoccerTimelineEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushSoccerTimelineEvent;
  static deserializeBinaryFromReader(message: RushSoccerTimelineEvent, reader: jspb.BinaryReader): RushSoccerTimelineEvent;
}

export namespace RushSoccerTimelineEvent {
  export type AsObject = {
    teamUrn: string,
    eventType: RushSoccerEventTypeMap[keyof RushSoccerEventTypeMap],
    realTime?: google_protobuf_duration_pb.Duration.AsObject,
    gameTime?: google_protobuf_duration_pb.Duration.AsObject,
    period: RushSoccerPeriodMap[keyof RushSoccerPeriodMap],
  }
}

export class RushSoccerCurrentMapStatePartialUpdate extends jspb.Message {
  hasGameTime(): boolean;
  clearGameTime(): void;
  getGameTime(): RushSoccerCurrentMapTimeState | undefined;
  setGameTime(value?: RushSoccerCurrentMapTimeState): void;

  hasScore(): boolean;
  clearScore(): void;
  getScore(): RushSoccerCurrentMapScoreState | undefined;
  setScore(value?: RushSoccerCurrentMapScoreState): void;

  hasTeamCurrentMapState(): boolean;
  clearTeamCurrentMapState(): void;
  getTeamCurrentMapState(): RushSoccerTeamCurrentMapState | undefined;
  setTeamCurrentMapState(value?: RushSoccerTeamCurrentMapState): void;

  hasTeamCurrentMapPartialUpdate(): boolean;
  clearTeamCurrentMapPartialUpdate(): void;
  getTeamCurrentMapPartialUpdate(): RushSoccerTeamCurrentMapStatePartialUpdate | undefined;
  setTeamCurrentMapPartialUpdate(value?: RushSoccerTeamCurrentMapStatePartialUpdate): void;

  getUpdateCase(): RushSoccerCurrentMapStatePartialUpdate.UpdateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushSoccerCurrentMapStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RushSoccerCurrentMapStatePartialUpdate): RushSoccerCurrentMapStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushSoccerCurrentMapStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushSoccerCurrentMapStatePartialUpdate;
  static deserializeBinaryFromReader(message: RushSoccerCurrentMapStatePartialUpdate, reader: jspb.BinaryReader): RushSoccerCurrentMapStatePartialUpdate;
}

export namespace RushSoccerCurrentMapStatePartialUpdate {
  export type AsObject = {
    gameTime?: RushSoccerCurrentMapTimeState.AsObject,
    score?: RushSoccerCurrentMapScoreState.AsObject,
    teamCurrentMapState?: RushSoccerTeamCurrentMapState.AsObject,
    teamCurrentMapPartialUpdate?: RushSoccerTeamCurrentMapStatePartialUpdate.AsObject,
  }

  export enum UpdateCase {
    UPDATE_NOT_SET = 0,
    GAME_TIME = 1,
    SCORE = 2,
    TEAM_CURRENT_MAP_STATE = 3,
    TEAM_CURRENT_MAP_PARTIAL_UPDATE = 4,
  }
}

export class RushSoccerCurrentMapState extends jspb.Message {
  getPeriod(): RushSoccerPeriodMap[keyof RushSoccerPeriodMap];
  setPeriod(value: RushSoccerPeriodMap[keyof RushSoccerPeriodMap]): void;

  hasGameTime(): boolean;
  clearGameTime(): void;
  getGameTime(): RushSoccerCurrentMapTimeState | undefined;
  setGameTime(value?: RushSoccerCurrentMapTimeState): void;

  hasScore(): boolean;
  clearScore(): void;
  getScore(): RushSoccerCurrentMapScoreState | undefined;
  setScore(value?: RushSoccerCurrentMapScoreState): void;

  getMapPaused(): boolean;
  setMapPaused(value: boolean): void;

  getTeamsMap(): jspb.Map<string, RushSoccerTeamCurrentMapState>;
  clearTeamsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushSoccerCurrentMapState.AsObject;
  static toObject(includeInstance: boolean, msg: RushSoccerCurrentMapState): RushSoccerCurrentMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushSoccerCurrentMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushSoccerCurrentMapState;
  static deserializeBinaryFromReader(message: RushSoccerCurrentMapState, reader: jspb.BinaryReader): RushSoccerCurrentMapState;
}

export namespace RushSoccerCurrentMapState {
  export type AsObject = {
    period: RushSoccerPeriodMap[keyof RushSoccerPeriodMap],
    gameTime?: RushSoccerCurrentMapTimeState.AsObject,
    score?: RushSoccerCurrentMapScoreState.AsObject,
    mapPaused: boolean,
    teamsMap: Array<[string, RushSoccerTeamCurrentMapState.AsObject]>,
  }
}

export class RushSoccerCurrentMapTimeState extends jspb.Message {
  hasRealTime(): boolean;
  clearRealTime(): void;
  getRealTime(): google_protobuf_duration_pb.Duration | undefined;
  setRealTime(value?: google_protobuf_duration_pb.Duration): void;

  hasGameTime(): boolean;
  clearGameTime(): void;
  getGameTime(): google_protobuf_duration_pb.Duration | undefined;
  setGameTime(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushSoccerCurrentMapTimeState.AsObject;
  static toObject(includeInstance: boolean, msg: RushSoccerCurrentMapTimeState): RushSoccerCurrentMapTimeState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushSoccerCurrentMapTimeState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushSoccerCurrentMapTimeState;
  static deserializeBinaryFromReader(message: RushSoccerCurrentMapTimeState, reader: jspb.BinaryReader): RushSoccerCurrentMapTimeState;
}

export namespace RushSoccerCurrentMapTimeState {
  export type AsObject = {
    realTime?: google_protobuf_duration_pb.Duration.AsObject,
    gameTime?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class RushSoccerTeamCurrentMapStatePartialUpdate extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): RushSoccerTeamCurrentMapStatePartialUpdate.Payload | undefined;
  setPayload(value?: RushSoccerTeamCurrentMapStatePartialUpdate.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushSoccerTeamCurrentMapStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RushSoccerTeamCurrentMapStatePartialUpdate): RushSoccerTeamCurrentMapStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushSoccerTeamCurrentMapStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushSoccerTeamCurrentMapStatePartialUpdate;
  static deserializeBinaryFromReader(message: RushSoccerTeamCurrentMapStatePartialUpdate, reader: jspb.BinaryReader): RushSoccerTeamCurrentMapStatePartialUpdate;
}

export namespace RushSoccerTeamCurrentMapStatePartialUpdate {
  export type AsObject = {
    teamUrn: string,
    payload?: RushSoccerTeamCurrentMapStatePartialUpdate.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasMapStatistics(): boolean;
    clearMapStatistics(): void;
    getMapStatistics(): RushSoccerTeamCurrentMapStatisticsState | undefined;
    setMapStatistics(value?: RushSoccerTeamCurrentMapStatisticsState): void;

    hasPlayer(): boolean;
    clearPlayer(): void;
    getPlayer(): RushSoccerPlayerCurrentMapState | undefined;
    setPlayer(value?: RushSoccerPlayerCurrentMapState): void;

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
      mapStatistics?: RushSoccerTeamCurrentMapStatisticsState.AsObject,
      player?: RushSoccerPlayerCurrentMapState.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      MAP_STATISTICS = 1,
      PLAYER = 2,
    }
  }
}

export class RushSoccerTeamCurrentMapState extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  hasMapStatistics(): boolean;
  clearMapStatistics(): void;
  getMapStatistics(): RushSoccerTeamCurrentMapStatisticsState | undefined;
  setMapStatistics(value?: RushSoccerTeamCurrentMapStatisticsState): void;

  hasPlayer(): boolean;
  clearPlayer(): void;
  getPlayer(): RushSoccerPlayerCurrentMapState | undefined;
  setPlayer(value?: RushSoccerPlayerCurrentMapState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushSoccerTeamCurrentMapState.AsObject;
  static toObject(includeInstance: boolean, msg: RushSoccerTeamCurrentMapState): RushSoccerTeamCurrentMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushSoccerTeamCurrentMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushSoccerTeamCurrentMapState;
  static deserializeBinaryFromReader(message: RushSoccerTeamCurrentMapState, reader: jspb.BinaryReader): RushSoccerTeamCurrentMapState;
}

export namespace RushSoccerTeamCurrentMapState {
  export type AsObject = {
    teamUrn: string,
    mapStatistics?: RushSoccerTeamCurrentMapStatisticsState.AsObject,
    player?: RushSoccerPlayerCurrentMapState.AsObject,
  }
}

export class RushSoccerPlayerCurrentMapState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getExtName(): string;
  setExtName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushSoccerPlayerCurrentMapState.AsObject;
  static toObject(includeInstance: boolean, msg: RushSoccerPlayerCurrentMapState): RushSoccerPlayerCurrentMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushSoccerPlayerCurrentMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushSoccerPlayerCurrentMapState;
  static deserializeBinaryFromReader(message: RushSoccerPlayerCurrentMapState, reader: jspb.BinaryReader): RushSoccerPlayerCurrentMapState;
}

export namespace RushSoccerPlayerCurrentMapState {
  export type AsObject = {
    playerUrn: string,
    extName: string,
  }
}

export class RushSoccerTeamCurrentMapStatisticsState extends jspb.Message {
  getGoals(): number;
  setGoals(value: number): void;

  getGoalsHt(): number;
  setGoalsHt(value: number): void;

  getPenaltyKicks(): number;
  setPenaltyKicks(value: number): void;

  getRedCards(): number;
  setRedCards(value: number): void;

  getYellowCards(): number;
  setYellowCards(value: number): void;

  getFreeKicks(): number;
  setFreeKicks(value: number): void;

  getCornerKicks(): number;
  setCornerKicks(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushSoccerTeamCurrentMapStatisticsState.AsObject;
  static toObject(includeInstance: boolean, msg: RushSoccerTeamCurrentMapStatisticsState): RushSoccerTeamCurrentMapStatisticsState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushSoccerTeamCurrentMapStatisticsState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushSoccerTeamCurrentMapStatisticsState;
  static deserializeBinaryFromReader(message: RushSoccerTeamCurrentMapStatisticsState, reader: jspb.BinaryReader): RushSoccerTeamCurrentMapStatisticsState;
}

export namespace RushSoccerTeamCurrentMapStatisticsState {
  export type AsObject = {
    goals: number,
    goalsHt: number,
    penaltyKicks: number,
    redCards: number,
    yellowCards: number,
    freeKicks: number,
    cornerKicks: number,
  }
}

export interface RushSoccerEventTypeMap {
  RUSH_SOCCER_EVENT_TYPE_UNSPECIFIED: 0;
  RUSH_SOCCER_EVENT_TYPE_GOAL: 1;
  RUSH_SOCCER_EVENT_TYPE_PENALTY: 2;
  RUSH_SOCCER_EVENT_TYPE_RED_CARD: 3;
  RUSH_SOCCER_EVENT_TYPE_YELLOW_CARD: 4;
  RUSH_SOCCER_EVENT_TYPE_FREE_KICK: 5;
  RUSH_SOCCER_EVENT_TYPE_CORNER_KICK: 6;
  RUSH_SOCCER_EVENT_TYPE_PERIOD_CHANGE: 7;
}

export const RushSoccerEventType: RushSoccerEventTypeMap;

export interface RushSoccerPeriodMap {
  RUSH_SOCCER_PERIOD_UNSPECIFIED: 0;
  RUSH_SOCCER_PERIOD_FIRST: 1;
  RUSH_SOCCER_PERIOD_SECOND: 2;
}

export const RushSoccerPeriod: RushSoccerPeriodMap;

