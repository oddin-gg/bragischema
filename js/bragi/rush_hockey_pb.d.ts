// package: bragi
// file: bragi/rush_hockey.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as bragi_common_pb from "../bragi/common_pb";

export class RushHockeyMatchMessage extends jspb.Message {
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
  getPayload(): RushHockeyMatchMessage.Payload | undefined;
  setPayload(value?: RushHockeyMatchMessage.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushHockeyMatchMessage.AsObject;
  static toObject(includeInstance: boolean, msg: RushHockeyMatchMessage): RushHockeyMatchMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushHockeyMatchMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushHockeyMatchMessage;
  static deserializeBinaryFromReader(message: RushHockeyMatchMessage, reader: jspb.BinaryReader): RushHockeyMatchMessage;
}

export namespace RushHockeyMatchMessage {
  export type AsObject = {
    matchUrn: string,
    sequence: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dataStatus: bragi_common_pb.DataStatusMap[keyof bragi_common_pb.DataStatusMap],
    payload?: RushHockeyMatchMessage.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasSnapshot(): boolean;
    clearSnapshot(): void;
    getSnapshot(): RushHockeyMatchSnapshot | undefined;
    setSnapshot(value?: RushHockeyMatchSnapshot): void;

    hasUpdate(): boolean;
    clearUpdate(): void;
    getUpdate(): RushHockeyMatchUpdate | undefined;
    setUpdate(value?: RushHockeyMatchUpdate): void;

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
      snapshot?: RushHockeyMatchSnapshot.AsObject,
      update?: RushHockeyMatchUpdate.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      SNAPSHOT = 1,
      UPDATE = 2,
    }
  }
}

export class RushHockeyMatchSnapshot extends jspb.Message {
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
  getMatchState(): RushHockeyMatchState | undefined;
  setMatchState(value?: RushHockeyMatchState): void;

  hasTournament(): boolean;
  clearTournament(): void;
  getTournament(): bragi_common_pb.Tournament | undefined;
  setTournament(value?: bragi_common_pb.Tournament): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushHockeyMatchSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: RushHockeyMatchSnapshot): RushHockeyMatchSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushHockeyMatchSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushHockeyMatchSnapshot;
  static deserializeBinaryFromReader(message: RushHockeyMatchSnapshot, reader: jspb.BinaryReader): RushHockeyMatchSnapshot;
}

export namespace RushHockeyMatchSnapshot {
  export type AsObject = {
    matchUrn: string,
    sequence: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dataStatus: bragi_common_pb.DataStatusMap[keyof bragi_common_pb.DataStatusMap],
    announcementsList: Array<bragi_common_pb.Announcement.AsObject>,
    matchState?: RushHockeyMatchState.AsObject,
    tournament?: bragi_common_pb.Tournament.AsObject,
  }
}

export class RushHockeyMatchUpdate extends jspb.Message {
  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): RushHockeyMatchUpdate.Payload | undefined;
  setPayload(value?: RushHockeyMatchUpdate.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushHockeyMatchUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RushHockeyMatchUpdate): RushHockeyMatchUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushHockeyMatchUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushHockeyMatchUpdate;
  static deserializeBinaryFromReader(message: RushHockeyMatchUpdate, reader: jspb.BinaryReader): RushHockeyMatchUpdate;
}

export namespace RushHockeyMatchUpdate {
  export type AsObject = {
    payload?: RushHockeyMatchUpdate.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasMatchState(): boolean;
    clearMatchState(): void;
    getMatchState(): RushHockeyMatchState | undefined;
    setMatchState(value?: RushHockeyMatchState): void;

    hasPartialUpdates(): boolean;
    clearPartialUpdates(): void;
    getPartialUpdates(): RushHockeyMatchStatePartialUpdates | undefined;
    setPartialUpdates(value?: RushHockeyMatchStatePartialUpdates): void;

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
      matchState?: RushHockeyMatchState.AsObject,
      partialUpdates?: RushHockeyMatchStatePartialUpdates.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      MATCH_STATE = 1,
      PARTIAL_UPDATES = 2,
    }
  }
}

export class RushHockeyMatchStatePartialUpdates extends jspb.Message {
  clearUpdatesList(): void;
  getUpdatesList(): Array<RushHockeyMatchStatePartialUpdate>;
  setUpdatesList(value: Array<RushHockeyMatchStatePartialUpdate>): void;
  addUpdates(value?: RushHockeyMatchStatePartialUpdate, index?: number): RushHockeyMatchStatePartialUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushHockeyMatchStatePartialUpdates.AsObject;
  static toObject(includeInstance: boolean, msg: RushHockeyMatchStatePartialUpdates): RushHockeyMatchStatePartialUpdates.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushHockeyMatchStatePartialUpdates, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushHockeyMatchStatePartialUpdates;
  static deserializeBinaryFromReader(message: RushHockeyMatchStatePartialUpdates, reader: jspb.BinaryReader): RushHockeyMatchStatePartialUpdates;
}

export namespace RushHockeyMatchStatePartialUpdates {
  export type AsObject = {
    updatesList: Array<RushHockeyMatchStatePartialUpdate.AsObject>,
  }
}

export class RushHockeyMatchStatePartialUpdate extends jspb.Message {
  hasCurrentGameState(): boolean;
  clearCurrentGameState(): void;
  getCurrentGameState(): RushHockeyCurrentGameState | undefined;
  setCurrentGameState(value?: RushHockeyCurrentGameState): void;

  hasCurrentGameStatePartialUpdate(): boolean;
  clearCurrentGameStatePartialUpdate(): void;
  getCurrentGameStatePartialUpdate(): RushHockeyCurrentGameStatePartialUpdate | undefined;
  setCurrentGameStatePartialUpdate(value?: RushHockeyCurrentGameStatePartialUpdate): void;

  hasTimeline(): boolean;
  clearTimeline(): void;
  getTimeline(): RushHockeyTimelineState | undefined;
  setTimeline(value?: RushHockeyTimelineState): void;

  getUpdateCase(): RushHockeyMatchStatePartialUpdate.UpdateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushHockeyMatchStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RushHockeyMatchStatePartialUpdate): RushHockeyMatchStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushHockeyMatchStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushHockeyMatchStatePartialUpdate;
  static deserializeBinaryFromReader(message: RushHockeyMatchStatePartialUpdate, reader: jspb.BinaryReader): RushHockeyMatchStatePartialUpdate;
}

export namespace RushHockeyMatchStatePartialUpdate {
  export type AsObject = {
    currentGameState?: RushHockeyCurrentGameState.AsObject,
    currentGameStatePartialUpdate?: RushHockeyCurrentGameStatePartialUpdate.AsObject,
    timeline?: RushHockeyTimelineState.AsObject,
  }

  export enum UpdateCase {
    UPDATE_NOT_SET = 0,
    CURRENT_GAME_STATE = 1,
    CURRENT_GAME_STATE_PARTIAL_UPDATE = 2,
    TIMELINE = 3,
  }
}

export class RushHockeyMatchState extends jspb.Message {
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
  getTimeline(): RushHockeyTimelineState | undefined;
  setTimeline(value?: RushHockeyTimelineState): void;

  hasCurrentGame(): boolean;
  clearCurrentGame(): void;
  getCurrentGame(): RushHockeyCurrentGameState | undefined;
  setCurrentGame(value?: RushHockeyCurrentGameState): void;

  hasRegulation(): boolean;
  clearRegulation(): void;
  getRegulation(): RushHockeyRegulation | undefined;
  setRegulation(value?: RushHockeyRegulation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushHockeyMatchState.AsObject;
  static toObject(includeInstance: boolean, msg: RushHockeyMatchState): RushHockeyMatchState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushHockeyMatchState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushHockeyMatchState;
  static deserializeBinaryFromReader(message: RushHockeyMatchState, reader: jspb.BinaryReader): RushHockeyMatchState;
}

export namespace RushHockeyMatchState {
  export type AsObject = {
    matchUrn: string,
    matchType: bragi_common_pb.BestOfTypeMap[keyof bragi_common_pb.BestOfTypeMap],
    homeTeam?: bragi_common_pb.Team.AsObject,
    awayTeam?: bragi_common_pb.Team.AsObject,
    matchStatus: bragi_common_pb.MatchStatusTypeMap[keyof bragi_common_pb.MatchStatusTypeMap],
    timeline?: RushHockeyTimelineState.AsObject,
    currentGame?: RushHockeyCurrentGameState.AsObject,
    regulation?: RushHockeyRegulation.AsObject,
  }
}

export class RushHockeyRegulation extends jspb.Message {
  hasPeriodLength(): boolean;
  clearPeriodLength(): void;
  getPeriodLength(): google_protobuf_duration_pb.Duration | undefined;
  setPeriodLength(value?: google_protobuf_duration_pb.Duration): void;

  getPeriods(): number;
  setPeriods(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushHockeyRegulation.AsObject;
  static toObject(includeInstance: boolean, msg: RushHockeyRegulation): RushHockeyRegulation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushHockeyRegulation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushHockeyRegulation;
  static deserializeBinaryFromReader(message: RushHockeyRegulation, reader: jspb.BinaryReader): RushHockeyRegulation;
}

export namespace RushHockeyRegulation {
  export type AsObject = {
    periodLength?: google_protobuf_duration_pb.Duration.AsObject,
    periods: number,
  }
}

export class RushHockeyCurrentGameStatePartialUpdate extends jspb.Message {
  hasGameTime(): boolean;
  clearGameTime(): void;
  getGameTime(): RushHockeyCurrentGameTimeState | undefined;
  setGameTime(value?: RushHockeyCurrentGameTimeState): void;

  hasScore(): boolean;
  clearScore(): void;
  getScore(): RushHockeyCurrentGameScoreState | undefined;
  setScore(value?: RushHockeyCurrentGameScoreState): void;

  hasTeamCurrentGameState(): boolean;
  clearTeamCurrentGameState(): void;
  getTeamCurrentGameState(): RushHockeyTeamCurrentGameState | undefined;
  setTeamCurrentGameState(value?: RushHockeyTeamCurrentGameState): void;

  hasTeamCurrentGamePartialUpdate(): boolean;
  clearTeamCurrentGamePartialUpdate(): void;
  getTeamCurrentGamePartialUpdate(): RushHockeyTeamCurrentGameStatePartialUpdate | undefined;
  setTeamCurrentGamePartialUpdate(value?: RushHockeyTeamCurrentGameStatePartialUpdate): void;

  hasPuckPossession(): boolean;
  clearPuckPossession(): void;
  getPuckPossession(): RushHockeyPossessionSideMap[keyof RushHockeyPossessionSideMap];
  setPuckPossession(value: RushHockeyPossessionSideMap[keyof RushHockeyPossessionSideMap]): void;

  hasManpower(): boolean;
  clearManpower(): void;
  getManpower(): RushHockeyManpowerMap[keyof RushHockeyManpowerMap];
  setManpower(value: RushHockeyManpowerMap[keyof RushHockeyManpowerMap]): void;

  hasActivePenalties(): boolean;
  clearActivePenalties(): void;
  getActivePenalties(): RushHockeyActivePenaltiesState | undefined;
  setActivePenalties(value?: RushHockeyActivePenaltiesState): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): RushHockeyPeriodMap[keyof RushHockeyPeriodMap];
  setPeriod(value: RushHockeyPeriodMap[keyof RushHockeyPeriodMap]): void;

  hasIntermission(): boolean;
  clearIntermission(): void;
  getIntermission(): boolean;
  setIntermission(value: boolean): void;

  getUpdateCase(): RushHockeyCurrentGameStatePartialUpdate.UpdateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushHockeyCurrentGameStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RushHockeyCurrentGameStatePartialUpdate): RushHockeyCurrentGameStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushHockeyCurrentGameStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushHockeyCurrentGameStatePartialUpdate;
  static deserializeBinaryFromReader(message: RushHockeyCurrentGameStatePartialUpdate, reader: jspb.BinaryReader): RushHockeyCurrentGameStatePartialUpdate;
}

export namespace RushHockeyCurrentGameStatePartialUpdate {
  export type AsObject = {
    gameTime?: RushHockeyCurrentGameTimeState.AsObject,
    score?: RushHockeyCurrentGameScoreState.AsObject,
    teamCurrentGameState?: RushHockeyTeamCurrentGameState.AsObject,
    teamCurrentGamePartialUpdate?: RushHockeyTeamCurrentGameStatePartialUpdate.AsObject,
    puckPossession: RushHockeyPossessionSideMap[keyof RushHockeyPossessionSideMap],
    manpower: RushHockeyManpowerMap[keyof RushHockeyManpowerMap],
    activePenalties?: RushHockeyActivePenaltiesState.AsObject,
    period: RushHockeyPeriodMap[keyof RushHockeyPeriodMap],
    intermission: boolean,
  }

  export enum UpdateCase {
    UPDATE_NOT_SET = 0,
    GAME_TIME = 1,
    SCORE = 2,
    TEAM_CURRENT_GAME_STATE = 3,
    TEAM_CURRENT_GAME_PARTIAL_UPDATE = 4,
    PUCK_POSSESSION = 5,
    MANPOWER = 6,
    ACTIVE_PENALTIES = 7,
    PERIOD = 8,
    INTERMISSION = 9,
  }
}

export class RushHockeyCurrentGameState extends jspb.Message {
  getPeriod(): RushHockeyPeriodMap[keyof RushHockeyPeriodMap];
  setPeriod(value: RushHockeyPeriodMap[keyof RushHockeyPeriodMap]): void;

  getIntermission(): boolean;
  setIntermission(value: boolean): void;

  hasGameTime(): boolean;
  clearGameTime(): void;
  getGameTime(): RushHockeyCurrentGameTimeState | undefined;
  setGameTime(value?: RushHockeyCurrentGameTimeState): void;

  hasScore(): boolean;
  clearScore(): void;
  getScore(): RushHockeyCurrentGameScoreState | undefined;
  setScore(value?: RushHockeyCurrentGameScoreState): void;

  getGamePaused(): boolean;
  setGamePaused(value: boolean): void;

  getTeamsMap(): jspb.Map<string, RushHockeyTeamCurrentGameState>;
  clearTeamsMap(): void;
  getPuckPossession(): RushHockeyPossessionSideMap[keyof RushHockeyPossessionSideMap];
  setPuckPossession(value: RushHockeyPossessionSideMap[keyof RushHockeyPossessionSideMap]): void;

  getManpower(): RushHockeyManpowerMap[keyof RushHockeyManpowerMap];
  setManpower(value: RushHockeyManpowerMap[keyof RushHockeyManpowerMap]): void;

  hasActivePenalties(): boolean;
  clearActivePenalties(): void;
  getActivePenalties(): RushHockeyActivePenaltiesState | undefined;
  setActivePenalties(value?: RushHockeyActivePenaltiesState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushHockeyCurrentGameState.AsObject;
  static toObject(includeInstance: boolean, msg: RushHockeyCurrentGameState): RushHockeyCurrentGameState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushHockeyCurrentGameState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushHockeyCurrentGameState;
  static deserializeBinaryFromReader(message: RushHockeyCurrentGameState, reader: jspb.BinaryReader): RushHockeyCurrentGameState;
}

export namespace RushHockeyCurrentGameState {
  export type AsObject = {
    period: RushHockeyPeriodMap[keyof RushHockeyPeriodMap],
    intermission: boolean,
    gameTime?: RushHockeyCurrentGameTimeState.AsObject,
    score?: RushHockeyCurrentGameScoreState.AsObject,
    gamePaused: boolean,
    teamsMap: Array<[string, RushHockeyTeamCurrentGameState.AsObject]>,
    puckPossession: RushHockeyPossessionSideMap[keyof RushHockeyPossessionSideMap],
    manpower: RushHockeyManpowerMap[keyof RushHockeyManpowerMap],
    activePenalties?: RushHockeyActivePenaltiesState.AsObject,
  }
}

export class RushHockeyCurrentGameTimeState extends jspb.Message {
  hasElapsedTime(): boolean;
  clearElapsedTime(): void;
  getElapsedTime(): google_protobuf_duration_pb.Duration | undefined;
  setElapsedTime(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushHockeyCurrentGameTimeState.AsObject;
  static toObject(includeInstance: boolean, msg: RushHockeyCurrentGameTimeState): RushHockeyCurrentGameTimeState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushHockeyCurrentGameTimeState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushHockeyCurrentGameTimeState;
  static deserializeBinaryFromReader(message: RushHockeyCurrentGameTimeState, reader: jspb.BinaryReader): RushHockeyCurrentGameTimeState;
}

export namespace RushHockeyCurrentGameTimeState {
  export type AsObject = {
    elapsedTime?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class RushHockeyCurrentGameScoreState extends jspb.Message {
  getHomeScore(): number;
  setHomeScore(value: number): void;

  getAwayScore(): number;
  setAwayScore(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushHockeyCurrentGameScoreState.AsObject;
  static toObject(includeInstance: boolean, msg: RushHockeyCurrentGameScoreState): RushHockeyCurrentGameScoreState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushHockeyCurrentGameScoreState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushHockeyCurrentGameScoreState;
  static deserializeBinaryFromReader(message: RushHockeyCurrentGameScoreState, reader: jspb.BinaryReader): RushHockeyCurrentGameScoreState;
}

export namespace RushHockeyCurrentGameScoreState {
  export type AsObject = {
    homeScore: number,
    awayScore: number,
  }
}

export class RushHockeyActivePenaltiesState extends jspb.Message {
  clearPenaltiesList(): void;
  getPenaltiesList(): Array<RushHockeyActivePenalty>;
  setPenaltiesList(value: Array<RushHockeyActivePenalty>): void;
  addPenalties(value?: RushHockeyActivePenalty, index?: number): RushHockeyActivePenalty;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushHockeyActivePenaltiesState.AsObject;
  static toObject(includeInstance: boolean, msg: RushHockeyActivePenaltiesState): RushHockeyActivePenaltiesState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushHockeyActivePenaltiesState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushHockeyActivePenaltiesState;
  static deserializeBinaryFromReader(message: RushHockeyActivePenaltiesState, reader: jspb.BinaryReader): RushHockeyActivePenaltiesState;
}

export namespace RushHockeyActivePenaltiesState {
  export type AsObject = {
    penaltiesList: Array<RushHockeyActivePenalty.AsObject>,
  }
}

export class RushHockeyActivePenalty extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getType(): RushHockeyPenaltyTypeMap[keyof RushHockeyPenaltyTypeMap];
  setType(value: RushHockeyPenaltyTypeMap[keyof RushHockeyPenaltyTypeMap]): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_duration_pb.Duration | undefined;
  setStartTime(value?: google_protobuf_duration_pb.Duration): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_duration_pb.Duration | undefined;
  setEndTime(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushHockeyActivePenalty.AsObject;
  static toObject(includeInstance: boolean, msg: RushHockeyActivePenalty): RushHockeyActivePenalty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushHockeyActivePenalty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushHockeyActivePenalty;
  static deserializeBinaryFromReader(message: RushHockeyActivePenalty, reader: jspb.BinaryReader): RushHockeyActivePenalty;
}

export namespace RushHockeyActivePenalty {
  export type AsObject = {
    teamUrn: string,
    type: RushHockeyPenaltyTypeMap[keyof RushHockeyPenaltyTypeMap],
    startTime?: google_protobuf_duration_pb.Duration.AsObject,
    endTime?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class RushHockeyTeamCurrentGameStatePartialUpdate extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): RushHockeyTeamCurrentGameStatePartialUpdate.Payload | undefined;
  setPayload(value?: RushHockeyTeamCurrentGameStatePartialUpdate.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushHockeyTeamCurrentGameStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RushHockeyTeamCurrentGameStatePartialUpdate): RushHockeyTeamCurrentGameStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushHockeyTeamCurrentGameStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushHockeyTeamCurrentGameStatePartialUpdate;
  static deserializeBinaryFromReader(message: RushHockeyTeamCurrentGameStatePartialUpdate, reader: jspb.BinaryReader): RushHockeyTeamCurrentGameStatePartialUpdate;
}

export namespace RushHockeyTeamCurrentGameStatePartialUpdate {
  export type AsObject = {
    teamUrn: string,
    payload?: RushHockeyTeamCurrentGameStatePartialUpdate.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasGameStatistics(): boolean;
    clearGameStatistics(): void;
    getGameStatistics(): RushHockeyTeamCurrentGameStatisticsState | undefined;
    setGameStatistics(value?: RushHockeyTeamCurrentGameStatisticsState): void;

    hasPlayer(): boolean;
    clearPlayer(): void;
    getPlayer(): RushHockeyPlayerCurrentGameState | undefined;
    setPlayer(value?: RushHockeyPlayerCurrentGameState): void;

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
      gameStatistics?: RushHockeyTeamCurrentGameStatisticsState.AsObject,
      player?: RushHockeyPlayerCurrentGameState.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      GAME_STATISTICS = 1,
      PLAYER = 2,
    }
  }
}

export class RushHockeyTeamCurrentGameState extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  hasGameStatistics(): boolean;
  clearGameStatistics(): void;
  getGameStatistics(): RushHockeyTeamCurrentGameStatisticsState | undefined;
  setGameStatistics(value?: RushHockeyTeamCurrentGameStatisticsState): void;

  hasPlayer(): boolean;
  clearPlayer(): void;
  getPlayer(): RushHockeyPlayerCurrentGameState | undefined;
  setPlayer(value?: RushHockeyPlayerCurrentGameState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushHockeyTeamCurrentGameState.AsObject;
  static toObject(includeInstance: boolean, msg: RushHockeyTeamCurrentGameState): RushHockeyTeamCurrentGameState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushHockeyTeamCurrentGameState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushHockeyTeamCurrentGameState;
  static deserializeBinaryFromReader(message: RushHockeyTeamCurrentGameState, reader: jspb.BinaryReader): RushHockeyTeamCurrentGameState;
}

export namespace RushHockeyTeamCurrentGameState {
  export type AsObject = {
    teamUrn: string,
    gameStatistics?: RushHockeyTeamCurrentGameStatisticsState.AsObject,
    player?: RushHockeyPlayerCurrentGameState.AsObject,
  }
}

export class RushHockeyPlayerCurrentGameState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getExtName(): string;
  setExtName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushHockeyPlayerCurrentGameState.AsObject;
  static toObject(includeInstance: boolean, msg: RushHockeyPlayerCurrentGameState): RushHockeyPlayerCurrentGameState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushHockeyPlayerCurrentGameState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushHockeyPlayerCurrentGameState;
  static deserializeBinaryFromReader(message: RushHockeyPlayerCurrentGameState, reader: jspb.BinaryReader): RushHockeyPlayerCurrentGameState;
}

export namespace RushHockeyPlayerCurrentGameState {
  export type AsObject = {
    playerUrn: string,
    extName: string,
  }
}

export class RushHockeyTeamCurrentGameStatisticsState extends jspb.Message {
  hasTotal(): boolean;
  clearTotal(): void;
  getTotal(): RushHockeyTeamStatisticsValues | undefined;
  setTotal(value?: RushHockeyTeamStatisticsValues): void;

  clearPeriodsList(): void;
  getPeriodsList(): Array<RushHockeyPeriodStatistics>;
  setPeriodsList(value: Array<RushHockeyPeriodStatistics>): void;
  addPeriods(value?: RushHockeyPeriodStatistics, index?: number): RushHockeyPeriodStatistics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushHockeyTeamCurrentGameStatisticsState.AsObject;
  static toObject(includeInstance: boolean, msg: RushHockeyTeamCurrentGameStatisticsState): RushHockeyTeamCurrentGameStatisticsState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushHockeyTeamCurrentGameStatisticsState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushHockeyTeamCurrentGameStatisticsState;
  static deserializeBinaryFromReader(message: RushHockeyTeamCurrentGameStatisticsState, reader: jspb.BinaryReader): RushHockeyTeamCurrentGameStatisticsState;
}

export namespace RushHockeyTeamCurrentGameStatisticsState {
  export type AsObject = {
    total?: RushHockeyTeamStatisticsValues.AsObject,
    periodsList: Array<RushHockeyPeriodStatistics.AsObject>,
  }
}

export class RushHockeyPeriodStatistics extends jspb.Message {
  getPeriod(): RushHockeyPeriodMap[keyof RushHockeyPeriodMap];
  setPeriod(value: RushHockeyPeriodMap[keyof RushHockeyPeriodMap]): void;

  hasValues(): boolean;
  clearValues(): void;
  getValues(): RushHockeyTeamStatisticsValues | undefined;
  setValues(value?: RushHockeyTeamStatisticsValues): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushHockeyPeriodStatistics.AsObject;
  static toObject(includeInstance: boolean, msg: RushHockeyPeriodStatistics): RushHockeyPeriodStatistics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushHockeyPeriodStatistics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushHockeyPeriodStatistics;
  static deserializeBinaryFromReader(message: RushHockeyPeriodStatistics, reader: jspb.BinaryReader): RushHockeyPeriodStatistics;
}

export namespace RushHockeyPeriodStatistics {
  export type AsObject = {
    period: RushHockeyPeriodMap[keyof RushHockeyPeriodMap],
    values?: RushHockeyTeamStatisticsValues.AsObject,
  }
}

export class RushHockeyTeamStatisticsValues extends jspb.Message {
  getGoals(): number;
  setGoals(value: number): void;

  getShotsOnGoal(): number;
  setShotsOnGoal(value: number): void;

  getPenalties(): number;
  setPenalties(value: number): void;

  getPenaltyMinutes(): number;
  setPenaltyMinutes(value: number): void;

  getPowerPlays(): number;
  setPowerPlays(value: number): void;

  getPowerPlayGoals(): number;
  setPowerPlayGoals(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushHockeyTeamStatisticsValues.AsObject;
  static toObject(includeInstance: boolean, msg: RushHockeyTeamStatisticsValues): RushHockeyTeamStatisticsValues.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushHockeyTeamStatisticsValues, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushHockeyTeamStatisticsValues;
  static deserializeBinaryFromReader(message: RushHockeyTeamStatisticsValues, reader: jspb.BinaryReader): RushHockeyTeamStatisticsValues;
}

export namespace RushHockeyTeamStatisticsValues {
  export type AsObject = {
    goals: number,
    shotsOnGoal: number,
    penalties: number,
    penaltyMinutes: number,
    powerPlays: number,
    powerPlayGoals: number,
  }
}

export class RushHockeyTimelineState extends jspb.Message {
  clearEventsList(): void;
  getEventsList(): Array<RushHockeyTimelineEvent>;
  setEventsList(value: Array<RushHockeyTimelineEvent>): void;
  addEvents(value?: RushHockeyTimelineEvent, index?: number): RushHockeyTimelineEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushHockeyTimelineState.AsObject;
  static toObject(includeInstance: boolean, msg: RushHockeyTimelineState): RushHockeyTimelineState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushHockeyTimelineState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushHockeyTimelineState;
  static deserializeBinaryFromReader(message: RushHockeyTimelineState, reader: jspb.BinaryReader): RushHockeyTimelineState;
}

export namespace RushHockeyTimelineState {
  export type AsObject = {
    eventsList: Array<RushHockeyTimelineEvent.AsObject>,
  }
}

export class RushHockeyTimelineEvent extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getEventType(): RushHockeyEventTypeMap[keyof RushHockeyEventTypeMap];
  setEventType(value: RushHockeyEventTypeMap[keyof RushHockeyEventTypeMap]): void;

  hasElapsedTime(): boolean;
  clearElapsedTime(): void;
  getElapsedTime(): google_protobuf_duration_pb.Duration | undefined;
  setElapsedTime(value?: google_protobuf_duration_pb.Duration): void;

  getPeriod(): RushHockeyPeriodMap[keyof RushHockeyPeriodMap];
  setPeriod(value: RushHockeyPeriodMap[keyof RushHockeyPeriodMap]): void;

  hasPenalty(): boolean;
  clearPenalty(): void;
  getPenalty(): RushHockeyPenalty | undefined;
  setPenalty(value?: RushHockeyPenalty): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushHockeyTimelineEvent.AsObject;
  static toObject(includeInstance: boolean, msg: RushHockeyTimelineEvent): RushHockeyTimelineEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushHockeyTimelineEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushHockeyTimelineEvent;
  static deserializeBinaryFromReader(message: RushHockeyTimelineEvent, reader: jspb.BinaryReader): RushHockeyTimelineEvent;
}

export namespace RushHockeyTimelineEvent {
  export type AsObject = {
    teamUrn: string,
    eventType: RushHockeyEventTypeMap[keyof RushHockeyEventTypeMap],
    elapsedTime?: google_protobuf_duration_pb.Duration.AsObject,
    period: RushHockeyPeriodMap[keyof RushHockeyPeriodMap],
    penalty?: RushHockeyPenalty.AsObject,
  }
}

export class RushHockeyPenalty extends jspb.Message {
  getType(): RushHockeyPenaltyTypeMap[keyof RushHockeyPenaltyTypeMap];
  setType(value: RushHockeyPenaltyTypeMap[keyof RushHockeyPenaltyTypeMap]): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_duration_pb.Duration | undefined;
  setStartTime(value?: google_protobuf_duration_pb.Duration): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_duration_pb.Duration | undefined;
  setEndTime(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushHockeyPenalty.AsObject;
  static toObject(includeInstance: boolean, msg: RushHockeyPenalty): RushHockeyPenalty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushHockeyPenalty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushHockeyPenalty;
  static deserializeBinaryFromReader(message: RushHockeyPenalty, reader: jspb.BinaryReader): RushHockeyPenalty;
}

export namespace RushHockeyPenalty {
  export type AsObject = {
    type: RushHockeyPenaltyTypeMap[keyof RushHockeyPenaltyTypeMap],
    startTime?: google_protobuf_duration_pb.Duration.AsObject,
    endTime?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export interface RushHockeyPeriodMap {
  RUSH_HOCKEY_PERIOD_UNSPECIFIED: 0;
  RUSH_HOCKEY_PERIOD_1: 1;
  RUSH_HOCKEY_PERIOD_2: 2;
  RUSH_HOCKEY_PERIOD_3: 3;
}

export const RushHockeyPeriod: RushHockeyPeriodMap;

export interface RushHockeyPossessionSideMap {
  RUSH_HOCKEY_POSSESSION_SIDE_UNSPECIFIED: 0;
  RUSH_HOCKEY_POSSESSION_SIDE_HOME: 1;
  RUSH_HOCKEY_POSSESSION_SIDE_AWAY: 2;
}

export const RushHockeyPossessionSide: RushHockeyPossessionSideMap;

export interface RushHockeyPenaltyTypeMap {
  RUSH_HOCKEY_PENALTY_TYPE_UNSPECIFIED: 0;
  RUSH_HOCKEY_PENALTY_TYPE_MINOR: 1;
  RUSH_HOCKEY_PENALTY_TYPE_MAJOR: 2;
  RUSH_HOCKEY_PENALTY_TYPE_PENALTY_SHOT: 3;
}

export const RushHockeyPenaltyType: RushHockeyPenaltyTypeMap;

export interface RushHockeyManpowerMap {
  RUSH_HOCKEY_MANPOWER_UNSPECIFIED: 0;
  RUSH_HOCKEY_MANPOWER_HOME_5_AWAY_5: 1;
  RUSH_HOCKEY_MANPOWER_PENALTY_SHOT: 2;
  RUSH_HOCKEY_MANPOWER_HOME_5_AWAY_4: 3;
  RUSH_HOCKEY_MANPOWER_HOME_4_AWAY_5: 4;
  RUSH_HOCKEY_MANPOWER_HOME_5_AWAY_3: 5;
  RUSH_HOCKEY_MANPOWER_HOME_3_AWAY_5: 6;
  RUSH_HOCKEY_MANPOWER_HOME_4_AWAY_4: 7;
  RUSH_HOCKEY_MANPOWER_HOME_4_AWAY_3: 8;
  RUSH_HOCKEY_MANPOWER_HOME_3_AWAY_4: 9;
  RUSH_HOCKEY_MANPOWER_HOME_3_AWAY_3: 10;
}

export const RushHockeyManpower: RushHockeyManpowerMap;

export interface RushHockeyEventTypeMap {
  RUSH_HOCKEY_EVENT_TYPE_UNSPECIFIED: 0;
  RUSH_HOCKEY_EVENT_TYPE_GOAL: 1;
  RUSH_HOCKEY_EVENT_TYPE_PENALTY: 2;
  RUSH_HOCKEY_EVENT_TYPE_SHOT_ON_GOAL: 3;
  RUSH_HOCKEY_EVENT_TYPE_PERIOD_CHANGE: 10;
  RUSH_HOCKEY_EVENT_TYPE_GAME_END: 11;
}

export const RushHockeyEventType: RushHockeyEventTypeMap;

