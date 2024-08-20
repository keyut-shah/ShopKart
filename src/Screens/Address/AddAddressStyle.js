import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
export default styles = StyleSheet.create({
  header: {
    height: 80,
    borderBottomWidth: 1,

    justifyContent: 'center',
  },
  headertext: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: 'black',
    paddingVertical: moderateScale(10),

    textAlign: 'center',

    marginHorizontal: moderateScale(60),
  },
  backtouchable: {
    borderWidth: 1,
    padding: moderateScale(10),
    borderRadius: 25,
    width: 50,
    position: 'absolute',

    marginLeft: 20,
  },
  scrollcontainer: {
    borderWidth: 1,
    borderColor: 'red',
  },
  nametextinput: {marginHorizontal: 20, marginVertical: 10},
  phonenotextinput: {
    marginLeft: 20,
    marginRight: 10,
    marginVertical: 10,
    flex: 1,
    fontSize: 15,
  },
});
