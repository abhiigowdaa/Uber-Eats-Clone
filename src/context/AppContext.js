// src/context/AppContext.js
import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  user: null,
  cart: [],
  restaurants: [],
  currentLocation: null,
  isLoading: false
};

const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'REMOVE_FROM_CART':
      return { 
        ...state, 
        cart: state.cart.filter(item => item.id !== action.payload) 
      };
    case 'SET_RESTAURANTS':
      return { ...state, restaurants: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};
