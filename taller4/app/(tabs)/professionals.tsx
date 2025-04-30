import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Linking } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const professionals = [
  {
    id: '1',
    name: 'Centro Veterinario Happy Pets',
    specialty: 'Veterinario',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500',
    rating: 4.8,
    experience: '10 años',
    phone: '6044441299',
    address: 'Calle 45 #23-45, Medellín',
  },
  {
    id: '2',
    name: 'Clínica Veterinaria Animal Care',
    specialty: 'Veterinario',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500',
    rating: 4.9,
    experience: '8 años',
    phone: '6044483234',
    address: 'Carrera 70 #45-23, Medellín',
  },
  {
    id: '3',
    name: 'Veterinaria Mascotas Felices',
    specialty: 'Veterinario',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500',
    rating: 4.7,
    experience: '5 años',
    phone: '3006173843',
    address: 'Calle 30 #50-12, Medellín',
  },
];

export default function ProfessionalsScreen() {
  const handleCall = (phone: string) => {
    Linking.openURL(`tel:${phone}`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Centros Veterinarios</Text>
        <Text style={styles.subtitle}>Encuentra el especialista ideal para tu mascota</Text>
      </View>

      {professionals.map((professional) => (
        <View key={professional.id} style={styles.card}>
          <Image source={{ uri: professional.image }} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.name}>{professional.name}</Text>
            <Text style={styles.specialty}>{professional.specialty}</Text>
            <View style={styles.details}>
              <Text style={styles.rating}>⭐ {professional.rating}</Text>
              <Text style={styles.experience}>Experiencia: {professional.experience}</Text>
            </View>
            <Text style={styles.address}>{professional.address}</Text>
            <TouchableOpacity 
              style={styles.callButton}
              onPress={() => handleCall(professional.phone)}
            >
              <MaterialCommunityIcons name="phone" size={20} color="#fdfffc" />
              <Text style={styles.callButtonText}>{professional.phone}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ee4e2d',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fdfffc',
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    margin: 20,
    backgroundColor: '#f7c639',
    borderRadius: 15,
    padding: 15,
    borderWidth: 2,
    borderColor: '#90ee90',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#ee4e2d',
  },
  info: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ee4e2d',
    marginBottom: 5,
  },
  specialty: {
    fontSize: 16,
    color: '#99d4fd',
    marginBottom: 10,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  rating: {
    color: '#fdfffc',
    fontWeight: 'bold',
  },
  experience: {
    color: '#fdfffc',
  },
  address: {
    color: '#fdfffc',
    fontSize: 14,
    marginBottom: 10,
  },
  callButton: {
    backgroundColor: '#ee4e2d',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#90ee90',
  },
  callButtonText: {
    color: '#fdfffc',
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 