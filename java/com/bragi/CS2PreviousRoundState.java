// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: bragi/cs2.proto
// Protobuf Java Version: 4.29.3

package com.bragi;

/**
 * Protobuf type {@code bragi.CS2PreviousRoundState}
 */
public final class CS2PreviousRoundState extends
    com.google.protobuf.GeneratedMessage implements
    // @@protoc_insertion_point(message_implements:bragi.CS2PreviousRoundState)
    CS2PreviousRoundStateOrBuilder {
private static final long serialVersionUID = 0L;
  static {
    com.google.protobuf.RuntimeVersion.validateProtobufGencodeVersion(
      com.google.protobuf.RuntimeVersion.RuntimeDomain.PUBLIC,
      /* major= */ 4,
      /* minor= */ 29,
      /* patch= */ 3,
      /* suffix= */ "",
      CS2PreviousRoundState.class.getName());
  }
  // Use CS2PreviousRoundState.newBuilder() to construct.
  private CS2PreviousRoundState(com.google.protobuf.GeneratedMessage.Builder<?> builder) {
    super(builder);
  }
  private CS2PreviousRoundState() {
  }

  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.bragi.Cs2Proto.internal_static_bragi_CS2PreviousRoundState_descriptor;
  }

  @SuppressWarnings({"rawtypes"})
  @java.lang.Override
  protected com.google.protobuf.MapFieldReflectionAccessor internalGetMapFieldReflection(
      int number) {
    switch (number) {
      case 4:
        return internalGetTeamStates();
      default:
        throw new RuntimeException(
            "Invalid map field number: " + number);
    }
  }
  @java.lang.Override
  protected com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.bragi.Cs2Proto.internal_static_bragi_CS2PreviousRoundState_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.bragi.CS2PreviousRoundState.class, com.bragi.CS2PreviousRoundState.Builder.class);
  }

  private int bitField0_;
  public static final int ROUND_NUMBER_FIELD_NUMBER = 1;
  private int roundNumber_ = 0;
  /**
   * <code>uint32 round_number = 1 [json_name = "roundNumber"];</code>
   * @return The roundNumber.
   */
  @java.lang.Override
  public int getRoundNumber() {
    return roundNumber_;
  }

  public static final int INFO_FIELD_NUMBER = 2;
  private com.bragi.CS2RoundInfoState info_;
  /**
   * <code>.bragi.CS2RoundInfoState info = 2 [json_name = "info"];</code>
   * @return Whether the info field is set.
   */
  @java.lang.Override
  public boolean hasInfo() {
    return ((bitField0_ & 0x00000001) != 0);
  }
  /**
   * <code>.bragi.CS2RoundInfoState info = 2 [json_name = "info"];</code>
   * @return The info.
   */
  @java.lang.Override
  public com.bragi.CS2RoundInfoState getInfo() {
    return info_ == null ? com.bragi.CS2RoundInfoState.getDefaultInstance() : info_;
  }
  /**
   * <code>.bragi.CS2RoundInfoState info = 2 [json_name = "info"];</code>
   */
  @java.lang.Override
  public com.bragi.CS2RoundInfoStateOrBuilder getInfoOrBuilder() {
    return info_ == null ? com.bragi.CS2RoundInfoState.getDefaultInstance() : info_;
  }

  public static final int TEAM_STATES_FIELD_NUMBER = 4;
  private static final class TeamStatesDefaultEntryHolder {
    static final com.google.protobuf.MapEntry<
        java.lang.String, com.bragi.CS2PreviousTeamRoundState> defaultEntry =
            com.google.protobuf.MapEntry
            .<java.lang.String, com.bragi.CS2PreviousTeamRoundState>newDefaultInstance(
                com.bragi.Cs2Proto.internal_static_bragi_CS2PreviousRoundState_TeamStatesEntry_descriptor, 
                com.google.protobuf.WireFormat.FieldType.STRING,
                "",
                com.google.protobuf.WireFormat.FieldType.MESSAGE,
                com.bragi.CS2PreviousTeamRoundState.getDefaultInstance());
  }
  @SuppressWarnings("serial")
  private com.google.protobuf.MapField<
      java.lang.String, com.bragi.CS2PreviousTeamRoundState> teamStates_;
  private com.google.protobuf.MapField<java.lang.String, com.bragi.CS2PreviousTeamRoundState>
  internalGetTeamStates() {
    if (teamStates_ == null) {
      return com.google.protobuf.MapField.emptyMapField(
          TeamStatesDefaultEntryHolder.defaultEntry);
    }
    return teamStates_;
  }
  public int getTeamStatesCount() {
    return internalGetTeamStates().getMap().size();
  }
  /**
   * <pre>
   * keys are type of team_urn
   * </pre>
   *
   * <code>map&lt;string, .bragi.CS2PreviousTeamRoundState&gt; team_states = 4 [json_name = "teamStates"];</code>
   */
  @java.lang.Override
  public boolean containsTeamStates(
      java.lang.String key) {
    if (key == null) { throw new NullPointerException("map key"); }
    return internalGetTeamStates().getMap().containsKey(key);
  }
  /**
   * Use {@link #getTeamStatesMap()} instead.
   */
  @java.lang.Override
  @java.lang.Deprecated
  public java.util.Map<java.lang.String, com.bragi.CS2PreviousTeamRoundState> getTeamStates() {
    return getTeamStatesMap();
  }
  /**
   * <pre>
   * keys are type of team_urn
   * </pre>
   *
   * <code>map&lt;string, .bragi.CS2PreviousTeamRoundState&gt; team_states = 4 [json_name = "teamStates"];</code>
   */
  @java.lang.Override
  public java.util.Map<java.lang.String, com.bragi.CS2PreviousTeamRoundState> getTeamStatesMap() {
    return internalGetTeamStates().getMap();
  }
  /**
   * <pre>
   * keys are type of team_urn
   * </pre>
   *
   * <code>map&lt;string, .bragi.CS2PreviousTeamRoundState&gt; team_states = 4 [json_name = "teamStates"];</code>
   */
  @java.lang.Override
  public /* nullable */
com.bragi.CS2PreviousTeamRoundState getTeamStatesOrDefault(
      java.lang.String key,
      /* nullable */
com.bragi.CS2PreviousTeamRoundState defaultValue) {
    if (key == null) { throw new NullPointerException("map key"); }
    java.util.Map<java.lang.String, com.bragi.CS2PreviousTeamRoundState> map =
        internalGetTeamStates().getMap();
    return map.containsKey(key) ? map.get(key) : defaultValue;
  }
  /**
   * <pre>
   * keys are type of team_urn
   * </pre>
   *
   * <code>map&lt;string, .bragi.CS2PreviousTeamRoundState&gt; team_states = 4 [json_name = "teamStates"];</code>
   */
  @java.lang.Override
  public com.bragi.CS2PreviousTeamRoundState getTeamStatesOrThrow(
      java.lang.String key) {
    if (key == null) { throw new NullPointerException("map key"); }
    java.util.Map<java.lang.String, com.bragi.CS2PreviousTeamRoundState> map =
        internalGetTeamStates().getMap();
    if (!map.containsKey(key)) {
      throw new java.lang.IllegalArgumentException();
    }
    return map.get(key);
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
    if (roundNumber_ != 0) {
      output.writeUInt32(1, roundNumber_);
    }
    if (((bitField0_ & 0x00000001) != 0)) {
      output.writeMessage(2, getInfo());
    }
    com.google.protobuf.GeneratedMessage
      .serializeStringMapTo(
        output,
        internalGetTeamStates(),
        TeamStatesDefaultEntryHolder.defaultEntry,
        4);
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (roundNumber_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeUInt32Size(1, roundNumber_);
    }
    if (((bitField0_ & 0x00000001) != 0)) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(2, getInfo());
    }
    for (java.util.Map.Entry<java.lang.String, com.bragi.CS2PreviousTeamRoundState> entry
         : internalGetTeamStates().getMap().entrySet()) {
      com.google.protobuf.MapEntry<java.lang.String, com.bragi.CS2PreviousTeamRoundState>
      teamStates__ = TeamStatesDefaultEntryHolder.defaultEntry.newBuilderForType()
          .setKey(entry.getKey())
          .setValue(entry.getValue())
          .build();
      size += com.google.protobuf.CodedOutputStream
          .computeMessageSize(4, teamStates__);
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
    if (!(obj instanceof com.bragi.CS2PreviousRoundState)) {
      return super.equals(obj);
    }
    com.bragi.CS2PreviousRoundState other = (com.bragi.CS2PreviousRoundState) obj;

    if (getRoundNumber()
        != other.getRoundNumber()) return false;
    if (hasInfo() != other.hasInfo()) return false;
    if (hasInfo()) {
      if (!getInfo()
          .equals(other.getInfo())) return false;
    }
    if (!internalGetTeamStates().equals(
        other.internalGetTeamStates())) return false;
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
    hash = (37 * hash) + ROUND_NUMBER_FIELD_NUMBER;
    hash = (53 * hash) + getRoundNumber();
    if (hasInfo()) {
      hash = (37 * hash) + INFO_FIELD_NUMBER;
      hash = (53 * hash) + getInfo().hashCode();
    }
    if (!internalGetTeamStates().getMap().isEmpty()) {
      hash = (37 * hash) + TEAM_STATES_FIELD_NUMBER;
      hash = (53 * hash) + internalGetTeamStates().hashCode();
    }
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.bragi.CS2PreviousRoundState parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.bragi.CS2PreviousRoundState parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.bragi.CS2PreviousRoundState parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.bragi.CS2PreviousRoundState parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.bragi.CS2PreviousRoundState parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.bragi.CS2PreviousRoundState parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.bragi.CS2PreviousRoundState parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input);
  }
  public static com.bragi.CS2PreviousRoundState parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  public static com.bragi.CS2PreviousRoundState parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseDelimitedWithIOException(PARSER, input);
  }

  public static com.bragi.CS2PreviousRoundState parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.bragi.CS2PreviousRoundState parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input);
  }
  public static com.bragi.CS2PreviousRoundState parseFrom(
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
  public static Builder newBuilder(com.bragi.CS2PreviousRoundState prototype) {
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
   * Protobuf type {@code bragi.CS2PreviousRoundState}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessage.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:bragi.CS2PreviousRoundState)
      com.bragi.CS2PreviousRoundStateOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.bragi.Cs2Proto.internal_static_bragi_CS2PreviousRoundState_descriptor;
    }

    @SuppressWarnings({"rawtypes"})
    protected com.google.protobuf.MapFieldReflectionAccessor internalGetMapFieldReflection(
        int number) {
      switch (number) {
        case 4:
          return internalGetTeamStates();
        default:
          throw new RuntimeException(
              "Invalid map field number: " + number);
      }
    }
    @SuppressWarnings({"rawtypes"})
    protected com.google.protobuf.MapFieldReflectionAccessor internalGetMutableMapFieldReflection(
        int number) {
      switch (number) {
        case 4:
          return internalGetMutableTeamStates();
        default:
          throw new RuntimeException(
              "Invalid map field number: " + number);
      }
    }
    @java.lang.Override
    protected com.google.protobuf.GeneratedMessage.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.bragi.Cs2Proto.internal_static_bragi_CS2PreviousRoundState_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.bragi.CS2PreviousRoundState.class, com.bragi.CS2PreviousRoundState.Builder.class);
    }

    // Construct using com.bragi.CS2PreviousRoundState.newBuilder()
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
        getInfoFieldBuilder();
      }
    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      bitField0_ = 0;
      roundNumber_ = 0;
      info_ = null;
      if (infoBuilder_ != null) {
        infoBuilder_.dispose();
        infoBuilder_ = null;
      }
      internalGetMutableTeamStates().clear();
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.bragi.Cs2Proto.internal_static_bragi_CS2PreviousRoundState_descriptor;
    }

    @java.lang.Override
    public com.bragi.CS2PreviousRoundState getDefaultInstanceForType() {
      return com.bragi.CS2PreviousRoundState.getDefaultInstance();
    }

    @java.lang.Override
    public com.bragi.CS2PreviousRoundState build() {
      com.bragi.CS2PreviousRoundState result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.bragi.CS2PreviousRoundState buildPartial() {
      com.bragi.CS2PreviousRoundState result = new com.bragi.CS2PreviousRoundState(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(com.bragi.CS2PreviousRoundState result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.roundNumber_ = roundNumber_;
      }
      int to_bitField0_ = 0;
      if (((from_bitField0_ & 0x00000002) != 0)) {
        result.info_ = infoBuilder_ == null
            ? info_
            : infoBuilder_.build();
        to_bitField0_ |= 0x00000001;
      }
      if (((from_bitField0_ & 0x00000004) != 0)) {
        result.teamStates_ = internalGetTeamStates().build(TeamStatesDefaultEntryHolder.defaultEntry);
      }
      result.bitField0_ |= to_bitField0_;
    }

    @java.lang.Override
    public Builder mergeFrom(com.google.protobuf.Message other) {
      if (other instanceof com.bragi.CS2PreviousRoundState) {
        return mergeFrom((com.bragi.CS2PreviousRoundState)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.bragi.CS2PreviousRoundState other) {
      if (other == com.bragi.CS2PreviousRoundState.getDefaultInstance()) return this;
      if (other.getRoundNumber() != 0) {
        setRoundNumber(other.getRoundNumber());
      }
      if (other.hasInfo()) {
        mergeInfo(other.getInfo());
      }
      internalGetMutableTeamStates().mergeFrom(
          other.internalGetTeamStates());
      bitField0_ |= 0x00000004;
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
            case 8: {
              roundNumber_ = input.readUInt32();
              bitField0_ |= 0x00000001;
              break;
            } // case 8
            case 18: {
              input.readMessage(
                  getInfoFieldBuilder().getBuilder(),
                  extensionRegistry);
              bitField0_ |= 0x00000002;
              break;
            } // case 18
            case 34: {
              com.google.protobuf.MapEntry<java.lang.String, com.bragi.CS2PreviousTeamRoundState>
              teamStates__ = input.readMessage(
                  TeamStatesDefaultEntryHolder.defaultEntry.getParserForType(), extensionRegistry);
              internalGetMutableTeamStates().ensureBuilderMap().put(
                  teamStates__.getKey(), teamStates__.getValue());
              bitField0_ |= 0x00000004;
              break;
            } // case 34
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

    private int roundNumber_ ;
    /**
     * <code>uint32 round_number = 1 [json_name = "roundNumber"];</code>
     * @return The roundNumber.
     */
    @java.lang.Override
    public int getRoundNumber() {
      return roundNumber_;
    }
    /**
     * <code>uint32 round_number = 1 [json_name = "roundNumber"];</code>
     * @param value The roundNumber to set.
     * @return This builder for chaining.
     */
    public Builder setRoundNumber(int value) {

      roundNumber_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>uint32 round_number = 1 [json_name = "roundNumber"];</code>
     * @return This builder for chaining.
     */
    public Builder clearRoundNumber() {
      bitField0_ = (bitField0_ & ~0x00000001);
      roundNumber_ = 0;
      onChanged();
      return this;
    }

    private com.bragi.CS2RoundInfoState info_;
    private com.google.protobuf.SingleFieldBuilder<
        com.bragi.CS2RoundInfoState, com.bragi.CS2RoundInfoState.Builder, com.bragi.CS2RoundInfoStateOrBuilder> infoBuilder_;
    /**
     * <code>.bragi.CS2RoundInfoState info = 2 [json_name = "info"];</code>
     * @return Whether the info field is set.
     */
    public boolean hasInfo() {
      return ((bitField0_ & 0x00000002) != 0);
    }
    /**
     * <code>.bragi.CS2RoundInfoState info = 2 [json_name = "info"];</code>
     * @return The info.
     */
    public com.bragi.CS2RoundInfoState getInfo() {
      if (infoBuilder_ == null) {
        return info_ == null ? com.bragi.CS2RoundInfoState.getDefaultInstance() : info_;
      } else {
        return infoBuilder_.getMessage();
      }
    }
    /**
     * <code>.bragi.CS2RoundInfoState info = 2 [json_name = "info"];</code>
     */
    public Builder setInfo(com.bragi.CS2RoundInfoState value) {
      if (infoBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        info_ = value;
      } else {
        infoBuilder_.setMessage(value);
      }
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>.bragi.CS2RoundInfoState info = 2 [json_name = "info"];</code>
     */
    public Builder setInfo(
        com.bragi.CS2RoundInfoState.Builder builderForValue) {
      if (infoBuilder_ == null) {
        info_ = builderForValue.build();
      } else {
        infoBuilder_.setMessage(builderForValue.build());
      }
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>.bragi.CS2RoundInfoState info = 2 [json_name = "info"];</code>
     */
    public Builder mergeInfo(com.bragi.CS2RoundInfoState value) {
      if (infoBuilder_ == null) {
        if (((bitField0_ & 0x00000002) != 0) &&
          info_ != null &&
          info_ != com.bragi.CS2RoundInfoState.getDefaultInstance()) {
          getInfoBuilder().mergeFrom(value);
        } else {
          info_ = value;
        }
      } else {
        infoBuilder_.mergeFrom(value);
      }
      if (info_ != null) {
        bitField0_ |= 0x00000002;
        onChanged();
      }
      return this;
    }
    /**
     * <code>.bragi.CS2RoundInfoState info = 2 [json_name = "info"];</code>
     */
    public Builder clearInfo() {
      bitField0_ = (bitField0_ & ~0x00000002);
      info_ = null;
      if (infoBuilder_ != null) {
        infoBuilder_.dispose();
        infoBuilder_ = null;
      }
      onChanged();
      return this;
    }
    /**
     * <code>.bragi.CS2RoundInfoState info = 2 [json_name = "info"];</code>
     */
    public com.bragi.CS2RoundInfoState.Builder getInfoBuilder() {
      bitField0_ |= 0x00000002;
      onChanged();
      return getInfoFieldBuilder().getBuilder();
    }
    /**
     * <code>.bragi.CS2RoundInfoState info = 2 [json_name = "info"];</code>
     */
    public com.bragi.CS2RoundInfoStateOrBuilder getInfoOrBuilder() {
      if (infoBuilder_ != null) {
        return infoBuilder_.getMessageOrBuilder();
      } else {
        return info_ == null ?
            com.bragi.CS2RoundInfoState.getDefaultInstance() : info_;
      }
    }
    /**
     * <code>.bragi.CS2RoundInfoState info = 2 [json_name = "info"];</code>
     */
    private com.google.protobuf.SingleFieldBuilder<
        com.bragi.CS2RoundInfoState, com.bragi.CS2RoundInfoState.Builder, com.bragi.CS2RoundInfoStateOrBuilder> 
        getInfoFieldBuilder() {
      if (infoBuilder_ == null) {
        infoBuilder_ = new com.google.protobuf.SingleFieldBuilder<
            com.bragi.CS2RoundInfoState, com.bragi.CS2RoundInfoState.Builder, com.bragi.CS2RoundInfoStateOrBuilder>(
                getInfo(),
                getParentForChildren(),
                isClean());
        info_ = null;
      }
      return infoBuilder_;
    }

    private static final class TeamStatesConverter implements com.google.protobuf.MapFieldBuilder.Converter<java.lang.String, com.bragi.CS2PreviousTeamRoundStateOrBuilder, com.bragi.CS2PreviousTeamRoundState> {
      @java.lang.Override
      public com.bragi.CS2PreviousTeamRoundState build(com.bragi.CS2PreviousTeamRoundStateOrBuilder val) {
        if (val instanceof com.bragi.CS2PreviousTeamRoundState) { return (com.bragi.CS2PreviousTeamRoundState) val; }
        return ((com.bragi.CS2PreviousTeamRoundState.Builder) val).build();
      }

      @java.lang.Override
      public com.google.protobuf.MapEntry<java.lang.String, com.bragi.CS2PreviousTeamRoundState> defaultEntry() {
        return TeamStatesDefaultEntryHolder.defaultEntry;
      }
    };
    private static final TeamStatesConverter teamStatesConverter = new TeamStatesConverter();

    private com.google.protobuf.MapFieldBuilder<
        java.lang.String, com.bragi.CS2PreviousTeamRoundStateOrBuilder, com.bragi.CS2PreviousTeamRoundState, com.bragi.CS2PreviousTeamRoundState.Builder> teamStates_;
    private com.google.protobuf.MapFieldBuilder<java.lang.String, com.bragi.CS2PreviousTeamRoundStateOrBuilder, com.bragi.CS2PreviousTeamRoundState, com.bragi.CS2PreviousTeamRoundState.Builder>
        internalGetTeamStates() {
      if (teamStates_ == null) {
        return new com.google.protobuf.MapFieldBuilder<>(teamStatesConverter);
      }
      return teamStates_;
    }
    private com.google.protobuf.MapFieldBuilder<java.lang.String, com.bragi.CS2PreviousTeamRoundStateOrBuilder, com.bragi.CS2PreviousTeamRoundState, com.bragi.CS2PreviousTeamRoundState.Builder>
        internalGetMutableTeamStates() {
      if (teamStates_ == null) {
        teamStates_ = new com.google.protobuf.MapFieldBuilder<>(teamStatesConverter);
      }
      bitField0_ |= 0x00000004;
      onChanged();
      return teamStates_;
    }
    public int getTeamStatesCount() {
      return internalGetTeamStates().ensureBuilderMap().size();
    }
    /**
     * <pre>
     * keys are type of team_urn
     * </pre>
     *
     * <code>map&lt;string, .bragi.CS2PreviousTeamRoundState&gt; team_states = 4 [json_name = "teamStates"];</code>
     */
    @java.lang.Override
    public boolean containsTeamStates(
        java.lang.String key) {
      if (key == null) { throw new NullPointerException("map key"); }
      return internalGetTeamStates().ensureBuilderMap().containsKey(key);
    }
    /**
     * Use {@link #getTeamStatesMap()} instead.
     */
    @java.lang.Override
    @java.lang.Deprecated
    public java.util.Map<java.lang.String, com.bragi.CS2PreviousTeamRoundState> getTeamStates() {
      return getTeamStatesMap();
    }
    /**
     * <pre>
     * keys are type of team_urn
     * </pre>
     *
     * <code>map&lt;string, .bragi.CS2PreviousTeamRoundState&gt; team_states = 4 [json_name = "teamStates"];</code>
     */
    @java.lang.Override
    public java.util.Map<java.lang.String, com.bragi.CS2PreviousTeamRoundState> getTeamStatesMap() {
      return internalGetTeamStates().getImmutableMap();
    }
    /**
     * <pre>
     * keys are type of team_urn
     * </pre>
     *
     * <code>map&lt;string, .bragi.CS2PreviousTeamRoundState&gt; team_states = 4 [json_name = "teamStates"];</code>
     */
    @java.lang.Override
    public /* nullable */
com.bragi.CS2PreviousTeamRoundState getTeamStatesOrDefault(
        java.lang.String key,
        /* nullable */
com.bragi.CS2PreviousTeamRoundState defaultValue) {
      if (key == null) { throw new NullPointerException("map key"); }
      java.util.Map<java.lang.String, com.bragi.CS2PreviousTeamRoundStateOrBuilder> map = internalGetMutableTeamStates().ensureBuilderMap();
      return map.containsKey(key) ? teamStatesConverter.build(map.get(key)) : defaultValue;
    }
    /**
     * <pre>
     * keys are type of team_urn
     * </pre>
     *
     * <code>map&lt;string, .bragi.CS2PreviousTeamRoundState&gt; team_states = 4 [json_name = "teamStates"];</code>
     */
    @java.lang.Override
    public com.bragi.CS2PreviousTeamRoundState getTeamStatesOrThrow(
        java.lang.String key) {
      if (key == null) { throw new NullPointerException("map key"); }
      java.util.Map<java.lang.String, com.bragi.CS2PreviousTeamRoundStateOrBuilder> map = internalGetMutableTeamStates().ensureBuilderMap();
      if (!map.containsKey(key)) {
        throw new java.lang.IllegalArgumentException();
      }
      return teamStatesConverter.build(map.get(key));
    }
    public Builder clearTeamStates() {
      bitField0_ = (bitField0_ & ~0x00000004);
      internalGetMutableTeamStates().clear();
      return this;
    }
    /**
     * <pre>
     * keys are type of team_urn
     * </pre>
     *
     * <code>map&lt;string, .bragi.CS2PreviousTeamRoundState&gt; team_states = 4 [json_name = "teamStates"];</code>
     */
    public Builder removeTeamStates(
        java.lang.String key) {
      if (key == null) { throw new NullPointerException("map key"); }
      internalGetMutableTeamStates().ensureBuilderMap()
          .remove(key);
      return this;
    }
    /**
     * Use alternate mutation accessors instead.
     */
    @java.lang.Deprecated
    public java.util.Map<java.lang.String, com.bragi.CS2PreviousTeamRoundState>
        getMutableTeamStates() {
      bitField0_ |= 0x00000004;
      return internalGetMutableTeamStates().ensureMessageMap();
    }
    /**
     * <pre>
     * keys are type of team_urn
     * </pre>
     *
     * <code>map&lt;string, .bragi.CS2PreviousTeamRoundState&gt; team_states = 4 [json_name = "teamStates"];</code>
     */
    public Builder putTeamStates(
        java.lang.String key,
        com.bragi.CS2PreviousTeamRoundState value) {
      if (key == null) { throw new NullPointerException("map key"); }
      if (value == null) { throw new NullPointerException("map value"); }
      internalGetMutableTeamStates().ensureBuilderMap()
          .put(key, value);
      bitField0_ |= 0x00000004;
      return this;
    }
    /**
     * <pre>
     * keys are type of team_urn
     * </pre>
     *
     * <code>map&lt;string, .bragi.CS2PreviousTeamRoundState&gt; team_states = 4 [json_name = "teamStates"];</code>
     */
    public Builder putAllTeamStates(
        java.util.Map<java.lang.String, com.bragi.CS2PreviousTeamRoundState> values) {
      for (java.util.Map.Entry<java.lang.String, com.bragi.CS2PreviousTeamRoundState> e : values.entrySet()) {
        if (e.getKey() == null || e.getValue() == null) {
          throw new NullPointerException();
        }
      }
      internalGetMutableTeamStates().ensureBuilderMap()
          .putAll(values);
      bitField0_ |= 0x00000004;
      return this;
    }
    /**
     * <pre>
     * keys are type of team_urn
     * </pre>
     *
     * <code>map&lt;string, .bragi.CS2PreviousTeamRoundState&gt; team_states = 4 [json_name = "teamStates"];</code>
     */
    public com.bragi.CS2PreviousTeamRoundState.Builder putTeamStatesBuilderIfAbsent(
        java.lang.String key) {
      java.util.Map<java.lang.String, com.bragi.CS2PreviousTeamRoundStateOrBuilder> builderMap = internalGetMutableTeamStates().ensureBuilderMap();
      com.bragi.CS2PreviousTeamRoundStateOrBuilder entry = builderMap.get(key);
      if (entry == null) {
        entry = com.bragi.CS2PreviousTeamRoundState.newBuilder();
        builderMap.put(key, entry);
      }
      if (entry instanceof com.bragi.CS2PreviousTeamRoundState) {
        entry = ((com.bragi.CS2PreviousTeamRoundState) entry).toBuilder();
        builderMap.put(key, entry);
      }
      return (com.bragi.CS2PreviousTeamRoundState.Builder) entry;
    }

    // @@protoc_insertion_point(builder_scope:bragi.CS2PreviousRoundState)
  }

  // @@protoc_insertion_point(class_scope:bragi.CS2PreviousRoundState)
  private static final com.bragi.CS2PreviousRoundState DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.bragi.CS2PreviousRoundState();
  }

  public static com.bragi.CS2PreviousRoundState getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<CS2PreviousRoundState>
      PARSER = new com.google.protobuf.AbstractParser<CS2PreviousRoundState>() {
    @java.lang.Override
    public CS2PreviousRoundState parsePartialFrom(
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

  public static com.google.protobuf.Parser<CS2PreviousRoundState> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<CS2PreviousRoundState> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.bragi.CS2PreviousRoundState getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

