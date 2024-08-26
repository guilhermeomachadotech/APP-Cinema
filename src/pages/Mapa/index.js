import React, {useState} from 'react';
import { Text, View, Image, TextInput, SafeAreaView, TouchableOpacity} from "react-native";
import MapView, {Marker} from 'react-native-maps';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './style'; 

import icon_maker from '../../img/icon/icon-maker.png';
import { ScrollView } from 'react-native';

/*import cinemark from  '../../img/cinema/cinemark.jpg';
import cinemarkRio from '../../img/cinema/cinemark-rio-janeiro.jpg';
import cinepolis from  '../../img/cinema/cinepolis.jpg'; 
*/
const makers=[
    {
        latitude: -23.5605808,
        longitude: -46.6455849,
        title: 'Cinemark- São Paulo',
        description: 'Cinermark de São Paulo, Rua Treze de Maio, Região Metropolitana',
        //image: cinemark,
    },
    {
        latitude: -23.5183657,
        longitude: -46.7945346,
        title: 'Cinepólis - São Paulo',
        description: 'Cinépolis de São Paulo, Rua armador bueno, Região Metropolitana',
        //image: cinepolis,
    },
    {
        latitude: -22.9525894,
        longitude: -43.1761924,
        title: 'Cinemark - Rio de Janeiro',
        description: 'Cinemark de Rio de Janeiro, Praça Ozanan, Botafogo, Região Metropolitana',
        //image: cinemarkRio,
    }
]

export default function MapaScreen({navigation}){
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

    function goMapa(){
        navigation.navigate('MapaScreen');
    }

    return(
        <SafeAreaView style={styles.container}>
            
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

                <View style={styles.contMap}>
                    <MapView style={styles.map}
                        mapType='terrain'
                        initialRegion={{
                            latitude: -23.5605808,
                            longitude: -46.6455849,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                    {makers.map((marker, index)=>(
                        <Marker
                            
                            key={index}
                            coordinate={{
                                latitude:marker.latitude,
                                longitude:marker.longitude
                            }}
                            title={marker.title}
                            description={marker.description}
                           
                        
                        >
                            <View style={styles.container_marker}>
                                <Image source={icon_maker} style={{width:70, height:70, resizeMode:'contain'}}></Image>
                            </View>
                             
                        </Marker>
                    ))}
                    </MapView>
                </View>
                
            </LinearGradient>
            
            <View style={styles.footerMenu}>
                <TouchableOpacity onPress={()=>goHome()}>
                    <Ionicons name="film" size={24} color="#fff" style={styles.categoryIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>goMapa()}>
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

