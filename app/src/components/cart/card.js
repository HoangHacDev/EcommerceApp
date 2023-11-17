import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, ICONS, SIZES } from '../../Contanst';

const Card = ({item}) => {
  const [Data, setData] = React.useState(item);

  //Sử dụng hook useEffect để load lại prop nếu như prop nó thay đổi
  React.useEffect(() => {
    setData(item);
  }, [item]);

  // console.log('Previous' + '--------------------------------------');
  // console.log(item);
  // console.log('Current' + '--------------------------------------');
  // console.log(Data);

  const handleChange = (id) =>{
    if (id === Data.id){
      const newData = {...Data, isChecked: !Data.isChecked};
      setData(newData);
    } else {
      const newData = {...Data, isChecked: Data.isChecked};
      setData(newData);
    }
  };

  return (
    <View style={Styles.container_}>
      <TouchableOpacity onPress={() => handleChange(Data.id)} style={Styles.container_left_}>
        <Image style={Styles.icon_} source={Data?.isChecked ? ICONS.check : ICONS.unCheck}/>
      </TouchableOpacity>
      <View style={Styles.container_right_}>
        <View style={{width: '20%'}}>
          <Image style={Styles.icon_left} source={require('../../assets/img/T_Shirt.png')}/>
        </View>
        <View style={{flexDirection: 'column', width: '80%', paddingLeft: 10, paddingRight: 5}}>
          <View style={{}}>
            <Text style={{fontSize: 14, color: 'black', fontWeight: '600'}}>{Data?.txt}</Text>
          </View>
          <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text style={{fontSize: SIZES.medium, fontWeight: 'bold', color: COLORS.txt_color}}>$ 150</Text>
            <Text style={{fontSize: SIZES.xSmall, fontWeight: 'bold', color: COLORS.txt_color}}>Size: S, Color: Blue</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={Styles.txt_l}><Text style={Styles.txt_}>-</Text></TouchableOpacity>
                <Text style={[Styles.txt_, {paddingLeft: 3, paddingRight: 3}]}>1</Text>
              <TouchableOpacity style={Styles.txt_l}><Text style={Styles.txt_}>+</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container_:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
    marginTop: 10,
    marginBottom: 10,
  },
  container_left_:{
    width: '15%',
    paddingLeft: 5,
  },
  container_right_:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '85%',
    height: 100,
  },
  icon_:{
    height: 20,
    width: 20,
  },
  icon_left:{
    height: 55,
    width: 55,
  },
  txt_:{
      fontSize: SIZES.medium,
      fontWeight: 'bold',
      color: COLORS.txt_color,
  },
  txt_l:{
      borderColor: 'red',
      borderWidth: 1.2,
      borderRadius: 2,
      paddingLeft: 7,
      paddingRight: 7,
      // padding: 1,
  },
});

export default Card;
