import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBox from "./components/search-box/search-box";
import MyCompPropType from "./components/my-comp-prop-type/my-comp-prop-type";
// import CommentBox from "./components/comment-box/comment-box";
// import User from "./components/user/user";
// import Menu from "./components/menu/menu";
// import Myuser from "./data/my-user";
// import MyTextBox from "./components/my-text-box/my-text-box";
// import MyButton from "./components/my-button/my-button";
// import MyLine from "./components/my-line/my-line";
// import UserGist from "./components/user-gist/user-gist";
// import MyMap from "./components/my-map/my-map";
// import RepoList from "./components/repo-list/repo-list";
// import $ from 'jquery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <CommentBox />
          <User user={Myuser}/>
          <Menu />
          <MyTextBox />
          <MyButton />
          <MyLine name="fades away ... and springs back!!"/>
          <UserGist source="https://api.github.com/users/octocat/gists" />
          <MyMap />
          <RepoList prm={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')} /> */}
          <SearchBox />
          <MyCompPropType message='cool framework' number={10}  requiredString="abc" />
        </header>
      </div>
    );
  }
}

export default App;
