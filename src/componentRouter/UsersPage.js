import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
  useParams,
} from "react-router-dom";
import { getUsers } from "./Api/Users";

export default class UsersPage extends Component {
  state = {
    users: [],
  };

  componentDidMount = () => {
    getUsers()
      .then((response) => {
        this.setState({
          users: response.data,
        });
        // console.log(response.data);
      })
      .catch((error) => {
        alert("error 404");
      });
  };

  render() {
    return (
      <div>
        <h2>Users</h2>
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>
              {user.id} {user.name}
              <Link to={`/users/${user.id}/${user.name}`}>View</Link>
              <button onClick={() => this.deleteUser(user)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
