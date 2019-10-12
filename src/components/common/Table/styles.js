import styled from "styled-components";

export default styled.div`
  height: ${props => (props.height ? props.height : "300px")};
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0.5em;
    height: 0.4em;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`;
