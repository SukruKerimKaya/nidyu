// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { withStorybook } = require('@storybook/react-native/metro/withStorybook');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = withStorybook(config, {
    // Set to false to disable storybook specifically
    enabled: true,
});
