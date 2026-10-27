import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';

interface Props {
  onFinish: () => void;
}

export const OnboardingScreen3: React.FC<Props> = ({ onFinish }) => {
  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop' }}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        {/* Пустая шапка, чтобы сохранить позиционирование */}
        <View style={styles.header} />

        <View style={styles.card}>
          <Text style={styles.icon}>👥</Text>
          <Text style={styles.title}>
            A Community For You,{'\n'}Challenge Yourself
          </Text>

          <View style={styles.pagination}>
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={[styles.dot, styles.activeDot]} />
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.nextButton} onPress={onFinish}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justify: 'space-between',
  },
  header: {
    height: 40,
  },
  card: {
    backgroundColor: '#B3A0FF',
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    justify.content: 'center',
    width: '100%',
  },
  icon: {
    fontSize: 32,
    marginBottom: 12,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 20,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dot: {
    width: 16,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  activeDot: {
    backgroundColor: '#FFFFFF',
    width: 24,
  },
  footer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  nextButton: {
    backgroundColor: 'rgba(30, 30, 30, 0.75)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 25,
    paddingVertical: 12,
    width: '60%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});