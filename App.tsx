import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Circle from './components/Circle';
import Square from './components/Square';
import Triangle from './components/Triangle';

export default function App() {
  const [randomBackgroundColor, setRandomBackgroundColor] = useState('#DFFFFD');
  const [circleColor, setCircleColor] = useState('#A7FC00');
  const [squareColor, setSquareColor] = useState('#3AB09E');
  const [triangleColor, setTriangleColor] = useState('#FFBF00');

  //function to generate a random color
  const generateRandomColor = () => {
    let newCircleColor = generateColor;
    let newTriangleColor = generateColor;
    let newSquareColor = generateColor;
    let newBgColor = generateColor;

    setRandomBackgroundColor(newBgColor);
    setCircleColor(newCircleColor);
    setSquareColor(newSquareColor);
    setTriangleColor(newTriangleColor);
  };
  function generateColor(): string {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    //generating random color
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <>
      <StatusBar backgroundColor={'#000000'} />
      <SafeAreaView
        style={[styles.container, {backgroundColor: randomBackgroundColor}]}>
        <View style={[{backgroundColor: randomBackgroundColor}]}>
          <View style={styles.containerColumn}>
            <Triangle color={triangleColor} />
            <View style={styles.containerRow}>
              <Circle color={circleColor} />
              <Square color={squareColor} />
            </View>
          </View>
          <TouchableOpacity onPress={generateRandomColor}>
            <View style={styles.actionBtn}>
              <Text style={styles.actionBtnTxt}>Change Background</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 8,
    backgroundColor: '#39A78D',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 1, 
    borderColor: '#36454F'
  },
  actionBtnTxt: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 400,
    textTransform: 'uppercase',
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 80,
    alignItems: 'center',
  },
  containerColumn: {
    flexDirection: 'column',
  },
});
