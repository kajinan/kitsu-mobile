const path = require('path');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'import-graphql',
      [
        'module-resolver',
        {
          alias: {
            app: path.resolve(__dirname, 'src'),
          },
        },
      ],
    ],
  };
};