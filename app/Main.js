import React from 'react';
import {
  StyleSheet,
	View,
  Text,
	StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo';
import { primaryGradientArray } from './utils/Colors';
import Header from './components/Header';
const headerTitle = 'Jiango To Do';

export default class Main extends React.Component {
  render() {
    return (
      <LinearGradient colors={primaryGradientArray} style={styles.container}>
         <StatusBar barStyle="light-content" />
         <View style={styles.centered}>
          <Header title={headerTitle} />
         </View>
       </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
  centered: {
    alignItems: 'center',
  }
});
