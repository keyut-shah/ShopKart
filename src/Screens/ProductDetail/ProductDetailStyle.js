import React from 'react';
import {StyleSheet} from 'react-native';
// import Colors from "../../common/Colors";
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'green',
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
  favoriteButton: {
    height: 35,
    position: 'absolute',
    // top: 25,
    right: 25,
    width: 35,
    borderRadius: 17.5,
    alignItems: 'center',
    justifyContent: 'center',

    // backgroundColor:'#f5d3ba'
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

  subView1: {
    // borderWidth:1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    marginTop: 20,
  },
  text1: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: '#898989',
    marginLeft: moderateScale(15),
    flex: 1,
  },
  rating: {
    color: '#FFA500',
    marginRight: 5,
    alignSelf: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  subView2: {
    flexDirection: 'row',
    marginRight: moderateScale(15),
  },
  productNameView: {
    justifyContent: 'center',
    paddingHorizontal: moderateScale(15),
  },
  productnametext: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: 'black',
    paddingVertical: moderateScale(10),

    // marginRight:moderateScale(30),
  },
  //   productdescriptionView:{
  //     borderWidth:1,
  //     paddingHorizontal:moderateScale(15)
  //   },
  //   productdescriotiontext:{
  //     fontSize:moderateScale(12),
  //     fontWeight:'600',
  //     color:'#898989',
  //     paddingVertical:moderateScale(10),
  //   },
  //   productheaderText:{
  //     fontSize:moderateScale(14),
  //     fontWeight:'600',
  //     color:'black',
  //     paddingTop:moderateScale(15),

  //   }
  productDetailsContainer: {
    padding: moderateScale(15),
  },
  productNameView: {
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  productnametext: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    paddingVertical: 10,
  },
  productdescriptionView: {},
  productheaderText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
    paddingTop: 15,
  },
  horizontalline: {
    borderWidth: 0.4,
    borderColor: '#898989',
    marginVertical: 10,
  },
  sizecolorContainer: {
    borderWidth: 1,
    borderColor: 'red',
    paddingHorizontal: moderateScale(15),
  },
  sizeheaderText: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: 'black',
  },
  sizelistView: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingVertical: moderateScale(10),
    justifyContent: 'center',
  },
  sizetouchable: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: moderateScale(10),
  },
  sizetext: {
    fontSize: moderateScale(12),
    fontWeight: '600',
    color: 'black',
  },
  colorheaderview: {
    marginTop: moderateScale(15),
  },
  colorheadertext: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: 'black',
  },
  colorContainer: {
    flexDirection: 'row',
  },
  colorCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selected: {
    borderWidth: 3,
    borderColor: '#000',
  },
  bottomView:{
    height: 100,
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  bottomleftView: {
    width: 180,
  
    justifyContent:"center"
  },
  bottomrightView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row'
  },
  signintouchable: {
    paddingVertical: moderateScale(15),
    paddingHorizontal:moderateScale(10),
    marginHorizontal: moderateScale(20),
    backgroundColor: '#816450',
    borderRadius: moderateScale(20),
    flexDirection:'row',
    alignItems:'center'

  },
  addtocarttext: {
    fontSize: moderateScale(12),
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginLeft:moderateScale(10)
  },
  totalprice:{
    fontSize: moderateScale(12),
    fontWeight: 'bold',
    color: '#ccc',
    textAlign: 'center',
 
  },
  pricevaluetext:{
    fontSize: moderateScale(14), 
    color: 'black',
    textAlign: 'center',
    fontWeight:'600'
  }
  //
});

export default styles;
