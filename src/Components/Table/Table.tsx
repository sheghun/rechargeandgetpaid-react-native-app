import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text
} from 'react-native';

// @ts-ignore
import { Table, TableWrapper, Row } from 'react-native-table-component';
import { Subscription } from 'rxjs';
import { stylesSubscribe } from '../../styles/styles';

interface IProps {
  tableData: Array<Array<number>>;
}

class MyTable extends Component<IProps, any> {

  subcriber: Subscription;

  constructor(props: IProps) {
    super(props)

    this.state = {
      tableHead: ['S/n', 'Amount', 'Description', 'Tran Id', 'Status', 'Date'],
      widthArr: [50, 80, 400, 120, 110, 150]
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    
  }

  render() {
    return (
      <View
        style={{ flex: 1 }}
      >
        <ScrollView
          style={{ flex: 1, }}
          contentContainerStyle={{ flexGrow: 1 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <View
            style={{ flex: 1 }}
          >
            <Table borderStyle={{ borderColor: '#bbb' }}>
              <Row data={this.state.tableHead} widthArr={this.state.widthArr} style={styles.header} textStyle={styles.text} />
            </Table>
            <Table borderStyle={{ borderColor: '#bbb' }}>
              {
                this.props.tableData.map((rowData, index) => {
                  rowData.unshift(index + 1);
                  return (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={this.state.widthArr}
                      style={styles.row}
                      textStyle={styles.text}
                    />
                  )
                })
              }
            </Table>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    height: 50,
    backgroundColor: 'white',
    borderColor: 'transparent'
  },
  tableBorder: {
    borderColor: '#bbb'
  },
  text: {
    textAlign: 'center',
    fontWeight: '100',
    color: 'black'
  },
  row: {
    height: 50
  },
  cardContainer: {
    borderColor: 'white',
    backgroundColor: 'white',
    shadowColor: '#0000000d',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    elevation: 3,
    marginTop: '10%',
    // minHeight: 40,
  },
  cardWrapper: {
    flex: 1,
    borderColor: 'white',
    shadowColor: 'transparent',
  },
})

export default MyTable;