import dotenv from 'dotenv';
dotenv.config();
import { ExpoConfig, ConfigContext } from 'expo/config';

import { Config } from './app/lib/config';


const version = '1.0.0',
  buildNumber = '1',
  versionCode = 1,
  scheme = 'crud-operations';

export default ({ config }: ConfigContext): ExpoConfig & { extra: Config } => ({
  ...config,
  name: 'Crud Operations',
  slug: 'crud-operations',
  owner: 'earpaci',
  version,
  scheme,
  orientation: 'portrait',
  icon: './app/assets/images/icon.png',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './app/assets/images/splash.png',
    resizeMode: 'cover',
  },
  updates: {
    fallbackToCacheTimeout: 0,
    url: 'https://u.expo.dev/20f6c249-cef1-4d6b-af0b-b1c54032c4ff',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    bundleIdentifier: 'com.crud.operations',
    buildNumber,
    supportsTablet: false,
    config: {
      usesNonExemptEncryption: false,
    },
  },
  android: {
    package: 'com.crud.operations',
    versionCode,
    adaptiveIcon: {
      foregroundImage: './app/assets/images/adaptive-icon.png',
      backgroundColor: '#6558f5',
    },
  },
  packagerOpts: {
    config: 'metro.config.js',
    sourceExts: ['js', 'jsx', 'scss'],
  },
  extra: {
    apiURL: 'https://crud-example-api.vercel.app',
    eas: {
      projectId: '20f6c249-cef1-4d6b-af0b-b1c54032c4ff',
    },
  },
});
