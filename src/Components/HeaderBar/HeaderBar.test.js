import React from 'react';
import HeaderBar from './HeaderBar';
import {render, screen, fireEvent} from "@testing-library/react";
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import Home from '../Home/Home';
import Cart from '../Cart/Cart';
import Error from '../Error/Error';
import { Provider } from "react-redux";
import { ConfigureStore } from "../../Redux/ConfigureStore";
import { MemoryRouter, BrowserRouter, Switch, Route, Link } from 'react-router-dom';


test("renders HeaderBar correctly", () => {
	const { store } = ConfigureStore();

	const tree = renderer.create(
		<Provider store={store}>
			<BrowserRouter>
				<HeaderBar />
			</BrowserRouter>
		</Provider>
	).toJSON();
	expect(tree).toMatchSnapshot();
});

test('navigates Home when "THE SHOP" is clicked', () => {
	const { store } = ConfigureStore();

const {getByText} = render(
	<Provider store={store}>
		<MemoryRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route component={Error} />
			</Switch>
			<HeaderBar />
		</MemoryRouter>
	</Provider>
);

	const goHomeLink = screen.getAllByText(/THE SHOP/i)[0];
	goHomeLink.dispatchEvent(new MouseEvent("click", {bubbles: true}));

	expect(screen.getByText(/products/i)).toBeInTheDocument();
});

test('navigates to Cart when cart icon is clicked', () => {
	const { store } = ConfigureStore();

const {getByText} = render(
	<Provider store={store}>
		<MemoryRouter>
			<Switch>
				<Route exact path="/cart" component={Cart} />
				<Route component={Error} />
			</Switch>
			<HeaderBar />
		</MemoryRouter>
	</Provider>
);

	const goHomeLink = screen.getByTestId(/shopping-icon/i);
	goHomeLink.dispatchEvent(new MouseEvent("click", {bubbles: true}));

	expect(screen.getByText(/shopping cart/i)).toBeInTheDocument();
});
