// Code generated by protoc-gen-go-vtproto. DO NOT EDIT.
// protoc-gen-go-vtproto version: v0.6.0
// source: bragi/common.proto

package bragi

import (
	timestamppb1 "github.com/planetscale/vtprotobuf/types/known/timestamppb"
	proto "google.golang.org/protobuf/proto"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

func (m *AnnouncementUpdate) CloneVT() *AnnouncementUpdate {
	if m == nil {
		return (*AnnouncementUpdate)(nil)
	}
	r := new(AnnouncementUpdate)
	r.MatchUrn = m.MatchUrn
	r.Sequence = m.Sequence
	r.Timestamp = (*timestamppb.Timestamp)((*timestamppb1.Timestamp)(m.Timestamp).CloneVT())
	r.Payload = m.Payload.CloneVT()
	if len(m.unknownFields) > 0 {
		r.unknownFields = make([]byte, len(m.unknownFields))
		copy(r.unknownFields, m.unknownFields)
	}
	return r
}

func (m *AnnouncementUpdate) CloneMessageVT() proto.Message {
	return m.CloneVT()
}

func (m *Announcement_Payload) CloneVT() *Announcement_Payload {
	if m == nil {
		return (*Announcement_Payload)(nil)
	}
	r := new(Announcement_Payload)
	if m.Payload != nil {
		r.Payload = m.Payload.(interface {
			CloneVT() isAnnouncement_Payload_Payload
		}).CloneVT()
	}
	if len(m.unknownFields) > 0 {
		r.unknownFields = make([]byte, len(m.unknownFields))
		copy(r.unknownFields, m.unknownFields)
	}
	return r
}

func (m *Announcement_Payload) CloneMessageVT() proto.Message {
	return m.CloneVT()
}

func (m *Announcement_Payload_Control) CloneVT() isAnnouncement_Payload_Payload {
	if m == nil {
		return (*Announcement_Payload_Control)(nil)
	}
	r := new(Announcement_Payload_Control)
	r.Control = m.Control.CloneVT()
	return r
}

func (m *Announcement_Payload_Error) CloneVT() isAnnouncement_Payload_Payload {
	if m == nil {
		return (*Announcement_Payload_Error)(nil)
	}
	r := new(Announcement_Payload_Error)
	r.Error = m.Error.CloneVT()
	return r
}

func (m *Announcement) CloneVT() *Announcement {
	if m == nil {
		return (*Announcement)(nil)
	}
	r := new(Announcement)
	r.CreatedAt = (*timestamppb.Timestamp)((*timestamppb1.Timestamp)(m.CreatedAt).CloneVT())
	r.Payload = m.Payload.CloneVT()
	if len(m.unknownFields) > 0 {
		r.unknownFields = make([]byte, len(m.unknownFields))
		copy(r.unknownFields, m.unknownFields)
	}
	return r
}

func (m *Announcement) CloneMessageVT() proto.Message {
	return m.CloneVT()
}

func (m *ControlAnnouncement) CloneVT() *ControlAnnouncement {
	if m == nil {
		return (*ControlAnnouncement)(nil)
	}
	r := new(ControlAnnouncement)
	r.Type = m.Type
	if rhs := m.Message; rhs != nil {
		tmpVal := *rhs
		r.Message = &tmpVal
	}
	if len(m.unknownFields) > 0 {
		r.unknownFields = make([]byte, len(m.unknownFields))
		copy(r.unknownFields, m.unknownFields)
	}
	return r
}

func (m *ControlAnnouncement) CloneMessageVT() proto.Message {
	return m.CloneVT()
}

func (m *ControlErrorAnnouncement) CloneVT() *ControlErrorAnnouncement {
	if m == nil {
		return (*ControlErrorAnnouncement)(nil)
	}
	r := new(ControlErrorAnnouncement)
	r.Type = m.Type
	if rhs := m.Message; rhs != nil {
		tmpVal := *rhs
		r.Message = &tmpVal
	}
	if len(m.unknownFields) > 0 {
		r.unknownFields = make([]byte, len(m.unknownFields))
		copy(r.unknownFields, m.unknownFields)
	}
	return r
}

func (m *ControlErrorAnnouncement) CloneMessageVT() proto.Message {
	return m.CloneVT()
}

func (m *MatchTimeline) CloneVT() *MatchTimeline {
	if m == nil {
		return (*MatchTimeline)(nil)
	}
	r := new(MatchTimeline)
	if rhs := m.Matches; rhs != nil {
		tmpContainer := make([]*Match, len(rhs))
		for k, v := range rhs {
			tmpContainer[k] = v.CloneVT()
		}
		r.Matches = tmpContainer
	}
	if len(m.unknownFields) > 0 {
		r.unknownFields = make([]byte, len(m.unknownFields))
		copy(r.unknownFields, m.unknownFields)
	}
	return r
}

func (m *MatchTimeline) CloneMessageVT() proto.Message {
	return m.CloneVT()
}

func (m *Match) CloneVT() *Match {
	if m == nil {
		return (*Match)(nil)
	}
	r := new(Match)
	r.MatchUrn = m.MatchUrn
	r.TournamentUrn = m.TournamentUrn
	r.Sport = m.Sport
	r.HomeTeamUrn = m.HomeTeamUrn
	r.AwayTeamUrn = m.AwayTeamUrn
	r.HomeScore = m.HomeScore
	r.AwayScore = m.AwayScore
	r.MatchStatus = m.MatchStatus
	r.PlannetStart = (*timestamppb.Timestamp)((*timestamppb1.Timestamp)(m.PlannetStart).CloneVT())
	r.Tournament = m.Tournament.CloneVT()
	if rhs := m.Teams; rhs != nil {
		tmpContainer := make([]*Team, len(rhs))
		for k, v := range rhs {
			tmpContainer[k] = v.CloneVT()
		}
		r.Teams = tmpContainer
	}
	if rhs := m.Players; rhs != nil {
		tmpContainer := make([]*Player, len(rhs))
		for k, v := range rhs {
			tmpContainer[k] = v.CloneVT()
		}
		r.Players = tmpContainer
	}
	if len(m.unknownFields) > 0 {
		r.unknownFields = make([]byte, len(m.unknownFields))
		copy(r.unknownFields, m.unknownFields)
	}
	return r
}

func (m *Match) CloneMessageVT() proto.Message {
	return m.CloneVT()
}

func (m *Tournament) CloneVT() *Tournament {
	if m == nil {
		return (*Tournament)(nil)
	}
	r := new(Tournament)
	r.Urn = m.Urn
	r.Name = m.Name
	if len(m.unknownFields) > 0 {
		r.unknownFields = make([]byte, len(m.unknownFields))
		copy(r.unknownFields, m.unknownFields)
	}
	return r
}

func (m *Tournament) CloneMessageVT() proto.Message {
	return m.CloneVT()
}

func (m *Team) CloneVT() *Team {
	if m == nil {
		return (*Team)(nil)
	}
	r := new(Team)
	r.Urn = m.Urn
	r.Name = m.Name
	r.IsHome = m.IsHome
	if len(m.unknownFields) > 0 {
		r.unknownFields = make([]byte, len(m.unknownFields))
		copy(r.unknownFields, m.unknownFields)
	}
	return r
}

func (m *Team) CloneMessageVT() proto.Message {
	return m.CloneVT()
}

func (m *Player) CloneVT() *Player {
	if m == nil {
		return (*Player)(nil)
	}
	r := new(Player)
	r.Urn = m.Urn
	r.Nickname = m.Nickname
	r.TeamUrn = m.TeamUrn
	if len(m.unknownFields) > 0 {
		r.unknownFields = make([]byte, len(m.unknownFields))
		copy(r.unknownFields, m.unknownFields)
	}
	return r
}

func (m *Player) CloneMessageVT() proto.Message {
	return m.CloneVT()
}

func (this *AnnouncementUpdate) EqualVT(that *AnnouncementUpdate) bool {
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
	if !(*timestamppb1.Timestamp)(this.Timestamp).EqualVT((*timestamppb1.Timestamp)(that.Timestamp)) {
		return false
	}
	if !this.Payload.EqualVT(that.Payload) {
		return false
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *AnnouncementUpdate) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*AnnouncementUpdate)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *Announcement_Payload) EqualVT(that *Announcement_Payload) bool {
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
			EqualVT(isAnnouncement_Payload_Payload) bool
		}).EqualVT(that.Payload) {
			return false
		}
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *Announcement_Payload) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*Announcement_Payload)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *Announcement_Payload_Control) EqualVT(thatIface isAnnouncement_Payload_Payload) bool {
	that, ok := thatIface.(*Announcement_Payload_Control)
	if !ok {
		return false
	}
	if this == that {
		return true
	}
	if this == nil && that != nil || this != nil && that == nil {
		return false
	}
	if p, q := this.Control, that.Control; p != q {
		if p == nil {
			p = &ControlAnnouncement{}
		}
		if q == nil {
			q = &ControlAnnouncement{}
		}
		if !p.EqualVT(q) {
			return false
		}
	}
	return true
}

func (this *Announcement_Payload_Error) EqualVT(thatIface isAnnouncement_Payload_Payload) bool {
	that, ok := thatIface.(*Announcement_Payload_Error)
	if !ok {
		return false
	}
	if this == that {
		return true
	}
	if this == nil && that != nil || this != nil && that == nil {
		return false
	}
	if p, q := this.Error, that.Error; p != q {
		if p == nil {
			p = &ControlErrorAnnouncement{}
		}
		if q == nil {
			q = &ControlErrorAnnouncement{}
		}
		if !p.EqualVT(q) {
			return false
		}
	}
	return true
}

func (this *Announcement) EqualVT(that *Announcement) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if !(*timestamppb1.Timestamp)(this.CreatedAt).EqualVT((*timestamppb1.Timestamp)(that.CreatedAt)) {
		return false
	}
	if !this.Payload.EqualVT(that.Payload) {
		return false
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *Announcement) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*Announcement)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *ControlAnnouncement) EqualVT(that *ControlAnnouncement) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if this.Type != that.Type {
		return false
	}
	if p, q := this.Message, that.Message; (p == nil && q != nil) || (p != nil && (q == nil || *p != *q)) {
		return false
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *ControlAnnouncement) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*ControlAnnouncement)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *ControlErrorAnnouncement) EqualVT(that *ControlErrorAnnouncement) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if this.Type != that.Type {
		return false
	}
	if p, q := this.Message, that.Message; (p == nil && q != nil) || (p != nil && (q == nil || *p != *q)) {
		return false
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *ControlErrorAnnouncement) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*ControlErrorAnnouncement)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *MatchTimeline) EqualVT(that *MatchTimeline) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if len(this.Matches) != len(that.Matches) {
		return false
	}
	for i, vx := range this.Matches {
		vy := that.Matches[i]
		if p, q := vx, vy; p != q {
			if p == nil {
				p = &Match{}
			}
			if q == nil {
				q = &Match{}
			}
			if !p.EqualVT(q) {
				return false
			}
		}
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *MatchTimeline) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*MatchTimeline)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *Match) EqualVT(that *Match) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if this.MatchUrn != that.MatchUrn {
		return false
	}
	if this.TournamentUrn != that.TournamentUrn {
		return false
	}
	if this.Sport != that.Sport {
		return false
	}
	if this.HomeTeamUrn != that.HomeTeamUrn {
		return false
	}
	if this.AwayTeamUrn != that.AwayTeamUrn {
		return false
	}
	if this.HomeScore != that.HomeScore {
		return false
	}
	if this.AwayScore != that.AwayScore {
		return false
	}
	if this.MatchStatus != that.MatchStatus {
		return false
	}
	if !(*timestamppb1.Timestamp)(this.PlannetStart).EqualVT((*timestamppb1.Timestamp)(that.PlannetStart)) {
		return false
	}
	if !this.Tournament.EqualVT(that.Tournament) {
		return false
	}
	if len(this.Teams) != len(that.Teams) {
		return false
	}
	for i, vx := range this.Teams {
		vy := that.Teams[i]
		if p, q := vx, vy; p != q {
			if p == nil {
				p = &Team{}
			}
			if q == nil {
				q = &Team{}
			}
			if !p.EqualVT(q) {
				return false
			}
		}
	}
	if len(this.Players) != len(that.Players) {
		return false
	}
	for i, vx := range this.Players {
		vy := that.Players[i]
		if p, q := vx, vy; p != q {
			if p == nil {
				p = &Player{}
			}
			if q == nil {
				q = &Player{}
			}
			if !p.EqualVT(q) {
				return false
			}
		}
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *Match) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*Match)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *Tournament) EqualVT(that *Tournament) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if this.Urn != that.Urn {
		return false
	}
	if this.Name != that.Name {
		return false
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *Tournament) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*Tournament)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *Team) EqualVT(that *Team) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if this.Urn != that.Urn {
		return false
	}
	if this.Name != that.Name {
		return false
	}
	if this.IsHome != that.IsHome {
		return false
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *Team) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*Team)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
func (this *Player) EqualVT(that *Player) bool {
	if this == that {
		return true
	} else if this == nil || that == nil {
		return false
	}
	if this.Urn != that.Urn {
		return false
	}
	if this.Nickname != that.Nickname {
		return false
	}
	if this.TeamUrn != that.TeamUrn {
		return false
	}
	return string(this.unknownFields) == string(that.unknownFields)
}

func (this *Player) EqualMessageVT(thatMsg proto.Message) bool {
	that, ok := thatMsg.(*Player)
	if !ok {
		return false
	}
	return this.EqualVT(that)
}
