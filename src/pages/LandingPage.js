import React from 'react'
import { ButtonsSkills } from '../components/landingPage/ButtonsSkills'
import { LandingPageNavigate } from '../components/landingPage/LandingPageNavigate'
import { MainLandingPage } from '../components/landingPage/MainLandingPage'
import { WorkedPlaces } from '../components/landingPage/WorkedPlaces'

export const LandingPage = () => {
    return (
        <div className="LandingPage">
            <MainLandingPage></MainLandingPage>
            <ButtonsSkills></ButtonsSkills>
            <LandingPageNavigate></LandingPageNavigate>
            <WorkedPlaces></WorkedPlaces>

        </div>
    )
}
