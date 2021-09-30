import React from "react";
import { 
  TouchableOpacity,
  Text,
  StyleSheet,
  ButtonProps,
  TouchableOpacityProps
} from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface ButtonsProps extends TouchableOpacityProps{
  title: string;
}

export function Button({title, ...rest}:ButtonProps){
  return(
    <TouchableOpacity 
    style = {styles.container}
    {...rest}
    >
      <Text style = {styles.text} >
        {title}
      </Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: colors.salmao,
    borderRadius: 16,
    alignItems: 'center',
    height: 56,
  },
  text: {
    fontFamily: fonts.title,
    color: colors.branco,
    fontSize: 15
  }
})