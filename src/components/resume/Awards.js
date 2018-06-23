import React from 'react';

class Awards extends React.Component {
    render() {
        return (
            <div>
                <div className="row awards">
                    <div className="four columns timeline">
                        <h1>Awards</h1>
                        <h4>2015</h4>
                    </div>
                    <div className="seven columns offset-by-one">
                        <h2>Award of Excellence: Branding Image Package</h2>
                        <h3>KinderU Branding Initiative</h3>
                        <p>
                            National School Public Relations Association
                        </p>
                    </div>
                </div>
                <div className="row awards">
                    <div className="four columns timeline">
                        <h4>2014</h4>
                    </div>
                    <div className="seven columns offset-by-one">
                        <h2>Award of Excellence: Marketing Publication</h2>
                        <h3>East Valley Academy Gatefold Brochure</h3>
                        <p>
                            National School Public Relations Association
                        </p>
                    </div>
                </div>
            </div>
        )
    }
};

export default Awards;