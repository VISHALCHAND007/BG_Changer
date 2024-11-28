import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View>
      <Text style={styles.textWhite}>Default testing text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textWhite: {
    color: '#fff'
  }
});
