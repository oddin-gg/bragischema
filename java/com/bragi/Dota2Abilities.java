// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: bragi/dota2.proto
// Protobuf Java Version: 4.29.3

package com.bragi;

/**
 * Protobuf type {@code bragi.Dota2Abilities}
 */
public final class Dota2Abilities extends
    com.google.protobuf.GeneratedMessage implements
    // @@protoc_insertion_point(message_implements:bragi.Dota2Abilities)
    Dota2AbilitiesOrBuilder {
private static final long serialVersionUID = 0L;
  static {
    com.google.protobuf.RuntimeVersion.validateProtobufGencodeVersion(
      com.google.protobuf.RuntimeVersion.RuntimeDomain.PUBLIC,
      /* major= */ 4,
      /* minor= */ 29,
      /* patch= */ 3,
      /* suffix= */ "",
      Dota2Abilities.class.getName());
  }
  // Use Dota2Abilities.newBuilder() to construct.
  private Dota2Abilities(com.google.protobuf.GeneratedMessage.Builder<?> builder) {
    super(builder);
  }
  private Dota2Abilities() {
    abilities_ = java.util.Collections.emptyList();
  }

  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.bragi.Dota2Proto.internal_static_bragi_Dota2Abilities_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.bragi.Dota2Proto.internal_static_bragi_Dota2Abilities_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.bragi.Dota2Abilities.class, com.bragi.Dota2Abilities.Builder.class);
  }

  public static final int ABILITIES_FIELD_NUMBER = 1;
  @SuppressWarnings("serial")
  private java.util.List<com.bragi.Dota2Ability> abilities_;
  /**
   * <code>repeated .bragi.Dota2Ability abilities = 1 [json_name = "abilities"];</code>
   */
  @java.lang.Override
  public java.util.List<com.bragi.Dota2Ability> getAbilitiesList() {
    return abilities_;
  }
  /**
   * <code>repeated .bragi.Dota2Ability abilities = 1 [json_name = "abilities"];</code>
   */
  @java.lang.Override
  public java.util.List<? extends com.bragi.Dota2AbilityOrBuilder> 
      getAbilitiesOrBuilderList() {
    return abilities_;
  }
  /**
   * <code>repeated .bragi.Dota2Ability abilities = 1 [json_name = "abilities"];</code>
   */
  @java.lang.Override
  public int getAbilitiesCount() {
    return abilities_.size();
  }
  /**
   * <code>repeated .bragi.Dota2Ability abilities = 1 [json_name = "abilities"];</code>
   */
  @java.lang.Override
  public com.bragi.Dota2Ability getAbilities(int index) {
    return abilities_.get(index);
  }
  /**
   * <code>repeated .bragi.Dota2Ability abilities = 1 [json_name = "abilities"];</code>
   */
  @java.lang.Override
  public com.bragi.Dota2AbilityOrBuilder getAbilitiesOrBuilder(
      int index) {
    return abilities_.get(index);
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
    for (int i = 0; i < abilities_.size(); i++) {
      output.writeMessage(1, abilities_.get(i));
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    for (int i = 0; i < abilities_.size(); i++) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(1, abilities_.get(i));
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
    if (!(obj instanceof com.bragi.Dota2Abilities)) {
      return super.equals(obj);
    }
    com.bragi.Dota2Abilities other = (com.bragi.Dota2Abilities) obj;

    if (!getAbilitiesList()
        .equals(other.getAbilitiesList())) return false;
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
    if (getAbilitiesCount() > 0) {
      hash = (37 * hash) + ABILITIES_FIELD_NUMBER;
      hash = (53 * hash) + getAbilitiesList().hashCode();
    }
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.bragi.Dota2Abilities parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.bragi.Dota2Abilities parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.bragi.Dota2Abilities parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.bragi.Dota2Abilities parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.bragi.Dota2Abilities parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.bragi.Dota2Abilities parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.bragi.Dota2Abilities parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input);
  }
  public static com.bragi.Dota2Abilities parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  public static com.bragi.Dota2Abilities parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseDelimitedWithIOException(PARSER, input);
  }

  public static com.bragi.Dota2Abilities parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.bragi.Dota2Abilities parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input);
  }
  public static com.bragi.Dota2Abilities parseFrom(
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
  public static Builder newBuilder(com.bragi.Dota2Abilities prototype) {
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
   * Protobuf type {@code bragi.Dota2Abilities}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessage.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:bragi.Dota2Abilities)
      com.bragi.Dota2AbilitiesOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.bragi.Dota2Proto.internal_static_bragi_Dota2Abilities_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessage.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.bragi.Dota2Proto.internal_static_bragi_Dota2Abilities_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.bragi.Dota2Abilities.class, com.bragi.Dota2Abilities.Builder.class);
    }

    // Construct using com.bragi.Dota2Abilities.newBuilder()
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
      if (abilitiesBuilder_ == null) {
        abilities_ = java.util.Collections.emptyList();
      } else {
        abilities_ = null;
        abilitiesBuilder_.clear();
      }
      bitField0_ = (bitField0_ & ~0x00000001);
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.bragi.Dota2Proto.internal_static_bragi_Dota2Abilities_descriptor;
    }

    @java.lang.Override
    public com.bragi.Dota2Abilities getDefaultInstanceForType() {
      return com.bragi.Dota2Abilities.getDefaultInstance();
    }

    @java.lang.Override
    public com.bragi.Dota2Abilities build() {
      com.bragi.Dota2Abilities result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.bragi.Dota2Abilities buildPartial() {
      com.bragi.Dota2Abilities result = new com.bragi.Dota2Abilities(this);
      buildPartialRepeatedFields(result);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartialRepeatedFields(com.bragi.Dota2Abilities result) {
      if (abilitiesBuilder_ == null) {
        if (((bitField0_ & 0x00000001) != 0)) {
          abilities_ = java.util.Collections.unmodifiableList(abilities_);
          bitField0_ = (bitField0_ & ~0x00000001);
        }
        result.abilities_ = abilities_;
      } else {
        result.abilities_ = abilitiesBuilder_.build();
      }
    }

    private void buildPartial0(com.bragi.Dota2Abilities result) {
      int from_bitField0_ = bitField0_;
    }

    @java.lang.Override
    public Builder mergeFrom(com.google.protobuf.Message other) {
      if (other instanceof com.bragi.Dota2Abilities) {
        return mergeFrom((com.bragi.Dota2Abilities)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.bragi.Dota2Abilities other) {
      if (other == com.bragi.Dota2Abilities.getDefaultInstance()) return this;
      if (abilitiesBuilder_ == null) {
        if (!other.abilities_.isEmpty()) {
          if (abilities_.isEmpty()) {
            abilities_ = other.abilities_;
            bitField0_ = (bitField0_ & ~0x00000001);
          } else {
            ensureAbilitiesIsMutable();
            abilities_.addAll(other.abilities_);
          }
          onChanged();
        }
      } else {
        if (!other.abilities_.isEmpty()) {
          if (abilitiesBuilder_.isEmpty()) {
            abilitiesBuilder_.dispose();
            abilitiesBuilder_ = null;
            abilities_ = other.abilities_;
            bitField0_ = (bitField0_ & ~0x00000001);
            abilitiesBuilder_ = 
              com.google.protobuf.GeneratedMessage.alwaysUseFieldBuilders ?
                 getAbilitiesFieldBuilder() : null;
          } else {
            abilitiesBuilder_.addAllMessages(other.abilities_);
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
              com.bragi.Dota2Ability m =
                  input.readMessage(
                      com.bragi.Dota2Ability.parser(),
                      extensionRegistry);
              if (abilitiesBuilder_ == null) {
                ensureAbilitiesIsMutable();
                abilities_.add(m);
              } else {
                abilitiesBuilder_.addMessage(m);
              }
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

    private java.util.List<com.bragi.Dota2Ability> abilities_ =
      java.util.Collections.emptyList();
    private void ensureAbilitiesIsMutable() {
      if (!((bitField0_ & 0x00000001) != 0)) {
        abilities_ = new java.util.ArrayList<com.bragi.Dota2Ability>(abilities_);
        bitField0_ |= 0x00000001;
       }
    }

    private com.google.protobuf.RepeatedFieldBuilder<
        com.bragi.Dota2Ability, com.bragi.Dota2Ability.Builder, com.bragi.Dota2AbilityOrBuilder> abilitiesBuilder_;

    /**
     * <code>repeated .bragi.Dota2Ability abilities = 1 [json_name = "abilities"];</code>
     */
    public java.util.List<com.bragi.Dota2Ability> getAbilitiesList() {
      if (abilitiesBuilder_ == null) {
        return java.util.Collections.unmodifiableList(abilities_);
      } else {
        return abilitiesBuilder_.getMessageList();
      }
    }
    /**
     * <code>repeated .bragi.Dota2Ability abilities = 1 [json_name = "abilities"];</code>
     */
    public int getAbilitiesCount() {
      if (abilitiesBuilder_ == null) {
        return abilities_.size();
      } else {
        return abilitiesBuilder_.getCount();
      }
    }
    /**
     * <code>repeated .bragi.Dota2Ability abilities = 1 [json_name = "abilities"];</code>
     */
    public com.bragi.Dota2Ability getAbilities(int index) {
      if (abilitiesBuilder_ == null) {
        return abilities_.get(index);
      } else {
        return abilitiesBuilder_.getMessage(index);
      }
    }
    /**
     * <code>repeated .bragi.Dota2Ability abilities = 1 [json_name = "abilities"];</code>
     */
    public Builder setAbilities(
        int index, com.bragi.Dota2Ability value) {
      if (abilitiesBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureAbilitiesIsMutable();
        abilities_.set(index, value);
        onChanged();
      } else {
        abilitiesBuilder_.setMessage(index, value);
      }
      return this;
    }
    /**
     * <code>repeated .bragi.Dota2Ability abilities = 1 [json_name = "abilities"];</code>
     */
    public Builder setAbilities(
        int index, com.bragi.Dota2Ability.Builder builderForValue) {
      if (abilitiesBuilder_ == null) {
        ensureAbilitiesIsMutable();
        abilities_.set(index, builderForValue.build());
        onChanged();
      } else {
        abilitiesBuilder_.setMessage(index, builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .bragi.Dota2Ability abilities = 1 [json_name = "abilities"];</code>
     */
    public Builder addAbilities(com.bragi.Dota2Ability value) {
      if (abilitiesBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureAbilitiesIsMutable();
        abilities_.add(value);
        onChanged();
      } else {
        abilitiesBuilder_.addMessage(value);
      }
      return this;
    }
    /**
     * <code>repeated .bragi.Dota2Ability abilities = 1 [json_name = "abilities"];</code>
     */
    public Builder addAbilities(
        int index, com.bragi.Dota2Ability value) {
      if (abilitiesBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureAbilitiesIsMutable();
        abilities_.add(index, value);
        onChanged();
      } else {
        abilitiesBuilder_.addMessage(index, value);
      }
      return this;
    }
    /**
     * <code>repeated .bragi.Dota2Ability abilities = 1 [json_name = "abilities"];</code>
     */
    public Builder addAbilities(
        com.bragi.Dota2Ability.Builder builderForValue) {
      if (abilitiesBuilder_ == null) {
        ensureAbilitiesIsMutable();
        abilities_.add(builderForValue.build());
        onChanged();
      } else {
        abilitiesBuilder_.addMessage(builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .bragi.Dota2Ability abilities = 1 [json_name = "abilities"];</code>
     */
    public Builder addAbilities(
        int index, com.bragi.Dota2Ability.Builder builderForValue) {
      if (abilitiesBuilder_ == null) {
        ensureAbilitiesIsMutable();
        abilities_.add(index, builderForValue.build());
        onChanged();
      } else {
        abilitiesBuilder_.addMessage(index, builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .bragi.Dota2Ability abilities = 1 [json_name = "abilities"];</code>
     */
    public Builder addAllAbilities(
        java.lang.Iterable<? extends com.bragi.Dota2Ability> values) {
      if (abilitiesBuilder_ == null) {
        ensureAbilitiesIsMutable();
        com.google.protobuf.AbstractMessageLite.Builder.addAll(
            values, abilities_);
        onChanged();
      } else {
        abilitiesBuilder_.addAllMessages(values);
      }
      return this;
    }
    /**
     * <code>repeated .bragi.Dota2Ability abilities = 1 [json_name = "abilities"];</code>
     */
    public Builder clearAbilities() {
      if (abilitiesBuilder_ == null) {
        abilities_ = java.util.Collections.emptyList();
        bitField0_ = (bitField0_ & ~0x00000001);
        onChanged();
      } else {
        abilitiesBuilder_.clear();
      }
      return this;
    }
    /**
     * <code>repeated .bragi.Dota2Ability abilities = 1 [json_name = "abilities"];</code>
     */
    public Builder removeAbilities(int index) {
      if (abilitiesBuilder_ == null) {
        ensureAbilitiesIsMutable();
        abilities_.remove(index);
        onChanged();
      } else {
        abilitiesBuilder_.remove(index);
      }
      return this;
    }
    /**
     * <code>repeated .bragi.Dota2Ability abilities = 1 [json_name = "abilities"];</code>
     */
    public com.bragi.Dota2Ability.Builder getAbilitiesBuilder(
        int index) {
      return getAbilitiesFieldBuilder().getBuilder(index);
    }
    /**
     * <code>repeated .bragi.Dota2Ability abilities = 1 [json_name = "abilities"];</code>
     */
    public com.bragi.Dota2AbilityOrBuilder getAbilitiesOrBuilder(
        int index) {
      if (abilitiesBuilder_ == null) {
        return abilities_.get(index);  } else {
        return abilitiesBuilder_.getMessageOrBuilder(index);
      }
    }
    /**
     * <code>repeated .bragi.Dota2Ability abilities = 1 [json_name = "abilities"];</code>
     */
    public java.util.List<? extends com.bragi.Dota2AbilityOrBuilder> 
         getAbilitiesOrBuilderList() {
      if (abilitiesBuilder_ != null) {
        return abilitiesBuilder_.getMessageOrBuilderList();
      } else {
        return java.util.Collections.unmodifiableList(abilities_);
      }
    }
    /**
     * <code>repeated .bragi.Dota2Ability abilities = 1 [json_name = "abilities"];</code>
     */
    public com.bragi.Dota2Ability.Builder addAbilitiesBuilder() {
      return getAbilitiesFieldBuilder().addBuilder(
          com.bragi.Dota2Ability.getDefaultInstance());
    }
    /**
     * <code>repeated .bragi.Dota2Ability abilities = 1 [json_name = "abilities"];</code>
     */
    public com.bragi.Dota2Ability.Builder addAbilitiesBuilder(
        int index) {
      return getAbilitiesFieldBuilder().addBuilder(
          index, com.bragi.Dota2Ability.getDefaultInstance());
    }
    /**
     * <code>repeated .bragi.Dota2Ability abilities = 1 [json_name = "abilities"];</code>
     */
    public java.util.List<com.bragi.Dota2Ability.Builder> 
         getAbilitiesBuilderList() {
      return getAbilitiesFieldBuilder().getBuilderList();
    }
    private com.google.protobuf.RepeatedFieldBuilder<
        com.bragi.Dota2Ability, com.bragi.Dota2Ability.Builder, com.bragi.Dota2AbilityOrBuilder> 
        getAbilitiesFieldBuilder() {
      if (abilitiesBuilder_ == null) {
        abilitiesBuilder_ = new com.google.protobuf.RepeatedFieldBuilder<
            com.bragi.Dota2Ability, com.bragi.Dota2Ability.Builder, com.bragi.Dota2AbilityOrBuilder>(
                abilities_,
                ((bitField0_ & 0x00000001) != 0),
                getParentForChildren(),
                isClean());
        abilities_ = null;
      }
      return abilitiesBuilder_;
    }

    // @@protoc_insertion_point(builder_scope:bragi.Dota2Abilities)
  }

  // @@protoc_insertion_point(class_scope:bragi.Dota2Abilities)
  private static final com.bragi.Dota2Abilities DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.bragi.Dota2Abilities();
  }

  public static com.bragi.Dota2Abilities getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<Dota2Abilities>
      PARSER = new com.google.protobuf.AbstractParser<Dota2Abilities>() {
    @java.lang.Override
    public Dota2Abilities parsePartialFrom(
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

  public static com.google.protobuf.Parser<Dota2Abilities> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<Dota2Abilities> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.bragi.Dota2Abilities getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

