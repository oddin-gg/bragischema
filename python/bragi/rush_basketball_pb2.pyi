from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import duration_pb2 as _duration_pb2
from bragi import common_pb2 as _common_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class RushBasketballEventType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    RUSH_BASKETBALL_EVENT_TYPE_UNSPECIFIED: _ClassVar[RushBasketballEventType]
    RUSH_BASKETBALL_EVENT_TYPE_THREE_POINTER: _ClassVar[RushBasketballEventType]
    RUSH_BASKETBALL_EVENT_TYPE_TWO_POINTER: _ClassVar[RushBasketballEventType]
    RUSH_BASKETBALL_EVENT_TYPE_FREE_THROW_SUCCESS: _ClassVar[RushBasketballEventType]
    RUSH_BASKETBALL_EVENT_TYPE_FREE_THROW_MISS: _ClassVar[RushBasketballEventType]
    RUSH_BASKETBALL_EVENT_TYPE_FOUL: _ClassVar[RushBasketballEventType]
    RUSH_BASKETBALL_EVENT_TYPE_PERIOD_CHANGE: _ClassVar[RushBasketballEventType]

class RushBasketballPeriod(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    RUSH_BASKETBALL_PERIOD_UNSPECIFIED: _ClassVar[RushBasketballPeriod]
    RUSH_BASKETBALL_PERIOD_QUARTER_1: _ClassVar[RushBasketballPeriod]
    RUSH_BASKETBALL_PERIOD_QUARTER_2: _ClassVar[RushBasketballPeriod]
    RUSH_BASKETBALL_PERIOD_QUARTER_3: _ClassVar[RushBasketballPeriod]
    RUSH_BASKETBALL_PERIOD_QUARTER_4: _ClassVar[RushBasketballPeriod]
    RUSH_BASKETBALL_PERIOD_OVERTIME: _ClassVar[RushBasketballPeriod]
    RUSH_BASKETBALL_PERIOD_OVERTIME_1: _ClassVar[RushBasketballPeriod]
    RUSH_BASKETBALL_PERIOD_OVERTIME_2: _ClassVar[RushBasketballPeriod]
    RUSH_BASKETBALL_PERIOD_OVERTIME_3: _ClassVar[RushBasketballPeriod]
    RUSH_BASKETBALL_PERIOD_OVERTIME_4: _ClassVar[RushBasketballPeriod]
    RUSH_BASKETBALL_PERIOD_OVERTIME_5: _ClassVar[RushBasketballPeriod]
    RUSH_BASKETBALL_PERIOD_OVERTIME_6: _ClassVar[RushBasketballPeriod]
    RUSH_BASKETBALL_PERIOD_OVERTIME_7: _ClassVar[RushBasketballPeriod]
    RUSH_BASKETBALL_PERIOD_OVERTIME_8: _ClassVar[RushBasketballPeriod]
    RUSH_BASKETBALL_PERIOD_OVERTIME_9: _ClassVar[RushBasketballPeriod]
    RUSH_BASKETBALL_PERIOD_OVERTIME_10: _ClassVar[RushBasketballPeriod]
RUSH_BASKETBALL_EVENT_TYPE_UNSPECIFIED: RushBasketballEventType
RUSH_BASKETBALL_EVENT_TYPE_THREE_POINTER: RushBasketballEventType
RUSH_BASKETBALL_EVENT_TYPE_TWO_POINTER: RushBasketballEventType
RUSH_BASKETBALL_EVENT_TYPE_FREE_THROW_SUCCESS: RushBasketballEventType
RUSH_BASKETBALL_EVENT_TYPE_FREE_THROW_MISS: RushBasketballEventType
RUSH_BASKETBALL_EVENT_TYPE_FOUL: RushBasketballEventType
RUSH_BASKETBALL_EVENT_TYPE_PERIOD_CHANGE: RushBasketballEventType
RUSH_BASKETBALL_PERIOD_UNSPECIFIED: RushBasketballPeriod
RUSH_BASKETBALL_PERIOD_QUARTER_1: RushBasketballPeriod
RUSH_BASKETBALL_PERIOD_QUARTER_2: RushBasketballPeriod
RUSH_BASKETBALL_PERIOD_QUARTER_3: RushBasketballPeriod
RUSH_BASKETBALL_PERIOD_QUARTER_4: RushBasketballPeriod
RUSH_BASKETBALL_PERIOD_OVERTIME: RushBasketballPeriod
RUSH_BASKETBALL_PERIOD_OVERTIME_1: RushBasketballPeriod
RUSH_BASKETBALL_PERIOD_OVERTIME_2: RushBasketballPeriod
RUSH_BASKETBALL_PERIOD_OVERTIME_3: RushBasketballPeriod
RUSH_BASKETBALL_PERIOD_OVERTIME_4: RushBasketballPeriod
RUSH_BASKETBALL_PERIOD_OVERTIME_5: RushBasketballPeriod
RUSH_BASKETBALL_PERIOD_OVERTIME_6: RushBasketballPeriod
RUSH_BASKETBALL_PERIOD_OVERTIME_7: RushBasketballPeriod
RUSH_BASKETBALL_PERIOD_OVERTIME_8: RushBasketballPeriod
RUSH_BASKETBALL_PERIOD_OVERTIME_9: RushBasketballPeriod
RUSH_BASKETBALL_PERIOD_OVERTIME_10: RushBasketballPeriod

class RushBasketballMatchMessage(_message.Message):
    __slots__ = ["match_urn", "sequence", "timestamp", "data_status", "payload"]
    class Payload(_message.Message):
        __slots__ = ["snapshot", "update"]
        SNAPSHOT_FIELD_NUMBER: _ClassVar[int]
        UPDATE_FIELD_NUMBER: _ClassVar[int]
        snapshot: RushBasketballMatchSnapshot
        update: RushBasketballMatchUpdate
        def __init__(self, snapshot: _Optional[_Union[RushBasketballMatchSnapshot, _Mapping]] = ..., update: _Optional[_Union[RushBasketballMatchUpdate, _Mapping]] = ...) -> None: ...
    MATCH_URN_FIELD_NUMBER: _ClassVar[int]
    SEQUENCE_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    DATA_STATUS_FIELD_NUMBER: _ClassVar[int]
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    match_urn: str
    sequence: int
    timestamp: _timestamp_pb2.Timestamp
    data_status: _common_pb2.DataStatus
    payload: RushBasketballMatchMessage.Payload
    def __init__(self, match_urn: _Optional[str] = ..., sequence: _Optional[int] = ..., timestamp: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., data_status: _Optional[_Union[_common_pb2.DataStatus, str]] = ..., payload: _Optional[_Union[RushBasketballMatchMessage.Payload, _Mapping]] = ...) -> None: ...

class RushBasketballMatchSnapshot(_message.Message):
    __slots__ = ["match_urn", "sequence", "timestamp", "data_status", "announcements", "match_state", "tournament"]
    MATCH_URN_FIELD_NUMBER: _ClassVar[int]
    SEQUENCE_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    DATA_STATUS_FIELD_NUMBER: _ClassVar[int]
    ANNOUNCEMENTS_FIELD_NUMBER: _ClassVar[int]
    MATCH_STATE_FIELD_NUMBER: _ClassVar[int]
    TOURNAMENT_FIELD_NUMBER: _ClassVar[int]
    match_urn: str
    sequence: int
    timestamp: _timestamp_pb2.Timestamp
    data_status: _common_pb2.DataStatus
    announcements: _containers.RepeatedCompositeFieldContainer[_common_pb2.Announcement]
    match_state: RushBasketballMatchState
    tournament: _common_pb2.Tournament
    def __init__(self, match_urn: _Optional[str] = ..., sequence: _Optional[int] = ..., timestamp: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., data_status: _Optional[_Union[_common_pb2.DataStatus, str]] = ..., announcements: _Optional[_Iterable[_Union[_common_pb2.Announcement, _Mapping]]] = ..., match_state: _Optional[_Union[RushBasketballMatchState, _Mapping]] = ..., tournament: _Optional[_Union[_common_pb2.Tournament, _Mapping]] = ...) -> None: ...

class RushBasketballMatchUpdate(_message.Message):
    __slots__ = ["payload"]
    class Payload(_message.Message):
        __slots__ = ["match_state", "partial_updates"]
        MATCH_STATE_FIELD_NUMBER: _ClassVar[int]
        PARTIAL_UPDATES_FIELD_NUMBER: _ClassVar[int]
        match_state: RushBasketballMatchState
        partial_updates: RushBasketballMatchStatePartialUpdates
        def __init__(self, match_state: _Optional[_Union[RushBasketballMatchState, _Mapping]] = ..., partial_updates: _Optional[_Union[RushBasketballMatchStatePartialUpdates, _Mapping]] = ...) -> None: ...
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    payload: RushBasketballMatchUpdate.Payload
    def __init__(self, payload: _Optional[_Union[RushBasketballMatchUpdate.Payload, _Mapping]] = ...) -> None: ...

class RushBasketballMatchStatePartialUpdates(_message.Message):
    __slots__ = ["updates"]
    UPDATES_FIELD_NUMBER: _ClassVar[int]
    updates: _containers.RepeatedCompositeFieldContainer[RushBasketballMatchStatePartialUpdate]
    def __init__(self, updates: _Optional[_Iterable[_Union[RushBasketballMatchStatePartialUpdate, _Mapping]]] = ...) -> None: ...

class RushBasketballMatchStatePartialUpdate(_message.Message):
    __slots__ = ["current_map_state", "current_map_state_partial_update", "timeline"]
    CURRENT_MAP_STATE_FIELD_NUMBER: _ClassVar[int]
    CURRENT_MAP_STATE_PARTIAL_UPDATE_FIELD_NUMBER: _ClassVar[int]
    TIMELINE_FIELD_NUMBER: _ClassVar[int]
    current_map_state: RushBasketballCurrentMapState
    current_map_state_partial_update: RushBasketballCurrentMapStatePartialUpdate
    timeline: RushBasketballTimelineState
    def __init__(self, current_map_state: _Optional[_Union[RushBasketballCurrentMapState, _Mapping]] = ..., current_map_state_partial_update: _Optional[_Union[RushBasketballCurrentMapStatePartialUpdate, _Mapping]] = ..., timeline: _Optional[_Union[RushBasketballTimelineState, _Mapping]] = ...) -> None: ...

class RushBasketballMatchState(_message.Message):
    __slots__ = ["match_urn", "match_type", "home_team", "away_team", "match_status", "timeline", "current_map"]
    MATCH_URN_FIELD_NUMBER: _ClassVar[int]
    MATCH_TYPE_FIELD_NUMBER: _ClassVar[int]
    HOME_TEAM_FIELD_NUMBER: _ClassVar[int]
    AWAY_TEAM_FIELD_NUMBER: _ClassVar[int]
    MATCH_STATUS_FIELD_NUMBER: _ClassVar[int]
    TIMELINE_FIELD_NUMBER: _ClassVar[int]
    CURRENT_MAP_FIELD_NUMBER: _ClassVar[int]
    match_urn: str
    match_type: _common_pb2.BestOfType
    home_team: _common_pb2.Team
    away_team: _common_pb2.Team
    match_status: _common_pb2.MatchStatusType
    timeline: RushBasketballTimelineState
    current_map: RushBasketballCurrentMapState
    def __init__(self, match_urn: _Optional[str] = ..., match_type: _Optional[_Union[_common_pb2.BestOfType, str]] = ..., home_team: _Optional[_Union[_common_pb2.Team, _Mapping]] = ..., away_team: _Optional[_Union[_common_pb2.Team, _Mapping]] = ..., match_status: _Optional[_Union[_common_pb2.MatchStatusType, str]] = ..., timeline: _Optional[_Union[RushBasketballTimelineState, _Mapping]] = ..., current_map: _Optional[_Union[RushBasketballCurrentMapState, _Mapping]] = ...) -> None: ...

class RushBasketballTimelineState(_message.Message):
    __slots__ = ["events"]
    EVENTS_FIELD_NUMBER: _ClassVar[int]
    events: _containers.RepeatedCompositeFieldContainer[RushBasketballTimelineEvent]
    def __init__(self, events: _Optional[_Iterable[_Union[RushBasketballTimelineEvent, _Mapping]]] = ...) -> None: ...

class RushBasketballTimelineEvent(_message.Message):
    __slots__ = ["team_urn", "event_type", "remaining_time", "period"]
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    EVENT_TYPE_FIELD_NUMBER: _ClassVar[int]
    REMAINING_TIME_FIELD_NUMBER: _ClassVar[int]
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    team_urn: str
    event_type: RushBasketballEventType
    remaining_time: _duration_pb2.Duration
    period: RushBasketballPeriod
    def __init__(self, team_urn: _Optional[str] = ..., event_type: _Optional[_Union[RushBasketballEventType, str]] = ..., remaining_time: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., period: _Optional[_Union[RushBasketballPeriod, str]] = ...) -> None: ...

class RushBasketballCurrentMapStatePartialUpdate(_message.Message):
    __slots__ = ["game_time", "score", "team_current_map_state", "team_current_map_partial_update"]
    GAME_TIME_FIELD_NUMBER: _ClassVar[int]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    TEAM_CURRENT_MAP_STATE_FIELD_NUMBER: _ClassVar[int]
    TEAM_CURRENT_MAP_PARTIAL_UPDATE_FIELD_NUMBER: _ClassVar[int]
    game_time: RushBasketballCurrentMapTimeState
    score: RushBasketballCurrentMapScoreState
    team_current_map_state: RushBasketballTeamCurrentMapState
    team_current_map_partial_update: RushBasketballTeamCurrentMapStatePartialUpdate
    def __init__(self, game_time: _Optional[_Union[RushBasketballCurrentMapTimeState, _Mapping]] = ..., score: _Optional[_Union[RushBasketballCurrentMapScoreState, _Mapping]] = ..., team_current_map_state: _Optional[_Union[RushBasketballTeamCurrentMapState, _Mapping]] = ..., team_current_map_partial_update: _Optional[_Union[RushBasketballTeamCurrentMapStatePartialUpdate, _Mapping]] = ...) -> None: ...

class RushBasketballCurrentMapState(_message.Message):
    __slots__ = ["period", "game_time", "score", "map_paused", "teams"]
    class TeamsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: RushBasketballTeamCurrentMapState
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[RushBasketballTeamCurrentMapState, _Mapping]] = ...) -> None: ...
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    GAME_TIME_FIELD_NUMBER: _ClassVar[int]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    MAP_PAUSED_FIELD_NUMBER: _ClassVar[int]
    TEAMS_FIELD_NUMBER: _ClassVar[int]
    period: RushBasketballPeriod
    game_time: RushBasketballCurrentMapTimeState
    score: RushBasketballCurrentMapScoreState
    map_paused: bool
    teams: _containers.MessageMap[str, RushBasketballTeamCurrentMapState]
    def __init__(self, period: _Optional[_Union[RushBasketballPeriod, str]] = ..., game_time: _Optional[_Union[RushBasketballCurrentMapTimeState, _Mapping]] = ..., score: _Optional[_Union[RushBasketballCurrentMapScoreState, _Mapping]] = ..., map_paused: bool = ..., teams: _Optional[_Mapping[str, RushBasketballTeamCurrentMapState]] = ...) -> None: ...

class RushBasketballCurrentMapTimeState(_message.Message):
    __slots__ = ["remaining_time"]
    REMAINING_TIME_FIELD_NUMBER: _ClassVar[int]
    remaining_time: _duration_pb2.Duration
    def __init__(self, remaining_time: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ...) -> None: ...

class RushBasketballCurrentMapScoreState(_message.Message):
    __slots__ = ["home_score", "away_score"]
    HOME_SCORE_FIELD_NUMBER: _ClassVar[int]
    AWAY_SCORE_FIELD_NUMBER: _ClassVar[int]
    home_score: int
    away_score: int
    def __init__(self, home_score: _Optional[int] = ..., away_score: _Optional[int] = ...) -> None: ...

class RushBasketballTeamCurrentMapStatePartialUpdate(_message.Message):
    __slots__ = ["team_urn", "payload"]
    class Payload(_message.Message):
        __slots__ = ["map_statistics", "player"]
        MAP_STATISTICS_FIELD_NUMBER: _ClassVar[int]
        PLAYER_FIELD_NUMBER: _ClassVar[int]
        map_statistics: RushBasketballTeamCurrentMapStatisticsState
        player: RushBasketballPlayerCurrentMapState
        def __init__(self, map_statistics: _Optional[_Union[RushBasketballTeamCurrentMapStatisticsState, _Mapping]] = ..., player: _Optional[_Union[RushBasketballPlayerCurrentMapState, _Mapping]] = ...) -> None: ...
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    team_urn: str
    payload: RushBasketballTeamCurrentMapStatePartialUpdate.Payload
    def __init__(self, team_urn: _Optional[str] = ..., payload: _Optional[_Union[RushBasketballTeamCurrentMapStatePartialUpdate.Payload, _Mapping]] = ...) -> None: ...

class RushBasketballTeamCurrentMapState(_message.Message):
    __slots__ = ["team_urn", "map_statistics", "player"]
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    MAP_STATISTICS_FIELD_NUMBER: _ClassVar[int]
    PLAYER_FIELD_NUMBER: _ClassVar[int]
    team_urn: str
    map_statistics: RushBasketballTeamCurrentMapStatisticsState
    player: RushBasketballPlayerCurrentMapState
    def __init__(self, team_urn: _Optional[str] = ..., map_statistics: _Optional[_Union[RushBasketballTeamCurrentMapStatisticsState, _Mapping]] = ..., player: _Optional[_Union[RushBasketballPlayerCurrentMapState, _Mapping]] = ...) -> None: ...

class RushBasketballPlayerCurrentMapState(_message.Message):
    __slots__ = ["player_urn", "ext_name"]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    EXT_NAME_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    ext_name: str
    def __init__(self, player_urn: _Optional[str] = ..., ext_name: _Optional[str] = ...) -> None: ...

class RushBasketballTeamCurrentMapStatisticsState(_message.Message):
    __slots__ = ["points_total", "points_ht", "period_points", "three_pointers", "two_pointers", "free_throws_successful", "free_throws_missed", "fouls"]
    POINTS_TOTAL_FIELD_NUMBER: _ClassVar[int]
    POINTS_HT_FIELD_NUMBER: _ClassVar[int]
    PERIOD_POINTS_FIELD_NUMBER: _ClassVar[int]
    THREE_POINTERS_FIELD_NUMBER: _ClassVar[int]
    TWO_POINTERS_FIELD_NUMBER: _ClassVar[int]
    FREE_THROWS_SUCCESSFUL_FIELD_NUMBER: _ClassVar[int]
    FREE_THROWS_MISSED_FIELD_NUMBER: _ClassVar[int]
    FOULS_FIELD_NUMBER: _ClassVar[int]
    points_total: int
    points_ht: int
    period_points: _containers.RepeatedCompositeFieldContainer[RushBasketballPeriodPoints]
    three_pointers: int
    two_pointers: int
    free_throws_successful: int
    free_throws_missed: int
    fouls: int
    def __init__(self, points_total: _Optional[int] = ..., points_ht: _Optional[int] = ..., period_points: _Optional[_Iterable[_Union[RushBasketballPeriodPoints, _Mapping]]] = ..., three_pointers: _Optional[int] = ..., two_pointers: _Optional[int] = ..., free_throws_successful: _Optional[int] = ..., free_throws_missed: _Optional[int] = ..., fouls: _Optional[int] = ...) -> None: ...

class RushBasketballPeriodPoints(_message.Message):
    __slots__ = ["period", "points"]
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    POINTS_FIELD_NUMBER: _ClassVar[int]
    period: RushBasketballPeriod
    points: int
    def __init__(self, period: _Optional[_Union[RushBasketballPeriod, str]] = ..., points: _Optional[int] = ...) -> None: ...
