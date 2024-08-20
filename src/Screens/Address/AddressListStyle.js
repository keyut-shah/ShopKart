import {StyleSheet} from 'react-native';
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

  addresssubContainer: {
    borderColor: '#dedede',
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginVertical:10,
    paddingBottom:15,
    
  },
  changetext: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8B4513',
  },
  locationiconcontainer: {
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 10,
  },
  radiobuttonView: {
   
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radiotouchable: {width: 30, 
    height: 30,
     borderRadius: 15,
      borderWidth: 1,
      padding:5 ,
  },
  radiosubview:{
 backgroundColor:'#8B4513',
    flex:1,
    
    
    borderRadius:12.5
    

  },
  footerContainer:{
    marginTop:10,
    borderWidth:1,
    borderStyle:'dashed',
    borderColor:'#8B4513',
    borderRadius:10,
    padding:moderateScale(15),
    marginHorizontal:moderateScale(20),
    justifyContent:'center',
    alignItems:'center',
    // color:'greyslategray',
    backgroundColor:'#dedede'
  },
  footertext:{
    color:'#8B4513',
  }
});
export default styles;
