import { request } from "superagent";
import mockData from "../mock-data.json";

const apiRoot = "/api/v1";
const mock = false;

export function getAllPlants() {
    if (mock) return Promise.resolve(mockData);
    return request
        .get(apiRoot + "/plants")
        .then(res => res.body);
}

export function getPlant(id) {
    if (mock) return Promise.resolve(mockData[id]);
    return request
    .get(apiRoot + "/plants/"+id)
    .then(res => res.body);
}

export function deletePlant(id) {
    if (mock) return Promise.resolve();
    return request
    .del(apiRoot + "/plants/"+id)
    .then(res => res.body);
}

export function postPlant(postData) {
    if (mock) return Promise.resolve(mockData[2]);
    return request
      .post(apiRoot + "/plants.new")
      .send(postData)
      .then(res => res.body);
}