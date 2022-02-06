import { useContext } from 'react';
import { JogoContext } from './JogoContext';

export const useJogo = () => useContext(JogoContext);
