import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const ListItemStyled = styled.li`
  max-width: 200px;
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: black;

  &:hover {
    color: blue;
    text-decoration: underline;
  }
`;
