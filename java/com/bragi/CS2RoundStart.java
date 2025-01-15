// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: bragi/cs2.proto
// Protobuf Java Version: 4.29.3

package com.bragi;

/**
 * Protobuf type {@code bragi.CS2RoundStart}
 */
public final class CS2RoundStart extends
    com.google.protobuf.GeneratedMessage implements
    // @@protoc_insertion_point(message_implements:bragi.CS2RoundStart)
    CS2RoundStartOrBuilder {
private static final long serialVersionUID = 0L;
  static {
    com.google.protobuf.RuntimeVersion.validateProtobufGencodeVersion(
      com.google.protobuf.RuntimeVersion.RuntimeDomain.PUBLIC,
      /* major= */ 4,
      /* minor= */ 29,
      /* patch= */ 3,
      /* suffix= */ "",
      CS2RoundStart.class.getName());
  }
  // Use CS2RoundStart.newBuilder() to construct.
  private CS2RoundStart(com.google.protobuf.GeneratedMessage.Builder<?> builder) {
    super(builder);
  }
  private CS2RoundStart() {
  }

  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.bragi.Cs2Proto.internal_static_bragi_CS2RoundStart_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.bragi.Cs2Proto.internal_static_bragi_CS2RoundStart_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.bragi.CS2RoundStart.class, com.bragi.CS2RoundStart.Builder.class);
  }

  private int bitField0_;
  public static final int MAP_TIME_FIELD_NUMBER = 1;
  private com.google.protobuf.Duration mapTime_;
  /**
   * <code>.google.protobuf.Duration map_time = 1 [json_name = "mapTime"];</code>
   * @return Whether the mapTime field is set.
   */
  @java.lang.Override
  public boolean hasMapTime() {
    return ((bitField0_ & 0x00000001) != 0);
  }
  /**
   * <code>.google.protobuf.Duration map_time = 1 [json_name = "mapTime"];</code>
   * @return The mapTime.
   */
  @java.lang.Override
  public com.google.protobuf.Duration getMapTime() {
    return mapTime_ == null ? com.google.protobuf.Duration.getDefaultInstance() : mapTime_;
  }
  /**
   * <code>.google.protobuf.Duration map_time = 1 [json_name = "mapTime"];</code>
   */
  @java.lang.Override
  public com.google.protobuf.DurationOrBuilder getMapTimeOrBuilder() {
    return mapTime_ == null ? com.google.protobuf.Duration.getDefaultInstance() : mapTime_;
  }

  public static final int TIME_REMAINING_FIELD_NUMBER = 2;
  private com.google.protobuf.Duration timeRemaining_;
  /**
   * <code>.google.protobuf.Duration time_remaining = 2 [json_name = "timeRemaining"];</code>
   * @return Whether the timeRemaining field is set.
   */
  @java.lang.Override
  public boolean hasTimeRemaining() {
    return ((bitField0_ & 0x00000002) != 0);
  }
  /**
   * <code>.google.protobuf.Duration time_remaining = 2 [json_name = "timeRemaining"];</code>
   * @return The timeRemaining.
   */
  @java.lang.Override
  public com.google.protobuf.Duration getTimeRemaining() {
    return timeRemaining_ == null ? com.google.protobuf.Duration.getDefaultInstance() : timeRemaining_;
  }
  /**
   * <code>.google.protobuf.Duration time_remaining = 2 [json_name = "timeRemaining"];</code>
   */
  @java.lang.Override
  public com.google.protobuf.DurationOrBuilder getTimeRemainingOrBuilder() {
    return timeRemaining_ == null ? com.google.protobuf.Duration.getDefaultInstance() : timeRemaining_;
  }

  public static final int CURRENT_ROUND_NUMBER_FIELD_NUMBER = 3;
  private int currentRoundNumber_ = 0;
  /**
   * <code>uint32 current_round_number = 3 [json_name = "currentRoundNumber"];</code>
   * @return The currentRoundNumber.
   */
  @java.lang.Override
  public int getCurrentRoundNumber() {
    return currentRoundNumber_;
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
      output.writeMessage(1, getMapTime());
    }
    if (((bitField0_ & 0x00000002) != 0)) {
      output.writeMessage(2, getTimeRemaining());
    }
    if (currentRoundNumber_ != 0) {
      output.writeUInt32(3, currentRoundNumber_);
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
        .computeMessageSize(1, getMapTime());
    }
    if (((bitField0_ & 0x00000002) != 0)) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(2, getTimeRemaining());
    }
    if (currentRoundNumber_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeUInt32Size(3, currentRoundNumber_);
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
    if (!(obj instanceof com.bragi.CS2RoundStart)) {
      return super.equals(obj);
    }
    com.bragi.CS2RoundStart other = (com.bragi.CS2RoundStart) obj;

    if (hasMapTime() != other.hasMapTime()) return false;
    if (hasMapTime()) {
      if (!getMapTime()
          .equals(other.getMapTime())) return false;
    }
    if (hasTimeRemaining() != other.hasTimeRemaining()) return false;
    if (hasTimeRemaining()) {
      if (!getTimeRemaining()
          .equals(other.getTimeRemaining())) return false;
    }
    if (getCurrentRoundNumber()
        != other.getCurrentRoundNumber()) return false;
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
    if (hasMapTime()) {
      hash = (37 * hash) + MAP_TIME_FIELD_NUMBER;
      hash = (53 * hash) + getMapTime().hashCode();
    }
    if (hasTimeRemaining()) {
      hash = (37 * hash) + TIME_REMAINING_FIELD_NUMBER;
      hash = (53 * hash) + getTimeRemaining().hashCode();
    }
    hash = (37 * hash) + CURRENT_ROUND_NUMBER_FIELD_NUMBER;
    hash = (53 * hash) + getCurrentRoundNumber();
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.bragi.CS2RoundStart parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.bragi.CS2RoundStart parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.bragi.CS2RoundStart parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.bragi.CS2RoundStart parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.bragi.CS2RoundStart parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.bragi.CS2RoundStart parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.bragi.CS2RoundStart parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input);
  }
  public static com.bragi.CS2RoundStart parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  public static com.bragi.CS2RoundStart parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseDelimitedWithIOException(PARSER, input);
  }

  public static com.bragi.CS2RoundStart parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.bragi.CS2RoundStart parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input);
  }
  public static com.bragi.CS2RoundStart parseFrom(
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
  public static Builder newBuilder(com.bragi.CS2RoundStart prototype) {
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
   * Protobuf type {@code bragi.CS2RoundStart}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessage.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:bragi.CS2RoundStart)
      com.bragi.CS2RoundStartOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.bragi.Cs2Proto.internal_static_bragi_CS2RoundStart_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessage.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.bragi.Cs2Proto.internal_static_bragi_CS2RoundStart_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.bragi.CS2RoundStart.class, com.bragi.CS2RoundStart.Builder.class);
    }

    // Construct using com.bragi.CS2RoundStart.newBuilder()
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
        getMapTimeFieldBuilder();
        getTimeRemainingFieldBuilder();
      }
    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      bitField0_ = 0;
      mapTime_ = null;
      if (mapTimeBuilder_ != null) {
        mapTimeBuilder_.dispose();
        mapTimeBuilder_ = null;
      }
      timeRemaining_ = null;
      if (timeRemainingBuilder_ != null) {
        timeRemainingBuilder_.dispose();
        timeRemainingBuilder_ = null;
      }
      currentRoundNumber_ = 0;
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.bragi.Cs2Proto.internal_static_bragi_CS2RoundStart_descriptor;
    }

    @java.lang.Override
    public com.bragi.CS2RoundStart getDefaultInstanceForType() {
      return com.bragi.CS2RoundStart.getDefaultInstance();
    }

    @java.lang.Override
    public com.bragi.CS2RoundStart build() {
      com.bragi.CS2RoundStart result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.bragi.CS2RoundStart buildPartial() {
      com.bragi.CS2RoundStart result = new com.bragi.CS2RoundStart(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(com.bragi.CS2RoundStart result) {
      int from_bitField0_ = bitField0_;
      int to_bitField0_ = 0;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.mapTime_ = mapTimeBuilder_ == null
            ? mapTime_
            : mapTimeBuilder_.build();
        to_bitField0_ |= 0x00000001;
      }
      if (((from_bitField0_ & 0x00000002) != 0)) {
        result.timeRemaining_ = timeRemainingBuilder_ == null
            ? timeRemaining_
            : timeRemainingBuilder_.build();
        to_bitField0_ |= 0x00000002;
      }
      if (((from_bitField0_ & 0x00000004) != 0)) {
        result.currentRoundNumber_ = currentRoundNumber_;
      }
      result.bitField0_ |= to_bitField0_;
    }

    @java.lang.Override
    public Builder mergeFrom(com.google.protobuf.Message other) {
      if (other instanceof com.bragi.CS2RoundStart) {
        return mergeFrom((com.bragi.CS2RoundStart)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.bragi.CS2RoundStart other) {
      if (other == com.bragi.CS2RoundStart.getDefaultInstance()) return this;
      if (other.hasMapTime()) {
        mergeMapTime(other.getMapTime());
      }
      if (other.hasTimeRemaining()) {
        mergeTimeRemaining(other.getTimeRemaining());
      }
      if (other.getCurrentRoundNumber() != 0) {
        setCurrentRoundNumber(other.getCurrentRoundNumber());
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
                  getMapTimeFieldBuilder().getBuilder(),
                  extensionRegistry);
              bitField0_ |= 0x00000001;
              break;
            } // case 10
            case 18: {
              input.readMessage(
                  getTimeRemainingFieldBuilder().getBuilder(),
                  extensionRegistry);
              bitField0_ |= 0x00000002;
              break;
            } // case 18
            case 24: {
              currentRoundNumber_ = input.readUInt32();
              bitField0_ |= 0x00000004;
              break;
            } // case 24
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

    private com.google.protobuf.Duration mapTime_;
    private com.google.protobuf.SingleFieldBuilder<
        com.google.protobuf.Duration, com.google.protobuf.Duration.Builder, com.google.protobuf.DurationOrBuilder> mapTimeBuilder_;
    /**
     * <code>.google.protobuf.Duration map_time = 1 [json_name = "mapTime"];</code>
     * @return Whether the mapTime field is set.
     */
    public boolean hasMapTime() {
      return ((bitField0_ & 0x00000001) != 0);
    }
    /**
     * <code>.google.protobuf.Duration map_time = 1 [json_name = "mapTime"];</code>
     * @return The mapTime.
     */
    public com.google.protobuf.Duration getMapTime() {
      if (mapTimeBuilder_ == null) {
        return mapTime_ == null ? com.google.protobuf.Duration.getDefaultInstance() : mapTime_;
      } else {
        return mapTimeBuilder_.getMessage();
      }
    }
    /**
     * <code>.google.protobuf.Duration map_time = 1 [json_name = "mapTime"];</code>
     */
    public Builder setMapTime(com.google.protobuf.Duration value) {
      if (mapTimeBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        mapTime_ = value;
      } else {
        mapTimeBuilder_.setMessage(value);
      }
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>.google.protobuf.Duration map_time = 1 [json_name = "mapTime"];</code>
     */
    public Builder setMapTime(
        com.google.protobuf.Duration.Builder builderForValue) {
      if (mapTimeBuilder_ == null) {
        mapTime_ = builderForValue.build();
      } else {
        mapTimeBuilder_.setMessage(builderForValue.build());
      }
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>.google.protobuf.Duration map_time = 1 [json_name = "mapTime"];</code>
     */
    public Builder mergeMapTime(com.google.protobuf.Duration value) {
      if (mapTimeBuilder_ == null) {
        if (((bitField0_ & 0x00000001) != 0) &&
          mapTime_ != null &&
          mapTime_ != com.google.protobuf.Duration.getDefaultInstance()) {
          getMapTimeBuilder().mergeFrom(value);
        } else {
          mapTime_ = value;
        }
      } else {
        mapTimeBuilder_.mergeFrom(value);
      }
      if (mapTime_ != null) {
        bitField0_ |= 0x00000001;
        onChanged();
      }
      return this;
    }
    /**
     * <code>.google.protobuf.Duration map_time = 1 [json_name = "mapTime"];</code>
     */
    public Builder clearMapTime() {
      bitField0_ = (bitField0_ & ~0x00000001);
      mapTime_ = null;
      if (mapTimeBuilder_ != null) {
        mapTimeBuilder_.dispose();
        mapTimeBuilder_ = null;
      }
      onChanged();
      return this;
    }
    /**
     * <code>.google.protobuf.Duration map_time = 1 [json_name = "mapTime"];</code>
     */
    public com.google.protobuf.Duration.Builder getMapTimeBuilder() {
      bitField0_ |= 0x00000001;
      onChanged();
      return getMapTimeFieldBuilder().getBuilder();
    }
    /**
     * <code>.google.protobuf.Duration map_time = 1 [json_name = "mapTime"];</code>
     */
    public com.google.protobuf.DurationOrBuilder getMapTimeOrBuilder() {
      if (mapTimeBuilder_ != null) {
        return mapTimeBuilder_.getMessageOrBuilder();
      } else {
        return mapTime_ == null ?
            com.google.protobuf.Duration.getDefaultInstance() : mapTime_;
      }
    }
    /**
     * <code>.google.protobuf.Duration map_time = 1 [json_name = "mapTime"];</code>
     */
    private com.google.protobuf.SingleFieldBuilder<
        com.google.protobuf.Duration, com.google.protobuf.Duration.Builder, com.google.protobuf.DurationOrBuilder> 
        getMapTimeFieldBuilder() {
      if (mapTimeBuilder_ == null) {
        mapTimeBuilder_ = new com.google.protobuf.SingleFieldBuilder<
            com.google.protobuf.Duration, com.google.protobuf.Duration.Builder, com.google.protobuf.DurationOrBuilder>(
                getMapTime(),
                getParentForChildren(),
                isClean());
        mapTime_ = null;
      }
      return mapTimeBuilder_;
    }

    private com.google.protobuf.Duration timeRemaining_;
    private com.google.protobuf.SingleFieldBuilder<
        com.google.protobuf.Duration, com.google.protobuf.Duration.Builder, com.google.protobuf.DurationOrBuilder> timeRemainingBuilder_;
    /**
     * <code>.google.protobuf.Duration time_remaining = 2 [json_name = "timeRemaining"];</code>
     * @return Whether the timeRemaining field is set.
     */
    public boolean hasTimeRemaining() {
      return ((bitField0_ & 0x00000002) != 0);
    }
    /**
     * <code>.google.protobuf.Duration time_remaining = 2 [json_name = "timeRemaining"];</code>
     * @return The timeRemaining.
     */
    public com.google.protobuf.Duration getTimeRemaining() {
      if (timeRemainingBuilder_ == null) {
        return timeRemaining_ == null ? com.google.protobuf.Duration.getDefaultInstance() : timeRemaining_;
      } else {
        return timeRemainingBuilder_.getMessage();
      }
    }
    /**
     * <code>.google.protobuf.Duration time_remaining = 2 [json_name = "timeRemaining"];</code>
     */
    public Builder setTimeRemaining(com.google.protobuf.Duration value) {
      if (timeRemainingBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        timeRemaining_ = value;
      } else {
        timeRemainingBuilder_.setMessage(value);
      }
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>.google.protobuf.Duration time_remaining = 2 [json_name = "timeRemaining"];</code>
     */
    public Builder setTimeRemaining(
        com.google.protobuf.Duration.Builder builderForValue) {
      if (timeRemainingBuilder_ == null) {
        timeRemaining_ = builderForValue.build();
      } else {
        timeRemainingBuilder_.setMessage(builderForValue.build());
      }
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>.google.protobuf.Duration time_remaining = 2 [json_name = "timeRemaining"];</code>
     */
    public Builder mergeTimeRemaining(com.google.protobuf.Duration value) {
      if (timeRemainingBuilder_ == null) {
        if (((bitField0_ & 0x00000002) != 0) &&
          timeRemaining_ != null &&
          timeRemaining_ != com.google.protobuf.Duration.getDefaultInstance()) {
          getTimeRemainingBuilder().mergeFrom(value);
        } else {
          timeRemaining_ = value;
        }
      } else {
        timeRemainingBuilder_.mergeFrom(value);
      }
      if (timeRemaining_ != null) {
        bitField0_ |= 0x00000002;
        onChanged();
      }
      return this;
    }
    /**
     * <code>.google.protobuf.Duration time_remaining = 2 [json_name = "timeRemaining"];</code>
     */
    public Builder clearTimeRemaining() {
      bitField0_ = (bitField0_ & ~0x00000002);
      timeRemaining_ = null;
      if (timeRemainingBuilder_ != null) {
        timeRemainingBuilder_.dispose();
        timeRemainingBuilder_ = null;
      }
      onChanged();
      return this;
    }
    /**
     * <code>.google.protobuf.Duration time_remaining = 2 [json_name = "timeRemaining"];</code>
     */
    public com.google.protobuf.Duration.Builder getTimeRemainingBuilder() {
      bitField0_ |= 0x00000002;
      onChanged();
      return getTimeRemainingFieldBuilder().getBuilder();
    }
    /**
     * <code>.google.protobuf.Duration time_remaining = 2 [json_name = "timeRemaining"];</code>
     */
    public com.google.protobuf.DurationOrBuilder getTimeRemainingOrBuilder() {
      if (timeRemainingBuilder_ != null) {
        return timeRemainingBuilder_.getMessageOrBuilder();
      } else {
        return timeRemaining_ == null ?
            com.google.protobuf.Duration.getDefaultInstance() : timeRemaining_;
      }
    }
    /**
     * <code>.google.protobuf.Duration time_remaining = 2 [json_name = "timeRemaining"];</code>
     */
    private com.google.protobuf.SingleFieldBuilder<
        com.google.protobuf.Duration, com.google.protobuf.Duration.Builder, com.google.protobuf.DurationOrBuilder> 
        getTimeRemainingFieldBuilder() {
      if (timeRemainingBuilder_ == null) {
        timeRemainingBuilder_ = new com.google.protobuf.SingleFieldBuilder<
            com.google.protobuf.Duration, com.google.protobuf.Duration.Builder, com.google.protobuf.DurationOrBuilder>(
                getTimeRemaining(),
                getParentForChildren(),
                isClean());
        timeRemaining_ = null;
      }
      return timeRemainingBuilder_;
    }

    private int currentRoundNumber_ ;
    /**
     * <code>uint32 current_round_number = 3 [json_name = "currentRoundNumber"];</code>
     * @return The currentRoundNumber.
     */
    @java.lang.Override
    public int getCurrentRoundNumber() {
      return currentRoundNumber_;
    }
    /**
     * <code>uint32 current_round_number = 3 [json_name = "currentRoundNumber"];</code>
     * @param value The currentRoundNumber to set.
     * @return This builder for chaining.
     */
    public Builder setCurrentRoundNumber(int value) {

      currentRoundNumber_ = value;
      bitField0_ |= 0x00000004;
      onChanged();
      return this;
    }
    /**
     * <code>uint32 current_round_number = 3 [json_name = "currentRoundNumber"];</code>
     * @return This builder for chaining.
     */
    public Builder clearCurrentRoundNumber() {
      bitField0_ = (bitField0_ & ~0x00000004);
      currentRoundNumber_ = 0;
      onChanged();
      return this;
    }

    // @@protoc_insertion_point(builder_scope:bragi.CS2RoundStart)
  }

  // @@protoc_insertion_point(class_scope:bragi.CS2RoundStart)
  private static final com.bragi.CS2RoundStart DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.bragi.CS2RoundStart();
  }

  public static com.bragi.CS2RoundStart getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<CS2RoundStart>
      PARSER = new com.google.protobuf.AbstractParser<CS2RoundStart>() {
    @java.lang.Override
    public CS2RoundStart parsePartialFrom(
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

  public static com.google.protobuf.Parser<CS2RoundStart> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<CS2RoundStart> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.bragi.CS2RoundStart getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

