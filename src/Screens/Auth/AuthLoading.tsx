import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { secColorLight, priColorDark, priColor } from '../../styles/styles';

interface IProps {
    navigation: NavigationScreenProp<any, any>
}

class AuthLoadingScreen extends React.Component<IProps, {}> {

    constructor(props: IProps) {
        super(props);
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    // @ts-ignore
    _bootstrapAsync = async () => {
        //@ts-ignore
        const userToken = await AsyncStorage.getItem('userToken');

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'Auth' : 'App');
    };

    // Render any loading content that you like here
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    color={secColorLight}
                    size={'large'}
                />
                <StatusBar
                    backgroundColor={priColor}
                    translucent={true}
                    barStyle="light-content"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: priColorDark,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default AuthLoadingScreen;