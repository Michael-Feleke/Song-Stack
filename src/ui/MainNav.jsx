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
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  width: 100%;
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 0.4rem;

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
const BadgeContainer = styled.div`
  background-color: var(--color-brand-600);
  color: white;
  border-radius: 9999px;
  height: 17px;
  width: 17px;
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
`;

function MainNav() {
  const { songs, favorites, playlists } = useSelector((state) => state.songs);

  const playlistNumber = Object.keys(playlists).length;
  const songsNumber = Object.keys(songs).length;
  const favoritesNumber = Object.keys(favorites).length;

  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashbord">
            <Div>
              <HiOutlineHome />
              <span>Home</span>
            </Div>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/songs">
            <Div>
              <HiMusicalNote />
              <span>Songs</span>
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
              <span>Favorites</span>
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
              <span>Playlists</span>
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
              <span>About</span>
            </Div>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
