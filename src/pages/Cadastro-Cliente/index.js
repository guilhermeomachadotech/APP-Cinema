import React from 'react';
import {Text, View, Image, TextInput, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {useState} from 'react';
import styles from './style';


import iconPerfil from '../../img/icon-perfil.webp';

export default function CadastroCliente ({navigation}) {
  
  const [nickname, setNickName]=useState(null);
  const [password, setPassword]=useState(null);
  const [email, setEmail]=useState(null);
  const [errorName, setErrorName]=useState(null);
  const [errorEmail, setErrorEmail]=useState(null);
  const [errorPassword, setErrorPassword]=useState(null);

  const validarLogin=()=>{
    let error=false
    if (nickname==null ) {
      setErrorName("Preencha seu nome!!!")
      error=true
    }
    if (password==null) {
      setErrorPassword("Preencha a senha!!!")
      error=true
    }
    if (email==null) {
      setErrorEmail("Preencha o email!!!")
      error=true
    }
    return !error
  }

  const cadastrar=()=>{
    if(validarLogin()){
        fetch('https://e470-2804-7518-49bd-de00-454c-a0fa-c249-dffe.ngrok-free.app/api/cliente', {
          method: 'post',
          headers:{
            'Accept':'application/json',
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            nome: nickname,
            email: email,
            senha: password,
          })
        })
        navigation.navigate('HomeScreen');
    }
  }
  const goLogin=()=>{
    navigation.navigate('Login');
  }
  return (

    <SafeAreaView style={styles.container}>
       <LinearGradient colors={["#1C1C1C", "#363636", "#4F4F4F"]} style={styles.gradient}>
        <ScrollView style={styles.scroll}>
          
            <View style={styles.container_img}>
              <Image style={styles.imgPerfil} source={iconPerfil}></Image>
            </View>

            <View style={styles.viewForm}>
              <View style={styles.container_conteudo_form}>

                <View style={styles.label}>
                  <Text style={styles.txtInfo}>Nome:</Text>
                </View>

                <View style={styles.container_input}>

                  <TextInput style={styles.input} placeholder="Digite seu nome..." keyboardType="text" onChangeText={(text)=>setNickName(text)} errorText={errorName}></TextInput>
                  <Text style={styles.errorMessage}>{errorName}</Text>
                </View>

                <View style={styles.label}>
                  <Text style={styles.txtInfo}>Email</Text>
                </View>

                <View style={styles.container_input}>

                  <TextInput style={styles.input} placeholder="Digite seu email..." keyboardType="email-address" onChangeText={(text)=>setEmail(text)} errorText={errorEmail}></TextInput>
                  <Text style={styles.errorMessage}>{errorEmail}</Text>
                </View>

                <View style={styles.label}>

                  <Text style={styles.txtInfo}>Senha</Text>

                </View>
                <View style={styles.container_input}>

                  <TextInput secureTextEntry={true} style={styles.input} placeholder="Digite sua senha..." keyboardType="default" onChangeText={(text)=>setPassword(text)} errorMessage={errorPassword}></TextInput>
                  <Text style={styles.errorMessage}>{errorPassword}</Text>

                </View>

                <View style={styles.container_btn}>

                  <TouchableOpacity style={styles.btn_logar} onPress={()=>cadastrar()}>
                    <Text style={styles.textLogar}>Cadastrar</Text>
                  </TouchableOpacity>

                </View>

                <View style={styles.viewTextLink}>
                  <Text style={styles.textLink}>Já tem uma conta?</Text>
                  <TouchableOpacity style={styles.btnLink} onPress={()=>goLogin()}><Text style={styles.txtLink}>CLIQUE AQUI!</Text></TouchableOpacity>
                </View>

              </View>

            </View>
            
        
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}