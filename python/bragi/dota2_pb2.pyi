from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import duration_pb2 as _duration_pb2
from bragi import common_pb2 as _common_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Dota2Faction(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    DOTA2_FACTION_UNSPECIFIED: _ClassVar[Dota2Faction]
    DOTA2_FACTION_RADIANT: _ClassVar[Dota2Faction]
    DOTA2_FACTION_DIRE: _ClassVar[Dota2Faction]

class Dota2Lane(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    DOTA2_LANE_UNSPECIFIED: _ClassVar[Dota2Lane]
    DOTA2_LANE_TOP: _ClassVar[Dota2Lane]
    DOTA2_LANE_MID: _ClassVar[Dota2Lane]
    DOTA2_LANE_BOT: _ClassVar[Dota2Lane]

class Dota2TowerTier(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    DOTA2_TOWER_TIER_UNSPECIFIED: _ClassVar[Dota2TowerTier]
    DOTA2_TOWER_TIER_1: _ClassVar[Dota2TowerTier]
    DOTA2_TOWER_TIER_2: _ClassVar[Dota2TowerTier]
    DOTA2_TOWER_TIER_3: _ClassVar[Dota2TowerTier]
    DOTA2_TOWER_TIER_4: _ClassVar[Dota2TowerTier]

class Dota2BarrackType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    DOTA2_BARRACK_TYPE_UNSPECIFIED: _ClassVar[Dota2BarrackType]
    DOTA2_BARRACK_TYPE_RANGED: _ClassVar[Dota2BarrackType]
    DOTA2_BARRACK_TYPE_MELEE: _ClassVar[Dota2BarrackType]

class Dota2ItemPosition(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    DOTA2_ITEM_POSITION_UNSPECIFIED: _ClassVar[Dota2ItemPosition]
    DOTA2_ITEM_POSITION_NEUTRAL: _ClassVar[Dota2ItemPosition]
    DOTA2_ITEM_POSITION_STASH0: _ClassVar[Dota2ItemPosition]
    DOTA2_ITEM_POSITION_STASH1: _ClassVar[Dota2ItemPosition]
    DOTA2_ITEM_POSITION_STASH2: _ClassVar[Dota2ItemPosition]
    DOTA2_ITEM_POSITION_STASH3: _ClassVar[Dota2ItemPosition]
    DOTA2_ITEM_POSITION_STASH4: _ClassVar[Dota2ItemPosition]
    DOTA2_ITEM_POSITION_STASH5: _ClassVar[Dota2ItemPosition]
    DOTA2_ITEM_POSITION_TELEPORT: _ClassVar[Dota2ItemPosition]
    DOTA2_ITEM_POSITION_SLOT0: _ClassVar[Dota2ItemPosition]
    DOTA2_ITEM_POSITION_SLOT1: _ClassVar[Dota2ItemPosition]
    DOTA2_ITEM_POSITION_SLOT2: _ClassVar[Dota2ItemPosition]
    DOTA2_ITEM_POSITION_SLOT3: _ClassVar[Dota2ItemPosition]
    DOTA2_ITEM_POSITION_SLOT4: _ClassVar[Dota2ItemPosition]
    DOTA2_ITEM_POSITION_SLOT5: _ClassVar[Dota2ItemPosition]
    DOTA2_ITEM_POSITION_SLOT6: _ClassVar[Dota2ItemPosition]
    DOTA2_ITEM_POSITION_SLOT7: _ClassVar[Dota2ItemPosition]
    DOTA2_ITEM_POSITION_SLOT8: _ClassVar[Dota2ItemPosition]
DOTA2_FACTION_UNSPECIFIED: Dota2Faction
DOTA2_FACTION_RADIANT: Dota2Faction
DOTA2_FACTION_DIRE: Dota2Faction
DOTA2_LANE_UNSPECIFIED: Dota2Lane
DOTA2_LANE_TOP: Dota2Lane
DOTA2_LANE_MID: Dota2Lane
DOTA2_LANE_BOT: Dota2Lane
DOTA2_TOWER_TIER_UNSPECIFIED: Dota2TowerTier
DOTA2_TOWER_TIER_1: Dota2TowerTier
DOTA2_TOWER_TIER_2: Dota2TowerTier
DOTA2_TOWER_TIER_3: Dota2TowerTier
DOTA2_TOWER_TIER_4: Dota2TowerTier
DOTA2_BARRACK_TYPE_UNSPECIFIED: Dota2BarrackType
DOTA2_BARRACK_TYPE_RANGED: Dota2BarrackType
DOTA2_BARRACK_TYPE_MELEE: Dota2BarrackType
DOTA2_ITEM_POSITION_UNSPECIFIED: Dota2ItemPosition
DOTA2_ITEM_POSITION_NEUTRAL: Dota2ItemPosition
DOTA2_ITEM_POSITION_STASH0: Dota2ItemPosition
DOTA2_ITEM_POSITION_STASH1: Dota2ItemPosition
DOTA2_ITEM_POSITION_STASH2: Dota2ItemPosition
DOTA2_ITEM_POSITION_STASH3: Dota2ItemPosition
DOTA2_ITEM_POSITION_STASH4: Dota2ItemPosition
DOTA2_ITEM_POSITION_STASH5: Dota2ItemPosition
DOTA2_ITEM_POSITION_TELEPORT: Dota2ItemPosition
DOTA2_ITEM_POSITION_SLOT0: Dota2ItemPosition
DOTA2_ITEM_POSITION_SLOT1: Dota2ItemPosition
DOTA2_ITEM_POSITION_SLOT2: Dota2ItemPosition
DOTA2_ITEM_POSITION_SLOT3: Dota2ItemPosition
DOTA2_ITEM_POSITION_SLOT4: Dota2ItemPosition
DOTA2_ITEM_POSITION_SLOT5: Dota2ItemPosition
DOTA2_ITEM_POSITION_SLOT6: Dota2ItemPosition
DOTA2_ITEM_POSITION_SLOT7: Dota2ItemPosition
DOTA2_ITEM_POSITION_SLOT8: Dota2ItemPosition

class Dota2MatchMessage(_message.Message):
    __slots__ = ["match_urn", "sequence", "timestamp", "data_status", "payload"]
    class Payload(_message.Message):
        __slots__ = ["snapshot", "update"]
        SNAPSHOT_FIELD_NUMBER: _ClassVar[int]
        UPDATE_FIELD_NUMBER: _ClassVar[int]
        snapshot: Dota2MatchSnapshot
        update: Dota2MatchUpdate
        def __init__(self, snapshot: _Optional[_Union[Dota2MatchSnapshot, _Mapping]] = ..., update: _Optional[_Union[Dota2MatchUpdate, _Mapping]] = ...) -> None: ...
    MATCH_URN_FIELD_NUMBER: _ClassVar[int]
    SEQUENCE_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    DATA_STATUS_FIELD_NUMBER: _ClassVar[int]
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    match_urn: str
    sequence: int
    timestamp: _timestamp_pb2.Timestamp
    data_status: _common_pb2.DataStatus
    payload: Dota2MatchMessage.Payload
    def __init__(self, match_urn: _Optional[str] = ..., sequence: _Optional[int] = ..., timestamp: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., data_status: _Optional[_Union[_common_pb2.DataStatus, str]] = ..., payload: _Optional[_Union[Dota2MatchMessage.Payload, _Mapping]] = ...) -> None: ...

class Dota2MatchSnapshot(_message.Message):
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
    match_state: Dota2MatchState
    tournament: _common_pb2.Tournament
    def __init__(self, match_urn: _Optional[str] = ..., sequence: _Optional[int] = ..., timestamp: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., data_status: _Optional[_Union[_common_pb2.DataStatus, str]] = ..., announcements: _Optional[_Iterable[_Union[_common_pb2.Announcement, _Mapping]]] = ..., match_state: _Optional[_Union[Dota2MatchState, _Mapping]] = ..., tournament: _Optional[_Union[_common_pb2.Tournament, _Mapping]] = ...) -> None: ...

class PicksAndBansSelections(_message.Message):
    __slots__ = ["current_hero_selection", "picks_and_bans"]
    class TeamType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
        TEAM_TYPE_UNSPECIFIED: _ClassVar[PicksAndBansSelections.TeamType]
        TEAM_TYPE_RADIANT: _ClassVar[PicksAndBansSelections.TeamType]
        TEAM_TYPE_DIRE: _ClassVar[PicksAndBansSelections.TeamType]
    TEAM_TYPE_UNSPECIFIED: PicksAndBansSelections.TeamType
    TEAM_TYPE_RADIANT: PicksAndBansSelections.TeamType
    TEAM_TYPE_DIRE: PicksAndBansSelections.TeamType
    class CurrentHeroSelection(_message.Message):
        __slots__ = ["active_team", "pick", "active_team_time_remaining", "radiant_bonus_time", "dire_bonus_time"]
        ACTIVE_TEAM_FIELD_NUMBER: _ClassVar[int]
        PICK_FIELD_NUMBER: _ClassVar[int]
        ACTIVE_TEAM_TIME_REMAINING_FIELD_NUMBER: _ClassVar[int]
        RADIANT_BONUS_TIME_FIELD_NUMBER: _ClassVar[int]
        DIRE_BONUS_TIME_FIELD_NUMBER: _ClassVar[int]
        active_team: PicksAndBansSelections.TeamType
        pick: bool
        active_team_time_remaining: int
        radiant_bonus_time: int
        dire_bonus_time: int
        def __init__(self, active_team: _Optional[_Union[PicksAndBansSelections.TeamType, str]] = ..., pick: bool = ..., active_team_time_remaining: _Optional[int] = ..., radiant_bonus_time: _Optional[int] = ..., dire_bonus_time: _Optional[int] = ...) -> None: ...
    class PickOrBan(_message.Message):
        __slots__ = ["team", "pick", "hero_steam_id", "hero_key"]
        TEAM_FIELD_NUMBER: _ClassVar[int]
        PICK_FIELD_NUMBER: _ClassVar[int]
        HERO_STEAM_ID_FIELD_NUMBER: _ClassVar[int]
        HERO_KEY_FIELD_NUMBER: _ClassVar[int]
        team: PicksAndBansSelections.TeamType
        pick: bool
        hero_steam_id: int
        hero_key: str
        def __init__(self, team: _Optional[_Union[PicksAndBansSelections.TeamType, str]] = ..., pick: bool = ..., hero_steam_id: _Optional[int] = ..., hero_key: _Optional[str] = ...) -> None: ...
    CURRENT_HERO_SELECTION_FIELD_NUMBER: _ClassVar[int]
    PICKS_AND_BANS_FIELD_NUMBER: _ClassVar[int]
    current_hero_selection: PicksAndBansSelections.CurrentHeroSelection
    picks_and_bans: _containers.RepeatedCompositeFieldContainer[PicksAndBansSelections.PickOrBan]
    def __init__(self, current_hero_selection: _Optional[_Union[PicksAndBansSelections.CurrentHeroSelection, _Mapping]] = ..., picks_and_bans: _Optional[_Iterable[_Union[PicksAndBansSelections.PickOrBan, _Mapping]]] = ...) -> None: ...

class Dota2MatchUpdate(_message.Message):
    __slots__ = ["payload"]
    class Payload(_message.Message):
        __slots__ = ["match_state", "partial_updates"]
        MATCH_STATE_FIELD_NUMBER: _ClassVar[int]
        PARTIAL_UPDATES_FIELD_NUMBER: _ClassVar[int]
        match_state: Dota2MatchState
        partial_updates: Dota2MatchStatePartialUpdates
        def __init__(self, match_state: _Optional[_Union[Dota2MatchState, _Mapping]] = ..., partial_updates: _Optional[_Union[Dota2MatchStatePartialUpdates, _Mapping]] = ...) -> None: ...
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    payload: Dota2MatchUpdate.Payload
    def __init__(self, payload: _Optional[_Union[Dota2MatchUpdate.Payload, _Mapping]] = ...) -> None: ...

class Dota2MatchStatePartialUpdates(_message.Message):
    __slots__ = ["updates"]
    UPDATES_FIELD_NUMBER: _ClassVar[int]
    updates: _containers.RepeatedCompositeFieldContainer[Dota2MatchStatePartialUpdate]
    def __init__(self, updates: _Optional[_Iterable[_Union[Dota2MatchStatePartialUpdate, _Mapping]]] = ...) -> None: ...

class Dota2MatchStatePartialUpdate(_message.Message):
    __slots__ = ["score", "current_map_state", "current_map_state_partial_update", "picks_and_bans_selections"]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    CURRENT_MAP_STATE_FIELD_NUMBER: _ClassVar[int]
    CURRENT_MAP_STATE_PARTIAL_UPDATE_FIELD_NUMBER: _ClassVar[int]
    PICKS_AND_BANS_SELECTIONS_FIELD_NUMBER: _ClassVar[int]
    score: Dota2MatchScoreState
    current_map_state: Dota2CurrentMapState
    current_map_state_partial_update: Dota2CurrentMapStatePartialUpdate
    picks_and_bans_selections: PicksAndBansSelections
    def __init__(self, score: _Optional[_Union[Dota2MatchScoreState, _Mapping]] = ..., current_map_state: _Optional[_Union[Dota2CurrentMapState, _Mapping]] = ..., current_map_state_partial_update: _Optional[_Union[Dota2CurrentMapStatePartialUpdate, _Mapping]] = ..., picks_and_bans_selections: _Optional[_Union[PicksAndBansSelections, _Mapping]] = ...) -> None: ...

class Dota2MatchState(_message.Message):
    __slots__ = ["match_urn", "match_type", "home_team", "away_team", "score", "match_status", "current_map", "previous_maps", "picks_and_bans_selections"]
    MATCH_URN_FIELD_NUMBER: _ClassVar[int]
    MATCH_TYPE_FIELD_NUMBER: _ClassVar[int]
    HOME_TEAM_FIELD_NUMBER: _ClassVar[int]
    AWAY_TEAM_FIELD_NUMBER: _ClassVar[int]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    MATCH_STATUS_FIELD_NUMBER: _ClassVar[int]
    CURRENT_MAP_FIELD_NUMBER: _ClassVar[int]
    PREVIOUS_MAPS_FIELD_NUMBER: _ClassVar[int]
    PICKS_AND_BANS_SELECTIONS_FIELD_NUMBER: _ClassVar[int]
    match_urn: str
    match_type: _common_pb2.BestOfType
    home_team: _common_pb2.Team
    away_team: _common_pb2.Team
    score: Dota2MatchScoreState
    match_status: _common_pb2.MatchStatusType
    current_map: Dota2CurrentMapState
    previous_maps: _containers.RepeatedCompositeFieldContainer[Dota2PreviousMapState]
    picks_and_bans_selections: PicksAndBansSelections
    def __init__(self, match_urn: _Optional[str] = ..., match_type: _Optional[_Union[_common_pb2.BestOfType, str]] = ..., home_team: _Optional[_Union[_common_pb2.Team, _Mapping]] = ..., away_team: _Optional[_Union[_common_pb2.Team, _Mapping]] = ..., score: _Optional[_Union[Dota2MatchScoreState, _Mapping]] = ..., match_status: _Optional[_Union[_common_pb2.MatchStatusType, str]] = ..., current_map: _Optional[_Union[Dota2CurrentMapState, _Mapping]] = ..., previous_maps: _Optional[_Iterable[_Union[Dota2PreviousMapState, _Mapping]]] = ..., picks_and_bans_selections: _Optional[_Union[PicksAndBansSelections, _Mapping]] = ...) -> None: ...

class Dota2MatchScoreState(_message.Message):
    __slots__ = ["home_score", "away_score"]
    HOME_SCORE_FIELD_NUMBER: _ClassVar[int]
    AWAY_SCORE_FIELD_NUMBER: _ClassVar[int]
    home_score: int
    away_score: int
    def __init__(self, home_score: _Optional[int] = ..., away_score: _Optional[int] = ...) -> None: ...

class Dota2CurrentMapStatePartialUpdate(_message.Message):
    __slots__ = ["game_time", "team_current_map_state", "team_current_map_partial_update", "towers", "barracks", "roshan"]
    GAME_TIME_FIELD_NUMBER: _ClassVar[int]
    TEAM_CURRENT_MAP_STATE_FIELD_NUMBER: _ClassVar[int]
    TEAM_CURRENT_MAP_PARTIAL_UPDATE_FIELD_NUMBER: _ClassVar[int]
    TOWERS_FIELD_NUMBER: _ClassVar[int]
    BARRACKS_FIELD_NUMBER: _ClassVar[int]
    ROSHAN_FIELD_NUMBER: _ClassVar[int]
    game_time: Dota2CurrentMapTimeState
    team_current_map_state: Dota2TeamCurrentMapState
    team_current_map_partial_update: Dota2TeamCurrentMapStatePartialUpdate
    towers: Dota2Towers
    barracks: Dota2Barracks
    roshan: Roshan
    def __init__(self, game_time: _Optional[_Union[Dota2CurrentMapTimeState, _Mapping]] = ..., team_current_map_state: _Optional[_Union[Dota2TeamCurrentMapState, _Mapping]] = ..., team_current_map_partial_update: _Optional[_Union[Dota2TeamCurrentMapStatePartialUpdate, _Mapping]] = ..., towers: _Optional[_Union[Dota2Towers, _Mapping]] = ..., barracks: _Optional[_Union[Dota2Barracks, _Mapping]] = ..., roshan: _Optional[_Union[Roshan, _Mapping]] = ...) -> None: ...

class Dota2CurrentMapState(_message.Message):
    __slots__ = ["map_order", "map_paused", "game_time", "teams", "towers", "barracks", "roshan", "day_time"]
    class TeamsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: Dota2TeamCurrentMapState
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[Dota2TeamCurrentMapState, _Mapping]] = ...) -> None: ...
    MAP_ORDER_FIELD_NUMBER: _ClassVar[int]
    MAP_PAUSED_FIELD_NUMBER: _ClassVar[int]
    GAME_TIME_FIELD_NUMBER: _ClassVar[int]
    TEAMS_FIELD_NUMBER: _ClassVar[int]
    TOWERS_FIELD_NUMBER: _ClassVar[int]
    BARRACKS_FIELD_NUMBER: _ClassVar[int]
    ROSHAN_FIELD_NUMBER: _ClassVar[int]
    DAY_TIME_FIELD_NUMBER: _ClassVar[int]
    map_order: int
    map_paused: bool
    game_time: Dota2CurrentMapTimeState
    teams: _containers.MessageMap[str, Dota2TeamCurrentMapState]
    towers: Dota2Towers
    barracks: Dota2Barracks
    roshan: Roshan
    day_time: bool
    def __init__(self, map_order: _Optional[int] = ..., map_paused: bool = ..., game_time: _Optional[_Union[Dota2CurrentMapTimeState, _Mapping]] = ..., teams: _Optional[_Mapping[str, Dota2TeamCurrentMapState]] = ..., towers: _Optional[_Union[Dota2Towers, _Mapping]] = ..., barracks: _Optional[_Union[Dota2Barracks, _Mapping]] = ..., roshan: _Optional[_Union[Roshan, _Mapping]] = ..., day_time: bool = ...) -> None: ...

class Dota2CurrentMapTimeState(_message.Message):
    __slots__ = ["game_time"]
    GAME_TIME_FIELD_NUMBER: _ClassVar[int]
    game_time: _duration_pb2.Duration
    def __init__(self, game_time: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ...) -> None: ...

class Dota2PreviousMapState(_message.Message):
    __slots__ = ["map_order", "teams"]
    class TeamsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: Dota2TeamPreviousMapState
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[Dota2TeamPreviousMapState, _Mapping]] = ...) -> None: ...
    MAP_ORDER_FIELD_NUMBER: _ClassVar[int]
    TEAMS_FIELD_NUMBER: _ClassVar[int]
    map_order: int
    teams: _containers.MessageMap[str, Dota2TeamPreviousMapState]
    def __init__(self, map_order: _Optional[int] = ..., teams: _Optional[_Mapping[str, Dota2TeamPreviousMapState]] = ...) -> None: ...

class Dota2TeamCurrentMapStatePartialUpdate(_message.Message):
    __slots__ = ["team_urn", "payload"]
    class Payload(_message.Message):
        __slots__ = ["statistics", "player_current_map_state", "player_current_map_partial_update"]
        STATISTICS_FIELD_NUMBER: _ClassVar[int]
        PLAYER_CURRENT_MAP_STATE_FIELD_NUMBER: _ClassVar[int]
        PLAYER_CURRENT_MAP_PARTIAL_UPDATE_FIELD_NUMBER: _ClassVar[int]
        statistics: Dota2TeamCurrentMapStatisticsState
        player_current_map_state: Dota2PlayerCurrentMapState
        player_current_map_partial_update: Dota2PlayerCurrentMapStatePartialUpdate
        def __init__(self, statistics: _Optional[_Union[Dota2TeamCurrentMapStatisticsState, _Mapping]] = ..., player_current_map_state: _Optional[_Union[Dota2PlayerCurrentMapState, _Mapping]] = ..., player_current_map_partial_update: _Optional[_Union[Dota2PlayerCurrentMapStatePartialUpdate, _Mapping]] = ...) -> None: ...
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    team_urn: str
    payload: Dota2TeamCurrentMapStatePartialUpdate.Payload
    def __init__(self, team_urn: _Optional[str] = ..., payload: _Optional[_Union[Dota2TeamCurrentMapStatePartialUpdate.Payload, _Mapping]] = ...) -> None: ...

class Dota2TeamCurrentMapState(_message.Message):
    __slots__ = ["team_urn", "faction", "statistics", "won", "players"]
    class PlayersEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: Dota2PlayerCurrentMapState
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[Dota2PlayerCurrentMapState, _Mapping]] = ...) -> None: ...
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    FACTION_FIELD_NUMBER: _ClassVar[int]
    STATISTICS_FIELD_NUMBER: _ClassVar[int]
    WON_FIELD_NUMBER: _ClassVar[int]
    PLAYERS_FIELD_NUMBER: _ClassVar[int]
    team_urn: str
    faction: Dota2Faction
    statistics: Dota2TeamCurrentMapStatisticsState
    won: bool
    players: _containers.MessageMap[str, Dota2PlayerCurrentMapState]
    def __init__(self, team_urn: _Optional[str] = ..., faction: _Optional[_Union[Dota2Faction, str]] = ..., statistics: _Optional[_Union[Dota2TeamCurrentMapStatisticsState, _Mapping]] = ..., won: bool = ..., players: _Optional[_Mapping[str, Dota2PlayerCurrentMapState]] = ...) -> None: ...

class Dota2TeamCurrentMapStatisticsState(_message.Message):
    __slots__ = ["team_urn", "barracks", "kills", "net_worth", "roshans", "towers"]
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    BARRACKS_FIELD_NUMBER: _ClassVar[int]
    KILLS_FIELD_NUMBER: _ClassVar[int]
    NET_WORTH_FIELD_NUMBER: _ClassVar[int]
    ROSHANS_FIELD_NUMBER: _ClassVar[int]
    TOWERS_FIELD_NUMBER: _ClassVar[int]
    team_urn: str
    barracks: int
    kills: int
    net_worth: int
    roshans: int
    towers: int
    def __init__(self, team_urn: _Optional[str] = ..., barracks: _Optional[int] = ..., kills: _Optional[int] = ..., net_worth: _Optional[int] = ..., roshans: _Optional[int] = ..., towers: _Optional[int] = ...) -> None: ...

class Dota2PlayerCurrentMapStatePartialUpdate(_message.Message):
    __slots__ = ["player_urn", "payload"]
    class Payload(_message.Message):
        __slots__ = ["player_info", "timers", "statistics", "map_statistics", "position", "items", "abilities"]
        PLAYER_INFO_FIELD_NUMBER: _ClassVar[int]
        TIMERS_FIELD_NUMBER: _ClassVar[int]
        STATISTICS_FIELD_NUMBER: _ClassVar[int]
        MAP_STATISTICS_FIELD_NUMBER: _ClassVar[int]
        POSITION_FIELD_NUMBER: _ClassVar[int]
        ITEMS_FIELD_NUMBER: _ClassVar[int]
        ABILITIES_FIELD_NUMBER: _ClassVar[int]
        player_info: Dota2PlayerInfoState
        timers: Dota2PlayerCurrentMapTimersState
        statistics: Dota2PlayerStatisticsState
        map_statistics: Dota2PlayerCurrentMapStatisticsState
        position: Dota2Position
        items: Dota2Items
        abilities: Dota2Abilities
        def __init__(self, player_info: _Optional[_Union[Dota2PlayerInfoState, _Mapping]] = ..., timers: _Optional[_Union[Dota2PlayerCurrentMapTimersState, _Mapping]] = ..., statistics: _Optional[_Union[Dota2PlayerStatisticsState, _Mapping]] = ..., map_statistics: _Optional[_Union[Dota2PlayerCurrentMapStatisticsState, _Mapping]] = ..., position: _Optional[_Union[Dota2Position, _Mapping]] = ..., items: _Optional[_Union[Dota2Items, _Mapping]] = ..., abilities: _Optional[_Union[Dota2Abilities, _Mapping]] = ...) -> None: ...
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    payload: Dota2PlayerCurrentMapStatePartialUpdate.Payload
    def __init__(self, player_urn: _Optional[str] = ..., payload: _Optional[_Union[Dota2PlayerCurrentMapStatePartialUpdate.Payload, _Mapping]] = ...) -> None: ...

class Dota2PlayerCurrentMapState(_message.Message):
    __slots__ = ["player_urn", "player_info", "timers", "statistics", "map_statistics", "position", "items", "abilities"]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    PLAYER_INFO_FIELD_NUMBER: _ClassVar[int]
    TIMERS_FIELD_NUMBER: _ClassVar[int]
    STATISTICS_FIELD_NUMBER: _ClassVar[int]
    MAP_STATISTICS_FIELD_NUMBER: _ClassVar[int]
    POSITION_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    ABILITIES_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    player_info: Dota2PlayerInfoState
    timers: Dota2PlayerCurrentMapTimersState
    statistics: Dota2PlayerStatisticsState
    map_statistics: Dota2PlayerCurrentMapStatisticsState
    position: Dota2Position
    items: Dota2Items
    abilities: Dota2Abilities
    def __init__(self, player_urn: _Optional[str] = ..., player_info: _Optional[_Union[Dota2PlayerInfoState, _Mapping]] = ..., timers: _Optional[_Union[Dota2PlayerCurrentMapTimersState, _Mapping]] = ..., statistics: _Optional[_Union[Dota2PlayerStatisticsState, _Mapping]] = ..., map_statistics: _Optional[_Union[Dota2PlayerCurrentMapStatisticsState, _Mapping]] = ..., position: _Optional[_Union[Dota2Position, _Mapping]] = ..., items: _Optional[_Union[Dota2Items, _Mapping]] = ..., abilities: _Optional[_Union[Dota2Abilities, _Mapping]] = ...) -> None: ...

class Dota2PlayerCurrentMapStatisticsState(_message.Message):
    __slots__ = ["player_urn", "alive", "health", "max_health", "current_gold", "net_worth", "buyback_cost", "has_buyback", "has_aegis", "mana", "max_mana", "gold_reliable", "gold_unreliable", "denies", "last_hits", "level"]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    ALIVE_FIELD_NUMBER: _ClassVar[int]
    HEALTH_FIELD_NUMBER: _ClassVar[int]
    MAX_HEALTH_FIELD_NUMBER: _ClassVar[int]
    CURRENT_GOLD_FIELD_NUMBER: _ClassVar[int]
    NET_WORTH_FIELD_NUMBER: _ClassVar[int]
    BUYBACK_COST_FIELD_NUMBER: _ClassVar[int]
    HAS_BUYBACK_FIELD_NUMBER: _ClassVar[int]
    HAS_AEGIS_FIELD_NUMBER: _ClassVar[int]
    MANA_FIELD_NUMBER: _ClassVar[int]
    MAX_MANA_FIELD_NUMBER: _ClassVar[int]
    GOLD_RELIABLE_FIELD_NUMBER: _ClassVar[int]
    GOLD_UNRELIABLE_FIELD_NUMBER: _ClassVar[int]
    DENIES_FIELD_NUMBER: _ClassVar[int]
    LAST_HITS_FIELD_NUMBER: _ClassVar[int]
    LEVEL_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    alive: bool
    health: int
    max_health: int
    current_gold: int
    net_worth: int
    buyback_cost: int
    has_buyback: bool
    has_aegis: bool
    mana: int
    max_mana: int
    gold_reliable: int
    gold_unreliable: int
    denies: int
    last_hits: int
    level: int
    def __init__(self, player_urn: _Optional[str] = ..., alive: bool = ..., health: _Optional[int] = ..., max_health: _Optional[int] = ..., current_gold: _Optional[int] = ..., net_worth: _Optional[int] = ..., buyback_cost: _Optional[int] = ..., has_buyback: bool = ..., has_aegis: bool = ..., mana: _Optional[int] = ..., max_mana: _Optional[int] = ..., gold_reliable: _Optional[int] = ..., gold_unreliable: _Optional[int] = ..., denies: _Optional[int] = ..., last_hits: _Optional[int] = ..., level: _Optional[int] = ...) -> None: ...

class Dota2PlayerCurrentMapTimersState(_message.Message):
    __slots__ = ["player_urn", "respawn_timer", "buyback_cooldown"]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    RESPAWN_TIMER_FIELD_NUMBER: _ClassVar[int]
    BUYBACK_COOLDOWN_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    respawn_timer: _duration_pb2.Duration
    buyback_cooldown: _duration_pb2.Duration
    def __init__(self, player_urn: _Optional[str] = ..., respawn_timer: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., buyback_cooldown: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ...) -> None: ...

class Dota2TeamPreviousMapState(_message.Message):
    __slots__ = ["team_urn", "faction", "barracks", "kills", "net_worth", "roshans", "towers", "won", "players"]
    class PlayersEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: Dota2PlayerPreviousMapState
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[Dota2PlayerPreviousMapState, _Mapping]] = ...) -> None: ...
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    FACTION_FIELD_NUMBER: _ClassVar[int]
    BARRACKS_FIELD_NUMBER: _ClassVar[int]
    KILLS_FIELD_NUMBER: _ClassVar[int]
    NET_WORTH_FIELD_NUMBER: _ClassVar[int]
    ROSHANS_FIELD_NUMBER: _ClassVar[int]
    TOWERS_FIELD_NUMBER: _ClassVar[int]
    WON_FIELD_NUMBER: _ClassVar[int]
    PLAYERS_FIELD_NUMBER: _ClassVar[int]
    team_urn: str
    faction: Dota2Faction
    barracks: int
    kills: int
    net_worth: int
    roshans: int
    towers: int
    won: bool
    players: _containers.MessageMap[str, Dota2PlayerPreviousMapState]
    def __init__(self, team_urn: _Optional[str] = ..., faction: _Optional[_Union[Dota2Faction, str]] = ..., barracks: _Optional[int] = ..., kills: _Optional[int] = ..., net_worth: _Optional[int] = ..., roshans: _Optional[int] = ..., towers: _Optional[int] = ..., won: bool = ..., players: _Optional[_Mapping[str, Dota2PlayerPreviousMapState]] = ...) -> None: ...

class Dota2PlayerPreviousMapState(_message.Message):
    __slots__ = ["player_urn", "player_info", "statistics"]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    PLAYER_INFO_FIELD_NUMBER: _ClassVar[int]
    STATISTICS_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    player_info: Dota2PlayerInfoState
    statistics: Dota2PlayerStatisticsState
    def __init__(self, player_urn: _Optional[str] = ..., player_info: _Optional[_Union[Dota2PlayerInfoState, _Mapping]] = ..., statistics: _Optional[_Union[Dota2PlayerStatisticsState, _Mapping]] = ...) -> None: ...

class Dota2PlayerInfoState(_message.Message):
    __slots__ = ["player_urn", "slot_id", "ext_name", "hero_id"]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    SLOT_ID_FIELD_NUMBER: _ClassVar[int]
    EXT_NAME_FIELD_NUMBER: _ClassVar[int]
    HERO_ID_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    slot_id: int
    ext_name: str
    hero_id: int
    def __init__(self, player_urn: _Optional[str] = ..., slot_id: _Optional[int] = ..., ext_name: _Optional[str] = ..., hero_id: _Optional[int] = ...) -> None: ...

class Dota2PlayerStatisticsState(_message.Message):
    __slots__ = ["player_urn", "kills", "deaths", "assists"]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    KILLS_FIELD_NUMBER: _ClassVar[int]
    DEATHS_FIELD_NUMBER: _ClassVar[int]
    ASSISTS_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    kills: int
    deaths: int
    assists: int
    def __init__(self, player_urn: _Optional[str] = ..., kills: _Optional[int] = ..., deaths: _Optional[int] = ..., assists: _Optional[int] = ...) -> None: ...

class Dota2Towers(_message.Message):
    __slots__ = ["towers"]
    TOWERS_FIELD_NUMBER: _ClassVar[int]
    towers: _containers.RepeatedCompositeFieldContainer[Dota2Tower]
    def __init__(self, towers: _Optional[_Iterable[_Union[Dota2Tower, _Mapping]]] = ...) -> None: ...

class Dota2Barracks(_message.Message):
    __slots__ = ["barracks"]
    BARRACKS_FIELD_NUMBER: _ClassVar[int]
    barracks: _containers.RepeatedCompositeFieldContainer[Dota2Barrack]
    def __init__(self, barracks: _Optional[_Iterable[_Union[Dota2Barrack, _Mapping]]] = ...) -> None: ...

class Dota2Abilities(_message.Message):
    __slots__ = ["abilities"]
    ABILITIES_FIELD_NUMBER: _ClassVar[int]
    abilities: _containers.RepeatedCompositeFieldContainer[Dota2Ability]
    def __init__(self, abilities: _Optional[_Iterable[_Union[Dota2Ability, _Mapping]]] = ...) -> None: ...

class Dota2Items(_message.Message):
    __slots__ = ["items"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[Dota2Item]
    def __init__(self, items: _Optional[_Iterable[_Union[Dota2Item, _Mapping]]] = ...) -> None: ...

class Dota2Item(_message.Message):
    __slots__ = ["name", "cooldown", "position", "level"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    COOLDOWN_FIELD_NUMBER: _ClassVar[int]
    POSITION_FIELD_NUMBER: _ClassVar[int]
    LEVEL_FIELD_NUMBER: _ClassVar[int]
    name: str
    cooldown: int
    position: Dota2ItemPosition
    level: int
    def __init__(self, name: _Optional[str] = ..., cooldown: _Optional[int] = ..., position: _Optional[_Union[Dota2ItemPosition, str]] = ..., level: _Optional[int] = ...) -> None: ...

class Dota2Ability(_message.Message):
    __slots__ = ["name", "cooldown", "ultimate", "passive", "can_cast"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    COOLDOWN_FIELD_NUMBER: _ClassVar[int]
    ULTIMATE_FIELD_NUMBER: _ClassVar[int]
    PASSIVE_FIELD_NUMBER: _ClassVar[int]
    CAN_CAST_FIELD_NUMBER: _ClassVar[int]
    name: str
    cooldown: int
    ultimate: bool
    passive: bool
    can_cast: bool
    def __init__(self, name: _Optional[str] = ..., cooldown: _Optional[int] = ..., ultimate: bool = ..., passive: bool = ..., can_cast: bool = ...) -> None: ...

class Roshan(_message.Message):
    __slots__ = ["alive", "respawnTime"]
    ALIVE_FIELD_NUMBER: _ClassVar[int]
    RESPAWNTIME_FIELD_NUMBER: _ClassVar[int]
    alive: bool
    respawnTime: int
    def __init__(self, alive: bool = ..., respawnTime: _Optional[int] = ...) -> None: ...

class Dota2Tower(_message.Message):
    __slots__ = ["lane", "faction", "tier", "alive"]
    LANE_FIELD_NUMBER: _ClassVar[int]
    FACTION_FIELD_NUMBER: _ClassVar[int]
    TIER_FIELD_NUMBER: _ClassVar[int]
    ALIVE_FIELD_NUMBER: _ClassVar[int]
    lane: Dota2Lane
    faction: Dota2Faction
    tier: Dota2TowerTier
    alive: bool
    def __init__(self, lane: _Optional[_Union[Dota2Lane, str]] = ..., faction: _Optional[_Union[Dota2Faction, str]] = ..., tier: _Optional[_Union[Dota2TowerTier, str]] = ..., alive: bool = ...) -> None: ...

class Dota2Barrack(_message.Message):
    __slots__ = ["lane", "faction", "type", "alive"]
    LANE_FIELD_NUMBER: _ClassVar[int]
    FACTION_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    ALIVE_FIELD_NUMBER: _ClassVar[int]
    lane: Dota2Lane
    faction: Dota2Faction
    type: Dota2BarrackType
    alive: bool
    def __init__(self, lane: _Optional[_Union[Dota2Lane, str]] = ..., faction: _Optional[_Union[Dota2Faction, str]] = ..., type: _Optional[_Union[Dota2BarrackType, str]] = ..., alive: bool = ...) -> None: ...

class Dota2Position(_message.Message):
    __slots__ = ["x", "y"]
    X_FIELD_NUMBER: _ClassVar[int]
    Y_FIELD_NUMBER: _ClassVar[int]
    x: float
    y: float
    def __init__(self, x: _Optional[float] = ..., y: _Optional[float] = ...) -> None: ...
