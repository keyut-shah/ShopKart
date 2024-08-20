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
        textAlign:'center',
        marginRight:moderateScale(35),
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
        paddingTop:moderateScale(20),
        textAlign:'center'
      },
      emailsubviewtext2: {
        fontSize: moderateScale(12),
        fontWeight: '800',
        color: '#816450',
       marginBottom:moderateScale(20),
        textAlign:'center',
        paddingBottom:moderateScale(10),
      },
      
 
   
      signintouchable:{
        marginTop:moderateScale(20),
        paddingVertical:moderateScale(10),
        marginHorizontal:moderateScale(20),
        backgroundColor:'#816450',
        borderRadius:moderateScale(20),
    
        
        
        
    },
    signintext:{
      fontSize:moderateScale(11),
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      otpmainview:{
        
        justifyContent:'center',
        alignItems:'center',
      },
      otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        
        

      },
      otpInput: {
        width: 50,
        height: 50,
        borderWidth: 2,
        borderColor: '#898989',
        borderRadius: 10,
        fontSize: moderateScale(20),
        textAlign: 'center',
        color: '#000',
      },
      submitButton: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
      },
      submitButtonText: {
        color: '#FFF',
        fontSize: 18,
      },
      didnotview:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:moderateScale(20),
      },    
      didnottext:{
        fontSize:moderateScale(12),
        color:'#898989',
        textAlign:'center'
      },
      resenttouchable:{
        borderWidth:1,
        padding:moderateScale(10),
        borderRadius:25,
      },
      createAccountText: {
        fontSize: moderateScale(11),
        color: '#816450',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        
    
        
      },
    


});
export default styles