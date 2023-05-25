import { StyleSheet, Text, View,ImageBackground,Button,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
import { Camera } from 'react-native-vision-camera'
import { useState, useEffect, useRef } from 'react'
import { useCameraDevices } from 'react-native-vision-camera'
import Video from 'react-native-video'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Boomerang() {
    const [recordingBoomerang, setrecordingBoomerang] = useState(false);
    const [Counter, setCounter] = useState(5);
    const [videoPath, setvideoPath] = useState()
    const [done, setdone] = useState(false);
    const camera = useRef();
    const devices = useCameraDevices();
    const device = devices.back;
    function getTimerValue() {
        let timer = 5;
        const interval = setInterval(() => {
            if (timer > 0) {
                console.log(timer);
                setCounter(timer);
                timer--;
            } else {
                clearInterval(interval);
                console.log('Timer finished!');
                setCounter(5);
            }
        }, 1000);
    }

    const startRecording = async () => {
        console.log('hereeee');
        getTimerValue();
        setrecordingBoomerang(true);
        camera.current.startRecording({
            onRecordingFinished: video => setvideoPath(video['path']),
            onRecordingError: error => console.error(error),
        });
        setTimeout(() => {
            camera.current.stopRecording();
            setrecordingBoomerang(false);
            setdone(true);
        }, 6000);
    };

    if (done == true) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>VIDEOSCREEEn</Text>
                <Text style={{ color: 'black' }}>{videoPath}</Text>
                <Video source={{ uri: videoPath }} // Can be a URL or a local file.
                    ref={(ref) => {
                        this.player = ref
                    }} // Store reference
                    onBuffer={this.onBuffer}
                    repeat={true} // Callback when remote video is
                    buffering
                    onError={this.videoError} // Callback when video
                    cannot be loaded
                    style={styles.backgroundVideo} />
            </View>
        );
    }
    else {
        if (device == null) return <Text>camera not available</Text>;
        return (
            <ImageBackground
                source={require('./../assets/linearBg.png')}
                style={{
                    flex: 1,
                    resizeMode: 'cover',
                    paddingTop: windowHeight * 0.03,
                    paddingBottom: windowHeight * 0.03,
                    // justifyContent: 'center',
                }}>
                <View style={styles.BoomerangView}>
                    <Camera
                        ref={camera}
                        style={styles.camView}
                        device={device}
                        isActive={true}
                        preset='high'
                        video={true}
                        photo={true}
                    />
                    <View style={styles.bottomContainer}>
                        {recordingBoomerang ? (
                            <View
                                style={{
                                    height: '100%',
                                    width: '100%',
                                    backgroundColor: 'orange',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Text>Recording {Counter}</Text>
                            </View>
                        ) : (
                            <TouchableOpacity onPress={startRecording}>
                                <Image
                                    style={styles.btnimg}
                                    source={require('./../assets/clickBtn.png')}
                                />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    BoomerangView: {
        height: windowHeight * 0.95,
        width: windowWidth * 0.9,
        borderRadius: 36,
        alignSelf: 'center',
        backgroundColor: 'red',
        overflow: 'hidden',
    },
    camView: {
        height: windowHeight * 0.85,
    },
    bottomContainer: {
        backgroundColor: '#737373',
        height: windowHeight * 0.1,
        // justifyContent:'center',
    },
    btnimg: {
        width: windowWidth * 0.2,
        height: windowHeight * 0.1,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    backgroundVideo: {
        // position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: windowWidth * 0.8,
        height: windowHeight * 0.8,
    },
});

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// export default function Boomerang() {
//   return (
//     <View>
//       <Text>Boomerang</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({})