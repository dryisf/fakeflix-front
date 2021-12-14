const path = require('path');

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = function (config, env) {
  config.resolve.alias = Object.assign(config.resolve.alias, {
    components: resolve('src/components'),
    assets: resolve('src/assets'),
    config: resolve('src/config'),
    pages: resolve('src/pages'),
  });

  return config;
};
