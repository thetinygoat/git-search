import React, { Component } from 'react';
import axios from 'axios'
import Searchbar from './components/Searchbar/Searchbar'
import Info from './components/Info/Info'
import './App.css'
class App extends Component {

  client_id = "Iv1.3710c3ff5670c7be";
  client_secret = "83ff1328730d0264d659a0ca790f4062911f3fe6"
  // 3d38cd3faf12065cf1c1312bf098db059314a3b5

  state = {
    name: null,
    login: null,
    prof_page: null,
    repos: null,
    avatar: null,
    value: null
  }

  componentDidUpdate(user) {
    if (this.state.value) {
      if (this.state.value !== this.state.login) {
        axios.get(`https://api.github.com/users/${this.state.value}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
          .then(res => {
            this.setState({
              name: res.data.name,
              login: res.data.login,
              prof_page: res.data.html_url,
              repos: res.data.public_repos,
              avatar: res.data.avatar_url
            })

          });
      }
    }
  }

  onChangeHandler = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    let info = null;
    if (this.state.value) {
      info = <Info name={this.state.name}
        username={this.state.username}
        prof_page={this.state.prof_page}
        repos={this.state.repos}
        avatar={this.state.avatar} />
    }
    return (
      <div className="app-container">
        <h1>Gitsearch</h1>
        <Searchbar change={this.onChangeHandler} />
        {info}
      </div>
    );
  }
}

export default App;
