import styled from "@emotion/styled";
import { useDarkMode } from "../context/darkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 11rem;
  width: auto;
  @media (max-width: 800px) {
    display: none;
  }
`;

function Logo() {
  const { isDarkMode } = useDarkMode();
  return (
    <StyledLogo>
      <Img src={isDarkMode ? "logo-dark.png" : "logo-light.png"} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
