import React, {Component} from 'react';
import {Alert, AppRegistry, Text, TextInput, View} from 'react-native';
import {connect} from 'react-redux';
import {nameChange} from './actions/detail';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import welcome from './welcome';
import customButton from './customButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import DeviceInfo from 'react-native-device-info';

const Stack = createNativeStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  componentDidMount() {
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
