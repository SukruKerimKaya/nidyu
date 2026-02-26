// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// We export the config directly to avoid conflicts with Storybook loader
// Storybook will be handled by its own scripts if needed
module.exports = config;
