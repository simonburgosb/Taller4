import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { usePetStore } from '../../hooks/usePetStore';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const getBotResponse = (message: string, pet: any): string => {
  const lowerMessage = message.toLowerCase();

  // Preguntas sobre el nombre
  if (lowerMessage.includes('nombre') || lowerMessage.includes('cómo te llamas')) {
    return `¡Hola! Me llamo ${pet?.name}. ¿En qué puedo ayudarte?`;
  }

  // Preguntas sobre el tipo de mascota
  if (lowerMessage.includes('qué eres') || lowerMessage.includes('qué tipo de mascota')) {
    return `Soy un ${pet?.type}. ¿Te gustaría saber más sobre mi raza?`;
  }

  // Preguntas sobre características
  if (lowerMessage.includes('características') || lowerMessage.includes('rasgos') || lowerMessage.includes('cómo eres')) {
    return `Mis principales características son: ${pet?.traits.join(', ')}. ¿Hay algo específico que te gustaría saber sobre estas características?`;
  }

  // Preguntas sobre alimentación
  if (lowerMessage.includes('comida') || lowerMessage.includes('alimentación') || lowerMessage.includes('qué comes')) {
    return `Como ${pet?.type}, necesito una dieta balanceada. Te recomiendo consultar con un veterinario para una dieta específica, pero generalmente necesito proteínas de alta calidad y nutrientes esenciales.`;
  }

  // Preguntas sobre ejercicio
  if (lowerMessage.includes('ejercicio') || lowerMessage.includes('actividad') || lowerMessage.includes('paseo')) {
    return `Soy ${pet?.traits.includes('energético') ? 'muy activo' : 'moderadamente activo'}. Necesito ejercicio diario para mantenerme saludable y feliz. ¿Te gustaría saber más sobre rutinas de ejercicio?`;
  }

  // Respuesta por defecto
  return `Holiiii, soy tu asistente virtual`;
};

export default function ChatScreen() {
  const { pet } = usePetStore();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: `Holiiii, soy tu asistente virtual`,
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    setInputText('');

    // Simular respuesta del bot
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputText, pet),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
    >
      <View style={styles.header}>
        <Text style={styles.chatTitle}>CHAT</Text>
        <View style={styles.petContainer}>
          <Text style={styles.petName}>Rocky</Text>
          <Text style={styles.petSubtitle}>Tu asistente virtual</Text>
          <View style={styles.avatarContainer}>
            <Image 
              source={{ uri: pet?.image || 'https://placekitten.com/200/200' }} 
              style={styles.petAvatar} 
            />
          </View>
        </View>
        
        {/* Decorative paw prints */}
        <View style={[styles.pawPrint, { top: 20, left: 20 }]} />
        <View style={[styles.pawPrint, { top: 40, left: 50 }]} />
        <View style={[styles.pawPrint, { top: 15, right: 30 }]} />
        <View style={[styles.pawPrint, { top: 60, right: 60 }]} />
        <View style={[styles.pawPrint, { bottom: 20, left: 40 }]} />
        <View style={[styles.pawPrint, { bottom: 30, right: 30 }]} />
      </View>

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
              message.sender === 'user' ? styles.userMessage : styles.botMessage,
            ]}
          >
            <View style={styles.messageContent}>
              <Text style={styles.messageText}>{message.text}</Text>
              <Text style={styles.timestamp}>
                {message.sender === 'bot' ? 'fecha' : ''}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Escribe tu mensaje..."
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity 
          style={styles.sendButton} 
          onPress={handleSend}
          disabled={!inputText.trim()}
        >
          <MaterialCommunityIcons name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation Bar */}
      {/* <View style={styles.bottomNavBar}>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="home" size={26} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="chat" size={26} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="paw" size={26} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="account-group" size={26} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="dog" size={26} color="white" />
        </TouchableOpacity>
      </View> */}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: '#7ADE77', // Verde brillante similar a la imagen
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'relative',
    overflow: 'hidden',
    alignItems: 'center',
    fontFamily: 'SourGummy_400Regular',
  },
  chatTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    position: 'absolute',
    top: 15,
    left: 15,
    textDecorationLine: 'underline',
    fontFamily: 'SourGummy_400Regular',
  },
  petContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  petName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#553800', // Marrón oscuro
    marginBottom: 5,
    fontFamily: 'SourGummy_400Regular',
  },
  petSubtitle: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
    fontFamily: 'SourGummy_400Regular',
  },
  avatarContainer: {
    width: 80, 
    height: 80,
    borderRadius: 40, 
    backgroundColor: '#7ADE77',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderWidth: 3,
    borderColor: '#7ADE77',
    overflow: 'visible',
    position: 'relative',
    zIndex: 5,
  },
  petAvatar: {
    width: 70, 
    height: 70,
    borderRadius: 35,
    backgroundColor: '#FDCF4A',
  },
  pawPrint: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 100, 0, 0.2)', // Verde oscuro semi-transparente
  },
  messagesContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  messagesContent: {
    padding: 16,
    paddingBottom: 30,
  },
  messageBubble: {
    marginBottom: 16,
    maxWidth: '75%',
  },
  userMessage: {
    alignSelf: 'flex-end',
  },
  botMessage: {
    alignSelf: 'flex-start',
  },
  messageContent: {
    backgroundColor: '#FDCF4A', // Amarillo para los mensajes
    borderRadius: 18,
    padding: 12,
    paddingBottom: 8,
  },
  messageText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'SourGummy_400Regular',
  },
  timestamp: {
    fontSize: 12,
    color: '#555',
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 12,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 10,
    fontSize: 16,
    fontFamily: 'SourGummy_400Regular',
  },
  sendButton: {
    backgroundColor: '#3CB4E7', // Azul del botón de enviar
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomNavBar: {
    flexDirection: 'row',
    backgroundColor: '#3CB4E7', // Azul para la barra de navegación
    paddingVertical: 10,
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#2A9BCB',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
});