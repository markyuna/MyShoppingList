import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Modal, Text, Pressable, Image, ImageBackground } from 'react-native';
import * as Font from 'expo-font';
import { SplashScreen } from 'expo-splash-screen';
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
    SplashScreen.hideAsync(); // Ocultar SplashScreen en el montaje inicial
    fetchFonts();
  }, []);

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

  if (!fontsLoaded) {
    return null; // No es necesario mostrar AppLoading, SplashScreen ya se oculta en el useEffect
  }

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Header title="My Products App" />
        <ButtonComponent
          title="Add Product"
          onPress={() => setDisplayModal(true)}
        />
        <AddProduct
          visible={displayModal}
          onSubmit={submitHandler}
          onCancel={cancelNewProduct}
        />
        <Products data={myProducts} onDelete={deleteProduct} />
        <Modal visible={showModal} animationType="fade" transparent={true}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Please enter a valid product name</Text>
            <Pressable style={styles.modalButton} onPress={() => setShowModal(false)}>
              <Text style={styles.modalButtonText}>OK</Text>
            </Pressable>
          </View>
        </Modal>
      </View>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#333',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
  },
  modalButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default App;
