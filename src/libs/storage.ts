import AsyncStorage from "@react-native-async-storage/async-storage";

export interface SnacksProps{
  id: string;
  name: string;
  about: string;
  price: string;
  photo: string;
  snacks_types: [string];
}