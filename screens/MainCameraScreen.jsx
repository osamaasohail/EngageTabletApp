// import {RNCamera} from 'react-native-camera';
import {
  Button,
  Image,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native';
// import ImagePicker from 'react-native-image-picker';
import {useState, useEffect} from 'react';
import {useCameraDevices} from 'react-native-vision-camera';
import {Camera} from 'react-native-vision-camera';

function MainCameraScreen({navigation}) {
  const [cameraPermission, setCameraPermission] = useState();
  const [devices_, setDevices_] = useState();
  console.log(`Camera permission status: ${cameraPermission}`);
  useEffect(() => {
      (async () => {
      const cameraPermission = await Camera.getCameraPermissionStatus();
      console.log({cameraPermission: cameraPermission});
      if (!cameraPermission) {
        const newCameraPermission = await Camera.requestCameraPermission();
        console.log({newCameraPermission: newCameraPermission});
      }
      //   const microphonePermission = await Camera.getMicrophonePermissionStatus();
      const devices = await Camera.getAvailableCameraDevices();
      setDevices_(devices);
      //   console.log(devices_);
      setCameraPermission('here is the the permission', cameraPermission);
    })();
  }, []);

  //   const devices = useCameraDevices();
  //   const cameraDevice = devices.front;

  if (devices_ === null || devices_ === undefined)
    return <Text>loading...</Text>;
  console.log(devices_);
  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={devices_?.device?.front}
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
