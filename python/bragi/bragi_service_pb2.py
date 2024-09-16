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


from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
from bragi_schema.bragi import common_pb2 as bragi_dot_common__pb2
from bragi_schema.bragi import cs2_pb2 as bragi_dot_cs2__pb2
from bragi_schema.bragi import dota2_pb2 as bragi_dot_dota2__pb2
from bragi_schema.bragi import rush_soccer_pb2 as bragi_dot_rush__soccer__pb2
from bragi_schema.bragi import lol_pb2 as bragi_dot_lol__pb2
from bragi_schema.bragi import rush_basketball_pb2 as bragi_dot_rush__basketball__pb2
from bragi_schema.bragi import valorant_pb2 as bragi_dot_valorant__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='bragi/bragi_service.proto',
  package='bragi',
  syntax='proto3',
  serialized_options=b'\n\017com.oddin.bragiZ\016oddin.gg/bragi',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x19\x62ragi/bragi_service.proto\x12\x05\x62ragi\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x12\x62ragi/common.proto\x1a\x0f\x62ragi/cs2.proto\x1a\x11\x62ragi/dota2.proto\x1a\x17\x62ragi/rush_soccer.proto\x1a\x0f\x62ragi/lol.proto\x1a\x1b\x62ragi/rush_basketball.proto\x1a\x14\x62ragi/valorant.proto\"\x16\n\x14MatchTimelineRequest\"6\n\x15MatchTimelineResponse\x12\x1d\n\x07matches\x18\x01 \x03(\x0b\x32\x0c.bragi.Match\"\x1a\n\x18MatchTimelineFeedRequest\"\xa0\x01\n\x18MatchTimelineFeedMessage\x12)\n\tkeepalive\x18\x01 \x01(\x0b\x32\x10.bragi.KeepAliveB\x02\x18\x01H\x00\x12(\n\x08timeline\x18\x02 \x01(\x0b\x32\x14.bragi.MatchTimelineH\x00\x12$\n\x0cmatch_update\x18\x03 \x01(\x0b\x32\x0c.bragi.MatchH\x00\x42\t\n\x07payload\"O\n\x13LiveDataFeedRequest\x12.\n\x05\x61\x66ter\x18\x01 \x01(\x0b\x32\x1a.google.protobuf.TimestampH\x00\x88\x01\x01\x42\x08\n\x06_after\"q\n\x13LiveDataFeedMessage\x12)\n\tkeepalive\x18\x01 \x01(\x0b\x32\x10.bragi.KeepAliveB\x02\x18\x01H\x00\x12$\n\x05match\x18\x02 \x01(\x0b\x32\x13.bragi.MatchMessageH\x00\x42\t\n\x07message\":\n\tKeepAlive\x12-\n\ttimestamp\x18\x01 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\"\x97\x03\n\x0cMatchMessage\x12\x31\n\x0c\x61nnouncement\x18\x01 \x01(\x0b\x32\x19.bragi.AnnouncementUpdateH\x00\x12%\n\x03\x63s2\x18\x02 \x01(\x0b\x32\x16.bragi.CS2MatchMessageH\x00\x12+\n\tcs2_duels\x18\x03 \x01(\x0b\x32\x16.bragi.CS2MatchMessageH\x00\x12)\n\x05\x64ota2\x18\x04 \x01(\x0b\x32\x18.bragi.Dota2MatchMessageH\x00\x12\x34\n\x0brush_soccer\x18\x05 \x01(\x0b\x32\x1d.bragi.RushSoccerMatchMessageH\x00\x12%\n\x03lol\x18\x06 \x01(\x0b\x32\x16.bragi.LolMatchMessageH\x00\x12<\n\x0frush_basketball\x18\x07 \x01(\x0b\x32!.bragi.RushBasketballMatchMessageH\x00\x12/\n\x08valorant\x18\x08 \x01(\x0b\x32\x1b.bragi.ValorantMatchMessageH\x00\x42\t\n\x07message\"\xed\x02\n\rMatchSnapshot\x12&\n\x03\x63s2\x18\x01 \x01(\x0b\x32\x17.bragi.CS2MatchSnapshotH\x00\x12,\n\tcs2_duels\x18\x02 \x01(\x0b\x32\x17.bragi.CS2MatchSnapshotH\x00\x12*\n\x05\x64ota2\x18\x03 \x01(\x0b\x32\x19.bragi.Dota2MatchSnapshotH\x00\x12\x35\n\x0brush_soccer\x18\x04 \x01(\x0b\x32\x1e.bragi.RushSoccerMatchSnapshotH\x00\x12&\n\x03lol\x18\x05 \x01(\x0b\x32\x17.bragi.LolMatchSnapshotH\x00\x12=\n\x0frush_basketball\x18\x06 \x01(\x0b\x32\".bragi.RushBasketballMatchSnapshotH\x00\x12\x30\n\x08valorant\x18\x07 \x01(\x0b\x32\x1c.bragi.ValorantMatchSnapshotH\x00\x42\n\n\x08snapshot\"\xd2\x02\n\nMatchState\x12#\n\x03\x63s2\x18\x01 \x01(\x0b\x32\x14.bragi.CS2MatchStateH\x00\x12)\n\tcs2_duels\x18\x02 \x01(\x0b\x32\x14.bragi.CS2MatchStateH\x00\x12\'\n\x05\x64ota2\x18\x03 \x01(\x0b\x32\x16.bragi.Dota2MatchStateH\x00\x12\x32\n\x0brush_soccer\x18\x04 \x01(\x0b\x32\x1b.bragi.RushSoccerMatchStateH\x00\x12#\n\x03lol\x18\x05 \x01(\x0b\x32\x14.bragi.LolMatchStateH\x00\x12:\n\x0frush_basketball\x18\x06 \x01(\x0b\x32\x1f.bragi.RushBasketballMatchStateH\x00\x12-\n\x08valorant\x18\x07 \x01(\x0b\x32\x19.bragi.ValorantMatchStateH\x00\x42\x07\n\x05state2\xfc\x01\n\x05\x42ragi\x12L\n\rMatchTimeline\x12\x1b.bragi.MatchTimelineRequest\x1a\x1c.bragi.MatchTimelineResponse\"\x00\x12Y\n\x11MatchTimelineFeed\x12\x1f.bragi.MatchTimelineFeedRequest\x1a\x1f.bragi.MatchTimelineFeedMessage\"\x00\x30\x01\x12J\n\x0cLiveDataFeed\x12\x1a.bragi.LiveDataFeedRequest\x1a\x1a.bragi.LiveDataFeedMessage\"\x00\x30\x01\x42!\n\x0f\x63om.oddin.bragiZ\x0eoddin.gg/bragib\x06proto3'
  ,
  dependencies=[google_dot_protobuf_dot_timestamp__pb2.DESCRIPTOR,bragi_dot_common__pb2.DESCRIPTOR,bragi_dot_cs2__pb2.DESCRIPTOR,bragi_dot_dota2__pb2.DESCRIPTOR,bragi_dot_rush__soccer__pb2.DESCRIPTOR,bragi_dot_lol__pb2.DESCRIPTOR,bragi_dot_rush__basketball__pb2.DESCRIPTOR,bragi_dot_valorant__pb2.DESCRIPTOR,])




_MATCHTIMELINEREQUEST = _descriptor.Descriptor(
  name='MatchTimelineRequest',
  full_name='bragi.MatchTimelineRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=218,
  serialized_end=240,
)


_MATCHTIMELINERESPONSE = _descriptor.Descriptor(
  name='MatchTimelineResponse',
  full_name='bragi.MatchTimelineResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='matches', full_name='bragi.MatchTimelineResponse.matches', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=242,
  serialized_end=296,
)


_MATCHTIMELINEFEEDREQUEST = _descriptor.Descriptor(
  name='MatchTimelineFeedRequest',
  full_name='bragi.MatchTimelineFeedRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=298,
  serialized_end=324,
)


_MATCHTIMELINEFEEDMESSAGE = _descriptor.Descriptor(
  name='MatchTimelineFeedMessage',
  full_name='bragi.MatchTimelineFeedMessage',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='keepalive', full_name='bragi.MatchTimelineFeedMessage.keepalive', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=b'\030\001', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='timeline', full_name='bragi.MatchTimelineFeedMessage.timeline', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='match_update', full_name='bragi.MatchTimelineFeedMessage.match_update', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
    _descriptor.OneofDescriptor(
      name='payload', full_name='bragi.MatchTimelineFeedMessage.payload',
      index=0, containing_type=None,
      create_key=_descriptor._internal_create_key,
    fields=[]),
  ],
  serialized_start=327,
  serialized_end=487,
)


_LIVEDATAFEEDREQUEST = _descriptor.Descriptor(
  name='LiveDataFeedRequest',
  full_name='bragi.LiveDataFeedRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='after', full_name='bragi.LiveDataFeedRequest.after', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
    _descriptor.OneofDescriptor(
      name='_after', full_name='bragi.LiveDataFeedRequest._after',
      index=0, containing_type=None,
      create_key=_descriptor._internal_create_key,
    fields=[]),
  ],
  serialized_start=489,
  serialized_end=568,
)


_LIVEDATAFEEDMESSAGE = _descriptor.Descriptor(
  name='LiveDataFeedMessage',
  full_name='bragi.LiveDataFeedMessage',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='keepalive', full_name='bragi.LiveDataFeedMessage.keepalive', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=b'\030\001', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='match', full_name='bragi.LiveDataFeedMessage.match', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
    _descriptor.OneofDescriptor(
      name='message', full_name='bragi.LiveDataFeedMessage.message',
      index=0, containing_type=None,
      create_key=_descriptor._internal_create_key,
    fields=[]),
  ],
  serialized_start=570,
  serialized_end=683,
)


_KEEPALIVE = _descriptor.Descriptor(
  name='KeepAlive',
  full_name='bragi.KeepAlive',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='timestamp', full_name='bragi.KeepAlive.timestamp', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=685,
  serialized_end=743,
)


_MATCHMESSAGE = _descriptor.Descriptor(
  name='MatchMessage',
  full_name='bragi.MatchMessage',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='announcement', full_name='bragi.MatchMessage.announcement', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='cs2', full_name='bragi.MatchMessage.cs2', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='cs2_duels', full_name='bragi.MatchMessage.cs2_duels', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='dota2', full_name='bragi.MatchMessage.dota2', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='rush_soccer', full_name='bragi.MatchMessage.rush_soccer', index=4,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='lol', full_name='bragi.MatchMessage.lol', index=5,
      number=6, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='rush_basketball', full_name='bragi.MatchMessage.rush_basketball', index=6,
      number=7, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='valorant', full_name='bragi.MatchMessage.valorant', index=7,
      number=8, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
    _descriptor.OneofDescriptor(
      name='message', full_name='bragi.MatchMessage.message',
      index=0, containing_type=None,
      create_key=_descriptor._internal_create_key,
    fields=[]),
  ],
  serialized_start=746,
  serialized_end=1153,
)


_MATCHSNAPSHOT = _descriptor.Descriptor(
  name='MatchSnapshot',
  full_name='bragi.MatchSnapshot',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='cs2', full_name='bragi.MatchSnapshot.cs2', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='cs2_duels', full_name='bragi.MatchSnapshot.cs2_duels', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='dota2', full_name='bragi.MatchSnapshot.dota2', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='rush_soccer', full_name='bragi.MatchSnapshot.rush_soccer', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='lol', full_name='bragi.MatchSnapshot.lol', index=4,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='rush_basketball', full_name='bragi.MatchSnapshot.rush_basketball', index=5,
      number=6, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='valorant', full_name='bragi.MatchSnapshot.valorant', index=6,
      number=7, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
    _descriptor.OneofDescriptor(
      name='snapshot', full_name='bragi.MatchSnapshot.snapshot',
      index=0, containing_type=None,
      create_key=_descriptor._internal_create_key,
    fields=[]),
  ],
  serialized_start=1156,
  serialized_end=1521,
)


_MATCHSTATE = _descriptor.Descriptor(
  name='MatchState',
  full_name='bragi.MatchState',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='cs2', full_name='bragi.MatchState.cs2', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='cs2_duels', full_name='bragi.MatchState.cs2_duels', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='dota2', full_name='bragi.MatchState.dota2', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='rush_soccer', full_name='bragi.MatchState.rush_soccer', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='lol', full_name='bragi.MatchState.lol', index=4,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='rush_basketball', full_name='bragi.MatchState.rush_basketball', index=5,
      number=6, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='valorant', full_name='bragi.MatchState.valorant', index=6,
      number=7, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
    _descriptor.OneofDescriptor(
      name='state', full_name='bragi.MatchState.state',
      index=0, containing_type=None,
      create_key=_descriptor._internal_create_key,
    fields=[]),
  ],
  serialized_start=1524,
  serialized_end=1862,
)

_MATCHTIMELINERESPONSE.fields_by_name['matches'].message_type = bragi_dot_common__pb2._MATCH
_MATCHTIMELINEFEEDMESSAGE.fields_by_name['keepalive'].message_type = _KEEPALIVE
_MATCHTIMELINEFEEDMESSAGE.fields_by_name['timeline'].message_type = bragi_dot_common__pb2._MATCHTIMELINE
_MATCHTIMELINEFEEDMESSAGE.fields_by_name['match_update'].message_type = bragi_dot_common__pb2._MATCH
_MATCHTIMELINEFEEDMESSAGE.oneofs_by_name['payload'].fields.append(
  _MATCHTIMELINEFEEDMESSAGE.fields_by_name['keepalive'])
_MATCHTIMELINEFEEDMESSAGE.fields_by_name['keepalive'].containing_oneof = _MATCHTIMELINEFEEDMESSAGE.oneofs_by_name['payload']
_MATCHTIMELINEFEEDMESSAGE.oneofs_by_name['payload'].fields.append(
  _MATCHTIMELINEFEEDMESSAGE.fields_by_name['timeline'])
_MATCHTIMELINEFEEDMESSAGE.fields_by_name['timeline'].containing_oneof = _MATCHTIMELINEFEEDMESSAGE.oneofs_by_name['payload']
_MATCHTIMELINEFEEDMESSAGE.oneofs_by_name['payload'].fields.append(
  _MATCHTIMELINEFEEDMESSAGE.fields_by_name['match_update'])
_MATCHTIMELINEFEEDMESSAGE.fields_by_name['match_update'].containing_oneof = _MATCHTIMELINEFEEDMESSAGE.oneofs_by_name['payload']
_LIVEDATAFEEDREQUEST.fields_by_name['after'].message_type = google_dot_protobuf_dot_timestamp__pb2._TIMESTAMP
_LIVEDATAFEEDREQUEST.oneofs_by_name['_after'].fields.append(
  _LIVEDATAFEEDREQUEST.fields_by_name['after'])
_LIVEDATAFEEDREQUEST.fields_by_name['after'].containing_oneof = _LIVEDATAFEEDREQUEST.oneofs_by_name['_after']
_LIVEDATAFEEDMESSAGE.fields_by_name['keepalive'].message_type = _KEEPALIVE
_LIVEDATAFEEDMESSAGE.fields_by_name['match'].message_type = _MATCHMESSAGE
_LIVEDATAFEEDMESSAGE.oneofs_by_name['message'].fields.append(
  _LIVEDATAFEEDMESSAGE.fields_by_name['keepalive'])
_LIVEDATAFEEDMESSAGE.fields_by_name['keepalive'].containing_oneof = _LIVEDATAFEEDMESSAGE.oneofs_by_name['message']
_LIVEDATAFEEDMESSAGE.oneofs_by_name['message'].fields.append(
  _LIVEDATAFEEDMESSAGE.fields_by_name['match'])
_LIVEDATAFEEDMESSAGE.fields_by_name['match'].containing_oneof = _LIVEDATAFEEDMESSAGE.oneofs_by_name['message']
_KEEPALIVE.fields_by_name['timestamp'].message_type = google_dot_protobuf_dot_timestamp__pb2._TIMESTAMP
_MATCHMESSAGE.fields_by_name['announcement'].message_type = bragi_dot_common__pb2._ANNOUNCEMENTUPDATE
_MATCHMESSAGE.fields_by_name['cs2'].message_type = bragi_dot_cs2__pb2._CS2MATCHMESSAGE
_MATCHMESSAGE.fields_by_name['cs2_duels'].message_type = bragi_dot_cs2__pb2._CS2MATCHMESSAGE
_MATCHMESSAGE.fields_by_name['dota2'].message_type = bragi_dot_dota2__pb2._DOTA2MATCHMESSAGE
_MATCHMESSAGE.fields_by_name['rush_soccer'].message_type = bragi_dot_rush__soccer__pb2._RUSHSOCCERMATCHMESSAGE
_MATCHMESSAGE.fields_by_name['lol'].message_type = bragi_dot_lol__pb2._LOLMATCHMESSAGE
_MATCHMESSAGE.fields_by_name['rush_basketball'].message_type = bragi_dot_rush__basketball__pb2._RUSHBASKETBALLMATCHMESSAGE
_MATCHMESSAGE.fields_by_name['valorant'].message_type = bragi_dot_valorant__pb2._VALORANTMATCHMESSAGE
_MATCHMESSAGE.oneofs_by_name['message'].fields.append(
  _MATCHMESSAGE.fields_by_name['announcement'])
_MATCHMESSAGE.fields_by_name['announcement'].containing_oneof = _MATCHMESSAGE.oneofs_by_name['message']
_MATCHMESSAGE.oneofs_by_name['message'].fields.append(
  _MATCHMESSAGE.fields_by_name['cs2'])
_MATCHMESSAGE.fields_by_name['cs2'].containing_oneof = _MATCHMESSAGE.oneofs_by_name['message']
_MATCHMESSAGE.oneofs_by_name['message'].fields.append(
  _MATCHMESSAGE.fields_by_name['cs2_duels'])
_MATCHMESSAGE.fields_by_name['cs2_duels'].containing_oneof = _MATCHMESSAGE.oneofs_by_name['message']
_MATCHMESSAGE.oneofs_by_name['message'].fields.append(
  _MATCHMESSAGE.fields_by_name['dota2'])
_MATCHMESSAGE.fields_by_name['dota2'].containing_oneof = _MATCHMESSAGE.oneofs_by_name['message']
_MATCHMESSAGE.oneofs_by_name['message'].fields.append(
  _MATCHMESSAGE.fields_by_name['rush_soccer'])
_MATCHMESSAGE.fields_by_name['rush_soccer'].containing_oneof = _MATCHMESSAGE.oneofs_by_name['message']
_MATCHMESSAGE.oneofs_by_name['message'].fields.append(
  _MATCHMESSAGE.fields_by_name['lol'])
_MATCHMESSAGE.fields_by_name['lol'].containing_oneof = _MATCHMESSAGE.oneofs_by_name['message']
_MATCHMESSAGE.oneofs_by_name['message'].fields.append(
  _MATCHMESSAGE.fields_by_name['rush_basketball'])
_MATCHMESSAGE.fields_by_name['rush_basketball'].containing_oneof = _MATCHMESSAGE.oneofs_by_name['message']
_MATCHMESSAGE.oneofs_by_name['message'].fields.append(
  _MATCHMESSAGE.fields_by_name['valorant'])
_MATCHMESSAGE.fields_by_name['valorant'].containing_oneof = _MATCHMESSAGE.oneofs_by_name['message']
_MATCHSNAPSHOT.fields_by_name['cs2'].message_type = bragi_dot_cs2__pb2._CS2MATCHSNAPSHOT
_MATCHSNAPSHOT.fields_by_name['cs2_duels'].message_type = bragi_dot_cs2__pb2._CS2MATCHSNAPSHOT
_MATCHSNAPSHOT.fields_by_name['dota2'].message_type = bragi_dot_dota2__pb2._DOTA2MATCHSNAPSHOT
_MATCHSNAPSHOT.fields_by_name['rush_soccer'].message_type = bragi_dot_rush__soccer__pb2._RUSHSOCCERMATCHSNAPSHOT
_MATCHSNAPSHOT.fields_by_name['lol'].message_type = bragi_dot_lol__pb2._LOLMATCHSNAPSHOT
_MATCHSNAPSHOT.fields_by_name['rush_basketball'].message_type = bragi_dot_rush__basketball__pb2._RUSHBASKETBALLMATCHSNAPSHOT
_MATCHSNAPSHOT.fields_by_name['valorant'].message_type = bragi_dot_valorant__pb2._VALORANTMATCHSNAPSHOT
_MATCHSNAPSHOT.oneofs_by_name['snapshot'].fields.append(
  _MATCHSNAPSHOT.fields_by_name['cs2'])
_MATCHSNAPSHOT.fields_by_name['cs2'].containing_oneof = _MATCHSNAPSHOT.oneofs_by_name['snapshot']
_MATCHSNAPSHOT.oneofs_by_name['snapshot'].fields.append(
  _MATCHSNAPSHOT.fields_by_name['cs2_duels'])
_MATCHSNAPSHOT.fields_by_name['cs2_duels'].containing_oneof = _MATCHSNAPSHOT.oneofs_by_name['snapshot']
_MATCHSNAPSHOT.oneofs_by_name['snapshot'].fields.append(
  _MATCHSNAPSHOT.fields_by_name['dota2'])
_MATCHSNAPSHOT.fields_by_name['dota2'].containing_oneof = _MATCHSNAPSHOT.oneofs_by_name['snapshot']
_MATCHSNAPSHOT.oneofs_by_name['snapshot'].fields.append(
  _MATCHSNAPSHOT.fields_by_name['rush_soccer'])
_MATCHSNAPSHOT.fields_by_name['rush_soccer'].containing_oneof = _MATCHSNAPSHOT.oneofs_by_name['snapshot']
_MATCHSNAPSHOT.oneofs_by_name['snapshot'].fields.append(
  _MATCHSNAPSHOT.fields_by_name['lol'])
_MATCHSNAPSHOT.fields_by_name['lol'].containing_oneof = _MATCHSNAPSHOT.oneofs_by_name['snapshot']
_MATCHSNAPSHOT.oneofs_by_name['snapshot'].fields.append(
  _MATCHSNAPSHOT.fields_by_name['rush_basketball'])
_MATCHSNAPSHOT.fields_by_name['rush_basketball'].containing_oneof = _MATCHSNAPSHOT.oneofs_by_name['snapshot']
_MATCHSNAPSHOT.oneofs_by_name['snapshot'].fields.append(
  _MATCHSNAPSHOT.fields_by_name['valorant'])
_MATCHSNAPSHOT.fields_by_name['valorant'].containing_oneof = _MATCHSNAPSHOT.oneofs_by_name['snapshot']
_MATCHSTATE.fields_by_name['cs2'].message_type = bragi_dot_cs2__pb2._CS2MATCHSTATE
_MATCHSTATE.fields_by_name['cs2_duels'].message_type = bragi_dot_cs2__pb2._CS2MATCHSTATE
_MATCHSTATE.fields_by_name['dota2'].message_type = bragi_dot_dota2__pb2._DOTA2MATCHSTATE
_MATCHSTATE.fields_by_name['rush_soccer'].message_type = bragi_dot_rush__soccer__pb2._RUSHSOCCERMATCHSTATE
_MATCHSTATE.fields_by_name['lol'].message_type = bragi_dot_lol__pb2._LOLMATCHSTATE
_MATCHSTATE.fields_by_name['rush_basketball'].message_type = bragi_dot_rush__basketball__pb2._RUSHBASKETBALLMATCHSTATE
_MATCHSTATE.fields_by_name['valorant'].message_type = bragi_dot_valorant__pb2._VALORANTMATCHSTATE
_MATCHSTATE.oneofs_by_name['state'].fields.append(
  _MATCHSTATE.fields_by_name['cs2'])
_MATCHSTATE.fields_by_name['cs2'].containing_oneof = _MATCHSTATE.oneofs_by_name['state']
_MATCHSTATE.oneofs_by_name['state'].fields.append(
  _MATCHSTATE.fields_by_name['cs2_duels'])
_MATCHSTATE.fields_by_name['cs2_duels'].containing_oneof = _MATCHSTATE.oneofs_by_name['state']
_MATCHSTATE.oneofs_by_name['state'].fields.append(
  _MATCHSTATE.fields_by_name['dota2'])
_MATCHSTATE.fields_by_name['dota2'].containing_oneof = _MATCHSTATE.oneofs_by_name['state']
_MATCHSTATE.oneofs_by_name['state'].fields.append(
  _MATCHSTATE.fields_by_name['rush_soccer'])
_MATCHSTATE.fields_by_name['rush_soccer'].containing_oneof = _MATCHSTATE.oneofs_by_name['state']
_MATCHSTATE.oneofs_by_name['state'].fields.append(
  _MATCHSTATE.fields_by_name['lol'])
_MATCHSTATE.fields_by_name['lol'].containing_oneof = _MATCHSTATE.oneofs_by_name['state']
_MATCHSTATE.oneofs_by_name['state'].fields.append(
  _MATCHSTATE.fields_by_name['rush_basketball'])
_MATCHSTATE.fields_by_name['rush_basketball'].containing_oneof = _MATCHSTATE.oneofs_by_name['state']
_MATCHSTATE.oneofs_by_name['state'].fields.append(
  _MATCHSTATE.fields_by_name['valorant'])
_MATCHSTATE.fields_by_name['valorant'].containing_oneof = _MATCHSTATE.oneofs_by_name['state']
DESCRIPTOR.message_types_by_name['MatchTimelineRequest'] = _MATCHTIMELINEREQUEST
DESCRIPTOR.message_types_by_name['MatchTimelineResponse'] = _MATCHTIMELINERESPONSE
DESCRIPTOR.message_types_by_name['MatchTimelineFeedRequest'] = _MATCHTIMELINEFEEDREQUEST
DESCRIPTOR.message_types_by_name['MatchTimelineFeedMessage'] = _MATCHTIMELINEFEEDMESSAGE
DESCRIPTOR.message_types_by_name['LiveDataFeedRequest'] = _LIVEDATAFEEDREQUEST
DESCRIPTOR.message_types_by_name['LiveDataFeedMessage'] = _LIVEDATAFEEDMESSAGE
DESCRIPTOR.message_types_by_name['KeepAlive'] = _KEEPALIVE
DESCRIPTOR.message_types_by_name['MatchMessage'] = _MATCHMESSAGE
DESCRIPTOR.message_types_by_name['MatchSnapshot'] = _MATCHSNAPSHOT
DESCRIPTOR.message_types_by_name['MatchState'] = _MATCHSTATE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

MatchTimelineRequest = _reflection.GeneratedProtocolMessageType('MatchTimelineRequest', (_message.Message,), {
  'DESCRIPTOR' : _MATCHTIMELINEREQUEST,
  '__module__' : 'bragi.bragi_service_pb2'
  # @@protoc_insertion_point(class_scope:bragi.MatchTimelineRequest)
  })
_sym_db.RegisterMessage(MatchTimelineRequest)

MatchTimelineResponse = _reflection.GeneratedProtocolMessageType('MatchTimelineResponse', (_message.Message,), {
  'DESCRIPTOR' : _MATCHTIMELINERESPONSE,
  '__module__' : 'bragi.bragi_service_pb2'
  # @@protoc_insertion_point(class_scope:bragi.MatchTimelineResponse)
  })
_sym_db.RegisterMessage(MatchTimelineResponse)

MatchTimelineFeedRequest = _reflection.GeneratedProtocolMessageType('MatchTimelineFeedRequest', (_message.Message,), {
  'DESCRIPTOR' : _MATCHTIMELINEFEEDREQUEST,
  '__module__' : 'bragi.bragi_service_pb2'
  # @@protoc_insertion_point(class_scope:bragi.MatchTimelineFeedRequest)
  })
_sym_db.RegisterMessage(MatchTimelineFeedRequest)

MatchTimelineFeedMessage = _reflection.GeneratedProtocolMessageType('MatchTimelineFeedMessage', (_message.Message,), {
  'DESCRIPTOR' : _MATCHTIMELINEFEEDMESSAGE,
  '__module__' : 'bragi.bragi_service_pb2'
  # @@protoc_insertion_point(class_scope:bragi.MatchTimelineFeedMessage)
  })
_sym_db.RegisterMessage(MatchTimelineFeedMessage)

LiveDataFeedRequest = _reflection.GeneratedProtocolMessageType('LiveDataFeedRequest', (_message.Message,), {
  'DESCRIPTOR' : _LIVEDATAFEEDREQUEST,
  '__module__' : 'bragi.bragi_service_pb2'
  # @@protoc_insertion_point(class_scope:bragi.LiveDataFeedRequest)
  })
_sym_db.RegisterMessage(LiveDataFeedRequest)

LiveDataFeedMessage = _reflection.GeneratedProtocolMessageType('LiveDataFeedMessage', (_message.Message,), {
  'DESCRIPTOR' : _LIVEDATAFEEDMESSAGE,
  '__module__' : 'bragi.bragi_service_pb2'
  # @@protoc_insertion_point(class_scope:bragi.LiveDataFeedMessage)
  })
_sym_db.RegisterMessage(LiveDataFeedMessage)

KeepAlive = _reflection.GeneratedProtocolMessageType('KeepAlive', (_message.Message,), {
  'DESCRIPTOR' : _KEEPALIVE,
  '__module__' : 'bragi.bragi_service_pb2'
  # @@protoc_insertion_point(class_scope:bragi.KeepAlive)
  })
_sym_db.RegisterMessage(KeepAlive)

MatchMessage = _reflection.GeneratedProtocolMessageType('MatchMessage', (_message.Message,), {
  'DESCRIPTOR' : _MATCHMESSAGE,
  '__module__' : 'bragi.bragi_service_pb2'
  # @@protoc_insertion_point(class_scope:bragi.MatchMessage)
  })
_sym_db.RegisterMessage(MatchMessage)

MatchSnapshot = _reflection.GeneratedProtocolMessageType('MatchSnapshot', (_message.Message,), {
  'DESCRIPTOR' : _MATCHSNAPSHOT,
  '__module__' : 'bragi.bragi_service_pb2'
  # @@protoc_insertion_point(class_scope:bragi.MatchSnapshot)
  })
_sym_db.RegisterMessage(MatchSnapshot)

MatchState = _reflection.GeneratedProtocolMessageType('MatchState', (_message.Message,), {
  'DESCRIPTOR' : _MATCHSTATE,
  '__module__' : 'bragi.bragi_service_pb2'
  # @@protoc_insertion_point(class_scope:bragi.MatchState)
  })
_sym_db.RegisterMessage(MatchState)


DESCRIPTOR._options = None
_MATCHTIMELINEFEEDMESSAGE.fields_by_name['keepalive']._options = None
_LIVEDATAFEEDMESSAGE.fields_by_name['keepalive']._options = None

_BRAGI = _descriptor.ServiceDescriptor(
  name='Bragi',
  full_name='bragi.Bragi',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1865,
  serialized_end=2117,
  methods=[
  _descriptor.MethodDescriptor(
    name='MatchTimeline',
    full_name='bragi.Bragi.MatchTimeline',
    index=0,
    containing_service=None,
    input_type=_MATCHTIMELINEREQUEST,
    output_type=_MATCHTIMELINERESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='MatchTimelineFeed',
    full_name='bragi.Bragi.MatchTimelineFeed',
    index=1,
    containing_service=None,
    input_type=_MATCHTIMELINEFEEDREQUEST,
    output_type=_MATCHTIMELINEFEEDMESSAGE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='LiveDataFeed',
    full_name='bragi.Bragi.LiveDataFeed',
    index=2,
    containing_service=None,
    input_type=_LIVEDATAFEEDREQUEST,
    output_type=_LIVEDATAFEEDMESSAGE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_BRAGI)

DESCRIPTOR.services_by_name['Bragi'] = _BRAGI

# @@protoc_insertion_point(module_scope)
