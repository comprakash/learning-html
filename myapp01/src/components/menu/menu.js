import React, { Component } from "react";

class Menu extends Component {
  render() {
    let flag = true;
    return (
      <div className="Menu">
        {!flag ? (
          <table>
            <tr className="sign-in">Sign In</tr>
          </table>
        ) : (
          <table>
            <tr className="Android">Android</tr>
            <tr className="iOS">iOS</tr>
            <tr className="Windows">Windows</tr>
          </table>
        )}
      </div>
    );
  } // eo render()
}

export default Menu;
