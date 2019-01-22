import React, { Component, ComponentElement } from 'react'
import { Text, View, StyleSheet, Platform, ScrollView } from 'react-native'
import {
    baseText,
    baseContainer,
    stylesSubscribe,
    body1Fontsize,
    priColorDark,
    deviceHeight,
    deviceWidth,
    overlineStyle,
    headline4Style,
    secColorDark,
    secColor,
    secColorLight,
    secColorOverlay,
    headline3Style,
    marginDefault,
    h2Fontsize,
    h1Fontsize,
    h6Fontsize,
    h5Fontsize,
    headline5Style,
    body2Style,
    headline2Style,
    activeItemBackgroundColor,
    activeItemColor,
    priColor,
    baseBg,
    secBaseBg,
    subtitle1Style,
    subtitle2Style,
} from '../../styles/styles';

import Icon from 'react-native-vector-icons/Ionicons';

import { Subscription } from 'rxjs';
import Textbody1 from '../../Components/texts/Textbody1';
import Header from '../../Components/Header/Header';
import Container from '../../Components/Container/Container';
import { NavigationScreenProp } from 'react-navigation';
import Table from '../../Components/Table/Table';
import Transaction from '../../Components/Transaction/Transaction';

interface props {
    navigation: NavigationScreenProp<any, any>
}

const title = 'Dashboard';
export const TextBody = ({ text }) => <Text style={[body2Style, { fontSize: 16 }]}>{text}</Text>;
const TextSubtitle = ({ text }) => (
    <Text style={subtitle2Style}>{text}</Text>
);

export class HomeScreen extends Component<props, any> {

    subscriber: Subscription;

    constructor(props: props) {
        super(props)
        this.state = {
            transData: [
                {
                    amount: 5000,
                    description: 'Comission Earned Airtime Purcharse from godwin01',
                    transId: 13423421,
                    status: 'vtu_bonus',
                    date: Date.now()
                },
                {
                    amount: 5000,
                    description: 'Comission Earned Airtime Purcharse from godwin01',
                    transId: 13423421,
                    status: 'vtu_bonus',
                    date: Date.now()
                },
                {
                    amount: 5000,
                    description: 'Comission Earned Airtime Purcharse from godwin01',
                    transId: 13423421,
                    status: 'vtu_bonus',
                    date: Date.now()
                },

            ]
        }
    }

    static navigationOptions = {
        drawerLabel: title,
        drawerIcon: ({ tintColor }: any) => {
            return (
                Platform.OS === 'ios' ?
                    <Icon name="ios-home" size={28} color={tintColor} /> :
                    <Icon name="md-home" size={28} color={tintColor} />
            )
        },
    }

    componentDidMount() {
        this.subscriber = stylesSubscribe.subscribe((any) => {
            styleFunc()
            this.forceUpdate();
        })
    }

    componentWillUnmount() {
        this.subscriber.unsubscribe();
    }

    toggleDrawer = () => {
        this.props.navigation.openDrawer();
    }

    render() {
        const { transData } = this.state;
        return (
            <Container noScroll={false}>
                <Header title={title} />
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={[baseContainer, { backgroundColor: baseBg }]}>
                        <View style={styles.cards}>
                            <Text style={body2Style}>Withdraw Amount</Text>
                            <Text style={[headline3Style, { color: priColor }]}>₦1,200</Text>
                            <Text>__</Text>
                        </View>

                        <View style={styles.cards}>
                            <Text style={body2Style}>Total Funds Recieved</Text>
                            <Text style={[headline3Style, { color: priColor }]}>₦1,200</Text>
                            <Text>__</Text>
                        </View>

                        <View style={styles.cards}>
                            <Text style={body2Style}>Total Account Balance</Text>
                            <Text style={[headline3Style, { color: priColor }]}>₦1,200</Text>
                            <Text>__</Text>
                        </View>

                        <View style={[styles.cards, { padding: 0 }]}>
                            <View style={styles.cardsHeading}>
                                <Text style={[styles.headingText, headline4Style]}>Point Value</Text>
                            </View>
                            <View style={styles.pvTextContainer}>
                                <View>
                                    <Text style={[headline5Style, styles.pvText]}>__</Text>
                                    <TextSubtitle
                                        text="Monthly Pv"
                                    />
                                </View>
                                <View>
                                    <Text style={[headline5Style, styles.pvText]}>150</Text>
                                    <TextSubtitle
                                        text="Total Cummulative Pv"
                                    />
                                </View>
                                <View>
                                    <Text style={[headline5Style, styles.pvText]}>__</Text>
                                    <TextSubtitle
                                        text="Award Point"
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={[styles.cards, { padding: 0 }]}>
                            <View style={[styles.cardsHeading, { backgroundColor: secColor }]}>
                                <Text style={[styles.headingText, headline4Style]}>My Network</Text>
                            </View>
                            <View style={styles.pvTextContainer}>
                                <View>
                                    <Text style={[headline5Style, styles.pvText]}>$0</Text>
                                    <TextSubtitle
                                        text="Total Dollar Balance"
                                    />
                                </View>
                                <View>
                                    <Text style={[headline5Style, styles.pvText]}>GH₵0</Text>
                                    <TextSubtitle
                                        text="Total Cedi Balance"
                                    />
                                </View>
                                <View>
                                    <Text style={[headline5Style, styles.pvText]}>5</Text>
                                    <TextSubtitle
                                        text="Directly Enrolled"
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <Transaction
                        transData={transData}
                    />
                </ScrollView>
            </Container>
        )
    }
}


let styles;




function styleFunc() {
    let cardWrapperHeight = (35 / 100) * deviceHeight;

    if (deviceHeight < 500) {
        cardWrapperHeight = 300
    }
    let smallCardHeight = (48 / 100) * cardWrapperHeight;
    let bigCardHeight = (68 / 100) * cardWrapperHeight;
    let flexCard1override: any = undefined;
    let smallCard1override: any = undefined;


    if (deviceWidth > 700) {

        flexCard1override = {
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexBasis: '49.5%'
        }

        smallCard1override = {
            width: '48%',
            height: bigCardHeight
        }

    }

    let universal = {
        borderRadius: 6,
        elevation: 4,
        padding: 16 / 2,
        paddingTop: 12,
    }
    styles = StyleSheet.create({
        cards: {
            backgroundColor: secBaseBg,
            height: (21 / 100) * deviceHeight,
            marginBottom: 24,
            minHeight: 110,
            padding: marginDefault,
            width: '100%'
        },
        cardsHeading: {
            backgroundColor: priColor,
            color: '#fff',
            justifyContent: 'center',
            height: '35%',
            width: '100%'
        },
        headingText: {
            textAlign: 'center',
            color: '#fff'
        },
        pvTextContainer: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 16
        },
        pvText: {
            textAlign: 'center'
        },
        lastTransac: {
            backgroundColor: secBaseBg,
            padding: marginDefault,
            width: deviceWidth,
        }
    })
}
styleFunc();

// stylesSubscribe.subscribe(value => styleFunc());

// const mapStateToProps = (state: { nav: {} }) => ({
//   nav: state.nav
// })

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     onAddAction: () => dispatch(addAction())
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

export default HomeScreen
