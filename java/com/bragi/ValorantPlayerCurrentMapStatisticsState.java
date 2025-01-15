// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: bragi/valorant.proto
// Protobuf Java Version: 4.29.3

package com.bragi;

/**
 * Protobuf type {@code bragi.ValorantPlayerCurrentMapStatisticsState}
 */
public final class ValorantPlayerCurrentMapStatisticsState extends
    com.google.protobuf.GeneratedMessage implements
    // @@protoc_insertion_point(message_implements:bragi.ValorantPlayerCurrentMapStatisticsState)
    ValorantPlayerCurrentMapStatisticsStateOrBuilder {
private static final long serialVersionUID = 0L;
  static {
    com.google.protobuf.RuntimeVersion.validateProtobufGencodeVersion(
      com.google.protobuf.RuntimeVersion.RuntimeDomain.PUBLIC,
      /* major= */ 4,
      /* minor= */ 29,
      /* patch= */ 3,
      /* suffix= */ "",
      ValorantPlayerCurrentMapStatisticsState.class.getName());
  }
  // Use ValorantPlayerCurrentMapStatisticsState.newBuilder() to construct.
  private ValorantPlayerCurrentMapStatisticsState(com.google.protobuf.GeneratedMessage.Builder<?> builder) {
    super(builder);
  }
  private ValorantPlayerCurrentMapStatisticsState() {
    playerUrn_ = "";
  }

  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.bragi.ValorantProto.internal_static_bragi_ValorantPlayerCurrentMapStatisticsState_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.bragi.ValorantProto.internal_static_bragi_ValorantPlayerCurrentMapStatisticsState_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.bragi.ValorantPlayerCurrentMapStatisticsState.class, com.bragi.ValorantPlayerCurrentMapStatisticsState.Builder.class);
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

  public static final int KILLS_FIELD_NUMBER = 2;
  private int kills_ = 0;
  /**
   * <code>uint32 kills = 2 [json_name = "kills"];</code>
   * @return The kills.
   */
  @java.lang.Override
  public int getKills() {
    return kills_;
  }

  public static final int DEATHS_FIELD_NUMBER = 3;
  private int deaths_ = 0;
  /**
   * <code>uint32 deaths = 3 [json_name = "deaths"];</code>
   * @return The deaths.
   */
  @java.lang.Override
  public int getDeaths() {
    return deaths_;
  }

  public static final int ASSISTS_FIELD_NUMBER = 4;
  private int assists_ = 0;
  /**
   * <code>uint32 assists = 4 [json_name = "assists"];</code>
   * @return The assists.
   */
  @java.lang.Override
  public int getAssists() {
    return assists_;
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
    if (kills_ != 0) {
      output.writeUInt32(2, kills_);
    }
    if (deaths_ != 0) {
      output.writeUInt32(3, deaths_);
    }
    if (assists_ != 0) {
      output.writeUInt32(4, assists_);
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
    if (kills_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeUInt32Size(2, kills_);
    }
    if (deaths_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeUInt32Size(3, deaths_);
    }
    if (assists_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeUInt32Size(4, assists_);
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
    if (!(obj instanceof com.bragi.ValorantPlayerCurrentMapStatisticsState)) {
      return super.equals(obj);
    }
    com.bragi.ValorantPlayerCurrentMapStatisticsState other = (com.bragi.ValorantPlayerCurrentMapStatisticsState) obj;

    if (!getPlayerUrn()
        .equals(other.getPlayerUrn())) return false;
    if (getKills()
        != other.getKills()) return false;
    if (getDeaths()
        != other.getDeaths()) return false;
    if (getAssists()
        != other.getAssists()) return false;
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
    hash = (37 * hash) + KILLS_FIELD_NUMBER;
    hash = (53 * hash) + getKills();
    hash = (37 * hash) + DEATHS_FIELD_NUMBER;
    hash = (53 * hash) + getDeaths();
    hash = (37 * hash) + ASSISTS_FIELD_NUMBER;
    hash = (53 * hash) + getAssists();
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.bragi.ValorantPlayerCurrentMapStatisticsState parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.bragi.ValorantPlayerCurrentMapStatisticsState parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.bragi.ValorantPlayerCurrentMapStatisticsState parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.bragi.ValorantPlayerCurrentMapStatisticsState parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.bragi.ValorantPlayerCurrentMapStatisticsState parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.bragi.ValorantPlayerCurrentMapStatisticsState parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.bragi.ValorantPlayerCurrentMapStatisticsState parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input);
  }
  public static com.bragi.ValorantPlayerCurrentMapStatisticsState parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  public static com.bragi.ValorantPlayerCurrentMapStatisticsState parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseDelimitedWithIOException(PARSER, input);
  }

  public static com.bragi.ValorantPlayerCurrentMapStatisticsState parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.bragi.ValorantPlayerCurrentMapStatisticsState parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input);
  }
  public static com.bragi.ValorantPlayerCurrentMapStatisticsState parseFrom(
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
  public static Builder newBuilder(com.bragi.ValorantPlayerCurrentMapStatisticsState prototype) {
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
   * Protobuf type {@code bragi.ValorantPlayerCurrentMapStatisticsState}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessage.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:bragi.ValorantPlayerCurrentMapStatisticsState)
      com.bragi.ValorantPlayerCurrentMapStatisticsStateOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.bragi.ValorantProto.internal_static_bragi_ValorantPlayerCurrentMapStatisticsState_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessage.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.bragi.ValorantProto.internal_static_bragi_ValorantPlayerCurrentMapStatisticsState_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.bragi.ValorantPlayerCurrentMapStatisticsState.class, com.bragi.ValorantPlayerCurrentMapStatisticsState.Builder.class);
    }

    // Construct using com.bragi.ValorantPlayerCurrentMapStatisticsState.newBuilder()
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
      kills_ = 0;
      deaths_ = 0;
      assists_ = 0;
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.bragi.ValorantProto.internal_static_bragi_ValorantPlayerCurrentMapStatisticsState_descriptor;
    }

    @java.lang.Override
    public com.bragi.ValorantPlayerCurrentMapStatisticsState getDefaultInstanceForType() {
      return com.bragi.ValorantPlayerCurrentMapStatisticsState.getDefaultInstance();
    }

    @java.lang.Override
    public com.bragi.ValorantPlayerCurrentMapStatisticsState build() {
      com.bragi.ValorantPlayerCurrentMapStatisticsState result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.bragi.ValorantPlayerCurrentMapStatisticsState buildPartial() {
      com.bragi.ValorantPlayerCurrentMapStatisticsState result = new com.bragi.ValorantPlayerCurrentMapStatisticsState(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(com.bragi.ValorantPlayerCurrentMapStatisticsState result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.playerUrn_ = playerUrn_;
      }
      if (((from_bitField0_ & 0x00000002) != 0)) {
        result.kills_ = kills_;
      }
      if (((from_bitField0_ & 0x00000004) != 0)) {
        result.deaths_ = deaths_;
      }
      if (((from_bitField0_ & 0x00000008) != 0)) {
        result.assists_ = assists_;
      }
    }

    @java.lang.Override
    public Builder mergeFrom(com.google.protobuf.Message other) {
      if (other instanceof com.bragi.ValorantPlayerCurrentMapStatisticsState) {
        return mergeFrom((com.bragi.ValorantPlayerCurrentMapStatisticsState)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.bragi.ValorantPlayerCurrentMapStatisticsState other) {
      if (other == com.bragi.ValorantPlayerCurrentMapStatisticsState.getDefaultInstance()) return this;
      if (!other.getPlayerUrn().isEmpty()) {
        playerUrn_ = other.playerUrn_;
        bitField0_ |= 0x00000001;
        onChanged();
      }
      if (other.getKills() != 0) {
        setKills(other.getKills());
      }
      if (other.getDeaths() != 0) {
        setDeaths(other.getDeaths());
      }
      if (other.getAssists() != 0) {
        setAssists(other.getAssists());
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
              kills_ = input.readUInt32();
              bitField0_ |= 0x00000002;
              break;
            } // case 16
            case 24: {
              deaths_ = input.readUInt32();
              bitField0_ |= 0x00000004;
              break;
            } // case 24
            case 32: {
              assists_ = input.readUInt32();
              bitField0_ |= 0x00000008;
              break;
            } // case 32
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

    private int kills_ ;
    /**
     * <code>uint32 kills = 2 [json_name = "kills"];</code>
     * @return The kills.
     */
    @java.lang.Override
    public int getKills() {
      return kills_;
    }
    /**
     * <code>uint32 kills = 2 [json_name = "kills"];</code>
     * @param value The kills to set.
     * @return This builder for chaining.
     */
    public Builder setKills(int value) {

      kills_ = value;
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>uint32 kills = 2 [json_name = "kills"];</code>
     * @return This builder for chaining.
     */
    public Builder clearKills() {
      bitField0_ = (bitField0_ & ~0x00000002);
      kills_ = 0;
      onChanged();
      return this;
    }

    private int deaths_ ;
    /**
     * <code>uint32 deaths = 3 [json_name = "deaths"];</code>
     * @return The deaths.
     */
    @java.lang.Override
    public int getDeaths() {
      return deaths_;
    }
    /**
     * <code>uint32 deaths = 3 [json_name = "deaths"];</code>
     * @param value The deaths to set.
     * @return This builder for chaining.
     */
    public Builder setDeaths(int value) {

      deaths_ = value;
      bitField0_ |= 0x00000004;
      onChanged();
      return this;
    }
    /**
     * <code>uint32 deaths = 3 [json_name = "deaths"];</code>
     * @return This builder for chaining.
     */
    public Builder clearDeaths() {
      bitField0_ = (bitField0_ & ~0x00000004);
      deaths_ = 0;
      onChanged();
      return this;
    }

    private int assists_ ;
    /**
     * <code>uint32 assists = 4 [json_name = "assists"];</code>
     * @return The assists.
     */
    @java.lang.Override
    public int getAssists() {
      return assists_;
    }
    /**
     * <code>uint32 assists = 4 [json_name = "assists"];</code>
     * @param value The assists to set.
     * @return This builder for chaining.
     */
    public Builder setAssists(int value) {

      assists_ = value;
      bitField0_ |= 0x00000008;
      onChanged();
      return this;
    }
    /**
     * <code>uint32 assists = 4 [json_name = "assists"];</code>
     * @return This builder for chaining.
     */
    public Builder clearAssists() {
      bitField0_ = (bitField0_ & ~0x00000008);
      assists_ = 0;
      onChanged();
      return this;
    }

    // @@protoc_insertion_point(builder_scope:bragi.ValorantPlayerCurrentMapStatisticsState)
  }

  // @@protoc_insertion_point(class_scope:bragi.ValorantPlayerCurrentMapStatisticsState)
  private static final com.bragi.ValorantPlayerCurrentMapStatisticsState DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.bragi.ValorantPlayerCurrentMapStatisticsState();
  }

  public static com.bragi.ValorantPlayerCurrentMapStatisticsState getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<ValorantPlayerCurrentMapStatisticsState>
      PARSER = new com.google.protobuf.AbstractParser<ValorantPlayerCurrentMapStatisticsState>() {
    @java.lang.Override
    public ValorantPlayerCurrentMapStatisticsState parsePartialFrom(
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

  public static com.google.protobuf.Parser<ValorantPlayerCurrentMapStatisticsState> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<ValorantPlayerCurrentMapStatisticsState> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.bragi.ValorantPlayerCurrentMapStatisticsState getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

