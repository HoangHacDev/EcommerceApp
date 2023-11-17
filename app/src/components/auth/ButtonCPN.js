/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const ButtonCPN = ({Name}) => {
  return (
    <TouchableOpacity style={Styles.container}>
        <Text style={Styles.TouchableOpacityText}>{Name}</Text>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        backgroundColor: '#220A40',
        width: '35%',
        alignSelf: 'center',
        borderRadius: 20,
    },
    TouchableOpacityText:{
        color: 'white',
        padding: 10,
    },
});

export default ButtonCPN;
