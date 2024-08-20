import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
  Button
} from 'react-native';
import IIcon from 'react-native-vector-icons/Ionicons';
import styles from './ProfileTabStyle';
import AIcon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/FontAwesome';
import FOIcon from 'react-native-vector-icons/Foundation';
import FeatherICON from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
const ProfileTabScreen = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        {/* <TouchableOpacity
          style={styles.backtouchable}
          activeOpacity={1}
          onPress={() => navigation.goBack()}>
          <IIcon name="arrow-back" size={26} color="black" />
        </TouchableOpacity> */}
        <Text style={styles.headertext}>Profile</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled">
        <View style={styles.profileImageContainer}>
          <Image
            source={{uri: 'https://picsum.photos/200/300'}}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>✎</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nametext}> Keyuth Piyasara</Text>
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
          <Text style={styles.profiletext}>Your Profile</Text>
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
            <FIcon name="credit-card" size={26} color="#816450" />
          </View>
          <Text style={styles.profiletext}>Payment Methods</Text>
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
            <FOIcon name="clipboard-notes" size={26} color="#816450" />
          </View>
          <Text style={styles.profiletext}>My Orders</Text>
          <IIcon name="chevron-forward" size={26} color="#816450" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.labelcontainer}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('SettingScreen')}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AIcon name="setting" size={26} color="#816450" />
          </View>
          <Text style={styles.profiletext}>Settings</Text>
          <IIcon name="chevron-forward" size={26} color="#816450" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.labelcontainer}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('HelpCenterScreen')}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AIcon name="exclamationcircleo" size={26} color="#816450" />
          </View>
          <Text style={styles.profiletext}>Help Center</Text>
          <IIcon name="chevron-forward" size={26} color="#816450" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.labelcontainer}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('PrivacyScreen')}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FeatherICON name="lock" size={26} color="#816450" />
          </View>
          <Text style={styles.profiletext}>Privacy Policy</Text>
          <IIcon name="chevron-forward" size={26} color="#816450" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.labelcontainer}
          activeOpacity={0.7}
          onPress={() => setModalVisible(true)}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AIcon name="logout" size={26} color="#816450" />
          </View>
          <Text style={styles.profiletext}>Logout</Text>
          <IIcon name="chevron-forward" size={26} color="#816450" />
        </TouchableOpacity>
      </ScrollView>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <TouchableOpacity 
            activeOpacity={1} // Prevents overlay click from being too sensitive

        style={styles.modalOverlay} 
        onPress={() => {
          setTimeout(() => {
            setModalVisible(false); // Delays the close action slightly
          }, 200);
        }}>
              <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure you want to logout?</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.logoutButton]}
                onPress={() => {
                  setModalVisible(false);
                  // Add logout functionality here
                }}>
                <Text style={styles.buttonText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default ProfileTabScreen;
