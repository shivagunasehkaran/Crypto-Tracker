import React from 'react';
import {
  Alert, FlatList,
  RefreshControl, ScrollView, StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Swipeout from 'react-native-swipeout';
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

  showDeleteConfirmation = () => {
    Alert.alert(
      'Delete',
      'Delete a todoList',
      [
        {
          text: 'No', onPress: () => { },//Do nothing
          style: 'cancel'
        },
        {
          text: 'Yes', onPress: () => {
            alert(`Item deleted!`);
          }
        },
      ],
      { cancelable: true }
    );
  };

  renderRow(row) {
    return (
      <Swipeout right={[
        {
          text: 'Delete',
          backgroundColor: 'rgb(217, 80, 64)',
          onPress: () => this.showDeleteConfirmation()
        }
      ]} autoClose={true}>
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            {/* <Image style={styles.tinyLogo} source={bitcoin} /> */}
            <Icon name="bitcoin" size={45} />
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
            <View style={styles.percentageImg}>
              <Icon name="arrow-down" size={12} color="red" style={{ paddingLeft: 100, top: 12 }} />
              <Text
                style={styles.percentage}>
                {this.props.cryptoPercenrage.market_data.percent_change_usd_last_24_hours.toFixed(2)}{'%'}
              </Text>
            </View>
          </View>
        </View>
      </Swipeout >
    );
  }

  render() {
    return (
      <ScrollView
        style={{ backgroundColor: 'white' }}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
          />
        }
        contentContainerStyle={{ flexGrow: 1 }}>
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
        <View style={{ marginBottom: 50 }}></View>
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
  container: { flex: 1, flexDirection: 'row', backgroundColor: 'white' },
  imgContainer: { flex: 1, margin: 20, flexDirection: 'row' },
  tinyLogo: { width: 100, height: 100 },
  text: { flex: 1, flexDirection: 'column', paddingLeft: 15, marginTop: 5 },
  slug: { fontSize: 15, fontWeight: '500' },
  symbol: { fontSize: 12, color: 'gray', marginTop: 5, fontWeight: '500' },
  amountContainer: { flex: 1, margin: 25 },
  amount: { fontSize: 15, textAlign: 'right', fontWeight: '500' },
  percentageImg: { flex: 1, flexDirection: 'column' },
  percentage: {
    fontSize: 12, color: 'gray', textAlign: 'right', color: 'red'
  },
  addButton: { marginTop: 50 },
  addText: { color: '#375675', textAlign: 'center' }
});
