import React, { useState, useEffect, useCallback } from 'react';
import {
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import TitleComponent from '../Components/TitleComponent';
import { styles } from '../styles/HomeScreenStyles';
import * as SplashScreen from 'expo-splash-screen';
import { Text } from 'react-native';
import { socialMediaIcons } from '../Constants/SocialMediaIcons';
import { prepare } from '../helpers/prepareFonts';
import { sendEmail } from '../helpers/sendEmail';
import ModalPoup from '../Components/ModalPopup';
import { stores } from '../Constants/stores';

const HomeScreen = ({ navigation }) => {
  const [appIsReady, setAppIsReady] = useState(false);
  const [visible, setVisible] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.contactButton}
          onPress={() => setVisible(true)}
        >
          <Text style={styles.contactButtonText}>Contact Us</Text>
          <Image
            source={require('../../assets/contact-icon.png')}
            style={styles.contactButtonIcon}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    prepare(setAppIsReady);
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ScrollView onLayout={onLayoutRootView}>
      <View style={styles.container}>
        <TitleComponent title={`Bringing ${'\n'} Muslims together`} />
        <FlatList
          horizontal
          data={stores}
          style={styles.storesContainer}
          keyExtractor={(store) => store.id}
          renderItem={({ item }) => {
            return (
              <View>
                <Image style={styles.storeImage} source={item.image} />
              </View>
            );
          }}
        />
        <Image
          style={styles.landingImage}
          source={require('../../assets/landing-image-2.png')}
        />
        <View
          style={{
            height: 100,
          }}
        />
        <TitleComponent title={`Get Notified ${'\n'} When we Launch`} />
        <View style={{ display: 'flex', flexDirection: 'column' }}>
          <View style={styles.textInputContainer}>
            <TextInput autoCompleteType="email" style={styles.textInput} />
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.notifyButton}
              onPress={async () => {
                try {
                  await sendEmail(
                    'ahmedreda152@gmail.com',
                    'Hello',
                    'Hello World',
                  ).then(() => {
                    console.log('Your message was successfully sent!');
                    setEmailSent(true);
                  });
                } catch (e) {
                  console.log(e);
                }
              }}
            >
              <Text style={styles.notifyButtonText}>Notify Me</Text>
            </TouchableOpacity>
          </View>
          {emailSent && (
            <Text
              style={{
                fontWeight: '600',
                fontSize: 12,
                textAlign: 'center',
                color: '#3B5998',
              }}
            >
              Your email address has been received.
            </Text>
          )}
        </View>
        <Text style={{ marginTop: 10, fontSize: 12 }}>
          Don’t worry, we won’t spam you :)
        </Text>
        <Image
          style={styles.landingImage}
          source={require('../../assets/landing-image-1.png')}
        />
        <FlatList
          horizontal
          data={socialMediaIcons}
          style={{ paddingTop: 40 }}
          keyExtractor={(platform) => platform.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.flatListItem}>
                <Image
                  source={item.image}
                  style={{ resizeMode: 'contain', width: 20 }}
                />
              </View>
            );
          }}
        />
      </View>
      <View style={styles.bottomDivider} />
      <Text style={styles.footer}>
        Copyright © 2022 Soora. All rights reserved
      </Text>
      <ModalPoup visible={visible} setVisible={setVisible} />
    </ScrollView>
  );
};

export default HomeScreen;
