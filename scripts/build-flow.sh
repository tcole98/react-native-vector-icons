#!/bin/bash -e

rm -rf MaterialCommunityIcons.js.flow

node bin/generate-flow MaterialCommunityIcons

cp *.js.flow dist/
