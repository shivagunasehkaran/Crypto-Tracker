import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

const AddCryptoCurrency = (props) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('AddCryptoCurrency')}
        style={{ marginTop: 50, paddingLeft: 30, marginTop: 200 }}>
        <Text style={{ fontSize: 20, fontWeight: '500' }}>
          {'Add a Cryptocurrency'}
        </Text>
      </TouchableOpacity>
      <TextInput
        style={{
          height: 50,
          borderColor: '#A7A7A7',
          borderWidth: 1,
          borderRadius: 5,
          marginTop: 20,
          marginHorizontal: 30,
          paddingLeft: 10,
        }}
        placeholder="Use a name or ticker symbol"
        underlineColorAndroid="transparent"
      />
      <View style={{ width: '100%' }}>
        <TouchableOpacity
          onPress={() => alert('clicked')}
          style={{
            marginTop: 50,
            marginTop: 20,
            position: 'absolute',
            right: 30,
          }}>
          <View
            style={{
              backgroundColor: '#FBD33F',
              width: 130,
              height: 40,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ fontSize: 15, fontWeight: '400', color: 'gray' }}>
              {'Add'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddCryptoCurrency;
