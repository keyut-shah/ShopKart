import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import IIcon from 'react-native-vector-icons/Ionicons';
import styles from './PrivacyStyle';
import { useNavigation } from '@react-navigation/native';
import { moderateScale } from 'react-native-size-matters';
const PrivacyScreen = () => {
    const navigation = useNavigation();
    const cancelationtext = `Here is a sample cancellation policy text for your app: Our cancellation policy is designed to provide you with flexibility while ensuring the smooth operation of our services. We understand that plans may change, and we aim to accommodate your needs as best we can.
If you need to cancel your subscription or a specific service, please notify us at least 7 days prior to your next billing date. This will ensure that your cancellation is processed in time and that you are not charged for the upcoming billing period.
Once your cancellation request is received, we will process it within 5 business days. Please note that any unused portion of your current billing period is non-refundable. Your access to the service will remain active until the end of your current billing period.
If you have any questions or concerns regarding our cancellation policy, please don't hesitate to contact our customer support team at support@example.com. We are here to assist you and ensure a smooth experience.
Terms and Conditions`

const terms = `Terms and Conditions
Here is a sample terms and conditions text for your app:
Welcome to our app! By downloading, accessing, or using our app, you agree to be bound by these terms and conditions and our privacy policy.
Eligibility: Our app is intended for individuals aged 13 and above. By using our app, you represent and warrant that you are at least 13 years old.
User Accounts: To access certain features of our app, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
User Content: Any content you upload, submit, post, or display while using our app remains yours. However, by sharing content, you grant us a worldwide, non-exclusive, royalty-free license to use, modify, and distribute such content for the purpose of operating and improving our app.
Intellectual Property: Our app and its entire contents, features, and functionality are owned by we and are protected by copyright, trademark, and other intellectual property laws.
Third-Party Services: Our app may contain links to third-party websites or services. We are not responsible for the availability, content, or privacy practices of those external sites or services.
Termination: We reserve the right to suspend or terminate your access to our app at any time for any reason, including if we reasonably believe that you have violated these terms and conditions.
Limitation of Liability: In no event shall we be liable for any indirect, special, incidental, or consequential damages related to your use of our app.
Governing Law: These terms and conditions shall be governed by and construed in accordance with the laws of [Jurisdiction], without giving effect to any principles of conflicts of law.
If you have any questions or concerns regarding these terms and conditions, please contact us at support@example.com.
`
  return (
    <View style={styles.mainView}>
      <View style={styles.headerView}>
        <TouchableOpacity
          style={styles.backtouchable}
          activeOpacity={1}
          onPress={() => navigation.goBack()}>
          <IIcon name="arrow-back" size={26} color="black" />
        </TouchableOpacity>
        <Text style={styles.headertext}>Privacy Policy</Text>
      </View>
      <ScrollView style={{flex:1,marginTop:moderateScale(20)}}>
                <View style={{flex:1}}>
                    <Text style={{color:'#8D7D6D',fontSize:moderateScale(14),fontWeight:'bold'}}>
                        Cancelation Policy
                    </Text>
                    <Text style={{color:'black',fontSize:moderateScale(14)}}>{cancelationtext}</Text>
                </View>
                <View style={{flex:1,marginTop:moderateScale(20)}}>
                <Text style={{color:'#8D7D6D',fontSize:moderateScale(14),fontWeight:'bold'}}>
                        Terms and Conditions
                    </Text>
                    <Text style={{color:'black',fontSize:moderateScale(14)}}>{terms}</Text>
                </View>
      </ScrollView>
    </View>
  );
};

export default PrivacyScreen;
