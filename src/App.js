import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './components/Searchbar/Searchbar';
import Info from './components/Info/Info';
import Spinner from './components/Spinner/Spinner';
class App extends Component {

  state = {
    typed_username: null,
    query: null,
    username: null,
    avatar_url: null,
    repos: null,
    followers: null,
    github_link: null,
    name: null,
    bio: null,
    loading: null,
  }


  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.username) {
      this.setState({
        username: null,
        avatar_url: null,
        repos: null,
        followers: null,
        github_link: null,
        name: null,
        bio: null,
      })
    }
    if (!this.state.typed_username) {
      alert("please enter a username")
    } else {
      this.setState({
        query: this.state.typed_username,
        loading: true,
      }, () => {
        axios.get(`https://api.github.com/users/${this.state.query}`)
          .then(res => {
            this.setState({
              username: res.data.login,
              avatar_url: res.data.avatar_url,
              repos: res.data.public_repos,
              followers: res.data.followers,
              github_link: res.data.html_url,
              name: res.data.name,
              bio: res.data.bio,
              loading: false
            })
          })
      });
    }
  }
  handleChange = (e) => {
    this.setState({
      typed_username: e.target.value
    })
  }

  render() {
    let t = this.state.username;
    if (t) {
      t = <Info
        username={this.state.username}
        avatar_url={this.state.avatar_url}
        repos={this.state.repos}
        followers={this.state.followers}
        github_link={this.state.github_link}
        name={this.state.name}
        bio={this.state.bio} />
    }
    let f = this.state.loading;
    let s;
    if (f) {
      s = <Spinner />
    } else {
      s = null
    }
    return (
      <div className="container mx-auto text-center">
        <h1 className="my-10 text-5xl text-grey-darker"><i class="fab fa-github"></i> Gitsearch</h1>
        <Searchbar submit={this.handleSubmit} change={this.handleChange} />
        {s}
        {t}
      </div>
    );
  }
}

export default App;
