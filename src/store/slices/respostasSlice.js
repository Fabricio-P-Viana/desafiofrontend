import { getAllRespostas } from '@/services/respostas';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  responses: [],
  status: 'idle',
  error: null,
};

export const fetchResponses = createAsyncThunk('respostas/fetchRespostas', async () => {
    return await getAllRespostas();
});

const responsesSlice = createSlice({
  name: 'respostas',
  initialState,
  reducers: {
    addResponse: (state, action) => {
      state.responses.push(action.payload);
    },
    removeResponse: (state, action) => {
      state.responses = state.responses.filter(response => response.id !== action.payload);
    },
    updateResponse: (state, action) => {
      const index = state.responses.findIndex(response => response.id === action.payload.id);
      if (index !== -1) {
        state.responses[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchResponses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchResponses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.responses = action.payload;
      })
      .addCase(fetchResponses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
  
});

export const { addResponse, removeResponse, updateResponse } = responsesSlice.actions;

export default responsesSlice.reducer;
