import React from 'react';
import Project from './Project';


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Ecomm Demo",
            project: ""
        }
    }

    render() {
        return (
            <div>
                <h1>Welcome to {this.state.name}</h1>
                <Project projectName = {this.projectName} />
                <h2>Project name: {this.state.project}</h2>
            </div>
        );
    }

    projectName = (name) => {
        this.setState({project: name});
    }

    // componentDidMount() {
    //     this.setState({name : "Test"})
    // }

}

export default Home;