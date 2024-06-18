import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { flexbox } from "styled-system";

const Row = styled.div`
  ${flexbox}
  display: flex;
  ${(props) => {
    props.type === "horizontal" &&
      css`
        justify-content: space-between;
        align-items: center;
      `;
  }}

  ${(props) => {
    props.type === "vertical" &&
      css`
        flex-direction: column;
        gap: 1.6rem;
      `;
  }}
`;

Row.defaultProps = { type: "vertical" };

export default Row;
