import React, {useState} from 'react';
import {
  ImageBackground,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  PixelRatio,
} from 'react-native';

function EmailScreen({navigation}) {
  const [email, setEmail] = useState('');
  const windowWidth = Dimensions.get('window').width;
  const getFontSize = size => size / fontScale;
  const fontScale = PixelRatio.getFontScale();
  const handleSubmit = () => {
      setEmail('');
      navigation.navigate('LoaderScreen');
  };
  return (
    <ImageBackground
      source={require('./../assets/emailbg.png')}
      style={styles.backgroundImage}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.titleContainer}>
          <Text
            style={{
              fontSize: windowWidth <= 350 ? getFontSize(16) : getFontSize(34),
              width: getFontSize(220),
              textAlign: 'center',
              // color: 'black',
              //   fontWeight: 'bold',
              marginBottom:
                windowWidth <= 350 ? getFontSize(14) : getFontSize(38),
              color: 'white',
            }}>
            FOR HI-RES PHOTO LINK ENTER YOUR EMAIL
          </Text>
        </View>
        <TextInput
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          style={{
            width: '45%',
            borderWidth: 1,
            borderColor: '#ffffff',
            padding: 10,
            marginBottom: 20,
            borderRadius: 10,
            color: '#333',
            fontSize: 20,
            backgroundColor:'white'
          }}
        />
        <TouchableOpacity
          onPress={handleSubmit}
          style={{
            // backgroundColor: '#878787',
            // padding: 10,
            // borderRadius: 5,
            marginBottom: 10,
          }}>
          <Text
            style={{
              color: '#fff',
              padding: 6,
              backgroundColor: '#EB008B',
              fontWeight: 'bold',
              fontSize: 18,
              width: 105,
              textAlign: 'center',
              borderRadius: 15,
            }}>
            Submit
          </Text>
          <Text
          style={{color:'white',fontSize:26,textAlign:'center',marginTop:20}}
          >OR</Text>
        </TouchableOpacity>
        {/* <QRCodeScanner onRead={handleScan} /> */}
        <Image
          style={{width:120,height:120,marginTop:20}}
          source={require('./../assets/qrcode.png')}></Image>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default EmailScreen;
