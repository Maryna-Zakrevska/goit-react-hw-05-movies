import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavLink as LinkToStyle } from "react-router-dom";

export const MovieDetailsPageDivStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px auto 20px 40px;
`;

export const GoBackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  width: 80px;
  padding: 8px 8px 8px 8px;
  margin-bottom: 20px;
  border-radius: 4px;
  box-shadow: 2px 3px 4px 1px rgba(33, 33, 33, 0.21);
  font-weight: 600;
  text-decoration: none;
  &.active {
    color: #2196f3;
  }
  &:hover {
    color: black;
  }
`;

export const MovieImageStyled = styled.img`
  margin: 0 auto;
  border-radius: 12px;
`;

export const MovieInfoDivStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleMovieStyled = styled.h1`
  display: inline-flex;
  font-size: 28px;
  border-radius: 4px;
  box-shadow: 2px 3px 4px 1px rgba(33, 33, 33, 0.21);
  padding: 8px 8px 8px 8px;
  max-width: fit-content;
`;

export const MovieAddInfoDivStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AddInfoListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: center;
`;

export const NavLink = styled(LinkToStyle)`
  text-decoration: none;
  font-weight: 600;
  &.active {
    text-decoration: underline;  
    color: #2196f3;
  }
  &:hover {
    color: black;
  }
`;
