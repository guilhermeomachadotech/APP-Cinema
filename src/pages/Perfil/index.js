import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import { Text, SafeAreaView, Image, TouchableOpacity, View } from 'react-native';
import {useState} from 'react';
import styles from './style';
import { Ionicons } from '@expo/vector-icons';

import iconPerfil from '../../img/icon-perfil.webp';

export default function PerfilScreen ({navigation}){
    const [nickname, setNickName]=useState('Teste');
    const [email, setEmail]=useState('Teste');

    function voltarMenu() {
        navigation.navigate('HomeScreen');
    }
    function sairConta() {
        navigation.navigate("Login")
    }
    function goDevs(){
        navigation.navigate("DevsScreen")
    }
    function goPerfil() {
        navigation.navigate("PerfilScreen");
    }
    function goMapa(){
        navigation.navigate('MapaScreen');
    }
    return(
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={["#1C1C1C", "#363636", "#4F4F4F"]} style={styles.gradient}>
                <View style={styles.header}>
                    <View style={styles.viewTitulo}>
                        <Text style={styles.txtTitulo}>Perfil</Text>
                    </View>
                    
                </View>
                <View style={styles.containerImgPerfil}>
                    <Image style={styles.imgPerfil} source={iconPerfil}></Image>
                </View>
                <View style={styles.containerInfo}>
                    <View style={styles.containerDescInfo}>
                        <Text style={styles.txtLabel}>Nome:</Text>
                        <Text style={styles.txtInfo}>{nickname}</Text>
                    </View>
                    <View style={styles.containerDescInfo}>
                        <Text style={styles.txtLabel}>Email:</Text>
                        <Text style={styles.txtInfo}>{email}</Text>
                    </View>
                </View>
                <View style={styles.conatinerSair}>
                    <TouchableOpacity style={styles.btn_sair} onPress={()=>sairConta()}>
                        <Text style={styles.txtSair}>Sair</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
            <View style={styles.footerMenu}>
                <TouchableOpacity onPress={()=>voltarMenu()}>
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