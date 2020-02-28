import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';

import './admin-home.css';


export default class AdminHome extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { isToggleOn: true };

    //     // Ця прив'язка необхідна, щоб `this` працював у функції зворотнього виклику
    //     this.clickShowMenu = this.clickShowMenu.bind(this);
    // }
    clickShowMenu() {
        let elem = document.querySelector('.cataloge-toggle');
        elem.classList.toggle(".cataloge-toggle");

        // this.setState(state => ({
        //     isToggleOn: !state.isToggleOn
        // }));
        // console.log(this.isToggleOn)
    }
    render() {
        return (
            <div className='adminHome'>
                <div className='admin-logo'>

                </div>
                <div className='admin-ctn'>
                    <div className='admin-navbar'>
                        <ul>
                            <li onClick={this.clickShowMenu}>Cataloge</li>
                            <ul className='cataloge-toggle'>
                                <li>Products</li>
                            </ul>
                        </ul>
                    </div>
                    <div className='admin-main'>

                    </div>
                </div>
            </div>
        );
    }

}