import styled from "styled-components";
import { NavLink as LinkToStyle } from "react-router-dom";

export const GoBackButton = styled.button`
  align-items: center;
  width: 150px;
  padding: 6px 6px 6px 6px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 40px;
  border-radius: 8px;
  box-shadow: 2px 3px 4px 1px rgba(33, 33, 33, 0.21);
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  background: linear-gradient(45deg, #fff1eb, #ace0f9);
  border: 4px ridge rgba(33, 33, 33, 0.21);
  cursor: pointer;

  &:hover {
    color: #2156f0;
    background: white;
  }
`;

export const MovieDetailsPageDivStyled = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 20px 20px 40px;
  border: 4px ridge rgba(33, 33, 33, 0.21);
  border-radius: 8px;
  background: linear-gradient(45deg, #ace0f9, #fff1eb);
  opacity: 0.8;
`;

export const MovieImageStyled = styled.img`
  margin: 0;
  border-radius: 8px;
`;

export const MovieInfoDivStyled = styled.div`
  padding: 0 12px 0 12px;

`;

export const TitleMovieStyled = styled.h1`
  display: inline-box;
  margin:0;
  font-size: 28px;
  box-shadow: 2px 3px 4px 1px rgba(33, 33, 33, 0.21);
  border-radius: 8px;
  padding: 8px 8px 8px 0;
  max-width: fit-content;
`;

export const MovieAddInfoDivStyled = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 20px 20px 40px;
  border: 4px ridge rgba(33, 33, 33, 0.21);
  border-radius: 8px;
  background: linear-gradient(45deg, #ace0f9, #fff1eb);
  opacity: 0.8;
  padding: 0 12px 0 12px;

`;

export const AddInfoListStyled = styled.ul`
  list-style: none;
  justify-content: center;
`;

export const NavLink = styled(LinkToStyle)`
  text-decoration: none;
  font-weight: 700;
  color: black;
  &.active {
    text-decoration: underline;  
    color: #2196f3;
  }
  &:hover {
    color: #2196f3;
  }
`;
