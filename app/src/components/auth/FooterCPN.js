/* eslint-disable prettier/prettier */
import { View, Text} from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';

const FooterCPN = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.Circle_Left}>
        <View style={Styles.Circle_Left_Inside}><Text>  </Text></View>
      </View>
      {/* <View style={Styles.Btn}> */}
        {/* <TouchableHighlight></TouchableHighlight> */}
      {/* </View> */}
      <View style={Styles.Circle_Right}>
        <View style={Styles.Circle_Right_Inside}><Text> </Text></View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
    container: {
        // backgroundColor: 'yellow',
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      Circle_Left:{
        backgroundColor: '#7B4A86',
        // width: '100%',
        width: '20%',
        height: '80%',
        position: 'relative',
        borderTopRightRadius: 95,
        alignItems: 'center',
        justifyContent: 'center',
      },
      Circle_Left_Inside:{
        backgroundColor: '#905F9D',
        position: 'absolute',
        padding: 10,
        // marginBottom: 20,
        // borderRadius: 10,
        borderTopRightRadius: 100,
        borderTopLeftRadius: 100,
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 100,
        transform: [{rotateY: '40deg'}, {rotateX: '30deg'}],
      },
      Circle_Right:{
        backgroundColor: '#70427C',
        width: '20%',
        height: '80%',
        // position: 'relative',
        borderTopLeftRadius: 95,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginBottom: 15,
      },
      Circle_Right_Inside:{
        backgroundColor: '#7B4A86',
        // position: 'absolute',
        // borderRadius: 1000,
        height: '85%',
        padding: 16,
        marginBottom:14,
        borderTopLeftRadius: 1000,
        borderBottomLeftRadius: 1000,
      },
});

export default FooterCPN;
