// package: bragi
// file: bragi/bragi_service.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as bragi_common_pb from "../bragi/common_pb";
import * as bragi_csgo_pb from "../bragi/csgo_pb";
import * as bragi_dota2_pb from "../bragi/dota2_pb";
import * as bragi_rush_soccer_pb from "../bragi/rush_soccer_pb";

export class LiveDataFeedRequest extends jspb.Message {
  hasAfter(): boolean;
  clearAfter(): void;
  getAfter(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAfter(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LiveDataFeedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LiveDataFeedRequest): LiveDataFeedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LiveDataFeedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LiveDataFeedRequest;
  static deserializeBinaryFromReader(message: LiveDataFeedRequest, reader: jspb.BinaryReader): LiveDataFeedRequest;
}

export namespace LiveDataFeedRequest {
  export type AsObject = {
    after?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class LiveDataFeedMessage extends jspb.Message {
  hasKeepalive(): boolean;
  clearKeepalive(): void;
  getKeepalive(): KeepAlive | undefined;
  setKeepalive(value?: KeepAlive): void;

  hasMatch(): boolean;
  clearMatch(): void;
  getMatch(): MatchMessage | undefined;
  setMatch(value?: MatchMessage): void;

  getMessageCase(): LiveDataFeedMessage.MessageCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LiveDataFeedMessage.AsObject;
  static toObject(includeInstance: boolean, msg: LiveDataFeedMessage): LiveDataFeedMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LiveDataFeedMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LiveDataFeedMessage;
  static deserializeBinaryFromReader(message: LiveDataFeedMessage, reader: jspb.BinaryReader): LiveDataFeedMessage;
}

export namespace LiveDataFeedMessage {
  export type AsObject = {
    keepalive?: KeepAlive.AsObject,
    match?: MatchMessage.AsObject,
  }

  export enum MessageCase {
    MESSAGE_NOT_SET = 0,
    KEEPALIVE = 1,
    MATCH = 2,
  }
}

export class KeepAlive extends jspb.Message {
  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeepAlive.AsObject;
  static toObject(includeInstance: boolean, msg: KeepAlive): KeepAlive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeepAlive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeepAlive;
  static deserializeBinaryFromReader(message: KeepAlive, reader: jspb.BinaryReader): KeepAlive;
}

export namespace KeepAlive {
  export type AsObject = {
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class MatchMessage extends jspb.Message {
  hasAnnouncement(): boolean;
  clearAnnouncement(): void;
  getAnnouncement(): bragi_common_pb.AnnouncementUpdate | undefined;
  setAnnouncement(value?: bragi_common_pb.AnnouncementUpdate): void;

  hasCsgo(): boolean;
  clearCsgo(): void;
  getCsgo(): bragi_csgo_pb.CsgoMatchMessage | undefined;
  setCsgo(value?: bragi_csgo_pb.CsgoMatchMessage): void;

  hasCsgoWingman(): boolean;
  clearCsgoWingman(): void;
  getCsgoWingman(): bragi_csgo_pb.CsgoMatchMessage | undefined;
  setCsgoWingman(value?: bragi_csgo_pb.CsgoMatchMessage): void;

  hasDota2(): boolean;
  clearDota2(): void;
  getDota2(): bragi_dota2_pb.Dota2MatchMessage | undefined;
  setDota2(value?: bragi_dota2_pb.Dota2MatchMessage): void;

  hasRushSoccer(): boolean;
  clearRushSoccer(): void;
  getRushSoccer(): bragi_rush_soccer_pb.RushSoccerMatchMessage | undefined;
  setRushSoccer(value?: bragi_rush_soccer_pb.RushSoccerMatchMessage): void;

  getMessageCase(): MatchMessage.MessageCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MatchMessage): MatchMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatchMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchMessage;
  static deserializeBinaryFromReader(message: MatchMessage, reader: jspb.BinaryReader): MatchMessage;
}

export namespace MatchMessage {
  export type AsObject = {
    announcement?: bragi_common_pb.AnnouncementUpdate.AsObject,
    csgo?: bragi_csgo_pb.CsgoMatchMessage.AsObject,
    csgoWingman?: bragi_csgo_pb.CsgoMatchMessage.AsObject,
    dota2?: bragi_dota2_pb.Dota2MatchMessage.AsObject,
    rushSoccer?: bragi_rush_soccer_pb.RushSoccerMatchMessage.AsObject,
  }

  export enum MessageCase {
    MESSAGE_NOT_SET = 0,
    ANNOUNCEMENT = 1,
    CSGO = 2,
    CSGO_WINGMAN = 3,
    DOTA2 = 4,
    RUSH_SOCCER = 5,
  }
}

export class MatchSnapshot extends jspb.Message {
  hasCsgo(): boolean;
  clearCsgo(): void;
  getCsgo(): bragi_csgo_pb.CsgoMatchSnapshot | undefined;
  setCsgo(value?: bragi_csgo_pb.CsgoMatchSnapshot): void;

  hasCsgoWingman(): boolean;
  clearCsgoWingman(): void;
  getCsgoWingman(): bragi_csgo_pb.CsgoMatchSnapshot | undefined;
  setCsgoWingman(value?: bragi_csgo_pb.CsgoMatchSnapshot): void;

  hasDota2(): boolean;
  clearDota2(): void;
  getDota2(): bragi_dota2_pb.Dota2MatchSnapshot | undefined;
  setDota2(value?: bragi_dota2_pb.Dota2MatchSnapshot): void;

  hasRushSoccer(): boolean;
  clearRushSoccer(): void;
  getRushSoccer(): bragi_rush_soccer_pb.RushSoccerMatchSnapshot | undefined;
  setRushSoccer(value?: bragi_rush_soccer_pb.RushSoccerMatchSnapshot): void;

  getSnapshotCase(): MatchSnapshot.SnapshotCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: MatchSnapshot): MatchSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatchSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchSnapshot;
  static deserializeBinaryFromReader(message: MatchSnapshot, reader: jspb.BinaryReader): MatchSnapshot;
}

export namespace MatchSnapshot {
  export type AsObject = {
    csgo?: bragi_csgo_pb.CsgoMatchSnapshot.AsObject,
    csgoWingman?: bragi_csgo_pb.CsgoMatchSnapshot.AsObject,
    dota2?: bragi_dota2_pb.Dota2MatchSnapshot.AsObject,
    rushSoccer?: bragi_rush_soccer_pb.RushSoccerMatchSnapshot.AsObject,
  }

  export enum SnapshotCase {
    SNAPSHOT_NOT_SET = 0,
    CSGO = 1,
    CSGO_WINGMAN = 2,
    DOTA2 = 3,
    RUSH_SOCCER = 4,
  }
}

export class MatchState extends jspb.Message {
  hasCsgo(): boolean;
  clearCsgo(): void;
  getCsgo(): bragi_csgo_pb.CsgoMatchState | undefined;
  setCsgo(value?: bragi_csgo_pb.CsgoMatchState): void;

  hasCsgoWingman(): boolean;
  clearCsgoWingman(): void;
  getCsgoWingman(): bragi_csgo_pb.CsgoMatchState | undefined;
  setCsgoWingman(value?: bragi_csgo_pb.CsgoMatchState): void;

  hasDota2(): boolean;
  clearDota2(): void;
  getDota2(): bragi_dota2_pb.Dota2MatchState | undefined;
  setDota2(value?: bragi_dota2_pb.Dota2MatchState): void;

  hasRushSoccer(): boolean;
  clearRushSoccer(): void;
  getRushSoccer(): bragi_rush_soccer_pb.RushSoccerMatchState | undefined;
  setRushSoccer(value?: bragi_rush_soccer_pb.RushSoccerMatchState): void;

  getStateCase(): MatchState.StateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchState.AsObject;
  static toObject(includeInstance: boolean, msg: MatchState): MatchState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatchState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchState;
  static deserializeBinaryFromReader(message: MatchState, reader: jspb.BinaryReader): MatchState;
}

export namespace MatchState {
  export type AsObject = {
    csgo?: bragi_csgo_pb.CsgoMatchState.AsObject,
    csgoWingman?: bragi_csgo_pb.CsgoMatchState.AsObject,
    dota2?: bragi_dota2_pb.Dota2MatchState.AsObject,
    rushSoccer?: bragi_rush_soccer_pb.RushSoccerMatchState.AsObject,
  }

  export enum StateCase {
    STATE_NOT_SET = 0,
    CSGO = 1,
    CSGO_WINGMAN = 2,
    DOTA2 = 3,
    RUSH_SOCCER = 4,
  }
}

