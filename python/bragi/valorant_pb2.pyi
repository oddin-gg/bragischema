from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import duration_pb2 as _duration_pb2
from bragi import common_pb2 as _common_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ValorantUltimateState(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    VALORANT_ULTIMATE_STATE__UNSPECIFIED: _ClassVar[ValorantUltimateState]
    VALORANT_ULTIMATE_STATE_READY: _ClassVar[ValorantUltimateState]
    VALORANT_ULTIMATE_STATE_NOT_READY: _ClassVar[ValorantUltimateState]

class ValorantSide(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    VALORANT_SIDE_UNSPECIFIED: _ClassVar[ValorantSide]
    VALORANT_SIDE_DEFENDERS: _ClassVar[ValorantSide]
    VALORANT_SIDE_ATTACKERS: _ClassVar[ValorantSide]

class ValorantRoundOutcome(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    VALORANT_ROUND_OUTCOME_UNSPECIFIED: _ClassVar[ValorantRoundOutcome]
    VALORANT_ROUND_OUTCOME_DEFENDERS_WIN_ELIMINATION: _ClassVar[ValorantRoundOutcome]
    VALORANT_ROUND_OUTCOME_DEFENDERS_WIN_TIMEOUT: _ClassVar[ValorantRoundOutcome]
    VALORANT_ROUND_OUTCOME_DEFENDERS_WIN_DEFUSE: _ClassVar[ValorantRoundOutcome]
    VALORANT_ROUND_OUTCOME_ATTACKERS_WIN_ELIMINATION: _ClassVar[ValorantRoundOutcome]
    VALORANT_ROUND_OUTCOME_ATTACKERS_WIN_EXPLODE: _ClassVar[ValorantRoundOutcome]

class ValorantRoundPhase(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    VALORANT_ROUND_PHASE_UNSPECIFIED: _ClassVar[ValorantRoundPhase]
    VALORANT_ROUND_PHASE_BUY_PHASE: _ClassVar[ValorantRoundPhase]
    VALORANT_ROUND_PHASE_RUNNING: _ClassVar[ValorantRoundPhase]
    VALORANT_ROUND_PHASE_OVER: _ClassVar[ValorantRoundPhase]

class ValorantSpikeState(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    VALORANT_SPIKE_STATE_UNSPECIFIED: _ClassVar[ValorantSpikeState]
    VALORANT_SPIKE_STATE_CARRIED: _ClassVar[ValorantSpikeState]
    VALORANT_SPIKE_STATE_DROPPED: _ClassVar[ValorantSpikeState]
    VALORANT_SPIKE_STATE_PLANTING: _ClassVar[ValorantSpikeState]
    VALORANT_SPIKE_STATE_DEFUSING: _ClassVar[ValorantSpikeState]
    VALORANT_SPIKE_STATE_PLANTED: _ClassVar[ValorantSpikeState]
    VALORANT_SPIKE_STATE_EXPLODED: _ClassVar[ValorantSpikeState]
    VALORANT_SPIKE_STATE_DEFUSED: _ClassVar[ValorantSpikeState]
VALORANT_ULTIMATE_STATE__UNSPECIFIED: ValorantUltimateState
VALORANT_ULTIMATE_STATE_READY: ValorantUltimateState
VALORANT_ULTIMATE_STATE_NOT_READY: ValorantUltimateState
VALORANT_SIDE_UNSPECIFIED: ValorantSide
VALORANT_SIDE_DEFENDERS: ValorantSide
VALORANT_SIDE_ATTACKERS: ValorantSide
VALORANT_ROUND_OUTCOME_UNSPECIFIED: ValorantRoundOutcome
VALORANT_ROUND_OUTCOME_DEFENDERS_WIN_ELIMINATION: ValorantRoundOutcome
VALORANT_ROUND_OUTCOME_DEFENDERS_WIN_TIMEOUT: ValorantRoundOutcome
VALORANT_ROUND_OUTCOME_DEFENDERS_WIN_DEFUSE: ValorantRoundOutcome
VALORANT_ROUND_OUTCOME_ATTACKERS_WIN_ELIMINATION: ValorantRoundOutcome
VALORANT_ROUND_OUTCOME_ATTACKERS_WIN_EXPLODE: ValorantRoundOutcome
VALORANT_ROUND_PHASE_UNSPECIFIED: ValorantRoundPhase
VALORANT_ROUND_PHASE_BUY_PHASE: ValorantRoundPhase
VALORANT_ROUND_PHASE_RUNNING: ValorantRoundPhase
VALORANT_ROUND_PHASE_OVER: ValorantRoundPhase
VALORANT_SPIKE_STATE_UNSPECIFIED: ValorantSpikeState
VALORANT_SPIKE_STATE_CARRIED: ValorantSpikeState
VALORANT_SPIKE_STATE_DROPPED: ValorantSpikeState
VALORANT_SPIKE_STATE_PLANTING: ValorantSpikeState
VALORANT_SPIKE_STATE_DEFUSING: ValorantSpikeState
VALORANT_SPIKE_STATE_PLANTED: ValorantSpikeState
VALORANT_SPIKE_STATE_EXPLODED: ValorantSpikeState
VALORANT_SPIKE_STATE_DEFUSED: ValorantSpikeState

class ValorantMatchMessage(_message.Message):
    __slots__ = ["match_urn", "sequence", "timestamp", "data_status", "payload"]
    class Payload(_message.Message):
        __slots__ = ["snapshot", "update"]
        SNAPSHOT_FIELD_NUMBER: _ClassVar[int]
        UPDATE_FIELD_NUMBER: _ClassVar[int]
        snapshot: ValorantMatchSnapshot
        update: ValorantMatchUpdate
        def __init__(self, snapshot: _Optional[_Union[ValorantMatchSnapshot, _Mapping]] = ..., update: _Optional[_Union[ValorantMatchUpdate, _Mapping]] = ...) -> None: ...
    MATCH_URN_FIELD_NUMBER: _ClassVar[int]
    SEQUENCE_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    DATA_STATUS_FIELD_NUMBER: _ClassVar[int]
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    match_urn: str
    sequence: int
    timestamp: _timestamp_pb2.Timestamp
    data_status: _common_pb2.DataStatus
    payload: ValorantMatchMessage.Payload
    def __init__(self, match_urn: _Optional[str] = ..., sequence: _Optional[int] = ..., timestamp: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., data_status: _Optional[_Union[_common_pb2.DataStatus, str]] = ..., payload: _Optional[_Union[ValorantMatchMessage.Payload, _Mapping]] = ...) -> None: ...

class ValorantMatchSnapshot(_message.Message):
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
    match_state: ValorantMatchState
    tournament: _common_pb2.Tournament
    def __init__(self, match_urn: _Optional[str] = ..., sequence: _Optional[int] = ..., timestamp: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., data_status: _Optional[_Union[_common_pb2.DataStatus, str]] = ..., announcements: _Optional[_Iterable[_Union[_common_pb2.Announcement, _Mapping]]] = ..., match_state: _Optional[_Union[ValorantMatchState, _Mapping]] = ..., tournament: _Optional[_Union[_common_pb2.Tournament, _Mapping]] = ...) -> None: ...

class ValorantMatchUpdate(_message.Message):
    __slots__ = ["payload"]
    class Payload(_message.Message):
        __slots__ = ["match_state", "partial_updates"]
        MATCH_STATE_FIELD_NUMBER: _ClassVar[int]
        PARTIAL_UPDATES_FIELD_NUMBER: _ClassVar[int]
        match_state: ValorantMatchState
        partial_updates: ValorantMatchStatePartialUpdates
        def __init__(self, match_state: _Optional[_Union[ValorantMatchState, _Mapping]] = ..., partial_updates: _Optional[_Union[ValorantMatchStatePartialUpdates, _Mapping]] = ...) -> None: ...
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    payload: ValorantMatchUpdate.Payload
    def __init__(self, payload: _Optional[_Union[ValorantMatchUpdate.Payload, _Mapping]] = ...) -> None: ...

class ValorantMatchStatePartialUpdates(_message.Message):
    __slots__ = ["updates"]
    UPDATES_FIELD_NUMBER: _ClassVar[int]
    updates: _containers.RepeatedCompositeFieldContainer[ValorantMatchStatePartialUpdate]
    def __init__(self, updates: _Optional[_Iterable[_Union[ValorantMatchStatePartialUpdate, _Mapping]]] = ...) -> None: ...

class ValorantMatchStatePartialUpdate(_message.Message):
    __slots__ = ["score", "current_map", "current_map_partial_update"]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    CURRENT_MAP_FIELD_NUMBER: _ClassVar[int]
    CURRENT_MAP_PARTIAL_UPDATE_FIELD_NUMBER: _ClassVar[int]
    score: ValorantMatchScoreState
    current_map: ValorantCurrentMapState
    current_map_partial_update: ValorantCurrentMapStatePartialUpdate
    def __init__(self, score: _Optional[_Union[ValorantMatchScoreState, _Mapping]] = ..., current_map: _Optional[_Union[ValorantCurrentMapState, _Mapping]] = ..., current_map_partial_update: _Optional[_Union[ValorantCurrentMapStatePartialUpdate, _Mapping]] = ...) -> None: ...

class ValorantMatchState(_message.Message):
    __slots__ = ["match_urn", "match_type", "home_team", "away_team", "score", "match_status", "current_map"]
    MATCH_URN_FIELD_NUMBER: _ClassVar[int]
    MATCH_TYPE_FIELD_NUMBER: _ClassVar[int]
    HOME_TEAM_FIELD_NUMBER: _ClassVar[int]
    AWAY_TEAM_FIELD_NUMBER: _ClassVar[int]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    MATCH_STATUS_FIELD_NUMBER: _ClassVar[int]
    CURRENT_MAP_FIELD_NUMBER: _ClassVar[int]
    match_urn: str
    match_type: _common_pb2.BestOfType
    home_team: _common_pb2.Team
    away_team: _common_pb2.Team
    score: ValorantMatchScoreState
    match_status: _common_pb2.MatchStatusType
    current_map: ValorantCurrentMapState
    def __init__(self, match_urn: _Optional[str] = ..., match_type: _Optional[_Union[_common_pb2.BestOfType, str]] = ..., home_team: _Optional[_Union[_common_pb2.Team, _Mapping]] = ..., away_team: _Optional[_Union[_common_pb2.Team, _Mapping]] = ..., score: _Optional[_Union[ValorantMatchScoreState, _Mapping]] = ..., match_status: _Optional[_Union[_common_pb2.MatchStatusType, str]] = ..., current_map: _Optional[_Union[ValorantCurrentMapState, _Mapping]] = ...) -> None: ...

class ValorantMatchScoreState(_message.Message):
    __slots__ = ["home_score", "away_score"]
    HOME_SCORE_FIELD_NUMBER: _ClassVar[int]
    AWAY_SCORE_FIELD_NUMBER: _ClassVar[int]
    home_score: int
    away_score: int
    def __init__(self, home_score: _Optional[int] = ..., away_score: _Optional[int] = ...) -> None: ...

class ValorantCurrentMapStatePartialUpdate(_message.Message):
    __slots__ = ["score", "current_round", "current_round_partial_update", "team_current_map_state", "team_current_map_partial_update", "previous_rounds"]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    CURRENT_ROUND_FIELD_NUMBER: _ClassVar[int]
    CURRENT_ROUND_PARTIAL_UPDATE_FIELD_NUMBER: _ClassVar[int]
    TEAM_CURRENT_MAP_STATE_FIELD_NUMBER: _ClassVar[int]
    TEAM_CURRENT_MAP_PARTIAL_UPDATE_FIELD_NUMBER: _ClassVar[int]
    PREVIOUS_ROUNDS_FIELD_NUMBER: _ClassVar[int]
    score: ValorantMapScoreState
    current_round: ValorantCurrentRoundState
    current_round_partial_update: ValorantCurrentRoundStatePartialUpdate
    team_current_map_state: ValorantTeamCurrentMapState
    team_current_map_partial_update: ValorantTeamCurrentMapStatePartialUpdate
    previous_rounds: ValorantPreviousRoundsState
    def __init__(self, score: _Optional[_Union[ValorantMapScoreState, _Mapping]] = ..., current_round: _Optional[_Union[ValorantCurrentRoundState, _Mapping]] = ..., current_round_partial_update: _Optional[_Union[ValorantCurrentRoundStatePartialUpdate, _Mapping]] = ..., team_current_map_state: _Optional[_Union[ValorantTeamCurrentMapState, _Mapping]] = ..., team_current_map_partial_update: _Optional[_Union[ValorantTeamCurrentMapStatePartialUpdate, _Mapping]] = ..., previous_rounds: _Optional[_Union[ValorantPreviousRoundsState, _Mapping]] = ...) -> None: ...

class ValorantCurrentMapState(_message.Message):
    __slots__ = ["map_order", "map_paused", "map_name", "win_team_urn", "score", "current_round", "teams", "previous_rounds"]
    class TeamsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: ValorantTeamCurrentMapState
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[ValorantTeamCurrentMapState, _Mapping]] = ...) -> None: ...
    MAP_ORDER_FIELD_NUMBER: _ClassVar[int]
    MAP_PAUSED_FIELD_NUMBER: _ClassVar[int]
    MAP_NAME_FIELD_NUMBER: _ClassVar[int]
    WIN_TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    CURRENT_ROUND_FIELD_NUMBER: _ClassVar[int]
    TEAMS_FIELD_NUMBER: _ClassVar[int]
    PREVIOUS_ROUNDS_FIELD_NUMBER: _ClassVar[int]
    map_order: int
    map_paused: bool
    map_name: str
    win_team_urn: str
    score: ValorantMapScoreState
    current_round: ValorantCurrentRoundState
    teams: _containers.MessageMap[str, ValorantTeamCurrentMapState]
    previous_rounds: ValorantPreviousRoundsState
    def __init__(self, map_order: _Optional[int] = ..., map_paused: bool = ..., map_name: _Optional[str] = ..., win_team_urn: _Optional[str] = ..., score: _Optional[_Union[ValorantMapScoreState, _Mapping]] = ..., current_round: _Optional[_Union[ValorantCurrentRoundState, _Mapping]] = ..., teams: _Optional[_Mapping[str, ValorantTeamCurrentMapState]] = ..., previous_rounds: _Optional[_Union[ValorantPreviousRoundsState, _Mapping]] = ...) -> None: ...

class ValorantMapScoreState(_message.Message):
    __slots__ = ["home_score", "away_score"]
    HOME_SCORE_FIELD_NUMBER: _ClassVar[int]
    AWAY_SCORE_FIELD_NUMBER: _ClassVar[int]
    home_score: int
    away_score: int
    def __init__(self, home_score: _Optional[int] = ..., away_score: _Optional[int] = ...) -> None: ...

class ValorantPreviousRoundsState(_message.Message):
    __slots__ = ["rounds"]
    ROUNDS_FIELD_NUMBER: _ClassVar[int]
    rounds: _containers.RepeatedCompositeFieldContainer[ValorantPreviousRound]
    def __init__(self, rounds: _Optional[_Iterable[_Union[ValorantPreviousRound, _Mapping]]] = ...) -> None: ...

class ValorantTeamCurrentMapStatePartialUpdate(_message.Message):
    __slots__ = ["team_urn", "payload"]
    class Payload(_message.Message):
        __slots__ = ["player_current_map_state", "player_current_map_partial_update"]
        PLAYER_CURRENT_MAP_STATE_FIELD_NUMBER: _ClassVar[int]
        PLAYER_CURRENT_MAP_PARTIAL_UPDATE_FIELD_NUMBER: _ClassVar[int]
        player_current_map_state: ValorantPlayerCurrentMapState
        player_current_map_partial_update: ValorantPlayerCurrentMapStatePartialUpdate
        def __init__(self, player_current_map_state: _Optional[_Union[ValorantPlayerCurrentMapState, _Mapping]] = ..., player_current_map_partial_update: _Optional[_Union[ValorantPlayerCurrentMapStatePartialUpdate, _Mapping]] = ...) -> None: ...
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    team_urn: str
    payload: ValorantTeamCurrentMapStatePartialUpdate.Payload
    def __init__(self, team_urn: _Optional[str] = ..., payload: _Optional[_Union[ValorantTeamCurrentMapStatePartialUpdate.Payload, _Mapping]] = ...) -> None: ...

class ValorantTeamCurrentMapState(_message.Message):
    __slots__ = ["team_urn", "side", "players"]
    class PlayersEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: ValorantPlayerCurrentMapState
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[ValorantPlayerCurrentMapState, _Mapping]] = ...) -> None: ...
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    SIDE_FIELD_NUMBER: _ClassVar[int]
    PLAYERS_FIELD_NUMBER: _ClassVar[int]
    team_urn: str
    side: ValorantSide
    players: _containers.MessageMap[str, ValorantPlayerCurrentMapState]
    def __init__(self, team_urn: _Optional[str] = ..., side: _Optional[_Union[ValorantSide, str]] = ..., players: _Optional[_Mapping[str, ValorantPlayerCurrentMapState]] = ...) -> None: ...

class ValorantPlayerCurrentMapStatePartialUpdate(_message.Message):
    __slots__ = ["player_urn", "payload"]
    class Payload(_message.Message):
        __slots__ = ["player_info", "abilities", "statistics"]
        PLAYER_INFO_FIELD_NUMBER: _ClassVar[int]
        ABILITIES_FIELD_NUMBER: _ClassVar[int]
        STATISTICS_FIELD_NUMBER: _ClassVar[int]
        player_info: ValorantPlayerInfoState
        abilities: ValorantAbilitiesState
        statistics: ValorantPlayerCurrentMapStatisticsState
        def __init__(self, player_info: _Optional[_Union[ValorantPlayerInfoState, _Mapping]] = ..., abilities: _Optional[_Union[ValorantAbilitiesState, _Mapping]] = ..., statistics: _Optional[_Union[ValorantPlayerCurrentMapStatisticsState, _Mapping]] = ...) -> None: ...
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    payload: ValorantPlayerCurrentMapStatePartialUpdate.Payload
    def __init__(self, player_urn: _Optional[str] = ..., payload: _Optional[_Union[ValorantPlayerCurrentMapStatePartialUpdate.Payload, _Mapping]] = ...) -> None: ...

class ValorantPlayerCurrentMapState(_message.Message):
    __slots__ = ["player_urn", "agent_urn", "player_info", "abilities", "statistics"]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    AGENT_URN_FIELD_NUMBER: _ClassVar[int]
    PLAYER_INFO_FIELD_NUMBER: _ClassVar[int]
    ABILITIES_FIELD_NUMBER: _ClassVar[int]
    STATISTICS_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    agent_urn: str
    player_info: ValorantPlayerInfoState
    abilities: ValorantAbilitiesState
    statistics: ValorantPlayerCurrentMapStatisticsState
    def __init__(self, player_urn: _Optional[str] = ..., agent_urn: _Optional[str] = ..., player_info: _Optional[_Union[ValorantPlayerInfoState, _Mapping]] = ..., abilities: _Optional[_Union[ValorantAbilitiesState, _Mapping]] = ..., statistics: _Optional[_Union[ValorantPlayerCurrentMapStatisticsState, _Mapping]] = ...) -> None: ...

class ValorantPlayerCurrentMapStatisticsState(_message.Message):
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

class ValorantCurrentRoundStatePartialUpdate(_message.Message):
    __slots__ = ["round_info", "time", "spike", "team_current_round_state", "team_current_round_partial_update"]
    ROUND_INFO_FIELD_NUMBER: _ClassVar[int]
    TIME_FIELD_NUMBER: _ClassVar[int]
    SPIKE_FIELD_NUMBER: _ClassVar[int]
    TEAM_CURRENT_ROUND_STATE_FIELD_NUMBER: _ClassVar[int]
    TEAM_CURRENT_ROUND_PARTIAL_UPDATE_FIELD_NUMBER: _ClassVar[int]
    round_info: ValorantRoundInfoState
    time: ValorantCurrentRoundTimeState
    spike: ValorantCurrentRoundTeamSpikeState
    team_current_round_state: ValorantTeamCurrentRoundState
    team_current_round_partial_update: ValorantTeamCurrentRoundStatePartialUpdate
    def __init__(self, round_info: _Optional[_Union[ValorantRoundInfoState, _Mapping]] = ..., time: _Optional[_Union[ValorantCurrentRoundTimeState, _Mapping]] = ..., spike: _Optional[_Union[ValorantCurrentRoundTeamSpikeState, _Mapping]] = ..., team_current_round_state: _Optional[_Union[ValorantTeamCurrentRoundState, _Mapping]] = ..., team_current_round_partial_update: _Optional[_Union[ValorantTeamCurrentRoundStatePartialUpdate, _Mapping]] = ...) -> None: ...

class ValorantCurrentRoundState(_message.Message):
    __slots__ = ["round_info", "time", "spike", "teams"]
    class TeamsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: ValorantTeamCurrentRoundState
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[ValorantTeamCurrentRoundState, _Mapping]] = ...) -> None: ...
    ROUND_INFO_FIELD_NUMBER: _ClassVar[int]
    TIME_FIELD_NUMBER: _ClassVar[int]
    SPIKE_FIELD_NUMBER: _ClassVar[int]
    TEAMS_FIELD_NUMBER: _ClassVar[int]
    round_info: ValorantRoundInfoState
    time: ValorantCurrentRoundTimeState
    spike: ValorantCurrentRoundTeamSpikeState
    teams: _containers.MessageMap[str, ValorantTeamCurrentRoundState]
    def __init__(self, round_info: _Optional[_Union[ValorantRoundInfoState, _Mapping]] = ..., time: _Optional[_Union[ValorantCurrentRoundTimeState, _Mapping]] = ..., spike: _Optional[_Union[ValorantCurrentRoundTeamSpikeState, _Mapping]] = ..., teams: _Optional[_Mapping[str, ValorantTeamCurrentRoundState]] = ...) -> None: ...

class ValorantRoundInfoState(_message.Message):
    __slots__ = ["number", "phase"]
    NUMBER_FIELD_NUMBER: _ClassVar[int]
    PHASE_FIELD_NUMBER: _ClassVar[int]
    number: int
    phase: ValorantRoundPhase
    def __init__(self, number: _Optional[int] = ..., phase: _Optional[_Union[ValorantRoundPhase, str]] = ...) -> None: ...

class ValorantCurrentRoundTimeState(_message.Message):
    __slots__ = ["time_remaining"]
    TIME_REMAINING_FIELD_NUMBER: _ClassVar[int]
    time_remaining: _duration_pb2.Duration
    def __init__(self, time_remaining: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ...) -> None: ...

class ValorantCurrentRoundTeamSpikeState(_message.Message):
    __slots__ = ["state", "time_to_defused"]
    STATE_FIELD_NUMBER: _ClassVar[int]
    TIME_TO_DEFUSED_FIELD_NUMBER: _ClassVar[int]
    state: ValorantSpikeState
    time_to_defused: _duration_pb2.Duration
    def __init__(self, state: _Optional[_Union[ValorantSpikeState, str]] = ..., time_to_defused: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ...) -> None: ...

class ValorantTeamCurrentRoundStatePartialUpdate(_message.Message):
    __slots__ = ["team_urn", "payload"]
    class Payload(_message.Message):
        __slots__ = ["player_current_round_state", "player_current_round_partial_update"]
        PLAYER_CURRENT_ROUND_STATE_FIELD_NUMBER: _ClassVar[int]
        PLAYER_CURRENT_ROUND_PARTIAL_UPDATE_FIELD_NUMBER: _ClassVar[int]
        player_current_round_state: ValorantPlayerCurrentRoundState
        player_current_round_partial_update: ValorantPlayerCurrentRoundStatePartialUpdate
        def __init__(self, player_current_round_state: _Optional[_Union[ValorantPlayerCurrentRoundState, _Mapping]] = ..., player_current_round_partial_update: _Optional[_Union[ValorantPlayerCurrentRoundStatePartialUpdate, _Mapping]] = ...) -> None: ...
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    team_urn: str
    payload: ValorantTeamCurrentRoundStatePartialUpdate.Payload
    def __init__(self, team_urn: _Optional[str] = ..., payload: _Optional[_Union[ValorantTeamCurrentRoundStatePartialUpdate.Payload, _Mapping]] = ...) -> None: ...

class ValorantTeamCurrentRoundState(_message.Message):
    __slots__ = ["team_urn", "side", "players"]
    class PlayersEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: ValorantPlayerCurrentRoundState
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[ValorantPlayerCurrentRoundState, _Mapping]] = ...) -> None: ...
    TEAM_URN_FIELD_NUMBER: _ClassVar[int]
    SIDE_FIELD_NUMBER: _ClassVar[int]
    PLAYERS_FIELD_NUMBER: _ClassVar[int]
    team_urn: str
    side: ValorantSide
    players: _containers.MessageMap[str, ValorantPlayerCurrentRoundState]
    def __init__(self, team_urn: _Optional[str] = ..., side: _Optional[_Union[ValorantSide, str]] = ..., players: _Optional[_Mapping[str, ValorantPlayerCurrentRoundState]] = ...) -> None: ...

class ValorantPlayerCurrentRoundStatePartialUpdate(_message.Message):
    __slots__ = ["player_urn", "payload"]
    class Payload(_message.Message):
        __slots__ = ["player_info", "statistics", "weapons", "position"]
        PLAYER_INFO_FIELD_NUMBER: _ClassVar[int]
        STATISTICS_FIELD_NUMBER: _ClassVar[int]
        WEAPONS_FIELD_NUMBER: _ClassVar[int]
        POSITION_FIELD_NUMBER: _ClassVar[int]
        player_info: ValorantPlayerInfoState
        statistics: ValorantPlayerCurrentRoundStatisticsState
        weapons: ValorantWeaponsState
        position: ValorantPositionState
        def __init__(self, player_info: _Optional[_Union[ValorantPlayerInfoState, _Mapping]] = ..., statistics: _Optional[_Union[ValorantPlayerCurrentRoundStatisticsState, _Mapping]] = ..., weapons: _Optional[_Union[ValorantWeaponsState, _Mapping]] = ..., position: _Optional[_Union[ValorantPositionState, _Mapping]] = ...) -> None: ...
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    payload: ValorantPlayerCurrentRoundStatePartialUpdate.Payload
    def __init__(self, player_urn: _Optional[str] = ..., payload: _Optional[_Union[ValorantPlayerCurrentRoundStatePartialUpdate.Payload, _Mapping]] = ...) -> None: ...

class ValorantPlayerCurrentRoundState(_message.Message):
    __slots__ = ["player_urn", "player_info", "statistics", "weapons", "position"]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    PLAYER_INFO_FIELD_NUMBER: _ClassVar[int]
    STATISTICS_FIELD_NUMBER: _ClassVar[int]
    WEAPONS_FIELD_NUMBER: _ClassVar[int]
    POSITION_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    player_info: ValorantPlayerInfoState
    statistics: ValorantPlayerCurrentRoundStatisticsState
    weapons: ValorantWeaponsState
    position: ValorantPositionState
    def __init__(self, player_urn: _Optional[str] = ..., player_info: _Optional[_Union[ValorantPlayerInfoState, _Mapping]] = ..., statistics: _Optional[_Union[ValorantPlayerCurrentRoundStatisticsState, _Mapping]] = ..., weapons: _Optional[_Union[ValorantWeaponsState, _Mapping]] = ..., position: _Optional[_Union[ValorantPositionState, _Mapping]] = ...) -> None: ...

class ValorantPlayerCurrentRoundStatisticsState(_message.Message):
    __slots__ = ["player_urn", "is_alive"]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    IS_ALIVE_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    is_alive: bool
    def __init__(self, player_urn: _Optional[str] = ..., is_alive: bool = ...) -> None: ...

class ValorantAbilitiesState(_message.Message):
    __slots__ = ["player_urn", "abilities"]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    ABILITIES_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    abilities: _containers.RepeatedCompositeFieldContainer[ValorantAbility]
    def __init__(self, player_urn: _Optional[str] = ..., abilities: _Optional[_Iterable[_Union[ValorantAbility, _Mapping]]] = ...) -> None: ...

class ValorantWeaponsState(_message.Message):
    __slots__ = ["player_urn", "weapons"]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    WEAPONS_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    weapons: _containers.RepeatedCompositeFieldContainer[ValorantWeapon]
    def __init__(self, player_urn: _Optional[str] = ..., weapons: _Optional[_Iterable[_Union[ValorantWeapon, _Mapping]]] = ...) -> None: ...

class ValorantPlayerInfoState(_message.Message):
    __slots__ = ["player_urn", "slot_id", "ext_name"]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    SLOT_ID_FIELD_NUMBER: _ClassVar[int]
    EXT_NAME_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    slot_id: int
    ext_name: str
    def __init__(self, player_urn: _Optional[str] = ..., slot_id: _Optional[int] = ..., ext_name: _Optional[str] = ...) -> None: ...

class ValorantPositionState(_message.Message):
    __slots__ = ["player_urn", "x", "y"]
    PLAYER_URN_FIELD_NUMBER: _ClassVar[int]
    X_FIELD_NUMBER: _ClassVar[int]
    Y_FIELD_NUMBER: _ClassVar[int]
    player_urn: str
    x: float
    y: float
    def __init__(self, player_urn: _Optional[str] = ..., x: _Optional[float] = ..., y: _Optional[float] = ...) -> None: ...

class ValorantPreviousRound(_message.Message):
    __slots__ = ["number", "outcome", "home_won"]
    NUMBER_FIELD_NUMBER: _ClassVar[int]
    OUTCOME_FIELD_NUMBER: _ClassVar[int]
    HOME_WON_FIELD_NUMBER: _ClassVar[int]
    number: int
    outcome: ValorantRoundOutcome
    home_won: bool
    def __init__(self, number: _Optional[int] = ..., outcome: _Optional[_Union[ValorantRoundOutcome, str]] = ..., home_won: bool = ...) -> None: ...

class ValorantWeapon(_message.Message):
    __slots__ = ["id"]
    ID_FIELD_NUMBER: _ClassVar[int]
    id: str
    def __init__(self, id: _Optional[str] = ...) -> None: ...

class ValorantAbility(_message.Message):
    __slots__ = ["id", "ready", "is_ultimate"]
    ID_FIELD_NUMBER: _ClassVar[int]
    READY_FIELD_NUMBER: _ClassVar[int]
    IS_ULTIMATE_FIELD_NUMBER: _ClassVar[int]
    id: str
    ready: bool
    is_ultimate: bool
    def __init__(self, id: _Optional[str] = ..., ready: bool = ..., is_ultimate: bool = ...) -> None: ...
