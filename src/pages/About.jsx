import styled from "@emotion/styled";
import { useDarkMode } from "../context/darkModeContext";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 100vh; */
  color: var(--color-grey-900);
  font-family: Arial, sans-serif;
`;

const AppDescription = styled.p`
  font-size: 1.5rem;
  margin: 2rem 0;
  text-align: center;
`;

const DeveloperInfo = styled.p`
  font-size: 1.2rem;
  margin-top: 2rem;
`;
const Img = styled.img`
  height: 30rem;
  width: auto;
`;

function About() {
  const { isDarkMode } = useDarkMode();

  return (
    <AboutContainer>
      <Img src={isDarkMode ? "logo-dark.png" : "logo-light.png"} alt="Logo" />
      <AppDescription>
        Welcome to Song Stack, your one-stop destination for managing your music
        library with ease. With Song Stack, you can create, update, and delete
        songs effortlessly, giving you full control over your musical
        collection.
      </AppDescription>
      <DeveloperInfo>
        © Developed by Michael Feleke | Contact: felekemichael999@gmail.com{" "}
      </DeveloperInfo>
    </AboutContainer>
  );
}

export default About;
