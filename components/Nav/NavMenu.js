import styled from "styled-components";
import { navSmall } from "../../config";

const LogoMenu = ({ title, isOn }) => {
  return <LogoMenuWrap isOn={isOn}>{title}</LogoMenuWrap>;
};

export default LogoMenu;

const LogoMenuWrap = styled.div`
  padding: 18px 13px;
  font-size: 14px;
  color: rgb(51, 51, 51);
  font-weight: 600;
  cursor: pointer;
  box-shadow: ${({ isOn }) => isOn && "inset 0 -2px rgb(37, 139, 247)"};
  &:hover {
    box-shadow: inset 0 -2px rgb(221, 221, 221);
  }
  @media only screen and (max-width: ${navSmall}) {
    &:hover {
      box-shadow: unset;
    }
  }
`;
