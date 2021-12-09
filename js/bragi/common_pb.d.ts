// package: bragi
// file: bragi/common.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Sport extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sport.AsObject;
  static toObject(includeInstance: boolean, msg: Sport): Sport.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Sport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sport;
  static deserializeBinaryFromReader(message: Sport, reader: jspb.BinaryReader): Sport;
}

export namespace Sport {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class Tournament extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  hasStartTimestamp(): boolean;
  clearStartTimestamp(): void;
  getStartTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTimestamp(): boolean;
  clearEndTimestamp(): void;
  getEndTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

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
    id: number,
    name: string,
    startTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Team extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  hasIconPath(): boolean;
  clearIconPath(): void;
  getIconPath(): string;
  setIconPath(value: string): void;

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
    id: number,
    name: string,
    iconPath: string,
  }
}

export class Match extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasPlannedStartTimestamp(): boolean;
  clearPlannedStartTimestamp(): void;
  getPlannedStartTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPlannedStartTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStartTimestamp(): boolean;
  clearStartTimestamp(): void;
  getStartTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTimestamp(): boolean;
  clearEndTimestamp(): void;
  getEndTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTournament(): boolean;
  clearTournament(): void;
  getTournament(): Tournament | undefined;
  setTournament(value?: Tournament): void;

  hasHomeTeam(): boolean;
  clearHomeTeam(): void;
  getHomeTeam(): Team | undefined;
  setHomeTeam(value?: Team): void;

  hasHomeScore(): boolean;
  clearHomeScore(): void;
  getHomeScore(): number;
  setHomeScore(value: number): void;

  hasAwayTeam(): boolean;
  clearAwayTeam(): void;
  getAwayTeam(): Team | undefined;
  setAwayTeam(value?: Team): void;

  hasAwayScore(): boolean;
  clearAwayScore(): void;
  getAwayScore(): number;
  setAwayScore(value: number): void;

  hasWinTeam(): boolean;
  clearWinTeam(): void;
  getWinTeam(): Team | undefined;
  setWinTeam(value?: Team): void;

  getIsClosed(): boolean;
  setIsClosed(value: boolean): void;

  getBestOfType(): BestOfTypeMap[keyof BestOfTypeMap];
  setBestOfType(value: BestOfTypeMap[keyof BestOfTypeMap]): void;

  clearMapsList(): void;
  getMapsList(): Array<Map>;
  setMapsList(value: Array<Map>): void;
  addMaps(value?: Map, index?: number): Map;

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
    id: number,
    plannedStartTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    startTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    tournament?: Tournament.AsObject,
    homeTeam?: Team.AsObject,
    homeScore: number,
    awayTeam?: Team.AsObject,
    awayScore: number,
    winTeam?: Team.AsObject,
    isClosed: boolean,
    bestOfType: BestOfTypeMap[keyof BestOfTypeMap],
    mapsList: Array<Map.AsObject>,
  }
}

export class Map extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getOrder(): number;
  setOrder(value: number): void;

  hasStartTimestamp(): boolean;
  clearStartTimestamp(): void;
  getStartTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTimestamp(): boolean;
  clearEndTimestamp(): void;
  getEndTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getIsClosed(): boolean;
  setIsClosed(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Map.AsObject;
  static toObject(includeInstance: boolean, msg: Map): Map.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Map, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Map;
  static deserializeBinaryFromReader(message: Map, reader: jspb.BinaryReader): Map;
}

export namespace Map {
  export type AsObject = {
    id: number,
    order: number,
    startTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    isClosed: boolean,
  }
}

export class Player extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getNickname(): string;
  setNickname(value: string): void;

  hasRealName(): boolean;
  clearRealName(): void;
  getRealName(): string;
  setRealName(value: string): void;

  hasShortcut(): boolean;
  clearShortcut(): void;
  getShortcut(): string;
  setShortcut(value: string): void;

  hasIconPath(): boolean;
  clearIconPath(): void;
  getIconPath(): string;
  setIconPath(value: string): void;

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
    id: number,
    nickname: string,
    realName: string,
    shortcut: string,
    iconPath: string,
  }
}

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

