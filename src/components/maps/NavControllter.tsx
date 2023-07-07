import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { tailwind } from 'tailwind'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import MapController from './MapController';
import * as Animatable from 'react-native-animatable';

const NavControllter : FC = () => {

  return (
    <Animatable.View 
      delay={1800}
      duration={1800}
      animation={'fadeIn'} 
      style={tailwind.style('absolute top-0 w-11/12 h-20 self-center mt-4 rounded-lg bg-green-700 shadow flex-row items-center px-6')}>
        <MaterialIcons name="arrow-upward" size={40} color="white" />
      <View style={tailwind.style('flex-1 mx-4')}>
        <Text style={tailwind.style('text-white text-2xl font-bold')}>Pine <Text style={tailwind.style('text-xs')}>Ave</Text></Text>
        <View style={tailwind.style('flex-row items-end')}>
            <Text allowFontScaling style={tailwind.style('text-white text-xs font-bold mb-1')}>towards</Text>
            <Text style={tailwind.style('text-2xl font-bold text-white')}> Bond <Text style={tailwind.style('text-xs')}>st</Text></Text>
        </View>
      </View>
      <MapController />
    </Animatable.View>
  )
}

export default NavControllter