import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, Animated, Image } from 'react-native';
import { TabViewAnimated, TabViewPagerPan } from 'react-native-tab-view'

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
}


const album = {
    0: {image: 'https://andrewpegodadotcom.files.wordpress.com/2017/11/walt_disney_pictures.jpg',
        title: 'Festive Dining Offer',
        description: 'description description description description description description'},
    1: {image: 'https://secure.parksandresorts.wdpromedia.com/resize/mwImage/1/1280/720/100/wdpromedia.disney.go.com/media/disneyparks_v0100/2/media/special-offers/special-offers-wdw-generic-pep.jpg',
        title: 'Festive Dining Offer',
        description: 'description description description description description description'},
    2: {image:  'https://i.investopedia.com/dimages/graphics/the_top_5_disney_shareholders.jpg',
        title: 'Festive Dining Offer',
        description: 'description description description description description description'}
}

export default class Carousel extends Component {
    state = {
        index: 0,
        routes: Object.keys(this.props.items).map(key => ({key}))
    }

    buildSlider = ({layout, position, route, navigationState}) => {
        const { width } = layout;
        const { routes } = navigationState;
        const currentIndex = routes.indexOf(route);
        const inputRange = [...routes.map((x, i) => i)];
        const translateOutputRange = inputRange.map(i => {
          return width / 4 * (currentIndex - i) * -1;
        });
        // const opacityOutputRange = inputRange.map(i => {
        //   if (currentIndex === i) {
        //     return 1;
        //   } else {
        //     return 0.3;
        //   }
        // });
        const translateX = position.interpolate({
          inputRange,
          outputRange: translateOutputRange,
        });
        // const opacity = position.interpolate({
        //   inputRange,
        //   outputRange: opacityOutputRange,
        // });

        return {
          transform: [{ translateX }],
          // opacity,
        };
    }
    renderPager = (props) => {
        return <TabViewPagerPan {...props} />
      };
    renderScene = (props) => {
          return this.props.renderScene(props, this.buildSlider(props))
      };
    handleIndexChange = (index) => {
        this.setState({ index })
    }
    render(){

        return (
            <TabViewAnimated
                style={styles.container}
                navigationState={this.state}
                renderPager={this.renderPager}
                renderScene={this.renderScene}
                onIndexChange={this.handleIndexChange}
                initialLayout={initialLayout}
              />
        )
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent'
    }
})