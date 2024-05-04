import styled from "@emotion/styled";
import Heading from "./Heading";

const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: var(--color-grey-500);
`;

function Message({ children }) {
  return (
    <MessageContainer>
      <Heading as="h2">{children}</Heading>
    </MessageContainer>
  );
}

export default Message;
