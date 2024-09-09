import React from 'react';
import {Text, View, Image, TextInput, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {useState, useEffect} from 'react';
import styles from './style';

import iconPerfil from '../../img/icon-perfil.webp';

export default function LoginScreen ({navigation}) {
  
  const [email, setemail]=useState(null);
  const [password, setPassword]=useState(null);
  const [errorEmail, seterrorEmail]=useState(null);
  const [errorPassword, setErrorPassword]=useState(null);
  const [errorLogin, setErrorLogin]= useState(null);

  const [usuarioExistente, setUsuarioExistente]=useState(false);

  const [clientes, setClientes]=useState([]);

  const getCliente = async()=>{
    try{
      const response = await fetch('http://localhost:8000/api/cliente');
      const json =await response.json();
      setClientes(json);
    }catch(error){
      console.error(error);
    }
  }

  useEffect(()=>{
    getCliente();
  },[])

  const validarLogin=()=>{
    let error=false
    if (email==null ) {
      seterrorEmail("Preencha seu email!!!")
      error=true
    }
    if (password==null) {
      setErrorPassword("Preencha a senha!!!")
      error=true
    }
    return !error
  }

  const verificarUsuario=()=>{
    try{
    for (let index = 0; index < clientes.length; index++) {
     if(clientes[index].email==email){
        if(clientes[index].senha==password){
          setUsuarioExistente(true);
          setErrorLogin(null);
          break
        }else{
          setErrorLogin("Senha incorreta!!!");
          setUsuarioExistente(false);
        }
     }else{
        setErrorLogin("Esse email não está cadastrado!!!")
        setUsuarioExistente(false);
     }
      
    }
  }catch(error){
    console.error(error);
  }
  }
  const logar=()=>{
    if(validarLogin()){
      verificarUsuario()
      if(usuarioExistente){
        navigation.navigate('HomeScreen');
      }else{

      }
        
    }
  }
  const goCadastro=()=>{
    navigation.navigate('Cadastro-Cliente');
  }
  const goLoginADM=()=>{
    navigation.navigate('HomeScreen');
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
                  <Text style={styles.txtInfo}>Usuário</Text>
                </View>

                <View style={styles.container_input}>

                  <TextInput style={styles.input} placeholder="Digite seu nome..." keyboardType="text" onChangeText={(text)=>setemail(text)} errorText={errorEmail}></TextInput>
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

                  <TouchableOpacity style={styles.btn_logar} onPress={()=>logar()}>
                    <Text style={styles.textLogar}>Login</Text>
                  </TouchableOpacity>

                </View>

                <View style={styles.viewTextLink}>
                    <Text style={styles.textLink}>Não tem uma conta?</Text>
                    <TouchableOpacity style={styles.btnLink} onPress={()=>goCadastro()}>
                      <Text style={styles.txtLink}>CLIQUE AQUI!</Text>
                      </TouchableOpacity>
                </View>
                <View style={styles.viewTextLink}>
                  <Text style={styles.textLink}>É ADM?</Text>
                  <TouchableOpacity style={styles.btnLink} onPress={()=>goLoginADM()}><Text style={styles.txtLink}>CLIQUE AQUI!</Text></TouchableOpacity>
                </View>
                <View style={styles.viewError}>
                  <Text style={styles.errorLogin}>{errorLogin}</Text>
                </View>
              </View>

            </View>
            
        
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}