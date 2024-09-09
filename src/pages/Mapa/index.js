import React, {useState, useEffect} from 'react';
import { Platform, Text, View, Image, TextInput, SafeAreaView, TouchableOpacity} from "react-native";
import MapView, {Marker, UrlTile} from 'react-native-maps';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import * as Device from 'expo-device';
import styles from './style'; 

import icon_maker from '../../img/icon/icon-maker.png';
import icon_location from '../../img/icon/location-marker-icon.png';
import { ScrollView } from 'react-native';
import axios from 'axios';

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

    const [location, setLocation]= useState(null);
    const [errorMSG, setErrorMSG] = useState(null);
    
    const [longitudeAtual, setLongitudeAtual] = useState();
    const [latitudeAtual, setLatitudeAtual] = useState();

    const [endereco, setEndereco] = useState('');

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
    //Verficar localização atual:

    useEffect(()=>{
        (async()=>{
            if (Platform.OS ==='android' && !Device.isDevice) {
                setErrorMSG('Opa, esse app não rodará em um emulador de Android ou em Snack. Tente em seu aparelho móvel!');
                return;
            }

            let {status} = await Location.requestForegroundPermissionsAsync();

            if (status!== 'granted') {
                setErrorMSG('Permissão para acessar a geolocalização foi negada!');
                return;
            }

            let {coords} = await Location.getCurrentPositionAsync({});
            setLocation(coords);

            await reverseGeocode(coords.latitude, coords.longitude);
        })();
    },[])

    //Pegar o endereço do usuário

    const reverseGeocode = async (latitude, longitude)=>{
        try {
            const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&email=machado.gui.oliveira@gmail.com`;
            const response = await axios.get(url);
            const data = response.data;
            if (response.status === 200) {
                if(data && data.address){
                    const adress = `${data.address.road || ''}, ${data.address.city || ''}, ${data.address.state || ''}`;
                    setEndereco(adress.trim());
                }else{
                    setEndereco('Endereço não encontrado!');
                }
            }else{
                // Tratar resposta HTTP não 200
                setAddress('Erro na resposta da API');
            }
            
        } catch (error) {
            console.log(error);
            setEndereco('Erro ao obter o endereço!');
        }
    }
    if (errorMSG) {
        
    }else if (!location) {
        return(
            <View style={styles.container}>
                <Text>Carregando...</Text>
            </View>
        )
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
                <View>
    
                    
                </View>
                
                <View style={styles.contMap}>
                    <MapView style={styles.map}
                        mapType='terrain'
                        initialRegion={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                        
                    <Marker
                        title={endereco}
                        coordinate={{
                            latitude: location.latitude,
                            longitude:location.longitude
                        }}
                        description='Essa é sua localização atual'
                    >
                    <View style={styles.container_marker}>
                                <Image source={icon_location} style={{width:70, height:70, resizeMode:'contain'}}></Image>
                    </View>
                    </Marker>
                    
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

