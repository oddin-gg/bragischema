// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: bragi/cs2.proto
// Protobuf Java Version: 4.29.3

package com.bragi;

public interface CS2BombCarriedStateOrBuilder extends
    // @@protoc_insertion_point(interface_extends:bragi.CS2BombCarriedState)
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
   * <code>.bragi.CS2Position position = 2 [json_name = "position"];</code>
   * @return Whether the position field is set.
   */
  boolean hasPosition();
  /**
   * <code>.bragi.CS2Position position = 2 [json_name = "position"];</code>
   * @return The position.
   */
  com.bragi.CS2Position getPosition();
  /**
   * <code>.bragi.CS2Position position = 2 [json_name = "position"];</code>
   */
  com.bragi.CS2PositionOrBuilder getPositionOrBuilder();
}
