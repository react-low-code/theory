import React, { Component } from 'react'

export default  class Immutable extends Component {
  render() {
    return (
      <div>Immutable</div>
    )
  }
}

interface User {
    name: string,
    age?: number
}

let user: User = {
    name: 'Bela'
}

user.name = 'CI' 
user.age = 12

user = {name: 'Bella'}

function addAgeMutable(user: User) {
    user.age = 12
    return user
}

function addAgeImmutable(user: User) {
  const other = Object.assign({}, user)
  other.age = 12
  return other
}

let user1Original = {name: 'Bella'}
let user1New = addAgeMutable(user1Original)

let user2Original = {name: 'Bella'}
let user2New = addAgeImmutable(user2Original)

console.log('user1Original 与 user1New 相同吗?',user1Original === user1New)
console.log('user2Original 与 user2New 相同吗?',user2Original === user2New)


