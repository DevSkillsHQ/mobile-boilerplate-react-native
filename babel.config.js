module.exports = function(api) {
  api.cache(true);
  return {
    // babel-preset-expo adds the react-native-worklets plugin that Reanimated 4 needs.
    presets: ['babel-preset-expo'],
  };
};
