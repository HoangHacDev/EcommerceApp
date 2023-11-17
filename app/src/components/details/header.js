/* eslint-disable prettier/prettier */
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { ICONS } from '../../Contanst/index';

const HeaderCPN = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('homebase')}>
        <Image style={Styles.icon_} source={ICONS.back}/>
      </TouchableOpacity>
      <View style={Styles.icon_right}>
        <TouchableOpacity>
          <Image style={Styles.icon_} source={ICONS.heart_enable}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={Styles.icon_} source={ICONS.share}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '85%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon_:{
      height: 18,
      width: 18,
    },
    icon_right:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '25%',
    },
});

export default HeaderCPN;
