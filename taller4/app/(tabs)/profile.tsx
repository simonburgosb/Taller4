import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { usePetStore } from '../../hooks/usePetStore';
import { useRouter } from 'expo-router';
import { SvgXml } from 'react-native-svg';

// Importar los SVGs como strings
const huellaPerfil1 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#e6b800"/>
<path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" fill="#e6b800"/>
</svg>`;

const huellaPerfil2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#e6b800"/>
<path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" fill="#e6b800"/>
</svg>`;

const huellaPerfil3 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#e6b800"/>
<path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" fill="#e6b800"/>
</svg>`;

const huellaPerfil4 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#e6b800"/>
<path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" fill="#e6b800"/>
</svg>`;

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
        {/* Huellas (SVGs) */}
        <View style={[styles.paw, { top: 30, left: 40 }]}>
          <SvgXml xml={huellaPerfil1} width={30} height={30} />
        </View>
        <View style={[styles.paw, { top: 60, left: 120 }]}>
          <SvgXml xml={huellaPerfil2} width={30} height={30} />
        </View>
        <View style={[styles.paw, { top: 10, left: 200 }]}>
          <SvgXml xml={huellaPerfil3} width={40} height={40} />
        </View>
        <View style={[styles.paw, { top: 70, left: 250 }]}>
          <SvgXml xml={huellaPerfil4} width={25} height={25} />
        </View>
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