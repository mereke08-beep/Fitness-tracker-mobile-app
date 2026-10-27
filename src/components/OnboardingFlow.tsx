import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { OnboardingScreen1 } from './OnboardingScreen1';
import { OnboardingScreen2 } from './OnboardingScreen2';
import { OnboardingScreen3 } from './OnboardingScreen3';

export const OnboardingFlow: React.FC = () => {
  const [step, setStep] = useState<number>(1);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleSkip = () => {
    setStep(3); // Переход сразу к последнему экрану или в главное меню
  };

  const handleFinish = () => {
    console.log('Онбординг завершен!');
    // Здесь код для перехода на следующий экран приложения (Login / Home)
  };

  return (
    <View style={styles.container}>
      {step === 1 && <OnboardingScreen1 onNext={handleNext} onSkip={handleSkip} />}
      {step === 2 && <OnboardingScreen2 onNext={handleNext} onSkip={handleSkip} />}
      {step === 3 && <OnboardingScreen3 onFinish={handleFinish} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});