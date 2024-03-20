import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0,
            count2: 10
        }
        console.log(this.props.name + " child constructor");
    }

    componentDidMount(){
        console.log(this.props.name + " child component did mount ");
    }

  render() {
    const {name, insta, contact} = this.props;
    const {count, count2} = this.state;
    console.log(name + " child render");

    return (
      <div className="user-card">
        <h2>count = {count}</h2>
        <button onClick={() => this.setState({count: this.state.count + 1})} >click</button>
        <h3>{name}</h3>
        <h3>inst - {insta}</h3>
        <h3>contact - {contact}</h3>
      </div>
    );
  }
}

export default UserClass;
