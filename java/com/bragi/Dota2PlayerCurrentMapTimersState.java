// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: bragi/dota2.proto
// Protobuf Java Version: 4.29.3

package com.bragi;

/**
 * Protobuf type {@code bragi.Dota2PlayerCurrentMapTimersState}
 */
public final class Dota2PlayerCurrentMapTimersState extends
    com.google.protobuf.GeneratedMessage implements
    // @@protoc_insertion_point(message_implements:bragi.Dota2PlayerCurrentMapTimersState)
    Dota2PlayerCurrentMapTimersStateOrBuilder {
private static final long serialVersionUID = 0L;
  static {
    com.google.protobuf.RuntimeVersion.validateProtobufGencodeVersion(
      com.google.protobuf.RuntimeVersion.RuntimeDomain.PUBLIC,
      /* major= */ 4,
      /* minor= */ 29,
      /* patch= */ 3,
      /* suffix= */ "",
      Dota2PlayerCurrentMapTimersState.class.getName());
  }
  // Use Dota2PlayerCurrentMapTimersState.newBuilder() to construct.
  private Dota2PlayerCurrentMapTimersState(com.google.protobuf.GeneratedMessage.Builder<?> builder) {
    super(builder);
  }
  private Dota2PlayerCurrentMapTimersState() {
    playerUrn_ = "";
  }

  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.bragi.Dota2Proto.internal_static_bragi_Dota2PlayerCurrentMapTimersState_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.bragi.Dota2Proto.internal_static_bragi_Dota2PlayerCurrentMapTimersState_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.bragi.Dota2PlayerCurrentMapTimersState.class, com.bragi.Dota2PlayerCurrentMapTimersState.Builder.class);
  }

  private int bitField0_;
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

  public static final int RESPAWN_TIMER_FIELD_NUMBER = 2;
  private com.google.protobuf.Duration respawnTimer_;
  /**
   * <code>optional .google.protobuf.Duration respawn_timer = 2 [json_name = "respawnTimer"];</code>
   * @return Whether the respawnTimer field is set.
   */
  @java.lang.Override
  public boolean hasRespawnTimer() {
    return ((bitField0_ & 0x00000001) != 0);
  }
  /**
   * <code>optional .google.protobuf.Duration respawn_timer = 2 [json_name = "respawnTimer"];</code>
   * @return The respawnTimer.
   */
  @java.lang.Override
  public com.google.protobuf.Duration getRespawnTimer() {
    return respawnTimer_ == null ? com.google.protobuf.Duration.getDefaultInstance() : respawnTimer_;
  }
  /**
   * <code>optional .google.protobuf.Duration respawn_timer = 2 [json_name = "respawnTimer"];</code>
   */
  @java.lang.Override
  public com.google.protobuf.DurationOrBuilder getRespawnTimerOrBuilder() {
    return respawnTimer_ == null ? com.google.protobuf.Duration.getDefaultInstance() : respawnTimer_;
  }

  public static final int BUYBACK_COOLDOWN_FIELD_NUMBER = 3;
  private com.google.protobuf.Duration buybackCooldown_;
  /**
   * <code>.google.protobuf.Duration buyback_cooldown = 3 [json_name = "buybackCooldown"];</code>
   * @return Whether the buybackCooldown field is set.
   */
  @java.lang.Override
  public boolean hasBuybackCooldown() {
    return ((bitField0_ & 0x00000002) != 0);
  }
  /**
   * <code>.google.protobuf.Duration buyback_cooldown = 3 [json_name = "buybackCooldown"];</code>
   * @return The buybackCooldown.
   */
  @java.lang.Override
  public com.google.protobuf.Duration getBuybackCooldown() {
    return buybackCooldown_ == null ? com.google.protobuf.Duration.getDefaultInstance() : buybackCooldown_;
  }
  /**
   * <code>.google.protobuf.Duration buyback_cooldown = 3 [json_name = "buybackCooldown"];</code>
   */
  @java.lang.Override
  public com.google.protobuf.DurationOrBuilder getBuybackCooldownOrBuilder() {
    return buybackCooldown_ == null ? com.google.protobuf.Duration.getDefaultInstance() : buybackCooldown_;
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
    if (((bitField0_ & 0x00000001) != 0)) {
      output.writeMessage(2, getRespawnTimer());
    }
    if (((bitField0_ & 0x00000002) != 0)) {
      output.writeMessage(3, getBuybackCooldown());
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
    if (((bitField0_ & 0x00000001) != 0)) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(2, getRespawnTimer());
    }
    if (((bitField0_ & 0x00000002) != 0)) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(3, getBuybackCooldown());
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
    if (!(obj instanceof com.bragi.Dota2PlayerCurrentMapTimersState)) {
      return super.equals(obj);
    }
    com.bragi.Dota2PlayerCurrentMapTimersState other = (com.bragi.Dota2PlayerCurrentMapTimersState) obj;

    if (!getPlayerUrn()
        .equals(other.getPlayerUrn())) return false;
    if (hasRespawnTimer() != other.hasRespawnTimer()) return false;
    if (hasRespawnTimer()) {
      if (!getRespawnTimer()
          .equals(other.getRespawnTimer())) return false;
    }
    if (hasBuybackCooldown() != other.hasBuybackCooldown()) return false;
    if (hasBuybackCooldown()) {
      if (!getBuybackCooldown()
          .equals(other.getBuybackCooldown())) return false;
    }
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
    if (hasRespawnTimer()) {
      hash = (37 * hash) + RESPAWN_TIMER_FIELD_NUMBER;
      hash = (53 * hash) + getRespawnTimer().hashCode();
    }
    if (hasBuybackCooldown()) {
      hash = (37 * hash) + BUYBACK_COOLDOWN_FIELD_NUMBER;
      hash = (53 * hash) + getBuybackCooldown().hashCode();
    }
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.bragi.Dota2PlayerCurrentMapTimersState parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.bragi.Dota2PlayerCurrentMapTimersState parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.bragi.Dota2PlayerCurrentMapTimersState parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.bragi.Dota2PlayerCurrentMapTimersState parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.bragi.Dota2PlayerCurrentMapTimersState parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.bragi.Dota2PlayerCurrentMapTimersState parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.bragi.Dota2PlayerCurrentMapTimersState parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input);
  }
  public static com.bragi.Dota2PlayerCurrentMapTimersState parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  public static com.bragi.Dota2PlayerCurrentMapTimersState parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseDelimitedWithIOException(PARSER, input);
  }

  public static com.bragi.Dota2PlayerCurrentMapTimersState parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.bragi.Dota2PlayerCurrentMapTimersState parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input);
  }
  public static com.bragi.Dota2PlayerCurrentMapTimersState parseFrom(
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
  public static Builder newBuilder(com.bragi.Dota2PlayerCurrentMapTimersState prototype) {
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
   * Protobuf type {@code bragi.Dota2PlayerCurrentMapTimersState}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessage.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:bragi.Dota2PlayerCurrentMapTimersState)
      com.bragi.Dota2PlayerCurrentMapTimersStateOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.bragi.Dota2Proto.internal_static_bragi_Dota2PlayerCurrentMapTimersState_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessage.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.bragi.Dota2Proto.internal_static_bragi_Dota2PlayerCurrentMapTimersState_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.bragi.Dota2PlayerCurrentMapTimersState.class, com.bragi.Dota2PlayerCurrentMapTimersState.Builder.class);
    }

    // Construct using com.bragi.Dota2PlayerCurrentMapTimersState.newBuilder()
    private Builder() {
      maybeForceBuilderInitialization();
    }

    private Builder(
        com.google.protobuf.GeneratedMessage.BuilderParent parent) {
      super(parent);
      maybeForceBuilderInitialization();
    }
    private void maybeForceBuilderInitialization() {
      if (com.google.protobuf.GeneratedMessage
              .alwaysUseFieldBuilders) {
        getRespawnTimerFieldBuilder();
        getBuybackCooldownFieldBuilder();
      }
    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      bitField0_ = 0;
      playerUrn_ = "";
      respawnTimer_ = null;
      if (respawnTimerBuilder_ != null) {
        respawnTimerBuilder_.dispose();
        respawnTimerBuilder_ = null;
      }
      buybackCooldown_ = null;
      if (buybackCooldownBuilder_ != null) {
        buybackCooldownBuilder_.dispose();
        buybackCooldownBuilder_ = null;
      }
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.bragi.Dota2Proto.internal_static_bragi_Dota2PlayerCurrentMapTimersState_descriptor;
    }

    @java.lang.Override
    public com.bragi.Dota2PlayerCurrentMapTimersState getDefaultInstanceForType() {
      return com.bragi.Dota2PlayerCurrentMapTimersState.getDefaultInstance();
    }

    @java.lang.Override
    public com.bragi.Dota2PlayerCurrentMapTimersState build() {
      com.bragi.Dota2PlayerCurrentMapTimersState result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.bragi.Dota2PlayerCurrentMapTimersState buildPartial() {
      com.bragi.Dota2PlayerCurrentMapTimersState result = new com.bragi.Dota2PlayerCurrentMapTimersState(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(com.bragi.Dota2PlayerCurrentMapTimersState result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.playerUrn_ = playerUrn_;
      }
      int to_bitField0_ = 0;
      if (((from_bitField0_ & 0x00000002) != 0)) {
        result.respawnTimer_ = respawnTimerBuilder_ == null
            ? respawnTimer_
            : respawnTimerBuilder_.build();
        to_bitField0_ |= 0x00000001;
      }
      if (((from_bitField0_ & 0x00000004) != 0)) {
        result.buybackCooldown_ = buybackCooldownBuilder_ == null
            ? buybackCooldown_
            : buybackCooldownBuilder_.build();
        to_bitField0_ |= 0x00000002;
      }
      result.bitField0_ |= to_bitField0_;
    }

    @java.lang.Override
    public Builder mergeFrom(com.google.protobuf.Message other) {
      if (other instanceof com.bragi.Dota2PlayerCurrentMapTimersState) {
        return mergeFrom((com.bragi.Dota2PlayerCurrentMapTimersState)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.bragi.Dota2PlayerCurrentMapTimersState other) {
      if (other == com.bragi.Dota2PlayerCurrentMapTimersState.getDefaultInstance()) return this;
      if (!other.getPlayerUrn().isEmpty()) {
        playerUrn_ = other.playerUrn_;
        bitField0_ |= 0x00000001;
        onChanged();
      }
      if (other.hasRespawnTimer()) {
        mergeRespawnTimer(other.getRespawnTimer());
      }
      if (other.hasBuybackCooldown()) {
        mergeBuybackCooldown(other.getBuybackCooldown());
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
              input.readMessage(
                  getRespawnTimerFieldBuilder().getBuilder(),
                  extensionRegistry);
              bitField0_ |= 0x00000002;
              break;
            } // case 18
            case 26: {
              input.readMessage(
                  getBuybackCooldownFieldBuilder().getBuilder(),
                  extensionRegistry);
              bitField0_ |= 0x00000004;
              break;
            } // case 26
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

    private com.google.protobuf.Duration respawnTimer_;
    private com.google.protobuf.SingleFieldBuilder<
        com.google.protobuf.Duration, com.google.protobuf.Duration.Builder, com.google.protobuf.DurationOrBuilder> respawnTimerBuilder_;
    /**
     * <code>optional .google.protobuf.Duration respawn_timer = 2 [json_name = "respawnTimer"];</code>
     * @return Whether the respawnTimer field is set.
     */
    public boolean hasRespawnTimer() {
      return ((bitField0_ & 0x00000002) != 0);
    }
    /**
     * <code>optional .google.protobuf.Duration respawn_timer = 2 [json_name = "respawnTimer"];</code>
     * @return The respawnTimer.
     */
    public com.google.protobuf.Duration getRespawnTimer() {
      if (respawnTimerBuilder_ == null) {
        return respawnTimer_ == null ? com.google.protobuf.Duration.getDefaultInstance() : respawnTimer_;
      } else {
        return respawnTimerBuilder_.getMessage();
      }
    }
    /**
     * <code>optional .google.protobuf.Duration respawn_timer = 2 [json_name = "respawnTimer"];</code>
     */
    public Builder setRespawnTimer(com.google.protobuf.Duration value) {
      if (respawnTimerBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        respawnTimer_ = value;
      } else {
        respawnTimerBuilder_.setMessage(value);
      }
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>optional .google.protobuf.Duration respawn_timer = 2 [json_name = "respawnTimer"];</code>
     */
    public Builder setRespawnTimer(
        com.google.protobuf.Duration.Builder builderForValue) {
      if (respawnTimerBuilder_ == null) {
        respawnTimer_ = builderForValue.build();
      } else {
        respawnTimerBuilder_.setMessage(builderForValue.build());
      }
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>optional .google.protobuf.Duration respawn_timer = 2 [json_name = "respawnTimer"];</code>
     */
    public Builder mergeRespawnTimer(com.google.protobuf.Duration value) {
      if (respawnTimerBuilder_ == null) {
        if (((bitField0_ & 0x00000002) != 0) &&
          respawnTimer_ != null &&
          respawnTimer_ != com.google.protobuf.Duration.getDefaultInstance()) {
          getRespawnTimerBuilder().mergeFrom(value);
        } else {
          respawnTimer_ = value;
        }
      } else {
        respawnTimerBuilder_.mergeFrom(value);
      }
      if (respawnTimer_ != null) {
        bitField0_ |= 0x00000002;
        onChanged();
      }
      return this;
    }
    /**
     * <code>optional .google.protobuf.Duration respawn_timer = 2 [json_name = "respawnTimer"];</code>
     */
    public Builder clearRespawnTimer() {
      bitField0_ = (bitField0_ & ~0x00000002);
      respawnTimer_ = null;
      if (respawnTimerBuilder_ != null) {
        respawnTimerBuilder_.dispose();
        respawnTimerBuilder_ = null;
      }
      onChanged();
      return this;
    }
    /**
     * <code>optional .google.protobuf.Duration respawn_timer = 2 [json_name = "respawnTimer"];</code>
     */
    public com.google.protobuf.Duration.Builder getRespawnTimerBuilder() {
      bitField0_ |= 0x00000002;
      onChanged();
      return getRespawnTimerFieldBuilder().getBuilder();
    }
    /**
     * <code>optional .google.protobuf.Duration respawn_timer = 2 [json_name = "respawnTimer"];</code>
     */
    public com.google.protobuf.DurationOrBuilder getRespawnTimerOrBuilder() {
      if (respawnTimerBuilder_ != null) {
        return respawnTimerBuilder_.getMessageOrBuilder();
      } else {
        return respawnTimer_ == null ?
            com.google.protobuf.Duration.getDefaultInstance() : respawnTimer_;
      }
    }
    /**
     * <code>optional .google.protobuf.Duration respawn_timer = 2 [json_name = "respawnTimer"];</code>
     */
    private com.google.protobuf.SingleFieldBuilder<
        com.google.protobuf.Duration, com.google.protobuf.Duration.Builder, com.google.protobuf.DurationOrBuilder> 
        getRespawnTimerFieldBuilder() {
      if (respawnTimerBuilder_ == null) {
        respawnTimerBuilder_ = new com.google.protobuf.SingleFieldBuilder<
            com.google.protobuf.Duration, com.google.protobuf.Duration.Builder, com.google.protobuf.DurationOrBuilder>(
                getRespawnTimer(),
                getParentForChildren(),
                isClean());
        respawnTimer_ = null;
      }
      return respawnTimerBuilder_;
    }

    private com.google.protobuf.Duration buybackCooldown_;
    private com.google.protobuf.SingleFieldBuilder<
        com.google.protobuf.Duration, com.google.protobuf.Duration.Builder, com.google.protobuf.DurationOrBuilder> buybackCooldownBuilder_;
    /**
     * <code>.google.protobuf.Duration buyback_cooldown = 3 [json_name = "buybackCooldown"];</code>
     * @return Whether the buybackCooldown field is set.
     */
    public boolean hasBuybackCooldown() {
      return ((bitField0_ & 0x00000004) != 0);
    }
    /**
     * <code>.google.protobuf.Duration buyback_cooldown = 3 [json_name = "buybackCooldown"];</code>
     * @return The buybackCooldown.
     */
    public com.google.protobuf.Duration getBuybackCooldown() {
      if (buybackCooldownBuilder_ == null) {
        return buybackCooldown_ == null ? com.google.protobuf.Duration.getDefaultInstance() : buybackCooldown_;
      } else {
        return buybackCooldownBuilder_.getMessage();
      }
    }
    /**
     * <code>.google.protobuf.Duration buyback_cooldown = 3 [json_name = "buybackCooldown"];</code>
     */
    public Builder setBuybackCooldown(com.google.protobuf.Duration value) {
      if (buybackCooldownBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        buybackCooldown_ = value;
      } else {
        buybackCooldownBuilder_.setMessage(value);
      }
      bitField0_ |= 0x00000004;
      onChanged();
      return this;
    }
    /**
     * <code>.google.protobuf.Duration buyback_cooldown = 3 [json_name = "buybackCooldown"];</code>
     */
    public Builder setBuybackCooldown(
        com.google.protobuf.Duration.Builder builderForValue) {
      if (buybackCooldownBuilder_ == null) {
        buybackCooldown_ = builderForValue.build();
      } else {
        buybackCooldownBuilder_.setMessage(builderForValue.build());
      }
      bitField0_ |= 0x00000004;
      onChanged();
      return this;
    }
    /**
     * <code>.google.protobuf.Duration buyback_cooldown = 3 [json_name = "buybackCooldown"];</code>
     */
    public Builder mergeBuybackCooldown(com.google.protobuf.Duration value) {
      if (buybackCooldownBuilder_ == null) {
        if (((bitField0_ & 0x00000004) != 0) &&
          buybackCooldown_ != null &&
          buybackCooldown_ != com.google.protobuf.Duration.getDefaultInstance()) {
          getBuybackCooldownBuilder().mergeFrom(value);
        } else {
          buybackCooldown_ = value;
        }
      } else {
        buybackCooldownBuilder_.mergeFrom(value);
      }
      if (buybackCooldown_ != null) {
        bitField0_ |= 0x00000004;
        onChanged();
      }
      return this;
    }
    /**
     * <code>.google.protobuf.Duration buyback_cooldown = 3 [json_name = "buybackCooldown"];</code>
     */
    public Builder clearBuybackCooldown() {
      bitField0_ = (bitField0_ & ~0x00000004);
      buybackCooldown_ = null;
      if (buybackCooldownBuilder_ != null) {
        buybackCooldownBuilder_.dispose();
        buybackCooldownBuilder_ = null;
      }
      onChanged();
      return this;
    }
    /**
     * <code>.google.protobuf.Duration buyback_cooldown = 3 [json_name = "buybackCooldown"];</code>
     */
    public com.google.protobuf.Duration.Builder getBuybackCooldownBuilder() {
      bitField0_ |= 0x00000004;
      onChanged();
      return getBuybackCooldownFieldBuilder().getBuilder();
    }
    /**
     * <code>.google.protobuf.Duration buyback_cooldown = 3 [json_name = "buybackCooldown"];</code>
     */
    public com.google.protobuf.DurationOrBuilder getBuybackCooldownOrBuilder() {
      if (buybackCooldownBuilder_ != null) {
        return buybackCooldownBuilder_.getMessageOrBuilder();
      } else {
        return buybackCooldown_ == null ?
            com.google.protobuf.Duration.getDefaultInstance() : buybackCooldown_;
      }
    }
    /**
     * <code>.google.protobuf.Duration buyback_cooldown = 3 [json_name = "buybackCooldown"];</code>
     */
    private com.google.protobuf.SingleFieldBuilder<
        com.google.protobuf.Duration, com.google.protobuf.Duration.Builder, com.google.protobuf.DurationOrBuilder> 
        getBuybackCooldownFieldBuilder() {
      if (buybackCooldownBuilder_ == null) {
        buybackCooldownBuilder_ = new com.google.protobuf.SingleFieldBuilder<
            com.google.protobuf.Duration, com.google.protobuf.Duration.Builder, com.google.protobuf.DurationOrBuilder>(
                getBuybackCooldown(),
                getParentForChildren(),
                isClean());
        buybackCooldown_ = null;
      }
      return buybackCooldownBuilder_;
    }

    // @@protoc_insertion_point(builder_scope:bragi.Dota2PlayerCurrentMapTimersState)
  }

  // @@protoc_insertion_point(class_scope:bragi.Dota2PlayerCurrentMapTimersState)
  private static final com.bragi.Dota2PlayerCurrentMapTimersState DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.bragi.Dota2PlayerCurrentMapTimersState();
  }

  public static com.bragi.Dota2PlayerCurrentMapTimersState getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<Dota2PlayerCurrentMapTimersState>
      PARSER = new com.google.protobuf.AbstractParser<Dota2PlayerCurrentMapTimersState>() {
    @java.lang.Override
    public Dota2PlayerCurrentMapTimersState parsePartialFrom(
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

  public static com.google.protobuf.Parser<Dota2PlayerCurrentMapTimersState> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<Dota2PlayerCurrentMapTimersState> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.bragi.Dota2PlayerCurrentMapTimersState getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

