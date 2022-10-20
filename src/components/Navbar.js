import React from 'react'

export default function Navbar({ setGameMode }){
  return(
    <div className='navbar'>
      <button onClick={() => setGameMode('play')}>PLAY</button>
      <button onClick={() => setGameMode('create')}>CREATE</button>
    </div>
  )
}