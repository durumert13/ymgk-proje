import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
  Animated,
  TouchableOpacity,
  Image,

} from 'react-native';

//pages imp
import WindMill from './WindMillComponents/WindMill'
import Flowers from './WindMillComponents/Flowers';
import Car from './WindMillComponents/Car';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WindMill
        style={{ left:150 , top:  75}}
        
        />
        <WindMill
        style={{ left:40 , top:  63}}
        
        />
        <Car
        style={{ top:  300}}
        />
        <Flowers/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
      backgroundColor: '#94bba9',
     

  },
  
  
});


