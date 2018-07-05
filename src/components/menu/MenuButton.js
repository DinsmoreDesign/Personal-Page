import React from 'react';

class MenuButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="floating-button">
                <a onClick={ this.props.handleClick } title="View my recent projects">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </a>
            </div>
        )
    }
};

export default MenuButton;