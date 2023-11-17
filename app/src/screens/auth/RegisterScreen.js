/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';

//Components
import {InputCPN, FooterCPN, ButtonCPN} from '../../components/index';
import {ICONS} from '../../Contanst/index';

const RegisterScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.Head}>
        <Image style={Styles.Img} source={require('../../assets/img/shopping_online.png')}/>
      </View>
      <View style={Styles.Body}>
        <View style={Styles.Body_Text}>
          <Text style={Styles.TextStyle}>Create New</Text>
          <Text style={Styles.TextStyle}>Account</Text>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{marginTop: 10, marginRight: 10, color: '#220A40'}}>Already registered?
          </Text>
            <TouchableOpacity style={{
              marginTop: 10,
              }} onPress={() => navigation.navigate('Login')}>
              <Text style={Styles.TouchableOpacityText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.Body_Input}>
          <InputCPN path_icon={ICONS.user} secureTextEntry={false} placeholder="Eden Hazard"/>
          <InputCPN path_icon={ICONS.email} secureTextEntry={false} placeholder="Ende@gmail.com"/>
          <InputCPN path_icon={ICONS.lock} secureTextEntry={true} placeholder="***************"/>
        </View>
      </View>
      <View style={Styles.Footer}>
        <ButtonCPN Name = "SIGN UP"/>
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
    height: '50%',
    // backgroundColor: 'green',
  },
  Footer:{
    height: '20%',
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
    height: '65%',
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
  TouchableOpacityText:{
    color: '#220A40',
    // padding: 10,
    fontWeight: '900',
},
});

export default RegisterScreen;
