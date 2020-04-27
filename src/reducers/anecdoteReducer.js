import anecdoteService from '../services/anecdotes'

export const createAnecdote = (anecdote) => {
  return async dispatch => {
    const content = await anecdoteService.create(anecdote)
    dispatch(
      {
        type: 'CREATE',
        content
      })
  }
}

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const content = await anecdoteService.vote(anecdote)
    dispatch(
      {
        type: 'VOTE',
        content
      })
  }
}

export const initialize = () => {
  return async dispatch => {
    const content = await anecdoteService.getAll()
    dispatch(
      {
        type: 'INITIALIZE_ANECDOTES',
        content
      })
  }
}

const anecdoteReducer = (state = [], action) => {
  switch(action.type){
  case 'VOTE':
    const index = state.findIndex((anecdote) => anecdote.id===action.content.id)
    const newState = [...state]
    newState[index]={ ...action.content }
    return newState

  case 'CREATE':
    return [...state, action.content]

  case 'INITIALIZE_ANECDOTES':
    return action.content

  default:
    return state
  }
}

export default anecdoteReducer