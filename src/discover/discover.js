import React, { PureComponent } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import HotOffers from './hotOffers';

import type { Route, NavigationState } from 'react-native-tab-view/types';

type State = NavigationState<
  Route<{
    key: string,
    title: string
  }>
>;

export default class Discover extends PureComponent<*, State> {
  static title = 'Bottom bar with indicator';
  static appbarElevation = 4;

  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Hot offer'},
      { key: '2', title: 'Dining'},
      { key: '3', title: 'Shopping'},
      { key: '4', title: 'Travel & leisure'}
    ],
  };

  _handleIndexChange = index =>
    this.setState({
      index,
    });

  // _renderIndicator = props => {
  //   const { width, position } = props;
  //   const translateX = width;

  //   return (
  //     <Animated.View
  //       style={[styles.container, { width, transform: [{ translateX }] }]}
  //     />
  //   );
  // };

  _getLabelText = ({ route }) => route.title;

  _renderHeader = props => (
    <TabBar
      {...props}
      scrollEnabled
      renderLabel={this._renderLabel(props)}
      renderIndicator={this._renderIndicator}
      labelStyle={styles.label}
      tabStyle={styles.tab}
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
    />
  );

  _renderScene = ({ route }) => (
    <HotOffers />
  );

  _renderLabel = ({navigationState}) => ({route}) => {
    return (
      <Animated.Text style={[styles.label]}>
        {route.title}
      </Animated.Text>
    )
  }

  render() {
    return (
      <TabViewAnimated
        style={[this.props.style, styles.tabViewAnimated]}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        swipeEnabled={false}
      />
    );
  }
}

const styles = StyleSheet.create({
  tabViewAnimated: {
    paddingTop: 25,
    backgroundColor: '#FF6120',
  },
  tabbar: {
    backgroundColor: 'transparent',
  },
  tab: {
    padding: 0
  },
  label: {
    fontSize: 16,
    marginTop: 0,
    paddingVertical: 10,
    color: '#fff',
    fontWeight: 'bold'
  },
  indicator: {
    backgroundColor: '#fff',
    height: 3
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});