import React from 'react'
import { AboutExperienceJob } from './AboutExperienceJob'
import { Text } from '../../text'


export const AboutExperience = () => {
    return (
        <div className="About-container__Experience">
            <h2>Experience</h2>
               <AboutExperienceJob 
               logo={Text.logoJexplore}
               nameEntreprise={Text.nameJexplore} 
               fromTo={Text.fromToJexplore} 
               work={Text.workJexplore} 
               textWork={Text.textWorkJexplore}>
                </AboutExperienceJob>

               <AboutExperienceJob 
               logo={Text.logoIndra}
               nameEntreprise={Text.nameIndra} 
               fromTo={Text.fromToIndra}
               work={Text.workIndra} 
               textWork={Text.textWorkIndra}>      
               </AboutExperienceJob>
               <AboutExperienceJob 
               logo={Text.logoUpwork} 
               nameEntreprise={Text.nameUpwork} 
               fromTo={Text.fromToUpwork} 
               work={Text.workUpwork} 
               textWork={Text.textWorkUpwork}>      
               </AboutExperienceJob>

        </div>
    )
}