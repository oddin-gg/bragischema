// Code generated by protoc-gen-go-vtproto. DO NOT EDIT.
// protoc-gen-go-vtproto version: v0.6.1-0.20241121165744-79df5c4772f2
// source: bragi/lol.proto

package bragi

import (
	durationpb "github.com/planetscale/vtprotobuf/types/known/durationpb"
	timestamppb "github.com/planetscale/vtprotobuf/types/known/timestamppb"
	proto "google.golang.org/protobuf/proto"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

func (this *LolMatchMessage_Payload) EqualVT(that *LolMatchMessage_Payload) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if this.Payload == nil && that.Payload != nil {
		return false
	} else if this.Payload != nil {
		if that.Payload == nil {
			return false
		}
		if !this.Payload.(interface {
			EqualVT(isLolMatchMessage_Payload_Payload) bool
		}).EqualVT(that.Payload) {
			return false
		}
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *LolMatchMessage_Payload) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*LolMatchMessage_Payload)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *LolMatchMessage_Payload_Snapshot) EqualVT(thatIface isLolMatchMessage_Payload_Payload) bool {
	that, ok := thatIface.(*LolMatchMessage_Payload_Snapshot)
	if !ok {
		return false
	}
	if this == that {
		return true
	}
	if this == nil && that != nil || this != nil && that == nil {
		return false
	}
	if p, q := this.Snapshot, that.Snapshot; p != q {
		if p == nil {
			p = &LolMatchSnapshot{}
		}
		if q == nil {
			q = &LolMatchSnapshot{}
		}
		if !p.EqualVT(q) {
			return false
		}
	}
	return true
}

func (this *LolMatchMessage_Payload_Update) EqualVT(thatIface isLolMatchMessage_Payload_Payload) bool {
	that, ok := thatIface.(*LolMatchMessage_Payload_Update)
	if !ok {
		return false
	}
	if this == that {
		return true
	}
	if this == nil && that != nil || this != nil && that == nil {
		return false
	}
	if p, q := this.Update, that.Update; p != q {
		if p == nil {
			p = &LolMatchUpdate{}
		}
		if q == nil {
			q = &LolMatchUpdate{}
		}
		if !p.EqualVT(q) {
			return false
		}
	}
	return true
}

func (this *LolMatchMessage) EqualVT(that *LolMatchMessage) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if this.MatchUrn != that.MatchUrn {
		return false
	}
	if this.Sequence != that.Sequence {
		return false
	}
	if !(*timestamppb.Timestamp)(this.Timestamp).EqualVT((*timestamppb.Timestamp)(that.Timestamp)) {
		return false
	}
	if this.DataStatus != that.DataStatus {
		return false
	}
	if !this.Payload.EqualVT(that.Payload) {
		return false
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *LolMatchMessage) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*LolMatchMessage)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *LolMatchSnapshot) EqualVT(that *LolMatchSnapshot) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if this.MatchUrn != that.MatchUrn {
		return false
	}
	if this.Sequence != that.Sequence {
		return false
	}
	if !(*timestamppb.Timestamp)(this.Timestamp).EqualVT((*timestamppb.Timestamp)(that.Timestamp)) {
		return false
	}
	if this.DataStatus != that.DataStatus {
		return false
	}
	if len(this.Announcements) != len(that.Announcements) {
		return false
	}
	for i, vx := range this.Announcements {
		vy := that.Announcements[i]
		if p, q := vx, vy; p != q {
			if p == nil {
				p = &Announcement{}
			}
			if q == nil {
				q = &Announcement{}
			}
			if !p.EqualVT(q) {
				return false
			}
		}
	}
	if !this.MatchState.EqualVT(that.MatchState) {
		return false
	}
	if !this.Tournament.EqualVT(that.Tournament) {
		return false
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *LolMatchSnapshot) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*LolMatchSnapshot)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *LolMatchUpdate_Payload) EqualVT(that *LolMatchUpdate_Payload) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if this.Payload == nil && that.Payload != nil {
		return false
	} else if this.Payload != nil {
		if that.Payload == nil {
			return false
		}
		if !this.Payload.(interface {
			EqualVT(isLolMatchUpdate_Payload_Payload) bool
		}).EqualVT(that.Payload) {
			return false
		}
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *LolMatchUpdate_Payload) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*LolMatchUpdate_Payload)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *LolMatchUpdate_Payload_MatchState) EqualVT(thatIface isLolMatchUpdate_Payload_Payload) bool {
	that, ok := thatIface.(*LolMatchUpdate_Payload_MatchState)
	if !ok {
		return false
	}
	if this == that {
		return true
	}
	if this == nil && that != nil || this != nil && that == nil {
		return false
	}
	if p, q := this.MatchState, that.MatchState; p != q {
		if p == nil {
			p = &LolMatchState{}
		}
		if q == nil {
			q = &LolMatchState{}
		}
		if !p.EqualVT(q) {
			return false
		}
	}
	return true
}

func (this *LolMatchUpdate_Payload_PartialUpdates) EqualVT(thatIface isLolMatchUpdate_Payload_Payload) bool {
	that, ok := thatIface.(*LolMatchUpdate_Payload_PartialUpdates)
	if !ok {
		return false
	}
	if this == that {
		return true
	}
	if this == nil && that != nil || this != nil && that == nil {
		return false
	}
	if p, q := this.PartialUpdates, that.PartialUpdates; p != q {
		if p == nil {
			p = &LolMatchStatePartialUpdates{}
		}
		if q == nil {
			q = &LolMatchStatePartialUpdates{}
		}
		if !p.EqualVT(q) {
			return false
		}
	}
	return true
}

func (this *LolMatchUpdate) EqualVT(that *LolMatchUpdate) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if !this.Payload.EqualVT(that.Payload) {
		return false
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *LolMatchUpdate) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*LolMatchUpdate)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *LolMatchStatePartialUpdates) EqualVT(that *LolMatchStatePartialUpdates) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if len(this.Updates) != len(that.Updates) {
		return false
	}
	for i, vx := range this.Updates {
		vy := that.Updates[i]
		if p, q := vx, vy; p != q {
			if p == nil {
				p = &LolMatchStatePartialUpdate{}
			}
			if q == nil {
				q = &LolMatchStatePartialUpdate{}
			}
			if !p.EqualVT(q) {
				return false
			}
		}
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *LolMatchStatePartialUpdates) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*LolMatchStatePartialUpdates)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *LolMatchStatePartialUpdate) EqualVT(that *LolMatchStatePartialUpdate) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if this.Update == nil && that.Update != nil {
		return false
	} else if this.Update != nil {
		if that.Update == nil {
			return false
		}
		if !this.Update.(interface {
			EqualVT(isLolMatchStatePartialUpdate_Update) bool
		}).EqualVT(that.Update) {
			return false
		}
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *LolMatchStatePartialUpdate) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*LolMatchStatePartialUpdate)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *LolMatchStatePartialUpdate_Score) EqualVT(thatIface isLolMatchStatePartialUpdate_Update) bool {
	that, ok := thatIface.(*LolMatchStatePartialUpdate_Score)
	if !ok {
		return false
	}
	if this == that {
		return true
	}
	if this == nil && that != nil || this != nil && that == nil {
		return false
	}
	if p, q := this.Score, that.Score; p != q {
		if p == nil {
			p = &LolMatchScoreState{}
		}
		if q == nil {
			q = &LolMatchScoreState{}
		}
		if !p.EqualVT(q) {
			return false
		}
	}
	return true
}

func (this *LolMatchStatePartialUpdate_CurrentMapState) EqualVT(thatIface isLolMatchStatePartialUpdate_Update) bool {
	that, ok := thatIface.(*LolMatchStatePartialUpdate_CurrentMapState)
	if !ok {
		return false
	}
	if this == that {
		return true
	}
	if this == nil && that != nil || this != nil && that == nil {
		return false
	}
	if p, q := this.CurrentMapState, that.CurrentMapState; p != q {
		if p == nil {
			p = &LolCurrentMapState{}
		}
		if q == nil {
			q = &LolCurrentMapState{}
		}
		if !p.EqualVT(q) {
			return false
		}
	}
	return true
}

func (this *LolMatchStatePartialUpdate_CurrentMapStatePartialUpdate) EqualVT(thatIface isLolMatchStatePartialUpdate_Update) bool {
	that, ok := thatIface.(*LolMatchStatePartialUpdate_CurrentMapStatePartialUpdate)
	if !ok {
		return false
	}
	if this == that {
		return true
	}
	if this == nil && that != nil || this != nil && that == nil {
		return false
	}
	if p, q := this.CurrentMapStatePartialUpdate, that.CurrentMapStatePartialUpdate; p != q {
		if p == nil {
			p = &LolCurrentMapStatePartialUpdate{}
		}
		if q == nil {
			q = &LolCurrentMapStatePartialUpdate{}
		}
		if !p.EqualVT(q) {
			return false
		}
	}
	return true
}

func (this *LolMatchState) EqualVT(that *LolMatchState) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if this.MatchUrn != that.MatchUrn {
		return false
	}
	if this.MatchType != that.MatchType {
		return false
	}
	if !this.HomeTeam.EqualVT(that.HomeTeam) {
		return false
	}
	if !this.AwayTeam.EqualVT(that.AwayTeam) {
		return false
	}
	if !this.Score.EqualVT(that.Score) {
		return false
	}
	if this.MatchStatus != that.MatchStatus {
		return false
	}
	if !this.CurrentMap.EqualVT(that.CurrentMap) {
		return false
	}
	if len(this.PreviousMaps) != len(that.PreviousMaps) {
		return false
	}
	for i, vx := range this.PreviousMaps {
		vy := that.PreviousMaps[i]
		if p, q := vx, vy; p != q {
			if p == nil {
				p = &LolPreviousMapState{}
			}
			if q == nil {
				q = &LolPreviousMapState{}
			}
			if !p.EqualVT(q) {
				return false
			}
		}
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *LolMatchState) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*LolMatchState)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *LolMatchScoreState) EqualVT(that *LolMatchScoreState) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if this.HomeScore != that.HomeScore {
		return false
	}
	if this.AwayScore != that.AwayScore {
		return false
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *LolMatchScoreState) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*LolMatchScoreState)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *LolCurrentMapStatePartialUpdate) EqualVT(that *LolCurrentMapStatePartialUpdate) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if this.Update == nil && that.Update != nil {
		return false
	} else if this.Update != nil {
		if that.Update == nil {
			return false
		}
		if !this.Update.(interface {
			EqualVT(isLolCurrentMapStatePartialUpdate_Update) bool
		}).EqualVT(that.Update) {
			return false
		}
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *LolCurrentMapStatePartialUpdate) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*LolCurrentMapStatePartialUpdate)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *LolCurrentMapStatePartialUpdate_GameTime) EqualVT(thatIface isLolCurrentMapStatePartialUpdate_Update) bool {
	that, ok := thatIface.(*LolCurrentMapStatePartialUpdate_GameTime)
	if !ok {
		return false
	}
	if this == that {
		return true
	}
	if this == nil && that != nil || this != nil && that == nil {
		return false
	}
	if p, q := this.GameTime, that.GameTime; p != q {
		if p == nil {
			p = &LolCurrentMapTimeState{}
		}
		if q == nil {
			q = &LolCurrentMapTimeState{}
		}
		if !p.EqualVT(q) {
			return false
		}
	}
	return true
}

func (this *LolCurrentMapStatePartialUpdate_TeamCurrentMapState) EqualVT(thatIface isLolCurrentMapStatePartialUpdate_Update) bool {
	that, ok := thatIface.(*LolCurrentMapStatePartialUpdate_TeamCurrentMapState)
	if !ok {
		return false
	}
	if this == that {
		return true
	}
	if this == nil && that != nil || this != nil && that == nil {
		return false
	}
	if p, q := this.TeamCurrentMapState, that.TeamCurrentMapState; p != q {
		if p == nil {
			p = &LolTeamCurrentMapState{}
		}
		if q == nil {
			q = &LolTeamCurrentMapState{}
		}
		if !p.EqualVT(q) {
			return false
		}
	}
	return true
}

func (this *LolCurrentMapStatePartialUpdate_TeamCurrentMapPartialUpdate) EqualVT(thatIface isLolCurrentMapStatePartialUpdate_Update) bool {
	that, ok := thatIface.(*LolCurrentMapStatePartialUpdate_TeamCurrentMapPartialUpdate)
	if !ok {
		return false
	}
	if this == that {
		return true
	}
	if this == nil && that != nil || this != nil && that == nil {
		return false
	}
	if p, q := this.TeamCurrentMapPartialUpdate, that.TeamCurrentMapPartialUpdate; p != q {
		if p == nil {
			p = &LolTeamCurrentMapStatePartialUpdate{}
		}
		if q == nil {
			q = &LolTeamCurrentMapStatePartialUpdate{}
		}
		if !p.EqualVT(q) {
			return false
		}
	}
	return true
}

func (this *LolCurrentMapStatePartialUpdate_Turrets) EqualVT(thatIface isLolCurrentMapStatePartialUpdate_Update) bool {
	that, ok := thatIface.(*LolCurrentMapStatePartialUpdate_Turrets)
	if !ok {
		return false
	}
	if this == that {
		return true
	}
	if this == nil && that != nil || this != nil && that == nil {
		return false
	}
	if p, q := this.Turrets, that.Turrets; p != q {
		if p == nil {
			p = &LolTurrets{}
		}
		if q == nil {
			q = &LolTurrets{}
		}
		if !p.EqualVT(q) {
			return false
		}
	}
	return true
}

func (this *LolCurrentMapStatePartialUpdate_Inhibitors) EqualVT(thatIface isLolCurrentMapStatePartialUpdate_Update) bool {
	that, ok := thatIface.(*LolCurrentMapStatePartialUpdate_Inhibitors)
	if !ok {
		return false
	}
	if this == that {
		return true
	}
	if this == nil && that != nil || this != nil && that == nil {
		return false
	}
	if p, q := this.Inhibitors, that.Inhibitors; p != q {
		if p == nil {
			p = &LolInhibitors{}
		}
		if q == nil {
			q = &LolInhibitors{}
		}
		if !p.EqualVT(q) {
			return false
		}
	}
	return true
}

func (this *LolCurrentMapState) EqualVT(that *LolCurrentMapState) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if this.MapOrder != that.MapOrder {
		return false
	}
	if this.MapPaused != that.MapPaused {
		return false
	}
	if !this.GameTime.EqualVT(that.GameTime) {
		return false
	}
	if len(this.Teams) != len(that.Teams) {
		return false
	}
	for i, vx := range this.Teams {
		vy, ok := that.Teams[i]
		if !ok {
			return false
		}
		if p, q := vx, vy; p != q {
			if p == nil {
				p = &LolTeamCurrentMapState{}
			}
			if q == nil {
				q = &LolTeamCurrentMapState{}
			}
			if !p.EqualVT(q) {
				return false
			}
		}
	}
	if !this.Turrets.EqualVT(that.Turrets) {
		return false
	}
	if !this.Inhibitors.EqualVT(that.Inhibitors) {
		return false
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *LolCurrentMapState) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*LolCurrentMapState)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *LolCurrentMapTimeState) EqualVT(that *LolCurrentMapTimeState) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if !(*durationpb.Duration)(this.GameTime).EqualVT((*durationpb.Duration)(that.GameTime)) {
		return false
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *LolCurrentMapTimeState) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*LolCurrentMapTimeState)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *LolPreviousMapState) EqualVT(that *LolPreviousMapState) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if this.MapOrder != that.MapOrder {
		return false
	}
	if len(this.Teams) != len(that.Teams) {
		return false
	}
	for i, vx := range this.Teams {
		vy, ok := that.Teams[i]
		if !ok {
			return false
		}
		if p, q := vx, vy; p != q {
			if p == nil {
				p = &LolTeamPreviousMapState{}
			}
			if q == nil {
				q = &LolTeamPreviousMapState{}
			}
			if !p.EqualVT(q) {
				return false
			}
		}
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *LolPreviousMapState) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*LolPreviousMapState)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *LolTeamCurrentMapStatePartialUpdate_Payload) EqualVT(that *LolTeamCurrentMapStatePartialUpdate_Payload) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if this.Payload == nil && that.Payload != nil {
		return false
	} else if this.Payload != nil {
		if that.Payload == nil {
			return false
		}
		if !this.Payload.(interface {
			EqualVT(isLolTeamCurrentMapStatePartialUpdate_Payload_Payload) bool
		}).EqualVT(that.Payload) {
			return false
		}
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *LolTeamCurrentMapStatePartialUpdate_Payload) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*LolTeamCurrentMapStatePartialUpdate_Payload)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *LolTeamCurrentMapStatePartialUpdate_Payload_Statistics) EqualVT(thatIface isLolTeamCurrentMapStatePartialUpdate_Payload_Payload) bool {
	that, ok := thatIface.(*LolTeamCurrentMapStatePartialUpdate_Payload_Statistics)
	if !ok {
		return false
	}
	if this == that {
		return true
	}
	if this == nil && that != nil || this != nil && that == nil {
		return false
	}
	if p, q := this.Statistics, that.Statistics; p != q {
		if p == nil {
			p = &LolTeamCurrentMapStatisticsState{}
		}
		if q == nil {
			q = &LolTeamCurrentMapStatisticsState{}
		}
		if !p.EqualVT(q) {
			return false
		}
	}
	return true
}

func (this *LolTeamCurrentMapStatePartialUpdate_Payload_PlayerCurrentMapState) EqualVT(thatIface isLolTeamCurrentMapStatePartialUpdate_Payload_Payload) bool {
	that, ok := thatIface.(*LolTeamCurrentMapStatePartialUpdate_Payload_PlayerCurrentMapState)
	if !ok {
		return false
	}
	if this == that {
		return true
	}
	if this == nil && that != nil || this != nil && that == nil {
		return false
	}
	if p, q := this.PlayerCurrentMapState, that.PlayerCurrentMapState; p != q {
		if p == nil {
			p = &LolPlayerCurrentMapState{}
		}
		if q == nil {
			q = &LolPlayerCurrentMapState{}
		}
		if !p.EqualVT(q) {
			return false
		}
	}
	return true
}

func (this *LolTeamCurrentMapStatePartialUpdate_Payload_PlayerCurrentMapPartialUpdate) EqualVT(thatIface isLolTeamCurrentMapStatePartialUpdate_Payload_Payload) bool {
	that, ok := thatIface.(*LolTeamCurrentMapStatePartialUpdate_Payload_PlayerCurrentMapPartialUpdate)
	if !ok {
		return false
	}
	if this == that {
		return true
	}
	if this == nil && that != nil || this != nil && that == nil {
		return false
	}
	if p, q := this.PlayerCurrentMapPartialUpdate, that.PlayerCurrentMapPartialUpdate; p != q {
		if p == nil {
			p = &LolPlayerCurrentMapStatePartialUpdate{}
		}
		if q == nil {
			q = &LolPlayerCurrentMapStatePartialUpdate{}
		}
		if !p.EqualVT(q) {
			return false
		}
	}
	return true
}

func (this *LolTeamCurrentMapStatePartialUpdate) EqualVT(that *LolTeamCurrentMapStatePartialUpdate) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if this.TeamUrn != that.TeamUrn {
		return false
	}
	if !this.Payload.EqualVT(that.Payload) {
		return false
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *LolTeamCurrentMapStatePartialUpdate) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*LolTeamCurrentMapStatePartialUpdate)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *LolTeamCurrentMapState) EqualVT(that *LolTeamCurrentMapState) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if this.TeamUrn != that.TeamUrn {
		return false
	}
	if this.Faction != that.Faction {
		return false
	}
	if !this.Statistics.EqualVT(that.Statistics) {
		return false
	}
	if p, q := this.Won, that.Won; (p == nil && q != nil) || (p != nil && (q == nil || *p != *q)) {
		return false
	}
	if len(this.Players) != len(that.Players) {
		return false
	}
	for i, vx := range this.Players {
		vy, ok := that.Players[i]
		if !ok {
			return false
		}
		if p, q := vx, vy; p != q {
			if p == nil {
				p = &LolPlayerCurrentMapState{}
			}
			if q == nil {
				q = &LolPlayerCurrentMapState{}
			}
			if !p.EqualVT(q) {
				return false
			}
		}
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *LolTeamCurrentMapState) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*LolTeamCurrentMapState)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *LolTeamCurrentMapStatisticsState) EqualVT(that *LolTeamCurrentMapStatisticsState) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if this.TeamUrn != that.TeamUrn {
		return false
	}
	if this.Kills != that.Kills {
		return false
	}
	if this.Barons != that.Barons {
		return false
	}
	if this.Dragons != that.Dragons {
		return false
	}
	if this.Turrets != that.Turrets {
		return false
	}
	if this.Inhibitors != that.Inhibitors {
		return false
	}
	if this.Gold != that.Gold {
		return false
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *LolTeamCurrentMapStatisticsState) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*LolTeamCurrentMapStatisticsState)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *LolPlayerCurrentMapStatePartialUpdate_Payload) EqualVT(that *LolPlayerCurrentMapStatePartialUpdate_Payload) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if this.Payload == nil && that.Payload != nil {
		return false
	} else if this.Payload != nil {
		if that.Payload == nil {
			return false
		}
		if !this.Payload.(interface {
			EqualVT(isLolPlayerCurrentMapStatePartialUpdate_Payload_Payload) bool
		}).EqualVT(that.Payload) {
			return false
		}
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *LolPlayerCurrentMapStatePartialUpdate_Payload) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*LolPlayerCurrentMapStatePartialUpdate_Payload)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *LolPlayerCurrentMapStatePartialUpdate_Payload_PlayerInfo) EqualVT(thatIface isLolPlayerCurrentMapStatePartialUpdate_Payload_Payload) bool {
	that, ok := thatIface.(*LolPlayerCurrentMapStatePartialUpdate_Payload_PlayerInfo)
	if !ok {
		return false
	}
	if this == that {
		return true
	}
	if this == nil && that != nil || this != nil && that == nil {
		return false
	}
	if p, q := this.PlayerInfo, that.PlayerInfo; p != q {
		if p == nil {
			p = &LolPlayerInfoState{}
		}
		if q == nil {
			q = &LolPlayerInfoState{}
		}
		if !p.EqualVT(q) {
			return false
		}
	}
	return true
}

func (this *LolPlayerCurrentMapStatePartialUpdate_Payload_Timers) EqualVT(thatIface isLolPlayerCurrentMapStatePartialUpdate_Payload_Payload) bool {
	that, ok := thatIface.(*LolPlayerCurrentMapStatePartialUpdate_Payload_Timers)
	if !ok {
		return false
	}
	if this == that {
		return true
	}
	if this == nil && that != nil || this != nil && that == nil {
		return false
	}
	if p, q := this.Timers, that.Timers; p != q {
		if p == nil {
			p = &LolPlayerCurrentMapTimersState{}
		}
		if q == nil {
			q = &LolPlayerCurrentMapTimersState{}
		}
		if !p.EqualVT(q) {
			return false
		}
	}
	return true
}

func (this *LolPlayerCurrentMapStatePartialUpdate_Payload_Statistics) EqualVT(thatIface isLolPlayerCurrentMapStatePartialUpdate_Payload_Payload) bool {
	that, ok := thatIface.(*LolPlayerCurrentMapStatePartialUpdate_Payload_Statistics)
	if !ok {
		return false
	}
	if this == that {
		return true
	}
	if this == nil && that != nil || this != nil && that == nil {
		return false
	}
	if p, q := this.Statistics, that.Statistics; p != q {
		if p == nil {
			p = &LolPlayerStatisticsState{}
		}
		if q == nil {
			q = &LolPlayerStatisticsState{}
		}
		if !p.EqualVT(q) {
			return false
		}
	}
	return true
}

func (this *LolPlayerCurrentMapStatePartialUpdate_Payload_MapStatistics) EqualVT(thatIface isLolPlayerCurrentMapStatePartialUpdate_Payload_Payload) bool {
	that, ok := thatIface.(*LolPlayerCurrentMapStatePartialUpdate_Payload_MapStatistics)
	if !ok {
		return false
	}
	if this == that {
		return true
	}
	if this == nil && that != nil || this != nil && that == nil {
		return false
	}
	if p, q := this.MapStatistics, that.MapStatistics; p != q {
		if p == nil {
			p = &LolPlayerCurrentMapStatisticsState{}
		}
		if q == nil {
			q = &LolPlayerCurrentMapStatisticsState{}
		}
		if !p.EqualVT(q) {
			return false
		}
	}
	return true
}

func (this *LolPlayerCurrentMapStatePartialUpdate_Payload_Position) EqualVT(thatIface isLolPlayerCurrentMapStatePartialUpdate_Payload_Payload) bool {
	that, ok := thatIface.(*LolPlayerCurrentMapStatePartialUpdate_Payload_Position)
	if !ok {
		return false
	}
	if this == that {
		return true
	}
	if this == nil && that != nil || this != nil && that == nil {
		return false
	}
	if p, q := this.Position, that.Position; p != q {
		if p == nil {
			p = &LolPosition{}
		}
		if q == nil {
			q = &LolPosition{}
		}
		if !p.EqualVT(q) {
			return false
		}
	}
	return true
}

func (this *LolPlayerCurrentMapStatePartialUpdate) EqualVT(that *LolPlayerCurrentMapStatePartialUpdate) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if this.PlayerUrn != that.PlayerUrn {
		return false
	}
	if !this.Payload.EqualVT(that.Payload) {
		return false
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *LolPlayerCurrentMapStatePartialUpdate) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*LolPlayerCurrentMapStatePartialUpdate)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *LolPlayerCurrentMapState) EqualVT(that *LolPlayerCurrentMapState) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if this.PlayerUrn != that.PlayerUrn {
		return false
	}
	if !this.PlayerInfo.EqualVT(that.PlayerInfo) {
		return false
	}
	if !this.Timers.EqualVT(that.Timers) {
		return false
	}
	if !this.Statistics.EqualVT(that.Statistics) {
		return false
	}
	if !this.MapStatistics.EqualVT(that.MapStatistics) {
		return false
	}
	if !this.Position.EqualVT(that.Position) {
		return false
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *LolPlayerCurrentMapState) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*LolPlayerCurrentMapState)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *LolPlayerCurrentMapStatisticsState) EqualVT(that *LolPlayerCurrentMapStatisticsState) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if this.PlayerUrn != that.PlayerUrn {
		return false
	}
	if this.Alive != that.Alive {
		return false
	}
	if this.Health != that.Health {
		return false
	}
	if this.MaxHealth != that.MaxHealth {
		return false
	}
	if this.TotalGold != that.TotalGold {
		return false
	}
	if this.Mana != that.Mana {
		return false
	}
	if this.MaxMana != that.MaxMana {
		return false
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *LolPlayerCurrentMapStatisticsState) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*LolPlayerCurrentMapStatisticsState)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *LolPlayerCurrentMapTimersState) EqualVT(that *LolPlayerCurrentMapTimersState) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if this.PlayerUrn != that.PlayerUrn {
		return false
	}
	if !(*durationpb.Duration)(this.RespawnTimer).EqualVT((*durationpb.Duration)(that.RespawnTimer)) {
		return false
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *LolPlayerCurrentMapTimersState) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*LolPlayerCurrentMapTimersState)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *LolTeamPreviousMapState) EqualVT(that *LolTeamPreviousMapState) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if this.TeamUrn != that.TeamUrn {
		return false
	}
	if this.Faction != that.Faction {
		return false
	}
	if this.Kills != that.Kills {
		return false
	}
	if this.Barons != that.Barons {
		return false
	}
	if this.Dragons != that.Dragons {
		return false
	}
	if this.Turrets != that.Turrets {
		return false
	}
	if this.Inhibitors != that.Inhibitors {
		return false
	}
	if this.Gold != that.Gold {
		return false
	}
	if p, q := this.Won, that.Won; (p == nil && q != nil) || (p != nil && (q == nil || *p != *q)) {
		return false
	}
	if len(this.Players) != len(that.Players) {
		return false
	}
	for i, vx := range this.Players {
		vy, ok := that.Players[i]
		if !ok {
			return false
		}
		if p, q := vx, vy; p != q {
			if p == nil {
				p = &LolPlayerPreviousMapState{}
			}
			if q == nil {
				q = &LolPlayerPreviousMapState{}
			}
			if !p.EqualVT(q) {
				return false
			}
		}
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *LolTeamPreviousMapState) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*LolTeamPreviousMapState)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *LolPlayerPreviousMapState) EqualVT(that *LolPlayerPreviousMapState) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if this.PlayerUrn != that.PlayerUrn {
		return false
	}
	if !this.PlayerInfo.EqualVT(that.PlayerInfo) {
		return false
	}
	if !this.Statistics.EqualVT(that.Statistics) {
		return false
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *LolPlayerPreviousMapState) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*LolPlayerPreviousMapState)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *LolPlayerInfoState) EqualVT(that *LolPlayerInfoState) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if this.PlayerUrn != that.PlayerUrn {
		return false
	}
	if this.SlotId != that.SlotId {
		return false
	}
	if this.ExtName != that.ExtName {
		return false
	}
	if p, q := this.ChampionId, that.ChampionId; (p == nil && q != nil) || (p != nil && (q == nil || *p != *q)) {
		return false
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *LolPlayerInfoState) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*LolPlayerInfoState)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *LolPlayerStatisticsState) EqualVT(that *LolPlayerStatisticsState) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if this.PlayerUrn != that.PlayerUrn {
		return false
	}
	if this.Kills != that.Kills {
		return false
	}
	if this.Deaths != that.Deaths {
		return false
	}
	if this.Assists != that.Assists {
		return false
	}
	if this.CreepScore != that.CreepScore {
		return false
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *LolPlayerStatisticsState) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*LolPlayerStatisticsState)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *LolTurrets) EqualVT(that *LolTurrets) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if len(this.Turrets) != len(that.Turrets) {
		return false
	}
	for i, vx := range this.Turrets {
		vy := that.Turrets[i]
		if p, q := vx, vy; p != q {
			if p == nil {
				p = &LolTurret{}
			}
			if q == nil {
				q = &LolTurret{}
			}
			if !p.EqualVT(q) {
				return false
			}
		}
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *LolTurrets) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*LolTurrets)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *LolInhibitors) EqualVT(that *LolInhibitors) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if len(this.Inhibitors) != len(that.Inhibitors) {
		return false
	}
	for i, vx := range this.Inhibitors {
		vy := that.Inhibitors[i]
		if p, q := vx, vy; p != q {
			if p == nil {
				p = &LolInhibitor{}
			}
			if q == nil {
				q = &LolInhibitor{}
			}
			if !p.EqualVT(q) {
				return false
			}
		}
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *LolInhibitors) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*LolInhibitors)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *LolTurret) EqualVT(that *LolTurret) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if this.Lane != that.Lane {
		return false
	}
	if this.Faction != that.Faction {
		return false
	}
	if this.Tier != that.Tier {
		return false
	}
	if this.Alive != that.Alive {
		return false
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *LolTurret) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*LolTurret)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *LolInhibitor) EqualVT(that *LolInhibitor) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if this.Lane != that.Lane {
		return false
	}
	if this.Faction != that.Faction {
		return false
	}
	if this.Alive != that.Alive {
		return false
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *LolInhibitor) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*LolInhibitor)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *LolPosition) EqualVT(that *LolPosition) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if this.X != that.X {
		return false
	}
	if this.Y != that.Y {
		return false
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *LolPosition) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*LolPosition)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
