import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Platform,
    ScrollView
} from 'react-native';

// @ts-ignore
import Icon from 'react-native-vector-icons/Ionicons.js';
import Container from '../../Components/Container/Container';
import { Header } from '../../Components/Header/Header';
import { marginDefault, baseContainer, headline6Style, body2Style, body1Style } from '../../styles/styles';

const title = 'View Profile';

export default class ProfileView extends React.Component {

    static navigationOptions = {
        drawerLabel: title,
        drawerIcon: ({ tintColor }: any) => {
            return (
                Platform.OS === 'ios' ?
                    <Icon name="ios-person" size={28} color={tintColor} /> :
                    <Icon name="md-person" size={28} color={tintColor} />
            )
        },

    }

    render() {
        return (
            <Container noScroll>
                <Header title={title} />
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={baseContainer}>
                        <View style={styles.card}>
                            <View>
                                <Text style={headline6Style}>Profile Details</Text>
                            </View>
                            <View style={styles.details}>
                                <Text style={body1Style}>Join Date</Text>
                                <View style={styles.date}>
                                    <Text style={body1Style}>2017-03-05 17:54:43</Text>
                                </View>
                            </View>

                            <View style={styles.details}>
                                <Text style={body1Style}>User Name</Text>
                                <View style={styles.date}>
                                    <Text style={body1Style}>Godwin01</Text>
                                </View>
                            </View>

                            <View style={styles.details}>
                                <Text style={body1Style}>First Name</Text>
                                <View style={styles.date}>
                                    <Text style={body1Style}>Oladiran</Text>
                                </View>
                            </View>
                            <View style={styles.details}>
                                <Text style={body1Style}>Last Name</Text>
                                <View style={styles.date}>
                                    <Text style={body1Style}>Segun Solomon</Text>
                                </View>
                            </View>

                            <View style={styles.details}>
                                <Text style={body1Style}>Country </Text>
                                <View style={styles.date}>
                                    <Text style={body1Style}>Nigeria</Text>
                                </View>
                            </View>

                            <View style={styles.details}>
                                <Text style={body1Style}>Phone No</Text>
                                <View style={styles.date}>
                                    <Text style={body1Style}>08143112637</Text>
                                </View>
                            </View>

                            <View style={styles.details}>
                                <Text style={body1Style}>Name Of Bank</Text>
                                <View style={styles.date}>
                                    <Text style={body1Style}>Diamon Bank Plc</Text>
                                </View>
                            </View>

                            <View style={styles.details}>
                                <Text style={body1Style}>Account Type</Text>
                                <View style={styles.date}>
                                    <Text style={body1Style}>Savings</Text>
                                </View>
                            </View>

                            <View style={styles.details}>
                                <Text style={body1Style}>Account Name</Text>
                                <View style={styles.date}>
                                    <Text style={body1Style}>Oladiran Segun Solomon</Text>
                                </View>
                            </View>

                            <View style={styles.details}>
                                <Text style={body1Style}>Account Number</Text>
                                <View style={styles.date}>
                                    <Text style={body1Style}>0102029175</Text>
                                </View>
                            </View>
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
    },
    details: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: marginDefault
    },
    date: {
        padding: 8,
        borderColor: '#ddd',
        backgroundColor: '#eee',
        width: '60%',
    }
})