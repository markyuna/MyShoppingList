import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Modal,
  Text,
  Pressable,
  Image,
  ImageBackground,
} from 'react-native';
import * as Font from 'expo-font';

import { SplashScreen } from 'expo-splash-screen';
import AppLoading from 'expo-app-loading';
import { Device } from 'expo-device';

// Components
import Header from './components/Header';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import DismissKeyboard from './components/DismissKeyboard';
import ButtonComponent from './components/ButtonComponent';

const App = () => {
  const [myProducts, setMyProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const fetchFonts = async () => {
    await Font.loadAsync({
      Pacifico: require('./assets/fonts/Pacifico-Regular.ttf'),
      BagelFatOne: require('./assets/fonts/BagelFatOne-Regular.ttf'),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    fetchFonts();
  }, []);

  const handleFinishLoading = () => {
    SplashScreen.hideAsync();
  };

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={handleFinishLoading}
        onError={console.warn}
      />
    );
  }

  const submitHandler = (product) => {
    setDisplayModal(false);

    if (product.length > 1) {
      const idString = Date.now().toString();
      setMyProducts((currentMyProducts) => [
        { key: idString, name: product },
        ...currentMyProducts,
      ]);
    } else {
      setShowModal(true);
    }
  };

  const deleteProduct = (key) => {
    setMyProducts((currentMyProducts) =>
      currentMyProducts.filter((product) => product.key !== key)
    );
  };

  const cancelNewProduct = () => {
    setDisplayModal(false);
  };

  return (
    <DismissKeyboard>
      <ImageBackground
        style={styles.container}
        source={require('./assets/images/back.jpg')}
      >
        <Header />

        <Modal
          visible={showModal}
          onRequestClose={() => setShowModal(false)}
          animationType="slide"
          hardwareAccelerated
          transparent
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalHeaderText}>Oups!</Text>
              </View>
              <View style={styles.modalBody}>
                <Image
                  source={require('./assets/images/close-check.png')}
                  style={styles.redCheck}
                />
                <Text style={styles.modalBodyText}>
                  Merci d'indiquer plus d'un seul caractere
                </Text>
              </View>
              <View style={styles.modalFooter}>
                <Pressable
                  style={styles.pressableBtnModal}
                  onPress={() => setShowModal(false)}
                >
                  <Text style={styles.modalBtn}>OK</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <ButtonComponent
          onPressHandler={() => setDisplayModal(true)}
          style={styles.addProductBtn}
        >
          Ajouter un produit
        </ButtonComponent>
        <AddProduct
          submitHandler={submitHandler}
          displayModal={displayModal}
          cancelNewProduct={cancelNewProduct}
        />
        <FlatList
          data={myProducts}
          renderItem={({ item }) => (
            <Products
              name={item.name}
              idString={item.key}
              deleteProduct={deleteProduct}
            />
          )}
        />
      </ImageBackground>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.2)',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '90%',
    height: 200,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalHeader: {
    width: '100%',
    padding: 16,
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  modalHeaderText: {
    color: 'lightgray',
    fontSize: 18,
  },
  modalBody: {
    flex: 1,
    width: '100%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBodyText: {
    fontSize: 17,
    
  },
  modalFooter: {
    width: '100%',
  },
  pressableBtnModal: {
    backgroundColor: 'seagreen',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  modalBtn: {
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
    padding: 16,
  },
  redCheck: {
    width: 30,
    height: 30,
  },
  addProductBtn: {
    backgroundColor: 'darkred',
    padding: 20,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: 'white',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
