import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

// @ts-ignore
import Icon from 'react-native-vector-icons/Ionicons.js';
import Container from '../../Components/Container/Container';
import { Header } from '../../Components/Header/Header';
import { baseContainer, cardStyle, headline6Style } from '../../styles/styles';
import Dropdown from '../../Components/Dropdown/Dropdown';
import Button from '../../Components/Button/Button';

const title = 'Member Upgrade'

interface IState {
    selectedPackage: 0;
    packageOptions: { label: string; value: number }[];
}

export default class UpgradeScreen extends Component<any, IState> {

    constructor(props) {
        super(props)
        this.state = {
            selectedPackage: 0,
            packageOptions: [
                { label: 'Choose Package', value: 0 },
                { label: 'Bronze ₦5,000', value: 1 },
                { label: 'Silver ₦15,000', value: 2 },
                { label: 'Gold ₦25,000', value: 3 },
                { label: 'Diamond ₦35,000', value: 4 },
                { label: 'Platinum ₦45,000', value: 5 },
                { label: 'Executive Platinum ₦95,000', value: 6 },
            ]
        }
    }

    static navigationOptions = {
        drawerLabel: title,
        drawerIcon: ({ tintColor }: any) => (
            <Icon name="md-trending-up" size={28} color={tintColor} />
        ),
    }

    selectedPackageHandler = value => {
        this.setState({ selectedPackage: value });
    }

    render() {

        const { selectedPackage, packageOptions } = this.state;

        return (
            <Container>
                <Header title={title} />
                <View style={baseContainer}>
                    <View style={cardStyle}>
                        <View>
                            <Text style={headline6Style}>Upgrade Package</Text>
                        </View>
                        <Dropdown
                            options={packageOptions}
                            selectedValue={selectedPackage}
                            selected={(value) => this.selectedPackageHandler(value)}
                        />
                        <Button
                            title="UPGRADE"
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