import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { usePetStore } from '../../hooks/usePetStore';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
        
        {/* Decorative paw prints */}
        <View style={[styles.pawPrint, { top: 20, right: 20, width: 30, height: 30 }]} />
        <View style={[styles.pawPrint, { top: 60, right: 40, width: 50, height: 50 }]} />
        <View style={[styles.pawPrint, { top: 40, left: 230, width: 70, height: 70 }]} />
        
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