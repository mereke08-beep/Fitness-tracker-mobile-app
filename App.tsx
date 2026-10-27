import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Launch from './src/components/Launch';
import Onboarding from './src/components/Onboarding';
import { colors } from './src/theme';

// Бет түрлері. Жаңа бет қосқанда осында атын қосамыз.
type Page = 'launch' | 'onboarding' | 'home';

export default function App() {
  const [page, setPage] = useState<Page>('launch');

  switch (page) {
    case 'launch':
      return <Launch onFinish={() => setPage('onboarding')} />;

    case 'onboarding':
      return <Onboarding onNext={() => setPage('home')} />;

    // Келесі бет дайын болғанша уақытша экран
    default:
      return (
        <View style={styles.temp}>
          <StatusBar style="light" />
          <Text style={styles.tempText}>Келесі бет осында болады</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  temp: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tempText: {
    color: colors.white,
    fontSize: 18,
  },
});