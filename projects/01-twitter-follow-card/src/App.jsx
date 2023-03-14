import React from 'react'
import './App.css'

import TwitterFollowCard from './TwitterFollowCard'

const users = [
  {
    userName: 'Midudev',
    name:'Miguel Angel Duran',
    isFollowing: false
  },
  {
    userName: 'Fran08',
    name:'Franciso Solis Martinez',
    isFollowing: false
  },
  {
    userName: 'Astra.exe',
    name:'Juan Jose Ramirez',
    isFollowing: true
  }
]


function App() {
  return (
    <section className='App'>
      {
        users.map(({userName, name, isFollowing}) => (
          <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}>
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  );
}

export default App
