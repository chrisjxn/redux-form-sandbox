import React, { Component } from 'react';
import { getUserInfo } from '../../redux/mainReducer';
import { connect } from 'react-redux';

class Private extends Component {
    componentDidMount() {
        this.props.getUserInfo();
    }

    render() {
        const user = this.props.user;
        return (
            <div>
                <p>id: {user ? user.id : 'No user'}</p>
                <p>username: {user ? user.username : 'No user'}</p>
                <p>email: {user ? user.email : 'No user'}</p>
                <p>first_name: {user ? user.first_name : 'No user'}</p>
                <p>last_name: {user ? user.last_name : 'No user'}</p>
                <p>pesonal_url: {user ? user.pesonal_url : 'No user'}</p>
                <p>img_url: {user ? user.img_url : 'No user'}</p>
                <p>auth_id: {user ? user.auth_id : 'No user'}</p>
                <a href={process.env.REACT_APP_LOGOUT}>
                    <button>Log out</button>
                </a>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.main.user
    }
}

export default connect(mapStateToProps, { getUserInfo })(Private);