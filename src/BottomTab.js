// App.js

import React,{useState,useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet , Text , TouchableOpacity , Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; 
import F5Icon from 'react-native-vector-icons/FontAwesome5';
import OICON from 'react-native-vector-icons/Octicons';
import MICON from 'react-native-vector-icons/MaterialIcons';
import IICON from 'react-native-vector-icons/Ionicons';
import AICON from 'react-native-vector-icons/AntDesign';
import MCICON from 'react-native-vector-icons/MaterialCommunityIcons';
import FAICON from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './Screens/HomeTab/HomeScreen';
import WhishListScreen from './Screens/WhishList/WhishListScreen';
import ProfileTabScreen from './Screens/ProfileTab/ProfileTabScreen';

const Tab = createBottomTabNavigator();

  
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{color:'black'}}>Settings!</Text>
      </View>
    );
  }
 
  function CartScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{color:'black'}}>Settings!</Text>
      </View>
    );
  }
  function MessagesScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{color:'black'}}>Settings!</Text>
      </View>
    );
  }

  
function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}


const BottomTab = () => {
    const [keyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
      const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
        setKeyboardVisible(true);
      });
      const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
        setKeyboardVisible(false);
      });
  
      return () => {
        keyboardDidHideListener.remove();
        keyboardDidShowListener.remove();
      };
    }, []);
  
  
  return (
 
    <Tab.Navigator
    screenOptions={{
      tabBarHideOnKeyboard: true,
      tabBarShowLabel: false,
      headerShown: false,
      tabBarStyle: [
        styles.tabBarStyle,
        keyboardVisible ? styles.hiddenTabBar : null,
      ],
    }}
  
    // tabBar={(props) => <CustomTabBarButton {...props} />}
  >
    <Tab.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{
        tabBarIcon: ({ focused }) => (
            <View style={[
              styles.iconContainer,
              focused && styles.focusedIconContainer
            ]}>
                {
                    focused ? <MICON name=  "home-filled" size={34} color={'#816450'}/> : <OICON name="home" size={30} color={'#797979'}/>
                }
              
              
            </View>
          ),
      
      }} 
    />
    <Tab.Screen 
      name="Cart" 
      component={CartScreen} 
      options={{
        tabBarIcon: ({ focused }) => (
            <View style={[
              styles.iconContainer,
              focused && styles.focusedIconContainer
            ]}>
              {
                    focused ? <IICON  name="bag"  size={29} color={'#816450'}/> : <IICON name="bag-outline" size={30} color={'#797979'}/>
                }
             
            </View>
          ),
      
      }} 
    />
  
        <Tab.Screen 
      name="WhishList" 
      component={WhishListScreen} 
      options={{
        tabBarIcon: ({ focused }) => (
            <View style={[
              styles.iconContainer,
              focused && styles.focusedIconContainer
            ]}>
              <AICON 
                name = {focused ? "heart" : "hearto"}
                size={30} 
                color={focused ? '#816450' : '#797979'}
              />
            </View>
          ),
      
      
      }} 
    />
    <Tab.Screen 
      name="Messages" 
      component={MessagesScreen} 
      options={{
        tabBarIcon: ({ focused }) => (
            <View style={[
              styles.iconContainer,
              focused && styles.focusedIconContainer
            ]}>
                {focused ? <MCICON name="message" size={30} color={'#816450'}/> : <Icon name="message-square" size={30} color={'#797979'}/>}
               </View>
          ),
      
      }} 
    />
    <Tab.Screen 
      name="Profile" 
      component={ProfileTabScreen} 
      options={{
        tabBarIcon: ({ focused }) => (
            <View style={[
              styles.iconContainer,
              focused && styles.focusedIconContainer
            ]}>
              
              {focused ? <FAICON name="user" size={30} color={'#816450'}/> : <FAICON name="user-o" size={30} color={'#797979'}/>}
              
            </View>
          ),
      
      }} 
    />
  </Tab.Navigator>

  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },
  iconContainer: {
    width: 60,
    height: 60, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 10,
    
    
    borderRadius: 30,
  },
  focusedIconContainer: {
    backgroundColor: "white",
    
  },
  tabBarStyle: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: '#1F2029',
    borderRadius: 55,
    height: 80,
  },
  hiddenTabBar: {
    bottom: -90, 
  },
  



});

export default BottomTab;
