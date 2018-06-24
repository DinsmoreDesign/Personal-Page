import React from 'react';

class Experience extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            header: this.props.index === 0 ? <h1>{ this.props.header }</h1> : ''
        };
    }

    render() {
        return (
            <div className="experience">
                <div className="row">
                    <div className="four columns timeline">
                        { this.state.header }
                        <h4>{ this.props.timeline }</h4>
                    </div>
                    <div className={ 'seven columns offset-by-one ' + ( this.props.index === 0 ? 'first-header' : '' ) }>
                        <h2>
                            { this.props.company }
                        </h2>
                        <h3>
                            { this.props.title } <small>| { this.props.subtitle }</small>
                        </h3>
                        {this.props.description.map((item, index) =>
                            <ul key={ index }>
                                <li>{ item }</li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        )
    }
};

export default Experience;