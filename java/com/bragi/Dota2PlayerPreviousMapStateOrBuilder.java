// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: bragi/dota2.proto
// Protobuf Java Version: 4.29.3

package com.bragi;

public interface Dota2PlayerPreviousMapStateOrBuilder extends
    // @@protoc_insertion_point(interface_extends:bragi.Dota2PlayerPreviousMapState)
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
   * <code>.bragi.Dota2PlayerInfoState player_info = 2 [json_name = "playerInfo"];</code>
   * @return Whether the playerInfo field is set.
   */
  boolean hasPlayerInfo();
  /**
   * <code>.bragi.Dota2PlayerInfoState player_info = 2 [json_name = "playerInfo"];</code>
   * @return The playerInfo.
   */
  com.bragi.Dota2PlayerInfoState getPlayerInfo();
  /**
   * <code>.bragi.Dota2PlayerInfoState player_info = 2 [json_name = "playerInfo"];</code>
   */
  com.bragi.Dota2PlayerInfoStateOrBuilder getPlayerInfoOrBuilder();

  /**
   * <code>.bragi.Dota2PlayerStatisticsState statistics = 3 [json_name = "statistics"];</code>
   * @return Whether the statistics field is set.
   */
  boolean hasStatistics();
  /**
   * <code>.bragi.Dota2PlayerStatisticsState statistics = 3 [json_name = "statistics"];</code>
   * @return The statistics.
   */
  com.bragi.Dota2PlayerStatisticsState getStatistics();
  /**
   * <code>.bragi.Dota2PlayerStatisticsState statistics = 3 [json_name = "statistics"];</code>
   */
  com.bragi.Dota2PlayerStatisticsStateOrBuilder getStatisticsOrBuilder();
}
