import React from 'react';
import {
  FlatList,
  RefreshControl, ScrollView, StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
import { fetchCryptoList, fetchIndividualCryptoList } from '../../actions/CryptoListActions';

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      cryptoValue: 'bitcoin'
    };
  }

  componentDidMount = () => {
    this.props.fetchCryptoList();
    this.props.fetchIndividualCryptoList(this.state.cryptoValue);
  };

  onRefresh = () => {
    this.props.fetchCryptoList();
    this.props.fetchIndividualCryptoList(this.state.cryptoValue);
  };

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

  renderRow(row) {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            {/* <Image style={styles.tinyLogo} source={bitcoin} /> */}
            <Icon name="bitcoin" type="ionicon" size={45} />
            <View style={styles.text}>
              <Text style={styles.slug}>{row.slug}</Text>
              <Text style={styles.symbol}>
                {row.symbol}
              </Text>
            </View>
          </View>
          <View style={styles.amountContainer}>
            <Text style={styles.amount}>
              {'$'}{row.metrics.market_data.price_usd.toFixed(2)}
            </Text>
            <Text
              style={styles.percentage}>
              {this.props.cryptoPercenrage.market_data.percent_change_usd_last_24_hours.toFixed(2)}{'%'}
            </Text>
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
            data={this.props.cryptoCurrencyDetails}
            renderItem={({ item, index }) => this.renderRow(item, index)}
            keyExtractor={this.keyExtractor}
            ItemSeparatorComponent={this.FlatListItemSeparator}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('AddCryptoCurrency')}
            style={styles.addButton}>
            <Text style={styles.addText}>
              {'+ Add a Cryptocurrency'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.addButton}></View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cryptoCurrencyDetails: state.cryptoList.cryptoCurrencyDetails,
    cryptoPercenrage: state.cryptoList.cryptoPercenrage
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchCryptoList: () => { dispatch(fetchCryptoList()) },
  fetchIndividualCryptoList: (state) => { dispatch(fetchIndividualCryptoList(state)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'row' },
  imgContainer: { flex: 1, margin: 20, flexDirection: 'row' },
  tinyLogo: { width: 100, height: 100 },
  text: { flex: 1, flexDirection: 'column', paddingLeft: 15, marginTop: 5 },
  slug: { fontSize: 15 },
  symbol: { fontSize: 12, color: 'gray', marginTop: 5 },
  amountContainer: { flex: 1, margin: 25 },
  amount: { fontSize: 15, textAlign: 'right' },
  percentage: {
    fontSize: 12, color: 'gray', textAlign: 'right', marginTop: 4
  },
  addButton: { marginTop: 50 },
  addText: { color: '#375675', textAlign: 'center' }
});
