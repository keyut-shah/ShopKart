import React from 'react';
import {StyleSheet} from 'react-native';
// import Colors from "../../common/Colors";
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        paddingHorizontal: moderateScale(20),
      },
      emailView: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    
        flexDirection:'row',
        
        marginTop: moderateScale(20),
      },
      emailmaintext: {
        fontSize: moderateScale(18),
        fontWeight: 'bold',
        color: '#303139',
        paddingVertical: moderateScale(10),
        flex:1,
        textAlign:'center'
      },
      subemailView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal:moderateScale(15),
       
      },
      emailsubviewtext: {
        fontSize: moderateScale(10),
        fontWeight: 'bold',
        color: '#898989',
        paddingVertical: moderateScale(10),
        textAlign:'center'
      },
      emailview: {
        marginTop: moderateScale(15),
    
        paddingHorizontal: moderateScale(5),
        
      },
      emailsubview1: {
        
      },
      emailtext: {
        fontSize: moderateScale(12),
        fontWeight: 'bold',
        color: '#898989',
        paddingVertical: moderateScale(10),
      },
      emailsubview2: {},
      emailinput: {
        fontSize: moderateScale(12),
        fontWeight: 'bold',
        color: 'black',
        borderWidth: 1.5,
        borderColor: '#898989',
        borderRadius: moderateScale(20),
        paddingHorizontal: moderateScale(10),
      },
      signintouchable:{
        marginTop:moderateScale(20),
        paddingVertical:moderateScale(10),
        marginHorizontal:moderateScale(20),
        backgroundColor:'#816450',
        borderRadius:moderateScale(20),
    
        
        
        
    },
    signintext:{
      fontSize:moderateScale(12),
      fontWeight:'bold',
      color:'white',
      textAlign:'center'
    },
    orsigninview:{
       justifyContent:'center',
       alignItems:'center',
        marginTop:moderateScale(30),
    
    },
    verifyview: {
        marginTop: moderateScale(5),
        justifyContent: 'center',
        alignItems: 'center',
      
       
      },
      verifytext: {
        fontSize: moderateScale(10),
        fontWeight: 'bold',
        color: '#898989',
        paddingVertical: moderateScale(10),
        textAlign:'center'
      },

      backtouchable:{
        borderWidth:1,
        padding:moderateScale(10),
        borderRadius:25,   
    },


});
export default styles