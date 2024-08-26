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
      footerMenu: {
        display:'flex',
        
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor:'#8B0000',
        paddingVertical: 10,
        
      },
      categoryIcon: {
        marginHorizontal: 15,
      },

      contMap:{
        
        width:'100%',
        height:'87%'
        
      },

      map:{
        
        width:'100%',
        height:'100%',
      },
      
})