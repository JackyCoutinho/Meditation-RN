import AppNavigation from './src/navigation'
import{ActivityIndicator} from 'react-native'
import {useFonts} from 'expo-font'

export default function App() {
  let [fontLoaded] = useFonts({
    'urbanist-black': require('./assets/fonts/Urbanist-Black.ttf'),
    'urbanist-extrabold': require('./assets/fonts/Urbanist-ExtraBold.ttf'),
    'urbanist-thin': require('./assets/fonts/Urbanist-Thin.ttf'),
  })

  if(!fontLoaded){
    return <ActivityIndicator size='large' color='#4F3422' />
  }
  return (
   <AppNavigation />
  );
}

