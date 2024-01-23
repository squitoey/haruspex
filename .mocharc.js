"use strict";
module.exports = {
  recursive: true,
  spec: ['test/**/*.spec.{js,ts}'],
  timeout: 10000,
  require: ['ts-node/register'],
  extensions: ['ts'],
  "enable-source-maps": true,
}
