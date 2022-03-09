import React, { Component } from 'react'

interface User {
  name: string,
  age?: number
}
interface State {
  user: User
  hobbies: string[]
  time: string
}
export default  class Immutable extends Component<{}, State> {
  state: State = {
    time: '2021',
    user: {name: 'bella'},
    hobbies: ['running']
  }

  // 错误的案例
  falseCase = () => {
    // 案例一
    this.state.user.age = 13
    this.setState({
        user: this.state.user, 
    })

    // 案例二
    this.setState({
        user: Object.assign(this.state.user, {age: 13})
    })

    // 案例三
    this.setState({
        hobbies: this.state.hobbies.reverse(),
    })

    // 案例四
    this.state.hobbies.length = 0
    this.setState({
        hobbies: this.state.hobbies,
    })
  }

  // 正确的案例
  trueCase = () => {
    // 案例一
    this.setState({
        user: {...this.state.user, age: 13}
    })

    // 案例二
    this.setState({
        user: Object.assign({},this.state.user, {age: 13})
    })

    // 案例三
    this.setState({
        hobbies: [...this.state.hobbies].reverse()
    })

    // 案例四
    this.setState({
        hobbies: []
    })
  }

  render() {
    return (
      <>
        <div>Immutable {this.state.user.name}</div>

        <button onClick={this.trueCase}>change</button>
      </>
    )
  }
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


