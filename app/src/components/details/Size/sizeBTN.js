/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';


const SizeRadioBtn = ({ values, onPress }) => {
  const [currentSelectedItem, setCurrentSelectedItem] = React.useState(-1);

  const _onPress = (idx, data) => {
    onPress(idx, data);
    setCurrentSelectedItem(idx);
  };

  return (values || []).map((listItem, idx) => {
    let isChecked = currentSelectedItem === idx ? true : false;
    return (
      <RadioButton
        key={idx}
        onRadioButtonPress={() => _onPress(idx, listItem)}
        isChecked={isChecked}
        size={listItem.size}
        color={listItem.color}
        data={listItem}
      />
    );
  });
};

const RadioButton = ({ isChecked, size, color, onRadioButtonPress, data }) => {
  const _renderCheckedView = () => {
    return isChecked ? (
      <View style={[Styles.radioButtonIconInnerIcon(color)]}>
        <Text style={Styles.txt_size(color)}>{data.isColor === true ? color : size}</Text>
      </View>
    ) : null;
  };

  return (
    <TouchableOpacity style={Styles.mainContainer} onPress={onRadioButtonPress}>
      <View style={[Styles.radioButtonIcon]}>
        {isChecked ? null : <Text style={[Styles.txt_color, {color: '#070707'}]}>{data.isColor === true ? color : size}</Text>}
        {_renderCheckedView()}
      </View>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  mainContainer: {
    // borderWidth: 0.2,
    // borderColor: 'black',
  },
  radioButtonIcon: {
    backgroundColor: '#ff9999',
    height: 30,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    borderRadius: 5,
  },
  radioButtonIconInnerIcon: color => ({
    height: '100%',
    width: '100%',
    // backgroundColor: color === 'blue' ? '#0000cc' : '#b20000',
    backgroundColor: (color === 'blue') ? '#0000cc' :
                     (color === 'white') ? '#ffffff' :
                     (color === 'green') ? '#008000' :
                     (color === 'yellow') ? '#cccc00' :
                     '#b20000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: (color === 'white') ? 1.5 :
                  0,
    borderColor: 'black',
  }),
  radioButtonTextContainer: {
    justifyContent: 'center',
  },
  radioButtonText: {
    fontSize: 18,
  },
  txt_size: color => ({
    color: (color === 'white') ? '#000000' :
    (color === 'yellow') ? '#000000' :
    'white',
    fontSize: 14,
    fontWeight: 'bold',
  }),
  txt_color: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default SizeRadioBtn;
