import { combineReducers } from 'redux';
import { GET_PICTURES,
         I_LIKE_THIS,
         I_HATE_THIS,
         I_SUPERLIKE_THIS } from '../Actions/actions';

const initial = {
  myPictures: [],
  fetchingPictures: null,
  error: null
}

const alteringState = (state, action) => {
  let stateCopy = Object.assign({}, state),
      actionCopy = Object.assign({}, action.payload);
  actionCopy.type = action.type;
  console.log('action on reducer', action)
    console.log('actionCOPY on reducer', actionCopy)
  stateCopy.myPictures = stateCopy.myPictures.filter(picture => picture.id !== actionCopy.id);
  stateCopy.myPictures.push(actionCopy);
  return stateCopy;
}

function getCatPictures(state = initial, action) {
  switch(action.type) {
    case I_HATE_THIS:
    case I_LIKE_THIS:
    case I_SUPERLIKE_THIS:
      return alteringState(state, action);
    case GET_PICTURES + '_PENDING':
      return {...state, fetchingPictures: true}
    case GET_PICTURES + '_FULFILLED':
      return {...state, fetchingPictures: false, myPictures: [...state.myPictures, action.payload.data]}
    case GET_PICTURES + '_REJECTED':
      return {...state, fetchingPictures: false, error: action.payload}
    default:
    return state;
  }
}

const reducer = combineReducers({
  thePictures: getCatPictures
})

export default reducer;
