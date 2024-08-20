import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
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
  cardcontainer: {
    flexDirection: 'row',

    paddingHorizontal: 10,
    height: 100,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
  },
  imagecontainer: {
    height: 80,
    width: 80,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 10,
  },

  remaingingcontainer: {
    borderWidth: 1,
    borderColor: 'green',
    flex: 1,
    marginLeft: 10,
    height: 80,
  },
  itemname: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: 'black',
  },
  itemprice: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: 'black',

    textAlignVertical: 'center',
  },
  condensedContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  expandedContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  condensedView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  expandedView: {
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  labelText: {
    fontSize: 16,
    color: '#333',
  },
  valueText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalValueText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    backgroundColor: '#8B4513',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  fixedCondensedContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    zIndex: 1, // Keep this on top when the expanded view appears
  },
  expandedContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    zIndex: 0, // Show below the condensed view initially
  },
  condensedView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  expandedView: {
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  labelText: {
    fontSize: 16,
    color: '#333',
  },
  valueText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalValueText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    backgroundColor: '#8B4513',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footerContainer: {
    padding: 15,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  subTotalText: {
    color: '#333',
    fontSize: 16,
  },
  deliveryText: {
    color: '#333',
    fontSize: 16,
  },
  discountText: {
    color: '#333',
    fontSize: 16,
  },
  totalCostText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 10,
    backgroundColor: '#8B4513',
    padding: 15,
    borderRadius: 5,
  },
  checkoutButton: {
    textAlign: 'center',
    color: '#fff',
  },
  scrollablebottomview: {
    height: 70,
    backgroundColor: 'white',
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollproceedtocheckoutview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginVertical: 0,
    marginHorizontal: 20,
  },
  addressContainer: {
    
    height: 110,
  },
  addressheadertext: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    marginLeft: moderateScale(15),
  },
  addresssubContainer: {
  
    borderColor: 'red',
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
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
  couponcodeContainer:{
    flex:1,
    borderWidth:1.5,
    borderRadius:25,
    borderColor:'#8B4513',
    flexDirection:'row',
    marginVertical:5

  },
  couponcodetextInput:{
      flex:1,
      paddingHorizontal:10,
      color:'black'
      
  },
  applytouchable:{
    backgroundColor:'#8B4513',
    borderRadius:25,
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:20,
    
    margin:2
  },
  applytext:{
    color:'white'
  },

  seemoreTouchable:{
   
    borderWidth:1,
    borderColor:'#8B4513',
    paddingHorizontal:10,
    borderRadius:10,
    marginHorizontal:10,  
    justifyContent:'center',
    alignItems:'center',
    marginVertical:5,
    
  },
  seemoretext:{
   color: '#8B4513',
   fontWeight:'600',
   fontSize:10,
   
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Gray background effect
    flex: 1,
  },

  //
});

export default styles;
