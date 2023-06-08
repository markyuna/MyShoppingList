import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import TitleText from './TitleText';
import { useFonts, Kanit_400Regular, Kanit_500Medium, Kanit_700Bold } from '@expo-google-fonts/kanit';

const Header = () => {
  useFonts({Kanit_400Regular, Kanit_500Medium, Kanit_700Bold});
  
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
    // width: '100%',
    paddingTop: 30,
    paddingBottom: 30,
  },
  logo: {
    color: 'white',
    fontSize: 24,
    padding: 9,
    // fontWeight: 'bold',
    fontFamily: 'Kanit_500Medium',
  },
});

export default Header;
