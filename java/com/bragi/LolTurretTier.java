// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: bragi/lol.proto
// Protobuf Java Version: 4.29.3

package com.bragi;

/**
 * Protobuf enum {@code bragi.LolTurretTier}
 */
public enum LolTurretTier
    implements com.google.protobuf.ProtocolMessageEnum {
  /**
   * <code>LOL_TURRET_TIER_UNSPECIFIED = 0;</code>
   */
  LOL_TURRET_TIER_UNSPECIFIED(0),
  /**
   * <code>LOL_TURRET_TIER_1 = 1;</code>
   */
  LOL_TURRET_TIER_1(1),
  /**
   * <code>LOL_TURRET_TIER_2 = 2;</code>
   */
  LOL_TURRET_TIER_2(2),
  /**
   * <code>LOL_TURRET_TIER_3 = 3;</code>
   */
  LOL_TURRET_TIER_3(3),
  /**
   * <code>LOL_TURRET_TIER_4 = 4;</code>
   */
  LOL_TURRET_TIER_4(4),
  UNRECOGNIZED(-1),
  ;

  static {
    com.google.protobuf.RuntimeVersion.validateProtobufGencodeVersion(
      com.google.protobuf.RuntimeVersion.RuntimeDomain.PUBLIC,
      /* major= */ 4,
      /* minor= */ 29,
      /* patch= */ 3,
      /* suffix= */ "",
      LolTurretTier.class.getName());
  }
  /**
   * <code>LOL_TURRET_TIER_UNSPECIFIED = 0;</code>
   */
  public static final int LOL_TURRET_TIER_UNSPECIFIED_VALUE = 0;
  /**
   * <code>LOL_TURRET_TIER_1 = 1;</code>
   */
  public static final int LOL_TURRET_TIER_1_VALUE = 1;
  /**
   * <code>LOL_TURRET_TIER_2 = 2;</code>
   */
  public static final int LOL_TURRET_TIER_2_VALUE = 2;
  /**
   * <code>LOL_TURRET_TIER_3 = 3;</code>
   */
  public static final int LOL_TURRET_TIER_3_VALUE = 3;
  /**
   * <code>LOL_TURRET_TIER_4 = 4;</code>
   */
  public static final int LOL_TURRET_TIER_4_VALUE = 4;


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
  public static LolTurretTier valueOf(int value) {
    return forNumber(value);
  }

  /**
   * @param value The numeric wire value of the corresponding enum entry.
   * @return The enum associated with the given numeric wire value.
   */
  public static LolTurretTier forNumber(int value) {
    switch (value) {
      case 0: return LOL_TURRET_TIER_UNSPECIFIED;
      case 1: return LOL_TURRET_TIER_1;
      case 2: return LOL_TURRET_TIER_2;
      case 3: return LOL_TURRET_TIER_3;
      case 4: return LOL_TURRET_TIER_4;
      default: return null;
    }
  }

  public static com.google.protobuf.Internal.EnumLiteMap<LolTurretTier>
      internalGetValueMap() {
    return internalValueMap;
  }
  private static final com.google.protobuf.Internal.EnumLiteMap<
      LolTurretTier> internalValueMap =
        new com.google.protobuf.Internal.EnumLiteMap<LolTurretTier>() {
          public LolTurretTier findValueByNumber(int number) {
            return LolTurretTier.forNumber(number);
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
    return com.bragi.LolProto.getDescriptor().getEnumTypes().get(2);
  }

  private static final LolTurretTier[] VALUES = values();

  public static LolTurretTier valueOf(
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

  private LolTurretTier(int value) {
    this.value = value;
  }

  // @@protoc_insertion_point(enum_scope:bragi.LolTurretTier)
}

