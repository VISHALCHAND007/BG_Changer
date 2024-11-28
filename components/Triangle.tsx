import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
const side = 150

export default function Triangle({color}: {color: string}) {
  return <View style={[styles.shapeTriangle, {borderBottomColor: color}]} />;
}

const styles = StyleSheet.create({
  shapeTriangle: {
    marginBottom: 30,
    marginStart:30,
    height: 0, 
    width: 0, 
    borderLeftWidth: side/2,
    borderRightWidth: side /2,
    borderBottomWidth: side, 
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
});
