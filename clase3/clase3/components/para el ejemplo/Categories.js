
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import categories from '../../data/categories.json';

const Categories = () => {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.categoryItem}>
          <Text style={styles.categoryText}>{item.name}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    padding: 15,
    backgroundColor: '#f5f5f5',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8
  },
  categoryText: {
    fontSize: 18
  }
});

export default Categories;