import { useContext } from 'react';
import AppContext from '../Context/AppContext';

export const useAppContext = () => {
  const appContext = useContext(AppContext);
  if (!appContext) {
    throw new Error('useAppContext has to be used within AppContext.Provider.');
  }
  return appContext;
};
