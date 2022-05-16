import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchMessage = createAsyncThunk(
  'greetings/fetchMessage',
  async () => {
    const message = await fetch('http://localhost:3000/api/v1/greetings');
    const res = await message.json();
    return res.message;
  },
);

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    message: 'This is where messages go',
  },
  reducers: {
    getMessage: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.message = 'hey';
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchMessage.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.message = action.payload;
    });
  },
});

export const { getMessage } = greetingSlice.actions;

export default greetingSlice.reducer;
