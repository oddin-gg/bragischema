// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: bragi/dota2.proto
// Protobuf Java Version: 4.29.3

package com.bragi;

public interface Dota2BarrackOrBuilder extends
    // @@protoc_insertion_point(interface_extends:bragi.Dota2Barrack)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>.bragi.Dota2Lane lane = 1 [json_name = "lane"];</code>
   * @return The enum numeric value on the wire for lane.
   */
  int getLaneValue();
  /**
   * <code>.bragi.Dota2Lane lane = 1 [json_name = "lane"];</code>
   * @return The lane.
   */
  com.bragi.Dota2Lane getLane();

  /**
   * <code>.bragi.Dota2Faction faction = 2 [json_name = "faction"];</code>
   * @return The enum numeric value on the wire for faction.
   */
  int getFactionValue();
  /**
   * <code>.bragi.Dota2Faction faction = 2 [json_name = "faction"];</code>
   * @return The faction.
   */
  com.bragi.Dota2Faction getFaction();

  /**
   * <code>.bragi.Dota2BarrackType type = 3 [json_name = "type"];</code>
   * @return The enum numeric value on the wire for type.
   */
  int getTypeValue();
  /**
   * <code>.bragi.Dota2BarrackType type = 3 [json_name = "type"];</code>
   * @return The type.
   */
  com.bragi.Dota2BarrackType getType();

  /**
   * <code>bool alive = 4 [json_name = "alive"];</code>
   * @return The alive.
   */
  boolean getAlive();
}
