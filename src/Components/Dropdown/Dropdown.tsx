import React from 'react'
import { Picker, StyleSheet, View } from 'react-native';
import { inputBottomColor, priColorLight } from '../../styles/styles';

interface IProps {
    options: Array<{ label: string; value: number }>;
    selected: any;
    selectedValue: any;
}

const Dropdown = (props: IProps) => {
    const items = props.options.map((option, index) => {
        return <Picker.Item key={index} label={option.label} value={option.value} />
    });


    return (
        <View style={styles.picker}>
            <Picker
                selectedValue={props.selectedValue ? props.selectedValue : 0}
                style={styles.picker}
        
                onValueChange={(itemValue, itemIndex) => props.selected(itemValue)}>
                {items}
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    picker: {
        height: 50,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: priColorLight
    }
})

export default Dropdown
