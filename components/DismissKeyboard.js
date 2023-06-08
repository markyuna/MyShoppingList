import React, { useState } from 'react';
import {
  TextInput,
  Button,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';

const DismissKeyboard = ({ children, submitHandler }) => {
  const [product, setProduct] = useState('');

  const inputHandler = (val) => {
    setProduct(val);
  };

  const handleClick = () => {
    submitHandler(product);
    setProduct('');
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <>
        {children}
      </>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 5,
  },
  input: {
    margin: 10,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 20,
  },
});

export default DismissKeyboard;
