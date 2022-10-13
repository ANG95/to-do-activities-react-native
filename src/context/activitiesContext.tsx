import React, { createContext, useReducer } from 'react';
import { Task, User } from '../interfaces/appInterfaces';
import { CURRENT_DATE } from '../utils/functions';
import { ActivitiesReducer, ActivitiesState } from './activitiesReducer';

type ActivitiesContextProps = {
  tasks: any[],
  user: User,
  errorMessage: string;
  saveActivities: (data: any) => Promise<void>;
  updateActivity: (id: string) => Promise<void>;
  deleteActivity: (id: string) => Promise<void>;
  logOut: () => void;
}

const activitiesInitialState: ActivitiesState = {
  tasks: [
    {
      key: '1',
      fact: "😸 cats do not have a sweet tooth. 🐯 Scientists believe this is due to a mutation in a key taste receptor.🐱",
      length: 1,
      created: CURRENT_DATE,
      status: 'pending',
    },
    {
      key: '2',
      fact: "🐱When a cat chases its prey, it keeps its head level. Dogs🐾 🐆 and humans bob their heads 🐯up and down.",
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

  const saveActivities = async (data: Task[]) => {
    dispatch({
      type: 'addTasks',
      payload: data
    });
  };

  const updateActivity = async (id: string) => {
    const indexTask = state.tasks.findIndex((item) => item.key === id);
    state.tasks[indexTask].status = 'completed';

    dispatch({
      type: 'updateTask',
      payload: state.tasks
    });
  };

  const deleteActivity = async (id: string) => {
    const updateData = state.tasks.filter((item) => item.key !== id);
    dispatch({
      type: 'deleteTask',
      payload: updateData
    });
  };

  const logOut = async () => {
    dispatch({ type: 'logout' });
  };
  return (
    <ActivitiesContext.Provider value={{
      ...state,
      saveActivities,
      updateActivity,
      deleteActivity,
      logOut,
    }}>
      {children}
    </ActivitiesContext.Provider>
  )
}


