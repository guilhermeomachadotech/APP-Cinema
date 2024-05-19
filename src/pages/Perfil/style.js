import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        padding:10,
    },
    gradient:{
        padding:13,
        display:'flex',
        flex:1,
    },
    header:{
        display:'flex',
        flexDirection:'row',
        height:100,
        justifyContent:'center',
        alignItems:'center',
    },
    space_btn:{
        width:50,
        heigth:50,
    },
    btnVoltar:{
        height:50,
        width:50,
    },
    imgVoltar:{
        height:50,
        width:50,
        reziseMode:'contain',
    },
    viewTitulo:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    txtTitulo:{
        fontSize:25,
        fontWeight:'bold',
        color:'white',
    },
    containerImgPerfil:{
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    imgPerfil:{
        width:150,
        height:150,
        reziseMode:'contain',
    },
    containerInfo:{
        display:'flex',
        justifyContent:'center',
        flex:1,
    },
    containerDescInfo:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    },
    txtLabel:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
    },
    txtInfo:{
        fontSize:18,
        marginLeft:5,
        color:'white',
    },
    conatinerSair:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    btn_sair:{
        width:100,
        heigth: 10,
        padding:10,
        borderRadius:20,
        backgroundColor:'#8B0000',
        justifyContent:'center',
        alignItems:'center',
    },
    txtSair:{
        fontSize:15,
        fontWeight:'bold',
        color:'white',
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