// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: bragi/valorant.proto
// Protobuf Java Version: 4.29.3

package com.bragi;

/**
 * Protobuf type {@code bragi.ValorantPreviousRound}
 */
public final class ValorantPreviousRound extends
    com.google.protobuf.GeneratedMessage implements
    // @@protoc_insertion_point(message_implements:bragi.ValorantPreviousRound)
    ValorantPreviousRoundOrBuilder {
private static final long serialVersionUID = 0L;
  static {
    com.google.protobuf.RuntimeVersion.validateProtobufGencodeVersion(
      com.google.protobuf.RuntimeVersion.RuntimeDomain.PUBLIC,
      /* major= */ 4,
      /* minor= */ 29,
      /* patch= */ 3,
      /* suffix= */ "",
      ValorantPreviousRound.class.getName());
  }
  // Use ValorantPreviousRound.newBuilder() to construct.
  private ValorantPreviousRound(com.google.protobuf.GeneratedMessage.Builder<?> builder) {
    super(builder);
  }
  private ValorantPreviousRound() {
    outcome_ = 0;
  }

  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.bragi.ValorantProto.internal_static_bragi_ValorantPreviousRound_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.bragi.ValorantProto.internal_static_bragi_ValorantPreviousRound_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.bragi.ValorantPreviousRound.class, com.bragi.ValorantPreviousRound.Builder.class);
  }

  public static final int NUMBER_FIELD_NUMBER = 1;
  private int number_ = 0;
  /**
   * <code>uint32 number = 1 [json_name = "number"];</code>
   * @return The number.
   */
  @java.lang.Override
  public int getNumber() {
    return number_;
  }

  public static final int OUTCOME_FIELD_NUMBER = 2;
  private int outcome_ = 0;
  /**
   * <code>.bragi.ValorantRoundOutcome outcome = 2 [json_name = "outcome"];</code>
   * @return The enum numeric value on the wire for outcome.
   */
  @java.lang.Override public int getOutcomeValue() {
    return outcome_;
  }
  /**
   * <code>.bragi.ValorantRoundOutcome outcome = 2 [json_name = "outcome"];</code>
   * @return The outcome.
   */
  @java.lang.Override public com.bragi.ValorantRoundOutcome getOutcome() {
    com.bragi.ValorantRoundOutcome result = com.bragi.ValorantRoundOutcome.forNumber(outcome_);
    return result == null ? com.bragi.ValorantRoundOutcome.UNRECOGNIZED : result;
  }

  public static final int HOME_WON_FIELD_NUMBER = 3;
  private boolean homeWon_ = false;
  /**
   * <code>bool home_won = 3 [json_name = "homeWon"];</code>
   * @return The homeWon.
   */
  @java.lang.Override
  public boolean getHomeWon() {
    return homeWon_;
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
    if (number_ != 0) {
      output.writeUInt32(1, number_);
    }
    if (outcome_ != com.bragi.ValorantRoundOutcome.VALORANT_ROUND_OUTCOME_UNSPECIFIED.getNumber()) {
      output.writeEnum(2, outcome_);
    }
    if (homeWon_ != false) {
      output.writeBool(3, homeWon_);
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (number_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeUInt32Size(1, number_);
    }
    if (outcome_ != com.bragi.ValorantRoundOutcome.VALORANT_ROUND_OUTCOME_UNSPECIFIED.getNumber()) {
      size += com.google.protobuf.CodedOutputStream
        .computeEnumSize(2, outcome_);
    }
    if (homeWon_ != false) {
      size += com.google.protobuf.CodedOutputStream
        .computeBoolSize(3, homeWon_);
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
    if (!(obj instanceof com.bragi.ValorantPreviousRound)) {
      return super.equals(obj);
    }
    com.bragi.ValorantPreviousRound other = (com.bragi.ValorantPreviousRound) obj;

    if (getNumber()
        != other.getNumber()) return false;
    if (outcome_ != other.outcome_) return false;
    if (getHomeWon()
        != other.getHomeWon()) return false;
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
    hash = (37 * hash) + NUMBER_FIELD_NUMBER;
    hash = (53 * hash) + getNumber();
    hash = (37 * hash) + OUTCOME_FIELD_NUMBER;
    hash = (53 * hash) + outcome_;
    hash = (37 * hash) + HOME_WON_FIELD_NUMBER;
    hash = (53 * hash) + com.google.protobuf.Internal.hashBoolean(
        getHomeWon());
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.bragi.ValorantPreviousRound parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.bragi.ValorantPreviousRound parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.bragi.ValorantPreviousRound parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.bragi.ValorantPreviousRound parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.bragi.ValorantPreviousRound parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.bragi.ValorantPreviousRound parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.bragi.ValorantPreviousRound parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input);
  }
  public static com.bragi.ValorantPreviousRound parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  public static com.bragi.ValorantPreviousRound parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseDelimitedWithIOException(PARSER, input);
  }

  public static com.bragi.ValorantPreviousRound parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.bragi.ValorantPreviousRound parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input);
  }
  public static com.bragi.ValorantPreviousRound parseFrom(
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
  public static Builder newBuilder(com.bragi.ValorantPreviousRound prototype) {
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
   * Protobuf type {@code bragi.ValorantPreviousRound}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessage.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:bragi.ValorantPreviousRound)
      com.bragi.ValorantPreviousRoundOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.bragi.ValorantProto.internal_static_bragi_ValorantPreviousRound_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessage.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.bragi.ValorantProto.internal_static_bragi_ValorantPreviousRound_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.bragi.ValorantPreviousRound.class, com.bragi.ValorantPreviousRound.Builder.class);
    }

    // Construct using com.bragi.ValorantPreviousRound.newBuilder()
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
      number_ = 0;
      outcome_ = 0;
      homeWon_ = false;
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.bragi.ValorantProto.internal_static_bragi_ValorantPreviousRound_descriptor;
    }

    @java.lang.Override
    public com.bragi.ValorantPreviousRound getDefaultInstanceForType() {
      return com.bragi.ValorantPreviousRound.getDefaultInstance();
    }

    @java.lang.Override
    public com.bragi.ValorantPreviousRound build() {
      com.bragi.ValorantPreviousRound result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.bragi.ValorantPreviousRound buildPartial() {
      com.bragi.ValorantPreviousRound result = new com.bragi.ValorantPreviousRound(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(com.bragi.ValorantPreviousRound result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.number_ = number_;
      }
      if (((from_bitField0_ & 0x00000002) != 0)) {
        result.outcome_ = outcome_;
      }
      if (((from_bitField0_ & 0x00000004) != 0)) {
        result.homeWon_ = homeWon_;
      }
    }

    @java.lang.Override
    public Builder mergeFrom(com.google.protobuf.Message other) {
      if (other instanceof com.bragi.ValorantPreviousRound) {
        return mergeFrom((com.bragi.ValorantPreviousRound)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.bragi.ValorantPreviousRound other) {
      if (other == com.bragi.ValorantPreviousRound.getDefaultInstance()) return this;
      if (other.getNumber() != 0) {
        setNumber(other.getNumber());
      }
      if (other.outcome_ != 0) {
        setOutcomeValue(other.getOutcomeValue());
      }
      if (other.getHomeWon() != false) {
        setHomeWon(other.getHomeWon());
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
            case 8: {
              number_ = input.readUInt32();
              bitField0_ |= 0x00000001;
              break;
            } // case 8
            case 16: {
              outcome_ = input.readEnum();
              bitField0_ |= 0x00000002;
              break;
            } // case 16
            case 24: {
              homeWon_ = input.readBool();
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

    private int number_ ;
    /**
     * <code>uint32 number = 1 [json_name = "number"];</code>
     * @return The number.
     */
    @java.lang.Override
    public int getNumber() {
      return number_;
    }
    /**
     * <code>uint32 number = 1 [json_name = "number"];</code>
     * @param value The number to set.
     * @return This builder for chaining.
     */
    public Builder setNumber(int value) {

      number_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>uint32 number = 1 [json_name = "number"];</code>
     * @return This builder for chaining.
     */
    public Builder clearNumber() {
      bitField0_ = (bitField0_ & ~0x00000001);
      number_ = 0;
      onChanged();
      return this;
    }

    private int outcome_ = 0;
    /**
     * <code>.bragi.ValorantRoundOutcome outcome = 2 [json_name = "outcome"];</code>
     * @return The enum numeric value on the wire for outcome.
     */
    @java.lang.Override public int getOutcomeValue() {
      return outcome_;
    }
    /**
     * <code>.bragi.ValorantRoundOutcome outcome = 2 [json_name = "outcome"];</code>
     * @param value The enum numeric value on the wire for outcome to set.
     * @return This builder for chaining.
     */
    public Builder setOutcomeValue(int value) {
      outcome_ = value;
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>.bragi.ValorantRoundOutcome outcome = 2 [json_name = "outcome"];</code>
     * @return The outcome.
     */
    @java.lang.Override
    public com.bragi.ValorantRoundOutcome getOutcome() {
      com.bragi.ValorantRoundOutcome result = com.bragi.ValorantRoundOutcome.forNumber(outcome_);
      return result == null ? com.bragi.ValorantRoundOutcome.UNRECOGNIZED : result;
    }
    /**
     * <code>.bragi.ValorantRoundOutcome outcome = 2 [json_name = "outcome"];</code>
     * @param value The outcome to set.
     * @return This builder for chaining.
     */
    public Builder setOutcome(com.bragi.ValorantRoundOutcome value) {
      if (value == null) {
        throw new NullPointerException();
      }
      bitField0_ |= 0x00000002;
      outcome_ = value.getNumber();
      onChanged();
      return this;
    }
    /**
     * <code>.bragi.ValorantRoundOutcome outcome = 2 [json_name = "outcome"];</code>
     * @return This builder for chaining.
     */
    public Builder clearOutcome() {
      bitField0_ = (bitField0_ & ~0x00000002);
      outcome_ = 0;
      onChanged();
      return this;
    }

    private boolean homeWon_ ;
    /**
     * <code>bool home_won = 3 [json_name = "homeWon"];</code>
     * @return The homeWon.
     */
    @java.lang.Override
    public boolean getHomeWon() {
      return homeWon_;
    }
    /**
     * <code>bool home_won = 3 [json_name = "homeWon"];</code>
     * @param value The homeWon to set.
     * @return This builder for chaining.
     */
    public Builder setHomeWon(boolean value) {

      homeWon_ = value;
      bitField0_ |= 0x00000004;
      onChanged();
      return this;
    }
    /**
     * <code>bool home_won = 3 [json_name = "homeWon"];</code>
     * @return This builder for chaining.
     */
    public Builder clearHomeWon() {
      bitField0_ = (bitField0_ & ~0x00000004);
      homeWon_ = false;
      onChanged();
      return this;
    }

    // @@protoc_insertion_point(builder_scope:bragi.ValorantPreviousRound)
  }

  // @@protoc_insertion_point(class_scope:bragi.ValorantPreviousRound)
  private static final com.bragi.ValorantPreviousRound DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.bragi.ValorantPreviousRound();
  }

  public static com.bragi.ValorantPreviousRound getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<ValorantPreviousRound>
      PARSER = new com.google.protobuf.AbstractParser<ValorantPreviousRound>() {
    @java.lang.Override
    public ValorantPreviousRound parsePartialFrom(
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

  public static com.google.protobuf.Parser<ValorantPreviousRound> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<ValorantPreviousRound> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.bragi.ValorantPreviousRound getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

