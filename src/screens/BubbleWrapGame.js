import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View  ,Image,FlatList,Button,TouchableOpacity} from 'react-native';
import { MaterialIcons,Entypo,AntDesign} from '@expo/vector-icons';
import { colors, sizes, fonts } from '../constants/theme'
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';


const BubbleWrapGame = (props) => {
    
    const [bubbles,setBubbles]=useState([...new Array(54)].map((item, idx) => false))
    const [play,setPlay]=useState(false)
    const bubbly_wrap=require('../assets/bubbly_wrap.mp3')
    var soundObject=null

    // useEffect(()=>{
    //     Audio.setAudioModeAsync({
    //         allowsRecordingIOS: false,
    //         interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
    //         playsInSilentModeIOS: true,
    //         interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
    //         shouldDuckAndroid: true,
    //         staysActiveInBackground: true,
    //         playThroughEarpieceAndroid: false
    //       });
    //        soundObject = new Audio.Sound();
    //        soundObject.loadAsync(require('../assets/bubbly_wrap.mp3'),{shouldPlay: false},true);
    // },[play])

    // const PlaySound=async(bubble)=>{
        
    //         try {
            
    //         await soundObject.playAsync();
    //         // Your sound is playing!
    //             setPlay(true)
    //         // Don't forget to unload the sound from memory
    //         // when you are done using the Sound object
    //          await soundObject.unloadAsync()
    //         setTimeout(()=>setPlay(false),100)
            
    //         } catch (error) {
    //             console.log(error)
    //         // An error occurred!
    //         }
    // }
    
    const displayBubbleWrap=(bubble,index)=>{
        return (
            <TouchableOpacity key={index} onPress={() => {
                let bub=[...bubbles]
                bub[index]=true;
                setBubbles(bub)
                }}  >
            <View  style={styles.bubbleBox} >
                {
                     <Image style={!bubbles[index]?styles.bubble:styles.bubble1} source={require('../assets/gb3.png')} />
                }
            </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <AntDesign name="arrowleft" size={32} color="white" style={{position:"absolute",top:20,left:20}} 
             onPress={()=>props.navigation.goBack()} />
             <Text style={styles.headerText}>Bubble Wrap</Text>
            </View>
            <View style={styles.bubbleContainer}>
                {
                    bubbles.map((bubble,index)=>{
                        return displayBubbleWrap(bubble,index)
                    })
                }
                
            </View>
            </View>
    )
}

export default BubbleWrapGame

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:70,
        backgroundColor:colors.primary,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    headerText:{
        fontSize:fonts.h1.fontSize,
        color:'white',
        fontWeight:'bold'
    },
    bubbleContainer:{
        alignSelf:'center',
        width:'90%',
        height:430,
        display:"flex",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        flexWrap:'wrap',
        backgroundColor:colors.accent,
        marginTop:60,
        padding:10
    },
    bubbleBox:{
        margin:1
    },
    bubble:{
        width:45,
        height:45
    },
    bubble1:{
        width:45,
        height:45,
        opacity:0.2
    }
})
