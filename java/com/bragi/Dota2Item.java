// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: bragi/dota2.proto
// Protobuf Java Version: 4.29.3

package com.bragi;

/**
 * Protobuf type {@code bragi.Dota2Item}
 */
public final class Dota2Item extends
    com.google.protobuf.GeneratedMessage implements
    // @@protoc_insertion_point(message_implements:bragi.Dota2Item)
    Dota2ItemOrBuilder {
private static final long serialVersionUID = 0L;
  static {
    com.google.protobuf.RuntimeVersion.validateProtobufGencodeVersion(
      com.google.protobuf.RuntimeVersion.RuntimeDomain.PUBLIC,
      /* major= */ 4,
      /* minor= */ 29,
      /* patch= */ 3,
      /* suffix= */ "",
      Dota2Item.class.getName());
  }
  // Use Dota2Item.newBuilder() to construct.
  private Dota2Item(com.google.protobuf.GeneratedMessage.Builder<?> builder) {
    super(builder);
  }
  private Dota2Item() {
    name_ = "";
    position_ = 0;
  }

  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.bragi.Dota2Proto.internal_static_bragi_Dota2Item_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.bragi.Dota2Proto.internal_static_bragi_Dota2Item_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.bragi.Dota2Item.class, com.bragi.Dota2Item.Builder.class);
  }

  private int bitField0_;
  public static final int NAME_FIELD_NUMBER = 1;
  @SuppressWarnings("serial")
  private volatile java.lang.Object name_ = "";
  /**
   * <code>string name = 1 [json_name = "name"];</code>
   * @return The name.
   */
  @java.lang.Override
  public java.lang.String getName() {
    java.lang.Object ref = name_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      name_ = s;
      return s;
    }
  }
  /**
   * <code>string name = 1 [json_name = "name"];</code>
   * @return The bytes for name.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getNameBytes() {
    java.lang.Object ref = name_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      name_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int COOLDOWN_FIELD_NUMBER = 2;
  private int cooldown_ = 0;
  /**
   * <code>optional int32 cooldown = 2 [json_name = "cooldown"];</code>
   * @return Whether the cooldown field is set.
   */
  @java.lang.Override
  public boolean hasCooldown() {
    return ((bitField0_ & 0x00000001) != 0);
  }
  /**
   * <code>optional int32 cooldown = 2 [json_name = "cooldown"];</code>
   * @return The cooldown.
   */
  @java.lang.Override
  public int getCooldown() {
    return cooldown_;
  }

  public static final int POSITION_FIELD_NUMBER = 3;
  private int position_ = 0;
  /**
   * <code>.bragi.Dota2ItemPosition position = 3 [json_name = "position"];</code>
   * @return The enum numeric value on the wire for position.
   */
  @java.lang.Override public int getPositionValue() {
    return position_;
  }
  /**
   * <code>.bragi.Dota2ItemPosition position = 3 [json_name = "position"];</code>
   * @return The position.
   */
  @java.lang.Override public com.bragi.Dota2ItemPosition getPosition() {
    com.bragi.Dota2ItemPosition result = com.bragi.Dota2ItemPosition.forNumber(position_);
    return result == null ? com.bragi.Dota2ItemPosition.UNRECOGNIZED : result;
  }

  public static final int LEVEL_FIELD_NUMBER = 4;
  private int level_ = 0;
  /**
   * <code>uint32 level = 4 [json_name = "level"];</code>
   * @return The level.
   */
  @java.lang.Override
  public int getLevel() {
    return level_;
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
    if (!com.google.protobuf.GeneratedMessage.isStringEmpty(name_)) {
      com.google.protobuf.GeneratedMessage.writeString(output, 1, name_);
    }
    if (((bitField0_ & 0x00000001) != 0)) {
      output.writeInt32(2, cooldown_);
    }
    if (position_ != com.bragi.Dota2ItemPosition.DOTA2_ITEM_POSITION_UNSPECIFIED.getNumber()) {
      output.writeEnum(3, position_);
    }
    if (level_ != 0) {
      output.writeUInt32(4, level_);
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!com.google.protobuf.GeneratedMessage.isStringEmpty(name_)) {
      size += com.google.protobuf.GeneratedMessage.computeStringSize(1, name_);
    }
    if (((bitField0_ & 0x00000001) != 0)) {
      size += com.google.protobuf.CodedOutputStream
        .computeInt32Size(2, cooldown_);
    }
    if (position_ != com.bragi.Dota2ItemPosition.DOTA2_ITEM_POSITION_UNSPECIFIED.getNumber()) {
      size += com.google.protobuf.CodedOutputStream
        .computeEnumSize(3, position_);
    }
    if (level_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeUInt32Size(4, level_);
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
    if (!(obj instanceof com.bragi.Dota2Item)) {
      return super.equals(obj);
    }
    com.bragi.Dota2Item other = (com.bragi.Dota2Item) obj;

    if (!getName()
        .equals(other.getName())) return false;
    if (hasCooldown() != other.hasCooldown()) return false;
    if (hasCooldown()) {
      if (getCooldown()
          != other.getCooldown()) return false;
    }
    if (position_ != other.position_) return false;
    if (getLevel()
        != other.getLevel()) return false;
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
    hash = (37 * hash) + NAME_FIELD_NUMBER;
    hash = (53 * hash) + getName().hashCode();
    if (hasCooldown()) {
      hash = (37 * hash) + COOLDOWN_FIELD_NUMBER;
      hash = (53 * hash) + getCooldown();
    }
    hash = (37 * hash) + POSITION_FIELD_NUMBER;
    hash = (53 * hash) + position_;
    hash = (37 * hash) + LEVEL_FIELD_NUMBER;
    hash = (53 * hash) + getLevel();
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.bragi.Dota2Item parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.bragi.Dota2Item parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.bragi.Dota2Item parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.bragi.Dota2Item parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.bragi.Dota2Item parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.bragi.Dota2Item parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.bragi.Dota2Item parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input);
  }
  public static com.bragi.Dota2Item parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  public static com.bragi.Dota2Item parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseDelimitedWithIOException(PARSER, input);
  }

  public static com.bragi.Dota2Item parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.bragi.Dota2Item parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input);
  }
  public static com.bragi.Dota2Item parseFrom(
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
  public static Builder newBuilder(com.bragi.Dota2Item prototype) {
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
   * Protobuf type {@code bragi.Dota2Item}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessage.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:bragi.Dota2Item)
      com.bragi.Dota2ItemOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.bragi.Dota2Proto.internal_static_bragi_Dota2Item_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessage.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.bragi.Dota2Proto.internal_static_bragi_Dota2Item_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.bragi.Dota2Item.class, com.bragi.Dota2Item.Builder.class);
    }

    // Construct using com.bragi.Dota2Item.newBuilder()
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
      name_ = "";
      cooldown_ = 0;
      position_ = 0;
      level_ = 0;
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.bragi.Dota2Proto.internal_static_bragi_Dota2Item_descriptor;
    }

    @java.lang.Override
    public com.bragi.Dota2Item getDefaultInstanceForType() {
      return com.bragi.Dota2Item.getDefaultInstance();
    }

    @java.lang.Override
    public com.bragi.Dota2Item build() {
      com.bragi.Dota2Item result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.bragi.Dota2Item buildPartial() {
      com.bragi.Dota2Item result = new com.bragi.Dota2Item(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(com.bragi.Dota2Item result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.name_ = name_;
      }
      int to_bitField0_ = 0;
      if (((from_bitField0_ & 0x00000002) != 0)) {
        result.cooldown_ = cooldown_;
        to_bitField0_ |= 0x00000001;
      }
      if (((from_bitField0_ & 0x00000004) != 0)) {
        result.position_ = position_;
      }
      if (((from_bitField0_ & 0x00000008) != 0)) {
        result.level_ = level_;
      }
      result.bitField0_ |= to_bitField0_;
    }

    @java.lang.Override
    public Builder mergeFrom(com.google.protobuf.Message other) {
      if (other instanceof com.bragi.Dota2Item) {
        return mergeFrom((com.bragi.Dota2Item)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.bragi.Dota2Item other) {
      if (other == com.bragi.Dota2Item.getDefaultInstance()) return this;
      if (!other.getName().isEmpty()) {
        name_ = other.name_;
        bitField0_ |= 0x00000001;
        onChanged();
      }
      if (other.hasCooldown()) {
        setCooldown(other.getCooldown());
      }
      if (other.position_ != 0) {
        setPositionValue(other.getPositionValue());
      }
      if (other.getLevel() != 0) {
        setLevel(other.getLevel());
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
              name_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000001;
              break;
            } // case 10
            case 16: {
              cooldown_ = input.readInt32();
              bitField0_ |= 0x00000002;
              break;
            } // case 16
            case 24: {
              position_ = input.readEnum();
              bitField0_ |= 0x00000004;
              break;
            } // case 24
            case 32: {
              level_ = input.readUInt32();
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

    private java.lang.Object name_ = "";
    /**
     * <code>string name = 1 [json_name = "name"];</code>
     * @return The name.
     */
    public java.lang.String getName() {
      java.lang.Object ref = name_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        name_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string name = 1 [json_name = "name"];</code>
     * @return The bytes for name.
     */
    public com.google.protobuf.ByteString
        getNameBytes() {
      java.lang.Object ref = name_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        name_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string name = 1 [json_name = "name"];</code>
     * @param value The name to set.
     * @return This builder for chaining.
     */
    public Builder setName(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      name_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>string name = 1 [json_name = "name"];</code>
     * @return This builder for chaining.
     */
    public Builder clearName() {
      name_ = getDefaultInstance().getName();
      bitField0_ = (bitField0_ & ~0x00000001);
      onChanged();
      return this;
    }
    /**
     * <code>string name = 1 [json_name = "name"];</code>
     * @param value The bytes for name to set.
     * @return This builder for chaining.
     */
    public Builder setNameBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      name_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }

    private int cooldown_ ;
    /**
     * <code>optional int32 cooldown = 2 [json_name = "cooldown"];</code>
     * @return Whether the cooldown field is set.
     */
    @java.lang.Override
    public boolean hasCooldown() {
      return ((bitField0_ & 0x00000002) != 0);
    }
    /**
     * <code>optional int32 cooldown = 2 [json_name = "cooldown"];</code>
     * @return The cooldown.
     */
    @java.lang.Override
    public int getCooldown() {
      return cooldown_;
    }
    /**
     * <code>optional int32 cooldown = 2 [json_name = "cooldown"];</code>
     * @param value The cooldown to set.
     * @return This builder for chaining.
     */
    public Builder setCooldown(int value) {

      cooldown_ = value;
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>optional int32 cooldown = 2 [json_name = "cooldown"];</code>
     * @return This builder for chaining.
     */
    public Builder clearCooldown() {
      bitField0_ = (bitField0_ & ~0x00000002);
      cooldown_ = 0;
      onChanged();
      return this;
    }

    private int position_ = 0;
    /**
     * <code>.bragi.Dota2ItemPosition position = 3 [json_name = "position"];</code>
     * @return The enum numeric value on the wire for position.
     */
    @java.lang.Override public int getPositionValue() {
      return position_;
    }
    /**
     * <code>.bragi.Dota2ItemPosition position = 3 [json_name = "position"];</code>
     * @param value The enum numeric value on the wire for position to set.
     * @return This builder for chaining.
     */
    public Builder setPositionValue(int value) {
      position_ = value;
      bitField0_ |= 0x00000004;
      onChanged();
      return this;
    }
    /**
     * <code>.bragi.Dota2ItemPosition position = 3 [json_name = "position"];</code>
     * @return The position.
     */
    @java.lang.Override
    public com.bragi.Dota2ItemPosition getPosition() {
      com.bragi.Dota2ItemPosition result = com.bragi.Dota2ItemPosition.forNumber(position_);
      return result == null ? com.bragi.Dota2ItemPosition.UNRECOGNIZED : result;
    }
    /**
     * <code>.bragi.Dota2ItemPosition position = 3 [json_name = "position"];</code>
     * @param value The position to set.
     * @return This builder for chaining.
     */
    public Builder setPosition(com.bragi.Dota2ItemPosition value) {
      if (value == null) {
        throw new NullPointerException();
      }
      bitField0_ |= 0x00000004;
      position_ = value.getNumber();
      onChanged();
      return this;
    }
    /**
     * <code>.bragi.Dota2ItemPosition position = 3 [json_name = "position"];</code>
     * @return This builder for chaining.
     */
    public Builder clearPosition() {
      bitField0_ = (bitField0_ & ~0x00000004);
      position_ = 0;
      onChanged();
      return this;
    }

    private int level_ ;
    /**
     * <code>uint32 level = 4 [json_name = "level"];</code>
     * @return The level.
     */
    @java.lang.Override
    public int getLevel() {
      return level_;
    }
    /**
     * <code>uint32 level = 4 [json_name = "level"];</code>
     * @param value The level to set.
     * @return This builder for chaining.
     */
    public Builder setLevel(int value) {

      level_ = value;
      bitField0_ |= 0x00000008;
      onChanged();
      return this;
    }
    /**
     * <code>uint32 level = 4 [json_name = "level"];</code>
     * @return This builder for chaining.
     */
    public Builder clearLevel() {
      bitField0_ = (bitField0_ & ~0x00000008);
      level_ = 0;
      onChanged();
      return this;
    }

    // @@protoc_insertion_point(builder_scope:bragi.Dota2Item)
  }

  // @@protoc_insertion_point(class_scope:bragi.Dota2Item)
  private static final com.bragi.Dota2Item DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.bragi.Dota2Item();
  }

  public static com.bragi.Dota2Item getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<Dota2Item>
      PARSER = new com.google.protobuf.AbstractParser<Dota2Item>() {
    @java.lang.Override
    public Dota2Item parsePartialFrom(
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

  public static com.google.protobuf.Parser<Dota2Item> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<Dota2Item> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.bragi.Dota2Item getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

