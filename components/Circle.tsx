import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
const side = 150;

export default function Circle({color}: {color: string}) {
  return <View style={[styles.shape, {backgroundColor: color}]} />;
}

const styles = StyleSheet.create({
  shape: {
    borderRadius: side / 2,
    // borderWidth: 2,
    height: side,
    width: side,
  },
});
