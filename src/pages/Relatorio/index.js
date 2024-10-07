import React from "react";
import { Text, Image, View, TouchableOpacity, ScrollView, SafeAreaView, FlatList, TextInput} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {Ionicons} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Foundation from '@expo/vector-icons/Foundation';
import { useEffect, useState } from "react";
import { PieChart } from "react-native-svg-charts";
import styles from './style';
import style from "./style";

export default function RelatorioScreen({navigation}){
    
    const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)

    const [dataRelatorio, setDataRelatorio] = useState([]) 

    const getRelatorio = async()=>{
        try{
            const response = await fetch('https://e470-2804-7518-49bd-de00-454c-a0fa-c249-dffe.ngrok-free.app/api/filmes-por-categoria-qtdd')
            const json = await response.json()
            setDataRelatorio(json)
        }catch(error){
            console.error(error)
        }
    }

    useEffect(()=>{
        getRelatorio();
    }, [])

    const pieData = dataRelatorio.filter((item) => item > 0)
    .map((item, index)=> ({
        value: item.total,
        svg:{
            fill: randomColor(),
            onPress:() => console.log('press', index),
        },
        key: `pie-${index}`,
        
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
                                <PieChart
                                style={{ height: 200 }}
                                data={pieData}
                                
                                ></PieChart>
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