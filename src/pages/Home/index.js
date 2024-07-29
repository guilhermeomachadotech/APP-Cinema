import React, {useEffect, useState} from 'react';
import { Text, View, Image, TextInput, ScrollView, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './style'; 

export default function HomeScreen({navigation}) {

  const [dataFilmesAcao, setDataFilmeAcao]=useState([]);
  const [dataFilmesAnimacao, setDataFilmesAnimacao]=useState([]);
  const [dataFilmesComedia, setDataFilmesComedia]=useState([]);
  const [dataFilmesSuspenses, setDataFilmesSuspense]=useState([]);
  const [dataFilmesDrama, setDataFilmesDrama]=useState([]);
  const [dataFilmesAventura, setDataFilmesAventura]=useState([]);

  const getFilmesAcao = async()=>{
    try{
      const response = await fetch('http://localhost:8000/api/filme-acao')
      const json = await response.json();
      setDataFilmeAcao(json);
    }catch(error){
      console.error(error)
    }
  }

  const getFilmesAnimacao = async()=>{
    try{
      const response = await fetch('http://localhost:8000/api/filme-animacao')
      const json = await response.json();
      setDataFilmesAnimacao(json);
    }catch(error){
      console.error(error)
    }
  }

  const getFilmesAventura = async()=>{
    try{
      const response = await fetch('http://localhost:8000/api/filme-aventura')
      const json = await response.json();
      setDataFilmesAventura(json);
    }catch(error){
      console.error(error)
    }
  }

  const getFilmesDrama = async()=>{
    try{
      const response = await fetch('http://localhost:8000/api/filme-drama')
      const json = await response.json();
      setDataFilmesDrama(json);
    }catch(error){
      console.error(error)
    }
  }

  const getFilmesComedia = async()=>{
    try{
      const response = await fetch('http://localhost:8000/api/filme-comedia')
      const json = await response.json();
      setDataFilmesComedia(json);
    }catch(error){
      console.error(error)
    }
  }

  const getFilmesSuspense = async()=>{
    try{
      const response = await fetch('http://localhost:8000/api/filme-suspense')
      const json = await response.json();
      setDataFilmesSuspense(json);
    }catch(error){
      console.error(error)
    }
  }

  useEffect(()=>{
    getFilmesAcao();
    getFilmesAnimacao();
    getFilmesAventura();
    getFilmesDrama();
    getFilmesComedia();
    getFilmesSuspense();
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

  function goCategoria(){
    navigation.navigate("Categoria")
  }
  return (
    <SafeAreaView style={styles.container}>
      
      <ScrollView>
      <LinearGradient colors={["#1C1C1C", "#363636", "#4F4F4F"]} style={styles.gradient}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.btnLink} onPress={()=>goPerfil()}>
            <Image source={require('../../img/icon-perfil.webp')} style={styles.profileImage} />
          </TouchableOpacity>
          
          <TextInput style={styles.searchInput} placeholder="Pesquisar" placeholderTextColor="#fff" />
          <TouchableOpacity onPress={()=>comeBack()}>
            <MaterialCommunityIcons name="logout-variant" size={24} color="red" style={styles.settingsIcon}/>
          </TouchableOpacity>
        </View>
        <View style={styles.contFilmes}>
          <View style={styles.contCategoriaLink}>
            <TouchableOpacity onPress={()=>goCategoria()}>
              <Text style={styles.textLinkCategoria}>Ver Todas as categorias</Text>
            </TouchableOpacity>
          </View>
        <View style={styles.viewCategoria}>
          <Text style={styles.categoryTitle}>Ação</Text>
        </View>
          <FlatList
            data={dataFilmesAcao}
            keyExtractor={({idFilme})=>idFilme}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.moviesContainer}
            renderItem={({item})=>( 
              <View style={styles.movie}>
                  <Image source={{ uri: item.imgFilme }} style={styles.movieImage}></Image>
                  <Text style={styles.movieTitle}>{item.tituloFilme}</Text>
                  <View style={styles.descView}>
                    <Image source={item.classificacaoFilme} style={styles.movieClass}></Image>
                    <View style={styles.viewTextMovie}>
                      <Text style={styles.movieDescription}>{item.duracaoFilme} - {item.anoLancamento}</Text>
                    </View>
                  </View>
              </View>
            )}
          ></FlatList>
          <View style={styles.viewCategoria}>
            <Text style={styles.categoryTitle}>Animação</Text>
          </View>
          <FlatList
            data={dataFilmesAnimacao}
            keyExtractor={({idFilme})=>idFilme}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.moviesContainer}
            renderItem={({item})=>(
              <View style={styles.movie}>
                  <Image source={item.imgFilme} style={styles.movieImage}></Image>
                  <Text style={styles.movieTitle}>{item.tituloFilme}</Text>
                  <View style={styles.descView}>
                    <Image source={item.classificacaoFilme} style={styles.movieClass}></Image>
                    <View style={styles.viewTextMovie}>
                      <Text style={styles.movieDescription}>{item.duracaoFilme} - {item.anoLancamento}</Text>
                    </View>
                  </View>
              </View>
            )}
          ></FlatList>
          <View style={styles.viewCategoria}>
            <Text style={styles.categoryTitle}>Drama</Text>
          </View>
          <FlatList
            data={dataFilmesDrama}
            keyExtractor={({idFilme})=>idFilme}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.moviesContainer}
            renderItem={({item})=>( 
              <View style={styles.movie}>
                  <Image source={item.imgFilme} style={styles.movieImage}></Image>
                  <Text style={styles.movieTitle}>{item.tituloFilme}</Text>
                  <View style={styles.descView}>
                    <Image source={item.classificacaoFilme} style={styles.movieClass}></Image>
                    <View style={styles.viewTextMovie}>
                      <Text style={styles.movieDescription}>{item.duracaoFilme} - {item.anoLancamento}</Text>
                    </View>
                  </View>
              </View>
            )}
          ></FlatList>
          <View style={styles.viewCategoria}>
            <Text style={styles.categoryTitle}>Suspense</Text>
          </View>
          
          <FlatList
            data={dataFilmesSuspenses}
            keyExtractor={({idFilme})=>idFilme}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.moviesContainer}
            renderItem={({item})=>( 
              <View style={styles.movie}>
                  <Image source={item.imgFilme} style={styles.movieImage}></Image>
                  <Text style={styles.movieTitle}>{item.tituloFilme}</Text>
                  <View style={styles.descView}>
                    <Image source={item.classificacaoFilme} style={styles.movieClass}></Image>
                    <View style={styles.viewTextMovie}>
                      <Text style={styles.movieDescription}>{item.duracaoFilme} - {item.anoLancamento}</Text>
                    </View>
                  </View>
              </View>
            )}
          ></FlatList>
            <View style={styles.viewCategoria}>
              <Text style={styles.categoryTitle}>Comédia</Text>
            </View>
          <FlatList
            data={dataFilmesComedia}
            keyExtractor={({idFilme})=>idFilme}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.moviesContainer}
            renderItem={({item})=>( 
              <View style={styles.movie}>
                  <Image source={item.imgFilme} style={styles.movieImage}></Image>
                  <Text style={styles.movieTitle}>{item.tituloFilme}</Text>
                  <View style={styles.descView}>
                    <Image source={item.classificacaoFilme} style={styles.movieClass}></Image>
                    <View style={styles.viewTextMovie}>
                      <Text style={styles.movieDescription}>{item.duracaoFilme} - {item.anoLancamento}</Text>
                    </View>
                  </View>
              </View>
            )}
          ></FlatList>
          <View style={styles.viewCategoria}>
            <Text style={styles.categoryTitle}>Aventura</Text>
          </View>
          <FlatList
            data={dataFilmesAventura}
            keyExtractor={({idFilme})=>idFilme}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.moviesContainer}
            renderItem={({item})=>( 
              <View style={styles.movie}>
                  <Image source={item.imgFilme} style={styles.movieImage}></Image>
                  <Text style={styles.movieTitle}>{item.tituloFilme}</Text>
                  <View style={styles.descView}>
                    <Image source={item.classificacaoFilme} style={styles.movieClass}></Image>
                    <View style={styles.viewTextMovie}>
                      <Text style={styles.movieDescription}>{item.duracaoFilme} - {item.anoLancamento}</Text>
                    </View>
                  </View>
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