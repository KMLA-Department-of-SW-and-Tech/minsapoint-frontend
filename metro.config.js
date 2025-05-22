const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
  
const config = getDefaultConfig(__dirname);

// const path = require('path');

// config.resolver.alias = {
//   ...(config.resolver.alias ?? {}),
//   'tslib': require.resolve('tslib'),
//   '@firebase/auth': path.resolve(__dirname, 'node_modules/@firebase/auth/dist/index.esm2017.js'),
//   'firebase/auth': path.resolve(__dirname, 'node_modules/firebase/auth/dist/index.esm2017.js'),
// };


module.exports = withNativeWind(config, { input: './global.css' });