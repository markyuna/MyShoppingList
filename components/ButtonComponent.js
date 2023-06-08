import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const ButtonComponent = ({ onPressHandler, style, children }) => {
  return (

    <TouchableOpacity
      onPress={ onPressHandler }
      activeOpacity={0.6}
    >
      <View style={{...styles.btn, ...style}}>
        <Text style={styles.btnText}>{ children }</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'red',
    padding: 9,
    
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default ButtonComponent;
