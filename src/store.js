import { configureStore } from '@reduxjs/toolkit';
import submitInput from './slice';

export default configureStore({
  reducer: {
    input: submitInput,
  },
});
