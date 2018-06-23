import React from 'react';

class Experience extends React.Component {
    render() {
        return (
            <div id="experience">
                <div className="row">
                    <div className="four columns timeline">
                        <h1>Experience</h1>
                        <h4>Aug 2015 - Present</h4>
                    </div>
                    <div className="seven columns offset-by-one">
                        <h2>Mesa Public Schools</h2>
                        <h3>Web Programmer <small>| Front End Developer</small></h3>
                        <p>
                            Front-end development, UI / UX design, section 508 and WCAG accessibility compliance. Key projects include designing and developing new web apps utilizing Laravel, Node, Meteor and Vue.js,
                            plus UI layouts and drag-and- drop content widgets for a custom-built PHP content management system called Architeck.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="four columns timeline">
                        <h4>Dec 2012 - Aug 2015</h4>
                    </div>
                    <div className="seven columns offset-by-one">
                        <h2>Mesa Public Schools</h2>
                        <h3>Graphic Communications Specialist <small>| Lead Designer</small></h3>
                        <p>
                            Developed district branding standards and strategic marketing campaigns for new and existing initiatives. Spearheaded the rebranding of numerous district departments / schools, as well as the
                            creation of collateral pieces and advertisements in support of district programs.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="four columns timeline">
                        <h4>Jan 2012 - Present</h4>
                    </div>
                    <div className="seven columns offset-by-one">
                        <h2>Dinsmore Design</h2>
                        <h3>Freelance <small>| Web Developer & Graphic Designer</small></h3>
                        <p>
                            Web and visual design and development for small and national businesses. Notable services include branding, web development/design, print design, content management, managed hosting and
                            consultation.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
};

export default Experience;