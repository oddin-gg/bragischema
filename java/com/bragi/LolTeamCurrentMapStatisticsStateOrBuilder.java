// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: bragi/lol.proto
// Protobuf Java Version: 4.29.3

package com.bragi;

public interface LolTeamCurrentMapStatisticsStateOrBuilder extends
    // @@protoc_insertion_point(interface_extends:bragi.LolTeamCurrentMapStatisticsState)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string team_urn = 1 [json_name = "teamUrn"];</code>
   * @return The teamUrn.
   */
  java.lang.String getTeamUrn();
  /**
   * <code>string team_urn = 1 [json_name = "teamUrn"];</code>
   * @return The bytes for teamUrn.
   */
  com.google.protobuf.ByteString
      getTeamUrnBytes();

  /**
   * <code>uint32 kills = 2 [json_name = "kills"];</code>
   * @return The kills.
   */
  int getKills();

  /**
   * <code>uint32 barons = 3 [json_name = "barons"];</code>
   * @return The barons.
   */
  int getBarons();

  /**
   * <code>uint32 dragons = 4 [json_name = "dragons"];</code>
   * @return The dragons.
   */
  int getDragons();

  /**
   * <code>uint32 turrets = 5 [json_name = "turrets"];</code>
   * @return The turrets.
   */
  int getTurrets();

  /**
   * <code>uint32 inhibitors = 6 [json_name = "inhibitors"];</code>
   * @return The inhibitors.
   */
  int getInhibitors();

  /**
   * <code>uint32 gold = 7 [json_name = "gold"];</code>
   * @return The gold.
   */
  int getGold();
}
