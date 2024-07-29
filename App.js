import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/pages/Login/login';
import PerfilScreen from './src/pages/Perfil/index';
import DevsScreen from './src/pages/Desenvolvedores/index';
import SplashScreen from './src/pages/Splash/index';
import HomeScreen from './src/pages/Home/index';
import Categotia from './src/pages/Categorias/index';
import CadastroCliente from './src/pages/Cadastro-Cliente';
import CadastroFilmes from './src/pages/Cadastro-Filmes';
import LoginADM from './src/pages/LoginADM';

const Stack =createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="Login" component={LoginScreen}
        options={{
          headerShown:false,
        }}/>
        <Stack.Screen name="PerfilScreen" component={PerfilScreen}
        options={{
          headerShown:false,
        }}/>
        <Stack.Screen name="DevsScreen" component={DevsScreen}
        options={{
          headerShown:false,
        }}/>
        <Stack.Screen name='SplashScreen' component={SplashScreen}
          options={{
            headerShown:false,
          }}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen}
        options={{
          headerShown:false,
        }}/>
        <Stack.Screen name="Categoria" component={Categotia}
        options={{
          headerShown:false,
        }}/>
        <Stack.Screen name="Cadastro-Cliente" component={CadastroCliente}
        options={{
          headerShown:false,
        }}/>
        <Stack.Screen name="LoginADM" component={LoginADM}
        options={{
          headerShown:false,
        }}/>
        <Stack.Screen name="CadastroFilmes" component={CadastroFilmes}
        options={{
          headerShown:false,
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}