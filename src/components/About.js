import User from "./User";
import UserClass from "./UserClass";
import NewUserClass from "./NewUserClass";

// const About = () => {
//     return (
//         <div>
//             <h1>About page</h1>
//             {/* <User name={"Tushar Patne"} insta={"patnetushar96__"} contact={9702800841} /> */}
//             <UserClass name={"Tejas Patne"} insta={"patnetejas45__"} contact={8169622343} />
//         </div>
//     )
// }

// export default About;

import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }
  componentDidMount(){
    console.log("parent component did mount");
  }
  componentDidUpdate(){
    console.log("parent component did update");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        {/* <h1>About page</h1> */}
        {/* <UserClass name={"Child 1"} insta={"patnetejas45__"} contact={8169622343} /> */}
        {/* <UserClass name={"Child 2"} insta={"patnetejas45__"} contact={8169622343} /> */}
        <NewUserClass />
      </div>
    );
  }
}

export default About;
