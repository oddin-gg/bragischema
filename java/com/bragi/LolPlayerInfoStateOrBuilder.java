// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: bragi/lol.proto
// Protobuf Java Version: 4.29.3

package com.bragi;

public interface LolPlayerInfoStateOrBuilder extends
    // @@protoc_insertion_point(interface_extends:bragi.LolPlayerInfoState)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string player_urn = 1 [json_name = "playerUrn"];</code>
   * @return The playerUrn.
   */
  java.lang.String getPlayerUrn();
  /**
   * <code>string player_urn = 1 [json_name = "playerUrn"];</code>
   * @return The bytes for playerUrn.
   */
  com.google.protobuf.ByteString
      getPlayerUrnBytes();

  /**
   * <code>uint32 slot_id = 2 [json_name = "slotId"];</code>
   * @return The slotId.
   */
  int getSlotId();

  /**
   * <code>string ext_name = 3 [json_name = "extName"];</code>
   * @return The extName.
   */
  java.lang.String getExtName();
  /**
   * <code>string ext_name = 3 [json_name = "extName"];</code>
   * @return The bytes for extName.
   */
  com.google.protobuf.ByteString
      getExtNameBytes();

  /**
   * <code>optional uint32 champion_id = 4 [json_name = "championId"];</code>
   * @return Whether the championId field is set.
   */
  boolean hasChampionId();
  /**
   * <code>optional uint32 champion_id = 4 [json_name = "championId"];</code>
   * @return The championId.
   */
  int getChampionId();
}
