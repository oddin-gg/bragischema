// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: bragi/valorant.proto
// Protobuf Java Version: 4.29.3

package com.bragi;

public interface ValorantCurrentMapStatePartialUpdateOrBuilder extends
    // @@protoc_insertion_point(interface_extends:bragi.ValorantCurrentMapStatePartialUpdate)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * Replaces "score" property in ValorantCurrentMapState.
   * </pre>
   *
   * <code>.bragi.ValorantMapScoreState score = 1 [json_name = "score"];</code>
   * @return Whether the score field is set.
   */
  boolean hasScore();
  /**
   * <pre>
   * Replaces "score" property in ValorantCurrentMapState.
   * </pre>
   *
   * <code>.bragi.ValorantMapScoreState score = 1 [json_name = "score"];</code>
   * @return The score.
   */
  com.bragi.ValorantMapScoreState getScore();
  /**
   * <pre>
   * Replaces "score" property in ValorantCurrentMapState.
   * </pre>
   *
   * <code>.bragi.ValorantMapScoreState score = 1 [json_name = "score"];</code>
   */
  com.bragi.ValorantMapScoreStateOrBuilder getScoreOrBuilder();

  /**
   * <pre>
   * Replaces "current_round" property in ValorantCurrentMapState.
   * </pre>
   *
   * <code>.bragi.ValorantCurrentRoundState current_round = 2 [json_name = "currentRound"];</code>
   * @return Whether the currentRound field is set.
   */
  boolean hasCurrentRound();
  /**
   * <pre>
   * Replaces "current_round" property in ValorantCurrentMapState.
   * </pre>
   *
   * <code>.bragi.ValorantCurrentRoundState current_round = 2 [json_name = "currentRound"];</code>
   * @return The currentRound.
   */
  com.bragi.ValorantCurrentRoundState getCurrentRound();
  /**
   * <pre>
   * Replaces "current_round" property in ValorantCurrentMapState.
   * </pre>
   *
   * <code>.bragi.ValorantCurrentRoundState current_round = 2 [json_name = "currentRound"];</code>
   */
  com.bragi.ValorantCurrentRoundStateOrBuilder getCurrentRoundOrBuilder();

  /**
   * <pre>
   * Apply partial update on property "current_round" in ValorantCurrentMapState.
   * </pre>
   *
   * <code>.bragi.ValorantCurrentRoundStatePartialUpdate current_round_partial_update = 3 [json_name = "currentRoundPartialUpdate"];</code>
   * @return Whether the currentRoundPartialUpdate field is set.
   */
  boolean hasCurrentRoundPartialUpdate();
  /**
   * <pre>
   * Apply partial update on property "current_round" in ValorantCurrentMapState.
   * </pre>
   *
   * <code>.bragi.ValorantCurrentRoundStatePartialUpdate current_round_partial_update = 3 [json_name = "currentRoundPartialUpdate"];</code>
   * @return The currentRoundPartialUpdate.
   */
  com.bragi.ValorantCurrentRoundStatePartialUpdate getCurrentRoundPartialUpdate();
  /**
   * <pre>
   * Apply partial update on property "current_round" in ValorantCurrentMapState.
   * </pre>
   *
   * <code>.bragi.ValorantCurrentRoundStatePartialUpdate current_round_partial_update = 3 [json_name = "currentRoundPartialUpdate"];</code>
   */
  com.bragi.ValorantCurrentRoundStatePartialUpdateOrBuilder getCurrentRoundPartialUpdateOrBuilder();

  /**
   * <pre>
   * Replaces whole value under given key in teams hash map property in ValorantCurrentMapState.
   * </pre>
   *
   * <code>.bragi.ValorantTeamCurrentMapState team_current_map_state = 4 [json_name = "teamCurrentMapState"];</code>
   * @return Whether the teamCurrentMapState field is set.
   */
  boolean hasTeamCurrentMapState();
  /**
   * <pre>
   * Replaces whole value under given key in teams hash map property in ValorantCurrentMapState.
   * </pre>
   *
   * <code>.bragi.ValorantTeamCurrentMapState team_current_map_state = 4 [json_name = "teamCurrentMapState"];</code>
   * @return The teamCurrentMapState.
   */
  com.bragi.ValorantTeamCurrentMapState getTeamCurrentMapState();
  /**
   * <pre>
   * Replaces whole value under given key in teams hash map property in ValorantCurrentMapState.
   * </pre>
   *
   * <code>.bragi.ValorantTeamCurrentMapState team_current_map_state = 4 [json_name = "teamCurrentMapState"];</code>
   */
  com.bragi.ValorantTeamCurrentMapStateOrBuilder getTeamCurrentMapStateOrBuilder();

  /**
   * <pre>
   * Apply partial update on value under given key in teams hash map property in ValorantCurrentMapState.
   * </pre>
   *
   * <code>.bragi.ValorantTeamCurrentMapStatePartialUpdate team_current_map_partial_update = 5 [json_name = "teamCurrentMapPartialUpdate"];</code>
   * @return Whether the teamCurrentMapPartialUpdate field is set.
   */
  boolean hasTeamCurrentMapPartialUpdate();
  /**
   * <pre>
   * Apply partial update on value under given key in teams hash map property in ValorantCurrentMapState.
   * </pre>
   *
   * <code>.bragi.ValorantTeamCurrentMapStatePartialUpdate team_current_map_partial_update = 5 [json_name = "teamCurrentMapPartialUpdate"];</code>
   * @return The teamCurrentMapPartialUpdate.
   */
  com.bragi.ValorantTeamCurrentMapStatePartialUpdate getTeamCurrentMapPartialUpdate();
  /**
   * <pre>
   * Apply partial update on value under given key in teams hash map property in ValorantCurrentMapState.
   * </pre>
   *
   * <code>.bragi.ValorantTeamCurrentMapStatePartialUpdate team_current_map_partial_update = 5 [json_name = "teamCurrentMapPartialUpdate"];</code>
   */
  com.bragi.ValorantTeamCurrentMapStatePartialUpdateOrBuilder getTeamCurrentMapPartialUpdateOrBuilder();

  /**
   * <pre>
   * Replaces "previous_rounds" property in ValorantCurrentMapState.
   * </pre>
   *
   * <code>.bragi.ValorantPreviousRoundsState previous_rounds = 6 [json_name = "previousRounds"];</code>
   * @return Whether the previousRounds field is set.
   */
  boolean hasPreviousRounds();
  /**
   * <pre>
   * Replaces "previous_rounds" property in ValorantCurrentMapState.
   * </pre>
   *
   * <code>.bragi.ValorantPreviousRoundsState previous_rounds = 6 [json_name = "previousRounds"];</code>
   * @return The previousRounds.
   */
  com.bragi.ValorantPreviousRoundsState getPreviousRounds();
  /**
   * <pre>
   * Replaces "previous_rounds" property in ValorantCurrentMapState.
   * </pre>
   *
   * <code>.bragi.ValorantPreviousRoundsState previous_rounds = 6 [json_name = "previousRounds"];</code>
   */
  com.bragi.ValorantPreviousRoundsStateOrBuilder getPreviousRoundsOrBuilder();

  com.bragi.ValorantCurrentMapStatePartialUpdate.UpdateCase getUpdateCase();
}
