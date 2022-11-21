import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './src/styles/HomeScreenStyles';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerTitle: () => (
              <Image
                source={require('./assets/logo.png')}
                style={styles.logo}
              />
            ),
            headerRight: () => (
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.contactButton}
              >
                <Text style={styles.contactButtonText}>Contact Us</Text>
                <Image
                  source={require('./assets/contact-icon.png')}
                  style={styles.contactButtonIcon}
                />
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor: 'white',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
