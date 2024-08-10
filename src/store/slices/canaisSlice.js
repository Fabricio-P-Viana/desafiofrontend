import { getAllCanais } from '@/services/canais';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  responses: [],
  status: 'idle',
  error: null,
};

export const fetchChannels = createAsyncThunk('canais/fetch', async () => {
  return await getAllCanais();
});


const channelsSlice = createSlice({
  name: 'canais',
  initialState,
  reducers: {
    addChannel: (state, action) => {
      state.responses.push(action.payload);
    },
    removeChannel: (state, action) => {
      state.responses = state.responses.filter(response => response.id !== action.payload);
    },
    updateChannel: (state, action) => {
      const index = state.responses.findIndex(response => response.id === action.payload.id);
      if (index !== -1) {
        state.responses[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChannels.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchChannels.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.channels = action.payload;
      })
      .addCase(fetchChannels.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { addChannel, removeChannel, updateChannel } = channelsSlice.actions;

export default channelsSlice.reducer;
