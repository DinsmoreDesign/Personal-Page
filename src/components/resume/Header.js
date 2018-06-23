import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="twelve columns">
                            <h1>Derek Dinsmore</h1>
                            <h3>DEVELOPER & DESIGNER</h3>
                            <p style={{ paddingTop: '2em', paddingBottom: 0 }}>
                                <span className="drop-cap">Hi</span> I’m Derek and I’m passionate about working on projects that aim to solve <strong>big</strong> problems with <em>elegant</em> solutions. I come from an upbringing that nurtured both creative and technical reasoning, which has helped give me a unique outlook on assignments. I’d love the opportunity to work with your company to help tackle its biggest obstacles.
                            </p>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
};

export default Header;