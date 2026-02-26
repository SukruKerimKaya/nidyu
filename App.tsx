import React, { useEffect } from 'react';
import { AppNavigator } from './src/navigation/AppNavigator';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View, Text } from 'react-native';
import { enableScreens } from 'react-native-screens';

// Disable react-native-screens to prevent HostFunction boolean/string parse crash on New Architecture
enableScreens(false);

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

function App() {
  const [fontsLoaded, fontError] = useFonts({
    'GoogleSansFlex-Regular': require('./assets/fonts/GoogleSansFlex_24pt-Regular.ttf'),
    'GoogleSansFlex-Medium': require('./assets/fonts/GoogleSansFlex_24pt-Medium.ttf'),
    'GoogleSansFlex-Bold': require('./assets/fonts/GoogleSansFlex_24pt-Bold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Hide the splash screen once loading is complete or failed
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  if (process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true') {
    const StorybookUIRoot = require('./.rnstorybook').default;
    return <StorybookUIRoot />;
  }

  return <AppNavigator />;
}

export default App;
