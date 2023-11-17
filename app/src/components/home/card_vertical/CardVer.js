/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import {HeartBTN} from '../../../components/index';

const CardVer = ({data, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details')} style={Styles.container}>
      <View style={Styles.container_img}>
        <Image style={Styles.img} source={data.url}/>
        <HeartBTN/>
      </View>
      <View style={Styles.container_txt}>
        <Text style={{color: '#070707', fontSize: 14, fontWeight: '700', marginBottom: 8}}>{data.Title}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#070707', fontWeight: 'bold'}}>{data.Weight} KG</Text>
          <Text style={{textDecorationLine: 'line-through', color: '#7D8389'}}>{data.Weight} KG</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 15,
    maxWidth: '50%',
    borderWidth: 2,
    borderColor: '#F0F1F2',
  },
  container_img:{
    flexDirection: 'row',
    height: 150,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_txt:{
    borderWidth: 2,
    borderColor: '#F0F1F2',
    // maxWidth: '100%',
  },
  img:{
    height: 100,
    width: 100,
  },
});

export default CardVer;
