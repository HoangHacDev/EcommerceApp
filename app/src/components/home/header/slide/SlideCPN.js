/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { SIZES } from '../../../../Contanst/index';

const SlideCPN = () => {
  return (
    <View style={Styles.header_slide}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#CFDDD7', '#BDD9D4', '#A6D4D0']} style={Styles.linearGradient}>
              <Text style={Styles.buttonText}>
                All product are discount
              </Text>
              <Text style={{
                  backgroundColor: 'white',
                  borderRadius: 5,
                  padding: 4,
                  color: '#070707',
                  fontWeight: '700',
                }}> 25%</Text>
              <Image style={{
                height: 50,
                width: 50,
                marginLeft: 20,
                marginRight: 20,
              }} source={require('../../../../assets/img/discount_2.png')}/>
            </LinearGradient>
          </View>
  );
};

const Styles = StyleSheet.create({
    linearGradient: {
        // paddingLeft: 15,
        // paddingRight: 15,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: {
        fontSize: SIZES.medium,
        // fontFamily: 'Gill Sans',
        textAlign: 'center',
        // margin: 10,
        marginRight: 5,
        marginLeft: 5,
        color: '#070707',
        backgroundColor: 'transparent',
      },
});

export default SlideCPN;
