import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        display:'flex',
        flex: 1,  
        backgroundColor: '#38184C',
      },
    
      txtTitulo:{
        color: '#fff',
        fontSize: 35, 
        textAlign: 'center',
        fontWeight:'bold',
      },
      contScroll:{
        flex:1,
      },
      gradient:{
        flex:1,
      },
      contDevs:{
        display: 'flex',
        flexDirection:'row',
        flex:1,
        justifyContent:'space-between',
        margin:20,
        alignItems:"center",
      },
      containerImg:{
        display:"flex",
        flex:1,
        justifyContent:'center',
        alignItems:"center",
      },
      containerDescDevs:{
        display:"flex",
        flex:1,
        
        justifyContent:'center',
        alignItems:"center",
      },
      img:{
        width: 100,
        height: 100,
        
        borderRadius: "50%",
        resizeMode: 'cover'
      },
      txtNome:{
        fontSize: 20,
        
        color: '#fff',
      },
      titulo:{
        display:'flex',
        flex:1,
        justifyContent:'center',
      },
      footerMenu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#23232D',
        paddingVertical: 10,
      },
})