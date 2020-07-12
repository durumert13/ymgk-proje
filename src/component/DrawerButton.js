import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class DrawerButton extends Component {
  toggleMenu=()=>{
      this.props.navigation.toggleDrawer();
  };

  render() {
    return (
     
        <TouchableOpacity 
        onPress={this.toggleMenu}
        style={{paddingHorizontal: 15}}>
            <Icon 
            name="ios-menu"
            size={20}></Icon>
        </TouchableOpacity>

    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#efe6ee',
    },
    title:{
        fontSize:34
    }
  });
