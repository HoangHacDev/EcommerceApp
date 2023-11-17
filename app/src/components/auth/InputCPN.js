/* eslint-disable prettier/prettier */
import {View, TextInput, StyleSheet, Image} from 'react-native';
import React from 'react';

const InputCPN = ({path_icon, secureTextEntry, placeholder}) => {

  return (
    <View style={Styles.container}>
      <View style={Styles.IP_Icon}>
        <Image style={Styles.InputIMG} source={path_icon}/>
      </View>
      <View style={Styles.Input}>
        <TextInput style={Styles.InputTXT} placeholder={placeholder} secureTextEntry={secureTextEntry}/>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container:{
    // backgroundColor: 'green',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  IP_Icon:{
    marginRight: 15,
  },
  Input:{
    width: '65%',
  },
  InputTXT: {
    borderWidth: 1,
    borderRadius: 20,
    height: 35,
    paddingLeft: 10,
    color: '#220A40',
    fontWeight: 'bold',
    paddingTop: 0,
    paddingBottom: 0,
    // width: '100%',
  },
  InputIMG: {
    height: 30,
    width: 30,
  },
});

export default InputCPN;
