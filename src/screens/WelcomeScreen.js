import { View, Text, StatusBar, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {
    const navigation = useNavigation()
  return (
   
      <SafeAreaView>
         <StatusBar style='dark'/>
         <View className='flex-row justify-center item-center mt-4'>
             <Image source={require('../../assets/images/logosecond.png')}
            className="w-[64] h-[64]"     
            />
        </View>
            <Text className='text-[#4F3422] text-4xl mt-5 ml-4' style={{fontFamily:'urbanist-black'}}>Welcome to the ultimate </Text>

        <View className='flex-row justify-center items-center'>
            <Text className='text-[#926247] text-4xl ml-4' style={{fontFamily:'urbanist-black'}}>freud</Text>
            <Text className='text-[#4F3422] text-4xl ml-4' style={{fontFamily:'urbanist-black'}}>UI Kit!</Text>
        </View>

        <View className='justify-center items-center mt-6'>
            <Text className='text-[#4F3422] text-lg ' style={{fontFamily:'urbanist-thin'}} >Your mindful mental health AI companion</Text>
            <Text className='text-[#4F3422] text-lg 'style={{fontFamily:'urbanist-thin'}} >for everyone, anywhere 🍃</Text>
        </View>

        <View className='justify-center items-center mt-16'>
            <Image source={require('../../assets/images/welcome.png')}
            className="w-[318] h-[317]"  
            />
        </View>

        <TouchableOpacity className='flex-row justify-center items-center rounded-full bg-[#4F3422] w-[181] h-[56] space-x-2 mt-14 ml-32'onPress={()=>navigation.navigate('OnBoarding')}>
            <Text className='color-white text-lg' style={{fontFamily:'urbanist-black'}}>Get Started</Text>
            <Ionicons name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>

        <View className='flex-row justify-center items-center space-x-3 mt-4'>
                <Text className=' text-lg'style={{fontFamily:'urbanist-black'}}>Already have an account?</Text>
            <TouchableOpacity>
                <Text className='text-[#ED7E1C] text-lg' style={{fontFamily:'urbanist-black'}} onPress={()=>navigation.navigate('SignIn')}>Sign In.</Text>
            </TouchableOpacity>
        </View>
     </SafeAreaView>

   
  )
}

export default WelcomeScreen