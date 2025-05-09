import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { usePetStore } from '../hooks/usePetStore';
import { useRouter } from 'expo-router';
import { useColorScheme, Text } from 'react-native';
import { SourGummy_400Regular } from '@expo-google-fonts/sour-gummy';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SourGummy_400Regular,
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const router = useRouter();
  const { hasPet } = usePetStore();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    if (!hasPet) {
      router.push('/home' as any);
    }
  }, [hasPet]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* <Text style={{ flex: 1 }}> */}
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: '#fdfffc',
            },
          }}
        >
        </Stack>
        <StatusBar style="auto" />
      {/* </Text> */}
    </ThemeProvider>
  );
}
