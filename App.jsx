import ConsentForm from './screens/ConsentForm';
import SelectionScreen from './screens/SelectionScreen';
import MainCameraScreen from './screens/MainCameraScreen';
import DownloadScreen from './screens/DownloadScreen';
import LoaderScreen from './screens/LoaderScreen';
import EmailScreen from './screens/EmailScreen';
import ThankyouScreen from './screens/ThankyouScreen';
import KachaakScreen from './screens/KachaakScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import Boomerang from './screens/Boomerang';
import RecordedBoomerang from './screens/RecordedBoomerang';

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

import  store  from "./store/index";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="KachaakScreen" component={KachaakScreen} />
          <Stack.Screen name="ConsentForm" component={ConsentForm} />
          <Stack.Screen name="SelectionScreen" component={SelectionScreen} />
          <Stack.Screen name="MainCameraScreen" component={MainCameraScreen} />
          <Stack.Screen name="DownloadScreen" component={DownloadScreen} />
          <Stack.Screen name="EmailScreen" component={EmailScreen} />
          <Stack.Screen name="LoaderScreen" component={LoaderScreen} />
          <Stack.Screen name="ThankyouScreen" component={ThankyouScreen} />
          <Stack.Screen name="Boomerang" component={Boomerang} />
          <Stack.Screen name="RecordedBoomerang" component={RecordedBoomerang} />


        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default App;
