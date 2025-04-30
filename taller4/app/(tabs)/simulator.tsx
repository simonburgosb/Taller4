import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { usePetStore } from '../../hooks/usePetStore';

export default function SimulatorScreen() {
  const { pet } = usePetStore();
  const [happiness, setHappiness] = useState(50);
  const [hunger, setHunger] = useState(50);
  const [energy, setEnergy] = useState(50);

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
      <View style={styles.petContainer}>
        <Image source={{ uri: pet?.image }} style={styles.petImage} />
        <Text style={styles.petName}>{pet?.name}</Text>
        <Text style={styles.petType}>{pet?.type}</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Felicidad</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${happiness}%` }]} />
          </View>
          <Text style={styles.statValue}>{happiness}%</Text>
        </View>

        <View style={styles.stat}>
          <Text style={styles.statLabel}>Hambre</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${hunger}%` }]} />
          </View>
          <Text style={styles.statValue}>{hunger}%</Text>
        </View>

        <View style={styles.stat}>
          <Text style={styles.statLabel}>Energía</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${energy}%` }]} />
          </View>
          <Text style={styles.statValue}>{energy}%</Text>
        </View>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={handleFeed}>
          <Text style={styles.actionText}>Alimentar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={handlePlay}>
          <Text style={styles.actionText}>Jugar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={handleRest}>
          <Text style={styles.actionText}>Descansar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  petContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  petImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  petName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  petType: {
    fontSize: 16,
    color: '#666',
  },
  statsContainer: {
    marginBottom: 30,
  },
  stat: {
    marginBottom: 15,
  },
  statLabel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  statValue: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  actionText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 