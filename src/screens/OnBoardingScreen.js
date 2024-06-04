import { View, Text, Image, Dimensions,PixelRatio } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import AppIntroSlider from 'react-native-app-intro-slider';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('screen')

const slides = [
  {
    key: 1,
    title: 'Title 1',
    text1: 'Personalize Your Mental ',
    text2: 'Health State ',
    text3: 'With AI',
    image: require('../../assets/images/intro1.png'),
    primaryColor: '#4F3422',
    secondColor: '#9BB168',
  },
  {
    key: 2,
    title: 'Title 2',
    text1: '',
    text2: 'Inteligent ',
    text3: 'Mood Tracking \n & AI Emotion Insights',
    image: require('../../assets/images/intro2.png'),
    primaryColor: '#4F3422',
    secondColor: '#ED7E1C',
  },
  {
    key: 3,
    title: 'Rocket guy',
    text1: 'AI ',
    text2: 'Mental ',
    text3: 'Journaling \n & AI Therapy Chatbot',
    image: require('../../assets/images/intro3.png'),
    primaryColor: '#4F3422',
    secondColor: '#736B66',
  },
  {
    key: 4,
    title: 'Rocket guy',
    text1: 'Mindful ',
    text2: 'Resources ',
    text3: 'That Makes You Happy',
    image: require('../../assets/images/intro4.png'),
    primaryColor: '#4F3422',
    secondColor: '#FFBD1A',
  },
  {
    key: 5,
    title: 'Rocket guy',
    text1: 'Loving & Supportive ',
    text2: 'Community',
    text3: '',
    image: require('../../assets/images/intro5.png'),
    primaryColor: '#4F3422',
    secondColor: '#A694F5',
  }
];

const OnBoardingScreen = () => {

  const navigation = useNavigation()
  const [showHomePage, setShowHomePage] = useState(false)
  const fontScale = PixelRatio.getFontScale()
  const getFontSize = size => size/fontScale


  const buttonLabel = () =>{
      return(
        <View className='absolute bottom-[20] left-[-380] right-0 items-center'>
          <View className='justify-center items-center w-20 h-20 rounded-full bg-[#4F3422]'>
           <Ionicons name="arrow-forward" size={24} color="white" />
          </View>
        </View>
      )
  }

  if(!showHomePage) {
      return(
          <AppIntroSlider 
              data={slides}
              activeDotStyle={{
                  backgroundColor: '#4F3422',
                  width: 30
              }}
              renderItem={({item})=>{
                  return(
                    <View style={{width: width, height: height}} >
                      <View className='absolute top-0 right-0 left-0 bottom-0 items-center'>
                        <Image 
                            source={item.image}
                            // style={{width: width, height: 400}} resizeMode='contain'
                            className='w-full h-full'
                        />
                      </View>
                      <View className=' justify-center items-center w-[400]' style={{marginTop: hp(65)}}>
                        <Text className='text-center 'style={{color:item.primaryColor, fontFamily:'urbanist-extrabold', fontSize: getFontSize(30)}}>{item.text1}
                        <Text style={{color:item.secondColor}}>{item.text2}
                        <Text style={{color:item.primaryColor}}>{item.text3}</Text></Text></Text>
                      </View>
                      
                    </View>



                  )
              }}
              // showSkipButton
              dotClickEnabled={false}
              renderNextButton={()=> buttonLabel()}
              // renderSkipButton={()=> buttonLabel('Skip')}
              renderDoneButton={()=> buttonLabel()}
              onDone={()=> navigation.navigate('Home')}
          />
      )
  }

return (
  <View>
    <Text>OnBoardingScreen</Text>
  </View>
)
}

export default OnBoardingScreen