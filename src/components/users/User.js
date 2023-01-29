import React, { Component } from 'react'

export class User extends Component {
  render() {
    return (
      <div>
        <div class="card">
            <img class="card-img-top" src={user.avatar_url} alt=""/>
            <div class="card-body">
                <h4 class="card-title">{user.login}</h4>
                <p class="card-text">
                    <a href={user.html_url} className='btn btn-success'>Show more</a>
                    <a href={user.repos_url} className='btn btn-warning'>Repositories</a>
                </p>
            </div>
        </div>
      </div>
    )
  }
}

export default User