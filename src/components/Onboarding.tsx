import React from 'react';

import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { colors } from '../theme';

type Props = {
  onNext: () => void;
};

export default function Onboarding({ onNext }: Props) {
  return (
    // Экранның кез келген жерін басқанда келесі бетке өтеді
    <Pressable style={styles.container} onPress={onNext}>
      <StatusBar style="light" />

      {/* Фондағы фото: assets қапшығына onboarding-bg.png деп сақтаңыз */}
      <ImageBackground
        source={require('../../assets/onboarding-bg.png')}
        style={styles.background}
        resizeMode="cover"
      >
        {/* Фотоны сәл қараңғылату үшін жұқа қабат */}
        <View style={styles.overlay}>
          <Text style={styles.welcome}>Welcome to</Text>

          <Image
            source={require('../../assets/logo-fb.png')}
            style={styles.logoFb}
            resizeMode="contain"
          />

          <Image
            source={require('../../assets/logo-text.png')}
            style={styles.logoText}
            resizeMode="contain"
          />
        </View>
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    color: colors.lime,
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 10,
  },
  logoFb: {
    width: 140,
    height: 85,
  },
  logoText: {
    width: 170,
    height: 40,
    marginTop: 8,
  },
});