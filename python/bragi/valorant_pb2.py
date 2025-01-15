# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: bragi/valorant.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
from google.protobuf import duration_pb2 as google_dot_protobuf_dot_duration__pb2
from bragi import common_pb2 as bragi_dot_common__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x14\x62ragi/valorant.proto\x12\x05\x62ragi\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x1egoogle/protobuf/duration.proto\x1a\x12\x62ragi/common.proto\"\x85\x03\n\x14ValorantMatchMessage\x12\x1b\n\tmatch_urn\x18\x01 \x01(\tR\x08matchUrn\x12\x1a\n\x08sequence\x18\x02 \x01(\x04R\x08sequence\x12\x38\n\ttimestamp\x18\x03 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\ttimestamp\x12\x32\n\x0b\x64\x61ta_status\x18\x04 \x01(\x0e\x32\x11.bragi.DataStatusR\ndataStatus\x12=\n\x07payload\x18\x05 \x01(\x0b\x32#.bragi.ValorantMatchMessage.PayloadR\x07payload\x1a\x86\x01\n\x07Payload\x12:\n\x08snapshot\x18\x01 \x01(\x0b\x32\x1c.bragi.ValorantMatchSnapshotH\x00R\x08snapshot\x12\x34\n\x06update\x18\x02 \x01(\x0b\x32\x1a.bragi.ValorantMatchUpdateH\x00R\x06updateB\t\n\x07payload\"\xe8\x02\n\x15ValorantMatchSnapshot\x12\x1b\n\tmatch_urn\x18\x01 \x01(\tR\x08matchUrn\x12\x1a\n\x08sequence\x18\x02 \x01(\x04R\x08sequence\x12\x38\n\ttimestamp\x18\x03 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\ttimestamp\x12\x32\n\x0b\x64\x61ta_status\x18\x04 \x01(\x0e\x32\x11.bragi.DataStatusR\ndataStatus\x12\x39\n\rannouncements\x18\x05 \x03(\x0b\x32\x13.bragi.AnnouncementR\rannouncements\x12:\n\x0bmatch_state\x18\x06 \x01(\x0b\x32\x19.bragi.ValorantMatchStateR\nmatchState\x12\x31\n\ntournament\x18\x07 \x01(\x0b\x32\x11.bragi.TournamentR\ntournament\"\xfc\x01\n\x13ValorantMatchUpdate\x12<\n\x07payload\x18\x01 \x01(\x0b\x32\".bragi.ValorantMatchUpdate.PayloadR\x07payload\x1a\xa6\x01\n\x07Payload\x12<\n\x0bmatch_state\x18\x01 \x01(\x0b\x32\x19.bragi.ValorantMatchStateH\x00R\nmatchState\x12R\n\x0fpartial_updates\x18\x02 \x01(\x0b\x32\'.bragi.ValorantMatchStatePartialUpdatesH\x00R\x0epartialUpdatesB\t\n\x07payload\"d\n ValorantMatchStatePartialUpdates\x12@\n\x07updates\x18\x01 \x03(\x0b\x32&.bragi.ValorantMatchStatePartialUpdateR\x07updates\"\x92\x02\n\x1fValorantMatchStatePartialUpdate\x12\x36\n\x05score\x18\x01 \x01(\x0b\x32\x1e.bragi.ValorantMatchScoreStateH\x00R\x05score\x12\x41\n\x0b\x63urrent_map\x18\x02 \x01(\x0b\x32\x1e.bragi.ValorantCurrentMapStateH\x00R\ncurrentMap\x12j\n\x1a\x63urrent_map_partial_update\x18\x03 \x01(\x0b\x32+.bragi.ValorantCurrentMapStatePartialUpdateH\x00R\x17\x63urrentMapPartialUpdateB\x08\n\x06update\"\xe9\x02\n\x12ValorantMatchState\x12\x1b\n\tmatch_urn\x18\x01 \x01(\tR\x08matchUrn\x12\x30\n\nmatch_type\x18\x02 \x01(\x0e\x32\x11.bragi.BestOfTypeR\tmatchType\x12(\n\thome_team\x18\x03 \x01(\x0b\x32\x0b.bragi.TeamR\x08homeTeam\x12(\n\taway_team\x18\x04 \x01(\x0b\x32\x0b.bragi.TeamR\x08\x61wayTeam\x12\x34\n\x05score\x18\x05 \x01(\x0b\x32\x1e.bragi.ValorantMatchScoreStateR\x05score\x12\x39\n\x0cmatch_status\x18\x06 \x01(\x0e\x32\x16.bragi.MatchStatusTypeR\x0bmatchStatus\x12?\n\x0b\x63urrent_map\x18\x07 \x01(\x0b\x32\x1e.bragi.ValorantCurrentMapStateR\ncurrentMap\"W\n\x17ValorantMatchScoreState\x12\x1d\n\nhome_score\x18\x01 \x01(\rR\thomeScore\x12\x1d\n\naway_score\x18\x02 \x01(\rR\tawayScore\"\xc4\x04\n$ValorantCurrentMapStatePartialUpdate\x12\x34\n\x05score\x18\x01 \x01(\x0b\x32\x1c.bragi.ValorantMapScoreStateH\x00R\x05score\x12G\n\rcurrent_round\x18\x02 \x01(\x0b\x32 .bragi.ValorantCurrentRoundStateH\x00R\x0c\x63urrentRound\x12p\n\x1c\x63urrent_round_partial_update\x18\x03 \x01(\x0b\x32-.bragi.ValorantCurrentRoundStatePartialUpdateH\x00R\x19\x63urrentRoundPartialUpdate\x12Y\n\x16team_current_map_state\x18\x04 \x01(\x0b\x32\".bragi.ValorantTeamCurrentMapStateH\x00R\x13teamCurrentMapState\x12w\n\x1fteam_current_map_partial_update\x18\x05 \x01(\x0b\x32/.bragi.ValorantTeamCurrentMapStatePartialUpdateH\x00R\x1bteamCurrentMapPartialUpdate\x12M\n\x0fprevious_rounds\x18\x06 \x01(\x0b\x32\".bragi.ValorantPreviousRoundsStateH\x00R\x0epreviousRoundsB\x08\n\x06update\"\x8f\x04\n\x17ValorantCurrentMapState\x12\x1b\n\tmap_order\x18\x01 \x01(\rR\x08mapOrder\x12\x1d\n\nmap_paused\x18\x02 \x01(\x08R\tmapPaused\x12\x19\n\x08map_name\x18\x03 \x01(\tR\x07mapName\x12%\n\x0cwin_team_urn\x18\x04 \x01(\tH\x00R\nwinTeamUrn\x88\x01\x01\x12\x32\n\x05score\x18\x05 \x01(\x0b\x32\x1c.bragi.ValorantMapScoreStateR\x05score\x12\x45\n\rcurrent_round\x18\x06 \x01(\x0b\x32 .bragi.ValorantCurrentRoundStateR\x0c\x63urrentRound\x12?\n\x05teams\x18\x07 \x03(\x0b\x32).bragi.ValorantCurrentMapState.TeamsEntryR\x05teams\x12K\n\x0fprevious_rounds\x18\x08 \x01(\x0b\x32\".bragi.ValorantPreviousRoundsStateR\x0epreviousRounds\x1a\\\n\nTeamsEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x38\n\x05value\x18\x02 \x01(\x0b\x32\".bragi.ValorantTeamCurrentMapStateR\x05value:\x02\x38\x01\x42\x0f\n\r_win_team_urn\"U\n\x15ValorantMapScoreState\x12\x1d\n\nhome_score\x18\x01 \x01(\rR\thomeScore\x12\x1d\n\naway_score\x18\x02 \x01(\rR\tawayScore\"S\n\x1bValorantPreviousRoundsState\x12\x34\n\x06rounds\x18\x01 \x03(\x0b\x32\x1c.bragi.ValorantPreviousRoundR\x06rounds\"\x8f\x03\n(ValorantTeamCurrentMapStatePartialUpdate\x12\x19\n\x08team_urn\x18\x01 \x01(\tR\x07teamUrn\x12Q\n\x07payload\x18\x02 \x01(\x0b\x32\x37.bragi.ValorantTeamCurrentMapStatePartialUpdate.PayloadR\x07payload\x1a\xf4\x01\n\x07Payload\x12_\n\x18player_current_map_state\x18\x01 \x01(\x0b\x32$.bragi.ValorantPlayerCurrentMapStateH\x00R\x15playerCurrentMapState\x12}\n!player_current_map_partial_update\x18\x02 \x01(\x0b\x32\x31.bragi.ValorantPlayerCurrentMapStatePartialUpdateH\x00R\x1dplayerCurrentMapPartialUpdateB\t\n\x07payload\"\x8e\x02\n\x1bValorantTeamCurrentMapState\x12\x19\n\x08team_urn\x18\x01 \x01(\tR\x07teamUrn\x12\'\n\x04side\x18\x02 \x01(\x0e\x32\x13.bragi.ValorantSideR\x04side\x12I\n\x07players\x18\x03 \x03(\x0b\x32/.bragi.ValorantTeamCurrentMapState.PlayersEntryR\x07players\x1a`\n\x0cPlayersEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12:\n\x05value\x18\x02 \x01(\x0b\x32$.bragi.ValorantPlayerCurrentMapStateR\x05value:\x02\x38\x01\"\x8b\x03\n*ValorantPlayerCurrentMapStatePartialUpdate\x12\x1d\n\nplayer_urn\x18\x01 \x01(\tR\tplayerUrn\x12S\n\x07payload\x18\x02 \x01(\x0b\x32\x39.bragi.ValorantPlayerCurrentMapStatePartialUpdate.PayloadR\x07payload\x1a\xe8\x01\n\x07Payload\x12\x41\n\x0bplayer_info\x18\x01 \x01(\x0b\x32\x1e.bragi.ValorantPlayerInfoStateH\x00R\nplayerInfo\x12=\n\tabilities\x18\x02 \x01(\x0b\x32\x1d.bragi.ValorantAbilitiesStateH\x00R\tabilities\x12P\n\nstatistics\x18\x03 \x01(\x0b\x32..bragi.ValorantPlayerCurrentMapStatisticsStateH\x00R\nstatisticsB\t\n\x07payload\"\xa9\x02\n\x1dValorantPlayerCurrentMapState\x12\x1d\n\nplayer_urn\x18\x01 \x01(\tR\tplayerUrn\x12\x1b\n\tagent_urn\x18\x02 \x01(\tR\x08\x61gentUrn\x12?\n\x0bplayer_info\x18\x03 \x01(\x0b\x32\x1e.bragi.ValorantPlayerInfoStateR\nplayerInfo\x12;\n\tabilities\x18\x04 \x01(\x0b\x32\x1d.bragi.ValorantAbilitiesStateR\tabilities\x12N\n\nstatistics\x18\x05 \x01(\x0b\x32..bragi.ValorantPlayerCurrentMapStatisticsStateR\nstatistics\"\x90\x01\n\'ValorantPlayerCurrentMapStatisticsState\x12\x1d\n\nplayer_urn\x18\x01 \x01(\tR\tplayerUrn\x12\x14\n\x05kills\x18\x02 \x01(\rR\x05kills\x12\x16\n\x06\x64\x65\x61ths\x18\x03 \x01(\rR\x06\x64\x65\x61ths\x12\x18\n\x07\x61ssists\x18\x04 \x01(\rR\x07\x61ssists\"\xd1\x03\n&ValorantCurrentRoundStatePartialUpdate\x12>\n\nround_info\x18\x01 \x01(\x0b\x32\x1d.bragi.ValorantRoundInfoStateH\x00R\troundInfo\x12:\n\x04time\x18\x02 \x01(\x0b\x32$.bragi.ValorantCurrentRoundTimeStateH\x00R\x04time\x12\x41\n\x05spike\x18\x03 \x01(\x0b\x32).bragi.ValorantCurrentRoundTeamSpikeStateH\x00R\x05spike\x12_\n\x18team_current_round_state\x18\x04 \x01(\x0b\x32$.bragi.ValorantTeamCurrentRoundStateH\x00R\x15teamCurrentRoundState\x12}\n!team_current_round_partial_update\x18\x05 \x01(\x0b\x32\x31.bragi.ValorantTeamCurrentRoundStatePartialUpdateH\x00R\x1dteamCurrentRoundPartialUpdateB\x08\n\x06update\"\xf7\x02\n\x19ValorantCurrentRoundState\x12<\n\nround_info\x18\x01 \x01(\x0b\x32\x1d.bragi.ValorantRoundInfoStateR\troundInfo\x12\x38\n\x04time\x18\x02 \x01(\x0b\x32$.bragi.ValorantCurrentRoundTimeStateR\x04time\x12?\n\x05spike\x18\x03 \x01(\x0b\x32).bragi.ValorantCurrentRoundTeamSpikeStateR\x05spike\x12\x41\n\x05teams\x18\x04 \x03(\x0b\x32+.bragi.ValorantCurrentRoundState.TeamsEntryR\x05teams\x1a^\n\nTeamsEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12:\n\x05value\x18\x02 \x01(\x0b\x32$.bragi.ValorantTeamCurrentRoundStateR\x05value:\x02\x38\x01\"a\n\x16ValorantRoundInfoState\x12\x16\n\x06number\x18\x01 \x01(\rR\x06number\x12/\n\x05phase\x18\x02 \x01(\x0e\x32\x19.bragi.ValorantRoundPhaseR\x05phase\"a\n\x1dValorantCurrentRoundTimeState\x12@\n\x0etime_remaining\x18\x01 \x01(\x0b\x32\x19.google.protobuf.DurationR\rtimeRemaining\"\x98\x01\n\"ValorantCurrentRoundTeamSpikeState\x12/\n\x05state\x18\x01 \x01(\x0e\x32\x19.bragi.ValorantSpikeStateR\x05state\x12\x41\n\x0ftime_to_defused\x18\x02 \x01(\x0b\x32\x19.google.protobuf.DurationR\rtimeToDefused\"\xa0\x03\n*ValorantTeamCurrentRoundStatePartialUpdate\x12\x19\n\x08team_urn\x18\x01 \x01(\tR\x07teamUrn\x12S\n\x07payload\x18\x02 \x01(\x0b\x32\x39.bragi.ValorantTeamCurrentRoundStatePartialUpdate.PayloadR\x07payload\x1a\x81\x02\n\x07Payload\x12\x65\n\x1aplayer_current_round_state\x18\x03 \x01(\x0b\x32&.bragi.ValorantPlayerCurrentRoundStateH\x00R\x17playerCurrentRoundState\x12\x83\x01\n#player_current_round_partial_update\x18\x02 \x01(\x0b\x32\x33.bragi.ValorantPlayerCurrentRoundStatePartialUpdateH\x00R\x1fplayerCurrentRoundPartialUpdateB\t\n\x07payload\"\x94\x02\n\x1dValorantTeamCurrentRoundState\x12\x19\n\x08team_urn\x18\x01 \x01(\tR\x07teamUrn\x12\'\n\x04side\x18\x02 \x01(\x0e\x32\x13.bragi.ValorantSideR\x04side\x12K\n\x07players\x18\x03 \x03(\x0b\x32\x31.bragi.ValorantTeamCurrentRoundState.PlayersEntryR\x07players\x1a\x62\n\x0cPlayersEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12<\n\x05value\x18\x02 \x01(\x0b\x32&.bragi.ValorantPlayerCurrentRoundStateR\x05value:\x02\x38\x01\"\xc7\x03\n,ValorantPlayerCurrentRoundStatePartialUpdate\x12\x1d\n\nplayer_urn\x18\x01 \x01(\tR\tplayerUrn\x12U\n\x07payload\x18\x02 \x01(\x0b\x32;.bragi.ValorantPlayerCurrentRoundStatePartialUpdate.PayloadR\x07payload\x1a\xa0\x02\n\x07Payload\x12\x41\n\x0bplayer_info\x18\x01 \x01(\x0b\x32\x1e.bragi.ValorantPlayerInfoStateH\x00R\nplayerInfo\x12R\n\nstatistics\x18\x02 \x01(\x0b\x32\x30.bragi.ValorantPlayerCurrentRoundStatisticsStateH\x00R\nstatistics\x12\x37\n\x07weapons\x18\x03 \x01(\x0b\x32\x1b.bragi.ValorantWeaponsStateH\x00R\x07weapons\x12:\n\x08position\x18\x04 \x01(\x0b\x32\x1c.bragi.ValorantPositionStateH\x00R\x08positionB\t\n\x07payload\"\xc4\x02\n\x1fValorantPlayerCurrentRoundState\x12\x1d\n\nplayer_urn\x18\x01 \x01(\tR\tplayerUrn\x12?\n\x0bplayer_info\x18\x02 \x01(\x0b\x32\x1e.bragi.ValorantPlayerInfoStateR\nplayerInfo\x12P\n\nstatistics\x18\x03 \x01(\x0b\x32\x30.bragi.ValorantPlayerCurrentRoundStatisticsStateR\nstatistics\x12\x35\n\x07weapons\x18\x04 \x01(\x0b\x32\x1b.bragi.ValorantWeaponsStateR\x07weapons\x12\x38\n\x08position\x18\x05 \x01(\x0b\x32\x1c.bragi.ValorantPositionStateR\x08position\"e\n)ValorantPlayerCurrentRoundStatisticsState\x12\x1d\n\nplayer_urn\x18\x01 \x01(\tR\tplayerUrn\x12\x19\n\x08is_alive\x18\x02 \x01(\x08R\x07isAlive\"m\n\x16ValorantAbilitiesState\x12\x1d\n\nplayer_urn\x18\x01 \x01(\tR\tplayerUrn\x12\x34\n\tabilities\x18\x02 \x03(\x0b\x32\x16.bragi.ValorantAbilityR\tabilities\"f\n\x14ValorantWeaponsState\x12\x1d\n\nplayer_urn\x18\x01 \x01(\tR\tplayerUrn\x12/\n\x07weapons\x18\x02 \x03(\x0b\x32\x15.bragi.ValorantWeaponR\x07weapons\"l\n\x17ValorantPlayerInfoState\x12\x1d\n\nplayer_urn\x18\x01 \x01(\tR\tplayerUrn\x12\x17\n\x07slot_id\x18\x02 \x01(\rR\x06slotId\x12\x19\n\x08\x65xt_name\x18\x03 \x01(\tR\x07\x65xtName\"R\n\x15ValorantPositionState\x12\x1d\n\nplayer_urn\x18\x01 \x01(\tR\tplayerUrn\x12\x0c\n\x01x\x18\x02 \x01(\x02R\x01x\x12\x0c\n\x01y\x18\x03 \x01(\x02R\x01y\"\x81\x01\n\x15ValorantPreviousRound\x12\x16\n\x06number\x18\x01 \x01(\rR\x06number\x12\x35\n\x07outcome\x18\x02 \x01(\x0e\x32\x1b.bragi.ValorantRoundOutcomeR\x07outcome\x12\x19\n\x08home_won\x18\x03 \x01(\x08R\x07homeWon\" \n\x0eValorantWeapon\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\"X\n\x0fValorantAbility\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x14\n\x05ready\x18\x02 \x01(\x08R\x05ready\x12\x1f\n\x0bis_ultimate\x18\x03 \x01(\x08R\nisUltimate*\x8b\x01\n\x15ValorantUltimateState\x12(\n$VALORANT_ULTIMATE_STATE__UNSPECIFIED\x10\x00\x12!\n\x1dVALORANT_ULTIMATE_STATE_READY\x10\x01\x12%\n!VALORANT_ULTIMATE_STATE_NOT_READY\x10\x02*g\n\x0cValorantSide\x12\x1d\n\x19VALORANT_SIDE_UNSPECIFIED\x10\x00\x12\x1b\n\x17VALORANT_SIDE_DEFENDERS\x10\x01\x12\x1b\n\x17VALORANT_SIDE_ATTACKERS\x10\x02*\xbf\x02\n\x14ValorantRoundOutcome\x12&\n\"VALORANT_ROUND_OUTCOME_UNSPECIFIED\x10\x00\x12\x34\n0VALORANT_ROUND_OUTCOME_DEFENDERS_WIN_ELIMINATION\x10\x01\x12\x30\n,VALORANT_ROUND_OUTCOME_DEFENDERS_WIN_TIMEOUT\x10\x02\x12/\n+VALORANT_ROUND_OUTCOME_DEFENDERS_WIN_DEFUSE\x10\x03\x12\x34\n0VALORANT_ROUND_OUTCOME_ATTACKERS_WIN_ELIMINATION\x10\x04\x12\x30\n,VALORANT_ROUND_OUTCOME_ATTACKERS_WIN_EXPLODE\x10\x05*\x9f\x01\n\x12ValorantRoundPhase\x12$\n VALORANT_ROUND_PHASE_UNSPECIFIED\x10\x00\x12\"\n\x1eVALORANT_ROUND_PHASE_BUY_PHASE\x10\x01\x12 \n\x1cVALORANT_ROUND_PHASE_RUNNING\x10\x02\x12\x1d\n\x19VALORANT_ROUND_PHASE_OVER\x10\x03*\xab\x02\n\x12ValorantSpikeState\x12$\n VALORANT_SPIKE_STATE_UNSPECIFIED\x10\x00\x12 \n\x1cVALORANT_SPIKE_STATE_CARRIED\x10\x01\x12 \n\x1cVALORANT_SPIKE_STATE_DROPPED\x10\x02\x12!\n\x1dVALORANT_SPIKE_STATE_PLANTING\x10\x03\x12!\n\x1dVALORANT_SPIKE_STATE_DEFUSING\x10\x04\x12 \n\x1cVALORANT_SPIKE_STATE_PLANTED\x10\x05\x12!\n\x1dVALORANT_SPIKE_STATE_EXPLODED\x10\x06\x12 \n\x1cVALORANT_SPIKE_STATE_DEFUSED\x10\x07\x42^\n\tcom.bragiB\rValorantProtoP\x01Z\x0eoddin.gg/bragi\xa2\x02\x03\x42XX\xaa\x02\x05\x42ragi\xca\x02\x05\x42ragi\xe2\x02\x11\x42ragi\\GPBMetadata\xea\x02\x05\x42ragib\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'bragi.valorant_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n\tcom.bragiB\rValorantProtoP\001Z\016oddin.gg/bragi\242\002\003BXX\252\002\005Bragi\312\002\005Bragi\342\002\021Bragi\\GPBMetadata\352\002\005Bragi'
  _VALORANTCURRENTMAPSTATE_TEAMSENTRY._options = None
  _VALORANTCURRENTMAPSTATE_TEAMSENTRY._serialized_options = b'8\001'
  _VALORANTTEAMCURRENTMAPSTATE_PLAYERSENTRY._options = None
  _VALORANTTEAMCURRENTMAPSTATE_PLAYERSENTRY._serialized_options = b'8\001'
  _VALORANTCURRENTROUNDSTATE_TEAMSENTRY._options = None
  _VALORANTCURRENTROUNDSTATE_TEAMSENTRY._serialized_options = b'8\001'
  _VALORANTTEAMCURRENTROUNDSTATE_PLAYERSENTRY._options = None
  _VALORANTTEAMCURRENTROUNDSTATE_PLAYERSENTRY._serialized_options = b'8\001'
  _globals['_VALORANTULTIMATESTATE']._serialized_start=8214
  _globals['_VALORANTULTIMATESTATE']._serialized_end=8353
  _globals['_VALORANTSIDE']._serialized_start=8355
  _globals['_VALORANTSIDE']._serialized_end=8458
  _globals['_VALORANTROUNDOUTCOME']._serialized_start=8461
  _globals['_VALORANTROUNDOUTCOME']._serialized_end=8780
  _globals['_VALORANTROUNDPHASE']._serialized_start=8783
  _globals['_VALORANTROUNDPHASE']._serialized_end=8942
  _globals['_VALORANTSPIKESTATE']._serialized_start=8945
  _globals['_VALORANTSPIKESTATE']._serialized_end=9244
  _globals['_VALORANTMATCHMESSAGE']._serialized_start=117
  _globals['_VALORANTMATCHMESSAGE']._serialized_end=506
  _globals['_VALORANTMATCHMESSAGE_PAYLOAD']._serialized_start=372
  _globals['_VALORANTMATCHMESSAGE_PAYLOAD']._serialized_end=506
  _globals['_VALORANTMATCHSNAPSHOT']._serialized_start=509
  _globals['_VALORANTMATCHSNAPSHOT']._serialized_end=869
  _globals['_VALORANTMATCHUPDATE']._serialized_start=872
  _globals['_VALORANTMATCHUPDATE']._serialized_end=1124
  _globals['_VALORANTMATCHUPDATE_PAYLOAD']._serialized_start=958
  _globals['_VALORANTMATCHUPDATE_PAYLOAD']._serialized_end=1124
  _globals['_VALORANTMATCHSTATEPARTIALUPDATES']._serialized_start=1126
  _globals['_VALORANTMATCHSTATEPARTIALUPDATES']._serialized_end=1226
  _globals['_VALORANTMATCHSTATEPARTIALUPDATE']._serialized_start=1229
  _globals['_VALORANTMATCHSTATEPARTIALUPDATE']._serialized_end=1503
  _globals['_VALORANTMATCHSTATE']._serialized_start=1506
  _globals['_VALORANTMATCHSTATE']._serialized_end=1867
  _globals['_VALORANTMATCHSCORESTATE']._serialized_start=1869
  _globals['_VALORANTMATCHSCORESTATE']._serialized_end=1956
  _globals['_VALORANTCURRENTMAPSTATEPARTIALUPDATE']._serialized_start=1959
  _globals['_VALORANTCURRENTMAPSTATEPARTIALUPDATE']._serialized_end=2539
  _globals['_VALORANTCURRENTMAPSTATE']._serialized_start=2542
  _globals['_VALORANTCURRENTMAPSTATE']._serialized_end=3069
  _globals['_VALORANTCURRENTMAPSTATE_TEAMSENTRY']._serialized_start=2960
  _globals['_VALORANTCURRENTMAPSTATE_TEAMSENTRY']._serialized_end=3052
  _globals['_VALORANTMAPSCORESTATE']._serialized_start=3071
  _globals['_VALORANTMAPSCORESTATE']._serialized_end=3156
  _globals['_VALORANTPREVIOUSROUNDSSTATE']._serialized_start=3158
  _globals['_VALORANTPREVIOUSROUNDSSTATE']._serialized_end=3241
  _globals['_VALORANTTEAMCURRENTMAPSTATEPARTIALUPDATE']._serialized_start=3244
  _globals['_VALORANTTEAMCURRENTMAPSTATEPARTIALUPDATE']._serialized_end=3643
  _globals['_VALORANTTEAMCURRENTMAPSTATEPARTIALUPDATE_PAYLOAD']._serialized_start=3399
  _globals['_VALORANTTEAMCURRENTMAPSTATEPARTIALUPDATE_PAYLOAD']._serialized_end=3643
  _globals['_VALORANTTEAMCURRENTMAPSTATE']._serialized_start=3646
  _globals['_VALORANTTEAMCURRENTMAPSTATE']._serialized_end=3916
  _globals['_VALORANTTEAMCURRENTMAPSTATE_PLAYERSENTRY']._serialized_start=3820
  _globals['_VALORANTTEAMCURRENTMAPSTATE_PLAYERSENTRY']._serialized_end=3916
  _globals['_VALORANTPLAYERCURRENTMAPSTATEPARTIALUPDATE']._serialized_start=3919
  _globals['_VALORANTPLAYERCURRENTMAPSTATEPARTIALUPDATE']._serialized_end=4314
  _globals['_VALORANTPLAYERCURRENTMAPSTATEPARTIALUPDATE_PAYLOAD']._serialized_start=4082
  _globals['_VALORANTPLAYERCURRENTMAPSTATEPARTIALUPDATE_PAYLOAD']._serialized_end=4314
  _globals['_VALORANTPLAYERCURRENTMAPSTATE']._serialized_start=4317
  _globals['_VALORANTPLAYERCURRENTMAPSTATE']._serialized_end=4614
  _globals['_VALORANTPLAYERCURRENTMAPSTATISTICSSTATE']._serialized_start=4617
  _globals['_VALORANTPLAYERCURRENTMAPSTATISTICSSTATE']._serialized_end=4761
  _globals['_VALORANTCURRENTROUNDSTATEPARTIALUPDATE']._serialized_start=4764
  _globals['_VALORANTCURRENTROUNDSTATEPARTIALUPDATE']._serialized_end=5229
  _globals['_VALORANTCURRENTROUNDSTATE']._serialized_start=5232
  _globals['_VALORANTCURRENTROUNDSTATE']._serialized_end=5607
  _globals['_VALORANTCURRENTROUNDSTATE_TEAMSENTRY']._serialized_start=5513
  _globals['_VALORANTCURRENTROUNDSTATE_TEAMSENTRY']._serialized_end=5607
  _globals['_VALORANTROUNDINFOSTATE']._serialized_start=5609
  _globals['_VALORANTROUNDINFOSTATE']._serialized_end=5706
  _globals['_VALORANTCURRENTROUNDTIMESTATE']._serialized_start=5708
  _globals['_VALORANTCURRENTROUNDTIMESTATE']._serialized_end=5805
  _globals['_VALORANTCURRENTROUNDTEAMSPIKESTATE']._serialized_start=5808
  _globals['_VALORANTCURRENTROUNDTEAMSPIKESTATE']._serialized_end=5960
  _globals['_VALORANTTEAMCURRENTROUNDSTATEPARTIALUPDATE']._serialized_start=5963
  _globals['_VALORANTTEAMCURRENTROUNDSTATEPARTIALUPDATE']._serialized_end=6379
  _globals['_VALORANTTEAMCURRENTROUNDSTATEPARTIALUPDATE_PAYLOAD']._serialized_start=6122
  _globals['_VALORANTTEAMCURRENTROUNDSTATEPARTIALUPDATE_PAYLOAD']._serialized_end=6379
  _globals['_VALORANTTEAMCURRENTROUNDSTATE']._serialized_start=6382
  _globals['_VALORANTTEAMCURRENTROUNDSTATE']._serialized_end=6658
  _globals['_VALORANTTEAMCURRENTROUNDSTATE_PLAYERSENTRY']._serialized_start=6560
  _globals['_VALORANTTEAMCURRENTROUNDSTATE_PLAYERSENTRY']._serialized_end=6658
  _globals['_VALORANTPLAYERCURRENTROUNDSTATEPARTIALUPDATE']._serialized_start=6661
  _globals['_VALORANTPLAYERCURRENTROUNDSTATEPARTIALUPDATE']._serialized_end=7116
  _globals['_VALORANTPLAYERCURRENTROUNDSTATEPARTIALUPDATE_PAYLOAD']._serialized_start=6828
  _globals['_VALORANTPLAYERCURRENTROUNDSTATEPARTIALUPDATE_PAYLOAD']._serialized_end=7116
  _globals['_VALORANTPLAYERCURRENTROUNDSTATE']._serialized_start=7119
  _globals['_VALORANTPLAYERCURRENTROUNDSTATE']._serialized_end=7443
  _globals['_VALORANTPLAYERCURRENTROUNDSTATISTICSSTATE']._serialized_start=7445
  _globals['_VALORANTPLAYERCURRENTROUNDSTATISTICSSTATE']._serialized_end=7546
  _globals['_VALORANTABILITIESSTATE']._serialized_start=7548
  _globals['_VALORANTABILITIESSTATE']._serialized_end=7657
  _globals['_VALORANTWEAPONSSTATE']._serialized_start=7659
  _globals['_VALORANTWEAPONSSTATE']._serialized_end=7761
  _globals['_VALORANTPLAYERINFOSTATE']._serialized_start=7763
  _globals['_VALORANTPLAYERINFOSTATE']._serialized_end=7871
  _globals['_VALORANTPOSITIONSTATE']._serialized_start=7873
  _globals['_VALORANTPOSITIONSTATE']._serialized_end=7955
  _globals['_VALORANTPREVIOUSROUND']._serialized_start=7958
  _globals['_VALORANTPREVIOUSROUND']._serialized_end=8087
  _globals['_VALORANTWEAPON']._serialized_start=8089
  _globals['_VALORANTWEAPON']._serialized_end=8121
  _globals['_VALORANTABILITY']._serialized_start=8123
  _globals['_VALORANTABILITY']._serialized_end=8211
# @@protoc_insertion_point(module_scope)
