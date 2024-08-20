import React, {useState, useEffect , useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  Touchable,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LoginScreen from '../SignUp/SignupScreen';
import styles from './SigninStyle';
import OIcon from 'react-native-vector-icons/Octicons';
import FIcon from 'react-native-vector-icons/FontAwesome';
import Animated from 'react-native-reanimated';
const SignInScreen = ({navigation}) => {

    const emailInput = useRef(null);
    const passInput = useRef(null);
  
    const [focusedInput, setFocusedInput] = useState(null);
    const [showPassword, setShowPassword] = useState(false);


    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
       
      };

    const iconColor = focusedInput === 'password' ? '#816450': '#898989';
    
    const inputStyle = (name) => ({
        ...styles.input,

      borderColor: focusedInput === name ? '#816450': '#898989',
      
    });
  
    const labelStyle = (name) => ({
        
        ...styles.label,
      color: focusedInput === name ? '#816450': '#898989',
    });
  


  return (
    <ScrollView style={styles.mainView} keyboardShouldPersistTaps={'handled'}>
      <View style={styles.singupView}>
        <Text style={styles.signuptext}>Sign In</Text>
      </View>
      <View style={styles.subsingupView}>
        <Text style={styles.signupsubviewtext}>
          Hi! Welcome back. you've been missed
        </Text>
      </View>
      <View style={styles.emailview}>
        <View style={styles.emailsubview1}>
          <Text style={[styles.emailtext,labelStyle('email')]}>Email</Text>
        </View>
        <View style={styles.emailsubview2}>
          {<TextInput 
          ref={emailInput}
          returnKeyType='next'
          onSubmitEditing={() => passInput.current.focus()}
          blurOnSubmit={false}
          cursorColor={'#704F38'} 
          style={[styles.emailinput,inputStyle('email')]} 
          onFocus={() => setFocusedInput('email')}
          onBlur={() => setFocusedInput(null)}
          />}
        </View>
      </View>
      <View style={styles.passview}>
        <View style={styles.passsubview1}>
          <Text style={[styles.passtext,labelStyle('password')]}>Password</Text>
        </View>
        <View style={[styles.passsubview2,inputStyle('password')]}>
          {<TextInput 
          ref={passInput}
          returnKeyType='done'
          cursorColor={'#704F38'}
           style={styles.passinput} 
           secureTextEntry={showPassword}
          onFocus={() => setFocusedInput('password')}
          onBlur={() => setFocusedInput(null)}
  
          />}
          <TouchableOpacity activeOpacity={0.6} style={styles.eyetouchable}
                  onPress={toggleShowPassword}

          >
            <OIcon    name={showPassword ? "eye-closed" : "eye"} 
        size={25} color={iconColor} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.forgotpassview}>
        <TouchableOpacity style={styles.forgottouchable} activeOpacity={0.6}
        onPress={() => navigation.navigate('ForgotPasswordScreen')}
        >
          <Text style={styles.forgottext}>Forgot Password ?</Text>
        </TouchableOpacity>
      </View>
      <Animated.View    sharedTransitionTag="sharedTag1"      >
      <TouchableOpacity style={styles.signintouchable}>
        <Text style={styles.signintext}>Sign In</Text>
      </TouchableOpacity>
</Animated.View>
      <View style={styles.orsigninview}>
        <Text style={styles.ortext}>━━━━━━━ Or sign in with ━━━━━━━</Text>
      </View>

      <View style={styles.gogolesignview}>
        <TouchableOpacity style={styles.googletouchable}>
          <FIcon name="google" size={26} color="black" />
        </TouchableOpacity>
      </View>

    <View style={styles.createaccountview}>
    <Text style={styles.accountText}>Don't have account? </Text>
  

    <TouchableOpacity style={styles.accounttouchable}
    onPress={() => navigation.navigate('SignupScreen')}
    >
        <Text style={styles.createAccountText}>Sign Up</Text>
    </TouchableOpacity>
  
    </View>
    </ScrollView>
  );
};
export default SignInScreen;
