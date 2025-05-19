import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { usePetStore } from '../../hooks/usePetStore';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SvgXml } from 'react-native-svg';

// Importar los SVGs como strings
const huellaSimulador1 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#e6b800"/>
<path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" fill="#e6b800"/>
</svg>`;

const huellaSimulador2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#e6b800"/>
<path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" fill="#e6b800"/>
</svg>`;

export default function SimulatorScreen() {
  const { pet } = usePetStore();
  const [happiness, setHappiness] = useState(84);
  const [hunger, setHunger] = useState(84);
  const [energy, setEnergy] = useState(84);

  useEffect(() => {
    const interval = setInterval(() => {
      setHunger(prev => Math.max(0, prev - 5));
      setEnergy(prev => Math.max(0, prev - 3));
      setHappiness(prev => Math.max(0, prev - 2));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleFeed = () => {
    setHunger(prev => Math.min(100, prev + 30));
    setHappiness(prev => Math.min(100, prev + 10));
  };

  const handlePlay = () => {
    setEnergy(prev => Math.max(0, prev - 20));
    setHappiness(prev => Math.min(100, prev + 30));
  };

  const handleRest = () => {
    setEnergy(prev => Math.min(100, prev + 40));
    setHappiness(prev => Math.min(100, prev + 10));
  };

  return (
    <View style={styles.container}>
      {/* Header with curved bottom */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>SIMULADOR</Text>
        
        {/* Huellas decorativas */}
        <View style={[styles.pawPrint, { top: 20, left: 20 }]}>
          <SvgXml xml={huellaSimulador1} width={30} height={30} />
        </View>
        <View style={[styles.pawPrint, { top: 40, right: 30 }]}>
          <SvgXml xml={huellaSimulador2} width={25} height={25} />
        </View>
        <View style={[styles.pawPrint, { bottom: 20, left: 40 }]}>
          <SvgXml xml={huellaSimulador1} width={35} height={35} />
        </View>
        <View style={[styles.pawPrint, { bottom: 30, right: 40 }]}>
          <SvgXml xml={huellaSimulador2} width={30} height={30} />
        </View>
        
        {/* Pet avatar in circle */}
        <View style={styles.avatarContainer}>
          <Image 
            source={{ uri: pet?.image || 'https://placekitten.com/200/200' }} 
            style={styles.petAvatar} 
          />
        </View>
      </View>
      
      {/* Pet status question */}
      <Text style={styles.statusQuestion}>¿Cómo está Rocky?</Text>
      
      {/* Stats container */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Felicidad</Text>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: `${happiness}%` }]} />
          </View>
          <Text style={styles.statValue}>{happiness}%</Text>
        </View>
        
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Hambre</Text>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: `${hunger}%` }]} />
          </View>
          <Text style={styles.statValue}>{hunger}%</Text>
        </View>
        
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Energía</Text>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: `${energy}%` }]} />
          </View>
          <Text style={styles.statValue}>{energy}%</Text>
        </View>
      </View>
      
      {/* Needs section */}
      <Text style={styles.needsTitle}>Necesidades</Text>
      
      {/* Action buttons */}
      <View style={styles.actionsContainer}>
        <View style={styles.actionItem}>
          <TouchableOpacity style={styles.actionButton} onPress={handleFeed}>
            <Image 
              source={{ uri: 'https://placekitten.com/100/100' }} // Placeholder
              style={styles.actionIcon} 
            />
          </TouchableOpacity>
          <Text style={styles.actionText}>Alimentar</Text>
        </View>
        
        <View style={styles.actionItem}>
          <TouchableOpacity style={styles.actionButton} onPress={handlePlay}>
            <Image 
              source={{ uri: 'https://placekitten.com/101/101' }} // Placeholder
              style={styles.actionIcon} 
            />
          </TouchableOpacity>
          <Text style={styles.actionText}>Jugar</Text>
        </View>
        
        <View style={styles.actionItem}>
          <TouchableOpacity style={styles.actionButton} onPress={handleRest}>
            <MaterialCommunityIcons name="sleep" size={32} color="#333" />
          </TouchableOpacity>
          <Text style={styles.actionText}>Descansar</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 180,
    backgroundColor: '#FF7B6B', // Coral color like in the image
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    position: 'relative',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    textDecorationLine: 'underline',
    fontFamily: 'SourGummy_400Regular',
  },
  pawPrint: {
    position: 'absolute',
    borderRadius: 50,
    backgroundColor: '#FF5A45', // Darker coral for paw prints
  },
  avatarContainer: {
    position: 'absolute',
    bottom: -40,
    alignSelf: 'center',
    width: 80,
    height: 80,
    backgroundColor: '#FF7B6B', // Same as header
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  petAvatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  statusQuestion: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 20,
    fontFamily: 'SourGummy_400Regular',
  },
  statsContainer: {
    paddingHorizontal: 20,
  },
  statCard: {
    backgroundColor: '#7ADE77', // Green card background
    borderRadius: 15,
    padding: 15,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    width: '25%',
    fontFamily: 'SourGummy_400Regular',
  },
  progressBarContainer: {
    height: 20,
    backgroundColor: '#FF7B6B', // Coral background for empty progress
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 10,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#333', // Dark color for the progress bar
    borderRadius: 10,
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    width: '20%',
    textAlign: 'right',
  },
  needsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 15,
    fontFamily: 'SourGummy_400Regular',
    paddingHorizontal: 20,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  actionItem: {
    alignItems: 'center',
  },
  actionButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#FDCF4A', // Yellow for buttons
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  actionIcon: {
    width: 40,
    height: 40,
  },
  actionText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    fontFamily: 'SourGummy_400Regular',
  },
});