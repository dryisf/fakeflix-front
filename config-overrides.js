const path = require('path');

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = function (config, env) {
  config.resolve.alias = Object.assign(config.resolve.alias, {
    components: resolve('src/components'),
    assets: resolve('src/assets'),
    config: resolve('src/config'),
    containers: resolve('src/containers'),
    api: resolve('src/api'),
    services: resolve('src/services'),
    store: resolve('src/store'),
  });

  return config;
};
