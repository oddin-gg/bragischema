# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: bragi/lol.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
from google.protobuf import duration_pb2 as google_dot_protobuf_dot_duration__pb2
from bragi_schema.bragi import common_pb2 as bragi_dot_common__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x0f\x62ragi/lol.proto\x12\x05\x62ragi\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x1egoogle/protobuf/duration.proto\x1a\x12\x62ragi/common.proto\"\xaa\x02\n\x0fLolMatchMessage\x12\x11\n\tmatch_urn\x18\x01 \x01(\t\x12\x10\n\x08sequence\x18\x02 \x01(\x04\x12-\n\ttimestamp\x18\x03 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12&\n\x0b\x64\x61ta_status\x18\x04 \x01(\x0e\x32\x11.bragi.DataStatus\x12/\n\x07payload\x18\x05 \x01(\x0b\x32\x1e.bragi.LolMatchMessage.Payload\x1aj\n\x07Payload\x12+\n\x08snapshot\x18\x01 \x01(\x0b\x32\x17.bragi.LolMatchSnapshotH\x00\x12\'\n\x06update\x18\x02 \x01(\x0b\x32\x15.bragi.LolMatchUpdateH\x00\x42\t\n\x07payload\"\xe5\x01\n\x10LolMatchSnapshot\x12\x11\n\tmatch_urn\x18\x01 \x01(\t\x12\x10\n\x08sequence\x18\x02 \x01(\x04\x12-\n\ttimestamp\x18\x03 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12&\n\x0b\x64\x61ta_status\x18\x04 \x01(\x0e\x32\x11.bragi.DataStatus\x12*\n\rannouncements\x18\x05 \x03(\x0b\x32\x13.bragi.Announcement\x12)\n\x0bmatch_state\x18\x06 \x01(\x0b\x32\x14.bragi.LolMatchState\"\xc3\x01\n\x0eLolMatchUpdate\x12.\n\x07payload\x18\x01 \x01(\x0b\x32\x1d.bragi.LolMatchUpdate.Payload\x1a\x80\x01\n\x07Payload\x12+\n\x0bmatch_state\x18\x01 \x01(\x0b\x32\x14.bragi.LolMatchStateH\x00\x12=\n\x0fpartial_updates\x18\x02 \x01(\x0b\x32\".bragi.LolMatchStatePartialUpdatesH\x00\x42\t\n\x07payload\"Q\n\x1bLolMatchStatePartialUpdates\x12\x32\n\x07updates\x18\x01 \x03(\x0b\x32!.bragi.LolMatchStatePartialUpdate\"\xde\x01\n\x1aLolMatchStatePartialUpdate\x12*\n\x05score\x18\x01 \x01(\x0b\x32\x19.bragi.LolMatchScoreStateH\x00\x12\x36\n\x11\x63urrent_map_state\x18\x02 \x01(\x0b\x32\x19.bragi.LolCurrentMapStateH\x00\x12R\n current_map_state_partial_update\x18\x03 \x01(\x0b\x32&.bragi.LolCurrentMapStatePartialUpdateH\x00\x42\x08\n\x06update\"\xc4\x02\n\rLolMatchState\x12\x11\n\tmatch_urn\x18\x01 \x01(\t\x12%\n\nmatch_type\x18\x02 \x01(\x0e\x32\x11.bragi.BestOfType\x12\x1e\n\thome_team\x18\x03 \x01(\x0b\x32\x0b.bragi.Team\x12\x1e\n\taway_team\x18\x04 \x01(\x0b\x32\x0b.bragi.Team\x12(\n\x05score\x18\x05 \x01(\x0b\x32\x19.bragi.LolMatchScoreState\x12,\n\x0cmatch_status\x18\x06 \x01(\x0e\x32\x16.bragi.MatchStatusType\x12.\n\x0b\x63urrent_map\x18\x07 \x01(\x0b\x32\x19.bragi.LolCurrentMapState\x12\x31\n\rprevious_maps\x18\x08 \x03(\x0b\x32\x1a.bragi.LolPreviousMapState\"<\n\x12LolMatchScoreState\x12\x12\n\nhome_score\x18\x01 \x01(\r\x12\x12\n\naway_score\x18\x02 \x01(\r\"\xc9\x02\n\x1fLolCurrentMapStatePartialUpdate\x12\x32\n\tgame_time\x18\x01 \x01(\x0b\x32\x1d.bragi.LolCurrentMapTimeStateH\x00\x12?\n\x16team_current_map_state\x18\x02 \x01(\x0b\x32\x1d.bragi.LolTeamCurrentMapStateH\x00\x12U\n\x1fteam_current_map_partial_update\x18\x03 \x01(\x0b\x32*.bragi.LolTeamCurrentMapStatePartialUpdateH\x00\x12$\n\x07turrets\x18\x04 \x01(\x0b\x32\x11.bragi.LolTurretsH\x00\x12*\n\ninhibitors\x18\x05 \x01(\x0b\x32\x14.bragi.LolInhibitorsH\x00\x42\x08\n\x06update\"\xbd\x02\n\x12LolCurrentMapState\x12\x11\n\tmap_order\x18\x01 \x01(\r\x12\x12\n\nmap_paused\x18\x02 \x01(\x08\x12\x30\n\tgame_time\x18\x03 \x01(\x0b\x32\x1d.bragi.LolCurrentMapTimeState\x12\x33\n\x05teams\x18\x04 \x03(\x0b\x32$.bragi.LolCurrentMapState.TeamsEntry\x12\"\n\x07turrets\x18\x05 \x01(\x0b\x32\x11.bragi.LolTurrets\x12(\n\ninhibitors\x18\x06 \x01(\x0b\x32\x14.bragi.LolInhibitors\x1aK\n\nTeamsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12,\n\x05value\x18\x02 \x01(\x0b\x32\x1d.bragi.LolTeamCurrentMapState:\x02\x38\x01\"F\n\x16LolCurrentMapTimeState\x12,\n\tgame_time\x18\x01 \x01(\x0b\x32\x19.google.protobuf.Duration\"\xac\x01\n\x13LolPreviousMapState\x12\x11\n\tmap_order\x18\x01 \x01(\r\x12\x34\n\x05teams\x18\x02 \x03(\x0b\x32%.bragi.LolPreviousMapState.TeamsEntry\x1aL\n\nTeamsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12-\n\x05value\x18\x02 \x01(\x0b\x32\x1e.bragi.LolTeamPreviousMapState:\x02\x38\x01\"\xf2\x02\n#LolTeamCurrentMapStatePartialUpdate\x12\x10\n\x08team_urn\x18\x01 \x01(\t\x12\x43\n\x07payload\x18\x02 \x01(\x0b\x32\x32.bragi.LolTeamCurrentMapStatePartialUpdate.Payload\x1a\xf3\x01\n\x07Payload\x12=\n\nstatistics\x18\x01 \x01(\x0b\x32\'.bragi.LolTeamCurrentMapStatisticsStateH\x00\x12\x43\n\x18player_current_map_state\x18\x02 \x01(\x0b\x32\x1f.bragi.LolPlayerCurrentMapStateH\x00\x12Y\n!player_current_map_partial_update\x18\x03 \x01(\x0b\x32,.bragi.LolPlayerCurrentMapStatePartialUpdateH\x00\x42\t\n\x07payload\"\xb3\x02\n\x16LolTeamCurrentMapState\x12\x10\n\x08team_urn\x18\x01 \x01(\t\x12\"\n\x07\x66\x61\x63tion\x18\x02 \x01(\x0e\x32\x11.bragi.LolFaction\x12;\n\nstatistics\x18\x03 \x01(\x0b\x32\'.bragi.LolTeamCurrentMapStatisticsState\x12\x10\n\x03won\x18\x04 \x01(\x08H\x00\x88\x01\x01\x12;\n\x07players\x18\x05 \x03(\x0b\x32*.bragi.LolTeamCurrentMapState.PlayersEntry\x1aO\n\x0cPlayersEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12.\n\x05value\x18\x02 \x01(\x0b\x32\x1f.bragi.LolPlayerCurrentMapState:\x02\x38\x01\x42\x06\n\x04_won\"\x97\x01\n LolTeamCurrentMapStatisticsState\x12\x10\n\x08team_urn\x18\x01 \x01(\t\x12\r\n\x05kills\x18\x02 \x01(\r\x12\x0e\n\x06\x62\x61rons\x18\x03 \x01(\r\x12\x0f\n\x07\x64ragons\x18\x04 \x01(\r\x12\x0f\n\x07turrets\x18\x05 \x01(\r\x12\x12\n\ninhibitors\x18\x06 \x01(\r\x12\x0c\n\x04gold\x18\x07 \x01(\r\"\xa8\x03\n%LolPlayerCurrentMapStatePartialUpdate\x12\x12\n\nplayer_urn\x18\x01 \x01(\t\x12\x45\n\x07payload\x18\x02 \x01(\x0b\x32\x34.bragi.LolPlayerCurrentMapStatePartialUpdate.Payload\x1a\xa3\x02\n\x07Payload\x12\x30\n\x0bplayer_info\x18\x01 \x01(\x0b\x32\x19.bragi.LolPlayerInfoStateH\x00\x12\x37\n\x06timers\x18\x02 \x01(\x0b\x32%.bragi.LolPlayerCurrentMapTimersStateH\x00\x12\x35\n\nstatistics\x18\x03 \x01(\x0b\x32\x1f.bragi.LolPlayerStatisticsStateH\x00\x12\x43\n\x0emap_statistics\x18\x04 \x01(\x0b\x32).bragi.LolPlayerCurrentMapStatisticsStateH\x00\x12&\n\x08position\x18\x05 \x01(\x0b\x32\x12.bragi.LolPositionH\x00\x42\t\n\x07payload\"\xb3\x02\n\x18LolPlayerCurrentMapState\x12\x12\n\nplayer_urn\x18\x01 \x01(\t\x12.\n\x0bplayer_info\x18\x02 \x01(\x0b\x32\x19.bragi.LolPlayerInfoState\x12\x35\n\x06timers\x18\x03 \x01(\x0b\x32%.bragi.LolPlayerCurrentMapTimersState\x12\x33\n\nstatistics\x18\x04 \x01(\x0b\x32\x1f.bragi.LolPlayerStatisticsState\x12\x41\n\x0emap_statistics\x18\x05 \x01(\x0b\x32).bragi.LolPlayerCurrentMapStatisticsState\x12$\n\x08position\x18\x06 \x01(\x0b\x32\x12.bragi.LolPosition\"\x9f\x01\n\"LolPlayerCurrentMapStatisticsState\x12\x12\n\nplayer_urn\x18\x01 \x01(\t\x12\r\n\x05\x61live\x18\x02 \x01(\x08\x12\x0e\n\x06health\x18\x03 \x01(\r\x12\x12\n\nmax_health\x18\x04 \x01(\r\x12\x12\n\ntotal_gold\x18\x05 \x01(\r\x12\x0c\n\x04mana\x18\x06 \x01(\r\x12\x10\n\x08max_mana\x18\x07 \x01(\r\"}\n\x1eLolPlayerCurrentMapTimersState\x12\x12\n\nplayer_urn\x18\x01 \x01(\t\x12\x35\n\rrespawn_timer\x18\x02 \x01(\x0b\x32\x19.google.protobuf.DurationH\x00\x88\x01\x01\x42\x10\n\x0e_respawn_timer\"\xdc\x02\n\x17LolTeamPreviousMapState\x12\x10\n\x08team_urn\x18\x01 \x01(\t\x12\"\n\x07\x66\x61\x63tion\x18\x02 \x01(\x0e\x32\x11.bragi.LolFaction\x12\r\n\x05kills\x18\x03 \x01(\r\x12\x0e\n\x06\x62\x61rons\x18\x04 \x01(\r\x12\x0f\n\x07\x64ragons\x18\x05 \x01(\r\x12\x0f\n\x07turrets\x18\x06 \x01(\r\x12\x12\n\ninhibitors\x18\x07 \x01(\r\x12\x0c\n\x04gold\x18\x08 \x01(\r\x12\x10\n\x03won\x18\t \x01(\x08H\x00\x88\x01\x01\x12<\n\x07players\x18\n \x03(\x0b\x32+.bragi.LolTeamPreviousMapState.PlayersEntry\x1aP\n\x0cPlayersEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12/\n\x05value\x18\x02 \x01(\x0b\x32 .bragi.LolPlayerPreviousMapState:\x02\x38\x01\x42\x06\n\x04_won\"\x94\x01\n\x19LolPlayerPreviousMapState\x12\x12\n\nplayer_urn\x18\x01 \x01(\t\x12.\n\x0bplayer_info\x18\x02 \x01(\x0b\x32\x19.bragi.LolPlayerInfoState\x12\x33\n\nstatistics\x18\x03 \x01(\x0b\x32\x1f.bragi.LolPlayerStatisticsState\"u\n\x12LolPlayerInfoState\x12\x12\n\nplayer_urn\x18\x01 \x01(\t\x12\x0f\n\x07slot_id\x18\x02 \x01(\r\x12\x10\n\x08\x65xt_name\x18\x03 \x01(\t\x12\x18\n\x0b\x63hampion_id\x18\x04 \x01(\rH\x00\x88\x01\x01\x42\x0e\n\x0c_champion_id\"s\n\x18LolPlayerStatisticsState\x12\x12\n\nplayer_urn\x18\x01 \x01(\t\x12\r\n\x05kills\x18\x02 \x01(\r\x12\x0e\n\x06\x64\x65\x61ths\x18\x03 \x01(\r\x12\x0f\n\x07\x61ssists\x18\x04 \x01(\r\x12\x13\n\x0b\x63reep_score\x18\x05 \x01(\r\"/\n\nLolTurrets\x12!\n\x07turrets\x18\x01 \x03(\x0b\x32\x10.bragi.LolTurret\"8\n\rLolInhibitors\x12\'\n\ninhibitors\x18\x01 \x03(\x0b\x32\x13.bragi.LolInhibitor\"\x80\x01\n\tLolTurret\x12\x1c\n\x04lane\x18\x01 \x01(\x0e\x32\x0e.bragi.LolLane\x12\"\n\x07\x66\x61\x63tion\x18\x02 \x01(\x0e\x32\x11.bragi.LolFaction\x12\"\n\x04tier\x18\x03 \x01(\x0e\x32\x14.bragi.LolTurretTier\x12\r\n\x05\x61live\x18\x04 \x01(\x08\"_\n\x0cLolInhibitor\x12\x1c\n\x04lane\x18\x01 \x01(\x0e\x32\x0e.bragi.LolLane\x12\"\n\x07\x66\x61\x63tion\x18\x02 \x01(\x0e\x32\x11.bragi.LolFaction\x12\r\n\x05\x61live\x18\x03 \x01(\x08\"#\n\x0bLolPosition\x12\t\n\x01x\x18\x01 \x01(\x02\x12\t\n\x01y\x18\x02 \x01(\x02*T\n\nLolFaction\x12\x1b\n\x17LOL_FACTION_UNSPECIFIED\x10\x00\x12\x14\n\x10LOL_FACTION_BLUE\x10\x01\x12\x13\n\x0fLOL_FACTION_RED\x10\x02*Y\n\x07LolLane\x12\x18\n\x14LOL_LANE_UNSPECIFIED\x10\x00\x12\x10\n\x0cLOL_LANE_TOP\x10\x01\x12\x10\n\x0cLOL_LANE_MID\x10\x02\x12\x10\n\x0cLOL_LANE_BOT\x10\x03*\x8c\x01\n\rLolTurretTier\x12\x1f\n\x1bLOL_TURRET_TIER_UNSPECIFIED\x10\x00\x12\x15\n\x11LOL_TURRET_TIER_1\x10\x01\x12\x15\n\x11LOL_TURRET_TIER_2\x10\x02\x12\x15\n\x11LOL_TURRET_TIER_3\x10\x03\x12\x15\n\x11LOL_TURRET_TIER_4\x10\x04\x42!\n\x0f\x63om.oddin.bragiZ\x0eoddin.gg/bragib\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'bragi.lol_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n\017com.oddin.bragiZ\016oddin.gg/bragi'
  _LOLCURRENTMAPSTATE_TEAMSENTRY._options = None
  _LOLCURRENTMAPSTATE_TEAMSENTRY._serialized_options = b'8\001'
  _LOLPREVIOUSMAPSTATE_TEAMSENTRY._options = None
  _LOLPREVIOUSMAPSTATE_TEAMSENTRY._serialized_options = b'8\001'
  _LOLTEAMCURRENTMAPSTATE_PLAYERSENTRY._options = None
  _LOLTEAMCURRENTMAPSTATE_PLAYERSENTRY._serialized_options = b'8\001'
  _LOLTEAMPREVIOUSMAPSTATE_PLAYERSENTRY._options = None
  _LOLTEAMPREVIOUSMAPSTATE_PLAYERSENTRY._serialized_options = b'8\001'
  _LOLFACTION._serialized_start=5411
  _LOLFACTION._serialized_end=5495
  _LOLLANE._serialized_start=5497
  _LOLLANE._serialized_end=5586
  _LOLTURRETTIER._serialized_start=5589
  _LOLTURRETTIER._serialized_end=5729
  _LOLMATCHMESSAGE._serialized_start=112
  _LOLMATCHMESSAGE._serialized_end=410
  _LOLMATCHMESSAGE_PAYLOAD._serialized_start=304
  _LOLMATCHMESSAGE_PAYLOAD._serialized_end=410
  _LOLMATCHSNAPSHOT._serialized_start=413
  _LOLMATCHSNAPSHOT._serialized_end=642
  _LOLMATCHUPDATE._serialized_start=645
  _LOLMATCHUPDATE._serialized_end=840
  _LOLMATCHUPDATE_PAYLOAD._serialized_start=712
  _LOLMATCHUPDATE_PAYLOAD._serialized_end=840
  _LOLMATCHSTATEPARTIALUPDATES._serialized_start=842
  _LOLMATCHSTATEPARTIALUPDATES._serialized_end=923
  _LOLMATCHSTATEPARTIALUPDATE._serialized_start=926
  _LOLMATCHSTATEPARTIALUPDATE._serialized_end=1148
  _LOLMATCHSTATE._serialized_start=1151
  _LOLMATCHSTATE._serialized_end=1475
  _LOLMATCHSCORESTATE._serialized_start=1477
  _LOLMATCHSCORESTATE._serialized_end=1537
  _LOLCURRENTMAPSTATEPARTIALUPDATE._serialized_start=1540
  _LOLCURRENTMAPSTATEPARTIALUPDATE._serialized_end=1869
  _LOLCURRENTMAPSTATE._serialized_start=1872
  _LOLCURRENTMAPSTATE._serialized_end=2189
  _LOLCURRENTMAPSTATE_TEAMSENTRY._serialized_start=2114
  _LOLCURRENTMAPSTATE_TEAMSENTRY._serialized_end=2189
  _LOLCURRENTMAPTIMESTATE._serialized_start=2191
  _LOLCURRENTMAPTIMESTATE._serialized_end=2261
  _LOLPREVIOUSMAPSTATE._serialized_start=2264
  _LOLPREVIOUSMAPSTATE._serialized_end=2436
  _LOLPREVIOUSMAPSTATE_TEAMSENTRY._serialized_start=2360
  _LOLPREVIOUSMAPSTATE_TEAMSENTRY._serialized_end=2436
  _LOLTEAMCURRENTMAPSTATEPARTIALUPDATE._serialized_start=2439
  _LOLTEAMCURRENTMAPSTATEPARTIALUPDATE._serialized_end=2809
  _LOLTEAMCURRENTMAPSTATEPARTIALUPDATE_PAYLOAD._serialized_start=2566
  _LOLTEAMCURRENTMAPSTATEPARTIALUPDATE_PAYLOAD._serialized_end=2809
  _LOLTEAMCURRENTMAPSTATE._serialized_start=2812
  _LOLTEAMCURRENTMAPSTATE._serialized_end=3119
  _LOLTEAMCURRENTMAPSTATE_PLAYERSENTRY._serialized_start=3032
  _LOLTEAMCURRENTMAPSTATE_PLAYERSENTRY._serialized_end=3111
  _LOLTEAMCURRENTMAPSTATISTICSSTATE._serialized_start=3122
  _LOLTEAMCURRENTMAPSTATISTICSSTATE._serialized_end=3273
  _LOLPLAYERCURRENTMAPSTATEPARTIALUPDATE._serialized_start=3276
  _LOLPLAYERCURRENTMAPSTATEPARTIALUPDATE._serialized_end=3700
  _LOLPLAYERCURRENTMAPSTATEPARTIALUPDATE_PAYLOAD._serialized_start=3409
  _LOLPLAYERCURRENTMAPSTATEPARTIALUPDATE_PAYLOAD._serialized_end=3700
  _LOLPLAYERCURRENTMAPSTATE._serialized_start=3703
  _LOLPLAYERCURRENTMAPSTATE._serialized_end=4010
  _LOLPLAYERCURRENTMAPSTATISTICSSTATE._serialized_start=4013
  _LOLPLAYERCURRENTMAPSTATISTICSSTATE._serialized_end=4172
  _LOLPLAYERCURRENTMAPTIMERSSTATE._serialized_start=4174
  _LOLPLAYERCURRENTMAPTIMERSSTATE._serialized_end=4299
  _LOLTEAMPREVIOUSMAPSTATE._serialized_start=4302
  _LOLTEAMPREVIOUSMAPSTATE._serialized_end=4650
  _LOLTEAMPREVIOUSMAPSTATE_PLAYERSENTRY._serialized_start=4562
  _LOLTEAMPREVIOUSMAPSTATE_PLAYERSENTRY._serialized_end=4642
  _LOLPLAYERPREVIOUSMAPSTATE._serialized_start=4653
  _LOLPLAYERPREVIOUSMAPSTATE._serialized_end=4801
  _LOLPLAYERINFOSTATE._serialized_start=4803
  _LOLPLAYERINFOSTATE._serialized_end=4920
  _LOLPLAYERSTATISTICSSTATE._serialized_start=4922
  _LOLPLAYERSTATISTICSSTATE._serialized_end=5037
  _LOLTURRETS._serialized_start=5039
  _LOLTURRETS._serialized_end=5086
  _LOLINHIBITORS._serialized_start=5088
  _LOLINHIBITORS._serialized_end=5144
  _LOLTURRET._serialized_start=5147
  _LOLTURRET._serialized_end=5275
  _LOLINHIBITOR._serialized_start=5277
  _LOLINHIBITOR._serialized_end=5372
  _LOLPOSITION._serialized_start=5374
  _LOLPOSITION._serialized_end=5409
# @@protoc_insertion_point(module_scope)
