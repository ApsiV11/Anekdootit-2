const initialState = { message: null, timeoutId: 0 }

export const setMessage = (content) => {
  return async dispatch => {
    const timeoutId = setTimeout(() => {
      dispatch(
        {
          type: 'SET_MESSAGE',
          content: {
            message: null,
            timeoutId: 0
          }
        }
      )
    }, content.time*1000)
    dispatch(
      {
        type: 'SET_MESSAGE',
        content: {
          message: content.message,
          timeoutId: timeoutId
        }
      })
    console.log(timeoutId)
  }
}

const notificationReducer = (state = initialState, action) => {
  switch(action.type){
  case 'SET_MESSAGE':
    clearTimeout(state.timeoutId)
    return { message: action.content.message, timeoutId:  action.content.timeoutId }

  default:
    return state
  }
}

export default notificationReducer