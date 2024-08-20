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
      headerView: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    
        flexDirection:'row',
        
        marginTop: moderateScale(20),
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
    
        marginRight:moderateScale(30),
      },
      subheaderView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal:moderateScale(15),
       
      },
      subheaderViewtext: {
        fontSize: moderateScale(10),
        fontWeight: 'bold',
        color: '#898989',
        paddingTop:moderateScale(20),
        textAlign:'center'
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
     
      signintouchable:{
        marginTop:moderateScale(30),
        paddingVertical:moderateScale(12),
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
    })
export default styles;