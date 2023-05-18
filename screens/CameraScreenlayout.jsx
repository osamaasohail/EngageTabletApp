import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
function CameraScreenlayout() {
  return (
    <ImageBackground
      source={require('/home/oma/Android/testing/assets/background.png')}
      style={styles.backgroundImage}>
      <View style={styles.card}>
        <Text>This is the cameraLayout</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 36,
    width: '20%',
    height: 820,
    padding: 24,
    margin: 32,
    shadowColor: '#000',
    gap: 18,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' if you want the image to stretch to fill the container
  },
});

export default CameraScreenlayout;
