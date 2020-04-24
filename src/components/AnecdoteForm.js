import React from 'react'
import { useDispatch } from 'react-redux'

import {createAnecdote} from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {
  const dispatch = useDispatch()

  const createNew = (event) => {
    event.preventDefault()
    dispatch(createAnecdote(event.target.content.value))
  }

  return(
    <div>
      <h2>create new</h2>
        <form onSubmit={createNew}>
        <div>
            <input name='content'/>
        </div>
        <button type='submit'>create</button>
      </form>
    </div>
  )

}

export default AnecdoteForm