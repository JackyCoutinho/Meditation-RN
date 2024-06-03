import AppNavigation from './src/navigation'
import{ActivityIndicator} from 'react-native'
import {useFonts} from 'expo-font'

export default function App() {
  let [fontLoaded] = useFonts({
    'urbanist-black': require('./assets/fonts/Urbanist-Black.ttf'),
    
  })

  if(!fontLoaded){
    return <ActivityIndicator size='large' color='#4F3422' />
  }
  return (
   <AppNavigation />
  );
}

