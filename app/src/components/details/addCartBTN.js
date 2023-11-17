/* eslint-disable prettier/prettier */
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../Contanst/index';

const AddCart = () => {
  return (
    <TouchableOpacity style={Styles.container}>
      <Text style={Styles.txt}>Add to cart</Text>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
    container:{
        width: '85%',
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        borderRadius: 6,
        paddingTop: 10,
        paddingBottom: 10,
    },
    txt:{
      fontSize: SIZES.large,
      color: COLORS.txt_color,
      fontWeight: 'bold',
    },
});

export default AddCart;
