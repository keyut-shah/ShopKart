import { StyleSheet } from "react-native";
import {moderateScale} from 'react-native-size-matters'
const styles = StyleSheet.create({
    maincontainer: {
      flex: 1,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: 'green',
    },
    scrollcontainer: {
        borderWidth: 1,
        flex: 1,
        borderColor: 'green',
        paddingHorizontal: moderateScale(10),
        marginBottom:moderateScale(95),
        
      },
    header: {
      height: 80,
      // borderWidth:1,
      // borderColor:'red',
      justifyContent: 'center',
    },
    backtouchable: {
      borderWidth: 1,
      padding: moderateScale(10),
      borderRadius: 25,
      width: 50,
      position: 'absolute',
  
      marginLeft: 20,
    },
    headertext: {
        fontSize: moderateScale(18),
        fontWeight: 'bold',
        color: 'black',
        paddingVertical: moderateScale(10),
    
        textAlign: 'center',
        // marginRight:moderateScale(30),
    
        marginHorizontal: moderateScale(60),
      },
    });    
    export default styles;