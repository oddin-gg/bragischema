// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: bragi/rush_soccer.proto
// Protobuf Java Version: 4.29.3

package com.bragi;

/**
 * Protobuf enum {@code bragi.RushSoccerEventType}
 */
public enum RushSoccerEventType
    implements com.google.protobuf.ProtocolMessageEnum {
  /**
   * <code>RUSH_SOCCER_EVENT_TYPE_UNSPECIFIED = 0;</code>
   */
  RUSH_SOCCER_EVENT_TYPE_UNSPECIFIED(0),
  /**
   * <code>RUSH_SOCCER_EVENT_TYPE_GOAL = 1;</code>
   */
  RUSH_SOCCER_EVENT_TYPE_GOAL(1),
  /**
   * <code>RUSH_SOCCER_EVENT_TYPE_PENALTY = 2;</code>
   */
  RUSH_SOCCER_EVENT_TYPE_PENALTY(2),
  /**
   * <code>RUSH_SOCCER_EVENT_TYPE_RED_CARD = 3;</code>
   */
  RUSH_SOCCER_EVENT_TYPE_RED_CARD(3),
  /**
   * <code>RUSH_SOCCER_EVENT_TYPE_YELLOW_CARD = 4;</code>
   */
  RUSH_SOCCER_EVENT_TYPE_YELLOW_CARD(4),
  /**
   * <code>RUSH_SOCCER_EVENT_TYPE_FREE_KICK = 5;</code>
   */
  RUSH_SOCCER_EVENT_TYPE_FREE_KICK(5),
  /**
   * <code>RUSH_SOCCER_EVENT_TYPE_CORNER_KICK = 6;</code>
   */
  RUSH_SOCCER_EVENT_TYPE_CORNER_KICK(6),
  /**
   * <code>RUSH_SOCCER_EVENT_TYPE_PERIOD_CHANGE = 7;</code>
   */
  RUSH_SOCCER_EVENT_TYPE_PERIOD_CHANGE(7),
  UNRECOGNIZED(-1),
  ;

  static {
    com.google.protobuf.RuntimeVersion.validateProtobufGencodeVersion(
      com.google.protobuf.RuntimeVersion.RuntimeDomain.PUBLIC,
      /* major= */ 4,
      /* minor= */ 29,
      /* patch= */ 3,
      /* suffix= */ "",
      RushSoccerEventType.class.getName());
  }
  /**
   * <code>RUSH_SOCCER_EVENT_TYPE_UNSPECIFIED = 0;</code>
   */
  public static final int RUSH_SOCCER_EVENT_TYPE_UNSPECIFIED_VALUE = 0;
  /**
   * <code>RUSH_SOCCER_EVENT_TYPE_GOAL = 1;</code>
   */
  public static final int RUSH_SOCCER_EVENT_TYPE_GOAL_VALUE = 1;
  /**
   * <code>RUSH_SOCCER_EVENT_TYPE_PENALTY = 2;</code>
   */
  public static final int RUSH_SOCCER_EVENT_TYPE_PENALTY_VALUE = 2;
  /**
   * <code>RUSH_SOCCER_EVENT_TYPE_RED_CARD = 3;</code>
   */
  public static final int RUSH_SOCCER_EVENT_TYPE_RED_CARD_VALUE = 3;
  /**
   * <code>RUSH_SOCCER_EVENT_TYPE_YELLOW_CARD = 4;</code>
   */
  public static final int RUSH_SOCCER_EVENT_TYPE_YELLOW_CARD_VALUE = 4;
  /**
   * <code>RUSH_SOCCER_EVENT_TYPE_FREE_KICK = 5;</code>
   */
  public static final int RUSH_SOCCER_EVENT_TYPE_FREE_KICK_VALUE = 5;
  /**
   * <code>RUSH_SOCCER_EVENT_TYPE_CORNER_KICK = 6;</code>
   */
  public static final int RUSH_SOCCER_EVENT_TYPE_CORNER_KICK_VALUE = 6;
  /**
   * <code>RUSH_SOCCER_EVENT_TYPE_PERIOD_CHANGE = 7;</code>
   */
  public static final int RUSH_SOCCER_EVENT_TYPE_PERIOD_CHANGE_VALUE = 7;


  public final int getNumber() {
    if (this == UNRECOGNIZED) {
      throw new java.lang.IllegalArgumentException(
          "Can't get the number of an unknown enum value.");
    }
    return value;
  }

  /**
   * @param value The numeric wire value of the corresponding enum entry.
   * @return The enum associated with the given numeric wire value.
   * @deprecated Use {@link #forNumber(int)} instead.
   */
  @java.lang.Deprecated
  public static RushSoccerEventType valueOf(int value) {
    return forNumber(value);
  }

  /**
   * @param value The numeric wire value of the corresponding enum entry.
   * @return The enum associated with the given numeric wire value.
   */
  public static RushSoccerEventType forNumber(int value) {
    switch (value) {
      case 0: return RUSH_SOCCER_EVENT_TYPE_UNSPECIFIED;
      case 1: return RUSH_SOCCER_EVENT_TYPE_GOAL;
      case 2: return RUSH_SOCCER_EVENT_TYPE_PENALTY;
      case 3: return RUSH_SOCCER_EVENT_TYPE_RED_CARD;
      case 4: return RUSH_SOCCER_EVENT_TYPE_YELLOW_CARD;
      case 5: return RUSH_SOCCER_EVENT_TYPE_FREE_KICK;
      case 6: return RUSH_SOCCER_EVENT_TYPE_CORNER_KICK;
      case 7: return RUSH_SOCCER_EVENT_TYPE_PERIOD_CHANGE;
      default: return null;
    }
  }

  public static com.google.protobuf.Internal.EnumLiteMap<RushSoccerEventType>
      internalGetValueMap() {
    return internalValueMap;
  }
  private static final com.google.protobuf.Internal.EnumLiteMap<
      RushSoccerEventType> internalValueMap =
        new com.google.protobuf.Internal.EnumLiteMap<RushSoccerEventType>() {
          public RushSoccerEventType findValueByNumber(int number) {
            return RushSoccerEventType.forNumber(number);
          }
        };

  public final com.google.protobuf.Descriptors.EnumValueDescriptor
      getValueDescriptor() {
    if (this == UNRECOGNIZED) {
      throw new java.lang.IllegalStateException(
          "Can't get the descriptor of an unrecognized enum value.");
    }
    return getDescriptor().getValues().get(ordinal());
  }
  public final com.google.protobuf.Descriptors.EnumDescriptor
      getDescriptorForType() {
    return getDescriptor();
  }
  public static final com.google.protobuf.Descriptors.EnumDescriptor
      getDescriptor() {
    return com.bragi.RushSoccerProto.getDescriptor().getEnumTypes().get(0);
  }

  private static final RushSoccerEventType[] VALUES = values();

  public static RushSoccerEventType valueOf(
      com.google.protobuf.Descriptors.EnumValueDescriptor desc) {
    if (desc.getType() != getDescriptor()) {
      throw new java.lang.IllegalArgumentException(
        "EnumValueDescriptor is not for this type.");
    }
    if (desc.getIndex() == -1) {
      return UNRECOGNIZED;
    }
    return VALUES[desc.getIndex()];
  }

  private final int value;

  private RushSoccerEventType(int value) {
    this.value = value;
  }

  // @@protoc_insertion_point(enum_scope:bragi.RushSoccerEventType)
}

