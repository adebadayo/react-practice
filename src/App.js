import React, { useState } from 'react'


const INITIAL_COUNT = 0
const INITIAL_NAME = ''

const SampleComponent = () => {
  const [count, setCount] = useState(INITIAL_COUNT)

  const [name, setName] = useState(INITIAL_NAME)

  const countIncrement = () => setCount(prevCount =>  prevCount + 1 )
  const countDecrement = () => setCount(prevCount =>  prevCount - 1 )
  const resetCount = () => setCount(INITIAL_COUNT)

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  return (
    <div>
      <p>現在のカウント : <b>{ count }</b></p>
      <p>countの初期値 : <b>{ INITIAL_COUNT }</b></p>

      <button onClick={countIncrement}>increment</button>
      <button onClick={countDecrement}>decrement</button>
      <button onClick={resetCount}>reset</button>
      <br/>

      <input type="text" onChange={handleChangeName}/>

      <br/>
      <p>{ name }</p>
    </div>
  )

}

export default function App(){
  return <SampleComponent />
}