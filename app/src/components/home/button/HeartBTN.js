/* eslint-disable prettier/prettier */
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const HeartBTN = () => {
  return (
    <TouchableOpacity style={Styles.container}>
      <Image style={Styles.like_icn} source={require('../../../assets/img/heart.png')}/>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
    container:{
      backgroundColor: '#F0F1F2',
      height: '25%',
      padding: 5,
      borderRadius: 20,
      position: 'absolute',
      right: 2,
      top: 0,
    },
    like_icn:{
        height: 20,
        width: 20,
      },
});

export default HeartBTN;
