import React from 'react'
import { TextInput, StyleSheet, TextStyle } from 'react-native';
import { body2Style } from '../../styles/styles';

interface IProps{
    placeholder: string;
    value: string;
    changed: any;
}

const Input = (props: IProps) => {
    return (
        <TextInput
            style={[styles.input, body2Style]}
            placeholder={props.placeholder}
            value={props.value}
            onChangeText={(value) => props.changed(value)}
            underlineColorAndroid="transparent"
        />
    )
}
const styles = StyleSheet.create({
    input: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        textAlign: 'center',
        width: '100%',
        
    } as TextStyle,
})
export default Input
