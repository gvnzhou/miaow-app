import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

class Register extends Component {

	constructor(props) {
    	super(props);
    	this.state = { 
    		nick: '昵称',
    		phoneNum: '手机号（仅支持中国大陆号码）',
    		password: '密码（不少于6位）'
    	};
  	}


    render() {
	    return (
	      <View>
	      	<TouchableOpacity onPress={() => {this.popToHome()}}>
	        	<Text style={styles.cancel}>取消</Text>  
	        </TouchableOpacity>
	        <View style={{ marginTop: 20 }}>
	        	<Text style={{ textAlign: 'center' }}>这里放Logo</Text>
	      	</View>
	      	<View style={{ alignItems: 'center' }}>
	      		<TextInput 
	      			underlineColorAndroid="transparent"
	      			multiline={true}
	      			style={styles.inputBox}
	      			placeholder={this.state.nick}
	      			onChangeText={(nick) => this.setState({nick})}
	      		/>
	      		<TextInput 
	      			underlineColorAndroid="transparent"
	      			style={styles.inputBox}
	      			placeholder={this.state.phoneNum}
	      			onChangeText={(phoneNum) => this.setState({phoneNum})}
	      		/> 
	      		<TextInput 
	      			underlineColorAndroid="transparent"
	      			style={styles.inputBox}
	      			placeholder={this.state.password}
	      			onChangeText={(password) => this.setState({password})}
	      		/> 
	      	</View>
	     	<TouchableOpacity style={{ alignItems: 'center' }}>
	        	<Text style={styles.regBtn}>注册</Text>
	        </TouchableOpacity>
	      </View>
	    )
    }

    popToHome () {
  	  this.props.navigator.pop()
    }

    register () {
	
    }
}

const styles = StyleSheet.create({
    cancel: {
    	marginTop: 10,
    	marginLeft: 10,
    	color: '#eb7350'
    },
    inputBox: {
    	width: 300,
    	padding: 0,
    	marginBottom: 10,
    	paddingBottom: 5,
    	borderBottomWidth: 1,
    	borderBottomColor: '#ccc'
    },
    regBtn: {
    	marginTop: 10,
    	width: 300,
    	paddingTop: 5,
    	paddingBottom: 5,
    	textAlign: 'center',
    	color: '#fff',
    	backgroundColor: '#46ab69',
    	borderRadius: 3
    }
})
export default Register