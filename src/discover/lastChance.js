import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, Animated, Image } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import moment from 'moment'

const window = Dimensions.get('window')

export default class LastChance extends Component {
    state = {
        favourited: false
    }

    saveToFavourite = () => {
        this.setState({favourited: !this.state.favourited})
    }

    render (){
        const { favourited } = this.state
        const { item } = this.props
        return (
            <View style={styles.album}>
                <View style={styles.imageBackground}>
                    <Image
                        source={{uri: item.image}}
                        style={styles.image}
                    />
                <Text style={styles.caption}>{`${item.caption}\n`}<Text style={{fontWeight: 'bold'}}>One step closer</Text></Text>
                </View>
                <View style={styles.notification}>
                    <View style={styles.remainDate}>
                        <MaterialCommunityIcons name='clock' size={16} style={{paddingRight: 5, color: '#fff'}} />
                        <Text style={{color: '#fff'}}>{`${moment().diff(moment(item.date, 'x'), 'days')} days left`}</Text>
                    </View>
                    <View>
                        <Ionicons onPress={()=>{this.saveToFavourite()}} name={favourited ? 'md-heart' : 'md-heart-outline'} size={24} style={{color: '#FF6120', marginRight: 10}} />
                    </View>
                </View>
                <View style={styles.description}>
                    <Text style={styles.descriptionTitle}>{item.title}</Text>
                    <Text style={styles.descriptionLabel}>{item.description}</Text>
                </View>
            </View>
        )
    }
}

let styles = StyleSheet.create({
      album: {
        height: '100%',
        width: window.width * 0.7,
        paddingRight: 10
        // backgroundColor: 'red'
      },
      image: {
        height: '100%',
        width: '100%',
        opacity: 1,
        // backgroundColor: 'black'
      },
      imageBackground: {
        height: 100,
        position: 'relative',
        marginBottom: 5,
        // backgroundColor: 'green',
      },
      caption: {
        position: 'absolute',
        bottom: 5,
        left: 5,
        fontSize: 14,
        color: '#fff',
        alignSelf: 'flex-start'
      },
      description: {
          height: 100,
          paddingVertical: 5
      },
      descriptionTitle: {
          fontWeight: 'bold'
      },
      descriptionLabel: {
        lineHeight: 25,
        marginTop: -5
      },
      notification: {
          flexDirection: 'row', 
          justifyContent: 'space-between',
          marginVertical: 5
      },
      remainDate: {
          backgroundColor: '#FF6120',
          borderRadius: 15,
          paddingVertical: 3,
          paddingHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center'
      }
})