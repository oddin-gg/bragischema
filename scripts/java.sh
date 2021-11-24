#!/usr/bin/env bash

echo "GENERATING JAVA"

javaDir="./java"

"$javaDir/gradlew" clean install -p "$javaDir"

echo "JAVA DONE"
