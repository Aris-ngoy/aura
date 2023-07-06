import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@app/features/home/home-screen';
import { Image } from 'react-native';
import { tailwind } from 'tailwind';

const Stack = createNativeStackNavigator();

const MainNavigation : FC = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator>
            <Stack.Screen 
                options={{
                    headerLeft : () => (<Image resizeMode='contain' 
                    style={tailwind.style('h-9 w-30 rounded-full')}
                    source={require('@/assets/main-logo.png')} />),
                    title : ''
                }}
                name="Home" 
                component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default MainNavigation