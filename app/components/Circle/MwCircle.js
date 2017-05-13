'use strict';

import React, { Component } from 'react';
import { View, ScrollView, Text, Image, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';

import Note from './Note'
import Register from '../Common/Register'

// todo: ScrollView => ListView
class MCircle extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topbar}>
            		<TouchableOpacity style={styles.optionBtn} onPress={() => {this.pushToRegister()}}>
			        	<Text style={[styles.optionText, {marginLeft: 10}]}>注册</Text>  
			        </TouchableOpacity>
			        <View style={{flexDirection: 'row'}}>
	                    <TouchableHighlight>
	                        <Text style={[styles.topbarText, styles.active]}>热门</Text>
	                    </TouchableHighlight>
	                    <TouchableHighlight>
	                        <Text style={styles.topbarText}>关注</Text>
	                    </TouchableHighlight>
                    </View>
                    <TouchableOpacity style={styles.optionBtn} onPress={() => {this.pushToRegister()}}>
			        	<Text style={[styles.optionText, {marginRight: 10}]}>登录</Text>  
			        </TouchableOpacity>
                </View>
                <ScrollView style={styles.content}>
                    <Note></Note>
                </ScrollView>
            </View>
        );
    }

    pushToRegister () {
	  	this.props.navigator.push({
	  		component: Register,
	  		title: '注册页'
	  	});
  	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    topbar: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    optionBtn: {
    	justifyContent: 'center'
    },
    optionText: {
    	fontSize: 16,
    	color: '#eb7350',
    	justifyContent: 'center'
    },
    topbarText: {
    	width: 60,
        color: '#999',
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
        fontSize: 18
    },
    active: {
        color: '#46ab69',
        borderBottomWidth: 2,
        borderBottomColor: '#46ab69'
    },
    content: {
        backgroundColor: '#fff',
        borderWidth: 1,
    }
});

module.exports = MCircle