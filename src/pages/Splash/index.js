import React from  'react';
import {View, SafeAreaView, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {ActivityIndicator } from 'react-native';
import styles from './style';

import logo from '../../img/logo-cine-fun.png';

export default function SplashScreen ({navigation}){
    setTimeout(()=>{
        navigation.navigate('Login');
    },6000)
    return(
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={["#2D195F", "#4D2AA3", "#6D3CE7", "#7C3EF0"]} style={styles.gradient}>
                <View style={styles.container_logo}>
                    <Image style={styles.imgLogo} source={logo}></Image>
                </View>
                <View style={styles.container_loading}>
                   <ActivityIndicator size="large" color="purple" style={styles.carregamento}/>
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
}