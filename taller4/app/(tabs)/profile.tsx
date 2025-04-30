import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { usePetStore } from '../../hooks/usePetStore';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const { pet, clearPet } = usePetStore();
  const router = useRouter();

  const handleLogout = () => {
    clearPet();
    router.push('/home' as any);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: pet?.image }} style={styles.profileImage} />
        <Text style={styles.name}>{pet?.name}</Text>
        <Text style={styles.type}>{pet?.type}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Información Personal</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Nombre:</Text>
          <Text style={styles.infoValue}>{pet?.name}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Tipo:</Text>
          <Text style={styles.infoValue}>{pet?.type}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Rasgos:</Text>
          <Text style={styles.infoValue}>{pet?.traits.join(', ')}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Preferencias</Text>
        <View style={styles.preferenceItem}>
          <Text style={styles.preferenceText}>Actividad física: Alta</Text>
        </View>
        <View style={styles.preferenceItem}>
          <Text style={styles.preferenceText}>Alimentación: Balanceada</Text>
        </View>
        <View style={styles.preferenceItem}>
          <Text style={styles.preferenceText}>Socialización: Alta</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
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
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#ee4e2d',
    marginBottom: 15,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ee4e2d',
    marginBottom: 5,
  },
  type: {
    fontSize: 18,
    color: '#fdfffc',
  },
  card: {
    margin: 20,
    backgroundColor: '#f7c639',
    borderRadius: 15,
    padding: 20,
    borderWidth: 2,
    borderColor: '#90ee90',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ee4e2d',
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoLabel: {
    flex: 1,
    fontSize: 16,
    color: '#99d4fd',
    fontWeight: 'bold',
  },
  infoValue: {
    flex: 2,
    fontSize: 16,
    color: '#fdfffc',
  },
  preferenceItem: {
    backgroundColor: '#99d4fd',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#90ee90',
  },
  preferenceText: {
    color: '#fdfffc',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#ee4e2d',
    padding: 15,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#90ee90',
  },
  logoutButtonText: {
    color: '#fdfffc',
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 