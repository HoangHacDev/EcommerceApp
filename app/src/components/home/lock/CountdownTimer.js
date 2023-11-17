/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {useCountdown} from '../../../hooks/useCountDown';

const ShowTimer = ({ days, hours, minutes, seconds }) => {

  return (
    <View style={Styles.container}>
        <Text style={Styles.txt}>
          {days}:
        </Text>
        <Text style={Styles.txt}>
          {hours}:
        </Text>
        <Text style={Styles.txt}>
          {minutes}:
        </Text>
        <Text style={Styles.txt}>
          {seconds}
        </Text>
    </View>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <View>
      <Text>End Time !</Text>
    </View>;
  } else {
    return (
      <ShowTimer
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

const Styles = StyleSheet.create({
    container:{
        alignSelf: 'center',
        flexDirection: 'row',
        marginLeft: 15,
        backgroundColor: '#C3E703',
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
    },
    txt:{
      color: '#070707',
      fontSize: 12,
      fontWeight: '600',
    },
});

export default CountdownTimer;
