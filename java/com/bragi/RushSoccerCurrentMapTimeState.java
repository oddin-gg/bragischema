// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: bragi/rush_soccer.proto
// Protobuf Java Version: 4.29.3

package com.bragi;

/**
 * Protobuf type {@code bragi.RushSoccerCurrentMapTimeState}
 */
public final class RushSoccerCurrentMapTimeState extends
    com.google.protobuf.GeneratedMessage implements
    // @@protoc_insertion_point(message_implements:bragi.RushSoccerCurrentMapTimeState)
    RushSoccerCurrentMapTimeStateOrBuilder {
private static final long serialVersionUID = 0L;
  static {
    com.google.protobuf.RuntimeVersion.validateProtobufGencodeVersion(
      com.google.protobuf.RuntimeVersion.RuntimeDomain.PUBLIC,
      /* major= */ 4,
      /* minor= */ 29,
      /* patch= */ 3,
      /* suffix= */ "",
      RushSoccerCurrentMapTimeState.class.getName());
  }
  // Use RushSoccerCurrentMapTimeState.newBuilder() to construct.
  private RushSoccerCurrentMapTimeState(com.google.protobuf.GeneratedMessage.Builder<?> builder) {
    super(builder);
  }
  private RushSoccerCurrentMapTimeState() {
  }

  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.bragi.RushSoccerProto.internal_static_bragi_RushSoccerCurrentMapTimeState_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.bragi.RushSoccerProto.internal_static_bragi_RushSoccerCurrentMapTimeState_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.bragi.RushSoccerCurrentMapTimeState.class, com.bragi.RushSoccerCurrentMapTimeState.Builder.class);
  }

  private int bitField0_;
  public static final int REAL_TIME_FIELD_NUMBER = 1;
  private com.google.protobuf.Duration realTime_;
  /**
   * <pre>
   * Real time in seconds (2x 4 minutes).
   * </pre>
   *
   * <code>.google.protobuf.Duration real_time = 1 [json_name = "realTime"];</code>
   * @return Whether the realTime field is set.
   */
  @java.lang.Override
  public boolean hasRealTime() {
    return ((bitField0_ & 0x00000001) != 0);
  }
  /**
   * <pre>
   * Real time in seconds (2x 4 minutes).
   * </pre>
   *
   * <code>.google.protobuf.Duration real_time = 1 [json_name = "realTime"];</code>
   * @return The realTime.
   */
  @java.lang.Override
  public com.google.protobuf.Duration getRealTime() {
    return realTime_ == null ? com.google.protobuf.Duration.getDefaultInstance() : realTime_;
  }
  /**
   * <pre>
   * Real time in seconds (2x 4 minutes).
   * </pre>
   *
   * <code>.google.protobuf.Duration real_time = 1 [json_name = "realTime"];</code>
   */
  @java.lang.Override
  public com.google.protobuf.DurationOrBuilder getRealTimeOrBuilder() {
    return realTime_ == null ? com.google.protobuf.Duration.getDefaultInstance() : realTime_;
  }

  public static final int GAME_TIME_FIELD_NUMBER = 2;
  private com.google.protobuf.Duration gameTime_;
  /**
   * <pre>
   * Game time in seconds (2x 45 minutes).
   * </pre>
   *
   * <code>.google.protobuf.Duration game_time = 2 [json_name = "gameTime"];</code>
   * @return Whether the gameTime field is set.
   */
  @java.lang.Override
  public boolean hasGameTime() {
    return ((bitField0_ & 0x00000002) != 0);
  }
  /**
   * <pre>
   * Game time in seconds (2x 45 minutes).
   * </pre>
   *
   * <code>.google.protobuf.Duration game_time = 2 [json_name = "gameTime"];</code>
   * @return The gameTime.
   */
  @java.lang.Override
  public com.google.protobuf.Duration getGameTime() {
    return gameTime_ == null ? com.google.protobuf.Duration.getDefaultInstance() : gameTime_;
  }
  /**
   * <pre>
   * Game time in seconds (2x 45 minutes).
   * </pre>
   *
   * <code>.google.protobuf.Duration game_time = 2 [json_name = "gameTime"];</code>
   */
  @java.lang.Override
  public com.google.protobuf.DurationOrBuilder getGameTimeOrBuilder() {
    return gameTime_ == null ? com.google.protobuf.Duration.getDefaultInstance() : gameTime_;
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
    if (((bitField0_ & 0x00000001) != 0)) {
      output.writeMessage(1, getRealTime());
    }
    if (((bitField0_ & 0x00000002) != 0)) {
      output.writeMessage(2, getGameTime());
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (((bitField0_ & 0x00000001) != 0)) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(1, getRealTime());
    }
    if (((bitField0_ & 0x00000002) != 0)) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(2, getGameTime());
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
    if (!(obj instanceof com.bragi.RushSoccerCurrentMapTimeState)) {
      return super.equals(obj);
    }
    com.bragi.RushSoccerCurrentMapTimeState other = (com.bragi.RushSoccerCurrentMapTimeState) obj;

    if (hasRealTime() != other.hasRealTime()) return false;
    if (hasRealTime()) {
      if (!getRealTime()
          .equals(other.getRealTime())) return false;
    }
    if (hasGameTime() != other.hasGameTime()) return false;
    if (hasGameTime()) {
      if (!getGameTime()
          .equals(other.getGameTime())) return false;
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
    if (hasRealTime()) {
      hash = (37 * hash) + REAL_TIME_FIELD_NUMBER;
      hash = (53 * hash) + getRealTime().hashCode();
    }
    if (hasGameTime()) {
      hash = (37 * hash) + GAME_TIME_FIELD_NUMBER;
      hash = (53 * hash) + getGameTime().hashCode();
    }
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.bragi.RushSoccerCurrentMapTimeState parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.bragi.RushSoccerCurrentMapTimeState parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.bragi.RushSoccerCurrentMapTimeState parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.bragi.RushSoccerCurrentMapTimeState parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.bragi.RushSoccerCurrentMapTimeState parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.bragi.RushSoccerCurrentMapTimeState parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.bragi.RushSoccerCurrentMapTimeState parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input);
  }
  public static com.bragi.RushSoccerCurrentMapTimeState parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  public static com.bragi.RushSoccerCurrentMapTimeState parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseDelimitedWithIOException(PARSER, input);
  }

  public static com.bragi.RushSoccerCurrentMapTimeState parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.bragi.RushSoccerCurrentMapTimeState parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input);
  }
  public static com.bragi.RushSoccerCurrentMapTimeState parseFrom(
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
  public static Builder newBuilder(com.bragi.RushSoccerCurrentMapTimeState prototype) {
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
   * Protobuf type {@code bragi.RushSoccerCurrentMapTimeState}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessage.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:bragi.RushSoccerCurrentMapTimeState)
      com.bragi.RushSoccerCurrentMapTimeStateOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.bragi.RushSoccerProto.internal_static_bragi_RushSoccerCurrentMapTimeState_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessage.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.bragi.RushSoccerProto.internal_static_bragi_RushSoccerCurrentMapTimeState_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.bragi.RushSoccerCurrentMapTimeState.class, com.bragi.RushSoccerCurrentMapTimeState.Builder.class);
    }

    // Construct using com.bragi.RushSoccerCurrentMapTimeState.newBuilder()
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
        getRealTimeFieldBuilder();
        getGameTimeFieldBuilder();
      }
    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      bitField0_ = 0;
      realTime_ = null;
      if (realTimeBuilder_ != null) {
        realTimeBuilder_.dispose();
        realTimeBuilder_ = null;
      }
      gameTime_ = null;
      if (gameTimeBuilder_ != null) {
        gameTimeBuilder_.dispose();
        gameTimeBuilder_ = null;
      }
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.bragi.RushSoccerProto.internal_static_bragi_RushSoccerCurrentMapTimeState_descriptor;
    }

    @java.lang.Override
    public com.bragi.RushSoccerCurrentMapTimeState getDefaultInstanceForType() {
      return com.bragi.RushSoccerCurrentMapTimeState.getDefaultInstance();
    }

    @java.lang.Override
    public com.bragi.RushSoccerCurrentMapTimeState build() {
      com.bragi.RushSoccerCurrentMapTimeState result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.bragi.RushSoccerCurrentMapTimeState buildPartial() {
      com.bragi.RushSoccerCurrentMapTimeState result = new com.bragi.RushSoccerCurrentMapTimeState(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(com.bragi.RushSoccerCurrentMapTimeState result) {
      int from_bitField0_ = bitField0_;
      int to_bitField0_ = 0;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.realTime_ = realTimeBuilder_ == null
            ? realTime_
            : realTimeBuilder_.build();
        to_bitField0_ |= 0x00000001;
      }
      if (((from_bitField0_ & 0x00000002) != 0)) {
        result.gameTime_ = gameTimeBuilder_ == null
            ? gameTime_
            : gameTimeBuilder_.build();
        to_bitField0_ |= 0x00000002;
      }
      result.bitField0_ |= to_bitField0_;
    }

    @java.lang.Override
    public Builder mergeFrom(com.google.protobuf.Message other) {
      if (other instanceof com.bragi.RushSoccerCurrentMapTimeState) {
        return mergeFrom((com.bragi.RushSoccerCurrentMapTimeState)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.bragi.RushSoccerCurrentMapTimeState other) {
      if (other == com.bragi.RushSoccerCurrentMapTimeState.getDefaultInstance()) return this;
      if (other.hasRealTime()) {
        mergeRealTime(other.getRealTime());
      }
      if (other.hasGameTime()) {
        mergeGameTime(other.getGameTime());
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
              input.readMessage(
                  getRealTimeFieldBuilder().getBuilder(),
                  extensionRegistry);
              bitField0_ |= 0x00000001;
              break;
            } // case 10
            case 18: {
              input.readMessage(
                  getGameTimeFieldBuilder().getBuilder(),
                  extensionRegistry);
              bitField0_ |= 0x00000002;
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

    private com.google.protobuf.Duration realTime_;
    private com.google.protobuf.SingleFieldBuilder<
        com.google.protobuf.Duration, com.google.protobuf.Duration.Builder, com.google.protobuf.DurationOrBuilder> realTimeBuilder_;
    /**
     * <pre>
     * Real time in seconds (2x 4 minutes).
     * </pre>
     *
     * <code>.google.protobuf.Duration real_time = 1 [json_name = "realTime"];</code>
     * @return Whether the realTime field is set.
     */
    public boolean hasRealTime() {
      return ((bitField0_ & 0x00000001) != 0);
    }
    /**
     * <pre>
     * Real time in seconds (2x 4 minutes).
     * </pre>
     *
     * <code>.google.protobuf.Duration real_time = 1 [json_name = "realTime"];</code>
     * @return The realTime.
     */
    public com.google.protobuf.Duration getRealTime() {
      if (realTimeBuilder_ == null) {
        return realTime_ == null ? com.google.protobuf.Duration.getDefaultInstance() : realTime_;
      } else {
        return realTimeBuilder_.getMessage();
      }
    }
    /**
     * <pre>
     * Real time in seconds (2x 4 minutes).
     * </pre>
     *
     * <code>.google.protobuf.Duration real_time = 1 [json_name = "realTime"];</code>
     */
    public Builder setRealTime(com.google.protobuf.Duration value) {
      if (realTimeBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        realTime_ = value;
      } else {
        realTimeBuilder_.setMessage(value);
      }
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * Real time in seconds (2x 4 minutes).
     * </pre>
     *
     * <code>.google.protobuf.Duration real_time = 1 [json_name = "realTime"];</code>
     */
    public Builder setRealTime(
        com.google.protobuf.Duration.Builder builderForValue) {
      if (realTimeBuilder_ == null) {
        realTime_ = builderForValue.build();
      } else {
        realTimeBuilder_.setMessage(builderForValue.build());
      }
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * Real time in seconds (2x 4 minutes).
     * </pre>
     *
     * <code>.google.protobuf.Duration real_time = 1 [json_name = "realTime"];</code>
     */
    public Builder mergeRealTime(com.google.protobuf.Duration value) {
      if (realTimeBuilder_ == null) {
        if (((bitField0_ & 0x00000001) != 0) &&
          realTime_ != null &&
          realTime_ != com.google.protobuf.Duration.getDefaultInstance()) {
          getRealTimeBuilder().mergeFrom(value);
        } else {
          realTime_ = value;
        }
      } else {
        realTimeBuilder_.mergeFrom(value);
      }
      if (realTime_ != null) {
        bitField0_ |= 0x00000001;
        onChanged();
      }
      return this;
    }
    /**
     * <pre>
     * Real time in seconds (2x 4 minutes).
     * </pre>
     *
     * <code>.google.protobuf.Duration real_time = 1 [json_name = "realTime"];</code>
     */
    public Builder clearRealTime() {
      bitField0_ = (bitField0_ & ~0x00000001);
      realTime_ = null;
      if (realTimeBuilder_ != null) {
        realTimeBuilder_.dispose();
        realTimeBuilder_ = null;
      }
      onChanged();
      return this;
    }
    /**
     * <pre>
     * Real time in seconds (2x 4 minutes).
     * </pre>
     *
     * <code>.google.protobuf.Duration real_time = 1 [json_name = "realTime"];</code>
     */
    public com.google.protobuf.Duration.Builder getRealTimeBuilder() {
      bitField0_ |= 0x00000001;
      onChanged();
      return getRealTimeFieldBuilder().getBuilder();
    }
    /**
     * <pre>
     * Real time in seconds (2x 4 minutes).
     * </pre>
     *
     * <code>.google.protobuf.Duration real_time = 1 [json_name = "realTime"];</code>
     */
    public com.google.protobuf.DurationOrBuilder getRealTimeOrBuilder() {
      if (realTimeBuilder_ != null) {
        return realTimeBuilder_.getMessageOrBuilder();
      } else {
        return realTime_ == null ?
            com.google.protobuf.Duration.getDefaultInstance() : realTime_;
      }
    }
    /**
     * <pre>
     * Real time in seconds (2x 4 minutes).
     * </pre>
     *
     * <code>.google.protobuf.Duration real_time = 1 [json_name = "realTime"];</code>
     */
    private com.google.protobuf.SingleFieldBuilder<
        com.google.protobuf.Duration, com.google.protobuf.Duration.Builder, com.google.protobuf.DurationOrBuilder> 
        getRealTimeFieldBuilder() {
      if (realTimeBuilder_ == null) {
        realTimeBuilder_ = new com.google.protobuf.SingleFieldBuilder<
            com.google.protobuf.Duration, com.google.protobuf.Duration.Builder, com.google.protobuf.DurationOrBuilder>(
                getRealTime(),
                getParentForChildren(),
                isClean());
        realTime_ = null;
      }
      return realTimeBuilder_;
    }

    private com.google.protobuf.Duration gameTime_;
    private com.google.protobuf.SingleFieldBuilder<
        com.google.protobuf.Duration, com.google.protobuf.Duration.Builder, com.google.protobuf.DurationOrBuilder> gameTimeBuilder_;
    /**
     * <pre>
     * Game time in seconds (2x 45 minutes).
     * </pre>
     *
     * <code>.google.protobuf.Duration game_time = 2 [json_name = "gameTime"];</code>
     * @return Whether the gameTime field is set.
     */
    public boolean hasGameTime() {
      return ((bitField0_ & 0x00000002) != 0);
    }
    /**
     * <pre>
     * Game time in seconds (2x 45 minutes).
     * </pre>
     *
     * <code>.google.protobuf.Duration game_time = 2 [json_name = "gameTime"];</code>
     * @return The gameTime.
     */
    public com.google.protobuf.Duration getGameTime() {
      if (gameTimeBuilder_ == null) {
        return gameTime_ == null ? com.google.protobuf.Duration.getDefaultInstance() : gameTime_;
      } else {
        return gameTimeBuilder_.getMessage();
      }
    }
    /**
     * <pre>
     * Game time in seconds (2x 45 minutes).
     * </pre>
     *
     * <code>.google.protobuf.Duration game_time = 2 [json_name = "gameTime"];</code>
     */
    public Builder setGameTime(com.google.protobuf.Duration value) {
      if (gameTimeBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        gameTime_ = value;
      } else {
        gameTimeBuilder_.setMessage(value);
      }
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * Game time in seconds (2x 45 minutes).
     * </pre>
     *
     * <code>.google.protobuf.Duration game_time = 2 [json_name = "gameTime"];</code>
     */
    public Builder setGameTime(
        com.google.protobuf.Duration.Builder builderForValue) {
      if (gameTimeBuilder_ == null) {
        gameTime_ = builderForValue.build();
      } else {
        gameTimeBuilder_.setMessage(builderForValue.build());
      }
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * Game time in seconds (2x 45 minutes).
     * </pre>
     *
     * <code>.google.protobuf.Duration game_time = 2 [json_name = "gameTime"];</code>
     */
    public Builder mergeGameTime(com.google.protobuf.Duration value) {
      if (gameTimeBuilder_ == null) {
        if (((bitField0_ & 0x00000002) != 0) &&
          gameTime_ != null &&
          gameTime_ != com.google.protobuf.Duration.getDefaultInstance()) {
          getGameTimeBuilder().mergeFrom(value);
        } else {
          gameTime_ = value;
        }
      } else {
        gameTimeBuilder_.mergeFrom(value);
      }
      if (gameTime_ != null) {
        bitField0_ |= 0x00000002;
        onChanged();
      }
      return this;
    }
    /**
     * <pre>
     * Game time in seconds (2x 45 minutes).
     * </pre>
     *
     * <code>.google.protobuf.Duration game_time = 2 [json_name = "gameTime"];</code>
     */
    public Builder clearGameTime() {
      bitField0_ = (bitField0_ & ~0x00000002);
      gameTime_ = null;
      if (gameTimeBuilder_ != null) {
        gameTimeBuilder_.dispose();
        gameTimeBuilder_ = null;
      }
      onChanged();
      return this;
    }
    /**
     * <pre>
     * Game time in seconds (2x 45 minutes).
     * </pre>
     *
     * <code>.google.protobuf.Duration game_time = 2 [json_name = "gameTime"];</code>
     */
    public com.google.protobuf.Duration.Builder getGameTimeBuilder() {
      bitField0_ |= 0x00000002;
      onChanged();
      return getGameTimeFieldBuilder().getBuilder();
    }
    /**
     * <pre>
     * Game time in seconds (2x 45 minutes).
     * </pre>
     *
     * <code>.google.protobuf.Duration game_time = 2 [json_name = "gameTime"];</code>
     */
    public com.google.protobuf.DurationOrBuilder getGameTimeOrBuilder() {
      if (gameTimeBuilder_ != null) {
        return gameTimeBuilder_.getMessageOrBuilder();
      } else {
        return gameTime_ == null ?
            com.google.protobuf.Duration.getDefaultInstance() : gameTime_;
      }
    }
    /**
     * <pre>
     * Game time in seconds (2x 45 minutes).
     * </pre>
     *
     * <code>.google.protobuf.Duration game_time = 2 [json_name = "gameTime"];</code>
     */
    private com.google.protobuf.SingleFieldBuilder<
        com.google.protobuf.Duration, com.google.protobuf.Duration.Builder, com.google.protobuf.DurationOrBuilder> 
        getGameTimeFieldBuilder() {
      if (gameTimeBuilder_ == null) {
        gameTimeBuilder_ = new com.google.protobuf.SingleFieldBuilder<
            com.google.protobuf.Duration, com.google.protobuf.Duration.Builder, com.google.protobuf.DurationOrBuilder>(
                getGameTime(),
                getParentForChildren(),
                isClean());
        gameTime_ = null;
      }
      return gameTimeBuilder_;
    }

    // @@protoc_insertion_point(builder_scope:bragi.RushSoccerCurrentMapTimeState)
  }

  // @@protoc_insertion_point(class_scope:bragi.RushSoccerCurrentMapTimeState)
  private static final com.bragi.RushSoccerCurrentMapTimeState DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.bragi.RushSoccerCurrentMapTimeState();
  }

  public static com.bragi.RushSoccerCurrentMapTimeState getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<RushSoccerCurrentMapTimeState>
      PARSER = new com.google.protobuf.AbstractParser<RushSoccerCurrentMapTimeState>() {
    @java.lang.Override
    public RushSoccerCurrentMapTimeState parsePartialFrom(
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

  public static com.google.protobuf.Parser<RushSoccerCurrentMapTimeState> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<RushSoccerCurrentMapTimeState> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.bragi.RushSoccerCurrentMapTimeState getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

