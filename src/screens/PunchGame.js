import React, { useState } from 'react'
import {
    StyleSheet,
    Switch,
    Text,
    View,
    Image,
    Dimensions,
    FlatList,
    TouchableOpacity,
    Modal,
    SafeAreaView,
    ScrollView,
    ImageBackground
  } from 'react-native';
import { Button } from 'react-native-paper';

import { colors } from '../constants/theme';


function PunchGame(){
    
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
      <View style={styles.container}>
        {isEnabled?<ImageBackground source={require('../../assets/flashoff.png')} style={styles.image}>
        <View style={{marginTop:530,left:-190,}}>
                  <View style={{height: Dimensions.get('window').height,left:-190,}}>
                        
                          <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            style={{ transform:[{ scaleX: 2.0}, { scaleY: 2.0 }] }}
                            style={{ transform:[{ scaleX: 2.0}, { scaleY: 2.0 }], marginTop:'auto', marginBottom:60 }}
                          />
                  </View>
                  </View> 
               </ImageBackground>
               :
               <ImageBackground source={require('../../assets/flashon.png')} style={styles.image}>
               <View style={{marginTop:530,left:-190}}>
                     <View style={{height: Dimensions.get('window').height,left:-190}}>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            style={{ transform:[{ scaleX: 2.0}, { scaleY: 2.0 }] }}
                            style={{ transform:[{ scaleX: 2.0}, { scaleY: 2.0 }], marginTop:'auto', marginBottom:60 }}
                        />
                     </View>
                     </View> 
               </ImageBackground>
               
        }
     </View>
    )
    
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {

    resizeMode: "cover",
    justifyContent: "center",
    marginTop:-80  }
  ,
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
});

export default PunchGame