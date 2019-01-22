import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons.js';
import Container from '../../Components/Container/Container';
import { Header } from '../../Components/Header/Header';
import { baseContainer, cardStyle, headline6Style } from '../../styles/styles';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';

const title = 'Transfer / Withdraw';

export default class WithdrawScreen extends Component {

    static navigationOptions = {
        drawerLabel: title,
        drawerIcon: ({ tintColor }: any) => (
            <Icon name="md-card" size={28} color={tintColor} />
        ),
    }

    render() {
        return (
            <Container>
                <Header title={title} />
                <View style={baseContainer}>
                    <View style={cardStyle}>
                        <View>
                            <Text style={headline6Style}>Transfer Fund</Text>
                        </View>
                        <Input placeholder="Transfer Username" />
                        <Input placeholder="Amount" />
                        <Input placeholder="Transaction Password" />
                        <Button
                            title="TRANSFER"
                        />
                    </View>

                    <View style={cardStyle}>
                        <View>
                            <Text style={headline6Style}>Withdraw Fund</Text>
                        </View>
                        <Input placeholder="Withdraw Amount" />
                        <Input placeholder="Transaction Password" />
                        <Button
                            title="WITHDRAW FUND"
                        />
                    </View>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})