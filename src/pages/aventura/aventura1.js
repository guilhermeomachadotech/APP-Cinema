import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Acao1 = () => {
  const [menuVisivel, setMenuVisivel] = useState(false);
  const navigation = useNavigation();

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
        <Text style={estilos.titulo}>Filmes de Aventura (Em Cartaz)</Text>
        
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
            <TouchableOpacity style={estilos.itemMenu}>
              <Text style={estilos.textoMenuAtual}>Página Principal</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              navigation.navigate('SobreNos');
              alternarMenu();
            }} style={estilos.itemMenu}>

              <Text style={estilos.textoMenu}>Sobre nós</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.itemMenu}>
              <Text style={estilos.textoMenu}>Endereço</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={estilos.barraInferior}>
        <TouchableOpacity style={[estilos.linkBarra, estilos.linkSelecionado]}>
          <Text onPress={() => navigation.navigate('Ação - Em cartaz')} style={[estilos.textoLink]}>Ação</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.linkBarra}>
          <Text style={estilos.textoLink, estilos.textoSelecionado}>Aventura</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Comédia - Em cartaz')} style={estilos.linkBarra}>
          <Text style={estilos.textoLink}>Comédia</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Terror - Em cartaz')} style={estilos.linkBarra}>
          <Text style={estilos.textoLink}>Terror</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#363636',
    backgroundColor: '#F0F8FF',
    color: 'black',
  },
  linksSuperiores: {
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  conteudo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,

  },
  gridContainer: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  gridItem: {
    flex: 1,
    alignItems: 'center',
  },
  imagem: {
    width: 100,
    height: 180,
    marginBottom: 5,
    borderWidth:1,
    borderColor: 'black',
  },
  tituloFilme: {
    fontSize: 16,
    fontWeight: 'bold',

  },
  botaoMenu: {
    marginLeft: 20,
    zIndex: 1,
    color: 'white',
  },
  iconeMenu: {
    width: 30,
    height: 4,
    backgroundColor: 'white',
    marginVertical: 3,
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
    marginTop: 40,
  },
  textoMenu: {
    fontSize: 20,
    color: '#fff',
  },
  textoMenuAtual: {
    fontSize: 20,
    color: 'white',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  barraInferior: {
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 999,
  },
  linkBarra: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  textoLink: {
    color: '#ccc',
    fontSize: 16,
  },
  textoSelecionado: {
    color: 'white',
    fontSize: 17,
    textDecorationLine: 'underline',
    textDecorationColor: 'white',
    marginTop: 5,
    fontWeight: 'bold',
  },
});

export default Acao1;

