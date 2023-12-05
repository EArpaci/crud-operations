import Constants from 'expo-constants';

export interface Config {
    apiURL: string;
}

export default Constants.expoConfig?.extra as Config;
