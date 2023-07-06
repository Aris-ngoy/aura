import { ViewStyle } from 'react-native'
import React, { FC } from 'react'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'
import { tailwind } from 'tailwind'

const AnimateScreen : FC<Props> = ({ children, style }) => {
  return (
    <Animated.View 
        entering={FadeIn.springify()}
        exiting={FadeOut.springify()}
        style={tailwind.style('flex-1', style)}>
        {children}
    </Animated.View>
  )
}
export default AnimateScreen

interface Props {
    children : React.ReactNode | React.ReactNode[],
    style ? : ViewStyle
}