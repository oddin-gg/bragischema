# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: bragi/common.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='bragi/common.proto',
  package='bragi',
  syntax='proto3',
  serialized_options=b'\n\017com.oddin.bragiZ\016oddin.gg/bragi',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x12\x62ragi/common.proto\x12\x05\x62ragi\x1a\x1fgoogle/protobuf/timestamp.proto\"\x8e\x01\n\x12\x41nnouncementUpdate\x12\x11\n\tmatch_urn\x18\x01 \x01(\t\x12\x10\n\x08sequence\x18\x02 \x01(\x04\x12-\n\ttimestamp\x18\x03 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12$\n\x07payload\x18\x04 \x01(\x0b\x32\x13.bragi.Announcement\"\xe3\x01\n\x0c\x41nnouncement\x12.\n\ncreated_at\x18\x01 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12,\n\x07payload\x18\x02 \x01(\x0b\x32\x1b.bragi.Announcement.Payload\x1au\n\x07Payload\x12-\n\x07\x63ontrol\x18\x01 \x01(\x0b\x32\x1a.bragi.ControlAnnouncementH\x00\x12\x30\n\x05\x65rror\x18\x02 \x01(\x0b\x32\x1f.bragi.ControlErrorAnnouncementH\x00\x42\t\n\x07payload\"\xbf\x01\n\x13\x43ontrolAnnouncement\x12@\n\x04type\x18\x01 \x01(\x0e\x32\x32.bragi.ControlAnnouncement.ControlAnnouncementType\x12\x14\n\x07message\x18\x02 \x01(\tH\x00\x88\x01\x01\"D\n\x17\x43ontrolAnnouncementType\x12)\n%CONTROL_ANNOUNCEMENT_TYPE_UNSPECIFIED\x10\x00\x42\n\n\x08_message\"\xd9\x01\n\x18\x43ontrolErrorAnnouncement\x12J\n\x04type\x18\x01 \x01(\x0e\x32<.bragi.ControlErrorAnnouncement.ControlErrorAnnouncementType\x12\x14\n\x07message\x18\x02 \x01(\tH\x00\x88\x01\x01\"O\n\x1c\x43ontrolErrorAnnouncementType\x12/\n+CONTROL_ERROR_ANNOUNCEMENT_TYPE_UNSPECIFIED\x10\x00\x42\n\n\x08_message\"+\n\x04Team\x12\x10\n\x08team_urn\x18\x01 \x01(\t\x12\x11\n\tteam_name\x18\x02 \x01(\t*\xc4\x01\n\nBestOfType\x12\x1c\n\x18\x42\x45ST_OF_TYPE_UNSPECIFIED\x10\x00\x12\x14\n\x10\x42\x45ST_OF_TYPE_BO1\x10\x01\x12\x14\n\x10\x42\x45ST_OF_TYPE_BO2\x10\x02\x12\x14\n\x10\x42\x45ST_OF_TYPE_BO3\x10\x03\x12\x14\n\x10\x42\x45ST_OF_TYPE_BO4\x10\x04\x12\x14\n\x10\x42\x45ST_OF_TYPE_BO5\x10\x05\x12\x14\n\x10\x42\x45ST_OF_TYPE_BO6\x10\x06\x12\x14\n\x10\x42\x45ST_OF_TYPE_BO7\x10\x07*\x93\x01\n\x0fMatchStatusType\x12!\n\x1dMATCH_STATUS_TYPE_UNSPECIFIED\x10\x00\x12!\n\x1dMATCH_STATUS_TYPE_NOT_STARTED\x10\x01\x12\x1a\n\x16MATCH_STATUS_TYPE_LIVE\x10\x02\x12\x1e\n\x1aMATCH_STATUS_TYPE_FINISHED\x10\x03*\x84\x01\n\nDataStatus\x12\x1b\n\x17\x44\x41TA_STATUS_UNSPECIFIED\x10\x00\x12\x1d\n\x19\x44\x41TA_STATUS_DISABLED_DATA\x10\x01\x12\x1e\n\x1a\x44\x41TA_STATUS_CORRUPTED_DATA\x10\x02\x12\x1a\n\x16\x44\x41TA_STATUS_VALID_DATA\x10\x03\x42!\n\x0f\x63om.oddin.bragiZ\x0eoddin.gg/bragib\x06proto3'
  ,
  dependencies=[google_dot_protobuf_dot_timestamp__pb2.DESCRIPTOR,])

_BESTOFTYPE = _descriptor.EnumDescriptor(
  name='BestOfType',
  full_name='bragi.BestOfType',
  filename=None,
  file=DESCRIPTOR,
  create_key=_descriptor._internal_create_key,
  values=[
    _descriptor.EnumValueDescriptor(
      name='BEST_OF_TYPE_UNSPECIFIED', index=0, number=0,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='BEST_OF_TYPE_BO1', index=1, number=1,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='BEST_OF_TYPE_BO2', index=2, number=2,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='BEST_OF_TYPE_BO3', index=3, number=3,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='BEST_OF_TYPE_BO4', index=4, number=4,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='BEST_OF_TYPE_BO5', index=5, number=5,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='BEST_OF_TYPE_BO6', index=6, number=6,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='BEST_OF_TYPE_BO7', index=7, number=7,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=897,
  serialized_end=1093,
)
_sym_db.RegisterEnumDescriptor(_BESTOFTYPE)

BestOfType = enum_type_wrapper.EnumTypeWrapper(_BESTOFTYPE)
_MATCHSTATUSTYPE = _descriptor.EnumDescriptor(
  name='MatchStatusType',
  full_name='bragi.MatchStatusType',
  filename=None,
  file=DESCRIPTOR,
  create_key=_descriptor._internal_create_key,
  values=[
    _descriptor.EnumValueDescriptor(
      name='MATCH_STATUS_TYPE_UNSPECIFIED', index=0, number=0,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='MATCH_STATUS_TYPE_NOT_STARTED', index=1, number=1,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='MATCH_STATUS_TYPE_LIVE', index=2, number=2,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='MATCH_STATUS_TYPE_FINISHED', index=3, number=3,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=1096,
  serialized_end=1243,
)
_sym_db.RegisterEnumDescriptor(_MATCHSTATUSTYPE)

MatchStatusType = enum_type_wrapper.EnumTypeWrapper(_MATCHSTATUSTYPE)
_DATASTATUS = _descriptor.EnumDescriptor(
  name='DataStatus',
  full_name='bragi.DataStatus',
  filename=None,
  file=DESCRIPTOR,
  create_key=_descriptor._internal_create_key,
  values=[
    _descriptor.EnumValueDescriptor(
      name='DATA_STATUS_UNSPECIFIED', index=0, number=0,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='DATA_STATUS_DISABLED_DATA', index=1, number=1,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='DATA_STATUS_CORRUPTED_DATA', index=2, number=2,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='DATA_STATUS_VALID_DATA', index=3, number=3,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=1246,
  serialized_end=1378,
)
_sym_db.RegisterEnumDescriptor(_DATASTATUS)

DataStatus = enum_type_wrapper.EnumTypeWrapper(_DATASTATUS)
BEST_OF_TYPE_UNSPECIFIED = 0
BEST_OF_TYPE_BO1 = 1
BEST_OF_TYPE_BO2 = 2
BEST_OF_TYPE_BO3 = 3
BEST_OF_TYPE_BO4 = 4
BEST_OF_TYPE_BO5 = 5
BEST_OF_TYPE_BO6 = 6
BEST_OF_TYPE_BO7 = 7
MATCH_STATUS_TYPE_UNSPECIFIED = 0
MATCH_STATUS_TYPE_NOT_STARTED = 1
MATCH_STATUS_TYPE_LIVE = 2
MATCH_STATUS_TYPE_FINISHED = 3
DATA_STATUS_UNSPECIFIED = 0
DATA_STATUS_DISABLED_DATA = 1
DATA_STATUS_CORRUPTED_DATA = 2
DATA_STATUS_VALID_DATA = 3


_CONTROLANNOUNCEMENT_CONTROLANNOUNCEMENTTYPE = _descriptor.EnumDescriptor(
  name='ControlAnnouncementType',
  full_name='bragi.ControlAnnouncement.ControlAnnouncementType',
  filename=None,
  file=DESCRIPTOR,
  create_key=_descriptor._internal_create_key,
  values=[
    _descriptor.EnumValueDescriptor(
      name='CONTROL_ANNOUNCEMENT_TYPE_UNSPECIFIED', index=0, number=0,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=549,
  serialized_end=617,
)
_sym_db.RegisterEnumDescriptor(_CONTROLANNOUNCEMENT_CONTROLANNOUNCEMENTTYPE)

_CONTROLERRORANNOUNCEMENT_CONTROLERRORANNOUNCEMENTTYPE = _descriptor.EnumDescriptor(
  name='ControlErrorAnnouncementType',
  full_name='bragi.ControlErrorAnnouncement.ControlErrorAnnouncementType',
  filename=None,
  file=DESCRIPTOR,
  create_key=_descriptor._internal_create_key,
  values=[
    _descriptor.EnumValueDescriptor(
      name='CONTROL_ERROR_ANNOUNCEMENT_TYPE_UNSPECIFIED', index=0, number=0,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=758,
  serialized_end=837,
)
_sym_db.RegisterEnumDescriptor(_CONTROLERRORANNOUNCEMENT_CONTROLERRORANNOUNCEMENTTYPE)


_ANNOUNCEMENTUPDATE = _descriptor.Descriptor(
  name='AnnouncementUpdate',
  full_name='bragi.AnnouncementUpdate',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='match_urn', full_name='bragi.AnnouncementUpdate.match_urn', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='sequence', full_name='bragi.AnnouncementUpdate.sequence', index=1,
      number=2, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='timestamp', full_name='bragi.AnnouncementUpdate.timestamp', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='payload', full_name='bragi.AnnouncementUpdate.payload', index=3,
      number=4, type=11, cpp_type=10, label=1,
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
  serialized_start=63,
  serialized_end=205,
)


_ANNOUNCEMENT_PAYLOAD = _descriptor.Descriptor(
  name='Payload',
  full_name='bragi.Announcement.Payload',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='control', full_name='bragi.Announcement.Payload.control', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='error', full_name='bragi.Announcement.Payload.error', index=1,
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
      name='payload', full_name='bragi.Announcement.Payload.payload',
      index=0, containing_type=None,
      create_key=_descriptor._internal_create_key,
    fields=[]),
  ],
  serialized_start=318,
  serialized_end=435,
)

_ANNOUNCEMENT = _descriptor.Descriptor(
  name='Announcement',
  full_name='bragi.Announcement',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='created_at', full_name='bragi.Announcement.created_at', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='payload', full_name='bragi.Announcement.payload', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_ANNOUNCEMENT_PAYLOAD, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=208,
  serialized_end=435,
)


_CONTROLANNOUNCEMENT = _descriptor.Descriptor(
  name='ControlAnnouncement',
  full_name='bragi.ControlAnnouncement',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='type', full_name='bragi.ControlAnnouncement.type', index=0,
      number=1, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='message', full_name='bragi.ControlAnnouncement.message', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _CONTROLANNOUNCEMENT_CONTROLANNOUNCEMENTTYPE,
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
    _descriptor.OneofDescriptor(
      name='_message', full_name='bragi.ControlAnnouncement._message',
      index=0, containing_type=None,
      create_key=_descriptor._internal_create_key,
    fields=[]),
  ],
  serialized_start=438,
  serialized_end=629,
)


_CONTROLERRORANNOUNCEMENT = _descriptor.Descriptor(
  name='ControlErrorAnnouncement',
  full_name='bragi.ControlErrorAnnouncement',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='type', full_name='bragi.ControlErrorAnnouncement.type', index=0,
      number=1, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='message', full_name='bragi.ControlErrorAnnouncement.message', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _CONTROLERRORANNOUNCEMENT_CONTROLERRORANNOUNCEMENTTYPE,
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
    _descriptor.OneofDescriptor(
      name='_message', full_name='bragi.ControlErrorAnnouncement._message',
      index=0, containing_type=None,
      create_key=_descriptor._internal_create_key,
    fields=[]),
  ],
  serialized_start=632,
  serialized_end=849,
)


_TEAM = _descriptor.Descriptor(
  name='Team',
  full_name='bragi.Team',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='team_urn', full_name='bragi.Team.team_urn', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='team_name', full_name='bragi.Team.team_name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
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
  serialized_start=851,
  serialized_end=894,
)

_ANNOUNCEMENTUPDATE.fields_by_name['timestamp'].message_type = google_dot_protobuf_dot_timestamp__pb2._TIMESTAMP
_ANNOUNCEMENTUPDATE.fields_by_name['payload'].message_type = _ANNOUNCEMENT
_ANNOUNCEMENT_PAYLOAD.fields_by_name['control'].message_type = _CONTROLANNOUNCEMENT
_ANNOUNCEMENT_PAYLOAD.fields_by_name['error'].message_type = _CONTROLERRORANNOUNCEMENT
_ANNOUNCEMENT_PAYLOAD.containing_type = _ANNOUNCEMENT
_ANNOUNCEMENT_PAYLOAD.oneofs_by_name['payload'].fields.append(
  _ANNOUNCEMENT_PAYLOAD.fields_by_name['control'])
_ANNOUNCEMENT_PAYLOAD.fields_by_name['control'].containing_oneof = _ANNOUNCEMENT_PAYLOAD.oneofs_by_name['payload']
_ANNOUNCEMENT_PAYLOAD.oneofs_by_name['payload'].fields.append(
  _ANNOUNCEMENT_PAYLOAD.fields_by_name['error'])
_ANNOUNCEMENT_PAYLOAD.fields_by_name['error'].containing_oneof = _ANNOUNCEMENT_PAYLOAD.oneofs_by_name['payload']
_ANNOUNCEMENT.fields_by_name['created_at'].message_type = google_dot_protobuf_dot_timestamp__pb2._TIMESTAMP
_ANNOUNCEMENT.fields_by_name['payload'].message_type = _ANNOUNCEMENT_PAYLOAD
_CONTROLANNOUNCEMENT.fields_by_name['type'].enum_type = _CONTROLANNOUNCEMENT_CONTROLANNOUNCEMENTTYPE
_CONTROLANNOUNCEMENT_CONTROLANNOUNCEMENTTYPE.containing_type = _CONTROLANNOUNCEMENT
_CONTROLANNOUNCEMENT.oneofs_by_name['_message'].fields.append(
  _CONTROLANNOUNCEMENT.fields_by_name['message'])
_CONTROLANNOUNCEMENT.fields_by_name['message'].containing_oneof = _CONTROLANNOUNCEMENT.oneofs_by_name['_message']
_CONTROLERRORANNOUNCEMENT.fields_by_name['type'].enum_type = _CONTROLERRORANNOUNCEMENT_CONTROLERRORANNOUNCEMENTTYPE
_CONTROLERRORANNOUNCEMENT_CONTROLERRORANNOUNCEMENTTYPE.containing_type = _CONTROLERRORANNOUNCEMENT
_CONTROLERRORANNOUNCEMENT.oneofs_by_name['_message'].fields.append(
  _CONTROLERRORANNOUNCEMENT.fields_by_name['message'])
_CONTROLERRORANNOUNCEMENT.fields_by_name['message'].containing_oneof = _CONTROLERRORANNOUNCEMENT.oneofs_by_name['_message']
DESCRIPTOR.message_types_by_name['AnnouncementUpdate'] = _ANNOUNCEMENTUPDATE
DESCRIPTOR.message_types_by_name['Announcement'] = _ANNOUNCEMENT
DESCRIPTOR.message_types_by_name['ControlAnnouncement'] = _CONTROLANNOUNCEMENT
DESCRIPTOR.message_types_by_name['ControlErrorAnnouncement'] = _CONTROLERRORANNOUNCEMENT
DESCRIPTOR.message_types_by_name['Team'] = _TEAM
DESCRIPTOR.enum_types_by_name['BestOfType'] = _BESTOFTYPE
DESCRIPTOR.enum_types_by_name['MatchStatusType'] = _MATCHSTATUSTYPE
DESCRIPTOR.enum_types_by_name['DataStatus'] = _DATASTATUS
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

AnnouncementUpdate = _reflection.GeneratedProtocolMessageType('AnnouncementUpdate', (_message.Message,), {
  'DESCRIPTOR' : _ANNOUNCEMENTUPDATE,
  '__module__' : 'bragi.common_pb2'
  # @@protoc_insertion_point(class_scope:bragi.AnnouncementUpdate)
  })
_sym_db.RegisterMessage(AnnouncementUpdate)

Announcement = _reflection.GeneratedProtocolMessageType('Announcement', (_message.Message,), {

  'Payload' : _reflection.GeneratedProtocolMessageType('Payload', (_message.Message,), {
    'DESCRIPTOR' : _ANNOUNCEMENT_PAYLOAD,
    '__module__' : 'bragi.common_pb2'
    # @@protoc_insertion_point(class_scope:bragi.Announcement.Payload)
    })
  ,
  'DESCRIPTOR' : _ANNOUNCEMENT,
  '__module__' : 'bragi.common_pb2'
  # @@protoc_insertion_point(class_scope:bragi.Announcement)
  })
_sym_db.RegisterMessage(Announcement)
_sym_db.RegisterMessage(Announcement.Payload)

ControlAnnouncement = _reflection.GeneratedProtocolMessageType('ControlAnnouncement', (_message.Message,), {
  'DESCRIPTOR' : _CONTROLANNOUNCEMENT,
  '__module__' : 'bragi.common_pb2'
  # @@protoc_insertion_point(class_scope:bragi.ControlAnnouncement)
  })
_sym_db.RegisterMessage(ControlAnnouncement)

ControlErrorAnnouncement = _reflection.GeneratedProtocolMessageType('ControlErrorAnnouncement', (_message.Message,), {
  'DESCRIPTOR' : _CONTROLERRORANNOUNCEMENT,
  '__module__' : 'bragi.common_pb2'
  # @@protoc_insertion_point(class_scope:bragi.ControlErrorAnnouncement)
  })
_sym_db.RegisterMessage(ControlErrorAnnouncement)

Team = _reflection.GeneratedProtocolMessageType('Team', (_message.Message,), {
  'DESCRIPTOR' : _TEAM,
  '__module__' : 'bragi.common_pb2'
  # @@protoc_insertion_point(class_scope:bragi.Team)
  })
_sym_db.RegisterMessage(Team)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
