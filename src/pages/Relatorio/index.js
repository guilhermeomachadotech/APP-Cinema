import React from "react";
import { Text, Image, View, TouchableOpacity, ScrollView, SafeAreaView, FlatList, TextInput, ActivityIndicator} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {Ionicons} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Foundation from '@expo/vector-icons/Foundation';
import { BarChart, PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

import { useEffect, useState } from "react";

import styles from './style';


export default function RelatorioScreen({navigation}){
    const [dataRelatorio, setDataRelatorio] = useState();
    const [loading, setLoading] = useState(true);

    const screenWidth = Dimensions.get('window').width;

    const randomColor = () => { return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}

    //Função para formatar os dados para o BarChart

    const formatarDataBarChart = (data)=>{
        
        return{
            labels: data.map(item => item.nomeCategoria),
            datasets:[
                {
                    data: data.map(item=>item.total)
                }
            ]
        }
    }
    
    //Função para obter e formatar os dados para o gráfico de pizza
    const pizzaFormatData = (data)=>{
        return data.map(item => ({
            name: item.nomeCategoria,
            population: item.total,
            color : randomColor(),
            legendFontColor: "white",
            legendFontSize: 15,
        }))
            
    }

    const getRelatorio = async()=>{
        try{
            const response = await fetch('http://10.67.4.20:8000/api/filmes-por-categoria-qtdd')
            const json = await response.json()
            setDataRelatorio(json)
            setLoading(false)
        }catch(error){
            console.error(error)
            setLoading(false)
        }
    }

    useEffect(()=>{
        getRelatorio();
    }, [])

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
            
            <ScrollView contentContainerStyle={styles.scroll}>
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
                                {loading ? (
                                    <ActivityIndicator size={'large'} color={'#E5241B'}></ActivityIndicator>
                                ):(
                                    dataRelatorio &&(
                                        <View style={styles.graficos}>
                                            <BarChart
                                                data={formatarDataBarChart(dataRelatorio)}
                                                width={screenWidth - 16} 
                                                height={220}
                                                yAxisLabel="Total " 

                                                chartConfig={{
                                                backgroundColor: '#0000ff',
                                                backgroundGradientFrom: '#FF1B1B',
                                                backgroundGradientTo:'#FF4F4C',
                                                
                                                decimalPlaces: 0,
                                                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                                style: {
                                                    borderRadius: 16,
                                                },
                                                }}
                                                style={styles.chart}
                                            />
                                            <PieChart
                                            data={pizzaFormatData(dataRelatorio)}
                                            width={screenWidth}
                                            height={220}
                                            chartConfig={{
                                                backgroundGradientFrom: "#1E2923",
                                                backgroundGradientFromOpacity: 0,
                                                backgroundGradientTo: "#08130D",
                                                backgroundGradientToOpacity: 0.5,
                                                color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                                                strokeWidth: 2, // optional, default 3
                                                barPercentage: 0.5,
                                                useShadowColorFromDataset: false // optional
                                            }}
                                            accessor={"population"}
                                            backgroundColor={"transparent"}
                                            paddingLeft={"14"}
                                            center={[10,50]}
                                            
                                            ></PieChart>
                                        </View>
                                    )
                                )}
                                
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