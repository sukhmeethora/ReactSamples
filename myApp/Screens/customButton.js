import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Image,
  Alert,
  Button,
  TouchableOpacity,
  StyleSheet,
  SliderBase,
} from 'react-native';
import {connect} from 'react-redux';
import {nameChange} from '../actions/detail';
import Slider from 'react-native-slide-to-unlock';
import PropTypes from 'prop-types';

class CustomButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let name = this.props.name;
    console.log('namedfadf', name.text);
    return (
      <View style={styles.container}>
        <Text style={styles.textColor}>{name.text}</Text>
        <View style={styles.buttoncontainer}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.textColor}>{'4 varations of a button'}</Text>
          </View>
          <TouchableOpacity
            style={styles.buttonFirst}
            onPress={() =>  Alert.alert('Alert', 'On Pressed!')}>
            <Text style={styles.textColorButtonOne}>Press Me</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSecond}
            onPress={() => Alert.alert('Alert', 'On Pressed!')}>
            <Text style={styles.textColorButtonSecond}>Press Me</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonThird}
            onPress={() => Alert.alert('Alert', 'On Pressed!')}>
            <Text style={styles.textColorButtonThird}>Press Me</Text>
          </TouchableOpacity>
          <Slider
            childrenContainer={styles.slideChildContainer}
            onEndReached={() => {
              Alert.alert('Attention', 'onEndReached!');
            }}
            containerStyle={styles.slideButtonContainer}
            sliderElement={
              <Image
                style={styles.imageStyle}
                source={{
                  uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                }}
              />
            }>
            <Text>{'Slide me to continue'}</Text>
          </Slider>
        </View>
      </View>
    );
  }
}

CustomButton.defaultProps = {
  name: '',
};

CustomButton.propTypes = {
  name: PropTypes.string,
};

const mapStateToProps = state => {
  console.log(state);
  let {name} = state;
  return {
    name: name.name,
  };
};

export default connect(mapStateToProps, {
  nameChange,
})(CustomButton);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttoncontainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'black',
  },
  textColor: {
    color: 'yellow',
    backgroundColor: 'black',
    padding: 10,
    textAlign: 'right',
  },
  textColorButtonOne: {
    color: '#f0ffff',
  },
  textColorButtonSecond: {
    color: '#f0ffff',
  },
  textColorButtonThird: {
    color: '#f0ffff',
  },
  buttonFirst: {
    margin: 8,
    backgroundColor: 'transparent',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    width: '95%',
  },
  buttonSecond: {
    margin: 8,
    backgroundColor: '#364249',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    width: '95%',
  },
  buttonThird: {
    margin: 8,
    backgroundColor: '#7bb0f1',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    width: '95%',
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  slideButtonContainer: {
    margin: 8,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
  },
  slideChildContainer: {backgroundColor: 'transparent'},
  imageStyle: {
    width: 50,
    margin: 4,
    borderRadius: 5,
    height: 50,
  },
});
