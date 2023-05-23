import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
  Linking,
  TouchableOpacity,
  ImageBackground,
  PixelRatio,
  Dimensions,
} from 'react-native';
// import FastImage from 'react-native-fast-image';
import {useState, useEffect, useRef} from 'react';
import {useCameraDevices} from 'react-native-vision-camera';
import {Camera} from 'react-native-vision-camera';
import uuid from 'react-native-uuid';

import {useSelector, useDispatch} from 'react-redux';
import {photoSlice} from '../store/photoSlice';
// import {getProducts} from '../store/photoSlice';

function MainCameraScreen({navigation}) {
  const [imageURL, setImageURL] = useState(false);
  const [takePhotoClicked, setTakePhotoClicked] = useState(false);
  const [countdown, setCountdown] = useState(3);
  // const fontScale = PixelRatio.getFontScale();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  // const getFontSize = size => size / fontScale;

  const dispatch = useDispatch();
  const actions = photoSlice.actions;
  const picturesList = useSelector(state => state.photoSlice.picturesList);
  // console.log(picturesList);
  const totalPictures = useSelector(state => state.photoSlice.totalPictures);
  console.log(totalPictures);
  console.log(totalPictures);

  const pictures = useSelector(state => state.photoSlice.pictures);
  console.log(pictures);

  const devices = useCameraDevices();
  const device = devices.front;

  const camera = useRef();
  const handleCapture = async () => {
    if (camera !== null) {
      const photo = await camera.current.takePhoto();
      // console.log(photo);
      console.log(photo['path']);
      setImageURL(photo['path']);

      setTakePhotoClicked(true);
    }
  };

  const continueNext = () => {
    setTakePhotoClicked(false);
    dispatch(actions.increaseCount());

    if (totalPictures <= 5) {
      // dispatch(actions.addPhoto(`file://${imageURL}`));
      dispatch(actions.addPhoto(`file://${imageURL}`));
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
    <ImageBackground
      source={require('./../assets/linearBg.png')}
      style={{
        flex: 1,
        resizeMode: 'cover',
        paddingTop: windowHeight * 0.03,
        paddingBottom: windowHeight * 0.03,
      }}>
      {/* <View style={styles.absoluteFill}> */}
      {takePhotoClicked === false ? (
        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 36,
            width: windowWidth * 0.9,
            height: windowHeight * 0.92,
            alignSelf: 'center',
            justifyContent: 'center',
            // padding: 14,
            // margin: 8,
            shadowColor: '#000',
            // gap:30,

            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 3,
            overflow: 'hidden',
          }}>
          <>
            <Camera
              ref={camera}
              style={styles.camView}
              device={device}
              isActive={true}
              photo={true}/>
          </>
          <View style={styles.bottomContainer}>
            <TouchableOpacity
              style={styles.clickbtn}
              onPress={handleCapture}
              // disabled={isCapturing}
            >
              <Image
                style={styles.btnimg}
                source={require('./../assets/clickBtn.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 36,
            width: windowWidth * 0.9,
            height: windowHeight * 0.92,
            alignSelf: 'center',
            justifyContent: 'center',
            // padding: 14,
            // margin: 8,
            shadowColor: '#000',
            // gap:30,

            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 3,
            overflow: 'hidden',
          }}>
          <>
            <Image
              source={{uri: `file://${imageURL}`}}
              style={styles.imageView}
            />
          </>
          <View style={styles.bottomBar}>
            {totalPictures <= 4 ? (
              <Text
                style={{
                  textAlign: 'center',
                  top: '5%',
                  fontSize: 18,
                  color: 'white',
                }}>
                You've {5 - totalPictures} photos to go!
              </Text>
            ) : (
              <Text
                style={{
                  textAlign: 'center',
                  top: '5%',
                  fontSize: 18,
                  color: 'white',
                }}>
                You've come to the end of this session
              </Text>
            )}
            {totalPictures <= 4 ? (
              <View style={styles.subContainer}>
                <TouchableOpacity
                  style={styles.bottomBarBtn}
                  onPress={() => setTakePhotoClicked(false)}
                  // disabled={isCapturing}
                >
                  <Image
                    style={styles.selectButtons}
                    source={require('./../assets/retake.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.bottomBarBtn}
                  onPress={continueNext}
                  // disabled={isCapturing}
                >
                  <Image
                    style={styles.selectButtons}
                    source={require('./../assets/continue.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.bottomBarBtn}
                  onPress={() => {
                    dispatch(actions.addPhoto(`file://${imageURL}`));
                    navigation.navigate('DownloadScreen');
                  }}
                  // onPress={handleCapture}
                  // disabled={isCapturing}
                >
                  <Image
                    style={styles.selectButtons}
                    source={require('./../assets/endsession.png')}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.subContainer}>
                <TouchableOpacity
                  style={styles.bottomBarBtn}
                  onPress={() => setTakePhotoClicked(false)}>
                  <Image
                    style={styles.selectButtons}
                    source={require('./../assets/retake.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.bottomBarBtn}
                  onPress={() => {
                    dispatch(actions.increaseCount());
                    if (totalPictures <= 5) {
                      dispatch(actions.addPhoto(`file://${imageURL}`));
                    }
                    navigation.navigate('DownloadScreen');
                  }}
                  // disabled={isCapturing}
                >
                  <Image
                    style={{width: 130, height: 30, borderRadius: 15}}
                    source={require('./../assets/download.png')}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      )}
      {/* </View> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    paddingTop: '2%',
    paddingBottom: '2%',
  },
  absoluteFill: {
    flex: 1,
    paddingTop: '2%',
    // paddingBottom: '2%',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 36,
    width: '90%',
    height: '96%', //windowHeight*0.96,
    alignSelf: 'center',
    justifyContent: 'center',
    // padding: 14,
    margin: 8,
    shadowColor: '#000',
    // gap:30,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  camView: {
    // flex: 1,
    height: '100%',
    borderRadius: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 45, // For creating a circular frame around the image
  },
  bottomContainer: {
    backgroundColor: '#737373',
    height: '19%',
    // top: -25,
  },

  btnimg: {
    // flex:2,
    position: 'absolute',
    width: 100,
    height: 100,
    alignSelf: 'center',
    // botton:-15
    top: -36,

    // alignSelf:'center'
  },
  imageView: {
    height: '100%',
    // borderTopEndRadius: 10,
  },
  bottomBar: {backgroundColor: 'rgba(14, 14, 14, 0.78)', height: '35%'},
  // clickbtn: {
  //   width: 10,
  //   height: 10,
  // },
  subContainer: {
    top: '8%',
    flex: 1,
    flexDirection: 'row',
    gap: 15,
    // alignItem: 'centre',
    // justifyContent: 'space-between',
    // flex: 1,
    alignSelf: 'center',
  },
  bottomBarBtn: {},
  selectButtons: {
    width: 85,
    height: 30,
    borderRadius: 15,
  },
});

export default MainCameraScreen;

//  <Image
//    style={{
//      width: '100%',
//      height: '90%',
//    }}
//    source={{uri: `file://${imageURL}`}}
//  />;

// <View>
//   {/* <Text style={styles.captureButtonText}>click</Text> */}
//   {imageURL ? (
//     <View>
//       <Image
//         style={{
//           width: '100%',
//           height: '90%',
//         }}
//         source={{uri: `file://${imageURL}`}}
//         />
//           <Text style={{
//             alignSelf: 'center', color: 'white',marginTop:30}} onPress={() => setTakePhotoClicked(false)}>Go back</Text>
//     </View>
//   ) : (
//     <View></View>
//     )}
// </View>
