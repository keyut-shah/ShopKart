import React, {useState,useRef} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  TextInput as RNTextInput
} from 'react-native';
import IIcon from 'react-native-vector-icons/Ionicons';
import MCICON from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import FICON from 'react-native-vector-icons/Feather';
import {FlatList} from 'react-native-gesture-handler';
import styles from './AddAddressStyle';
import {TextInput} from 'react-native-paper';
import { moderateScale } from 'react-native-size-matters';
const AddAddressScreen = () => {
  const navigation = useNavigation();
  const [text, setText] = React.useState('');

  const nameInputRef = useRef(null);
  const phonenoInputRef = useRef(null);
  const pincodeInputRef = useRef(null);
  const stateInputRef = useRef(null);
  const cityInputRef = useRef(null);
  const houseInputRef = useRef(null);
  const landmarkInputRef = useRef(null);
const otherInputRef = useRef(null);



const [typeselected,settypeselected]=useState(0);
  return (

  //   <KeyboardAvoidingView
  //   style={{ flex: 1 }}
  //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  // >
  <>

      <View style={styles.header}>
        <Text style={styles.headertext}> My Cart</Text>
        <TouchableOpacity
          style={styles.backtouchable}
          activeOpacity={1}
          onPress={() => navigation.goBack()}>
          <IIcon name="arrow-back" size={26} color="black" />
        </TouchableOpacity>
      </View>
    
      <ScrollView style={styles.scrollcontainer}
      keyboardShouldPersistTaps="handled"
      >
        <TextInput
          style={styles.nametextinput}
          mode="outlined"
          label="Name"
          activeOutlineColor="#816450"
          value={text}
          onChangeText={text => setText(text)}
          ref={nameInputRef}
          onSubmitEditing={() => phonenoInputRef.current.focus()}
          blurOnSubmit={false}
          returnKeyType="next"

        />
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={styles.phonenotextinput}
            mode="outlined"
            label="Phone Number *"
            activeOutlineColor="#816450"
            value={text}
            onChangeText={text => setText(text)}
            ref={phonenoInputRef}
            onSubmitEditing={() => pincodeInputRef.current.focus()}
            blurOnSubmit={false}
            returnKeyType="next"

            //   outlineStyle={{borderWidth: 1,borderColor:'red',w}}
          />
          <TextInput
            style={{
              marginLeft: 10,
              marginRight: 20,
              marginVertical: 10,
              flex: 1,
            }}
            mode="outlined"
            label="Pincode *"
            activeOutlineColor="#816450"
            value={text}
            onChangeText={text => setText(text)}
            ref={pincodeInputRef}
            onSubmitEditing={() => stateInputRef.current.focus()}
            blurOnSubmit={false}
            returnKeyType="next"

          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={{
              marginLeft: 20,
              marginRight: 10,
              marginVertical: 10,
              flex: 1,
              fontSize: 15,
            }}
            mode="outlined"
            label="State *"
            activeOutlineColor="#816450"
            value={text}
            onChangeText={text => setText(text)}
            ref={stateInputRef}
            onSubmitEditing={() => cityInputRef.current.focus()}
            blurOnSubmit={false}
            returnKeyType="next"

            //   outlineStyle={{borderWidth: 1,borderColor:'red',w}}
          />
          <TextInput
            style={{
              marginLeft: 10,
              marginRight: 20,
              marginVertical: 10,
              flex: 1,
            }}
            mode="outlined"
            label="City *"
            activeOutlineColor="#816450"
            value={text}
            onChangeText={text => setText(text)}
            ref={cityInputRef}
            onSubmitEditing={() => houseInputRef.current.focus()}
            blurOnSubmit={false}
            returnKeyType="next"

          />
        </View>
        <TextInput
          style={{marginHorizontal: 20, marginVertical: 10}}
          mode="outlined"
          label="House No, Building Name *"
          activeOutlineColor="#816450"
          value={text}
          onChangeText={text => setText(text)}
          ref={houseInputRef}
          onSubmitEditing={() => landmarkInputRef.current.focus()}
          blurOnSubmit={false}  
          returnKeyType="next"

        />
        <TextInput
          style={{marginHorizontal: 20, marginVertical: 10}}
          mode="outlined"
          label="+ Add Nearby Landmork"
          activeOutlineColor="#816450"
          value={text}
          onChangeText={text => setText(text)}
          ref={landmarkInputRef}    
          onSubmitEditing={() => Keyboard.dismiss()}  
          returnKeyType="done"

        />
        <View style={{marginVertical: 20,paddingHorizontal:20}}>
          <Text style={{color: 'black', marginVertical: 5,}}>
            Type of address
          </Text>
          <View style={{flexDirection: 'row',marginBottom:10}}>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: typeselected == 0 ? 'rgba(139, 69, 19, 1)' : 'black',
                borderRadius: 20,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 5,
                marginHorizontal: 5,
                backgroundColor: typeselected == 0 ? 'rgba(139, 69, 19, 0.4)' : 'white',
               
              }} 
              onPress={() => {
                otherInputRef.current.blur()
                settypeselected(0)
              }
              }
              >
              <FICON name="home" size={20} color="black" />
              <Text
                style={{
                  color: 'black',
                  marginVertical: 5,
                  marginHorizontal: 10,
                }}>
                Home
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: typeselected == 1 ? 'rgba(139, 69, 19, 1)' : 'black',
                borderRadius: 20,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 5,
                marginHorizontal: 5,
                backgroundColor: typeselected == 1 ? 'rgba(139, 69, 19, 0.4)' : 'white',
              }}
              onPress={() =>
              {
                otherInputRef.current.blur()
                 settypeselected(1)
              }
                 
                }
              >
              <MCICON name="office-building" size={20} color="black" />
              <Text
                style={{
                  color: 'black',
                  marginVertical: 5,
                  marginHorizontal: 10,
                }}>
                Office
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: typeselected == 2 ? 'rgba(139, 69, 19, 1)' : 'black',
                borderRadius: 20,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 5,
                marginHorizontal: 5,
                backgroundColor: typeselected == 2 ? 'rgba(139, 69, 19, 0.4)' : 'white',
              }}
              onPress={() => settypeselected(2)}
              >
              <FICON name="edit" size={20} color="black" />
             
             <RNTextInput 
             ref={otherInputRef}
                     value={text}
                     onChangeText={setText}
                     placeholder="  Other  "
                     placeholderTextColor={'black'}
                     style={{width:100,color:'black',fontSize:15,}}
                     onFocus={() =>  settypeselected(2)
                       } 
                  
        

                    
             
             />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
   
      <TouchableOpacity
        style={{
          marginTop: moderateScale(20),
          paddingVertical: moderateScale(10),
          marginHorizontal: moderateScale(20),
          backgroundColor: '#816450',
          borderRadius: moderateScale(20),
          marginBottom:20,
          
          
        }}
        activeOpacity={0.6}
        >
        <Text
          style={{
            fontSize: moderateScale(12),
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
          }}>
          Apply
        </Text>
      </TouchableOpacity>
      </>
     

      
  );
};

export default AddAddressScreen;
