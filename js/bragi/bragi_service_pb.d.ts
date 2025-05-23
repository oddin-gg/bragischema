// package: bragi
// file: bragi/bragi_service.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as bragi_common_pb from "../bragi/common_pb";
import * as bragi_cs2_pb from "../bragi/cs2_pb";
import * as bragi_dota2_pb from "../bragi/dota2_pb";
import * as bragi_rush_soccer_pb from "../bragi/rush_soccer_pb";
import * as bragi_lol_pb from "../bragi/lol_pb";
import * as bragi_rush_basketball_pb from "../bragi/rush_basketball_pb";
import * as bragi_valorant_pb from "../bragi/valorant_pb";
import * as bragi_rush_cricket_pb from "../bragi/rush_cricket_pb";

export class MatchEventsFeedRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchEventsFeedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MatchEventsFeedRequest): MatchEventsFeedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatchEventsFeedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchEventsFeedRequest;
  static deserializeBinaryFromReader(message: MatchEventsFeedRequest, reader: jspb.BinaryReader): MatchEventsFeedRequest;
}

export namespace MatchEventsFeedRequest {
  export type AsObject = {
  }
}

export class MatchEventsFeedMessage extends jspb.Message {
  hasCs2(): boolean;
  clearCs2(): void;
  getCs2(): bragi_cs2_pb.CS2MatchEvents | undefined;
  setCs2(value?: bragi_cs2_pb.CS2MatchEvents): void;

  getPayloadCase(): MatchEventsFeedMessage.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchEventsFeedMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MatchEventsFeedMessage): MatchEventsFeedMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatchEventsFeedMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchEventsFeedMessage;
  static deserializeBinaryFromReader(message: MatchEventsFeedMessage, reader: jspb.BinaryReader): MatchEventsFeedMessage;
}

export namespace MatchEventsFeedMessage {
  export type AsObject = {
    cs2?: bragi_cs2_pb.CS2MatchEvents.AsObject,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    CS2 = 1,
  }
}

export class MatchTimelineRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchTimelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MatchTimelineRequest): MatchTimelineRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatchTimelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchTimelineRequest;
  static deserializeBinaryFromReader(message: MatchTimelineRequest, reader: jspb.BinaryReader): MatchTimelineRequest;
}

export namespace MatchTimelineRequest {
  export type AsObject = {
  }
}

export class MatchTimelineResponse extends jspb.Message {
  clearMatchesList(): void;
  getMatchesList(): Array<bragi_common_pb.Match>;
  setMatchesList(value: Array<bragi_common_pb.Match>): void;
  addMatches(value?: bragi_common_pb.Match, index?: number): bragi_common_pb.Match;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchTimelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MatchTimelineResponse): MatchTimelineResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatchTimelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchTimelineResponse;
  static deserializeBinaryFromReader(message: MatchTimelineResponse, reader: jspb.BinaryReader): MatchTimelineResponse;
}

export namespace MatchTimelineResponse {
  export type AsObject = {
    matchesList: Array<bragi_common_pb.Match.AsObject>,
  }
}

export class MatchTimelineFeedRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchTimelineFeedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MatchTimelineFeedRequest): MatchTimelineFeedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatchTimelineFeedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchTimelineFeedRequest;
  static deserializeBinaryFromReader(message: MatchTimelineFeedRequest, reader: jspb.BinaryReader): MatchTimelineFeedRequest;
}

export namespace MatchTimelineFeedRequest {
  export type AsObject = {
  }
}

export class MatchTimelineFeedMessage extends jspb.Message {
  hasKeepalive(): boolean;
  clearKeepalive(): void;
  getKeepalive(): KeepAlive | undefined;
  setKeepalive(value?: KeepAlive): void;

  hasTimeline(): boolean;
  clearTimeline(): void;
  getTimeline(): bragi_common_pb.MatchTimeline | undefined;
  setTimeline(value?: bragi_common_pb.MatchTimeline): void;

  hasMatchUpdate(): boolean;
  clearMatchUpdate(): void;
  getMatchUpdate(): bragi_common_pb.Match | undefined;
  setMatchUpdate(value?: bragi_common_pb.Match): void;

  getPayloadCase(): MatchTimelineFeedMessage.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchTimelineFeedMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MatchTimelineFeedMessage): MatchTimelineFeedMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatchTimelineFeedMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchTimelineFeedMessage;
  static deserializeBinaryFromReader(message: MatchTimelineFeedMessage, reader: jspb.BinaryReader): MatchTimelineFeedMessage;
}

export namespace MatchTimelineFeedMessage {
  export type AsObject = {
    keepalive?: KeepAlive.AsObject,
    timeline?: bragi_common_pb.MatchTimeline.AsObject,
    matchUpdate?: bragi_common_pb.Match.AsObject,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    KEEPALIVE = 1,
    TIMELINE = 2,
    MATCH_UPDATE = 3,
  }
}

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

  hasCs2(): boolean;
  clearCs2(): void;
  getCs2(): bragi_cs2_pb.CS2MatchMessage | undefined;
  setCs2(value?: bragi_cs2_pb.CS2MatchMessage): void;

  hasCs2Duels(): boolean;
  clearCs2Duels(): void;
  getCs2Duels(): bragi_cs2_pb.CS2MatchMessage | undefined;
  setCs2Duels(value?: bragi_cs2_pb.CS2MatchMessage): void;

  hasDota2(): boolean;
  clearDota2(): void;
  getDota2(): bragi_dota2_pb.Dota2MatchMessage | undefined;
  setDota2(value?: bragi_dota2_pb.Dota2MatchMessage): void;

  hasRushSoccer(): boolean;
  clearRushSoccer(): void;
  getRushSoccer(): bragi_rush_soccer_pb.RushSoccerMatchMessage | undefined;
  setRushSoccer(value?: bragi_rush_soccer_pb.RushSoccerMatchMessage): void;

  hasLol(): boolean;
  clearLol(): void;
  getLol(): bragi_lol_pb.LolMatchMessage | undefined;
  setLol(value?: bragi_lol_pb.LolMatchMessage): void;

  hasRushBasketball(): boolean;
  clearRushBasketball(): void;
  getRushBasketball(): bragi_rush_basketball_pb.RushBasketballMatchMessage | undefined;
  setRushBasketball(value?: bragi_rush_basketball_pb.RushBasketballMatchMessage): void;

  hasValorant(): boolean;
  clearValorant(): void;
  getValorant(): bragi_valorant_pb.ValorantMatchMessage | undefined;
  setValorant(value?: bragi_valorant_pb.ValorantMatchMessage): void;

  hasRushCricket(): boolean;
  clearRushCricket(): void;
  getRushCricket(): bragi_rush_cricket_pb.RushCricketMatchMessage | undefined;
  setRushCricket(value?: bragi_rush_cricket_pb.RushCricketMatchMessage): void;

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
    cs2?: bragi_cs2_pb.CS2MatchMessage.AsObject,
    cs2Duels?: bragi_cs2_pb.CS2MatchMessage.AsObject,
    dota2?: bragi_dota2_pb.Dota2MatchMessage.AsObject,
    rushSoccer?: bragi_rush_soccer_pb.RushSoccerMatchMessage.AsObject,
    lol?: bragi_lol_pb.LolMatchMessage.AsObject,
    rushBasketball?: bragi_rush_basketball_pb.RushBasketballMatchMessage.AsObject,
    valorant?: bragi_valorant_pb.ValorantMatchMessage.AsObject,
    rushCricket?: bragi_rush_cricket_pb.RushCricketMatchMessage.AsObject,
  }

  export enum MessageCase {
    MESSAGE_NOT_SET = 0,
    ANNOUNCEMENT = 1,
    CS2 = 2,
    CS2_DUELS = 3,
    DOTA2 = 4,
    RUSH_SOCCER = 5,
    LOL = 6,
    RUSH_BASKETBALL = 7,
    VALORANT = 8,
    RUSH_CRICKET = 9,
  }
}

export class MatchSnapshot extends jspb.Message {
  hasCs2(): boolean;
  clearCs2(): void;
  getCs2(): bragi_cs2_pb.CS2MatchSnapshot | undefined;
  setCs2(value?: bragi_cs2_pb.CS2MatchSnapshot): void;

  hasCs2Duels(): boolean;
  clearCs2Duels(): void;
  getCs2Duels(): bragi_cs2_pb.CS2MatchSnapshot | undefined;
  setCs2Duels(value?: bragi_cs2_pb.CS2MatchSnapshot): void;

  hasDota2(): boolean;
  clearDota2(): void;
  getDota2(): bragi_dota2_pb.Dota2MatchSnapshot | undefined;
  setDota2(value?: bragi_dota2_pb.Dota2MatchSnapshot): void;

  hasRushSoccer(): boolean;
  clearRushSoccer(): void;
  getRushSoccer(): bragi_rush_soccer_pb.RushSoccerMatchSnapshot | undefined;
  setRushSoccer(value?: bragi_rush_soccer_pb.RushSoccerMatchSnapshot): void;

  hasLol(): boolean;
  clearLol(): void;
  getLol(): bragi_lol_pb.LolMatchSnapshot | undefined;
  setLol(value?: bragi_lol_pb.LolMatchSnapshot): void;

  hasRushBasketball(): boolean;
  clearRushBasketball(): void;
  getRushBasketball(): bragi_rush_basketball_pb.RushBasketballMatchSnapshot | undefined;
  setRushBasketball(value?: bragi_rush_basketball_pb.RushBasketballMatchSnapshot): void;

  hasValorant(): boolean;
  clearValorant(): void;
  getValorant(): bragi_valorant_pb.ValorantMatchSnapshot | undefined;
  setValorant(value?: bragi_valorant_pb.ValorantMatchSnapshot): void;

  hasRushCricket(): boolean;
  clearRushCricket(): void;
  getRushCricket(): bragi_rush_cricket_pb.RushCricketMatchSnapshot | undefined;
  setRushCricket(value?: bragi_rush_cricket_pb.RushCricketMatchSnapshot): void;

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
    cs2?: bragi_cs2_pb.CS2MatchSnapshot.AsObject,
    cs2Duels?: bragi_cs2_pb.CS2MatchSnapshot.AsObject,
    dota2?: bragi_dota2_pb.Dota2MatchSnapshot.AsObject,
    rushSoccer?: bragi_rush_soccer_pb.RushSoccerMatchSnapshot.AsObject,
    lol?: bragi_lol_pb.LolMatchSnapshot.AsObject,
    rushBasketball?: bragi_rush_basketball_pb.RushBasketballMatchSnapshot.AsObject,
    valorant?: bragi_valorant_pb.ValorantMatchSnapshot.AsObject,
    rushCricket?: bragi_rush_cricket_pb.RushCricketMatchSnapshot.AsObject,
  }

  export enum SnapshotCase {
    SNAPSHOT_NOT_SET = 0,
    CS2 = 1,
    CS2_DUELS = 2,
    DOTA2 = 3,
    RUSH_SOCCER = 4,
    LOL = 5,
    RUSH_BASKETBALL = 6,
    VALORANT = 7,
    RUSH_CRICKET = 8,
  }
}

export class MatchState extends jspb.Message {
  hasCs2(): boolean;
  clearCs2(): void;
  getCs2(): bragi_cs2_pb.CS2MatchState | undefined;
  setCs2(value?: bragi_cs2_pb.CS2MatchState): void;

  hasCs2Duels(): boolean;
  clearCs2Duels(): void;
  getCs2Duels(): bragi_cs2_pb.CS2MatchState | undefined;
  setCs2Duels(value?: bragi_cs2_pb.CS2MatchState): void;

  hasDota2(): boolean;
  clearDota2(): void;
  getDota2(): bragi_dota2_pb.Dota2MatchState | undefined;
  setDota2(value?: bragi_dota2_pb.Dota2MatchState): void;

  hasRushSoccer(): boolean;
  clearRushSoccer(): void;
  getRushSoccer(): bragi_rush_soccer_pb.RushSoccerMatchState | undefined;
  setRushSoccer(value?: bragi_rush_soccer_pb.RushSoccerMatchState): void;

  hasLol(): boolean;
  clearLol(): void;
  getLol(): bragi_lol_pb.LolMatchState | undefined;
  setLol(value?: bragi_lol_pb.LolMatchState): void;

  hasRushBasketball(): boolean;
  clearRushBasketball(): void;
  getRushBasketball(): bragi_rush_basketball_pb.RushBasketballMatchState | undefined;
  setRushBasketball(value?: bragi_rush_basketball_pb.RushBasketballMatchState): void;

  hasValorant(): boolean;
  clearValorant(): void;
  getValorant(): bragi_valorant_pb.ValorantMatchState | undefined;
  setValorant(value?: bragi_valorant_pb.ValorantMatchState): void;

  hasRushCricket(): boolean;
  clearRushCricket(): void;
  getRushCricket(): bragi_rush_cricket_pb.RushCricketMatchState | undefined;
  setRushCricket(value?: bragi_rush_cricket_pb.RushCricketMatchState): void;

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
    cs2?: bragi_cs2_pb.CS2MatchState.AsObject,
    cs2Duels?: bragi_cs2_pb.CS2MatchState.AsObject,
    dota2?: bragi_dota2_pb.Dota2MatchState.AsObject,
    rushSoccer?: bragi_rush_soccer_pb.RushSoccerMatchState.AsObject,
    lol?: bragi_lol_pb.LolMatchState.AsObject,
    rushBasketball?: bragi_rush_basketball_pb.RushBasketballMatchState.AsObject,
    valorant?: bragi_valorant_pb.ValorantMatchState.AsObject,
    rushCricket?: bragi_rush_cricket_pb.RushCricketMatchState.AsObject,
  }

  export enum StateCase {
    STATE_NOT_SET = 0,
    CS2 = 1,
    CS2_DUELS = 2,
    DOTA2 = 3,
    RUSH_SOCCER = 4,
    LOL = 5,
    RUSH_BASKETBALL = 6,
    VALORANT = 7,
    RUSH_CRICKET = 8,
  }
}

