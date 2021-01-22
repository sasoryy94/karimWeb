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
               textWork="As a Lead Front End Engineer, one of my main tasks was to mentor coworkers of my team, 
                contributing to their personal and professional growth. I worked very close to stakeholders to define,
                organise and breakdown new projects. One of the biggest challenges I faced with my team was to migrate the
                ulabox.com website to a new business model while refactoring the entire technology stack to Next.js and React.
                We had to integrate this pivot into the Ulabox application too. I've worked with the logistics team to build 
                Android applications with React-Native for our supply chain and dark stores.">
                </AboutExperienceJob>

               <AboutExperienceJob 
               logo="work-indra" 
               nameEntreprise="Indra Sistemas" 
               fromTo="Juin 2018 - Juin 2020" 
               work="Front-End Developer" 
               textWork="As a Front-End Developer I created a lot of different websites for our clients using Wordpress as a CMS and HTML,
               CSS and JavaScript to built the sites. I helped to improve the developer experience of the company by implementing tools to 
               improve our software development process.">      
               </AboutExperienceJob>
               <AboutExperienceJob 
               logo="work-upwork" 
               nameEntreprise="Freelance in Upwork" 
               fromTo="Septembre 2020 - Now" 
               work="Front-End Developer / Web designer" 
               textWork="As a Front End Engineer I contributed to the development and release of the native Ulabox application. 
               The application is built with React-Native and is available on iOS and Android. I worked on automating the process 
               of shipping our applications to the stores using Fastlane and Travis-CI. Also I contributed to the maintenance of our
               website, that was built on top of Symfony using Twig, SCSS and JavaScript.">      
               </AboutExperienceJob>

        </div>
    )
}