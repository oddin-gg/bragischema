// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: bragi/cs2.proto
// Protobuf Java Version: 4.29.3

package com.bragi;

public interface CS2FreezeTimeStartedOrBuilder extends
    // @@protoc_insertion_point(interface_extends:bragi.CS2FreezeTimeStarted)
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
   * <pre>
   * keys are type of player_urn
   * </pre>
   *
   * <code>map&lt;string, .bragi.CS2PlayerBalance&gt; player_balances = 4 [json_name = "playerBalances"];</code>
   */
  int getPlayerBalancesCount();
  /**
   * <pre>
   * keys are type of player_urn
   * </pre>
   *
   * <code>map&lt;string, .bragi.CS2PlayerBalance&gt; player_balances = 4 [json_name = "playerBalances"];</code>
   */
  boolean containsPlayerBalances(
      java.lang.String key);
  /**
   * Use {@link #getPlayerBalancesMap()} instead.
   */
  @java.lang.Deprecated
  java.util.Map<java.lang.String, com.bragi.CS2PlayerBalance>
  getPlayerBalances();
  /**
   * <pre>
   * keys are type of player_urn
   * </pre>
   *
   * <code>map&lt;string, .bragi.CS2PlayerBalance&gt; player_balances = 4 [json_name = "playerBalances"];</code>
   */
  java.util.Map<java.lang.String, com.bragi.CS2PlayerBalance>
  getPlayerBalancesMap();
  /**
   * <pre>
   * keys are type of player_urn
   * </pre>
   *
   * <code>map&lt;string, .bragi.CS2PlayerBalance&gt; player_balances = 4 [json_name = "playerBalances"];</code>
   */
  /* nullable */
com.bragi.CS2PlayerBalance getPlayerBalancesOrDefault(
      java.lang.String key,
      /* nullable */
com.bragi.CS2PlayerBalance defaultValue);
  /**
   * <pre>
   * keys are type of player_urn
   * </pre>
   *
   * <code>map&lt;string, .bragi.CS2PlayerBalance&gt; player_balances = 4 [json_name = "playerBalances"];</code>
   */
  com.bragi.CS2PlayerBalance getPlayerBalancesOrThrow(
      java.lang.String key);

  /**
   * <pre>
   * keys are type of team_urn
   * </pre>
   *
   * <code>map&lt;string, .bragi.CS2Side&gt; teams_round_info = 5 [json_name = "teamsRoundInfo"];</code>
   */
  int getTeamsRoundInfoCount();
  /**
   * <pre>
   * keys are type of team_urn
   * </pre>
   *
   * <code>map&lt;string, .bragi.CS2Side&gt; teams_round_info = 5 [json_name = "teamsRoundInfo"];</code>
   */
  boolean containsTeamsRoundInfo(
      java.lang.String key);
  /**
   * Use {@link #getTeamsRoundInfoMap()} instead.
   */
  @java.lang.Deprecated
  java.util.Map<java.lang.String, com.bragi.CS2Side>
  getTeamsRoundInfo();
  /**
   * <pre>
   * keys are type of team_urn
   * </pre>
   *
   * <code>map&lt;string, .bragi.CS2Side&gt; teams_round_info = 5 [json_name = "teamsRoundInfo"];</code>
   */
  java.util.Map<java.lang.String, com.bragi.CS2Side>
  getTeamsRoundInfoMap();
  /**
   * <pre>
   * keys are type of team_urn
   * </pre>
   *
   * <code>map&lt;string, .bragi.CS2Side&gt; teams_round_info = 5 [json_name = "teamsRoundInfo"];</code>
   */
  /* nullable */
com.bragi.CS2Side getTeamsRoundInfoOrDefault(
      java.lang.String key,
      /* nullable */
com.bragi.CS2Side         defaultValue);
  /**
   * <pre>
   * keys are type of team_urn
   * </pre>
   *
   * <code>map&lt;string, .bragi.CS2Side&gt; teams_round_info = 5 [json_name = "teamsRoundInfo"];</code>
   */
  com.bragi.CS2Side getTeamsRoundInfoOrThrow(
      java.lang.String key);
  /**
   * Use {@link #getTeamsRoundInfoValueMap()} instead.
   */
  @java.lang.Deprecated
  java.util.Map<java.lang.String, java.lang.Integer>
  getTeamsRoundInfoValue();
  /**
   * <pre>
   * keys are type of team_urn
   * </pre>
   *
   * <code>map&lt;string, .bragi.CS2Side&gt; teams_round_info = 5 [json_name = "teamsRoundInfo"];</code>
   */
  java.util.Map<java.lang.String, java.lang.Integer>
  getTeamsRoundInfoValueMap();
  /**
   * <pre>
   * keys are type of team_urn
   * </pre>
   *
   * <code>map&lt;string, .bragi.CS2Side&gt; teams_round_info = 5 [json_name = "teamsRoundInfo"];</code>
   */
  int getTeamsRoundInfoValueOrDefault(
      java.lang.String key,
      int defaultValue);
  /**
   * <pre>
   * keys are type of team_urn
   * </pre>
   *
   * <code>map&lt;string, .bragi.CS2Side&gt; teams_round_info = 5 [json_name = "teamsRoundInfo"];</code>
   */
  int getTeamsRoundInfoValueOrThrow(
      java.lang.String key);
}
