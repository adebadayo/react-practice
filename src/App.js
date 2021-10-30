import React, { useState } from 'react'

const LogoutButton = (props) => (
  <button onClick={props.toggleIsLoggedIn}>ログアウト</button>
)
const LoginButton = (props) => (
  <button onClick={props.toggleIsLoggedIn}>ログイン</button>
)
// const LoginButton

const LoginControl = () => {
  const [isLoggedIn, setIsLoggedInState] = useState(false)

  const toggleIsLoggedIn = () => {
    setIsLoggedInState(!isLoggedIn)
  }

  if(isLoggedIn){
    return <LoginButton toggleIsLoggedIn={toggleIsLoggedIn}/>
  }

  return <LogoutButton toggleIsLoggedIn={toggleIsLoggedIn}/>
}

export default function App(){
  return <LoginControl />
}