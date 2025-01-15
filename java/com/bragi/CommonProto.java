// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: bragi/common.proto
// Protobuf Java Version: 4.29.3

package com.bragi;

public final class CommonProto {
  private CommonProto() {}
  static {
    com.google.protobuf.RuntimeVersion.validateProtobufGencodeVersion(
      com.google.protobuf.RuntimeVersion.RuntimeDomain.PUBLIC,
      /* major= */ 4,
      /* minor= */ 29,
      /* patch= */ 3,
      /* suffix= */ "",
      CommonProto.class.getName());
  }
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_bragi_AnnouncementUpdate_descriptor;
  static final 
    com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internal_static_bragi_AnnouncementUpdate_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_bragi_Announcement_descriptor;
  static final 
    com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internal_static_bragi_Announcement_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_bragi_Announcement_Payload_descriptor;
  static final 
    com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internal_static_bragi_Announcement_Payload_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_bragi_ControlAnnouncement_descriptor;
  static final 
    com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internal_static_bragi_ControlAnnouncement_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_bragi_ControlErrorAnnouncement_descriptor;
  static final 
    com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internal_static_bragi_ControlErrorAnnouncement_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_bragi_MatchTimeline_descriptor;
  static final 
    com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internal_static_bragi_MatchTimeline_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_bragi_Match_descriptor;
  static final 
    com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internal_static_bragi_Match_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_bragi_Tournament_descriptor;
  static final 
    com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internal_static_bragi_Tournament_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_bragi_Team_descriptor;
  static final 
    com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internal_static_bragi_Team_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_bragi_Player_descriptor;
  static final 
    com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internal_static_bragi_Player_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\022bragi/common.proto\022\005bragi\032\037google/prot" +
      "obuf/timestamp.proto\"\266\001\n\022AnnouncementUpd" +
      "ate\022\033\n\tmatch_urn\030\001 \001(\tR\010matchUrn\022\032\n\010sequ" +
      "ence\030\002 \001(\004R\010sequence\0228\n\ttimestamp\030\003 \001(\0132" +
      "\032.google.protobuf.TimestampR\ttimestamp\022-" +
      "\n\007payload\030\004 \001(\0132\023.bragi.AnnouncementR\007pa" +
      "yload\"\210\002\n\014Announcement\0229\n\ncreated_at\030\001 \001" +
      "(\0132\032.google.protobuf.TimestampR\tcreatedA" +
      "t\0225\n\007payload\030\002 \001(\0132\033.bragi.Announcement." +
      "PayloadR\007payload\032\205\001\n\007Payload\0226\n\007control\030" +
      "\001 \001(\0132\032.bragi.ControlAnnouncementH\000R\007con" +
      "trol\0227\n\005error\030\002 \001(\0132\037.bragi.ControlError" +
      "AnnouncementH\000R\005errorB\t\n\007payload\"\316\001\n\023Con" +
      "trolAnnouncement\022F\n\004type\030\001 \001(\01622.bragi.C" +
      "ontrolAnnouncement.ControlAnnouncementTy" +
      "peR\004type\022\035\n\007message\030\002 \001(\tH\000R\007message\210\001\001\"" +
      "D\n\027ControlAnnouncementType\022)\n%CONTROL_AN" +
      "NOUNCEMENT_TYPE_UNSPECIFIED\020\000B\n\n\010_messag" +
      "e\"\350\001\n\030ControlErrorAnnouncement\022P\n\004type\030\001" +
      " \001(\0162<.bragi.ControlErrorAnnouncement.Co" +
      "ntrolErrorAnnouncementTypeR\004type\022\035\n\007mess" +
      "age\030\002 \001(\tH\000R\007message\210\001\001\"O\n\034ControlErrorA" +
      "nnouncementType\022/\n+CONTROL_ERROR_ANNOUNC" +
      "EMENT_TYPE_UNSPECIFIED\020\000B\n\n\010_message\"7\n\r" +
      "MatchTimeline\022&\n\007matches\030\001 \003(\0132\014.bragi.M" +
      "atchR\007matches\"\374\003\n\005Match\022\033\n\tmatch_urn\030\001 \001" +
      "(\tR\010matchUrn\022)\n\016tournament_urn\030\002 \001(\tB\002\030\001" +
      "R\rtournamentUrn\022\"\n\005sport\030\003 \001(\0162\014.bragi.S" +
      "portR\005sport\022&\n\rhome_team_urn\030\004 \001(\tB\002\030\001R\013" +
      "homeTeamUrn\022&\n\raway_team_urn\030\005 \001(\tB\002\030\001R\013" +
      "awayTeamUrn\022\035\n\nhome_score\030\006 \001(\rR\thomeSco" +
      "re\022\035\n\naway_score\030\007 \001(\rR\tawayScore\0229\n\014mat" +
      "ch_status\030\010 \001(\0162\026.bragi.MatchStatusTypeR" +
      "\013matchStatus\022?\n\rplannet_start\030\t \001(\0132\032.go" +
      "ogle.protobuf.TimestampR\014plannetStart\0221\n" +
      "\ntournament\030\n \001(\0132\021.bragi.TournamentR\nto" +
      "urnament\022!\n\005teams\030\013 \003(\0132\013.bragi.TeamR\005te" +
      "ams\022\'\n\007players\030\014 \003(\0132\r.bragi.PlayerR\007pla" +
      "yers\"2\n\nTournament\022\020\n\003urn\030\001 \001(\tR\003urn\022\022\n\004" +
      "name\030\002 \001(\tR\004name\"E\n\004Team\022\020\n\003urn\030\001 \001(\tR\003u" +
      "rn\022\022\n\004name\030\002 \001(\tR\004name\022\027\n\007is_home\030\003 \001(\010R" +
      "\006isHome\"Q\n\006Player\022\020\n\003urn\030\001 \001(\tR\003urn\022\032\n\010n" +
      "ickname\030\002 \001(\tR\010nickname\022\031\n\010team_urn\030\003 \001(" +
      "\tR\007teamUrn*\223\001\n\005Sport\022\025\n\021SPORT_UNSPECIFIE" +
      "D\020\000\022\r\n\tSPORT_CS2\020\001\022\017\n\013SPORT_DOTA2\020\002\022\r\n\tS" +
      "PORT_LOL\020\003\022\022\n\016SPORT_VALORANT\020\004\022\025\n\021SPORT_" +
      "RUSH_SOCCER\020\005\022\031\n\025SPORT_RUSH_BASKETBALL\020\006" +
      "*\304\001\n\nBestOfType\022\034\n\030BEST_OF_TYPE_UNSPECIF" +
      "IED\020\000\022\024\n\020BEST_OF_TYPE_BO1\020\001\022\024\n\020BEST_OF_T" +
      "YPE_BO2\020\002\022\024\n\020BEST_OF_TYPE_BO3\020\003\022\024\n\020BEST_" +
      "OF_TYPE_BO4\020\004\022\024\n\020BEST_OF_TYPE_BO5\020\005\022\024\n\020B" +
      "EST_OF_TYPE_BO6\020\006\022\024\n\020BEST_OF_TYPE_BO7\020\007*" +
      "\326\001\n\017MatchStatusType\022!\n\035MATCH_STATUS_TYPE" +
      "_UNSPECIFIED\020\000\022!\n\035MATCH_STATUS_TYPE_NOT_" +
      "STARTED\020\001\022\032\n\026MATCH_STATUS_TYPE_LIVE\020\002\022\036\n" +
      "\032MATCH_STATUS_TYPE_FINISHED\020\003\022\036\n\032MATCH_S" +
      "TATUS_TYPE_CANCELED\020\004\022!\n\035MATCH_STATUS_TY" +
      "PE_PLACEHOLDER\020\005*\204\001\n\nDataStatus\022\033\n\027DATA_" +
      "STATUS_UNSPECIFIED\020\000\022\035\n\031DATA_STATUS_DISA" +
      "BLED_DATA\020\001\022\036\n\032DATA_STATUS_CORRUPTED_DAT" +
      "A\020\002\022\032\n\026DATA_STATUS_VALID_DATA\020\003B\\\n\tcom.b" +
      "ragiB\013CommonProtoP\001Z\016oddin.gg/bragi\242\002\003BX" +
      "X\252\002\005Bragi\312\002\005Bragi\342\002\021Bragi\\GPBMetadata\352\002\005" +
      "Bragib\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          com.google.protobuf.TimestampProto.getDescriptor(),
        });
    internal_static_bragi_AnnouncementUpdate_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_bragi_AnnouncementUpdate_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessage.FieldAccessorTable(
        internal_static_bragi_AnnouncementUpdate_descriptor,
        new java.lang.String[] { "MatchUrn", "Sequence", "Timestamp", "Payload", });
    internal_static_bragi_Announcement_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_bragi_Announcement_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessage.FieldAccessorTable(
        internal_static_bragi_Announcement_descriptor,
        new java.lang.String[] { "CreatedAt", "Payload", });
    internal_static_bragi_Announcement_Payload_descriptor =
      internal_static_bragi_Announcement_descriptor.getNestedTypes().get(0);
    internal_static_bragi_Announcement_Payload_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessage.FieldAccessorTable(
        internal_static_bragi_Announcement_Payload_descriptor,
        new java.lang.String[] { "Control", "Error", "Payload", });
    internal_static_bragi_ControlAnnouncement_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_bragi_ControlAnnouncement_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessage.FieldAccessorTable(
        internal_static_bragi_ControlAnnouncement_descriptor,
        new java.lang.String[] { "Type", "Message", });
    internal_static_bragi_ControlErrorAnnouncement_descriptor =
      getDescriptor().getMessageTypes().get(3);
    internal_static_bragi_ControlErrorAnnouncement_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessage.FieldAccessorTable(
        internal_static_bragi_ControlErrorAnnouncement_descriptor,
        new java.lang.String[] { "Type", "Message", });
    internal_static_bragi_MatchTimeline_descriptor =
      getDescriptor().getMessageTypes().get(4);
    internal_static_bragi_MatchTimeline_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessage.FieldAccessorTable(
        internal_static_bragi_MatchTimeline_descriptor,
        new java.lang.String[] { "Matches", });
    internal_static_bragi_Match_descriptor =
      getDescriptor().getMessageTypes().get(5);
    internal_static_bragi_Match_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessage.FieldAccessorTable(
        internal_static_bragi_Match_descriptor,
        new java.lang.String[] { "MatchUrn", "TournamentUrn", "Sport", "HomeTeamUrn", "AwayTeamUrn", "HomeScore", "AwayScore", "MatchStatus", "PlannetStart", "Tournament", "Teams", "Players", });
    internal_static_bragi_Tournament_descriptor =
      getDescriptor().getMessageTypes().get(6);
    internal_static_bragi_Tournament_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessage.FieldAccessorTable(
        internal_static_bragi_Tournament_descriptor,
        new java.lang.String[] { "Urn", "Name", });
    internal_static_bragi_Team_descriptor =
      getDescriptor().getMessageTypes().get(7);
    internal_static_bragi_Team_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessage.FieldAccessorTable(
        internal_static_bragi_Team_descriptor,
        new java.lang.String[] { "Urn", "Name", "IsHome", });
    internal_static_bragi_Player_descriptor =
      getDescriptor().getMessageTypes().get(8);
    internal_static_bragi_Player_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessage.FieldAccessorTable(
        internal_static_bragi_Player_descriptor,
        new java.lang.String[] { "Urn", "Nickname", "TeamUrn", });
    descriptor.resolveAllFeaturesImmutable();
    com.google.protobuf.TimestampProto.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
