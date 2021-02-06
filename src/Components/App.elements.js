import styled from "styled-components";
import { Link } from "react-router-dom";

export const AppContainer = styled.div`
  height: 100;
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Header = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 2px black solid;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const CartIcon = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const NumberOfItemsInCart = styled.div`
  position: relative;
  display: inline-block;
  top: -15px;
  left: -10px;
  border-radius: 50%;
  padding: 3px;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  width: 15px;
  height: 15px;
  line-height: 15px;
  font-size: 14px;
  font-weight: bold;
  background-color: darkorange;
  color: white;
`;

export const LoadingContainer = styled.div`
  text-align: center;
  padding: 40px;
`;
