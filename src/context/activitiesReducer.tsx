import { User } from '../interfaces/appInterfaces';

export interface ActivitiesState {
    tasks: any[];
    errorMessage: string;
    user: User;
}

type ActivitiesAction =
    | { type: 'logout' }
    | { type: 'addTasks', payload: any[] }
    | { type: 'updateTask', payload: any[]}
    | { type: 'deleteTask', payload: any[]}

export const ActivitiesReducer = (state: ActivitiesState, action: ActivitiesAction): ActivitiesState => {
    switch (action.type) {
        case 'addTasks':
            return {
                ...state,
                tasks: [...action.payload, ...state.tasks]
            }
        case 'updateTask':
            return {
                ...state,
                tasks: action.payload
            }
        case 'deleteTask':
            return {
                ...state,
                tasks: action.payload
            }
        case 'logout':

        default:
            return state;
    }
}