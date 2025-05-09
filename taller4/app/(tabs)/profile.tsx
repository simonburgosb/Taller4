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
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
      {/* Fondo azul con huellas */}
      <View style={styles.headerBg}>
        {/* Huellas (círculos) */}
        <View style={[styles.paw, { top: 30, left: 40 }]} />
        <View style={[styles.paw, { top: 60, left: 120, width: 30, height: 30 }]} />
        <View style={[styles.paw, { top: 10, left: 200, width: 40, height: 40 }]} />
        <View style={[styles.paw, { top: 70, left: 250, width: 25, height: 25 }]} />
        {/* Foto de perfil */}
        <View style={styles.profileCircle}>
          <Image source={{ uri: pet?.image }} style={styles.profileImage} />
        </View>
        <Text style={styles.name}>{pet?.name}</Text>
      </View>

      {/* Tarjeta de información personal */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Información Personal</Text>
          <View style={styles.infoRow}><Text style={styles.infoLabel}>Nombre:</Text><Text style={styles.infoValue}>{pet?.name}</Text></View>
          <View style={styles.infoRow}><Text style={styles.infoLabel}>Tipo:</Text><Text style={styles.infoValue}>{pet?.type}</Text></View>
          <View style={styles.infoRow}><Text style={styles.infoLabel}>Rasgos:</Text><Text style={styles.infoValue}>{pet?.traits.join(', ')}</Text></View>
        </View>

        {/* Tarjeta de preferencias */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Preferencias</Text>
          <View style={styles.preferenceItem}><Text style={styles.preferenceText}>Actividad física: Alta</Text></View>
          <View style={styles.preferenceItem}><Text style={styles.preferenceText}>Alimentación: Balanceada</Text></View>
          <View style={styles.preferenceItem}><Text style={styles.preferenceText}>Socialización: Alta</Text></View>
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>CERRAR SESIÓN</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfffc',
  },
  headerBg: {
    backgroundColor: '#6ec1f6',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 30,
    position: 'relative',
    overflow: 'hidden',
  },
  paw: {
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: '#99d4fd',
    borderRadius: 25,
    opacity: 0.6,
    zIndex: 0,
  },
  profileCircle: {
    backgroundColor: '#f7c639',
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#ee4e2d',
    marginBottom: 10,
    marginTop: 10,
    zIndex: 1,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 5,
    zIndex: 1,
    fontFamily: 'SourGummy_400Regular',
  },
  cardContainer: {
    marginTop: -30,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#90ee90',
    borderRadius: 20,
    padding: 18,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    backgroundColor: '#baffc9',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginBottom: 10,
    alignSelf: 'flex-start',
    borderWidth: 2,
    borderColor: '#222',
    fontFamily: 'SourGummy_400Regular',
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  infoLabel: {
    flex: 1,
    fontSize: 16,
    color: '#222',
    fontWeight: 'bold',
    fontFamily: 'SourGummy_400Regular',
  },
  infoValue: {
    flex: 2,
    fontSize: 16,
    color: '#222',
    fontFamily: 'SourGummy_400Regular',
  },
  preferenceItem: {
    backgroundColor: '#f7c639',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  preferenceText: {
    color: '#222',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'SourGummy_400Regular',
  },
  logoutButton: {
    backgroundColor: '#ee4e2d',
    padding: 18,
    borderRadius: 12,
    margin: 30,
    alignItems: 'center',
    borderWidth: 0,
    elevation: 2,
  },
  logoutButtonText: {
    color: '#fdfffc',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    fontFamily: 'SourGummy_400Regular',
  },
}); 