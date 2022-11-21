import { useState } from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import ModalPoup from './ModalPopup';

const Header = ({ visible, setVisible }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ModalPoup visible={visible}>
        <View style={styles.modalContainer}>
          <Text>Hello World!</Text>
        </View>
      </ModalPoup>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logo: {
    width: 80,
    height: 25,
    resizeMode: 'contain',
  },

  contactButton: {
    display: 'flex',
    width: 100,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: 'black',
    borderRadius: 5,
  },

  contactButtonText: {
    color: 'white',
    fontSize: 11,
  },

  contactButtonIcon: {
    width: 10,
    height: 10,
    marginLeft: 5,
    tintColor: 'white',
  },
});

export default Header;
