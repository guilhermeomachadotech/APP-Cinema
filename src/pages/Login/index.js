import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {useState} from 'react';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

import iconPerfil from './img/icon-perfil.webp';

export default function App() {
    const navigation =useNavigation();
  const [nickname, setNickName]=useState(null);
  const [password, setPassword]=useState(null);
  const [errorName, setErrorName]=useState(null);
  const [errorPassword, setErrorPassword]=useState(null);

  const validarLogin=()=>{
    let error=false
    if (nickname==null) {
      setErrorName("Preencha seu nome!!!")
      error=true
    }
    if (password==null) {
      setErrorPassword("Preencha a senha!!!")
      error=true
    }
    return !error
  }

  const logar=()=>{
    if(validarLogin()){
        navigation.navigate('HomeScreen');
    }
  }
  const goCadastro=()=>{

  }
  return (

    <SafeAreaView style={styles.container}>
      <LinearGradient colors={["#2D195F", "#4D2AA3", "#6D3CE7", "#7C3EF0"]} style={styles.gradient}>
        <ScrollView style={styles.scroll}>
          
            <View style={styles.container_img}>
              <Image style={styles.imgPerfil} source={iconPerfil}></Image>
            </View>

            <View style={styles.viewForm}>
              <View style={styles.container_conteudo_form}>
                <View style={styles.label}>
                  <Text style={styles.txtInfo}>Usuário</Text>
                </View>

                <View style={styles.container_input}>

                  <TextInput style={styles.input} placeholder="Digite seu nome..." keyboardType="text" onChangeText={(text)=>setNickName(text)} errorText={errorName}></TextInput>
                  <Text style={styles.errorMessage}>{errorName}</Text>
                </View>

                <View style={styles.label}>

                  <Text style={styles.txtInfo}>Senha</Text>

                </View>
                <View style={styles.container_input}>

                  <TextInput style={styles.input} placeholder="Digite sua senha..." keyboardType="password" onChangeText={(text)=>setPassword(text)} errorMessage={errorPassword}></TextInput>
                  <Text style={styles.errorMessage}>{errorPassword}</Text>

                </View>

                <View style={styles.container_btn}>

                  <TouchableOpacity style={styles.btn_logar} onPress={()=>logar()}>
                    <Text style={styles.textLogar}>Login</Text>
                  </TouchableOpacity>

                </View>

                <View style={styles.viewTextLink}>
                  <Text style={styles.textLink}>Não tem uma conta? <TouchableOpacity style={styles.btnLink} onPress={()=>goCadastro()}><Text>CLIQUE AQUI!</Text></TouchableOpacity></Text>
                </View>

              </View>

            </View>
            
        
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}