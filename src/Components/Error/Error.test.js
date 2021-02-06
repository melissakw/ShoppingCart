import React from 'react';
import {render, screen, fireEvent, cleanup} from "@testing-library/react";
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import Cart from '../Cart/Cart';
import Error from './Error';
import Home from '../Home/Home';
import { Provider } from "react-redux";
import { ConfigureStore } from "../../Redux/ConfigureStore";
import { MemoryRouter, BrowserRouter, Switch, Route, Link } from 'react-router-dom';

test("renders Error Page correctly", () => {

	const tree = renderer.create(
		<BrowserRouter>
			<Error />
		</BrowserRouter>
		).toJSON();
	expect(tree).toMatchSnapshot();
});

test('navigates Home when "Go Home" is clicked', () => {

	const { persistor, store } = ConfigureStore();

	const {getByText} = render(
		<Provider store={store}>
			<MemoryRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/cart" component={Cart} />
					<Route component={Error} />
				</Switch>

				<Error />
			</MemoryRouter>
		</Provider>
	)

const goHomeLink = screen.getByText(/go back/i);
goHomeLink.dispatchEvent(new MouseEvent("click", {bubbles: true}));

expect(screen.getByText(/products/i)).toBeInTheDocument();

});
