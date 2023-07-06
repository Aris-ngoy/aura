import { useCallback } from 'react';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, 
Montserrat_100Thin, 
Montserrat_300Light,
Montserrat_400Regular,
Montserrat_500Medium,
Montserrat_600SemiBold,
Montserrat_700Bold,
Montserrat_800ExtraBold 
} from '@expo-google-fonts/montserrat';
import { useDeviceContext } from 'twrnc';
import { tailwind } from './tailwind';
import { useOnlineManager } from '@app/hooks/useOnlineManager';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainNavigation from '@app/navigation/main-navigation';
import { useAppState } from '@app/hooks/useAppState';

SplashScreen.preventAutoHideAsync();

//init react-query
const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
  queryCache: new QueryCache({
    onError: error => {
      const err = error as Error
      console.error(err.message, true);
      //replace with snackbar or toast
    },
  }),
  mutationCache : new MutationCache({
    onError : error => {
      const err = error as Error
      console.error(err.message, true);
      //replace with snackbar or toast
    }
  })
});

export default function App() {

  useDeviceContext(tailwind)
  useOnlineManager();
  useAppState();

  const [fontsLoaded] = useFonts({
    Montserrat_100Thin, 
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }



  return (
    <View 
      style={tailwind.style('flex-1')} 
      onLayout={onLayoutRootView}>
        <QueryClientProvider client={queryClient}>
          <MainNavigation />
        </QueryClientProvider>
    </View>
  );
}


