import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
  const navigation = useNavigation()
  useEffect(()=>{
    setTimeout(()=>navigation.navigate('Welcome'),3000) 
  },[])
  return (
    
      <SafeAreaView className='flex-1 justify-center items-center '>
        <StatusBar style='dark'/>
      <View className='justify-center items-center'>
        <Image source={require('../../assets/images/logoprimary.png')}
          className="w-[80] h-[80]"     
        />
      </View>
        <Text className='text-[#4F3422] text-4xl mt-5' style={{fontFamily:'urbanist-black'}}>Meditation</Text>
      </SafeAreaView>
  
  )
}

export default SplashScreen