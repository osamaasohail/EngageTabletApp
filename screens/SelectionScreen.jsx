import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
} from 'react-native';

function SelectionScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./../assets/background.png')}
        style={styles.backgroundImage}>
        <View style={styles.menu}>
          <Image
            style={styles.logo}
            source={require('./../assets/groupIcon.png')}
          />
          <Text style={styles.text}>Snap it! Share it!</Text>
          <View style={styles.logos}>
            <Image
              style={{width: 35, height: 35}}
              source={require('./../assets/facebook.png')}
            />
            <Image
              style={{width: 35, height: 35}}
              source={require('./../assets/insta.png')}
            />
            <Image
              style={{width: 35, height: 35}}
              source={require('./../assets/linkedin.png')}
            />
            <Image
              style={{width: 35, height: 35}}
              source={require('./../assets/twitter.png')}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('MainCameraScreen')}>
              <Text style={styles.buttonText}>PHOTO</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('SelectionScreen')}>
              <Text style={styles.buttonText}>BOOMERANG</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' if you want the image to stretch to fill the container
  },
  menu: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    top: -76,
    width: 210,
    height: 55,
  },
  text: {
    top: 24,
    color: 'gray',
    fontSize: 28,
  },
  logos: {
    top: 48,
    flexDirection: 'row',
    gap: 8,
  },
  buttonContainer: {
    top: 130,
    gap: 32,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: 'black',
    width: 190,
    height: 40,
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SelectionScreen;
