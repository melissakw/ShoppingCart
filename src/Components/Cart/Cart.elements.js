import styled from "styled-components";

export const Loading = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-height: 100%;
  background-color: black;
  color: black;
  opacity: 0.2;
  z-index: 100;
  text-align: center;
  padding-top: 50vh;
`;

export const Table = styled.table`

    border-spacing: 30px;

  @media only screen and (max-width: 600px) {
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    text-align: left;
    display: block;
  }

  thead tr {
    text-align: left;
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  td {
    /* Makes td act like a "row" */
    border: none;
    position: relative;
    white-space: normal;
    text-align: left;
  }

  td:before {
    width: 45%;
    text-align: left;
    content: attr(data-title);

  }
}
`;

export const CartRow = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;

export const CartProductImage = styled.img`
  width: 150px;
`;

export const RemoveButton = styled.button`
  background-color: white;
  font-size: 14px;
  border: none;
  padding: 0;
  margin-top: 40px;
  overflow: hidden;
  cursor: pointer;
  opacity: 0.6;
  transition: 0.4s;

  &:hover {
    opacity: 1;
  }
`;

export const CartSummary = styled.div`
  margin-top: 60px;
  margin-right: 60px;
  height: 300px;
  padding: 30px;
  border: 2px lightgray solid;
`;

export const ShipTime = styled.p`
  font-size: 14px;
  font-style: italic;
`;

export const CheckoutButton = styled.button`
  background-color: black;
  color: white;
  width: 100%;
  font-size: 20px;
  border: none;
  padding: 10px;
  margin-top: 10px;
  overflow: hidden;
  cursor: pointer;
  opacity: 0.6;
  transition: 0.4s;

  &:hover {
    opacity: 1;
  }
`;
