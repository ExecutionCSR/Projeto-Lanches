import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { 
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  Alert
} from "react-native";
import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";


export function CadAdm(){
  const [isFocused,setISFocused] = useState (false);

  const [isFiled,setIsFiled] = useState(false);

  const [name, setName] = useState<string>();

    function handleInputBlur(){
      setISFocused(false);
      setIsFiled(!!name)
    }

    function handleInputFocus (){
      setISFocused(true)
    }

    function handleInputChange(value: string){
      setIsFiled(!! value);
      setName(value);
    }

  const navigation = useNavigation()

  function handleStart(){
    if(!name){
    return Alert.alert('Me diz como chamar você   👺  ');}
    else{
    navigation.navigate("MnuProd")}
  };

return(
  <SafeAreaView style = {styles.container}>
    <View style = {styles.box}>
      <Text style = {styles.title}>
        Conta de Administrador
      </Text>
      <Text style = {styles.text}>
        Coloque seu e-mail de login{'\n'}
        e sua senha
      </Text>
      <TextInput style = {
            styles.input
          }
            placeholder='e-mail ou apelido'
          />
      <TextInput style = {[
            styles.input,
            (isFocused || isFiled) &&{borderColor: colors.rosa}
          ]}
            placeholder='senha'
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            onChangeText={handleInputChange}
          />
      <Button 
      title = 'entrar'
      onPress= {handleStart}
      />

    </View>
  </SafeAreaView>

)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.salmao,
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.title,
    color: colors.rosa,
    fontSize: 25,
    textAlign: 'center'
  },
  text : {
    textAlign: 'center',
    fontFamily: fonts.text,
    fontSize: 15,
    color: colors.preto,
  },
  box: {
    backgroundColor: colors.branco,
    alignItems: 'center',
    justifyContent: 'center',
    height: "97%",
    width: "97%",
    top: 20,
    borderRadius: 10,
  },
  input:{
    borderBottomWidth: 1,
    borderColor: colors.preto,
    color: colors.salmao,
    width: '40%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center'
  },
  Img: {
    width: 400, 
    height: 400, 
    backgroundColor: colors.rosa
  }
}) 