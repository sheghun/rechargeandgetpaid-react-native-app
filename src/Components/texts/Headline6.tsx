import React from 'react'
import { StyleSheet, Text } from 'react-native';
import { h6Fontsize, h6FontWeight, h6Fontspacing } from '../../styles/styles';

const Headline6 = props => {
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
        fontSize: h6Fontsize,
        fontFamily: 'serif',
        fontWeight: h6FontWeight,
        letterSpacing: h6Fontspacing,
    }
})

export default Headline6
