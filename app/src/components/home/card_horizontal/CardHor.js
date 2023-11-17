/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const CardHor = ({data}) => {

  return (
    <TouchableOpacity style={Styles.container}>
      <Image style={Styles.img} source={data.url}/>
      <Text style={{paddingTop: 10, fontWeight: 'bold', color: 'black'}}>{data.Name}</Text>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        // borderWidth: 2,
        // borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    img:{
        height: 45,
        width: 45,
    },
});

export default CardHor;
