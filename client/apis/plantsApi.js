import { request } from "superagent";
import mockData from "../mock-data.json";

const apiRoot = "/api";
const mock = true;

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
    return request
        .del(apiRoot + "/plants/"+id)
        .then(res => res.body);
}

export function addPlant(postData) {
    return request
      .post(apiRoot + "/plants")
      .send(postData)
      .then(res => res.body);
}