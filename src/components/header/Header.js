import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserInfo } from '../../redux/mainReducer';
import './Header.css';

class Header extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="component">
                <nav className="nav">
                    {!this.props.user.id ?
                        <div className="navElements">
                            <a className="loginOut" href={process.env.REACT_APP_LOGIN}>Login</a>
                        </div>
                        :
                        <div className="navElements">
                            <div className="displayUsername">
                                Hi, {this.props.user.first_name}!
                            </div>
                            <Link className="navLinks" to={`/collections/${this.props.user.id}`}>Collection</Link>
                            <Link className="navLinks" to={`/profile/${this.props.user.id}`}>Profile</Link>
                            <Link className="navLinks" to='/'>Home</Link>
                            <a className="loginOut" href={process.env.REACT_APP_LOGOUT}>Logout</a>
                        </div>
                    }
                </nav>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.main.user
    }
}

export default connect(mapStateToProps, { getUserInfo })(Header);