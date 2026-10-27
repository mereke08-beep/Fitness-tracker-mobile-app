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
  onNext: () => void;
  onSkip: () => void;
}

export const OnboardingScreen1: React.FC<Props> = ({ onNext, onSkip }) => {
  return (
    <ImageBackground
      // Замените uri на локальную картинку (например: require('../assets/bg1.jpg'))
      source={{ uri: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop' }}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        {/* Кнопка Skip вверху справа */}
        <View style={styles.header}>
          <TouchableOpacity onPress={onSkip} style={styles.skipButton}>
            <Text style={styles.skipText}>Skip  ▶</Text>
          </TouchableOpacity>
        </View>

        {/* Фиолетовый информационный блок по центру */}
        <View style={styles.card}>
          {/* Иконка (можно заменить на SVG/Lucide/VectorIcon) */}
          <Text style={styles.icon}>🏃</Text>

          {/* Заголовок */}
          <Text style={styles.title}>
            Start Your Journey Towards A{'\n'}More Active Lifestyle
          </Text>

          {/* Пагинация (точки/полоски) */}
          <View style={styles.pagination}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>

        {/* Кнопка Next внизу */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.nextButton} onPress={onNext}>
            <Text style={styles.buttonText}>Next</Text>
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
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  skipText: {
    color: '#E2F163', // Салатовый/желтоватый цвет стрелки и текста
    fontSize: 14,
    fontWeight: '600',
  },
  skipButton: {
    padding: 5,
  },
  card: {
    backgroundColor: '#B3A0FF', // Фиолетовая плашка
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
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