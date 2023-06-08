import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import TitleText from './TitleText';

const Header = () => {

  return (
    <View style={styles.headerWrapper}>
      <TitleText style={styles.logo}>My Shopping list</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: 'darkred',
    justifyContent: 'center',
    alignItems: 'center',
    // minHeight: 30,
    width: '100%',
    paddingTop: 30,
    paddingBottom: 30,
    marginBottom: 30,
  },
  logo: {
    color: 'white',
    fontSize: 30,
    padding: 9,
    // fontWeight: 'bold',
    fontFamily: 'BagelFatOne',

  },
});

export default Header;
