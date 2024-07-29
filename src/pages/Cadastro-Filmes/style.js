import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
    },
    container_img:{
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    imgPerfil:{
        width:300,
        height:300,
    },
    contTitulo:{
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    titulo:{
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold',
        color:'white',
    },
    viewForm:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    container_conteudo_form:{
        width:250,
        padding:18,
        height:300,
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
      btn_cadastrar:{
        
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        width:150,
        height:35,
        borderRadius: 20,
        backgroundColor:'#8B0000',
      },
    
      textCadastrar:{
        fontSize:15,
        fontWeight:'bold',
        color:'white',
      },
      gradient:{
        display:'flex',
        flex:1,
      },
      
      errorMessage:{
        fontSize:12,
        color: 'red',
      },
      viewError:{
        flex:1,
        margin:15,
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
})