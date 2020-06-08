import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import GalleryList from './components/GalleryList';
import Header from './components/Header';
export default function App() {
  return (
      <View>

     <Header/>
      {/*<ScrollView>*/}
    {/*<View style={styles.container}>*/}
      {/*<Text>hellow world</Text>*/}
      <GalleryList/>
    {/*</View>*/}
      {/*</ScrollView>*/}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
