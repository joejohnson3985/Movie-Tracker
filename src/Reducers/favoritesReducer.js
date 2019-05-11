export const favoritesReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_FAVORITES': 
      return action.favorites
    default:
      return state
  }
}