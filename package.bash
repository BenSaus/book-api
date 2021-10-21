#!/usr/bin/bash

# https://github.com/lovell/sharp/issues/2197
rm -rf node_modules/bcrypt
docker run --rm -v "/$(pwd -W):/var/task" lambci/lambda:build-nodejs12.x npm install bcrypt
mkdir .output
rm .output/output.zip
docker run --rm -v "/$(pwd -W):/var/task" lambci/lambda:build-nodejs12.x zip -r --symlinks .output/output.zip . -x '*.git*' -x '*.output*' -x 'package.bash'