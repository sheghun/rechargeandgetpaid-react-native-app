import React from 'react'
import { Text, StyleSheet, TouchableOpacity, View, Platform, TouchableNativeFeedback } from 'react-native';
import { secColor, buttonStyle, priColor } from '../../styles/styles';

const Button = (props: any) => {

    return (
        Platform.OS === 'ios' ? (
            <TouchableOpacity onPress={props.onPress} disabled={false}>
                <View style={[styles.button, props.style]}>
                    <Text style={[buttonStyle, {textAlign: 'center', color: 'white'}]}>{props.title}</Text>
                </View>
            </TouchableOpacity>) :

            (<TouchableNativeFeedback onPress={props.onPress} disabled={false}>
                <View style={[styles.button, props.style]}>
                    <Text style={[buttonStyle, {textAlign: 'center', color: 'white'}]}>{props.title}</Text>
                </View>
            </TouchableNativeFeedback>)
    );
}

const styles = StyleSheet.create({
    button: {
        elevation: 2,
        padding: 10,
        margin: 8,
        color: 'white',
        backgroundColor: priColor
    },
})


export default Button
