import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllVehicles } from '../../redux/mainReducer';
import './Home.css';

class Home extends Component {
    componentDidMount() {
        this.props.getAllVehicles();
    }

    renderTableRows() {
        return this.props.allVehicles.map(vehicle => {
            return (
                <tr key={vehicle.id}>
                    <td>{vehicle.owner_first} {vehicle.owner_last}</td>
                    <td>{vehicle.type}</td>
                    <td>{vehicle.color}</td>
                    <td>{vehicle.description}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="component">
                <table className="mainSection">
                    <tbody>
                        <tr>
                            <td>Owner Name</td>
                            <td>Type</td>
                            <td>Color</td>
                            <td>Description</td>
                        </tr>
                        {this.renderTableRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        allVehicles: state.main.allVehicles
    }
}

export default connect(mapStateToProps, { getAllVehicles })(Home);