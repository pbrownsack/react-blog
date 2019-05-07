import { FETCH_USER } from '../actions/types';

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_USER: {

        }

        case USER_LOGOUT: {
            
        }

        default: {
            return state;
        }
    }
}

export default userReducer;