import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
  } from 'react-native';
  import IIcon from 'react-native-vector-icons/Ionicons';
import styles from './SettingStyle';
import AIcon from 'react-native-vector-icons/AntDesign';
import OIcon from 'react-native-vector-icons/Octicons';
  import { useNavigation } from '@react-navigation/native';
  const SettingScreen = () =>{
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
        <View style={styles.headerView}>
          <TouchableOpacity
            style={styles.backtouchable}
            activeOpacity={1}
            onPress={() => navigation.goBack()}>
            <IIcon name="arrow-back" size={26} color="black" />
          </TouchableOpacity>
          <Text style={styles.headertext}>Profile</Text>
        </View>
        <TouchableOpacity
          style={styles.labelcontainer}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('EditProfileScreen')}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AIcon name="user" size={26} color="#816450" />
          </View>
          <Text style={styles.profiletext}>Notification Setting</Text>
          <IIcon name="chevron-forward" size={26} color="#816450" />
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.labelcontainer}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('PasswordManagerScreen')}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <OIcon name="key" size={26} color="#816450" />
          </View>
          <Text style={styles.profiletext}>Password Manager</Text>
          <IIcon name="chevron-forward" size={26} color="#816450" />
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.labelcontainer}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('EditProfileScreen')}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AIcon name="deleteuser" size={26} color="#816450" />
          </View>
          <Text style={styles.profiletext}>Delete Account</Text>
          <IIcon name="chevron-forward" size={26} color="#816450" />
        </TouchableOpacity>

      </View>
    )
  }

  export default SettingScreen;