import React, {useState, useRef} from 'react';
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
// import styles from './NewPasswordStyle';
import styles from './HelpCenterStyle';
import IIcon from 'react-native-vector-icons/Ionicons';
import OIcon from 'react-native-vector-icons/Octicons';
import Animated from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import FIcon from 'react-native-vector-icons/FontAwesome';
import {moderateScale} from 'react-native-size-matters';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
const ExpandableListItem = ({item}) => {
  const [expanded, setExpanded] = useState(false);
  console.log('item value is ', item);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={toggleExpand} style={styles.itemTouchable}>
        <Text style={styles.itemTitle}>{item.question}</Text>
        <View style={{marginRight: 10}}>
          {expanded ? (
            <FeatherIcon name="chevron-up" size={25} color="black" />
          ) : (
            <FeatherIcon name="chevron-down" size={25} color="black" />
          )}
        </View>
      </TouchableOpacity>
      {expanded && <Text style={styles.itemContent}>{item.answer}</Text>}
    </View>
  );
};

const ExpandableItem2 = ({item}) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={toggleExpand} style={styles.itemTouchable}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <View style={{marginRight: 10}}>
          {expanded ? (
            <FeatherIcon name="chevron-up" size={25} color="black" />
          ) : (
            <FeatherIcon name="chevron-down" size={25} color="black" />
          )}
        </View>
      </TouchableOpacity>
      {expanded && <Text style={styles.itemContent}>{item.description}</Text>}
    </View>
  );
};
const HelpCenterScreen = () => {
  const navigation = useNavigation();
  const [tabselected, settabselected] = useState(0);

  const faqData = [
    {
      id: 1,
      question: "Can I track my order's delivery status?",
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      question: 'Is there a return policy?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      question: 'Can I save my favorite items for later?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 4,
      question: 'Can I share products with my friends?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 5,
      question: 'How do I contact customer support?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 6,
      question: 'What payment methods are accepted?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 7,
      question: 'How to add review?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];
const contactData = [
  {
    id: 1,
    title:'Customer Service',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

  },
  {
    id:2,
    title:'Whatsapp',
    description:'1234567890'

  },
  {
    id:3, 
    title:'Email',
    description:'g3sXz@example.com'
  },
  {
    id:4,
    title:'Website',
    description:'www.shopkart.com'
  },
  {
    id:5,
    title:'Address',
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

  },

]
  const renderItem = ({item}) => <ExpandableListItem item={item} />;
  const renderItem2 = ({item}) => <ExpandableItem2 item={item} />;
  return (
    <View style={styles.mainView}>
      <View style={styles.headerView}>
        <TouchableOpacity
          style={styles.backtouchable}
          activeOpacity={1}
          onPress={() => navigation.goBack()}>
          <IIcon name="arrow-back" size={26} color="black" />
        </TouchableOpacity>
        <Text style={styles.headertext}>Help Center</Text>
      </View>
      <View style={styles.searchContainer}>
        <OIcon name="search" size={30} color="#816450" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search ..."
          placeholderTextColor={'black'}
          cursorColor={'#816450'}
        />
      </View>

      <View style={styles.tabcontainer}>
        <TouchableOpacity
          style={styles.textView}
          onPress={() => settabselected(0)}
          activeOpacity={0.8}>
          <Text style={styles.tabtext}>FAQ</Text>
          {tabselected == 0 ? (
            <View style={styles.line}></View>
          ) : (
            <View style={styles.linewhite}></View>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textView}
          onPress={() => settabselected(1)}
          activeOpacity={0.8}>
          <Text style={styles.tabtext}>Contact Us</Text>
          {tabselected == 1 ? (
            <View style={styles.line}></View>
          ) : (
            <View style={styles.linewhite}></View>
          )}
        </TouchableOpacity>
      </View>
      {tabselected == 0 ? (
        <>
          <View style={{height: 60, marginVertical: 20}}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.filterContainer}
              contentContainerStyle={{
                paddingHorizontal: moderateScale(20),
                alignItems: 'center',
              }}>
              <TouchableOpacity style={[styles.filterItem]}>
                <Text style={styles.filterText}>All</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterItem}>
                <Text style={styles.filterText}>Services</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterItem}>
                <Text style={styles.filterText}>General</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterItem}>
                <Text style={styles.filterText}>Account</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={{flex: 1}}>
            <FlatList
              data={faqData}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              contentContainerStyle={styles.flatListContent}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </>
      ) : (
        <View style={{flex: 1,marginTop:moderateScale(20)}}>
          <FlatList
            data={contactData}
            renderItem={renderItem2}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.flatListContent}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );
};
export default HelpCenterScreen;
