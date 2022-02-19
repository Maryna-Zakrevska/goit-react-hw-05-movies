import styled from "styled-components";

export const ReviewsDivStyled = styled.div`
  margin: 0 20px 20px 40px;
  border: 4px ridge rgba(33, 33, 33, 0.21);
  border-radius: 8px;
  background: linear-gradient(45deg, #ace0f9, #fff1eb);
  opacity: 0.9;
  padding: 0 12px 0 12px;
  width: fit-content;
`;

export const ReviewsListStyled = styled.ul`
  padding: 6px;
  list-style: none;
`;

export const ReviewsListItemStyled = styled.li`
  padding: 6px;
  border: 4px ridge rgba(33, 33, 33, 0.21);
  border-radius: 4px;
`;

export const ReviewAuthorNameStyled = styled.b`
  padding: 4px;
  margin: 4px;
  font-weight: 700;
`;

export const ReviewContentStyled = styled.p`
  padding: 4px;
  margin: 4px;
`;
