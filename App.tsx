import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';

import LoginScreen from './src/Screens/Auth/LoginScreen';
import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import AuthLoadingScreen from './src/Screens/Auth/AuthLoading';
import RechargeScreen from './src/Screens/RechargeScreen/RechargeScreen';
import CableScreen from './src/Screens/CableScreen/CableScreen';
import BillScreen from './src/Screens/BillsScreen/BillsScreen';
import TransactionScreen from './src/Screens/TransactionsScreen/TransactionsScreen';
import ProfileView from './src/Screens/ProfileScreen/ProfileView';
import ProfileUpdate from './src/Screens/ProfileScreen/ProfileUpdate';
import NetworkScreen from './src/Screens/NetworkScreen/NetworkScreen';
import UpgradeScreen from './src/Screens/UpgradeScreen/UpgradeScreen';
import WithdrawScreen from './src/Screens/WithdrawScreen/WithdrawScreen';
import NavigationService from './src/Services/NavigationService';
import Drawer from './src/Components/Drawer/Drawer';
import { activeItemColor, activeItemBackgroundColor, body2Style, marginDefault, deviceWidth } from './src/styles/styles';

class FakeProfileScreen extends React.Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }: any) => {
            return (
                Platform.OS === 'ios' ?
                    <Icon name="ios-person" size={28} color={tintColor} /> :
                    <Icon name="md-person" size={28} color={tintColor} />
            )
        },
    };
    render() {
        return (
            <Text>Fake Screen</Text>
        );
    }
}

const AppStack = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen,

        },
        Recharge: {
            screen: RechargeScreen
        },
        Cable: {
            screen: CableScreen
        },
        Bills: {
            screen: BillScreen
        },
        Transaction: {
            screen: TransactionScreen
        },
        Profile: {
            screen: FakeProfileScreen
        },
        Profile_View: {
            screen: ProfileView
        },
        Profile_Update: {
            screen: ProfileUpdate
        },
        Upgrade: {
            screen: UpgradeScreen
        },
        Withdraw: {
            screen: WithdrawScreen
        }
    },
    {
        contentComponent: Drawer, 
        contentOptions: {
            activeTintColor: activeItemColor,
            activeBackgroundColor: activeItemBackgroundColor,
            labelStyle: {
                // ...body2Style as any,
                fontFamily: 'serif',
                fontWeight: '400',
                marginLeft: marginDefault * 2
            },
            // @ts-ignore
            itemContainerStyle: {
                // width: '30%'
            },
            itemStyle: {
                marginLeft: 1,
                flexDirection: 'row',
                // width: 20
            },
        },
        drawerType: 'slide',
        drawerWidth: (80/ 100) * deviceWidth
    }
);

const AuthStack = createStackNavigator({
    Login: {
        screen: LoginScreen
    }
});

const RootStack = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack
    },
    {
        initialRouteName: 'AuthLoading'
    }
)

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <RootStack
                ref={(ref) => NavigationService.setTopLevelNavigator(ref)}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
