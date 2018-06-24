import React from 'react';

class Education extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="row education">
                <div className="four columns">
                    <h1>Education</h1>
                </div>
                <div className="seven columns offset-by-one">
                    <h2>
                        { this.props.university }
                    </h2>
                    <h3>
                        { this.props.degree } <small>| { this.props.distinction }</small>
                    </h3>
                    <p>
                        { this.props.school }
                    </p>
                </div>
            </div>
        )
    }

};

export default Education;


