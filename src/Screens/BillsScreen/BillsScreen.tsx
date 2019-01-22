import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

// @ts-ignore
import Icon from 'react-native-vector-icons/Ionicons.js';
import Container from '../../Components/Container/Container';
import Header from '../../Components/Header/Header';
import { marginDefault, headline6Style, body2Style } from '../../styles/styles';
import Input from '../../Components/Input/Input';
import Dropdown from '../../Components/Dropdown/Dropdown';
import Button from '../../Components/Button/Button';

const title = 'Bills Payment'

interface IState {
    selectedDistributionType: number;
    selectedMeterType: number;
    meterNo: string;
    amountToPay: string;
    phoneNo: string;
    email: string;
    distributionOptions: { label: string; value: number }[];
    meterTypeOptions: { label: string; value: number; }[];
}

export default class BillScreen extends Component<any, IState> {

    constructor(props) {
        super(props)
        this.state = {
            selectedDistributionType: 0,
            selectedMeterType: 0,
            meterNo: '',
            amountToPay: '',
            phoneNo: '',
            email: '',
            distributionOptions: [
                { label: 'Choose Distributor', value: 0 },
                { label: 'Ibadan Electricity Distribution Company (IBEDC)', value: 1 },
                { label: 'Port Harcourt Electricity Company', value: 2 },
                { label: 'Ikeja Electricity Distribution Company (IEDC)', value: 3 },
            ],
            meterTypeOptions: [
                { label: 'Choose Type...', value: 0 },
                { label: 'Prepaid', value: 1 },
                { label: 'Postpaid', value: 2 }
            ],
        }
    }

    static navigationOptions = {
        drawerLabel: title,
        drawerIcon: ({ tintColor }: any) => (
            <Icon name="md-bulb" size={28} color={tintColor} />
        ),
    }

    meterNoHander = value => {
        this.setState({ meterNo: value })
    }

    distributionOptionsHandler = value => {
        this.setState({ selectedDistributionType: value })
    }

    meterTypeOptionsHandler = value => {
        this.setState({ selectedMeterType: value })
    }

    amounToPayHandler = value => {
        this.setState({ amountToPay: value })
    }

    phoneNoHandler = value => {
        this.setState({ phoneNo: value })
    }

    emailHandler = value => {
        this.setState({ email: value })
    }

    submit = () => {
        alert(this.state.amountToPay)
    }

    render() {

        const {
            meterNo,
            amountToPay,
            phoneNo,
            email,
            meterTypeOptions,
            selectedMeterType,
            distributionOptions,
            selectedDistributionType
        } = this.state;

        return (
            <Container noScroll>
                <Header title={title} />
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.container}>
                        <View style={styles.card}>
                            <View>
                                <Text style={headline6Style}>Pay For Electricity Online</Text>
                            </View>
                            <View>
                                <Input
                                    placeholder="Account No/Meter No"
                                    changed={(value) => this.meterNoHander(value)}
                                    value={meterNo}
                                />
                                <View style={{ marginTop: marginDefault }}>
                                    <Text style={body2Style}>Available Distributors</Text>
                                    <Dropdown
                                        options={distributionOptions}
                                        selectedValue={selectedDistributionType}
                                        selected={(value) => this.distributionOptionsHandler(value)}
                                    />
                                </View>
                                <View style={{ marginTop: marginDefault, marginBottom: marginDefault }}>
                                    <Text style={body2Style}>Select Meter Type</Text>
                                    <Dropdown
                                        options={meterTypeOptions}
                                        selectedValue={selectedMeterType}
                                        selected={(value) => this.meterTypeOptionsHandler(value)}
                                    />
                                </View>
                                <Input
                                    placeholder="Amount To Pay"
                                    value={amountToPay}
                                    changed={(value) => this.amounToPayHandler(value)}

                                />
                                <Input
                                    placeholder="Phone Number"
                                    value={phoneNo}
                                    changed={(value) => this.phoneNoHandler(value)}
                                />
                                <Input
                                    placeholder="Email Address"
                                    value={email}
                                    changed={(value) => this.emailHandler(value)}
                                />
                            </View>
                            <Button
                                title="VERIFY BUSINESS"
                                onPress={this.submit}
                            />
                        </View>
                    </View>
                </ScrollView>
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
        padding: marginDefault
    }
})

