import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { usePetStore } from '../../hooks/usePetStore';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabHomeScreen() {
  const router = useRouter();
  const { pet } = usePetStore();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>¡Hola de nuevo!</Text>
        <Text style={styles.subtitle}>¿Cómo está {pet?.name} hoy?</Text>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => router.push('/(tabs)/chat' as any)}
        >
          <View style={styles.pawPrint}>
            <MaterialCommunityIcons name="chat" size={40} color="#ee4e2d" />
          </View>
          <Text style={styles.menuText}>Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => router.push('/(tabs)/simulator' as any)}
        >
          <View style={styles.pawPrint}>
            <MaterialCommunityIcons name="calculator" size={40} color="#ee4e2d" />
          </View>
          <Text style={styles.menuText}>Simulador</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => router.push('/(tabs)/professionals' as any)}
        >
          <View style={styles.pawPrint}>
            <MaterialCommunityIcons name="doctor" size={40} color="#ee4e2d" />
          </View>
          <Text style={styles.menuText}>Profesionales</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfffc',
  },
  header: {
    padding: 20,
    backgroundColor: '#99d4fd',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ee4e2d',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#fdfffc',
  },
  menuContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  menuItem: {
    alignItems: 'center',
    width: '30%',
  },
  pawPrint: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#f7c639',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#90ee90',
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ee4e2d',
    textAlign: 'center',
  },
});
