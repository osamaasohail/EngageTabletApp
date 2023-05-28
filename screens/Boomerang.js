import { StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
import { Camera } from 'react-native-vision-camera'
import { useState, useEffect, useRef } from 'react'
import { useCameraDevices } from 'react-native-vision-camera'
import Video from 'react-native-video'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Boomerang(props) {
    const [recordingBoomerang, setrecordingBoomerang] = useState(false);
    const [Counter, setCounter] = useState(3);
    const [BoomerangPath, setBoomerangPath] = useState()
    const [done, setdone] = useState(false);
    const camera = useRef();
    const devices = useCameraDevices();
    const device = devices.back;
    function getTimerValue() {
        let timer = 3;
        const interval = setInterval(() => {
            if (timer > 0) {
                console.log(timer);
                setCounter(timer);
                timer--;
            } else {
                clearInterval(interval);
                console.log('Timer finished!');
                setCounter(3);
            }
        }, 1000);
    }
    const onRecordingStops = (video) => {
        console.log('video', video)
        setBoomerangPath(video['path'])
    }

    const startRecording = async () => {
        console.log('hereeee');
        getTimerValue();
        setrecordingBoomerang(true);
        camera.current.startRecording({
            onRecordingFinished: video => onRecordingStops(video),
            onRecordingError: error => console.error(error),
        });
        setTimeout(() => {
            camera.current.stopRecording();
            setrecordingBoomerang(false);
            setdone(true);
        }, 4000);
    };
    const VideoView = (item) => {
        console.log('item: ', item)
        return (
            <View style={{ width: '100%', height: windowHeight * 0.85, justifyContent: 'center', alignItems: 'center' }}>
                <Video source={{ uri: item.item }} // Can be a URL or a local file. Flatlist here
                    ref={(ref) => {
                        this.player = ref
                    }} // Store reference
                    onBuffer={this.onBuffer}
                    resizeMode={'stretch'}
                    repeat={true} // Callback when remote video is buffering
                    onError={this.videoError} // Callback when video cannot be loaded
                    style={styles.backgroundVideo} />
            </View>
           
        )
    }
    if (done == true) {
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

                    <VideoView item={BoomerangPath} />
                    <View style={styles.bottomContainer}>
                        <View style={{ width: '100%', height: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                            <TouchableOpacity onPress={() => setdone(false)}>
                                <Image
                                    style={styles.selectButtons}
                                    source={require('./../assets/retake.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('EmailScreen')}>
                                <Image
                                    style={styles.selectButtons}
                                    source={require('./../assets/continue.png')}
                                />
                            </TouchableOpacity>


                        </View>
                    </View>


                </View>



            </ImageBackground>
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
                                    backgroundColor: '#737373',
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
        backgroundColor: 'black',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    camView: {
        height: windowHeight * 0.85,
    },
    bottomContainer: {
        backgroundColor: '#737373',
        height: windowHeight * 0.1,
    },
    btnimg: {
        width: windowWidth * 0.2,
        height: windowHeight * 0.1,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    VideoContainer: {
        height: windowHeight * 0.85,
        width: windowWidth * 0.9,
        backgroundColor: 'white',
       

    },
    selectButtons: {
        width: 85,
        height: 30,
        borderRadius: 15,
        margin:10
    },
    backgroundVideo: {
      
        width: windowWidth * 0.9,
        height: windowHeight * 0.85,
    
    },
});

