// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: bragi/valorant.proto
// Protobuf Java Version: 4.29.3

package com.bragi;

/**
 * Protobuf type {@code bragi.ValorantWeaponsState}
 */
public final class ValorantWeaponsState extends
    com.google.protobuf.GeneratedMessage implements
    // @@protoc_insertion_point(message_implements:bragi.ValorantWeaponsState)
    ValorantWeaponsStateOrBuilder {
private static final long serialVersionUID = 0L;
  static {
    com.google.protobuf.RuntimeVersion.validateProtobufGencodeVersion(
      com.google.protobuf.RuntimeVersion.RuntimeDomain.PUBLIC,
      /* major= */ 4,
      /* minor= */ 29,
      /* patch= */ 3,
      /* suffix= */ "",
      ValorantWeaponsState.class.getName());
  }
  // Use ValorantWeaponsState.newBuilder() to construct.
  private ValorantWeaponsState(com.google.protobuf.GeneratedMessage.Builder<?> builder) {
    super(builder);
  }
  private ValorantWeaponsState() {
    playerUrn_ = "";
    weapons_ = java.util.Collections.emptyList();
  }

  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.bragi.ValorantProto.internal_static_bragi_ValorantWeaponsState_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.bragi.ValorantProto.internal_static_bragi_ValorantWeaponsState_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.bragi.ValorantWeaponsState.class, com.bragi.ValorantWeaponsState.Builder.class);
  }

  public static final int PLAYER_URN_FIELD_NUMBER = 1;
  @SuppressWarnings("serial")
  private volatile java.lang.Object playerUrn_ = "";
  /**
   * <code>string player_urn = 1 [json_name = "playerUrn"];</code>
   * @return The playerUrn.
   */
  @java.lang.Override
  public java.lang.String getPlayerUrn() {
    java.lang.Object ref = playerUrn_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      playerUrn_ = s;
      return s;
    }
  }
  /**
   * <code>string player_urn = 1 [json_name = "playerUrn"];</code>
   * @return The bytes for playerUrn.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getPlayerUrnBytes() {
    java.lang.Object ref = playerUrn_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      playerUrn_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int WEAPONS_FIELD_NUMBER = 2;
  @SuppressWarnings("serial")
  private java.util.List<com.bragi.ValorantWeapon> weapons_;
  /**
   * <code>repeated .bragi.ValorantWeapon weapons = 2 [json_name = "weapons"];</code>
   */
  @java.lang.Override
  public java.util.List<com.bragi.ValorantWeapon> getWeaponsList() {
    return weapons_;
  }
  /**
   * <code>repeated .bragi.ValorantWeapon weapons = 2 [json_name = "weapons"];</code>
   */
  @java.lang.Override
  public java.util.List<? extends com.bragi.ValorantWeaponOrBuilder> 
      getWeaponsOrBuilderList() {
    return weapons_;
  }
  /**
   * <code>repeated .bragi.ValorantWeapon weapons = 2 [json_name = "weapons"];</code>
   */
  @java.lang.Override
  public int getWeaponsCount() {
    return weapons_.size();
  }
  /**
   * <code>repeated .bragi.ValorantWeapon weapons = 2 [json_name = "weapons"];</code>
   */
  @java.lang.Override
  public com.bragi.ValorantWeapon getWeapons(int index) {
    return weapons_.get(index);
  }
  /**
   * <code>repeated .bragi.ValorantWeapon weapons = 2 [json_name = "weapons"];</code>
   */
  @java.lang.Override
  public com.bragi.ValorantWeaponOrBuilder getWeaponsOrBuilder(
      int index) {
    return weapons_.get(index);
  }

  private byte memoizedIsInitialized = -1;
  @java.lang.Override
  public final boolean isInitialized() {
    byte isInitialized = memoizedIsInitialized;
    if (isInitialized == 1) return true;
    if (isInitialized == 0) return false;

    memoizedIsInitialized = 1;
    return true;
  }

  @java.lang.Override
  public void writeTo(com.google.protobuf.CodedOutputStream output)
                      throws java.io.IOException {
    if (!com.google.protobuf.GeneratedMessage.isStringEmpty(playerUrn_)) {
      com.google.protobuf.GeneratedMessage.writeString(output, 1, playerUrn_);
    }
    for (int i = 0; i < weapons_.size(); i++) {
      output.writeMessage(2, weapons_.get(i));
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!com.google.protobuf.GeneratedMessage.isStringEmpty(playerUrn_)) {
      size += com.google.protobuf.GeneratedMessage.computeStringSize(1, playerUrn_);
    }
    for (int i = 0; i < weapons_.size(); i++) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(2, weapons_.get(i));
    }
    size += getUnknownFields().getSerializedSize();
    memoizedSize = size;
    return size;
  }

  @java.lang.Override
  public boolean equals(final java.lang.Object obj) {
    if (obj == this) {
     return true;
    }
    if (!(obj instanceof com.bragi.ValorantWeaponsState)) {
      return super.equals(obj);
    }
    com.bragi.ValorantWeaponsState other = (com.bragi.ValorantWeaponsState) obj;

    if (!getPlayerUrn()
        .equals(other.getPlayerUrn())) return false;
    if (!getWeaponsList()
        .equals(other.getWeaponsList())) return false;
    if (!getUnknownFields().equals(other.getUnknownFields())) return false;
    return true;
  }

  @java.lang.Override
  public int hashCode() {
    if (memoizedHashCode != 0) {
      return memoizedHashCode;
    }
    int hash = 41;
    hash = (19 * hash) + getDescriptor().hashCode();
    hash = (37 * hash) + PLAYER_URN_FIELD_NUMBER;
    hash = (53 * hash) + getPlayerUrn().hashCode();
    if (getWeaponsCount() > 0) {
      hash = (37 * hash) + WEAPONS_FIELD_NUMBER;
      hash = (53 * hash) + getWeaponsList().hashCode();
    }
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.bragi.ValorantWeaponsState parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.bragi.ValorantWeaponsState parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.bragi.ValorantWeaponsState parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.bragi.ValorantWeaponsState parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.bragi.ValorantWeaponsState parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.bragi.ValorantWeaponsState parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.bragi.ValorantWeaponsState parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input);
  }
  public static com.bragi.ValorantWeaponsState parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  public static com.bragi.ValorantWeaponsState parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseDelimitedWithIOException(PARSER, input);
  }

  public static com.bragi.ValorantWeaponsState parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.bragi.ValorantWeaponsState parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input);
  }
  public static com.bragi.ValorantWeaponsState parseFrom(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  @java.lang.Override
  public Builder newBuilderForType() { return newBuilder(); }
  public static Builder newBuilder() {
    return DEFAULT_INSTANCE.toBuilder();
  }
  public static Builder newBuilder(com.bragi.ValorantWeaponsState prototype) {
    return DEFAULT_INSTANCE.toBuilder().mergeFrom(prototype);
  }
  @java.lang.Override
  public Builder toBuilder() {
    return this == DEFAULT_INSTANCE
        ? new Builder() : new Builder().mergeFrom(this);
  }

  @java.lang.Override
  protected Builder newBuilderForType(
      com.google.protobuf.GeneratedMessage.BuilderParent parent) {
    Builder builder = new Builder(parent);
    return builder;
  }
  /**
   * Protobuf type {@code bragi.ValorantWeaponsState}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessage.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:bragi.ValorantWeaponsState)
      com.bragi.ValorantWeaponsStateOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.bragi.ValorantProto.internal_static_bragi_ValorantWeaponsState_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessage.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.bragi.ValorantProto.internal_static_bragi_ValorantWeaponsState_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.bragi.ValorantWeaponsState.class, com.bragi.ValorantWeaponsState.Builder.class);
    }

    // Construct using com.bragi.ValorantWeaponsState.newBuilder()
    private Builder() {

    }

    private Builder(
        com.google.protobuf.GeneratedMessage.BuilderParent parent) {
      super(parent);

    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      bitField0_ = 0;
      playerUrn_ = "";
      if (weaponsBuilder_ == null) {
        weapons_ = java.util.Collections.emptyList();
      } else {
        weapons_ = null;
        weaponsBuilder_.clear();
      }
      bitField0_ = (bitField0_ & ~0x00000002);
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.bragi.ValorantProto.internal_static_bragi_ValorantWeaponsState_descriptor;
    }

    @java.lang.Override
    public com.bragi.ValorantWeaponsState getDefaultInstanceForType() {
      return com.bragi.ValorantWeaponsState.getDefaultInstance();
    }

    @java.lang.Override
    public com.bragi.ValorantWeaponsState build() {
      com.bragi.ValorantWeaponsState result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.bragi.ValorantWeaponsState buildPartial() {
      com.bragi.ValorantWeaponsState result = new com.bragi.ValorantWeaponsState(this);
      buildPartialRepeatedFields(result);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartialRepeatedFields(com.bragi.ValorantWeaponsState result) {
      if (weaponsBuilder_ == null) {
        if (((bitField0_ & 0x00000002) != 0)) {
          weapons_ = java.util.Collections.unmodifiableList(weapons_);
          bitField0_ = (bitField0_ & ~0x00000002);
        }
        result.weapons_ = weapons_;
      } else {
        result.weapons_ = weaponsBuilder_.build();
      }
    }

    private void buildPartial0(com.bragi.ValorantWeaponsState result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.playerUrn_ = playerUrn_;
      }
    }

    @java.lang.Override
    public Builder mergeFrom(com.google.protobuf.Message other) {
      if (other instanceof com.bragi.ValorantWeaponsState) {
        return mergeFrom((com.bragi.ValorantWeaponsState)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.bragi.ValorantWeaponsState other) {
      if (other == com.bragi.ValorantWeaponsState.getDefaultInstance()) return this;
      if (!other.getPlayerUrn().isEmpty()) {
        playerUrn_ = other.playerUrn_;
        bitField0_ |= 0x00000001;
        onChanged();
      }
      if (weaponsBuilder_ == null) {
        if (!other.weapons_.isEmpty()) {
          if (weapons_.isEmpty()) {
            weapons_ = other.weapons_;
            bitField0_ = (bitField0_ & ~0x00000002);
          } else {
            ensureWeaponsIsMutable();
            weapons_.addAll(other.weapons_);
          }
          onChanged();
        }
      } else {
        if (!other.weapons_.isEmpty()) {
          if (weaponsBuilder_.isEmpty()) {
            weaponsBuilder_.dispose();
            weaponsBuilder_ = null;
            weapons_ = other.weapons_;
            bitField0_ = (bitField0_ & ~0x00000002);
            weaponsBuilder_ = 
              com.google.protobuf.GeneratedMessage.alwaysUseFieldBuilders ?
                 getWeaponsFieldBuilder() : null;
          } else {
            weaponsBuilder_.addAllMessages(other.weapons_);
          }
        }
      }
      this.mergeUnknownFields(other.getUnknownFields());
      onChanged();
      return this;
    }

    @java.lang.Override
    public final boolean isInitialized() {
      return true;
    }

    @java.lang.Override
    public Builder mergeFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      if (extensionRegistry == null) {
        throw new java.lang.NullPointerException();
      }
      try {
        boolean done = false;
        while (!done) {
          int tag = input.readTag();
          switch (tag) {
            case 0:
              done = true;
              break;
            case 10: {
              playerUrn_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000001;
              break;
            } // case 10
            case 18: {
              com.bragi.ValorantWeapon m =
                  input.readMessage(
                      com.bragi.ValorantWeapon.parser(),
                      extensionRegistry);
              if (weaponsBuilder_ == null) {
                ensureWeaponsIsMutable();
                weapons_.add(m);
              } else {
                weaponsBuilder_.addMessage(m);
              }
              break;
            } // case 18
            default: {
              if (!super.parseUnknownField(input, extensionRegistry, tag)) {
                done = true; // was an endgroup tag
              }
              break;
            } // default:
          } // switch (tag)
        } // while (!done)
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        throw e.unwrapIOException();
      } finally {
        onChanged();
      } // finally
      return this;
    }
    private int bitField0_;

    private java.lang.Object playerUrn_ = "";
    /**
     * <code>string player_urn = 1 [json_name = "playerUrn"];</code>
     * @return The playerUrn.
     */
    public java.lang.String getPlayerUrn() {
      java.lang.Object ref = playerUrn_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        playerUrn_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string player_urn = 1 [json_name = "playerUrn"];</code>
     * @return The bytes for playerUrn.
     */
    public com.google.protobuf.ByteString
        getPlayerUrnBytes() {
      java.lang.Object ref = playerUrn_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        playerUrn_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string player_urn = 1 [json_name = "playerUrn"];</code>
     * @param value The playerUrn to set.
     * @return This builder for chaining.
     */
    public Builder setPlayerUrn(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      playerUrn_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>string player_urn = 1 [json_name = "playerUrn"];</code>
     * @return This builder for chaining.
     */
    public Builder clearPlayerUrn() {
      playerUrn_ = getDefaultInstance().getPlayerUrn();
      bitField0_ = (bitField0_ & ~0x00000001);
      onChanged();
      return this;
    }
    /**
     * <code>string player_urn = 1 [json_name = "playerUrn"];</code>
     * @param value The bytes for playerUrn to set.
     * @return This builder for chaining.
     */
    public Builder setPlayerUrnBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      playerUrn_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }

    private java.util.List<com.bragi.ValorantWeapon> weapons_ =
      java.util.Collections.emptyList();
    private void ensureWeaponsIsMutable() {
      if (!((bitField0_ & 0x00000002) != 0)) {
        weapons_ = new java.util.ArrayList<com.bragi.ValorantWeapon>(weapons_);
        bitField0_ |= 0x00000002;
       }
    }

    private com.google.protobuf.RepeatedFieldBuilder<
        com.bragi.ValorantWeapon, com.bragi.ValorantWeapon.Builder, com.bragi.ValorantWeaponOrBuilder> weaponsBuilder_;

    /**
     * <code>repeated .bragi.ValorantWeapon weapons = 2 [json_name = "weapons"];</code>
     */
    public java.util.List<com.bragi.ValorantWeapon> getWeaponsList() {
      if (weaponsBuilder_ == null) {
        return java.util.Collections.unmodifiableList(weapons_);
      } else {
        return weaponsBuilder_.getMessageList();
      }
    }
    /**
     * <code>repeated .bragi.ValorantWeapon weapons = 2 [json_name = "weapons"];</code>
     */
    public int getWeaponsCount() {
      if (weaponsBuilder_ == null) {
        return weapons_.size();
      } else {
        return weaponsBuilder_.getCount();
      }
    }
    /**
     * <code>repeated .bragi.ValorantWeapon weapons = 2 [json_name = "weapons"];</code>
     */
    public com.bragi.ValorantWeapon getWeapons(int index) {
      if (weaponsBuilder_ == null) {
        return weapons_.get(index);
      } else {
        return weaponsBuilder_.getMessage(index);
      }
    }
    /**
     * <code>repeated .bragi.ValorantWeapon weapons = 2 [json_name = "weapons"];</code>
     */
    public Builder setWeapons(
        int index, com.bragi.ValorantWeapon value) {
      if (weaponsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureWeaponsIsMutable();
        weapons_.set(index, value);
        onChanged();
      } else {
        weaponsBuilder_.setMessage(index, value);
      }
      return this;
    }
    /**
     * <code>repeated .bragi.ValorantWeapon weapons = 2 [json_name = "weapons"];</code>
     */
    public Builder setWeapons(
        int index, com.bragi.ValorantWeapon.Builder builderForValue) {
      if (weaponsBuilder_ == null) {
        ensureWeaponsIsMutable();
        weapons_.set(index, builderForValue.build());
        onChanged();
      } else {
        weaponsBuilder_.setMessage(index, builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .bragi.ValorantWeapon weapons = 2 [json_name = "weapons"];</code>
     */
    public Builder addWeapons(com.bragi.ValorantWeapon value) {
      if (weaponsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureWeaponsIsMutable();
        weapons_.add(value);
        onChanged();
      } else {
        weaponsBuilder_.addMessage(value);
      }
      return this;
    }
    /**
     * <code>repeated .bragi.ValorantWeapon weapons = 2 [json_name = "weapons"];</code>
     */
    public Builder addWeapons(
        int index, com.bragi.ValorantWeapon value) {
      if (weaponsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureWeaponsIsMutable();
        weapons_.add(index, value);
        onChanged();
      } else {
        weaponsBuilder_.addMessage(index, value);
      }
      return this;
    }
    /**
     * <code>repeated .bragi.ValorantWeapon weapons = 2 [json_name = "weapons"];</code>
     */
    public Builder addWeapons(
        com.bragi.ValorantWeapon.Builder builderForValue) {
      if (weaponsBuilder_ == null) {
        ensureWeaponsIsMutable();
        weapons_.add(builderForValue.build());
        onChanged();
      } else {
        weaponsBuilder_.addMessage(builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .bragi.ValorantWeapon weapons = 2 [json_name = "weapons"];</code>
     */
    public Builder addWeapons(
        int index, com.bragi.ValorantWeapon.Builder builderForValue) {
      if (weaponsBuilder_ == null) {
        ensureWeaponsIsMutable();
        weapons_.add(index, builderForValue.build());
        onChanged();
      } else {
        weaponsBuilder_.addMessage(index, builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .bragi.ValorantWeapon weapons = 2 [json_name = "weapons"];</code>
     */
    public Builder addAllWeapons(
        java.lang.Iterable<? extends com.bragi.ValorantWeapon> values) {
      if (weaponsBuilder_ == null) {
        ensureWeaponsIsMutable();
        com.google.protobuf.AbstractMessageLite.Builder.addAll(
            values, weapons_);
        onChanged();
      } else {
        weaponsBuilder_.addAllMessages(values);
      }
      return this;
    }
    /**
     * <code>repeated .bragi.ValorantWeapon weapons = 2 [json_name = "weapons"];</code>
     */
    public Builder clearWeapons() {
      if (weaponsBuilder_ == null) {
        weapons_ = java.util.Collections.emptyList();
        bitField0_ = (bitField0_ & ~0x00000002);
        onChanged();
      } else {
        weaponsBuilder_.clear();
      }
      return this;
    }
    /**
     * <code>repeated .bragi.ValorantWeapon weapons = 2 [json_name = "weapons"];</code>
     */
    public Builder removeWeapons(int index) {
      if (weaponsBuilder_ == null) {
        ensureWeaponsIsMutable();
        weapons_.remove(index);
        onChanged();
      } else {
        weaponsBuilder_.remove(index);
      }
      return this;
    }
    /**
     * <code>repeated .bragi.ValorantWeapon weapons = 2 [json_name = "weapons"];</code>
     */
    public com.bragi.ValorantWeapon.Builder getWeaponsBuilder(
        int index) {
      return getWeaponsFieldBuilder().getBuilder(index);
    }
    /**
     * <code>repeated .bragi.ValorantWeapon weapons = 2 [json_name = "weapons"];</code>
     */
    public com.bragi.ValorantWeaponOrBuilder getWeaponsOrBuilder(
        int index) {
      if (weaponsBuilder_ == null) {
        return weapons_.get(index);  } else {
        return weaponsBuilder_.getMessageOrBuilder(index);
      }
    }
    /**
     * <code>repeated .bragi.ValorantWeapon weapons = 2 [json_name = "weapons"];</code>
     */
    public java.util.List<? extends com.bragi.ValorantWeaponOrBuilder> 
         getWeaponsOrBuilderList() {
      if (weaponsBuilder_ != null) {
        return weaponsBuilder_.getMessageOrBuilderList();
      } else {
        return java.util.Collections.unmodifiableList(weapons_);
      }
    }
    /**
     * <code>repeated .bragi.ValorantWeapon weapons = 2 [json_name = "weapons"];</code>
     */
    public com.bragi.ValorantWeapon.Builder addWeaponsBuilder() {
      return getWeaponsFieldBuilder().addBuilder(
          com.bragi.ValorantWeapon.getDefaultInstance());
    }
    /**
     * <code>repeated .bragi.ValorantWeapon weapons = 2 [json_name = "weapons"];</code>
     */
    public com.bragi.ValorantWeapon.Builder addWeaponsBuilder(
        int index) {
      return getWeaponsFieldBuilder().addBuilder(
          index, com.bragi.ValorantWeapon.getDefaultInstance());
    }
    /**
     * <code>repeated .bragi.ValorantWeapon weapons = 2 [json_name = "weapons"];</code>
     */
    public java.util.List<com.bragi.ValorantWeapon.Builder> 
         getWeaponsBuilderList() {
      return getWeaponsFieldBuilder().getBuilderList();
    }
    private com.google.protobuf.RepeatedFieldBuilder<
        com.bragi.ValorantWeapon, com.bragi.ValorantWeapon.Builder, com.bragi.ValorantWeaponOrBuilder> 
        getWeaponsFieldBuilder() {
      if (weaponsBuilder_ == null) {
        weaponsBuilder_ = new com.google.protobuf.RepeatedFieldBuilder<
            com.bragi.ValorantWeapon, com.bragi.ValorantWeapon.Builder, com.bragi.ValorantWeaponOrBuilder>(
                weapons_,
                ((bitField0_ & 0x00000002) != 0),
                getParentForChildren(),
                isClean());
        weapons_ = null;
      }
      return weaponsBuilder_;
    }

    // @@protoc_insertion_point(builder_scope:bragi.ValorantWeaponsState)
  }

  // @@protoc_insertion_point(class_scope:bragi.ValorantWeaponsState)
  private static final com.bragi.ValorantWeaponsState DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.bragi.ValorantWeaponsState();
  }

  public static com.bragi.ValorantWeaponsState getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<ValorantWeaponsState>
      PARSER = new com.google.protobuf.AbstractParser<ValorantWeaponsState>() {
    @java.lang.Override
    public ValorantWeaponsState parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      Builder builder = newBuilder();
      try {
        builder.mergeFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        throw e.setUnfinishedMessage(builder.buildPartial());
      } catch (com.google.protobuf.UninitializedMessageException e) {
        throw e.asInvalidProtocolBufferException().setUnfinishedMessage(builder.buildPartial());
      } catch (java.io.IOException e) {
        throw new com.google.protobuf.InvalidProtocolBufferException(e)
            .setUnfinishedMessage(builder.buildPartial());
      }
      return builder.buildPartial();
    }
  };

  public static com.google.protobuf.Parser<ValorantWeaponsState> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<ValorantWeaponsState> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.bragi.ValorantWeaponsState getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

