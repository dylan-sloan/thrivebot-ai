import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Message {
  id: string;
  text: string;
}

const initialState: Message[] = [];

const userMessageSlice = createSlice({
  name: 'userMessage',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.push(action.payload);
    },
    removeMessage: (state, action: PayloadAction<string>) => {
      return state.filter(message => message.id !== action.payload);
    },
  },
});

export const { addMessage, removeMessage } = userMessageSlice.actions;
export default userMessageSlice.reducer;