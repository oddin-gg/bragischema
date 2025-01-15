from google.protobuf import timestamp_pb2 as _timestamp_pb2
from bragi import common_pb2 as _common_pb2
from bragi import cs2_pb2 as _cs2_pb2
from bragi import dota2_pb2 as _dota2_pb2
from bragi import rush_soccer_pb2 as _rush_soccer_pb2
from bragi import lol_pb2 as _lol_pb2
from bragi import rush_basketball_pb2 as _rush_basketball_pb2
from bragi import valorant_pb2 as _valorant_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class MatchTimelineRequest(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class MatchTimelineResponse(_message.Message):
    __slots__ = ["matches"]
    MATCHES_FIELD_NUMBER: _ClassVar[int]
    matches: _containers.RepeatedCompositeFieldContainer[_common_pb2.Match]
    def __init__(self, matches: _Optional[_Iterable[_Union[_common_pb2.Match, _Mapping]]] = ...) -> None: ...

class MatchTimelineFeedRequest(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class MatchTimelineFeedMessage(_message.Message):
    __slots__ = ["keepalive", "timeline", "match_update"]
    KEEPALIVE_FIELD_NUMBER: _ClassVar[int]
    TIMELINE_FIELD_NUMBER: _ClassVar[int]
    MATCH_UPDATE_FIELD_NUMBER: _ClassVar[int]
    keepalive: KeepAlive
    timeline: _common_pb2.MatchTimeline
    match_update: _common_pb2.Match
    def __init__(self, keepalive: _Optional[_Union[KeepAlive, _Mapping]] = ..., timeline: _Optional[_Union[_common_pb2.MatchTimeline, _Mapping]] = ..., match_update: _Optional[_Union[_common_pb2.Match, _Mapping]] = ...) -> None: ...

class LiveDataFeedRequest(_message.Message):
    __slots__ = ["after"]
    AFTER_FIELD_NUMBER: _ClassVar[int]
    after: _timestamp_pb2.Timestamp
    def __init__(self, after: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class LiveDataFeedMessage(_message.Message):
    __slots__ = ["keepalive", "match"]
    KEEPALIVE_FIELD_NUMBER: _ClassVar[int]
    MATCH_FIELD_NUMBER: _ClassVar[int]
    keepalive: KeepAlive
    match: MatchMessage
    def __init__(self, keepalive: _Optional[_Union[KeepAlive, _Mapping]] = ..., match: _Optional[_Union[MatchMessage, _Mapping]] = ...) -> None: ...

class KeepAlive(_message.Message):
    __slots__ = ["timestamp"]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    timestamp: _timestamp_pb2.Timestamp
    def __init__(self, timestamp: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class MatchMessage(_message.Message):
    __slots__ = ["announcement", "cs2", "cs2_duels", "dota2", "rush_soccer", "lol", "rush_basketball", "valorant"]
    ANNOUNCEMENT_FIELD_NUMBER: _ClassVar[int]
    CS2_FIELD_NUMBER: _ClassVar[int]
    CS2_DUELS_FIELD_NUMBER: _ClassVar[int]
    DOTA2_FIELD_NUMBER: _ClassVar[int]
    RUSH_SOCCER_FIELD_NUMBER: _ClassVar[int]
    LOL_FIELD_NUMBER: _ClassVar[int]
    RUSH_BASKETBALL_FIELD_NUMBER: _ClassVar[int]
    VALORANT_FIELD_NUMBER: _ClassVar[int]
    announcement: _common_pb2.AnnouncementUpdate
    cs2: _cs2_pb2.CS2MatchMessage
    cs2_duels: _cs2_pb2.CS2MatchMessage
    dota2: _dota2_pb2.Dota2MatchMessage
    rush_soccer: _rush_soccer_pb2.RushSoccerMatchMessage
    lol: _lol_pb2.LolMatchMessage
    rush_basketball: _rush_basketball_pb2.RushBasketballMatchMessage
    valorant: _valorant_pb2.ValorantMatchMessage
    def __init__(self, announcement: _Optional[_Union[_common_pb2.AnnouncementUpdate, _Mapping]] = ..., cs2: _Optional[_Union[_cs2_pb2.CS2MatchMessage, _Mapping]] = ..., cs2_duels: _Optional[_Union[_cs2_pb2.CS2MatchMessage, _Mapping]] = ..., dota2: _Optional[_Union[_dota2_pb2.Dota2MatchMessage, _Mapping]] = ..., rush_soccer: _Optional[_Union[_rush_soccer_pb2.RushSoccerMatchMessage, _Mapping]] = ..., lol: _Optional[_Union[_lol_pb2.LolMatchMessage, _Mapping]] = ..., rush_basketball: _Optional[_Union[_rush_basketball_pb2.RushBasketballMatchMessage, _Mapping]] = ..., valorant: _Optional[_Union[_valorant_pb2.ValorantMatchMessage, _Mapping]] = ...) -> None: ...

class MatchSnapshot(_message.Message):
    __slots__ = ["cs2", "cs2_duels", "dota2", "rush_soccer", "lol", "rush_basketball", "valorant"]
    CS2_FIELD_NUMBER: _ClassVar[int]
    CS2_DUELS_FIELD_NUMBER: _ClassVar[int]
    DOTA2_FIELD_NUMBER: _ClassVar[int]
    RUSH_SOCCER_FIELD_NUMBER: _ClassVar[int]
    LOL_FIELD_NUMBER: _ClassVar[int]
    RUSH_BASKETBALL_FIELD_NUMBER: _ClassVar[int]
    VALORANT_FIELD_NUMBER: _ClassVar[int]
    cs2: _cs2_pb2.CS2MatchSnapshot
    cs2_duels: _cs2_pb2.CS2MatchSnapshot
    dota2: _dota2_pb2.Dota2MatchSnapshot
    rush_soccer: _rush_soccer_pb2.RushSoccerMatchSnapshot
    lol: _lol_pb2.LolMatchSnapshot
    rush_basketball: _rush_basketball_pb2.RushBasketballMatchSnapshot
    valorant: _valorant_pb2.ValorantMatchSnapshot
    def __init__(self, cs2: _Optional[_Union[_cs2_pb2.CS2MatchSnapshot, _Mapping]] = ..., cs2_duels: _Optional[_Union[_cs2_pb2.CS2MatchSnapshot, _Mapping]] = ..., dota2: _Optional[_Union[_dota2_pb2.Dota2MatchSnapshot, _Mapping]] = ..., rush_soccer: _Optional[_Union[_rush_soccer_pb2.RushSoccerMatchSnapshot, _Mapping]] = ..., lol: _Optional[_Union[_lol_pb2.LolMatchSnapshot, _Mapping]] = ..., rush_basketball: _Optional[_Union[_rush_basketball_pb2.RushBasketballMatchSnapshot, _Mapping]] = ..., valorant: _Optional[_Union[_valorant_pb2.ValorantMatchSnapshot, _Mapping]] = ...) -> None: ...

class MatchState(_message.Message):
    __slots__ = ["cs2", "cs2_duels", "dota2", "rush_soccer", "lol", "rush_basketball", "valorant"]
    CS2_FIELD_NUMBER: _ClassVar[int]
    CS2_DUELS_FIELD_NUMBER: _ClassVar[int]
    DOTA2_FIELD_NUMBER: _ClassVar[int]
    RUSH_SOCCER_FIELD_NUMBER: _ClassVar[int]
    LOL_FIELD_NUMBER: _ClassVar[int]
    RUSH_BASKETBALL_FIELD_NUMBER: _ClassVar[int]
    VALORANT_FIELD_NUMBER: _ClassVar[int]
    cs2: _cs2_pb2.CS2MatchState
    cs2_duels: _cs2_pb2.CS2MatchState
    dota2: _dota2_pb2.Dota2MatchState
    rush_soccer: _rush_soccer_pb2.RushSoccerMatchState
    lol: _lol_pb2.LolMatchState
    rush_basketball: _rush_basketball_pb2.RushBasketballMatchState
    valorant: _valorant_pb2.ValorantMatchState
    def __init__(self, cs2: _Optional[_Union[_cs2_pb2.CS2MatchState, _Mapping]] = ..., cs2_duels: _Optional[_Union[_cs2_pb2.CS2MatchState, _Mapping]] = ..., dota2: _Optional[_Union[_dota2_pb2.Dota2MatchState, _Mapping]] = ..., rush_soccer: _Optional[_Union[_rush_soccer_pb2.RushSoccerMatchState, _Mapping]] = ..., lol: _Optional[_Union[_lol_pb2.LolMatchState, _Mapping]] = ..., rush_basketball: _Optional[_Union[_rush_basketball_pb2.RushBasketballMatchState, _Mapping]] = ..., valorant: _Optional[_Union[_valorant_pb2.ValorantMatchState, _Mapping]] = ...) -> None: ...
