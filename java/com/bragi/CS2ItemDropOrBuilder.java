// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: bragi/cs2.proto
// Protobuf Java Version: 4.29.3

package com.bragi;

public interface CS2ItemDropOrBuilder extends
    // @@protoc_insertion_point(interface_extends:bragi.CS2ItemDrop)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>.google.protobuf.Duration map_time = 1 [json_name = "mapTime"];</code>
   * @return Whether the mapTime field is set.
   */
  boolean hasMapTime();
  /**
   * <code>.google.protobuf.Duration map_time = 1 [json_name = "mapTime"];</code>
   * @return The mapTime.
   */
  com.google.protobuf.Duration getMapTime();
  /**
   * <code>.google.protobuf.Duration map_time = 1 [json_name = "mapTime"];</code>
   */
  com.google.protobuf.DurationOrBuilder getMapTimeOrBuilder();

  /**
   * <code>.google.protobuf.Duration time_remaining = 2 [json_name = "timeRemaining"];</code>
   * @return Whether the timeRemaining field is set.
   */
  boolean hasTimeRemaining();
  /**
   * <code>.google.protobuf.Duration time_remaining = 2 [json_name = "timeRemaining"];</code>
   * @return The timeRemaining.
   */
  com.google.protobuf.Duration getTimeRemaining();
  /**
   * <code>.google.protobuf.Duration time_remaining = 2 [json_name = "timeRemaining"];</code>
   */
  com.google.protobuf.DurationOrBuilder getTimeRemainingOrBuilder();

  /**
   * <code>uint32 current_round_number = 3 [json_name = "currentRoundNumber"];</code>
   * @return The currentRoundNumber.
   */
  int getCurrentRoundNumber();

  /**
   * <code>.bragi.CS2Position position = 4 [json_name = "position"];</code>
   * @return Whether the position field is set.
   */
  boolean hasPosition();
  /**
   * <code>.bragi.CS2Position position = 4 [json_name = "position"];</code>
   * @return The position.
   */
  com.bragi.CS2Position getPosition();
  /**
   * <code>.bragi.CS2Position position = 4 [json_name = "position"];</code>
   */
  com.bragi.CS2PositionOrBuilder getPositionOrBuilder();

  /**
   * <code>string player_urn = 5 [json_name = "playerUrn"];</code>
   * @return The playerUrn.
   */
  java.lang.String getPlayerUrn();
  /**
   * <code>string player_urn = 5 [json_name = "playerUrn"];</code>
   * @return The bytes for playerUrn.
   */
  com.google.protobuf.ByteString
      getPlayerUrnBytes();

  /**
   * <code>string team_urn = 6 [json_name = "teamUrn"];</code>
   * @return The teamUrn.
   */
  java.lang.String getTeamUrn();
  /**
   * <code>string team_urn = 6 [json_name = "teamUrn"];</code>
   * @return The bytes for teamUrn.
   */
  com.google.protobuf.ByteString
      getTeamUrnBytes();

  /**
   * <code>string item = 7 [json_name = "item"];</code>
   * @return The item.
   */
  java.lang.String getItem();
  /**
   * <code>string item = 7 [json_name = "item"];</code>
   * @return The bytes for item.
   */
  com.google.protobuf.ByteString
      getItemBytes();
}
