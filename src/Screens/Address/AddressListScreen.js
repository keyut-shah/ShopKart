import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import IIcon from 'react-native-vector-icons/Ionicons';
import styles from './AddressListStyle';
import AICON from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import EICON from 'react-native-vector-icons/EvilIcons';
import {FlatList} from 'react-native-gesture-handler';
import RadioForm from 'react-native-simple-radio-button';
import { moderateScale } from 'react-native-size-matters';
const AddressListScreen = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: '1',
      headertitle: 'Home',
      address: '1901 Thornigir Cir. Shiloh , Hawaii 81603',
      isSelected: true,
    },
    {
      id: '2',
      headertitle: 'Home',
      address: '1901 Thornigir Cir. Shiloh , Hawaii 81603',
      isSelected: false,
    },
    {
      id: '3',
      headertitle: 'Work',
      address: '1901 Thornigir Cir. Shiloh , Hawaii 81603',
      isSelected: false,
    },
    {
      id: '4',
      headertitle: 'Parent House',
      address:
        '1901 Thornigir Cir. Shiloh , Hawaii 81603 1901 Thornigir Cir. Shiloh , Hawaii 81603 1901 Thornigir Cir. Shiloh , Hawaii 81603',
      isSelected: false,
    },

  ];
  const [selectedIndex, setSelectedIndex] = useState(null);
  const renderItem = ({item, index}) => {
    console.log(
      'does selected index = index ',
      selectedIndex === index,
      selectedIndex,
      index,
    );
    return (
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
            <Text style={{color: 'black', fontWeight: '700', fontSize: 16}}>
              {item.headertitle}
            </Text>
            <Text
              style={{color: 'grey', fontSize: 14, marginTop: 5}}
              numberOfLines={3}>
              {item.address}
            </Text>
          </View>
        </View>
        <View style={styles.radiobuttonView}>
          <TouchableOpacity
            style={styles.radiotouchable}
            onPress={() => setSelectedIndex(index)}>
            {index == selectedIndex ? (
              <View style={styles.radiosubview}></View>
            ) : (
              <></>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const renderFooter = () => {
    return (
      <TouchableOpacity style={styles.footerContainer} activeOpacity={0.7} onPress={() => navigation.navigate('AddAddressScreen')}>
        <Text style={styles.footertext}>+ Add New Shipping Address</Text>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headertext}> Shipping Address</Text>
        <TouchableOpacity
          style={styles.backtouchable}
          activeOpacity={1}
          onPress={() => navigation.goBack()}>
          <IIcon name="arrow-back" size={26} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={renderFooter()}
        ListFooterComponentStyle={{marginBottom: 20}}
      />


      <TouchableOpacity
        style={{
          marginTop: moderateScale(20),
          paddingVertical: moderateScale(10),
          marginHorizontal: moderateScale(20),
          backgroundColor: '#816450',
          borderRadius: moderateScale(20),
          marginBottom:20,
          
        }}
        activeOpacity={0.6}
        >
        <Text
          style={{
            fontSize: moderateScale(12),
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
          }}>
          Apply
        </Text>
      </TouchableOpacity>
    </>
  );
};
export default AddressListScreen;
