import React, {useEffect, useState} from 'react';
import { Text, View, Image, TextInput, ScrollView, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './style'; 

export default function Categoria({navigation}) {

  const [dataCategoria, setDataCategoria]=useState([]);

  const getCategoria = async()=>{
    try{
      const response = await fetch('http://localhost:8000/api/categoria')
      const json = await response.json();
      setDataCategoria(json);
    }catch(error){
      console.error(error)
    }
  }


  useEffect(()=>{
    getCategoria();
    
  }, []);

  function goPerfil() {
    navigation.navigate("PerfilScreen");
  }
  function goHome(){
    navigation.navigate("HomeScreen")
  }
  function goDevs(){
    navigation.navigate("DevsScreen")
  }
  function comeBack() {
    navigation.navigate("Login")
  }
  function paginaCategoria(idCategoria){

  }
  return (
    <SafeAreaView style={styles.container}>
      
      <ScrollView>
      <LinearGradient colors={["#1C1C1C", "#363636", "#4F4F4F"]} style={styles.gradient}>
        <View style={styles.header}>
          <TouchableOpacity onPress={()=>goPerfil()}>
            <Image source={require('../../img/icon-perfil.webp')} style={styles.profileImage} />
          </TouchableOpacity>
          
          <TextInput style={styles.searchInput} placeholder="Pesquisar" placeholderTextColor="#fff" />
          <TouchableOpacity onPress={()=>comeBack()}>
            <MaterialCommunityIcons name="logout-variant" size={24} color="red" style={styles.settingsIcon}/>
          </TouchableOpacity>
        </View>
        <View style={styles.contCategoria}>
            <View>
                <Text></Text>
            </View>
          <FlatList
            data={dataCategoria}
            keyExtractor={({idCategoria})=>idCategoria}
            contentContainerStyle={styles.moviesContainer}
            renderItem={({item})=>( 
              <View style={styles.viewCardCategoria}>
                  <TouchableOpacity onPress={()=>paginaCategoria(item.idCategoria)}>
                    <Text style={styles.textCategoria}>{item.nomeCategoria}</Text>
                  </TouchableOpacity>
              </View>
            )}
          ></FlatList>
          
        </View>
        
        </LinearGradient>
      </ScrollView>

      <View style={styles.footerMenu}>
        <TouchableOpacity onPress={()=>goHome()}>
          <Ionicons name="film" size={24} color="#fff" style={styles.categoryIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="location-outline" size={24} color="#fff" style={styles.categoryIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>goPerfil()}>
          <Ionicons name="person-outline" size={24} color="#fff" style={styles.categoryIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>goDevs()}>
          <Ionicons name="code-slash-outline" size={24} color="#fff" style={styles.categoryIcon}></Ionicons>
        </TouchableOpacity>
        {/* adc mais categorias */}
      </View>
    </SafeAreaView>
  );
}