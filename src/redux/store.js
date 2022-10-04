// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './slice';
import filterReducer from './filterSlice';

// Початкове значення стану Redux для кореневого редюсера,
// якщо не передати параметр preloadedState.
const initialState = {
  contacts: [],
  filters: '',
};

// Поки що використовуємо редюсер який
// тільки повертає отриманий стан
// const rootReducer = (state = initialState, action) => {
//   return state;
// };

// Створюємо розширення стора, щоб додати інструменти розробника
// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

// const usersSlice = createSlice({
//   name: 'users',
//   initialState: { entities: [], loading: 'idle' },
//   reducers: {
//     // standard reducer logic, with auto-generated action types per reducer
//   },
