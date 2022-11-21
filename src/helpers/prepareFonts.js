import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

export const prepare = async (setAppIsReady) => {
  try {
    await SplashScreen.preventAutoHideAsync();
    await Font.loadAsync({
      'Inter-Bold': require('../../assets/fonts/Inter-Bold.ttf'),
      'Inter-Regular': require('../../assets/fonts/Inter-Regular.ttf'),
      'Inter-Medium': require('../../assets/fonts/Inter-Medium.ttf'),
      'Inter-SemiBold': require('../../assets/fonts/Inter-SemiBold.ttf'),
    });

    await new Promise((resolve) => setTimeout(resolve, 2000));
  } catch (e) {
    console.warn(e);
  } finally {
    setAppIsReady(true);
  }
};
