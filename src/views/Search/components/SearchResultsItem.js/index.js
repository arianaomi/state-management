import React from 'react'

export default function SearchResultItem({ user }) {
  return (
    <div
      style={{
        backgroundColor: 'pink',
        padding: 5,
        margin: 10
      }}
    >
      <h3>{user.name}</h3>
      <h4>{user.username}</h4>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  )
}