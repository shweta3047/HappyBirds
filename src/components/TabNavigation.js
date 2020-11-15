import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Fontisto,
  FontAwesome5,
  Entypo,
  Feather,
  Ionicons
} from '@expo/vector-icons';
import StoryScreen from '../screens/StoryScreen';
import TherapistStackNavigation from '../components/TherapistStackNavigation'
import FitnessScreen from '../screens/FitnessScreen';
import { colors } from '../constants/theme';
import HomeStackNavigator from './HomeStackNavigation';
import FitnessStackNavigator from './FitnessStackNavigation'

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return <Feather name='home' size={size} color={color} />;
          } else if (route.name === 'Story') {
            return <Entypo name='open-book' size={size} color={color} />;
          } else if (route.name === 'Therapist') {
            return <Fontisto name='doctor' size={size} color={color} />;
          } else if (route.name === 'Fitness') {
            return <Entypo name='check' size={size} color={color} />;
          }
        }
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: colors.white,
        inactiveTintColor: colors.white2,
        tabStyle: {
          padding: 8
        },
        style: {
          backgroundColor: colors.primary,
          marginTop: 0,
          borderTopWidth: 0,
          elevation: 10,
          height: 60
        },
        iconStyle: {
          margin: 8
        }
      }}
    >
      <Tab.Screen name='Home' component={HomeStackNavigator} />
      <Tab.Screen name='Story' component={StoryScreen} />
      <Tab.Screen name='Therapist' component={TherapistStackNavigation} />
      <Tab.Screen name='Fitness' component={FitnessStackNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
