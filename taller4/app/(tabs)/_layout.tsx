import { Stack } from 'expo-router';
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#fff',
        tabBarStyle: {
          flexDirection: 'row',
          backgroundColor: '#3CB4E7', // Azul para la barra de navegación
          paddingVertical: 10,
          justifyContent: 'space-around',
          borderTopWidth: 1,
          borderTopColor: '#2A9BCB',
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
          tabBarStyle: { display: 'none' },
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="professionals"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="doctor" size={size} color={color} />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="simulator"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../../assets/iconos/simulador amarillo.svg') : require('../../assets/iconos/simulador blanco.svg')}
              style={{ width: 24, height: 24 }}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chat" size={size} color={color} />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../../assets/iconos/perfilAmarillo.svg') : require('../../assets/iconos/perfilBlanco.svg')}
              style={{ 
                width: 24, 
                height: 24,     
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 12,}}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
    </Tabs>
  );
}
