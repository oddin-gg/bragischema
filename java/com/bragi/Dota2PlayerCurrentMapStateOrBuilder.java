// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: bragi/dota2.proto
// Protobuf Java Version: 4.29.3

package com.bragi;

public interface Dota2PlayerCurrentMapStateOrBuilder extends
    // @@protoc_insertion_point(interface_extends:bragi.Dota2PlayerCurrentMapState)
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
   * <code>.bragi.Dota2PlayerCurrentMapTimersState timers = 3 [json_name = "timers"];</code>
   * @return Whether the timers field is set.
   */
  boolean hasTimers();
  /**
   * <code>.bragi.Dota2PlayerCurrentMapTimersState timers = 3 [json_name = "timers"];</code>
   * @return The timers.
   */
  com.bragi.Dota2PlayerCurrentMapTimersState getTimers();
  /**
   * <code>.bragi.Dota2PlayerCurrentMapTimersState timers = 3 [json_name = "timers"];</code>
   */
  com.bragi.Dota2PlayerCurrentMapTimersStateOrBuilder getTimersOrBuilder();

  /**
   * <code>.bragi.Dota2PlayerStatisticsState statistics = 4 [json_name = "statistics"];</code>
   * @return Whether the statistics field is set.
   */
  boolean hasStatistics();
  /**
   * <code>.bragi.Dota2PlayerStatisticsState statistics = 4 [json_name = "statistics"];</code>
   * @return The statistics.
   */
  com.bragi.Dota2PlayerStatisticsState getStatistics();
  /**
   * <code>.bragi.Dota2PlayerStatisticsState statistics = 4 [json_name = "statistics"];</code>
   */
  com.bragi.Dota2PlayerStatisticsStateOrBuilder getStatisticsOrBuilder();

  /**
   * <code>.bragi.Dota2PlayerCurrentMapStatisticsState map_statistics = 5 [json_name = "mapStatistics"];</code>
   * @return Whether the mapStatistics field is set.
   */
  boolean hasMapStatistics();
  /**
   * <code>.bragi.Dota2PlayerCurrentMapStatisticsState map_statistics = 5 [json_name = "mapStatistics"];</code>
   * @return The mapStatistics.
   */
  com.bragi.Dota2PlayerCurrentMapStatisticsState getMapStatistics();
  /**
   * <code>.bragi.Dota2PlayerCurrentMapStatisticsState map_statistics = 5 [json_name = "mapStatistics"];</code>
   */
  com.bragi.Dota2PlayerCurrentMapStatisticsStateOrBuilder getMapStatisticsOrBuilder();

  /**
   * <code>.bragi.Dota2Position position = 6 [json_name = "position"];</code>
   * @return Whether the position field is set.
   */
  boolean hasPosition();
  /**
   * <code>.bragi.Dota2Position position = 6 [json_name = "position"];</code>
   * @return The position.
   */
  com.bragi.Dota2Position getPosition();
  /**
   * <code>.bragi.Dota2Position position = 6 [json_name = "position"];</code>
   */
  com.bragi.Dota2PositionOrBuilder getPositionOrBuilder();

  /**
   * <code>.bragi.Dota2Items items = 7 [json_name = "items"];</code>
   * @return Whether the items field is set.
   */
  boolean hasItems();
  /**
   * <code>.bragi.Dota2Items items = 7 [json_name = "items"];</code>
   * @return The items.
   */
  com.bragi.Dota2Items getItems();
  /**
   * <code>.bragi.Dota2Items items = 7 [json_name = "items"];</code>
   */
  com.bragi.Dota2ItemsOrBuilder getItemsOrBuilder();

  /**
   * <code>.bragi.Dota2Abilities abilities = 8 [json_name = "abilities"];</code>
   * @return Whether the abilities field is set.
   */
  boolean hasAbilities();
  /**
   * <code>.bragi.Dota2Abilities abilities = 8 [json_name = "abilities"];</code>
   * @return The abilities.
   */
  com.bragi.Dota2Abilities getAbilities();
  /**
   * <code>.bragi.Dota2Abilities abilities = 8 [json_name = "abilities"];</code>
   */
  com.bragi.Dota2AbilitiesOrBuilder getAbilitiesOrBuilder();
}
