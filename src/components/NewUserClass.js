import React from "react";

class NewUserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "test name",
        location: "test location",
      },
    };
    console.log("child constructor");
  }

  async componentDidMount() {
    console.log("child component did mount");
    let data = await fetch("https://api.github.com/users/tushar-patne");
    data = await data.json();
    this.setState({
      userInfo: data,
    });
  }

  componentDidUpdate() {
    console.log("child component did update");
  }

  render() {
    console.log("child render");
    return (
      <div className="flex gap-4 mx-4 ">
        <img src={this.state.userInfo.avatar_url} />
        <div className="font-extrabold text-sky-500">
          <h3 className="text-5xl">{this.state.userInfo.name}</h3>
          <h3 className="text-xl">{this.state.userInfo.location}.</h3>
        </div>
      </div>
    );
  }
}

export default NewUserClass;
