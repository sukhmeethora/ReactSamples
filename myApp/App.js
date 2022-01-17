import React, {Component} from 'react';
import {Alert, AppRegistry, Text, TextInput, View} from 'react-native';
import {connect} from 'react-redux';
import {nameChange} from './actions/detail';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import welcome from './Screens/welcome';
import customButton from './Screens/customButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import DeviceInfo from 'react-native-device-info';
import {NativeModules} from 'react-native';

const Stack = createNativeStackNavigator();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  componentDidMount() {
    console.log(NativeModules.NativeModuleManager);

    // Calling a method
    NativeModules.NativeModuleManager.doSomethingInNative();

    // Calling a rounte & get response back
    NativeModules.NativeModuleManager.doSomethingGiveBack(message => {
      console.log(message);
    });
    DeviceInfo.isEmulator().then(_isEmulator => {
      // false
      if (_isEmulator) {
        Alert.alert('Notice', 'Running on simulator!');
      }
    });
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Welcome"
              component={welcome}
              options={{title: 'Welcome'}}
            />
            <Stack.Screen
              name="CustomButtons"
              component={customButton}
              options={{title: 'Custom Buttons'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  let {name} = state;
  return {
    name: name.name,
  };
};

export default connect(mapStateToProps, {
  nameChange,
})(App);
