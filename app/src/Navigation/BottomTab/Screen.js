/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screen
import HomeScreen from '../../screens/home/HomeScreen';
import {CartScreen, CataLogScreen, FavoritesScreen, ProFileScreen} from '../../screens/Screen/index';
import { ICONS } from '../../Contanst';
import { Image, View, StyleSheet, Text } from 'react-native';

const Tab = createBottomTabNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#555',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => <View>
            <Image style={Styles.icon_(focused)} source={ICONS.home}/>
          </View>,
          }}
        />
      <Tab.Screen
        name="cataLog"
        component={CataLogScreen}
        options={{
          tabBarIcon: ({focused}) => <View>
            <Image style={Styles.icon_(focused)} source={ICONS.catalog}/>
          </View>,
          }}
      />
      <Tab.Screen
        name="cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused}) =>
          <View style={Styles.cart_}>
            <Image style={Styles.icon_(focused)} source={ICONS.cart}/>
            <View style={Styles.cart_count}>
              <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>2</Text>
            </View>
          </View>,
          }}
        />
      <Tab.Screen
        name="favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({focused}) => <View>
            <Image style={Styles.icon_(focused)} source={ICONS.favorites}/>
          </View>,
          }}/>
      <Tab.Screen
        name="profile"
        component={ProFileScreen}
        options={{
          tabBarIcon: ({focused}) => <View>
            <Image style={Styles.icon_(focused)} source={ICONS.profile}/>
          </View>,
          }}/>
    </Tab.Navigator>
  );
};

const Styles = StyleSheet.create({
  icon_:(focused) => ({
    height: 25,
    width: 25,
    tintColor: focused ? '#cccc00' : '#000000',
  }),
  cart_:{
    flexDirection: 'row',
    position: 'relative',
  },
  cart_count:{
    position: 'absolute',
    top: -5,
    right: -10,
    backgroundColor: '#990000',
    padding: 2,
    paddingRight: 6,
    paddingLeft: 6,
    borderRadius: 20,
  },
});

export default TabScreen;
