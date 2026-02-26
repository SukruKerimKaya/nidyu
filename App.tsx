import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as ExpoSplashScreen from 'expo-splash-screen';
import { enableScreens } from 'react-native-screens';
import { SplashScreen } from './src/screens/SplashScreen';

// Disable react-native-screens since we only have one screen
enableScreens(false);

// Keep the native splash screen visible while we fetch fonts
ExpoSplashScreen.preventAutoHideAsync();

function App() {
  const [fontsLoaded, fontError] = useFonts({
    'GoogleSansFlex-Regular': require('./assets/fonts/GoogleSansFlex_24pt-Regular.ttf'),
    'GoogleSansFlex-Medium': require('./assets/fonts/GoogleSansFlex_24pt-Medium.ttf'),
    'GoogleSansFlex-Bold': require('./assets/fonts/GoogleSansFlex_24pt-Bold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Hide the native splash screen once fonts are ready
      ExpoSplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <SplashScreen />;
}

export default App;
