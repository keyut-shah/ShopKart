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
});
export default styles;