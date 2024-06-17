import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {useState, useEffect} from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

import iconPerfil from './img/icon-perfil.webp';

export default function CadastroFilmes() {
    const navigation =useNavigation();
  const [titulo, setTitulo]=useState(null);
  const [anoLanc, setAnoLanc]=useState(null);
  const [errorTitulo, setErroTitulo]=useState(null);
  const [errorAnoLanc, setErrorAnoLanc]=useState(null);
  const [categoria, setCategoria]=useState(null);
  const [errorCategoria, setErrorCategoria]=useState(null);
  const [duracaoFilme, setDuracaoFilme]=useState(null);
  const [errorDuracaoFilme, setErrorDuracaoFilme]=useState(null);
  const [faixaEtaria, setFaixaEtaria]= useState(null);
  const [errorFaixaEtaria, setErrorFaixaEtaria]= useEffect(null);
  const [poster, setPoster]=useState(null);
  const [errorPoster, setErrorPoster]=useState(null);

  const [dataCategoria, setDataCategoria]=useState([]);

  const [dataClassificação, setDataClass]=useState(
    [

    ]
    )

  const getCategoria= async()=>{
    try{
        const response = await fetch('http://localhost:8000/api/categoria');
        const json = await response.json();
        setDataCategoria(json);
    }catch(error){
        console.error(error);
    }
  }

  const validarCadastro=()=>{
    let error=false
    if (titulo==null) {
      setErrorName("Preencha o titulo corretamente!!!")
      error=true
    }
    if (anoLanc==null || anoLanc.lenght>4) {
      setErrorPassword("Preencha o ano corretamente")
      error=true
    }
    return !error
  }

  const cadastrar=()=>{
    if(validarCadastro()){
        navigation.navigate('HomeScreen');
    }
  }
  const goCadastro=()=>{
    navigation.navigate('Cadastro-Cliente')
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
                  <Text style={styles.txtInfo}>Titulo</Text>
                </View>

                <View style={styles.container_input}>

                  <TextInput style={styles.input} placeholder="Digite o titulo do filme..." keyboardType="text" onChangeText={(text)=>setTitulo(text)} errorText={errorTitulo}></TextInput>
                  <Text style={styles.errorMessage}>{errorTitulo}</Text>
                </View>

                <View style={styles.label}>

                  <Text style={styles.txtInfo}>Ano Lançamento:</Text>

                </View>
                <View style={styles.container_input}>

                  <TextInput style={styles.input} placeholder="Digite o ano de lançamento..." placeholderTextColor="#FFF"  keyboardType="number-pad" onChangeText={(text)=>setAnoLanc(text)} errorMessage={errorAnoLanc}></TextInput>
                  <Text style={styles.errorMessage}>{errorAnoLanc}</Text>

                </View>

                <View style={styles.label}>

                  <Text style={styles.txtInfo}>Categoria:</Text>

                </View>
                <View style={styles.container_input}>

                  <TextInput style={styles.input} placeholder="Selecione a categoria" placeholderTextColor="#FFF"  keyboardType="number-pad" onChangeText={(text)=>setCategoria(text)} errorMessage={errorCategoria}></TextInput>
                  <Text style={styles.errorMessage}>{errorCategoria}</Text>

                </View>

                <View style={styles.label}>

                  <Text style={styles.txtInfo}>Duracao do Filme:</Text>

                </View>
                <View style={styles.container_input}>

                  <TextInput style={styles.input} placeholder="Digite a duração do filme..." placeholderTextColor="#FFF"  keyboardType="text" onChangeText={(text)=>setDuracaoFilme(text)} errorMessage={errorDuracaoFilme}></TextInput>
                  <Text style={styles.errorMessage}>{errorDuracaoFilme}</Text>

                </View>

                <View style={styles.label}>

                  <Text style={styles.txtInfo}>Poster do Filme:</Text>

                </View>
                <View style={styles.container_input}>

                  <TextInput style={styles.input} placeholder="Coloque o poster do filme aqui" placeholderTextColor="#FFF"  keyboardType="text" onChangeText={(text)=>setPoster(text)} errorMessage={errorPoster}></TextInput>
                  <Text style={styles.errorMessage}>{errorPoster}</Text>

                </View>

                <View style={styles.container_btn}>

                  <TouchableOpacity style={styles.btn_logar} onPress={()=>cadastrar()}>
                    <Text style={styles.textLogar}>Cadastrar</Text>
                  </TouchableOpacity>

                </View>
              </View>

            </View>
            
        
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}