import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
    },
    profileImage: {
      width: 30,
      height: 30,
      borderRadius: 15,
    },
    searchInput: {
      display: 'flex',
      flex: 1,
      marginLeft: 10,
      height: 30,
      backgroundColor: '#23232D',
      borderRadius: 5,
      color: '#fff',
      paddingLeft: 10,
    },
    settingsIcon: {
      marginLeft: 10,
    },
    btnLink:{
      display:'flex',
      
    },
    contRelatorio:{
      display:'flex',
      flex:1,
      flexDirection:'column',
      justifyContent:'center',
    },
    relatorioCategoria:{
      display:'flex',
      width: '50%',
      marginLeft: '25%',
      flexDirection:'row',
      justifyContent:'space-between',
    },
    txtTitulo:{
      fontSize:30,
      color:'#fff',
      fontWeight:'bold'
    },
    textTituloCategoria:{
      color: '#fff',
      fontSize:20,
    },
    txtQtddFilmes:{
      color: '#fff',
      fontSize:20,
      
    },
    footerMenu: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor:'#8B0000',
      paddingVertical: 10,
    },
    categoryIcon: {
      marginHorizontal: 15,
    },
    txtTituloGraficos:{
      marginTop:20,
      fontSize:20,
      color:'#fff',
      fontWeight:'bold'

    }
  });
  