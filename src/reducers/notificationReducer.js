const initialState = null

export const createMessage = (content) => {
  return({
    type: 'CREATEMESSAGE',
    content
  })
}

export const voteMessage = (content) => {
  return({
    type: 'VOTEMESSAGE',
    content
  })
}

export const resetMessage = () => {
  return({
    type: 'RESETMESSAGE'
  })
}

const notificationReducer = (state = initialState, action) => {
  switch(action.type){
  case 'CREATEMESSAGE':
    return `you created '${action.content}'`

  case 'VOTEMESSAGE':
    return `you voted '${action.content}'`

  case 'RESETMESSAGE':
    return initialState

  default:
    return state
  }
}

export default notificationReducer