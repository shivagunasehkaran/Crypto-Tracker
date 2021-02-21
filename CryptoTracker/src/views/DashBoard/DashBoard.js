import React from 'react';
import {
  FlatList,
  Image,
  RefreshControl, ScrollView, StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { connect } from 'react-redux';
import * as Images from '../../../src/assets/Images';
import { fetchCryptoList } from '../../actions/CryptoListActions';

export const data = [
  {
    image: Images.Images.bitcoin,
    name: 'Bitcoin',
    symbol: 'BTC',
    amount: '$7,215.68',
    percentage: '1.83%',
    status: Images.Images.rise,
  },
  {
    image: Images.Images.ethereum,
    name: 'Ethereum',
    symbol: 'ETH',
    amount: '$146.68',
    percentage: '1.46%',
    status: Images.Images.down,
  },
  {
    image: Images.Images.xrp,
    name: 'XRP',
    symbol: 'XRP',
    amount: '$0.220568',
    percentage: '2.27%',
    status: Images.Images.rise,
  },
  {
    image: Images.Images.litecoin,
    name: 'Litecoin',
    symbol: 'Lite',
    amount: '$7,215.68',
    percentage: '1.83%',
    status: Images.Images.down,
  },
  {
    image: Images.Images.tether,
    name: 'Tether',
    symbol: 'Tether',
    amount: '$146.68',
    percentage: '1.46%',
    status: Images.Images.rise,
  },
];

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  componentDidMount = () => {
    this.props.fetchCryptoList();
  };

  onRefresh = () => {
    this.props.fetchCryptoList();
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#E6E6E6',
        }}
      />
    );
  };

  renderRow(row, id) {
    return (
      <>
        <View style={{ flex: 1, flexDirection: 'row', margin: 20 }}>
          <Image style={styles.tinyLogo} source={row.image} />
          <View style={{ flexDirection: 'column', paddingHorizontal: 20 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 15, marginTop: 5 }}>{row.name}</Text>
              <Text style={{ fontSize: 15, marginTop: 5, left: 180 }}>
                {row.amount}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', width: '100%' }}>
              <Text style={{ fontSize: 12, color: 'gray', marginTop: 5 }}>
                {row.symbol}
              </Text>
              <View
                style={{
                  width: 50,
                  flexDirection: 'row',
                  left: 220,
                  marginTop: 5,
                }}>
                <Image style={styles.statusLogo} source={row.status} />
                <Text
                  style={{
                    fontSize: 12,
                    color: 'gray',
                    paddingLeft: 10,
                  }}>
                  {row.percentage}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }

  render() {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
          />
        }
        contentContainerStyle={{ flexGrow: 1 }}>
        <View>
          <FlatList
            data={data}
            renderItem={({ item, index }) => this.renderRow(item, index)}
            keyExtractor={this.keyExtractor}
            ItemSeparatorComponent={this.FlatListItemSeparator}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('AddCryptoCurrency')}
            style={{ marginTop: 50 }}>
            <Text style={{ color: '#375675', textAlign: 'center' }}>
              {'+ Add a Cryptocurrency'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCryptoList: () => {
    dispatch(fetchCryptoList());
  },
});

export default connect(null, mapDispatchToProps)(DashBoard);

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  statusLogo: {
    width: 15,
    height: 15,
  },
});
