import React, { Component } from 'react'
import './admin-category.css';
import adminHome from '../admin-home/admin-home';

export default class AdminCategory extends Component {

    onSubmit = (event) => {
        console.log('нажал?')
        event.preventDefault();
    }
    render() {
        return (
                <div className='container mt-5 mb-5'>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Write new category name</label>
                            <input type="text" name='categoryname' className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
        );
    }

}