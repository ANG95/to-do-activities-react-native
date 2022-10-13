import React, { createContext, useReducer } from 'react';
import { User } from '../interfaces/appInterfaces';
import { CURRENT_DATE } from '../utils/functions';
import { ActivitiesReducer, ActivitiesState } from './activitiesReducer';

type ActivitiesContextProps = {
  tasks: any[],
  user: User,
  errorMessage: string;
  saveActivities: (data: any) => Promise<void>;
  logOut: () => void;
}

const activitiesInitialState: ActivitiesState = {
  tasks: [
    {
      key: 1,
      fact: "-Unlike dogs, cats do not have a sweet tooth. Scientists believe this is due to a mutation in a key taste receptor.",
      length: 1,
      created: CURRENT_DATE,
      status: 'pending',
    },
    {
      key: 2,
      fact: "-When a cat chases its prey, it keeps its head level. Dogs and humans bob their heads up and down.",
      length: 2,
      created: CURRENT_DATE,
      status: 'completed',
    },
  ],
  user: {
    name: 'German',
    photo: 'algo.jpg'
  },
  errorMessage: ''
}

export const ActivitiesContext = createContext({} as ActivitiesContextProps);

export const ActivitiesProvider = ({ children }: any) => {

  const [state, dispatch] = useReducer(ActivitiesReducer, activitiesInitialState);

  const saveActivities = async (data) => {
    console.log('data ', data);
    dispatch({
      type: 'addTasks',
      payload: data
    });
  };

  const logOut = async () => {
    dispatch({ type: 'logout' });
  };
  return (
    <ActivitiesContext.Provider value={{
      ...state,
      saveActivities,
      logOut,
    }}>
      {children}
    </ActivitiesContext.Provider>
  )
}


