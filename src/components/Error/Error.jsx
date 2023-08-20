import React from 'react'

const Error = ({error}) => {
  return (
    error? <h2>{error}</h2> : <h2>Not found page</h2>
  )
}

export default Error