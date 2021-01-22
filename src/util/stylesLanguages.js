import styled, { css } from "styled-components";

export const Container = styled.div`
  margin-left: 250px;
  max-width: 600px;
  height: 800px;
  transform: rotate(90deg);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media (max-width: 950px) {
    transform: rotate(0deg); 
   }
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const BarChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const Chart = css`
  margin-top: 10px;
  width: 56px;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 420px) {
    width: 34px;
  }
`;

export const Number = styled.span`
  font-size: 1.5rem;
  text-align: center;
  color: ${(props) => props.color};
  transform: rotate(270deg);
  margin-bottom:10px;
  @media (max-width: 950px) {
    transform: rotate(0deg); 
  }
`;

export const MakeBar = styled.div`
  height: ${(props) => props.height}%;
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.colors[0]},
    ${(props) => props.colors[1]}
  );
  ${Chart};
`;

export const BlackLine = styled.div`
  width: 100%;
  height: 5px;
  background-color: grey;
`;
