module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [], // Removing reanimated plugin to avoid worklets error
    };
};
