package(default_visibility = ['//visibility:public'])

load("@org_dropbox_rules_node//node:defs.bzl", "node_binary")

node_binary(
    name = 'my-app',
    srcs = ['index.js'],
    main = 'index.js',
    deps = [
        '//npm/lodash',
    ],
)
