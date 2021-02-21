import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DashBoard = (props) => {
  return (
    <View style={{ backgroundColor: 'green' }}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('AddCryptoCurrency')}>
        <Text>Screen: HOME</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashBoard;
