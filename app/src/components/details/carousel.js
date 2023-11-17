/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import { View, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {CarouselCard} from '../../components/index';
import Data from '../../data/CarouselDataFake';

const SLIDER_WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselDetals = () => {
    const isCarousel  = React.useRef(null);
    const [index, setIndex] = React.useState(0);

  return (
   <View style={Styles.container}>
    <Carousel
        layout={'stack'}
        layoutCardOffset={'18'}
        ref={isCarousel}
        data={Data}
        autoplay={true}
        renderItem={CarouselCard}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
      />
      <Pagination
        dotsLength={Data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
   </View>
  );
};

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default CarouselDetals;
