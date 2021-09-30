import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts,
  FiraSans_100Thin,
  FiraSans_300Light,
  FiraSans_400Regular
} 
from '@expo-google-fonts/fira-sans';
import Routes from './src/routes';


export default function App() {
  const [fontsLoaded] = useFonts({
    FiraSans_300Light,
    FiraSans_100Thin,
    FiraSans_400Regular
  });

  if(!fontsLoaded)
  return <AppLoading />

 return (
   <Routes/>
 )
  
}
