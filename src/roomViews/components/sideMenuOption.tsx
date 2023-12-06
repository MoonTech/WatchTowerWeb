import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
`;

type SideMenuOptionProps = {
  isClickable?: boolean;
  link?: string;
  children: ReactNode | ReactNode[];
};

const SideMenuOptionContainer = styled.div<{ isClickable?: boolean }>`
  flex: 1;
  background-color: ${(props) =>
    props.isClickable
      ? props.theme.colors.backgroundDark
      : props.theme.colors.backgroundDarker};
  border-radius: 10px;
  transition: 0.2s all;
  &:hover {
    ${(props) =>
      props.isClickable
        ? `background-color: ${props.theme.colors.background};\n
    cursor: pointer;`
        : ""}
  }
  font-size: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
`;

export const SideMenuOption = ({
  isClickable,
  link,
  children,
}: SideMenuOptionProps) => {
  return (
    <SideMenuOptionContainer isClickable={isClickable}>
      {isClickable ? (
        <StyledLink to={link!}>{children}</StyledLink>
      ) : (
        <>{children}</>
      )}
    </SideMenuOptionContainer>
  );
};
