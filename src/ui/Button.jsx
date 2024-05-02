import styled from "@emotion/styled";

const Button = styled.button`
  background-color: var(--color-brand-600);
  color: white;
  padding: 1.2rem 1.6rem;
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--color-brand-700);
  }

  &:disabled {
    background-color: var(--color-grey-200);
    color: var(--color-grey-500);
    cursor: not-allowed;
  }
`;

export default Button;
