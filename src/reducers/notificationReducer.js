const initialState = null

export const setMessage = (content) => {
  return async dispatch => {
    dispatch(
      {
        type: 'SET_MESSAGE',
        content: content.message
      })
    setTimeout(() => {
      dispatch(
        {
          type: 'SET_MESSAGE',
          content: null
        }
      )
    }, content.time*1000)
  }
}

const notificationReducer = (state = initialState, action) => {
  switch(action.type){
  case 'SET_MESSAGE':
    return action.content

  default:
    return state
  }
}

export default notificationReducer