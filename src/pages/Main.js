import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';

const TelaPrincipal = () => {
  const [menuVisivel, setMenuVisivel] = useState(false);

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
        <TouchableOpacity style={[estilos.linkBarra, estilos.linkSelecionado]}>
          <Text style={[estilos.textoLink, estilos.textoSelecionado]}>Em Cartaz</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.linkBarra}>
          <Text style={estilos.textoLink}>Em Breve</Text>
        </TouchableOpacity>
      </View>
      <View style={estilos.conteudo}>
        <Text style={estilos.titulo}>Aplicativo de Cinema</Text>
        {/* Conteúdo da tela principal aqui */}
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
              <Text style={estilos.textoMenu}>Principal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.itemMenu}>
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
          <Text style={[estilos.textoLink, estilos.textoSelecionado]}>Ação</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.linkBarra}>
          <Text style={estilos.textoLink}>Aventura</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.linkBarra}>
          <Text style={estilos.textoLink}>Comédia</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.linkBarra}>
          <Text style={estilos.textoLink}>Terror</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9A9A9',
  },
  linksSuperiores: {
    flexDirection: 'row',
    backgroundColor: '#333',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  conteudo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  botaoMenu: {
    marginLeft: 20,
    zIndex: 1,
  },
  iconeMenu: {
    width: 30,
    height: 4,
    backgroundColor: '#000',
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
  barraInferior: {
    flexDirection: 'row',
    backgroundColor: '#333',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  linkBarra: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },

  textoLink: {
    color: '#ccc',
    fontSize: 16,
  },
  textoSelecionado: {
    color: 'orange',
    fontSize: 16,
    textDecorationLine: 'underline',
    textDecorationColor: 'orange',
    marginTop: 5,
  },
});

export default TelaPrincipal;
