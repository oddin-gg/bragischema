// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: bragi/lol.proto
// Protobuf Java Version: 4.29.3

package com.bragi;

/**
 * Protobuf type {@code bragi.LolCurrentMapTimeState}
 */
public final class LolCurrentMapTimeState extends
    com.google.protobuf.GeneratedMessage implements
    // @@protoc_insertion_point(message_implements:bragi.LolCurrentMapTimeState)
    LolCurrentMapTimeStateOrBuilder {
private static final long serialVersionUID = 0L;
  static {
    com.google.protobuf.RuntimeVersion.validateProtobufGencodeVersion(
      com.google.protobuf.RuntimeVersion.RuntimeDomain.PUBLIC,
      /* major= */ 4,
      /* minor= */ 29,
      /* patch= */ 3,
      /* suffix= */ "",
      LolCurrentMapTimeState.class.getName());
  }
  // Use LolCurrentMapTimeState.newBuilder() to construct.
  private LolCurrentMapTimeState(com.google.protobuf.GeneratedMessage.Builder<?> builder) {
    super(builder);
  }
  private LolCurrentMapTimeState() {
  }

  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.bragi.LolProto.internal_static_bragi_LolCurrentMapTimeState_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.bragi.LolProto.internal_static_bragi_LolCurrentMapTimeState_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.bragi.LolCurrentMapTimeState.class, com.bragi.LolCurrentMapTimeState.Builder.class);
  }

  private int bitField0_;
  public static final int GAME_TIME_FIELD_NUMBER = 1;
  private com.google.protobuf.Duration gameTime_;
  /**
   * <code>.google.protobuf.Duration game_time = 1 [json_name = "gameTime"];</code>
   * @return Whether the gameTime field is set.
   */
  @java.lang.Override
  public boolean hasGameTime() {
    return ((bitField0_ & 0x00000001) != 0);
  }
  /**
   * <code>.google.protobuf.Duration game_time = 1 [json_name = "gameTime"];</code>
   * @return The gameTime.
   */
  @java.lang.Override
  public com.google.protobuf.Duration getGameTime() {
    return gameTime_ == null ? com.google.protobuf.Duration.getDefaultInstance() : gameTime_;
  }
  /**
   * <code>.google.protobuf.Duration game_time = 1 [json_name = "gameTime"];</code>
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
      output.writeMessage(1, getGameTime());
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
        .computeMessageSize(1, getGameTime());
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
    if (!(obj instanceof com.bragi.LolCurrentMapTimeState)) {
      return super.equals(obj);
    }
    com.bragi.LolCurrentMapTimeState other = (com.bragi.LolCurrentMapTimeState) obj;

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
    if (hasGameTime()) {
      hash = (37 * hash) + GAME_TIME_FIELD_NUMBER;
      hash = (53 * hash) + getGameTime().hashCode();
    }
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.bragi.LolCurrentMapTimeState parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.bragi.LolCurrentMapTimeState parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.bragi.LolCurrentMapTimeState parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.bragi.LolCurrentMapTimeState parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.bragi.LolCurrentMapTimeState parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.bragi.LolCurrentMapTimeState parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.bragi.LolCurrentMapTimeState parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input);
  }
  public static com.bragi.LolCurrentMapTimeState parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  public static com.bragi.LolCurrentMapTimeState parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseDelimitedWithIOException(PARSER, input);
  }

  public static com.bragi.LolCurrentMapTimeState parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.bragi.LolCurrentMapTimeState parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input);
  }
  public static com.bragi.LolCurrentMapTimeState parseFrom(
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
  public static Builder newBuilder(com.bragi.LolCurrentMapTimeState prototype) {
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
   * Protobuf type {@code bragi.LolCurrentMapTimeState}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessage.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:bragi.LolCurrentMapTimeState)
      com.bragi.LolCurrentMapTimeStateOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.bragi.LolProto.internal_static_bragi_LolCurrentMapTimeState_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessage.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.bragi.LolProto.internal_static_bragi_LolCurrentMapTimeState_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.bragi.LolCurrentMapTimeState.class, com.bragi.LolCurrentMapTimeState.Builder.class);
    }

    // Construct using com.bragi.LolCurrentMapTimeState.newBuilder()
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
        getGameTimeFieldBuilder();
      }
    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      bitField0_ = 0;
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
      return com.bragi.LolProto.internal_static_bragi_LolCurrentMapTimeState_descriptor;
    }

    @java.lang.Override
    public com.bragi.LolCurrentMapTimeState getDefaultInstanceForType() {
      return com.bragi.LolCurrentMapTimeState.getDefaultInstance();
    }

    @java.lang.Override
    public com.bragi.LolCurrentMapTimeState build() {
      com.bragi.LolCurrentMapTimeState result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.bragi.LolCurrentMapTimeState buildPartial() {
      com.bragi.LolCurrentMapTimeState result = new com.bragi.LolCurrentMapTimeState(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(com.bragi.LolCurrentMapTimeState result) {
      int from_bitField0_ = bitField0_;
      int to_bitField0_ = 0;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.gameTime_ = gameTimeBuilder_ == null
            ? gameTime_
            : gameTimeBuilder_.build();
        to_bitField0_ |= 0x00000001;
      }
      result.bitField0_ |= to_bitField0_;
    }

    @java.lang.Override
    public Builder mergeFrom(com.google.protobuf.Message other) {
      if (other instanceof com.bragi.LolCurrentMapTimeState) {
        return mergeFrom((com.bragi.LolCurrentMapTimeState)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.bragi.LolCurrentMapTimeState other) {
      if (other == com.bragi.LolCurrentMapTimeState.getDefaultInstance()) return this;
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
                  getGameTimeFieldBuilder().getBuilder(),
                  extensionRegistry);
              bitField0_ |= 0x00000001;
              break;
            } // case 10
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

    private com.google.protobuf.Duration gameTime_;
    private com.google.protobuf.SingleFieldBuilder<
        com.google.protobuf.Duration, com.google.protobuf.Duration.Builder, com.google.protobuf.DurationOrBuilder> gameTimeBuilder_;
    /**
     * <code>.google.protobuf.Duration game_time = 1 [json_name = "gameTime"];</code>
     * @return Whether the gameTime field is set.
     */
    public boolean hasGameTime() {
      return ((bitField0_ & 0x00000001) != 0);
    }
    /**
     * <code>.google.protobuf.Duration game_time = 1 [json_name = "gameTime"];</code>
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
     * <code>.google.protobuf.Duration game_time = 1 [json_name = "gameTime"];</code>
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
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>.google.protobuf.Duration game_time = 1 [json_name = "gameTime"];</code>
     */
    public Builder setGameTime(
        com.google.protobuf.Duration.Builder builderForValue) {
      if (gameTimeBuilder_ == null) {
        gameTime_ = builderForValue.build();
      } else {
        gameTimeBuilder_.setMessage(builderForValue.build());
      }
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>.google.protobuf.Duration game_time = 1 [json_name = "gameTime"];</code>
     */
    public Builder mergeGameTime(com.google.protobuf.Duration value) {
      if (gameTimeBuilder_ == null) {
        if (((bitField0_ & 0x00000001) != 0) &&
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
        bitField0_ |= 0x00000001;
        onChanged();
      }
      return this;
    }
    /**
     * <code>.google.protobuf.Duration game_time = 1 [json_name = "gameTime"];</code>
     */
    public Builder clearGameTime() {
      bitField0_ = (bitField0_ & ~0x00000001);
      gameTime_ = null;
      if (gameTimeBuilder_ != null) {
        gameTimeBuilder_.dispose();
        gameTimeBuilder_ = null;
      }
      onChanged();
      return this;
    }
    /**
     * <code>.google.protobuf.Duration game_time = 1 [json_name = "gameTime"];</code>
     */
    public com.google.protobuf.Duration.Builder getGameTimeBuilder() {
      bitField0_ |= 0x00000001;
      onChanged();
      return getGameTimeFieldBuilder().getBuilder();
    }
    /**
     * <code>.google.protobuf.Duration game_time = 1 [json_name = "gameTime"];</code>
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
     * <code>.google.protobuf.Duration game_time = 1 [json_name = "gameTime"];</code>
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

    // @@protoc_insertion_point(builder_scope:bragi.LolCurrentMapTimeState)
  }

  // @@protoc_insertion_point(class_scope:bragi.LolCurrentMapTimeState)
  private static final com.bragi.LolCurrentMapTimeState DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.bragi.LolCurrentMapTimeState();
  }

  public static com.bragi.LolCurrentMapTimeState getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<LolCurrentMapTimeState>
      PARSER = new com.google.protobuf.AbstractParser<LolCurrentMapTimeState>() {
    @java.lang.Override
    public LolCurrentMapTimeState parsePartialFrom(
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

  public static com.google.protobuf.Parser<LolCurrentMapTimeState> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<LolCurrentMapTimeState> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.bragi.LolCurrentMapTimeState getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

