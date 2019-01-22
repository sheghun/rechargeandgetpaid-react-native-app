import React from 'react'
import {
    StyleSheet, Platform, View, Linking
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationScreenProp } from 'react-navigation';
import Container from '../../Components/Container/Container';
import { Header } from '../../Components/Header/Header';
import { baseContainer, marginDefault } from '../../styles/styles';
import Button from '../../Components/Button/Button';

interface IProps {
    navigation: NavigationScreenProp<any, any>
}

const title = 'Update Profile';

export default class ProfileUpdate extends React.Component<IProps, {}> {

    static navigationOptions = {
        drawerLabel: title,
        drawerIcon: ({ tintColor }: any) => {
            return (
                Platform.OS === 'ios' ?
                    <Icon name="ios-create" size={28} color={tintColor} /> :
                    <Icon name="md-create" size={28} color={tintColor} />
            )
        },
    }

    toggleDrawer = () => {
        this.props.navigation.openDrawer();
    }

    link = () => {
        Linking.openURL('https://rechargeandgetpaid.com/passUpdate.php')
    }

    render() {
        return (
            <Container noScroll>
                <Header title={title} />
                <View style={baseContainer}>
                    <Button
                        title="Update Password"
                        onPress={this.link}
                        />
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        backgroundColor: '#fff',
        elevation: 4,
        padding: marginDefault
    },
})