import React, { Component } from 'react';
import axios from 'axios';

class CreateUser extends Component {

  state = {
    users: [],
    username : ''
  }

 getUsers = async () => {
  const res = await axios.get('http://localhost:4000/api/users');
  this.setState({
    users : res.data
  });
}

  async componentDidMount() {
    this.getUsers();
  }

  onSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:4000/api/users', {
      username : this.state.username
    });
    this.setState({
      username : ''
    });
    this.getUsers();
  }

  onChangeUsername = (e) => {
    this.setState({
      username : e.target.value
    });
  }

  deleteUser = async (id) => {
    await axios.delete(`http://localhost:4000/api/users/${id}`);
    this.getUsers();

  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="card card-body">
            <h3>Create new user </h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input type="text" value={this.state.username} className="form-control" onChange={this.onChangeUsername}/>
              </div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-8">
          <ul className="list-group">
            {this.state.users.map(user => <li key={user._id} className="list-group-item list-group-item-action" onDoubleClick={()=>this.deleteUser(user._id)}>{user.username}</li>)}
          </ul>
        </div>
      </div>
    );
  }

}

export default CreateUser;
