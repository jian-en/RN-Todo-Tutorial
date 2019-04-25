import React from 'react';
import {
  StyleSheet,
  ScrollView,
	View,
  Text,
	StatusBar,
} from 'react-native';

import uuid from 'uuid/v1';

import { LinearGradient } from 'expo';
import { primaryGradientArray } from './utils/Colors';
import Header from './components/Header';
import Input from './components/Input';
import SubTitle from './components/SubTitle';
import List from './components/List';
import Button from './components/Button';

const headerTitle = 'Jiango To Do';

const todos = {
  1: {id: 1, text: 'drinking', isCompleted: true},
  2: {id: 2, text: 'sleeping', isCompleted: false},
};

export default class Main extends React.Component {

  state = {
    inputValue: '',
    allItems: todos,
  };

  newInputValue = value => {
    this.setState({
      inputValue: value,
    });
  };

  onDoneAddItem = () => {
    const { inputValue } = this.state;
    if (inputValue !== '') {
      this.setState(prevState => {
        const id = uuid();
        const newItemObject = {
          [id]: {
            id,
            isCompleted: false,
            text: inputValue,
            createdAt: Date.now()
          }
        };
        const newState = {
          ...prevState,
          inputValue: '',
          allItems: {
            ...prevState.allItems,
            ...newItemObject
          }
        };
        return { ...newState };
      });
    }
  };

  deleteItem = id => {
  	this.setState(prevState => {
  		const allItems = prevState.allItems;
  		delete allItems[id];
  		const newState = {
  			...prevState,
  			...allItems
  		};
  		return { ...newState };
  	});
  };

  completeItem = id => {
  	this.setState(prevState => {
  		const newState = {
  			...prevState,
  			allItems: {
  			...prevState.allItems,
  			[id]: {
  				...prevState.allItems[id],
  				isCompleted: true
  			}
  		  }
      };
  	return { ...newState };
    });
  };

  incompleteItem = id => {
  	this.setState(prevState => {
  		const newState = {
  			...prevState,
  			allItems: {
  				...prevState.allItems,
  				[id]: {
  					...prevState.allItems[id],
  					isCompleted: false
  				}
  			}
  		};
  		return { ...newState };
  	});
  };

  deleteAllItems = () => {
    this.setState({ allItems: {} });
  };

  render() {
    const { inputValue, allItems } = this.state;
    return (
      <LinearGradient colors={primaryGradientArray} style={styles.container}>
         <StatusBar barStyle="light-content" />
         <View style={styles.centered}>
          <Header title={headerTitle} />
         </View>
         <View style={styles.inputContainer}>
          <SubTitle subtitle={"What's next?"} />
          <Input
            inputValue={inputValue}
            onChangeText={this.newInputValue}
            onDoneAddItem={this.onDoneAddItem} />
         </View>

         <View style={styles.list}>
           <View style={styles.column}>
             <SubTitle subtitle={'Recent Notes'} />
             <View style={styles.deleteAllButton}>
               <Button deleteAllItems={this.deleteAllItems} />
             </View>
           </View>
          <ScrollView contentContainerStyle={styles.scrollableList}>
            {Object.values(allItems)
              .reverse()
              .map(item => (
                <List
                  key={item.id}
                  {...item}
                  deleteItem={this.deleteItem}
                  completeItem={this.completeItem}
                  incompleteItem={this.incompleteItem}
                />
              ))}
          </ScrollView>
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
  list: {
    flex: 1,
    marginTop: 70,
    paddingLeft: 15,
    marginBottom: 10
  },
  scrollableList: {
    marginTop: 15
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  deleteAllButton: {
    marginRight: 40
  },
});
