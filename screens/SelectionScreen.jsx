import {View, TouchableOpacity, StyleSheet, Text, Image,ImageBackground} from 'react-native';

function SelectionScreen() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('/home/oma/Android/testing/assets/background.png')}
          style={styles.backgroundImage}>
          <View style={styles.menu}>
            <Image
              source={require('/home/oma/Android/testing/assets/groupIcon.png')}
            />
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
    flex: 1,
    alignItem: 'centre',
    justifyContent: 'space-between',
    
  },
});


export default SelectionScreen;