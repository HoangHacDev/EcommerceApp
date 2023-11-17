/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';

//Components
import InputCPN from '../../components/auth/InputCPN';
import FooterCPN from '../../components/auth/FooterCPN';
import ButtonCPN from '../../components/auth/ButtonCPN';
import {ICONS} from '../../Contanst/index';

const LoginScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.Head}>
        <Image style={Styles.Img} source={require('../../assets/img/gift_voucher.png')}/>
      </View>
      <View style={Styles.Body}>
        <View style={Styles.Body_Text}>
          <Text style={Styles.TextStyle}>Login</Text>
          <Text style={{marginTop: 10, color: '#220A40'}}>Sign in to continue
          </Text>
        </View>
        <View style={Styles.Body_Input}>
          <InputCPN path_icon={ICONS.user} secureTextEntry={false} placeholder="Eden Hazard"/>
          <InputCPN path_icon={ICONS.email} secureTextEntry={false} placeholder="Ende@gmail.com"/>
          <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
            <Text style={{color: '#220A40', fontWeight: 'bold'}}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>
          <ButtonCPN Name = "LOGIN"/>
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
    marginTop: 55,
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
    height: '20%',
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Body_Input:{
    height: '80%',
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

export default LoginScreen;
