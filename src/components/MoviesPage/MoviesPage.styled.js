import styled from "styled-components";
import { Link } from "react-router-dom";

export const MoviesListStyled = styled.ul`
  list-style: none;
  background: linear-gradient(45deg, #fff1eb, #ace0f9);
  opacity: 0.5;
  border-radius: 8px;
  width: fit-content;
  padding: 40px;
`;

export const MoviesListDivStyled = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;


export const SearchbarStyled = styled.header`
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding: 12px 24px 12px 24px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchFormStyled = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
`;

export const SearchFormButtonStyled = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  :hover {
    opacity: 1;
  }
`;

export const SearchFormButtonSpanStyled = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchFormButtonLabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const SearchFormInputStyled = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 16px;
  padding-right: 4px;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const GoBackLink = styled(Link)`
display: inline-block;
  width: 130px;
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
  color: black;
  text-align: center;

  &:hover {
    color: #2156f0;
    background: white;
  }
`;