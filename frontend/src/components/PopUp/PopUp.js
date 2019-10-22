import React from 'react';
import { Button } from 'reactstrap';
import './PopUp.css';

class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup\_inner'>
                    <h3>{this.props.Title} - Plot:</h3>
                    <p>{this.props.Plot}</p>
                    <Button className="CloseButton" color="danger" onClick={this.props.closePopup} >Close me</Button>{' '}
                </div>
            </div>
        );
    }
}

export default Popup;