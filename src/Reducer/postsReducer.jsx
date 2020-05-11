import { ADD_POST, UPDATE_POST, DELETE_POST } from '../Actions/postsActions';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_POST:
      return [...state, action.payload];
    case UPDATE_POST:
      return state.map((post, i) => {
        if(i === action.payload.index) return action.payload.post;
        return post;
      });
    case DELETE_POST:
      return state.filter((_, i) => i !== action.payload);
    default:
      return state;
  }
}
