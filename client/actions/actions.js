import { postPlant, getAllPlants, deletePlant } from "../apis/plantsApi";

export const RECEIVE_PLANTS = "RECEIVE_PLANTS";
export const ADD_PLANT = "ADD_PLANT";
export const DELETE_PLANT = "DELETE_PLANT";

export function fetchPlants() {
  return (dispatch) => {
    getAllPlants().then((plants) => {
      console.log(plants)
      dispatch({
        type: RECEIVE_PLANTS,
        plants: plants,
      });
    });
  };
}

export function createPlant(plantData) {
  return (dispatch) => {
    postPlant(plantData).then((plant) => {
      dispatch({
        type: RECEIVE_PLANTS,
        plant: plant,
      });
    });
  };
}

export function removePlant(id) {
  return (dispatch) => {
    deletePlant(id).then(() => {
      dispatch({
        type: DELETE_PLANT,
        id: id,
      });
    });
  };
}
