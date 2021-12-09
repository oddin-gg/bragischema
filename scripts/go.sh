#!/usr/bin/env bash

echo "GENERATING GO"

rm -rf ./go/*

protoc --go_out=./go --go-grpc_out=./go proto/bragi/bragi.proto

if [ "$?" != "0" ];
then
  echo "protobuf files generation failed. \n"
  exit 1
fi

echo "GO DONE"
