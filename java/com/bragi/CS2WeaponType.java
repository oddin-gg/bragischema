// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: bragi/cs2.proto
// Protobuf Java Version: 4.29.3

package com.bragi;

/**
 * Protobuf enum {@code bragi.CS2WeaponType}
 */
@java.lang.Deprecated public enum CS2WeaponType
    implements com.google.protobuf.ProtocolMessageEnum {
  /**
   * <code>CS2_WEAPON_TYPE_UNSPECIFIED = 0;</code>
   */
  CS2_WEAPON_TYPE_UNSPECIFIED(0),
  /**
   * <code>CS2_WEAPON_TYPE_PISTOL = 1;</code>
   */
  CS2_WEAPON_TYPE_PISTOL(1),
  /**
   * <code>CS2_WEAPON_TYPE_BOMB = 2;</code>
   */
  CS2_WEAPON_TYPE_BOMB(2),
  /**
   * <code>CS2_WEAPON_TYPE_GRENADE = 3;</code>
   */
  CS2_WEAPON_TYPE_GRENADE(3),
  /**
   * <code>CS2_WEAPON_TYPE_MACHINE_GUN = 4;</code>
   */
  CS2_WEAPON_TYPE_MACHINE_GUN(4),
  /**
   * <code>CS2_WEAPON_TYPE_RIFLE = 5;</code>
   */
  CS2_WEAPON_TYPE_RIFLE(5),
  /**
   * <code>CS2_WEAPON_TYPE_SHOTGUN = 6;</code>
   */
  CS2_WEAPON_TYPE_SHOTGUN(6),
  /**
   * <code>CS2_WEAPON_TYPE_SNIPER_RIFLE = 7;</code>
   */
  CS2_WEAPON_TYPE_SNIPER_RIFLE(7),
  /**
   * <code>CS2_WEAPON_TYPE_SUBMACHINE_GUN = 8;</code>
   */
  CS2_WEAPON_TYPE_SUBMACHINE_GUN(8),
  /**
   * <code>CS2_WEAPON_TYPE_KNIFE = 9;</code>
   */
  CS2_WEAPON_TYPE_KNIFE(9),
  /**
   * <code>CS2_WEAPON_TYPE_DEFUSE_KIT = 10;</code>
   */
  CS2_WEAPON_TYPE_DEFUSE_KIT(10),
  UNRECOGNIZED(-1),
  ;

  static {
    com.google.protobuf.RuntimeVersion.validateProtobufGencodeVersion(
      com.google.protobuf.RuntimeVersion.RuntimeDomain.PUBLIC,
      /* major= */ 4,
      /* minor= */ 29,
      /* patch= */ 3,
      /* suffix= */ "",
      CS2WeaponType.class.getName());
  }
  /**
   * <code>CS2_WEAPON_TYPE_UNSPECIFIED = 0;</code>
   */
  public static final int CS2_WEAPON_TYPE_UNSPECIFIED_VALUE = 0;
  /**
   * <code>CS2_WEAPON_TYPE_PISTOL = 1;</code>
   */
  public static final int CS2_WEAPON_TYPE_PISTOL_VALUE = 1;
  /**
   * <code>CS2_WEAPON_TYPE_BOMB = 2;</code>
   */
  public static final int CS2_WEAPON_TYPE_BOMB_VALUE = 2;
  /**
   * <code>CS2_WEAPON_TYPE_GRENADE = 3;</code>
   */
  public static final int CS2_WEAPON_TYPE_GRENADE_VALUE = 3;
  /**
   * <code>CS2_WEAPON_TYPE_MACHINE_GUN = 4;</code>
   */
  public static final int CS2_WEAPON_TYPE_MACHINE_GUN_VALUE = 4;
  /**
   * <code>CS2_WEAPON_TYPE_RIFLE = 5;</code>
   */
  public static final int CS2_WEAPON_TYPE_RIFLE_VALUE = 5;
  /**
   * <code>CS2_WEAPON_TYPE_SHOTGUN = 6;</code>
   */
  public static final int CS2_WEAPON_TYPE_SHOTGUN_VALUE = 6;
  /**
   * <code>CS2_WEAPON_TYPE_SNIPER_RIFLE = 7;</code>
   */
  public static final int CS2_WEAPON_TYPE_SNIPER_RIFLE_VALUE = 7;
  /**
   * <code>CS2_WEAPON_TYPE_SUBMACHINE_GUN = 8;</code>
   */
  public static final int CS2_WEAPON_TYPE_SUBMACHINE_GUN_VALUE = 8;
  /**
   * <code>CS2_WEAPON_TYPE_KNIFE = 9;</code>
   */
  public static final int CS2_WEAPON_TYPE_KNIFE_VALUE = 9;
  /**
   * <code>CS2_WEAPON_TYPE_DEFUSE_KIT = 10;</code>
   */
  public static final int CS2_WEAPON_TYPE_DEFUSE_KIT_VALUE = 10;


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
  public static CS2WeaponType valueOf(int value) {
    return forNumber(value);
  }

  /**
   * @param value The numeric wire value of the corresponding enum entry.
   * @return The enum associated with the given numeric wire value.
   */
  public static CS2WeaponType forNumber(int value) {
    switch (value) {
      case 0: return CS2_WEAPON_TYPE_UNSPECIFIED;
      case 1: return CS2_WEAPON_TYPE_PISTOL;
      case 2: return CS2_WEAPON_TYPE_BOMB;
      case 3: return CS2_WEAPON_TYPE_GRENADE;
      case 4: return CS2_WEAPON_TYPE_MACHINE_GUN;
      case 5: return CS2_WEAPON_TYPE_RIFLE;
      case 6: return CS2_WEAPON_TYPE_SHOTGUN;
      case 7: return CS2_WEAPON_TYPE_SNIPER_RIFLE;
      case 8: return CS2_WEAPON_TYPE_SUBMACHINE_GUN;
      case 9: return CS2_WEAPON_TYPE_KNIFE;
      case 10: return CS2_WEAPON_TYPE_DEFUSE_KIT;
      default: return null;
    }
  }

  public static com.google.protobuf.Internal.EnumLiteMap<CS2WeaponType>
      internalGetValueMap() {
    return internalValueMap;
  }
  private static final com.google.protobuf.Internal.EnumLiteMap<
      CS2WeaponType> internalValueMap =
        new com.google.protobuf.Internal.EnumLiteMap<CS2WeaponType>() {
          public CS2WeaponType findValueByNumber(int number) {
            return CS2WeaponType.forNumber(number);
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
    return com.bragi.Cs2Proto.getDescriptor().getEnumTypes().get(3);
  }

  private static final CS2WeaponType[] VALUES = values();

  public static CS2WeaponType valueOf(
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

  private CS2WeaponType(int value) {
    this.value = value;
  }

  // @@protoc_insertion_point(enum_scope:bragi.CS2WeaponType)
}

