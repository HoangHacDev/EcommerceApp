/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, LogBox , Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import React,{useEffect} from 'react';
import { COLORS, SIZES, dateTimeAfterThreeDays} from '../../Contanst/index';

//Components
import { DiscountCPN, CountdownTimer, SearchCPN, AddressCPN, NotifiCPN, SlideCPN, CardHor, CardVer } from '../../components';

import DataFake from '../../data/FakeDate';

const HomeScreen = ({navigation}) => {

  //UPDATE RN V0.63 ABOVE
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <SafeAreaView style={Styles.container}>
      {/* header */}
      <View style={Styles.header}>
        <View style={Styles.header_top}>
          <DiscountCPN/>
          <AddressCPN/>
          <NotifiCPN/>
        </View>
        <View style={Styles.header_center}>
            <SearchCPN/>
        </View>
        <View style={Styles.header_bottom}>
          <SlideCPN />
        </View>
      </View>
      {/* body */}
      <ScrollView showsVerticalScrollIndicator={false} style={Styles.body}>
        <View>
          <View >
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
              <Text style={{
                fontSize: SIZES.large,
                color: '#070707',
                fontWeight: '800',
              }}>Categories</Text>
              <TouchableOpacity style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              }}>
                <Text>See All</Text>
                <Image style={{
                  height: 10,
                  width: 10,
                  marginLeft: 10,
                }} source={require('../../assets/img/right_arrow.png')}/>
              </TouchableOpacity>
            </View>
          </View>
            <View>
              <FlatList
                // data={DataFake.splice(0,3)}
                data={DataFake}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => <CardHor data={item} />}
              />
            </View>
          </View>
        <View>
          <View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{
                    fontSize: SIZES.large,
                    color: '#070707',
                    fontWeight: '800',
                  }}>Flash Sale</Text>
                  <CountdownTimer targetDate={dateTimeAfterThreeDays} />
                </View>
                <TouchableOpacity style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                }}>
                  <Text>See All</Text>
                  <Image style={{
                    height: 10,
                    width: 10,
                    marginLeft: 10,
                  }} source={require('../../assets/img/right_arrow.png')}/>
                </TouchableOpacity>
            </View>
          </View>
          <View style={Styles.flatList}>
              <FlatList
                // data={DataFake.splice(0,3)}
                data={DataFake}
                numColumns={2}
                key={2}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => <CardVer navigation={navigation} data={item} />}
              />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroud_base,
  },
  header:{
    flex: 0.50,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  header_top:{
    height: '37.5%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  header_center:{
    height: '37.5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header_bottom:{
    height: '37.5%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header_slide:{
    width: '90%',
  },
  body:{
    flex: 0.5,
    borderWidth: 2,
    borderColor: '#F0F1F2',
    height: '100%',
    // width: '100%',
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'column',
  },
  flatList:{
    borderWidth: 1,
    borderColor: '#F0F1F2',
    alignItems: 'center',
    marginTop: 15,
  },
});


export default HomeScreen;
