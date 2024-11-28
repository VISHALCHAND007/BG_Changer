import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
const side = 60

export default function Square({color}: {color: string}) {
  return (
    <View style={[styles.squareShape, {backgroundColor: color}]}/>
  )
}

const styles = StyleSheet.create({
    squareShape: {
        height: side, 
        width: side, 
        // borderWidth: 2
        marginStart: 10
    }
})