# Create React Native ToDo App in 7 Steps
<image src="RN-ToDo.gif" width=393 height=758 />

# Credits
Adapted from this [blog](https://pusher.com/tutorials/build-to-do-app-react-native-expo)

# Prerequisites
1. Node 10+ is installed
2. Install Expo CLI toolkit
  ```bash
  npm install -g expo-cli
  ```
3. Register an account on [Expo](https://expo.io/) and download the Expo Client
  
# Steps
Each finished step is stored in one tag, for example, if you want to check the code after step 4:
```bash
git checkout step4
```

1. Create a blank template and run the blank App in the Client or Emulators. Feel free to use your favorite Editor (eg. Atom) to edit the **App.js**
```bash
expo init my-todos
cd my-todos
expo start
```
2. Create a new **app** folder and add the splash image
3. Draw a background for the app:
    * Create a [LinearGradient](https://docs.expo.io/versions/latest/sdk/linear-gradient/) background with a [color](https://www.color-hex.com/) range
    * Create a [StatusBar](https://facebook.github.io/react-native/docs/statusbar)
4. Add a header
    * [Fat Arrow Functions](https://hackernoon.com/getting-to-grips-with-es6-arrow-functions-ebfa62c5c5d6)
5. Add a subtitle and an input box
    * [Style](https://facebook.github.io/react-native/docs/style)
    * [TextInput](https://facebook.github.io/react-native/docs/textinput)
    * [State in Component](http://www.reactnativeexpress.com/component_api)
    * Add input event: **newInputValue**
6. Add the List:
    * Add some dummy data
    * Create a list item Component: [Touchableopacity](https://facebook.github.io/react-native/docs/touchableopacity), [Dimensions](https://facebook.github.io/react-native/docs/dimensions), [Platform](https://facebook.github.io/react-native/docs/platform-specific-code), [VectorIcons](https://expo.github.io/vector-icons/)
    * Add the interactions (**onDoneAddItem**, **deleteItem**, **completeItem**, **incompleteItem**, **deleteAllItems**)
    * Add Subtitle and deleteAll buttons
    * Learn to debug the UI

7. Persist the items:
    * Add [AsyncStorage](https://facebook.github.io/react-native/docs/asyncstorage)
    * Init the data from the storage. You should get familiar with the [LifecyleAPI](http://www.reactnativeexpress.com/lifecycle_api). We use **componentDidMount** to init data
    * Add **saveItems** every time the todo list is updated
    * Check the [Async/Await](https://javascript.info/async-await)
    * Add [ActivityIndicator](https://facebook.github.io/react-native/docs/activityindicator) when loading the data


# More Resources

* [React Native Elements](https://react-native-training.github.io/react-native-elements/)
