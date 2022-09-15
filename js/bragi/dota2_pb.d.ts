// package: bragi
// file: bragi/dota2.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as bragi_common_pb from "../bragi/common_pb";

export class Dota2MatchMessage extends jspb.Message {
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
  getPayload(): Dota2MatchMessage.Payload | undefined;
  setPayload(value?: Dota2MatchMessage.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2MatchMessage.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2MatchMessage): Dota2MatchMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2MatchMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2MatchMessage;
  static deserializeBinaryFromReader(message: Dota2MatchMessage, reader: jspb.BinaryReader): Dota2MatchMessage;
}

export namespace Dota2MatchMessage {
  export type AsObject = {
    matchUrn: string,
    sequence: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dataStatus: bragi_common_pb.DataStatusMap[keyof bragi_common_pb.DataStatusMap],
    payload?: Dota2MatchMessage.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasSnapshot(): boolean;
    clearSnapshot(): void;
    getSnapshot(): Dota2MatchSnapshot | undefined;
    setSnapshot(value?: Dota2MatchSnapshot): void;

    hasUpdate(): boolean;
    clearUpdate(): void;
    getUpdate(): Dota2MatchUpdate | undefined;
    setUpdate(value?: Dota2MatchUpdate): void;

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
      snapshot?: Dota2MatchSnapshot.AsObject,
      update?: Dota2MatchUpdate.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      SNAPSHOT = 1,
      UPDATE = 2,
    }
  }
}

export class Dota2MatchSnapshot extends jspb.Message {
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
  getMatchState(): Dota2MatchState | undefined;
  setMatchState(value?: Dota2MatchState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2MatchSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2MatchSnapshot): Dota2MatchSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2MatchSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2MatchSnapshot;
  static deserializeBinaryFromReader(message: Dota2MatchSnapshot, reader: jspb.BinaryReader): Dota2MatchSnapshot;
}

export namespace Dota2MatchSnapshot {
  export type AsObject = {
    matchUrn: string,
    sequence: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dataStatus: bragi_common_pb.DataStatusMap[keyof bragi_common_pb.DataStatusMap],
    announcementsList: Array<bragi_common_pb.Announcement.AsObject>,
    matchState?: Dota2MatchState.AsObject,
  }
}

export class Dota2MatchUpdate extends jspb.Message {
  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): Dota2MatchUpdate.Payload | undefined;
  setPayload(value?: Dota2MatchUpdate.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2MatchUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2MatchUpdate): Dota2MatchUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2MatchUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2MatchUpdate;
  static deserializeBinaryFromReader(message: Dota2MatchUpdate, reader: jspb.BinaryReader): Dota2MatchUpdate;
}

export namespace Dota2MatchUpdate {
  export type AsObject = {
    payload?: Dota2MatchUpdate.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasMatchState(): boolean;
    clearMatchState(): void;
    getMatchState(): Dota2MatchState | undefined;
    setMatchState(value?: Dota2MatchState): void;

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
      matchState?: Dota2MatchState.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      MATCH_STATE = 1,
    }
  }
}

export class Dota2MatchState extends jspb.Message {
  getMatchUrn(): string;
  setMatchUrn(value: string): void;

  hasScoreboard(): boolean;
  clearScoreboard(): void;
  getScoreboard(): Dota2MatchScoreboard | undefined;
  setScoreboard(value?: Dota2MatchScoreboard): void;

  hasMinimap(): boolean;
  clearMinimap(): void;
  getMinimap(): Dota2Minimap | undefined;
  setMinimap(value?: Dota2Minimap): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2MatchState.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2MatchState): Dota2MatchState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2MatchState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2MatchState;
  static deserializeBinaryFromReader(message: Dota2MatchState, reader: jspb.BinaryReader): Dota2MatchState;
}

export namespace Dota2MatchState {
  export type AsObject = {
    matchUrn: string,
    scoreboard?: Dota2MatchScoreboard.AsObject,
    minimap?: Dota2Minimap.AsObject,
  }
}

export class Dota2MatchScoreboard extends jspb.Message {
  getMatchUrn(): string;
  setMatchUrn(value: string): void;

  getMapPaused(): boolean;
  setMapPaused(value: boolean): void;

  getHomeTeamUrn(): number;
  setHomeTeamUrn(value: number): void;

  getAwayTeamUrn(): number;
  setAwayTeamUrn(value: number): void;

  getHomeScore(): number;
  setHomeScore(value: number): void;

  getAwayScore(): number;
  setAwayScore(value: number): void;

  getMatchStatus(): bragi_common_pb.MatchStatusTypeMap[keyof bragi_common_pb.MatchStatusTypeMap];
  setMatchStatus(value: bragi_common_pb.MatchStatusTypeMap[keyof bragi_common_pb.MatchStatusTypeMap]): void;

  hasCurrentMap(): boolean;
  clearCurrentMap(): void;
  getCurrentMap(): Dota2MapScoreboard | undefined;
  setCurrentMap(value?: Dota2MapScoreboard): void;

  clearPreviousMapsList(): void;
  getPreviousMapsList(): Array<Dota2MapScoreboard>;
  setPreviousMapsList(value: Array<Dota2MapScoreboard>): void;
  addPreviousMaps(value?: Dota2MapScoreboard, index?: number): Dota2MapScoreboard;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2MatchScoreboard.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2MatchScoreboard): Dota2MatchScoreboard.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2MatchScoreboard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2MatchScoreboard;
  static deserializeBinaryFromReader(message: Dota2MatchScoreboard, reader: jspb.BinaryReader): Dota2MatchScoreboard;
}

export namespace Dota2MatchScoreboard {
  export type AsObject = {
    matchUrn: string,
    mapPaused: boolean,
    homeTeamUrn: number,
    awayTeamUrn: number,
    homeScore: number,
    awayScore: number,
    matchStatus: bragi_common_pb.MatchStatusTypeMap[keyof bragi_common_pb.MatchStatusTypeMap],
    currentMap?: Dota2MapScoreboard.AsObject,
    previousMapsList: Array<Dota2MapScoreboard.AsObject>,
  }
}

export class Dota2MapScoreboard extends jspb.Message {
  getMapOrder(): number;
  setMapOrder(value: number): void;

  hasGameTime(): boolean;
  clearGameTime(): void;
  getGameTime(): google_protobuf_duration_pb.Duration | undefined;
  setGameTime(value?: google_protobuf_duration_pb.Duration): void;

  hasHomeTeam(): boolean;
  clearHomeTeam(): void;
  getHomeTeam(): Dota2TeamScoreboard | undefined;
  setHomeTeam(value?: Dota2TeamScoreboard): void;

  hasAwayTeam(): boolean;
  clearAwayTeam(): void;
  getAwayTeam(): Dota2TeamScoreboard | undefined;
  setAwayTeam(value?: Dota2TeamScoreboard): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2MapScoreboard.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2MapScoreboard): Dota2MapScoreboard.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2MapScoreboard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2MapScoreboard;
  static deserializeBinaryFromReader(message: Dota2MapScoreboard, reader: jspb.BinaryReader): Dota2MapScoreboard;
}

export namespace Dota2MapScoreboard {
  export type AsObject = {
    mapOrder: number,
    gameTime?: google_protobuf_duration_pb.Duration.AsObject,
    homeTeam?: Dota2TeamScoreboard.AsObject,
    awayTeam?: Dota2TeamScoreboard.AsObject,
  }
}

export class Dota2TeamScoreboard extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getFaction(): Dota2FactionMap[keyof Dota2FactionMap];
  setFaction(value: Dota2FactionMap[keyof Dota2FactionMap]): void;

  getBarracks(): number;
  setBarracks(value: number): void;

  getKills(): number;
  setKills(value: number): void;

  getNetWorth(): number;
  setNetWorth(value: number): void;

  getRoshans(): number;
  setRoshans(value: number): void;

  getTowers(): number;
  setTowers(value: number): void;

  hasWon(): boolean;
  clearWon(): void;
  getWon(): boolean;
  setWon(value: boolean): void;

  clearPlayersList(): void;
  getPlayersList(): Array<Dota2PlayerScoreboard>;
  setPlayersList(value: Array<Dota2PlayerScoreboard>): void;
  addPlayers(value?: Dota2PlayerScoreboard, index?: number): Dota2PlayerScoreboard;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2TeamScoreboard.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2TeamScoreboard): Dota2TeamScoreboard.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2TeamScoreboard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2TeamScoreboard;
  static deserializeBinaryFromReader(message: Dota2TeamScoreboard, reader: jspb.BinaryReader): Dota2TeamScoreboard;
}

export namespace Dota2TeamScoreboard {
  export type AsObject = {
    teamUrn: string,
    faction: Dota2FactionMap[keyof Dota2FactionMap],
    barracks: number,
    kills: number,
    netWorth: number,
    roshans: number,
    towers: number,
    won: boolean,
    playersList: Array<Dota2PlayerScoreboard.AsObject>,
  }
}

export class Dota2PlayerScoreboard extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getSlotId(): number;
  setSlotId(value: number): void;

  getExtName(): string;
  setExtName(value: string): void;

  getHeroId(): number;
  setHeroId(value: number): void;

  getHasAegis(): boolean;
  setHasAegis(value: boolean): void;

  hasRespawnTimer(): boolean;
  clearRespawnTimer(): void;
  getRespawnTimer(): google_protobuf_duration_pb.Duration | undefined;
  setRespawnTimer(value?: google_protobuf_duration_pb.Duration): void;

  getAssists(): number;
  setAssists(value: number): void;

  getDeaths(): number;
  setDeaths(value: number): void;

  getKills(): number;
  setKills(value: number): void;

  getNetWorth(): number;
  setNetWorth(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2PlayerScoreboard.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2PlayerScoreboard): Dota2PlayerScoreboard.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2PlayerScoreboard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2PlayerScoreboard;
  static deserializeBinaryFromReader(message: Dota2PlayerScoreboard, reader: jspb.BinaryReader): Dota2PlayerScoreboard;
}

export namespace Dota2PlayerScoreboard {
  export type AsObject = {
    playerUrn: string,
    slotId: number,
    extName: string,
    heroId: number,
    hasAegis: boolean,
    respawnTimer?: google_protobuf_duration_pb.Duration.AsObject,
    assists: number,
    deaths: number,
    kills: number,
    netWorth: number,
  }
}

export class Dota2Minimap extends jspb.Message {
  getMatchUrn(): string;
  setMatchUrn(value: string): void;

  getMapOrder(): number;
  setMapOrder(value: number): void;

  getMapPaused(): boolean;
  setMapPaused(value: boolean): void;

  clearTowersList(): void;
  getTowersList(): Array<Dota2MinimapTower>;
  setTowersList(value: Array<Dota2MinimapTower>): void;
  addTowers(value?: Dota2MinimapTower, index?: number): Dota2MinimapTower;

  clearBarracksList(): void;
  getBarracksList(): Array<Dota2MinimapBarrack>;
  setBarracksList(value: Array<Dota2MinimapBarrack>): void;
  addBarracks(value?: Dota2MinimapBarrack, index?: number): Dota2MinimapBarrack;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2Minimap.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2Minimap): Dota2Minimap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2Minimap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2Minimap;
  static deserializeBinaryFromReader(message: Dota2Minimap, reader: jspb.BinaryReader): Dota2Minimap;
}

export namespace Dota2Minimap {
  export type AsObject = {
    matchUrn: string,
    mapOrder: number,
    mapPaused: boolean,
    towersList: Array<Dota2MinimapTower.AsObject>,
    barracksList: Array<Dota2MinimapBarrack.AsObject>,
  }
}

export class Dota2MinimapTower extends jspb.Message {
  getLane(): Dota2LaneMap[keyof Dota2LaneMap];
  setLane(value: Dota2LaneMap[keyof Dota2LaneMap]): void;

  getFaction(): Dota2FactionMap[keyof Dota2FactionMap];
  setFaction(value: Dota2FactionMap[keyof Dota2FactionMap]): void;

  getTier(): Dota2TowerTierMap[keyof Dota2TowerTierMap];
  setTier(value: Dota2TowerTierMap[keyof Dota2TowerTierMap]): void;

  getAlive(): boolean;
  setAlive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2MinimapTower.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2MinimapTower): Dota2MinimapTower.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2MinimapTower, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2MinimapTower;
  static deserializeBinaryFromReader(message: Dota2MinimapTower, reader: jspb.BinaryReader): Dota2MinimapTower;
}

export namespace Dota2MinimapTower {
  export type AsObject = {
    lane: Dota2LaneMap[keyof Dota2LaneMap],
    faction: Dota2FactionMap[keyof Dota2FactionMap],
    tier: Dota2TowerTierMap[keyof Dota2TowerTierMap],
    alive: boolean,
  }
}

export class Dota2MinimapBarrack extends jspb.Message {
  getLane(): Dota2LaneMap[keyof Dota2LaneMap];
  setLane(value: Dota2LaneMap[keyof Dota2LaneMap]): void;

  getFaction(): Dota2FactionMap[keyof Dota2FactionMap];
  setFaction(value: Dota2FactionMap[keyof Dota2FactionMap]): void;

  getType(): Dota2BarrackTypeMap[keyof Dota2BarrackTypeMap];
  setType(value: Dota2BarrackTypeMap[keyof Dota2BarrackTypeMap]): void;

  getAlive(): boolean;
  setAlive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2MinimapBarrack.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2MinimapBarrack): Dota2MinimapBarrack.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2MinimapBarrack, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2MinimapBarrack;
  static deserializeBinaryFromReader(message: Dota2MinimapBarrack, reader: jspb.BinaryReader): Dota2MinimapBarrack;
}

export namespace Dota2MinimapBarrack {
  export type AsObject = {
    lane: Dota2LaneMap[keyof Dota2LaneMap],
    faction: Dota2FactionMap[keyof Dota2FactionMap],
    type: Dota2BarrackTypeMap[keyof Dota2BarrackTypeMap],
    alive: boolean,
  }
}

export interface Dota2FactionMap {
  DOTA2_FACTION_UNSPECIFIED: 0;
  DOTA2_FACTION_RADIANT: 1;
  DOTA2_FACTION_DIRE: 2;
}

export const Dota2Faction: Dota2FactionMap;

export interface Dota2LaneMap {
  DOTA2_LANE_UNSPECIFIED: 0;
  DOTA2_LANE_TOP: 1;
  DOTA2_LANE_MID: 2;
  DOTA2_LANE_BOT: 3;
}

export const Dota2Lane: Dota2LaneMap;

export interface Dota2TowerTierMap {
  DOTA2_TOWER_TIER_UNSPECIFIED: 0;
  DOTA2_TOWER_TIER_1: 1;
  DOTA2_TOWER_TIER_2: 2;
  DOTA2_TOWER_TIER_3: 3;
  DOTA2_TOWER_TIER_4: 4;
}

export const Dota2TowerTier: Dota2TowerTierMap;

export interface Dota2BarrackTypeMap {
  DOTA2_BARRACK_TYPE_UNSPECIFIED: 0;
  DOTA2_BARRACK_TYPE_RANGED: 1;
  DOTA2_BARRACK_TYPE_MELEE: 2;
}

export const Dota2BarrackType: Dota2BarrackTypeMap;

