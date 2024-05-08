import styled from "@emotion/styled";
import { useState } from "react";
import {
  HiMenu,
  HiMenuAlt4,
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
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const NavModal = styled.div`
  @media (max-width: 680px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media (max-width: 680px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--color-grey-50);
    padding: 2rem;
    border-radius: 0.5rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  width: 100%;
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    @media (max-width: 1000px) {
      gap: 0.5rem;
    }

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
    @media (max-width: 1000px) {
      font-size: 1.4rem;
    }
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
    @media (max-width: 1000px) {
      width: 2rem;
      height: 2rem;
    }
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;
const BadgeContainer = styled.div`
  background-color: var(--color-brand-600);
  color: white;
  border-radius: 9999px;
  height: 17px;
  width: 17px;
  @media (max-width: 1000px) {
    height: 15px;
    width: 15px;
  }
  padding: 0 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  align-self: flex-start;
  /* justify-self: flex-start; */
`;

const Div = styled.div`
  display: flex;
  gap: 1.2rem;
  @media (max-width: 1000px) {
    gap: 1rem;
  }
`;

const NameSpan = styled.span`
  @media (max-width: 800px) {
    display: none;
  }
  @media (max-width: 680px) {
    display: block;
  }
`;

const HamburgerIcon = styled(HiMenu)`
  display: none;
  cursor: pointer;
  color: var(--color-brand-600);
  @media (max-width: 680px) {
    display: block;
  }
`;

function MainNav() {
  const { songs, favorites, playlists } = useSelector((state) => state.songs);

  const playlistNumber = Object.keys(playlists).length;
  const songsNumber = Object.keys(songs).length;
  const favoritesNumber = Object.keys(favorites).length;

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav>
      <HamburgerIcon size={24} onClick={toggleMenu} />
      <NavModal isOpen={isOpen} onClick={toggleMenu}>
        <NavList isOpen={isOpen}>
          <li>
            <StyledNavLink to="/songs">
              <Div>
                <HiMusicalNote />
                <NameSpan>Songs</NameSpan>
              </Div>
              {songsNumber > 0 && (
                <BadgeContainer>
                  <p>{songsNumber}</p>
                </BadgeContainer>
              )}
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/favorites">
              <Div>
                <HiOutlineHeart />
                <NameSpan>Favorites</NameSpan>
              </Div>
              {favoritesNumber > 0 && (
                <BadgeContainer>
                  <p>{favoritesNumber}</p>
                </BadgeContainer>
              )}
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/playlists">
              <Div>
                <HiOutlineFolder />
                <NameSpan>Playlists</NameSpan>
              </Div>
              {playlistNumber > 0 && (
                <BadgeContainer>
                  <p>{playlistNumber}</p>
                </BadgeContainer>
              )}
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/about">
              <Div>
                <HiOutlineInformationCircle />
                <NameSpan>About</NameSpan>
              </Div>
            </StyledNavLink>
          </li>
        </NavList>
      </NavModal>
    </nav>
  );
}

export default MainNav;
