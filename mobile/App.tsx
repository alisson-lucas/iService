import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation';
import { AuthProvider} from './src/contexts/auth';

export default function App() {
  return (
    <>
    <AuthProvider>
      <NavigationContainer>
      <StatusBar style="auto" />
          <Navigation />
      </NavigationContainer>
    </AuthProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
