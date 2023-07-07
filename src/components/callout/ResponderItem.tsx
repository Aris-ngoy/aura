import { View, Text } from 'react-native'
import React, { FC } from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { tailwind } from 'tailwind'

const ResponderItem : FC = () => {
  return (
    <View style={tailwind.style('bg-primary-400 rounded-full p-2 justify-center items-center')}>
      <MaterialCommunityIcons name="car-emergency" size={24} color="black" />            
    </View>
  )
}

export default ResponderItem