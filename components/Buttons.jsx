import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const Buttons = () => {
  return (
    
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Button 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Button 2</Text>
        </TouchableOpacity>
      </View>
    
  );
};

const styles = StyleSheet.create({

  buttonContainer: {
        flexDirection: 'row',
        alignItems:"centre",
    // justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'blue',
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

export default Buttons;
