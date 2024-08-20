import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const couponData = [
  {
    id: '1',
    code: 'WELCOME200',
    description: 'Add items worth $2 more to unlock',
    offer: 'Get 50% OFF',
  },
  {
    id: '2',
    code: 'CASHBACK12',
    description: 'Add items worth $2 more to unlock',
    offer: 'Up to $12.00 cashback',
  },
  {
    id: '3',
    code: 'FEST2COST',
    description: 'Add items worth $28 more to unlock',
    offer: 'Get 50% OFF for Combo',
  },
  {
    id: '4',
    code: 'CASHBACK12',
    description: 'Add items worth $2 more to unlock',
    offer: 'Up to $12.00 cashback',
  },
  {
    id: '5',
    code: 'FEST2COST',
    description: 'Add items worth $28 more to unlock',
    offer: 'Get 50% OFF for Combo',
  },
];

const CouponCard = ({ code, description, offer }) => (
  <View style={styles.couponCardContainer}>
    <Text style={styles.couponCode}>{code}</Text>
    <Text style={styles.couponDescription}>{description}</Text>
    <Text style={styles.couponOffer}>{offer}</Text>
    <TouchableOpacity style={styles.copyCodeButton}>
      <Text style={styles.copyCodeText}>COPY CODE</Text>
    </TouchableOpacity>
  </View>
);

export default function CouponCode() {
  return (
    <FlatList
      data={couponData}
      renderItem={({ item }) => (
        <CouponCard
          code={item.code}
          description={item.description}
          offer={item.offer}
        />
      )}
      keyExtractor={item => item.id}
      contentContainerStyle={{ padding: 20 }}
    />
  );
}

const styles = StyleSheet.create({
  couponCardContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    marginVertical: 10,
    padding: 15,
    paddingHorizontal: 20,
  },
  couponCode: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  couponDescription: {
    color: 'grey',
    marginVertical: 5,
  },
  couponOffer: {
    fontSize: 14,
    color: 'black',
    marginBottom: 15,
  },
  copyCodeButton: {
    backgroundColor: '#EDEDED',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  copyCodeText: {
    color: '#855A29',
    fontWeight: 'bold',
  },
});
