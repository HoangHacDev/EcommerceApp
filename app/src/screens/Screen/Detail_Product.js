import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import React, {useState, useCallback} from 'react';
import { COLORS, SIZES } from '../../Contanst/index';
import {HeaderCPN, CarouselDetail, AddCartBTN, SizeRadioBtn} from '../../components/index';
import SizeClothes from '../../data/SizeData';
import ColorClothes from '../../data/ColorData';

const Detail = ({ navigation }) => {
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore,setLengthMore] = useState(false); //to show the "Read more & Less Line"
  const toggleNumberOfLines = () => { //To toggle the show text or hide it
      setTextShown(!textShown);
  };

  const onRadioButtonPress = (itemIdx, data) => {
    if (data.size !== undefined){
      setSize(data.size);
    } else if (data.color !== undefined){
      setColor(data.color);
    } else {
      console.log('You are not select size and color !');
    }
  };

  const onTextLayout = useCallback(e =>{
    setLengthMore(e.nativeEvent.lines.length >= 4); //to check the text is more than 4 lines or not
    // console.log(e.nativeEvent);
  },[]);

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.header}>
        <HeaderCPN navigation={navigation}/>
      </View>
      <View style={Styles.body}>
        <ScrollView style={Styles.body_info} showsVerticalScrollIndicator={false}>
          {/* Carousel */}
          <CarouselDetail/>
          <View style={Styles.body_info_header}>
            <Text style={{
              fontSize: SIZES.xLarge,
              color: COLORS.txt_color,
              fontWeight: 'bold',
            }}>T-Shirt, White</Text>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10,
            }}>
              <View style={{
                  flexDirection: 'row',
                  borderColor: '#BEBEBE',
                  borderRadius: 10,
                  borderWidth: 1,
                  padding: 8,
                  paddingLeft: 20,
                  paddingRight: 20,
                }}>
                <Image style={
                    [Styles.icon_, {
                      tintColor: COLORS.secondary,
                      marginRight: 6,
                      marginTop: 1,
                    }]
                  } source={require('../../assets/img/star.png')}/>
                <Text style={{
                  marginRight: 6,
                  color: COLORS.txt_color,
                  fontWeight: 'bold',
                }}>4.8</Text>
                <Text>117 Reviews</Text>
              </View>
              <View style={{
                  flexDirection: 'row',
                  borderColor: '#BEBEBE',
                  borderRadius: 10,
                  borderWidth: 1,
                  padding: 8,
                  // marginRight: 6,
                  paddingLeft: 20,
                  paddingRight: 20,
                }}>
                <Image style={[Styles.icon_, {
                    tintColor: '#220A40',
                    marginRight: 6,
                    marginTop: 1,
                  }]} source={require('../../assets/img/like.png')}/>
                <Text style={{
                  color: COLORS.txt_color,
                  fontWeight: 'bold',
                }}>94%</Text>
              </View>
              <View style={{
                  flexDirection: 'row',
                  borderColor: '#BEBEBE',
                  borderRadius: 10,
                  borderWidth: 1,
                  padding: 8,
                  paddingLeft: 20,
                  paddingRight: 20,
                }}>
                <Image style={[Styles.icon_, {
                  marginRight: 6,
                  marginTop: 2,
                }]} source={require('../../assets/img/chat.png')}/>
                <Text style={{
                  color: COLORS.txt_color,
                  fontWeight: 'bold',
                }}>8</Text>
              </View>
            </View>
            {/* Choose size */}
            <View style={{
              // backgroundColor: 'gray',
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
              }}>
              <Text style={{
                fontSize: SIZES.medium,
                color: COLORS.txt_color,
                fontWeight: '600',
                marginRight: 12,
              }}>Size : </Text>
              <SizeRadioBtn values={SizeClothes} onPress={onRadioButtonPress}/>
            </View>
            {/* Choose color */}
            <View style={{
              // backgroundColor: 'gray',
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
              }}>
              <Text style={{
                fontSize: SIZES.medium,
                color: COLORS.txt_color,
                fontWeight: '600',
                marginRight: 5,
              }}>Color : </Text>
              <SizeRadioBtn values={ColorClothes} onPress={onRadioButtonPress}/>
            </View>
          </View>
          <View style={Styles.body_info_header_}>
                <View style={{
                  flexDirection: 'row',
                  marginLeft: 20,
                }}>
                  <Text style={{
                    fontSize: SIZES.medium,
                    fontWeight: 'bold',
                    color: COLORS.txt_color,
                  }}>$ 200.00</Text>
                  <Text style={{
                    marginLeft: 15,
                    marginTop: 1,
                  }}>from $67 per month</Text>
                </View>
                <View>
                  <Image style={[
                    Styles.icon_,
                  ]} source={require('../../assets/img/information.png')}/>
                </View>
          </View>
          <View style={Styles.body_info_des}>
                  <Text
                    style={{lineHeight: 21, fontSize: 14}}
                    onTextLayout={onTextLayout}
                    numberOfLines={textShown ? undefined : 4}
                  >
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not
                    only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum passages, and
                    more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                  </Text>
                  {
                    lengthMore ?
                      <Text style={{color: COLORS.txt_color, fontWeight: 'bold'}} onPress={toggleNumberOfLines}>
                      {textShown ? 'Read less' : 'Read more'}
                      </Text>
                      : null
                  }
          </View>
        </ScrollView>
      </View>
      <View style={Styles.footer}>
        <AddCartBTN/>
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.backgroud_base,
    },
    header: {
        flex: 0.08,
        justifyContent: 'center',
        alignItems: 'center',
    },
    body:{
        flex: 0.84,
        alignItems: 'center',
    },
    body_info:{
      width: '85%',
    },
    body_info_header:{
      flexDirection: 'column',
    },
    body_info_header_:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
    },
    body_info_des:{
      marginTop: 20,
      marginBottom: 8,
    },
    icon_:{
      height: 16,
      width: 16,
    },
    footer:{
        flex: 0.08,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
    },
});

export default Detail;
