import { View, Text, StatusBar, SafeAreaView, Image, TouchableOpacity,PixelRatio, Dimensions } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const WelcomeScreen = () => {
    const navigation = useNavigation()
    const fontScale = PixelRatio.getFontScale()
    const getFontSize = size => size/fontScale
    const {width, height} = Dimensions.get('screen')
  return (
   
      <SafeAreaView>
         <StatusBar style='dark'/>
         <View className='flex-row justify-center item-center mt-4'>
            {/* Verifica o tamanho da tela para saber se é um iPad e aplica uma medida diferente */}
            {height > width && height < 1024 ? (
                <Image source={require('../../assets/images/logosecond.png')}
                    style={{width:wp(15), height:wp(15)}}
                />
            ):(
                <Image source={require('../../assets/images/logosecond.png')}
                    style={{width:wp(8), height:wp(8)}}
                />
            )}
        </View>
            <Text className='text-[#4F3422] mt-5 ml-4 text-center' style={{fontFamily:'urbanist-black', fontSize: getFontSize(30)}}>Welcome to the ultimate </Text>

        <View className='flex-row justify-center items-center'>
            <Text className='text-[#926247] ml-4' style={{fontFamily:'urbanist-black',fontSize: getFontSize(30)}}>freud</Text>
            <Text className='text-[#4F3422] ml-4' style={{fontFamily:'urbanist-black' ,fontSize: getFontSize(30)}}>UI Kit!</Text>
        </View>

        <View className='justify-center items-center mt-6'>
            <Text className='text-[#4F3422]' style={{fontFamily:'urbanist-thin', fontSize: getFontSize(18)}} >Your mindful mental health AI companion</Text>
            <Text className='text-[#4F3422]'style={{fontFamily:'urbanist-thin', fontSize: getFontSize(18)}} >for everyone, anywhere 🍃</Text>
        </View>

        <View className='justify-center items-center mt-16'>
            {/* Verifica o tamanho da tela para saber se é um iPad e aplica uma medida diferente */}
            {height > width && height < 1024 ? (
                <Image source={require('../../assets/images/welcome.png')}
                    style={{width:wp(75), height:wp(75)}}
                />
            ):(
                <Image source={require('../../assets/images/welcome.png')}
                    style={{width:wp(40), height:wp(40)}}
                />
            )}
        </View>
        <View className='justify-center items-center'>
        <TouchableOpacity className='flex-row justify-center items-center rounded-full bg-[#4F3422] w-[181] h-[56] space-x-2 mt-14'onPress={()=>navigation.navigate('OnBoarding')}>
            <Text className='color-white' style={{fontFamily:'urbanist-black', fontSize: getFontSize(18)}}>Get Started</Text>
            <Ionicons name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>
        </View>


        <View className='flex-row justify-center items-center space-x-3 mt-4 '>
                <Text style={{fontFamily:'urbanist-black', fontSize: getFontSize(14)}}>Already have an account?</Text>
            <TouchableOpacity>
                <Text className='text-[#ED7E1C]' style={{fontFamily:'urbanist-black', fontSize: getFontSize(14)}} onPress={()=>navigation.navigate('SignIn')}>Sign In.</Text>
            </TouchableOpacity>
        </View>
     </SafeAreaView>

   
  )
}

export default WelcomeScreen