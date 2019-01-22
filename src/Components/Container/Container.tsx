
import React from 'react'
import { SafeAreaView, StyleSheet, View, ScrollView, StatusBar } from 'react-native';
import { priColorDark, baseBg } from '../../styles/styles';

let bckColor;

const Container = ({ children, noScroll, bgColor }: any) => {
    let scroll = null;
    bckColor = bgColor ? priColorDark : baseBg
    if (noScroll) {
        scroll = children;
    } else {
        scroll = (
            <ScrollView contentContainerStyle={[{
                flexGrow: 1,
                backgroundColor: baseBg
            }]}>
                {children}
            </ScrollView>);
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                backgroundColor={'rgba(255, 255, 255, 0.3)'}
                translucent={true}
                barStyle='dark-content'
            />
            <View style={styles.container}>
                {scroll}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: baseBg
    }
})

export default Container
