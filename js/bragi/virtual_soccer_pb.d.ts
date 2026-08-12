// package: bragi
// file: bragi/virtual_soccer.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as bragi_common_pb from "../bragi/common_pb";

export class VirtualSoccerMatchMessage extends jspb.Message {
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
  getPayload(): VirtualSoccerMatchMessage.Payload | undefined;
  setPayload(value?: VirtualSoccerMatchMessage.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualSoccerMatchMessage.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualSoccerMatchMessage): VirtualSoccerMatchMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VirtualSoccerMatchMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualSoccerMatchMessage;
  static deserializeBinaryFromReader(message: VirtualSoccerMatchMessage, reader: jspb.BinaryReader): VirtualSoccerMatchMessage;
}

export namespace VirtualSoccerMatchMessage {
  export type AsObject = {
    matchUrn: string,
    sequence: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dataStatus: bragi_common_pb.DataStatusMap[keyof bragi_common_pb.DataStatusMap],
    payload?: VirtualSoccerMatchMessage.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasSnapshot(): boolean;
    clearSnapshot(): void;
    getSnapshot(): VirtualSoccerMatchSnapshot | undefined;
    setSnapshot(value?: VirtualSoccerMatchSnapshot): void;

    hasUpdate(): boolean;
    clearUpdate(): void;
    getUpdate(): VirtualSoccerMatchUpdate | undefined;
    setUpdate(value?: VirtualSoccerMatchUpdate): void;

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
      snapshot?: VirtualSoccerMatchSnapshot.AsObject,
      update?: VirtualSoccerMatchUpdate.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      SNAPSHOT = 1,
      UPDATE = 2,
    }
  }
}

export class VirtualSoccerMatchSnapshot extends jspb.Message {
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
  getMatchState(): VirtualSoccerMatchState | undefined;
  setMatchState(value?: VirtualSoccerMatchState): void;

  hasTournament(): boolean;
  clearTournament(): void;
  getTournament(): bragi_common_pb.Tournament | undefined;
  setTournament(value?: bragi_common_pb.Tournament): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualSoccerMatchSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualSoccerMatchSnapshot): VirtualSoccerMatchSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VirtualSoccerMatchSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualSoccerMatchSnapshot;
  static deserializeBinaryFromReader(message: VirtualSoccerMatchSnapshot, reader: jspb.BinaryReader): VirtualSoccerMatchSnapshot;
}

export namespace VirtualSoccerMatchSnapshot {
  export type AsObject = {
    matchUrn: string,
    sequence: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dataStatus: bragi_common_pb.DataStatusMap[keyof bragi_common_pb.DataStatusMap],
    announcementsList: Array<bragi_common_pb.Announcement.AsObject>,
    matchState?: VirtualSoccerMatchState.AsObject,
    tournament?: bragi_common_pb.Tournament.AsObject,
  }
}

export class VirtualSoccerMatchUpdate extends jspb.Message {
  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): VirtualSoccerMatchUpdate.Payload | undefined;
  setPayload(value?: VirtualSoccerMatchUpdate.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualSoccerMatchUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualSoccerMatchUpdate): VirtualSoccerMatchUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VirtualSoccerMatchUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualSoccerMatchUpdate;
  static deserializeBinaryFromReader(message: VirtualSoccerMatchUpdate, reader: jspb.BinaryReader): VirtualSoccerMatchUpdate;
}

export namespace VirtualSoccerMatchUpdate {
  export type AsObject = {
    payload?: VirtualSoccerMatchUpdate.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasMatchState(): boolean;
    clearMatchState(): void;
    getMatchState(): VirtualSoccerMatchState | undefined;
    setMatchState(value?: VirtualSoccerMatchState): void;

    hasPartialUpdates(): boolean;
    clearPartialUpdates(): void;
    getPartialUpdates(): VirtualSoccerMatchStatePartialUpdates | undefined;
    setPartialUpdates(value?: VirtualSoccerMatchStatePartialUpdates): void;

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
      matchState?: VirtualSoccerMatchState.AsObject,
      partialUpdates?: VirtualSoccerMatchStatePartialUpdates.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      MATCH_STATE = 1,
      PARTIAL_UPDATES = 2,
    }
  }
}

export class VirtualSoccerMatchStatePartialUpdates extends jspb.Message {
  clearUpdatesList(): void;
  getUpdatesList(): Array<VirtualSoccerMatchStatePartialUpdate>;
  setUpdatesList(value: Array<VirtualSoccerMatchStatePartialUpdate>): void;
  addUpdates(value?: VirtualSoccerMatchStatePartialUpdate, index?: number): VirtualSoccerMatchStatePartialUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualSoccerMatchStatePartialUpdates.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualSoccerMatchStatePartialUpdates): VirtualSoccerMatchStatePartialUpdates.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VirtualSoccerMatchStatePartialUpdates, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualSoccerMatchStatePartialUpdates;
  static deserializeBinaryFromReader(message: VirtualSoccerMatchStatePartialUpdates, reader: jspb.BinaryReader): VirtualSoccerMatchStatePartialUpdates;
}

export namespace VirtualSoccerMatchStatePartialUpdates {
  export type AsObject = {
    updatesList: Array<VirtualSoccerMatchStatePartialUpdate.AsObject>,
  }
}

export class VirtualSoccerMatchStatePartialUpdate extends jspb.Message {
  hasScore(): boolean;
  clearScore(): void;
  getScore(): VirtualSoccerMatchScoreState | undefined;
  setScore(value?: VirtualSoccerMatchScoreState): void;

  hasCurrentMapState(): boolean;
  clearCurrentMapState(): void;
  getCurrentMapState(): VirtualSoccerCurrentMapState | undefined;
  setCurrentMapState(value?: VirtualSoccerCurrentMapState): void;

  hasCurrentMapStatePartialUpdate(): boolean;
  clearCurrentMapStatePartialUpdate(): void;
  getCurrentMapStatePartialUpdate(): VirtualSoccerCurrentMapStatePartialUpdate | undefined;
  setCurrentMapStatePartialUpdate(value?: VirtualSoccerCurrentMapStatePartialUpdate): void;

  hasTimeline(): boolean;
  clearTimeline(): void;
  getTimeline(): VirtualSoccerTimelineState | undefined;
  setTimeline(value?: VirtualSoccerTimelineState): void;

  hasBallState(): boolean;
  clearBallState(): void;
  getBallState(): VirtualSoccerBallState | undefined;
  setBallState(value?: VirtualSoccerBallState): void;

  hasPossessionStatistics(): boolean;
  clearPossessionStatistics(): void;
  getPossessionStatistics(): VirtualSoccerPossessionStatisticsState | undefined;
  setPossessionStatistics(value?: VirtualSoccerPossessionStatisticsState): void;

  getUpdateCase(): VirtualSoccerMatchStatePartialUpdate.UpdateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualSoccerMatchStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualSoccerMatchStatePartialUpdate): VirtualSoccerMatchStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VirtualSoccerMatchStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualSoccerMatchStatePartialUpdate;
  static deserializeBinaryFromReader(message: VirtualSoccerMatchStatePartialUpdate, reader: jspb.BinaryReader): VirtualSoccerMatchStatePartialUpdate;
}

export namespace VirtualSoccerMatchStatePartialUpdate {
  export type AsObject = {
    score?: VirtualSoccerMatchScoreState.AsObject,
    currentMapState?: VirtualSoccerCurrentMapState.AsObject,
    currentMapStatePartialUpdate?: VirtualSoccerCurrentMapStatePartialUpdate.AsObject,
    timeline?: VirtualSoccerTimelineState.AsObject,
    ballState?: VirtualSoccerBallState.AsObject,
    possessionStatistics?: VirtualSoccerPossessionStatisticsState.AsObject,
  }

  export enum UpdateCase {
    UPDATE_NOT_SET = 0,
    SCORE = 1,
    CURRENT_MAP_STATE = 2,
    CURRENT_MAP_STATE_PARTIAL_UPDATE = 3,
    TIMELINE = 4,
    BALL_STATE = 5,
    POSSESSION_STATISTICS = 6,
  }
}

export class VirtualSoccerMatchState extends jspb.Message {
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
  getScore(): VirtualSoccerMatchScoreState | undefined;
  setScore(value?: VirtualSoccerMatchScoreState): void;

  getMatchStatus(): bragi_common_pb.MatchStatusTypeMap[keyof bragi_common_pb.MatchStatusTypeMap];
  setMatchStatus(value: bragi_common_pb.MatchStatusTypeMap[keyof bragi_common_pb.MatchStatusTypeMap]): void;

  hasTimeline(): boolean;
  clearTimeline(): void;
  getTimeline(): VirtualSoccerTimelineState | undefined;
  setTimeline(value?: VirtualSoccerTimelineState): void;

  hasCurrentMap(): boolean;
  clearCurrentMap(): void;
  getCurrentMap(): VirtualSoccerCurrentMapState | undefined;
  setCurrentMap(value?: VirtualSoccerCurrentMapState): void;

  hasBallState(): boolean;
  clearBallState(): void;
  getBallState(): VirtualSoccerBallState | undefined;
  setBallState(value?: VirtualSoccerBallState): void;

  hasPossessionStatistics(): boolean;
  clearPossessionStatistics(): void;
  getPossessionStatistics(): VirtualSoccerPossessionStatisticsState | undefined;
  setPossessionStatistics(value?: VirtualSoccerPossessionStatisticsState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualSoccerMatchState.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualSoccerMatchState): VirtualSoccerMatchState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VirtualSoccerMatchState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualSoccerMatchState;
  static deserializeBinaryFromReader(message: VirtualSoccerMatchState, reader: jspb.BinaryReader): VirtualSoccerMatchState;
}

export namespace VirtualSoccerMatchState {
  export type AsObject = {
    matchUrn: string,
    matchType: bragi_common_pb.BestOfTypeMap[keyof bragi_common_pb.BestOfTypeMap],
    homeTeam?: bragi_common_pb.Team.AsObject,
    awayTeam?: bragi_common_pb.Team.AsObject,
    score?: VirtualSoccerMatchScoreState.AsObject,
    matchStatus: bragi_common_pb.MatchStatusTypeMap[keyof bragi_common_pb.MatchStatusTypeMap],
    timeline?: VirtualSoccerTimelineState.AsObject,
    currentMap?: VirtualSoccerCurrentMapState.AsObject,
    ballState?: VirtualSoccerBallState.AsObject,
    possessionStatistics?: VirtualSoccerPossessionStatisticsState.AsObject,
  }
}

export class VirtualSoccerMatchScoreState extends jspb.Message {
  getHomeScore(): number;
  setHomeScore(value: number): void;

  getAwayScore(): number;
  setAwayScore(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualSoccerMatchScoreState.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualSoccerMatchScoreState): VirtualSoccerMatchScoreState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VirtualSoccerMatchScoreState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualSoccerMatchScoreState;
  static deserializeBinaryFromReader(message: VirtualSoccerMatchScoreState, reader: jspb.BinaryReader): VirtualSoccerMatchScoreState;
}

export namespace VirtualSoccerMatchScoreState {
  export type AsObject = {
    homeScore: number,
    awayScore: number,
  }
}

export class VirtualSoccerCurrentMapScoreState extends jspb.Message {
  getHomeGoals(): number;
  setHomeGoals(value: number): void;

  getAwayGoals(): number;
  setAwayGoals(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualSoccerCurrentMapScoreState.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualSoccerCurrentMapScoreState): VirtualSoccerCurrentMapScoreState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VirtualSoccerCurrentMapScoreState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualSoccerCurrentMapScoreState;
  static deserializeBinaryFromReader(message: VirtualSoccerCurrentMapScoreState, reader: jspb.BinaryReader): VirtualSoccerCurrentMapScoreState;
}

export namespace VirtualSoccerCurrentMapScoreState {
  export type AsObject = {
    homeGoals: number,
    awayGoals: number,
  }
}

export class VirtualSoccerPitchPosition extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualSoccerPitchPosition.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualSoccerPitchPosition): VirtualSoccerPitchPosition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VirtualSoccerPitchPosition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualSoccerPitchPosition;
  static deserializeBinaryFromReader(message: VirtualSoccerPitchPosition, reader: jspb.BinaryReader): VirtualSoccerPitchPosition;
}

export namespace VirtualSoccerPitchPosition {
  export type AsObject = {
    x: number,
    y: number,
  }
}

export class VirtualSoccerBallState extends jspb.Message {
  hasCurrent(): boolean;
  clearCurrent(): void;
  getCurrent(): VirtualSoccerPitchPosition | undefined;
  setCurrent(value?: VirtualSoccerPitchPosition): void;

  hasPrevious(): boolean;
  clearPrevious(): void;
  getPrevious(): VirtualSoccerPitchPosition | undefined;
  setPrevious(value?: VirtualSoccerPitchPosition): void;

  getPossession(): VirtualSoccerPossessionSideMap[keyof VirtualSoccerPossessionSideMap];
  setPossession(value: VirtualSoccerPossessionSideMap[keyof VirtualSoccerPossessionSideMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualSoccerBallState.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualSoccerBallState): VirtualSoccerBallState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VirtualSoccerBallState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualSoccerBallState;
  static deserializeBinaryFromReader(message: VirtualSoccerBallState, reader: jspb.BinaryReader): VirtualSoccerBallState;
}

export namespace VirtualSoccerBallState {
  export type AsObject = {
    current?: VirtualSoccerPitchPosition.AsObject,
    previous?: VirtualSoccerPitchPosition.AsObject,
    possession: VirtualSoccerPossessionSideMap[keyof VirtualSoccerPossessionSideMap],
  }
}

export class VirtualSoccerPossessionStatisticsState extends jspb.Message {
  hasTotal(): boolean;
  clearTotal(): void;
  getTotal(): VirtualSoccerPossessionStatisticsState.Values | undefined;
  setTotal(value?: VirtualSoccerPossessionStatisticsState.Values): void;

  hasFirstHalf(): boolean;
  clearFirstHalf(): void;
  getFirstHalf(): VirtualSoccerPossessionStatisticsState.Values | undefined;
  setFirstHalf(value?: VirtualSoccerPossessionStatisticsState.Values): void;

  hasSecondHalf(): boolean;
  clearSecondHalf(): void;
  getSecondHalf(): VirtualSoccerPossessionStatisticsState.Values | undefined;
  setSecondHalf(value?: VirtualSoccerPossessionStatisticsState.Values): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualSoccerPossessionStatisticsState.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualSoccerPossessionStatisticsState): VirtualSoccerPossessionStatisticsState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VirtualSoccerPossessionStatisticsState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualSoccerPossessionStatisticsState;
  static deserializeBinaryFromReader(message: VirtualSoccerPossessionStatisticsState, reader: jspb.BinaryReader): VirtualSoccerPossessionStatisticsState;
}

export namespace VirtualSoccerPossessionStatisticsState {
  export type AsObject = {
    total?: VirtualSoccerPossessionStatisticsState.Values.AsObject,
    firstHalf?: VirtualSoccerPossessionStatisticsState.Values.AsObject,
    secondHalf?: VirtualSoccerPossessionStatisticsState.Values.AsObject,
  }

  export class Values extends jspb.Message {
    getHomePercentage(): number;
    setHomePercentage(value: number): void;

    getAwayPercentage(): number;
    setAwayPercentage(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Values.AsObject;
    static toObject(includeInstance: boolean, msg: Values): Values.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Values, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Values;
    static deserializeBinaryFromReader(message: Values, reader: jspb.BinaryReader): Values;
  }

  export namespace Values {
    export type AsObject = {
      homePercentage: number,
      awayPercentage: number,
    }
  }
}

export class VirtualSoccerTimelineState extends jspb.Message {
  clearEventsList(): void;
  getEventsList(): Array<VirtualSoccerTimelineEvent>;
  setEventsList(value: Array<VirtualSoccerTimelineEvent>): void;
  addEvents(value?: VirtualSoccerTimelineEvent, index?: number): VirtualSoccerTimelineEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualSoccerTimelineState.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualSoccerTimelineState): VirtualSoccerTimelineState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VirtualSoccerTimelineState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualSoccerTimelineState;
  static deserializeBinaryFromReader(message: VirtualSoccerTimelineState, reader: jspb.BinaryReader): VirtualSoccerTimelineState;
}

export namespace VirtualSoccerTimelineState {
  export type AsObject = {
    eventsList: Array<VirtualSoccerTimelineEvent.AsObject>,
  }
}

export class VirtualSoccerTimelineEvent extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getEventType(): VirtualSoccerEventTypeMap[keyof VirtualSoccerEventTypeMap];
  setEventType(value: VirtualSoccerEventTypeMap[keyof VirtualSoccerEventTypeMap]): void;

  hasRealTime(): boolean;
  clearRealTime(): void;
  getRealTime(): google_protobuf_duration_pb.Duration | undefined;
  setRealTime(value?: google_protobuf_duration_pb.Duration): void;

  hasGameTime(): boolean;
  clearGameTime(): void;
  getGameTime(): google_protobuf_duration_pb.Duration | undefined;
  setGameTime(value?: google_protobuf_duration_pb.Duration): void;

  getPeriod(): VirtualSoccerPeriodMap[keyof VirtualSoccerPeriodMap];
  setPeriod(value: VirtualSoccerPeriodMap[keyof VirtualSoccerPeriodMap]): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): VirtualSoccerPitchPosition | undefined;
  setPosition(value?: VirtualSoccerPitchPosition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualSoccerTimelineEvent.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualSoccerTimelineEvent): VirtualSoccerTimelineEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VirtualSoccerTimelineEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualSoccerTimelineEvent;
  static deserializeBinaryFromReader(message: VirtualSoccerTimelineEvent, reader: jspb.BinaryReader): VirtualSoccerTimelineEvent;
}

export namespace VirtualSoccerTimelineEvent {
  export type AsObject = {
    teamUrn: string,
    eventType: VirtualSoccerEventTypeMap[keyof VirtualSoccerEventTypeMap],
    realTime?: google_protobuf_duration_pb.Duration.AsObject,
    gameTime?: google_protobuf_duration_pb.Duration.AsObject,
    period: VirtualSoccerPeriodMap[keyof VirtualSoccerPeriodMap],
    position?: VirtualSoccerPitchPosition.AsObject,
  }
}

export class VirtualSoccerCurrentMapStatePartialUpdate extends jspb.Message {
  hasGameTime(): boolean;
  clearGameTime(): void;
  getGameTime(): VirtualSoccerCurrentMapTimeState | undefined;
  setGameTime(value?: VirtualSoccerCurrentMapTimeState): void;

  hasScore(): boolean;
  clearScore(): void;
  getScore(): VirtualSoccerCurrentMapScoreState | undefined;
  setScore(value?: VirtualSoccerCurrentMapScoreState): void;

  hasTeamCurrentMapState(): boolean;
  clearTeamCurrentMapState(): void;
  getTeamCurrentMapState(): VirtualSoccerTeamCurrentMapState | undefined;
  setTeamCurrentMapState(value?: VirtualSoccerTeamCurrentMapState): void;

  hasTeamCurrentMapPartialUpdate(): boolean;
  clearTeamCurrentMapPartialUpdate(): void;
  getTeamCurrentMapPartialUpdate(): VirtualSoccerTeamCurrentMapStatePartialUpdate | undefined;
  setTeamCurrentMapPartialUpdate(value?: VirtualSoccerTeamCurrentMapStatePartialUpdate): void;

  getUpdateCase(): VirtualSoccerCurrentMapStatePartialUpdate.UpdateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualSoccerCurrentMapStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualSoccerCurrentMapStatePartialUpdate): VirtualSoccerCurrentMapStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VirtualSoccerCurrentMapStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualSoccerCurrentMapStatePartialUpdate;
  static deserializeBinaryFromReader(message: VirtualSoccerCurrentMapStatePartialUpdate, reader: jspb.BinaryReader): VirtualSoccerCurrentMapStatePartialUpdate;
}

export namespace VirtualSoccerCurrentMapStatePartialUpdate {
  export type AsObject = {
    gameTime?: VirtualSoccerCurrentMapTimeState.AsObject,
    score?: VirtualSoccerCurrentMapScoreState.AsObject,
    teamCurrentMapState?: VirtualSoccerTeamCurrentMapState.AsObject,
    teamCurrentMapPartialUpdate?: VirtualSoccerTeamCurrentMapStatePartialUpdate.AsObject,
  }

  export enum UpdateCase {
    UPDATE_NOT_SET = 0,
    GAME_TIME = 1,
    SCORE = 2,
    TEAM_CURRENT_MAP_STATE = 3,
    TEAM_CURRENT_MAP_PARTIAL_UPDATE = 4,
  }
}

export class VirtualSoccerCurrentMapState extends jspb.Message {
  getPeriod(): VirtualSoccerPeriodMap[keyof VirtualSoccerPeriodMap];
  setPeriod(value: VirtualSoccerPeriodMap[keyof VirtualSoccerPeriodMap]): void;

  hasGameTime(): boolean;
  clearGameTime(): void;
  getGameTime(): VirtualSoccerCurrentMapTimeState | undefined;
  setGameTime(value?: VirtualSoccerCurrentMapTimeState): void;

  hasScore(): boolean;
  clearScore(): void;
  getScore(): VirtualSoccerCurrentMapScoreState | undefined;
  setScore(value?: VirtualSoccerCurrentMapScoreState): void;

  getMapPaused(): boolean;
  setMapPaused(value: boolean): void;

  getTeamsMap(): jspb.Map<string, VirtualSoccerTeamCurrentMapState>;
  clearTeamsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualSoccerCurrentMapState.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualSoccerCurrentMapState): VirtualSoccerCurrentMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VirtualSoccerCurrentMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualSoccerCurrentMapState;
  static deserializeBinaryFromReader(message: VirtualSoccerCurrentMapState, reader: jspb.BinaryReader): VirtualSoccerCurrentMapState;
}

export namespace VirtualSoccerCurrentMapState {
  export type AsObject = {
    period: VirtualSoccerPeriodMap[keyof VirtualSoccerPeriodMap],
    gameTime?: VirtualSoccerCurrentMapTimeState.AsObject,
    score?: VirtualSoccerCurrentMapScoreState.AsObject,
    mapPaused: boolean,
    teamsMap: Array<[string, VirtualSoccerTeamCurrentMapState.AsObject]>,
  }
}

export class VirtualSoccerCurrentMapTimeState extends jspb.Message {
  hasRealTime(): boolean;
  clearRealTime(): void;
  getRealTime(): google_protobuf_duration_pb.Duration | undefined;
  setRealTime(value?: google_protobuf_duration_pb.Duration): void;

  hasGameTime(): boolean;
  clearGameTime(): void;
  getGameTime(): google_protobuf_duration_pb.Duration | undefined;
  setGameTime(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualSoccerCurrentMapTimeState.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualSoccerCurrentMapTimeState): VirtualSoccerCurrentMapTimeState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VirtualSoccerCurrentMapTimeState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualSoccerCurrentMapTimeState;
  static deserializeBinaryFromReader(message: VirtualSoccerCurrentMapTimeState, reader: jspb.BinaryReader): VirtualSoccerCurrentMapTimeState;
}

export namespace VirtualSoccerCurrentMapTimeState {
  export type AsObject = {
    realTime?: google_protobuf_duration_pb.Duration.AsObject,
    gameTime?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class VirtualSoccerTeamCurrentMapStatePartialUpdate extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): VirtualSoccerTeamCurrentMapStatePartialUpdate.Payload | undefined;
  setPayload(value?: VirtualSoccerTeamCurrentMapStatePartialUpdate.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualSoccerTeamCurrentMapStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualSoccerTeamCurrentMapStatePartialUpdate): VirtualSoccerTeamCurrentMapStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VirtualSoccerTeamCurrentMapStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualSoccerTeamCurrentMapStatePartialUpdate;
  static deserializeBinaryFromReader(message: VirtualSoccerTeamCurrentMapStatePartialUpdate, reader: jspb.BinaryReader): VirtualSoccerTeamCurrentMapStatePartialUpdate;
}

export namespace VirtualSoccerTeamCurrentMapStatePartialUpdate {
  export type AsObject = {
    teamUrn: string,
    payload?: VirtualSoccerTeamCurrentMapStatePartialUpdate.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasMapStatistics(): boolean;
    clearMapStatistics(): void;
    getMapStatistics(): VirtualSoccerTeamCurrentMapStatisticsState | undefined;
    setMapStatistics(value?: VirtualSoccerTeamCurrentMapStatisticsState): void;

    hasPlayer(): boolean;
    clearPlayer(): void;
    getPlayer(): VirtualSoccerPlayerCurrentMapState | undefined;
    setPlayer(value?: VirtualSoccerPlayerCurrentMapState): void;

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
      mapStatistics?: VirtualSoccerTeamCurrentMapStatisticsState.AsObject,
      player?: VirtualSoccerPlayerCurrentMapState.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      MAP_STATISTICS = 1,
      PLAYER = 2,
    }
  }
}

export class VirtualSoccerTeamCurrentMapState extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  hasMapStatistics(): boolean;
  clearMapStatistics(): void;
  getMapStatistics(): VirtualSoccerTeamCurrentMapStatisticsState | undefined;
  setMapStatistics(value?: VirtualSoccerTeamCurrentMapStatisticsState): void;

  hasPlayer(): boolean;
  clearPlayer(): void;
  getPlayer(): VirtualSoccerPlayerCurrentMapState | undefined;
  setPlayer(value?: VirtualSoccerPlayerCurrentMapState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualSoccerTeamCurrentMapState.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualSoccerTeamCurrentMapState): VirtualSoccerTeamCurrentMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VirtualSoccerTeamCurrentMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualSoccerTeamCurrentMapState;
  static deserializeBinaryFromReader(message: VirtualSoccerTeamCurrentMapState, reader: jspb.BinaryReader): VirtualSoccerTeamCurrentMapState;
}

export namespace VirtualSoccerTeamCurrentMapState {
  export type AsObject = {
    teamUrn: string,
    mapStatistics?: VirtualSoccerTeamCurrentMapStatisticsState.AsObject,
    player?: VirtualSoccerPlayerCurrentMapState.AsObject,
  }
}

export class VirtualSoccerPlayerCurrentMapState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getExtName(): string;
  setExtName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualSoccerPlayerCurrentMapState.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualSoccerPlayerCurrentMapState): VirtualSoccerPlayerCurrentMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VirtualSoccerPlayerCurrentMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualSoccerPlayerCurrentMapState;
  static deserializeBinaryFromReader(message: VirtualSoccerPlayerCurrentMapState, reader: jspb.BinaryReader): VirtualSoccerPlayerCurrentMapState;
}

export namespace VirtualSoccerPlayerCurrentMapState {
  export type AsObject = {
    playerUrn: string,
    extName: string,
  }
}

export class VirtualSoccerTeamCurrentMapStatisticsState extends jspb.Message {
  hasTotal(): boolean;
  clearTotal(): void;
  getTotal(): VirtualSoccerTeamStatisticsValues | undefined;
  setTotal(value?: VirtualSoccerTeamStatisticsValues): void;

  hasFirstHalf(): boolean;
  clearFirstHalf(): void;
  getFirstHalf(): VirtualSoccerTeamStatisticsValues | undefined;
  setFirstHalf(value?: VirtualSoccerTeamStatisticsValues): void;

  hasSecondHalf(): boolean;
  clearSecondHalf(): void;
  getSecondHalf(): VirtualSoccerTeamStatisticsValues | undefined;
  setSecondHalf(value?: VirtualSoccerTeamStatisticsValues): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualSoccerTeamCurrentMapStatisticsState.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualSoccerTeamCurrentMapStatisticsState): VirtualSoccerTeamCurrentMapStatisticsState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VirtualSoccerTeamCurrentMapStatisticsState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualSoccerTeamCurrentMapStatisticsState;
  static deserializeBinaryFromReader(message: VirtualSoccerTeamCurrentMapStatisticsState, reader: jspb.BinaryReader): VirtualSoccerTeamCurrentMapStatisticsState;
}

export namespace VirtualSoccerTeamCurrentMapStatisticsState {
  export type AsObject = {
    total?: VirtualSoccerTeamStatisticsValues.AsObject,
    firstHalf?: VirtualSoccerTeamStatisticsValues.AsObject,
    secondHalf?: VirtualSoccerTeamStatisticsValues.AsObject,
  }
}

export class VirtualSoccerTeamStatisticsValues extends jspb.Message {
  getGoals(): number;
  setGoals(value: number): void;

  getRedCards(): number;
  setRedCards(value: number): void;

  getYellowCards(): number;
  setYellowCards(value: number): void;

  getCornerKicks(): number;
  setCornerKicks(value: number): void;

  getFreeKicks(): number;
  setFreeKicks(value: number): void;

  getPenaltyKicks(): number;
  setPenaltyKicks(value: number): void;

  getTotalShots(): number;
  setTotalShots(value: number): void;

  getShotsOnTarget(): number;
  setShotsOnTarget(value: number): void;

  getAttacks(): number;
  setAttacks(value: number): void;

  getDangerousAttacks(): number;
  setDangerousAttacks(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualSoccerTeamStatisticsValues.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualSoccerTeamStatisticsValues): VirtualSoccerTeamStatisticsValues.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VirtualSoccerTeamStatisticsValues, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualSoccerTeamStatisticsValues;
  static deserializeBinaryFromReader(message: VirtualSoccerTeamStatisticsValues, reader: jspb.BinaryReader): VirtualSoccerTeamStatisticsValues;
}

export namespace VirtualSoccerTeamStatisticsValues {
  export type AsObject = {
    goals: number,
    redCards: number,
    yellowCards: number,
    cornerKicks: number,
    freeKicks: number,
    penaltyKicks: number,
    totalShots: number,
    shotsOnTarget: number,
    attacks: number,
    dangerousAttacks: number,
  }
}

export interface VirtualSoccerEventTypeMap {
  VIRTUAL_SOCCER_EVENT_TYPE_UNSPECIFIED: 0;
  VIRTUAL_SOCCER_EVENT_TYPE_GOAL: 1;
  VIRTUAL_SOCCER_EVENT_TYPE_PENALTY: 2;
  VIRTUAL_SOCCER_EVENT_TYPE_RED_CARD: 3;
  VIRTUAL_SOCCER_EVENT_TYPE_YELLOW_CARD: 4;
  VIRTUAL_SOCCER_EVENT_TYPE_FREE_KICK: 5;
  VIRTUAL_SOCCER_EVENT_TYPE_CORNER_KICK: 6;
  VIRTUAL_SOCCER_EVENT_TYPE_PERIOD_CHANGE: 7;
  VIRTUAL_SOCCER_EVENT_TYPE_SHOT_ON_TARGET: 8;
  VIRTUAL_SOCCER_EVENT_TYPE_SHOT_OFF_TARGET: 9;
  VIRTUAL_SOCCER_EVENT_TYPE_ATTACK: 10;
  VIRTUAL_SOCCER_EVENT_TYPE_DANGEROUS_ATTACK: 11;
}

export const VirtualSoccerEventType: VirtualSoccerEventTypeMap;

export interface VirtualSoccerPossessionSideMap {
  VIRTUAL_SOCCER_POSSESSION_SIDE_UNSPECIFIED: 0;
  VIRTUAL_SOCCER_POSSESSION_SIDE_HOME: 1;
  VIRTUAL_SOCCER_POSSESSION_SIDE_AWAY: 2;
  VIRTUAL_SOCCER_POSSESSION_SIDE_CONTESTED: 3;
}

export const VirtualSoccerPossessionSide: VirtualSoccerPossessionSideMap;

export interface VirtualSoccerPeriodMap {
  VIRTUAL_SOCCER_PERIOD_UNSPECIFIED: 0;
  VIRTUAL_SOCCER_PERIOD_FIRST: 1;
  VIRTUAL_SOCCER_PERIOD_SECOND: 2;
}

export const VirtualSoccerPeriod: VirtualSoccerPeriodMap;

