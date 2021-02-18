import React, {Component} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

class PrimaryContainer extends Component {
  render() {
    return (
      <View>
        <SafeAreaView>
          <ScrollView>
            <Text>{'Crypto'}</Text>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

export default PrimaryContainer;
