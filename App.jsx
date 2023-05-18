import ConsentForm from './screens/ConsentForm';
import SelectionScreen from './screens/SelectionScreen';
import MainCameraScreen from './screens/MainCameraScreen';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="MainCameraScreen" component={MainCameraScreen} />

        <Stack.Screen name="SelectionScreen" component={SelectionScreen} />

        {/* <Stack.Screen name="MainCameraScreen" component={MainCameraScreen} /> */}
        {/* <Stack.Screen
          name="CameraScreenlayout"
          component={CameraScreenlayout}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default App;
