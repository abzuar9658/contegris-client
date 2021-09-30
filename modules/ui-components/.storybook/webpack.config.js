const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.scss|css/,
    exclude: /node_modules/,
    use: [
      // These three libraries are commonly used together to turn Sass into
      // CSS, then be able to load the CSS directly with imports. From there
      // It gets put in the DOM for you.
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      { loader: 'sass-loader' }
    ],
  });

  config.resolve.extensions.push('.scss', '.css');

  // Return the altered config
  return config;
};