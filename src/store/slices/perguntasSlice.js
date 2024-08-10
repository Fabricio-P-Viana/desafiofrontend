import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllPerguntasbyCanalId } from '@/services/perguntas';

const initialState = {
  questions: [],
  status: 'idle',
  error: null,
};

export const fetchQuestions = createAsyncThunk('perguntas/fetch', async (canalId) => {
  return await getAllPerguntasbyCanalId(canalId);
});

const perguntasSlice = createSlice({
  name: 'perguntas',
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      state.questions.push(action.payload);
    },
    removeQuestion: (state, action) => {
      state.questions = state.questions.filter(question => question.id !== action.payload);
    },
    updateQuestion: (state, action) => {
      const index = state.questions.findIndex(question => question.id === action.payload.id);
      if (index !== -1) {
        state.questions[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.questions = action.payload;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addQuestion, removeQuestion, updateQuestion } = perguntasSlice.actions;
export default perguntasSlice.reducer;
