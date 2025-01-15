from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import duration_pb2 as _duration_pb2
from bragi import common_pb2 as _common_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class RushSoccerEventType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    RUSH_SOCCER_EVENT_TYPE_UNSPECIFIED: _ClassVar[RushSoccerEventType]
    RUSH_SOCCER_EVENT_TYPE_GOAL: _ClassVar[RushSoccerEventType]
    RUSH_SOCCER_EVENT_TYPE_PENALTY: _ClassVar[RushSoccerEventType]
    RUSH_SOCCER_EVENT_TYPE_RED_CARD: _ClassVar[RushSoccerEventType]
    RUSH_SOCCER_EVENT_TYPE_YELLOW_CARD: _ClassVar[RushSoccerEventType]
    RUSH_SOCCER_EVENT_TYPE_FREE_KICK: _ClassVar[RushSoccerEventType]
    RUSH_SOCCER_EVENT_TYPE_CORNER_KICK: _ClassVar[RushSoccerEventType]
    RUSH_SOCCER_EVENT_TYPE_PERIOD_CHANGE: _ClassVar[RushSoccerEventType]

class RushSoccerPeriod(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    RUSH_SOCCER_PERIOD_UNSPECIFIED: _ClassVar[RushSoccerPeriod]
    RUSH_SOCCER_PERIOD_FIRST: _ClassVar[RushSoccerPeriod]
    RUSH_SOCCER_PERIOD_SECOND: _ClassVar[RushSoccerPeriod]
RUSH_SOCCER_EVENT_TYPE_UNSPECIFIED: RushSoccerEventType
RUSH_SOCCER_EVENT_TYPE_GOAL: RushSoccerEventType
RUSH_SOCCER_EVENT_TYPE_PENALTY: RushSoccerEventType
RUSH_SOCCER_EVENT_TYPE_RED_CARD: RushSoccerEventType
RUSH_SOCCER_EVENT_TYPE_YELLOW_CARD: RushSoccerEventType
RUSH_SOCCER_EVENT_TYPE_FREE_KICK: RushSoccerEventType
RUSH_SOCCER_EVENT_TYPE_CORNER_KICK: RushSoccerEventType
RUSH_SOCCER_EVENT_TYPE_PERIOD_CHANGE: RushSoccerEventType
RUSH_SOCCER_PERIOD_UNSPECIFIED: RushSoccerPeriod
RUSH_SOCCER_PERIOD_FIRST: RushSoccerPeriod
RUSH_SOCCER_PERIOD_SECOND: RushSoccerPeriod

class RushSoccerMatchMessage(_message.Message):
    __slots__ = ["match_urn", "sequence", "timestamp", "data_status", "payload"]
    class Payload(_message.Message):
        __slots__ = ["snapshot", "update"]
        SNAPSHOT_FIELD_NUMBER: _ClassVar[int]
        UPDATE_FIELD_NUMBER: _ClassVar[int]
        snapshot: RushSoccerMatchSnapshot
        update: RushSoccerMatchUpdate
        def __init__(self, snapshot: _Optional[_Union[RushSoccerMatchSnapshot, _Mapping]] = ..., update: _Optional[_Union[RushSoccerMatchUpdate, _Mapping]] = ...) -> None: ...
    MATCH_URN_FIELD_NUMBER: _ClassVar[int]
    SEQUENCE_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    DATA_STATUS_FIELD_NUMBER: _ClassVar[int]
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    match_urn: str
    sequence: int
    timestamp: _timestamp_pb2.Timestamp
    data_status: _common_pb2.DataStatus
    payload: RushSoccerMatchMessage.Payload
    def __init__(self, match_urn: _Optional[str] = ..., sequence: _Optional[int] = ..., timestamp: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., data_status: _Optional[_Union[_common_pb2.DataStatus, str]] = ..., payload: _Optional[_Union[RushSoccerMatchMessage.Payload, _Mapping]] = ...) -> None: ...

class RushSoccerMatchSnapshot(_message.Message):
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
    match_state: RushSoccerMatchState
    tournament: _common_pb2.Tournament
    def __init__(self, match_urn: _Optional[str] = ..., sequence: _Optional[int] = ..., timestamp: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., data_status: _Optional[_Union[_common_pb2.DataStatus, str]] = ..., announcements: _Optional[_Iterable[_Union[_common_pb2.Announcement, _Mapping]]] = ..., match_state: _Optional[_Union[RushSoccerMatchState, _Mapping]] = ..., tournament: _Optional[_Union[_common_pb2.Tournament, _Mapping]] = ...) -> None: ...

class RushSoccerMatchUpdate(_message.Message):
    __slots__ = ["payload"]
    class Payload(_message.Message):
        __slots__ = ["match_state", "partial_updates"]
        MATCH_STATE_FIELD_NUMBER: _ClassVar[int]
        PARTIAL_UPDATES_FIELD_NUMBER: _ClassVar[int]
        match_state: RushSoccerMatchState
        partial_updates: RushSoccerMatchStatePartialUpdates
        def __init__(self, match_state: _Optional[_Union[RushSoccerMatchState, _Mapping]] = ..., partial_updates: _Optional[_Union[RushSoccerMatchStatePartialUpdates, _Mapping]] = ...) -> None: ...
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    payload: RushSoccerMatchUpdate.Payload
    def __init__(self, payload: _Optional[_Union[RushSoccerMatchUpdate.Payload, _Mapping]] = ...) -> None: ...

class RushSoccerMatchStatePartialUpdates(_message.Message):
    __slots__ = ["updates"]
    UPDATES_FIELD_NUMBER: _ClassVar[int]
    updates: _containers.RepeatedCompositeFieldContainer[RushSoccerMatchStatePartialUpdate]
    def __init__(self, updates: _Optional[_Iterable[_Union[RushSoccerMatchStatePartialUpdate, _Mapping]]] = ...) -> None: ...

class RushSoccerMatchStatePartialUpdate(_message.Message):
    __slots__ = ["score", "current_map_state", "current_map_state_partial_update", "timeline"]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    CURRENT_MAP_STATE_FIELD_NUMBER: _ClassVar[int]
    CURRENT_MAP_STATE_PARTIAL_UPDATE_FIELD_NUMBER: _ClassVar[int]
    TIMELINE_FIELD_NUMBER: _ClassVar[int]
    score: RushSoccerMatchScoreState
    current_map_state: RushSoccerCurrentMapState
    current_map_state_partial_update: RushSoccerCurrentMapStatePartialUpdate
    timeline: RushSoccerTimelineState
    def __init__(self, score: _Optional[_Union[RushSoccerMatchScoreState, _Mapping]] = ..., current_map_state: _Optional[_Union[RushSoccerCurrentMapState, _Mapping]] = ..., current_map_state_partial_update: _Optional[_Union[RushSoccerCurrentMapStatePartialUpdate, _Mapping]] = ..., timeline: _Optional[_Union[RushSoccerTimelineState, _Mapping]] = ...) -> None: ...

class RushSoccerMatchState(_message.Message):
    __slots__ = ["match_urn", "match_type", "home_team", "away_team", "score", "match_status", "timeline", "current_map"]
    MATCH_URN_FIELD_NUMBER: _ClassVar[int]
    MATCH_TYPE_FIELD_NUMBER: _ClassVar[int]
    HOME_TEAM_FIELD_NUMBER: _ClassVar[int]
    AWAY_TEAM_FIELD_NUMBER: _ClassVar[int]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    MATCH_STATUS_FIELD_NUMBER: _ClassVar[int]
    TIMELINE_FIELD_NUMBER: _ClassVar[int]
    CURRENT_MAP_FIELD_NUMBER: _ClassVar[int]
    match_urn: str
    match_type: _common_pb2.BestOfType
    home_team: _common_pb2.Team
    away_team: _common_pb2.Team
    score: RushSoccerMatchScoreState
    match_status: _common_pb2.MatchStatusType
    timeline: RushSoccerTimelineState
    current_map: RushSoccerCurrentMapState
    def __init__(self, match_urn: _Optional[str] = ..., match_type: _Optional[_Union[_common_pb2.BestOfType, str]] = ..., home_team: _Optional[_Union[_common_pb2.Team, _Mapping]] = ..., away_team: _Optional[_Union[_common_pb2.Team, _Mapping]] = ..., score: _Optional[_Union[RushSoccerMatchScoreState, _Mapping]] = ..., match_status: _Optional[_Union[_common_pb2.MatchStatusType, str]] = ..., timeline: _Optional[_Union[RushSoccerTimelineState, _Mapping]] = ..., current_map: _Optional[_Union[RushSoccerCurrentMapState, _Mapping]] = ...) -> None: ...

class RushSoccerMatchScoreState(_message.Message):
    __slots__ = ["home_score", "away_score"]
    HOME_SCORE_FIELD_NUMBER: _ClassVar[int]
    AWAY_SCORE_FIELD_NUMBER: _ClassVar[int]
    home_score: int
    away_score: int
    def __init__(self, home_score: _Optional[int] = ..., away_score: _Optional[int] = ...) -> None: ...

class RushSoccerCurrentMapScoreState(_message.Message):
    __slots__ = ["home_goals", "away_goals"]
    HOME_GOALS_FIELD_NUMBER: _ClassVar[int]
    AWAY_GOALS_FIELD_NUMBER: _ClassVar[int]
    home_goals: int
    away_goals: int
    def __init__(self, home_goals: _Optional[int] = ..., away_goals: _Optional[int] = ...) -> None: ...

class RushSoccerTimelineState(_message.Message):
    __slots__ = ["events"]
    EVENTS_FIELD_NUMBER: _ClassVar[int]
    events: _containers.RepeatedCompositeFieldContainer[RushSoccerTimelineEvent]
    def __init__(self, events: _Optional[_Iterable[_Union[RushSoccerTimelineEvent, _Mapping]]] = ...) -> None: ...

class RushSoccerTimelineEvent(_message.Message):
    __slots__ = ["team_urn", "event_type", "real_time", "game_time", "period"]
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    EVENT_TYPE_FIELD_NUMBER: _ClassVar[int]
    REAL_TIME_FIELD_NUMBER: _ClassVar[int]
    GAME_TIME_FIELD_NUMBER: _ClassVar[int]
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    team_urn: str
    event_type: RushSoccerEventType
    real_time: _duration_pb2.Duration
    game_time: _duration_pb2.Duration
    period: RushSoccerPeriod
    def __init__(self, team_urn: _Optional[str] = ..., event_type: _Optional[_Union[RushSoccerEventType, str]] = ..., real_time: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., game_time: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., period: _Optional[_Union[RushSoccerPeriod, str]] = ...) -> None: ...

class RushSoccerCurrentMapStatePartialUpdate(_message.Message):
    __slots__ = ["game_time", "score", "team_current_map_state", "team_current_map_partial_update"]
    GAME_TIME_FIELD_NUMBER: _ClassVar[int]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    TEAM_CURRENT_MAP_STATE_FIELD_NUMBER: _ClassVar[int]
    TEAM_CURRENT_MAP_PARTIAL_UPDATE_FIELD_NUMBER: _ClassVar[int]
    game_time: RushSoccerCurrentMapTimeState
    score: RushSoccerCurrentMapScoreState
    team_current_map_state: RushSoccerTeamCurrentMapState
    team_current_map_partial_update: RushSoccerTeamCurrentMapStatePartialUpdate
    def __init__(self, game_time: _Optional[_Union[RushSoccerCurrentMapTimeState, _Mapping]] = ..., score: _Optional[_Union[RushSoccerCurrentMapScoreState, _Mapping]] = ..., team_current_map_state: _Optional[_Union[RushSoccerTeamCurrentMapState, _Mapping]] = ..., team_current_map_partial_update: _Optional[_Union[RushSoccerTeamCurrentMapStatePartialUpdate, _Mapping]] = ...) -> None: ...

class RushSoccerCurrentMapState(_message.Message):
    __slots__ = ["period", "game_time", "score", "map_paused", "teams"]
    class TeamsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: RushSoccerTeamCurrentMapState
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[RushSoccerTeamCurrentMapState, _Mapping]] = ...) -> None: ...
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    GAME_TIME_FIELD_NUMBER: _ClassVar[int]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    MAP_PAUSED_FIELD_NUMBER: _ClassVar[int]
    TEAMS_FIELD_NUMBER: _ClassVar[int]
    period: RushSoccerPeriod
    game_time: RushSoccerCurrentMapTimeState
    score: RushSoccerCurrentMapScoreState
    map_paused: bool
    teams: _containers.MessageMap[str, RushSoccerTeamCurrentMapState]
    def __init__(self, period: _Optional[_Union[RushSoccerPeriod, str]] = ..., game_time: _Optional[_Union[RushSoccerCurrentMapTimeState, _Mapping]] = ..., score: _Optional[_Union[RushSoccerCurrentMapScoreState, _Mapping]] = ..., map_paused: bool = ..., teams: _Optional[_Mapping[str, RushSoccerTeamCurrentMapState]] = ...) -> None: ...

class RushSoccerCurrentMapTimeState(_message.Message):
    __slots__ = ["real_time", "game_time"]
    REAL_TIME_FIELD_NUMBER: _ClassVar[int]
    GAME_TIME_FIELD_NUMBER: _ClassVar[int]
    real_time: _duration_pb2.Duration
    game_time: _duration_pb2.Duration
    def __init__(self, real_time: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., game_time: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ...) -> None: ...

class RushSoccerTeamCurrentMapStatePartialUpdate(_message.Message):
    __slots__ = ["team_urn", "payload"]
    class Payload(_message.Message):
        __slots__ = ["map_statistics", "player"]
        MAP_STATISTICS_FIELD_NUMBER: _ClassVar[int]
        PLAYER_FIELD_NUMBER: _ClassVar[int]
        map_statistics: RushSoccerTeamCurrentMapStatisticsState
        player: RushSoccerPlayerCurrentMapState
        def __init__(self, map_statistics: _Optional[_Union[RushSoccerTeamCurrentMapStatisticsState, _Mapping]] = ..., player: _Optional[_Union[RushSoccerPlayerCurrentMapState, _Mapping]] = ...) -> None: ...
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    team_urn: str
    payload: RushSoccerTeamCurrentMapStatePartialUpdate.Payload
    def __init__(self, team_urn: _Optional[str] = ..., payload: _Optional[_Union[RushSoccerTeamCurrentMapStatePartialUpdate.Payload, _Mapping]] = ...) -> None: ...

class RushSoccerTeamCurrentMapState(_message.Message):
    __slots__ = ["team_urn", "map_statistics", "player"]
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    MAP_STATISTICS_FIELD_NUMBER: _ClassVar[int]
    PLAYER_FIELD_NUMBER: _ClassVar[int]
    team_urn: str
    map_statistics: RushSoccerTeamCurrentMapStatisticsState
    player: RushSoccerPlayerCurrentMapState
    def __init__(self, team_urn: _Optional[str] = ..., map_statistics: _Optional[_Union[RushSoccerTeamCurrentMapStatisticsState, _Mapping]] = ..., player: _Optional[_Union[RushSoccerPlayerCurrentMapState, _Mapping]] = ...) -> None: ...

class RushSoccerPlayerCurrentMapState(_message.Message):
    __slots__ = ["player_urn", "ext_name"]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    EXT_NAME_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    ext_name: str
    def __init__(self, player_urn: _Optional[str] = ..., ext_name: _Optional[str] = ...) -> None: ...

class RushSoccerTeamCurrentMapStatisticsState(_message.Message):
    __slots__ = ["goals", "goals_ht", "penalty_kicks", "red_cards", "yellow_cards", "free_kicks", "corner_kicks"]
    GOALS_FIELD_NUMBER: _ClassVar[int]
    GOALS_HT_FIELD_NUMBER: _ClassVar[int]
    PENALTY_KICKS_FIELD_NUMBER: _ClassVar[int]
    RED_CARDS_FIELD_NUMBER: _ClassVar[int]
    YELLOW_CARDS_FIELD_NUMBER: _ClassVar[int]
    FREE_KICKS_FIELD_NUMBER: _ClassVar[int]
    CORNER_KICKS_FIELD_NUMBER: _ClassVar[int]
    goals: int
    goals_ht: int
    penalty_kicks: int
    red_cards: int
    yellow_cards: int
    free_kicks: int
    corner_kicks: int
    def __init__(self, goals: _Optional[int] = ..., goals_ht: _Optional[int] = ..., penalty_kicks: _Optional[int] = ..., red_cards: _Optional[int] = ..., yellow_cards: _Optional[int] = ..., free_kicks: _Optional[int] = ..., corner_kicks: _Optional[int] = ...) -> None: ...
