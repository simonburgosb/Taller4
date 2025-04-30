import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Pet {
  id: string;
  name: string;
  type: string;
  description: string;
  image: string;
  traits: string[];
}

interface PetStore {
  pet: Pet | null;
  hasPet: boolean;
  petProfiles: Pet[];
  setPet: (pet: Pet) => void;
  clearPet: () => void;
}

const petProfiles: Pet[] = [
  {
    id: '1',
    name: 'Max',
    type: 'Perro Labrador',
    description: 'Max es un labrador juguetón y amigable que adora estar activo y socializar. Perfecto para personas que disfrutan de actividades al aire libre y tienen tiempo para dedicarle.',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=500',
    traits: ['Energético', 'Sociable', 'Leal', 'Juguetón'],
  },
  {
    id: '2',
    name: 'Luna',
    type: 'Gato Persa',
    description: 'Luna es una gata persa tranquila y elegante que disfruta de la compañía pero también de su espacio. Ideal para personas que buscan una mascota independiente pero cariñosa.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500',
    traits: ['Tranquila', 'Elegante', 'Independiente', 'Cariñosa'],
  },
  {
    id: '3',
    name: 'Rocky',
    type: 'Perro Bulldog',
    description: 'Rocky es un bulldog tranquilo y leal que disfruta de la compañía y los momentos de relax. Perfecto para personas que buscan una mascota calmada y afectuosa.',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500',
    traits: ['Tranquilo', 'Leal', 'Protector', 'Afectuoso'],
  },
];

export const usePetStore = create<PetStore>()(
  persist(
    (set) => ({
      pet: null,
      hasPet: false,
      petProfiles,
      setPet: (pet) => set({ pet, hasPet: true }),
      clearPet: () => set({ pet: null, hasPet: false }),
    }),
    {
      name: 'pet-storage',
    }
  )
); 