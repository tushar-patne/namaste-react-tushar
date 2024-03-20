import React from "react";

class NewUserClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name: "test name",
                location: "test location"
            }
        }
        console.log("child constructor");
    }

    async componentDidMount(){
        console.log("child component did mount");
        let data = await fetch("https://api.github.com/users/tushar-patne");
        data = await data.json();
        this.setState({
            userInfo: data
        })
    }

    componentDidUpdate(){
        console.log("child component did update");
    }

    render(){
        console.log("child render");
        return(
            <div>
                <img src={this.state.userInfo.avatar_url} />
                <h3>{this.state.userInfo.name}</h3>
                <h3>{this.state.userInfo.location}</h3>
            </div>
        )
    }

}

export default NewUserClass;