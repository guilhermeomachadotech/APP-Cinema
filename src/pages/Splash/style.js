import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        display:'flex',
        flex: 1,
        padding: 10,
      },
      gradient:{
        display:'flex',
        flex:1,
      },
      container_logo:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
      },
      imgLogo:{
        width:350,
        height:350,
        resizeMode:"contain",
      },
      container_loading:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
      },
      carregamento:{
        width:400,
      },
})