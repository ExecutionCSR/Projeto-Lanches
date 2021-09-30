import React from "react"
import {
  StyleSheet,
  Text,
} from "react-native";

import { 
  RectButton,
  RectButtonProps
 } from "react-native-gesture-handler";
import colors from "../styles/colors";
import fonts from "../styles/fonts";


 interface TypesButtonsProps extends RectButtonProps{
   title: string;
   active?: boolean;
 }

 export function TypesButtons({
   title,
   active=false,
   ... rest
 } : TypesButtonsProps){
   return(
     <RectButton style={[styles.container,active && styles.containerActive]}{...rest}>

       <Text style = {[styles.text,active && styles.textActive]}>
         {title}
       </Text>

     </RectButton>
   )
 }

 const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.salmao,
    height: 40,
    width: 76,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 5
  },
  containerActive:{
    backgroundColor: colors.azul
  },
  text: {
    color: colors.verde,
    fontFamily: fonts.text
  },
  textActive: {
    fontFamily: fonts.title,
    color: colors.preto,
  },
})