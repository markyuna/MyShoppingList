import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Portfolio from '../screens/Portfolio';
import Photo from '../screens/Photo';
import Colors from '../styles/Colors';

const Stack = createNativeStackNavigator();

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Accueil',
    }
  },
  Portfolio: {
    screen: Portfolio,
    navigationOptions: {
      title: 'Profil',
    }
  },
  Photo: {
    screen: Photo,
    navigationOptions: {
      title: 'Photo',
    }
  },
};

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.lightBrown,
  },
  headerTintColor: Colors.white,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const StackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={defaultNavigationOptions}
      >
        <Stack.Screen
          name="Accueil"
          component={Home}
        />
        <Stack.Screen
          name="Portfolio"
          component={Portfolio}
        />
        <Stack.Screen
          name="Photo"
          component={Photo}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;
