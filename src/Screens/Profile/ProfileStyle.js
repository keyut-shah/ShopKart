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
      container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
      },
      scrollViewContent: {
        flexGrow: 1,
        paddingHorizontal: moderateScale(20),
        paddingBottom: moderateScale(20), // Add some bottom padding for scrolling
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
        fontSize: moderateScale(11),
        fontWeight: 'bold',
        color: '#898989',
        paddingTop:moderateScale(20),
        textAlign:'center'
      },
      profileImageContainer: {
        alignSelf: 'center',
        

        marginVertical:moderateScale(20),

      },
      profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#e0e0e0',
      },
      editButton: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        backgroundColor: '#8b4513',
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
      },
      editButtonText: {
        color: 'white',
      },
      nameview: {
        marginTop: moderateScale(15),
    
        paddingHorizontal: moderateScale(5),
        
      },
      namesubview1: {
        
      },
      nametext: {
        fontSize: moderateScale(12),
        fontWeight: 'bold',
        color: '#898989',
        paddingVertical: moderateScale(10),
      },
      namesubview2: {
      
      },
      nameinput: {
        fontSize: moderateScale(12),
        fontWeight: 'bold',
        color: 'black',
        borderWidth: 1.5,
        borderColor: '#898989',
        borderRadius: moderateScale(20),
        paddingHorizontal: moderateScale(10),
      },
      phonesubview2:{
        flexDirection:'row',
        borderWidth:1.5,
        borderColor: '#898989',
        borderRadius: moderateScale(20),
        alignItems:'center'
      },
      phoneinput: {
        fontSize: moderateScale(13),
        fontWeight: 'bold',
        color: 'black',
        flex:1,
        alignItems:'center',
        
      },
      phonecode:{
        fontSize: moderateScale(13),
        fontWeight: 'bold',
        color: 'black',
        paddingHorizontal: moderateScale(5),
        marginBottom:moderateScale(2)
      },
      signintouchable:{
        marginTop:moderateScale(30),
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

      

});
export default styles;