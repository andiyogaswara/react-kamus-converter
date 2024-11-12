import { configureStore } from '@reduxjs/toolkit';
import converterReducer from './redux/reducer/uiKamusConverter';

const store = configureStore({
  reducer: {
    converter: converterReducer,
  },
});

export default store;
