import React, {Component} from 'react';
import {
    StyleSheet,
     Text, 
     View,
    Button
    }from 'react-native';


export default class AboutModal extends Component {
  static navigationOptions =({navigation})=>{
    return{
      title: navigation.getParam('title', 'default')
    }
  };
	render() {
     
		return (
			<View style={styles.container}>
				<Text style={styles.title}>AboutModal</Text>
			</View>
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