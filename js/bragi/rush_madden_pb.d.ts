// package: bragi
// file: bragi/rush_madden.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as bragi_common_pb from "../bragi/common_pb";

export class RushMaddenMatchMessage extends jspb.Message {
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
  getPayload(): RushMaddenMatchMessage.Payload | undefined;
  setPayload(value?: RushMaddenMatchMessage.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushMaddenMatchMessage.AsObject;
  static toObject(includeInstance: boolean, msg: RushMaddenMatchMessage): RushMaddenMatchMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushMaddenMatchMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushMaddenMatchMessage;
  static deserializeBinaryFromReader(message: RushMaddenMatchMessage, reader: jspb.BinaryReader): RushMaddenMatchMessage;
}

export namespace RushMaddenMatchMessage {
  export type AsObject = {
    matchUrn: string,
    sequence: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dataStatus: bragi_common_pb.DataStatusMap[keyof bragi_common_pb.DataStatusMap],
    payload?: RushMaddenMatchMessage.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasSnapshot(): boolean;
    clearSnapshot(): void;
    getSnapshot(): RushMaddenMatchSnapshot | undefined;
    setSnapshot(value?: RushMaddenMatchSnapshot): void;

    hasUpdate(): boolean;
    clearUpdate(): void;
    getUpdate(): RushMaddenMatchUpdate | undefined;
    setUpdate(value?: RushMaddenMatchUpdate): void;

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
      snapshot?: RushMaddenMatchSnapshot.AsObject,
      update?: RushMaddenMatchUpdate.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      SNAPSHOT = 1,
      UPDATE = 2,
    }
  }
}

export class RushMaddenMatchSnapshot extends jspb.Message {
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
  getMatchState(): RushMaddenMatchState | undefined;
  setMatchState(value?: RushMaddenMatchState): void;

  hasTournament(): boolean;
  clearTournament(): void;
  getTournament(): bragi_common_pb.Tournament | undefined;
  setTournament(value?: bragi_common_pb.Tournament): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushMaddenMatchSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: RushMaddenMatchSnapshot): RushMaddenMatchSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushMaddenMatchSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushMaddenMatchSnapshot;
  static deserializeBinaryFromReader(message: RushMaddenMatchSnapshot, reader: jspb.BinaryReader): RushMaddenMatchSnapshot;
}

export namespace RushMaddenMatchSnapshot {
  export type AsObject = {
    matchUrn: string,
    sequence: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dataStatus: bragi_common_pb.DataStatusMap[keyof bragi_common_pb.DataStatusMap],
    announcementsList: Array<bragi_common_pb.Announcement.AsObject>,
    matchState?: RushMaddenMatchState.AsObject,
    tournament?: bragi_common_pb.Tournament.AsObject,
  }
}

export class RushMaddenMatchUpdate extends jspb.Message {
  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): RushMaddenMatchUpdate.Payload | undefined;
  setPayload(value?: RushMaddenMatchUpdate.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushMaddenMatchUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RushMaddenMatchUpdate): RushMaddenMatchUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushMaddenMatchUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushMaddenMatchUpdate;
  static deserializeBinaryFromReader(message: RushMaddenMatchUpdate, reader: jspb.BinaryReader): RushMaddenMatchUpdate;
}

export namespace RushMaddenMatchUpdate {
  export type AsObject = {
    payload?: RushMaddenMatchUpdate.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasMatchState(): boolean;
    clearMatchState(): void;
    getMatchState(): RushMaddenMatchState | undefined;
    setMatchState(value?: RushMaddenMatchState): void;

    hasPartialUpdates(): boolean;
    clearPartialUpdates(): void;
    getPartialUpdates(): RushMaddenMatchStatePartialUpdates | undefined;
    setPartialUpdates(value?: RushMaddenMatchStatePartialUpdates): void;

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
      matchState?: RushMaddenMatchState.AsObject,
      partialUpdates?: RushMaddenMatchStatePartialUpdates.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      MATCH_STATE = 1,
      PARTIAL_UPDATES = 2,
    }
  }
}

export class RushMaddenMatchStatePartialUpdates extends jspb.Message {
  clearUpdatesList(): void;
  getUpdatesList(): Array<RushMaddenMatchStatePartialUpdate>;
  setUpdatesList(value: Array<RushMaddenMatchStatePartialUpdate>): void;
  addUpdates(value?: RushMaddenMatchStatePartialUpdate, index?: number): RushMaddenMatchStatePartialUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushMaddenMatchStatePartialUpdates.AsObject;
  static toObject(includeInstance: boolean, msg: RushMaddenMatchStatePartialUpdates): RushMaddenMatchStatePartialUpdates.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushMaddenMatchStatePartialUpdates, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushMaddenMatchStatePartialUpdates;
  static deserializeBinaryFromReader(message: RushMaddenMatchStatePartialUpdates, reader: jspb.BinaryReader): RushMaddenMatchStatePartialUpdates;
}

export namespace RushMaddenMatchStatePartialUpdates {
  export type AsObject = {
    updatesList: Array<RushMaddenMatchStatePartialUpdate.AsObject>,
  }
}

export class RushMaddenMatchStatePartialUpdate extends jspb.Message {
  hasCurrentGameState(): boolean;
  clearCurrentGameState(): void;
  getCurrentGameState(): RushMaddenCurrentGameState | undefined;
  setCurrentGameState(value?: RushMaddenCurrentGameState): void;

  hasCurrentGameStatePartialUpdate(): boolean;
  clearCurrentGameStatePartialUpdate(): void;
  getCurrentGameStatePartialUpdate(): RushMaddenCurrentGameStatePartialUpdate | undefined;
  setCurrentGameStatePartialUpdate(value?: RushMaddenCurrentGameStatePartialUpdate): void;

  hasTimeline(): boolean;
  clearTimeline(): void;
  getTimeline(): RushMaddenTimelineState | undefined;
  setTimeline(value?: RushMaddenTimelineState): void;

  getUpdateCase(): RushMaddenMatchStatePartialUpdate.UpdateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushMaddenMatchStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RushMaddenMatchStatePartialUpdate): RushMaddenMatchStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushMaddenMatchStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushMaddenMatchStatePartialUpdate;
  static deserializeBinaryFromReader(message: RushMaddenMatchStatePartialUpdate, reader: jspb.BinaryReader): RushMaddenMatchStatePartialUpdate;
}

export namespace RushMaddenMatchStatePartialUpdate {
  export type AsObject = {
    currentGameState?: RushMaddenCurrentGameState.AsObject,
    currentGameStatePartialUpdate?: RushMaddenCurrentGameStatePartialUpdate.AsObject,
    timeline?: RushMaddenTimelineState.AsObject,
  }

  export enum UpdateCase {
    UPDATE_NOT_SET = 0,
    CURRENT_GAME_STATE = 1,
    CURRENT_GAME_STATE_PARTIAL_UPDATE = 2,
    TIMELINE = 3,
  }
}

export class RushMaddenMatchState extends jspb.Message {
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
  getTimeline(): RushMaddenTimelineState | undefined;
  setTimeline(value?: RushMaddenTimelineState): void;

  hasCurrentGame(): boolean;
  clearCurrentGame(): void;
  getCurrentGame(): RushMaddenCurrentGameState | undefined;
  setCurrentGame(value?: RushMaddenCurrentGameState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushMaddenMatchState.AsObject;
  static toObject(includeInstance: boolean, msg: RushMaddenMatchState): RushMaddenMatchState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushMaddenMatchState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushMaddenMatchState;
  static deserializeBinaryFromReader(message: RushMaddenMatchState, reader: jspb.BinaryReader): RushMaddenMatchState;
}

export namespace RushMaddenMatchState {
  export type AsObject = {
    matchUrn: string,
    matchType: bragi_common_pb.BestOfTypeMap[keyof bragi_common_pb.BestOfTypeMap],
    homeTeam?: bragi_common_pb.Team.AsObject,
    awayTeam?: bragi_common_pb.Team.AsObject,
    matchStatus: bragi_common_pb.MatchStatusTypeMap[keyof bragi_common_pb.MatchStatusTypeMap],
    timeline?: RushMaddenTimelineState.AsObject,
    currentGame?: RushMaddenCurrentGameState.AsObject,
  }
}

export class RushMaddenCurrentGameStatePartialUpdate extends jspb.Message {
  hasGameTime(): boolean;
  clearGameTime(): void;
  getGameTime(): RushMaddenCurrentGameTimeState | undefined;
  setGameTime(value?: RushMaddenCurrentGameTimeState): void;

  hasScore(): boolean;
  clearScore(): void;
  getScore(): RushMaddenCurrentGameScoreState | undefined;
  setScore(value?: RushMaddenCurrentGameScoreState): void;

  hasTeamCurrentGameState(): boolean;
  clearTeamCurrentGameState(): void;
  getTeamCurrentGameState(): RushMaddenTeamCurrentGameState | undefined;
  setTeamCurrentGameState(value?: RushMaddenTeamCurrentGameState): void;

  hasTeamCurrentGamePartialUpdate(): boolean;
  clearTeamCurrentGamePartialUpdate(): void;
  getTeamCurrentGamePartialUpdate(): RushMaddenTeamCurrentGameStatePartialUpdate | undefined;
  setTeamCurrentGamePartialUpdate(value?: RushMaddenTeamCurrentGameStatePartialUpdate): void;

  hasPossessionSide(): boolean;
  clearPossessionSide(): void;
  getPossessionSide(): RushMaddenPossessionSideMap[keyof RushMaddenPossessionSideMap];
  setPossessionSide(value: RushMaddenPossessionSideMap[keyof RushMaddenPossessionSideMap]): void;

  hasDown(): boolean;
  clearDown(): void;
  getDown(): number;
  setDown(value: number): void;

  hasFirstDownDistance(): boolean;
  clearFirstDownDistance(): void;
  getFirstDownDistance(): RushMaddenFirstDownDistance | undefined;
  setFirstDownDistance(value?: RushMaddenFirstDownDistance): void;

  hasYardsToEndzone(): boolean;
  clearYardsToEndzone(): void;
  getYardsToEndzone(): number;
  setYardsToEndzone(value: number): void;

  hasQuarter(): boolean;
  clearQuarter(): void;
  getQuarter(): RushMaddenQuarterMap[keyof RushMaddenQuarterMap];
  setQuarter(value: RushMaddenQuarterMap[keyof RushMaddenQuarterMap]): void;

  getUpdateCase(): RushMaddenCurrentGameStatePartialUpdate.UpdateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushMaddenCurrentGameStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RushMaddenCurrentGameStatePartialUpdate): RushMaddenCurrentGameStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushMaddenCurrentGameStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushMaddenCurrentGameStatePartialUpdate;
  static deserializeBinaryFromReader(message: RushMaddenCurrentGameStatePartialUpdate, reader: jspb.BinaryReader): RushMaddenCurrentGameStatePartialUpdate;
}

export namespace RushMaddenCurrentGameStatePartialUpdate {
  export type AsObject = {
    gameTime?: RushMaddenCurrentGameTimeState.AsObject,
    score?: RushMaddenCurrentGameScoreState.AsObject,
    teamCurrentGameState?: RushMaddenTeamCurrentGameState.AsObject,
    teamCurrentGamePartialUpdate?: RushMaddenTeamCurrentGameStatePartialUpdate.AsObject,
    possessionSide: RushMaddenPossessionSideMap[keyof RushMaddenPossessionSideMap],
    down: number,
    firstDownDistance?: RushMaddenFirstDownDistance.AsObject,
    yardsToEndzone: number,
    quarter: RushMaddenQuarterMap[keyof RushMaddenQuarterMap],
  }

  export enum UpdateCase {
    UPDATE_NOT_SET = 0,
    GAME_TIME = 1,
    SCORE = 2,
    TEAM_CURRENT_GAME_STATE = 3,
    TEAM_CURRENT_GAME_PARTIAL_UPDATE = 4,
    POSSESSION_SIDE = 5,
    DOWN = 6,
    FIRST_DOWN_DISTANCE = 7,
    YARDS_TO_ENDZONE = 8,
    QUARTER = 9,
  }
}

export class RushMaddenCurrentGameState extends jspb.Message {
  getQuarter(): RushMaddenQuarterMap[keyof RushMaddenQuarterMap];
  setQuarter(value: RushMaddenQuarterMap[keyof RushMaddenQuarterMap]): void;

  hasGameTime(): boolean;
  clearGameTime(): void;
  getGameTime(): RushMaddenCurrentGameTimeState | undefined;
  setGameTime(value?: RushMaddenCurrentGameTimeState): void;

  hasScore(): boolean;
  clearScore(): void;
  getScore(): RushMaddenCurrentGameScoreState | undefined;
  setScore(value?: RushMaddenCurrentGameScoreState): void;

  getGamePaused(): boolean;
  setGamePaused(value: boolean): void;

  getTeamsMap(): jspb.Map<string, RushMaddenTeamCurrentGameState>;
  clearTeamsMap(): void;
  getPossessionSide(): RushMaddenPossessionSideMap[keyof RushMaddenPossessionSideMap];
  setPossessionSide(value: RushMaddenPossessionSideMap[keyof RushMaddenPossessionSideMap]): void;

  getDown(): number;
  setDown(value: number): void;

  hasFirstDownDistance(): boolean;
  clearFirstDownDistance(): void;
  getFirstDownDistance(): RushMaddenFirstDownDistance | undefined;
  setFirstDownDistance(value?: RushMaddenFirstDownDistance): void;

  getYardsToEndzone(): number;
  setYardsToEndzone(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushMaddenCurrentGameState.AsObject;
  static toObject(includeInstance: boolean, msg: RushMaddenCurrentGameState): RushMaddenCurrentGameState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushMaddenCurrentGameState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushMaddenCurrentGameState;
  static deserializeBinaryFromReader(message: RushMaddenCurrentGameState, reader: jspb.BinaryReader): RushMaddenCurrentGameState;
}

export namespace RushMaddenCurrentGameState {
  export type AsObject = {
    quarter: RushMaddenQuarterMap[keyof RushMaddenQuarterMap],
    gameTime?: RushMaddenCurrentGameTimeState.AsObject,
    score?: RushMaddenCurrentGameScoreState.AsObject,
    gamePaused: boolean,
    teamsMap: Array<[string, RushMaddenTeamCurrentGameState.AsObject]>,
    possessionSide: RushMaddenPossessionSideMap[keyof RushMaddenPossessionSideMap],
    down: number,
    firstDownDistance?: RushMaddenFirstDownDistance.AsObject,
    yardsToEndzone: number,
  }
}

export class RushMaddenCurrentGameTimeState extends jspb.Message {
  hasRemainingTime(): boolean;
  clearRemainingTime(): void;
  getRemainingTime(): google_protobuf_duration_pb.Duration | undefined;
  setRemainingTime(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushMaddenCurrentGameTimeState.AsObject;
  static toObject(includeInstance: boolean, msg: RushMaddenCurrentGameTimeState): RushMaddenCurrentGameTimeState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushMaddenCurrentGameTimeState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushMaddenCurrentGameTimeState;
  static deserializeBinaryFromReader(message: RushMaddenCurrentGameTimeState, reader: jspb.BinaryReader): RushMaddenCurrentGameTimeState;
}

export namespace RushMaddenCurrentGameTimeState {
  export type AsObject = {
    remainingTime?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class RushMaddenCurrentGameScoreState extends jspb.Message {
  getHomeScore(): number;
  setHomeScore(value: number): void;

  getAwayScore(): number;
  setAwayScore(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushMaddenCurrentGameScoreState.AsObject;
  static toObject(includeInstance: boolean, msg: RushMaddenCurrentGameScoreState): RushMaddenCurrentGameScoreState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushMaddenCurrentGameScoreState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushMaddenCurrentGameScoreState;
  static deserializeBinaryFromReader(message: RushMaddenCurrentGameScoreState, reader: jspb.BinaryReader): RushMaddenCurrentGameScoreState;
}

export namespace RushMaddenCurrentGameScoreState {
  export type AsObject = {
    homeScore: number,
    awayScore: number,
  }
}

export class RushMaddenFirstDownDistance extends jspb.Message {
  hasYards(): boolean;
  clearYards(): void;
  getYards(): number;
  setYards(value: number): void;

  hasType(): boolean;
  clearType(): void;
  getType(): RushMaddenFirstDownDistanceTypeMap[keyof RushMaddenFirstDownDistanceTypeMap];
  setType(value: RushMaddenFirstDownDistanceTypeMap[keyof RushMaddenFirstDownDistanceTypeMap]): void;

  getValueCase(): RushMaddenFirstDownDistance.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushMaddenFirstDownDistance.AsObject;
  static toObject(includeInstance: boolean, msg: RushMaddenFirstDownDistance): RushMaddenFirstDownDistance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushMaddenFirstDownDistance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushMaddenFirstDownDistance;
  static deserializeBinaryFromReader(message: RushMaddenFirstDownDistance, reader: jspb.BinaryReader): RushMaddenFirstDownDistance;
}

export namespace RushMaddenFirstDownDistance {
  export type AsObject = {
    yards: number,
    type: RushMaddenFirstDownDistanceTypeMap[keyof RushMaddenFirstDownDistanceTypeMap],
  }

  export enum ValueCase {
    VALUE_NOT_SET = 0,
    YARDS = 1,
    TYPE = 2,
  }
}

export class RushMaddenTeamCurrentGameStatePartialUpdate extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): RushMaddenTeamCurrentGameStatePartialUpdate.Payload | undefined;
  setPayload(value?: RushMaddenTeamCurrentGameStatePartialUpdate.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushMaddenTeamCurrentGameStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RushMaddenTeamCurrentGameStatePartialUpdate): RushMaddenTeamCurrentGameStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushMaddenTeamCurrentGameStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushMaddenTeamCurrentGameStatePartialUpdate;
  static deserializeBinaryFromReader(message: RushMaddenTeamCurrentGameStatePartialUpdate, reader: jspb.BinaryReader): RushMaddenTeamCurrentGameStatePartialUpdate;
}

export namespace RushMaddenTeamCurrentGameStatePartialUpdate {
  export type AsObject = {
    teamUrn: string,
    payload?: RushMaddenTeamCurrentGameStatePartialUpdate.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasGameStatistics(): boolean;
    clearGameStatistics(): void;
    getGameStatistics(): RushMaddenTeamCurrentGameStatisticsState | undefined;
    setGameStatistics(value?: RushMaddenTeamCurrentGameStatisticsState): void;

    hasPlayer(): boolean;
    clearPlayer(): void;
    getPlayer(): RushMaddenPlayerCurrentGameState | undefined;
    setPlayer(value?: RushMaddenPlayerCurrentGameState): void;

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
      gameStatistics?: RushMaddenTeamCurrentGameStatisticsState.AsObject,
      player?: RushMaddenPlayerCurrentGameState.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      GAME_STATISTICS = 1,
      PLAYER = 2,
    }
  }
}

export class RushMaddenTeamCurrentGameState extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  hasGameStatistics(): boolean;
  clearGameStatistics(): void;
  getGameStatistics(): RushMaddenTeamCurrentGameStatisticsState | undefined;
  setGameStatistics(value?: RushMaddenTeamCurrentGameStatisticsState): void;

  hasPlayer(): boolean;
  clearPlayer(): void;
  getPlayer(): RushMaddenPlayerCurrentGameState | undefined;
  setPlayer(value?: RushMaddenPlayerCurrentGameState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushMaddenTeamCurrentGameState.AsObject;
  static toObject(includeInstance: boolean, msg: RushMaddenTeamCurrentGameState): RushMaddenTeamCurrentGameState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushMaddenTeamCurrentGameState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushMaddenTeamCurrentGameState;
  static deserializeBinaryFromReader(message: RushMaddenTeamCurrentGameState, reader: jspb.BinaryReader): RushMaddenTeamCurrentGameState;
}

export namespace RushMaddenTeamCurrentGameState {
  export type AsObject = {
    teamUrn: string,
    gameStatistics?: RushMaddenTeamCurrentGameStatisticsState.AsObject,
    player?: RushMaddenPlayerCurrentGameState.AsObject,
  }
}

export class RushMaddenPlayerCurrentGameState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getExtName(): string;
  setExtName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushMaddenPlayerCurrentGameState.AsObject;
  static toObject(includeInstance: boolean, msg: RushMaddenPlayerCurrentGameState): RushMaddenPlayerCurrentGameState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushMaddenPlayerCurrentGameState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushMaddenPlayerCurrentGameState;
  static deserializeBinaryFromReader(message: RushMaddenPlayerCurrentGameState, reader: jspb.BinaryReader): RushMaddenPlayerCurrentGameState;
}

export namespace RushMaddenPlayerCurrentGameState {
  export type AsObject = {
    playerUrn: string,
    extName: string,
  }
}

export class RushMaddenTeamCurrentGameStatisticsState extends jspb.Message {
  getScore(): number;
  setScore(value: number): void;

  clearQuarterPointsList(): void;
  getQuarterPointsList(): Array<RushMaddenQuarterPoints>;
  setQuarterPointsList(value: Array<RushMaddenQuarterPoints>): void;
  addQuarterPoints(value?: RushMaddenQuarterPoints, index?: number): RushMaddenQuarterPoints;

  getTimeoutsLeft(): number;
  setTimeoutsLeft(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushMaddenTeamCurrentGameStatisticsState.AsObject;
  static toObject(includeInstance: boolean, msg: RushMaddenTeamCurrentGameStatisticsState): RushMaddenTeamCurrentGameStatisticsState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushMaddenTeamCurrentGameStatisticsState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushMaddenTeamCurrentGameStatisticsState;
  static deserializeBinaryFromReader(message: RushMaddenTeamCurrentGameStatisticsState, reader: jspb.BinaryReader): RushMaddenTeamCurrentGameStatisticsState;
}

export namespace RushMaddenTeamCurrentGameStatisticsState {
  export type AsObject = {
    score: number,
    quarterPointsList: Array<RushMaddenQuarterPoints.AsObject>,
    timeoutsLeft: number,
  }
}

export class RushMaddenQuarterPoints extends jspb.Message {
  getQuarter(): RushMaddenQuarterMap[keyof RushMaddenQuarterMap];
  setQuarter(value: RushMaddenQuarterMap[keyof RushMaddenQuarterMap]): void;

  getPoints(): number;
  setPoints(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushMaddenQuarterPoints.AsObject;
  static toObject(includeInstance: boolean, msg: RushMaddenQuarterPoints): RushMaddenQuarterPoints.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushMaddenQuarterPoints, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushMaddenQuarterPoints;
  static deserializeBinaryFromReader(message: RushMaddenQuarterPoints, reader: jspb.BinaryReader): RushMaddenQuarterPoints;
}

export namespace RushMaddenQuarterPoints {
  export type AsObject = {
    quarter: RushMaddenQuarterMap[keyof RushMaddenQuarterMap],
    points: number,
  }
}

export class RushMaddenTimelineState extends jspb.Message {
  clearEventsList(): void;
  getEventsList(): Array<RushMaddenTimelineEvent>;
  setEventsList(value: Array<RushMaddenTimelineEvent>): void;
  addEvents(value?: RushMaddenTimelineEvent, index?: number): RushMaddenTimelineEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushMaddenTimelineState.AsObject;
  static toObject(includeInstance: boolean, msg: RushMaddenTimelineState): RushMaddenTimelineState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushMaddenTimelineState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushMaddenTimelineState;
  static deserializeBinaryFromReader(message: RushMaddenTimelineState, reader: jspb.BinaryReader): RushMaddenTimelineState;
}

export namespace RushMaddenTimelineState {
  export type AsObject = {
    eventsList: Array<RushMaddenTimelineEvent.AsObject>,
  }
}

export class RushMaddenTimelineEvent extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getEventType(): RushMaddenEventTypeMap[keyof RushMaddenEventTypeMap];
  setEventType(value: RushMaddenEventTypeMap[keyof RushMaddenEventTypeMap]): void;

  hasRemainingTime(): boolean;
  clearRemainingTime(): void;
  getRemainingTime(): google_protobuf_duration_pb.Duration | undefined;
  setRemainingTime(value?: google_protobuf_duration_pb.Duration): void;

  getQuarter(): RushMaddenQuarterMap[keyof RushMaddenQuarterMap];
  setQuarter(value: RushMaddenQuarterMap[keyof RushMaddenQuarterMap]): void;

  getDown(): number;
  setDown(value: number): void;

  hasFirstDownDistance(): boolean;
  clearFirstDownDistance(): void;
  getFirstDownDistance(): RushMaddenFirstDownDistance | undefined;
  setFirstDownDistance(value?: RushMaddenFirstDownDistance): void;

  getYardsToEndzone(): number;
  setYardsToEndzone(value: number): void;

  getPossessionSide(): RushMaddenPossessionSideMap[keyof RushMaddenPossessionSideMap];
  setPossessionSide(value: RushMaddenPossessionSideMap[keyof RushMaddenPossessionSideMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RushMaddenTimelineEvent.AsObject;
  static toObject(includeInstance: boolean, msg: RushMaddenTimelineEvent): RushMaddenTimelineEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RushMaddenTimelineEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RushMaddenTimelineEvent;
  static deserializeBinaryFromReader(message: RushMaddenTimelineEvent, reader: jspb.BinaryReader): RushMaddenTimelineEvent;
}

export namespace RushMaddenTimelineEvent {
  export type AsObject = {
    teamUrn: string,
    eventType: RushMaddenEventTypeMap[keyof RushMaddenEventTypeMap],
    remainingTime?: google_protobuf_duration_pb.Duration.AsObject,
    quarter: RushMaddenQuarterMap[keyof RushMaddenQuarterMap],
    down: number,
    firstDownDistance?: RushMaddenFirstDownDistance.AsObject,
    yardsToEndzone: number,
    possessionSide: RushMaddenPossessionSideMap[keyof RushMaddenPossessionSideMap],
  }
}

export interface RushMaddenPossessionSideMap {
  RUSH_MADDEN_POSSESSION_SIDE_UNSPECIFIED: 0;
  RUSH_MADDEN_POSSESSION_SIDE_HOME: 1;
  RUSH_MADDEN_POSSESSION_SIDE_AWAY: 2;
}

export const RushMaddenPossessionSide: RushMaddenPossessionSideMap;

export interface RushMaddenFirstDownDistanceTypeMap {
  RUSH_MADDEN_FIRST_DOWN_DISTANCE_TYPE_UNSPECIFIED: 0;
  RUSH_MADDEN_FIRST_DOWN_DISTANCE_TYPE_INCHES: 1;
  RUSH_MADDEN_FIRST_DOWN_DISTANCE_TYPE_GOAL: 2;
}

export const RushMaddenFirstDownDistanceType: RushMaddenFirstDownDistanceTypeMap;

export interface RushMaddenQuarterMap {
  RUSH_MADDEN_QUARTER_UNSPECIFIED: 0;
  RUSH_MADDEN_QUARTER_1: 1;
  RUSH_MADDEN_QUARTER_2: 2;
  RUSH_MADDEN_QUARTER_3: 3;
  RUSH_MADDEN_QUARTER_4: 4;
  RUSH_MADDEN_QUARTER_OVERTIME_1: 5;
  RUSH_MADDEN_QUARTER_OVERTIME_2: 6;
  RUSH_MADDEN_QUARTER_OVERTIME_3: 7;
  RUSH_MADDEN_QUARTER_OVERTIME_4: 8;
  RUSH_MADDEN_QUARTER_OVERTIME_5: 9;
  RUSH_MADDEN_QUARTER_OVERTIME_6: 10;
  RUSH_MADDEN_QUARTER_OVERTIME_7: 11;
  RUSH_MADDEN_QUARTER_OVERTIME_8: 12;
  RUSH_MADDEN_QUARTER_OVERTIME_9: 13;
  RUSH_MADDEN_QUARTER_OVERTIME_10: 14;
}

export const RushMaddenQuarter: RushMaddenQuarterMap;

export interface RushMaddenEventTypeMap {
  RUSH_MADDEN_EVENT_TYPE_UNSPECIFIED: 0;
  RUSH_MADDEN_EVENT_TYPE_PLAY: 1;
  RUSH_MADDEN_EVENT_TYPE_FLAG: 2;
  RUSH_MADDEN_EVENT_TYPE_PAT: 3;
  RUSH_MADDEN_EVENT_TYPE_FIELD_GOAL: 4;
  RUSH_MADDEN_EVENT_TYPE_PUNT: 5;
  RUSH_MADDEN_EVENT_TYPE_KICKOFF: 6;
  RUSH_MADDEN_EVENT_TYPE_TWO_POINT_ATTEMPT: 7;
  RUSH_MADDEN_EVENT_TYPE_TIMEOUT_HOME: 8;
  RUSH_MADDEN_EVENT_TYPE_TIMEOUT_AWAY: 9;
  RUSH_MADDEN_EVENT_TYPE_SAFETY_HOME: 10;
  RUSH_MADDEN_EVENT_TYPE_SAFETY_AWAY: 11;
  RUSH_MADDEN_EVENT_TYPE_TIMEOUT: 12;
  RUSH_MADDEN_EVENT_TYPE_TOUCHDOWN: 13;
  RUSH_MADDEN_EVENT_TYPE_POSSESSION_CHANGE: 14;
  RUSH_MADDEN_EVENT_TYPE_QUARTER_CHANGE: 15;
  RUSH_MADDEN_EVENT_TYPE_HALFTIME: 16;
  RUSH_MADDEN_EVENT_TYPE_GAME_END: 17;
}

export const RushMaddenEventType: RushMaddenEventTypeMap;

