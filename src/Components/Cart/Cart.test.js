import React from 'react';
import Cart from './Cart';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from "react-redux";
import { ConfigureStore } from "../../Redux/ConfigureStore";
import { BrowserRouter } from 'react-router-dom';

test("renders Cart correctly", () => {
	const { store } = ConfigureStore();
	const tree = renderer.create(
		<Provider store={store}>
			<BrowserRouter>
				<Cart />
			</BrowserRouter>
		</Provider>
	).toJSON();
	expect(tree).toMatchSnapshot();
});
