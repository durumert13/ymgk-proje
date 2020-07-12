import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
// react-navigation importrs
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

// screen imports
import HomeScreen from './screen/HomeScreen';
import DetailScreen from './screen/DetailScreen';
import AboutModal from './screen/AboutModal';
import ContactScreen from './screen/ContactScreen';
import DrawerButton from './component/DrawerButton';
import DrawerMenu from './component/DrawerMenu';

//icons

import Icon from 'react-native-vector-icons/Ionicons';
//import Icon from 'react-native-vector-icons/Fontisto';


const MainStack = createStackNavigator({
	Home: {
        screen: HomeScreen,
        navigationOptions:({navigation})=>({
            headerLeft: <DrawerButton navigation={navigation}/>
        }),
  },
  
  Detail:{
    screen: DetailScreen,
    navigationOptions:({navigation})=>({
        headerLeft: <DrawerButton navigation={navigation}/>
    }),
  }
},
{initialRouteName:"Home",
headerLayoutPreset:"center",
defaultNavigationOptions:{
  headerBackTitle:'Geri',
  title: 'Home',
    headerStyle:{
        backgroundColor:'yellow',

    },
    headerTintColor: 'red',
    headerTitleStyle:{
      fontWeight: 'bold',
    }
}
}
);


const ContactStack = createStackNavigator({

    Contact:{
        screen:ContactScreen,
        navigationOptions:({navigation})=>({
            headerLeft: <DrawerButton navigation={navigation}/>
        }),
    }

});

const Drawer = createDrawerNavigator({
    Home:{
        screen: MainStack,
        navigationOptions:{
            drawerLabel: 'Anasayfa',
            drawerIcon: ({tintColor})=>{
                <Icon
                name="ios-home"
                size={22}
                color={tintColor}
                />
               
              
            }
        }
    },
    Contact:{
        screen:ContactStack,
        navigationOptions:{
            // drawerLockMode: 'locked-closed',
            drawerLabel: 'iletişim'
        }
    }
    },{
        drawerPosition:'left',
        drawerWidth: 160,
        contentComponent:DrawerMenu

        // contentOptions:{
        //     activeTintColor:'#fff',
        //     inactiveTintColor: '#d03932',

        //     activeBackgroundColor : '#d03932',
        //     inactiveBackgroundColor: '#fff',
        //     itemStyle:{
        //         flexDirection: 'column',
        //     }
        // 
    
});

const ModalStack = createStackNavigator({
    Main: MainStack,
    Modal: AboutModal

},{
        mode: 'modal',
        headerMode:'none'
});

export default createAppContainer(Drawer);

