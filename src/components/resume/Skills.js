import React from 'react';

class Skills extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="row skills">
                <div className="four columns">
                    <h1>{ this.props.title }</h1>
                </div>
                <div className="seven columns offset-by-one">
                    { this.props.skills.map((skill, index) =>
                        <span key={ index }>
                            { skill }
                        </span>
                    )}
                </div>
            </div>
        )
    }

};

export default Skills;