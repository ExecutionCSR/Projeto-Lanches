import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,Image, Alert } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/core';


export function Welcome(){
  const navigation = useNavigation();

  function handleStart(){
    navigation.navigate('User')
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style = {styles.box}>
      <Text style = {styles.title} >
        Seja Bem Vindo!!
      </Text>
      <Image 
      source={{uri: 'https://img.freepik.com/free-vector/vending-machine-with-fast-food-snacks-drinks-nuts-chips-cracker-juice-sandwich-colorful-automat-front-view-with-cold-drink-snack-popcorn-coffee-flat-design-illustration_167581-559.jpg?size=338&ext=jpg'}}
      style={styles.Img} 
      />
      <Button title='Confirmar'
            onPress= {handleStart}
            />
      </View>
    </SafeAreaView>
   
  );

  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.salmao,
    alignItems: 'center',
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
  title: {
    fontFamily: fonts.title,
    color: colors.preto,
    fontSize: 20
  },
  Img: {
    width: 400, 
    height: 400, 
    backgroundColor: colors.rosa
  }
});
