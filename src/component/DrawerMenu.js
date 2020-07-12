import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default class DrawerMenu extends Component {
  
  render() {
    return (
      <View>
          <View style={styles.footer}>
              <ScrollView>
                  <TouchableOpacity>
                      <Text>Home</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                      <Text>Home</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                      <Text>Home</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                      <Text>Home</Text>
                  </TouchableOpacity>
              </ScrollView>
        <Text style={styles.footertext}> My NAvigation App </Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical:40,
      backgroundColor: '#f1f1f9',
    },
    footer:{
        position:'absolute',
        left:0,
        bottom:0,
        width: '100%',
        paddingVertical:20
    },
    footertext:{
        textAlign:'center',
        color:'#999',
        fontSize:11
    }

  });