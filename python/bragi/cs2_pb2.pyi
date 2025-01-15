from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import duration_pb2 as _duration_pb2
from bragi import common_pb2 as _common_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class CS2Side(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    CS2_SIDE_UNSPECIFIED: _ClassVar[CS2Side]
    CS2_SIDE_COUNTER_TERRORISTS: _ClassVar[CS2Side]
    CS2_SIDE_TERRORISTS: _ClassVar[CS2Side]

class CS2WinReason(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    CS2_WIN_REASON_UNSPECIFIED: _ClassVar[CS2WinReason]
    CS2_WIN_REASON_COUNTER_TERRORISTS_ELIMINATED: _ClassVar[CS2WinReason]
    CS2_WIN_REASON_TERRORISTS_ELIMINATED: _ClassVar[CS2WinReason]
    CS2_WIN_REASON_EXPLOSION: _ClassVar[CS2WinReason]
    CS2_WIN_REASON_DEFUSE: _ClassVar[CS2WinReason]
    CS2_WIN_REASON_TIMEOUT: _ClassVar[CS2WinReason]
    CS2_WIN_REASON_TARGET_SAVED: _ClassVar[CS2WinReason]

class CS2RoundStateType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    CS2_ROUND_STATE_TYPE_UNSPECIFIED: _ClassVar[CS2RoundStateType]
    CS2_ROUND_STATE_TYPE_BUY_TIME: _ClassVar[CS2RoundStateType]
    CS2_ROUND_STATE_TYPE_IN_PROGRESS: _ClassVar[CS2RoundStateType]
    CS2_ROUND_STATE_TYPE_PAUSED: _ClassVar[CS2RoundStateType]
    CS2_ROUND_STATE_TYPE_FINISHED: _ClassVar[CS2RoundStateType]

class CS2WeaponType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    CS2_WEAPON_TYPE_UNSPECIFIED: _ClassVar[CS2WeaponType]
    CS2_WEAPON_TYPE_PISTOL: _ClassVar[CS2WeaponType]
    CS2_WEAPON_TYPE_BOMB: _ClassVar[CS2WeaponType]
    CS2_WEAPON_TYPE_GRENADE: _ClassVar[CS2WeaponType]
    CS2_WEAPON_TYPE_MACHINE_GUN: _ClassVar[CS2WeaponType]
    CS2_WEAPON_TYPE_RIFLE: _ClassVar[CS2WeaponType]
    CS2_WEAPON_TYPE_SHOTGUN: _ClassVar[CS2WeaponType]
    CS2_WEAPON_TYPE_SNIPER_RIFLE: _ClassVar[CS2WeaponType]
    CS2_WEAPON_TYPE_SUBMACHINE_GUN: _ClassVar[CS2WeaponType]
    CS2_WEAPON_TYPE_KNIFE: _ClassVar[CS2WeaponType]
    CS2_WEAPON_TYPE_DEFUSE_KIT: _ClassVar[CS2WeaponType]

class CS2ItemType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    CS2_ITEM_TYPE_UNSPECIFIED: _ClassVar[CS2ItemType]
    CS2_ITEM_TYPE_PISTOL: _ClassVar[CS2ItemType]
    CS2_ITEM_TYPE_BOMB: _ClassVar[CS2ItemType]
    CS2_ITEM_TYPE_GRENADE: _ClassVar[CS2ItemType]
    CS2_ITEM_TYPE_MACHINE_GUN: _ClassVar[CS2ItemType]
    CS2_ITEM_TYPE_RIFLE: _ClassVar[CS2ItemType]
    CS2_ITEM_TYPE_SHOTGUN: _ClassVar[CS2ItemType]
    CS2_ITEM_TYPE_SNIPER_RIFLE: _ClassVar[CS2ItemType]
    CS2_ITEM_TYPE_SUBMACHINE_GUN: _ClassVar[CS2ItemType]
    CS2_ITEM_TYPE_KNIFE: _ClassVar[CS2ItemType]
    CS2_ITEM_TYPE_DEFUSE_KIT: _ClassVar[CS2ItemType]
    CS2_ITEM_TYPE_ARMOR: _ClassVar[CS2ItemType]
CS2_SIDE_UNSPECIFIED: CS2Side
CS2_SIDE_COUNTER_TERRORISTS: CS2Side
CS2_SIDE_TERRORISTS: CS2Side
CS2_WIN_REASON_UNSPECIFIED: CS2WinReason
CS2_WIN_REASON_COUNTER_TERRORISTS_ELIMINATED: CS2WinReason
CS2_WIN_REASON_TERRORISTS_ELIMINATED: CS2WinReason
CS2_WIN_REASON_EXPLOSION: CS2WinReason
CS2_WIN_REASON_DEFUSE: CS2WinReason
CS2_WIN_REASON_TIMEOUT: CS2WinReason
CS2_WIN_REASON_TARGET_SAVED: CS2WinReason
CS2_ROUND_STATE_TYPE_UNSPECIFIED: CS2RoundStateType
CS2_ROUND_STATE_TYPE_BUY_TIME: CS2RoundStateType
CS2_ROUND_STATE_TYPE_IN_PROGRESS: CS2RoundStateType
CS2_ROUND_STATE_TYPE_PAUSED: CS2RoundStateType
CS2_ROUND_STATE_TYPE_FINISHED: CS2RoundStateType
CS2_WEAPON_TYPE_UNSPECIFIED: CS2WeaponType
CS2_WEAPON_TYPE_PISTOL: CS2WeaponType
CS2_WEAPON_TYPE_BOMB: CS2WeaponType
CS2_WEAPON_TYPE_GRENADE: CS2WeaponType
CS2_WEAPON_TYPE_MACHINE_GUN: CS2WeaponType
CS2_WEAPON_TYPE_RIFLE: CS2WeaponType
CS2_WEAPON_TYPE_SHOTGUN: CS2WeaponType
CS2_WEAPON_TYPE_SNIPER_RIFLE: CS2WeaponType
CS2_WEAPON_TYPE_SUBMACHINE_GUN: CS2WeaponType
CS2_WEAPON_TYPE_KNIFE: CS2WeaponType
CS2_WEAPON_TYPE_DEFUSE_KIT: CS2WeaponType
CS2_ITEM_TYPE_UNSPECIFIED: CS2ItemType
CS2_ITEM_TYPE_PISTOL: CS2ItemType
CS2_ITEM_TYPE_BOMB: CS2ItemType
CS2_ITEM_TYPE_GRENADE: CS2ItemType
CS2_ITEM_TYPE_MACHINE_GUN: CS2ItemType
CS2_ITEM_TYPE_RIFLE: CS2ItemType
CS2_ITEM_TYPE_SHOTGUN: CS2ItemType
CS2_ITEM_TYPE_SNIPER_RIFLE: CS2ItemType
CS2_ITEM_TYPE_SUBMACHINE_GUN: CS2ItemType
CS2_ITEM_TYPE_KNIFE: CS2ItemType
CS2_ITEM_TYPE_DEFUSE_KIT: CS2ItemType
CS2_ITEM_TYPE_ARMOR: CS2ItemType

class CS2MatchMessage(_message.Message):
    __slots__ = ["match_urn", "sequence", "timestamp", "data_status", "payload"]
    class Payload(_message.Message):
        __slots__ = ["snapshot", "update"]
        SNAPSHOT_FIELD_NUMBER: _ClassVar[int]
        UPDATE_FIELD_NUMBER: _ClassVar[int]
        snapshot: CS2MatchSnapshot
        update: CS2MatchUpdate
        def __init__(self, snapshot: _Optional[_Union[CS2MatchSnapshot, _Mapping]] = ..., update: _Optional[_Union[CS2MatchUpdate, _Mapping]] = ...) -> None: ...
    MATCH_URN_FIELD_NUMBER: _ClassVar[int]
    SEQUENCE_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    DATA_STATUS_FIELD_NUMBER: _ClassVar[int]
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    match_urn: str
    sequence: int
    timestamp: _timestamp_pb2.Timestamp
    data_status: _common_pb2.DataStatus
    payload: CS2MatchMessage.Payload
    def __init__(self, match_urn: _Optional[str] = ..., sequence: _Optional[int] = ..., timestamp: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., data_status: _Optional[_Union[_common_pb2.DataStatus, str]] = ..., payload: _Optional[_Union[CS2MatchMessage.Payload, _Mapping]] = ...) -> None: ...

class CS2MatchSnapshot(_message.Message):
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
    match_state: CS2MatchState
    tournament: _common_pb2.Tournament
    def __init__(self, match_urn: _Optional[str] = ..., sequence: _Optional[int] = ..., timestamp: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., data_status: _Optional[_Union[_common_pb2.DataStatus, str]] = ..., announcements: _Optional[_Iterable[_Union[_common_pb2.Announcement, _Mapping]]] = ..., match_state: _Optional[_Union[CS2MatchState, _Mapping]] = ..., tournament: _Optional[_Union[_common_pb2.Tournament, _Mapping]] = ...) -> None: ...

class CS2MatchUpdate(_message.Message):
    __slots__ = ["payload", "events"]
    class Payload(_message.Message):
        __slots__ = ["match_state", "partial_updates"]
        MATCH_STATE_FIELD_NUMBER: _ClassVar[int]
        PARTIAL_UPDATES_FIELD_NUMBER: _ClassVar[int]
        match_state: CS2MatchState
        partial_updates: CS2MatchStatePartialUpdates
        def __init__(self, match_state: _Optional[_Union[CS2MatchState, _Mapping]] = ..., partial_updates: _Optional[_Union[CS2MatchStatePartialUpdates, _Mapping]] = ...) -> None: ...
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    EVENTS_FIELD_NUMBER: _ClassVar[int]
    payload: CS2MatchUpdate.Payload
    events: _containers.RepeatedCompositeFieldContainer[CS2Event]
    def __init__(self, payload: _Optional[_Union[CS2MatchUpdate.Payload, _Mapping]] = ..., events: _Optional[_Iterable[_Union[CS2Event, _Mapping]]] = ...) -> None: ...

class CS2MatchStatePartialUpdates(_message.Message):
    __slots__ = ["updates"]
    UPDATES_FIELD_NUMBER: _ClassVar[int]
    updates: _containers.RepeatedCompositeFieldContainer[CS2MatchStatePartialUpdate]
    def __init__(self, updates: _Optional[_Iterable[_Union[CS2MatchStatePartialUpdate, _Mapping]]] = ...) -> None: ...

class CS2MatchStatePartialUpdate(_message.Message):
    __slots__ = ["score", "current_map_state", "current_map_state_partial_update"]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    CURRENT_MAP_STATE_FIELD_NUMBER: _ClassVar[int]
    CURRENT_MAP_STATE_PARTIAL_UPDATE_FIELD_NUMBER: _ClassVar[int]
    score: CS2MatchScoreState
    current_map_state: CS2CurrentMapState
    current_map_state_partial_update: CS2CurrentMapStatePartialUpdate
    def __init__(self, score: _Optional[_Union[CS2MatchScoreState, _Mapping]] = ..., current_map_state: _Optional[_Union[CS2CurrentMapState, _Mapping]] = ..., current_map_state_partial_update: _Optional[_Union[CS2CurrentMapStatePartialUpdate, _Mapping]] = ...) -> None: ...

class CS2MatchState(_message.Message):
    __slots__ = ["match_urn", "match_type", "home_team", "away_team", "score", "win_team_urn", "match_status", "current_map_state", "previous_map_states"]
    MATCH_URN_FIELD_NUMBER: _ClassVar[int]
    MATCH_TYPE_FIELD_NUMBER: _ClassVar[int]
    HOME_TEAM_FIELD_NUMBER: _ClassVar[int]
    AWAY_TEAM_FIELD_NUMBER: _ClassVar[int]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    WIN_TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    MATCH_STATUS_FIELD_NUMBER: _ClassVar[int]
    CURRENT_MAP_STATE_FIELD_NUMBER: _ClassVar[int]
    PREVIOUS_MAP_STATES_FIELD_NUMBER: _ClassVar[int]
    match_urn: str
    match_type: _common_pb2.BestOfType
    home_team: CS2Team
    away_team: CS2Team
    score: CS2MatchScoreState
    win_team_urn: str
    match_status: _common_pb2.MatchStatusType
    current_map_state: CS2CurrentMapState
    previous_map_states: _containers.RepeatedCompositeFieldContainer[CS2PreviousMapState]
    def __init__(self, match_urn: _Optional[str] = ..., match_type: _Optional[_Union[_common_pb2.BestOfType, str]] = ..., home_team: _Optional[_Union[CS2Team, _Mapping]] = ..., away_team: _Optional[_Union[CS2Team, _Mapping]] = ..., score: _Optional[_Union[CS2MatchScoreState, _Mapping]] = ..., win_team_urn: _Optional[str] = ..., match_status: _Optional[_Union[_common_pb2.MatchStatusType, str]] = ..., current_map_state: _Optional[_Union[CS2CurrentMapState, _Mapping]] = ..., previous_map_states: _Optional[_Iterable[_Union[CS2PreviousMapState, _Mapping]]] = ...) -> None: ...

class CS2MatchScoreState(_message.Message):
    __slots__ = ["home_score", "away_score"]
    HOME_SCORE_FIELD_NUMBER: _ClassVar[int]
    AWAY_SCORE_FIELD_NUMBER: _ClassVar[int]
    home_score: int
    away_score: int
    def __init__(self, home_score: _Optional[int] = ..., away_score: _Optional[int] = ...) -> None: ...

class CS2Team(_message.Message):
    __slots__ = ["team_urn", "team_name"]
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    TEAM_NAME_FIELD_NUMBER: _ClassVar[int]
    team_urn: str
    team_name: str
    def __init__(self, team_urn: _Optional[str] = ..., team_name: _Optional[str] = ...) -> None: ...

class CS2CurrentMapStatePartialUpdate(_message.Message):
    __slots__ = ["info", "score", "current_round_state", "current_round_state_partial_update", "team_map_states_partial_update"]
    INFO_FIELD_NUMBER: _ClassVar[int]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    CURRENT_ROUND_STATE_FIELD_NUMBER: _ClassVar[int]
    CURRENT_ROUND_STATE_PARTIAL_UPDATE_FIELD_NUMBER: _ClassVar[int]
    TEAM_MAP_STATES_PARTIAL_UPDATE_FIELD_NUMBER: _ClassVar[int]
    info: CS2MapInfoState
    score: CS2MapScoreState
    current_round_state: CS2CurrentRoundState
    current_round_state_partial_update: CS2CurrentRoundStatePartialUpdate
    team_map_states_partial_update: CS2TeamMapStatePartialUpdate
    def __init__(self, info: _Optional[_Union[CS2MapInfoState, _Mapping]] = ..., score: _Optional[_Union[CS2MapScoreState, _Mapping]] = ..., current_round_state: _Optional[_Union[CS2CurrentRoundState, _Mapping]] = ..., current_round_state_partial_update: _Optional[_Union[CS2CurrentRoundStatePartialUpdate, _Mapping]] = ..., team_map_states_partial_update: _Optional[_Union[CS2TeamMapStatePartialUpdate, _Mapping]] = ...) -> None: ...

class CS2CurrentMapState(_message.Message):
    __slots__ = ["map_order", "info", "score", "current_round_state", "previous_round_states", "team_map_states"]
    class TeamMapStatesEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: CS2TeamMapState
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[CS2TeamMapState, _Mapping]] = ...) -> None: ...
    MAP_ORDER_FIELD_NUMBER: _ClassVar[int]
    INFO_FIELD_NUMBER: _ClassVar[int]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    CURRENT_ROUND_STATE_FIELD_NUMBER: _ClassVar[int]
    PREVIOUS_ROUND_STATES_FIELD_NUMBER: _ClassVar[int]
    TEAM_MAP_STATES_FIELD_NUMBER: _ClassVar[int]
    map_order: int
    info: CS2MapInfoState
    score: CS2MapScoreState
    current_round_state: CS2CurrentRoundState
    previous_round_states: _containers.RepeatedCompositeFieldContainer[CS2PreviousRoundState]
    team_map_states: _containers.MessageMap[str, CS2TeamMapState]
    def __init__(self, map_order: _Optional[int] = ..., info: _Optional[_Union[CS2MapInfoState, _Mapping]] = ..., score: _Optional[_Union[CS2MapScoreState, _Mapping]] = ..., current_round_state: _Optional[_Union[CS2CurrentRoundState, _Mapping]] = ..., previous_round_states: _Optional[_Iterable[_Union[CS2PreviousRoundState, _Mapping]]] = ..., team_map_states: _Optional[_Mapping[str, CS2TeamMapState]] = ...) -> None: ...

class CS2PreviousMapState(_message.Message):
    __slots__ = ["map_order", "info", "score", "round_states", "team_map_states"]
    class TeamMapStatesEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: CS2TeamMapState
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[CS2TeamMapState, _Mapping]] = ...) -> None: ...
    MAP_ORDER_FIELD_NUMBER: _ClassVar[int]
    INFO_FIELD_NUMBER: _ClassVar[int]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    ROUND_STATES_FIELD_NUMBER: _ClassVar[int]
    TEAM_MAP_STATES_FIELD_NUMBER: _ClassVar[int]
    map_order: int
    info: CS2MapInfoState
    score: CS2MapScoreState
    round_states: _containers.RepeatedCompositeFieldContainer[CS2PreviousRoundState]
    team_map_states: _containers.MessageMap[str, CS2TeamMapState]
    def __init__(self, map_order: _Optional[int] = ..., info: _Optional[_Union[CS2MapInfoState, _Mapping]] = ..., score: _Optional[_Union[CS2MapScoreState, _Mapping]] = ..., round_states: _Optional[_Iterable[_Union[CS2PreviousRoundState, _Mapping]]] = ..., team_map_states: _Optional[_Mapping[str, CS2TeamMapState]] = ...) -> None: ...

class CS2MapInfoState(_message.Message):
    __slots__ = ["map_name", "max_rounds_default", "max_rounds_overtime", "freeze_time_duration", "round_time_duration", "bomb_time_duration", "start_time", "end_time", "map_ended", "win_team_urn"]
    MAP_NAME_FIELD_NUMBER: _ClassVar[int]
    MAX_ROUNDS_DEFAULT_FIELD_NUMBER: _ClassVar[int]
    MAX_ROUNDS_OVERTIME_FIELD_NUMBER: _ClassVar[int]
    FREEZE_TIME_DURATION_FIELD_NUMBER: _ClassVar[int]
    ROUND_TIME_DURATION_FIELD_NUMBER: _ClassVar[int]
    BOMB_TIME_DURATION_FIELD_NUMBER: _ClassVar[int]
    START_TIME_FIELD_NUMBER: _ClassVar[int]
    END_TIME_FIELD_NUMBER: _ClassVar[int]
    MAP_ENDED_FIELD_NUMBER: _ClassVar[int]
    WIN_TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    map_name: str
    max_rounds_default: int
    max_rounds_overtime: int
    freeze_time_duration: _duration_pb2.Duration
    round_time_duration: _duration_pb2.Duration
    bomb_time_duration: _duration_pb2.Duration
    start_time: _timestamp_pb2.Timestamp
    end_time: _timestamp_pb2.Timestamp
    map_ended: bool
    win_team_urn: str
    def __init__(self, map_name: _Optional[str] = ..., max_rounds_default: _Optional[int] = ..., max_rounds_overtime: _Optional[int] = ..., freeze_time_duration: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., round_time_duration: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., bomb_time_duration: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., start_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., end_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., map_ended: bool = ..., win_team_urn: _Optional[str] = ...) -> None: ...

class CS2MapScoreState(_message.Message):
    __slots__ = ["home_score", "away_score"]
    HOME_SCORE_FIELD_NUMBER: _ClassVar[int]
    AWAY_SCORE_FIELD_NUMBER: _ClassVar[int]
    home_score: int
    away_score: int
    def __init__(self, home_score: _Optional[int] = ..., away_score: _Optional[int] = ...) -> None: ...

class CS2CurrentRoundStatePartialUpdate(_message.Message):
    __slots__ = ["info", "time", "bomb_state", "team_states_partial_update"]
    INFO_FIELD_NUMBER: _ClassVar[int]
    TIME_FIELD_NUMBER: _ClassVar[int]
    BOMB_STATE_FIELD_NUMBER: _ClassVar[int]
    TEAM_STATES_PARTIAL_UPDATE_FIELD_NUMBER: _ClassVar[int]
    info: CS2RoundInfoState
    time: CS2RoundTimeState
    bomb_state: CS2BombState
    team_states_partial_update: CS2TeamCurrentRoundStatePartialUpdate
    def __init__(self, info: _Optional[_Union[CS2RoundInfoState, _Mapping]] = ..., time: _Optional[_Union[CS2RoundTimeState, _Mapping]] = ..., bomb_state: _Optional[_Union[CS2BombState, _Mapping]] = ..., team_states_partial_update: _Optional[_Union[CS2TeamCurrentRoundStatePartialUpdate, _Mapping]] = ...) -> None: ...

class CS2CurrentRoundState(_message.Message):
    __slots__ = ["round_number", "info", "time", "bomb_state", "team_states"]
    class TeamStatesEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: CS2TeamCurrentRoundState
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[CS2TeamCurrentRoundState, _Mapping]] = ...) -> None: ...
    ROUND_NUMBER_FIELD_NUMBER: _ClassVar[int]
    INFO_FIELD_NUMBER: _ClassVar[int]
    TIME_FIELD_NUMBER: _ClassVar[int]
    BOMB_STATE_FIELD_NUMBER: _ClassVar[int]
    TEAM_STATES_FIELD_NUMBER: _ClassVar[int]
    round_number: int
    info: CS2RoundInfoState
    time: CS2RoundTimeState
    bomb_state: CS2BombState
    team_states: _containers.MessageMap[str, CS2TeamCurrentRoundState]
    def __init__(self, round_number: _Optional[int] = ..., info: _Optional[_Union[CS2RoundInfoState, _Mapping]] = ..., time: _Optional[_Union[CS2RoundTimeState, _Mapping]] = ..., bomb_state: _Optional[_Union[CS2BombState, _Mapping]] = ..., team_states: _Optional[_Mapping[str, CS2TeamCurrentRoundState]] = ...) -> None: ...

class CS2PreviousRoundState(_message.Message):
    __slots__ = ["round_number", "info", "team_states"]
    class TeamStatesEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: CS2PreviousTeamRoundState
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[CS2PreviousTeamRoundState, _Mapping]] = ...) -> None: ...
    ROUND_NUMBER_FIELD_NUMBER: _ClassVar[int]
    INFO_FIELD_NUMBER: _ClassVar[int]
    TEAM_STATES_FIELD_NUMBER: _ClassVar[int]
    round_number: int
    info: CS2RoundInfoState
    team_states: _containers.MessageMap[str, CS2PreviousTeamRoundState]
    def __init__(self, round_number: _Optional[int] = ..., info: _Optional[_Union[CS2RoundInfoState, _Mapping]] = ..., team_states: _Optional[_Mapping[str, CS2PreviousTeamRoundState]] = ...) -> None: ...

class CS2RoundInfoState(_message.Message):
    __slots__ = ["round_type", "start_time", "end_time", "winning_team_urn", "win_reason", "home_won"]
    ROUND_TYPE_FIELD_NUMBER: _ClassVar[int]
    START_TIME_FIELD_NUMBER: _ClassVar[int]
    END_TIME_FIELD_NUMBER: _ClassVar[int]
    WINNING_TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    WIN_REASON_FIELD_NUMBER: _ClassVar[int]
    HOME_WON_FIELD_NUMBER: _ClassVar[int]
    round_type: CS2RoundStateType
    start_time: _timestamp_pb2.Timestamp
    end_time: _timestamp_pb2.Timestamp
    winning_team_urn: str
    win_reason: CS2WinReason
    home_won: bool
    def __init__(self, round_type: _Optional[_Union[CS2RoundStateType, str]] = ..., start_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., end_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., winning_team_urn: _Optional[str] = ..., win_reason: _Optional[_Union[CS2WinReason, str]] = ..., home_won: bool = ...) -> None: ...

class CS2RoundTimeState(_message.Message):
    __slots__ = ["time_remaining"]
    TIME_REMAINING_FIELD_NUMBER: _ClassVar[int]
    time_remaining: _duration_pb2.Duration
    def __init__(self, time_remaining: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ...) -> None: ...

class CS2BombState(_message.Message):
    __slots__ = ["carried", "dropped", "planting", "planted", "defusing", "defused", "exploded"]
    CARRIED_FIELD_NUMBER: _ClassVar[int]
    DROPPED_FIELD_NUMBER: _ClassVar[int]
    PLANTING_FIELD_NUMBER: _ClassVar[int]
    PLANTED_FIELD_NUMBER: _ClassVar[int]
    DEFUSING_FIELD_NUMBER: _ClassVar[int]
    DEFUSED_FIELD_NUMBER: _ClassVar[int]
    EXPLODED_FIELD_NUMBER: _ClassVar[int]
    carried: CS2BombCarriedState
    dropped: CS2BombDroppedState
    planting: CS2BombPlantingState
    planted: CS2BombPlantedState
    defusing: CS2BombDefusingState
    defused: CS2BombDefusedState
    exploded: CS2BombExplodedState
    def __init__(self, carried: _Optional[_Union[CS2BombCarriedState, _Mapping]] = ..., dropped: _Optional[_Union[CS2BombDroppedState, _Mapping]] = ..., planting: _Optional[_Union[CS2BombPlantingState, _Mapping]] = ..., planted: _Optional[_Union[CS2BombPlantedState, _Mapping]] = ..., defusing: _Optional[_Union[CS2BombDefusingState, _Mapping]] = ..., defused: _Optional[_Union[CS2BombDefusedState, _Mapping]] = ..., exploded: _Optional[_Union[CS2BombExplodedState, _Mapping]] = ...) -> None: ...

class CS2BombCarriedState(_message.Message):
    __slots__ = ["player_urn", "position"]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    POSITION_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    position: CS2Position
    def __init__(self, player_urn: _Optional[str] = ..., position: _Optional[_Union[CS2Position, _Mapping]] = ...) -> None: ...

class CS2BombDroppedState(_message.Message):
    __slots__ = ["dropped_by_player_urn", "position"]
    DROPPED_BY_PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    POSITION_FIELD_NUMBER: _ClassVar[int]
    dropped_by_player_urn: str
    position: CS2Position
    def __init__(self, dropped_by_player_urn: _Optional[str] = ..., position: _Optional[_Union[CS2Position, _Mapping]] = ...) -> None: ...

class CS2BombPlantingState(_message.Message):
    __slots__ = ["player_urn", "position", "countdown"]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    POSITION_FIELD_NUMBER: _ClassVar[int]
    COUNTDOWN_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    position: CS2Position
    countdown: _duration_pb2.Duration
    def __init__(self, player_urn: _Optional[str] = ..., position: _Optional[_Union[CS2Position, _Mapping]] = ..., countdown: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ...) -> None: ...

class CS2BombPlantedState(_message.Message):
    __slots__ = ["planted_by_player_urn", "position", "planted_at", "countdown"]
    PLANTED_BY_PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    POSITION_FIELD_NUMBER: _ClassVar[int]
    PLANTED_AT_FIELD_NUMBER: _ClassVar[int]
    COUNTDOWN_FIELD_NUMBER: _ClassVar[int]
    planted_by_player_urn: str
    position: CS2Position
    planted_at: _timestamp_pb2.Timestamp
    countdown: _duration_pb2.Duration
    def __init__(self, planted_by_player_urn: _Optional[str] = ..., position: _Optional[_Union[CS2Position, _Mapping]] = ..., planted_at: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., countdown: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ...) -> None: ...

class CS2BombDefusingState(_message.Message):
    __slots__ = ["player_urn", "position", "countdown", "defuse_started_at"]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    POSITION_FIELD_NUMBER: _ClassVar[int]
    COUNTDOWN_FIELD_NUMBER: _ClassVar[int]
    DEFUSE_STARTED_AT_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    position: CS2Position
    countdown: _duration_pb2.Duration
    defuse_started_at: _timestamp_pb2.Timestamp
    def __init__(self, player_urn: _Optional[str] = ..., position: _Optional[_Union[CS2Position, _Mapping]] = ..., countdown: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., defuse_started_at: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class CS2BombDefusedState(_message.Message):
    __slots__ = ["defused_by_player_urn", "position", "defused_at"]
    DEFUSED_BY_PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    POSITION_FIELD_NUMBER: _ClassVar[int]
    DEFUSED_AT_FIELD_NUMBER: _ClassVar[int]
    defused_by_player_urn: str
    position: CS2Position
    defused_at: _timestamp_pb2.Timestamp
    def __init__(self, defused_by_player_urn: _Optional[str] = ..., position: _Optional[_Union[CS2Position, _Mapping]] = ..., defused_at: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class CS2BombExplodedState(_message.Message):
    __slots__ = ["position", "exploded_at"]
    POSITION_FIELD_NUMBER: _ClassVar[int]
    EXPLODED_AT_FIELD_NUMBER: _ClassVar[int]
    position: CS2Position
    exploded_at: _timestamp_pb2.Timestamp
    def __init__(self, position: _Optional[_Union[CS2Position, _Mapping]] = ..., exploded_at: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class CS2TeamMapStatePartialUpdate(_message.Message):
    __slots__ = ["team_urn", "payload"]
    class Payload(_message.Message):
        __slots__ = ["player_state", "player_map_states_partial_update"]
        PLAYER_STATE_FIELD_NUMBER: _ClassVar[int]
        PLAYER_MAP_STATES_PARTIAL_UPDATE_FIELD_NUMBER: _ClassVar[int]
        player_state: CS2PlayerMapState
        player_map_states_partial_update: CS2PlayerMapStatePartialUpdate
        def __init__(self, player_state: _Optional[_Union[CS2PlayerMapState, _Mapping]] = ..., player_map_states_partial_update: _Optional[_Union[CS2PlayerMapStatePartialUpdate, _Mapping]] = ...) -> None: ...
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    team_urn: str
    payload: CS2TeamMapStatePartialUpdate.Payload
    def __init__(self, team_urn: _Optional[str] = ..., payload: _Optional[_Union[CS2TeamMapStatePartialUpdate.Payload, _Mapping]] = ...) -> None: ...

class CS2TeamMapState(_message.Message):
    __slots__ = ["team_urn", "side", "player_map_states"]
    class PlayerMapStatesEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: CS2PlayerMapState
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[CS2PlayerMapState, _Mapping]] = ...) -> None: ...
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    SIDE_FIELD_NUMBER: _ClassVar[int]
    PLAYER_MAP_STATES_FIELD_NUMBER: _ClassVar[int]
    team_urn: str
    side: CS2Side
    player_map_states: _containers.MessageMap[str, CS2PlayerMapState]
    def __init__(self, team_urn: _Optional[str] = ..., side: _Optional[_Union[CS2Side, str]] = ..., player_map_states: _Optional[_Mapping[str, CS2PlayerMapState]] = ...) -> None: ...

class CS2TeamCurrentRoundStatePartialUpdate(_message.Message):
    __slots__ = ["team_urn", "payload"]
    class Payload(_message.Message):
        __slots__ = ["player_state", "player_round_states_partial_update"]
        PLAYER_STATE_FIELD_NUMBER: _ClassVar[int]
        PLAYER_ROUND_STATES_PARTIAL_UPDATE_FIELD_NUMBER: _ClassVar[int]
        player_state: CS2PlayerCurrentRoundState
        player_round_states_partial_update: CS2PlayerCurrentRoundStatePartialUpdate
        def __init__(self, player_state: _Optional[_Union[CS2PlayerCurrentRoundState, _Mapping]] = ..., player_round_states_partial_update: _Optional[_Union[CS2PlayerCurrentRoundStatePartialUpdate, _Mapping]] = ...) -> None: ...
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    team_urn: str
    payload: CS2TeamCurrentRoundStatePartialUpdate.Payload
    def __init__(self, team_urn: _Optional[str] = ..., payload: _Optional[_Union[CS2TeamCurrentRoundStatePartialUpdate.Payload, _Mapping]] = ...) -> None: ...

class CS2TeamCurrentRoundState(_message.Message):
    __slots__ = ["team_urn", "player_round_states"]
    class PlayerRoundStatesEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: CS2PlayerCurrentRoundState
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[CS2PlayerCurrentRoundState, _Mapping]] = ...) -> None: ...
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    PLAYER_ROUND_STATES_FIELD_NUMBER: _ClassVar[int]
    team_urn: str
    player_round_states: _containers.MessageMap[str, CS2PlayerCurrentRoundState]
    def __init__(self, team_urn: _Optional[str] = ..., player_round_states: _Optional[_Mapping[str, CS2PlayerCurrentRoundState]] = ...) -> None: ...

class CS2PreviousTeamRoundState(_message.Message):
    __slots__ = ["team_urn", "players"]
    class PlayersEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: CS2PlayerPreviousRoundState
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[CS2PlayerPreviousRoundState, _Mapping]] = ...) -> None: ...
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    PLAYERS_FIELD_NUMBER: _ClassVar[int]
    team_urn: str
    players: _containers.MessageMap[str, CS2PlayerPreviousRoundState]
    def __init__(self, team_urn: _Optional[str] = ..., players: _Optional[_Mapping[str, CS2PlayerPreviousRoundState]] = ...) -> None: ...

class CS2PlayerMapStatePartialUpdate(_message.Message):
    __slots__ = ["player_urn", "payload"]
    class Payload(_message.Message):
        __slots__ = ["statistics"]
        STATISTICS_FIELD_NUMBER: _ClassVar[int]
        statistics: CS2PlayerMapStatisticsState
        def __init__(self, statistics: _Optional[_Union[CS2PlayerMapStatisticsState, _Mapping]] = ...) -> None: ...
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    payload: CS2PlayerMapStatePartialUpdate.Payload
    def __init__(self, player_urn: _Optional[str] = ..., payload: _Optional[_Union[CS2PlayerMapStatePartialUpdate.Payload, _Mapping]] = ...) -> None: ...

class CS2PlayerMapState(_message.Message):
    __slots__ = ["player_urn", "player_name", "slot_id", "statistics"]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    PLAYER_NAME_FIELD_NUMBER: _ClassVar[int]
    SLOT_ID_FIELD_NUMBER: _ClassVar[int]
    STATISTICS_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    player_name: str
    slot_id: int
    statistics: CS2PlayerMapStatisticsState
    def __init__(self, player_urn: _Optional[str] = ..., player_name: _Optional[str] = ..., slot_id: _Optional[int] = ..., statistics: _Optional[_Union[CS2PlayerMapStatisticsState, _Mapping]] = ...) -> None: ...

class CS2PlayerMapStatisticsState(_message.Message):
    __slots__ = ["player_urn", "opening_kills", "opening_deaths", "total_damage", "average_damage_per_round", "statistics"]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    OPENING_KILLS_FIELD_NUMBER: _ClassVar[int]
    OPENING_DEATHS_FIELD_NUMBER: _ClassVar[int]
    TOTAL_DAMAGE_FIELD_NUMBER: _ClassVar[int]
    AVERAGE_DAMAGE_PER_ROUND_FIELD_NUMBER: _ClassVar[int]
    STATISTICS_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    opening_kills: int
    opening_deaths: int
    total_damage: int
    average_damage_per_round: float
    statistics: CS2PlayerStatistics
    def __init__(self, player_urn: _Optional[str] = ..., opening_kills: _Optional[int] = ..., opening_deaths: _Optional[int] = ..., total_damage: _Optional[int] = ..., average_damage_per_round: _Optional[float] = ..., statistics: _Optional[_Union[CS2PlayerStatistics, _Mapping]] = ...) -> None: ...

class CS2PlayerCurrentRoundStatePartialUpdate(_message.Message):
    __slots__ = ["player_urn", "payload"]
    class Payload(_message.Message):
        __slots__ = ["statistics", "items", "position"]
        STATISTICS_FIELD_NUMBER: _ClassVar[int]
        ITEMS_FIELD_NUMBER: _ClassVar[int]
        POSITION_FIELD_NUMBER: _ClassVar[int]
        statistics: CS2PlayerCurrentRoundStatisticsState
        items: CS2PlayerItemsState
        position: CS2PlayerPositionState
        def __init__(self, statistics: _Optional[_Union[CS2PlayerCurrentRoundStatisticsState, _Mapping]] = ..., items: _Optional[_Union[CS2PlayerItemsState, _Mapping]] = ..., position: _Optional[_Union[CS2PlayerPositionState, _Mapping]] = ...) -> None: ...
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    payload: CS2PlayerCurrentRoundStatePartialUpdate.Payload
    def __init__(self, player_urn: _Optional[str] = ..., payload: _Optional[_Union[CS2PlayerCurrentRoundStatePartialUpdate.Payload, _Mapping]] = ...) -> None: ...

class CS2PlayerCurrentRoundState(_message.Message):
    __slots__ = ["player_urn", "player_name", "slot_id", "statistics", "items", "position"]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    PLAYER_NAME_FIELD_NUMBER: _ClassVar[int]
    SLOT_ID_FIELD_NUMBER: _ClassVar[int]
    STATISTICS_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    POSITION_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    player_name: str
    slot_id: int
    statistics: CS2PlayerCurrentRoundStatisticsState
    items: CS2PlayerItemsState
    position: CS2PlayerPositionState
    def __init__(self, player_urn: _Optional[str] = ..., player_name: _Optional[str] = ..., slot_id: _Optional[int] = ..., statistics: _Optional[_Union[CS2PlayerCurrentRoundStatisticsState, _Mapping]] = ..., items: _Optional[_Union[CS2PlayerItemsState, _Mapping]] = ..., position: _Optional[_Union[CS2PlayerPositionState, _Mapping]] = ...) -> None: ...

class CS2PlayerCurrentRoundStatisticsState(_message.Message):
    __slots__ = ["player_urn", "alive", "health", "armor", "balance", "damage", "statistics"]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    ALIVE_FIELD_NUMBER: _ClassVar[int]
    HEALTH_FIELD_NUMBER: _ClassVar[int]
    ARMOR_FIELD_NUMBER: _ClassVar[int]
    BALANCE_FIELD_NUMBER: _ClassVar[int]
    DAMAGE_FIELD_NUMBER: _ClassVar[int]
    STATISTICS_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    alive: bool
    health: int
    armor: int
    balance: int
    damage: int
    statistics: CS2PlayerStatistics
    def __init__(self, player_urn: _Optional[str] = ..., alive: bool = ..., health: _Optional[int] = ..., armor: _Optional[int] = ..., balance: _Optional[int] = ..., damage: _Optional[int] = ..., statistics: _Optional[_Union[CS2PlayerStatistics, _Mapping]] = ...) -> None: ...

class CS2PlayerItemsState(_message.Message):
    __slots__ = ["player_urn", "equipment_value", "items"]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    EQUIPMENT_VALUE_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    equipment_value: int
    items: _containers.RepeatedCompositeFieldContainer[CS2Item]
    def __init__(self, player_urn: _Optional[str] = ..., equipment_value: _Optional[int] = ..., items: _Optional[_Iterable[_Union[CS2Item, _Mapping]]] = ...) -> None: ...

class CS2PlayerPreviousRoundState(_message.Message):
    __slots__ = ["player_urn", "player_name", "statistics"]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    PLAYER_NAME_FIELD_NUMBER: _ClassVar[int]
    STATISTICS_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    player_name: str
    statistics: CS2PlayerStatistics
    def __init__(self, player_urn: _Optional[str] = ..., player_name: _Optional[str] = ..., statistics: _Optional[_Union[CS2PlayerStatistics, _Mapping]] = ...) -> None: ...

class CS2PlayerPositionState(_message.Message):
    __slots__ = ["player_urn", "position"]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    POSITION_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    position: CS2Position
    def __init__(self, player_urn: _Optional[str] = ..., position: _Optional[_Union[CS2Position, _Mapping]] = ...) -> None: ...

class CS2PlayerStatistics(_message.Message):
    __slots__ = ["player_urn", "kills", "friendly_kills", "enemy_kills", "self_kills", "deaths", "assists", "headshots", "damage", "friendly_damage_dealt_armor", "friendly_damage_dealt_health", "enemy_damage_dealt_armor", "enemy_damage_dealt_health", "enemy_damage_dealt_armor_raw", "enemy_damage_dealt_health_raw"]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    KILLS_FIELD_NUMBER: _ClassVar[int]
    FRIENDLY_KILLS_FIELD_NUMBER: _ClassVar[int]
    ENEMY_KILLS_FIELD_NUMBER: _ClassVar[int]
    SELF_KILLS_FIELD_NUMBER: _ClassVar[int]
    DEATHS_FIELD_NUMBER: _ClassVar[int]
    ASSISTS_FIELD_NUMBER: _ClassVar[int]
    HEADSHOTS_FIELD_NUMBER: _ClassVar[int]
    DAMAGE_FIELD_NUMBER: _ClassVar[int]
    FRIENDLY_DAMAGE_DEALT_ARMOR_FIELD_NUMBER: _ClassVar[int]
    FRIENDLY_DAMAGE_DEALT_HEALTH_FIELD_NUMBER: _ClassVar[int]
    ENEMY_DAMAGE_DEALT_ARMOR_FIELD_NUMBER: _ClassVar[int]
    ENEMY_DAMAGE_DEALT_HEALTH_FIELD_NUMBER: _ClassVar[int]
    ENEMY_DAMAGE_DEALT_ARMOR_RAW_FIELD_NUMBER: _ClassVar[int]
    ENEMY_DAMAGE_DEALT_HEALTH_RAW_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    kills: int
    friendly_kills: int
    enemy_kills: int
    self_kills: int
    deaths: int
    assists: int
    headshots: int
    damage: int
    friendly_damage_dealt_armor: int
    friendly_damage_dealt_health: int
    enemy_damage_dealt_armor: int
    enemy_damage_dealt_health: int
    enemy_damage_dealt_armor_raw: int
    enemy_damage_dealt_health_raw: int
    def __init__(self, player_urn: _Optional[str] = ..., kills: _Optional[int] = ..., friendly_kills: _Optional[int] = ..., enemy_kills: _Optional[int] = ..., self_kills: _Optional[int] = ..., deaths: _Optional[int] = ..., assists: _Optional[int] = ..., headshots: _Optional[int] = ..., damage: _Optional[int] = ..., friendly_damage_dealt_armor: _Optional[int] = ..., friendly_damage_dealt_health: _Optional[int] = ..., enemy_damage_dealt_armor: _Optional[int] = ..., enemy_damage_dealt_health: _Optional[int] = ..., enemy_damage_dealt_armor_raw: _Optional[int] = ..., enemy_damage_dealt_health_raw: _Optional[int] = ...) -> None: ...

class CS2Item(_message.Message):
    __slots__ = ["name", "weapon_type", "type", "count", "isActive"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    WEAPON_TYPE_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    COUNT_FIELD_NUMBER: _ClassVar[int]
    ISACTIVE_FIELD_NUMBER: _ClassVar[int]
    name: str
    weapon_type: CS2WeaponType
    type: CS2ItemType
    count: int
    isActive: bool
    def __init__(self, name: _Optional[str] = ..., weapon_type: _Optional[_Union[CS2WeaponType, str]] = ..., type: _Optional[_Union[CS2ItemType, str]] = ..., count: _Optional[int] = ..., isActive: bool = ...) -> None: ...

class CS2Position(_message.Message):
    __slots__ = ["x", "y", "z", "angle"]
    X_FIELD_NUMBER: _ClassVar[int]
    Y_FIELD_NUMBER: _ClassVar[int]
    Z_FIELD_NUMBER: _ClassVar[int]
    ANGLE_FIELD_NUMBER: _ClassVar[int]
    x: float
    y: float
    z: float
    angle: float
    def __init__(self, x: _Optional[float] = ..., y: _Optional[float] = ..., z: _Optional[float] = ..., angle: _Optional[float] = ...) -> None: ...

class CS2Event(_message.Message):
    __slots__ = ["bomb_defuse_started", "bomb_defused", "bomb_exploded", "bomb_plant_started", "bomb_planted", "damage_dealt", "freeze_time_ended", "freeze_time_started", "item_drop", "item_pick_up", "item_purchase", "item_throw", "kill", "death", "map_end", "map_start", "round_end", "round_pause", "round_resume", "round_rollback", "round_start"]
    BOMB_DEFUSE_STARTED_FIELD_NUMBER: _ClassVar[int]
    BOMB_DEFUSED_FIELD_NUMBER: _ClassVar[int]
    BOMB_EXPLODED_FIELD_NUMBER: _ClassVar[int]
    BOMB_PLANT_STARTED_FIELD_NUMBER: _ClassVar[int]
    BOMB_PLANTED_FIELD_NUMBER: _ClassVar[int]
    DAMAGE_DEALT_FIELD_NUMBER: _ClassVar[int]
    FREEZE_TIME_ENDED_FIELD_NUMBER: _ClassVar[int]
    FREEZE_TIME_STARTED_FIELD_NUMBER: _ClassVar[int]
    ITEM_DROP_FIELD_NUMBER: _ClassVar[int]
    ITEM_PICK_UP_FIELD_NUMBER: _ClassVar[int]
    ITEM_PURCHASE_FIELD_NUMBER: _ClassVar[int]
    ITEM_THROW_FIELD_NUMBER: _ClassVar[int]
    KILL_FIELD_NUMBER: _ClassVar[int]
    DEATH_FIELD_NUMBER: _ClassVar[int]
    MAP_END_FIELD_NUMBER: _ClassVar[int]
    MAP_START_FIELD_NUMBER: _ClassVar[int]
    ROUND_END_FIELD_NUMBER: _ClassVar[int]
    ROUND_PAUSE_FIELD_NUMBER: _ClassVar[int]
    ROUND_RESUME_FIELD_NUMBER: _ClassVar[int]
    ROUND_ROLLBACK_FIELD_NUMBER: _ClassVar[int]
    ROUND_START_FIELD_NUMBER: _ClassVar[int]
    bomb_defuse_started: CS2BombDefuseStarted
    bomb_defused: CS2BombDefused
    bomb_exploded: CS2BombExploded
    bomb_plant_started: CS2BombPlantStarted
    bomb_planted: CS2BombPlanted
    damage_dealt: CS2DamageDealt
    freeze_time_ended: CS2FreezeTimeEnded
    freeze_time_started: CS2FreezeTimeStarted
    item_drop: CS2ItemDrop
    item_pick_up: CS2ItemPickUp
    item_purchase: CS2ItemPurchase
    item_throw: CS2ItemThrow
    kill: CS2Kill
    death: CS2Death
    map_end: CS2MapEnd
    map_start: CS2MapStart
    round_end: CS2RoundEnd
    round_pause: CS2RoundPause
    round_resume: CS2RoundResume
    round_rollback: CS2RoundRollback
    round_start: CS2RoundStart
    def __init__(self, bomb_defuse_started: _Optional[_Union[CS2BombDefuseStarted, _Mapping]] = ..., bomb_defused: _Optional[_Union[CS2BombDefused, _Mapping]] = ..., bomb_exploded: _Optional[_Union[CS2BombExploded, _Mapping]] = ..., bomb_plant_started: _Optional[_Union[CS2BombPlantStarted, _Mapping]] = ..., bomb_planted: _Optional[_Union[CS2BombPlanted, _Mapping]] = ..., damage_dealt: _Optional[_Union[CS2DamageDealt, _Mapping]] = ..., freeze_time_ended: _Optional[_Union[CS2FreezeTimeEnded, _Mapping]] = ..., freeze_time_started: _Optional[_Union[CS2FreezeTimeStarted, _Mapping]] = ..., item_drop: _Optional[_Union[CS2ItemDrop, _Mapping]] = ..., item_pick_up: _Optional[_Union[CS2ItemPickUp, _Mapping]] = ..., item_purchase: _Optional[_Union[CS2ItemPurchase, _Mapping]] = ..., item_throw: _Optional[_Union[CS2ItemThrow, _Mapping]] = ..., kill: _Optional[_Union[CS2Kill, _Mapping]] = ..., death: _Optional[_Union[CS2Death, _Mapping]] = ..., map_end: _Optional[_Union[CS2MapEnd, _Mapping]] = ..., map_start: _Optional[_Union[CS2MapStart, _Mapping]] = ..., round_end: _Optional[_Union[CS2RoundEnd, _Mapping]] = ..., round_pause: _Optional[_Union[CS2RoundPause, _Mapping]] = ..., round_resume: _Optional[_Union[CS2RoundResume, _Mapping]] = ..., round_rollback: _Optional[_Union[CS2RoundRollback, _Mapping]] = ..., round_start: _Optional[_Union[CS2RoundStart, _Mapping]] = ...) -> None: ...

class CS2PlayerBalance(_message.Message):
    __slots__ = ["player_urn", "team_urn", "balance"]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    BALANCE_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    team_urn: str
    balance: int
    def __init__(self, player_urn: _Optional[str] = ..., team_urn: _Optional[str] = ..., balance: _Optional[int] = ...) -> None: ...

class CS2PlayerItems(_message.Message):
    __slots__ = ["player_urn", "team_urn", "equipment_value", "items"]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    EQUIPMENT_VALUE_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    team_urn: str
    equipment_value: int
    items: _containers.RepeatedCompositeFieldContainer[CS2Item]
    def __init__(self, player_urn: _Optional[str] = ..., team_urn: _Optional[str] = ..., equipment_value: _Optional[int] = ..., items: _Optional[_Iterable[_Union[CS2Item, _Mapping]]] = ...) -> None: ...

class CS2BombDefuseStarted(_message.Message):
    __slots__ = ["map_time", "time_remaining", "current_round_number", "player_urn", "team_urn"]
    MAP_TIME_FIELD_NUMBER: _ClassVar[int]
    TIME_REMAINING_FIELD_NUMBER: _ClassVar[int]
    CURRENT_ROUND_NUMBER_FIELD_NUMBER: _ClassVar[int]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    map_time: _duration_pb2.Duration
    time_remaining: _duration_pb2.Duration
    current_round_number: int
    player_urn: str
    team_urn: str
    def __init__(self, map_time: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., time_remaining: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., current_round_number: _Optional[int] = ..., player_urn: _Optional[str] = ..., team_urn: _Optional[str] = ...) -> None: ...

class CS2BombDefused(_message.Message):
    __slots__ = ["map_time", "time_remaining", "current_round_number", "player_urn", "team_urn"]
    MAP_TIME_FIELD_NUMBER: _ClassVar[int]
    TIME_REMAINING_FIELD_NUMBER: _ClassVar[int]
    CURRENT_ROUND_NUMBER_FIELD_NUMBER: _ClassVar[int]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    map_time: _duration_pb2.Duration
    time_remaining: _duration_pb2.Duration
    current_round_number: int
    player_urn: str
    team_urn: str
    def __init__(self, map_time: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., time_remaining: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., current_round_number: _Optional[int] = ..., player_urn: _Optional[str] = ..., team_urn: _Optional[str] = ...) -> None: ...

class CS2BombExploded(_message.Message):
    __slots__ = ["map_time", "time_remaining", "current_round_number"]
    MAP_TIME_FIELD_NUMBER: _ClassVar[int]
    TIME_REMAINING_FIELD_NUMBER: _ClassVar[int]
    CURRENT_ROUND_NUMBER_FIELD_NUMBER: _ClassVar[int]
    map_time: _duration_pb2.Duration
    time_remaining: _duration_pb2.Duration
    current_round_number: int
    def __init__(self, map_time: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., time_remaining: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., current_round_number: _Optional[int] = ...) -> None: ...

class CS2BombPlantStarted(_message.Message):
    __slots__ = ["map_time", "time_remaining", "current_round_number", "player_urn", "team_urn"]
    MAP_TIME_FIELD_NUMBER: _ClassVar[int]
    TIME_REMAINING_FIELD_NUMBER: _ClassVar[int]
    CURRENT_ROUND_NUMBER_FIELD_NUMBER: _ClassVar[int]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    map_time: _duration_pb2.Duration
    time_remaining: _duration_pb2.Duration
    current_round_number: int
    player_urn: str
    team_urn: str
    def __init__(self, map_time: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., time_remaining: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., current_round_number: _Optional[int] = ..., player_urn: _Optional[str] = ..., team_urn: _Optional[str] = ...) -> None: ...

class CS2BombPlanted(_message.Message):
    __slots__ = ["map_time", "time_remaining", "current_round_number", "player_urn", "team_urn"]
    MAP_TIME_FIELD_NUMBER: _ClassVar[int]
    TIME_REMAINING_FIELD_NUMBER: _ClassVar[int]
    CURRENT_ROUND_NUMBER_FIELD_NUMBER: _ClassVar[int]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    map_time: _duration_pb2.Duration
    time_remaining: _duration_pb2.Duration
    current_round_number: int
    player_urn: str
    team_urn: str
    def __init__(self, map_time: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., time_remaining: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., current_round_number: _Optional[int] = ..., player_urn: _Optional[str] = ..., team_urn: _Optional[str] = ...) -> None: ...

class CS2DamageDealt(_message.Message):
    __slots__ = ["map_time", "time_remaining", "current_round_number", "killer_position", "killer_urn", "killer_team_urn", "victim_urn", "victim_team_urn", "weapon", "hitgroup", "health_deducted", "health_remaining", "armor_deducted", "armor_remaining", "victim_position"]
    MAP_TIME_FIELD_NUMBER: _ClassVar[int]
    TIME_REMAINING_FIELD_NUMBER: _ClassVar[int]
    CURRENT_ROUND_NUMBER_FIELD_NUMBER: _ClassVar[int]
    KILLER_POSITION_FIELD_NUMBER: _ClassVar[int]
    KILLER_URN_FIELD_NUMBER: _ClassVar[int]
    KILLER_TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    VICTIM_URN_FIELD_NUMBER: _ClassVar[int]
    VICTIM_TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    WEAPON_FIELD_NUMBER: _ClassVar[int]
    HITGROUP_FIELD_NUMBER: _ClassVar[int]
    HEALTH_DEDUCTED_FIELD_NUMBER: _ClassVar[int]
    HEALTH_REMAINING_FIELD_NUMBER: _ClassVar[int]
    ARMOR_DEDUCTED_FIELD_NUMBER: _ClassVar[int]
    ARMOR_REMAINING_FIELD_NUMBER: _ClassVar[int]
    VICTIM_POSITION_FIELD_NUMBER: _ClassVar[int]
    map_time: _duration_pb2.Duration
    time_remaining: _duration_pb2.Duration
    current_round_number: int
    killer_position: CS2Position
    killer_urn: str
    killer_team_urn: str
    victim_urn: str
    victim_team_urn: str
    weapon: str
    hitgroup: str
    health_deducted: int
    health_remaining: int
    armor_deducted: int
    armor_remaining: int
    victim_position: CS2Position
    def __init__(self, map_time: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., time_remaining: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., current_round_number: _Optional[int] = ..., killer_position: _Optional[_Union[CS2Position, _Mapping]] = ..., killer_urn: _Optional[str] = ..., killer_team_urn: _Optional[str] = ..., victim_urn: _Optional[str] = ..., victim_team_urn: _Optional[str] = ..., weapon: _Optional[str] = ..., hitgroup: _Optional[str] = ..., health_deducted: _Optional[int] = ..., health_remaining: _Optional[int] = ..., armor_deducted: _Optional[int] = ..., armor_remaining: _Optional[int] = ..., victim_position: _Optional[_Union[CS2Position, _Mapping]] = ...) -> None: ...

class CS2FreezeTimeEnded(_message.Message):
    __slots__ = ["map_time", "time_remaining", "current_round_number", "player_balances", "player_inventories"]
    class PlayerBalancesEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: CS2PlayerBalance
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[CS2PlayerBalance, _Mapping]] = ...) -> None: ...
    class PlayerInventoriesEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: CS2PlayerItems
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[CS2PlayerItems, _Mapping]] = ...) -> None: ...
    MAP_TIME_FIELD_NUMBER: _ClassVar[int]
    TIME_REMAINING_FIELD_NUMBER: _ClassVar[int]
    CURRENT_ROUND_NUMBER_FIELD_NUMBER: _ClassVar[int]
    PLAYER_BALANCES_FIELD_NUMBER: _ClassVar[int]
    PLAYER_INVENTORIES_FIELD_NUMBER: _ClassVar[int]
    map_time: _duration_pb2.Duration
    time_remaining: _duration_pb2.Duration
    current_round_number: int
    player_balances: _containers.MessageMap[str, CS2PlayerBalance]
    player_inventories: _containers.MessageMap[str, CS2PlayerItems]
    def __init__(self, map_time: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., time_remaining: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., current_round_number: _Optional[int] = ..., player_balances: _Optional[_Mapping[str, CS2PlayerBalance]] = ..., player_inventories: _Optional[_Mapping[str, CS2PlayerItems]] = ...) -> None: ...

class CS2FreezeTimeStarted(_message.Message):
    __slots__ = ["map_time", "time_remaining", "current_round_number", "player_balances", "teams_round_info"]
    class PlayerBalancesEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: CS2PlayerBalance
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[CS2PlayerBalance, _Mapping]] = ...) -> None: ...
    class TeamsRoundInfoEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: CS2Side
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[CS2Side, str]] = ...) -> None: ...
    MAP_TIME_FIELD_NUMBER: _ClassVar[int]
    TIME_REMAINING_FIELD_NUMBER: _ClassVar[int]
    CURRENT_ROUND_NUMBER_FIELD_NUMBER: _ClassVar[int]
    PLAYER_BALANCES_FIELD_NUMBER: _ClassVar[int]
    TEAMS_ROUND_INFO_FIELD_NUMBER: _ClassVar[int]
    map_time: _duration_pb2.Duration
    time_remaining: _duration_pb2.Duration
    current_round_number: int
    player_balances: _containers.MessageMap[str, CS2PlayerBalance]
    teams_round_info: _containers.ScalarMap[str, CS2Side]
    def __init__(self, map_time: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., time_remaining: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., current_round_number: _Optional[int] = ..., player_balances: _Optional[_Mapping[str, CS2PlayerBalance]] = ..., teams_round_info: _Optional[_Mapping[str, CS2Side]] = ...) -> None: ...

class CS2ItemDrop(_message.Message):
    __slots__ = ["map_time", "time_remaining", "current_round_number", "position", "player_urn", "team_urn", "item"]
    MAP_TIME_FIELD_NUMBER: _ClassVar[int]
    TIME_REMAINING_FIELD_NUMBER: _ClassVar[int]
    CURRENT_ROUND_NUMBER_FIELD_NUMBER: _ClassVar[int]
    POSITION_FIELD_NUMBER: _ClassVar[int]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    map_time: _duration_pb2.Duration
    time_remaining: _duration_pb2.Duration
    current_round_number: int
    position: CS2Position
    player_urn: str
    team_urn: str
    item: str
    def __init__(self, map_time: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., time_remaining: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., current_round_number: _Optional[int] = ..., position: _Optional[_Union[CS2Position, _Mapping]] = ..., player_urn: _Optional[str] = ..., team_urn: _Optional[str] = ..., item: _Optional[str] = ...) -> None: ...

class CS2ItemPickUp(_message.Message):
    __slots__ = ["map_time", "time_remaining", "current_round_number", "player_urn", "team_urn", "item"]
    MAP_TIME_FIELD_NUMBER: _ClassVar[int]
    TIME_REMAINING_FIELD_NUMBER: _ClassVar[int]
    CURRENT_ROUND_NUMBER_FIELD_NUMBER: _ClassVar[int]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    map_time: _duration_pb2.Duration
    time_remaining: _duration_pb2.Duration
    current_round_number: int
    player_urn: str
    team_urn: str
    item: str
    def __init__(self, map_time: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., time_remaining: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., current_round_number: _Optional[int] = ..., player_urn: _Optional[str] = ..., team_urn: _Optional[str] = ..., item: _Optional[str] = ...) -> None: ...

class CS2ItemPurchase(_message.Message):
    __slots__ = ["map_time", "time_remaining", "current_round_number", "player_urn", "team_urn", "item", "player_balance", "equipment_value"]
    MAP_TIME_FIELD_NUMBER: _ClassVar[int]
    TIME_REMAINING_FIELD_NUMBER: _ClassVar[int]
    CURRENT_ROUND_NUMBER_FIELD_NUMBER: _ClassVar[int]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    PLAYER_BALANCE_FIELD_NUMBER: _ClassVar[int]
    EQUIPMENT_VALUE_FIELD_NUMBER: _ClassVar[int]
    map_time: _duration_pb2.Duration
    time_remaining: _duration_pb2.Duration
    current_round_number: int
    player_urn: str
    team_urn: str
    item: str
    player_balance: int
    equipment_value: int
    def __init__(self, map_time: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., time_remaining: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., current_round_number: _Optional[int] = ..., player_urn: _Optional[str] = ..., team_urn: _Optional[str] = ..., item: _Optional[str] = ..., player_balance: _Optional[int] = ..., equipment_value: _Optional[int] = ...) -> None: ...

class CS2ItemThrow(_message.Message):
    __slots__ = ["map_time", "time_remaining", "current_round_number", "position", "player_urn", "team_urn", "item"]
    MAP_TIME_FIELD_NUMBER: _ClassVar[int]
    TIME_REMAINING_FIELD_NUMBER: _ClassVar[int]
    CURRENT_ROUND_NUMBER_FIELD_NUMBER: _ClassVar[int]
    POSITION_FIELD_NUMBER: _ClassVar[int]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    map_time: _duration_pb2.Duration
    time_remaining: _duration_pb2.Duration
    current_round_number: int
    position: CS2Position
    player_urn: str
    team_urn: str
    item: str
    def __init__(self, map_time: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., time_remaining: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., current_round_number: _Optional[int] = ..., position: _Optional[_Union[CS2Position, _Mapping]] = ..., player_urn: _Optional[str] = ..., team_urn: _Optional[str] = ..., item: _Optional[str] = ...) -> None: ...

class CS2Kill(_message.Message):
    __slots__ = ["map_time", "time_remaining", "current_round_number", "killer_position", "killer_urn", "killer_team_urn", "victim_urn", "victim_team_urn", "weapon", "headshot", "penetrated", "assistants"]
    MAP_TIME_FIELD_NUMBER: _ClassVar[int]
    TIME_REMAINING_FIELD_NUMBER: _ClassVar[int]
    CURRENT_ROUND_NUMBER_FIELD_NUMBER: _ClassVar[int]
    KILLER_POSITION_FIELD_NUMBER: _ClassVar[int]
    KILLER_URN_FIELD_NUMBER: _ClassVar[int]
    KILLER_TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    VICTIM_URN_FIELD_NUMBER: _ClassVar[int]
    VICTIM_TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    WEAPON_FIELD_NUMBER: _ClassVar[int]
    HEADSHOT_FIELD_NUMBER: _ClassVar[int]
    PENETRATED_FIELD_NUMBER: _ClassVar[int]
    ASSISTANTS_FIELD_NUMBER: _ClassVar[int]
    map_time: _duration_pb2.Duration
    time_remaining: _duration_pb2.Duration
    current_round_number: int
    killer_position: CS2Position
    killer_urn: str
    killer_team_urn: str
    victim_urn: str
    victim_team_urn: str
    weapon: str
    headshot: bool
    penetrated: bool
    assistants: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, map_time: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., time_remaining: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., current_round_number: _Optional[int] = ..., killer_position: _Optional[_Union[CS2Position, _Mapping]] = ..., killer_urn: _Optional[str] = ..., killer_team_urn: _Optional[str] = ..., victim_urn: _Optional[str] = ..., victim_team_urn: _Optional[str] = ..., weapon: _Optional[str] = ..., headshot: bool = ..., penetrated: bool = ..., assistants: _Optional[_Iterable[str]] = ...) -> None: ...

class CS2Death(_message.Message):
    __slots__ = ["map_time", "time_remaining", "current_round_number", "position", "player_urn", "team_urn", "total_deaths", "suicide", "death_by_bomb"]
    MAP_TIME_FIELD_NUMBER: _ClassVar[int]
    TIME_REMAINING_FIELD_NUMBER: _ClassVar[int]
    CURRENT_ROUND_NUMBER_FIELD_NUMBER: _ClassVar[int]
    POSITION_FIELD_NUMBER: _ClassVar[int]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    TOTAL_DEATHS_FIELD_NUMBER: _ClassVar[int]
    SUICIDE_FIELD_NUMBER: _ClassVar[int]
    DEATH_BY_BOMB_FIELD_NUMBER: _ClassVar[int]
    map_time: _duration_pb2.Duration
    time_remaining: _duration_pb2.Duration
    current_round_number: int
    position: CS2Position
    player_urn: str
    team_urn: str
    total_deaths: int
    suicide: bool
    death_by_bomb: bool
    def __init__(self, map_time: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., time_remaining: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., current_round_number: _Optional[int] = ..., position: _Optional[_Union[CS2Position, _Mapping]] = ..., player_urn: _Optional[str] = ..., team_urn: _Optional[str] = ..., total_deaths: _Optional[int] = ..., suicide: bool = ..., death_by_bomb: bool = ...) -> None: ...

class CS2MapEnd(_message.Message):
    __slots__ = ["map_time", "current_round_number", "map_name", "winning_team_urn"]
    MAP_TIME_FIELD_NUMBER: _ClassVar[int]
    CURRENT_ROUND_NUMBER_FIELD_NUMBER: _ClassVar[int]
    MAP_NAME_FIELD_NUMBER: _ClassVar[int]
    WINNING_TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    map_time: _duration_pb2.Duration
    current_round_number: int
    map_name: str
    winning_team_urn: str
    def __init__(self, map_time: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., current_round_number: _Optional[int] = ..., map_name: _Optional[str] = ..., winning_team_urn: _Optional[str] = ...) -> None: ...

class CS2MapStart(_message.Message):
    __slots__ = ["map_time", "map_name"]
    MAP_TIME_FIELD_NUMBER: _ClassVar[int]
    MAP_NAME_FIELD_NUMBER: _ClassVar[int]
    map_time: _duration_pb2.Duration
    map_name: str
    def __init__(self, map_time: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., map_name: _Optional[str] = ...) -> None: ...

class CS2RoundEnd(_message.Message):
    __slots__ = ["map_time", "time_remaining", "current_round_number", "winning_team_urn", "win_reason", "player_balances", "player_inventories"]
    class PlayerBalancesEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: CS2PlayerBalance
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[CS2PlayerBalance, _Mapping]] = ...) -> None: ...
    class PlayerInventoriesEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: CS2PlayerItems
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[CS2PlayerItems, _Mapping]] = ...) -> None: ...
    MAP_TIME_FIELD_NUMBER: _ClassVar[int]
    TIME_REMAINING_FIELD_NUMBER: _ClassVar[int]
    CURRENT_ROUND_NUMBER_FIELD_NUMBER: _ClassVar[int]
    WINNING_TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    WIN_REASON_FIELD_NUMBER: _ClassVar[int]
    PLAYER_BALANCES_FIELD_NUMBER: _ClassVar[int]
    PLAYER_INVENTORIES_FIELD_NUMBER: _ClassVar[int]
    map_time: _duration_pb2.Duration
    time_remaining: _duration_pb2.Duration
    current_round_number: int
    winning_team_urn: str
    win_reason: CS2WinReason
    player_balances: _containers.MessageMap[str, CS2PlayerBalance]
    player_inventories: _containers.MessageMap[str, CS2PlayerItems]
    def __init__(self, map_time: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., time_remaining: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., current_round_number: _Optional[int] = ..., winning_team_urn: _Optional[str] = ..., win_reason: _Optional[_Union[CS2WinReason, str]] = ..., player_balances: _Optional[_Mapping[str, CS2PlayerBalance]] = ..., player_inventories: _Optional[_Mapping[str, CS2PlayerItems]] = ...) -> None: ...

class CS2RoundPause(_message.Message):
    __slots__ = ["map_time", "time_remaining", "current_round_number"]
    MAP_TIME_FIELD_NUMBER: _ClassVar[int]
    TIME_REMAINING_FIELD_NUMBER: _ClassVar[int]
    CURRENT_ROUND_NUMBER_FIELD_NUMBER: _ClassVar[int]
    map_time: _duration_pb2.Duration
    time_remaining: _duration_pb2.Duration
    current_round_number: int
    def __init__(self, map_time: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., time_remaining: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., current_round_number: _Optional[int] = ...) -> None: ...

class CS2RoundResume(_message.Message):
    __slots__ = ["map_time", "time_remaining", "current_round_number"]
    MAP_TIME_FIELD_NUMBER: _ClassVar[int]
    TIME_REMAINING_FIELD_NUMBER: _ClassVar[int]
    CURRENT_ROUND_NUMBER_FIELD_NUMBER: _ClassVar[int]
    map_time: _duration_pb2.Duration
    time_remaining: _duration_pb2.Duration
    current_round_number: int
    def __init__(self, map_time: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., time_remaining: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., current_round_number: _Optional[int] = ...) -> None: ...

class CS2RoundRollback(_message.Message):
    __slots__ = ["next_round_number"]
    NEXT_ROUND_NUMBER_FIELD_NUMBER: _ClassVar[int]
    next_round_number: int
    def __init__(self, next_round_number: _Optional[int] = ...) -> None: ...

class CS2RoundStart(_message.Message):
    __slots__ = ["map_time", "time_remaining", "current_round_number"]
    MAP_TIME_FIELD_NUMBER: _ClassVar[int]
    TIME_REMAINING_FIELD_NUMBER: _ClassVar[int]
    CURRENT_ROUND_NUMBER_FIELD_NUMBER: _ClassVar[int]
    map_time: _duration_pb2.Duration
    time_remaining: _duration_pb2.Duration
    current_round_number: int
    def __init__(self, map_time: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., time_remaining: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., current_round_number: _Optional[int] = ...) -> None: ...
