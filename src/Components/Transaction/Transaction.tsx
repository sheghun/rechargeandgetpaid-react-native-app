import React from 'react'
import { TextBody } from '../../Screens/HomeScreen/HomeScreen';
import { View, StyleSheet, Text, TextStyle } from 'react-native';
import { marginDefault, secBaseBg, headline4Style, priColor, deviceWidth } from '../../styles/styles';
import Aux from '../Aux/Aux';

interface IProps {
    transData: { amount: number, description: any, transId: any, status: any, date: any }[]
}

const Transaction = ({ transData }: IProps) => {
    const texts = transData.map((data, index) => (
        <View
            style={{ marginBottom: marginDefault * 3 }}
            key={index}
        >
            <TextBody
                text={`Amount: ${data.amount.toLocaleString()}`}
            />
            <TextBody
                text={`${data.description}`}
            />
            <TextBody
                text={`Trans_ID ${data.transId}`}
            />
            <TextBody
                text={`Status: ${data.status}`}
            />
            <TextBody
                text={`Date: ${data.date}`}
            />
        </View>
    ));
    return (
        <Aux>
            <View style={styles.lastTransac}>
                <Text style={[headline4Style, styles.heading] as TextStyle}>My Last Transaction</Text>
                {texts}
            </View>
        </Aux >
    )
}

const styles = StyleSheet.create({
    lastTransac: {
        backgroundColor: secBaseBg,
        padding: marginDefault,
        width: deviceWidth,
    },
    heading: {
        color: priColor,
        marginBottom: marginDefault * 3,
        textAlign: 'center',
    }
})

export default Transaction
