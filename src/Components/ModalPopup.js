import { useEffect, useRef, useState } from 'react';
import {
  Modal,
  Animated,
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native';
import { styles } from '../styles/HomeScreenStyles';
import * as Clipboard from 'expo-clipboard';

const ModalPoup = ({ visible, setVisible }) => {
  const [showModal, setShowModal] = useState(visible);
  const scaleValue = useRef(new Animated.Value(0)).current;

  const copyToClipboard = () => {
    Clipboard.setStringAsync('sooratheapp@gmail.com');
    alert('Email copied to clipboard');
    // removeEventListener();
  };

  useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <TouchableOpacity
        style={styles.modalBackGround}
        onPress={() => setVisible(false)}
      >
        <Animated.View
          style={[
            styles.modalContainer,
            { transform: [{ scale: scaleValue }] },
          ]}
        >
          <TouchableOpacity onPress={() => {}}>
            <View style={{ paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 12, fontWeight: '400', lineHeight: 15 }}>
                Reach out to us through
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '600',
                    lineHeight: 18,
                    marginTop: 10,
                    color: '#3B5998',
                  }}
                >
                  sooratheapp@gmail.com
                </Text>
                <TouchableOpacity
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  activeOpacity={0.7}
                  onPress={copyToClipboard}
                >
                  <Image source={require('../../assets/copy.png')} />
                  <Text>Copy</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
};

export default ModalPoup;
