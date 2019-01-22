
import React from 'react'
import { Text, StyleSheet } from 'react-native';
import { baseText, body1Fontsize, body1Fontspacing } from '../../styles/styles';


const Textbody1 = ({ children }: any) => {
  return (
    <Text style={[baseText, styles.text]}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto',
    fontSize: body1Fontsize,
    letterSpacing: body1Fontspacing,
  }
});

export default Textbody1;
