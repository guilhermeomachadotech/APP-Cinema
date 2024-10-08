import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {View, Image, Text, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from "./style";
import Foundation from '@expo/vector-icons/Foundation';
import imgGioavanna from '../../img/img-giovanna.jpeg';
import imgRebecca from '../../img/img-rebecca.jpeg';
import imgKauane from '../../img/img-kauane.jpeg';
import imgGuilherme from '../../img/img-guilherme.jpeg';

export default function DevsScreen({navigation}){
    function goPerfil() {
        navigation.navigate("PerfilScreen");
    }
    function goHome(){
        navigation.navigate("HomeScreen")
    }
    function goDevs(){
        navigation.navigate("DevsScreen")
    }
    function goMapa(){
        navigation.navigate('MapaScreen');
    }
    function goRelatorio(){
        navigation.navigate('RelatorioScreen');
    }
    return(
        <SafeAreaView style={styles.container}>
                
                <LinearGradient colors={["#1C1C1C", "#363636", "#4F4F4F"]} style={styles.gradient}>
                        <View style={styles.titulo}>
                            <Text style={styles.txtTitulo}>Desenvolvedores</Text>
                        </View>
                        <View style={styles.contDevs}>
                            <View style={styles.containerImg}>
                                <Image style={styles.img} source={imgGioavanna}></Image>
                            </View>
                            <View style={styles.containerDescDevs}>
                                <Text style={styles.txtNome}>Giovanna Eduarda Damasceno Reis</Text>
                            </View>
                        </View>
                        <View style={styles.contDevs}>
                            <View style={styles.containerImg}>
                                <Image style={styles.img} source={imgGuilherme}></Image>
                            </View>
                            <View style={styles.containerDescDevs}>
                                <Text style={styles.txtNome}>Guilherme de Oliveira Machado</Text>
                            </View>
                        </View>
                        <View style={styles.contDevs}>
                            <View style={styles.containerImg}>
                                <Image style={styles.img} source={imgKauane}></Image>
                            </View>
                            <View style={styles.containerDescDevs}>
                                <Text style={styles.txtNome}>Kauane de Souza Brito</Text>
                            </View>
                        </View>
                        <View style={styles.contDevs}>
                            <View style={styles.containerImg}>
                                <Image style={styles.img} source={imgRebecca}></Image>
                            </View>
                            <View style={styles.containerDescDevs}>
                                <Text style={styles.txtNome}>Rebecca Manuela da Silva Cruz</Text>
                            </View>
                            
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
                    <TouchableOpacity onPress={()=>goRelatorio()}>
                        <Foundation name="graph-pie" size={24} color="#fff" style={styles.categoryIcon}/>
                    </TouchableOpacity>
                    {/* adc mais categorias */}
                </View>
        </SafeAreaView>
    );
}

