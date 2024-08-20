import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  Touchable,
  ActivityIndicator
} from 'react-native';
import styles from './VerifyCodeStyle';
import IIcon from 'react-native-vector-icons/Ionicons';
import Animated from 'react-native-reanimated';
const VerifyCodeScreen = ({navigation}) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [loading, setLoading] = useState(false);

  const inputRefs = useRef([]);

  useEffect(() => {
    // Focus on the first input when the component mounts
    inputRefs.current[0].focus();
  }, []);

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value !== '' && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (event, index) => {
    if (
      event.nativeEvent.key === 'Backspace' &&
      index > 0 &&
      otp[index] === ''
    ) {
      // Move to previous input on backspace if current input is empty
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
     navigation.navigate('NewPasswordScreen')
    }, 1500);
  };
  return (
    <View style={styles.mainView}>
      <View style={styles.emailView}>
        <TouchableOpacity
          style={styles.backtouchable}
          activeOpacity={1}
          onPress={() => navigation.goBack()}>
          <IIcon name="arrow-back" size={26} color="black" />
        </TouchableOpacity>
        <Text style={styles.emailmaintext}>Verify Code</Text>
      </View>
      <View style={styles.subemailView}>
        <Text style={styles.emailsubviewtext}>
          Please enter the code we just sent to the email
        </Text>
        <Text style={styles.emailsubviewtext2}>keyutshah1@gmail.com</Text>
      </View>
      <View style={styles.otpmainview}>
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={ref => (inputRefs.current[index] = ref)}
              style={styles.otpInput}
              maxLength={1}
              keyboardType="numeric"
              value={digit}
              onChangeText={value => handleOtpChange(value, index)}
              onKeyPress={event => handleKeyPress(event, index)}
              cursorColor={'#816450'}
            />
          ))}
        </View>
      </View>

      <View style={styles.didnotview}>
        <Text style={styles.didnottext}>Didn't receive code?</Text>
        <TouchableOpacity
          style={styles.accounttouchable}
          onPress={() =>{}}>
          <Text style={styles.createAccountText}>Resent code</Text>
        </TouchableOpacity>
      </View>
      <Animated.View    sharedTransitionTag="sharedTag"      >

      <TouchableOpacity style={styles.signintouchable} activeOpacity={0.7} onPress={handleSubmit}>
      {loading ? (
          <ActivityIndicator size="small" color="#FFF" />
        ) : (

        <Text style={styles.signintext}>Verify OTP</Text>
        )}
      </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default VerifyCodeScreen;
