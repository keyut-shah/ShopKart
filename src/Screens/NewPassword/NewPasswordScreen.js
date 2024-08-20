import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
 

} from 'react-native';
import styles from './NewPasswordStyle';
import IIcon from 'react-native-vector-icons/Ionicons';
import OIcon from 'react-native-vector-icons/Octicons';
import Animated from 'react-native-reanimated';

const NewPasswordScreen = ({navigation}) => {
  const passInput1 = useRef(null);
  const passInput2 = useRef(null);
  

  const [focusedInput, setFocusedInput] = useState(null);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  
  const toggleShowPassword1 = () => {
    setShowPassword1(!showPassword1);
    setTimeout(() => passInput1.current.focus(), 0);
  };

  const toggleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
    setTimeout(() => passInput2.current.focus(), 0);
  };

  const iconColor = name => (focusedInput === name ? '#816450' : '#898989');

  const inputStyle = name => ({
    ...styles.input,
    borderColor: focusedInput === name ? '#816450' : '#898989',
  });

  const labelStyle = name => ({
    ...styles.label,
    color: focusedInput === name ? '#816450' : '#898989',
  });

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      // alert("Passwords don't match");
      return;
    }
    setLoading(true);
   

    setTimeout(() => {
      setLoading(false);
      navigation.navigate('ProfileScreen');
    }, 1500);
  
    console.log('Password updated successfully');
  };
  
  


  return (
    <ScrollView
      contentContainerStyle={styles.mainView}
      keyboardShouldPersistTaps="handled">
      <View style={styles.headerView}>
        <TouchableOpacity
          style={styles.backtouchable}
          activeOpacity={1}
          onPress={() => navigation.goBack()}>
          <IIcon name="arrow-back" size={26} color="black" />
        </TouchableOpacity>
        <Text style={styles.headertext}>New Password</Text>
      </View>

      <View style={styles.subheaderView}>
        <Text style={styles.subheaderViewtext}>
          Your new password must be different from previously used password
        </Text>
      </View>

      <View style={styles.passview}>
        <View style={styles.passsubview1}>
          <Text style={[styles.passtext, labelStyle('password1')]}>
            Password
          </Text>
        </View>
        <View style={[styles.passsubview2, inputStyle('password1')]}>
          <TextInput
            ref={passInput1}
            returnKeyType="next"
            cursorColor={'#704F38'}
            style={styles.passinput}
            secureTextEntry={!showPassword1}
            onFocus={() => setFocusedInput('password1')}
            onBlur={() => setFocusedInput(null)}
            onChangeText={setPassword}
            value={password}
            onSubmitEditing={() => passInput2.current.focus()}
          />
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.eyetouchable}
            onPress={toggleShowPassword1}>
            <OIcon
              name={showPassword1 ? 'eye' : 'eye-closed'}
              size={25}
              color={iconColor('password1')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.passview}>
        <View style={styles.passsubview1}>
          <Text style={[styles.passtext, labelStyle('password2')]}>
            Confirm Password
          </Text>
        </View>
        <View style={[styles.passsubview2, inputStyle('password2')]}>
          <TextInput
            ref={passInput2}
            returnKeyType="done"
            cursorColor={'#704F38'}
            style={styles.passinput}
            secureTextEntry={!showPassword2}
            onFocus={() => setFocusedInput('password2')}
            onBlur={() => setFocusedInput(null)}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            onSubmitEditing={handleSubmit}
          />
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.eyetouchable}
            onPress={toggleShowPassword2}>
            <OIcon
              name={showPassword2 ? 'eye' : 'eye-closed'}
              size={25}
              color={iconColor('password2')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Animated.View    sharedTransitionTag="sharedTag"      >
    
      <TouchableOpacity
        style={styles.signintouchable}
        activeOpacity={0.7}
        onPress={handleSubmit}
       >
      {loading ? (
          <ActivityIndicator size='small' color="#FFF" />
        ) : (
          <Text style={styles.signintext}>Create New Password</Text>
        )}
      </TouchableOpacity>
      </Animated.View>

    </ScrollView>
  );
};

export default NewPasswordScreen;
