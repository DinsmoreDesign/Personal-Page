import React from 'react';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="twelve columns">
                            <h1>
                                { this.props.name }
                            </h1>
                            <h3>
                                { this.props.title }
                            </h3>
                            <div className="description">
                                { this.props.description }
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
    
};

export default Header;