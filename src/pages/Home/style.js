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
    moviesContainer: {
      paddingHorizontal: 10,
    },
    movie: {
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
      backgroundColor: '#23232D',
      paddingVertical: 10,
    },
    categoryIcon: {
      marginHorizontal: 15,
    },
  });
  