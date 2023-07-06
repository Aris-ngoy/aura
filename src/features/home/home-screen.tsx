import { View } from 'react-native'
import React, { FC, useCallback, useEffect, useState } from 'react'
import { tailwind } from 'tailwind'
import Mapbox, { Location } from '@rnmapbox/maps';
import { MAPBOX_ACCESS_TOKEN } from 'react-native-dotenv';
import AnimateScreen from '@app/components/animation/animate-screen';
import { useCallout, useGetDirection } from '@app/features/home/hooks/useCallout';
import * as ExpoLocation from 'expo-location';
import { IGetDirection } from './interface/ICallout';
import MapView from 'react-native-maps';


Mapbox.setAccessToken(MAPBOX_ACCESS_TOKEN);

const HomeScreen : FC = () => {

  const [location, setlocation] = useState<Location>()
  const { isLoading, isFetching, data } = useCallout()

  const geoData: IGetDirection = {
    from: {
      latitude: location?.coords.latitude ?? 0,
      longitude: location?.coords.longitude ?? 0
    },
    to: {
      latitude: parseFloat(data?.destination.latitude ?? '0'),
      longitude: parseFloat(data?.destination.longitude ?? '0')
    }
  }

  const { 
    data : directionData, 
    isLoading : isLoadingRouteData, 
    isFetching : isFetchingRouteData 
  } = useGetDirection(geoData)

  useEffect(() => {

    console.log('location : ', JSON.stringify(directionData))
    
  }, [directionData]);
  
const handleLocation = useCallback((locationData: Location) => setlocation(locationData), [])
  

  return (
    <View style={tailwind.style('flex-1')}>
      <AnimateScreen>
        <MapView
          provider={'google'}
          style={tailwind.style('flex-1')}>

        </MapView>
      </AnimateScreen>
    </View>
  )
}
export default HomeScreen