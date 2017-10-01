import axios from 'axios';


export const GET_PICTURES = 'GET_PICTURES';



export function getCatPictures() {
  const request = axios.get('/api/getCatPictures')
    return {
      type: GET_PICTURES,
      payload: request
    }
}

export function getHumanPictures() {
  const request = axios.get('/api/getHumanPictures')
    return {
      type: GET_PICTURES,
      payload: request
    }
}
