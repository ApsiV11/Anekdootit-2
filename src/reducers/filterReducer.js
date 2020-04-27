const initialState = null

export const setFilter = (content) => {
  return({
    type: 'SETFILTER',
    content
  })
}

const filterReducer = (state = initialState, action) => {
  switch(action.type){
  case 'SETFILTER':
    return action.content

  default:
    return state
  }
}

export default filterReducer