/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import React from 'react';
import { SIZES } from '../../../../Contanst/index';

const AddressCPN = () => {
  return (
    <View style={{alignItems: 'center'}}>
            <Text style={{
              fontSize: SIZES.xSmall,
            }}>Delivery Address</Text>
            <Text style={{
              fontSize: SIZES.medium,
              color: '#070706',
              fontWeight: 'bold',
            }}>168 Street, Los. Angeles</Text>
          </View>
  );
};

export default AddressCPN;
