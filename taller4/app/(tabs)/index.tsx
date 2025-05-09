import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Fondo amarillo */}
      <View style={styles.topBackground} />
      
      {/* Fondo azul con onda */}
      <View style={styles.bottomBackground}>
        {/* Huellas decorativas */}
        <View style={[styles.pawPrint, { bottom: '60%', right: '15%' }]} />
        <View style={[styles.pawPrint, { bottom: '30%', left: '10%' }]} />
        <View style={[styles.pawPrint, { bottom: '10%', right: '25%' }]} />
        <View style={[styles.pawPrint, { bottom: '45%', left: '25%' }]} />
      </View>
      
      {/* Encabezado con flecha */}
      <View style={styles.header}>
        <Text style={styles.headerText}>INICIO</Text>
        <Text style={styles.arrow}>→</Text>
      </View>
      
      {/* Contenido principal */}
      <View style={styles.content}>
        <Text style={styles.welcomeText}>¡BIENVENIDO!</Text>
        
        {/* Botones de menú */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => router.push('/(tabs)/chat')}
          >
            <Text style={styles.buttonText}>Chat con IA</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.button}
            onPress={() => router.push('/(tabs)/simulator')}
          >
            <Text style={styles.buttonText}>Probar simulador</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.button}
            onPress={() => router.push('/(tabs)/professionals')}
          >
            <Text style={styles.buttonText}>Hablar con profesionales</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'SourGummy_400Regular',
    flex: 1,
    backgroundColor: 'white',
  },
  topBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '40%',
    backgroundColor: '#FDCF4A', // Color amarillo más cercano al de la imagen
  },
  bottomBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '70%',
    backgroundColor: '#8CD3FF', // Color azul más claro similar al de la imagen
    borderTopLeftRadius: width * 0.5,
    borderTopRightRadius: width * 0.5,
  },
  pawPrint: {
    position: 'absolute',
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: '#5CB3E5', // Huellas en azul más oscuro
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    zIndex: 1,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textDecorationLine: 'underline',
    fontFamily: 'SourGummy_400Regular',
  },
  arrow: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '20%',
    zIndex: 1,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 50,
    fontFamily: 'SourGummy_400Regular',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#6DD26D', // Verde similar al de la imagen
    width: '80%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    fontFamily: 'SourGummy_400Regular',
  },
});