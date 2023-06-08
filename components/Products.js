import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';


const Products = ({name, deleteProduct, idString}) => {

  return (
      <Pressable
        onPress={() => deleteProduct(idString)}
        // android_ripple={{ color: 'lightgrey' }}
      >
      <ScrollView>
        <View style={styles.items}>
          <FontAwesome
            name="trash"
            size={24}
            color="black"
            onPress={() => deleteProduct(idString)}
          />
            <Text style={styles.element}> {name} </Text>
        </View>
      </ScrollView>
      </Pressable>
  )
}


const styles = StyleSheet.create({
  items: {
    marginTop: 10,
    backgroundColor: 'mediumseagreen',
    borderRadius: 5,
    flexDirection: 'row',
    padding: 15,
  },
  element: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default Products;