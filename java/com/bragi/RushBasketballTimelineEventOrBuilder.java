// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: bragi/rush_basketball.proto
// Protobuf Java Version: 4.29.3

package com.bragi;

public interface RushBasketballTimelineEventOrBuilder extends
    // @@protoc_insertion_point(interface_extends:bragi.RushBasketballTimelineEvent)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * Team urn.
   * </pre>
   *
   * <code>string team_urn = 1 [json_name = "teamUrn"];</code>
   * @return The teamUrn.
   */
  java.lang.String getTeamUrn();
  /**
   * <pre>
   * Team urn.
   * </pre>
   *
   * <code>string team_urn = 1 [json_name = "teamUrn"];</code>
   * @return The bytes for teamUrn.
   */
  com.google.protobuf.ByteString
      getTeamUrnBytes();

  /**
   * <pre>
   * Event type.
   * </pre>
   *
   * <code>.bragi.RushBasketballEventType event_type = 2 [json_name = "eventType"];</code>
   * @return The enum numeric value on the wire for eventType.
   */
  int getEventTypeValue();
  /**
   * <pre>
   * Event type.
   * </pre>
   *
   * <code>.bragi.RushBasketballEventType event_type = 2 [json_name = "eventType"];</code>
   * @return The eventType.
   */
  com.bragi.RushBasketballEventType getEventType();

  /**
   * <pre>
   * Remaining game time in seconds (4 x 12 minutes).
   * </pre>
   *
   * <code>.google.protobuf.Duration remaining_time = 3 [json_name = "remainingTime"];</code>
   * @return Whether the remainingTime field is set.
   */
  boolean hasRemainingTime();
  /**
   * <pre>
   * Remaining game time in seconds (4 x 12 minutes).
   * </pre>
   *
   * <code>.google.protobuf.Duration remaining_time = 3 [json_name = "remainingTime"];</code>
   * @return The remainingTime.
   */
  com.google.protobuf.Duration getRemainingTime();
  /**
   * <pre>
   * Remaining game time in seconds (4 x 12 minutes).
   * </pre>
   *
   * <code>.google.protobuf.Duration remaining_time = 3 [json_name = "remainingTime"];</code>
   */
  com.google.protobuf.DurationOrBuilder getRemainingTimeOrBuilder();

  /**
   * <pre>
   * Period.
   * </pre>
   *
   * <code>.bragi.RushBasketballPeriod period = 4 [json_name = "period"];</code>
   * @return The enum numeric value on the wire for period.
   */
  int getPeriodValue();
  /**
   * <pre>
   * Period.
   * </pre>
   *
   * <code>.bragi.RushBasketballPeriod period = 4 [json_name = "period"];</code>
   * @return The period.
   */
  com.bragi.RushBasketballPeriod getPeriod();
}
