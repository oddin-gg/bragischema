// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: bragi/rush_soccer.proto
// Protobuf Java Version: 4.29.3

package com.bragi;

public interface RushSoccerMatchMessageOrBuilder extends
    // @@protoc_insertion_point(interface_extends:bragi.RushSoccerMatchMessage)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * Match urn.
   * </pre>
   *
   * <code>string match_urn = 1 [json_name = "matchUrn"];</code>
   * @return The matchUrn.
   */
  java.lang.String getMatchUrn();
  /**
   * <pre>
   * Match urn.
   * </pre>
   *
   * <code>string match_urn = 1 [json_name = "matchUrn"];</code>
   * @return The bytes for matchUrn.
   */
  com.google.protobuf.ByteString
      getMatchUrnBytes();

  /**
   * <pre>
   * Message sequence.
   * </pre>
   *
   * <code>uint64 sequence = 2 [json_name = "sequence"];</code>
   * @return The sequence.
   */
  long getSequence();

  /**
   * <pre>
   * Message timestamp.
   * </pre>
   *
   * <code>.google.protobuf.Timestamp timestamp = 3 [json_name = "timestamp"];</code>
   * @return Whether the timestamp field is set.
   */
  boolean hasTimestamp();
  /**
   * <pre>
   * Message timestamp.
   * </pre>
   *
   * <code>.google.protobuf.Timestamp timestamp = 3 [json_name = "timestamp"];</code>
   * @return The timestamp.
   */
  com.google.protobuf.Timestamp getTimestamp();
  /**
   * <pre>
   * Message timestamp.
   * </pre>
   *
   * <code>.google.protobuf.Timestamp timestamp = 3 [json_name = "timestamp"];</code>
   */
  com.google.protobuf.TimestampOrBuilder getTimestampOrBuilder();

  /**
   * <pre>
   * Data status.
   * </pre>
   *
   * <code>.bragi.DataStatus data_status = 4 [json_name = "dataStatus"];</code>
   * @return The enum numeric value on the wire for dataStatus.
   */
  int getDataStatusValue();
  /**
   * <pre>
   * Data status.
   * </pre>
   *
   * <code>.bragi.DataStatus data_status = 4 [json_name = "dataStatus"];</code>
   * @return The dataStatus.
   */
  com.bragi.DataStatus getDataStatus();

  /**
   * <pre>
   * Message payload.
   * </pre>
   *
   * <code>.bragi.RushSoccerMatchMessage.Payload payload = 5 [json_name = "payload"];</code>
   * @return Whether the payload field is set.
   */
  boolean hasPayload();
  /**
   * <pre>
   * Message payload.
   * </pre>
   *
   * <code>.bragi.RushSoccerMatchMessage.Payload payload = 5 [json_name = "payload"];</code>
   * @return The payload.
   */
  com.bragi.RushSoccerMatchMessage.Payload getPayload();
  /**
   * <pre>
   * Message payload.
   * </pre>
   *
   * <code>.bragi.RushSoccerMatchMessage.Payload payload = 5 [json_name = "payload"];</code>
   */
  com.bragi.RushSoccerMatchMessage.PayloadOrBuilder getPayloadOrBuilder();
}
