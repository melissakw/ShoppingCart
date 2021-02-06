import React from 'react';
import Home from './Home'
import '../../test.json';
import axiosMock from 'axios';
import renderer from 'react-test-renderer';
import { render,cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from "react-redux";
import { ConfigureStore } from "../../Redux/ConfigureStore";
import { BrowserRouter } from 'react-router-dom';

beforeEach(() => axiosMock.get.mockResolvedValueOnce({data: require('../../test.json')})
);
afterEach(cleanup);

test("renders Home correctly", () => {

	const { store } = ConfigureStore();
	const tree = renderer.create(
		<Provider store={store}>
			<BrowserRouter>
				<Home />
			</BrowserRouter>
		</Provider>
	).toJSON();

	expect(tree).toMatchSnapshot();
});

test("sucessfully fetches and renders data", async() => {
	
	const { store } = ConfigureStore();
	const {getByText} = render(
		<Provider store={store}>
			<BrowserRouter>
				<Home />
			</BrowserRouter>
		</Provider>
	);
	
	expect(await screen.findByText(/SanDisk SS/i)).toBeInTheDocument();

});
