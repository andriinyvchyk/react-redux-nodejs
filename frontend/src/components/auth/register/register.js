import React, { Component } from 'react'
import { connect } from "react-redux";
import { getUsersFetchDataSuccess } from "../../../actions/register";
import axios from 'axios';

class Register extends Component {
    state = {
        email: "",
        password: ""
    };
    componentDidMount() {
        // const { getUsersFetchDataSuccess } = this.props;

        // fetch('http://localhost:3002/api/users')
        // .then(res =>{
        //     if(!res.ok){
        //         throw new Error(res.statusText)
        //     }
        //     return res;
        // })
        // .then(res => res.json())
        // .then(users => {
        //     getUsersFetchDataSuccess(users)
        //     this.setState({ users });
        // })
    }

    onSubmit = (event) => {
        event.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post(`http://localhost:3002/api/users`, user)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }
    render() {
        return (
            <div className='container mt-5 mb-5'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Write your email</label>
                        <input type="text" name='userEmail' className="form-control" onChange={event =>
                            this.setState({ email: event.target.value })
                        } />
                    </div>
                    <div className="form-group">
                        <label>Write your password</label>
                        <input type="password" name='userPassword' className="form-control" onChange={event =>
                            this.setState({ password: event.target.value })
                        } />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        users: state.users
    }
}
const mapDispatchToProps = {
    getUsersFetchDataSuccess
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)