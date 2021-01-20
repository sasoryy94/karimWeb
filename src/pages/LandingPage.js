import React from 'react'
import { ButtonsSkills } from '../components/ButtonsSkills'
import { MainLandingPage } from '../components/MainLandingPage'
import { WorkedPlaces } from '../components/WorkedPlaces'

export const LandingPage = () => {
    return (
        <div className="LandingPage">
            <MainLandingPage></MainLandingPage>
            <ButtonsSkills></ButtonsSkills>
            <WorkedPlaces></WorkedPlaces>

        </div>
    )
}
