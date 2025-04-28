import React from 'react'
import UserProfile from '../components/UserProfile'

interface Address{
  street: string,
  suite: string,
  city: string,
  zipcode: string
}

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address,
}

const UsersPage = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await response.json()
  return (
      <>
      <ul>
        {users.map(user => (
          <div key={user.id}>
            <p>############## user : {user.id} ###################</p>
            <li>{user.name}</li>
            <li>{user.username}</li>
            <li>{user.email}</li>
            <ul>
                <li>- {user.address.street}</li>
                <li>- {user.address.suite}</li>
                <li>- {user.address.city}</li>
                <li>- {user.address.zipcode}</li>
            </ul>
          </div>
        ))}
        <h1>User</h1>
      </ul>
      </>
  )
}

export default UsersPage
