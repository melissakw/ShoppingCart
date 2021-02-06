import React from 'react';
import {render, screen} from "@testing-library/react";
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import EmptyCart from './EmptyCart';
import Home from '../Home/Home';
import { Provider } from "react-redux";
import { ConfigureStore } from "../../Redux/ConfigureStore";
import { MemoryRouter, BrowserRouter, Switch, Route, Link } from 'react-router-dom';

test("renders EmptyCart page correctly", () => {
	const tree = renderer.create(
		<BrowserRouter>
			<EmptyCart />
		</BrowserRouter>
		).toJSON();
	expect(tree).toMatchSnapshot();
});

test('navigates Home when "Find something you love to fill it up" is clicked', () => {
	const { store } = ConfigureStore();

	const {getByText} = render(
		<Provider store={store}>
			<MemoryRouter>
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>

				<EmptyCart />
			</MemoryRouter>
		</Provider>
	)

const goHomeLink = screen.getByText(/Find something you love to fill it up/i);
goHomeLink.dispatchEvent(new MouseEvent("click", {bubbles: true}));

expect(screen.getByText(/products/i)).toBeInTheDocument();

});
