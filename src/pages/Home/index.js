import React, {useEffect, useState} from 'react';
import { Text, View, Image, TextInput, ScrollView, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import styles from './style'; 

const teste = '../../img/filmes/madame-teia.jpeg'
/*const movies = [
  { id: 1, title: 'Madame Teia', description: 'Description of Movie 1', category: 'Ação', image: require('../../img/filmes/madame-teia.jpeg') },
  { id: 1, title: 'Aquaman 2', description: 'Description of Movie 1', category: 'Ação', image: require('../../img/filmes/aquaman 2.jpg') },
  { id: 1, title: 'Zona de Risco', description: 'Description of Movie 1', category: 'Ação', image: require('../../img/filmes/zona-de-risco.webp') },
  { id: 1, title: 'Argylle: O Superespião', description: 'Description of Movie 1', category: 'Ação', image: require('../../img/filmes/argylle.webp') },

  { id: 2, title: 'Duna 2', description: 'Description of Movie 2', category: 'Drama', image: require('../../img/filmes/Duna-2.jpg') },  
  { id: 2, title: 'O Menino e a Garça', description: 'Description of Movie 2', category: 'Drama', image: require('../../img/filmes/o-menino-e-garca.webp') },
  { id: 2, title: 'Bob Marley: One Love', description: 'Description of Movie 2', category: 'Drama', image: require('../../img/filmes/bob-marley-one-love.jpeg') },
  { id: 2, title: 'Demon Slayer: Para o Treinamento Hashira', description: 'Description of Movie 2', category: 'Drama', image: require('../../img/filmes/demon-slayer.webp') },
  { id: 2, title: 'Pobres Criaturas', description: 'Description of Movie 2', category: 'Drama', image: require('../../img/filmes/pobres-criaturas.jpeg') },


  { id: 3, title: 'Kun Fu Panda 4', description: 'Description of Movie 3', category: 'Comédia', image: require('../../img/filmes/kungfupanda_4.jpeg') },
  { id: 3, title: 'Os Farofeiros 2', description: 'Description of Movie 3', category: 'Comédia', image: require('../../img/filmes/os-farofeiros2.jpg') },
  { id: 3, title: 'Divertidamente 2', description: 'Description of Movie 3', category: 'Comédia', image: require('../../img/filmes/divertidamente 2.webp') },
  { id: 3, title: 'Pobres Criaturas', description: 'Description of Movie 3', category: 'Comédia', image: require('../../img/filmes/pobres-criaturas.jpeg') },


  { id: 4, title: 'Imaginário', description: 'Description of Movie 4', category: 'Suspense', image: require('../../img/filmes/imaginario.jpeg') },
  { id: 4, title: 'Desespero Profundo', description: 'Description of Movie 4', category: 'Suspense', image: require('../../img/filmes/desespero profundo.webp') },
  { id: 4, title: 'Jogo Da Morte', description: 'Description of Movie 4', category: 'Suspense', image: require('../../img/filmes/jogo-da-morte.webp') },
  { id: 4, title: 'Pacto com o Demônio', description: 'Description of Movie 4', category: 'Suspense', image: require('../../img/filmes/pacto-com-demonio.webp') },

  // Adicione mais filmes conforme necessário
];*/

//const categories = ['Ação', 'Drama', 'Comédia', 'Suspense'];


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
  

  for(let i=1; i<dataFilmesAcao.length; i++){
    let test= dataFilmesAcao[1].imgFilme.replace("'","")
    let test2=test.replace("'","");
    let test3=test2.replace("'","");
    let test4=test3.replace("'","");
    dataFilmesAcao[1].imgFilme=require(test4)
    console.log(dataFilmesAcao[1].imgFilme)
  }

  function goPerfil() {
    navigation.navigate("PerfilScreen");
  }
  function goHome(){
    navigation.navigate("HomeScreen")
  }
  function goDevs(){
    navigation.navigate("DevsScreen")
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
          <Ionicons name="settings-outline" size={24} color="#fff" style={styles.settingsIcon} />
        </View>

        {/*  categorias / flatList para cada uma */}
        {/*
        {categories.map((category, index) => (
          <View key={index}>
            <Text style={styles.categoryTitle}>{category}</Text>
            <FlatList
              data={movies.filter(movie => movie.category === category)}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.moviesContainer}
              renderItem={({ item }) => (
                <View style={styles.movie}>
                  <Image source={item.image} style={styles.movieImage} />
                  <Text style={styles.movieTitle}>{item.title}</Text>
                  <Text style={styles.movieDescription}>{item.description}</Text>
                </View>
              )}
            />
          </View>
        ))}
     */ }
        <View style={styles.viewCategoria}>
          <Text style={styles.categoryTitle}>Ação</Text>
          <FlatList
            data={dataFilmesAcao}
            keyExtractor={({idFilme})=>idFilme}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.moviesContainer}
            renderItem={({item})=>( 
              <View style={styles.movie}>
                  <Image source={item.imgFilme} style={styles.movieImage}></Image>
                  <Text style={styles.movieTitle}>{item.tituloFilme}</Text>
                  <Text style={styles.movieDescription}>{item.duracaoFilme} - {item.anoLancamento}</Text>
                  <Image source={item.classificacaoFilme} style={styles.movieImage}></Image>
              </View>
            )}
          ></FlatList>
          <Text style={styles.categoryTitle}>Animação</Text>
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
                  <Text style={styles.movieDescription}>{item.duracaoFilme} - {item.anoLancamento}</Text>
                  <Image source={item.classificacaoFilme} style={styles.movieImage}></Image>
              </View>
            )}
          ></FlatList>
          <Text style={styles.categoryTitle}>Drama</Text>
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
                  <Text style={styles.movieDescription}>{item.duracaoFilme} - {item.anoLancamento}</Text>
                  <Image source={item.classificacaoFilme} style={styles.movieImage}></Image>
              </View>
            )}
          ></FlatList>
          <Text style={styles.categoryTitle}>Suspense</Text>
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
                  <Text style={styles.movieDescription}>{item.duracaoFilme} - {item.anoLancamento}</Text>
                  <Image source={item.classificacaoFilme} style={styles.movieImage}></Image>
              </View>
            )}
          ></FlatList>
          <Text style={styles.categoryTitle}>Comédia</Text>
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
                  <Text style={styles.movieDescription}>{item.duracaoFilme} - {item.anoLancamento}</Text>
                  <Image source={item.classificacaoFilme} style={styles.movieImage}></Image>
              </View>
            )}
          ></FlatList>
          <Text style={styles.categoryTitle}>Aventura</Text>
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
                  <Text style={styles.movieDescription}>{item.duracaoFilme} - {item.anoLancamento}</Text>
                  <Image source={item.classificacaoFilme} style={styles.movieImage}></Image>
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