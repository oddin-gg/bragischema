// package: bragi
// file: bragi/rush_cricket.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as bragi_common_pb from "../bragi/common_pb";

export class RushCricketMatchMessage extends jspb.Message {
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
  getPayload(): RushCricketMatchMessage.Payload | undefined;
  setPayload(value?: RushCricketMatchMessage.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushCricketMatchMessage.AsObject;
  static toObject(includeInstance: boolean, msg: RushCricketMatchMessage): RushCricketMatchMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushCricketMatchMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushCricketMatchMessage;
  static deserializeBinaryFromReader(message: RushCricketMatchMessage, reader: jspb.BinaryReader): RushCricketMatchMessage;
}

export namespace RushCricketMatchMessage {
  export type AsObject = {
    matchUrn: string,
    sequence: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dataStatus: bragi_common_pb.DataStatusMap[keyof bragi_common_pb.DataStatusMap],
    payload?: RushCricketMatchMessage.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasSnapshot(): boolean;
    clearSnapshot(): void;
    getSnapshot(): RushCricketMatchSnapshot | undefined;
    setSnapshot(value?: RushCricketMatchSnapshot): void;

    hasUpdate(): boolean;
    clearUpdate(): void;
    getUpdate(): RushCricketMatchUpdate | undefined;
    setUpdate(value?: RushCricketMatchUpdate): void;

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
      snapshot?: RushCricketMatchSnapshot.AsObject,
      update?: RushCricketMatchUpdate.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      SNAPSHOT = 1,
      UPDATE = 2,
    }
  }
}

export class RushCricketMatchSnapshot extends jspb.Message {
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
  getMatchState(): RushCricketMatchState | undefined;
  setMatchState(value?: RushCricketMatchState): void;

  hasTournament(): boolean;
  clearTournament(): void;
  getTournament(): bragi_common_pb.Tournament | undefined;
  setTournament(value?: bragi_common_pb.Tournament): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushCricketMatchSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: RushCricketMatchSnapshot): RushCricketMatchSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushCricketMatchSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushCricketMatchSnapshot;
  static deserializeBinaryFromReader(message: RushCricketMatchSnapshot, reader: jspb.BinaryReader): RushCricketMatchSnapshot;
}

export namespace RushCricketMatchSnapshot {
  export type AsObject = {
    matchUrn: string,
    sequence: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dataStatus: bragi_common_pb.DataStatusMap[keyof bragi_common_pb.DataStatusMap],
    announcementsList: Array<bragi_common_pb.Announcement.AsObject>,
    matchState?: RushCricketMatchState.AsObject,
    tournament?: bragi_common_pb.Tournament.AsObject,
  }
}

export class RushCricketMatchUpdate extends jspb.Message {
  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): RushCricketMatchUpdate.Payload | undefined;
  setPayload(value?: RushCricketMatchUpdate.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushCricketMatchUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RushCricketMatchUpdate): RushCricketMatchUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushCricketMatchUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushCricketMatchUpdate;
  static deserializeBinaryFromReader(message: RushCricketMatchUpdate, reader: jspb.BinaryReader): RushCricketMatchUpdate;
}

export namespace RushCricketMatchUpdate {
  export type AsObject = {
    payload?: RushCricketMatchUpdate.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasMatchState(): boolean;
    clearMatchState(): void;
    getMatchState(): RushCricketMatchState | undefined;
    setMatchState(value?: RushCricketMatchState): void;

    hasPartialUpdates(): boolean;
    clearPartialUpdates(): void;
    getPartialUpdates(): RushCricketMatchStatePartialUpdates | undefined;
    setPartialUpdates(value?: RushCricketMatchStatePartialUpdates): void;

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
      matchState?: RushCricketMatchState.AsObject,
      partialUpdates?: RushCricketMatchStatePartialUpdates.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      MATCH_STATE = 1,
      PARTIAL_UPDATES = 2,
    }
  }
}

export class RushCricketMatchStatePartialUpdates extends jspb.Message {
  clearUpdatesList(): void;
  getUpdatesList(): Array<RushCricketMatchStatePartialUpdate>;
  setUpdatesList(value: Array<RushCricketMatchStatePartialUpdate>): void;
  addUpdates(value?: RushCricketMatchStatePartialUpdate, index?: number): RushCricketMatchStatePartialUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushCricketMatchStatePartialUpdates.AsObject;
  static toObject(includeInstance: boolean, msg: RushCricketMatchStatePartialUpdates): RushCricketMatchStatePartialUpdates.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushCricketMatchStatePartialUpdates, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushCricketMatchStatePartialUpdates;
  static deserializeBinaryFromReader(message: RushCricketMatchStatePartialUpdates, reader: jspb.BinaryReader): RushCricketMatchStatePartialUpdates;
}

export namespace RushCricketMatchStatePartialUpdates {
  export type AsObject = {
    updatesList: Array<RushCricketMatchStatePartialUpdate.AsObject>,
  }
}

export class RushCricketMatchStatePartialUpdate extends jspb.Message {
  hasScore(): boolean;
  clearScore(): void;
  getScore(): RushCricketMatchScoreState | undefined;
  setScore(value?: RushCricketMatchScoreState): void;

  hasCurrentInning(): boolean;
  clearCurrentInning(): void;
  getCurrentInning(): RushCricketCurrentInningState | undefined;
  setCurrentInning(value?: RushCricketCurrentInningState): void;

  hasCurrentInningPartialUpdate(): boolean;
  clearCurrentInningPartialUpdate(): void;
  getCurrentInningPartialUpdate(): RushCricketCurrentInningStatePartialUpdate | undefined;
  setCurrentInningPartialUpdate(value?: RushCricketCurrentInningStatePartialUpdate): void;

  hasTimeline(): boolean;
  clearTimeline(): void;
  getTimeline(): RushCricketTimelineState | undefined;
  setTimeline(value?: RushCricketTimelineState): void;

  getUpdateCase(): RushCricketMatchStatePartialUpdate.UpdateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushCricketMatchStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RushCricketMatchStatePartialUpdate): RushCricketMatchStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushCricketMatchStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushCricketMatchStatePartialUpdate;
  static deserializeBinaryFromReader(message: RushCricketMatchStatePartialUpdate, reader: jspb.BinaryReader): RushCricketMatchStatePartialUpdate;
}

export namespace RushCricketMatchStatePartialUpdate {
  export type AsObject = {
    score?: RushCricketMatchScoreState.AsObject,
    currentInning?: RushCricketCurrentInningState.AsObject,
    currentInningPartialUpdate?: RushCricketCurrentInningStatePartialUpdate.AsObject,
    timeline?: RushCricketTimelineState.AsObject,
  }

  export enum UpdateCase {
    UPDATE_NOT_SET = 0,
    SCORE = 1,
    CURRENT_INNING = 2,
    CURRENT_INNING_PARTIAL_UPDATE = 3,
    TIMELINE = 4,
  }
}

export class RushCricketMatchState extends jspb.Message {
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
  getScore(): RushCricketMatchScoreState | undefined;
  setScore(value?: RushCricketMatchScoreState): void;

  getMatchStatus(): bragi_common_pb.MatchStatusTypeMap[keyof bragi_common_pb.MatchStatusTypeMap];
  setMatchStatus(value: bragi_common_pb.MatchStatusTypeMap[keyof bragi_common_pb.MatchStatusTypeMap]): void;

  hasTimeline(): boolean;
  clearTimeline(): void;
  getTimeline(): RushCricketTimelineState | undefined;
  setTimeline(value?: RushCricketTimelineState): void;

  hasCurrentInning(): boolean;
  clearCurrentInning(): void;
  getCurrentInning(): RushCricketCurrentInningState | undefined;
  setCurrentInning(value?: RushCricketCurrentInningState): void;

  getWinTeamUrn(): string;
  setWinTeamUrn(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushCricketMatchState.AsObject;
  static toObject(includeInstance: boolean, msg: RushCricketMatchState): RushCricketMatchState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushCricketMatchState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushCricketMatchState;
  static deserializeBinaryFromReader(message: RushCricketMatchState, reader: jspb.BinaryReader): RushCricketMatchState;
}

export namespace RushCricketMatchState {
  export type AsObject = {
    matchUrn: string,
    matchType: bragi_common_pb.BestOfTypeMap[keyof bragi_common_pb.BestOfTypeMap],
    homeTeam?: bragi_common_pb.Team.AsObject,
    awayTeam?: bragi_common_pb.Team.AsObject,
    score?: RushCricketMatchScoreState.AsObject,
    matchStatus: bragi_common_pb.MatchStatusTypeMap[keyof bragi_common_pb.MatchStatusTypeMap],
    timeline?: RushCricketTimelineState.AsObject,
    currentInning?: RushCricketCurrentInningState.AsObject,
    winTeamUrn: string,
  }
}

export class RushCricketMatchScoreState extends jspb.Message {
  getHomeScore(): number;
  setHomeScore(value: number): void;

  getAwayScore(): number;
  setAwayScore(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushCricketMatchScoreState.AsObject;
  static toObject(includeInstance: boolean, msg: RushCricketMatchScoreState): RushCricketMatchScoreState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushCricketMatchScoreState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushCricketMatchScoreState;
  static deserializeBinaryFromReader(message: RushCricketMatchScoreState, reader: jspb.BinaryReader): RushCricketMatchScoreState;
}

export namespace RushCricketMatchScoreState {
  export type AsObject = {
    homeScore: number,
    awayScore: number,
  }
}

export class RushCricketCurrentMapScoreState extends jspb.Message {
  getHomeRuns(): number;
  setHomeRuns(value: number): void;

  getAwayRuns(): number;
  setAwayRuns(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushCricketCurrentMapScoreState.AsObject;
  static toObject(includeInstance: boolean, msg: RushCricketCurrentMapScoreState): RushCricketCurrentMapScoreState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushCricketCurrentMapScoreState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushCricketCurrentMapScoreState;
  static deserializeBinaryFromReader(message: RushCricketCurrentMapScoreState, reader: jspb.BinaryReader): RushCricketCurrentMapScoreState;
}

export namespace RushCricketCurrentMapScoreState {
  export type AsObject = {
    homeRuns: number,
    awayRuns: number,
  }
}

export class RushCricketTimelineState extends jspb.Message {
  clearEventsList(): void;
  getEventsList(): Array<RushCricketTimelineEvent>;
  setEventsList(value: Array<RushCricketTimelineEvent>): void;
  addEvents(value?: RushCricketTimelineEvent, index?: number): RushCricketTimelineEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushCricketTimelineState.AsObject;
  static toObject(includeInstance: boolean, msg: RushCricketTimelineState): RushCricketTimelineState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushCricketTimelineState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushCricketTimelineState;
  static deserializeBinaryFromReader(message: RushCricketTimelineState, reader: jspb.BinaryReader): RushCricketTimelineState;
}

export namespace RushCricketTimelineState {
  export type AsObject = {
    eventsList: Array<RushCricketTimelineEvent.AsObject>,
  }
}

export class RushCricketTimelineEvent extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getEventType(): RushCricketEventTypeMap[keyof RushCricketEventTypeMap];
  setEventType(value: RushCricketEventTypeMap[keyof RushCricketEventTypeMap]): void;

  hasBallState(): boolean;
  clearBallState(): void;
  getBallState(): RushCricketBallState | undefined;
  setBallState(value?: RushCricketBallState): void;

  getRuns(): number;
  setRuns(value: number): void;

  getBoundaryRun(): RushCricketBoundaryRunMap[keyof RushCricketBoundaryRunMap];
  setBoundaryRun(value: RushCricketBoundaryRunMap[keyof RushCricketBoundaryRunMap]): void;

  getBowlerError(): RushCricketBowlerErrorMap[keyof RushCricketBowlerErrorMap];
  setBowlerError(value: RushCricketBowlerErrorMap[keyof RushCricketBowlerErrorMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushCricketTimelineEvent.AsObject;
  static toObject(includeInstance: boolean, msg: RushCricketTimelineEvent): RushCricketTimelineEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushCricketTimelineEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushCricketTimelineEvent;
  static deserializeBinaryFromReader(message: RushCricketTimelineEvent, reader: jspb.BinaryReader): RushCricketTimelineEvent;
}

export namespace RushCricketTimelineEvent {
  export type AsObject = {
    teamUrn: string,
    eventType: RushCricketEventTypeMap[keyof RushCricketEventTypeMap],
    ballState?: RushCricketBallState.AsObject,
    runs: number,
    boundaryRun: RushCricketBoundaryRunMap[keyof RushCricketBoundaryRunMap],
    bowlerError: RushCricketBowlerErrorMap[keyof RushCricketBowlerErrorMap],
  }
}

export class RushCricketCurrentInningStatePartialUpdate extends jspb.Message {
  hasOver(): boolean;
  clearOver(): void;
  getOver(): number;
  setOver(value: number): void;

  hasBall(): boolean;
  clearBall(): void;
  getBall(): number;
  setBall(value: number): void;

  hasRuns(): boolean;
  clearRuns(): void;
  getRuns(): number;
  setRuns(value: number): void;

  hasOversPlayed(): boolean;
  clearOversPlayed(): void;
  getOversPlayed(): number;
  setOversPlayed(value: number): void;

  hasTarget(): boolean;
  clearTarget(): void;
  getTarget(): RushCricketTarget | undefined;
  setTarget(value?: RushCricketTarget): void;

  hasTeamCurrentInningPartialUpdate(): boolean;
  clearTeamCurrentInningPartialUpdate(): void;
  getTeamCurrentInningPartialUpdate(): RushCricketTeamCurrentInningStatePartialUpdate | undefined;
  setTeamCurrentInningPartialUpdate(value?: RushCricketTeamCurrentInningStatePartialUpdate): void;

  getUpdateCase(): RushCricketCurrentInningStatePartialUpdate.UpdateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushCricketCurrentInningStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RushCricketCurrentInningStatePartialUpdate): RushCricketCurrentInningStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushCricketCurrentInningStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushCricketCurrentInningStatePartialUpdate;
  static deserializeBinaryFromReader(message: RushCricketCurrentInningStatePartialUpdate, reader: jspb.BinaryReader): RushCricketCurrentInningStatePartialUpdate;
}

export namespace RushCricketCurrentInningStatePartialUpdate {
  export type AsObject = {
    over: number,
    ball: number,
    runs: number,
    oversPlayed: number,
    target?: RushCricketTarget.AsObject,
    teamCurrentInningPartialUpdate?: RushCricketTeamCurrentInningStatePartialUpdate.AsObject,
  }

  export enum UpdateCase {
    UPDATE_NOT_SET = 0,
    OVER = 1,
    BALL = 2,
    RUNS = 3,
    OVERS_PLAYED = 4,
    TARGET = 5,
    TEAM_CURRENT_INNING_PARTIAL_UPDATE = 6,
  }
}

export class RushCricketTeamCurrentInningStatePartialUpdate extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): RushCricketTeamCurrentInningStatePartialUpdate.Payload | undefined;
  setPayload(value?: RushCricketTeamCurrentInningStatePartialUpdate.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushCricketTeamCurrentInningStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RushCricketTeamCurrentInningStatePartialUpdate): RushCricketTeamCurrentInningStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushCricketTeamCurrentInningStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushCricketTeamCurrentInningStatePartialUpdate;
  static deserializeBinaryFromReader(message: RushCricketTeamCurrentInningStatePartialUpdate, reader: jspb.BinaryReader): RushCricketTeamCurrentInningStatePartialUpdate;
}

export namespace RushCricketTeamCurrentInningStatePartialUpdate {
  export type AsObject = {
    teamUrn: string,
    payload?: RushCricketTeamCurrentInningStatePartialUpdate.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasTeamCurrentInningState(): boolean;
    clearTeamCurrentInningState(): void;
    getTeamCurrentInningState(): RushCricketTeamCurrentInningState | undefined;
    setTeamCurrentInningState(value?: RushCricketTeamCurrentInningState): void;

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
      teamCurrentInningState?: RushCricketTeamCurrentInningState.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      TEAM_CURRENT_INNING_STATE = 1,
    }
  }
}

export class RushCricketPlayerCurrentMapState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getExtName(): string;
  setExtName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushCricketPlayerCurrentMapState.AsObject;
  static toObject(includeInstance: boolean, msg: RushCricketPlayerCurrentMapState): RushCricketPlayerCurrentMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushCricketPlayerCurrentMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushCricketPlayerCurrentMapState;
  static deserializeBinaryFromReader(message: RushCricketPlayerCurrentMapState, reader: jspb.BinaryReader): RushCricketPlayerCurrentMapState;
}

export namespace RushCricketPlayerCurrentMapState {
  export type AsObject = {
    playerUrn: string,
    extName: string,
  }
}

export class RushCricketBallState extends jspb.Message {
  getInning(): number;
  setInning(value: number): void;

  getOver(): number;
  setOver(value: number): void;

  getBall(): number;
  setBall(value: number): void;

  getIsExtra(): boolean;
  setIsExtra(value: boolean): void;

  getBallOrderWithinInning(): number;
  setBallOrderWithinInning(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushCricketBallState.AsObject;
  static toObject(includeInstance: boolean, msg: RushCricketBallState): RushCricketBallState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushCricketBallState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushCricketBallState;
  static deserializeBinaryFromReader(message: RushCricketBallState, reader: jspb.BinaryReader): RushCricketBallState;
}

export namespace RushCricketBallState {
  export type AsObject = {
    inning: number,
    over: number,
    ball: number,
    isExtra: boolean,
    ballOrderWithinInning: number,
  }
}

export class RushCricketCurrentInningState extends jspb.Message {
  getNumber(): number;
  setNumber(value: number): void;

  getOver(): number;
  setOver(value: number): void;

  getBall(): number;
  setBall(value: number): void;

  getBattingTeamUrn(): string;
  setBattingTeamUrn(value: string): void;

  getRuns(): number;
  setRuns(value: number): void;

  getOversPlayed(): number;
  setOversPlayed(value: number): void;

  getGamePaused(): boolean;
  setGamePaused(value: boolean): void;

  getTeamsMap(): jspb.Map<string, RushCricketTeamCurrentInningState>;
  clearTeamsMap(): void;
  hasTarget(): boolean;
  clearTarget(): void;
  getTarget(): RushCricketTarget | undefined;
  setTarget(value?: RushCricketTarget): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushCricketCurrentInningState.AsObject;
  static toObject(includeInstance: boolean, msg: RushCricketCurrentInningState): RushCricketCurrentInningState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushCricketCurrentInningState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushCricketCurrentInningState;
  static deserializeBinaryFromReader(message: RushCricketCurrentInningState, reader: jspb.BinaryReader): RushCricketCurrentInningState;
}

export namespace RushCricketCurrentInningState {
  export type AsObject = {
    number: number,
    over: number,
    ball: number,
    battingTeamUrn: string,
    runs: number,
    oversPlayed: number,
    gamePaused: boolean,
    teamsMap: Array<[string, RushCricketTeamCurrentInningState.AsObject]>,
    target?: RushCricketTarget.AsObject,
  }
}

export class RushCricketTarget extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getRuns(): number;
  setRuns(value: number): void;

  getOvers(): number;
  setOvers(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushCricketTarget.AsObject;
  static toObject(includeInstance: boolean, msg: RushCricketTarget): RushCricketTarget.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushCricketTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushCricketTarget;
  static deserializeBinaryFromReader(message: RushCricketTarget, reader: jspb.BinaryReader): RushCricketTarget;
}

export namespace RushCricketTarget {
  export type AsObject = {
    teamUrn: string,
    runs: number,
    overs: number,
  }
}

export class RushCricketTeamCurrentInningState extends jspb.Message {
  getRuns(): number;
  setRuns(value: number): void;

  getWickets(): number;
  setWickets(value: number): void;

  getBoundariesFour(): number;
  setBoundariesFour(value: number): void;

  getBoundariesSix(): number;
  setBoundariesSix(value: number): void;

  getWideBalls(): number;
  setWideBalls(value: number): void;

  getNoBalls(): number;
  setNoBalls(value: number): void;

  getOversPlayed(): number;
  setOversPlayed(value: number): void;

  hasPlayer(): boolean;
  clearPlayer(): void;
  getPlayer(): RushCricketPlayerCurrentMapState | undefined;
  setPlayer(value?: RushCricketPlayerCurrentMapState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushCricketTeamCurrentInningState.AsObject;
  static toObject(includeInstance: boolean, msg: RushCricketTeamCurrentInningState): RushCricketTeamCurrentInningState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushCricketTeamCurrentInningState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushCricketTeamCurrentInningState;
  static deserializeBinaryFromReader(message: RushCricketTeamCurrentInningState, reader: jspb.BinaryReader): RushCricketTeamCurrentInningState;
}

export namespace RushCricketTeamCurrentInningState {
  export type AsObject = {
    runs: number,
    wickets: number,
    boundariesFour: number,
    boundariesSix: number,
    wideBalls: number,
    noBalls: number,
    oversPlayed: number,
    player?: RushCricketPlayerCurrentMapState.AsObject,
  }
}

export interface RushCricketEventTypeMap {
  RUSH_CRICKET_EVENT_TYPE_UNSPECIFIED: 0;
  RUSH_CRICKET_EVENT_TYPE_BOUNDARY_FOUR: 1;
  RUSH_CRICKET_EVENT_TYPE_BOUNDARY_SIX: 2;
  RUSH_CRICKET_EVENT_TYPE_WIDE_BALL: 3;
  RUSH_CRICKET_EVENT_TYPE_NO_BALL: 4;
  RUSH_CRICKET_EVENT_TYPE_WICKET: 5;
  RUSH_CRICKET_EVENT_TYPE_PERIOD_CHANGE: 6;
}

export const RushCricketEventType: RushCricketEventTypeMap;

export interface RushCricketPeriodMap {
  RUSH_CRICKET_PERIOD_UNSPECIFIED: 0;
  RUSH_CRICKET_PERIOD_FIRST: 1;
  RUSH_CRICKET_PERIOD_SECOND: 2;
}

export const RushCricketPeriod: RushCricketPeriodMap;

export interface RushCricketBoundaryRunMap {
  RUSH_CRICKET_BOUNDARY_RUN_UNSPECIFIED: 0;
  RUSH_CRICKET_BOUNDARY_RUN_FOUR: 1;
  RUSH_CRICKET_BOUNDARY_RUN_SIX: 2;
}

export const RushCricketBoundaryRun: RushCricketBoundaryRunMap;

export interface RushCricketBowlerErrorMap {
  RUSH_CRICKET_BOWLER_ERROR_UNSPECIFIED: 0;
  RUSH_CRICKET_BOWLER_ERROR_NO_BALL: 1;
  RUSH_CRICKET_BOWLER_ERROR_WIDE: 2;
}

export const RushCricketBowlerError: RushCricketBowlerErrorMap;

