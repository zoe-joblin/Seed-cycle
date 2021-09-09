import request from 'superagent'

export const getPlant = () => {
  return request.get('/api/v1/plants')
    .then(response => {
      console.log(response)
      return response.body
    })
}

// // TODO: GET all plants

// // TODO: GET plant (:id)

// // TODO: POST new plant

// // TODO: DELETE plant