import React, {useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  Touchable,
} from 'react-native';
import IICON from 'react-native-vector-icons/Ionicons';
import styles from './SearchStyle';
import { useNavigation } from '@react-navigation/native';
const SerachScreen = () => {
  const serachInput = useRef(null);
const navigation = useNavigation();
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headertext}> My Cart</Text>
        <TouchableOpacity
          style={styles.backtouchable}
          activeOpacity={1}
          onPress={() => navigation.goBack()}>
          <IICON name="arrow-back" size={26} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.subsearchview}>
        <IICON
          name="search"
          size={30}
          color="#816450"
          style={styles.notificationicon}
        />
        <TextInput
          ref={serachInput}
          returnKeyType="done"
          cursorColor={'#704F38'}
          style={styles.searchtextinput}
          //

          //   onFocus={() => setFocusedInput('email')}
          //   onBlur={() => setFocusedInput(null)}
        />
      </View>
    </View>
  );
};

export default SerachScreen;
