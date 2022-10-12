import { User } from '../interfaces/appInterfaces';

export interface ActivitiesState {
    tasks: any;
    errorMessage: string;
    user: User;
}

type ActivitiesAction =
    | { type: 'logout' }


export const ActivitiesReducer = (state: ActivitiesState, action: ActivitiesAction): ActivitiesState => {

    switch (action.type) {
        case 'logout':

        default:
            return state;
    }
}