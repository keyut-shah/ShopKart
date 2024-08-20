
import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
const styles = StyleSheet.create({
    container:{
        borderWidth:1
    },
    header: {
        height: 80,
        borderWidth: 1,
        borderColor: 'green',
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
        // flex: 1,
        borderRadius: moderateScale(20),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: moderateScale(5),
        marginTop:moderateScale(20),
        marginHorizontal:moderateScale(20)

      },
      searchtextinput: {
        color: 'black',
        fontSize: moderateScale(14),
        flex: 1,
        borderRadius: moderateScale(20),
        marginLeft: moderateScale(5),
      },
});
export default styles;