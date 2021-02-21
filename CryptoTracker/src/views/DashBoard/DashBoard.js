import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import * as Images from '../../../src/assets/Images';

export const data = [
  {
    image: Images.Images.bitcoin,
    name: 'Bitcoin',
    symbol: 'BTC',
    amount: '$7,215.68',
    percentage: '1.83%',
  },
  {
    image: Images.Images.ethereum,
    name: 'Ethereum',
    symbol: 'ETH',
    amount: '$146.68',
    percentage: '1.46%',
  },
  {
    image: Images.Images.xrp,
    name: 'XRP',
    symbol: 'XRP',
    amount: '$0.220568',
    percentage: '2.27%',
  },
  {
    image: Images.Images.litecoin,
    name: 'Litecoin',
    symbol: 'Lite',
    amount: '$7,215.68',
    percentage: '1.83%',
  },
  {
    image: Images.Images.tether,
    name: 'Tether',
    symbol: 'Tether',
    amount: '$146.68',
    percentage: '1.46%',
  },
];

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
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
          <Image
            style={styles.tinyLogo}
            source={row.image}
          />
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
              <Text
                style={{
                  fontSize: 12,
                  color: 'gray',
                  paddingLeft: 250,
                  marginTop: 5,
                }}>
                {row.percentage}
              </Text>
            </View>
          </View>
        </View>
      </>
    );
  }

  render() {
    return (
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default DashBoard;
