import React from "react";
import { Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from 'style.js';

export default function MenuScreen({navigation}) {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <LinearGradient style={styles.gradient} colors={["#2D195F", "#4D2AA3", "#6D3CE7", "#7C3EF0"]}>

                </LinearGradient>
            </ScrollView>
           
        </SafeAreaView>
    );
}