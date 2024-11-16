module.exports = {
    webpack: (config) => {
      config.watchOptions = {
        poll: 300,
        aggregateTimeout: 300,
        ignored: /node_modules/
      };
      config.cache = false;
      return config;
    },
  };