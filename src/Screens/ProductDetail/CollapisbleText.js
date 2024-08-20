import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Assuming you're using Ionicons

const ProductDescription = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.productdescriptionView}>
      <TouchableOpacity onPress={toggleExpand} style={styles.headerContainer}>
        <Text style={styles.productheaderText}>Product Description</Text>
        {/* here add a condition to check if the text line is greater than 2 then only show this icon or if it cutting else no need to show this icon  */}
        <Icon
          name={isExpanded ? 'chevron-up' : 'chevron-down'}
          size={24}
          color="black"
        />
      </TouchableOpacity>
      {isExpanded ? (
        <Text style={styles.productdescriotiontext}>
          Here’s a randomly generated text consisting of five lines: --- Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. --- Feel free to copy and
          use this text as needed! If you need something different or more
          specific, let me know!
        </Text>
      ) : (
        <Text numberOfLines={2} style={styles.productdescriotiontext}>
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
          dolor sit amet Lorem ipsum dolor sit amet
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  productdescriptionView: {
    
    // paddingHorizontal: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  productheaderText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
  },
  productdescriotiontext: {
    fontSize: 12,
    fontWeight: '600',
    color: '#898989',
    paddingVertical: 10,
  },
});

export default ProductDescription;
