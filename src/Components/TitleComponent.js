import React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import { styles } from '../styles/HomeScreenStyles';

const TitleComponent = ({ title }) => {
  return (
    <View>
      <View style={styles.comingSoon}>
        <View style={styles.divider} />
        <Text>Coming Soon</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default TitleComponent;
