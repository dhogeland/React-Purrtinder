import axios from 'axios';


export const GET_PICTURES = 'GET_PICTURES';
export const I_LIKE_THIS = 'I_LIKE_THIS';
export const I_HATE_THIS = 'I_HATE_THIS';
export const I_SUPERLIKE_THIS = 'I_SUPERLIKE_THIS';



export function getCatPictures() {
  const request = axios.get('/api/getCatPictures')
    return {
      type: GET_PICTURES,
      payload: request
    }
}

export function iLikeThis(picture) {
  return {
    type: I_LIKE_THIS,
    payload: picture
  }
}

export function iHateThis(picture) {
  return {
    type: I_HATE_THIS,
    payload: picture
  }
}

export function iSuperLikeThis(picture) {
  return {
    type: I_SUPERLIKE_THIS,
    payload: picture
  }
}

export function getHumanPictures() {
  const request = axios.get('/api/getHumanPictures')
    return {
      type: GET_PICTURES,
      payload: request
    }
}
