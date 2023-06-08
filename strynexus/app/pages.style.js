import styled from 'styled-components'
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] });

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background-color: white;
  font-family: ${raleway.style.fontFamily};
`;

export const H1Container = styled.h1`
  margin: 0 20px 0 20px;
  text-align: center;
  & > span{
    color: #4D9078;
  }
`;

export const PContainer = styled.p`
  margin: 20px 20px 0 20px;
  text-align: center;
  width: 45%;
`;

export const UlContainer = styled.ul`
  margin: 20px 0 0 0; 
  list-style: none;
  display: flex;
  flex-flow: row;
  gap: 10px;
  @media (max-width: 1000px) {
    flex-flow: column;
  }
`;

export const SendContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px 0 0 0;
  width: 40%;
  & > span{
    font-weigth: 900;
  }
`;

export const NewStrnxsContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px 0 0 0;
`;

export const LiContainer = styled.li`
  padding: 10px 20px 10px 20px;
  border: 1px solid gray;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.6s;
  background-color: ${({ editable }) => editable ? "#4D9078" : "white"};
  color: ${({ editable }) => editable ? "white" : "black"};
  &:hover {
    // transform: scale(.98);
    box-shadow: -2px 2px 3px  rgba(155, 155, 155, 0.35);
  }
  @media (max-width: 1000px) {
    padding: 10px 80px 10px 80px;
  }
`;

export const InputContainer = styled.input`
  all: unset;
  border: 0px solid gray;
  border-radius: 15px;
  width: 100%;
  padding: 15px 10px 15px 10px;
  box-shadow: -2px 2px 3px  rgba(155, 155, 155, 0.30);
`;

export const Button = styled.div`
  padding: 15px 20px 15px 20px;
  border: 0px solid #4D9078;
  box-shadow: -2px 2px 3px rgba(155, 155, 155, 0.30);
  font-weigth: 400;
  border-radius: 15px;
  background-color: white;
  cursor: pointer;
  transition: 1s;
  color: #4D9078;
  &:hover{
    color: white;
    background-color: #4D9078;
  }
`;


