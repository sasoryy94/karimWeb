import React from 'react'
import { AboutComponent } from '../components/AboutComponent'
import { AboutExperience } from '../components/AboutExperience'
import { AboutLanguages } from '../components/AboutLanguages'

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
