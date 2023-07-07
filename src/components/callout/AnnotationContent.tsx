import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { tailwind } from 'tailwind'
import * as Animatable from 'react-native-animatable';

const AnnotationContent : FC = () => {
  return (
      <Animatable.View 
        animation={'zoomIn'} 
        iterationCount={'infinite'} 
        style={tailwind.style('justify-center items-center h-8 w-8 bg-primary-500 rounded-full shadow-xl')}>
        <Animatable.View 
            style={tailwind.style('h-5 w-5 bg-primary-400 rounded-full shadow-xl')}
            animation={'zoomIn'}
            duration={400} 
            iterationCount={'infinite'}  />
    </Animatable.View>
  )
}

export default AnnotationContent

type Props = {

}