import React, { Component } from 'react'
import {
    Text,
    View,
    SafeAreaView,
    ScrollView,
    StyleSheet
} from 'react-native'

// @ts-ignore
import Icon from 'react-native-vector-icons/Ionicons.js';
import Container from '../../Components/Container/Container';
import { Header } from '../../Components/Header/Header';
import { marginDefault, headline6Style } from '../../styles/styles';
import Table from '../../Components/Table/Table';

const title = 'Transactions';

export default class TransactionScreen extends Component<any, any> {

    constructor(props) {
        super(props)
        this.state = {
            tableData: [
                [
                    '5000',
                    'Commissions Earned: Airtime Purchase godwin01',
                    '1342134',
                    'vtu_bonus',
                    '2018-11-01 13:59:03'
                ],
                [
                    '5000',
                    'Commissions Earned: Airtime Purchase godwin01',
                    '1342134',
                    'vtu_bonus',
                    '2018-11-01 13:59:03'
                ],
                [
                    '5000',
                    'Commissions Earned: Airtime Purchase godwin01',
                    '1342134',
                    'vtu_bonus',
                    '2018-11-01 13:59:03'
                ],
                [
                    '5000',
                    'Commissions Earned: Airtime Purchase godwin01',
                    '1342134',
                    'vtu_bonus',
                    '2018-11-01 13:59:03'
                ],
            ]
        }
    }


    static navigationOptions = {
        drawerLabel: title,
        drawerIcon: ({ tintColor }: any) => (
            <Icon name="md-wallet" size={28} color={tintColor} />
        ),
    }

    render() {
        return (
            <Container>
                <Header title={title} />
                <View style={styles.container}>
                    <View style={styles.card}>
                        <View style={{marginBottom: marginDefault}}>
                            <Text style={headline6Style}>My Transactions</Text>
                        </View>
                        <Table tableData={this.state.tableData} />
                    </View>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: marginDefault
    },
    card: {
        backgroundColor: '#fff',
        elevation: 4,
        padding: marginDefault,
        height: '100%'
    }
})