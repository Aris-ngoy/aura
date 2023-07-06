import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
import { onlineManager } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Platform } from 'react-native';

export const useOnlineManager = () => {
  const handleSetOnline = (state: NetInfoState) => {
    onlineManager.setOnline(!!state?.isConnected);
  };
  useEffect(() => {
    if (Platform.OS !== 'web') {
      return NetInfo.addEventListener(handleSetOnline);
    }
  }, []);
};