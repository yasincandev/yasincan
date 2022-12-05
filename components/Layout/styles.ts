import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-template-rows: 0.2fr 1.8fr;
  gap: 0px 1em;
  width: 100%;
  min-height: 100vh;
  transition: background-color 0.3s ease;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const ImageContainer = styled.div`
  padding: 0 3em;
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.4fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "ImageContainer children";
  grid-area: 2 / 1 / 3 / 2;
`;
