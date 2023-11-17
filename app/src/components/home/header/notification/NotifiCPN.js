/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { COLORS } from '../../../../Contanst/index';

const NotifiCPN = () => {
  return (
    <TouchableOpacity style={{
        backgroundColor: COLORS.backgroud_base,
        flexDirection: 'row',
        marginRight: 15,
        }}>
        <Image style={Styles.header_top_in_img} source={require('../../../../assets/img/notification.png')}/>
        <View style={Styles.header_dot_notifi}><Text> </Text></View>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
    header_top_in_img:{
        height: 20,
        width: 20,
      },
      header_dot_notifi:{
        backgroundColor: COLORS.secondary,
        height: 7,
        padding: 2,
        borderRadius: 1000,
      },
});

export default NotifiCPN;
