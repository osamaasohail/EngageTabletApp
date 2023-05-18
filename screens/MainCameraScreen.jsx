import React from 'react';
import {
  Button,
  Image,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Linking,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {useState, useEffect, useRef} from 'react';
import {useCameraDevices} from 'react-native-vision-camera';
import {Camera} from 'react-native-vision-camera';

function MainCameraScreen({navigation}) {
  const [imageURL, setImageURL] = useState(false);
  const [takePhotoClicked, settakePhotoClicked] = useState(false);

  const camera = useRef();

  const devices = useCameraDevices();
  const device = devices.front;

  const handleCapture = async () => {
    if (camera !== null) {
      const photo = await camera.current.takePhoto();
      console.log(photo);
      console.log(photo['path']);
      setImageURL(photo['path']);
    }
  };
  useEffect(() => {
    const getPermissions = async () => {
      const permission = await Camera.requestCameraPermission();
      console.log(`Camera permission status = ${permission}`);
      if (permission === 'denied') await Linking.openSettings();
    };
    getPermissions();
  }, []);

  if (device == null) return <Text>camera not available</Text>;

  return (
    <View style={styles.absoluteFill}>
      <View style={styles.card}>
        <Camera
          ref={camera}
          style={styles.camView}
          device={device}
          isActive={true}
          photo={true}
        />
        <TouchableOpacity
          style={styles.captureButton}
          onPress={handleCapture}
          // disabled={isCapturing}
        >
          <Text style={styles.captureButtonText}>click</Text>
          {/* <Image
          source={}
          /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  absoluteFill: {
    flex: 1,
    paddingTop: '5%',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 36,
    width: '90%',
    height: '95%',
    alignSelf: 'center',
    justifyContent: 'center',
    // padding: 14,
    // margin: 32,
    shadowColor: '#000',
    // gap:30,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  camView: {
    // flex: 1,
    height: '80%',
    borderRadius: 10,
    // padding: 30,
  },
  captureButton: {
    backgroundColor: '#fff',
    borderBottomEndRadius: 45,
    // padding: 10,
    // marginTop: 20,
  },
  captureButtonText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
  photo: {
    width: '20%',
    height: '10%',
    // marginTop: 20,
  },
});

export default MainCameraScreen;
