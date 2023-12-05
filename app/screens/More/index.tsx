import React from 'react';
import { View, Text, TouchableOpacity } from '../../components/Themed';
import { Alert, SafeAreaView, StyleSheet } from 'react-native';
import {
  IconChevronLeft,
  IconChevronRight,
  IconContactUs,
  IconFaq,
  IconLanguage,
  IconLogout,
} from '../../components/Icons';
import { useNavigation } from '@react-navigation/native';
import useAuth from '../../auth/useAuth';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootParamsList } from '../../constants/Types';

const morePageList = [
  {
    title: 'Language Settings',
    path: 'Language',
    icon: <IconLanguage />,
  },
  {
    title: 'FAQ',
    path: 'Language',
    icon: <IconFaq />,
  },
  {
    title: 'Contact Us',
    path: 'Language',
    icon: <IconContactUs />,
  },
];

export default function More() {
  const { navigate } = useNavigation<StackNavigationProp<RootParamsList>>();
  const { logOut } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={{ flex: 1 }}>
          {morePageList.map((item, index) => (
            <TouchableOpacity
              style={styles.listContainer}
              key={index}
              onPress={() => navigate(item.path)}
            >
              <View style={styles.listView}>
                {item.icon}
                <Text style={styles.listTitle} size={18}>
                  {item.title}
                </Text>
              </View>
              <IconChevronRight />
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          style={styles.listContainer}
          onPress={() => {
            Alert.alert(
              'Logout',
              'You are about to logout. Are you sure you want to proceed?',
              [
                { text: 'Yes', onPress: () => logOut() },
                {
                  text: 'No',
                },
              ],
              { cancelable: false }
            );
          }}
        >
          <View style={styles.listView}>
            <IconLogout />
            <Text style={styles.listTitle} size={18}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    padding: 25,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  listView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listTitle: {
    marginLeft: 15,
  },
});
