// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: bragi/dota2.proto
// Protobuf Java Version: 4.29.3

package com.bragi;

/**
 * Protobuf enum {@code bragi.Dota2Lane}
 */
public enum Dota2Lane
    implements com.google.protobuf.ProtocolMessageEnum {
  /**
   * <code>DOTA2_LANE_UNSPECIFIED = 0;</code>
   */
  DOTA2_LANE_UNSPECIFIED(0),
  /**
   * <code>DOTA2_LANE_TOP = 1;</code>
   */
  DOTA2_LANE_TOP(1),
  /**
   * <code>DOTA2_LANE_MID = 2;</code>
   */
  DOTA2_LANE_MID(2),
  /**
   * <code>DOTA2_LANE_BOT = 3;</code>
   */
  DOTA2_LANE_BOT(3),
  UNRECOGNIZED(-1),
  ;

  static {
    com.google.protobuf.RuntimeVersion.validateProtobufGencodeVersion(
      com.google.protobuf.RuntimeVersion.RuntimeDomain.PUBLIC,
      /* major= */ 4,
      /* minor= */ 29,
      /* patch= */ 3,
      /* suffix= */ "",
      Dota2Lane.class.getName());
  }
  /**
   * <code>DOTA2_LANE_UNSPECIFIED = 0;</code>
   */
  public static final int DOTA2_LANE_UNSPECIFIED_VALUE = 0;
  /**
   * <code>DOTA2_LANE_TOP = 1;</code>
   */
  public static final int DOTA2_LANE_TOP_VALUE = 1;
  /**
   * <code>DOTA2_LANE_MID = 2;</code>
   */
  public static final int DOTA2_LANE_MID_VALUE = 2;
  /**
   * <code>DOTA2_LANE_BOT = 3;</code>
   */
  public static final int DOTA2_LANE_BOT_VALUE = 3;


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
  public static Dota2Lane valueOf(int value) {
    return forNumber(value);
  }

  /**
   * @param value The numeric wire value of the corresponding enum entry.
   * @return The enum associated with the given numeric wire value.
   */
  public static Dota2Lane forNumber(int value) {
    switch (value) {
      case 0: return DOTA2_LANE_UNSPECIFIED;
      case 1: return DOTA2_LANE_TOP;
      case 2: return DOTA2_LANE_MID;
      case 3: return DOTA2_LANE_BOT;
      default: return null;
    }
  }

  public static com.google.protobuf.Internal.EnumLiteMap<Dota2Lane>
      internalGetValueMap() {
    return internalValueMap;
  }
  private static final com.google.protobuf.Internal.EnumLiteMap<
      Dota2Lane> internalValueMap =
        new com.google.protobuf.Internal.EnumLiteMap<Dota2Lane>() {
          public Dota2Lane findValueByNumber(int number) {
            return Dota2Lane.forNumber(number);
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
    return com.bragi.Dota2Proto.getDescriptor().getEnumTypes().get(1);
  }

  private static final Dota2Lane[] VALUES = values();

  public static Dota2Lane valueOf(
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

  private Dota2Lane(int value) {
    this.value = value;
  }

  // @@protoc_insertion_point(enum_scope:bragi.Dota2Lane)
}

