// package: bragi
// file: bragi/rush_basketball.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as bragi_common_pb from "../bragi/common_pb";

export class RushBasketballMatchMessage extends jspb.Message {
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
  getPayload(): RushBasketballMatchMessage.Payload | undefined;
  setPayload(value?: RushBasketballMatchMessage.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushBasketballMatchMessage.AsObject;
  static toObject(includeInstance: boolean, msg: RushBasketballMatchMessage): RushBasketballMatchMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushBasketballMatchMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushBasketballMatchMessage;
  static deserializeBinaryFromReader(message: RushBasketballMatchMessage, reader: jspb.BinaryReader): RushBasketballMatchMessage;
}

export namespace RushBasketballMatchMessage {
  export type AsObject = {
    matchUrn: string,
    sequence: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dataStatus: bragi_common_pb.DataStatusMap[keyof bragi_common_pb.DataStatusMap],
    payload?: RushBasketballMatchMessage.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasSnapshot(): boolean;
    clearSnapshot(): void;
    getSnapshot(): RushBasketballMatchSnapshot | undefined;
    setSnapshot(value?: RushBasketballMatchSnapshot): void;

    hasUpdate(): boolean;
    clearUpdate(): void;
    getUpdate(): RushBasketballMatchUpdate | undefined;
    setUpdate(value?: RushBasketballMatchUpdate): void;

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
      snapshot?: RushBasketballMatchSnapshot.AsObject,
      update?: RushBasketballMatchUpdate.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      SNAPSHOT = 1,
      UPDATE = 2,
    }
  }
}

export class RushBasketballMatchSnapshot extends jspb.Message {
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
  getMatchState(): RushBasketballMatchState | undefined;
  setMatchState(value?: RushBasketballMatchState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushBasketballMatchSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: RushBasketballMatchSnapshot): RushBasketballMatchSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushBasketballMatchSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushBasketballMatchSnapshot;
  static deserializeBinaryFromReader(message: RushBasketballMatchSnapshot, reader: jspb.BinaryReader): RushBasketballMatchSnapshot;
}

export namespace RushBasketballMatchSnapshot {
  export type AsObject = {
    matchUrn: string,
    sequence: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dataStatus: bragi_common_pb.DataStatusMap[keyof bragi_common_pb.DataStatusMap],
    announcementsList: Array<bragi_common_pb.Announcement.AsObject>,
    matchState?: RushBasketballMatchState.AsObject,
  }
}

export class RushBasketballMatchUpdate extends jspb.Message {
  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): RushBasketballMatchUpdate.Payload | undefined;
  setPayload(value?: RushBasketballMatchUpdate.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushBasketballMatchUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RushBasketballMatchUpdate): RushBasketballMatchUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushBasketballMatchUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushBasketballMatchUpdate;
  static deserializeBinaryFromReader(message: RushBasketballMatchUpdate, reader: jspb.BinaryReader): RushBasketballMatchUpdate;
}

export namespace RushBasketballMatchUpdate {
  export type AsObject = {
    payload?: RushBasketballMatchUpdate.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasMatchState(): boolean;
    clearMatchState(): void;
    getMatchState(): RushBasketballMatchState | undefined;
    setMatchState(value?: RushBasketballMatchState): void;

    hasPartialUpdates(): boolean;
    clearPartialUpdates(): void;
    getPartialUpdates(): RushBasketballMatchStatePartialUpdates | undefined;
    setPartialUpdates(value?: RushBasketballMatchStatePartialUpdates): void;

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
      matchState?: RushBasketballMatchState.AsObject,
      partialUpdates?: RushBasketballMatchStatePartialUpdates.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      MATCH_STATE = 1,
      PARTIAL_UPDATES = 2,
    }
  }
}

export class RushBasketballMatchStatePartialUpdates extends jspb.Message {
  clearUpdatesList(): void;
  getUpdatesList(): Array<RushBasketballMatchStatePartialUpdate>;
  setUpdatesList(value: Array<RushBasketballMatchStatePartialUpdate>): void;
  addUpdates(value?: RushBasketballMatchStatePartialUpdate, index?: number): RushBasketballMatchStatePartialUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushBasketballMatchStatePartialUpdates.AsObject;
  static toObject(includeInstance: boolean, msg: RushBasketballMatchStatePartialUpdates): RushBasketballMatchStatePartialUpdates.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushBasketballMatchStatePartialUpdates, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushBasketballMatchStatePartialUpdates;
  static deserializeBinaryFromReader(message: RushBasketballMatchStatePartialUpdates, reader: jspb.BinaryReader): RushBasketballMatchStatePartialUpdates;
}

export namespace RushBasketballMatchStatePartialUpdates {
  export type AsObject = {
    updatesList: Array<RushBasketballMatchStatePartialUpdate.AsObject>,
  }
}

export class RushBasketballMatchStatePartialUpdate extends jspb.Message {
  hasCurrentMapState(): boolean;
  clearCurrentMapState(): void;
  getCurrentMapState(): RushBasketballCurrentMapState | undefined;
  setCurrentMapState(value?: RushBasketballCurrentMapState): void;

  hasCurrentMapStatePartialUpdate(): boolean;
  clearCurrentMapStatePartialUpdate(): void;
  getCurrentMapStatePartialUpdate(): RushBasketballCurrentMapStatePartialUpdate | undefined;
  setCurrentMapStatePartialUpdate(value?: RushBasketballCurrentMapStatePartialUpdate): void;

  hasTimeline(): boolean;
  clearTimeline(): void;
  getTimeline(): RushBasketballTimelineState | undefined;
  setTimeline(value?: RushBasketballTimelineState): void;

  getUpdateCase(): RushBasketballMatchStatePartialUpdate.UpdateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushBasketballMatchStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RushBasketballMatchStatePartialUpdate): RushBasketballMatchStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushBasketballMatchStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushBasketballMatchStatePartialUpdate;
  static deserializeBinaryFromReader(message: RushBasketballMatchStatePartialUpdate, reader: jspb.BinaryReader): RushBasketballMatchStatePartialUpdate;
}

export namespace RushBasketballMatchStatePartialUpdate {
  export type AsObject = {
    currentMapState?: RushBasketballCurrentMapState.AsObject,
    currentMapStatePartialUpdate?: RushBasketballCurrentMapStatePartialUpdate.AsObject,
    timeline?: RushBasketballTimelineState.AsObject,
  }

  export enum UpdateCase {
    UPDATE_NOT_SET = 0,
    CURRENT_MAP_STATE = 1,
    CURRENT_MAP_STATE_PARTIAL_UPDATE = 2,
    TIMELINE = 3,
  }
}

export class RushBasketballMatchState extends jspb.Message {
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

  getMatchStatus(): bragi_common_pb.MatchStatusTypeMap[keyof bragi_common_pb.MatchStatusTypeMap];
  setMatchStatus(value: bragi_common_pb.MatchStatusTypeMap[keyof bragi_common_pb.MatchStatusTypeMap]): void;

  hasTimeline(): boolean;
  clearTimeline(): void;
  getTimeline(): RushBasketballTimelineState | undefined;
  setTimeline(value?: RushBasketballTimelineState): void;

  hasCurrentMap(): boolean;
  clearCurrentMap(): void;
  getCurrentMap(): RushBasketballCurrentMapState | undefined;
  setCurrentMap(value?: RushBasketballCurrentMapState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushBasketballMatchState.AsObject;
  static toObject(includeInstance: boolean, msg: RushBasketballMatchState): RushBasketballMatchState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushBasketballMatchState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushBasketballMatchState;
  static deserializeBinaryFromReader(message: RushBasketballMatchState, reader: jspb.BinaryReader): RushBasketballMatchState;
}

export namespace RushBasketballMatchState {
  export type AsObject = {
    matchUrn: string,
    matchType: bragi_common_pb.BestOfTypeMap[keyof bragi_common_pb.BestOfTypeMap],
    homeTeam?: bragi_common_pb.Team.AsObject,
    awayTeam?: bragi_common_pb.Team.AsObject,
    matchStatus: bragi_common_pb.MatchStatusTypeMap[keyof bragi_common_pb.MatchStatusTypeMap],
    timeline?: RushBasketballTimelineState.AsObject,
    currentMap?: RushBasketballCurrentMapState.AsObject,
  }
}

export class RushBasketballTimelineState extends jspb.Message {
  clearEventsList(): void;
  getEventsList(): Array<RushBasketballTimelineEvent>;
  setEventsList(value: Array<RushBasketballTimelineEvent>): void;
  addEvents(value?: RushBasketballTimelineEvent, index?: number): RushBasketballTimelineEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushBasketballTimelineState.AsObject;
  static toObject(includeInstance: boolean, msg: RushBasketballTimelineState): RushBasketballTimelineState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushBasketballTimelineState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushBasketballTimelineState;
  static deserializeBinaryFromReader(message: RushBasketballTimelineState, reader: jspb.BinaryReader): RushBasketballTimelineState;
}

export namespace RushBasketballTimelineState {
  export type AsObject = {
    eventsList: Array<RushBasketballTimelineEvent.AsObject>,
  }
}

export class RushBasketballTimelineEvent extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getEventType(): RushBasketballEventTypeMap[keyof RushBasketballEventTypeMap];
  setEventType(value: RushBasketballEventTypeMap[keyof RushBasketballEventTypeMap]): void;

  hasRemainingTime(): boolean;
  clearRemainingTime(): void;
  getRemainingTime(): google_protobuf_duration_pb.Duration | undefined;
  setRemainingTime(value?: google_protobuf_duration_pb.Duration): void;

  getPeriod(): RushBasketballPeriodMap[keyof RushBasketballPeriodMap];
  setPeriod(value: RushBasketballPeriodMap[keyof RushBasketballPeriodMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushBasketballTimelineEvent.AsObject;
  static toObject(includeInstance: boolean, msg: RushBasketballTimelineEvent): RushBasketballTimelineEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushBasketballTimelineEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushBasketballTimelineEvent;
  static deserializeBinaryFromReader(message: RushBasketballTimelineEvent, reader: jspb.BinaryReader): RushBasketballTimelineEvent;
}

export namespace RushBasketballTimelineEvent {
  export type AsObject = {
    teamUrn: string,
    eventType: RushBasketballEventTypeMap[keyof RushBasketballEventTypeMap],
    remainingTime?: google_protobuf_duration_pb.Duration.AsObject,
    period: RushBasketballPeriodMap[keyof RushBasketballPeriodMap],
  }
}

export class RushBasketballCurrentMapStatePartialUpdate extends jspb.Message {
  hasGameTime(): boolean;
  clearGameTime(): void;
  getGameTime(): RushBasketballCurrentMapTimeState | undefined;
  setGameTime(value?: RushBasketballCurrentMapTimeState): void;

  hasScore(): boolean;
  clearScore(): void;
  getScore(): RushBasketballCurrentMapScoreState | undefined;
  setScore(value?: RushBasketballCurrentMapScoreState): void;

  hasTeamCurrentMapState(): boolean;
  clearTeamCurrentMapState(): void;
  getTeamCurrentMapState(): RushBasketballTeamCurrentMapState | undefined;
  setTeamCurrentMapState(value?: RushBasketballTeamCurrentMapState): void;

  hasTeamCurrentMapPartialUpdate(): boolean;
  clearTeamCurrentMapPartialUpdate(): void;
  getTeamCurrentMapPartialUpdate(): RushBasketballTeamCurrentMapStatePartialUpdate | undefined;
  setTeamCurrentMapPartialUpdate(value?: RushBasketballTeamCurrentMapStatePartialUpdate): void;

  getUpdateCase(): RushBasketballCurrentMapStatePartialUpdate.UpdateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushBasketballCurrentMapStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RushBasketballCurrentMapStatePartialUpdate): RushBasketballCurrentMapStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushBasketballCurrentMapStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushBasketballCurrentMapStatePartialUpdate;
  static deserializeBinaryFromReader(message: RushBasketballCurrentMapStatePartialUpdate, reader: jspb.BinaryReader): RushBasketballCurrentMapStatePartialUpdate;
}

export namespace RushBasketballCurrentMapStatePartialUpdate {
  export type AsObject = {
    gameTime?: RushBasketballCurrentMapTimeState.AsObject,
    score?: RushBasketballCurrentMapScoreState.AsObject,
    teamCurrentMapState?: RushBasketballTeamCurrentMapState.AsObject,
    teamCurrentMapPartialUpdate?: RushBasketballTeamCurrentMapStatePartialUpdate.AsObject,
  }

  export enum UpdateCase {
    UPDATE_NOT_SET = 0,
    GAME_TIME = 1,
    SCORE = 2,
    TEAM_CURRENT_MAP_STATE = 3,
    TEAM_CURRENT_MAP_PARTIAL_UPDATE = 4,
  }
}

export class RushBasketballCurrentMapState extends jspb.Message {
  getPeriod(): RushBasketballPeriodMap[keyof RushBasketballPeriodMap];
  setPeriod(value: RushBasketballPeriodMap[keyof RushBasketballPeriodMap]): void;

  hasGameTime(): boolean;
  clearGameTime(): void;
  getGameTime(): RushBasketballCurrentMapTimeState | undefined;
  setGameTime(value?: RushBasketballCurrentMapTimeState): void;

  hasScore(): boolean;
  clearScore(): void;
  getScore(): RushBasketballCurrentMapScoreState | undefined;
  setScore(value?: RushBasketballCurrentMapScoreState): void;

  getMapPaused(): boolean;
  setMapPaused(value: boolean): void;

  getTeamsMap(): jspb.Map<string, RushBasketballTeamCurrentMapState>;
  clearTeamsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushBasketballCurrentMapState.AsObject;
  static toObject(includeInstance: boolean, msg: RushBasketballCurrentMapState): RushBasketballCurrentMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushBasketballCurrentMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushBasketballCurrentMapState;
  static deserializeBinaryFromReader(message: RushBasketballCurrentMapState, reader: jspb.BinaryReader): RushBasketballCurrentMapState;
}

export namespace RushBasketballCurrentMapState {
  export type AsObject = {
    period: RushBasketballPeriodMap[keyof RushBasketballPeriodMap],
    gameTime?: RushBasketballCurrentMapTimeState.AsObject,
    score?: RushBasketballCurrentMapScoreState.AsObject,
    mapPaused: boolean,
    teamsMap: Array<[string, RushBasketballTeamCurrentMapState.AsObject]>,
  }
}

export class RushBasketballCurrentMapTimeState extends jspb.Message {
  hasRemainingTime(): boolean;
  clearRemainingTime(): void;
  getRemainingTime(): google_protobuf_duration_pb.Duration | undefined;
  setRemainingTime(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushBasketballCurrentMapTimeState.AsObject;
  static toObject(includeInstance: boolean, msg: RushBasketballCurrentMapTimeState): RushBasketballCurrentMapTimeState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushBasketballCurrentMapTimeState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushBasketballCurrentMapTimeState;
  static deserializeBinaryFromReader(message: RushBasketballCurrentMapTimeState, reader: jspb.BinaryReader): RushBasketballCurrentMapTimeState;
}

export namespace RushBasketballCurrentMapTimeState {
  export type AsObject = {
    remainingTime?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class RushBasketballCurrentMapScoreState extends jspb.Message {
  getHomeScore(): number;
  setHomeScore(value: number): void;

  getAwayScore(): number;
  setAwayScore(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushBasketballCurrentMapScoreState.AsObject;
  static toObject(includeInstance: boolean, msg: RushBasketballCurrentMapScoreState): RushBasketballCurrentMapScoreState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushBasketballCurrentMapScoreState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushBasketballCurrentMapScoreState;
  static deserializeBinaryFromReader(message: RushBasketballCurrentMapScoreState, reader: jspb.BinaryReader): RushBasketballCurrentMapScoreState;
}

export namespace RushBasketballCurrentMapScoreState {
  export type AsObject = {
    homeScore: number,
    awayScore: number,
  }
}

export class RushBasketballTeamCurrentMapStatePartialUpdate extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): RushBasketballTeamCurrentMapStatePartialUpdate.Payload | undefined;
  setPayload(value?: RushBasketballTeamCurrentMapStatePartialUpdate.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushBasketballTeamCurrentMapStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RushBasketballTeamCurrentMapStatePartialUpdate): RushBasketballTeamCurrentMapStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushBasketballTeamCurrentMapStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushBasketballTeamCurrentMapStatePartialUpdate;
  static deserializeBinaryFromReader(message: RushBasketballTeamCurrentMapStatePartialUpdate, reader: jspb.BinaryReader): RushBasketballTeamCurrentMapStatePartialUpdate;
}

export namespace RushBasketballTeamCurrentMapStatePartialUpdate {
  export type AsObject = {
    teamUrn: string,
    payload?: RushBasketballTeamCurrentMapStatePartialUpdate.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasMapStatistics(): boolean;
    clearMapStatistics(): void;
    getMapStatistics(): RushBasketballTeamCurrentMapStatisticsState | undefined;
    setMapStatistics(value?: RushBasketballTeamCurrentMapStatisticsState): void;

    hasPlayer(): boolean;
    clearPlayer(): void;
    getPlayer(): RushBasketballPlayerCurrentMapState | undefined;
    setPlayer(value?: RushBasketballPlayerCurrentMapState): void;

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
      mapStatistics?: RushBasketballTeamCurrentMapStatisticsState.AsObject,
      player?: RushBasketballPlayerCurrentMapState.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      MAP_STATISTICS = 1,
      PLAYER = 2,
    }
  }
}

export class RushBasketballTeamCurrentMapState extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  hasMapStatistics(): boolean;
  clearMapStatistics(): void;
  getMapStatistics(): RushBasketballTeamCurrentMapStatisticsState | undefined;
  setMapStatistics(value?: RushBasketballTeamCurrentMapStatisticsState): void;

  hasPlayer(): boolean;
  clearPlayer(): void;
  getPlayer(): RushBasketballPlayerCurrentMapState | undefined;
  setPlayer(value?: RushBasketballPlayerCurrentMapState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushBasketballTeamCurrentMapState.AsObject;
  static toObject(includeInstance: boolean, msg: RushBasketballTeamCurrentMapState): RushBasketballTeamCurrentMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushBasketballTeamCurrentMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushBasketballTeamCurrentMapState;
  static deserializeBinaryFromReader(message: RushBasketballTeamCurrentMapState, reader: jspb.BinaryReader): RushBasketballTeamCurrentMapState;
}

export namespace RushBasketballTeamCurrentMapState {
  export type AsObject = {
    teamUrn: string,
    mapStatistics?: RushBasketballTeamCurrentMapStatisticsState.AsObject,
    player?: RushBasketballPlayerCurrentMapState.AsObject,
  }
}

export class RushBasketballPlayerCurrentMapState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getExtName(): string;
  setExtName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushBasketballPlayerCurrentMapState.AsObject;
  static toObject(includeInstance: boolean, msg: RushBasketballPlayerCurrentMapState): RushBasketballPlayerCurrentMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushBasketballPlayerCurrentMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushBasketballPlayerCurrentMapState;
  static deserializeBinaryFromReader(message: RushBasketballPlayerCurrentMapState, reader: jspb.BinaryReader): RushBasketballPlayerCurrentMapState;
}

export namespace RushBasketballPlayerCurrentMapState {
  export type AsObject = {
    playerUrn: string,
    extName: string,
  }
}

export class RushBasketballTeamCurrentMapStatisticsState extends jspb.Message {
  getPointsTotal(): number;
  setPointsTotal(value: number): void;

  getPointsHt(): number;
  setPointsHt(value: number): void;

  clearPeriodPointsList(): void;
  getPeriodPointsList(): Array<RushBasketballPeriodPoints>;
  setPeriodPointsList(value: Array<RushBasketballPeriodPoints>): void;
  addPeriodPoints(value?: RushBasketballPeriodPoints, index?: number): RushBasketballPeriodPoints;

  getThreePointers(): number;
  setThreePointers(value: number): void;

  getTwoPointers(): number;
  setTwoPointers(value: number): void;

  getFreeThrowsSuccessful(): number;
  setFreeThrowsSuccessful(value: number): void;

  getFreeThrowsMissed(): number;
  setFreeThrowsMissed(value: number): void;

  getFouls(): number;
  setFouls(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushBasketballTeamCurrentMapStatisticsState.AsObject;
  static toObject(includeInstance: boolean, msg: RushBasketballTeamCurrentMapStatisticsState): RushBasketballTeamCurrentMapStatisticsState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushBasketballTeamCurrentMapStatisticsState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushBasketballTeamCurrentMapStatisticsState;
  static deserializeBinaryFromReader(message: RushBasketballTeamCurrentMapStatisticsState, reader: jspb.BinaryReader): RushBasketballTeamCurrentMapStatisticsState;
}

export namespace RushBasketballTeamCurrentMapStatisticsState {
  export type AsObject = {
    pointsTotal: number,
    pointsHt: number,
    periodPointsList: Array<RushBasketballPeriodPoints.AsObject>,
    threePointers: number,
    twoPointers: number,
    freeThrowsSuccessful: number,
    freeThrowsMissed: number,
    fouls: number,
  }
}

export class RushBasketballPeriodPoints extends jspb.Message {
  getPeriod(): RushBasketballPeriodMap[keyof RushBasketballPeriodMap];
  setPeriod(value: RushBasketballPeriodMap[keyof RushBasketballPeriodMap]): void;

  getPoints(): number;
  setPoints(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushBasketballPeriodPoints.AsObject;
  static toObject(includeInstance: boolean, msg: RushBasketballPeriodPoints): RushBasketballPeriodPoints.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushBasketballPeriodPoints, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushBasketballPeriodPoints;
  static deserializeBinaryFromReader(message: RushBasketballPeriodPoints, reader: jspb.BinaryReader): RushBasketballPeriodPoints;
}

export namespace RushBasketballPeriodPoints {
  export type AsObject = {
    period: RushBasketballPeriodMap[keyof RushBasketballPeriodMap],
    points: number,
  }
}

export interface RushBasketballEventTypeMap {
  RUSH_BASKETBALL_EVENT_TYPE_UNSPECIFIED: 0;
  RUSH_BASKETBALL_EVENT_TYPE_THREE_POINTER: 1;
  RUSH_BASKETBALL_EVENT_TYPE_TWO_POINTER: 2;
  RUSH_BASKETBALL_EVENT_TYPE_FREE_THROW_SUCCESS: 3;
  RUSH_BASKETBALL_EVENT_TYPE_FREE_THROW_MISS: 4;
  RUSH_BASKETBALL_EVENT_TYPE_FOUL: 5;
  RUSH_BASKETBALL_EVENT_TYPE_PERIOD_CHANGE: 6;
}

export const RushBasketballEventType: RushBasketballEventTypeMap;

export interface RushBasketballPeriodMap {
  RUSH_BASKETBALL_PERIOD_UNSPECIFIED: 0;
  RUSH_BASKETBALL_PERIOD_QUARTER_1: 1;
  RUSH_BASKETBALL_PERIOD_QUARTER_2: 2;
  RUSH_BASKETBALL_PERIOD_QUARTER_3: 3;
  RUSH_BASKETBALL_PERIOD_QUARTER_4: 4;
  RUSH_BASKETBALL_PERIOD_OVERTIME: 5;
  RUSH_BASKETBALL_PERIOD_OVERTIME_1: 6;
  RUSH_BASKETBALL_PERIOD_OVERTIME_2: 7;
  RUSH_BASKETBALL_PERIOD_OVERTIME_3: 8;
  RUSH_BASKETBALL_PERIOD_OVERTIME_4: 9;
  RUSH_BASKETBALL_PERIOD_OVERTIME_5: 10;
  RUSH_BASKETBALL_PERIOD_OVERTIME_6: 11;
  RUSH_BASKETBALL_PERIOD_OVERTIME_7: 12;
  RUSH_BASKETBALL_PERIOD_OVERTIME_8: 13;
  RUSH_BASKETBALL_PERIOD_OVERTIME_9: 14;
  RUSH_BASKETBALL_PERIOD_OVERTIME_10: 16;
}

export const RushBasketballPeriod: RushBasketballPeriodMap;

