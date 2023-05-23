import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet,Image,View} from 'react-native';


const LoaderScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('ThankyouScreen');
    }, 2000);
  }, []);
  return (
    <ImageBackground
      source={require('./../assets/linearBg.png')}
      style={styles.backgroundImage}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('./../assets/loading.png')} style={styles.image} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  image: {
    // flex: 1,
    // alignItems: 'center',
    //   justifyContent: 'center',
    width:100,
    height:130,
  },
});

export default LoaderScreen;
