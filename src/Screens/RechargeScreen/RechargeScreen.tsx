
import React, { Component } from 'react';

import {
    StyleSheet,
    TextInput,
    View,
    Image,
    Picker,
    ImageStyle
} from 'react-native';

// @ts-ignore
import Icon from 'react-native-vector-icons/Ionicons.js';
import Container from '../../Components/Container/Container';
import Header from '../../Components/Header/Header';
import Input from '../../Components/Input/Input';
import Dropdown from '../../Components/Dropdown/Dropdown';

import {
    baseContainer,
    marginDefault,
    baseBg
} from '../../styles/styles';

import Button from '../../Components/Button/Button';
const title = 'Recharge';

interface IState {
    mobileNumber: string;
    airtimeOptions: { label: string, value: number }[];
    selectedAirtimeOptions: number;
}

export default class RechargeScreen extends Component<any, IState> {

    image: string;

    constructor(props) {
        super(props)
        this.image = 'https://www.rechargeandgetpaid.com/dirImages/mtn-thumbNG3.png';
        this.state = {
            mobileNumber: '',
            selectedAirtimeOptions: 0,
            airtimeOptions: [
                { label: 'Buy Data', value: 0 },
                { label: 'Buy Airtime', value: 1 }
            ]
        }
    }

    static navigationOptions = {
        drawerLabel: `${title}`,
        drawerIcon: ({ tintColor }: any) => (
            <Icon name="md-bulb" size={28} color={tintColor} />
        ),
    }

    buyHandler = () => {
        alert('worling')
    }

    mobileNumberHandler = value => {
        this.setState({ mobileNumber: value })
    }

    onSelectAirtimeOptions = value => {
        this.setState({ selectedAirtimeOptions: value });
    }

    render() {
        return (
            <Container>
                <Header title={title} />
                <View style={[baseContainer, styles.container]}>
                    {/* <View style={styles.inputContainer}> */}
                    <View style={{width: '80%'}}>
                        <Input
                            placeholder="Mobile Number"
                            value={this.state.mobileNumber}
                            changed={this.mobileNumberHandler}
                        />
                    </View>
                    <Button
                        title=" VERIFY MOBILE"
                    />
                    <Image source={{ uri: this.image }} style={styles.image as ImageStyle
                    } />
                    <View style={{ width: '80%' }}>
                        <Dropdown
                            options={this.state.airtimeOptions}
                            selected={(value) => this.onSelectAirtimeOptions(value)}
                            selectedValue={this.state.selectedAirtimeOptions}
                        />
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Amount"
                        underlineColorAndroid="transparent"
                    />
                    <Button
                        title=" BUY"
                    />
                </View>
                {/* </View> */}
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white',
        margin: marginDefault,
        justifyContent: 'center',
        paddingTop: '4%',
    },
    input: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        width: '70%'
    },

    inputContainer: {
        alignItems: 'center',
        backgroundColor: '#fff',
        elevation: 4,
        padding: marginDefault,
        paddingBottom: marginDefault / 2,
        width: '80%',
    },

    button: {
        backgroundColor: '#F6BB18',
        borderRadius: 5,
        marginTop: '3%'
    },
    image: {
        height: 50,
        width: 50,
        margin: 16
    }
})