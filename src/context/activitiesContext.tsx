import React, { createContext, useReducer } from 'react';
import { User } from '../interfaces/appInterfaces';
import { ActivitiesReducer, ActivitiesState } from './activitiesReducer';

type ActivitiesContextProps = {
    tasks: any,
    user: User,
    errorMessage: string;
    logOut: () => void;
}

const activitiesInitialState: ActivitiesState = {
    tasks: [],
    user: {
        name: 'German',
        photo: 'algo.jpg'
    },
    errorMessage: ''
}

export const ActivitiesContext = createContext({} as ActivitiesContextProps);

export const ActivitiesProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(ActivitiesReducer, activitiesInitialState);

    const logOut = async () => {
        dispatch({ type: 'logout' });
    };

    return (
        <ActivitiesContext.Provider value={{
            ...state,
            logOut,
        }}>
            {children}
        </ActivitiesContext.Provider>
    )
}


