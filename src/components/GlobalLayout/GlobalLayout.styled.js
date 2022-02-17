import styled from "styled-components";
import { NavLink as LinkToStyle } from "react-router-dom";

export const LayoutNavStyled = styled.nav`
  margin-top: 20px;
  margin-left: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  font-size: 20px;
  font-weight: 700;
`;

export const NavLink = styled(LinkToStyle)`
  &.active {
    color: #2196f3;
  }
  &:hover {
    color: #2156f0;
  }
`;
