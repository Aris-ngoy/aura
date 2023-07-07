import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { tailwind } from 'tailwind'

const iconNames : any[] = ['my-location', 'search','volume-up', 'person-outline']

const MapController = () => {

  const [visible, setVisible] = useState(false)

  return (
    <View style={tailwind.style('absolute top-0 right-0 items-center')}>
        <TouchableOpacity onPress={()=> setVisible(prev => !prev)} style={tailwind.style('flex-row items-center h-10 bg-primary-500 rounded-lg pl-3 justify-center items-center')}>
            <MaterialIcons name="grid-view" size={24} color="white" />
            <Text style={tailwind.style('text-white mx-2')}>MORE</Text>
        </TouchableOpacity>
        {
           visible && (<>
           {
            iconNames.map((name, index) => (
                <TouchableOpacity 
                    key={index}
                    style={tailwind.style('h-14 w-14 bg-white shadow-xl rounded-full justify-center items-center m-3')}>
                    <MaterialIcons name={name} size={34} color={tailwind.color('gray-600')} />
                </TouchableOpacity>
                ))
           }
           </>)
        }
      </View>
  )
}

export default MapController