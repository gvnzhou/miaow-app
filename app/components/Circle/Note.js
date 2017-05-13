'use strict';

import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// todo: ScrollView => ListView
class Note extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <View style={styles.itemBox}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('../../assets/avtor.jpg')} style={styles.avatar} />
                        <View style={styles.userInfo}>
                            <Text style={{fontSize: 14}}>会飞的鱼</Text>
                            <Text style={{fontSize: 12}}>渺小行</Text>
                        </View>
                        <View style={styles.userOption}>
                            <Image source={require('../../assets/add_friend.jpg')} style={styles.userIcon} />
                            <Image source={require('../../assets/share.jpg')} style={styles.userIcon} />
                        </View>
                    </View>
                    <View style={{marginTop: 10}}>
                        <Text>我家猫咪的超神路</Text>
                        <View style={styles.itemContent}>
                            <Image source={require('../../assets/shiping.jpg')} style={{width:320, height: 185, resizeMode: Image.resizeMode.contain}} />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.pubDate}>9 Aug.2016</Text>  
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10}}>
                            <Image source={require('../../assets/flower.jpg')} style={styles.bottomIcon}/>
                            <Text style={styles.bottomText}>10886</Text>
                            <Image source={require('../../assets/comment.jpg')} style={styles.bottomIcon} />
                            <Text style={styles.bottomText}>10886</Text>
                            <Image source={require('../../assets/gift.jpg')} style={styles.bottomIcon} />
                            <Text style={styles.bottomText}>送礼</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemBox: {
        width: 340,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 3,
        padding: 10
    },
    itemContent: {
        width: 320,
        marginTop: 8
    },
    pubDate: {
        marginTop: 16,
        textAlign: 'right',
        fontStyle: 'italic',
        color: '#999'
    },
    avatar: {
        width:40,
        height: 40
    },
    userInfo: {
        height: 40,
        marginLeft: 16
    },
    userOption: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1
    },
    userIcon: {
        width: 25,
        height: 25,
        marginLeft: 13
    },
    bottomIcon: {
        width: 20,
        height: 20,
        marginLeft: 18
    },
    bottomText: {
        marginLeft: 5,
        marginTop: 5,
        fontSize: 10,
        color: '#999'
    }
});

module.exports = Note
