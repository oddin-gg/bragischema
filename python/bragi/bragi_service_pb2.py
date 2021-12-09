# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: bragi/bragi_service.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from bragi_schema.bragi.historical_statistics import statistics_pb2 as bragi_dot_historical__statistics_dot_statistics__pb2
from bragi_schema.bragi.stream import data_feed_pb2 as bragi_dot_stream_dot_data__feed__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='bragi/bragi_service.proto',
  package='bragi',
  syntax='proto3',
  serialized_options=b'\n\017com.oddin.bragiZ\016oddin.gg/bragi',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x19\x62ragi/bragi_service.proto\x12\x05\x62ragi\x1a,bragi/historical_statistics/statistics.proto\x1a\x1c\x62ragi/stream/data_feed.proto2\xe8\x08\n\x05\x42ragi\x12M\n\x06Sports\x12\x1f.bragi.statistics.SportsRequest\x1a .bragi.statistics.SportsResponse\"\x00\x12[\n\x0bTournaments\x12$.bragi.statistics.TournamentsRequest\x1a$.bragi.statistics.TournamentResponse\"\x00\x12\x65\n\x0eTournamentInfo\x12\'.bragi.statistics.TournamentInfoRequest\x1a(.bragi.statistics.TournamentInfoResponse\"\x00\x12\x7f\n\x18TeamHistoricalStatistics\x12\x31.bragi.statistics.TeamHistoricalStatisticsRequest\x1a..bragi.statistics.HistoricalStatisticsResponse\"\x00\x12q\n\x12LastFiveEncounters\x12+.bragi.statistics.LastFiveEncountersRequest\x1a,.bragi.statistics.LastFiveEncountersResponse\"\x00\x12n\n\x11PostMapStatistics\x12*.bragi.statistics.PostMapStatisticsRequest\x1a+.bragi.statistics.PostMapStatisticsResponse\"\x00\x12w\n\x14TournamentStatistics\x12-.bragi.statistics.TournamentStatisticsRequest\x1a..bragi.statistics.TournamentStatisticsResponse\"\x00\x12\x83\x01\n\x18TeamTournamentStatistics\x12\x31.bragi.statistics.TeamTournamentStatisticsRequest\x1a\x32.bragi.statistics.TeamTournamentStatisticsResponse\"\x00\x12\x92\x01\n\x1dPlayerStatisticsAccordingRole\x12\x36.bragi.statistics.PlayerStatisticsAccordingRoleRequest\x1a\x37.bragi.statistics.PlayerStatisticsAccordingRoleResponse\"\x00\x12T\n\x0cLiveDataFeed\x12\x1f.bragi.live.LiveDataFeedRequest\x1a\x1f.bragi.live.LiveDataFeedMessage\"\x00\x30\x01\x42!\n\x0f\x63om.oddin.bragiZ\x0eoddin.gg/bragib\x06proto3'
  ,
  dependencies=[bragi_dot_historical__statistics_dot_statistics__pb2.DESCRIPTOR,bragi_dot_stream_dot_data__feed__pb2.DESCRIPTOR,])



_sym_db.RegisterFileDescriptor(DESCRIPTOR)


DESCRIPTOR._options = None

_BRAGI = _descriptor.ServiceDescriptor(
  name='Bragi',
  full_name='bragi.Bragi',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=113,
  serialized_end=1241,
  methods=[
  _descriptor.MethodDescriptor(
    name='Sports',
    full_name='bragi.Bragi.Sports',
    index=0,
    containing_service=None,
    input_type=bragi_dot_historical__statistics_dot_statistics__pb2._SPORTSREQUEST,
    output_type=bragi_dot_historical__statistics_dot_statistics__pb2._SPORTSRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='Tournaments',
    full_name='bragi.Bragi.Tournaments',
    index=1,
    containing_service=None,
    input_type=bragi_dot_historical__statistics_dot_statistics__pb2._TOURNAMENTSREQUEST,
    output_type=bragi_dot_historical__statistics_dot_statistics__pb2._TOURNAMENTRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='TournamentInfo',
    full_name='bragi.Bragi.TournamentInfo',
    index=2,
    containing_service=None,
    input_type=bragi_dot_historical__statistics_dot_statistics__pb2._TOURNAMENTINFOREQUEST,
    output_type=bragi_dot_historical__statistics_dot_statistics__pb2._TOURNAMENTINFORESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='TeamHistoricalStatistics',
    full_name='bragi.Bragi.TeamHistoricalStatistics',
    index=3,
    containing_service=None,
    input_type=bragi_dot_historical__statistics_dot_statistics__pb2._TEAMHISTORICALSTATISTICSREQUEST,
    output_type=bragi_dot_historical__statistics_dot_statistics__pb2._HISTORICALSTATISTICSRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='LastFiveEncounters',
    full_name='bragi.Bragi.LastFiveEncounters',
    index=4,
    containing_service=None,
    input_type=bragi_dot_historical__statistics_dot_statistics__pb2._LASTFIVEENCOUNTERSREQUEST,
    output_type=bragi_dot_historical__statistics_dot_statistics__pb2._LASTFIVEENCOUNTERSRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='PostMapStatistics',
    full_name='bragi.Bragi.PostMapStatistics',
    index=5,
    containing_service=None,
    input_type=bragi_dot_historical__statistics_dot_statistics__pb2._POSTMAPSTATISTICSREQUEST,
    output_type=bragi_dot_historical__statistics_dot_statistics__pb2._POSTMAPSTATISTICSRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='TournamentStatistics',
    full_name='bragi.Bragi.TournamentStatistics',
    index=6,
    containing_service=None,
    input_type=bragi_dot_historical__statistics_dot_statistics__pb2._TOURNAMENTSTATISTICSREQUEST,
    output_type=bragi_dot_historical__statistics_dot_statistics__pb2._TOURNAMENTSTATISTICSRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='TeamTournamentStatistics',
    full_name='bragi.Bragi.TeamTournamentStatistics',
    index=7,
    containing_service=None,
    input_type=bragi_dot_historical__statistics_dot_statistics__pb2._TEAMTOURNAMENTSTATISTICSREQUEST,
    output_type=bragi_dot_historical__statistics_dot_statistics__pb2._TEAMTOURNAMENTSTATISTICSRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='PlayerStatisticsAccordingRole',
    full_name='bragi.Bragi.PlayerStatisticsAccordingRole',
    index=8,
    containing_service=None,
    input_type=bragi_dot_historical__statistics_dot_statistics__pb2._PLAYERSTATISTICSACCORDINGROLEREQUEST,
    output_type=bragi_dot_historical__statistics_dot_statistics__pb2._PLAYERSTATISTICSACCORDINGROLERESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='LiveDataFeed',
    full_name='bragi.Bragi.LiveDataFeed',
    index=9,
    containing_service=None,
    input_type=bragi_dot_stream_dot_data__feed__pb2._LIVEDATAFEEDREQUEST,
    output_type=bragi_dot_stream_dot_data__feed__pb2._LIVEDATAFEEDMESSAGE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_BRAGI)

DESCRIPTOR.services_by_name['Bragi'] = _BRAGI

# @@protoc_insertion_point(module_scope)