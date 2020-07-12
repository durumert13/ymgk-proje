import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image
    } from 'react-native';


     class TitleLogo extends Component{
      render(){
        return( 
        
        <Image
          style={{width: 38 , height: 38}}
          source={require('../icons/header-icon.png')}/>
          
          );
      }
    }



export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
		return {
      headerTitle: <TitleLogo />
      // headerRight: (
      // <Button title="About"
      // onPress={()=> navigation.navigate('Modal')}/>)
      
		}
	};
	render() {
        const{navigate,getParam}=this.props.navigation;
        const title = getParam('title', 'Home');
		return (
			<View style={styles.container}>
				<Text>HomeScreen</Text>
                <Button
                title="Detail 1"
                onPress={() =>navigate('Detail', {
                  title: 'Detail 1'
                })}/>

                <Button
                title="Detail 2"
                onPress={() =>navigate('Detail' , {
                  title: 'Detail 2'
                })}/>
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