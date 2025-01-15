from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Sport(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    SPORT_UNSPECIFIED: _ClassVar[Sport]
    SPORT_CS2: _ClassVar[Sport]
    SPORT_DOTA2: _ClassVar[Sport]
    SPORT_LOL: _ClassVar[Sport]
    SPORT_VALORANT: _ClassVar[Sport]
    SPORT_RUSH_SOCCER: _ClassVar[Sport]
    SPORT_RUSH_BASKETBALL: _ClassVar[Sport]

class BestOfType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    BEST_OF_TYPE_UNSPECIFIED: _ClassVar[BestOfType]
    BEST_OF_TYPE_BO1: _ClassVar[BestOfType]
    BEST_OF_TYPE_BO2: _ClassVar[BestOfType]
    BEST_OF_TYPE_BO3: _ClassVar[BestOfType]
    BEST_OF_TYPE_BO4: _ClassVar[BestOfType]
    BEST_OF_TYPE_BO5: _ClassVar[BestOfType]
    BEST_OF_TYPE_BO6: _ClassVar[BestOfType]
    BEST_OF_TYPE_BO7: _ClassVar[BestOfType]

class MatchStatusType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    MATCH_STATUS_TYPE_UNSPECIFIED: _ClassVar[MatchStatusType]
    MATCH_STATUS_TYPE_NOT_STARTED: _ClassVar[MatchStatusType]
    MATCH_STATUS_TYPE_LIVE: _ClassVar[MatchStatusType]
    MATCH_STATUS_TYPE_FINISHED: _ClassVar[MatchStatusType]
    MATCH_STATUS_TYPE_CANCELED: _ClassVar[MatchStatusType]
    MATCH_STATUS_TYPE_PLACEHOLDER: _ClassVar[MatchStatusType]

class DataStatus(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    DATA_STATUS_UNSPECIFIED: _ClassVar[DataStatus]
    DATA_STATUS_DISABLED_DATA: _ClassVar[DataStatus]
    DATA_STATUS_CORRUPTED_DATA: _ClassVar[DataStatus]
    DATA_STATUS_VALID_DATA: _ClassVar[DataStatus]
SPORT_UNSPECIFIED: Sport
SPORT_CS2: Sport
SPORT_DOTA2: Sport
SPORT_LOL: Sport
SPORT_VALORANT: Sport
SPORT_RUSH_SOCCER: Sport
SPORT_RUSH_BASKETBALL: Sport
BEST_OF_TYPE_UNSPECIFIED: BestOfType
BEST_OF_TYPE_BO1: BestOfType
BEST_OF_TYPE_BO2: BestOfType
BEST_OF_TYPE_BO3: BestOfType
BEST_OF_TYPE_BO4: BestOfType
BEST_OF_TYPE_BO5: BestOfType
BEST_OF_TYPE_BO6: BestOfType
BEST_OF_TYPE_BO7: BestOfType
MATCH_STATUS_TYPE_UNSPECIFIED: MatchStatusType
MATCH_STATUS_TYPE_NOT_STARTED: MatchStatusType
MATCH_STATUS_TYPE_LIVE: MatchStatusType
MATCH_STATUS_TYPE_FINISHED: MatchStatusType
MATCH_STATUS_TYPE_CANCELED: MatchStatusType
MATCH_STATUS_TYPE_PLACEHOLDER: MatchStatusType
DATA_STATUS_UNSPECIFIED: DataStatus
DATA_STATUS_DISABLED_DATA: DataStatus
DATA_STATUS_CORRUPTED_DATA: DataStatus
DATA_STATUS_VALID_DATA: DataStatus

class AnnouncementUpdate(_message.Message):
    __slots__ = ["match_urn", "sequence", "timestamp", "payload"]
    MATCH_URN_FIELD_NUMBER: _ClassVar[int]
    SEQUENCE_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    match_urn: str
    sequence: int
    timestamp: _timestamp_pb2.Timestamp
    payload: Announcement
    def __init__(self, match_urn: _Optional[str] = ..., sequence: _Optional[int] = ..., timestamp: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., payload: _Optional[_Union[Announcement, _Mapping]] = ...) -> None: ...

class Announcement(_message.Message):
    __slots__ = ["created_at", "payload"]
    class Payload(_message.Message):
        __slots__ = ["control", "error"]
        CONTROL_FIELD_NUMBER: _ClassVar[int]
        ERROR_FIELD_NUMBER: _ClassVar[int]
        control: ControlAnnouncement
        error: ControlErrorAnnouncement
        def __init__(self, control: _Optional[_Union[ControlAnnouncement, _Mapping]] = ..., error: _Optional[_Union[ControlErrorAnnouncement, _Mapping]] = ...) -> None: ...
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    created_at: _timestamp_pb2.Timestamp
    payload: Announcement.Payload
    def __init__(self, created_at: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., payload: _Optional[_Union[Announcement.Payload, _Mapping]] = ...) -> None: ...

class ControlAnnouncement(_message.Message):
    __slots__ = ["type", "message"]
    class ControlAnnouncementType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
        CONTROL_ANNOUNCEMENT_TYPE_UNSPECIFIED: _ClassVar[ControlAnnouncement.ControlAnnouncementType]
    CONTROL_ANNOUNCEMENT_TYPE_UNSPECIFIED: ControlAnnouncement.ControlAnnouncementType
    TYPE_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    type: ControlAnnouncement.ControlAnnouncementType
    message: str
    def __init__(self, type: _Optional[_Union[ControlAnnouncement.ControlAnnouncementType, str]] = ..., message: _Optional[str] = ...) -> None: ...

class ControlErrorAnnouncement(_message.Message):
    __slots__ = ["type", "message"]
    class ControlErrorAnnouncementType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
        CONTROL_ERROR_ANNOUNCEMENT_TYPE_UNSPECIFIED: _ClassVar[ControlErrorAnnouncement.ControlErrorAnnouncementType]
    CONTROL_ERROR_ANNOUNCEMENT_TYPE_UNSPECIFIED: ControlErrorAnnouncement.ControlErrorAnnouncementType
    TYPE_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    type: ControlErrorAnnouncement.ControlErrorAnnouncementType
    message: str
    def __init__(self, type: _Optional[_Union[ControlErrorAnnouncement.ControlErrorAnnouncementType, str]] = ..., message: _Optional[str] = ...) -> None: ...

class MatchTimeline(_message.Message):
    __slots__ = ["matches"]
    MATCHES_FIELD_NUMBER: _ClassVar[int]
    matches: _containers.RepeatedCompositeFieldContainer[Match]
    def __init__(self, matches: _Optional[_Iterable[_Union[Match, _Mapping]]] = ...) -> None: ...

class Match(_message.Message):
    __slots__ = ["match_urn", "tournament_urn", "sport", "home_team_urn", "away_team_urn", "home_score", "away_score", "match_status", "plannet_start", "tournament", "teams", "players"]
    MATCH_URN_FIELD_NUMBER: _ClassVar[int]
    TOURNAMENT_URN_FIELD_NUMBER: _ClassVar[int]
    SPORT_FIELD_NUMBER: _ClassVar[int]
    HOME_TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    AWAY_TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    HOME_SCORE_FIELD_NUMBER: _ClassVar[int]
    AWAY_SCORE_FIELD_NUMBER: _ClassVar[int]
    MATCH_STATUS_FIELD_NUMBER: _ClassVar[int]
    PLANNET_START_FIELD_NUMBER: _ClassVar[int]
    TOURNAMENT_FIELD_NUMBER: _ClassVar[int]
    TEAMS_FIELD_NUMBER: _ClassVar[int]
    PLAYERS_FIELD_NUMBER: _ClassVar[int]
    match_urn: str
    tournament_urn: str
    sport: Sport
    home_team_urn: str
    away_team_urn: str
    home_score: int
    away_score: int
    match_status: MatchStatusType
    plannet_start: _timestamp_pb2.Timestamp
    tournament: Tournament
    teams: _containers.RepeatedCompositeFieldContainer[Team]
    players: _containers.RepeatedCompositeFieldContainer[Player]
    def __init__(self, match_urn: _Optional[str] = ..., tournament_urn: _Optional[str] = ..., sport: _Optional[_Union[Sport, str]] = ..., home_team_urn: _Optional[str] = ..., away_team_urn: _Optional[str] = ..., home_score: _Optional[int] = ..., away_score: _Optional[int] = ..., match_status: _Optional[_Union[MatchStatusType, str]] = ..., plannet_start: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., tournament: _Optional[_Union[Tournament, _Mapping]] = ..., teams: _Optional[_Iterable[_Union[Team, _Mapping]]] = ..., players: _Optional[_Iterable[_Union[Player, _Mapping]]] = ...) -> None: ...

class Tournament(_message.Message):
    __slots__ = ["urn", "name"]
    URN_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    urn: str
    name: str
    def __init__(self, urn: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class Team(_message.Message):
    __slots__ = ["urn", "name", "is_home"]
    URN_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    IS_HOME_FIELD_NUMBER: _ClassVar[int]
    urn: str
    name: str
    is_home: bool
    def __init__(self, urn: _Optional[str] = ..., name: _Optional[str] = ..., is_home: bool = ...) -> None: ...

class Player(_message.Message):
    __slots__ = ["urn", "nickname", "team_urn"]
    URN_FIELD_NUMBER: _ClassVar[int]
    NICKNAME_FIELD_NUMBER: _ClassVar[int]
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    urn: str
    nickname: str
    team_urn: str
    def __init__(self, urn: _Optional[str] = ..., nickname: _Optional[str] = ..., team_urn: _Optional[str] = ...) -> None: ...
