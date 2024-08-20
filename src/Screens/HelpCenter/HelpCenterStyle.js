import React from 'react';
import {StyleSheet} from 'react-native';
// import Colors from "../../common/Colors";
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: moderateScale(10),
  },

  headerView: {
    justifyContent: 'flex-start',
    alignItems: 'center',

    flexDirection: 'row',
    paddingHorizontal: moderateScale(10),
    paddingTop: moderateScale(10),

    // marginTop: moderateScale(20),
  },
  backtouchable: {
    borderWidth: 1,
    padding: moderateScale(10),
    borderRadius: 25,
  },
  headertext: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: '#303139',
    paddingVertical: moderateScale(10),
    flex: 1,
    textAlign: 'center',

    marginRight: moderateScale(30),
  },
  searchContainer: {
    borderWidth: 1,
    height: 50,
    marginVertical: moderateScale(20),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: moderateScale(10),
    marginHorizontal: moderateScale(10),
    borderRadius: moderateScale(20),
  },
  searchInput: {
    flex: 1,
    fontSize: moderateScale(14),
    marginLeft: moderateScale(10),

    borderRadius: moderateScale(20),
    color: 'black',
  },
  tabcontainer: {
    // borderWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: moderateScale(20),
    marginHorizontal: moderateScale(10),
    borderBottomWidth: 1,
  },
  textView: {
    alignItems: 'center',
    justifyContent: 'center',

    flex: 1,
    // borderBottomWidth:25,
    // borderBottomStartRadius:moderateScale(20),
    // borderBottomEndRadius   :moderateScale(20),
  },
  tabtext: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: 'black',
  },
  line: {
    borderWidth: 2,
    borderColor: '#816450',
    width: '100%',
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
  },
  linewhite: {
    borderWidth: 2,
    borderColor: 'white',
    width: '100%',
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
  },
  Viewscrollable: {
    // flex: 1,
    marginVertical: moderateScale(20),
    borderRadius: moderateScale(20),
    paddingVertical: moderateScale(20),
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    marginTop: moderateScale(20),
    borderWidth:1,
    borderColor:'red'

  },

  filterContainer: {
   
    
    marginBottom: moderateScale(10),
    // flex:1

  },
  flatListContainer: {
    flex: 1,
  },

  flatListContent: {
    paddingHorizontal: 5,
    paddingVertical: 5,
  },

  filterItem: {
    backgroundColor: '#F0F0F0',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
    height: 40,
  },
  activeFilter: {
    backgroundColor: '#7D4F34',
  },
  filterText: {
    color: '#7D4F34',
  },

  itemContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
  },
  itemTouchable: {
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection:'row',
    
    alignItems:'center'
  },
  
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex:1,
  },
  itemContent: {
    marginTop: 10,
    fontSize: 14,
    color: '#666',
  },
});
export default styles;
