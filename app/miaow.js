'use strict';

import React, { Component } from 'react';
import { View, ScrollView, Text, Image, StyleSheet, TouchableHighlight, Navigator } from 'react-native';

import TabNavigator from 'react-native-tab-navigator'

import Circle from './components/Circle/MwCircle'
import Surround from './components/Surround/MwSurround'
import Person from './components/Mine/Person'

// todo: ScrollView => ListView
class app extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'circle',
        };
    }
    render() {
        return (
            <TabNavigator tabBarStyle={{backgroundColor: '#fff'}}>
            
              {this.renderTabBarItem('喵圈', 'nav_bg_1', 'nav_bg_1', 'circle', '喵圈',  Circle)}

              {this.renderTabBarItem('喵周边', 'nav_bg_2', 'nav_bg_2', 'surround', '喵周边',  Surround)}
              
              {this.renderTabBarItem('喵星人', 'nav_bg_3', 'nav_bg_3', 'person', '喵星人',  Person)}
              
            </TabNavigator>
        );
    }

    renderTabBarItem (title, icon, selectedIcon, tabName, componentName, component) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === tabName}
                title={title}
                renderIcon={() => <Image source={{uri: icon}} style={styles.bottombar_img} />}
                renderSelectedIcon={() => <Image source={{uri: selectedIcon}} style={styles.bottombar_img} />}
                onPress={() => this.setState({ selectedTab: tabName })}
                titleStyle={styles.topbarText}
                >
                <Navigator
                    initialRoute={{name: componentName, component: component}}
                    configureScene={() => {
                        return Navigator.SceneConfigs.FloatFromBottom;
                    }}
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return <Component {...route.passProps} navigator={navigator}/>;
                    }}
                />
            </TabNavigator.Item>
      )
    }
}

const styles = StyleSheet.create({
    topbarText: {
        color: '#999'
    },
    bottombar_img: {
        width: 32,
        height: 30,
        borderWidth: 1
    }
});

module.exports = app
