import React from  'react';
import {View, SafeAreaView, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {ActivityIndicator } from 'react-native';
import styles from './style';

import logo from '../../img/logo-cine-fun.png';

export default function SplashScreen ({navigation}){
    setTimeout(()=>{
        navigation.navigate('Login');
    },2000)
    return(
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={["#1C1C1C", "#363636", "#4F4F4F"]} style={styles.gradient}>
                <View style={styles.container_logo}>
                    <Image style={styles.imgLogo} source={logo}></Image>
                </View>
                <View style={styles.container_loading}>
                   <ActivityIndicator size="large" color="white" style={styles.carregamento}/>
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
}