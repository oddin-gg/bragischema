// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: bragi/lol.proto
// Protobuf Java Version: 4.29.3

package com.bragi;

public interface LolTurretOrBuilder extends
    // @@protoc_insertion_point(interface_extends:bragi.LolTurret)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>.bragi.LolLane lane = 1 [json_name = "lane"];</code>
   * @return The enum numeric value on the wire for lane.
   */
  int getLaneValue();
  /**
   * <code>.bragi.LolLane lane = 1 [json_name = "lane"];</code>
   * @return The lane.
   */
  com.bragi.LolLane getLane();

  /**
   * <code>.bragi.LolFaction faction = 2 [json_name = "faction"];</code>
   * @return The enum numeric value on the wire for faction.
   */
  int getFactionValue();
  /**
   * <code>.bragi.LolFaction faction = 2 [json_name = "faction"];</code>
   * @return The faction.
   */
  com.bragi.LolFaction getFaction();

  /**
   * <code>.bragi.LolTurretTier tier = 3 [json_name = "tier"];</code>
   * @return The enum numeric value on the wire for tier.
   */
  int getTierValue();
  /**
   * <code>.bragi.LolTurretTier tier = 3 [json_name = "tier"];</code>
   * @return The tier.
   */
  com.bragi.LolTurretTier getTier();

  /**
   * <code>bool alive = 4 [json_name = "alive"];</code>
   * @return The alive.
   */
  boolean getAlive();
}
