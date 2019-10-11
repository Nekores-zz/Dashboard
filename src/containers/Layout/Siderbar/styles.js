import styled, { css } from "styled-components";
import { MenuItem, MenuList } from "@material-ui/core";

export const Toggler = styled.div`
  @media (max-width: 992px) {
    display: flex;
  }
  display: none;
  position: absolute;
  left: 0;
  top: 0px;
  height: 72px;
  width: 56px;
  background: #f4f6f8;
  align-items: center;
  justify-content: center;
`;

export const Sidebar = styled.div`
  @media (max-width: 992px) {
    position: absolute;
    left: ${props => (props.toggle ? "0" : "-200px")};
    transition: 0.3s all ease-in-out;
  }
  z-index: 222;
  width: 200px;
  box-shadow: 0px 3px 5px -1px #999;
  background: #00203f;
  height: inherit;
  overflow: visible;
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

export const Item = styled(MenuItem)`
  @media (max-width: 992px) {
    padding: 15px 10px !important;
    a {
      flex-direction: column !important;
    }
  }
  margin: 10px 0 !important;
  padding: 15px 30px !important;
  display: flex;
  align-items: center;
  position: relative;
  width: 100% !important;
  svg,
  span {
    color: #fff;
    margin-right: 10px;
  }
  a {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    width: 100% !important;
    font-weight: 400;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 2.2px;

    .MuiListItemIcon-root {
      min-width: max-content;
    }
  }
  &:last-child {
    position: absolute;
    bottom: 0;
    margin-bottom: 0 !important;
    border-top: 1px solid #6b6b6b;
  }
  ${props =>
    props.active &&
    css`
      background-color: rgba(255, 115, 0, 0.25) !important;
      &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 6px;
        border-radius: 6px;
        background: #ff7300;
      }
    `}
`;

export const Menu = styled(MenuList)`
  height: fill-available;
  outline: none;
  max-height: 100%;
  position: relative;
  margin-top: 10px !important;

  .button-toggler {
    background: red;
    position: absolute;
    left: 97%;
  }
`;
