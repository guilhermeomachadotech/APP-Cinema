import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './../src/splash/splash1'; 
import LoginScreen from './../src/login/log';
import CadastroScreen from './../src/login/cadastro';
import Acao1 from './../src/pages/acao/acao1'; 
import Aventura1 from './../src/pages/aventura/aventura1'; 
import Comedia1 from './../src/pages/comedia/comedia1';
import Terror1 from './../src/pages/terror/terror1';
import SobreNos from './../src/pages/SobreNos';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" headerMode="none">
        <Stack.Screen name="Splash" component={SplashScreen} /> 
        <Stack.Screen name="Login" component={LoginScreen} /> 
        <Stack.Screen name="Cadastro" component={CadastroScreen} /> 
        <Stack.Screen name="Ação - Em cartaz" component={Acao1} /> 
        <Stack.Screen name="Aventura - Em cartaz" component={Aventura1} />
        <Stack.Screen name="Comédia - Em cartaz" component={Comedia1} />
        <Stack.Screen name="Terror - Em cartaz" component={Terror1} />
        <Stack.Screen name="SobreNos" component={SobreNos} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
