import styled from "@emotion/styled";

const Input = styled.input`
  padding: 1.2rem 1.6rem;
  border: 2px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
  font-size: 1.4rem;
  font-weight: 500;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: var(--color-brand-600);
  }
`;

export default Input;
