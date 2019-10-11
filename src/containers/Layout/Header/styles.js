import styled from "styled-components";

export const Header = styled.header`
  // width: 100%;
  background: #00203f;
  display: flex;
  align-items: center;
  max-width: 100%;
  height: 80px;
  padding: 0 16px;
  box-shadow: 0px 0px 5px -1px #999;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 20px;
  color: White;
  @media (max-width: 992px) {
    margin-left: 54px;
  }
  * {
    margin-right: 15px;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  color: White;
  div {
    margin-left: 10px;
  }
`;
