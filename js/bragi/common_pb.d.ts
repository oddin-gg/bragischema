// package: bragi
// file: bragi/common.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class AnnouncementUpdate extends jspb.Message {
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
  getPayload(): Announcement | undefined;
  setPayload(value?: Announcement): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnouncementUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: AnnouncementUpdate): AnnouncementUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AnnouncementUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnouncementUpdate;
  static deserializeBinaryFromReader(message: AnnouncementUpdate, reader: jspb.BinaryReader): AnnouncementUpdate;
}

export namespace AnnouncementUpdate {
  export type AsObject = {
    matchUrn: string,
    sequence: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    payload?: Announcement.AsObject,
  }
}

export class Announcement extends jspb.Message {
  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): Announcement.Payload | undefined;
  setPayload(value?: Announcement.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Announcement.AsObject;
  static toObject(includeInstance: boolean, msg: Announcement): Announcement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Announcement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Announcement;
  static deserializeBinaryFromReader(message: Announcement, reader: jspb.BinaryReader): Announcement;
}

export namespace Announcement {
  export type AsObject = {
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    payload?: Announcement.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasControl(): boolean;
    clearControl(): void;
    getControl(): ControlAnnouncement | undefined;
    setControl(value?: ControlAnnouncement): void;

    hasError(): boolean;
    clearError(): void;
    getError(): ControlErrorAnnouncement | undefined;
    setError(value?: ControlErrorAnnouncement): void;

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
      control?: ControlAnnouncement.AsObject,
      error?: ControlErrorAnnouncement.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      CONTROL = 1,
      ERROR = 2,
    }
  }
}

export class ControlAnnouncement extends jspb.Message {
  getType(): ControlAnnouncement.ControlAnnouncementTypeMap[keyof ControlAnnouncement.ControlAnnouncementTypeMap];
  setType(value: ControlAnnouncement.ControlAnnouncementTypeMap[keyof ControlAnnouncement.ControlAnnouncementTypeMap]): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ControlAnnouncement.AsObject;
  static toObject(includeInstance: boolean, msg: ControlAnnouncement): ControlAnnouncement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ControlAnnouncement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ControlAnnouncement;
  static deserializeBinaryFromReader(message: ControlAnnouncement, reader: jspb.BinaryReader): ControlAnnouncement;
}

export namespace ControlAnnouncement {
  export type AsObject = {
    type: ControlAnnouncement.ControlAnnouncementTypeMap[keyof ControlAnnouncement.ControlAnnouncementTypeMap],
    message: string,
  }

  export interface ControlAnnouncementTypeMap {
    CONTROL_ANNOUNCEMENT_TYPE_UNSPECIFIED: 0;
  }

  export const ControlAnnouncementType: ControlAnnouncementTypeMap;
}

export class ControlErrorAnnouncement extends jspb.Message {
  getType(): ControlErrorAnnouncement.ControlErrorAnnouncementTypeMap[keyof ControlErrorAnnouncement.ControlErrorAnnouncementTypeMap];
  setType(value: ControlErrorAnnouncement.ControlErrorAnnouncementTypeMap[keyof ControlErrorAnnouncement.ControlErrorAnnouncementTypeMap]): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ControlErrorAnnouncement.AsObject;
  static toObject(includeInstance: boolean, msg: ControlErrorAnnouncement): ControlErrorAnnouncement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ControlErrorAnnouncement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ControlErrorAnnouncement;
  static deserializeBinaryFromReader(message: ControlErrorAnnouncement, reader: jspb.BinaryReader): ControlErrorAnnouncement;
}

export namespace ControlErrorAnnouncement {
  export type AsObject = {
    type: ControlErrorAnnouncement.ControlErrorAnnouncementTypeMap[keyof ControlErrorAnnouncement.ControlErrorAnnouncementTypeMap],
    message: string,
  }

  export interface ControlErrorAnnouncementTypeMap {
    CONTROL_ERROR_ANNOUNCEMENT_TYPE_UNSPECIFIED: 0;
  }

  export const ControlErrorAnnouncementType: ControlErrorAnnouncementTypeMap;
}

export class MatchTimeline extends jspb.Message {
  clearMatchesList(): void;
  getMatchesList(): Array<Match>;
  setMatchesList(value: Array<Match>): void;
  addMatches(value?: Match, index?: number): Match;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchTimeline.AsObject;
  static toObject(includeInstance: boolean, msg: MatchTimeline): MatchTimeline.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatchTimeline, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchTimeline;
  static deserializeBinaryFromReader(message: MatchTimeline, reader: jspb.BinaryReader): MatchTimeline;
}

export namespace MatchTimeline {
  export type AsObject = {
    matchesList: Array<Match.AsObject>,
  }
}

export class Match extends jspb.Message {
  getMatchUrn(): string;
  setMatchUrn(value: string): void;

  getTournamentUrn(): string;
  setTournamentUrn(value: string): void;

  getSport(): SportMap[keyof SportMap];
  setSport(value: SportMap[keyof SportMap]): void;

  getHomeTeamUrn(): string;
  setHomeTeamUrn(value: string): void;

  getAwayTeamUrn(): string;
  setAwayTeamUrn(value: string): void;

  getHomeScore(): number;
  setHomeScore(value: number): void;

  getAwayScore(): number;
  setAwayScore(value: number): void;

  getMatchStatus(): MatchStatusTypeMap[keyof MatchStatusTypeMap];
  setMatchStatus(value: MatchStatusTypeMap[keyof MatchStatusTypeMap]): void;

  hasPlannetStart(): boolean;
  clearPlannetStart(): void;
  getPlannetStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPlannetStart(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTournament(): boolean;
  clearTournament(): void;
  getTournament(): Tournament | undefined;
  setTournament(value?: Tournament): void;

  clearTeamsList(): void;
  getTeamsList(): Array<Team>;
  setTeamsList(value: Array<Team>): void;
  addTeams(value?: Team, index?: number): Team;

  clearPlayersList(): void;
  getPlayersList(): Array<Player>;
  setPlayersList(value: Array<Player>): void;
  addPlayers(value?: Player, index?: number): Player;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Match.AsObject;
  static toObject(includeInstance: boolean, msg: Match): Match.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Match, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Match;
  static deserializeBinaryFromReader(message: Match, reader: jspb.BinaryReader): Match;
}

export namespace Match {
  export type AsObject = {
    matchUrn: string,
    tournamentUrn: string,
    sport: SportMap[keyof SportMap],
    homeTeamUrn: string,
    awayTeamUrn: string,
    homeScore: number,
    awayScore: number,
    matchStatus: MatchStatusTypeMap[keyof MatchStatusTypeMap],
    plannetStart?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    tournament?: Tournament.AsObject,
    teamsList: Array<Team.AsObject>,
    playersList: Array<Player.AsObject>,
  }
}

export class Tournament extends jspb.Message {
  getUrn(): string;
  setUrn(value: string): void;

  getName(): string;
  setName(value: string): void;

  getIsOffline(): boolean;
  setIsOffline(value: boolean): void;

  hasStartDate(): boolean;
  clearStartDate(): void;
  getStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tournament.AsObject;
  static toObject(includeInstance: boolean, msg: Tournament): Tournament.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Tournament, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tournament;
  static deserializeBinaryFromReader(message: Tournament, reader: jspb.BinaryReader): Tournament;
}

export namespace Tournament {
  export type AsObject = {
    urn: string,
    name: string,
    isOffline: boolean,
    startDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Team extends jspb.Message {
  getUrn(): string;
  setUrn(value: string): void;

  getName(): string;
  setName(value: string): void;

  getIsHome(): boolean;
  setIsHome(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Team.AsObject;
  static toObject(includeInstance: boolean, msg: Team): Team.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Team, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Team;
  static deserializeBinaryFromReader(message: Team, reader: jspb.BinaryReader): Team;
}

export namespace Team {
  export type AsObject = {
    urn: string,
    name: string,
    isHome: boolean,
  }
}

export class Player extends jspb.Message {
  getUrn(): string;
  setUrn(value: string): void;

  getNickname(): string;
  setNickname(value: string): void;

  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Player.AsObject;
  static toObject(includeInstance: boolean, msg: Player): Player.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Player, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Player;
  static deserializeBinaryFromReader(message: Player, reader: jspb.BinaryReader): Player;
}

export namespace Player {
  export type AsObject = {
    urn: string,
    nickname: string,
    teamUrn: string,
  }
}

export interface SportMap {
  SPORT_UNSPECIFIED: 0;
  SPORT_CS2: 1;
  SPORT_DOTA2: 2;
  SPORT_LOL: 3;
  SPORT_VALORANT: 4;
  SPORT_RUSH_SOCCER: 5;
  SPORT_RUSH_BASKETBALL: 6;
}

export const Sport: SportMap;

export interface BestOfTypeMap {
  BEST_OF_TYPE_UNSPECIFIED: 0;
  BEST_OF_TYPE_BO1: 1;
  BEST_OF_TYPE_BO2: 2;
  BEST_OF_TYPE_BO3: 3;
  BEST_OF_TYPE_BO4: 4;
  BEST_OF_TYPE_BO5: 5;
  BEST_OF_TYPE_BO6: 6;
  BEST_OF_TYPE_BO7: 7;
}

export const BestOfType: BestOfTypeMap;

export interface MatchStatusTypeMap {
  MATCH_STATUS_TYPE_UNSPECIFIED: 0;
  MATCH_STATUS_TYPE_NOT_STARTED: 1;
  MATCH_STATUS_TYPE_LIVE: 2;
  MATCH_STATUS_TYPE_FINISHED: 3;
  MATCH_STATUS_TYPE_CANCELED: 4;
  MATCH_STATUS_TYPE_PLACEHOLDER: 5;
}

export const MatchStatusType: MatchStatusTypeMap;

export interface DataStatusMap {
  DATA_STATUS_UNSPECIFIED: 0;
  DATA_STATUS_DISABLED_DATA: 1;
  DATA_STATUS_CORRUPTED_DATA: 2;
  DATA_STATUS_VALID_DATA: 3;
}

export const DataStatus: DataStatusMap;

