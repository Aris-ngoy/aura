import { View } from 'react-native'
import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import { tailwind } from 'tailwind'
import Mapbox, { Location } from '@rnmapbox/maps';
import { GOOGLE_API_KEY, MAPBOX_ACCESS_TOKEN } from 'react-native-dotenv';
import AnimateScreen from '@app/components/animation/animate-screen';
import { useCallout, useGetDirection } from '@app/features/home/hooks/useCallout';
import { IGetDirection } from './interface/ICallout';
import CalloutItem from '@app/components/callout/calloutItem';
import BottomSheet from '@gorhom/bottom-sheet';
import AnnotationContent from '@app/components/callout/AnnotationContent';
import MapView, { Callout, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useGeoLocation } from './hooks/useGeoLocation';
import ResponderItem from '@app/components/callout/ResponderItem';
import NavControllter from '@app/components/maps/NavControllter';

Mapbox.setAccessToken(MAPBOX_ACCESS_TOKEN);

const HomeScreen : FC = () => {

  const { isLoading, isFetching, data } = useCallout()

  const bottomSheetModalRef = useRef<BottomSheet>(null);
  const mapRef = useRef<MapView>(null);

  const { location } =  useGeoLocation()

  //generate randon id
  const randomId = Math.floor(Math.random() * 1000) + 1;

  const geoData: IGetDirection = {
    from: {
      latitude: location?.coords.latitude!,
      longitude: location?.coords.longitude!
    },
    to: {
      latitude: parseFloat(data?.destination.latitude ?? '0'),
      longitude: parseFloat(data?.destination.longitude ?? '0')
    }
  }

  // const { 
  //   data : directionData, 
  //   isLoading : isLoadingRouteData, 
  //   isFetching : isFetchingRouteData 
  // } = useGetDirection(geoData)

  useEffect(() => {
    if(location && !data){
      mapRef.current?.animateCamera({
        center: {
          latitude: location?.coords.latitude!,
          longitude: location?.coords.longitude!
        },
        zoom: 15
      })
    }

    if(data){
      mapRef.current?.animateCamera({
        center: {
          latitude: parseFloat(data?.destination.latitude),
          longitude: parseFloat(data?.destination.longitude)
        },
        zoom: 15
      })
    }

  }, [location, data])
  
  
  

  return (
    <View style={tailwind.style('flex-1')}>
      <AnimateScreen>
      <MapView 
        ref={mapRef}
        initialRegion={{
          ...geoData.from,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={tailwind.style('flex-1')}>
          <NavControllter />
          {
            location && data &&
          <MapViewDirections 
            strokeWidth={3}
            strokeColor={tailwind.color('blue-500')}
            origin={geoData.from} 
            destination={geoData.to} 
            apikey={GOOGLE_API_KEY} />
          }
          {
            location &&
            <Marker coordinate={location.coords}>
              <ResponderItem />
            </Marker>
          }
          {
          data &&
          <Marker 
            onPress={() => bottomSheetModalRef.current?.snapToIndex(2)}  
            coordinate={{
              latitude: parseFloat(data?.destination.latitude), 
              longitude: parseFloat(data?.destination.longitude)
            }}>
            <AnnotationContent />
          </Marker>
        }
      </MapView>
          {
            data &&
            <CalloutItem ref={bottomSheetModalRef} item={data} />
          }
      </AnimateScreen>
    </View>
  )
}
export default HomeScreen

