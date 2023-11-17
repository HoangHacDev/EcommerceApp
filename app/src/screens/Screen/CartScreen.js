import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import {COLORS, ICONS, SIZES} from '../../Contanst/index';
import { Item_Cart } from '../../components';

const data = [
  { id: 1, txt: 'React Native', isChecked: false },
  { id: 2, txt: 'Javascript', isChecked: false },
  { id: 3, txt: 'Laravel', isChecked: false },
  { id: 4, txt: 'PHP', isChecked: false },
  { id: 5, txt: 'jQuery', isChecked: false },
  { id: 6, txt: 'Boostrap', isChecked: false },
  { id: 7, txt: 'HTML', isChecked: false },
];

const CartScreen = () => {
  const [changeData, setchangeData] = React.useState(data);
  const [checkAll, setCheckAll] = React.useState(false);

  const handleChangeAll = () => {
    // console.log('select all');
    let temp = changeData.map((value) =>
      {  if (value.isChecked === false) {
          setCheckAll(true);
          return { ...value, isChecked: !value.isChecked };
        } else if (value.isChecked === true){
          setCheckAll(false);
          return { ...value, isChecked: !value.isChecked };
        }
      }
    );
    setchangeData(temp);
  };

  return (
    <SafeAreaView style={Styles.container}>
      {/* Header */}
      <View style={Styles.header_}>
        <View style={Styles.header_up}>
          <Text style={{fontSize: SIZES.large, color: COLORS.txt_color, fontWeight: 'bold'}}>Cart</Text>
          <Image style={Styles.icon_} source={ICONS.options}/>
        </View>
        <TouchableOpacity style={Styles.header_down}>
          <View style={{flexDirection: 'row'}}>
            <Image style={Styles.icon_} source={ICONS.location}/>
            <Text style={{fontSize: SIZES.medium, color: COLORS.txt_color, fontWeight: '700', marginLeft: 5}}>92 Hight street, London</Text>
          </View>
            <Image style={Styles.icon_} source={ICONS.right_arrow}/>
        </TouchableOpacity>
      </View>
      {/* Body */}
      <View style={Styles.body_}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 5,
          }}>
            <View style={{flexDirection: 'row',  alignItems: 'center'}}>
              <TouchableOpacity onPress={handleChangeAll} style={{paddingRight: 15}}>
                <Image style={Styles.icon_} source={checkAll ? ICONS.check : ICONS.unCheck}/>
              </TouchableOpacity>
              <Text style={{fontSize: SIZES.medium, color: COLORS.txt_color, fontWeight: '600'}}>Select all</Text>
            </View>
            <View>
              <Text> </Text>
            </View>
          </View>
        <FlatList
          data={changeData}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <Item_Cart item={item}/>}
        />
      </View>
      {/* Button */}
      <View style={Styles.footer_}>
        <TouchableOpacity style={Styles.footer_btn}>
          <Text style={{fontSize: SIZES.medium, color: COLORS.txt_color, fontWeight: 'bold'}}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  header_:{
    flex: 0.25,
    width: '90%',
    // alignItems: 'center',
  },
  header_up:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 0.5,
  },
  header_down:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // width: '90%',
    marginLeft: 15,
    marginRight: 15,
    flex: 0.4,
  },
  body_:{
    flex: 0.65,
    // borderWidth: 1,
    // borderColor: 'blue',
    width: '90%',
  },
  footer_:{
    flex: 0.1,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer_btn:{
    backgroundColor: COLORS.primary,
    width: '100%',
    alignItems: 'center',
    borderRadius: 6,
    paddingTop: 10,
    paddingBottom: 10,
  },
  icon_:{
    height: 20,
    width: 20,
  },
});

export default CartScreen;
