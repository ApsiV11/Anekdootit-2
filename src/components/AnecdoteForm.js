import React from 'react'
import { useDispatch } from 'react-redux'

import { createAnecdote } from '../reducers/anecdoteReducer'
import { setMessage} from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const dispatch = useDispatch()

  const createNew = async (event) => {
    event.preventDefault()
    const value = event.target.content.value
    dispatch(createAnecdote(value))
    dispatch(setMessage({ message: `you created '${value}'`, time: 5 }))
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