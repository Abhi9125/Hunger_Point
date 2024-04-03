// we also destructure the Component onfly.
import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utility/UserContext";
// Life Cycle of Class Base Component --> frist constructure() execute --> render() execute -->  componentDidMount() execute
// Now creating About Component by using class
class About extends Component {
  constructor(props) {
    super(props);
  }

  // Use of componentDidMount for fetching the API work same as Class Base component.
  componentDidMount() {
    // console.log("Parent Did Mount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>This is about page</h1>

        {/* This is the way to consume the context data in class base componet we use <Context_Name.Consumer> component that take a callback */}
        <UserContext.Consumer>
          {(contextData) => <h1>{contextData.loggedInUser}</h1>}
          {/* {(contextData) => console.log(contextData)} */}
        </UserContext.Consumer>
        {/* Calling child class component with props */}
        {/* Calling multple chaild class, calling classComponent means makign the instance of the class */}
        <UserClass name={"Fisrt"} Location={"Mohali"} />
        {/* <User /> */}
      </div>
    );
  }
}
export default About;
