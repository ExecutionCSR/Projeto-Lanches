import React, { useEffect, useState } from "react";
import { 
  Text,
  ScrollView,
  View,
  FlatList
 } from "react-native";
import { SnacksCardPrimary } from "../components/SnacksCardPrimary";
import { TypesButtons } from "../components/TypesButtons";


import { SnacksProps } from "../libs/storage";
import api from "../services/api"

interface TypesProps{
  key: string;
  title: string;
}


export function MnuProd(){
  const [types, setTypes] = useState<TypesProps[]>([]);
  const [snacks, setSnacks] = useState<SnacksProps[]>([]);
  const [typesSelected, setTypesSelected] = useState('all')
  const [snacksFiltered,setSnacksFiltered] = useState<SnacksProps[]>([]);


  function handleTypesSelected(types: string){
    setTypesSelected(types);

    if(types == 'all')
    return setSnacksFiltered(snacks);

    const filtered = snacks.filter(snacks => snacks.snacks_types.includes(types));

    setSnacksFiltered(filtered)
  }

  async function fetchSnacks(){
    const {data} = await api.get('snacks');

    if(!data)
    return console.log('error')
    else{
      setSnacks(data);
      setSnacksFiltered(data);
    }
  }

  useEffect(() => {
    async function fetchTypes(){
      const { data } = await  api.get('snacks_types');
      setTypes([
        {
          key:'all',
          title: 'todos'
        },
        ... data 
      ]);
    }
    fetchTypes();
  },[])


   return(
     <ScrollView>
       <View>

         <FlatList 
         data = {types}
         keyExtractor = {(item) => String(item.key)}
         renderItem = {({item}) => (
           <TypesButtons
           title = {item.title}
           active = {item.key === typesSelected}
           onPress = {() => handleTypesSelected(item.key)}
           />
         )}
         horizontal
         showsVerticalScrollIndicator = {false}
         />

       </View>

       <View>
         <FlatList 
         data = {snacksFiltered}
         keyExtractor= {(item) => String(item.id)}
         renderItem = {({item}) => (
           <SnacksCardPrimary 
           onPress = {(console.table)}
           data = {item}
           />
         )}
         />
       </View>
     </ScrollView>
   )
 }