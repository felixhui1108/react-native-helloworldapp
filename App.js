/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  Button,
  Dimensions
} from 'react-native';

import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import Camera from 'react-native-camera';


const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const onBarCodeRead = (e) => {
  console.log(
      "Barcode Found!",
      "Type: " + e.type + "\nData: " + e.data
  );
}

const takePicture = () => {
  const options = {};
  //options.location = ...
  console.log('a');
  this.camera.capture({metadata: options})
    .then((data) => console.log(data))
    .catch(err => console.error(err));
  console.log('Felix');
}

const onPressLearnMore = () => {}

const FirstRoute = () => <View style={[ styles.container, { backgroundColor: '#ff4081' } ]} >
  <Text style={styles.welcome}>
    Welcome to React Native!Felixa
  </Text>
  <Text style={styles.instructions}>
    To get started, edit App.js
  </Text>
  <Text style={styles.instructions}>
    {instructions}
  </Text>
</View>;
const SecondRoute = () => <View style={[ cameraStyle.container, { backgroundColor: '#673ab7' } ]}>
  <Camera
      ref={(cam) => {
        this.camera = cam;
      }}
onBarCodeRead={onBarCodeRead.bind(this)}
      style={cameraStyle.preview}
      aspect={Camera.constants.Aspect.fill}>
      <Text style={cameraStyle.capture} onPress={takePicture.bind(this)}>[CAPTURE]</Text>
  </Camera>
  <Button
    onPress={onPressLearnMore}
    title="Learn More"
    color="#841584"
    accessibilityLabel="Learn more about this purple button"
  />
</View>;

const Second3Route = () => <View style={[ cameraStyle.container, { backgroundColor: '#673ab7' } ]}>
  <Button
    onPress={onPressLearnMore}
    title="Learn More"
    color="#841584"
    accessibilityLabel="Learn more about this purple button"
  />
</View>;

export default class App extends Component<{}> {

  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
      { key: 'first1', title: 'First' },
      { key: 'second2', title: 'Second' }
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    first1: FirstRoute,
    second2: Second3Route
  });


  render() {
    return (
      <View style={styles.container}>
          <TabViewAnimated
          style={styles.container}
          navigationState={this.state}
          renderScene={this._renderScene}
          renderHeader={this._renderHeader}
          onIndexChange={this._handleIndexChange}
          initialLayout={initialLayout}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


const cameraStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});