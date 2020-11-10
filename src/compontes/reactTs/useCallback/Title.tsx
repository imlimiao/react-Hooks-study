import React from 'react'

function Title() {
  console.log('Rendering Title')
  return (
    <h2>useCallback-学习</h2>
  )
}

export default React.memo(Title)
