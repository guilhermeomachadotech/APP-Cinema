import React from "react";
import { Text, Image, View, TouchableOpacity, ScrollView, SafeAreaView, FlatList, TextInput} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {Ionicons} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Foundation from '@expo/vector-icons/Foundation';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

import { useEffect, useState } from "react";

import styles from './style';


export default function RelatorioScreen({navigation}){
    const screenWidth = Dimensions.get('window').width;

    const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)

    const [dataRelatorio, setDataRelatorio] = useState([]) 

    const getRelatorio = async()=>{
        try{
            const response = await fetch('http://10.67.4.158:8000/api/filmes-por-categoria-qtdd')
            const json = await response.json()
            setDataRelatorio(json)
        }catch(error){
            console.error(error)
        }
    }

    useEffect(()=>{
        getRelatorio();
    }, [])

    
    const barData = dataRelatorio.map(item =>({
        labels: item.nomeCategoria,
        datasets: {data: item.total}
    }))
    

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
    function goRelatorio(){
        navigation.navigate('RelatorioScreen');
    }
    return(
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
                    <View style={styles.contRelatorio}>
                        <Text style={styles.txtTitulo}>Resumo</Text>
                        <FlatList
                            data={dataRelatorio}
                            keyExtractor={({nomeCategoria})=>nomeCategoria}
                            vertical
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.moviesContainer}
                            renderItem={({item})=>(
                                <View style={styles.relatorioCategoria}>
                                    <Text style={styles.textTituloCategoria}>{item.nomeCategoria}</Text>
                                    <Text style={styles.txtQtddFilmes}>{item.total} Filmes</Text>
                                </View>
                            )}
                        ></FlatList>
                        <View style={styles.contGraficos}>
                            <View style={styles.contTitulo}>
                                <Text style={styles.txtTituloGraficos}>Gráficos</Text>
                                <BarChart
                                    data={barData}
                                    width={screenWidth - 16} 
                                    height={220}
                                    yAxisLabel="" 
                                    chartConfig={{
                                    backgroundColor: '#000000',
                                    backgroundGradientFrom: '#0000ff',
                                    backgroundGradientTo: '#4fb7cd',
                                    decimalPlaces: 2,
                                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                    style: {
                                        borderRadius: 16,
                                    },
                                    }}
                                    style={styles.chart}
                                />
                            </View>
                        </View>
                    </View>
                    
                </LinearGradient>
            </ScrollView>
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