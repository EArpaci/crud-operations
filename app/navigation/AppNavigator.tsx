import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { useThemeColor } from '../components/Themed';
import {
  IconChevronLeft,
  IconTabHome,
  IconTabMore,
  IconTabStudents,
} from '../components/Icons';

import Home from '../screens/Home';
import Students from '../screens/Students';
import AddOrUpdateStudent from '../screens/Students/AddOrUpdateStudent';
import More from '../screens/More';
import Language from '../screens/More/Language';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const StudentsStack = createStackNavigator();
const MoreStack = createStackNavigator();

function HomePages() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

function StundentsPages() {
  return (
    <StudentsStack.Navigator
      screenOptions={{
        headerTitleStyle: [
          styles.headerTitleStyle,
          { color: useThemeColor({}, 'text') },
        ],
        headerStyle: styles.headerStyle,
        ...headerOptions,
      }}
    >
      <StudentsStack.Screen
        name="Students"
        component={Students}
        options={{
          title: 'Students List',
        }}
      />
      <StudentsStack.Screen
        name="AddOrUpdateStudent"
        component={AddOrUpdateStudent}
        options={{
          title: 'Student',
        }}
      />
    </StudentsStack.Navigator>
  );
}

function MorePages() {
  return (
    <MoreStack.Navigator
      screenOptions={{
        headerTitleStyle: [
          styles.headerTitleStyle,
          { color: useThemeColor({}, 'text') },
        ],
        headerStyle: styles.headerStyle,
        ...headerOptions,
      }}
    >
      <MoreStack.Screen
        name="More"
        component={More}
        options={{
          title: 'Settings + Support',
        }}
      />
      <MoreStack.Screen
        name="Language"
        component={Language}
        options={{
          title: 'Language Settings',
        }}
      />
    </MoreStack.Navigator>
  );
}

const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: useThemeColor({}, 'tint'),
      tabBarLabelStyle: { display: 'none' },
      tabBarIconStyle: { marginTop: 10 },
    }}
  >
    <Tab.Screen
      name="HomeTab"
      component={HomePages}
      options={{
        tabBarIcon: ({ color }) => <IconTabHome color={color} />,
      }}
    />
    <Tab.Screen
      name="StudentsTab"
      component={StundentsPages}
      options={{
        tabBarIcon: ({ color }) => <IconTabStudents color={color} />,
      }}
    />
    <Tab.Screen
      name="MoreTab"
      component={MorePages}
      options={{
        tabBarIcon: ({ color }) => <IconTabMore color={color} />,
      }}
    />
  </Tab.Navigator>
);

const styles = {
  headerTitleStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 22,
  },
  headerStyle: {
    height: 120,
  },
};

const headerOptions = {
  headerBackTitleVisible: false,
  headerBackImage: () => <IconChevronLeft />,
  headerLeftContainerStyle: {
    left: 25,
  },
};
export default AppNavigator;
