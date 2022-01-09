import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {nameChange} from './actions/detail';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  navigateToCustomButton = () => {
    console.log('nav called', this.props.navigation);
    this.props.navigation.navigate('CustomButtons', {name: this.props.name});
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Type your name!"
          onChangeText={text => this.props.nameChange({text})}
        />
        <Button
          title="Go to custom button"
          onPress={() => this.navigateToCustomButton()}
        />
      </View>
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
})(Welcome);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputStyle: {
    height: 40,
    backgroundColor: 'azure',
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 100,
    marginBottom: 100, 
  },
});
