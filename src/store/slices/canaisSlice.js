import { createCanal, getAllCanais } from '@/services/canais';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  responses: [],
  status: 'idle',
  error: null,
};

export const fetchChannels = createAsyncThunk('canais/fetch', async () => {
  return await getAllCanais();
});

export const addNewChannel = createAsyncThunk('canais/addNewChannel', async (nome, { dispatch }) => {
  const newChannel = await createCanal(nome);
  dispatch(addChannel(newChannel));
  return newChannel;
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
      })
      .addCase(addNewChannel.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addNewChannel.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.channels.push(action.payload);
      })
      .addCase(addNewChannel.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { addChannel, removeChannel, updateChannel } = channelsSlice.actions;

export default channelsSlice.reducer;
