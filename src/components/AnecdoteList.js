import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {voteAnecdote} from '../reducers/anecdoteReducer'

const Anecdote = ({anecdote, vote}) => (
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote(anecdote.id)}>vote</button>
      </div>
    </div>
)

const AnecdoteList = (props) => {

  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteAnecdote(id))
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