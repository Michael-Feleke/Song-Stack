import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { space, typography } from "styled-system";

const Heading = styled.h1`
  ${space}
  ${typography}
  color: var(--color-brand-600);
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3.6rem;
      font-weight: 700;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2.4rem;
      font-weight: 500;
    `}
`;

export default Heading;
