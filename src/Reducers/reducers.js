import { combineReducers } from 'redux';
import { GET_PICTURES } from '../Actions/actions';


const initial = {
  myPictures: [],
  fetchingPictures: null,
  error: null
}

function getCatPictures(state = initial, action) {
  switch(action.type) {
    case GET_PICTURES + '_PENDING':
      return {...state, fetchingPictures: true}
    case GET_PICTURES + '_FULFILLED':
      return {...state, fetchingPictures: false, myPictures: action.payload.data}
    case GET_PICTURES + '_REJECTED':
      return {...state, fetchingPictures: false, error: action.payload}
    default:
    return state;
  }
}

function getHumanPictures(state = initial, action) {
  switch(action.type) {
    case GET_PICTURES + '_PENDING':
      return {...state, fetchingPictures: true}
    case GET_PICTURES + '_FULFILLED':
      return {...state, fetchingPictures: false, myPictures: action.payload.data}
    case GET_PICTURES + '_REJECTED':
      return {...state, fetchingPictures: false, error: action.payload}
    default:
    return state;
  }
}


const reducer = combineReducers({
  thePictures: getCatPictures,
  humanPictures: getHumanPictures
})

export default reducer;
