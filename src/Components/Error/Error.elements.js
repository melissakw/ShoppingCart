import styled from "styled-components";

export const GoHomeButton = styled.button`
  padding: 10px;
  border: none;
  background-color: darkorange;
  color: white;
  font-weight: bold;
  transition: all 0.4s ease;
  opacity: 0.7;

  &:hover {
    letter-spacing: 1px;
    opacity: 1;
  }
`;

export const HighlightText = styled.h1`
  color: #838383;
  font-family: "Times New Roman", Times, serif;
`;

export const BodyText = styled.h3`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
