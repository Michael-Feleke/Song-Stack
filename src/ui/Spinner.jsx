import styled from "@emotion/styled";

const SpinnerContainer = styled.div`
  margin: 4rem auto;
  width: 6rem;
`;

const SpinnerDiv = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 9999px;
  border-width: 8px;
  border-style: dashed;
  border-color: rgb(34, 197, 94);
  border-top-color: transparent;
  animation: spin 1s linear infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const SpinnerPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

function Spinner() {
  return (
    <SpinnerPage>
      <SpinnerContainer>
        <SpinnerDiv></SpinnerDiv>
      </SpinnerContainer>
    </SpinnerPage>
  );
}

export default Spinner;
