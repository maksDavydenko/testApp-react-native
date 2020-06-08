import React from 'react';
import {StyleSheet, View} from 'react-native';
import GalleryList from './components/GalleryList';
import Header from './components/Header';
export default function App() {
  return (
      <View>
     <Header/>
      <GalleryList/>
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
