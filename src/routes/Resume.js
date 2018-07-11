import React, { Component } from 'react';

import 'font-awesome/css/font-awesome.min.css';
import '../assets/Resume.css';

import Header from '../components/resume/Header';
import Experience from '../components/resume/Experience';
import Education from '../components/resume/Education';
import Skills from '../components/resume/Skills';
import Contact from '../components/resume/Contact';
import Footer from '../components/resume/Footer';

class Resume extends Component {

    constructor(props) {
        super(props);
        this.state = {
            header: {
                name: 'Derek Dinsmore',
                title: 'FRONT END ENGINEER',
                description:
                    <p>
                        <span className="drop-cap">Hi</span> I’m Derek and I’m passionate about working on projects that aim to solve <strong>big</strong> problems with <em>elegant</em> solutions. I come from an upbringing that nurtured both creative and technical reasoning, which has helped give me a unique outlook on assignments. I’d love the opportunity to work with your company to help tackle its biggest obstacles.
                    </p>
            },
            experience: [
                {
                    company: 'SwitchThink Solutions / Desert Schools Federal Credit Union',
                    timeline: 'June 2017 - Present',
                    title: 'Front End Developer',
                    subtitle: 'Lead Developer',
                    description: [
                        'Research, design, develop and implement modern front end architecture across multiple ASP.NET MVC applications.',
                        'Design, develop and support custom Single Page Application widgets for the Alkami ORB online banking platform utilizing Vue.js and MVC 3.',
                        'Lead the redesign, development and optimization of application UIs by refactoring legacy jQuery and CSS into scalable Vue.js and SASS solutions.'
                    ]
                },
                {
                    company: 'Mesa Public Schools',
                    timeline: 'Aug 2015 - June 2017',
                    title: 'Web Programmer',
                    subtitle: 'Front End Developer',
                    description: [
                        'Design and develop applications utilizing modern JavaScript frameworks, including Vue.js and Meteor.js, to interact with multiple REST APIs.',
                        'Maintain, design and develop front end architecture and user-editable drag-and-drop content widgets inside the Architeck CMS.',
                        'Lead Section 508 and WCAG 2.0 Accessibility compliance initiatives across the entire district web presence.'
                    ]
                },
                {
                    company: 'Mesa Public Schools',
                    timeline: 'Dec 2012 - Aug 2015',
                    title: 'Graphic Communications Specialist',
                    subtitle: 'Lead Designer',
                    description: [
                        'Develop district branding standards, guidelines and strategies to create a uniform framework for all external-facing publications.',
                        'Spearhead marketing campaign strategies for new programs, initiatives and school rebrands.',
                        'Design collateral including, but not limited to: web pages, signage, trifolds, reports, infographics and booklets for local and national publications.'
                    ]
                }
            ],
            education: {
                university: 'Arizona State University',
                school: 'Ira A. Fulton School of Engineering',
                degree: 'BS, Graphic Information Technology',
                distinction: 'Magna Cum Laude'
            },
            skills: [ 'HTML', 'CSS / SASS', 'JavaScript', 'PhotoShop', 'Illustrator', 'InDesign', 'Sketch', 'SEO', 'Git' ],
            technologies: [ 'jQuery', 'Vue.js', 'React', 'Node.js', 'Meteor.js', 'MongoDB', 'MySQL', 'Ubuntu', 'WordPress', 'PageKit', 'Ghost', 'Bootstrap', 'Materialize', 'Foundation', 'UIKit' ],
            awards: [
                {
                    company: 'Award of Excellence: Branding Image Package',
                    timeline: '2015',
                    title: 'KinderU Branding Initiative',
                    description: [
                        'National School Public Relations Association'
                    ]
                },
                {
                    company: 'Award of Excellence: Marketing Publication',
                    timeline: '2014',
                    title: 'East Valley Academy Gatefold Brochure',
                    description: [
                        'National School Public Relations Association'
                    ]
                }
            ]
        };
    }

    render() {
        return (
            <div>

                <Header
                    name={ this.state.header.name }
                    title={ this.state.header.title }
                    description={ this.state.header.description }
                />

                <div className="container">
                    <div className="maincontent">

                        {this.state.experience.map((item, index) =>
                            <Experience
                                index={ index }
                                header="Experience"
                                timeline={ item.timeline }
                                company={ item.company }
                                title={ item.title }
                                subtitle={ item.subtitle }
                                description={ item.description }
                                key={ index }
                            />
                        )}
                        <Education
                            university={ this.state.education.university }
                            school={ this.state.education.school }
                            degree={ this.state.education.degree }
                            distinction={ this.state.education.distinction }
                        />
                        <Skills
                            title="Languages & Skills"
                            skills={ this.state.skills }
                        />
                        <Skills
                            title="Frameworks & Technologies"
                            skills={ this.state.technologies }
                        />
                        
                    </div>

                    {this.state.awards.map((item, index) =>
                        <Experience
                            hasBorder={ true }
                            index={ index }
                            header="Awards"
                            timeline={ item.timeline }
                            company={ item.company }
                            title={ item.title }
                            description={ item.description }
                            key={ index }
                        />
                    )}

                </div>

                <Contact
                    email="derek@dinsmoredesign.com"
                    phone="480.246.1596"
                />
                <Footer
                    githubProfile="DinsmoreDesign"
                    mediumProfile="paintballthunder2000"
                    personalSite="https://dinsmoredesign.com/"
                />

            </div>
        );
    }
}

export default Resume;
