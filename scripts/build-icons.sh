#!/bin/bash -e

rm -rf {Fonts,MaterialCommunityIcons.js}
mkdir Fonts glyphmaps
./scripts/materialcommunityicons.sh
