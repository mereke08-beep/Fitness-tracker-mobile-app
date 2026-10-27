import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { colors } from '../theme';

type Props = {
  onFinish: () => void;
};

export default function Launch({ onFinish }: Props) {
  // 2.5 секундтан кейін автоматты түрде келесі бетке өтеді
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoFb: {
    width: 150,
    height: 90,
  },
  logoText: {
    width: 180,
    height: 40,
    marginTop: 12,
  },
});