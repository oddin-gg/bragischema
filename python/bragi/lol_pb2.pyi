from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import duration_pb2 as _duration_pb2
from bragi import common_pb2 as _common_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class LolFaction(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    LOL_FACTION_UNSPECIFIED: _ClassVar[LolFaction]
    LOL_FACTION_BLUE: _ClassVar[LolFaction]
    LOL_FACTION_RED: _ClassVar[LolFaction]

class LolLane(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    LOL_LANE_UNSPECIFIED: _ClassVar[LolLane]
    LOL_LANE_TOP: _ClassVar[LolLane]
    LOL_LANE_MID: _ClassVar[LolLane]
    LOL_LANE_BOT: _ClassVar[LolLane]

class LolTurretTier(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    LOL_TURRET_TIER_UNSPECIFIED: _ClassVar[LolTurretTier]
    LOL_TURRET_TIER_1: _ClassVar[LolTurretTier]
    LOL_TURRET_TIER_2: _ClassVar[LolTurretTier]
    LOL_TURRET_TIER_3: _ClassVar[LolTurretTier]
    LOL_TURRET_TIER_4: _ClassVar[LolTurretTier]
LOL_FACTION_UNSPECIFIED: LolFaction
LOL_FACTION_BLUE: LolFaction
LOL_FACTION_RED: LolFaction
LOL_LANE_UNSPECIFIED: LolLane
LOL_LANE_TOP: LolLane
LOL_LANE_MID: LolLane
LOL_LANE_BOT: LolLane
LOL_TURRET_TIER_UNSPECIFIED: LolTurretTier
LOL_TURRET_TIER_1: LolTurretTier
LOL_TURRET_TIER_2: LolTurretTier
LOL_TURRET_TIER_3: LolTurretTier
LOL_TURRET_TIER_4: LolTurretTier

class LolMatchMessage(_message.Message):
    __slots__ = ["match_urn", "sequence", "timestamp", "data_status", "payload"]
    class Payload(_message.Message):
        __slots__ = ["snapshot", "update"]
        SNAPSHOT_FIELD_NUMBER: _ClassVar[int]
        UPDATE_FIELD_NUMBER: _ClassVar[int]
        snapshot: LolMatchSnapshot
        update: LolMatchUpdate
        def __init__(self, snapshot: _Optional[_Union[LolMatchSnapshot, _Mapping]] = ..., update: _Optional[_Union[LolMatchUpdate, _Mapping]] = ...) -> None: ...
    MATCH_URN_FIELD_NUMBER: _ClassVar[int]
    SEQUENCE_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    DATA_STATUS_FIELD_NUMBER: _ClassVar[int]
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    match_urn: str
    sequence: int
    timestamp: _timestamp_pb2.Timestamp
    data_status: _common_pb2.DataStatus
    payload: LolMatchMessage.Payload
    def __init__(self, match_urn: _Optional[str] = ..., sequence: _Optional[int] = ..., timestamp: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., data_status: _Optional[_Union[_common_pb2.DataStatus, str]] = ..., payload: _Optional[_Union[LolMatchMessage.Payload, _Mapping]] = ...) -> None: ...

class LolMatchSnapshot(_message.Message):
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
    match_state: LolMatchState
    tournament: _common_pb2.Tournament
    def __init__(self, match_urn: _Optional[str] = ..., sequence: _Optional[int] = ..., timestamp: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., data_status: _Optional[_Union[_common_pb2.DataStatus, str]] = ..., announcements: _Optional[_Iterable[_Union[_common_pb2.Announcement, _Mapping]]] = ..., match_state: _Optional[_Union[LolMatchState, _Mapping]] = ..., tournament: _Optional[_Union[_common_pb2.Tournament, _Mapping]] = ...) -> None: ...

class LolMatchUpdate(_message.Message):
    __slots__ = ["payload"]
    class Payload(_message.Message):
        __slots__ = ["match_state", "partial_updates"]
        MATCH_STATE_FIELD_NUMBER: _ClassVar[int]
        PARTIAL_UPDATES_FIELD_NUMBER: _ClassVar[int]
        match_state: LolMatchState
        partial_updates: LolMatchStatePartialUpdates
        def __init__(self, match_state: _Optional[_Union[LolMatchState, _Mapping]] = ..., partial_updates: _Optional[_Union[LolMatchStatePartialUpdates, _Mapping]] = ...) -> None: ...
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    payload: LolMatchUpdate.Payload
    def __init__(self, payload: _Optional[_Union[LolMatchUpdate.Payload, _Mapping]] = ...) -> None: ...

class LolMatchStatePartialUpdates(_message.Message):
    __slots__ = ["updates"]
    UPDATES_FIELD_NUMBER: _ClassVar[int]
    updates: _containers.RepeatedCompositeFieldContainer[LolMatchStatePartialUpdate]
    def __init__(self, updates: _Optional[_Iterable[_Union[LolMatchStatePartialUpdate, _Mapping]]] = ...) -> None: ...

class LolMatchStatePartialUpdate(_message.Message):
    __slots__ = ["score", "current_map_state", "current_map_state_partial_update"]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    CURRENT_MAP_STATE_FIELD_NUMBER: _ClassVar[int]
    CURRENT_MAP_STATE_PARTIAL_UPDATE_FIELD_NUMBER: _ClassVar[int]
    score: LolMatchScoreState
    current_map_state: LolCurrentMapState
    current_map_state_partial_update: LolCurrentMapStatePartialUpdate
    def __init__(self, score: _Optional[_Union[LolMatchScoreState, _Mapping]] = ..., current_map_state: _Optional[_Union[LolCurrentMapState, _Mapping]] = ..., current_map_state_partial_update: _Optional[_Union[LolCurrentMapStatePartialUpdate, _Mapping]] = ...) -> None: ...

class LolMatchState(_message.Message):
    __slots__ = ["match_urn", "match_type", "home_team", "away_team", "score", "match_status", "current_map", "previous_maps"]
    MATCH_URN_FIELD_NUMBER: _ClassVar[int]
    MATCH_TYPE_FIELD_NUMBER: _ClassVar[int]
    HOME_TEAM_FIELD_NUMBER: _ClassVar[int]
    AWAY_TEAM_FIELD_NUMBER: _ClassVar[int]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    MATCH_STATUS_FIELD_NUMBER: _ClassVar[int]
    CURRENT_MAP_FIELD_NUMBER: _ClassVar[int]
    PREVIOUS_MAPS_FIELD_NUMBER: _ClassVar[int]
    match_urn: str
    match_type: _common_pb2.BestOfType
    home_team: _common_pb2.Team
    away_team: _common_pb2.Team
    score: LolMatchScoreState
    match_status: _common_pb2.MatchStatusType
    current_map: LolCurrentMapState
    previous_maps: _containers.RepeatedCompositeFieldContainer[LolPreviousMapState]
    def __init__(self, match_urn: _Optional[str] = ..., match_type: _Optional[_Union[_common_pb2.BestOfType, str]] = ..., home_team: _Optional[_Union[_common_pb2.Team, _Mapping]] = ..., away_team: _Optional[_Union[_common_pb2.Team, _Mapping]] = ..., score: _Optional[_Union[LolMatchScoreState, _Mapping]] = ..., match_status: _Optional[_Union[_common_pb2.MatchStatusType, str]] = ..., current_map: _Optional[_Union[LolCurrentMapState, _Mapping]] = ..., previous_maps: _Optional[_Iterable[_Union[LolPreviousMapState, _Mapping]]] = ...) -> None: ...

class LolMatchScoreState(_message.Message):
    __slots__ = ["home_score", "away_score"]
    HOME_SCORE_FIELD_NUMBER: _ClassVar[int]
    AWAY_SCORE_FIELD_NUMBER: _ClassVar[int]
    home_score: int
    away_score: int
    def __init__(self, home_score: _Optional[int] = ..., away_score: _Optional[int] = ...) -> None: ...

class LolCurrentMapStatePartialUpdate(_message.Message):
    __slots__ = ["game_time", "team_current_map_state", "team_current_map_partial_update", "turrets", "inhibitors"]
    GAME_TIME_FIELD_NUMBER: _ClassVar[int]
    TEAM_CURRENT_MAP_STATE_FIELD_NUMBER: _ClassVar[int]
    TEAM_CURRENT_MAP_PARTIAL_UPDATE_FIELD_NUMBER: _ClassVar[int]
    TURRETS_FIELD_NUMBER: _ClassVar[int]
    INHIBITORS_FIELD_NUMBER: _ClassVar[int]
    game_time: LolCurrentMapTimeState
    team_current_map_state: LolTeamCurrentMapState
    team_current_map_partial_update: LolTeamCurrentMapStatePartialUpdate
    turrets: LolTurrets
    inhibitors: LolInhibitors
    def __init__(self, game_time: _Optional[_Union[LolCurrentMapTimeState, _Mapping]] = ..., team_current_map_state: _Optional[_Union[LolTeamCurrentMapState, _Mapping]] = ..., team_current_map_partial_update: _Optional[_Union[LolTeamCurrentMapStatePartialUpdate, _Mapping]] = ..., turrets: _Optional[_Union[LolTurrets, _Mapping]] = ..., inhibitors: _Optional[_Union[LolInhibitors, _Mapping]] = ...) -> None: ...

class LolCurrentMapState(_message.Message):
    __slots__ = ["map_order", "map_paused", "game_time", "teams", "turrets", "inhibitors"]
    class TeamsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: LolTeamCurrentMapState
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[LolTeamCurrentMapState, _Mapping]] = ...) -> None: ...
    MAP_ORDER_FIELD_NUMBER: _ClassVar[int]
    MAP_PAUSED_FIELD_NUMBER: _ClassVar[int]
    GAME_TIME_FIELD_NUMBER: _ClassVar[int]
    TEAMS_FIELD_NUMBER: _ClassVar[int]
    TURRETS_FIELD_NUMBER: _ClassVar[int]
    INHIBITORS_FIELD_NUMBER: _ClassVar[int]
    map_order: int
    map_paused: bool
    game_time: LolCurrentMapTimeState
    teams: _containers.MessageMap[str, LolTeamCurrentMapState]
    turrets: LolTurrets
    inhibitors: LolInhibitors
    def __init__(self, map_order: _Optional[int] = ..., map_paused: bool = ..., game_time: _Optional[_Union[LolCurrentMapTimeState, _Mapping]] = ..., teams: _Optional[_Mapping[str, LolTeamCurrentMapState]] = ..., turrets: _Optional[_Union[LolTurrets, _Mapping]] = ..., inhibitors: _Optional[_Union[LolInhibitors, _Mapping]] = ...) -> None: ...

class LolCurrentMapTimeState(_message.Message):
    __slots__ = ["game_time"]
    GAME_TIME_FIELD_NUMBER: _ClassVar[int]
    game_time: _duration_pb2.Duration
    def __init__(self, game_time: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ...) -> None: ...

class LolPreviousMapState(_message.Message):
    __slots__ = ["map_order", "teams"]
    class TeamsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: LolTeamPreviousMapState
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[LolTeamPreviousMapState, _Mapping]] = ...) -> None: ...
    MAP_ORDER_FIELD_NUMBER: _ClassVar[int]
    TEAMS_FIELD_NUMBER: _ClassVar[int]
    map_order: int
    teams: _containers.MessageMap[str, LolTeamPreviousMapState]
    def __init__(self, map_order: _Optional[int] = ..., teams: _Optional[_Mapping[str, LolTeamPreviousMapState]] = ...) -> None: ...

class LolTeamCurrentMapStatePartialUpdate(_message.Message):
    __slots__ = ["team_urn", "payload"]
    class Payload(_message.Message):
        __slots__ = ["statistics", "player_current_map_state", "player_current_map_partial_update"]
        STATISTICS_FIELD_NUMBER: _ClassVar[int]
        PLAYER_CURRENT_MAP_STATE_FIELD_NUMBER: _ClassVar[int]
        PLAYER_CURRENT_MAP_PARTIAL_UPDATE_FIELD_NUMBER: _ClassVar[int]
        statistics: LolTeamCurrentMapStatisticsState
        player_current_map_state: LolPlayerCurrentMapState
        player_current_map_partial_update: LolPlayerCurrentMapStatePartialUpdate
        def __init__(self, statistics: _Optional[_Union[LolTeamCurrentMapStatisticsState, _Mapping]] = ..., player_current_map_state: _Optional[_Union[LolPlayerCurrentMapState, _Mapping]] = ..., player_current_map_partial_update: _Optional[_Union[LolPlayerCurrentMapStatePartialUpdate, _Mapping]] = ...) -> None: ...
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    team_urn: str
    payload: LolTeamCurrentMapStatePartialUpdate.Payload
    def __init__(self, team_urn: _Optional[str] = ..., payload: _Optional[_Union[LolTeamCurrentMapStatePartialUpdate.Payload, _Mapping]] = ...) -> None: ...

class LolTeamCurrentMapState(_message.Message):
    __slots__ = ["team_urn", "faction", "statistics", "won", "players"]
    class PlayersEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: LolPlayerCurrentMapState
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[LolPlayerCurrentMapState, _Mapping]] = ...) -> None: ...
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    FACTION_FIELD_NUMBER: _ClassVar[int]
    STATISTICS_FIELD_NUMBER: _ClassVar[int]
    WON_FIELD_NUMBER: _ClassVar[int]
    PLAYERS_FIELD_NUMBER: _ClassVar[int]
    team_urn: str
    faction: LolFaction
    statistics: LolTeamCurrentMapStatisticsState
    won: bool
    players: _containers.MessageMap[str, LolPlayerCurrentMapState]
    def __init__(self, team_urn: _Optional[str] = ..., faction: _Optional[_Union[LolFaction, str]] = ..., statistics: _Optional[_Union[LolTeamCurrentMapStatisticsState, _Mapping]] = ..., won: bool = ..., players: _Optional[_Mapping[str, LolPlayerCurrentMapState]] = ...) -> None: ...

class LolTeamCurrentMapStatisticsState(_message.Message):
    __slots__ = ["team_urn", "kills", "barons", "dragons", "turrets", "inhibitors", "gold"]
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    KILLS_FIELD_NUMBER: _ClassVar[int]
    BARONS_FIELD_NUMBER: _ClassVar[int]
    DRAGONS_FIELD_NUMBER: _ClassVar[int]
    TURRETS_FIELD_NUMBER: _ClassVar[int]
    INHIBITORS_FIELD_NUMBER: _ClassVar[int]
    GOLD_FIELD_NUMBER: _ClassVar[int]
    team_urn: str
    kills: int
    barons: int
    dragons: int
    turrets: int
    inhibitors: int
    gold: int
    def __init__(self, team_urn: _Optional[str] = ..., kills: _Optional[int] = ..., barons: _Optional[int] = ..., dragons: _Optional[int] = ..., turrets: _Optional[int] = ..., inhibitors: _Optional[int] = ..., gold: _Optional[int] = ...) -> None: ...

class LolPlayerCurrentMapStatePartialUpdate(_message.Message):
    __slots__ = ["player_urn", "payload"]
    class Payload(_message.Message):
        __slots__ = ["player_info", "timers", "statistics", "map_statistics", "position"]
        PLAYER_INFO_FIELD_NUMBER: _ClassVar[int]
        TIMERS_FIELD_NUMBER: _ClassVar[int]
        STATISTICS_FIELD_NUMBER: _ClassVar[int]
        MAP_STATISTICS_FIELD_NUMBER: _ClassVar[int]
        POSITION_FIELD_NUMBER: _ClassVar[int]
        player_info: LolPlayerInfoState
        timers: LolPlayerCurrentMapTimersState
        statistics: LolPlayerStatisticsState
        map_statistics: LolPlayerCurrentMapStatisticsState
        position: LolPosition
        def __init__(self, player_info: _Optional[_Union[LolPlayerInfoState, _Mapping]] = ..., timers: _Optional[_Union[LolPlayerCurrentMapTimersState, _Mapping]] = ..., statistics: _Optional[_Union[LolPlayerStatisticsState, _Mapping]] = ..., map_statistics: _Optional[_Union[LolPlayerCurrentMapStatisticsState, _Mapping]] = ..., position: _Optional[_Union[LolPosition, _Mapping]] = ...) -> None: ...
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    payload: LolPlayerCurrentMapStatePartialUpdate.Payload
    def __init__(self, player_urn: _Optional[str] = ..., payload: _Optional[_Union[LolPlayerCurrentMapStatePartialUpdate.Payload, _Mapping]] = ...) -> None: ...

class LolPlayerCurrentMapState(_message.Message):
    __slots__ = ["player_urn", "player_info", "timers", "statistics", "map_statistics", "position"]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    PLAYER_INFO_FIELD_NUMBER: _ClassVar[int]
    TIMERS_FIELD_NUMBER: _ClassVar[int]
    STATISTICS_FIELD_NUMBER: _ClassVar[int]
    MAP_STATISTICS_FIELD_NUMBER: _ClassVar[int]
    POSITION_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    player_info: LolPlayerInfoState
    timers: LolPlayerCurrentMapTimersState
    statistics: LolPlayerStatisticsState
    map_statistics: LolPlayerCurrentMapStatisticsState
    position: LolPosition
    def __init__(self, player_urn: _Optional[str] = ..., player_info: _Optional[_Union[LolPlayerInfoState, _Mapping]] = ..., timers: _Optional[_Union[LolPlayerCurrentMapTimersState, _Mapping]] = ..., statistics: _Optional[_Union[LolPlayerStatisticsState, _Mapping]] = ..., map_statistics: _Optional[_Union[LolPlayerCurrentMapStatisticsState, _Mapping]] = ..., position: _Optional[_Union[LolPosition, _Mapping]] = ...) -> None: ...

class LolPlayerCurrentMapStatisticsState(_message.Message):
    __slots__ = ["player_urn", "alive", "health", "max_health", "total_gold", "mana", "max_mana"]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    ALIVE_FIELD_NUMBER: _ClassVar[int]
    HEALTH_FIELD_NUMBER: _ClassVar[int]
    MAX_HEALTH_FIELD_NUMBER: _ClassVar[int]
    TOTAL_GOLD_FIELD_NUMBER: _ClassVar[int]
    MANA_FIELD_NUMBER: _ClassVar[int]
    MAX_MANA_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    alive: bool
    health: int
    max_health: int
    total_gold: int
    mana: int
    max_mana: int
    def __init__(self, player_urn: _Optional[str] = ..., alive: bool = ..., health: _Optional[int] = ..., max_health: _Optional[int] = ..., total_gold: _Optional[int] = ..., mana: _Optional[int] = ..., max_mana: _Optional[int] = ...) -> None: ...

class LolPlayerCurrentMapTimersState(_message.Message):
    __slots__ = ["player_urn", "respawn_timer"]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    RESPAWN_TIMER_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    respawn_timer: _duration_pb2.Duration
    def __init__(self, player_urn: _Optional[str] = ..., respawn_timer: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ...) -> None: ...

class LolTeamPreviousMapState(_message.Message):
    __slots__ = ["team_urn", "faction", "kills", "barons", "dragons", "turrets", "inhibitors", "gold", "won", "players"]
    class PlayersEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: LolPlayerPreviousMapState
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[LolPlayerPreviousMapState, _Mapping]] = ...) -> None: ...
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    FACTION_FIELD_NUMBER: _ClassVar[int]
    KILLS_FIELD_NUMBER: _ClassVar[int]
    BARONS_FIELD_NUMBER: _ClassVar[int]
    DRAGONS_FIELD_NUMBER: _ClassVar[int]
    TURRETS_FIELD_NUMBER: _ClassVar[int]
    INHIBITORS_FIELD_NUMBER: _ClassVar[int]
    GOLD_FIELD_NUMBER: _ClassVar[int]
    WON_FIELD_NUMBER: _ClassVar[int]
    PLAYERS_FIELD_NUMBER: _ClassVar[int]
    team_urn: str
    faction: LolFaction
    kills: int
    barons: int
    dragons: int
    turrets: int
    inhibitors: int
    gold: int
    won: bool
    players: _containers.MessageMap[str, LolPlayerPreviousMapState]
    def __init__(self, team_urn: _Optional[str] = ..., faction: _Optional[_Union[LolFaction, str]] = ..., kills: _Optional[int] = ..., barons: _Optional[int] = ..., dragons: _Optional[int] = ..., turrets: _Optional[int] = ..., inhibitors: _Optional[int] = ..., gold: _Optional[int] = ..., won: bool = ..., players: _Optional[_Mapping[str, LolPlayerPreviousMapState]] = ...) -> None: ...

class LolPlayerPreviousMapState(_message.Message):
    __slots__ = ["player_urn", "player_info", "statistics"]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    PLAYER_INFO_FIELD_NUMBER: _ClassVar[int]
    STATISTICS_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    player_info: LolPlayerInfoState
    statistics: LolPlayerStatisticsState
    def __init__(self, player_urn: _Optional[str] = ..., player_info: _Optional[_Union[LolPlayerInfoState, _Mapping]] = ..., statistics: _Optional[_Union[LolPlayerStatisticsState, _Mapping]] = ...) -> None: ...

class LolPlayerInfoState(_message.Message):
    __slots__ = ["player_urn", "slot_id", "ext_name", "champion_id"]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    SLOT_ID_FIELD_NUMBER: _ClassVar[int]
    EXT_NAME_FIELD_NUMBER: _ClassVar[int]
    CHAMPION_ID_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    slot_id: int
    ext_name: str
    champion_id: int
    def __init__(self, player_urn: _Optional[str] = ..., slot_id: _Optional[int] = ..., ext_name: _Optional[str] = ..., champion_id: _Optional[int] = ...) -> None: ...

class LolPlayerStatisticsState(_message.Message):
    __slots__ = ["player_urn", "kills", "deaths", "assists", "creep_score"]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    KILLS_FIELD_NUMBER: _ClassVar[int]
    DEATHS_FIELD_NUMBER: _ClassVar[int]
    ASSISTS_FIELD_NUMBER: _ClassVar[int]
    CREEP_SCORE_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    kills: int
    deaths: int
    assists: int
    creep_score: int
    def __init__(self, player_urn: _Optional[str] = ..., kills: _Optional[int] = ..., deaths: _Optional[int] = ..., assists: _Optional[int] = ..., creep_score: _Optional[int] = ...) -> None: ...

class LolTurrets(_message.Message):
    __slots__ = ["turrets"]
    TURRETS_FIELD_NUMBER: _ClassVar[int]
    turrets: _containers.RepeatedCompositeFieldContainer[LolTurret]
    def __init__(self, turrets: _Optional[_Iterable[_Union[LolTurret, _Mapping]]] = ...) -> None: ...

class LolInhibitors(_message.Message):
    __slots__ = ["inhibitors"]
    INHIBITORS_FIELD_NUMBER: _ClassVar[int]
    inhibitors: _containers.RepeatedCompositeFieldContainer[LolInhibitor]
    def __init__(self, inhibitors: _Optional[_Iterable[_Union[LolInhibitor, _Mapping]]] = ...) -> None: ...

class LolTurret(_message.Message):
    __slots__ = ["lane", "faction", "tier", "alive"]
    LANE_FIELD_NUMBER: _ClassVar[int]
    FACTION_FIELD_NUMBER: _ClassVar[int]
    TIER_FIELD_NUMBER: _ClassVar[int]
    ALIVE_FIELD_NUMBER: _ClassVar[int]
    lane: LolLane
    faction: LolFaction
    tier: LolTurretTier
    alive: bool
    def __init__(self, lane: _Optional[_Union[LolLane, str]] = ..., faction: _Optional[_Union[LolFaction, str]] = ..., tier: _Optional[_Union[LolTurretTier, str]] = ..., alive: bool = ...) -> None: ...

class LolInhibitor(_message.Message):
    __slots__ = ["lane", "faction", "alive"]
    LANE_FIELD_NUMBER: _ClassVar[int]
    FACTION_FIELD_NUMBER: _ClassVar[int]
    ALIVE_FIELD_NUMBER: _ClassVar[int]
    lane: LolLane
    faction: LolFaction
    alive: bool
    def __init__(self, lane: _Optional[_Union[LolLane, str]] = ..., faction: _Optional[_Union[LolFaction, str]] = ..., alive: bool = ...) -> None: ...

class LolPosition(_message.Message):
    __slots__ = ["x", "y"]
    X_FIELD_NUMBER: _ClassVar[int]
    Y_FIELD_NUMBER: _ClassVar[int]
    x: float
    y: float
    def __init__(self, x: _Optional[float] = ..., y: _Optional[float] = ...) -> None: ...
