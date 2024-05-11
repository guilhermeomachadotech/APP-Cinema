import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SobreNos = () => {
  const [menuVisivel, setMenuVisivel] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener('focus', () => {
      setMenuVisivel(false);
    });

    return () => {
      navigation.removeListener('focus');
    };
  }, [navigation]);

  const alternarMenu = () => {
    setMenuVisivel(!menuVisivel);
  };

  return (
    <View style={estilos.container}>
      <View style={estilos.linksSuperiores}>
        <TouchableOpacity onPress={alternarMenu} style={estilos.botaoMenu}>
          <View style={estilos.iconeMenu} />
          <View style={estilos.iconeMenu} />
          <View style={estilos.iconeMenu} />
        </TouchableOpacity>
      </View>
      <View style={estilos.conteudo}>
        <Text style={estilos.titulo}>Sobre nós</Text>
        <Text style={estilos.texto}>
         Esse cinema foi fundado em 2024, distribuimos filmes em cartaz, levando sempre o melhor conteúdo de entretenimento para você. Venha conhecer-nos!
        </Text>
        <Text style={estilos.subtitulo}>Desenvolvedores</Text>
        <View style={estilos.desenvolvedores}>
          <View style={estilos.desenvolvedor}>
            <Text style={estilos.nomeDesenvolvedor}>Guilherme Nabeiro</Text>
            <Image source={require('./../../assets/sobreNos/integrantes/Guilherme.jpg')} style={estilos.imagemDesenvolvedor} />
          </View>
          <View style={estilos.desenvolvedor}>
            <Text style={estilos.nomeDesenvolvedor}>Pedro Paschoal</Text>
            <Image source={require('./../../assets/sobreNos/integrantes/pedro.jpg')} style={estilos.imagemDesenvolvedor} />
          </View>
        </View>
        <View style={estilos.desenvolvedores}>
          <View style={estilos.desenvolvedor}>
            <Text style={estilos.nomeDesenvolvedor}>Victor Volpi</Text>
            <Image source={require('./../../assets/sobreNos/integrantes/volpi.jpg')} style={estilos.imagemDesenvolvedor} />
          </View>
          <View style={estilos.desenvolvedor}>
            <Text style={estilos.nomeDesenvolvedor}>Vitor Pereira</Text>
            <Image source={require('./../../assets/sobreNos/integrantes/vp.jpg')} style={estilos.imagemDesenvolvedor} />
          </View>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={menuVisivel}
        onRequestClose={alternarMenu}
      >
        <View style={estilos.fundoEscuro}>
          <View style={estilos.menu}>
            <TouchableOpacity onPress={alternarMenu} style={estilos.botaoFechar}>
              <Text style={estilos.textoFechar}>Fechar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              navigation.navigate('Ação - Em cartaz');
              alternarMenu();
            }} style={estilos.itemMenu}>
            <Text style={estilos.textoMenu}>Página inicial</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.itemMenu}>
              <Text style={estilos.textoMenuAtual}>Sobre nós</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.itemMenu}>
              <Text style={estilos.textoMenu}>Endereço</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
  },
  linksSuperiores: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    padding: 20,
  },
  conteudo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  texto: {
    fontSize: 16,
    marginBottom: 20,
    color: 'black',
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: 'black',
  },
  desenvolvedores: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    
  },
  desenvolvedor: {
    alignItems: 'center',
  },
  nomeDesenvolvedor: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  imagemDesenvolvedor: {
    width: 150, 
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  fundoEscuro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menu: {
    backgroundColor: '#333',
    width: '80%',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  botaoFechar: {
    position: 'absolute',
    top: 40,
    right: 20,
    
  },
  textoFechar: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  itemMenu: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    marginTop: 40,
  },
  textoMenu: {
    fontSize: 20,
    color: '#fff',
  },
    textoMenuAtual: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  botaoMenu: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconeMenu: {
    width: 30,
    height: 4,
    backgroundColor: 'black',
    marginVertical: 3,
  },
});

export default SobreNos;
