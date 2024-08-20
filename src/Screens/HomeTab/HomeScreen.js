import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Animated,
  FlatList,
  Image,
} from 'react-native';
import styles from './HomeStyle';
import IICON from 'react-native-vector-icons/Ionicons';
import Carousel from 'react-native-reanimated-carousel';
import HorizontalCategoryList from './HorizontalCategoryList';
import ProductGrid from './Product';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
  const width = Dimensions.get('window').width;

const navigation = useNavigation();
  const serachInput = useRef(null);
  const images = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
  ];

  return (
    <ScrollView style={styles.scrollcontainer}>
      {/* header container */}
      <View style={styles.headercontainer}>
        <View style={styles.headerleftView}>
          <Text style={styles.locationkeytext}>Location</Text>
          <View style={styles.locationcontainer}>
            <IICON name="location-sharp" size={30} color="#816450" />
            <Text numberOfLines={1} style={styles.locationvaluetext}>
              Ahmedabad , Gujarat
            </Text>
          </View>
        </View>
        <View style={styles.headerrightView}>
          <TouchableOpacity style={styles.noficationview}>
            <IICON
              name="notifications"
              size={30}
              color="#816450"
              style={styles.notificationicon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* sub header container */}
      <View style={styles.subheadercontainer}>
      {/* <Animated.View    sharedTransitionTag="sharedTag"      > */}

        <Animated.View  style={styles.serachview}     sharedTransitionTag="sharedTag">
          <View style={styles.subsearchview}>
            <IICON
              name="search"
              size={30}
              color="#816450"
              style={styles.notificationicon}
            />
            {/* <TextInput
              ref={serachInput}
              returnKeyType="done"
              cursorColor={'#704F38'}
              style={styles.searchtextinput}
              onFocus={() => navigation.navigate('SearchScreen')}
              //   style={[styles.emailinput, inputStyle('email')]}
              //   onFocus={() => setFocusedInput('email')}
              //   onBlur={() => setFocusedInput(null)}
            /> */}
            <TouchableOpacity style={[styles.searchtextinput,{height:'100%',}]} onPress={() => navigation.navigate('SerachScreen')}>

            </TouchableOpacity>
          </View>
        </Animated.View>
        {/* </Animated.View> */}
        <View style={styles.headerrightView}>
          <TouchableOpacity style={styles.filterview}>
            <IICON
              name="filter"
              size={30}
              color="#816450"
              style={styles.filtericon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Carousel
        loop
        width={width }
        height={width / 2}
        autoPlay={true}
        data={images}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
        mode="parallax"
      
        style={{flex: 1}}
        scrollAnimationDuration={4000}
        onSnapToItem={index => console.log('current index:', index)}
        renderItem={({item, index}) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: 'center',
            }}>
            <Image
              source={{uri: item}}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'cover',
              }}
            />
          </View>
        )}
      />

      {/* // end of the carousel */}

      <View style={styles.categorycontainer}>
        <Text style={styles.categorytext}>Category</Text>
        <TouchableOpacity style={styles.seealltouch}>
          <Text style={styles.seealltext}> See All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.categorysubcontainer}>
   
        <View style={styles.categorysubview}>
          <TouchableOpacity style={styles.categorytoucable}>
          <IICON
            name="shirt"
            size={30}
            color="#816450"
            style={styles.notificationicon}
          />
          </TouchableOpacity>
        <Text style={styles.categorysubtext}>T-shirt</Text>
        </View>
      
        <View style={styles.categorysubview}>
          <TouchableOpacity style={styles.categorytoucable}>
          <IICON
            name="shirt"
            size={30}
            color="#816450"
            style={styles.notificationicon}
          />
          </TouchableOpacity>
        <Text style={styles.categorysubtext}>Pant</Text>
        </View>
      
        <View style={styles.categorysubview}>
          <TouchableOpacity style={styles.categorytoucable}>
          <IICON
            name="shirt"
            size={30}
            color="#816450"
            style={styles.notificationicon}
          />
          </TouchableOpacity>
        <Text style={styles.categorysubtext}>Dress</Text>
        </View>
        <View style={styles.categorysubview}>
          <TouchableOpacity style={styles.categorytoucable}>
          <IICON
            name="shirt"
            size={30}
            color="#816450"
            style={styles.notificationicon}
          />
          </TouchableOpacity>
        <Text style={styles.categorysubtext}>Jacket</Text>
        </View>
      
      </View>
      {/* category end */}
        
      <HorizontalCategoryList />
        <View style={{marginTop:40}}>
      <ProductGrid />
      </View>

    </ScrollView>
  );
};

export default HomeScreen;
