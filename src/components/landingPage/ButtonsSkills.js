import React from 'react';
import CustomButton from '../utils/CustomButton';

export const ButtonsSkills = () => {
    return (
        <div className="LandingPage-buttonContainer">
            <h2 className="LandingPage-title center">Skills</h2>
            <div className="LandingPage-buttons center">
            <CustomButton text="HTML" background="#DE2589" > </CustomButton>
            <CustomButton text="CSS" background="#35C1C1" > </CustomButton>
            <CustomButton text="SASS" background="#E5B726" > </CustomButton>
            <CustomButton text="Material UI" background="#6E90A8" > </CustomButton>
            <CustomButton text="Tailwind CSS" background="#00369B" > </CustomButton>
            <CustomButton text="Photoshop" background="#3288FD" > </CustomButton>
            <CustomButton text="TypeScript" background="#D94343" > </CustomButton>

            </div>
            <div className="LandingPage-buttons center">
            <CustomButton text="Bootstrap" background="#EB8E0E" > </CustomButton>
            <CustomButton text="JavaScript" background="#6EAD47" > </CustomButton>
            <CustomButton text="jQuery" background="#232B33" > </CustomButton>
            <CustomButton text="ReactJS" background="#28956D" > </CustomButton>
            <CustomButton text="Styled components" background="#232B33" > </CustomButton>
            <CustomButton text="Angular +4" background="#5A3BC3" > </CustomButton>

            </div>
        </div>
    )
}

