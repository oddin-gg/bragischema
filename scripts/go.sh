#!/usr/bin/env bash

echo "GENERATING GO"

rm -rf ./go/*

protoc --go_out=./go --go-grpc_out=./go proto/bragi/bragi.proto

echo "GO DONE"
