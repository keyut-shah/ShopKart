import React from 'react';
import {StyleSheet} from 'react-native';
// import Colors from "../../common/Colors";
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({

      container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
      },
      scrollViewContent: {
        flexGrow: 1,
        paddingHorizontal: moderateScale(20),
        paddingBottom: moderateScale(20), 
        
      },
    
      headerView: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    
        flexDirection:'row',
        
        marginVertical: moderateScale(20),
       paddingHorizontal:20,

      },
      backtouchable:{
        borderWidth:1,
        padding:moderateScale(10),
        borderRadius:25,   
    },
    headertext: {
        fontSize: moderateScale(18),
        fontWeight: 'bold',
        color: '#303139',
        paddingVertical: moderateScale(10),
        flex:1,
        textAlign:'center',
        marginRight:moderateScale(40),
      
    
       
      },
      labelcontainer:{
        borderBottomWidth:1,
        borderColor:'#a3a3a3',
        flexDirection:'row',
        // paddingHorizontal:20,
        paddingVertical:7,
        alignItems:'center',
        marginVertical:5,
        marginHorizontal:20
      },
      profiletext:{
        color:'black',
        fontSize:moderateScale(16),
        flex:1,
       paddingHorizontal:10
      }
    });
    export default styles;