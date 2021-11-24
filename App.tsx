/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  VirtualizedList,
} from 'react-native';
import RatField from './components/RatField';

type Rat = {
  id: number,
  name: string
}

type Rats = {
  [key:string]: Rat
}

const ObjRats: Rats = {
  "0": {"id": 0, "name": "Minerva"},
  "1": {"id": 1, "name": "Perebas"}
}

const RatList: Array<Rat> = [
  {'id': 0, "name": "Minerva"},
  {'id': 1, "name": "Perebas"},
]

const getItem = (data: any, index: number) => ({
  key: data[index].id,
  title: data[index].name
});

const App = () => {
  return (
 
    <SafeAreaView>
      <VirtualizedList
        data={RatList}
        initialNumToRender={4}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={item => item.key}
        getItemCount={data => data.length}
        getItem={getItem}
      />
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     height: 150,
//     justifyContent: 'center',
//     marginVertical: 8,
//     marginHorizontal: 16,
//     padding: 20,
//   },
//   title: {
//     fontSize: 32,
//   },
// });

export default App;
