# bazel-node-reproduction

This repository demonstrates an issue when trying to use the dropbox rules_node with node v8.11.4.

## Requirements:
    * docker

## Demonstrating the problem:

Running './run-default' works fine.

Running './run-8.11.4' fails with the following:

```
[8 / 9] installing node modules from npm/lodash/npm-shrinkwrap.json; 0s processwrapper-sandbox
ERROR: /usr/src/app/npm/lodash/BUILD:7:1: output 'npm/lodash/node_modules/lodash/LICENSE' was not created
ERROR: /usr/src/app/npm/lodash/BUILD:7:1: output 'npm/lodash/node_modules/lodash/README.md' was not created
ERROR: /usr/src/app/npm/lodash/BUILD:7:1: output 'npm/lodash/node_modules/lodash/_DataView.js' was not created
ERROR: /usr/src/app/npm/lodash/BUILD:7:1: output 'npm/lodash/node_modules/lodash/_Hash.js' was not created
```
