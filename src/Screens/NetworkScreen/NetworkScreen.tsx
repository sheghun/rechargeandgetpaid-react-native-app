import React, { Component } from 'react'
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet
} from 'react-native'

// @ts-ignore
import Icon from 'react-native-vector-icons/Ionicons.js';
import Container from '../../Components/Container/Container';
import { Header } from '../../Components/Header/Header';

const title = 'My Network'


export default class NetworkScreen extends Component {

  static navigationOptions = {
    drawerLabel: title,
    drawerIcon: ({ tintColor }: any) => (
      <Icon name="md-people" size={28} color={tintColor} />
    ),
  }

  render() {
    return (
      <Container>
        <Header title={title}/>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})