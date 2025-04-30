import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { usePetStore } from '../hooks/usePetStore';

const testimonios = [
  {
    nombre: 'María',
    texto: 'Max es el compañero perfecto para mi estilo de vida activo. Nos encanta salir a correr juntos por las mañanas.',
    imagen: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500',
  },
  {
    nombre: 'Carlos',
    texto: 'La energía de Max es contagiosa. Siempre está listo para jugar y me mantiene activo.',
    imagen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500',
  },
  {
    nombre: 'Ana',
    texto: 'Max es muy sociable y se lleva bien con todos. Es el alma de la fiesta en casa.',
    imagen: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500',
  },
];

export default function ResultsScreen() {
  const router = useRouter();
  const { pet } = usePetStore();

  const handleContinue = () => {
    router.push('/(tabs)' as any);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>¡Perfecto!</Text>
        <Text style={styles.subtitle}>Tu compañero ideal es:</Text>
      </View>

      <View style={styles.petCard}>
        <Image source={{ uri: pet?.image }} style={styles.petImage} />
        <Text style={styles.petName}>{pet?.name}</Text>
        <Text style={styles.petType}>{pet?.type}</Text>
        
        <View style={styles.traitsContainer}>
          <Text style={styles.traitsTitle}>Rasgos principales:</Text>
          {pet?.traits.map((trait, index) => (
            <View key={index} style={styles.traitItem}>
              <Text style={styles.traitText}>• {trait}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.testimonialsSection}>
        <Text style={styles.sectionTitle}>Testimonios de dueños</Text>
        {testimonios.map((testimonio, index) => (
          <View key={index} style={styles.testimonioCard}>
            <Image source={{ uri: testimonio.imagen }} style={styles.testimonioImage} />
            <View style={styles.testimonioContent}>
              <Text style={styles.testimonioNombre}>{testimonio.nombre}</Text>
              <Text style={styles.testimonioTexto}>{testimonio.texto}</Text>
            </View>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continuar</Text>
      </TouchableOpacity>
    </ScrollView>
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
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ee4e2d',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#fdfffc',
  },
  petCard: {
    margin: 20,
    backgroundColor: '#f7c639',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#90ee90',
  },
  petImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
    borderWidth: 4,
    borderColor: '#ee4e2d',
  },
  petName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ee4e2d',
    marginBottom: 5,
  },
  petType: {
    fontSize: 18,
    color: '#fdfffc',
    marginBottom: 15,
  },
  traitsContainer: {
    width: '100%',
    marginTop: 15,
  },
  traitsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ee4e2d',
    marginBottom: 10,
  },
  traitItem: {
    backgroundColor: '#99d4fd',
    padding: 10,
    borderRadius: 10,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: '#90ee90',
  },
  traitText: {
    color: '#fdfffc',
    fontSize: 16,
  },
  testimonialsSection: {
    margin: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ee4e2d',
    marginBottom: 20,
    textAlign: 'center',
  },
  testimonioCard: {
    flexDirection: 'row',
    backgroundColor: '#f7c639',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#90ee90',
  },
  testimonioImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#ee4e2d',
  },
  testimonioContent: {
    flex: 1,
    marginLeft: 15,
  },
  testimonioNombre: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ee4e2d',
    marginBottom: 5,
  },
  testimonioTexto: {
    color: '#fdfffc',
    fontSize: 14,
  },
  continueButton: {
    backgroundColor: '#ee4e2d',
    padding: 15,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#90ee90',
  },
  continueButtonText: {
    color: '#fdfffc',
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 