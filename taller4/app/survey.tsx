import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { usePetStore } from '../hooks/usePetStore';

interface Question {
  id: number;
  text: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: 1,
    text: '¿Qué tipo de energía prefieres?',
    options: ['Alta energía y actividad', 'Moderada y equilibrada', 'Tranquila y relajada'],
  },
  {
    id: 2,
    text: '¿Cuánto tiempo puedes dedicar al cuidado diario?',
    options: ['Mucho tiempo', 'Tiempo moderado', 'Poco tiempo'],
  },
  {
    id: 3,
    text: '¿Qué tamaño de mascota prefieres?',
    options: ['Pequeño', 'Mediano', 'Grande'],
  },
  {
    id: 4,
    text: '¿Qué tipo de personalidad tienes?',
    options: ['Sociable y extrovertido', 'Equilibrado', 'Reservoso e introvertido'],
  },
  {
    id: 5,
    text: '¿Qué tipo de espacio tienes disponible?',
    options: ['Casa con jardín', 'Departamento espacioso', 'Espacio pequeño'],
  },
];

export default function SurveyScreen() {
  const router = useRouter();
  const { setPet, petProfiles } = usePetStore();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Determinar la mascota ideal basada en las respuestas
      const selectedPet = findBestMatch(newAnswers);
      setPet(selectedPet);
      router.push('/results' as any);
    }
  };

  const findBestMatch = (answers: string[]) => {
    // Lógica mejorada para encontrar la mascota ideal
    const energyPreference = answers[0];
    const timeAvailable = answers[1];
    const sizePreference = answers[2];
    const personality = answers[3];
    const spaceAvailable = answers[4];

    // Puntaje para cada mascota
    const scores = petProfiles.map((pet) => {
      let score = 0;

      // Max (Labrador) - Alta energía, necesita espacio y tiempo
      if (pet.name === 'Max') {
        if (energyPreference.includes('Alta energía')) score += 2;
        if (timeAvailable.includes('Mucho tiempo')) score += 2;
        if (sizePreference.includes('Grande')) score += 2;
        if (personality.includes('Sociable')) score += 2;
        if (spaceAvailable.includes('Casa con jardín')) score += 2;
      }
      // Luna (Gato Persa) - Tranquila, independiente
      else if (pet.name === 'Luna') {
        if (energyPreference.includes('Tranquila')) score += 2;
        if (timeAvailable.includes('Poco tiempo')) score += 2;
        if (sizePreference.includes('Pequeño')) score += 2;
        if (personality.includes('Reservado')) score += 2;
        if (spaceAvailable.includes('Espacio pequeño')) score += 2;
      }
      // Rocky (Bulldog) - Moderado, adaptable
      else if (pet.name === 'Rocky') {
        if (energyPreference.includes('Moderada')) score += 2;
        if (timeAvailable.includes('Tiempo moderado')) score += 2;
        if (sizePreference.includes('Mediano')) score += 2;
        if (personality.includes('Equilibrado')) score += 2;
        if (spaceAvailable.includes('Departamento')) score += 2;
      }

      return { pet, score };
    });

    // Ordenar por puntaje y seleccionar la mejor coincidencia
    scores.sort((a, b) => b.score - a.score);
    return scores[0].pet;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>
          Pregunta {currentQuestion + 1} de {questions.length}
        </Text>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              { width: `${((currentQuestion + 1) / questions.length) * 100}%` },
            ]}
          />
        </View>
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>
          {questions[currentQuestion].text}
        </Text>
      </View>

      <View style={styles.optionsContainer}>
        {questions[currentQuestion].options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionButton}
            onPress={() => handleAnswer(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfffc',
  },
  progressContainer: {
    padding: 20,
    backgroundColor: '#99d4fd',
  },
  progressText: {
    fontSize: 16,
    color: '#fdfffc',
    marginBottom: 10,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#fdfffc',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#90ee90',
    borderRadius: 4,
  },
  questionContainer: {
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#f7c639',
    borderRadius: 10,
    margin: 20,
  },
  questionText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ee4e2d',
    textAlign: 'center',
  },
  optionsContainer: {
    padding: 20,
  },
  optionButton: {
    backgroundColor: '#99d4fd',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#90ee90',
  },
  optionText: {
    fontSize: 18,
    color: '#fdfffc',
    fontWeight: 'bold',
  },
}); 