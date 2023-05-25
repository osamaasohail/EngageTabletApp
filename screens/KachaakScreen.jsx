import React, {useEffect} from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const KachaakScreen = ({ navigation }) => {
      const windowWidth = Dimensions.get('window').width;
      
      const windowHeight = Dimensions.get('window').height;

        function navigateToNext() {
            navigation.navigate('ConsentForm');
        }
  return (
    <TouchableOpacity onPress={navigateToNext}>
      <ImageBackground
        source={require('./../assets/kachaak.png')}
        resizeMode="cover"
        style={{
          flex: 1,
          width: windowWidth,
          height: windowHeight,
          alignItems: 'center',
        }}></ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: 300,
    height: 500,
    alignItems: 'center',
    // justifyContent: 'center',
    
  },
});

export default KachaakScreen;
