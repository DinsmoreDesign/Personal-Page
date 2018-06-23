import React, { Component } from 'react';

import Header from '../components/resume/Header';
import Experience from '../components/resume/Experience';
import Education from '../components/resume/Education';
import Skills from '../components/resume/Skills';
import Technologies from '../components/resume/Technologies';
import Awards from '../components/resume/Awards';
import Footer from '../components/resume/Footer';

class Resume extends Component {
  render() {
    return (
        <div>

            <Header/>

            <div className="container">
                <div className="maincontent">

                    <Experience/>
                    <Education/>
                    <Skills/>
                    <Technologies/>
                    
                </div>
            </div>
            <div className="container">

                <Awards/>
                <Footer/>

            </div>

        </div>
    );
  }
}

export default Resume;
