import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    ViewStyle,
    Platform,
} from 'react-native'
import {
    stylesSubscribe,
    priColorText,
    priColor,
    deviceHeight,
    deviceWidth,
    baseBg,
    marginDefault,
    headline6Style,
    h6Fontsize
} from '../../styles/styles';
import { Subscription } from 'rxjs';

import Icon from 'react-native-vector-icons/Ionicons';
import Headline6, { Headline6styles } from '../texts/Headline6';
import Buttonicon from '../Buttonicon/Buttonicon';
import { NavigationScreenProp, withNavigation } from 'react-navigation';
import NavigationService from '../../Services/NavigationService';

interface props {
    navigation: NavigationScreenProp<any, any>,
}


export class Header extends Component<any, {}> {

    subscriber: Subscription;
    menubar: string;

    componentDidMount() {
        this.subscriber = stylesSubscribe.subscribe((value) => {
            styleFunc();
            this.forceUpdate()
        })
        this.menubar =
            Platform.OS === 'ios' ? 'ios-' : 'md-';

        this.menubar += 'menu';
    }

    componentWillUnmount() {
        this.subscriber.unsubscribe();
    }

    toggleDrawer = () => {
        NavigationService.toggleDrawer();
    }


    render() {

        let menubar = Platform.OS === 'ios' ? 'md-' : 'md-';
        menubar += 'menu';
        return (
            <View style={[
                styles.container,
            ] as ViewStyle}>

                <View
                    style={styles.wrappertext}
                >
                    <Buttonicon
                        onPress={this.toggleDrawer}
                        style={{}}
                    >
                        <Headline6 style={styles.icon}>
                            <Icon
                                name={menubar}
                                style={styles.icon}
                            />
                        </Headline6>
                    </Buttonicon>

                    <Text style={[styles.text]}>
                        {this.props.title}
                    </Text>

                </View>




            </View>
        )
    }
}
let styles;
function styleFunc() {

    let headerWidth;
    let headerHeight;
    let headerPadding;
    let headerPaddingTop;


    const xsmallScreens = deviceHeight < 640;
    const smallScreens = deviceHeight >= 640 && deviceHeight <= 670
    switch (true) {
        case xsmallScreens:
            headerHeight = 48;
            break;
        case smallScreens:
            headerHeight = 56;
            break;
        default:
            headerHeight = 64;
            break;
    }
    headerWidth = deviceWidth;
    headerPadding = (5.277 / 100) * deviceWidth;
    headerPaddingTop = (3 / 100) * deviceHeight;

    styles = StyleSheet.create({
        container: {
            backgroundColor: baseBg,
            height: headerHeight,
            justifyContent: 'center',
            marginTop: marginDefault * 2.5,
            marginBottom: marginDefault * 2,
            paddingTop: headerPaddingTop,
            paddingRight: headerPadding,
            paddingLeft: headerPadding,
            position: 'relative',
            width: headerWidth,
        },
        text: {
            color: priColor,
            fontFamily: 'IBMPlexSansCondensed-Medium',
            fontSize: h6Fontsize
        },
        icon: {
            color: 'black',
            fontSize: 32,
            marginRight: 32
        },
        wrappertext: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
        }
    });
}
styleFunc();

export default Header;
