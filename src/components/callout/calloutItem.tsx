import { Text, View } from 'react-native'
import React, { forwardRef, useMemo } from 'react'
import BottomSheet, { BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { CalloutResponse } from '@app/features/home/interface/ICallout';
import { tailwind } from 'tailwind';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { capitalize } from '@app/utils/constants';


const CalloutItem = forwardRef<BottomSheet, Props>(({ item }, ref) => {

  // variables
  const snapPoints = useMemo(() => ['40%', '50%', '60%', '80%'], []);

  return (
    <BottomSheet
          ref={ref}
          enablePanDownToClose
          index={-1}
          handleComponent={null}
          snapPoints={snapPoints}>
        <BottomSheetScrollView>
            <View style={tailwind.style('items-center bg-gray-600 rounded-t-xl h-14')}>
                <View style={tailwind.style('h-1 bg-white w-10 rounded-lg my-2')} />
                <View style={tailwind.style('flex-row items-center justify-center')}>
                    <FontAwesome name="exclamation" size={24} color={tailwind.color('white')} />
                    <Text style={tailwind.style('ml-2 text-white font-MontserratBold')}>CALLOUT DETAILS</Text>
                </View>
            </View>
            <View style={tailwind.style('bg-white w-16 h-16 rounded-full -mt-7 ml-10 shadow-lg justify-center items-center')}>
                <EvilIcons size={56} name="user" color={tailwind.color('gray-600')} />
            </View>
            <View style={tailwind.style('self-end mx-10 -mt-7')}>
                <Text style={tailwind.style('ml-2 text-gray-600 text-base font-MontserratExtraBold mb-2')}>{item?.victim_information.names}</Text>
                <View style={tailwind.style('flex-row h-10 bg-gray-600 rounded-sm items-center px-2 rounded-md')}>
                    <EvilIcons  name="clock" size={28} color="white" />
                    <Text style={tailwind.style('ml-1 text-white font-MontserratBold')}>{'ETA : '}</Text>
                    <Text style={tailwind.style('text-white font-MontserratBold')}>{item?.eta}</Text>
                </View>
            </View>
            <View style={tailwind.style('w-10/12 mt-5 self-center')}>
                <View style={tailwind.style('h-10 flex-row items-center')}>
                    <MaterialCommunityIcons name="shield-star-outline" size={24} />
                    <Text style={tailwind.style('ml-2 text-gray-600 font-MontserratBold')}>Emergency : {item?.emergency_type}</Text>
                </View>
                <View style={tailwind.style('w-full flex-row items-start my-2')}>
                    <MaterialIcons name="location-on" size={24} color={tailwind.color('gray-500')} />
                    <Text style={tailwind.style('ml-1 mt-1 text-gray-600 font-MontserratMedium')}>{item?.destination.address}{`\n${item?.destination.longitude} ; ${item?.destination.latitude}`}</Text>
                </View>
                <View style={tailwind.style('w-full flex-row items-start')}>
                    <MaterialIcons name="info-outline" size={24} color={tailwind.color('gray-500')} />
                    <Text style={tailwind.style('ml-1 mt-1 text-gray-600 font-MontserratBold')}>Additional details:
                        <Text style={tailwind.style('ml-1 mt-1 text-gray-600 font-MontserratMedium')}>{' the user was unable to breathe and felt sharp pain down left arm'}</Text>
                    </Text>
                </View>
                <View style={tailwind.style('w-full bg-gray-500 h-[2px] my-4')} />
                <View style={tailwind.style('w-full flex-row items-start')}>
                    <MaterialIcons name="person-outline" size={24} color={tailwind.color('gray-500')} />
                    <View style={tailwind.style('')}>
                        <Text style={tailwind.style('ml-1 mt-1 text-gray-600 font-MontserratBold')}>About {item?.victim_information.names.split(' ')[0]}</Text>
                        <View>
                            {
                                //loop through the medical history it an object 
                                Object.keys(item?.victim_information.medical!).map((key, index) => 
                                    <Text style={tailwind.style('font-MontserratBold text-gray-600', key !== 'medical_insurance' && 'ml-2')}  
                                    key={index}>{capitalize(key === 'medical_insurance' ? '\u2022 Medical aid' : key)}: 
                                    <Text style={tailwind.style('text-gray-500 font-MontserratMedium')}> {item?.victim_information.medical[key]}</Text>
                                    </Text>
                                )
                            }
                            <Text style={tailwind.style('font-MontserratBold text-gray-600 mt-3')}>{`\u2022 Next of kin`}: 
                                <Text style={tailwind.style('text-gray-500 font-MontserratMedium')}> {item.victim_information.next_of_kin.names} - {item.victim_information.next_of_kin.contact} </Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </BottomSheetScrollView>
    </BottomSheet>
  )
})

export default CalloutItem

type Props = {
    item : CalloutResponse
}