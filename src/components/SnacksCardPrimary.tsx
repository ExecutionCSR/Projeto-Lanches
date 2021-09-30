import React from "react"
import {
  StyleSheet,
  Text,
  Image
} from "react-native";
import {RectButton,RectButtonProps} from 'react-native-gesture-handler'

interface SnacksProps extends RectButtonProps {
  data : {
    name: string;
    photo: string;
  }
}

export const SnacksCardPrimary = ({data, ...rest} : SnacksProps) =>{
  return(
    <RectButton {...rest}>
      <Image source = {data.photo}/>

      <Text>
        {data.name}
      </Text>

    </RectButton>
  )
}