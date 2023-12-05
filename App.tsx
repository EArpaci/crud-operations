import React, { useEffect, useState } from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { navigationRef } from './app/navigation/rootNavigation';
import { LogBox, useColorScheme } from 'react-native';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import { useFonts } from 'expo-font';
//import CheckForUpdates from './app/components/CheckForUpdates';
import * as SplashScreen from 'expo-splash-screen';
import AuthNavigator from './app/navigation/AuthNavigator';
//import AppNavigator from './app/navigation/AppNavigator';
import { Theme } from '@react-navigation/native/src/types';
import { colors } from './app/constants/Colors';
import { LocaleContextProvider } from './app/context/locale';
import AppNavigator from './app/navigation/AppNavigator';

LogBox.ignoreAllLogs();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [user, setUser] = useState(false);

  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    'Montserrat-Bold': require('./app/assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Regular': require('./app/assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Light': require('./app/assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-Medium': require('./app/assets/fonts/Montserrat-Medium.ttf'),
  });

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(Boolean(user));
  };

  const DefaultTheme: Theme = {
    dark: false,
    colors: {
      primary: 'rgb(0, 122, 255)',
      background: colors.white,
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(216, 216, 216)',
      notification: 'rgb(255, 59, 48)',
    },
  };

  const DarkTheme: Theme = {
    dark: true,
    colors: {
      primary: 'rgb(10, 132, 255)',
      background: 'rgb(18, 18, 18)',
      card: 'rgb(18, 18, 18)',
      text: 'rgb(229, 229, 231)',
      border: 'rgb(39, 39, 41)',
      notification: 'rgb(255, 69, 58)',
    },
  };

  useEffect(() => {
    (async () => {
      await restoreUser();
      setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 1000);
    })();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <LocaleContextProvider>
        {/*
        <CheckForUpdates />
*/}

        <NavigationContainer
          ref={navigationRef}
          theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
          <>{user ? <AppNavigator /> : <AuthNavigator />}</>
        </NavigationContainer>
      </LocaleContextProvider>
    </AuthContext.Provider>
  );
}
