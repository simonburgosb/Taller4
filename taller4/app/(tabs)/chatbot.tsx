import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const initialBotMessage: Message = {
  id: '1',
  text: '¡Hola! Soy tu asistente virtual de PetMatch. ¿En qué puedo ayudarte hoy? Puedes preguntarme sobre:\n\n• Cuidados de mascotas\n• Recomendaciones de veterinarios\n• Información sobre diferentes tipos de mascotas\n• Consejos de entrenamiento\n• Y mucho más...',
  sender: 'bot',
  timestamp: new Date(),
};

const petKnowledge = {
  dog: {
    care: 'Los perros necesitan ejercicio diario, alimentación balanceada, visitas regulares al veterinario y mucho amor. Es importante socializarlos desde cachorros.',
    training: 'El entrenamiento debe ser consistente y positivo. Usa refuerzo positivo con premios y elogios.',
    commonIssues: 'Problemas comunes incluyen ansiedad por separación, comportamiento destructivo y problemas de socialización.',
    maintenance: 'Requerimientos de mantenimiento específicos para perros.',
  },
  cat: {
    care: 'Los gatos necesitan una caja de arena limpia, juguetes, rascador y atención veterinaria regular. Son animales independientes pero necesitan interacción social.',
    training: 'Los gatos responden bien al entrenamiento con clicker y refuerzo positivo. Es importante ser paciente y consistente.',
    commonIssues: 'Problemas comunes incluyen marcaje territorial, agresión y problemas de caja de arena.',
    maintenance: 'Requerimientos de mantenimiento específicos para gatos.',
  },
  fish: {
    care: 'Los peces necesitan un acuario limpio, parámetros de agua adecuados, alimentación regular y un ambiente sin estrés.',
    training: 'Los peces pueden ser entrenados para reconocer señales y realizar trucos básicos.',
    commonIssues: 'Problemas comunes incluyen enfermedades, estrés y problemas de calidad del agua.',
    maintenance: 'Es importante hacer cambios parciales de agua semanales y monitorear la calidad del agua regularmente.',
  },
  hamster: {
    care: 'Los hámsters necesitan una jaula espaciosa, rueda de ejercicio, juguetes y una dieta balanceada.',
    training: 'Los hámsters pueden ser entrenados para responder a su nombre y realizar trucos simples.',
    commonIssues: 'Problemas comunes incluyen obesidad, estrés y problemas de comportamiento.',
    maintenance: 'Mantén la jaula en un lugar tranquilo, lejos de corrientes de aire y luz solar directa.',
  },
};

export default function ChatbotScreen() {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([initialBotMessage]);
  const [inputText, setInputText] = useState('');
  const scrollViewRef = useRef<ScrollView>(null);

  const handleSend = () => {
    if (inputText.trim() === '') return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Simular respuesta del bot
    setTimeout(() => {
      const botResponse = generateBotResponse(inputText);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    // Detectar tipo de mascota mencionada
    const petTypes = ['perro', 'gato', 'pez', 'hámster', 'hamster'];
    const mentionedPet = petTypes.find(pet => input.includes(pet));
    
    if (mentionedPet) {
      const petKey = mentionedPet === 'hámster' || mentionedPet === 'hamster' ? 'hamster' : mentionedPet;
      const petInfo = petKnowledge[petKey as keyof typeof petKnowledge];
      
      if (input.includes('cuidado') || input.includes('cuidados')) {
        return `Sobre los cuidados de ${mentionedPet}s:\n\n${petInfo.care}`;
      } else if (input.includes('entrenamiento') || input.includes('entrenar')) {
        return `Sobre el entrenamiento de ${mentionedPet}s:\n\n${petInfo.training}`;
      } else if (input.includes('problema') || input.includes('problemas')) {
        return `Problemas comunes en ${mentionedPet}s:\n\n${petInfo.commonIssues}`;
      }
    }

    // Respuestas generales
    if (input.includes('hola') || input.includes('hi')) {
      return '¡Hola! ¿En qué puedo ayudarte hoy?';
    } else if (input.includes('gracias')) {
      return '¡De nada! ¿Hay algo más en lo que pueda ayudarte?';
    } else if (input.includes('veterinario') || input.includes('vet')) {
      return 'Puedo ayudarte a encontrar veterinarios cercanos. ¿Te gustaría ver una lista de profesionales en tu área?';
    } else if (input.includes('simulador')) {
      return '¡Claro! Puedo ayudarte a acceder al simulador de mascotas. ¿Qué tipo de mascota te gustaría simular?';
    }

    return 'Lo siento, no entiendo completamente tu pregunta. ¿Podrías reformularla? Estoy aquí para ayudarte con información sobre mascotas, cuidados, veterinarios y más.';
  };

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
    >
      <ScrollView
        ref={scrollViewRef}
        style={styles.messagesContainer}
        contentContainerStyle={styles.messagesContent}
      >
        {messages.map((message) => (
          <View
            key={message.id}
            style={[
              styles.messageBubble,
              message.sender === 'user' ? styles.userBubble : styles.botBubble,
            ]}
          >
            <Text style={styles.messageText}>{message.text}</Text>
            <Text style={styles.timestamp}>
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Escribe tu mensaje..."
          placeholderTextColor="#666"
          multiline
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={handleSend}
          disabled={inputText.trim() === ''}
        >
          <MaterialIcons
            name="send"
            size={24}
            color={inputText.trim() === '' ? '#666' : '#4CAF50'}
          />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    padding: 16,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
  },
  userBubble: {
    backgroundColor: '#4CAF50',
    alignSelf: 'flex-end',
  },
  botBubble: {
    backgroundColor: '#f0f0f0',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    maxHeight: 100,
  },
  sendButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
  },
}); 