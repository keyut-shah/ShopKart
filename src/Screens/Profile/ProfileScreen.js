import React, { useState , useRef} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Keyboard  ,   ActivityIndicator
} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './ProfileStyle';
import IIcon from 'react-native-vector-icons/Ionicons';
import OIcon from 'react-native-vector-icons/Octicons';
import Animated from 'react-native-reanimated';

const ProfileScreen = ({navigation}) => {

  const nameInput = useRef(null);
  const phoneInput = useRef(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');


  const inputStyle = name => ({
    ...styles.input,

    borderColor: focusedInput === name ? '#816450' : '#898989',
  });

  const labelStyle = name => ({
    ...styles.label,
    color: focusedInput === name ? '#816450' : '#898989',
  });

  const handleSubmit = () => {
  
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    
    }, 1500);
  
    
  };
  return (
    <View style={styles.container}>
    <ScrollView
    contentContainerStyle={styles.scrollViewContent}
    keyboardShouldPersistTaps="handled">
    <View style={styles.headerView}>
      <TouchableOpacity
        style={styles.backtouchable}
        activeOpacity={1}
        onPress={() => navigation.goBack()}>
        <IIcon name="arrow-back" size={26} color="black" />
      </TouchableOpacity>
      <Text style={styles.headertext}>Complete Your Profile</Text>
    </View>

    <View style={styles.subheaderView}>
        <Text style={styles.subheaderViewtext}>
         Don't wory only you can see your personal data .No one else can see.
        </Text>
      </View>

      <View style={styles.profileImageContainer}>
        <Image
            source={{ uri: 'https://picsum.photos/200/300' }}
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>✎</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.nameview}>
        <View style={styles.namesubview1}>
          <Text style={[styles.nametext, labelStyle('name')]}>Name</Text>
        </View>
        <View style={styles.namesubview2}>
          {
            <TextInput
              ref={nameInput}
              returnKeyType="next"
              onSubmitEditing={() => phoneInput.current.focus()}
              blurOnSubmit={false}
              cursorColor={'#704F38'}
              style={[styles.nameinput, inputStyle('name')]}
              onFocus={() => setFocusedInput('name')}
              onBlur={() => setFocusedInput(null)}
            />
          }
        </View>
      </View>


      <View style={styles.nameview}>
        <View style={styles.namesubview1}>
          <Text style={[styles.nametext, labelStyle('phoneno')]}>Phone Number</Text>
        </View>
        <View style={styles.phonesubview2}>
          {
            <>
            <Text style={styles.phonecode}>+91 |</Text>
            <TextInput
              ref={phoneInput}
              returnKeyType="done"
              onSubmitEditing={() => Keyboard.dismiss()}
              blurOnSubmit={false}
              keyboardType='numeric'
              cursorColor={'#704F38'}
              style={[styles.phoneinput, inputStyle('phoneno')]}
              onFocus={() => setFocusedInput('phoneno')}
              onBlur={() => setFocusedInput(null)}
            />
            </>
          }
        </View>
        <Animated.View    sharedTransitionTag="sharedTag"      >

        <TouchableOpacity style={styles.signintouchable} onPress={handleSubmit}
                // sharedTransitionTag="sharedTag"

        >
        {loading ? (
          <ActivityIndicator size='small' color="#FFF" />
        ) : (
        <Text style={styles.signintext}>Complete Profile</Text>
        )}
      </TouchableOpacity>
        </Animated.View>
      </View>

   </ScrollView>
   </View>
  );
};

export default ProfileScreen;
