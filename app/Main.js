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
import Input from './components/Input';
import SubTitle from './components/SubTitle';

const headerTitle = 'Jiango To Do';

export default class Main extends React.Component {
  state = {
    inputValue: ''
  };

  newInputValue = value => {
    this.setState({
      inputValue: value
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <LinearGradient colors={primaryGradientArray} style={styles.container}>
         <StatusBar barStyle="light-content" />
         <View style={styles.centered}>
          <Header title={headerTitle} />
         </View>
         <View style={styles.inputContainer}>
          <SubTitle subtitle={"What's next?"} />
          <Input inputValue={inputValue} onChangeText={this.newInputValue} />
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
  },
  inputContainer: {
    marginTop: 40,
    paddingLeft: 15
  },
});
