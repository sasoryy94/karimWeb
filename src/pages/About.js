import React from 'react'
import { AboutComponent } from '../components/about/AboutComponent'
import { AboutExperience } from '../components/about/AboutExperience'
import { AboutLanguages } from '../components/about/AboutLanguages'

export const About = () => {
    return (
        <div className="about">            
            <AboutComponent></AboutComponent>
            <hr></hr>
            <AboutExperience></AboutExperience>
            <hr></hr>
            <AboutLanguages></AboutLanguages>
        
        </div>
    )
}
