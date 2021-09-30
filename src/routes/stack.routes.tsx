import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../styles/colors";
import { Welcome } from "../pages/Bem-vindo";
import { User } from "../pages/UserComfimation";
import { CadAdm } from "../pages/CadAdm";
import { CadCli } from "../pages/CadCli";
import { MnuProd } from "../pages/MenuProdutos";

const StackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <StackRoutes.Navigator
  screenOptions={{
    headerShown:false,
    cardStyle: {
      backgroundColor: colors.branco
    },
  }}
  >

  <StackRoutes.Screen 
  name="Welcome"
  component = {Welcome}
  />

  <StackRoutes.Screen 
    name="User"
    component = {User}
  />

<StackRoutes.Screen 
    name="CadAdm"
    component = {CadAdm}
  />
<StackRoutes.Screen 
    name="CadCli"
    component = {CadCli}
  />

<StackRoutes.Screen 
    name="MnuProd"
    component = {MnuProd}
  />

  </StackRoutes.Navigator>
)

export default AppRoutes;