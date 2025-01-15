// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: bragi/bragi_service.proto
// Protobuf Java Version: 4.29.3

package com.bragi;

public interface MatchMessageOrBuilder extends
    // @@protoc_insertion_point(interface_extends:bragi.MatchMessage)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * Append announcement's payload to property announcements array in (Game)MatchSnapshot.
   * </pre>
   *
   * <code>.bragi.AnnouncementUpdate announcement = 1 [json_name = "announcement"];</code>
   * @return Whether the announcement field is set.
   */
  boolean hasAnnouncement();
  /**
   * <pre>
   * Append announcement's payload to property announcements array in (Game)MatchSnapshot.
   * </pre>
   *
   * <code>.bragi.AnnouncementUpdate announcement = 1 [json_name = "announcement"];</code>
   * @return The announcement.
   */
  com.bragi.AnnouncementUpdate getAnnouncement();
  /**
   * <pre>
   * Append announcement's payload to property announcements array in (Game)MatchSnapshot.
   * </pre>
   *
   * <code>.bragi.AnnouncementUpdate announcement = 1 [json_name = "announcement"];</code>
   */
  com.bragi.AnnouncementUpdateOrBuilder getAnnouncementOrBuilder();

  /**
   * <pre>
   * Message which wraps CS2MatchSnapshot or CS2MatchUpdate message with given match_urn and sequence for CS2 sport.
   * </pre>
   *
   * <code>.bragi.CS2MatchMessage cs2 = 2 [json_name = "cs2"];</code>
   * @return Whether the cs2 field is set.
   */
  boolean hasCs2();
  /**
   * <pre>
   * Message which wraps CS2MatchSnapshot or CS2MatchUpdate message with given match_urn and sequence for CS2 sport.
   * </pre>
   *
   * <code>.bragi.CS2MatchMessage cs2 = 2 [json_name = "cs2"];</code>
   * @return The cs2.
   */
  com.bragi.CS2MatchMessage getCs2();
  /**
   * <pre>
   * Message which wraps CS2MatchSnapshot or CS2MatchUpdate message with given match_urn and sequence for CS2 sport.
   * </pre>
   *
   * <code>.bragi.CS2MatchMessage cs2 = 2 [json_name = "cs2"];</code>
   */
  com.bragi.CS2MatchMessageOrBuilder getCs2OrBuilder();

  /**
   * <pre>
   * Message which wraps CS2MatchSnapshot or CS2MatchUpdate message with given match_urn and sequence for CS2 Duels sport.
   * </pre>
   *
   * <code>.bragi.CS2MatchMessage cs2_duels = 3 [json_name = "cs2Duels"];</code>
   * @return Whether the cs2Duels field is set.
   */
  boolean hasCs2Duels();
  /**
   * <pre>
   * Message which wraps CS2MatchSnapshot or CS2MatchUpdate message with given match_urn and sequence for CS2 Duels sport.
   * </pre>
   *
   * <code>.bragi.CS2MatchMessage cs2_duels = 3 [json_name = "cs2Duels"];</code>
   * @return The cs2Duels.
   */
  com.bragi.CS2MatchMessage getCs2Duels();
  /**
   * <pre>
   * Message which wraps CS2MatchSnapshot or CS2MatchUpdate message with given match_urn and sequence for CS2 Duels sport.
   * </pre>
   *
   * <code>.bragi.CS2MatchMessage cs2_duels = 3 [json_name = "cs2Duels"];</code>
   */
  com.bragi.CS2MatchMessageOrBuilder getCs2DuelsOrBuilder();

  /**
   * <pre>
   * Message which wraps Dota2MatchSnapshot or Dota2MatchUpdate message with given match_urn and sequence for Dota2 sport.
   * </pre>
   *
   * <code>.bragi.Dota2MatchMessage dota2 = 4 [json_name = "dota2"];</code>
   * @return Whether the dota2 field is set.
   */
  boolean hasDota2();
  /**
   * <pre>
   * Message which wraps Dota2MatchSnapshot or Dota2MatchUpdate message with given match_urn and sequence for Dota2 sport.
   * </pre>
   *
   * <code>.bragi.Dota2MatchMessage dota2 = 4 [json_name = "dota2"];</code>
   * @return The dota2.
   */
  com.bragi.Dota2MatchMessage getDota2();
  /**
   * <pre>
   * Message which wraps Dota2MatchSnapshot or Dota2MatchUpdate message with given match_urn and sequence for Dota2 sport.
   * </pre>
   *
   * <code>.bragi.Dota2MatchMessage dota2 = 4 [json_name = "dota2"];</code>
   */
  com.bragi.Dota2MatchMessageOrBuilder getDota2OrBuilder();

  /**
   * <pre>
   * Message which wraps RushSoccerMatchSnapshot or RushSoccerMatchUpdate message with given match_urn and sequence for RushSoccer sport.
   * </pre>
   *
   * <code>.bragi.RushSoccerMatchMessage rush_soccer = 5 [json_name = "rushSoccer"];</code>
   * @return Whether the rushSoccer field is set.
   */
  boolean hasRushSoccer();
  /**
   * <pre>
   * Message which wraps RushSoccerMatchSnapshot or RushSoccerMatchUpdate message with given match_urn and sequence for RushSoccer sport.
   * </pre>
   *
   * <code>.bragi.RushSoccerMatchMessage rush_soccer = 5 [json_name = "rushSoccer"];</code>
   * @return The rushSoccer.
   */
  com.bragi.RushSoccerMatchMessage getRushSoccer();
  /**
   * <pre>
   * Message which wraps RushSoccerMatchSnapshot or RushSoccerMatchUpdate message with given match_urn and sequence for RushSoccer sport.
   * </pre>
   *
   * <code>.bragi.RushSoccerMatchMessage rush_soccer = 5 [json_name = "rushSoccer"];</code>
   */
  com.bragi.RushSoccerMatchMessageOrBuilder getRushSoccerOrBuilder();

  /**
   * <pre>
   * Message which wraps LolMatchSnapshot or LolMatchUpdate message with given match_urn and sequence for Lol sport.
   * </pre>
   *
   * <code>.bragi.LolMatchMessage lol = 6 [json_name = "lol"];</code>
   * @return Whether the lol field is set.
   */
  boolean hasLol();
  /**
   * <pre>
   * Message which wraps LolMatchSnapshot or LolMatchUpdate message with given match_urn and sequence for Lol sport.
   * </pre>
   *
   * <code>.bragi.LolMatchMessage lol = 6 [json_name = "lol"];</code>
   * @return The lol.
   */
  com.bragi.LolMatchMessage getLol();
  /**
   * <pre>
   * Message which wraps LolMatchSnapshot or LolMatchUpdate message with given match_urn and sequence for Lol sport.
   * </pre>
   *
   * <code>.bragi.LolMatchMessage lol = 6 [json_name = "lol"];</code>
   */
  com.bragi.LolMatchMessageOrBuilder getLolOrBuilder();

  /**
   * <pre>
   * Message which wraps RushBasketballMatchSnapshot or RushBasketballMatchUpdate message with given match_urn and sequence for RushBasketball sport.
   * </pre>
   *
   * <code>.bragi.RushBasketballMatchMessage rush_basketball = 7 [json_name = "rushBasketball"];</code>
   * @return Whether the rushBasketball field is set.
   */
  boolean hasRushBasketball();
  /**
   * <pre>
   * Message which wraps RushBasketballMatchSnapshot or RushBasketballMatchUpdate message with given match_urn and sequence for RushBasketball sport.
   * </pre>
   *
   * <code>.bragi.RushBasketballMatchMessage rush_basketball = 7 [json_name = "rushBasketball"];</code>
   * @return The rushBasketball.
   */
  com.bragi.RushBasketballMatchMessage getRushBasketball();
  /**
   * <pre>
   * Message which wraps RushBasketballMatchSnapshot or RushBasketballMatchUpdate message with given match_urn and sequence for RushBasketball sport.
   * </pre>
   *
   * <code>.bragi.RushBasketballMatchMessage rush_basketball = 7 [json_name = "rushBasketball"];</code>
   */
  com.bragi.RushBasketballMatchMessageOrBuilder getRushBasketballOrBuilder();

  /**
   * <pre>
   * Message which wraps ValorantMatchSnapshot or ValorantMatchUpdate message with given match_urn and sequence for Valorant sport.
   * </pre>
   *
   * <code>.bragi.ValorantMatchMessage valorant = 8 [json_name = "valorant"];</code>
   * @return Whether the valorant field is set.
   */
  boolean hasValorant();
  /**
   * <pre>
   * Message which wraps ValorantMatchSnapshot or ValorantMatchUpdate message with given match_urn and sequence for Valorant sport.
   * </pre>
   *
   * <code>.bragi.ValorantMatchMessage valorant = 8 [json_name = "valorant"];</code>
   * @return The valorant.
   */
  com.bragi.ValorantMatchMessage getValorant();
  /**
   * <pre>
   * Message which wraps ValorantMatchSnapshot or ValorantMatchUpdate message with given match_urn and sequence for Valorant sport.
   * </pre>
   *
   * <code>.bragi.ValorantMatchMessage valorant = 8 [json_name = "valorant"];</code>
   */
  com.bragi.ValorantMatchMessageOrBuilder getValorantOrBuilder();

  com.bragi.MatchMessage.MessageCase getMessageCase();
}
