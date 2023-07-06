import { View, Image, SafeAreaView } from 'react-native'
import React, { FC } from 'react'
import { tailwind } from 'tailwind'

const HomeHeader : FC = () => {
  return (
    <SafeAreaView>
        <View style={tailwind.style('flex w-full h-10 flex-row justify-start items-center')}>
            <Image resizeMode='contain'
                style={tailwind.style('h-8 w-30 rounded-full')}
                source={require('@/assets/main-logo.png')} />
        </View>
    </SafeAreaView>
  )
}

export default HomeHeader