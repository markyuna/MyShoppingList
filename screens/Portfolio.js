import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import { globalStyles } from '../styles/AppStyles';
import Colors from '../styles/Colors';

const Portfolio = ({ navigation }) => {
  const name = navigation.getParam('name');
  const country = navigation.getParam('country');
  const totalImg = navigation.getParam('totalImg');
  const favColor = navigation.getParam('favColor');

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.Text}>{name}</Text>
      <Text style={globalStyles.Text}>{country}</Text>
      <Text style={globalStyles.Text}>{totalImg}</Text>
      <Text style={globalStyles.Text}>{favColor}</Text>
    </View>
  );
};

Portfolio.navigationOptions = ({ navigation }) => {
  const name = navigation.getParam('name');
  const favColor = navigation.getParam('favColor');

  return {
    headerTitle: `Profil de ${name}`,
    headerStyle: {
      backgroundColor: favColor,
    },
    headerTintColor: Colors.white,
  };
};

export default Portfolio;
