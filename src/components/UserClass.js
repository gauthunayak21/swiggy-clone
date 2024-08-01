import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: '',
                location: ''
            }
        }

    }

    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/akshaymarch7');
        const json = await data?.json();

        this.setState({
            userInfo: json
        })

        console.log(this.state)
    }

    render() {
       return( <div>{this.props.name}</div>)
    }
}

export default UserClass;