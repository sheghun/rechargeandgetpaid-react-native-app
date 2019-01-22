import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, ViewStyle, Image, ImageStyle, Platform } from 'react-native'
import { DrawerItems } from 'react-navigation';

// @ts-ignore
import Logo from '../../assets/images/logo2.png';
import Icon from 'react-native-vector-icons/Ionicons';

import {
    headerPaddingTop,
    subtitle1Style,
    stylesSubscribe,
    marginDefault,
    priColor,
    body2Style
} from '../../styles/styles';

import { Subscription } from 'rxjs';
import Headline5 from '../texts/Headline5';
import Buttonicon from '../Buttonicon/Buttonicon';
import Aux from '../Aux/Aux';

interface Iitems {
    key: string;
    params: undefined;
    routename: string;
}


interface state {
    secondLevel: {
        profile: boolean
    }
}

export default class Drawer extends Component<any, state> {

    subscriber: Subscription;

    items: any;
    restProps: any;
    newItems: Array<Iitems>;
    profileItems: Array<Iitems>;
    activeItemKey: string;

    constructor(props: any) {
        super(props)
        this.state = {
            secondLevel: {
                profile: false
            }
        }

        const { items, activeItemKey, ...restProps } = this.props;
        this.items = items as Array<Iitems>;
        this.activeItemKey = activeItemKey;
        this.restProps = restProps;
        this.newItems = [];
        this.profileItems = [];
        (this.items as Array<Iitems>).forEach(item => {
            if (item.key.indexOf('_') === -1) {
                this.newItems.push(item);
            } else {
                this.profileItems.push(item);
            }
        });
    }

    componentDidMount() {
        this.subscriber = stylesSubscribe.subscribe(() => {

        })
    }

    itemPressHandler = ({ route, ...restInfo }: any) => {

        this.activeItemKey = route.key;
        // @ts-ignore
        if (route.key === 'Profile') {
            this.setState({
                secondLevel: {
                    profile: true
                }
            })
            return;
        } else if (route.key === 'Profile_View' || route.key === 'Profile_Update') {
            this.setState({
                secondLevel: {
                    profile: true
                }
            })
        } else {
            this.setState({
                secondLevel: {
                    profile: false
                }
            })
        }

        this.props.navigation.navigate(route.routeName)

    }

    renderMainDrawer = () => {
        this.setState({
            secondLevel: {
                profile: false
            }
        })
    }



    render() {

        const { secondLevel } = this.state;
        const drawerItems = () => {
            if (secondLevel.profile === false) {
                return (
                    <DrawerItems
                        {...this.restProps}
                        items={this.newItems}
                        onItemPress={this.itemPressHandler}
                        activeItemKey={this.activeItemKey}
                    />
                )
            } else {
                return (
                    <Aux>
                        <Buttonicon
                            style={styles.backButton}
                            onPress={this.renderMainDrawer}>
                            <Icon
                                name={Platform.OS === 'ios' ?
                                    'ios-arrow-back' :
                                    'md-arrow-back'
                                }
                                size={28}
                            />
                        </Buttonicon>
                        <DrawerItems
                            {...this.restProps}
                            items={this.profileItems}
                            onItemPress={this.itemPressHandler}
                            activeItemKey={this.activeItemKey}
                        />
                    </Aux>
                )
            }
        }

        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ flexGrow: 1 }}>
                    <View style={styles.logoContainer}>
                        <Image
                            source={Logo}
                            style={styles.logoImage as ImageStyle}
                        />
                        <View style={styles.userName}>
                            {
                                Platform.OS === 'ios' ?
                                    <Icon name="ios-person" size={30} /> :
                                    <Icon name="md-person" size={30} />
                            }
                            <Text style={body2Style}>Godwin 01</Text>
                        </View>
                    </View>
                    <View style={styles.divider}></View>
                    {drawerItems()}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logoContainer: {
        height: 180,
        width: '90%',
        justifyContent: 'space-between',
        margin: marginDefault,
        marginLeft: marginDefault - 2,
        paddingTop: headerPaddingTop * 1.5
    },
    logoImage: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: marginDefault * 3,
        width: '90%',
        resizeMode: 'contain'
    },
    headline5: {
        textAlign: 'center'
    },
    divider: {
        width: '100%',
        borderWidth: 1,
        borderColor: `${priColor}`,
        height: 1,
        marginBottom: marginDefault
    },
    backButton: {
        margin: marginDefault,
    },
    userName: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around'
    }
});
