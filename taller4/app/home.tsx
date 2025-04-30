import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { usePetStore } from '../hooks/usePetStore';

export default function HomeScreen() {
  const router = useRouter();
  const { hasPet, pet } = usePetStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido a PetMatch!</Text>
      <Text style={styles.subtitle}>
        Encuentra a tu compañero perfecto
      </Text>

      {hasPet ? (
        <View style={styles.petInfo}>
          <Text style={styles.petName}>Tu mascota ideal es: {pet?.name}</Text>
          <Text style={styles.petType}>{pet?.type}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('/results' as any)}
          >
            <Text style={styles.buttonText}>Ver detalles</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/survey' as any)}
        >
          <Text style={styles.buttonText}>Comenzar encuesta</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfffc',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ee4e2d',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#99d4fd',
    marginBottom: 40,
    textAlign: 'center',
  },
  petInfo: {
    alignItems: 'center',
    marginBottom: 30,
  },
  petName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ee4e2d',
    marginBottom: 10,
  },
  petType: {
    fontSize: 18,
    color: '#99d4fd',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#f7c639',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#90ee90',
  },
  buttonText: {
    color: '#ee4e2d',
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 