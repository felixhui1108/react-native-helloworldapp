import React, { Component } from 'react';
import {View, Text, StyleSheet, Animated, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import moment from 'moment'
import SnapCarousel from '../common/carousel2'
import LastChance from './lastChance'

const lastChance = {
    0: {
        image: 'https://andrewpegodadotcom.files.wordpress.com/2017/11/walt_disney_pictures.jpg',
        title: 'Red Hot Weekend Special',
        caption: 'See the world',
        description: 'description description description description description description',
        date: moment('2017-12-25').format('x')
    },
    1: {
        image: 'https://secure.parksandresorts.wdpromedia.com/resize/mwImage/1/1280/720/100/wdpromedia.disney.go.com/media/disneyparks_v0100/2/media/special-offers/special-offers-wdw-generic-pep.jpg',
        title: 'Travel Special',
        caption: 'Festive Dining Offer',
        description: 'description description description description description description',
        date: moment('2017-12-25').format('x')
    },
    2: {
        image:  'https://i.investopedia.com/dimages/graphics/the_top_5_disney_shareholders.jpg',
        title: 'Mannings',
        caption: 'Festive Dining Offer',
        description: 'description description description description description description',
        date: moment('2017-12-25').format('x')
    }
}

export default class HotOffers extends Component {
    renderLastChanceItem = ({item, index} ) => {
        return <LastChance item={item} index={index} />
    }
    render(){
        const lastChanceData = Object.values(lastChance)
        return(
            <ScrollView style={styles.container}>
                <View style={styles.offers}>
                    <View style={styles.sectionTitle}>
                        <MaterialIcons name='timer' size={18} style={[styles.icon]}/>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>Last Chance</Text>
                    </View>
                    <SnapCarousel items={lastChanceData} renderLastChanceItem={this.renderLastChanceItem} />
                </View>
                <View style={styles.announcement}>
                    <Text>To borrow or not to borrow? Borrow only if you can repay</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#E6E6E6'
    },
    offers: {
        height: 270,
        width: '100%',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    announcement: {
        height: 70,
        padding: 10,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    carouselPage: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20,
        backgroundColor: 'transparent'
    },
    sectionTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    icon: {
        backgroundColor: 'transparent',
        color: '#FF6120',
        marginRight: 3
    },
})