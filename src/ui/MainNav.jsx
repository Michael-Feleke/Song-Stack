import styled from "@emotion/styled";
import {
  HiOutlineFolder,
  HiOutlineHeart,
  HiOutlineHome,
  HiOutlineInformationCircle,
} from "react-icons/hi";
import {
  HiMiniArrowLeftOnRectangle,
  HiMusicalNote,
  HiOutlineRadio,
} from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-100);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashbord">
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/songs">
            <HiMusicalNote />
            <span>Songs</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/favorites">
            <HiOutlineHeart />
            <span>Favorites</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/playlists">
            <HiOutlineFolder />
            <span>Playlists</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/about">
            <HiOutlineInformationCircle />
            <span>About</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
