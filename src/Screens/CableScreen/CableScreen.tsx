import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Picker,
    Image,
    ImageStyle

} from 'react-native'

// @ts-ignore
import Icon from 'react-native-vector-icons/Ionicons.js';
import Container from '../../Components/Container/Container';
import { Header } from '../../Components/Header/Header';
import { marginDefault, headline6Style, body2Style, overlineStyle } from '../../styles/styles';
import Input from '../../Components/Input/Input';
import Dropdown from '../../Components/Dropdown/Dropdown';
import Button from '../../Components/Button/Button';

const title = 'Cable Tv';

interface IState {
    rechargeTypeOptions: { label: string; value: number; }[];
    selectActionOptions: { label: string; value: number; }[];
    gotvOptions: { label: string; value: number; }[];
    startimesOptions: { label: string; value: number; }[];
    dstvOptions: { label: string; value: number; }[];
    selectedRechargeType: number;
    selectedActionType: number;
    selectedPlanType: number;
    smartCardNumber: string;
}

export default class CableScreen extends Component<any, IState> {

    constructor(props) {
        super(props)
        this.state = {
            selectedRechargeType: 0,
            selectedActionType: 0,
            selectedPlanType: 0,
            smartCardNumber: '',
            rechargeTypeOptions: [
                { label: 'What Do You Want To Do?', value: 0 },
                { label: 'Pay TV Subscription', value: 1 }
            ],
            selectActionOptions: [
                { label: 'Select Type', value: 0 },
                { label: 'Dstv', value: 1 },
                { label: 'Gotv', value: 2 },
                { label: 'Startimes', value: 3 }
            ],
            gotvOptions: [
                { label: 'Gotv Value = N1,250', value: 0 },
                { label: 'Gotv Plus = N1,900', value: 1 },
                { label: 'Gotv Max = N3,200', value: 2 },
                { label: 'Gotv Mobile Access = N690', value: 3 },

            ],
            startimesOptions: [
                { label: 'Startimes Nova = N900', value: 0 },
                { label: 'Startimes Basic = N1,300', value: 1 },
                { label: 'Startimes Smart = N1,900', value: 2 },
                { label: 'Startimes Classic = N2,600', value: 3 },
                { label: 'Startimes Unique = N3,800', value: 3 },
                { label: 'Startimes Super = N3,800', value: 3 },
            ],
            dstvOptions: [
                { label: 'Dstv Access = N2,000', value: 0 },
                { label: 'Dstv Family = N4,000', value: 1 },
                { label: 'Dstv Compact = N6,800', value: 2 },
                { label: 'Dstv Compact Plus = N10,650', value: 3 },
                { label: 'Dstv Compact Plus + HD / Extraview = 12,850', value: 4 },
                { label: 'Dstv Premium = 15,800', value: 5 },
                { label: 'Dstv Premium Asia = 16,530', value: 6 },
                { label: 'Dstv Asian Bouqet = N5,050', value: 7 },
                { label: 'Dstv Mobile Maxi = N830', value: 8 },
                { label: 'Dstv Mobile Maxi Plus = N1,050', value: 9 },
                { label: 'Dstv Premium + HD / Extraview = N18,000', value: 10 },
            ]
        }
    }

    static navigationOptions = {
        drawerLabel: title,
        drawerIcon: ({ tintColor }: any) => (
            <Icon name="md-tv" size={28} color={tintColor} />
        ),
    }

    rechargeTypeSelected = value => {
        this.setState({ selectedRechargeType: value })
    }

    selectActionTypeSelected = value => {
        this.setState({
            selectedActionType: value,
            selectedPlanType: 0
        })
        console.log(value)
    }

    planTypeSelected = value => {
        this.setState({ selectedPlanType: value })
    }

    smartCardNumberHandler = value => {
        this.setState({ smartCardNumber: value })
    }

    buyCable = () => {

    }

    render() {

        const {
            selectedPlanType,
            selectedActionType,
            selectedRechargeType,
            smartCardNumber,
            rechargeTypeOptions,
            dstvOptions,
            gotvOptions,
            startimesOptions,
            selectActionOptions
        } = this.state;

        let details = null;
        let selectAction = null;
        
        switch (this.state.selectedActionType) {
            case 1:
                details = (
                    <View style={styles.card1}>
                        <Input
                            placeholder="Smart Card Number"
                            value={smartCardNumber}
                            changed={(value) => this.smartCardNumberHandler(value)}
                        />
                        <View style={{ width: '80%' }}>
                            <Dropdown
                                options={dstvOptions}
                                selectedValue={selectedPlanType}
                                selected={(value) => this.planTypeSelected(value)}
                            />
                        </View>
                        <Image
                            source={{ uri: 'https://www.rechargeandgetpaid.com/dirImages/dstv.png' }}
                            style={styles.image as ImageStyle}
                        />
                        <Button
                            title="BUY"
                            onPress={this.buyCable}
                        />
                    </View>
                );
                break;

            case 2:
                details = (
                    <View style={styles.card1}>
                        <Input
                            placeholder="Smart Card Number"
                            value={smartCardNumber}
                            changed={(value) => this.smartCardNumberHandler(value)}
                        />
                        <View style={{ width: '80%' }}>
                            <Dropdown
                                options={gotvOptions}
                                selectedValue={selectedPlanType}
                                selected={(value) => this.planTypeSelected(value)}
                            />
                        </View>
                        <Image
                            source={{ uri: 'https://www.rechargeandgetpaid.com/dirImages/gotv.png' }}
                            style={styles.image as ImageStyle}
                        />
                        <Button
                            title="BUY"
                            onPress={this.buyCable}
                        />
                    </View>
                );
                break;

            case 3:
                details = (
                    <View style={styles.card1}>
                        <Input
                            placeholder="Smart Card Number"
                            value={smartCardNumber}
                            changed={(value) => this.smartCardNumberHandler(value)}
                        />
                        <View style={{ width: '80%' }}>
                            <Dropdown
                                options={startimesOptions}
                                selectedValue={selectedPlanType}
                                selected={(value) => this.planTypeSelected(value)}
                            />
                        </View>
                        <Image
                            source={{ uri: 'https://www.rechargeandgetpaid.com/dirImages/star.jpg' }}
                            style={styles.image as ImageStyle}
                        />
                        <Button
                            title="BUY"
                            onPress={this.buyCable}
                        />
                    </View>
                );
                break;

            default:
                details = null;
                break;
        }

        if (this.state.selectedRechargeType !== 0) {
            selectAction = (
                <View style={styles.card1Inputs}>
                    <Text style={overlineStyle}>SELECT ACTION</Text>
                    <View style={styles.card1Dropdowns}>
                        <Dropdown
                            options={selectActionOptions}
                            selectedValue={selectedActionType}
                            selected={(value) => {this.selectActionTypeSelected(value)}}
                        />
                    </View>
                </View>
            );
        }

        return (
            <Container>
                <Header title={title} />
                <View style={styles.container}>
                    <View style={styles.card1}>
                        <View>
                            <Text style={headline6Style}>What Do You Want To Do?</Text>
                        </View>
                        <View style={styles.card1Inputs}>
                            <Text style={overlineStyle}>RECHARGE TYPE</Text>
                            <View style={styles.card1Dropdowns}>
                                <Dropdown
                                    options={rechargeTypeOptions}
                                    selectedValue={selectedRechargeType}
                                    selected={(value) => {
                                        //@ts-ignore
                                        this.rechargeTypeSelected(value)
                                    }}
                                />
                            </View>
                        </View>
                        {selectAction}
                    </View>
                    {details}
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: marginDefault / 2,
    },
    card1: {
        backgroundColor: 'white',
        marginBottom: marginDefault,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: marginDefault
    },
    card1Inputs: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: marginDefault,
        justifyContent: 'space-between',
        width: '100%',
    },
    card1Dropdowns: {
        flexBasis: '50%'
    },
    image: {
        height: 60,
        width: 60
    }
})