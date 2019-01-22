import React from 'react'
import { StyleSheet, Text } from 'react-native';
import { h5Fontsize, h5FontWeight, h5Fontspacing } from '../../styles/styles';

const Headline5 = props => {
    const styles = Headline6styles;
    return (
        <Text
        {...props}
            style={[styles.text, props.style]}
        >
            {props.children}
        </Text>
    );
}

export const Headline6styles = StyleSheet.create({
    // @ts-ignore
    text: {
        fontSize: h5Fontsize,
        fontFamily: 'Roboto',
        fontWeight: h5FontWeight,
        letterSpacing: h5Fontspacing,
    }
})

export default Headline5;
