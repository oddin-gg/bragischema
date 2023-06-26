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
from bragi_schema.bragi import csgo_pb2 as bragi_dot_csgo__pb2
from bragi_schema.bragi import dota2_pb2 as bragi_dot_dota2__pb2
from bragi_schema.bragi import rush_soccer_pb2 as bragi_dot_rush__soccer__pb2
from bragi_schema.bragi import lol_pb2 as bragi_dot_lol__pb2
from bragi_schema.bragi import rush_basketball_pb2 as bragi_dot_rush__basketball__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='bragi/bragi_service.proto',
  package='bragi',
  syntax='proto3',
  serialized_options=b'\n\017com.oddin.bragiZ\016oddin.gg/bragi',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x19\x62ragi/bragi_service.proto\x12\x05\x62ragi\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x12\x62ragi/common.proto\x1a\x10\x62ragi/csgo.proto\x1a\x11\x62ragi/dota2.proto\x1a\x17\x62ragi/rush_soccer.proto\x1a\x0f\x62ragi/lol.proto\x1a\x1b\x62ragi/rush_basketball.proto\"O\n\x13LiveDataFeedRequest\x12.\n\x05\x61\x66ter\x18\x01 \x01(\x0b\x32\x1a.google.protobuf.TimestampH\x00\x88\x01\x01\x42\x08\n\x06_after\"m\n\x13LiveDataFeedMessage\x12%\n\tkeepalive\x18\x01 \x01(\x0b\x32\x10.bragi.KeepAliveH\x00\x12$\n\x05match\x18\x02 \x01(\x0b\x32\x13.bragi.MatchMessageH\x00\x42\t\n\x07message\":\n\tKeepAlive\x12-\n\ttimestamp\x18\x01 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\"\xec\x02\n\x0cMatchMessage\x12\x31\n\x0c\x61nnouncement\x18\x01 \x01(\x0b\x32\x19.bragi.AnnouncementUpdateH\x00\x12\'\n\x04\x63sgo\x18\x02 \x01(\x0b\x32\x17.bragi.CsgoMatchMessageH\x00\x12/\n\x0c\x63sgo_wingman\x18\x03 \x01(\x0b\x32\x17.bragi.CsgoMatchMessageH\x00\x12)\n\x05\x64ota2\x18\x04 \x01(\x0b\x32\x18.bragi.Dota2MatchMessageH\x00\x12\x34\n\x0brush_soccer\x18\x05 \x01(\x0b\x32\x1d.bragi.RushSoccerMatchMessageH\x00\x12%\n\x03lol\x18\x06 \x01(\x0b\x32\x16.bragi.LolMatchMessageH\x00\x12<\n\x0frush_basketball\x18\x07 \x01(\x0b\x32!.bragi.RushBasketballMatchMessageH\x00\x42\t\n\x07message\"\xc1\x02\n\rMatchSnapshot\x12(\n\x04\x63sgo\x18\x01 \x01(\x0b\x32\x18.bragi.CsgoMatchSnapshotH\x00\x12\x30\n\x0c\x63sgo_wingman\x18\x02 \x01(\x0b\x32\x18.bragi.CsgoMatchSnapshotH\x00\x12*\n\x05\x64ota2\x18\x03 \x01(\x0b\x32\x19.bragi.Dota2MatchSnapshotH\x00\x12\x35\n\x0brush_soccer\x18\x04 \x01(\x0b\x32\x1e.bragi.RushSoccerMatchSnapshotH\x00\x12&\n\x03lol\x18\x05 \x01(\x0b\x32\x17.bragi.LolMatchSnapshotH\x00\x12=\n\x0frush_basketball\x18\x06 \x01(\x0b\x32\".bragi.RushBasketballMatchSnapshotH\x00\x42\n\n\x08snapshot\"\xa9\x02\n\nMatchState\x12%\n\x04\x63sgo\x18\x01 \x01(\x0b\x32\x15.bragi.CsgoMatchStateH\x00\x12-\n\x0c\x63sgo_wingman\x18\x02 \x01(\x0b\x32\x15.bragi.CsgoMatchStateH\x00\x12\'\n\x05\x64ota2\x18\x03 \x01(\x0b\x32\x16.bragi.Dota2MatchStateH\x00\x12\x32\n\x0brush_soccer\x18\x04 \x01(\x0b\x32\x1b.bragi.RushSoccerMatchStateH\x00\x12#\n\x03lol\x18\x05 \x01(\x0b\x32\x14.bragi.LolMatchStateH\x00\x12:\n\x0frush_basketball\x18\x06 \x01(\x0b\x32\x1f.bragi.RushBasketballMatchStateH\x00\x42\x07\n\x05state2S\n\x05\x42ragi\x12J\n\x0cLiveDataFeed\x12\x1a.bragi.LiveDataFeedRequest\x1a\x1a.bragi.LiveDataFeedMessage\"\x00\x30\x01\x42!\n\x0f\x63om.oddin.bragiZ\x0eoddin.gg/bragib\x06proto3'
  ,
  dependencies=[google_dot_protobuf_dot_timestamp__pb2.DESCRIPTOR,bragi_dot_common__pb2.DESCRIPTOR,bragi_dot_csgo__pb2.DESCRIPTOR,bragi_dot_dota2__pb2.DESCRIPTOR,bragi_dot_rush__soccer__pb2.DESCRIPTOR,bragi_dot_lol__pb2.DESCRIPTOR,bragi_dot_rush__basketball__pb2.DESCRIPTOR,])




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
  serialized_start=197,
  serialized_end=276,
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
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=278,
  serialized_end=387,
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
  serialized_start=389,
  serialized_end=447,
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
      name='csgo', full_name='bragi.MatchMessage.csgo', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='csgo_wingman', full_name='bragi.MatchMessage.csgo_wingman', index=2,
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
  serialized_start=450,
  serialized_end=814,
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
      name='csgo', full_name='bragi.MatchSnapshot.csgo', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='csgo_wingman', full_name='bragi.MatchSnapshot.csgo_wingman', index=1,
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
  serialized_start=817,
  serialized_end=1138,
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
      name='csgo', full_name='bragi.MatchState.csgo', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='csgo_wingman', full_name='bragi.MatchState.csgo_wingman', index=1,
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
  serialized_start=1141,
  serialized_end=1438,
)

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
_MATCHMESSAGE.fields_by_name['csgo'].message_type = bragi_dot_csgo__pb2._CSGOMATCHMESSAGE
_MATCHMESSAGE.fields_by_name['csgo_wingman'].message_type = bragi_dot_csgo__pb2._CSGOMATCHMESSAGE
_MATCHMESSAGE.fields_by_name['dota2'].message_type = bragi_dot_dota2__pb2._DOTA2MATCHMESSAGE
_MATCHMESSAGE.fields_by_name['rush_soccer'].message_type = bragi_dot_rush__soccer__pb2._RUSHSOCCERMATCHMESSAGE
_MATCHMESSAGE.fields_by_name['lol'].message_type = bragi_dot_lol__pb2._LOLMATCHMESSAGE
_MATCHMESSAGE.fields_by_name['rush_basketball'].message_type = bragi_dot_rush__basketball__pb2._RUSHBASKETBALLMATCHMESSAGE
_MATCHMESSAGE.oneofs_by_name['message'].fields.append(
  _MATCHMESSAGE.fields_by_name['announcement'])
_MATCHMESSAGE.fields_by_name['announcement'].containing_oneof = _MATCHMESSAGE.oneofs_by_name['message']
_MATCHMESSAGE.oneofs_by_name['message'].fields.append(
  _MATCHMESSAGE.fields_by_name['csgo'])
_MATCHMESSAGE.fields_by_name['csgo'].containing_oneof = _MATCHMESSAGE.oneofs_by_name['message']
_MATCHMESSAGE.oneofs_by_name['message'].fields.append(
  _MATCHMESSAGE.fields_by_name['csgo_wingman'])
_MATCHMESSAGE.fields_by_name['csgo_wingman'].containing_oneof = _MATCHMESSAGE.oneofs_by_name['message']
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
_MATCHSNAPSHOT.fields_by_name['csgo'].message_type = bragi_dot_csgo__pb2._CSGOMATCHSNAPSHOT
_MATCHSNAPSHOT.fields_by_name['csgo_wingman'].message_type = bragi_dot_csgo__pb2._CSGOMATCHSNAPSHOT
_MATCHSNAPSHOT.fields_by_name['dota2'].message_type = bragi_dot_dota2__pb2._DOTA2MATCHSNAPSHOT
_MATCHSNAPSHOT.fields_by_name['rush_soccer'].message_type = bragi_dot_rush__soccer__pb2._RUSHSOCCERMATCHSNAPSHOT
_MATCHSNAPSHOT.fields_by_name['lol'].message_type = bragi_dot_lol__pb2._LOLMATCHSNAPSHOT
_MATCHSNAPSHOT.fields_by_name['rush_basketball'].message_type = bragi_dot_rush__basketball__pb2._RUSHBASKETBALLMATCHSNAPSHOT
_MATCHSNAPSHOT.oneofs_by_name['snapshot'].fields.append(
  _MATCHSNAPSHOT.fields_by_name['csgo'])
_MATCHSNAPSHOT.fields_by_name['csgo'].containing_oneof = _MATCHSNAPSHOT.oneofs_by_name['snapshot']
_MATCHSNAPSHOT.oneofs_by_name['snapshot'].fields.append(
  _MATCHSNAPSHOT.fields_by_name['csgo_wingman'])
_MATCHSNAPSHOT.fields_by_name['csgo_wingman'].containing_oneof = _MATCHSNAPSHOT.oneofs_by_name['snapshot']
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
_MATCHSTATE.fields_by_name['csgo'].message_type = bragi_dot_csgo__pb2._CSGOMATCHSTATE
_MATCHSTATE.fields_by_name['csgo_wingman'].message_type = bragi_dot_csgo__pb2._CSGOMATCHSTATE
_MATCHSTATE.fields_by_name['dota2'].message_type = bragi_dot_dota2__pb2._DOTA2MATCHSTATE
_MATCHSTATE.fields_by_name['rush_soccer'].message_type = bragi_dot_rush__soccer__pb2._RUSHSOCCERMATCHSTATE
_MATCHSTATE.fields_by_name['lol'].message_type = bragi_dot_lol__pb2._LOLMATCHSTATE
_MATCHSTATE.fields_by_name['rush_basketball'].message_type = bragi_dot_rush__basketball__pb2._RUSHBASKETBALLMATCHSTATE
_MATCHSTATE.oneofs_by_name['state'].fields.append(
  _MATCHSTATE.fields_by_name['csgo'])
_MATCHSTATE.fields_by_name['csgo'].containing_oneof = _MATCHSTATE.oneofs_by_name['state']
_MATCHSTATE.oneofs_by_name['state'].fields.append(
  _MATCHSTATE.fields_by_name['csgo_wingman'])
_MATCHSTATE.fields_by_name['csgo_wingman'].containing_oneof = _MATCHSTATE.oneofs_by_name['state']
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
DESCRIPTOR.message_types_by_name['LiveDataFeedRequest'] = _LIVEDATAFEEDREQUEST
DESCRIPTOR.message_types_by_name['LiveDataFeedMessage'] = _LIVEDATAFEEDMESSAGE
DESCRIPTOR.message_types_by_name['KeepAlive'] = _KEEPALIVE
DESCRIPTOR.message_types_by_name['MatchMessage'] = _MATCHMESSAGE
DESCRIPTOR.message_types_by_name['MatchSnapshot'] = _MATCHSNAPSHOT
DESCRIPTOR.message_types_by_name['MatchState'] = _MATCHSTATE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

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

_BRAGI = _descriptor.ServiceDescriptor(
  name='Bragi',
  full_name='bragi.Bragi',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1440,
  serialized_end=1523,
  methods=[
  _descriptor.MethodDescriptor(
    name='LiveDataFeed',
    full_name='bragi.Bragi.LiveDataFeed',
    index=0,
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
