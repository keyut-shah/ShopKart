import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import AICON from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const itemWidth = (width - 30) / 2; // 2 items per row with some padding

const products = [
  { id: '1', name: 'Brown Jacket', price: 83.97, rating: 4.9, image: 'https://picsum.photos/200/300' },
  { id: '2', name: 'Striped Shirt', price: 29.99, rating: 4.5, image: 'https://picsum.photos/200/300' },
  { id: '3', name: 'Blue Jeans', price: 59.99, rating: 4.7, image: 'https://picsum.photos/200/300' },
  { id: '4', name: 'Sunglasses', price: 19.99, rating: 4.3, image: 'https://fastly.picsum.photos/id/235/200/300.jpg?hmac=CYa1eIuRJqKgRcWJs37--g8W4vCLpTZI_NDWcIRcyvk' },
  { id: '5', name: 'Shoes', price: 29.99, rating: 4.3, image: 'https://fastly.picsum.photos/id/969/200/300.jpg?hmac=c2_qrnkxo7rpO3oK-Lto9vTVaCKc5sow7GjMpKiPQN8' },
  // Add more products as needed
];

const ProductCard = ({ item, onToggleFavorite, isFavorite }) => {
  const navigation = useNavigation(); // Access the navigation object

  const handlePress = () => {
    navigation.navigate('ProductDetailsScreen'); // Navigate to the ProductDetail screen with the product ID
  };

  return(
  <TouchableOpacity onPress={handlePress} style={styles.card}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <View style={styles.nameContainer}>
      <Text numberOfLines={1} style={styles.name}>{item.name}</Text>
    </View>
    <View style={{ flexDirection: 'row', marginTop: 5 }}>
      <Text numberOfLines={1} style={styles.price}>${item.price.toFixed(2)}</Text>
      <Text style={styles.rating}>★ {item.rating}</Text>
    </View>
    <TouchableOpacity 
      style={styles.favoriteButton}
      onPress={() => onToggleFavorite(item.id)}
    >
      <AICON 
        name={isFavorite ? "heart" : "hearto"}
        size={25}
        color="#816450"
      />
    </TouchableOpacity>
  </TouchableOpacity>
)};

const ProductGrid = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter(id => id !== productId)
        : [...prevFavorites, productId]
    );
  };

  const renderItem = ({ item }) => (
    <ProductCard 
      item={item} 
      onToggleFavorite={toggleFavorite} 
      isFavorite={favorites.includes(item.id)} 
    />
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
      columnWrapperStyle={styles.row}
    />
  );
};

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  card: {
    width: itemWidth,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    height: 270,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
   
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#797979',
  },
  rating: {
    color: '#FFA500',
    marginRight: 5,
    alignSelf: 'center'
  },
  price: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    flex: 1,
  },
  favoriteButton: {
    borderWidth: 1,
    height: 35,
    position: 'absolute',
    top: 20,
    right: 20,
    width: 35,
    borderRadius: 17.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#f5d3ba'

  },
  nameContainer: {},
});

export default ProductGrid;
