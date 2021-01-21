import React from 'react'
import { ButtonsSkills } from '../components/ButtonsSkills'
import { LandingPageNavigate } from '../components/LandingPageNavigate'
import { MainLandingPage } from '../components/MainLandingPage'
import { WorkedPlaces } from '../components/WorkedPlaces'

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
