import React from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { addCryptoValue } from '../../actions/CryptoListActions';

class AddCryptoCurrency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: '',
    };
  }

  // validation of text inputs
  isValid = () => {
    const { textInput } = this.state;

    if (textInput.length === 0) {
      Alert.alert('Please enter cryptocurrency !');
    }

    return textInput.length > 0;
  };

  // add crypto currency
  addCryptoCurrency = () => {
    if (this.isValid()) {
      const { textInput } = this.state;

      // crypto object
      const cryptovalue = [{
        "id": "1e31218a-e44e-4285-820c-8282ee222035" + textInput,
        "slug": textInput,
        "symbol": "BTC",
        "metrics": {
          "market_data": {
            "price_usd": 49692.70
          }
        }
      },
      ];

      // add actions
      this.props.addCryptoValue(cryptovalue);

      // navigate to dashboard
      this.props.navigation.navigate('DashBoard');
    }
  };

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.addTitle}>
            {'Add a Cryptocurrency'}
          </Text>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder={'Use a name or ticker symbol'}
          underlineColorAndroid={'transparent'}
          value={this.state.textInput}
          onChangeText={(textInput) => this.setState({ textInput })}
        />
        <View style={styles.textInputContainer}>
          <TouchableOpacity
            onPress={() => this.addCryptoCurrency()}
            style={styles.addButton}>
            <View
              style={styles.addView}>
              <Text style={styles.addText}>
                {'Add'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addCryptoValue: (data) => {
    dispatch(addCryptoValue(data));
  },
});

export default connect(null, mapDispatchToProps)(AddCryptoCurrency);

const styles = StyleSheet.create({
  container: { marginTop: 50, paddingLeft: 30, marginTop: 200 },
  addTitle: { fontSize: 20, fontWeight: '500' },
  textInput: { height: 50, borderColor: '#A7A7A7', borderWidth: 1, borderRadius: 5, marginTop: 20, marginHorizontal: 30, paddingLeft: 10 },
  textInputContainer: { width: '100%' },
  addButton: { marginTop: 50, marginTop: 20, position: 'absolute', right: 30 },
  addView: {
    backgroundColor: '#FBD33F', width: 130, height: 40, borderRadius: 5, justifyContent: 'center', alignItems: 'center',
  },
  addText: { fontSize: 15, fontWeight: '400', color: 'black' }
});