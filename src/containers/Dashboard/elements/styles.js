import styled from "styled-components";

export default styled.div`
  height: ${props => (props.height ? props.height : "300px")};
  overflow: auto;
`;

export const Price = styled.span`
  font-weight: 500;
  font-size: 36px;
  margin: 0;
  color: #4d4d4d
`;
export const Title = styled.span`
  font-weight: 400;
  font-size: 26px;
  margin: 0;
`;

export const GraphsWrapper = styled.div`
    padding: 32px 0;
`;
