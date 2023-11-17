/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import React from 'react';

//Components
import InputCPN from '../../components/auth/InputCPN';
import FooterCPN from '../../components/auth/FooterCPN';
import ButtonCPN from '../../components/auth/ButtonCPN';
import {ICONS} from '../../Contanst/index';

const FogotPassScreen = () => {

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.Head}>
        <Image style={Styles.Img} source={require('../../assets/img/forgot_password.png')}/>
      </View>
      <View style={Styles.Body}>
        <View style={Styles.Body_Text}>
          <Text style={Styles.TextStyle}>Forgot</Text>
          <Text style={Styles.TextStyle}>Password</Text>
          <Text style={{marginTop: 10, color: '#220A40'}}>New Password
          </Text>
        </View>
        <View style={Styles.Body_Input}>
          <InputCPN path_icon={ICONS.email} secureTextEntry={false} placeholder="Ende@gmail.com"/>
          <ButtonCPN Name = "SEND"/>
        </View>
      </View>
      <View style={Styles.Footer}>
        <FooterCPN/>
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7F1',
  },
  Head:{
    height: '30%',
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Body:{
    height: '45%',
    // backgroundColor: 'green',
  },
  Footer:{
    height: '25%',
    marginTop: 60,
    // width: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  Img:{
    height: 180,
    width: 180,
    alignContent: 'center',
    // zIndex: 1,
  },
  Body_Text:{
    height: '35%',
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Body_Input:{
    height: '50%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    // backgroundColor: 'blue',
  },
  TextStyle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#220A40',
  },
});

export default FogotPassScreen;
