import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Photo = ({ navigation }) => {
  useEffect(() => {
    console.log('Photo se ha montado');
    return () => {
      console.log('Photo se ha desmontado');
    };
  }, []);

  const handlePress = () => {
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Photo</Text>
      <Button title="PORTFOLIO" onPress={handlePress} />
    </View>
  );
};

export default Photo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Bangers_400Regular',
    fontSize: 50,
  },
});
