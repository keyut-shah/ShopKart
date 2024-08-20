import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  Touchable,
} from 'react-native';
import styles from './ForgotStyle';
import IIcon from 'react-native-vector-icons/Ionicons';
import Animated from 'react-native-reanimated';

const ForgotPasswordScreen = ({navigation}) => {
  const emailInput = useRef(null);
  const [focusedInput, setFocusedInput] = useState(null);

  const inputStyle = email => ({
    ...styles.input,

    borderColor: focusedInput === email ? '#816450' : '#898989',
  });

  const labelStyle = email => ({
    ...styles.label,
    color: focusedInput === email ? '#816450' : '#898989',
  });

  return (
    <View style={styles.mainView}>
      <View style={styles.emailView}>
      <TouchableOpacity style={styles.backtouchable} activeOpacity={1} onPress={() => navigation.goBack()}>
          <IIcon name="arrow-back" size={26} color="black" />
        </TouchableOpacity>
        <Text style={styles.emailmaintext}>Password Assistance</Text>
      </View>
      <View style={styles.subemailView}>
        <Text style={styles.emailsubviewtext}>
          Enter the Email Address associated with the your Shopkart Account
        </Text>
      </View>

      <View style={styles.emailview}>
        <View style={styles.emailsubview1}>
          <Text style={[styles.emailtext, labelStyle('email')]}>Email</Text>
        </View>
        <View style={styles.emailsubview2}>
          {
            <TextInput
              ref={emailInput}
              returnKeyType="done"
              keyboardType="email-address"
              cursorColor={'#704F38'}
              style={[styles.emailinput, inputStyle('email')]}
              onFocus={() => setFocusedInput('email')}
              onBlur={() => setFocusedInput(null)}
            />
          }
        </View>
      </View>

      <View style={styles.verifyview}>
        <Text style={styles.verifytext}>
         We will send you verification code to your mail address
        </Text>
      </View>
      <Animated.View    sharedTransitionTag="sharedTag"      >

      <TouchableOpacity style={styles.signintouchable}
      activeOpacity={0.7}
      onPress={() => navigation.navigate('VerifyCodeScreen')}
      >
        <Text style={styles.signintext}>Continue</Text>
      </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default ForgotPasswordScreen;
