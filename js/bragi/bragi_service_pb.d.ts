// package: bragi
// file: bragi/bragi_service.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as bragi_csgo_pb from "../bragi/csgo_pb";

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
  hasSnapshot(): boolean;
  clearSnapshot(): void;
  getSnapshot(): MatchSnapshot | undefined;
  setSnapshot(value?: MatchSnapshot): void;

  hasAnnouncement(): boolean;
  clearAnnouncement(): void;
  getAnnouncement(): AnnouncementUpdate | undefined;
  setAnnouncement(value?: AnnouncementUpdate): void;

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
    snapshot?: MatchSnapshot.AsObject,
    announcement?: AnnouncementUpdate.AsObject,
    csgo?: bragi_csgo_pb.CsgoMatchMessage.AsObject,
  }

  export enum MessageCase {
    MESSAGE_NOT_SET = 0,
    SNAPSHOT = 1,
    ANNOUNCEMENT = 2,
    CSGO = 3,
  }
}

export class MatchSnapshot extends jspb.Message {
  getMatchUrn(): string;
  setMatchUrn(value: string): void;

  getSequence(): number;
  setSequence(value: number): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearAnnouncementsList(): void;
  getAnnouncementsList(): Array<Announcement>;
  setAnnouncementsList(value: Array<Announcement>): void;
  addAnnouncements(value?: Announcement, index?: number): Announcement;

  hasMatchState(): boolean;
  clearMatchState(): void;
  getMatchState(): MatchSnapshot.GameMatchState | undefined;
  setMatchState(value?: MatchSnapshot.GameMatchState): void;

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
    matchUrn: string,
    sequence: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    announcementsList: Array<Announcement.AsObject>,
    matchState?: MatchSnapshot.GameMatchState.AsObject,
  }

  export class GameMatchState extends jspb.Message {
    hasCsgo(): boolean;
    clearCsgo(): void;
    getCsgo(): bragi_csgo_pb.CsgoMatchState | undefined;
    setCsgo(value?: bragi_csgo_pb.CsgoMatchState): void;

    getStateCase(): GameMatchState.StateCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GameMatchState.AsObject;
    static toObject(includeInstance: boolean, msg: GameMatchState): GameMatchState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GameMatchState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GameMatchState;
    static deserializeBinaryFromReader(message: GameMatchState, reader: jspb.BinaryReader): GameMatchState;
  }

  export namespace GameMatchState {
    export type AsObject = {
      csgo?: bragi_csgo_pb.CsgoMatchState.AsObject,
    }

    export enum StateCase {
      STATE_NOT_SET = 0,
      CSGO = 1,
    }
  }
}

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

