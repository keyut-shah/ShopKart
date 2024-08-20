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
  singupView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: moderateScale(20),
    
    marginTop: moderateScale(30),
  },
  signuptext: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: '#303139',
    paddingVertical: moderateScale(10),
  },
  subsingupView: {
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  signupsubviewtext: {
    fontSize: moderateScale(10),
    fontWeight: 'bold',
    color: '#898989',
    paddingVertical: moderateScale(10),
  },
  emailview: {
    marginTop: moderateScale(50),

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

  passview: {
    marginTop: moderateScale(15),

    paddingHorizontal: moderateScale(5),
  },
  passsubview1: {},
  passtext: {
    fontSize: moderateScale(12),
    fontWeight: 'bold',
    color: '#898989',
    paddingVertical: moderateScale(10),
  },
  passsubview2: {
    borderWidth: 1.5,
    borderColor: '#898989',
    borderRadius: moderateScale(20),
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  passinput: {
    flex: 1,
    fontSize: moderateScale(12),
    fontWeight: 'bold',
    color: 'black',

    borderRadius: moderateScale(20),
    marginRight: moderateScale(10),
  },
  eyetouchable: {
   paddingHorizontal:10,
  },
  forgotpassview:{
  
    borderRadius:moderateScale(10),
    justifyContent:'center',
    alignItems:'flex-end',
    marginTop:moderateScale(10),
    paddingRight:moderateScale(10)
  },
  forgottext:{
  fontSize:moderateScale(12),
  fontWeight:'bold',
  color:'#816450' ,
  textDecorationLine:'underline'
},
forgottouchable:{
    
},
signintouchable:{
    marginTop:moderateScale(30),
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
ortext:{
  fontSize:moderateScale(10),
  color: '#898989',
  textAlign:'center',
 
},
gogolesignview:{
    marginTop:moderateScale(25),
    paddingVertical:moderateScale(5),
    
    justifyContent:'center',
    alignItems:'center',
    
}   ,
googletouchable:{
    borderWidth:1,
    padding:moderateScale(10),
    borderRadius:25,   
},
createaccountview:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: moderateScale(20),

  },
  accountText: {
    fontSize: moderateScale(14),
    color: 'black',
   
    
  },
  createAccountText: {
    fontSize: moderateScale(14),
    color: '#816450',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    

    
  },
  accounttouchable: {
    // Remove margin and alignment styles from here
  }

});
export default styles;
