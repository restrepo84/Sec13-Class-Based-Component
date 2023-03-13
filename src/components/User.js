import { Component } from "react";

import classes from "./User.module.css";

class User extends Component {
  render() {
    return <li classes={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
