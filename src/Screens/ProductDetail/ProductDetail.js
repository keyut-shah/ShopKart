// import React, { useState } from 'react';
// import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// const ProductDetailsScreen = () => {
//   const [selectedSize, setSelectedSize] = useState('S');
//   const [selectedColor, setSelectedColor] = useState('Brown');

//   const images = [
//     { id: '1', uri: 'https://picsum.photos/200/300' },
//     { id: '2', uri: 'https://picsum.photos/200/300' },
//     { id: '3', uri: 'https://picsum.photos/200/300' },
//     { id: '4', uri:'https://picsum.photos/200/300' },
//     { id: '5', uri: 'https://picsum.photos/200/300' },
//     { id: '6', uri: 'https://picsum.photos/200/300' },
//   ];

//   const sizes = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
//   const colors = ['#D2B48C', '#8B4513', '#DEB887', '#CD853F', '#D2691E', '#000000'];

//   const renderImageItem = ({ item }) => (
//     <Image source={{ uri: item.uri }} style={styles.carouselImage} />
//   );

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity>
//           <Icon name="arrow-back" size={24} color="#000" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Product Details</Text>
//         <TouchableOpacity>
//           <Icon name="heart-outline" size={24} color="#000" />
//         </TouchableOpacity>
//       </View>

//       <Image
//         source={{ uri: 'https://picsum.photos/200/300' }}
//         style={styles.mainImage}
//       />

//       <FlatList
//         data={images}
//         renderItem={renderImageItem}
//         keyExtractor={(item) => item.id}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         style={styles.carousel}
//       />

//       <View style={styles.detailsContainer}>
//         <Text style={styles.category}>Female's Style</Text>
//         <View style={styles.titleContainer}>
//           <Text style={styles.title}>Light Brown Jacket</Text>
//           <View style={styles.ratingContainer}>
//             <Icon name="star" size={16} color="#FFA500" />
//             <Text style={styles.rating}>4.5</Text>
//           </View>
//         </View>

//         <Text style={styles.description}>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
//           ut labore et dolore magna aliqua.
//         </Text>
//         <TouchableOpacity>
//           <Text style={styles.readMore}>Read more</Text>
//         </TouchableOpacity>

//         <Text style={styles.sectionTitle}>Select Size</Text>
//         <View style={styles.sizeContainer}>
//           {sizes.map((size) => (
//             <TouchableOpacity
//               key={size}
//               style={[
//                 styles.sizeButton,
//                 selectedSize === size && styles.selectedSizeButton,
//               ]}
//               onPress={() => setSelectedSize(size)}
//             >
//               <Text style={[
//                 styles.sizeText,
//                 selectedSize === size && styles.selectedSizeText
//               ]}>{size}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         <Text style={styles.sectionTitle}>Select Color : Brown</Text>
//         <View style={styles.colorContainer}>
//           {colors.map((color) => (
//             <TouchableOpacity
//               key={color}
//               style={[styles.colorButton, { backgroundColor: color }]}
//               onPress={() => setSelectedColor(color)}
//             />
//           ))}
//         </View>

//         <View style={styles.priceContainer}>
//           <Text style={styles.priceLabel}>Total Price</Text>
//           <Text style={styles.price}>$83.97</Text>
//         </View>

//         <TouchableOpacity style={styles.addToCartButton}>
//           <Icon name="cart-outline" size={24} color="#FFF" />
//           <Text style={styles.addToCartText}>Add to Cart</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 16,
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   mainImage: {
//     width: '100%',
//     height: 300,
//     resizeMode: 'cover',
//   },
//   carousel: {
//     marginTop: 10,
//   },
//   carouselImage: {
//     width: 80,
//     height: 80,
//     marginRight: 10,
//     borderRadius: 8,
//   },
//   detailsContainer: {
//     padding: 16,
//   },
//   category: {
//     fontSize: 14,
//     color: '#888',
//   },
//   titleContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 8,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   ratingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   rating: {
//     marginLeft: 4,
//     fontSize: 16,
//   },
//   description: {
//     marginTop: 16,
//     color: '#666',
//   },
//   readMore: {
//     color: '#007AFF',
//     marginTop: 8,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 24,
//     marginBottom: 12,
//   },
//   sizeContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   sizeButton: {
//     borderWidth: 1,
//     borderColor: '#DDD',
//     borderRadius: 8,
//     padding: 10,
//     minWidth: 50,
//     alignItems: 'center',
//   },
//   selectedSizeButton: {
//     backgroundColor: '#8B4513',
//     borderColor: '#8B4513',
//   },
//   sizeText: {
//     color: '#333',
//   },
//   selectedSizeText: {
//     color: '#FFF',
//   },
//   colorContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 12,
//   },
//   colorButton: {
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     borderWidth: 1,
//     borderColor: '#DDD',
//   },
//   priceContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 24,
//   },
//   priceLabel: {
//     fontSize: 16,
//     color: '#666',
//   },
//   price: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   addToCartButton: {
//     backgroundColor: '#8B4513',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//     borderRadius: 8,
//     marginTop: 24,
//   },
//   addToCartText: {
//     color: '#FFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginLeft: 8,
//   },
// });

// export default ProductDetailsScreen;
// // import React from 'react';
// // import {View} from 'react-native';
// // const ProductDetailsScreen=()=>{
// //     return(
// //         <View></View>
// //     )
// // }
// // export default ProductDetailsScreen;

import React, {useState} from 'react';
import {View, ScrollView, TouchableOpacity, Text} from 'react-native';
import IIcon from 'react-native-vector-icons/Ionicons';
import styles from './ProductDetailStyle';
import {useNavigation} from '@react-navigation/native';
import AICON from 'react-native-vector-icons/AntDesign';
import F5Icon from 'react-native-vector-icons/FontAwesome5';
import ProductImageGallery from './ProductImageGallery';
import {moderateScale} from 'react-native-size-matters';
import CollapsibleText from './CollapisbleText';
const ProductDetailsScreen = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const colors = ['#D4A373', '#8D7D6D', '#B06825', '#D89E44', '#1D1D1D'];
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const product = {
    images: [
      'https://picsum.photos/200/300',
      'https://fastly.picsum.photos/id/47/200/300.jpg?hmac=qgEtmhYzb3otRNnLN3afPLzmn6VJKj6x86OGOjDcBxQ',
      'https://fastly.picsum.photos/id/185/200/300.jpg?hmac=77sYncM4jSlhNlIKtqotElWQuIV3br7wNsq18rlbKnA',

      'https://fastly.picsum.photos/id/1002/200/300.jpg?hmac=QAnT71VGihaxEf_iyet9i7yb3JvYTzeojsx-djd3Aos',
    ],
  };
  const navigation = useNavigation();
  return (
    <>
      <ScrollView style={styles.maincontainer}>
        <View style={styles.header}>
          <Text style={styles.headertext}> Product Details</Text>
          <TouchableOpacity
            style={styles.backtouchable}
            activeOpacity={1}
            onPress={() => navigation.goBack()}>
            <IIcon name="arrow-back" size={26} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={() => setIsFavorite(!isFavorite)}
            // onPress={() => onToggleFavorite(item.id)}
          >
            <AICON
              name={isFavorite ? 'heart' : 'hearto'}
              size={25}
              color="#816450"
            />
          </TouchableOpacity>
        </View>
        <ProductImageGallery images={product.images} />
        <View style={styles.subView1}>
          <Text style={styles.text1}>Female Styles</Text>
          <View style={styles.subView2}>
            <Text style={styles.rating}>★ 4.2</Text>
          </View>
        </View>

        <View style={styles.productNameView}>
          <Text style={styles.productnametext}>Light Brown Jacket</Text>
        </View>
        {/* <View style={styles.productdescriptionView}>
        <Text style={styles.productheaderText}>Product Description</Text>
        <Text style={styles.productdescriotiontext}>
          Lorem ipsum dolor sit amet
          Lorem ipsum dolor sit amet
          Lorem ipsum dolor sit amet
          Lorem ipsum dolor sit amet
        </Text>
      </View> */}
        <View style={styles.productDetailsContainer}>
          <View style={styles.productdescriptionView}>
            <CollapsibleText />
          </View>
          <View style={styles.horizontalline}></View>
        </View>
        <View style={styles.sizecolorContainer}>
          <Text style={styles.sizeheaderText}>Select Size</Text>
          <View style={styles.sizelistView}>
            <TouchableOpacity style={styles.sizetouchable}>
              <Text style={styles.sizetext}> S </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sizetouchable}>
              <Text style={styles.sizetext}> M </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sizetouchable}>
              <Text style={styles.sizetext}> L </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sizetouchable}>
              <Text style={styles.sizetext}>XL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sizetouchable}>
              <Text style={styles.sizetext}>XXL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sizetouchable}>
              <Text style={styles.sizetext}>XXL</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.colorheaderview}>
            <Text style={styles.colorheadertext}>
              Select Color:{' '}
              <Text style={{color: selectedColor}}>{selectedColor}</Text>
            </Text>
            <View style={styles.sizelistView}>
              {colors.map((color, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.colorCircle,
                    {backgroundColor: color},
                    selectedColor === color && styles.selected,
                  ]}
                  onPress={() => setSelectedColor(color)}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={styles.bottomView}>
        <View style={styles.bottomleftView}>
        <Text style={styles.totalprice}>Total Price</Text>
        <Text style={styles.pricevaluetext}>$83.45</Text>

        </View>
        <View style={styles.bottomrightView}>
          <TouchableOpacity style={styles.signintouchable} activeOpacity={0.7}
          onPress={()=> navigation.navigate('AddtoCartScreen')}
          >
          <F5Icon
              name= 'shopping-bag'
              size={25}
              color="white"
            />
            <Text style={styles.addtocarttext}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ProductDetailsScreen;
