import styled from "styled-components";

export const TechStacks = styled.div`
  display: flex;
  align-items: center;
  gap: 0px 1em;
  list-style: none;
  font-family: "Open Sans", sans-serif;
  font-size: 1.5em;
  color: ${(props) => props.theme.helloColor};
`;
