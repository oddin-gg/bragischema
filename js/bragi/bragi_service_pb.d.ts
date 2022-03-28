// package: bragi
// file: bragi/bragi_service.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as bragi_csgo_pb from "../bragi/csgo_pb";
import * as bragi_common_pb from "../bragi/common_pb";

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
  }

  export enum MessageCase {
    MESSAGE_NOT_SET = 0,
    ANNOUNCEMENT = 1,
    CSGO = 2,
  }
}

