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

  hasTournament(): boolean;
  clearTournament(): void;
  getTournament(): bragi_common_pb.Tournament | undefined;
  setTournament(value?: bragi_common_pb.Tournament): void;

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
    tournament?: bragi_common_pb.Tournament.AsObject,
  }
}

export class PicksAndBansSelectionsPerTeam extends jspb.Message {
  getState(): PicksAndBansSelectionsPerTeam.StateMap[keyof PicksAndBansSelectionsPerTeam.StateMap];
  setState(value: PicksAndBansSelectionsPerTeam.StateMap[keyof PicksAndBansSelectionsPerTeam.StateMap]): void;

  getActiveTeam(): PicksAndBansSelectionsPerTeam.TeamTypeMap[keyof PicksAndBansSelectionsPerTeam.TeamTypeMap];
  setActiveTeam(value: PicksAndBansSelectionsPerTeam.TeamTypeMap[keyof PicksAndBansSelectionsPerTeam.TeamTypeMap]): void;

  getSelectionType(): PicksAndBansSelectionsPerTeam.SelectionTypeMap[keyof PicksAndBansSelectionsPerTeam.SelectionTypeMap];
  setSelectionType(value: PicksAndBansSelectionsPerTeam.SelectionTypeMap[keyof PicksAndBansSelectionsPerTeam.SelectionTypeMap]): void;

  getActiveTeamTimeRemaining(): number;
  setActiveTeamTimeRemaining(value: number): void;

  getRadiantBonusTime(): number;
  setRadiantBonusTime(value: number): void;

  getDireBonusTime(): number;
  setDireBonusTime(value: number): void;

  hasRadiantSelections(): boolean;
  clearRadiantSelections(): void;
  getRadiantSelections(): PicksAndBansSelectionsPerTeam.RadiantSelections | undefined;
  setRadiantSelections(value?: PicksAndBansSelectionsPerTeam.RadiantSelections): void;

  hasDireSelections(): boolean;
  clearDireSelections(): void;
  getDireSelections(): PicksAndBansSelectionsPerTeam.DireSelections | undefined;
  setDireSelections(value?: PicksAndBansSelectionsPerTeam.DireSelections): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PicksAndBansSelectionsPerTeam.AsObject;
  static toObject(includeInstance: boolean, msg: PicksAndBansSelectionsPerTeam): PicksAndBansSelectionsPerTeam.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PicksAndBansSelectionsPerTeam, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PicksAndBansSelectionsPerTeam;
  static deserializeBinaryFromReader(message: PicksAndBansSelectionsPerTeam, reader: jspb.BinaryReader): PicksAndBansSelectionsPerTeam;
}

export namespace PicksAndBansSelectionsPerTeam {
  export type AsObject = {
    state: PicksAndBansSelectionsPerTeam.StateMap[keyof PicksAndBansSelectionsPerTeam.StateMap],
    activeTeam: PicksAndBansSelectionsPerTeam.TeamTypeMap[keyof PicksAndBansSelectionsPerTeam.TeamTypeMap],
    selectionType: PicksAndBansSelectionsPerTeam.SelectionTypeMap[keyof PicksAndBansSelectionsPerTeam.SelectionTypeMap],
    activeTeamTimeRemaining: number,
    radiantBonusTime: number,
    direBonusTime: number,
    radiantSelections?: PicksAndBansSelectionsPerTeam.RadiantSelections.AsObject,
    direSelections?: PicksAndBansSelectionsPerTeam.DireSelections.AsObject,
  }

  export class HeroSelection extends jspb.Message {
    getHeroSteamId(): number;
    setHeroSteamId(value: number): void;

    getHeroKey(): string;
    setHeroKey(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HeroSelection.AsObject;
    static toObject(includeInstance: boolean, msg: HeroSelection): HeroSelection.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HeroSelection, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HeroSelection;
    static deserializeBinaryFromReader(message: HeroSelection, reader: jspb.BinaryReader): HeroSelection;
  }

  export namespace HeroSelection {
    export type AsObject = {
      heroSteamId: number,
      heroKey: string,
    }
  }

  export class RadiantSelections extends jspb.Message {
    clearBansList(): void;
    getBansList(): Array<PicksAndBansSelectionsPerTeam.HeroSelection>;
    setBansList(value: Array<PicksAndBansSelectionsPerTeam.HeroSelection>): void;
    addBans(value?: PicksAndBansSelectionsPerTeam.HeroSelection, index?: number): PicksAndBansSelectionsPerTeam.HeroSelection;

    clearPicksList(): void;
    getPicksList(): Array<PicksAndBansSelectionsPerTeam.HeroSelection>;
    setPicksList(value: Array<PicksAndBansSelectionsPerTeam.HeroSelection>): void;
    addPicks(value?: PicksAndBansSelectionsPerTeam.HeroSelection, index?: number): PicksAndBansSelectionsPerTeam.HeroSelection;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RadiantSelections.AsObject;
    static toObject(includeInstance: boolean, msg: RadiantSelections): RadiantSelections.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RadiantSelections, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RadiantSelections;
    static deserializeBinaryFromReader(message: RadiantSelections, reader: jspb.BinaryReader): RadiantSelections;
  }

  export namespace RadiantSelections {
    export type AsObject = {
      bansList: Array<PicksAndBansSelectionsPerTeam.HeroSelection.AsObject>,
      picksList: Array<PicksAndBansSelectionsPerTeam.HeroSelection.AsObject>,
    }
  }

  export class DireSelections extends jspb.Message {
    clearBansList(): void;
    getBansList(): Array<PicksAndBansSelectionsPerTeam.HeroSelection>;
    setBansList(value: Array<PicksAndBansSelectionsPerTeam.HeroSelection>): void;
    addBans(value?: PicksAndBansSelectionsPerTeam.HeroSelection, index?: number): PicksAndBansSelectionsPerTeam.HeroSelection;

    clearPicksList(): void;
    getPicksList(): Array<PicksAndBansSelectionsPerTeam.HeroSelection>;
    setPicksList(value: Array<PicksAndBansSelectionsPerTeam.HeroSelection>): void;
    addPicks(value?: PicksAndBansSelectionsPerTeam.HeroSelection, index?: number): PicksAndBansSelectionsPerTeam.HeroSelection;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DireSelections.AsObject;
    static toObject(includeInstance: boolean, msg: DireSelections): DireSelections.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DireSelections, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DireSelections;
    static deserializeBinaryFromReader(message: DireSelections, reader: jspb.BinaryReader): DireSelections;
  }

  export namespace DireSelections {
    export type AsObject = {
      bansList: Array<PicksAndBansSelectionsPerTeam.HeroSelection.AsObject>,
      picksList: Array<PicksAndBansSelectionsPerTeam.HeroSelection.AsObject>,
    }
  }

  export interface StateMap {
    STATE_UNSPECIFIED: 0;
    STATE_IN_PROGRESS: 1;
    STATE_ENDED: 2;
  }

  export const State: StateMap;

  export interface SelectionTypeMap {
    SELECTION_TYPE_UNSPECIFIED: 0;
    SELECTION_TYPE_PICK: 1;
    SELECTION_TYPE_BAN: 2;
  }

  export const SelectionType: SelectionTypeMap;

  export interface TeamTypeMap {
    TEAM_TYPE_UNSPECIFIED: 0;
    TEAM_TYPE_RADIANT: 1;
    TEAM_TYPE_DIRE: 2;
  }

  export const TeamType: TeamTypeMap;
}

export class PicksAndBansSelections extends jspb.Message {
  hasCurrentHeroSelection(): boolean;
  clearCurrentHeroSelection(): void;
  getCurrentHeroSelection(): PicksAndBansSelections.CurrentHeroSelection | undefined;
  setCurrentHeroSelection(value?: PicksAndBansSelections.CurrentHeroSelection): void;

  clearPicksAndBansList(): void;
  getPicksAndBansList(): Array<PicksAndBansSelections.PickOrBan>;
  setPicksAndBansList(value: Array<PicksAndBansSelections.PickOrBan>): void;
  addPicksAndBans(value?: PicksAndBansSelections.PickOrBan, index?: number): PicksAndBansSelections.PickOrBan;

  getState(): PicksAndBansSelections.StateMap[keyof PicksAndBansSelections.StateMap];
  setState(value: PicksAndBansSelections.StateMap[keyof PicksAndBansSelections.StateMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PicksAndBansSelections.AsObject;
  static toObject(includeInstance: boolean, msg: PicksAndBansSelections): PicksAndBansSelections.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PicksAndBansSelections, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PicksAndBansSelections;
  static deserializeBinaryFromReader(message: PicksAndBansSelections, reader: jspb.BinaryReader): PicksAndBansSelections;
}

export namespace PicksAndBansSelections {
  export type AsObject = {
    currentHeroSelection?: PicksAndBansSelections.CurrentHeroSelection.AsObject,
    picksAndBansList: Array<PicksAndBansSelections.PickOrBan.AsObject>,
    state: PicksAndBansSelections.StateMap[keyof PicksAndBansSelections.StateMap],
  }

  export class CurrentHeroSelection extends jspb.Message {
    getActiveTeam(): PicksAndBansSelections.TeamTypeMap[keyof PicksAndBansSelections.TeamTypeMap];
    setActiveTeam(value: PicksAndBansSelections.TeamTypeMap[keyof PicksAndBansSelections.TeamTypeMap]): void;

    getPick(): boolean;
    setPick(value: boolean): void;

    getActiveTeamTimeRemaining(): number;
    setActiveTeamTimeRemaining(value: number): void;

    getRadiantBonusTime(): number;
    setRadiantBonusTime(value: number): void;

    getDireBonusTime(): number;
    setDireBonusTime(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CurrentHeroSelection.AsObject;
    static toObject(includeInstance: boolean, msg: CurrentHeroSelection): CurrentHeroSelection.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CurrentHeroSelection, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CurrentHeroSelection;
    static deserializeBinaryFromReader(message: CurrentHeroSelection, reader: jspb.BinaryReader): CurrentHeroSelection;
  }

  export namespace CurrentHeroSelection {
    export type AsObject = {
      activeTeam: PicksAndBansSelections.TeamTypeMap[keyof PicksAndBansSelections.TeamTypeMap],
      pick: boolean,
      activeTeamTimeRemaining: number,
      radiantBonusTime: number,
      direBonusTime: number,
    }
  }

  export class PickOrBan extends jspb.Message {
    getTeam(): PicksAndBansSelections.TeamTypeMap[keyof PicksAndBansSelections.TeamTypeMap];
    setTeam(value: PicksAndBansSelections.TeamTypeMap[keyof PicksAndBansSelections.TeamTypeMap]): void;

    getPick(): boolean;
    setPick(value: boolean): void;

    getHeroSteamId(): number;
    setHeroSteamId(value: number): void;

    getHeroKey(): string;
    setHeroKey(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PickOrBan.AsObject;
    static toObject(includeInstance: boolean, msg: PickOrBan): PickOrBan.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PickOrBan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PickOrBan;
    static deserializeBinaryFromReader(message: PickOrBan, reader: jspb.BinaryReader): PickOrBan;
  }

  export namespace PickOrBan {
    export type AsObject = {
      team: PicksAndBansSelections.TeamTypeMap[keyof PicksAndBansSelections.TeamTypeMap],
      pick: boolean,
      heroSteamId: number,
      heroKey: string,
    }
  }

  export interface TeamTypeMap {
    TEAM_TYPE_UNSPECIFIED: 0;
    TEAM_TYPE_RADIANT: 1;
    TEAM_TYPE_DIRE: 2;
  }

  export const TeamType: TeamTypeMap;

  export interface StateMap {
    STATE_UNSPECIFIED: 0;
    STATE_IN_PROGRESS: 1;
    STATE_ENDED: 2;
  }

  export const State: StateMap;
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

    hasPartialUpdates(): boolean;
    clearPartialUpdates(): void;
    getPartialUpdates(): Dota2MatchStatePartialUpdates | undefined;
    setPartialUpdates(value?: Dota2MatchStatePartialUpdates): void;

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
      partialUpdates?: Dota2MatchStatePartialUpdates.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      MATCH_STATE = 1,
      PARTIAL_UPDATES = 2,
    }
  }
}

export class Dota2MatchStatePartialUpdates extends jspb.Message {
  clearUpdatesList(): void;
  getUpdatesList(): Array<Dota2MatchStatePartialUpdate>;
  setUpdatesList(value: Array<Dota2MatchStatePartialUpdate>): void;
  addUpdates(value?: Dota2MatchStatePartialUpdate, index?: number): Dota2MatchStatePartialUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2MatchStatePartialUpdates.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2MatchStatePartialUpdates): Dota2MatchStatePartialUpdates.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2MatchStatePartialUpdates, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2MatchStatePartialUpdates;
  static deserializeBinaryFromReader(message: Dota2MatchStatePartialUpdates, reader: jspb.BinaryReader): Dota2MatchStatePartialUpdates;
}

export namespace Dota2MatchStatePartialUpdates {
  export type AsObject = {
    updatesList: Array<Dota2MatchStatePartialUpdate.AsObject>,
  }
}

export class Dota2MatchStatePartialUpdate extends jspb.Message {
  hasScore(): boolean;
  clearScore(): void;
  getScore(): Dota2MatchScoreState | undefined;
  setScore(value?: Dota2MatchScoreState): void;

  hasCurrentMapState(): boolean;
  clearCurrentMapState(): void;
  getCurrentMapState(): Dota2CurrentMapState | undefined;
  setCurrentMapState(value?: Dota2CurrentMapState): void;

  hasCurrentMapStatePartialUpdate(): boolean;
  clearCurrentMapStatePartialUpdate(): void;
  getCurrentMapStatePartialUpdate(): Dota2CurrentMapStatePartialUpdate | undefined;
  setCurrentMapStatePartialUpdate(value?: Dota2CurrentMapStatePartialUpdate): void;

  hasPicksAndBansSelections(): boolean;
  clearPicksAndBansSelections(): void;
  getPicksAndBansSelections(): PicksAndBansSelections | undefined;
  setPicksAndBansSelections(value?: PicksAndBansSelections): void;

  hasPicksAndBansSelectionsPerTeam(): boolean;
  clearPicksAndBansSelectionsPerTeam(): void;
  getPicksAndBansSelectionsPerTeam(): PicksAndBansSelectionsPerTeam | undefined;
  setPicksAndBansSelectionsPerTeam(value?: PicksAndBansSelectionsPerTeam): void;

  getUpdateCase(): Dota2MatchStatePartialUpdate.UpdateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2MatchStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2MatchStatePartialUpdate): Dota2MatchStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2MatchStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2MatchStatePartialUpdate;
  static deserializeBinaryFromReader(message: Dota2MatchStatePartialUpdate, reader: jspb.BinaryReader): Dota2MatchStatePartialUpdate;
}

export namespace Dota2MatchStatePartialUpdate {
  export type AsObject = {
    score?: Dota2MatchScoreState.AsObject,
    currentMapState?: Dota2CurrentMapState.AsObject,
    currentMapStatePartialUpdate?: Dota2CurrentMapStatePartialUpdate.AsObject,
    picksAndBansSelections?: PicksAndBansSelections.AsObject,
    picksAndBansSelectionsPerTeam?: PicksAndBansSelectionsPerTeam.AsObject,
  }

  export enum UpdateCase {
    UPDATE_NOT_SET = 0,
    SCORE = 1,
    CURRENT_MAP_STATE = 2,
    CURRENT_MAP_STATE_PARTIAL_UPDATE = 3,
    PICKS_AND_BANS_SELECTIONS = 4,
    PICKS_AND_BANS_SELECTIONS_PER_TEAM = 5,
  }
}

export class Dota2MatchState extends jspb.Message {
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
  getScore(): Dota2MatchScoreState | undefined;
  setScore(value?: Dota2MatchScoreState): void;

  getMatchStatus(): bragi_common_pb.MatchStatusTypeMap[keyof bragi_common_pb.MatchStatusTypeMap];
  setMatchStatus(value: bragi_common_pb.MatchStatusTypeMap[keyof bragi_common_pb.MatchStatusTypeMap]): void;

  hasCurrentMap(): boolean;
  clearCurrentMap(): void;
  getCurrentMap(): Dota2CurrentMapState | undefined;
  setCurrentMap(value?: Dota2CurrentMapState): void;

  clearPreviousMapsList(): void;
  getPreviousMapsList(): Array<Dota2PreviousMapState>;
  setPreviousMapsList(value: Array<Dota2PreviousMapState>): void;
  addPreviousMaps(value?: Dota2PreviousMapState, index?: number): Dota2PreviousMapState;

  hasPicksAndBansSelections(): boolean;
  clearPicksAndBansSelections(): void;
  getPicksAndBansSelections(): PicksAndBansSelections | undefined;
  setPicksAndBansSelections(value?: PicksAndBansSelections): void;

  hasPicksAndBansSelectionsPerTeam(): boolean;
  clearPicksAndBansSelectionsPerTeam(): void;
  getPicksAndBansSelectionsPerTeam(): PicksAndBansSelectionsPerTeam | undefined;
  setPicksAndBansSelectionsPerTeam(value?: PicksAndBansSelectionsPerTeam): void;

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
    matchType: bragi_common_pb.BestOfTypeMap[keyof bragi_common_pb.BestOfTypeMap],
    homeTeam?: bragi_common_pb.Team.AsObject,
    awayTeam?: bragi_common_pb.Team.AsObject,
    score?: Dota2MatchScoreState.AsObject,
    matchStatus: bragi_common_pb.MatchStatusTypeMap[keyof bragi_common_pb.MatchStatusTypeMap],
    currentMap?: Dota2CurrentMapState.AsObject,
    previousMapsList: Array<Dota2PreviousMapState.AsObject>,
    picksAndBansSelections?: PicksAndBansSelections.AsObject,
    picksAndBansSelectionsPerTeam?: PicksAndBansSelectionsPerTeam.AsObject,
  }
}

export class Dota2MatchScoreState extends jspb.Message {
  getHomeScore(): number;
  setHomeScore(value: number): void;

  getAwayScore(): number;
  setAwayScore(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2MatchScoreState.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2MatchScoreState): Dota2MatchScoreState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2MatchScoreState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2MatchScoreState;
  static deserializeBinaryFromReader(message: Dota2MatchScoreState, reader: jspb.BinaryReader): Dota2MatchScoreState;
}

export namespace Dota2MatchScoreState {
  export type AsObject = {
    homeScore: number,
    awayScore: number,
  }
}

export class Dota2CurrentMapStatePartialUpdate extends jspb.Message {
  hasGameTime(): boolean;
  clearGameTime(): void;
  getGameTime(): Dota2CurrentMapTimeState | undefined;
  setGameTime(value?: Dota2CurrentMapTimeState): void;

  hasTeamCurrentMapState(): boolean;
  clearTeamCurrentMapState(): void;
  getTeamCurrentMapState(): Dota2TeamCurrentMapState | undefined;
  setTeamCurrentMapState(value?: Dota2TeamCurrentMapState): void;

  hasTeamCurrentMapPartialUpdate(): boolean;
  clearTeamCurrentMapPartialUpdate(): void;
  getTeamCurrentMapPartialUpdate(): Dota2TeamCurrentMapStatePartialUpdate | undefined;
  setTeamCurrentMapPartialUpdate(value?: Dota2TeamCurrentMapStatePartialUpdate): void;

  hasTowers(): boolean;
  clearTowers(): void;
  getTowers(): Dota2Towers | undefined;
  setTowers(value?: Dota2Towers): void;

  hasBarracks(): boolean;
  clearBarracks(): void;
  getBarracks(): Dota2Barracks | undefined;
  setBarracks(value?: Dota2Barracks): void;

  hasRoshan(): boolean;
  clearRoshan(): void;
  getRoshan(): Roshan | undefined;
  setRoshan(value?: Roshan): void;

  getUpdateCase(): Dota2CurrentMapStatePartialUpdate.UpdateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2CurrentMapStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2CurrentMapStatePartialUpdate): Dota2CurrentMapStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2CurrentMapStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2CurrentMapStatePartialUpdate;
  static deserializeBinaryFromReader(message: Dota2CurrentMapStatePartialUpdate, reader: jspb.BinaryReader): Dota2CurrentMapStatePartialUpdate;
}

export namespace Dota2CurrentMapStatePartialUpdate {
  export type AsObject = {
    gameTime?: Dota2CurrentMapTimeState.AsObject,
    teamCurrentMapState?: Dota2TeamCurrentMapState.AsObject,
    teamCurrentMapPartialUpdate?: Dota2TeamCurrentMapStatePartialUpdate.AsObject,
    towers?: Dota2Towers.AsObject,
    barracks?: Dota2Barracks.AsObject,
    roshan?: Roshan.AsObject,
  }

  export enum UpdateCase {
    UPDATE_NOT_SET = 0,
    GAME_TIME = 1,
    TEAM_CURRENT_MAP_STATE = 2,
    TEAM_CURRENT_MAP_PARTIAL_UPDATE = 3,
    TOWERS = 4,
    BARRACKS = 5,
    ROSHAN = 8,
  }
}

export class Dota2CurrentMapState extends jspb.Message {
  getMapOrder(): number;
  setMapOrder(value: number): void;

  getMapPaused(): boolean;
  setMapPaused(value: boolean): void;

  hasGameTime(): boolean;
  clearGameTime(): void;
  getGameTime(): Dota2CurrentMapTimeState | undefined;
  setGameTime(value?: Dota2CurrentMapTimeState): void;

  getTeamsMap(): jspb.Map<string, Dota2TeamCurrentMapState>;
  clearTeamsMap(): void;
  hasTowers(): boolean;
  clearTowers(): void;
  getTowers(): Dota2Towers | undefined;
  setTowers(value?: Dota2Towers): void;

  hasBarracks(): boolean;
  clearBarracks(): void;
  getBarracks(): Dota2Barracks | undefined;
  setBarracks(value?: Dota2Barracks): void;

  hasRoshan(): boolean;
  clearRoshan(): void;
  getRoshan(): Roshan | undefined;
  setRoshan(value?: Roshan): void;

  getDayTime(): boolean;
  setDayTime(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2CurrentMapState.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2CurrentMapState): Dota2CurrentMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2CurrentMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2CurrentMapState;
  static deserializeBinaryFromReader(message: Dota2CurrentMapState, reader: jspb.BinaryReader): Dota2CurrentMapState;
}

export namespace Dota2CurrentMapState {
  export type AsObject = {
    mapOrder: number,
    mapPaused: boolean,
    gameTime?: Dota2CurrentMapTimeState.AsObject,
    teamsMap: Array<[string, Dota2TeamCurrentMapState.AsObject]>,
    towers?: Dota2Towers.AsObject,
    barracks?: Dota2Barracks.AsObject,
    roshan?: Roshan.AsObject,
    dayTime: boolean,
  }
}

export class Dota2CurrentMapTimeState extends jspb.Message {
  hasGameTime(): boolean;
  clearGameTime(): void;
  getGameTime(): google_protobuf_duration_pb.Duration | undefined;
  setGameTime(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2CurrentMapTimeState.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2CurrentMapTimeState): Dota2CurrentMapTimeState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2CurrentMapTimeState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2CurrentMapTimeState;
  static deserializeBinaryFromReader(message: Dota2CurrentMapTimeState, reader: jspb.BinaryReader): Dota2CurrentMapTimeState;
}

export namespace Dota2CurrentMapTimeState {
  export type AsObject = {
    gameTime?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class Dota2PreviousMapState extends jspb.Message {
  getMapOrder(): number;
  setMapOrder(value: number): void;

  getTeamsMap(): jspb.Map<string, Dota2TeamPreviousMapState>;
  clearTeamsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2PreviousMapState.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2PreviousMapState): Dota2PreviousMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2PreviousMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2PreviousMapState;
  static deserializeBinaryFromReader(message: Dota2PreviousMapState, reader: jspb.BinaryReader): Dota2PreviousMapState;
}

export namespace Dota2PreviousMapState {
  export type AsObject = {
    mapOrder: number,
    teamsMap: Array<[string, Dota2TeamPreviousMapState.AsObject]>,
  }
}

export class Dota2TeamCurrentMapStatePartialUpdate extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): Dota2TeamCurrentMapStatePartialUpdate.Payload | undefined;
  setPayload(value?: Dota2TeamCurrentMapStatePartialUpdate.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2TeamCurrentMapStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2TeamCurrentMapStatePartialUpdate): Dota2TeamCurrentMapStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2TeamCurrentMapStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2TeamCurrentMapStatePartialUpdate;
  static deserializeBinaryFromReader(message: Dota2TeamCurrentMapStatePartialUpdate, reader: jspb.BinaryReader): Dota2TeamCurrentMapStatePartialUpdate;
}

export namespace Dota2TeamCurrentMapStatePartialUpdate {
  export type AsObject = {
    teamUrn: string,
    payload?: Dota2TeamCurrentMapStatePartialUpdate.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasStatistics(): boolean;
    clearStatistics(): void;
    getStatistics(): Dota2TeamCurrentMapStatisticsState | undefined;
    setStatistics(value?: Dota2TeamCurrentMapStatisticsState): void;

    hasPlayerCurrentMapState(): boolean;
    clearPlayerCurrentMapState(): void;
    getPlayerCurrentMapState(): Dota2PlayerCurrentMapState | undefined;
    setPlayerCurrentMapState(value?: Dota2PlayerCurrentMapState): void;

    hasPlayerCurrentMapPartialUpdate(): boolean;
    clearPlayerCurrentMapPartialUpdate(): void;
    getPlayerCurrentMapPartialUpdate(): Dota2PlayerCurrentMapStatePartialUpdate | undefined;
    setPlayerCurrentMapPartialUpdate(value?: Dota2PlayerCurrentMapStatePartialUpdate): void;

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
      statistics?: Dota2TeamCurrentMapStatisticsState.AsObject,
      playerCurrentMapState?: Dota2PlayerCurrentMapState.AsObject,
      playerCurrentMapPartialUpdate?: Dota2PlayerCurrentMapStatePartialUpdate.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      STATISTICS = 1,
      PLAYER_CURRENT_MAP_STATE = 2,
      PLAYER_CURRENT_MAP_PARTIAL_UPDATE = 3,
    }
  }
}

export class Dota2TeamCurrentMapState extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getFaction(): Dota2FactionMap[keyof Dota2FactionMap];
  setFaction(value: Dota2FactionMap[keyof Dota2FactionMap]): void;

  hasStatistics(): boolean;
  clearStatistics(): void;
  getStatistics(): Dota2TeamCurrentMapStatisticsState | undefined;
  setStatistics(value?: Dota2TeamCurrentMapStatisticsState): void;

  hasWon(): boolean;
  clearWon(): void;
  getWon(): boolean;
  setWon(value: boolean): void;

  getPlayersMap(): jspb.Map<string, Dota2PlayerCurrentMapState>;
  clearPlayersMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2TeamCurrentMapState.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2TeamCurrentMapState): Dota2TeamCurrentMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2TeamCurrentMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2TeamCurrentMapState;
  static deserializeBinaryFromReader(message: Dota2TeamCurrentMapState, reader: jspb.BinaryReader): Dota2TeamCurrentMapState;
}

export namespace Dota2TeamCurrentMapState {
  export type AsObject = {
    teamUrn: string,
    faction: Dota2FactionMap[keyof Dota2FactionMap],
    statistics?: Dota2TeamCurrentMapStatisticsState.AsObject,
    won: boolean,
    playersMap: Array<[string, Dota2PlayerCurrentMapState.AsObject]>,
  }
}

export class Dota2TeamCurrentMapStatisticsState extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

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

  getHasRoshans(): boolean;
  setHasRoshans(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2TeamCurrentMapStatisticsState.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2TeamCurrentMapStatisticsState): Dota2TeamCurrentMapStatisticsState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2TeamCurrentMapStatisticsState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2TeamCurrentMapStatisticsState;
  static deserializeBinaryFromReader(message: Dota2TeamCurrentMapStatisticsState, reader: jspb.BinaryReader): Dota2TeamCurrentMapStatisticsState;
}

export namespace Dota2TeamCurrentMapStatisticsState {
  export type AsObject = {
    teamUrn: string,
    barracks: number,
    kills: number,
    netWorth: number,
    roshans: number,
    towers: number,
    hasRoshans: boolean,
  }
}

export class Dota2PlayerCurrentMapStatePartialUpdate extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): Dota2PlayerCurrentMapStatePartialUpdate.Payload | undefined;
  setPayload(value?: Dota2PlayerCurrentMapStatePartialUpdate.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2PlayerCurrentMapStatePartialUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2PlayerCurrentMapStatePartialUpdate): Dota2PlayerCurrentMapStatePartialUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2PlayerCurrentMapStatePartialUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2PlayerCurrentMapStatePartialUpdate;
  static deserializeBinaryFromReader(message: Dota2PlayerCurrentMapStatePartialUpdate, reader: jspb.BinaryReader): Dota2PlayerCurrentMapStatePartialUpdate;
}

export namespace Dota2PlayerCurrentMapStatePartialUpdate {
  export type AsObject = {
    playerUrn: string,
    payload?: Dota2PlayerCurrentMapStatePartialUpdate.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasPlayerInfo(): boolean;
    clearPlayerInfo(): void;
    getPlayerInfo(): Dota2PlayerInfoState | undefined;
    setPlayerInfo(value?: Dota2PlayerInfoState): void;

    hasTimers(): boolean;
    clearTimers(): void;
    getTimers(): Dota2PlayerCurrentMapTimersState | undefined;
    setTimers(value?: Dota2PlayerCurrentMapTimersState): void;

    hasStatistics(): boolean;
    clearStatistics(): void;
    getStatistics(): Dota2PlayerStatisticsState | undefined;
    setStatistics(value?: Dota2PlayerStatisticsState): void;

    hasMapStatistics(): boolean;
    clearMapStatistics(): void;
    getMapStatistics(): Dota2PlayerCurrentMapStatisticsState | undefined;
    setMapStatistics(value?: Dota2PlayerCurrentMapStatisticsState): void;

    hasPosition(): boolean;
    clearPosition(): void;
    getPosition(): Dota2Position | undefined;
    setPosition(value?: Dota2Position): void;

    hasItems(): boolean;
    clearItems(): void;
    getItems(): Dota2Items | undefined;
    setItems(value?: Dota2Items): void;

    hasAbilities(): boolean;
    clearAbilities(): void;
    getAbilities(): Dota2Abilities | undefined;
    setAbilities(value?: Dota2Abilities): void;

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
      playerInfo?: Dota2PlayerInfoState.AsObject,
      timers?: Dota2PlayerCurrentMapTimersState.AsObject,
      statistics?: Dota2PlayerStatisticsState.AsObject,
      mapStatistics?: Dota2PlayerCurrentMapStatisticsState.AsObject,
      position?: Dota2Position.AsObject,
      items?: Dota2Items.AsObject,
      abilities?: Dota2Abilities.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      PLAYER_INFO = 1,
      TIMERS = 2,
      STATISTICS = 3,
      MAP_STATISTICS = 4,
      POSITION = 5,
      ITEMS = 6,
      ABILITIES = 7,
    }
  }
}

export class Dota2PlayerCurrentMapState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  hasPlayerInfo(): boolean;
  clearPlayerInfo(): void;
  getPlayerInfo(): Dota2PlayerInfoState | undefined;
  setPlayerInfo(value?: Dota2PlayerInfoState): void;

  hasTimers(): boolean;
  clearTimers(): void;
  getTimers(): Dota2PlayerCurrentMapTimersState | undefined;
  setTimers(value?: Dota2PlayerCurrentMapTimersState): void;

  hasStatistics(): boolean;
  clearStatistics(): void;
  getStatistics(): Dota2PlayerStatisticsState | undefined;
  setStatistics(value?: Dota2PlayerStatisticsState): void;

  hasMapStatistics(): boolean;
  clearMapStatistics(): void;
  getMapStatistics(): Dota2PlayerCurrentMapStatisticsState | undefined;
  setMapStatistics(value?: Dota2PlayerCurrentMapStatisticsState): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): Dota2Position | undefined;
  setPosition(value?: Dota2Position): void;

  hasItems(): boolean;
  clearItems(): void;
  getItems(): Dota2Items | undefined;
  setItems(value?: Dota2Items): void;

  hasAbilities(): boolean;
  clearAbilities(): void;
  getAbilities(): Dota2Abilities | undefined;
  setAbilities(value?: Dota2Abilities): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2PlayerCurrentMapState.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2PlayerCurrentMapState): Dota2PlayerCurrentMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2PlayerCurrentMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2PlayerCurrentMapState;
  static deserializeBinaryFromReader(message: Dota2PlayerCurrentMapState, reader: jspb.BinaryReader): Dota2PlayerCurrentMapState;
}

export namespace Dota2PlayerCurrentMapState {
  export type AsObject = {
    playerUrn: string,
    playerInfo?: Dota2PlayerInfoState.AsObject,
    timers?: Dota2PlayerCurrentMapTimersState.AsObject,
    statistics?: Dota2PlayerStatisticsState.AsObject,
    mapStatistics?: Dota2PlayerCurrentMapStatisticsState.AsObject,
    position?: Dota2Position.AsObject,
    items?: Dota2Items.AsObject,
    abilities?: Dota2Abilities.AsObject,
  }
}

export class Dota2PlayerCurrentMapStatisticsState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getAlive(): boolean;
  setAlive(value: boolean): void;

  getHealth(): number;
  setHealth(value: number): void;

  getMaxHealth(): number;
  setMaxHealth(value: number): void;

  getCurrentGold(): number;
  setCurrentGold(value: number): void;

  getNetWorth(): number;
  setNetWorth(value: number): void;

  getBuybackCost(): number;
  setBuybackCost(value: number): void;

  getHasBuyback(): boolean;
  setHasBuyback(value: boolean): void;

  getHasAegis(): boolean;
  setHasAegis(value: boolean): void;

  getMana(): number;
  setMana(value: number): void;

  getMaxMana(): number;
  setMaxMana(value: number): void;

  getGoldReliable(): number;
  setGoldReliable(value: number): void;

  getGoldUnreliable(): number;
  setGoldUnreliable(value: number): void;

  getDenies(): number;
  setDenies(value: number): void;

  getLastHits(): number;
  setLastHits(value: number): void;

  getLevel(): number;
  setLevel(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2PlayerCurrentMapStatisticsState.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2PlayerCurrentMapStatisticsState): Dota2PlayerCurrentMapStatisticsState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2PlayerCurrentMapStatisticsState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2PlayerCurrentMapStatisticsState;
  static deserializeBinaryFromReader(message: Dota2PlayerCurrentMapStatisticsState, reader: jspb.BinaryReader): Dota2PlayerCurrentMapStatisticsState;
}

export namespace Dota2PlayerCurrentMapStatisticsState {
  export type AsObject = {
    playerUrn: string,
    alive: boolean,
    health: number,
    maxHealth: number,
    currentGold: number,
    netWorth: number,
    buybackCost: number,
    hasBuyback: boolean,
    hasAegis: boolean,
    mana: number,
    maxMana: number,
    goldReliable: number,
    goldUnreliable: number,
    denies: number,
    lastHits: number,
    level: number,
  }
}

export class Dota2PlayerCurrentMapTimersState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  hasRespawnTimer(): boolean;
  clearRespawnTimer(): void;
  getRespawnTimer(): google_protobuf_duration_pb.Duration | undefined;
  setRespawnTimer(value?: google_protobuf_duration_pb.Duration): void;

  hasBuybackCooldown(): boolean;
  clearBuybackCooldown(): void;
  getBuybackCooldown(): google_protobuf_duration_pb.Duration | undefined;
  setBuybackCooldown(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2PlayerCurrentMapTimersState.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2PlayerCurrentMapTimersState): Dota2PlayerCurrentMapTimersState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2PlayerCurrentMapTimersState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2PlayerCurrentMapTimersState;
  static deserializeBinaryFromReader(message: Dota2PlayerCurrentMapTimersState, reader: jspb.BinaryReader): Dota2PlayerCurrentMapTimersState;
}

export namespace Dota2PlayerCurrentMapTimersState {
  export type AsObject = {
    playerUrn: string,
    respawnTimer?: google_protobuf_duration_pb.Duration.AsObject,
    buybackCooldown?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class Dota2TeamPreviousMapState extends jspb.Message {
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

  getPlayersMap(): jspb.Map<string, Dota2PlayerPreviousMapState>;
  clearPlayersMap(): void;
  getHasRoshans(): boolean;
  setHasRoshans(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2TeamPreviousMapState.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2TeamPreviousMapState): Dota2TeamPreviousMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2TeamPreviousMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2TeamPreviousMapState;
  static deserializeBinaryFromReader(message: Dota2TeamPreviousMapState, reader: jspb.BinaryReader): Dota2TeamPreviousMapState;
}

export namespace Dota2TeamPreviousMapState {
  export type AsObject = {
    teamUrn: string,
    faction: Dota2FactionMap[keyof Dota2FactionMap],
    barracks: number,
    kills: number,
    netWorth: number,
    roshans: number,
    towers: number,
    won: boolean,
    playersMap: Array<[string, Dota2PlayerPreviousMapState.AsObject]>,
    hasRoshans: boolean,
  }
}

export class Dota2PlayerPreviousMapState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  hasPlayerInfo(): boolean;
  clearPlayerInfo(): void;
  getPlayerInfo(): Dota2PlayerInfoState | undefined;
  setPlayerInfo(value?: Dota2PlayerInfoState): void;

  hasStatistics(): boolean;
  clearStatistics(): void;
  getStatistics(): Dota2PlayerStatisticsState | undefined;
  setStatistics(value?: Dota2PlayerStatisticsState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2PlayerPreviousMapState.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2PlayerPreviousMapState): Dota2PlayerPreviousMapState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2PlayerPreviousMapState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2PlayerPreviousMapState;
  static deserializeBinaryFromReader(message: Dota2PlayerPreviousMapState, reader: jspb.BinaryReader): Dota2PlayerPreviousMapState;
}

export namespace Dota2PlayerPreviousMapState {
  export type AsObject = {
    playerUrn: string,
    playerInfo?: Dota2PlayerInfoState.AsObject,
    statistics?: Dota2PlayerStatisticsState.AsObject,
  }
}

export class Dota2PlayerInfoState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getSlotId(): number;
  setSlotId(value: number): void;

  getExtName(): string;
  setExtName(value: string): void;

  getExtId(): string;
  setExtId(value: string): void;

  hasHeroId(): boolean;
  clearHeroId(): void;
  getHeroId(): number;
  setHeroId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2PlayerInfoState.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2PlayerInfoState): Dota2PlayerInfoState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2PlayerInfoState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2PlayerInfoState;
  static deserializeBinaryFromReader(message: Dota2PlayerInfoState, reader: jspb.BinaryReader): Dota2PlayerInfoState;
}

export namespace Dota2PlayerInfoState {
  export type AsObject = {
    playerUrn: string,
    slotId: number,
    extName: string,
    extId: string,
    heroId: number,
  }
}

export class Dota2PlayerStatisticsState extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getKills(): number;
  setKills(value: number): void;

  getDeaths(): number;
  setDeaths(value: number): void;

  getAssists(): number;
  setAssists(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2PlayerStatisticsState.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2PlayerStatisticsState): Dota2PlayerStatisticsState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2PlayerStatisticsState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2PlayerStatisticsState;
  static deserializeBinaryFromReader(message: Dota2PlayerStatisticsState, reader: jspb.BinaryReader): Dota2PlayerStatisticsState;
}

export namespace Dota2PlayerStatisticsState {
  export type AsObject = {
    playerUrn: string,
    kills: number,
    deaths: number,
    assists: number,
  }
}

export class Dota2Towers extends jspb.Message {
  clearTowersList(): void;
  getTowersList(): Array<Dota2Tower>;
  setTowersList(value: Array<Dota2Tower>): void;
  addTowers(value?: Dota2Tower, index?: number): Dota2Tower;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2Towers.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2Towers): Dota2Towers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2Towers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2Towers;
  static deserializeBinaryFromReader(message: Dota2Towers, reader: jspb.BinaryReader): Dota2Towers;
}

export namespace Dota2Towers {
  export type AsObject = {
    towersList: Array<Dota2Tower.AsObject>,
  }
}

export class Dota2Barracks extends jspb.Message {
  clearBarracksList(): void;
  getBarracksList(): Array<Dota2Barrack>;
  setBarracksList(value: Array<Dota2Barrack>): void;
  addBarracks(value?: Dota2Barrack, index?: number): Dota2Barrack;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2Barracks.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2Barracks): Dota2Barracks.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2Barracks, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2Barracks;
  static deserializeBinaryFromReader(message: Dota2Barracks, reader: jspb.BinaryReader): Dota2Barracks;
}

export namespace Dota2Barracks {
  export type AsObject = {
    barracksList: Array<Dota2Barrack.AsObject>,
  }
}

export class Dota2Abilities extends jspb.Message {
  clearAbilitiesList(): void;
  getAbilitiesList(): Array<Dota2Ability>;
  setAbilitiesList(value: Array<Dota2Ability>): void;
  addAbilities(value?: Dota2Ability, index?: number): Dota2Ability;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2Abilities.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2Abilities): Dota2Abilities.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2Abilities, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2Abilities;
  static deserializeBinaryFromReader(message: Dota2Abilities, reader: jspb.BinaryReader): Dota2Abilities;
}

export namespace Dota2Abilities {
  export type AsObject = {
    abilitiesList: Array<Dota2Ability.AsObject>,
  }
}

export class Dota2Items extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<Dota2Item>;
  setItemsList(value: Array<Dota2Item>): void;
  addItems(value?: Dota2Item, index?: number): Dota2Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2Items.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2Items): Dota2Items.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2Items, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2Items;
  static deserializeBinaryFromReader(message: Dota2Items, reader: jspb.BinaryReader): Dota2Items;
}

export namespace Dota2Items {
  export type AsObject = {
    itemsList: Array<Dota2Item.AsObject>,
  }
}

export class Dota2Item extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasCooldown(): boolean;
  clearCooldown(): void;
  getCooldown(): number;
  setCooldown(value: number): void;

  getPosition(): Dota2ItemPositionMap[keyof Dota2ItemPositionMap];
  setPosition(value: Dota2ItemPositionMap[keyof Dota2ItemPositionMap]): void;

  getLevel(): number;
  setLevel(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2Item.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2Item): Dota2Item.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2Item, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2Item;
  static deserializeBinaryFromReader(message: Dota2Item, reader: jspb.BinaryReader): Dota2Item;
}

export namespace Dota2Item {
  export type AsObject = {
    name: string,
    cooldown: number,
    position: Dota2ItemPositionMap[keyof Dota2ItemPositionMap],
    level: number,
  }
}

export class Dota2Ability extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasCooldown(): boolean;
  clearCooldown(): void;
  getCooldown(): number;
  setCooldown(value: number): void;

  getUltimate(): boolean;
  setUltimate(value: boolean): void;

  getPassive(): boolean;
  setPassive(value: boolean): void;

  getCanCast(): boolean;
  setCanCast(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2Ability.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2Ability): Dota2Ability.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2Ability, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2Ability;
  static deserializeBinaryFromReader(message: Dota2Ability, reader: jspb.BinaryReader): Dota2Ability;
}

export namespace Dota2Ability {
  export type AsObject = {
    name: string,
    cooldown: number,
    ultimate: boolean,
    passive: boolean,
    canCast: boolean,
  }
}

export class Roshan extends jspb.Message {
  getAlive(): boolean;
  setAlive(value: boolean): void;

  getRespawntime(): number;
  setRespawntime(value: number): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): Dota2Position | undefined;
  setPosition(value?: Dota2Position): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Roshan.AsObject;
  static toObject(includeInstance: boolean, msg: Roshan): Roshan.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Roshan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Roshan;
  static deserializeBinaryFromReader(message: Roshan, reader: jspb.BinaryReader): Roshan;
}

export namespace Roshan {
  export type AsObject = {
    alive: boolean,
    respawntime: number,
    position?: Dota2Position.AsObject,
  }
}

export class Dota2Tower extends jspb.Message {
  getLane(): Dota2LaneMap[keyof Dota2LaneMap];
  setLane(value: Dota2LaneMap[keyof Dota2LaneMap]): void;

  getFaction(): Dota2FactionMap[keyof Dota2FactionMap];
  setFaction(value: Dota2FactionMap[keyof Dota2FactionMap]): void;

  getTier(): Dota2TowerTierMap[keyof Dota2TowerTierMap];
  setTier(value: Dota2TowerTierMap[keyof Dota2TowerTierMap]): void;

  getAlive(): boolean;
  setAlive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2Tower.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2Tower): Dota2Tower.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2Tower, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2Tower;
  static deserializeBinaryFromReader(message: Dota2Tower, reader: jspb.BinaryReader): Dota2Tower;
}

export namespace Dota2Tower {
  export type AsObject = {
    lane: Dota2LaneMap[keyof Dota2LaneMap],
    faction: Dota2FactionMap[keyof Dota2FactionMap],
    tier: Dota2TowerTierMap[keyof Dota2TowerTierMap],
    alive: boolean,
  }
}

export class Dota2Barrack extends jspb.Message {
  getLane(): Dota2LaneMap[keyof Dota2LaneMap];
  setLane(value: Dota2LaneMap[keyof Dota2LaneMap]): void;

  getFaction(): Dota2FactionMap[keyof Dota2FactionMap];
  setFaction(value: Dota2FactionMap[keyof Dota2FactionMap]): void;

  getType(): Dota2BarrackTypeMap[keyof Dota2BarrackTypeMap];
  setType(value: Dota2BarrackTypeMap[keyof Dota2BarrackTypeMap]): void;

  getAlive(): boolean;
  setAlive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2Barrack.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2Barrack): Dota2Barrack.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2Barrack, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2Barrack;
  static deserializeBinaryFromReader(message: Dota2Barrack, reader: jspb.BinaryReader): Dota2Barrack;
}

export namespace Dota2Barrack {
  export type AsObject = {
    lane: Dota2LaneMap[keyof Dota2LaneMap],
    faction: Dota2FactionMap[keyof Dota2FactionMap],
    type: Dota2BarrackTypeMap[keyof Dota2BarrackTypeMap],
    alive: boolean,
  }
}

export class Dota2Position extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2Position.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2Position): Dota2Position.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2Position, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2Position;
  static deserializeBinaryFromReader(message: Dota2Position, reader: jspb.BinaryReader): Dota2Position;
}

export namespace Dota2Position {
  export type AsObject = {
    x: number,
    y: number,
  }
}

export class Dota2MatchEvents extends jspb.Message {
  getMatchUrn(): string;
  setMatchUrn(value: string): void;

  clearEventsList(): void;
  getEventsList(): Array<Dota2Event>;
  setEventsList(value: Array<Dota2Event>): void;
  addEvents(value?: Dota2Event, index?: number): Dota2Event;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2MatchEvents.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2MatchEvents): Dota2MatchEvents.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2MatchEvents, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2MatchEvents;
  static deserializeBinaryFromReader(message: Dota2MatchEvents, reader: jspb.BinaryReader): Dota2MatchEvents;
}

export namespace Dota2MatchEvents {
  export type AsObject = {
    matchUrn: string,
    eventsList: Array<Dota2Event.AsObject>,
  }
}

export class Dota2Event extends jspb.Message {
  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getMapId(): number;
  setMapId(value: number): void;

  hasGameTime(): boolean;
  clearGameTime(): void;
  getGameTime(): number;
  setGameTime(value: number): void;

  hasMapStarted(): boolean;
  clearMapStarted(): void;
  getMapStarted(): Dota2MapStarted | undefined;
  setMapStarted(value?: Dota2MapStarted): void;

  hasMapEnded(): boolean;
  clearMapEnded(): void;
  getMapEnded(): Dota2MapEnded | undefined;
  setMapEnded(value?: Dota2MapEnded): void;

  hasMapPaused(): boolean;
  clearMapPaused(): void;
  getMapPaused(): Dota2MapPaused | undefined;
  setMapPaused(value?: Dota2MapPaused): void;

  hasMapResumed(): boolean;
  clearMapResumed(): void;
  getMapResumed(): Dota2MapResumed | undefined;
  setMapResumed(value?: Dota2MapResumed): void;

  hasHeroKill(): boolean;
  clearHeroKill(): void;
  getHeroKill(): Dota2HeroKill | undefined;
  setHeroKill(value?: Dota2HeroKill): void;

  hasHeroDeath(): boolean;
  clearHeroDeath(): void;
  getHeroDeath(): Dota2HeroDeath | undefined;
  setHeroDeath(value?: Dota2HeroDeath): void;

  hasTowerDestroyed(): boolean;
  clearTowerDestroyed(): void;
  getTowerDestroyed(): Dota2TowerDestroyed | undefined;
  setTowerDestroyed(value?: Dota2TowerDestroyed): void;

  hasBarracksDestroyed(): boolean;
  clearBarracksDestroyed(): void;
  getBarracksDestroyed(): Dota2BarracksDestroyed | undefined;
  setBarracksDestroyed(value?: Dota2BarracksDestroyed): void;

  hasAncientDestroyed(): boolean;
  clearAncientDestroyed(): void;
  getAncientDestroyed(): Dota2AncientDestroyed | undefined;
  setAncientDestroyed(value?: Dota2AncientDestroyed): void;

  hasMegaCreeps(): boolean;
  clearMegaCreeps(): void;
  getMegaCreeps(): Dota2MegaCreeps | undefined;
  setMegaCreeps(value?: Dota2MegaCreeps): void;

  hasRoshanKilled(): boolean;
  clearRoshanKilled(): void;
  getRoshanKilled(): Dota2RoshanKilled | undefined;
  setRoshanKilled(value?: Dota2RoshanKilled): void;

  hasRoshanRespawned(): boolean;
  clearRoshanRespawned(): void;
  getRoshanRespawned(): Dota2RoshanRespawned | undefined;
  setRoshanRespawned(value?: Dota2RoshanRespawned): void;

  hasAegisPickedUp(): boolean;
  clearAegisPickedUp(): void;
  getAegisPickedUp(): Dota2AegisPickedUp | undefined;
  setAegisPickedUp(value?: Dota2AegisPickedUp): void;

  hasAegisLost(): boolean;
  clearAegisLost(): void;
  getAegisLost(): Dota2AegisLost | undefined;
  setAegisLost(value?: Dota2AegisLost): void;

  hasBuyback(): boolean;
  clearBuyback(): void;
  getBuyback(): Dota2Buyback | undefined;
  setBuyback(value?: Dota2Buyback): void;

  hasDayNightChanged(): boolean;
  clearDayNightChanged(): void;
  getDayNightChanged(): Dota2DayNightChanged | undefined;
  setDayNightChanged(value?: Dota2DayNightChanged): void;

  hasMultikill(): boolean;
  clearMultikill(): void;
  getMultikill(): Dota2Multikill | undefined;
  setMultikill(value?: Dota2Multikill): void;

  hasKillstreak(): boolean;
  clearKillstreak(): void;
  getKillstreak(): Dota2Killstreak | undefined;
  setKillstreak(value?: Dota2Killstreak): void;

  hasTormentorKilled(): boolean;
  clearTormentorKilled(): void;
  getTormentorKilled(): Dota2TormentorKilled | undefined;
  setTormentorKilled(value?: Dota2TormentorKilled): void;

  getEventCase(): Dota2Event.EventCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2Event.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2Event): Dota2Event.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2Event;
  static deserializeBinaryFromReader(message: Dota2Event, reader: jspb.BinaryReader): Dota2Event;
}

export namespace Dota2Event {
  export type AsObject = {
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    mapId: number,
    gameTime: number,
    mapStarted?: Dota2MapStarted.AsObject,
    mapEnded?: Dota2MapEnded.AsObject,
    mapPaused?: Dota2MapPaused.AsObject,
    mapResumed?: Dota2MapResumed.AsObject,
    heroKill?: Dota2HeroKill.AsObject,
    heroDeath?: Dota2HeroDeath.AsObject,
    towerDestroyed?: Dota2TowerDestroyed.AsObject,
    barracksDestroyed?: Dota2BarracksDestroyed.AsObject,
    ancientDestroyed?: Dota2AncientDestroyed.AsObject,
    megaCreeps?: Dota2MegaCreeps.AsObject,
    roshanKilled?: Dota2RoshanKilled.AsObject,
    roshanRespawned?: Dota2RoshanRespawned.AsObject,
    aegisPickedUp?: Dota2AegisPickedUp.AsObject,
    aegisLost?: Dota2AegisLost.AsObject,
    buyback?: Dota2Buyback.AsObject,
    dayNightChanged?: Dota2DayNightChanged.AsObject,
    multikill?: Dota2Multikill.AsObject,
    killstreak?: Dota2Killstreak.AsObject,
    tormentorKilled?: Dota2TormentorKilled.AsObject,
  }

  export enum EventCase {
    EVENT_NOT_SET = 0,
    MAP_STARTED = 10,
    MAP_ENDED = 11,
    MAP_PAUSED = 12,
    MAP_RESUMED = 13,
    HERO_KILL = 14,
    HERO_DEATH = 15,
    TOWER_DESTROYED = 16,
    BARRACKS_DESTROYED = 17,
    ANCIENT_DESTROYED = 18,
    MEGA_CREEPS = 19,
    ROSHAN_KILLED = 20,
    ROSHAN_RESPAWNED = 21,
    AEGIS_PICKED_UP = 22,
    AEGIS_LOST = 23,
    BUYBACK = 24,
    DAY_NIGHT_CHANGED = 25,
    MULTIKILL = 26,
    KILLSTREAK = 27,
    TORMENTOR_KILLED = 28,
  }
}

export class Dota2EventTeam extends jspb.Message {
  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getFaction(): Dota2FactionMap[keyof Dota2FactionMap];
  setFaction(value: Dota2FactionMap[keyof Dota2FactionMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2EventTeam.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2EventTeam): Dota2EventTeam.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2EventTeam, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2EventTeam;
  static deserializeBinaryFromReader(message: Dota2EventTeam, reader: jspb.BinaryReader): Dota2EventTeam;
}

export namespace Dota2EventTeam {
  export type AsObject = {
    teamUrn: string,
    faction: Dota2FactionMap[keyof Dota2FactionMap],
  }
}

export class Dota2EventPlayer extends jspb.Message {
  getPlayerUrn(): string;
  setPlayerUrn(value: string): void;

  getTeamUrn(): string;
  setTeamUrn(value: string): void;

  getFaction(): Dota2FactionMap[keyof Dota2FactionMap];
  setFaction(value: Dota2FactionMap[keyof Dota2FactionMap]): void;

  getHeroId(): number;
  setHeroId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2EventPlayer.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2EventPlayer): Dota2EventPlayer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2EventPlayer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2EventPlayer;
  static deserializeBinaryFromReader(message: Dota2EventPlayer, reader: jspb.BinaryReader): Dota2EventPlayer;
}

export namespace Dota2EventPlayer {
  export type AsObject = {
    playerUrn: string,
    teamUrn: string,
    faction: Dota2FactionMap[keyof Dota2FactionMap],
    heroId: number,
  }
}

export class Dota2MapStarted extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2MapStarted.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2MapStarted): Dota2MapStarted.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2MapStarted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2MapStarted;
  static deserializeBinaryFromReader(message: Dota2MapStarted, reader: jspb.BinaryReader): Dota2MapStarted;
}

export namespace Dota2MapStarted {
  export type AsObject = {
  }
}

export class Dota2MapEnded extends jspb.Message {
  hasWinner(): boolean;
  clearWinner(): void;
  getWinner(): Dota2EventTeam | undefined;
  setWinner(value?: Dota2EventTeam): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2MapEnded.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2MapEnded): Dota2MapEnded.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2MapEnded, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2MapEnded;
  static deserializeBinaryFromReader(message: Dota2MapEnded, reader: jspb.BinaryReader): Dota2MapEnded;
}

export namespace Dota2MapEnded {
  export type AsObject = {
    winner?: Dota2EventTeam.AsObject,
  }
}

export class Dota2MapPaused extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2MapPaused.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2MapPaused): Dota2MapPaused.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2MapPaused, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2MapPaused;
  static deserializeBinaryFromReader(message: Dota2MapPaused, reader: jspb.BinaryReader): Dota2MapPaused;
}

export namespace Dota2MapPaused {
  export type AsObject = {
  }
}

export class Dota2MapResumed extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2MapResumed.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2MapResumed): Dota2MapResumed.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2MapResumed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2MapResumed;
  static deserializeBinaryFromReader(message: Dota2MapResumed, reader: jspb.BinaryReader): Dota2MapResumed;
}

export namespace Dota2MapResumed {
  export type AsObject = {
  }
}

export class Dota2HeroKill extends jspb.Message {
  hasKiller(): boolean;
  clearKiller(): void;
  getKiller(): Dota2EventPlayer | undefined;
  setKiller(value?: Dota2EventPlayer): void;

  hasVictim(): boolean;
  clearVictim(): void;
  getVictim(): Dota2EventPlayer | undefined;
  setVictim(value?: Dota2EventPlayer): void;

  getFirstBlood(): boolean;
  setFirstBlood(value: boolean): void;

  getKillerStreak(): number;
  setKillerStreak(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2HeroKill.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2HeroKill): Dota2HeroKill.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2HeroKill, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2HeroKill;
  static deserializeBinaryFromReader(message: Dota2HeroKill, reader: jspb.BinaryReader): Dota2HeroKill;
}

export namespace Dota2HeroKill {
  export type AsObject = {
    killer?: Dota2EventPlayer.AsObject,
    victim?: Dota2EventPlayer.AsObject,
    firstBlood: boolean,
    killerStreak: number,
  }
}

export class Dota2HeroDeath extends jspb.Message {
  hasVictim(): boolean;
  clearVictim(): void;
  getVictim(): Dota2EventPlayer | undefined;
  setVictim(value?: Dota2EventPlayer): void;

  getKillerKind(): Dota2KillerKindMap[keyof Dota2KillerKindMap];
  setKillerKind(value: Dota2KillerKindMap[keyof Dota2KillerKindMap]): void;

  hasKiller(): boolean;
  clearKiller(): void;
  getKiller(): Dota2EventPlayer | undefined;
  setKiller(value?: Dota2EventPlayer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2HeroDeath.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2HeroDeath): Dota2HeroDeath.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2HeroDeath, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2HeroDeath;
  static deserializeBinaryFromReader(message: Dota2HeroDeath, reader: jspb.BinaryReader): Dota2HeroDeath;
}

export namespace Dota2HeroDeath {
  export type AsObject = {
    victim?: Dota2EventPlayer.AsObject,
    killerKind: Dota2KillerKindMap[keyof Dota2KillerKindMap],
    killer?: Dota2EventPlayer.AsObject,
  }
}

export class Dota2TowerDestroyed extends jspb.Message {
  hasTeam(): boolean;
  clearTeam(): void;
  getTeam(): Dota2EventTeam | undefined;
  setTeam(value?: Dota2EventTeam): void;

  hasAttributedTeam(): boolean;
  clearAttributedTeam(): void;
  getAttributedTeam(): Dota2EventTeam | undefined;
  setAttributedTeam(value?: Dota2EventTeam): void;

  getLane(): Dota2LaneMap[keyof Dota2LaneMap];
  setLane(value: Dota2LaneMap[keyof Dota2LaneMap]): void;

  getTier(): Dota2TowerTierMap[keyof Dota2TowerTierMap];
  setTier(value: Dota2TowerTierMap[keyof Dota2TowerTierMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2TowerDestroyed.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2TowerDestroyed): Dota2TowerDestroyed.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2TowerDestroyed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2TowerDestroyed;
  static deserializeBinaryFromReader(message: Dota2TowerDestroyed, reader: jspb.BinaryReader): Dota2TowerDestroyed;
}

export namespace Dota2TowerDestroyed {
  export type AsObject = {
    team?: Dota2EventTeam.AsObject,
    attributedTeam?: Dota2EventTeam.AsObject,
    lane: Dota2LaneMap[keyof Dota2LaneMap],
    tier: Dota2TowerTierMap[keyof Dota2TowerTierMap],
  }
}

export class Dota2BarracksDestroyed extends jspb.Message {
  hasTeam(): boolean;
  clearTeam(): void;
  getTeam(): Dota2EventTeam | undefined;
  setTeam(value?: Dota2EventTeam): void;

  hasAttributedTeam(): boolean;
  clearAttributedTeam(): void;
  getAttributedTeam(): Dota2EventTeam | undefined;
  setAttributedTeam(value?: Dota2EventTeam): void;

  getLane(): Dota2LaneMap[keyof Dota2LaneMap];
  setLane(value: Dota2LaneMap[keyof Dota2LaneMap]): void;

  getType(): Dota2BarrackTypeMap[keyof Dota2BarrackTypeMap];
  setType(value: Dota2BarrackTypeMap[keyof Dota2BarrackTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2BarracksDestroyed.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2BarracksDestroyed): Dota2BarracksDestroyed.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2BarracksDestroyed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2BarracksDestroyed;
  static deserializeBinaryFromReader(message: Dota2BarracksDestroyed, reader: jspb.BinaryReader): Dota2BarracksDestroyed;
}

export namespace Dota2BarracksDestroyed {
  export type AsObject = {
    team?: Dota2EventTeam.AsObject,
    attributedTeam?: Dota2EventTeam.AsObject,
    lane: Dota2LaneMap[keyof Dota2LaneMap],
    type: Dota2BarrackTypeMap[keyof Dota2BarrackTypeMap],
  }
}

export class Dota2AncientDestroyed extends jspb.Message {
  hasTeam(): boolean;
  clearTeam(): void;
  getTeam(): Dota2EventTeam | undefined;
  setTeam(value?: Dota2EventTeam): void;

  hasAttributedTeam(): boolean;
  clearAttributedTeam(): void;
  getAttributedTeam(): Dota2EventTeam | undefined;
  setAttributedTeam(value?: Dota2EventTeam): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2AncientDestroyed.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2AncientDestroyed): Dota2AncientDestroyed.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2AncientDestroyed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2AncientDestroyed;
  static deserializeBinaryFromReader(message: Dota2AncientDestroyed, reader: jspb.BinaryReader): Dota2AncientDestroyed;
}

export namespace Dota2AncientDestroyed {
  export type AsObject = {
    team?: Dota2EventTeam.AsObject,
    attributedTeam?: Dota2EventTeam.AsObject,
  }
}

export class Dota2MegaCreeps extends jspb.Message {
  hasTeam(): boolean;
  clearTeam(): void;
  getTeam(): Dota2EventTeam | undefined;
  setTeam(value?: Dota2EventTeam): void;

  hasAgainstTeam(): boolean;
  clearAgainstTeam(): void;
  getAgainstTeam(): Dota2EventTeam | undefined;
  setAgainstTeam(value?: Dota2EventTeam): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2MegaCreeps.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2MegaCreeps): Dota2MegaCreeps.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2MegaCreeps, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2MegaCreeps;
  static deserializeBinaryFromReader(message: Dota2MegaCreeps, reader: jspb.BinaryReader): Dota2MegaCreeps;
}

export namespace Dota2MegaCreeps {
  export type AsObject = {
    team?: Dota2EventTeam.AsObject,
    againstTeam?: Dota2EventTeam.AsObject,
  }
}

export class Dota2RoshanKilled extends jspb.Message {
  hasTeam(): boolean;
  clearTeam(): void;
  getTeam(): Dota2EventTeam | undefined;
  setTeam(value?: Dota2EventTeam): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2RoshanKilled.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2RoshanKilled): Dota2RoshanKilled.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2RoshanKilled, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2RoshanKilled;
  static deserializeBinaryFromReader(message: Dota2RoshanKilled, reader: jspb.BinaryReader): Dota2RoshanKilled;
}

export namespace Dota2RoshanKilled {
  export type AsObject = {
    team?: Dota2EventTeam.AsObject,
  }
}

export class Dota2RoshanRespawned extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2RoshanRespawned.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2RoshanRespawned): Dota2RoshanRespawned.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2RoshanRespawned, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2RoshanRespawned;
  static deserializeBinaryFromReader(message: Dota2RoshanRespawned, reader: jspb.BinaryReader): Dota2RoshanRespawned;
}

export namespace Dota2RoshanRespawned {
  export type AsObject = {
  }
}

export class Dota2AegisPickedUp extends jspb.Message {
  hasPlayer(): boolean;
  clearPlayer(): void;
  getPlayer(): Dota2EventPlayer | undefined;
  setPlayer(value?: Dota2EventPlayer): void;

  getSnatched(): boolean;
  setSnatched(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2AegisPickedUp.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2AegisPickedUp): Dota2AegisPickedUp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2AegisPickedUp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2AegisPickedUp;
  static deserializeBinaryFromReader(message: Dota2AegisPickedUp, reader: jspb.BinaryReader): Dota2AegisPickedUp;
}

export namespace Dota2AegisPickedUp {
  export type AsObject = {
    player?: Dota2EventPlayer.AsObject,
    snatched: boolean,
  }
}

export class Dota2AegisLost extends jspb.Message {
  hasPlayer(): boolean;
  clearPlayer(): void;
  getPlayer(): Dota2EventPlayer | undefined;
  setPlayer(value?: Dota2EventPlayer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2AegisLost.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2AegisLost): Dota2AegisLost.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2AegisLost, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2AegisLost;
  static deserializeBinaryFromReader(message: Dota2AegisLost, reader: jspb.BinaryReader): Dota2AegisLost;
}

export namespace Dota2AegisLost {
  export type AsObject = {
    player?: Dota2EventPlayer.AsObject,
  }
}

export class Dota2Buyback extends jspb.Message {
  hasPlayer(): boolean;
  clearPlayer(): void;
  getPlayer(): Dota2EventPlayer | undefined;
  setPlayer(value?: Dota2EventPlayer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2Buyback.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2Buyback): Dota2Buyback.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2Buyback, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2Buyback;
  static deserializeBinaryFromReader(message: Dota2Buyback, reader: jspb.BinaryReader): Dota2Buyback;
}

export namespace Dota2Buyback {
  export type AsObject = {
    player?: Dota2EventPlayer.AsObject,
  }
}

export class Dota2DayNightChanged extends jspb.Message {
  getIsDay(): boolean;
  setIsDay(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2DayNightChanged.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2DayNightChanged): Dota2DayNightChanged.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2DayNightChanged, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2DayNightChanged;
  static deserializeBinaryFromReader(message: Dota2DayNightChanged, reader: jspb.BinaryReader): Dota2DayNightChanged;
}

export namespace Dota2DayNightChanged {
  export type AsObject = {
    isDay: boolean,
  }
}

export class Dota2Multikill extends jspb.Message {
  hasPlayer(): boolean;
  clearPlayer(): void;
  getPlayer(): Dota2EventPlayer | undefined;
  setPlayer(value?: Dota2EventPlayer): void;

  getKills(): number;
  setKills(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2Multikill.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2Multikill): Dota2Multikill.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2Multikill, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2Multikill;
  static deserializeBinaryFromReader(message: Dota2Multikill, reader: jspb.BinaryReader): Dota2Multikill;
}

export namespace Dota2Multikill {
  export type AsObject = {
    player?: Dota2EventPlayer.AsObject,
    kills: number,
  }
}

export class Dota2Killstreak extends jspb.Message {
  hasPlayer(): boolean;
  clearPlayer(): void;
  getPlayer(): Dota2EventPlayer | undefined;
  setPlayer(value?: Dota2EventPlayer): void;

  getStreak(): number;
  setStreak(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2Killstreak.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2Killstreak): Dota2Killstreak.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2Killstreak, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2Killstreak;
  static deserializeBinaryFromReader(message: Dota2Killstreak, reader: jspb.BinaryReader): Dota2Killstreak;
}

export namespace Dota2Killstreak {
  export type AsObject = {
    player?: Dota2EventPlayer.AsObject,
    streak: number,
  }
}

export class Dota2TormentorKilled extends jspb.Message {
  hasKiller(): boolean;
  clearKiller(): void;
  getKiller(): Dota2EventPlayer | undefined;
  setKiller(value?: Dota2EventPlayer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dota2TormentorKilled.AsObject;
  static toObject(includeInstance: boolean, msg: Dota2TormentorKilled): Dota2TormentorKilled.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dota2TormentorKilled, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dota2TormentorKilled;
  static deserializeBinaryFromReader(message: Dota2TormentorKilled, reader: jspb.BinaryReader): Dota2TormentorKilled;
}

export namespace Dota2TormentorKilled {
  export type AsObject = {
    killer?: Dota2EventPlayer.AsObject,
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

export interface Dota2ItemPositionMap {
  DOTA2_ITEM_POSITION_UNSPECIFIED: 0;
  DOTA2_ITEM_POSITION_NEUTRAL: 1;
  DOTA2_ITEM_POSITION_STASH0: 2;
  DOTA2_ITEM_POSITION_STASH1: 3;
  DOTA2_ITEM_POSITION_STASH2: 4;
  DOTA2_ITEM_POSITION_STASH3: 5;
  DOTA2_ITEM_POSITION_STASH4: 6;
  DOTA2_ITEM_POSITION_STASH5: 7;
  DOTA2_ITEM_POSITION_TELEPORT: 8;
  DOTA2_ITEM_POSITION_SLOT0: 9;
  DOTA2_ITEM_POSITION_SLOT1: 10;
  DOTA2_ITEM_POSITION_SLOT2: 11;
  DOTA2_ITEM_POSITION_SLOT3: 12;
  DOTA2_ITEM_POSITION_SLOT4: 13;
  DOTA2_ITEM_POSITION_SLOT5: 14;
  DOTA2_ITEM_POSITION_SLOT6: 15;
  DOTA2_ITEM_POSITION_SLOT7: 16;
  DOTA2_ITEM_POSITION_SLOT8: 17;
}

export const Dota2ItemPosition: Dota2ItemPositionMap;

export interface Dota2KillerKindMap {
  DOTA2_KILLER_KIND_UNSPECIFIED: 0;
  DOTA2_KILLER_KIND_OTHER: 1;
  DOTA2_KILLER_KIND_TOWER: 2;
  DOTA2_KILLER_KIND_NEUTRAL: 3;
  DOTA2_KILLER_KIND_ROSHAN: 4;
  DOTA2_KILLER_KIND_TORMENTOR: 5;
  DOTA2_KILLER_KIND_CREEP: 6;
  DOTA2_KILLER_KIND_HERO: 7;
}

export const Dota2KillerKind: Dota2KillerKindMap;

