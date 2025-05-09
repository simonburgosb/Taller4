import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

const professionals = [
  {
    id: '1',
    name: 'Centro Veterinario Happy Pets',
    specialty: 'Veterinario',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500',
    phone: '6044441299',
    address: 'Calle 45 #23-45, Medellín',
  },
  {
    id: '2',
    name: 'Clínica Veterinaria Animal Care',
    specialty: 'Veterinario',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500',
    phone: '6044483234',
    address: 'Carrera 70 #45-23, Medellín',
  },
  {
    id: '3',
    name: 'Veterinaria Mascotas Felices',
    specialty: 'Veterinario',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500',
    phone: '3006173843',
    address: 'Calle 30 #50-12, Medellín',
  },
];

export default function ProfessionalsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
      {/* Encabezado */}
      <View style={styles.headerBg}>
        <Text style={styles.headerTitle}>PROFESIONALES</Text>
        <Text style={styles.headerSubtitle}>Encuentra el especialista ideal para tu mascota</Text>
        {/* Esquinas decorativas */}
        <View style={styles.headerCorner} />
      </View>

      {professionals.map((professional) => (
        <View key={professional.id} style={styles.cardContainer}>
          <View style={styles.cardBg}>
            {/* Huellas (círculos) */}
            <View style={[styles.paw, { top: 10, left: 10 }]} />
            <View style={[styles.paw, { bottom: 10, right: 10, width: 40, height: 40 }]} />
            {/* Imagen */}
            <Image source={{ uri: professional.image }} style={styles.image} />
            {/* Info */}
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{professional.name}</Text>
              <Text style={styles.details}>{professional.specialty} - {professional.address}</Text>
              <TouchableOpacity style={styles.phoneButton} onPress={() => {}}>
                <Text style={styles.phoneButtonText}>{professional.phone}</Text>
              </TouchableOpacity>
            </View>
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
  headerBg: {
    backgroundColor: '#f7c639',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingTop: 30,
    paddingBottom: 18,
    paddingHorizontal: 20,
    position: 'relative',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
    fontFamily: 'monospace',
    marginBottom: 2,
    backgroundColor: 'transparent',
    textShadowColor: '#fff',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  headerSubtitle: {
    fontSize: 15,
    color: '#222',
    marginBottom: 5,
    marginLeft: 2,
  },
  headerCorner: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 80,
    height: 60,
    backgroundColor: '#e6b800',
    borderBottomLeftRadius: 40,
  },
  cardContainer: {
    alignItems: 'center',
    marginBottom: 18,
  },
  cardBg: {
    width: '90%',
    backgroundColor: '#6ec1f6',
    borderRadius: 25,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    minHeight: 120,
  },
  paw: {
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: '#99d4fd',
    borderRadius: 25,
    opacity: 0.4,
    zIndex: 0,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#fff',
    marginRight: 15,
    zIndex: 1,
  },
  infoContainer: {
    flex: 1,
    zIndex: 1,
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 6,
    fontFamily: 'monospace',
  },
  details: {
    color: '#fff',
    marginBottom: 10,
    fontSize: 14,
  },
  phoneButton: {
    backgroundColor: '#f7c639',
    borderRadius: 12,
    paddingVertical: 7,
    paddingHorizontal: 18,
    alignSelf: 'flex-start',
  },
  phoneButtonText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 1,
  },
}); 