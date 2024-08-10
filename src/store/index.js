import { configureStore } from '@reduxjs/toolkit';
import canaisSlice from './slices/canaisSlice';
import perguntasSlice from './slices/perguntasSlice';
import respostasSlice from './slices/respostasSlice';


const store = configureStore({
  reducer: {
    perguntas: perguntasSlice,
    respostas: respostasSlice,
    canais: canaisSlice,
  },
});

export default store;
