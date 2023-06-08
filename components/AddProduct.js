import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Modal  } from 'react-native';
import ButtonComponent from './ButtonComponent';
import Input from './Input';

const AddProduct = ({ submitHandler, displayModal, cancelNewproduct }) => {

  const [product, setProduct] = useState('');

  const inputHandler = (val) => {
    const regex = /[^a-z]/gi;
    setProduct(val.replace(regex, ''));
  }

  const handleClick = () => {
    submitHandler(product, setProduct);
    setProduct('');
  }

  return (
    <Modal
      animationType="slide"
        transparent={true}
        visible={displayModal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          displayModal(!displayModal);
        }}>
      <View style={styles.inputContainer}>

        <Input 
          style={styles.textInput}
          textPlaceholder="Nouveau produit"
          onChangeHandler={inputHandler}
          inputValue={product}
          maxLength={10}
        />

        <View style={styles.btnContainer}>  
          <ButtonComponent
            onPressHandler={ handleClick }
            style={styles.btnBlue}
          >
          Valider
          </ButtonComponent>
          <ButtonComponent
            onPressHandler={ cancelNewproduct }
            style={styles.btnTomato}
          >
          Annuler
          </ButtonComponent>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 40,
    marginTop: 200,
    marginBottom: 100,
    backgroundColor: 'white',
    borderRadius: 20,
    
  },
  textInput: {
    padding: 5,
    textAlign: 'center',
    marginBottom: 9,
    borderRadius: 20,
    height: 40,
    fontSize: 18,
  },
  btnContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btnBlue: {
    backgroundColor: 'yellowgreen',
    width: 100,
    borderRadius: 10,
  },
  btnTomato: {
    backgroundColor: 'tomato',
    width: 100,
    borderRadius: 10,
  },
});

export default AddProduct;
