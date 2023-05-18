import {
  Button,
  Image,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Linking,
} from 'react-native';
// import ImagePicker from 'react-native-image-picker';
import {useState, useEffect, useRef} from 'react';
import {useCameraDevices} from 'react-native-vision-camera';
import {Camera} from 'react-native-vision-camera';

function MainCameraScreen({navigation}) {
  const camera = useRef(null);
  const devices = useCameraDevices();
  const device = devices.front;

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
    <Camera
      ref={camera}
      style={styles.absoluteFill}
      device={device}
      isActive={true}
    />
  );
}

const styles = StyleSheet.create({
  absoluteFill: {
    flex: 1,
  },
});

export default MainCameraScreen;
