/* eslint-disable prettier/prettier */
import { Image, StyleSheet, View } from 'react-native';
import React from 'react';

const CarouselCard = ({ item, index }) => {

  return (
    <View style={Styles.conatainer}>
      {/* <Image style={Styles.img_} source={require('../../../assets/img/T_Shirt.png')}/> */}
      <Image style={Styles.img_} source={item.url}/>
    </View>
  );
};

const Styles = StyleSheet.create({
  conatainer:{
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img_:{
    height: 180,
    width: 180,
  },
});

export default CarouselCard;
