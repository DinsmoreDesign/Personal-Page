import React from 'react';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    
    render() {
        return (
            <div className="contact">
                <div className="container">
                    <div className="row">

                        <div className="columns six">
                            <i className="fa fa-envelope-o" aria-hidden="true"></i> { this.props.email }
                        </div>

                        <div className="columns six">
                            <i className="fa fa-phone" aria-hidden="true"></i> { this.props.phone }
                        </div>

                    </div>
                </div>
            </div>
        )
    }
};

export default Contact;

