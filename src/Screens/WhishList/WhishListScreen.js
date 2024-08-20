import React from 'react';
import {View, Text, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import AICON from 'react-native-vector-icons/AntDesign';
import IIcon from 'react-native-vector-icons/Ionicons';
import styles from './WhishListStyle';
import HorizontalCategoryList from '../HomeTab/HorizontalCategoryList';
import ProductGrid from '../HomeTab/Product';
const WhishListScreen = () => {
  return (
    <ScrollView style={styles.scrollcontainer}>
    
      <View style={styles.header}>
        <Text style={styles.headertext}> WhistList</Text>
        <TouchableOpacity
          style={styles.backtouchable}
          activeOpacity={1}
          onPress={() => navigation.goBack()}>
          <IIcon name="arrow-back" size={26} color="black" />
        </TouchableOpacity>
      </View>
      <HorizontalCategoryList />
        <View style={{marginTop:40}}>
      <ProductGrid />
      </View>
    </ScrollView>
  );
};
export default WhishListScreen;
