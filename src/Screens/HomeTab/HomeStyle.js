import React from 'react';
import {StyleSheet} from 'react-native';
// import Colors from "../../common/Colors";
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 1,
    borderColor: 'red',
  },
  scrollcontainer: {
    borderWidth: 1,
    flex: 1,
    borderColor: 'green',
    paddingHorizontal: moderateScale(10),
    marginBottom:moderateScale(95),
    
  },
  headercontainer: {
    height: 100,
    flexDirection: 'row',
  },
  headerleftView: {
    flex: 1,

    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(10),
  },
  headerrightView: {
    width: moderateScale(70),

    justifyContent: 'center',
    alignItems: 'center',
  },
  noficationview: {
    backgroundColor: '#d1d1d1',
    borderRadius: moderateScale(24),
    padding: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterview: {
    backgroundColor: '#704F38',
    borderRadius: moderateScale(24),
    padding: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationicon: {
    // padding:10,
  },
  filtericon: {
    color: 'white',
  },
  locationkeytext: {
    fontSize: moderateScale(12),
    fontWeight: '600',
    color: '#797979',

    flex: 0.9,
    paddingLeft: moderateScale(5),
    textAlignVertical: 'center',
  },
  locationcontainer: {
    // borderWidth:1,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationvaluetext: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: 'black',
    // borderWidth:1,
    flex: 1,
  },
  subheadercontainer: {
    // marginTop:moderateScale(10),
    height: 70,
    flexDirection: 'row',
  },
  serachview: {
    flex: 1,

    paddingHorizontal: moderateScale(7),
    paddingVertical: moderateScale(7),
  },
  subsearchview: {
    borderWidth: 1,
    borderColor: '#797979',
    flex: 1,
    borderRadius: moderateScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(5),
  },
  searchtextinput: {
    color: 'black',
    fontSize: moderateScale(14),
    flex: 1,
    borderRadius: moderateScale(20),
    marginLeft: moderateScale(5),
  },
  categorycontainer: {
    height: moderateScale(50),

    flexDirection: 'row',
  },
  categorytext: {
    fontSize: moderateScale(15),
    fontWeight: '600',
    color: 'black',

    flex: 1,
    paddingLeft: moderateScale(8),
    textAlignVertical: 'center',
  },
  seealltouch: {
    borderRadius: moderateScale(20),
    padding: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'center',

    marginRight: moderateScale(15),
  },
  seealltext: {
    fontSize: moderateScale(12),
    fontWeight: '600',
    color: '#704F38',
  },
  categorysubcontainer:{
    
    height:100,

    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    // paddingHorizontal:moderateScale(20),
    // paddingVertical:moderateScale(10),
  },
  categorysubview:{
    // borderWidth:1,

  },
  categorytoucable:{
    
    alignItems:'center',
    justifyContent:'center',    
    backgroundColor:'#d9bfab',
    // padding:moderateScale(20),
    
    marginHorizontal:moderateScale(10),
    width:60,
    height:60,  
    borderRadius:moderateScale(30),
  },
  categorysubtext:{
    fontSize:moderateScale(12),
    fontWeight:'bold',
    color:'black',
   
    textAlign:'center'
  }

  //
});

export default styles;
