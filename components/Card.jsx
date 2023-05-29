import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  PixelRatio,
  Dimensions,
} from 'react-native';
// import Buttons from './Buttons';
import uuid from 'react-native-uuid';
import Adjust from "./Adjust"

const Card = ({ title, content, navigation }) => {
  const fontScale = PixelRatio.getFontScale()
  const windowWidth = Dimensions.get('window').width;
  console.log(windowWidth)
  const windowHeight = Dimensions.get('window').height;
  console.log(windowHeight);
  const getFontSize = size => size / fontScale 

  const contentFontSize = windowWidth <= 370 ? getFontSize(12) : getFontSize(16)
  console.log(contentFontSize)

  return (
    <View
      style={{
        marginTop: 24,
        marginBottom: 24,
        backgroundColor: '#fff',
        borderRadius: 36,
        width: '90%',
        height: windowHeight*0.9,
        alignSelf: 'center',
        padding: windowWidth <= 350 ? getFontSize(14) : getFontSize(24),
        // margin: 32,
        shadowColor: '#000',
        // gap:30,

        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
      }}>
      <View style={styles.titleContainer}>
        <Text
          style={{
            fontSize: windowWidth * 0.04,
            width: getFontSize(300),
            textAlign: 'center',
            color: 'black',
            fontWeight: 'bold',
            marginBottom: windowWidth * 0.01,
          }}>
          {title}
        </Text>
        {/* color: 'black', fontSize: 12, color: '#333', marginTop: 16, */}
      </View>
      {content.map(para => {
        return (
          <Text
            key={uuid.v4()}
            style={{
              color: 'black',
              fontSize: windowWidth * 0.026,
              color: '#333',
              marginTop: windowWidth <= 350 ? getFontSize(14) : getFontSize(24),
            }}>
            {para}
          </Text>
        );
      })}
      <View
        style={{
          top: windowWidth <= 350 ? getFontSize(14) : getFontSize(68),
          // flex: 1,
          flexDirection: 'row',
          // alignItem: 'centre',
          // justifyContent: 'space-between',
          // flex: 1,
          alignSelf: 'center',
        }}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Disagree</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SelectionScreen')}>
          <Text style={styles.buttonText}>Agree</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 36,
    width: '90%',
    height: 690,
    alignSelf: 'center',
    padding: 14,
    // margin: 32,
    shadowColor: '#000',
    // gap:30,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },

  titleContainer: {
    alignSelf: 'center',
    marginTop: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 16,
    width: 200,
    textAlign: 'center',
  },
  content: {
    color: 'black',
    fontSize: 12,
    color: '#333',
    marginTop: 16,
  },

  buttonContainer: {
    top: '5%',
    // flex: 1,
    flexDirection: 'row',
    // alignItem: 'centre',
    // justifyContent: 'space-between',
    // flex: 1,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: 'black',
    width: '35%',
    height: '80%',
    // padding: 2,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    // alignSelf:'center'
    justifyContent: 'center',
    marginTop:4
  },
});

export default Card;
