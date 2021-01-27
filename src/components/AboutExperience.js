import React from 'react'
import { AboutExperienceJob } from './AboutExperienceJob'

export const AboutExperience = () => {
    return (
        <div className="About-container__Experience">
            <h2>Experience</h2>
               <AboutExperienceJob 
               logo="work-jexplore"
               nameEntreprise="j'Explore" 
               fromTo={"March 2020 - Now"} 
               work="Lead Web developer" 
               textWork="I'm creating from scratch a plataform which will provide language courses using WordPress">
                </AboutExperienceJob>

               <AboutExperienceJob 
               logo="work-indra" 
               nameEntreprise="Indra Sistemas" 
               fromTo="Juin 2018 - Juin 2020" 
               work="Front-End Developer" 
               textWork="As a Front-End Developer I worked in diferent projects using JavaScript (jQuery, AngularJS, Angular and ReactJS).
               I helped to improve the developer experience of the company by implementing tools to 
               improve our software development process.">      
               </AboutExperienceJob>
               <AboutExperienceJob 
               logo="work-upwork" 
               nameEntreprise="Freelance in Upwork" 
               fromTo="Septembre 2020 - Now" 
               work="Front-End Developer / Web designer" 
               textWork="As a Front-End Developer I worked in projects solving some logic problems and mainly working in the web design.">      
               </AboutExperienceJob>

        </div>
    )
}