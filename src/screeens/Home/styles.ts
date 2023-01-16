import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
    },
     eventName: {
      color:'#FDFCFE',
      fontSize:24,
      fontWeight:'bold',
      marginTop:48
     },
     eventDate: {
      color:'#6B6B6B',
      fontSize:16,
      fontWeight:'bold'
     },
     textInput:{
      backgroundColor:'#1F1E25',
      height:56,
      borderRadius:5,
      color:"#FFF",
      padding:16,
      fontSize:16,
      flex:1,
      marginRight:10
     },
     buttonText:{
      fontSize:24,
      color:'#fff'
     },
     button:{
      width:56,
      height:56,
      borderRadius:5,
      backgroundColor:'#31CF67',
      alignItems:'center',
      justifyContent:'center'
     },
     form:{
      width:'100%',
      flexDirection:'row',
      marginTop:36,
      marginBottom:42
     },
     listEmptyText:{
      color:"#fff",
      textAlign:'center',
      fontSize:16
     }
  });