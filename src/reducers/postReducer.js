import { FETCH_POSTS, FETCH_POST } from '../actions/types';

const postReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_POSTS: {
            break;
        }

        case FETCH_POST: {
            break;
        }

        default: {
            return state;
        }
    }
}

export default postReducer;