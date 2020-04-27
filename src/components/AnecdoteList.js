import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { voteAnecdote } from '../reducers/anecdoteReducer'

import { setMessage } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, vote }) => (
  <div key={anecdote.id}>
    <div>
      {anecdote.content}
    </div>
    <div>
        has {anecdote.votes}
      <button onClick={() => vote(anecdote)}>vote</button>
    </div>
  </div>
)

const AnecdoteList = () => {

  const anecdotes = useSelector(state =>
    state.anecdotes.filter((anecdote) => {
      if(state.filter) {
        return anecdote.content.includes(state.filter)
      }
      return anecdote
    })
  )
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    dispatch(voteAnecdote(anecdote))
    dispatch(setMessage({ message: `you voted '${anecdote.content}'`, time: 5 }))
  }

  return(
    <div>
      {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          vote={vote}
        />
      )}
    </div>
  )
}

export default AnecdoteList