import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { usePetStore } from '../../hooks/usePetStore';

const { width } = Dimensions.get('window');

export default function TabHomeScreen() {
  const router = useRouter();
  const { pet } = usePetStore();

  return (
    <View style={styles.container}>
      {/* Fondo superior amarillo */}
      <View style={styles.topBackground} />
      {/* Fondo inferior azul con curva */}
      <View style={styles.bottomBackground} />
      {/* Huellas decorativas (emojis) */}
      <Text style={[styles.paw, { top: 180, left: 30 }]}>🐾</Text>
      <Text style={[styles.paw, { top: 350, right: 40, transform: [{ rotate: '20deg' }] }]}>🐾</Text>
      <Text style={[styles.paw, { bottom: 80, left: 60, fontSize: 38 }]}>🐾</Text>
      {/* Encabezado INICIO */}
      <Text style={styles.inicio}>INICIO</Text>
      <View style={styles.content}>
        <Text style={styles.title}>¡Hola de nuevo!</Text>
        <Text style={styles.subtitle}>¿Qué deseas hacer?</Text>
        <View style={styles.menuContainer}>
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => router.push('/(tabs)/chat' as any)}
          >
            <Text style={styles.menuText}>Chat con IA</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => router.push('/(tabs)/simulator' as any)}
          >
            <Text style={styles.menuText}>Probar simulador</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => router.push('/(tabs)/professionals' as any)}
          >
            <Text style={styles.menuText}>Hablar con profesionales</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'relative',
  },
  topBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 220,
    backgroundColor: '#ffe07a',
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    zIndex: 0,
  },
  bottomBackground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '65%',
    backgroundColor: '#99d4fd',
    zIndex: 0,
  },
  paw: {
    position: 'absolute',
    fontSize: 44,
    opacity: 0.25,
    zIndex: 1,
  },
  inicio: {
    position: 'absolute',
    top: 18,
    left: 18,
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: '#222',
    zIndex: 2,
    fontFamily: 'monospace',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 80,
    zIndex: 2,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 10,
    fontFamily: 'sans-serif-condensed',
  },
  subtitle: {
    fontSize: 20,
    color: '#222',
    marginBottom: 30,
    fontWeight: '600',
  },
  menuContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  menuItem: {
    backgroundColor: '#6ee86e',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 30,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#222',
    elevation: 2,
  },
  menuText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
});
