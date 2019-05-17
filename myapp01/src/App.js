import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import CommentBox from "./components/comment-box/comment-box";
import User from "./components/user/user";
import Menu from "./components/menu/menu";
import Myuser from "./data/my-user";
import MyTextBox from "./components/my-text-box/my-text-box";
import MyButton from "./components/my-button/my-button";
import MyLine from "./components/my-line/my-line";
import UserGist from "./components/user-gist/user-gist";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <CommentBox />
          <User user={Myuser}/>
          <Menu />
          <MyTextBox />
          <MyButton />
          <MyLine name="fades away ... and springs back!!"/>
          <UserGist source="https://api.github.com/users/octocat/gists" />
        </header>
      </div>
    );
  }
}

export default App;
