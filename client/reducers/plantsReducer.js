import { ADD_PLANT, DELETE_PLANT, RECEIVE_PLANTS } from "../actions/actions";

export default function plantsReducer(state = [], action) {
  switch (action.type) {
    case RECEIVE_PLANTS:
      return action.plants;
    case ADD_PLANT:
      return [...state, action.plant];
    case DELETE_PLANT:
      return state.filter((plant) => plant.id != action.id);
    default:
      return state;
  }
}