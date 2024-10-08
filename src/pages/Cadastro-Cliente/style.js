import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        display:'flex',
        flex: 1,
      },
      imgPerfil:{
        width:100,
        height:100,
        resizeMode:'contain',
      },
      scroll:{
        display:'flex',
        flex:1,
      },
      container_img:{
        flex:2,
        height:300,
        justifyContent:  'center',
        alignItems: 'center',
        padding: 20,
      },
      viewForm:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
      },
      container_conteudo_form:{
        width:250,
        padding:18,
        height:'auto',
        borderRadius: 20 ,
        backgroundColor:"#4F4F4F",
      },
      label:{
        width:'100%',
        marginTop:10,
      },
      txtInfo:{
        fontSize:15,
        fontWeight:'bold',
        color:'white',
      },
      container_input:{
        width:'100%',
        marginTop:10,
        marginBottom:10,
      },
      input:{
        width:'100%',
        height:30,
        padding: 5,
        borderBottomColor:'white',
        borderBottomWidth:2,
        borderBottomEndRadius:2,
        borderBottomStartRadius:2,
        color:'white',
      },
      container_btn:{
        flex:1,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center',
      },
    
      btn_logar:{
        
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        width:150,
        height:'auto',
        borderRadius: 20,
        backgroundColor:'#8B0000',
      },
    
      textLogar:{
        fontSize:15,
        fontWeight:'bold',
        color:'white',
      },
      gradient:{
        display:'flex',
        flex:1,
      },
      viewTextLink:{
        flex:1,
        marginTop:20,
      },
      textLink:{
        color:'white',
        textAlign:'center',
        fontSize:12,
      },
      btnLink:{
        fontWeight:'bold',
        textTransform:'uppercase',
      },
      txtLink:{
        color:'white',
        textAlign:'center',
        fontWeight: 'bold',
        fontSize:14,
      },
      errorMessage:{
        fontSize:12,
        color: 'red',
      },
})

  