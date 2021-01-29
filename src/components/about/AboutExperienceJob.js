import React from 'react'

export const AboutExperienceJob = ({logo ,nameEntreprise ,fromTo ,work ,textWork}) => {

    return (
    <div className="About-container__Experience-child">
        <div className="About-row__Experience-logo">
            <img className={logo} alt="logo"></img>
            <div>
                <h3>{nameEntreprise}</h3>
                <p> {fromTo} </p>
            </div>
        </div>
        <div className="About-row__Experience-text">
            <div className="vl"></div>
            <div className="About-row__Experience-description">
                <h4 className="work-description">{work}</h4>
                <p>{textWork}</p>
            </div>

        </div>

    </div>
    )
}
