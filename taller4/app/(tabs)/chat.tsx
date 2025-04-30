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

const initialBotMessage = {
  id: '1',
  text: '¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?',
  sender: 'bot' as const,
  timestamp: new Date(),
};

export default function ChatScreen() {
  const { pet } = usePetStore();
  const [messages, setMessages] = useState<Message[]>([initialBotMessage]);
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
        text: 'Gracias por tu mensaje. Estoy aquí para ayudarte con cualquier pregunta sobre el cuidado de tu mascota.',
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
        <Image source={{ uri: pet?.image }} style={styles.petImage} />
        <View style={styles.headerText}>
          <Text style={styles.title}>Chat con {pet?.name}</Text>
          <Text style={styles.subtitle}>Tu asistente virtual</Text>
        </View>
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
            {message.sender === 'bot' && (
              <Image source={{ uri: pet?.image }} style={styles.messageAvatar} />
            )}
            <View style={styles.messageContent}>
              <Text style={styles.messageText}>{message.text}</Text>
              <Text style={styles.timestamp}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
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
          placeholderTextColor="#99d4fd"
          multiline
        />
        <TouchableOpacity 
          style={[styles.sendButton, !inputText.trim() && styles.sendButtonDisabled]} 
          onPress={handleSend}
          disabled={!inputText.trim()}
        >
          <MaterialCommunityIcons name="send" size={24} color="#fdfffc" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#90ee90',
  },
  petImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#ee4e2d',
  },
  headerText: {
    marginLeft: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ee4e2d',
  },
  subtitle: {
    fontSize: 16,
    color: '#fdfffc',
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    padding: 20,
  },
  messageBubble: {
    flexDirection: 'row',
    maxWidth: '80%',
    marginBottom: 15,
    alignItems: 'flex-end',
  },
  messageAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8,
    borderWidth: 2,
    borderColor: '#ee4e2d',
  },
  messageContent: {
    flex: 1,
  },
  userMessage: {
    alignSelf: 'flex-end',
  },
  botMessage: {
    alignSelf: 'flex-start',
  },
  messageText: {
    padding: 15,
    borderRadius: 20,
    fontSize: 16,
    color: '#fdfffc',
    backgroundColor: '#f7c639',
    borderWidth: 2,
    borderColor: '#90ee90',
  },
  timestamp: {
    fontSize: 12,
    color: '#99d4fd',
    marginTop: 5,
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#99d4fd',
    borderTopWidth: 2,
    borderTopColor: '#90ee90',
    alignItems: 'flex-end',
  },
  input: {
    flex: 1,
    backgroundColor: '#fdfffc',
    padding: 15,
    borderRadius: 25,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#90ee90',
    maxHeight: 100,
    minHeight: 50,
  },
  sendButton: {
    backgroundColor: '#ee4e2d',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#90ee90',
  },
  sendButtonDisabled: {
    backgroundColor: '#99d4fd',
    opacity: 0.5,
  },
}); 