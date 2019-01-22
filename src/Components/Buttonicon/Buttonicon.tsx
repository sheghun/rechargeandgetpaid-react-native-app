
import React from 'react'
import { TouchableOpacity, TouchableNativeFeedback, Platform, View } from 'react-native';

interface props {
    onPress: any;
    children: any;
    style: any
}
const Buttonicon = (props: props) => {
    if (Platform.OS === 'ios') {
        return (
            <TouchableOpacity
                onPress={props.onPress}
                hitSlop={{ top: 24, left: 24, bottom: 24, right: 24 }}
            >
                {props.children}
            </TouchableOpacity>
        )
    } else {
        return (
            <TouchableNativeFeedback
                onPress={props.onPress}
                hitSlop={{ top: 24, left: 24, bottom: 24, right: 24 }}
            >
                <View style={props.style}>
                    {props.children}
                </View>
            </TouchableNativeFeedback>
        )
    }
}

export default Buttonicon
