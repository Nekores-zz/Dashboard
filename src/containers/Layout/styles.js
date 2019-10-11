import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f4f6f8;
  height: 100%;
`;

export const Main = styled.div`
  height: 100%;
`;

export const Content = styled.div`
  width: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0.5em;
    height: 0.4em;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 5px;
    outline: 1px solid slategrey;
  }
`;
