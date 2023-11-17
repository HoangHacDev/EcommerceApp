/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';

const SearchCPN = ({clicked}) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.container_input}>
        <Image style={Styles.search_icon} source={require('../../../../assets/img/search.png')}/>
        <TextInput style={{
            width: '75%',
            // borderWidth: 2,
        }} placeholder="Search here !"/>
        <TouchableOpacity style={{
            alignSelf: 'center',
        }}>
            <Image style={Styles.search_icon_cancel} source={require('../../../../assets/img/cancel.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    container_input:{
        flexDirection: 'row',
        backgroundColor: '#E0E0E0',
        width: '60%',
        borderRadius: 10,
    },
    search_icon:{
        height: 25,
        width: 25,
        // backgroundColor: 'green',
        alignSelf: 'center',
        tintColor: '#585858',
        marginLeft: 5,
    },
    search_icon_cancel:{
        height: 20,
        width: 20,
        // backgroundColor: 'green',
        // alignSelf: 'center',
        tintColor: '#585858',
        marginLeft: 5,
    },
});

export default SearchCPN;
