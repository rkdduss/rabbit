import { Stack } from 'expo-router/stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const Root = styled(GestureHandlerRootView)`
  flex: 1;
`;


export default function RootLayout() {
  return (
    <Root>
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="pages" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaProvider>
    </ThemeProvider>
    </Root>
  );
}