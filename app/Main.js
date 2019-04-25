import React from 'react';
import {
  StyleSheet,
  ScrollView,
	View,
  Text,
	StatusBar,
  AsyncStorage,
  ActivityIndicator
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

export default class Main extends React.Component {

  state = {
    inputValue: '',
    allItems: {},
    loadingItems: false,
  };

  componentDidMount = () => {
    this.loadingItems();
  };

  loadingItems = async () => {
    try {
      const allItems = await AsyncStorage.getItem('Todos');
      this.setState({
        loadingItems: true,
        allItems: JSON.parse(allItems) || {}
      });
    } catch (err) {
      console.log(err);
    }
  };

  saveItems = newItem => {
    const saveItem = AsyncStorage.setItem('Todos', JSON.stringify(newItem));
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
        this.saveItems(newState.allItems);
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
      this.saveItems(newState.allItems);
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
    this.saveItems(newState.allItems);
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
      this.saveItems(newState.allItems);
  		return { ...newState };
  	});
  };

  deleteAllItems = async () => {
		try {
			await AsyncStorage.removeItem('Todos');
			this.setState({ allItems: {} });
		} catch (err) {
			console.log(err);
		}
	};

  render() {
    const { inputValue, allItems, loadingItems } = this.state;
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
           {loadingItems ? (
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
 					) : (
 						<ActivityIndicator size="large" color="white" />
 					)}
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
