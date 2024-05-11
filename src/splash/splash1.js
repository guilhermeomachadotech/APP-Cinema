import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const logoOpacity = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(logoOpacity, {
      toValue: 1,
      duration: 3000, 
      useNativeDriver: true,
    }).start(() => {

      navigation.replace('Login');
    });
  }, []);

  return (
    <View style={styles.container}>
     
      <Text style={styles.text}>Cinema</Text>
      <Image
        source={require('../../assets/carregandoGif.gif')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F8FF',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  text: {
    marginTop: 20,
    fontSize: 43,
    fontWeight: 'bold',
    color: 'blue',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default SplashScreen;
