import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SvgXml } from 'react-native-svg';

// Importar los SVGs como strings
const huellaProfesionales1 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#e6b800"/>
<path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" fill="#e6b800"/>
</svg>`;

const huellaProfesionales2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#e6b800"/>
<path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" fill="#e6b800"/>
</svg>`;

const manchaProfesionales1 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#e6b800"/>
</svg>`;

const manchaProfesionales2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#e6b800"/>
</svg>`;

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
      <View style={styles.header}>
        <Text style={styles.title}>Profesionales</Text>
        {/* Huellas decorativas */}
        <View style={[styles.pawPrint, { top: 20, left: 20 }]}>
          <SvgXml xml={huellaProfesionales1} width={30} height={30} />
        </View>
        <View style={[styles.pawPrint, { top: 40, right: 30 }]}>
          <SvgXml xml={huellaProfesionales2} width={25} height={25} />
        </View>
        <View style={[styles.pawPrint, { bottom: 20, left: 40 }]}>
          <SvgXml xml={manchaProfesionales1} width={35} height={35} />
        </View>
        <View style={[styles.pawPrint, { bottom: 30, right: 40 }]}>
          <SvgXml xml={manchaProfesionales2} width={30} height={30} />
        </View>
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
  header: {
    backgroundColor: '#f7c639',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingTop: 30,
    paddingBottom: 18,
    paddingHorizontal: 20,
    position: 'relative',
    marginBottom: 10,
  },
  title: {
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
  pawPrint: {
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