import React from 'react';
import {
  StyleSheet,
	View,
  Text,
	StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo';
import { primaryGradientArray } from './utils/Colors';

export default class Main extends React.Component {
  render() {
    return (
      <LinearGradient colors={primaryGradientArray} style={styles.container}>
         <StatusBar barStyle="light-content" />
         <Text>Jiango is awesome!</Text>
       </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
	}
});
