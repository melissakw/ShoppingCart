import React from 'react';
import Product from './Product';
import HeaderBar from '../HeaderBar/HeaderBar';
import { useSelector, useDispatch } from 'react-redux'; 
import {render, screen, fireEvent} from "@testing-library/react";
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from "react-redux";
import { ConfigureStore } from "../../Redux/ConfigureStore";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


test("renders Product correctly", () => {
	const { store } = ConfigureStore();
	const items = [{"id":1,"title":"Backpack","price":109.95,"description":"some description","category":"clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
  {"id":2,"title":"shirt ","price":22.3,"description":"some description","category":"clothing","image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"}];
  
	const tree = renderer.create(
		<Provider store={store}>
			<BrowserRouter>
				<Product products={items}/>
			</BrowserRouter>
	/ </Provider>
	).toJSON();
  expect(tree).toMatchSnapshot();
});

// test('calls onClick when "Add To Cart" is clicked', () => {
//   const mockedPostToCart = jest.fn();
//   const { getByTestId } = render(<button onClick={mockedPostToCart} />);

// 	fireEvent.click(getByTestId(/add-to-cart/i));
// 	expect(mockedPostToCart).toHaveBeenCalled();
// 	});
