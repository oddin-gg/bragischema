// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: bragi/bragi_service.proto
// Protobuf Java Version: 4.29.3

package com.bragi;

public interface LiveDataFeedMessageOrBuilder extends
    // @@protoc_insertion_point(interface_extends:bragi.LiveDataFeedMessage)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * Deprecated. Replaced with the in-built gRPC keep alive
   * </pre>
   *
   * <code>.bragi.KeepAlive keepalive = 1 [json_name = "keepalive", deprecated = true];</code>
   * @deprecated bragi.LiveDataFeedMessage.keepalive is deprecated.
   *     See bragi/bragi_service.proto;l=58
   * @return Whether the keepalive field is set.
   */
  @java.lang.Deprecated boolean hasKeepalive();
  /**
   * <pre>
   * Deprecated. Replaced with the in-built gRPC keep alive
   * </pre>
   *
   * <code>.bragi.KeepAlive keepalive = 1 [json_name = "keepalive", deprecated = true];</code>
   * @deprecated bragi.LiveDataFeedMessage.keepalive is deprecated.
   *     See bragi/bragi_service.proto;l=58
   * @return The keepalive.
   */
  @java.lang.Deprecated com.bragi.KeepAlive getKeepalive();
  /**
   * <pre>
   * Deprecated. Replaced with the in-built gRPC keep alive
   * </pre>
   *
   * <code>.bragi.KeepAlive keepalive = 1 [json_name = "keepalive", deprecated = true];</code>
   */
  @java.lang.Deprecated com.bragi.KeepAliveOrBuilder getKeepaliveOrBuilder();

  /**
   * <code>.bragi.MatchMessage match = 2 [json_name = "match"];</code>
   * @return Whether the match field is set.
   */
  boolean hasMatch();
  /**
   * <code>.bragi.MatchMessage match = 2 [json_name = "match"];</code>
   * @return The match.
   */
  com.bragi.MatchMessage getMatch();
  /**
   * <code>.bragi.MatchMessage match = 2 [json_name = "match"];</code>
   */
  com.bragi.MatchMessageOrBuilder getMatchOrBuilder();

  com.bragi.LiveDataFeedMessage.MessageCase getMessageCase();
}
