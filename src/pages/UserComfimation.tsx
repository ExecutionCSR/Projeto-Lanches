import { useNavigation } from "@react-navigation/core";
import React from "react";
import { 
  StyleSheet,
  View,
  Text,
  SafeAreaView
 } from "react-native";
import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function User(){
const navigation = useNavigation()

  function UserAdm(){
    navigation.navigate("CadAdm")
  };

  function UserCli(){
    navigation.navigate("CadCli")
  };


  return(
    < SafeAreaView style = {styles.container}>
      <View style = {styles.Card}>
        <Text style = {styles.title}>
          Usuarios
        </Text>
        <Text style= {styles.text}>
          Confirme seu usuario{'\n'}
          para podermos continuarmos
        </Text>
        <View style = {styles.Master}>
          <View >
          <Button title='Login'
            onPress= {UserAdm}
            />
            <Text style = {styles.Adm}>
              Administrador
            </Text>
          </View>
          <View style= {styles.Master2}>
          <View>
          <Button title='Login'
            onPress= {UserCli}
            />
            <Text style = {styles.Cli}>
              Cliente
            </Text>
          </View>
          </View>
          </View>
        
      </View>
    </SafeAreaView>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: "100%",
    backgroundColor: colors.salmao,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Card: {
    backgroundColor: colors.branco,
    height: "97%",
    width: "97%",
    borderRadius: 10,
  },
  text : {
    textAlign: 'center',
    fontFamily: fonts.text,
    fontSize: 15,
    color: colors.preto,
  },
  title: {
    textAlign: 'center',
    fontFamily: fonts.title,
    fontSize: 40,
    color: colors.rosa
  },
  Master: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Adm: {
    fontFamily: fonts.title,
    fontSize: 20,
    color: colors.rosa,
    height: 50,
    width: '100%',
  },
  Cli: {
    fontFamily: fonts.title,
    fontSize: 20,
    color: colors.verde,

    height: 50,
    width: '100%',
  },
  Master2: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    width: '50%',
    height: 120,
    justifyContent: 'center'
  }

})