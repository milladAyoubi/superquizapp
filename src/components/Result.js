import React from 'react'

const Result = ({retry, result}) => {
  return (
    <div className='quiz-result'>
    <h2>Result: {result.percentage}%</h2>
    <p>Selected: {result.correct} out of {result.total}</p>
    <button onClick={retry}>Retry</button>
    </div>
  )
}

export default Result
