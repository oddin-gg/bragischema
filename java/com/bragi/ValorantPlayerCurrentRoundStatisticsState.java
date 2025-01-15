// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: bragi/valorant.proto
// Protobuf Java Version: 4.29.3

package com.bragi;

/**
 * Protobuf type {@code bragi.ValorantPlayerCurrentRoundStatisticsState}
 */
public final class ValorantPlayerCurrentRoundStatisticsState extends
    com.google.protobuf.GeneratedMessage implements
    // @@protoc_insertion_point(message_implements:bragi.ValorantPlayerCurrentRoundStatisticsState)
    ValorantPlayerCurrentRoundStatisticsStateOrBuilder {
private static final long serialVersionUID = 0L;
  static {
    com.google.protobuf.RuntimeVersion.validateProtobufGencodeVersion(
      com.google.protobuf.RuntimeVersion.RuntimeDomain.PUBLIC,
      /* major= */ 4,
      /* minor= */ 29,
      /* patch= */ 3,
      /* suffix= */ "",
      ValorantPlayerCurrentRoundStatisticsState.class.getName());
  }
  // Use ValorantPlayerCurrentRoundStatisticsState.newBuilder() to construct.
  private ValorantPlayerCurrentRoundStatisticsState(com.google.protobuf.GeneratedMessage.Builder<?> builder) {
    super(builder);
  }
  private ValorantPlayerCurrentRoundStatisticsState() {
    playerUrn_ = "";
  }

  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.bragi.ValorantProto.internal_static_bragi_ValorantPlayerCurrentRoundStatisticsState_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.bragi.ValorantProto.internal_static_bragi_ValorantPlayerCurrentRoundStatisticsState_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.bragi.ValorantPlayerCurrentRoundStatisticsState.class, com.bragi.ValorantPlayerCurrentRoundStatisticsState.Builder.class);
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

  public static final int IS_ALIVE_FIELD_NUMBER = 2;
  private boolean isAlive_ = false;
  /**
   * <code>bool is_alive = 2 [json_name = "isAlive"];</code>
   * @return The isAlive.
   */
  @java.lang.Override
  public boolean getIsAlive() {
    return isAlive_;
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
    if (isAlive_ != false) {
      output.writeBool(2, isAlive_);
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
    if (isAlive_ != false) {
      size += com.google.protobuf.CodedOutputStream
        .computeBoolSize(2, isAlive_);
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
    if (!(obj instanceof com.bragi.ValorantPlayerCurrentRoundStatisticsState)) {
      return super.equals(obj);
    }
    com.bragi.ValorantPlayerCurrentRoundStatisticsState other = (com.bragi.ValorantPlayerCurrentRoundStatisticsState) obj;

    if (!getPlayerUrn()
        .equals(other.getPlayerUrn())) return false;
    if (getIsAlive()
        != other.getIsAlive()) return false;
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
    hash = (37 * hash) + IS_ALIVE_FIELD_NUMBER;
    hash = (53 * hash) + com.google.protobuf.Internal.hashBoolean(
        getIsAlive());
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.bragi.ValorantPlayerCurrentRoundStatisticsState parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.bragi.ValorantPlayerCurrentRoundStatisticsState parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.bragi.ValorantPlayerCurrentRoundStatisticsState parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.bragi.ValorantPlayerCurrentRoundStatisticsState parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.bragi.ValorantPlayerCurrentRoundStatisticsState parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.bragi.ValorantPlayerCurrentRoundStatisticsState parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.bragi.ValorantPlayerCurrentRoundStatisticsState parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input);
  }
  public static com.bragi.ValorantPlayerCurrentRoundStatisticsState parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  public static com.bragi.ValorantPlayerCurrentRoundStatisticsState parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseDelimitedWithIOException(PARSER, input);
  }

  public static com.bragi.ValorantPlayerCurrentRoundStatisticsState parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.bragi.ValorantPlayerCurrentRoundStatisticsState parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input);
  }
  public static com.bragi.ValorantPlayerCurrentRoundStatisticsState parseFrom(
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
  public static Builder newBuilder(com.bragi.ValorantPlayerCurrentRoundStatisticsState prototype) {
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
   * Protobuf type {@code bragi.ValorantPlayerCurrentRoundStatisticsState}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessage.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:bragi.ValorantPlayerCurrentRoundStatisticsState)
      com.bragi.ValorantPlayerCurrentRoundStatisticsStateOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.bragi.ValorantProto.internal_static_bragi_ValorantPlayerCurrentRoundStatisticsState_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessage.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.bragi.ValorantProto.internal_static_bragi_ValorantPlayerCurrentRoundStatisticsState_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.bragi.ValorantPlayerCurrentRoundStatisticsState.class, com.bragi.ValorantPlayerCurrentRoundStatisticsState.Builder.class);
    }

    // Construct using com.bragi.ValorantPlayerCurrentRoundStatisticsState.newBuilder()
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
      isAlive_ = false;
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.bragi.ValorantProto.internal_static_bragi_ValorantPlayerCurrentRoundStatisticsState_descriptor;
    }

    @java.lang.Override
    public com.bragi.ValorantPlayerCurrentRoundStatisticsState getDefaultInstanceForType() {
      return com.bragi.ValorantPlayerCurrentRoundStatisticsState.getDefaultInstance();
    }

    @java.lang.Override
    public com.bragi.ValorantPlayerCurrentRoundStatisticsState build() {
      com.bragi.ValorantPlayerCurrentRoundStatisticsState result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.bragi.ValorantPlayerCurrentRoundStatisticsState buildPartial() {
      com.bragi.ValorantPlayerCurrentRoundStatisticsState result = new com.bragi.ValorantPlayerCurrentRoundStatisticsState(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(com.bragi.ValorantPlayerCurrentRoundStatisticsState result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.playerUrn_ = playerUrn_;
      }
      if (((from_bitField0_ & 0x00000002) != 0)) {
        result.isAlive_ = isAlive_;
      }
    }

    @java.lang.Override
    public Builder mergeFrom(com.google.protobuf.Message other) {
      if (other instanceof com.bragi.ValorantPlayerCurrentRoundStatisticsState) {
        return mergeFrom((com.bragi.ValorantPlayerCurrentRoundStatisticsState)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.bragi.ValorantPlayerCurrentRoundStatisticsState other) {
      if (other == com.bragi.ValorantPlayerCurrentRoundStatisticsState.getDefaultInstance()) return this;
      if (!other.getPlayerUrn().isEmpty()) {
        playerUrn_ = other.playerUrn_;
        bitField0_ |= 0x00000001;
        onChanged();
      }
      if (other.getIsAlive() != false) {
        setIsAlive(other.getIsAlive());
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
            case 16: {
              isAlive_ = input.readBool();
              bitField0_ |= 0x00000002;
              break;
            } // case 16
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

    private boolean isAlive_ ;
    /**
     * <code>bool is_alive = 2 [json_name = "isAlive"];</code>
     * @return The isAlive.
     */
    @java.lang.Override
    public boolean getIsAlive() {
      return isAlive_;
    }
    /**
     * <code>bool is_alive = 2 [json_name = "isAlive"];</code>
     * @param value The isAlive to set.
     * @return This builder for chaining.
     */
    public Builder setIsAlive(boolean value) {

      isAlive_ = value;
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>bool is_alive = 2 [json_name = "isAlive"];</code>
     * @return This builder for chaining.
     */
    public Builder clearIsAlive() {
      bitField0_ = (bitField0_ & ~0x00000002);
      isAlive_ = false;
      onChanged();
      return this;
    }

    // @@protoc_insertion_point(builder_scope:bragi.ValorantPlayerCurrentRoundStatisticsState)
  }

  // @@protoc_insertion_point(class_scope:bragi.ValorantPlayerCurrentRoundStatisticsState)
  private static final com.bragi.ValorantPlayerCurrentRoundStatisticsState DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.bragi.ValorantPlayerCurrentRoundStatisticsState();
  }

  public static com.bragi.ValorantPlayerCurrentRoundStatisticsState getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<ValorantPlayerCurrentRoundStatisticsState>
      PARSER = new com.google.protobuf.AbstractParser<ValorantPlayerCurrentRoundStatisticsState>() {
    @java.lang.Override
    public ValorantPlayerCurrentRoundStatisticsState parsePartialFrom(
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

  public static com.google.protobuf.Parser<ValorantPlayerCurrentRoundStatisticsState> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<ValorantPlayerCurrentRoundStatisticsState> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.bragi.ValorantPlayerCurrentRoundStatisticsState getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

