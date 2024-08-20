import React, {useState, useRef, useCallback, useMemo} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  LayoutAnimation,
  Animated,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './AddtoStyle';
import IIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import EICON from 'react-native-vector-icons/EvilIcons';
import CouponCode from './CouponCode';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';

export default AddotCartScreen = () => {
  const bottomSheetRef = useRef(null);

  // state
  const [isOpen, setIsOpen] = useState(false);

  // variables
  const snapPoints = useMemo(() => ['90%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
    setIsOpen(index !== -1);
  }, []);

  const handleOpenPress = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  // renders
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    [],
  );

  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Brown Jacket',
      size: 'XL',
      price: 83.97,
      quantity: 1,
      image: 'https://example.com/brown-jacket.jpg',
    },
    {
      id: '2',
      name: 'Brown Suite',
      size: 'XL',
      price: 120,
      quantity: 1,
      image: 'https://example.com/brown-suite.jpg',
    },
    {
      id: '3',
      name: 'Brown Jacket',
      size: 'XL',
      price: 83.97,
      quantity: 1,
      image: 'https://example.com/brown-jacket.jpg',
    },
    {
      id: '4',
      name: 'Brown Suite',
      size: 'XL',
      price: 120,
      quantity: 1,
      image: 'https://example.com/brown-suite.jpg',
    },
    {
      id: '5',
      name: 'Brown Jacket',
      size: 'XL',
      price: 83.97,
      quantity: 1,
      image: 'https://example.com/brown-jacket.jpg',
    },
    {
      id: '6',
      name: 'Brown Suite',
      size: 'XL',
      price: 120,
      quantity: 1,
      image: 'https://example.com/brown-suite.jpg',
    },
    {
      id: '7',
      name: 'Brown Suite',
      size: 'XL',
      price: 120,
      quantity: 1,
      image: 'https://example.com/brown-suite.jpg',
    },
    {
      id: '8',
      name: 'Brown Jacket',
      size: 'XL',
      price: 83.97,
      quantity: 1,
      image: 'https://example.com/brown-jacket.jpg',
    },
    {
      id: '9',
      name: 'Brown Suite',
      size: 'XL',
      price: 120,
      quantity: 1,
      image: 'https://example.com/brown-suite.jpg',
    },
    {
      id: '10',
      name: 'Brown Jacket',
      size: 'XL',
      price: 83.97,
      quantity: 1,
      image: 'https://example.com/brown-jacket.jpg',
    },
    {
      id: '11',
      name: 'Brown Suite',
      size: 'XL',
      price: 120,
      quantity: 1,
      image: 'https://example.com/brown-suite.jpg',
    },
    // Add more items as needed
  ]);

  const CartItem = ({item, onIncrease, onDecrease}) => (
    <View style={styles.cardcontainer}>
      <View style={styles.imagecontainer}>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>

      <View style={styles.remaingingcontainer}>
        <Text style={styles.itemname}>{item.name}</Text>

        <View
          style={{
            borderColor: 'blue',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={styles.itemname}>Size:{item.size}</Text>
            <Text style={styles.itemname}>${item.price}</Text>
          </View>
          <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
            <TouchableOpacity
              style={{justifyContent: 'center', alignItems: 'center'}}
              activeOpacity={0.7}
              onPress={() => onDecrease(item)}>
              <Text
                style={{
                  backgroundColor: 'grey',
                  width: 30,
                  height: 30,
                  borderRadius: 10,
                  textAlign: 'center',
                }}>
                -
              </Text>
            </TouchableOpacity>
            <Text style={styles.itemprice}> {item.quantity} </Text>
            <TouchableOpacity
              style={{justifyContent: 'center', alignItems: 'center'}}
              activeOpacity={0.7}
              onPress={() => onIncrease(item)}>
              <Text
                style={{
                  backgroundColor: '#816450',
                  width: 30,
                  height: 30,
                  borderRadius: 10,
                  textAlign: 'center',
                }}>
                +
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  const updateQuantity = (id, change) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? {...item, quantity: Math.max(0, item.quantity + change)}
          : item,
      ),
    );
  };

  const scrollY = useRef(new Animated.Value(0)).current;
  const {height, width} = Dimensions.get('window');
  const [contentHeight, setContentHeight] = useState(0);
  const isScrollable = contentHeight > height;

  const renderFooter = () => (
    <View style={[styles.footerContainer]}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.couponcodeContainer}>
          <TextInput
            style={styles.couponcodetextInput}
            placeholder="Coupon Code"
            placeholderTextColor={'grey'}
          />
          <TouchableOpacity style={styles.applytouchable}>
            <Text style={styles.applytext}>Apply</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.seemoreTouchable}
          onPress={handleOpenPress}>
          <Text style={styles.seemoretext}>More </Text>
          <Text style={styles.seemoretext}>Offers</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.subTotalText}>Sub-Total: $407.94</Text>
      <Text style={styles.deliveryText}>Delivery Fee: $25.00</Text>
      <Text style={styles.discountText}>Discount: -$35.00</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.totalCostText}>Total : $397.94</Text>
        <View
          style={[
            styles.buttonContainer,
            {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 10,
              marginVertical: 0,
              marginHorizontal: 10,
              borderRadius: 20,
            },
          ]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('CheckoutScreen')}>
            <Text style={{color: 'white'}}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  const renderHeader = () => {
    return (
      <View style={styles.addressContainer}>
        <Text style={styles.addressheadertext}>Shipping Address</Text>
        <View style={styles.addresssubContainer}>
          <View style={styles.locationiconcontainer}>
            <EICON name="location" size={35} color="black" />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              paddingTop: 5,
              overflow: 'scroll',
            }}>
            <View>
              <Text style={{color: 'black'}}>Home</Text>
              <Text style={{color: 'black', fontSize: 14}} numberOfLines={2}>
                1901 Thornigir Cir. Shiloh , Hawaii 81603{' '}
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 10,
            }}>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: 'black',
                padding: 5,
                borderRadius: 10,
              }}
              onPress={() => navigation.navigate('AddressListScreen')}>
              <Text style={styles.changetext}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, }}>
      <View style={styles.header}>
        <Text style={styles.headertext}> My Cart</Text>
        <TouchableOpacity
          style={styles.backtouchable}
          activeOpacity={1}
          onPress={() => navigation.goBack()}>
          <IIcon name="arrow-back" size={26} color="black" />
        </TouchableOpacity>
      </View>
      {/* end of the header */}

      <Animated.FlatList
        removeClippedSubviews={false}
        data={cartItems}
        renderItem={({item}) => (
          <CartItem
            item={item}
            onIncrease={() => updateQuantity(item.id, 1)}
            onDecrease={() => updateQuantity(item.id, -1)}
          />
        )}
        keyExtractor={item => item.id}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}
        ListHeaderComponent={renderHeader()}
        ListFooterComponent={renderFooter()}
        onContentSizeChange={(contentWidth, contentHeight) => {
          setContentHeight(contentHeight);
        }}
      />

      {isScrollable && (
        <Animated.View
          style={[
            styles.footerContainer,
            {
              position: 'absolute',
              bottom: 0,
              transform: [
                {
                  translateY: scrollY.interpolate({
                    inputRange: [0, height],
                    outputRange: [0, height - 100],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            },
          ]}>
          {
            <View style={[styles.scrollablebottomview, {paddingRight: 10}]}>
              <Text style={styles.totalCostText}>Total : $397.94</Text>
              <View
                style={[
                  styles.buttonContainer,
                  styles.scrollproceedtocheckoutview,
                  {borderRadius: 20},
                ]}>
                <TouchableOpacity>
                  <Text style={{color: 'white'}}>Proceed to Checkout</Text>
                </TouchableOpacity>
              </View>
            </View>
          }
        </Animated.View>
      )}
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 20,
            alignItems: 'center',
            justifyContent: 'flex-end',
            position: 'absolute',
            zIndex: 2,
            top: 0,
            right: 0,
          }}>
          {/* <Text style={{flex:1,color:'black',fontSize:16,justifyContent:'center',alignItems:'center',textAlign:'center'}}
        
        >Coupon Code</Text> */}
          <TouchableOpacity
            onPress={() => bottomSheetRef.current?.close()}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderRadius: 20,
              width: 40,
              height: 40,
            }}>
            <Text style={{color: 'black'}}>X</Text>
          </TouchableOpacity>
        </View>
        <BottomSheetScrollView>
          <CouponCode />
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};
