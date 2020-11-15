import React, { useEffect, Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';
import { Audio } from 'expo-av';
import { colors } from '../constants/theme';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

class Track extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false
    };
  }
  async componentDidMount() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
      shouldDuckAndroid: true,
      staysActiveInBackground: true,
      playThroughEarpieceAndroid: false
    });
    this.sound = new Audio.Sound();

    const status = {
      shouldPlay: false
    };

    this.sound.loadAsync({ uri: this.props.route.params.audio }, status, false);
  }

  componentWillUnmount() {
    this.sound.stopAsync();
  }

  playSound = () => {
    this.sound.playAsync();
    this.sound.setIsLoopingAsync(true);
    this.setState({
      play: true
    });
  };
  pauseSound = () => {
    this.sound.pauseAsync();
    this.setState({
      play: false
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            source={{ uri: this.props.route.params.image }}
            style={{ width: 300, height: 300, borderRadius: 10 }}
          />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          {this.state.play ? (
            <TouchableOpacity onPress={this.pauseSound}>
              <FontAwesome name='pause' size={50} color='black' />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={this.playSound}>
              <FontAwesome name='play' size={50} color='black' />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

export default Track;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: colors.gray3
  }
});
