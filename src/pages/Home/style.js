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
      flex:1,
    },
    contCategoriaLink:{
      display:'flex',
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    textLinkCategoria:{
      textAlign:'center',
      fontSize:20,
      fontWeight:'bold',
      color:'white'
    },
    moviesContainer: {
      paddingHorizontal: 10,
    },
    contFilmes:{
      display:'flex',
      flex:1,
    },
    viewCategoria:{
      display:'flex',
      width:'100%',
      marginBottom:20,
    },
    descView:{
      display:'flex',
      width:'100%',
      height:40,
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center'
    },
    viewTextMovie:{
      display:'flex',
      flex:1,
      flexDirection:'column',
      marginLeft:10,
    },
    imgClassMovieView:{
      display:'flex',
      flex:1,
    },
    movie: {
      display:'flex',
      flex:1,
      width: 150,
      height: 250,
      margin: 5,
      borderRadius: 5,
      overflow: 'hidden',
    },
    movieImage: {
      width: '100%',
      height: '70%',
      resizeMode: 'contain',
    },
    movieClass:{
      width: 20,
      height:20,
      resizeMode:'contain',
    },
    movieTitle: {
      color: '#fff',
      fontSize: 12,
      fontWeight: 'bold',
    },
    movieDescription: {
      color: '#fff',
      fontSize: 10,
    },
    categoryTitle: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 20,
      marginTop: 10,
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
  });
  