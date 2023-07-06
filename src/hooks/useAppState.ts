import { useEffect } from "react";
import { AppState, Platform } from 'react-native';
import type { AppStateStatus } from "react-native";
import { focusManager } from '@tanstack/react-query';

export const useAppState = () => {
  function handleAppStateChange(status: AppStateStatus) {
    if (Platform.OS !== 'web') {
      focusManager.setFocused(status === 'active');
    }
  }
  useEffect(() => {
    const subscription = AppState.addEventListener('change', handleAppStateChange);
    return () => subscription.remove();
  }, []);
};