import React, { Component } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {colors} from'../constants/theme';
import { color } from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';
import {Fontisto,FontAwesome5,Entypo,Feather,Ionicons} from '@expo/vector-icons';
import BlogMainScreen from './BlogMainScreen'
import JournalScreen from './JournalScreen'

function AddBlogScreen() {
  return (
       <BlogMainScreen/>
  );
}

function AddJournalScreen() {
  return (
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   <Text><Entypo name='book' />Journal</Text>
    // </View>
    <JournalScreen/>
  );
}

const Tab = createMaterialTopTabNavigator();
// function Mytabs()
// {
//   return (
      
//     <Tab.Navigator tabBarOptions={{
//       activeTintColor:"white",
//       labelStyle: { fontSize: 16,fontWeight:'bold' },
//       style: { backgroundColor: colors.primary },
//     }}>
//       <Tab.Screen name="Add Blog" component={AddBlogScreen} />
//       <Tab.Screen name="Journal" component={JournalScreen} />
//     </Tab.Navigator>
//   );
// }
function StoryScreen()
{
  return(
    
      <Tab.Navigator 
       
      tabBarOptions={{
      activeTintColor:"white",
      labelStyle: { fontSize: 16,fontWeight:'bold' ,color:"white",marginTop:20},
      style: { backgroundColor: colors.primary }}}

      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Add Blog") {
            return <Feather name='home' size={size} color={color} />;
          } else if (route.name === "My Journals") {
            return <Entypo name='book' size={size} color={color} />;
          } 
        }})}
      >
      
      <Tab.Screen name=" Blogs" component={AddBlogScreen}  />
      <Tab.Screen name="Journals" component={AddJournalScreen} />
    </Tab.Navigator>
   
  )
}

//const Stack = createStackNavigator();

// function  StoryScreen () {
//   return(
    
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Home"
//         component={Mytabs}
//         options={{
//           title: 'Euphoria',
//           headerStyle: {
//             backgroundColor: colors.primary,
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//         }}
//       />
//     </Stack.Navigator>
//   )
// }

 export default StoryScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
