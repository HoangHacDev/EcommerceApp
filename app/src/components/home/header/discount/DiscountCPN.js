/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { COLORS } from '../../../../Contanst/index';

const DiscountCPN = () => {
  return (
    <TouchableOpacity style={{
        backgroundColor: COLORS.primary,
        padding: 10,
        borderRadius: 20,
        marginLeft: 15,
        }}>
        <Image style={Styles.header_top_in_img} source={require('../../../../assets/img/discount.png')}/>
      </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
    header_top_in_img:{
        height: 18,
        width: 18,
      },
});

export default DiscountCPN;
