import React from 'react'
import { CardProject } from './CardProject'
import { Text } from '../../text'

export const ProjectsWrapper = () => {
    return (
        <>
        <h1 className="projects-h1">{Text.projectTitle} </h1>
        <div className="projects-main">
            <div className="projects-main__wrapper" >

            <CardProject title={Text.titleCurrency} used={Text.usedCurrency} explanation={Text.explanationCurrency}
            navigation={Text.navigationCurrency}>    
            </CardProject>

            <CardProject title={Text.titleCurrency} used={Text.usedCurrency} explanation={Text.explanationCurrency}
            navigation={Text.navigationCurrency}>    
            </CardProject>

            <CardProject title={Text.titleCurrency} used={Text.usedCurrency} explanation={Text.explanationCurrency}
            navigation={Text.navigationCurrency}>    
            </CardProject>
            
            <CardProject title={Text.titleCurrency} used={Text.usedCurrency} explanation={Text.explanationCurrency}
            navigation={Text.navigationCurrency}>    
            </CardProject>
            

                        
            </div>
        </div>
        </>
    )
}
