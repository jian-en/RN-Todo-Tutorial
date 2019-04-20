import React from 'react';
import {
  StyleSheet,
	View,
  Text,
	StatusBar,
} from 'react-native';

export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
	}
});
