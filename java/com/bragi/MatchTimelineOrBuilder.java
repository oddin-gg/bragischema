// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: bragi/common.proto
// Protobuf Java Version: 4.29.3

package com.bragi;

public interface MatchTimelineOrBuilder extends
    // @@protoc_insertion_point(interface_extends:bragi.MatchTimeline)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>repeated .bragi.Match matches = 1 [json_name = "matches"];</code>
   */
  java.util.List<com.bragi.Match> 
      getMatchesList();
  /**
   * <code>repeated .bragi.Match matches = 1 [json_name = "matches"];</code>
   */
  com.bragi.Match getMatches(int index);
  /**
   * <code>repeated .bragi.Match matches = 1 [json_name = "matches"];</code>
   */
  int getMatchesCount();
  /**
   * <code>repeated .bragi.Match matches = 1 [json_name = "matches"];</code>
   */
  java.util.List<? extends com.bragi.MatchOrBuilder> 
      getMatchesOrBuilderList();
  /**
   * <code>repeated .bragi.Match matches = 1 [json_name = "matches"];</code>
   */
  com.bragi.MatchOrBuilder getMatchesOrBuilder(
      int index);
}
