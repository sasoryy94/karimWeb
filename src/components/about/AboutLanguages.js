import React from 'react'
import { __DATA__ } from '../../util/dataLanguages';
import {
  MainContainer,
  Container,
  BarChartContainer,
  Number,
  BlackLine,
  MakeBar
} from "../../util/stylesLanguages";


export const AboutLanguages = () => {
    return (
        <div className="About-languages">
            <h2>Languages</h2>
            <Container>
            <MainContainer>
                {__DATA__.map(({ distance, colors, language }, i) => {
                return (
                    <BarChartContainer key={i}>
                    <Number color={colors[1]}>{distance} {language} </Number>
                    <MakeBar height={distance * 2} colors={colors} />
                    </BarChartContainer>
                );
                })}
            </MainContainer>
            <BlackLine />
            </Container>
        </div>
    )
}
