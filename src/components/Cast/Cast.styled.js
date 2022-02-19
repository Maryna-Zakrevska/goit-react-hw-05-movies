import styled from "styled-components";

export const CastDivStyled = styled.div`
  margin: 0 20px 20px 40px;
  border: 4px ridge rgba(33, 33, 33, 0.21);
  border-radius: 8px;
  background: linear-gradient(45deg, #ace0f9, #fff1eb);
  opacity: 0.9;
  padding: 0 12px 0 12px;
  width: fit-content;

`;

export const CastListStyled = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px 8px;
  padding: 6px;
  list-style: none;
`;

export const CastImgStyled = styled.img`
border-radius: 8px;
`;

export const CastNameStyled = styled.p`
padding: 4px;
margin: 4px;
font-weight: 700;
`;

export const CastCharacterStyled = styled.p`
padding: 4px;
margin: 4px;
`;