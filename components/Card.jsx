
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import Buttons from './Buttons';
import uuid from 'react-native-uuid';

const Card = ({title, content , navigation }) => {
  return (
    <View style={styles.card}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {content.map(para => {
        return (
          <Text key={uuid.v4()} style={styles.content}>
            {para}
          </Text>
        );
      })}
      <View style={styles.buttonContainer}>
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
    width: 536,
    height: 820,
    padding: 24,
    margin: 32,
    shadowColor: '#000',
    gap:30,

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
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 16,
    width: 400,
    textAlign: 'center',
  },
  content: {
    color: 'black',
    fontSize: 16,
    color: '#333',
    marginTop:16,
  },

  buttonContainer: {
    top: 60,
    // flex:1,
    flexDirection: 'row',
    // alignItem: 'centre',
    // justifyContent: 'space-between',
    // flex: 1,
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

export default Card;
