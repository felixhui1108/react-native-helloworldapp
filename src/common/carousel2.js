import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const window = Dimensions.get('window')

export default class SnapCarousel extends Component {
    render () {
        return (
            <Carousel
                ref={(c) => { this._carousel = c; }}
                data={this.props.items}
                renderItem={this.props.renderLastChanceItem}
                sliderWidth={window.width - 10}
                itemWidth={window.width}
                activeSlideAlignment='start'
                enableSnap={false}
                inactiveSlideOpacity={1}
                inactiveSlideScale={1}
            />
        );
    }
}