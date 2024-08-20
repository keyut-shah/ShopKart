import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const categories = [
  { id: '1', title: 'All' },
  { id: '2', title: 'Popular' },
  { id: '3', title: 'New' },
  { id: '4', title: 'Trending' },
  { id: '5', title: 'Sale' },
];

const HorizontalCategoryList = () => {
  const [selectedId, setSelectedId] = useState('1');

  const handleSelect = (id) => {
    setSelectedId(prevId => prevId === id ? null : id);
  };
  const renderItem = ({ item }) => {
    const isSelected = item.id === selectedId;
    return (
      <TouchableOpacity
        onPress={() => handleSelect(item.id)}
        style={[
          styles.item,
          isSelected && styles.selectedItem
        ]}
      >
        <Text style={[
          styles.title,
          isSelected && styles.selectedTitle
        ]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{marginTop:20}}>
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 10,
  },
  item: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    borderWidth:1,
  },
  selectedItem: {
    backgroundColor: '#704F38',
  },
  title: {
    fontSize: 16,
    color: '#333',
  },
  selectedTitle: {
    color: '#ffffff',
  },
});

export default HorizontalCategoryList;