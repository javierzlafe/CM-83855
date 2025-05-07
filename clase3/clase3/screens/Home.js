import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/para el ejemplo/Header';
import Categories from '../components/para el ejemplo/Categories';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Categories />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default Home;