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
        
        marginTop: moderateScale(20),
       paddingHorizontal:20
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
      nameContainer:{
        
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20
      },
      nametext:{
        color:'black',
        fontWeight:'600',
        fontSize:moderateScale(15),
        // paddingVertical:moderateScale(10),
        // paddingLeft:moderateScale(10),
        flex:1
      },
      labelcontainer:{
        borderBottomWidth:1,
        borderColor:'#a3a3a3',
        flexDirection:'row',
        // paddingHorizontal:20,
        paddingVertical:7,
        alignItems:'center',
        marginVertical:5
      },
      profiletext:{
        color:'black',
        fontSize:moderateScale(16),
        flex:1,
       paddingHorizontal:10
      },



      modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Light grey background with opacity
        
        
      },
      modalView: {
        width: 300,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        
      },
      modalText: {
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      },
      button: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
      },
      cancelButton: {
        backgroundColor: '#ddd',
        marginRight: 10,
      },
      logoutButton: {
        backgroundColor: '#8b4513',
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
      },
    
    });
    export default styles;