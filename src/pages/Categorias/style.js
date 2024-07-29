import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },
    gradient:{
        display:'flex',
        minHeight:'100%',
        width:'100%'
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
    contCategoria:{
        display:'flex',
        width:'100%',
        minHeight:'100%',
        padding:10,

    },
    viewCardCategoria:{
        display:'flex',
        wudth:'100%',
        height: 100,
        alignItems:'center',
    },
    textCategoria:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        color:'white'
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