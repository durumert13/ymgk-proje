
import React, {Component} from 'react';
import {
    StyleSheet,
     Text, 
     View,
    Button
    }from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';



export default class DetailScreen extends Component {
  static navigationOptions =({navigation})=>{
    return{
      title: navigation.getParam('title', 'default')
    }
  };
	render() {
        const{navigate,push,goBack,getParam}=this.props.navigation;
        const title = getParam('title');
		return (
			<View style={styles.container}>
				<Text>{title}</Text>
                <Button
                title="Go to detail page"
          
                onPress={() =>push('Home',{
                  title:'Home'
                })}/>

                <Button
                title="go Back"
                onPress={()=> goBack( )}
                />
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
    }
  });