import React from 'react';

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">

                        <div className="columns four mobile">
                            <a href={ 'https://medium.com/@' + this.props.mediumProfile } target="_blank" title="View my articles on Medium">
                                <i className="fa fa-medium" aria-hidden="true"></i>
                            </a>
                        </div>

                        <div className="columns four mobile">
                            <a href={ 'https://github.com/' + this.props.githubProfile } target="_blank" title="View my projects on Github">
                                <i className="fa fa-github" aria-hidden="true"></i>
                            </a>
                        </div>

                        <div className="columns four mobile">
                            <a href={ this.props.personalSite } target="_blank" title="View my freelance work">
                                <i className="fa fa-globe" aria-hidden="true"></i>
                            </a>
                        </div>

                    </div>
                </div>
            </footer>
        )
    }
    
};

export default Footer;