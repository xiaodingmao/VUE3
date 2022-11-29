module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    {
      // 👇 The directory field sets the directory your stories
      directory: '../src/stories',
      // 👇 The titlePrefix field will generate automatic titles for your stories
      titlePrefix: 'MyComponents',
      // 👇 Storybook will load all files that contain the stories extension
      files: '*.stories.*',
    },
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}