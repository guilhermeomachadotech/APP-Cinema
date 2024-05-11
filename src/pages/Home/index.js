import React from 'react';
import { Text, View, Image, TextInput, ScrollView, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';

const movies = [
  { id: 1, title: 'Madame Teia', description: 'Description of Movie 1', category: 'Ação', image: require('../../img/filmes/madame-teia.jpeg') },
  { id: 1, title: 'Movie 2', description: 'Description of Movie 1', category: 'Ação', image: require('../../img/icon-perfil.webp') },
  { id: 1, title: 'Movie 1', description: 'Description of Movie 1', category: 'Ação', image: require('../../img/icon-perfil.webp') },
  { id: 1, title: 'Movie 1', description: 'Description of Movie 1', category: 'Ação', image: require('../../img/icon-perfil.webp') },

  { id: 2, title: 'Duna 2', description: 'Description of Movie 2', category: 'Drama', image: require('../../img/filmes/Duna-2.jpg') },  
  { id: 2, title: 'O Menino e a Garça', description: 'Description of Movie 2', category: 'Drama', image: require('../../img/filmes/o-menino-e-garca.webp') },
  { id: 2, title: 'Bob Marley: One Love', description: 'Description of Movie 2', category: 'Drama', image: require('../../img/filmes/bob-marley-one-love.jpeg') },
  { id: 2, title: 'Demon Slayer: Para o Treinamento Hashira', description: 'Description of Movie 2', category: 'Drama', image: require('../../img/filmes/demon-slayer.webp') },
  { id: 2, title: 'Pobres Criaturas', description: 'Description of Movie 2', category: 'Drama', image: require('../../img/filmes/pobres-criaturas.jpeg') },


  { id: 3, title: 'Kun Fu Panda 4', description: 'Description of Movie 3', category: 'Comédia', image: require('../../img/filmes/kungfupanda_4.jpeg') },
  { id: 3, title: 'Os Farofeiros 2', description: 'Description of Movie 3', category: 'Comédia', image: require('../../img/filmes/os-farofeiros2.jpg') },
  { id: 3, title: 'Divertidamente 2', description: 'Description of Movie 3', category: 'Comédia', image: require('../../img/filmes/divertidamente 2.webp') },
  { id: 3, title: 'Pobres Criaturas', description: 'Description of Movie 3', category: 'Comédia', image: require('../../img/filmes/pobres-criaturas.jpeg') },


  { id: 4, title: 'Movie 4', description: 'Description of Movie 4', category: 'Suspense', image: require('../../img/icon-perfil.webp') },
  { id: 4, title: 'Movie 4', description: 'Description of Movie 4', category: 'Suspense', image: require('../../img/icon-perfil.webp') },
  { id: 4, title: 'Movie 4', description: 'Description of Movie 4', category: 'Suspense', image: require('../../img/icon-perfil.webp') },
  { id: 4, title: 'Movie 4', description: 'Description of Movie 4', category: 'Suspense', image: require('../../img/icon-perfil.webp') },

  // Adicione mais filmes conforme necessário
];

const categories = ['Ação', 'Drama', 'Comédia', 'Suspense'];


export default function HomeScreen({navigation}) {
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
        <LinearGradient colors={["#2D195F", "#4D2AA3", "#6D3CE7", "#7C3EF0"]} style={styles.gradient}>
        <View style={styles.header}>
          <TouchableOpacity onPress={()=>goPerfil()}>
            <Image source={require('../../img/icon-perfil.webp')} style={styles.profileImage} />
          </TouchableOpacity>
          
          <TextInput style={styles.searchInput} placeholder="Pesquisar" placeholderTextColor="#fff" />
          <Ionicons name="settings-outline" size={24} color="#fff" style={styles.settingsIcon} />
        </View>

        {/*  categorias / flatList para cada uma */}
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