import React, { PureComponent } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import Discover from './discover/discover';

import type { Route, NavigationState } from 'react-native-tab-view/types';

type State = NavigationState<
  Route<{
    key: string,
    title: string,
    icon: string,
    color: string,
  }>
>;

export default class Index extends PureComponent<*, State> {
  static title = 'Bottom bar with indicator';
  static appbarElevation = 4;

  state = {
    index: 0, 
    routes: [
      { key: '1', title: 'Discover', icon: 'ios-speedometer', color: '#F44336' },
      { key: '2', title: 'Second', icon: 'ios-game-controller-b', color: '#4CAF50'},
      { key: '3', title: 'Pay with RC', icon: 'ios-basketball', color: '#3F51B5' },
      { key: '4', title: 'Account', icon: 'ios-basketball', color: '#3F51B5' }
    ],
  };

  _handleIndexChange = index =>
    this.setState({
      index,
    });

  _renderIndicator = props => {
    const { width, position } = props;
    const translateX = width;

    return (
      <Animated.View
        style={[styles.container, { width, transform: [{ translateX }] }]}
      />
    );
  };

  _renderIcon = ({ route }) => (
    <Ionicons name={route.icon} size={24} style={this.state.index + 1 == route.key ? [styles.icon, {color: '#DB0011'}] : styles.icon} />
  );

  _getLabelText = ({ route }) => route.title;

  _renderFooter = props => (
    <TabBar
      {...props}
      renderLabel={this._renderLabel(props)}
      renderIcon={this._renderIcon}
      renderIndicator={this._renderIndicator}
      labelStyle={styles.label}
      tabStyle={styles.tab}
      style={styles.tabbar}
    />
  );

  _renderScene = ({ route }) => {
    switch(route.key) {
      case '1': 
        return <Discover />
        break;
      default:
        return <Text>{`this is ${route.key} page`}</Text>
    } 
  }

  _renderLabel = ({navigationState}) => ({route}) => {
    const color = route.key == navigationState.index + 1 ? '#DB0011' : '#929292'
    return (
      <Animated.Text style={[styles.label, { color }]}>
        {route.title}
      </Animated.Text>
    )
  }

  render() {
    return (
      <TabViewAnimated
        style={this.props.style}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderFooter={this._renderFooter}
        onIndexChange={this._handleIndexChange}
        swipeEnabled={false}
      />
    );
  }
}

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: '#E6E6E6',
  },
  tab: {
    padding: 0,
  },
  icon: {
    backgroundColor: 'transparent',
    color: '#929292'
  },
  label: {
    fontSize: 12,
    marginTop: 0,
    marginBottom: 5
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});