import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {photoSlice} from '../store/photoSlice';

import {Card} from 'react-native-elements';
// import uuid from 'react-native-uuid';

function DownloadScreen({navigation}) {
  const dispatch = useDispatch();
  const actions = photoSlice.actions;
  const picturesList = useSelector(state => state.photoSlice.picturesList);
  const totalPictures = useSelector(state => state.photoSlice.totalPictures);
  const images = useSelector(state => state.photoSlice.pictures);
  // console.log('these are images: ', images);

  const ImageItem = ({image}) => {
    const [selected, setSelected] = useState(false);
    return (
      <View style={{padding: 12}}>
        <TouchableOpacity
          onPress={() => {
            console.log('image clicked', image.id);
            setSelected(!selected);
          }}>
          <Image
            source={{uri: image.source}}
            style={[
              styles.image,
              selected ? {borderWidth: 2, borderColor: '#EB008B'} : null,
            ]}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const GridScreen = () => {
    return (
      <View style={styles.container}>
        <FlatList
          data={images}
          numColumns={3}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <ImageItem style={{}} image={item} />}
        />
      </View>
    );
  };

  const handleDownload = () => {
    console.log('Download button clicked');
    dispatch(actions.clearPictures());
    navigation.navigate('EmailScreen');

    // Write code to download the selected images here
  };

  return (
    <ImageBackground
      source={require('./../assets/linearBg.png')}
      style={styles.backgroundImage}>
      <GridScreen />
      <Text
        style={{
          alignSelf: 'center',
          position: 'absolute',
          bottom: 180,
          color: 'white',
          fontSize: 28,
        }}>
        Select and download
      </Text>
      <View style={styles.downloadBtnContainer}>
        <TouchableOpacity
          style={styles.downloadBtn}
          onPress={() => {
            handleDownload();
            console.log('bsdk');
          }}>
          <Image
            source={require('./../assets/downloadImages.png')}
            style={styles.downloadImg}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 175,
    height: 280,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  downloadBtnContainer: {
    position: 'absolute',
    bottom: 70,
    alignSelf: 'center',
  },
  // downloadBtn: {
  //   flexDirection: 'row',
  //   backgroundColor: '#EB008B',
  //   borderRadius: 20,
  //   paddingVertical: 10,
  //   paddingHorizontal: 20,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  downloadImg: {
    height: 80,
    width: 80,
    marginRight: 10,
  },
});

export default DownloadScreen;
