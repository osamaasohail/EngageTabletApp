import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';


const ThankyouScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('KachaakScreen');
    }, 3000);
  }, []);
  return (
    <ImageBackground
      source={require('./../assets/thankyou.png')}
      style={styles.backgroundImage}></ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default ThankyouScreen;
